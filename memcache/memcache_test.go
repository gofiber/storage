package memcache

import (
	"context"
	"math"
	"net"
	"os"
	"testing"
	"time"

	mc "github.com/bradfitz/gomemcache/memcache"
	"github.com/stretchr/testify/require"
	"github.com/testcontainers/testcontainers-go"
	"github.com/testcontainers/testcontainers-go/wait"
)

const (
	// memcachedImage is the default image used for running memcached in tests.
	memcachedImage              = "public.ecr.aws/docker/library/memcached:latest"
	memcachedImageEnvVar string = "TEST_MEMCACHED_IMAGE"
	memcachedPort               = "11211/tcp"
)

func newTestStore(t testing.TB) *Storage {
	t.Helper()

	img := memcachedImage
	if imgFromEnv := os.Getenv(memcachedImageEnvVar); imgFromEnv != "" {
		img = imgFromEnv
	}

	ctx := context.Background()

	c, err := testcontainers.Run(ctx,
		img,
		testcontainers.WithExposedPorts(memcachedPort),
		testcontainers.WithWaitStrategy(
			wait.ForListeningPort(memcachedPort),
		),
	)
	testcontainers.CleanupContainer(t, c)
	require.NoError(t, err)

	host, err := c.Host(ctx)
	require.NoError(t, err)

	port, err := c.MappedPort(ctx, memcachedPort)
	require.NoError(t, err)

	return New(
		Config{
			Reset:   true,
			Servers: host + ":" + port.Port(),
		},
	)
}

func Test_Memcache_Set(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)
}

