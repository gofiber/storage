package etcd

import (
	"context"
	"os"
	"sync"
	"testing"
	"time"

	"github.com/stretchr/testify/require"

	"github.com/testcontainers/testcontainers-go"
	"github.com/testcontainers/testcontainers-go/modules/etcd"
)

const (
	// etcdImage is the default image used for running etcd in tests.
	etcdImage              = "gcr.io/etcd-development/etcd:v3.5.21"
	etcdImageEnvVar string = "TEST_ETCD_IMAGE"
)

func newTestStore(t testing.TB) *Storage {
	t.Helper()

	img := etcdImage
	if imgFromEnv := os.Getenv(etcdImageEnvVar); imgFromEnv != "" {
		img = imgFromEnv
	}

	ctx := context.Background()

	// create a 1-node cluster
	c, err := etcd.Run(ctx, img)

	// for benchmarks, we do not want to cleanup the container
	switch t.(type) {
	case *testing.B:
		// do not cleanup the container for benchmarks
	default:
		testcontainers.CleanupContainer(t, c)
	}

	require.NoError(t, err)

	hostPort, err := c.ClientEndpoint(ctx)
	require.NoError(t, err)

	return New(Config{
		Endpoints: []string{hostPort},
	})
}

func TestSetEtcd_ShouldReturnNoError(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)
}

func TestGetEtcd_ShouldReturnNil_WhenDocumentNotFound(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	val, err := testStore.Get("not_found_key")

	require.NoError(t, err)
	require.Zero(t, len(val))
}

func TestSetAndGet_GetShouldReturn_SettedValueWithoutError(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set("test", []byte("fiber_test_value"), 0)
	require.NoError(t, err)

	val, err := testStore.Get("test")

	require.NoError(t, err)
	require.Equal(t, val, []byte("fiber_test_value"))
}

func TestSetWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err := testStore.SetWithContext(ctx, key, val, 0)
	require.ErrorIs(t, err, context.Canceled)
}

func TestSetAndGetWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	result, err := testStore.GetWithContext(ctx, key)
	require.ErrorIs(t, err, context.Canceled)
	require.Nil(t, result)
}

func TestSetAndGet_GetShouldReturnNil_WhenTTLExpired(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set("test", []byte("fiber_test_value"), 3*time.Second)
	require.NoError(t, err)

	time.Sleep(6 * time.Second)

	val, err := testStore.Get("test")

	require.NoError(t, err)
	require.Zero(t, len(val))
}

func TestSetAndDelete_DeleteShouldReturn_NoError(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set("test", []byte("fiber_test_value"), 0)
	require.NoError(t, err)

	err = testStore.Delete("test")
	require.NoError(t, err)

	_, err = testStore.Get("test")
	require.NoError(t, err)
}

func TestDeleteWithContext(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set("test", []byte("fiber_test_value"), 0)
	require.NoError(t, err)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err = testStore.DeleteWithContext(ctx, "test")
	require.ErrorIs(t, err, context.Canceled)

	val, err := testStore.Get("test")
	require.NoError(t, err)
	require.Equal(t, val, []byte("fiber_test_value"))
}

func TestSetAndReset_ResetShouldReturn_NoError(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set("test", []byte("fiber_test_value"), 0)
	require.NoError(t, err)

	err = testStore.Reset()
	require.NoError(t, err)

	_, err = testStore.Get("test")
	require.NoError(t, err)
}

func TestResetWithContext(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set("test", []byte("fiber_test_value"), 0)
	require.NoError(t, err)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err = testStore.ResetWithContext(ctx)
	require.ErrorIs(t, err, context.Canceled)

	val, err := testStore.Get("test")
	require.NoError(t, err)
	require.Equal(t, val, []byte("fiber_test_value"))
}

func TestClose_CloseShouldReturn_NoError(t *testing.T) {
	testStore := newTestStore(t)
	err := testStore.Close()
	require.NoError(t, err)
}

func TestGetConn_ReturnsNotNill(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	require.True(t, testStore.Conn() != nil)
}

//
// Benchmarking
//
// Please note that this is not thread-safe:
// Each benchmark reuses the same etcd store instance,
// setting and deleting keys between benchmarks.
// If you add more benchmarks, make sure to delete the key after the benchmark.

var (
	benchmarkStore *Storage
	benchmarkOnce  sync.Once
)

func getBenchmarkStore(b *testing.B) *Storage {
	benchmarkOnce.Do(func() {
		benchmarkStore = newTestStore(b)
	})

	return benchmarkStore
}

func Benchmark_Etcd_Set(b *testing.B) {
	key := "john1"
	testStore := getBenchmarkStore(b)

	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		err = testStore.Set(key, []byte("doe"), 0)
	}

	require.NoError(b, err)

	// Clean up the key after benchmark
	b.StopTimer()
	_ = testStore.Delete(key)
	b.StartTimer()
}

func Benchmark_Etcd_Get(b *testing.B) {
	key := "john2"
	testStore := getBenchmarkStore(b)

	err := testStore.Set(key, []byte("doe"), 0)
	require.NoError(b, err)

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_, err = testStore.Get(key)
	}

	require.NoError(b, err)

	// Clean up after benchmark
	b.StopTimer()
	_ = testStore.Delete(key)
	b.StartTimer()
}

func Benchmark_Etcd_SetAndDelete(b *testing.B) {
	key := "john3"
	testStore := getBenchmarkStore(b)

	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		_ = testStore.Set(key, []byte("doe"), 0)
		err = testStore.Delete(key)
	}

	require.NoError(b, err)

	// Clean up after benchmark
	b.StopTimer()
	_ = testStore.Delete(key)
	b.StartTimer()
}
