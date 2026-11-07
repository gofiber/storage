package redis

import (
	"context"
	"fmt"
	"os"
	"testing"
	"time"

	testredis "github.com/gofiber/storage/testhelpers/redis"
	goredis "github.com/redis/go-redis/v9"
	"github.com/stretchr/testify/require"
)

const (
	// redisImage is the default image used for running Redis in tests.
	redisImage       = "public.ecr.aws/docker/library/redis:7"
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

func Test_Redis_NewWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := NewWithContext(context.Background(), newConfigFromContainer(t))
	require.NotNil(t, testStore)
	defer testStore.Close()

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)
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

	require.NotPanics(t, func() {
		require.NoError(t, testStore.Close())
	})
}

func Test_Redis_Close_DoesNotCloseBorrowedClient(t *testing.T) {
	owner := newTestStore(t)
	defer owner.Close() //nolint:errcheck // best effort cleanup

	borrowed := NewFromConnection(owner.Conn())
	require.NoError(t, borrowed.Close())

	// The client belongs to owner, so it must still work after borrowed was closed.
	require.NoError(t, owner.Set("john", []byte("doe"), 0))
	val, err := owner.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), val)

	// borrowed itself is closed: leaving the client open is not leaving the storage usable.
	_, err = borrowed.Get("john")
	require.ErrorIs(t, err, ErrClosed)
	require.ErrorIs(t, borrowed.Set("jane", []byte("doe"), 0), ErrClosed)
	require.ErrorIs(t, borrowed.Delete("john"), ErrClosed)
	require.ErrorIs(t, borrowed.Reset(), ErrClosed)
	_, err = borrowed.Keys()
	require.ErrorIs(t, err, ErrClosed)
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
	// Close on a storage built from an existing client is a no-op, so the client stays this test's to close.
	defer connection.Close() //nolint:errcheck // best effort cleanup

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

func Test_Redis_NewFromConnectionWithContext(t *testing.T) {
	t.Parallel()

	connection := newTestStore(t)
	defer connection.Close() //nolint:errcheck // best effort cleanup

	// Reset must flush entries already on the server.
	require.NoError(t, connection.Set("stale", []byte("value"), 0))

	testStore := NewFromConnectionWithContext(context.Background(), connection.Conn(), Config{Reset: true})
	defer testStore.Close()

	val, err := testStore.Get("stale")
	require.NoError(t, err)
	require.Nil(t, val)

	require.NoError(t, testStore.Set("foo", []byte("bar"), 0))
	val, err = testStore.Get("foo")
	require.NoError(t, err)
	require.Equal(t, []byte("bar"), val)

	// A reset under an already cancelled context must fail construction, not skip the flush.
	ctx, cancel := context.WithCancel(context.Background())
	cancel()
	require.Panics(t, func() {
		NewFromConnectionWithContext(ctx, connection.Conn(), Config{Reset: true})
	})
}

func Test_Redis_NewFromConnection_Nil(t *testing.T) {
	t.Parallel()

	require.Panics(t, func() {
		NewFromConnection(nil)
	})
}

func Test_Redis_SkipConnectionCheck(t *testing.T) {
	// 127.0.0.1:1 is guaranteed closed, so New would panic on the PING if the check were not skipped.
	cfg := Config{
		Host:                "127.0.0.1",
		Port:                1,
		SkipConnectionCheck: true,
	}

	var testStore *Storage
	require.NotPanics(t, func() {
		testStore = New(cfg)
	}, "New must not panic when the connection check is skipped")

	require.NotNil(t, testStore)
	defer testStore.Close() //nolint:errcheck // the server is unreachable

	// The connection error is reported by the first operation instead.
	_, err := testStore.Get("foo")
	require.Error(t, err, "an unreachable server must fail on use")
}

func Test_Redis_SkipConnectionCheck_WithReset(t *testing.T) {
	// Reset asks New to flush, which cannot reach a closed port either, and must not panic.
	cfg := Config{
		Host:                "127.0.0.1",
		Port:                1,
		Reset:               true,
		SkipConnectionCheck: true,
	}

	var testStore *Storage
	require.NotPanics(t, func() {
		testStore = New(cfg)
	}, "New must not panic when the connection check is skipped")

	require.NotNil(t, testStore)
	defer testStore.Close() //nolint:errcheck // the server is unreachable

	require.NotNil(t, testStore.Conn())
}

