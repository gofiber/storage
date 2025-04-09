package scylladb

import (
	"context"
	"os"
	"testing"
	"time"

	"github.com/stretchr/testify/require"

	"github.com/testcontainers/testcontainers-go"
	"github.com/testcontainers/testcontainers-go/modules/scylladb"
)

const (
	// scyllaDBImage is the default image used for running ScyllaDB in tests.
	scyllaDBImage  = "scylladb/scylla:6.2"
	scyllaDBEnvVar = "TEST_SCYLLADB_IMAGE"
)

func newTestStore(t testing.TB) (*Storage, error) {
	t.Helper()

	img := scyllaDBImage
	if imgFromEnv := os.Getenv(scyllaDBEnvVar); imgFromEnv != "" {
		img = imgFromEnv
	}

	ctx := context.Background()

	c, err := scylladb.Run(ctx, img)
	testcontainers.CleanupContainer(t, c)
	if err != nil {
		return nil, err
	}

	connectionHost, err := c.NonShardAwareConnectionHost(ctx)
	if err != nil {
		return nil, err
	}

	scyllaPort, err := c.MappedPort(ctx, "9042/tcp")
	if err != nil {
		return nil, err
	}

	return New(Config{
		Hosts: []string{connectionHost},
		Port:  scyllaPort.Int(),
		Reset: true,
		// Disable initial host lookup in tests.
		// See https://github.com/apache/cassandra-gocql-driver/issues/1020#issuecomment-362494859
		DisableInitialHostLookup: true,
	}), nil
}

func Test_Scylla_Set(t *testing.T) {
	// Create a new instance of the Storage
	var (
		key   = "john"
		value = []byte("doe")
	)

	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	err = testStore.Set(key, value, 0)
	require.NoError(t, err)
}

func Test_Scylla_Set_Override_Get(t *testing.T) {
	var (
		key         = "john"
		valInitial  = []byte("doe")
		valOverride = []byte("doe2")
	)

	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	err = testStore.Set(key, valInitial, 0)
	require.NoError(t, err)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, valInitial, result)

	err = testStore.Set(key, valOverride, 0)
	require.NoError(t, err)

	result, err = testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, valOverride, result)
}

func Test_Scylla_Get(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	err = testStore.Set(key, val, 0)
	require.NoError(t, err)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)
}

func Test_Scylla_Set_Expiration_Get(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
		exp = 1 * time.Second
	)

	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	err = testStore.Set(key, val, exp)
	require.NoError(t, err)

	time.Sleep(1001 * time.Millisecond)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Empty(t, result)
}

func Test_Scylla_Get_NotExist(t *testing.T) {
	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	result, err := testStore.Get("not-exist")
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_Scylla_Delete(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	err = testStore.Set(key, val, 0)
	require.NoError(t, err)

	err = testStore.Delete(key)
	require.NoError(t, err)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_Scylla_Reset(t *testing.T) {
	var val = []byte("doe")

	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	err = testStore.Set("john1", val, 0)
	require.NoError(t, err)

	err = testStore.Set("john2", val, 0)
	require.NoError(t, err)

	err = testStore.Reset()
	require.NoError(t, err)

	result, err := testStore.Get("john1")
	require.NoError(t, err)
	require.Zero(t, len(result))

	result, err = testStore.Get("john2")
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_Scylla_Close(t *testing.T) {
	testStore, err := newTestStore(t)
	require.NoError(t, err)
	require.Nil(t, testStore.Close())
}

func Test_Scylla_Conn(t *testing.T) {
	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	require.True(t, testStore.Conn() != nil)
}

func Benchmark_Scylla_Set(b *testing.B) {
	testStore, err := newTestStore(b)
	require.NoError(b, err)
	defer testStore.Close()

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		err = testStore.Set("john", []byte("doe"), 0)
	}

	require.NoError(b, err)
}

func Benchmark_Scylla_Get(b *testing.B) {
	testStore, err := newTestStore(b)
	require.NoError(b, err)
	defer testStore.Close()

	err = testStore.Set("john", []byte("doe"), 0)
	require.NoError(b, err)

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_, err = testStore.Get("john")
	}

	require.NoError(b, err)
}

func Benchmark_Scylla_SetAndDelete(b *testing.B) {
	testStore, err := newTestStore(b)
	require.NoError(b, err)
	defer testStore.Close()

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_ = testStore.Set("john", []byte("doe"), 0)
		err = testStore.Delete("john")
	}

	require.NoError(b, err)
}
