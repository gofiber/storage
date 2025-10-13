package redis

import (
	"context"
	"os"
	"testing"
	"time"

	"github.com/stretchr/testify/require"

	testredis "github.com/gofiber/storage/testhelpers/redis"
)

const (
	// redisImage is the default image used for running Redis in tests.
	redisImage       = "docker.io/redis:7"
	redisImageEnvVar = "TEST_REDIS_IMAGE"
)

// newConfigFromContainer creates a Redis configuration using Testcontainers.
// It configures the container based on the provided options and returns a Config
// that can be used to connect to the container.
// The container is cleaned up when the test completes.
func newConfigFromContainer(t testing.TB, opts ...testredis.Option) Config {
	t.Helper()

	img := redisImage
	if imgFromEnv := os.Getenv(redisImageEnvVar); imgFromEnv != "" {
		img = imgFromEnv
	}

	redisCtr := testredis.Start(t, img, opts...)

	cfg := Config{
		Reset:     true,
		TLSConfig: redisCtr.TLSConfig,
		Host:      redisCtr.Host,
		Port:      redisCtr.Port,
		Addrs:     redisCtr.Addrs,
		URL:       redisCtr.URL,
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

func Test_Redis_Set(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)
}

func Test_Redis_SetWithContext(t *testing.T) {
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

func Test_Redis_Set_Override(t *testing.T) {
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

	keys, err := testStore.Keys()
	require.NoError(t, err)
	require.Len(t, keys, 1)
}

func Test_Redis_Get(t *testing.T) {
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

	keys, err := testStore.Keys()
	require.NoError(t, err)
	require.Len(t, keys, 1)
}

func Test_Redis_GetWithContext(t *testing.T) {
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

func Test_Redis_Expiration(t *testing.T) {
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

	keys, err := testStore.Keys()
	require.NoError(t, err)
	require.Nil(t, keys)
}

func Test_Redis_Get_NotExist(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	result, err := testStore.Get("notexist")
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_Redis_Delete(t *testing.T) {
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

	keys, err := testStore.Keys()
	require.NoError(t, err)
	require.Nil(t, keys)
}

func Test_Redis_New_DisableStartupCheck(t *testing.T) {
	require.NotPanics(t, func() {
		store := New(Config{
			Host:                "127.0.0.1",
			Port:                6390,
			Addrs:               []string{"127.0.0.1:6390"},
			DisableStartupCheck: true,
		})
		require.NotNil(t, store)
		_ = store.Close()
	})
}

func Test_Redis_DeleteWithContext(t *testing.T) {
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

func Test_Redis_Reset(t *testing.T) {
	val := []byte("doe")

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set("john1", val, 0)
	require.NoError(t, err)

	err = testStore.Set("john2", val, 0)
	require.NoError(t, err)

	keys, err := testStore.Keys()
	require.NoError(t, err)
	require.Len(t, keys, 2)

	err = testStore.Reset()
	require.NoError(t, err)

	result, err := testStore.Get("john1")
	require.NoError(t, err)
	require.Zero(t, len(result))

	result, err = testStore.Get("john2")
	require.NoError(t, err)
	require.Zero(t, len(result))

	keys, err = testStore.Keys()
	require.NoError(t, err)
	require.Nil(t, keys)
}

func Test_Redis_ResetWithContext(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	val := []byte("doe")

	err := testStore.Set("john1", val, 0)
	require.NoError(t, err)

	err = testStore.Set("john2", val, 0)
	require.NoError(t, err)

	keys, err := testStore.Keys()
	require.NoError(t, err)
	require.Len(t, keys, 2)

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

func Test_Redis_Close(t *testing.T) {
	testStore := newTestStore(t)
	require.NoError(t, testStore.Close())
}

func Test_Redis_Conn(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	require.True(t, testStore.Conn() != nil)
}

func Test_Redis_Initialize_WithHostPort(t *testing.T) {
	var (
		key = "clark"
		val = []byte("kent")
	)

	testStore := newTestStore(t, testredis.WithHostPort())
	defer testStore.Close()

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)

	err = testStore.Delete(key)
	require.NoError(t, err)
}

func Test_Redis_Initialize_WithURL_TLS_Verify(t *testing.T) {
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

		keys, err := testStore.Keys()
		require.NoError(t, err)
		require.Nil(t, keys)
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

func Test_Redis_Universal_Addrs(t *testing.T) {
	// This should failover and create a Single Node connection.
	testStoreUniversal := newTestStore(t, testredis.WithAddress())
	defer testStoreUniversal.Close()
	var (
		key = "bruce"
		val = []byte("wayne")
	)

	err := testStoreUniversal.Set(key, val, 0)
	require.NoError(t, err)

	result, err := testStoreUniversal.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)

	err = testStoreUniversal.Delete(key)
	require.NoError(t, err)

	keys, err := testStoreUniversal.Keys()
	require.NoError(t, err)
	require.Nil(t, keys)
}

func Test_Redis_Universal_With_URL_Undefined(t *testing.T) {
	// This should failover to creating a regular *redis.Client
	// The URL should get ignored since it's empty
	// the withURL option goes last to include it in the config
	testStoreUniversal := newTestStore(t, testredis.WithAddress(), testredis.WithURL(false))
	defer testStoreUniversal.Close()
	var (
		key = "bruce"
		val = []byte("wayne")
	)

	err := testStoreUniversal.Set(key, val, 0)
	require.NoError(t, err)

	result, err := testStoreUniversal.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)

	err = testStoreUniversal.Delete(key)
	require.NoError(t, err)

	keys, err := testStoreUniversal.Keys()
	require.NoError(t, err)
	require.Nil(t, keys)
}

func Test_Redis_Universal_With_URL_Defined(t *testing.T) {
	// This should failover to creating a regular *redis.Client
	// The Addrs field should get ignored since URL is defined
	testStoreUniversal := newTestStore(t, testredis.WithAddress(), testredis.WithURL(true))
	defer testStoreUniversal.Close()

	var (
		key = "bruce"
		val = []byte("wayne")
	)

	err := testStoreUniversal.Set(key, val, 0)
	require.NoError(t, err)

	result, err := testStoreUniversal.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)

	err = testStoreUniversal.Delete(key)
	require.NoError(t, err)

	keys, err := testStoreUniversal.Keys()
	require.NoError(t, err)
	require.Nil(t, keys)
}

func Test_Redis_Universal_With_HostPort(t *testing.T) {
	// This should failover to creating a regular *redis.Client
	// The Host and Port should get ignored since Addrs is defined
	testStoreUniversal := newTestStore(t, testredis.WithAddress(), testredis.WithHostPort(), testredis.WithURL(false))
	defer testStoreUniversal.Close()
	var (
		key = "bruce"
		val = []byte("wayne")
	)

	err := testStoreUniversal.Set(key, val, 0)
	require.NoError(t, err)

	result, err := testStoreUniversal.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)

	err = testStoreUniversal.Delete(key)
	require.NoError(t, err)

	keys, err := testStoreUniversal.Keys()
	require.NoError(t, err)
	require.Nil(t, keys)
}

func Test_Redis_Universal_With_HostPort_And_URL(t *testing.T) {
	// This should failover to creating a regular *redis.Client
	// The Host and Port should get ignored since Addrs is defined
	testStoreUniversal := newTestStore(t, testredis.WithAddress(), testredis.WithHostPort(), testredis.WithURL(true))
	defer testStoreUniversal.Close()

	var (
		key = "bruce"
		val = []byte("wayne")
	)

	err := testStoreUniversal.Set(key, val, 0)
	require.NoError(t, err)

	result, err := testStoreUniversal.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)

	err = testStoreUniversal.Delete(key)
	require.NoError(t, err)

	keys, err := testStoreUniversal.Keys()
	require.NoError(t, err)
	require.Nil(t, keys)
}

func Test_Redis_Cluster(t *testing.T) {
	t.Skip("TODO: Replace with containerized cluster when testcontainers-go Redis module supports clustering")

	testStoreUniversal := New(Config{
		Addrs: []string{
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

	err := testStoreUniversal.Set(key, val, 0)
	require.NoError(t, err)

	result, err := testStoreUniversal.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)

	err = testStoreUniversal.Delete(key)
	require.NoError(t, err)

	keys, err := testStoreUniversal.Keys()
	require.NoError(t, err)
	require.Nil(t, keys)

	require.Nil(t, testStoreUniversal.Close())
}

func Benchmark_Redis_Set(b *testing.B) {
	testStore := newTestStore(b)
	defer testStore.Close()

	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		err = testStore.Set("john", []byte("doe"), 0)
	}

	require.NoError(b, err)
}

func Benchmark_Redis_Get(b *testing.B) {
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

func Benchmark_Redis_SetAndDelete(b *testing.B) {
	testStore := newTestStore(b)
	defer testStore.Close()

	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		_ = testStore.Set("john", []byte("doe"), 0)
		err = testStore.Delete("john")
	}

	require.NoError(b, err)
}

func Test_Redis_NewFromConnection(t *testing.T) {
	t.Parallel()

	connection := New(newConfigFromContainer(t))

	testStore := NewFromConnection(connection.Conn())
	defer testStore.Close()

	err := testStore.Set("foo", []byte("bar"), 0)
	require.NoError(t, err, "failed to set key in Redis storage")

	val, err := testStore.Get("foo")
	require.NoError(t, err, "failed to get key from Redis storage")
	require.Equal(t, []byte("bar"), val, "value mismatch in Redis storage")

	err = testStore.Delete("foo")
	require.NoError(t, err, "failed to delete key in Redis storage")

	val, err = testStore.Get("foo")
	require.NoError(t, err)
	require.Nil(t, val, "expected value to be nil after deletion")
}