func Test_Redis_New_InvalidURL_Panics(t *testing.T) {
	t.Parallel()

	require.Panics(t, func() {
		New(Config{URL: "not-a-redis-url://nowhere"})
	})
}

func Test_Redis_New_URL_DefaultsTLSFromScheme(t *testing.T) {
	t.Parallel()

	// A rediss:// URL carries TLS settings the config did not supply; they must reach the client.
	var store *Storage
	require.NotPanics(t, func() {
		store = New(Config{
			URL:                 "rediss://user:secret@127.0.0.1:1/3",
			SkipConnectionCheck: true,
		})
	})
	defer store.Close() //nolint:errcheck // the server is unreachable

	client, ok := store.Conn().(*goredis.Client)
	require.True(t, ok)

	opts := client.Options()
	require.NotNil(t, opts.TLSConfig)
	require.Equal(t, "127.0.0.1:1", opts.Addr)
	require.Equal(t, "user", opts.Username)
	require.Equal(t, "secret", opts.Password)
	require.Equal(t, 3, opts.DB)
}

func Test_Redis_New_ConnectionCheckFailure_Panics(t *testing.T) {
	t.Parallel()

	// Nothing listens on port 1, so the PING must fail construction instead of returning a broken storage.
	require.Panics(t, func() {
		New(Config{Host: "127.0.0.1", Port: 1})
	})
}

func Test_Redis_New_ResetFailure_Panics(t *testing.T) {
	t.Parallel()

	ctx := context.Background()
	addr := newConfigFromContainer(t, testredis.WithAddress()).Addrs[0]

	// A user that may run everything but FLUSHDB: its connection check passes, its reset is refused.
	admin := goredis.NewClient(&goredis.Options{Addr: addr})
	defer admin.Close() //nolint:errcheck // best effort cleanup
	require.NoError(t, admin.Do(ctx, "ACL", "SETUSER", "limited", "on", ">secret", "~*", "+@all", "-flushdb").Err())

	// The wording of the refusal differs between servers, so ask the server for it.
	limited := goredis.NewClient(&goredis.Options{Addr: addr, Username: "limited", Password: "secret"})
	defer limited.Close() //nolint:errcheck // best effort cleanup
	refusal := limited.FlushDB(ctx).Err()
	require.ErrorContains(t, refusal, "NOPERM")

	// A requested reset that fails must not be swallowed, nor its error replaced.
	require.PanicsWithError(t, refusal.Error(), func() {
		New(Config{Addrs: []string{addr}, Username: "limited", Password: "secret", Reset: true})
	})
}

func Test_Redis_NewFromConnection_TypedNil_Panics(t *testing.T) {
	t.Parallel()

	var client *goredis.Client
	require.PanicsWithValue(t, "redis: nil client", func() {
		NewFromConnection(client)
	})
}

func Test_Redis_EmptyKeyAndValue(t *testing.T) {
	t.Parallel()

	testStore := newTestStore(t)
	defer testStore.Close()

	// Empty keys are ignored by every operation.
	val, err := testStore.Get("")
	require.NoError(t, err)
	require.Nil(t, val)

	require.NoError(t, testStore.Set("", []byte("doe"), 0))
	require.NoError(t, testStore.Delete(""))

	// An empty value is not stored either.
	require.NoError(t, testStore.Set("john", nil, 0))
	require.NoError(t, testStore.Set("john", []byte{}, 0))

	keys, err := testStore.Keys()
	require.NoError(t, err)
	require.Nil(t, keys)

	val, err = testStore.Get("john")
	require.NoError(t, err)
	require.Nil(t, val)
}

