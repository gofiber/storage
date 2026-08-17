package aerospike

import (
	"context"
	"os"
	"strings"
	"testing"
	"time"

	"github.com/aerospike/aerospike-client-go/v8"
	"github.com/stretchr/testify/require"
	"github.com/testcontainers/testcontainers-go"
	tcexec "github.com/testcontainers/testcontainers-go/exec"
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
	ctr, err := tcaerospike.Run(ctx, image,
		testcontainers.WithStartupCommand(
			testcontainers.NewRawCommand([]string{
				"asinfo", "-v", "set-config:context=namespace;id=" + aerospikeNamespace + ";nsup-period=120",
			}, tcexec.Multiplexed()),
		),
	)
	testcontainers.CleanupContainer(t, ctr)
	require.NoError(t, err)

	return ctr
}

// newTestHostPort starts a container and returns its mapped Aerospike address.
func newTestHostPort(t testing.TB) (string, int) {
	t.Helper()

	ctx := context.Background()
	c := startAerospikeContainer(t, ctx)

	host, err := c.Host(ctx)
	require.NoError(t, err)

	port, err := c.MappedPort(ctx, aerospikePort)
	require.NoError(t, err)

	return host, int(port.Num())
}

// newTestStore creates a client connected to the test container
func newTestStore(t testing.TB) *Storage {
	t.Helper()

	host, port := newTestHostPort(t)

	return New(Config{
		Hosts:     []*aerospike.Host{aerospike.NewHost(host, port)},
		Reset:     true,
		Namespace: aerospikeNamespace,
	})
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

	schemaBefore := testStore.GetSchemaInfo()
	require.NotNil(t, schemaBefore)

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

	// The bookkeeping record lives in its own set, which the scan Reset runs does not touch.
	schemaKey, err := aerospike.NewKey(testStore.namespace, testStore.schemaSetName, schemaInfoKey)
	require.NoError(t, err)
	schemaRecord, err := testStore.client.Get(nil, schemaKey, "version")
	require.NoError(t, err)
	require.NotNil(t, schemaRecord)
	require.Equal(t, schemaBefore.Version, schemaRecord.Bins["version"].(int))
}

// A SetName carrying the schema suffix is refused: it would make one storage's data another's bookkeeping set.
func Test_AeroSpikeDB_Rejects_Reserved_SetName(t *testing.T) {
	require.Panics(t, func() {
		New(Config{
			Hosts:     []*aerospike.Host{aerospike.NewHost("127.0.0.1", 3000)},
			Namespace: "test",
			SetName:   "orders" + schemaSetSuffix,
		})
	})
}

// A set name the server accepts must still yield a bookkeeping set it accepts.
func Test_AeroSpikeDB_SchemaSetName_Bounded(t *testing.T) {
	short := strings.Repeat("a", 40)
	require.Equal(t, short+schemaSetSuffix, schemaSetName(short))

	for _, n := range []int{maxSetNameLen - len(schemaSetSuffix), maxSetNameLen - len(schemaSetSuffix) + 1, maxSetNameLen} {
		name := strings.Repeat("b", n)
		derived := schemaSetName(name)

		require.LessOrEqual(t, len(derived), maxSetNameLen)
		require.True(t, strings.HasSuffix(derived, schemaSetSuffix))
	}

	first := strings.Repeat("c", maxSetNameLen-1) + "1"
	second := strings.Repeat("c", maxSetNameLen-1) + "2"
	require.NotEqual(t, schemaSetName(first), schemaSetName(second))
}

// The bookkeeping name is an ordinary key for callers: readable, and cleared by Reset like any other.
func Test_AeroSpikeDB_SchemaInfoKey_Is_Not_Reserved(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	require.NoError(t, testStore.Set(schemaInfoKey, []byte("user value"), 0))

	val, err := testStore.Get(schemaInfoKey)
	require.NoError(t, err)
	require.Equal(t, []byte("user value"), val)

	require.NoError(t, testStore.Reset())

	val, err = testStore.Get(schemaInfoKey)
	require.NoError(t, err)
	require.Nil(t, val)

	require.NotNil(t, testStore.GetSchemaInfo())
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

func Test_Aerospike_WithContext_Canceled(t *testing.T) {
	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	// No server needed: an already cancelled context is rejected before the storage is touched.
	testStore := &Storage{}

	require.ErrorIs(t, testStore.SetWithContext(ctx, "john", []byte("doe"), 0), context.Canceled)

	_, err := testStore.GetWithContext(ctx, "john")
	require.ErrorIs(t, err, context.Canceled)

	require.ErrorIs(t, testStore.DeleteWithContext(ctx, "john"), context.Canceled)
	require.ErrorIs(t, testStore.ResetWithContext(ctx), context.Canceled)
}

func Test_AeroSpikeDB_NewFromConnection(t *testing.T) {
	host, port := newTestHostPort(t)

	client, cerr := aerospike.NewClient(host, port)
	require.NoError(t, cerr)
	defer client.Close()

	store := NewFromConnection(client, Config{
		Namespace: aerospikeNamespace,
		SetName:   "existing_set",
		Reset:     true,
	})

	require.NoError(t, store.Set("john", []byte("doe"), 0))

	result, err := store.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), result)

	// The client is the caller's, so closing the storage must leave it connected.
	require.NoError(t, store.Close())
	require.True(t, client.IsConnected())
}

func Test_AeroSpikeDB_NewFromConnection_Nil(t *testing.T) {
	require.Panics(t, func() {
		NewFromConnection(nil)
	})
}
