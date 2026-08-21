package memcache

import (
	"context"
	"math"
	"os"
	"testing"
	"time"

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