func Test_Redis_Set_NegativeExpirationClearsTTL(t *testing.T) {
	t.Parallel()

	testStore := newTestStore(t)
	defer testStore.Close()

	ctx := context.Background()

	require.NoError(t, testStore.Set("john", []byte("doe"), time.Hour))
	ttl, err := testStore.Conn().TTL(ctx, "john").Result()
	require.NoError(t, err)
	require.Greater(t, ttl, time.Duration(0))

	// A negative expiration means no expiry; it must not keep the previous TTL (go-redis KeepTTL).
	require.NoError(t, testStore.Set("john", []byte("smith"), -time.Second))
	ttl, err = testStore.Conn().TTL(ctx, "john").Result()
	require.NoError(t, err)
	require.Equal(t, time.Duration(-1), ttl, "key must have no expiry")

	val, err := testStore.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("smith"), val)
}

func Test_Redis_Operations_ClientClosedUnderneath(t *testing.T) {
	t.Parallel()

	owner := newTestStore(t)
	require.NoError(t, owner.Set("john", []byte("doe"), 0))

	// A borrowed storage is not marked closed when the client dies under it, so the
	// underlying client's errors must surface from every operation.
	borrowed := NewFromConnection(owner.Conn())
	require.NoError(t, owner.Conn().Close())

	keys, err := borrowed.Keys()
	require.ErrorIs(t, err, goredis.ErrClosed)
	require.Nil(t, keys)

	_, err = borrowed.Get("john")
	require.ErrorIs(t, err, goredis.ErrClosed)
	require.ErrorIs(t, borrowed.Set("john", []byte("doe"), 0), goredis.ErrClosed)
	require.ErrorIs(t, borrowed.Delete("john"), goredis.ErrClosed)
	require.ErrorIs(t, borrowed.Reset(), goredis.ErrClosed)

	// Closing the owner reports the already-closed client but still latches the storage.
	require.ErrorIs(t, owner.Close(), goredis.ErrClosed)
	_, err = owner.Get("john")
	require.ErrorIs(t, err, ErrClosed)
}

func Test_Redis_Cluster_FansOutToEveryMaster(t *testing.T) {
	t.Parallel()

	ctx := context.Background()
	addr := newConfigFromContainer(t, testredis.WithAddress()).Addrs[0]

	// ClusterSlots lets a standalone server stand in for a cluster: one master owning every slot.
	cluster := goredis.NewClusterClient(&goredis.ClusterOptions{
		ClusterSlots: func(context.Context) ([]goredis.ClusterSlot, error) {
			return []goredis.ClusterSlot{{Start: 0, End: 16383, Nodes: []goredis.ClusterNode{{Addr: addr}}}}, nil
		},
	})
	defer cluster.Close() //nolint:errcheck // best effort cleanup

	// The reset on construction reaches the master.
	require.NoError(t, cluster.Set(ctx, "stale", "value", 0).Err())
	store := NewFromConnection(cluster, Config{Reset: true})
	keys, err := store.Keys()
	require.NoError(t, err)
	require.Nil(t, keys)

	// Keys gathers every SCAN page from the master: 25 keys do not fit in one page of 10.
	var want [][]byte
	for i := range 25 {
		key := fmt.Sprintf("key-%d", i)
		require.NoError(t, store.Set(key, []byte("value"), 0))
		want = append(want, []byte(key))
	}
	keys, err = store.Keys()
	require.NoError(t, err)
	require.ElementsMatch(t, want, keys)

	// An explicit reset reaches the master too.
	require.NoError(t, store.Reset())
	keys, err = store.Keys()
	require.NoError(t, err)
	require.Nil(t, keys)
}

func Test_Redis_Cluster_UnreachableReturnsError(t *testing.T) {
	t.Parallel()

	store := New(Config{
		Addrs:               []string{"127.0.0.1:1"},
		IsClusterMode:       true,
		SkipConnectionCheck: true,
	})
	defer store.Close() //nolint:errcheck // the cluster is unreachable

	_, ok := store.Conn().(*goredis.ClusterClient)
	require.True(t, ok)

	// The topology cannot be loaded, so fanning out must report that instead of silently doing nothing.
	require.Error(t, store.Reset())

	keys, err := store.Keys()
	require.Error(t, err)
	require.Nil(t, keys)
}
