package rueidis

import (
	"context"
	"crypto/tls"
	"math"
	"os"
	"testing"
	"time"

	testredis "github.com/gofiber/storage/testhelpers/redis"
	"github.com/redis/rueidis"
	"github.com/stretchr/testify/require"
)

const (
	// redisImage is the default image used for running Redis in tests.
	redisImage       = "public.ecr.aws/docker/library/redis:7"
	redisImageEnvVar = "TEST_REDIS_IMAGE"
)

// newConfigFromContainer creates a Rueidis configuration using Testcontainers.
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
		Reset:       true,
		TLSConfig:   redisCtr.TLSConfig,
		InitAddress: redisCtr.Addrs,
		URL:         redisCtr.URL,
	}

	return cfg
}

// newTestStore creates a new Rueidis storage instance backed by Testcontainers.
// It configures the container based on the provided options and returns a Storage
// instance connected to the container. The caller is responsible for calling
// Close() on the returned Storage when done.
func newTestStore(t testing.TB, opts ...testredis.Option) *Storage {
	return New(newConfigFromContainer(t, opts...))
}

func Test_Rueidis_Set(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)
}

func Test_Rueidis_NewWithContext(t *testing.T) {
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

func Test_Rueidis_SetWithContext(t *testing.T) {
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

func Test_Rueidis_Set_Override(t *testing.T) {
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

func Test_Rueidis_Get(t *testing.T) {
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

func Test_Rueidis_GetWithContext(t *testing.T) {
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

func Test_Rueidis_Expiration(t *testing.T) {
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

func Test_Rueidis_Get_NotExist(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	result, err := testStore.Get("notexist")
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_Rueidis_Delete(t *testing.T) {
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

func Test_Rueidis_DeleteWithContext(t *testing.T) {
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

func Test_Rueidis_Reset(t *testing.T) {
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

func Test_Rueidis_ResetWithContext(t *testing.T) {
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

func Test_Rueidis_Close(t *testing.T) {
	testStore := newTestStore(t)
	require.Nil(t, testStore.Close())
}

func Test_Rueidis_Conn(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	require.True(t, testStore.Conn() != nil)
}

func Test_Rueidis_WithTLS(t *testing.T) {
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

func Test_Rueidis_With_HostPort(t *testing.T) {
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

func Test_Rueidis_With_URL(t *testing.T) {
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

func Test_Rueidis_With_TLS_URL(t *testing.T) {
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

func Test_Rueidis_Cluster(t *testing.T) {
	t.Skip("TODO: Replace with containerized cluster when testcontainers-go Redis module supports clustering")

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

func Benchmark_Rueidis_Set(b *testing.B) {
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

func Benchmark_Rueidis_Get(b *testing.B) {
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

func Benchmark_Rueidis_SetAndDelete(b *testing.B) {
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

func Test_Rueidis_ConfigDefault_CacheTTL(t *testing.T) {
	require.Equal(t, 5*time.Second, configDefault(Config{CacheTTL: 5 * time.Second}).CacheTTL)
}

func Test_Rueidis_Set_Huge_Expiration(t *testing.T) {
	// The count used to be turned back into a Duration, which overflowed int64 and wrapped negative.
	ms := expirationMilliseconds(time.Duration(math.MaxInt64))

	require.Positive(t, ms)
	require.Negative(t, int64(time.Duration(ms)*time.Millisecond), "the old round trip overflowed")

	// Sub-millisecond expirations round up rather than reaching zero, which the server rejects.
	require.Equal(t, int64(1), expirationMilliseconds(time.Microsecond))
	require.Equal(t, int64(2), expirationMilliseconds(1500*time.Microsecond))
	require.Equal(t, int64(1000), expirationMilliseconds(time.Second))
}

func Test_Rueidis_ConfigDefault_AlwaysPipelining(t *testing.T) {
	// The documented default is on, and a zero value cannot express "off", hence the separate field.
	require.True(t, configDefault(Config{}).AlwaysPipelining)
	require.False(t, configDefault(Config{DisableAlwaysPipelining: true}).AlwaysPipelining)
}

func Test_Rueidis_NewFromConnection(t *testing.T) {
	owner := newTestStore(t)
	defer owner.Close()

	borrowed := NewFromConnection(owner.Conn())
	require.True(t, owner.Conn() == borrowed.Conn())

	require.NoError(t, borrowed.Set("john", []byte("doe"), 0))

	val, err := borrowed.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), val)

	// The client belongs to owner, so it must still work after borrowed was closed.
	require.NoError(t, borrowed.Close())
	require.NoError(t, owner.Set("jane", []byte("doe"), 0))

	// borrowed itself is closed: leaving the client open is not leaving the storage usable.
	_, err = borrowed.Get("john")
	require.ErrorIs(t, err, ErrClosed)

	// Reset is honoured on a borrowed client rather than quietly dropped.
	flushed := NewFromConnection(owner.Conn(), Config{Reset: true})
	defer flushed.Close()

	val, err = flushed.Get("jane")
	require.NoError(t, err)
	require.Nil(t, val)
}

func Test_Rueidis_NewFromConnection_Nil(t *testing.T) {
	require.Panics(t, func() {
		NewFromConnection(nil)
	})
}

// recoverPanicError runs fn, which must panic with an error, and returns that error.
func recoverPanicError(t testing.TB, fn func()) error {
	t.Helper()

	var recovered any
	func() {
		defer func() { recovered = recover() }()
		fn()
	}()
	require.NotNil(t, recovered, "expected a panic")

	err, ok := recovered.(error)
	require.True(t, ok, "expected an error panic, got %v", recovered)

	return err
}

// requireClientClosed asserts that client was closed, so it refuses every command.
func requireClientClosed(t testing.TB, client rueidis.Client) {
	t.Helper()

	err := client.Do(context.Background(), client.B().Ping().Build()).Error()
	require.ErrorIs(t, err, rueidis.ErrClosing)
}

func Test_Rueidis_ConfigDefault_Overrides(t *testing.T) {
	tlsCfg := &tls.Config{MinVersion: tls.VersionTLS12}

	cfg := configDefault(Config{
		Username:                "user",
		Password:                "pass",
		ClientName:              "client",
		URL:                     "redis://localhost:6380/1",
		SelectDB:                3,
		InitAddress:             []string{"a:1", "b:2"},
		TLSConfig:               tlsCfg,
		CacheSizeEachConn:       11,
		RingScaleEachConn:       12,
		ReadBufferEachConn:      13,
		WriteBufferEachConn:     14,
		BlockingPoolSize:        15,
		PipelineMultiplex:       4,
		DisableRetry:            true,
		DisableCache:            true,
		DisableAlwaysPipelining: true,
		Reset:                   true,
		CacheTTL:                time.Hour,
	})

	require.Equal(t, "user", cfg.Username)
	require.Equal(t, "pass", cfg.Password)
	require.Equal(t, "client", cfg.ClientName)
	require.Equal(t, "redis://localhost:6380/1", cfg.URL)
	require.Equal(t, 3, cfg.SelectDB)
	require.Equal(t, []string{"a:1", "b:2"}, cfg.InitAddress)
	require.Same(t, tlsCfg, cfg.TLSConfig)
	require.Equal(t, 11, cfg.CacheSizeEachConn)
	require.Equal(t, 12, cfg.RingScaleEachConn)
	require.Equal(t, 13, cfg.ReadBufferEachConn)
	require.Equal(t, 14, cfg.WriteBufferEachConn)
	require.Equal(t, 15, cfg.BlockingPoolSize)
	require.Equal(t, 4, cfg.PipelineMultiplex)
	require.True(t, cfg.DisableRetry)
	require.True(t, cfg.DisableCache)
	require.False(t, cfg.AlwaysPipelining)
	require.True(t, cfg.Reset)
	require.Equal(t, time.Hour, cfg.CacheTTL)

	// Overriding must not leak into the shared defaults.
	require.Equal(t, []string{"127.0.0.1:6379"}, ConfigDefault.InitAddress)
	require.Nil(t, ConfigDefault.TLSConfig)
	require.False(t, ConfigDefault.Reset)
	require.True(t, ConfigDefault.AlwaysPipelining)
}

func Test_Rueidis_ConfigDefault_Unset(t *testing.T) {
	// Zero values keep the defaults, whether the config is omitted or empty. That includes CacheTTL,
	// which used to be forced to zero when unset, disabling client-side caching.
	require.Equal(t, ConfigDefault, configDefault())
	require.Equal(t, ConfigDefault, configDefault(Config{}))
}

// Test_Rueidis_Plain holds the tests that need nothing but a plain Redis, so they share one container
// instead of starting one each. Storages built from plain empty the database as they are created and
// the subtests run one after another, so none sees another's keys: don't make them parallel.
func Test_Rueidis_Plain(t *testing.T) {
	plain := newConfigFromContainer(t)

	t.Run("Closed", func(t *testing.T) {
		testStore := New(plain)

		require.NoError(t, testStore.Set("john", []byte("doe"), 0))
		require.NoError(t, testStore.Close())

		// Close is idempotent.
		require.NoError(t, testStore.Close())

		val, err := testStore.Get("john")
		require.ErrorIs(t, err, ErrClosed)
		require.Nil(t, val)

		require.ErrorIs(t, testStore.Set("john", []byte("doe"), 0), ErrClosed)
		require.ErrorIs(t, testStore.Set("john", []byte("doe"), time.Second), ErrClosed)
		require.ErrorIs(t, testStore.Delete("john"), ErrClosed)
		require.ErrorIs(t, testStore.Reset(), ErrClosed)

		// The closed check wins over argument validation.
		_, err = testStore.Get("")
		require.ErrorIs(t, err, ErrClosed)
		require.ErrorIs(t, testStore.Set("", nil, 0), ErrClosed)
		require.ErrorIs(t, testStore.Delete(""), ErrClosed)

		// The underlying client was closed too, since the storage opened it.
		require.NotNil(t, testStore.Conn())
		requireClientClosed(t, testStore.Conn())
	})

	t.Run("EmptyKeyOrValue", func(t *testing.T) {
		testStore := New(plain)
		defer testStore.Close()

		require.NoError(t, testStore.Set("keep", []byte("me"), 0))

		// An empty key is never read, written or deleted.
		val, err := testStore.Get("")
		require.NoError(t, err)
		require.Nil(t, val)

		require.NoError(t, testStore.Set("", []byte("doe"), 0))
		require.NoError(t, testStore.Delete(""))

		// An empty value is not stored, with or without an expiration.
		require.NoError(t, testStore.Set("empty", nil, 0))
		require.NoError(t, testStore.Set("empty", []byte{}, time.Minute))

		exists, err := testStore.Conn().Do(context.Background(),
			testStore.Conn().B().Exists().Key("empty").Build()).AsInt64()
		require.NoError(t, err)
		require.Zero(t, exists)

		val, err = testStore.Get("keep")
		require.NoError(t, err)
		require.Equal(t, []byte("me"), val)

		// "keep" is all there is, because the database was emptied when this storage was created.
		size, err := testStore.Conn().Do(context.Background(), testStore.Conn().B().Dbsize().Build()).AsInt64()
		require.NoError(t, err)
		require.Equal(t, int64(1), size)
	})

	t.Run("Set_Expiration_TTL", func(t *testing.T) {
		testStore := New(plain)
		defer testStore.Close()

		pttl := func(key string) int64 {
			t.Helper()

			ttl, err := testStore.Conn().Do(context.Background(), testStore.Conn().B().Pttl().Key(key).Build()).AsInt64()
			require.NoError(t, err)

			return ttl
		}

		require.NoError(t, testStore.Set("ttl", []byte("v"), 30*time.Second))
		require.NoError(t, testStore.Set("persistent", []byte("v"), 0))

		ttl := pttl("ttl")
		require.Greater(t, ttl, int64(0))
		require.LessOrEqual(t, ttl, int64(30_000))

		// -1 means the key exists without an expiration.
		require.Equal(t, int64(-1), pttl("persistent"))

		// A negative expiration is treated as none.
		require.NoError(t, testStore.Set("negative", []byte("v"), -time.Second))
		require.Equal(t, int64(-1), pttl("negative"))
	})

	t.Run("URL_ClientName", func(t *testing.T) {
		getName := func(t *testing.T, s *Storage) string {
			t.Helper()
			name, err := s.Conn().Do(context.Background(), s.Conn().B().ClientGetname().Build()).ToString()
			require.NoError(t, err)
			return name
		}

		t.Run("taken from the URL", func(t *testing.T) {
			cfg := plain
			cfg.URL += "?client_name=from-url"

			testStore := New(cfg)
			defer testStore.Close()

			require.Equal(t, "from-url", getName(t, testStore))
		})

		t.Run("explicit config wins over the URL", func(t *testing.T) {
			cfg := plain
			cfg.URL += "?client_name=from-url"
			cfg.ClientName = "from-config"

			testStore := New(cfg)
			defer testStore.Close()

			require.Equal(t, "from-config", getName(t, testStore))
		})
	})

	t.Run("NewWithContext_Cancelled", func(t *testing.T) {
		// Without a reset, the connection test is the only step that can fail on the context.
		cfg := plain
		cfg.Reset = false

		ctx, cancel := context.WithCancel(context.Background())
		cancel()

		// The connection test honours the context and the half-opened client is released.
		err := recoverPanicError(t, func() { NewWithContext(ctx, cfg) })
		require.ErrorIs(t, err, context.Canceled)
	})

	t.Run("NewFromConnection_Reset_Failure", func(t *testing.T) {
		owner := New(plain)
		defer owner.Close()

		require.NoError(t, owner.Set("john", []byte("doe"), 0))

		ctx, cancel := context.WithCancel(context.Background())
		cancel()

		// A failed reset panics, and the client belongs to the caller so it stays open and untouched.
		err := recoverPanicError(t, func() {
			NewFromConnectionWithContext(ctx, owner.Conn(), Config{Reset: true})
		})
		require.ErrorIs(t, err, context.Canceled)

		val, err := owner.Get("john")
		require.NoError(t, err)
		require.Equal(t, []byte("doe"), val)
	})

	t.Run("newStorage_Reset_Failure_ClosesOwnedClient", func(t *testing.T) {
		opened := New(Config{URL: plain.URL})
		defer opened.Close()

		client := opened.Conn()

		ctx, cancel := context.WithCancel(context.Background())
		cancel()

		err := recoverPanicError(t, func() { newStorage(ctx, client, true, Config{Reset: true}) })
		require.ErrorIs(t, err, context.Canceled)

		// The client was owned by the failed storage, so it was closed.
		requireClientClosed(t, client)
	})
}

func Test_Rueidis_TLS_URL_Uses_URL_TLSConfig(t *testing.T) {
	cfg := newConfigFromContainer(t, testredis.WithTLS(true, true), testredis.WithAddress(), testredis.WithURL(true))
	require.NotNil(t, cfg.TLSConfig)

	// With the container's CA the rediss URL connects.
	testStore := New(cfg)
	require.NoError(t, testStore.Set("clark", []byte("kent"), 0))
	require.NoError(t, testStore.Close())

	// Without a TLSConfig, the one derived from the rediss URL is used and trusts only the system
	// roots, so the container's self-signed certificate is rejected.
	cfg.TLSConfig = nil
	err := recoverPanicError(t, func() { New(cfg) })

	var certErr *tls.CertificateVerificationError
	require.ErrorAs(t, err, &certErr)
}

func Test_Rueidis_New_Unreachable(t *testing.T) {
	recoverPanicError(t, func() {
		New(Config{InitAddress: []string{"127.0.0.1:1"}})
	})
}

func Test_Rueidis_New_InvalidURL(t *testing.T) {
	require.Panics(t, func() {
		New(Config{URL: "not-a-redis-url://"})
	})
}
