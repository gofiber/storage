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
	etcdImage              = "gcr.io/etcd-development/etcd:v3.7.1"
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
	require.NoError(b, testStore.Delete(key))
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
	require.NoError(b, testStore.Delete(key))
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

func Test_Etcd_TTLSeconds(t *testing.T) {
	tests := []struct {
		name     string
		exp      time.Duration
		expected int64
	}{
		{name: "sub second rounds up", exp: 500 * time.Millisecond, expected: 1},
		{name: "one nanosecond rounds up", exp: time.Nanosecond, expected: 1},
		{name: "whole seconds", exp: 90 * time.Second, expected: 90},
		{name: "fractional rounds up", exp: 1500 * time.Millisecond, expected: 2},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			require.Equal(t, tt.expected, ttlSeconds(tt.exp))
		})
	}
}

func TestEtcd_NewFromConnection(t *testing.T) {
	owner := newTestStore(t)
	defer owner.Close()

	store := NewFromConnection(owner.Conn())
	require.Same(t, owner.Conn(), store.Conn())

	require.NoError(t, store.Set("john", []byte("doe"), 0))

	result, err := store.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), result)

	// The client is the caller's, so closing this storage must leave it usable.
	require.NoError(t, store.Close())
	require.NoError(t, owner.Set("jane", []byte("doe"), 0))
	require.ErrorIs(t, store.Set("jane", []byte("doe"), 0), ErrClosed)
}

func TestEtcd_NewFromConnection_Nil(t *testing.T) {
	require.Panics(t, func() {
		NewFromConnection(nil)
	})
}

// unreachableEndpoint is a loopback port nothing listens on, so a dial is refused immediately.
const unreachableEndpoint = "127.0.0.1:1"

// newOfflineStore returns a Storage whose endpoint refuses connections, so no container is needed.
func newOfflineStore(t testing.TB) *Storage {
	t.Helper()

	store := New(Config{Endpoints: []string{unreachableEndpoint}})
	t.Cleanup(func() { _ = store.Close() })

	return store
}

func Test_Etcd_ConfigDefault(t *testing.T) {
	t.Run("no config", func(t *testing.T) {
		require.Equal(t, ConfigDefault, configDefault())
	})

	t.Run("zero values fall back to defaults", func(t *testing.T) {
		cfg := configDefault(Config{Endpoints: []string{"example:2379"}})
		require.Equal(t, []string{"example:2379"}, cfg.Endpoints)
		require.Equal(t, ConfigDefault.DialTimeout, cfg.DialTimeout)
		require.Equal(t, ConfigDefault.Username, cfg.Username)
		require.Equal(t, ConfigDefault.Password, cfg.Password)
	})

	t.Run("provided values are kept", func(t *testing.T) {
		want := Config{
			Endpoints:   []string{"example:2379"},
			DialTimeout: time.Minute,
			Username:    "user",
			Password:    "pass",
		}
		require.Equal(t, want, configDefault(want))
	})
}

func TestEtcd_New_Panics_WithoutEndpoints(t *testing.T) {
	require.Panics(t, func() {
		New(Config{Endpoints: []string{}})
	})
}

func TestEtcd_OperationsAfterClose_ReturnErrClosed(t *testing.T) {
	store := newOfflineStore(t)
	require.NoError(t, store.Close())

	val, err := store.Get("john")
	require.ErrorIs(t, err, ErrClosed)
	require.Nil(t, val)

	require.ErrorIs(t, store.Set("john", []byte("doe"), 0), ErrClosed)
	require.ErrorIs(t, store.Set("john", []byte("doe"), time.Minute), ErrClosed)
	require.ErrorIs(t, store.Delete("john"), ErrClosed)
	require.ErrorIs(t, store.Reset(), ErrClosed)
}

func TestEtcd_EmptyKeyOrValue_AreNoOps(t *testing.T) {
	// The endpoint is unreachable: these calls must return before touching the network.
	store := newOfflineStore(t)

	val, err := store.Get("")
	require.NoError(t, err)
	require.Nil(t, val)

	require.NoError(t, store.Set("", []byte("doe"), 0))
	require.NoError(t, store.Set("john", nil, 0))
	require.NoError(t, store.Set("john", []byte{}, time.Minute))
	require.NoError(t, store.Delete(""))
}

func TestEtcd_UnreachableServer_ReturnsErrors(t *testing.T) {
	store := newOfflineStore(t)

	// A budget per call: a shared one would be spent by the first, failing the rest without a dial.
	callCtx := func() context.Context {
		ctx, cancel := context.WithTimeout(context.Background(), 200*time.Millisecond)
		t.Cleanup(cancel)
		return ctx
	}

	val, err := store.GetWithContext(callCtx(), "john")
	require.ErrorIs(t, err, context.DeadlineExceeded)
	require.Nil(t, val)

	require.ErrorIs(t, store.SetWithContext(callCtx(), "john", []byte("doe"), 0), context.DeadlineExceeded)
	require.ErrorIs(t, store.DeleteWithContext(callCtx(), "john"), context.DeadlineExceeded)
	require.ErrorIs(t, store.ResetWithContext(callCtx()), context.DeadlineExceeded)
}

func TestEtcd_SetWithContext_GrantFails_WhenContextCancelled(t *testing.T) {
	store := newOfflineStore(t)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err := store.SetWithContext(ctx, "john", []byte("doe"), time.Minute)
	require.ErrorIs(t, err, context.Canceled)
}

func TestEtcd_SetWithTTL(t *testing.T) {
	store := newTestStore(t)
	defer store.Close()

	t.Run("lease is revoked when the put fails", func(t *testing.T) {
		before, err := store.Conn().Leases(context.Background())
		require.NoError(t, err)

		// Larger than etcd's default request size limit (1.5 MiB): the lease is granted, then the put is rejected.
		tooLarge := make([]byte, 2*1024*1024)

		err = store.Set("big", tooLarge, time.Minute)
		require.Error(t, err)

		val, err := store.Get("big")
		require.NoError(t, err)
		require.Nil(t, val)

		// The lease granted for the failed put must not be left occupying the server.
		require.Eventually(t, func() bool {
			leases, err := store.Conn().Leases(context.Background())
			return err == nil && len(leases.Leases) <= len(before.Leases)
		}, 5*time.Second, 50*time.Millisecond)
	})

	t.Run("sub-second TTL is readable immediately", func(t *testing.T) {
		require.NoError(t, store.Set("john", []byte("doe"), 500*time.Millisecond))

		val, err := store.Get("john")
		require.NoError(t, err)
		require.Equal(t, []byte("doe"), val)
	})
}

func TestEtcd_Close_ReportsClientCloseError_Once(t *testing.T) {
	store := newOfflineStore(t)

	// Closing the client behind the storage's back makes the storage's own close fail.
	_ = store.Conn().Close()

	require.Error(t, store.Close())
	// Latched: later closes are no-ops.
	require.NoError(t, store.Close())
}
