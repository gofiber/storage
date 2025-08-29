package aerospike

import (
	"context"
	"os"
	"testing"
	"time"

	"github.com/aerospike/aerospike-client-go/v8"
	"github.com/stretchr/testify/require"
	"github.com/testcontainers/testcontainers-go"
	tcaerospike "github.com/testcontainers/testcontainers-go/modules/aerospike"
)

const (
	// aerospikeImage is the default image used for running Aerospike in tests.
	aerospikeImage              = "aerospike/aerospike-server:latest"
	aerospikeImageEnvVar string = "TEST_AEROSPIKE_IMAGE"
	aerospikePort               = "3000/tcp"
	fabricPort                  = "3001/tcp"
	heartbeatPort               = "3002/tcp"
	infoPort                    = "3003/tcp"
	aerospikeReadyLog           = "migrations: complete"
	aerospikeNamespace          = "test"
)

// startAerospikeContainer starts an Aerospike container for testing
func startAerospikeContainer(t testing.TB, ctx context.Context) testcontainers.Container {
	t.Helper()

	// Get custom image from env if specified
	image := aerospikeImage
	if envImage := os.Getenv(aerospikeImageEnvVar); envImage != "" {
		image = envImage
	}

	// Start container
	ctr, err := tcaerospike.Run(ctx, image)
	testcontainers.CleanupContainer(t, ctr)
	require.NoError(t, err)

	return ctr
}

// newTestStore creates a client connected to the test container
func newTestStore(t testing.TB) *Storage {
	t.Helper()

	c := startAerospikeContainer(t, context.Background())

	// Extract host and port
	host, err := c.Host(context.TODO())
	require.NoError(t, err)

	port, err := c.MappedPort(context.TODO(), aerospikePort)
	require.NoError(t, err)

	return New(Config{
		Hosts:     []*aerospike.Host{aerospike.NewHost(host, port.Int())},
		Reset:     true,
		Namespace: aerospikeNamespace,
	})
}

func Test_AeroSpikeDB_Conn(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	require.NotNil(t, testStore.Conn())
}

// Test_AeroSpikeDB_Get tests the Get method
func Test_AeroSpikeDB_Get(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	// Set a value
	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	// Get the value
	retrievedVal, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, retrievedVal)
}

// Test_AeroSpikeDB_Delete tests the Delete method
func Test_AeroSpikeDB_Delete(t *testing.T) {

	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	// Set a value
	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	// Delete the value
	err = testStore.Delete(key)
	require.NoError(t, err)

	// Try to get the deleted value
	retrievedVal, err := testStore.Get(key)
	require.NoError(t, err)
	require.Nil(t, retrievedVal)
}

// Test_AeroSpikeDB_SetWithExpiration tests the Set method with expiration
func Test_AeroSpikeDB_SetWithExpiration(t *testing.T) {
	var (
		key = "temp"
		val = []byte("value")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	// Set a value with 1 second expiration
	err := testStore.Set(key, val, 1*time.Second)
	require.NoError(t, err)

	// Verify the value exists initially
	retrievedVal, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, retrievedVal)

	// Wait for expiration
	time.Sleep(2 * time.Second)

	// Verify the value is gone
	retrievedVal, err = testStore.Get(key)
	require.NoError(t, err)
	require.Nil(t, retrievedVal)
}

// Test_AeroSpikeDB_Reset tests the Reset method
func Test_AeroSpikeDB_Reset(t *testing.T) {

	var (
		key1 = "john"
		val1 = []byte("doe")
		key2 = "jane"
		val2 = []byte("smith")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	// Set multiple values
	err := testStore.Set(key1, val1, 0)
	require.NoError(t, err)
	err = testStore.Set(key2, val2, 0)
	require.NoError(t, err)

	// Reset the store
	err = testStore.Reset()
	require.NoError(t, err)

	// Ensure keys are deleted
	retrievedVal1, err := testStore.Get(key1)
	require.NoError(t, err)
	require.Nil(t, retrievedVal1)

	retrievedVal2, err := testStore.Get(key2)
	require.NoError(t, err)
	require.Nil(t, retrievedVal2)
}

// Test_AeroSpikeDB_GetSchemaInfo tests the GetSchemaInfo method
func Test_AeroSpikeDB_GetSchemaInfo(t *testing.T) {

	testStore := newTestStore(t)
	defer testStore.Close()

	// Get schema info
	schemaInfo := testStore.GetSchemaInfo()
	require.NotNil(t, schemaInfo)
	require.GreaterOrEqual(t, schemaInfo.Version, 1)
}

func Benchmark_AeroSpikeDB_Set(b *testing.B) {
	b.ReportAllocs()
	b.ResetTimer()

	testStore := newTestStore(b)
	defer testStore.Close()

	var err error
	for i := 0; i < b.N; i++ {
		err = testStore.Set("john", []byte("doe"), 0)
	}

	require.NoError(b, err)
}

func Benchmark_AeroSpikeDB_Get(b *testing.B) {
	testStore := newTestStore(b)
	defer testStore.Close()

	err := testStore.Set("john", []byte("doe"), 0)
	require.NoError(b, err)

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_, err = testStore.Get("john")
	}

	require.NoError(b, err)
}

func Benchmark_AeroSpikeDB_SetAndDelete(b *testing.B) {
	b.ReportAllocs()
	b.ResetTimer()

	testStore := newTestStore(b)
	defer testStore.Close()

	var err error
	for i := 0; i < b.N; i++ {
		_ = testStore.Set("john", []byte("doe"), 0)
		err = testStore.Delete("john")
	}

	require.NoError(b, err)
}
