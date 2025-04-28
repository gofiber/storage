package redis

import (
	"context"
	"os"
	"strings"
	"testing"
	"time"

	"github.com/stretchr/testify/require"

	"github.com/testcontainers/testcontainers-go"
	"github.com/testcontainers/testcontainers-go/modules/redis"
	"github.com/testcontainers/testcontainers-go/wait"
)

const (
	// redisImage is the default image used for running Redis in tests.
	redisImage       = "docker.io/redis:7"
	redisImageEnvVar = "TEST_REDIS_IMAGE"
	redisPort        = "6379/tcp"
)

type testStoreSettings struct {
	withAddress  bool
	withHostPort bool
	withURL      bool

	// TLS settings
	withSecureURL    bool
	withMTLSDisabled bool
	withTLS          bool
}

type testStoreOption func(*testStoreSettings)

func withAddress() testStoreOption {
	return func(o *testStoreSettings) {
		o.withAddress = true
	}
}

func withHostPort() testStoreOption {
	return func(o *testStoreSettings) {
		o.withHostPort = true
	}
}

func withTLS(secureURL bool, mtlsDisabled bool) testStoreOption {
	return func(o *testStoreSettings) {
		o.withTLS = true
		o.withSecureURL = secureURL
		o.withMTLSDisabled = mtlsDisabled
	}
}

// withURL sets the test store to use a URL.
// Use it when you want to explicitly combine multiple addresses in the same test
// to verify which one is being used.
// - true: the URL will receive the URI provided by the testcontainer
// - false: the URL will be set to an empty string
func withURL(useContainerURI bool) testStoreOption {
	return func(o *testStoreSettings) {
		o.withURL = useContainerURI
	}
}

func newConfigFromContainer(t testing.TB, opts ...testStoreOption) Config {
	t.Helper()

	settings := &testStoreSettings{
		withURL:      true, // by default, the URL will be set to the URI provided by the testcontainer
		withAddress:  false,
		withHostPort: false,
	}
	for _, o := range opts {
		o(settings)
	}

	img := redisImage
	if imgFromEnv := os.Getenv(redisImageEnvVar); imgFromEnv != "" {
		img = imgFromEnv
	}

	cfg := Config{
		Reset: true,
	}

	ctx := context.Background()

	tcOpts := []testcontainers.ContainerCustomizer{}

	waitStrategies := []wait.Strategy{
		wait.ForListeningPort(redisPort).WithStartupTimeout(time.Second * 10),
	}

	if settings.withTLS {
		tcOpts = append(tcOpts, redis.WithTLS())

		// Use Redis module's TLS options, but for the MTLS case, disable the auth-clients flag
		cmds := []string{
			"--port", "0",
			"--tls-port", "6379",
			"--tls-cert-file", "/tls/server.crt",
			"--tls-key-file", "/tls/server.key",
			"--tls-ca-cert-file", "/tls/ca.crt",
		}

		if settings.withMTLSDisabled {
			cmds = append(cmds, "--tls-auth-clients", "no")
		} else {
			cmds = append(cmds, "--tls-auth-clients", "yes")
		}

		// completely override the default CMD, as the Redis module is opinionated about the CMD
		tcOpts = append(tcOpts, testcontainers.WithCmd(cmds...))
	}

	tcOpts = append(tcOpts, testcontainers.WithWaitStrategy(waitStrategies...))

	c, err := redis.Run(ctx, img, tcOpts...)
	testcontainers.CleanupContainer(t, c)
	require.NoError(t, err)

	cfg.TLSConfig = c.TLSConfig()

	uri, err := c.ConnectionString(ctx)
	require.NoError(t, err)

	if settings.withHostPort {
		host, err := c.Host(ctx)
		require.NoError(t, err)

		port, err := c.MappedPort(ctx, redisPort)
		require.NoError(t, err)

		cfg.Host = host
		cfg.Port = port.Int()
	}

	if settings.withAddress {
		// trim the schemes from the URI
		addr := strings.TrimPrefix(uri, "redis://")
		addr = strings.TrimPrefix(addr, "rediss://")
		cfg.Addrs = []string{addr}
	}

	if settings.withURL {
		cfg.URL = uri
	}

	if !settings.withSecureURL {
		// Replace the scheme with the insecure one
		cfg.URL = strings.Replace(cfg.URL, "rediss://", "redis://", 1)
	}

	return cfg
}

func newTestStore(t testing.TB, opts ...testStoreOption) *Storage {
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

	testStore := newTestStore(t, withHostPort())
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

		testStore := newTestStore(t, withTLS(secureURL, mtlsDisabled))
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
	testStoreUniversal := newTestStore(t, withAddress())
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
	testStoreUniversal := newTestStore(t, withAddress(), withURL(false))
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
	testStoreUniversal := newTestStore(t, withAddress(), withURL(true))
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
	testStoreUniversal := newTestStore(t, withAddress(), withHostPort(), withURL(false))
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
	testStoreUniversal := newTestStore(t, withAddress(), withHostPort(), withURL(true))
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
