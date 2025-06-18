package valkey

import (
	"context"
	"os"
	"sync"
	"testing"
	"time"

	"github.com/stretchr/testify/require"

	testredis "github.com/gofiber/storage/testhelpers/redis"
)

const (
	// valkeyImage is the default image used for running Valkey in tests.
	valkeyImage       = "valkey/valkey:8"
	valkeyImageEnvVar = "TEST_VALKEY_IMAGE"
)

var (
	// benchmarkStore is a singleton store used for all benchmarks
	benchmarkStore *Storage
	// benchmarkStoreOnce ensures the store is initialized only once
	benchmarkStoreOnce sync.Once
)

// initBenchmarkStore initializes the singleton store for benchmarks.
// There is no need to call Close() on the returned store, it will be reused
// for all benchmarks. Testcontainers will reuse the container if it already exists
// and will terminate it at the end of a test session.
func initBenchmarkStore(b *testing.B) {
	benchmarkStoreOnce.Do(func() {
		benchmarkStore = newTestStore(b, testredis.WithReuse("valkey-benchmark"))
	})
}

// newConfigFromContainer creates a Redis configuration using Testcontainers.
// It configures the container based on the provided options and returns a Config
// that can be used to connect to the container.
// The container is cleaned up when the test completes.
func newConfigFromContainer(t testing.TB, opts ...testredis.Option) Config {
	t.Helper()

	img := valkeyImage
	if imgFromEnv := os.Getenv(valkeyImageEnvVar); imgFromEnv != "" {
		img = imgFromEnv
	}

	redisCtr := testredis.Start(t, img, opts...)

	cfg := Config{
		Reset:       true,
		TLSConfig:   redisCtr.TLSConfig,
		InitAddress: redisCtr.Addrs,
		URL:         redisCtr.URL,
	}

	return cfg
}

// newTestStore creates a new Redis storage instance backed by Testcontainers.
// It configures the container based on the provided options and returns a Storage
// instance connected to the container. The caller is responsible for calling
// Close() on the returned Storage when done.
func newTestStore(t testing.TB, opts ...testredis.Option) *Storage {
	return New(newConfigFromContainer(t, opts...))
}

func Test_Valkey_Set(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)
}

func Test_Valkey_SetWithContext(t *testing.T) {
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

func Test_Valkey_Set_Override(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	err = testStore.Set(key, val, 0)
	require.NoError(t, err)
}

func Test_Valkey_Get(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)
}

func Test_Valkey_GetWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	result, err := testStore.GetWithContext(ctx, key)
	require.ErrorIs(t, err, context.Canceled)
	require.Zero(t, len(result))
}

func Test_Valkey_Expiration(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
		exp = 1 * time.Second
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set(key, val, exp)
	require.NoError(t, err)

	time.Sleep(1100 * time.Millisecond)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_Valkey_Get_NotExist(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	result, err := testStore.Get("notexist")
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_Valkey_Delete(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	err = testStore.Delete(key)
	require.NoError(t, err)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_Valkey_DeleteWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)
	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err = testStore.DeleteWithContext(ctx, key)
	require.ErrorIs(t, err, context.Canceled)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)
}

func Test_Valkey_Reset(t *testing.T) {
	val := []byte("doe")

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set("john1", val, 0)
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

func Test_Valkey_ResetWithContext(t *testing.T) {
	val := []byte("doe")

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set("john1", val, 0)
	require.NoError(t, err)

	err = testStore.Set("john2", val, 0)
	require.NoError(t, err)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err = testStore.ResetWithContext(ctx)
	require.ErrorIs(t, err, context.Canceled)

	result, err := testStore.Get("john1")
	require.NoError(t, err)
	require.Equal(t, val, result)

	result, err = testStore.Get("john2")
	require.NoError(t, err)
	require.Equal(t, val, result)
}

func Test_Valkey_Close(t *testing.T) {
	testStore := newTestStore(t)
	require.Nil(t, testStore.Close())
}

func Test_Valkey_Conn(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	require.True(t, testStore.Conn() != nil)
}

func Test_Valkey_WithTLS(t *testing.T) {
	testFn := func(t *testing.T, secureURL bool, mtlsDisabled bool) {
		t.Helper()

		testStore := newTestStore(t, testredis.WithTLS(secureURL, mtlsDisabled))
		defer testStore.Close()

		var (
			key = "clark"
			val = []byte("kent")
		)

		err := testStore.Set(key, val, 0)
		require.NoError(t, err)

		result, err := testStore.Get(key)
		require.NoError(t, err)
		require.Equal(t, val, result)

		err = testStore.Delete(key)
		require.NoError(t, err)
	}

	t.Run("insecure-url/mtls-disabled", func(t *testing.T) {
		testFn(t, false, true)
	})

	t.Run("insecure-url/mtls-enabled", func(t *testing.T) {
		testFn(t, false, false)
	})

	t.Run("secure-url/mtls-disabled", func(t *testing.T) {
		testFn(t, true, true)
	})

	t.Run("secure-url/mtls-enabled", func(t *testing.T) {
		testFn(t, true, false)
	})
}

func Test_Valkey_With_HostPort(t *testing.T) {
	testStore := newTestStore(t, testredis.WithHostPort())
	defer testStore.Close()

	var (
		key = "bruce"
		val = []byte("wayne")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)

	err = testStore.Delete(key)
	require.NoError(t, err)
	require.Nil(t, testStore.Close())
}

func Test_Valkey_With_URL(t *testing.T) {
	testStore := newTestStore(t, testredis.WithAddress(), testredis.WithURL(false))
	defer testStore.Close()

	var (
		key = "bruce"
		val = []byte("wayne")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)

	err = testStore.Delete(key)
	require.NoError(t, err)
	require.Nil(t, testStore.Close())
}

func Test_Valkey_With_TLS_URL(t *testing.T) {
	testStore := newTestStore(t, testredis.WithTLS(true, false), testredis.WithAddress(), testredis.WithURL(true))
	defer testStore.Close()

	var (
		key = "bruce"
		val = []byte("wayne")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)

	err = testStore.Delete(key)
	require.NoError(t, err)
	require.Nil(t, testStore.Close())
}

func Test_Valkey_Cluster(t *testing.T) {
	t.Skip("TODO: Replace with containerized cluster when testcontainers-go Valkey module supports clustering")

	store := New(Config{
		InitAddress: []string{
			"localhost:7000",
			"localhost:7001",
			"localhost:7002",
			"localhost:7003",
			"localhost:7004",
			"localhost:7005",
		},
	})

	var (
		key = "bruce"
		val = []byte("wayne")
	)

	err := store.Set(key, val, 0)
	require.NoError(t, err)

	result, err := store.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)

	err = store.Delete(key)
	require.NoError(t, err)
	require.Nil(t, store.Close())
}

func Benchmark_Valkey_Set(b *testing.B) {
	initBenchmarkStore(b)

	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		err = benchmarkStore.Set("john", []byte("doe"), 0)
	}

	require.NoError(b, err)
}

func Benchmark_Valkey_Get(b *testing.B) {
	initBenchmarkStore(b)

	err := benchmarkStore.Set("john", []byte("doe"), 0)
	require.NoError(b, err)

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_, err = benchmarkStore.Get("john")
	}

	require.NoError(b, err)
}

func Benchmark_Valkey_SetAndDelete(b *testing.B) {
	initBenchmarkStore(b)

	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		_ = benchmarkStore.Set("john", []byte("doe"), 0)
		err = benchmarkStore.Delete("john")
	}

	require.NoError(b, err)
}