func Test_Memcache_Set_Override(t *testing.T) {
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

func Test_Memcache_Get(t *testing.T) {
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

func Test_Memcache_Set_Expiration(t *testing.T) {
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
}

func Test_Memcache_Get_Expired(t *testing.T) {
	key := "john"

	testStore := newTestStore(t)
	defer testStore.Close()

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_Memcache_Get_NotExist(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	result, err := testStore.Get("notexist")
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_Memcache_Delete(t *testing.T) {
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

func Test_Memcache_Reset(t *testing.T) {
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

func Test_Memcache_Close(t *testing.T) {
	testStore := newTestStore(t)
	require.Nil(t, testStore.Close())
}

func Test_Memcache_Conn(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	require.True(t, testStore.Conn() != nil)
}

func Benchmark_Memcache_Set(b *testing.B) {
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

func Benchmark_Memcache_Get(b *testing.B) {
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

func Benchmark_Memcache_SetAndDelete(b *testing.B) {
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

func Test_Memcache_Expiration_Conversion(t *testing.T) {
	tests := []struct {
		name     string
		exp      time.Duration
		expected int32
	}{
		{name: "no expiration", exp: 0, expected: 0},
		{name: "negative", exp: -time.Second, expected: 0},
		{name: "sub second rounds up", exp: 500 * time.Millisecond, expected: 1},
		{name: "one nanosecond rounds up", exp: time.Nanosecond, expected: 1},
		{name: "whole seconds", exp: 90 * time.Second, expected: 90},
		{name: "fractional rounds up", exp: 1500 * time.Millisecond, expected: 2},
		{name: "at the relative limit", exp: 30 * 24 * time.Hour, expected: memcachedRelativeExpirationLimit},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			require.Equal(t, tt.expected, expiration(tt.exp))
		})
	}

	// Above 30 days memcached reads an absolute Unix stamp, so a relative value would expire at once.
	exp := 31 * 24 * time.Hour
	got := expiration(exp)
	require.Greater(t, got, int32(memcachedRelativeExpirationLimit))
	require.InDelta(t, time.Now().Add(exp).Unix(), int64(got), 5)

	// An expiration beyond a 32 bit field is clamped rather than wrapped into the past.
	require.Equal(t, int32(math.MaxInt32), expiration(200*365*24*time.Hour))
}

func Test_Memcache_WithContext_Canceled(t *testing.T) {
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

func Test_Memcache_NewFromConnection(t *testing.T) {
	owner := newTestStore(t)
	defer owner.Close()

	// Reset must flush entries already on the server.
	require.NoError(t, owner.Set("stale", []byte("value"), 0))

	store := NewFromConnection(owner.Conn(), Config{Reset: true})
	require.Same(t, owner.Conn(), store.Conn())

	result, err := store.Get("stale")
	require.NoError(t, err)
	require.Nil(t, result)

	require.NoError(t, store.Set("john", []byte("doe"), 0))

	result, err = store.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), result)

	require.NoError(t, store.Close())
}

func Test_Memcache_NewFromConnection_Nil(t *testing.T) {
	require.Panics(t, func() {
		NewFromConnection(nil)
	})
}

// unreachableClient returns a client pointed at a port nothing listens on, so every operation fails
// with a connection error without needing a container.
func unreachableClient(t testing.TB) *mc.Client {
	t.Helper()

	l, err := net.Listen("tcp", "127.0.0.1:0")
	require.NoError(t, err)
	addr := l.Addr().String()
	// Release the port so connections to it are refused.
	require.NoError(t, l.Close())

	client := mc.New(addr)
	client.Timeout = 200 * time.Millisecond

	return client
}

func Test_Memcache_ConfigDefault(t *testing.T) {
	// No config returns the defaults as is.
	cfg := configDefault()
	require.Equal(t, ConfigDefault, cfg)
	require.Equal(t, "127.0.0.1:11211", cfg.Servers)
	require.Equal(t, 100*time.Millisecond, cfg.timeout)
	require.Equal(t, 2, cfg.maxIdleConns)

	// An empty server list falls back to the default, other fields are kept.
	cfg = configDefault(Config{Reset: true})
	require.Equal(t, ConfigDefault.Servers, cfg.Servers)
	require.True(t, cfg.Reset)

	// An explicit server list is kept.
	cfg = configDefault(Config{Servers: "example:11212"})
	require.Equal(t, "example:11212", cfg.Servers)
}

func Test_Memcache_New_Unreachable(t *testing.T) {
	l, err := net.Listen("tcp", "127.0.0.1:0")
	require.NoError(t, err)
	addr := l.Addr().String()
	require.NoError(t, l.Close())

	// New pings the server and panics when it cannot be reached.
	require.Panics(t, func() {
		New(Config{Servers: addr})
	})
}

func Test_Memcache_NewFromConnection_Reset_Unreachable(t *testing.T) {
	// Reset is requested but the flush fails, which must not be swallowed.
	require.Panics(t, func() {
		NewFromConnection(unreachableClient(t), Config{Reset: true})
	})

	// Without Reset the client is never contacted during construction.
	require.NotPanics(t, func() {
		NewFromConnection(unreachableClient(t))
	})
}

func Test_Memcache_EmptyKeyOrValue(t *testing.T) {
	// An unreachable client proves that none of these calls touch the server.
	testStore := NewFromConnection(unreachableClient(t))

	require.NoError(t, testStore.Set("", []byte("doe"), 0))
	require.NoError(t, testStore.Set("john", nil, 0))
	require.NoError(t, testStore.Set("john", []byte{}, 0))

	result, err := testStore.Get("")
	require.NoError(t, err)
	require.Nil(t, result)

	require.NoError(t, testStore.Delete(""))
}

func Test_Memcache_Unreachable_Errors(t *testing.T) {
	testStore := NewFromConnection(unreachableClient(t))
	ctx := context.Background()

	require.Error(t, testStore.Set("john", []byte("doe"), 0))
	require.Error(t, testStore.SetWithContext(ctx, "john", []byte("doe"), 0))

	// A connection failure is not a cache miss, so it must be reported rather than turned into nil.
	result, err := testStore.Get("john")
	require.Error(t, err)
	require.Nil(t, result)

	result, err = testStore.GetWithContext(ctx, "john")
	require.Error(t, err)
	require.Nil(t, result)

	require.Error(t, testStore.Delete("john"))
	require.Error(t, testStore.DeleteWithContext(ctx, "john"))
	require.Error(t, testStore.Reset())
	require.Error(t, testStore.ResetWithContext(ctx))
}

func Test_Memcache_WithContext(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	ctx := context.Background()

	require.NoError(t, testStore.SetWithContext(ctx, "john", []byte("doe"), 0))

	result, err := testStore.GetWithContext(ctx, "john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), result)

	require.NoError(t, testStore.DeleteWithContext(ctx, "john"))

	result, err = testStore.GetWithContext(ctx, "john")
	require.NoError(t, err)
	require.Nil(t, result)

	require.NoError(t, testStore.SetWithContext(ctx, "john", []byte("doe"), 0))
	require.NoError(t, testStore.ResetWithContext(ctx))

	result, err = testStore.GetWithContext(ctx, "john")
	require.NoError(t, err)
	require.Nil(t, result)
}
