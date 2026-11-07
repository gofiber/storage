package ristretto

import (
	"context"
	"os"
	"testing"
	"time"

	"github.com/dgraph-io/ristretto"
	"github.com/stretchr/testify/require"
)

var testStore *Storage

func TestMain(m *testing.M) {
	testStore = New()

	code := m.Run()

	_ = testStore.Reset()
	_ = testStore.Close()
	os.Exit(code)
}

func Test_Ristretto_Set(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)
}

func Test_Ristretto_Set_Override(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	err = testStore.Set(key, val, 0)
	require.NoError(t, err)
}

func Test_Ristretto_Get(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	// Create a channel to synchronize the test
	done := make(chan struct{})

	// Set the value in a goroutine
	go func() {
		err := testStore.Set(key, val, 0)
		require.NoError(t, err)

		// Send a value on the channel to signal that the value has been set
		done <- struct{}{}
	}()

	// Wait for the value to be set or a timeout to occur
	select {
	case <-done:
		// The value has been set, proceed with the test
		result, err := testStore.Get(key)
		require.NoError(t, err)
		require.Equal(t, val, result)
	case <-time.After(1 * time.Second):
		// The value was not set within 1 second, fail the test
		t.Errorf("timed out waiting for value to be set")
	}
}

func Test_Ristretto_Set_Expiration(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
		exp = 1 * time.Second
	)

	err := testStore.Set(key, val, exp)
	require.NoError(t, err)

	require.NoError(t, testStore.Reset())
}

func Test_Ristretto_Get_Expired(t *testing.T) {
	key := "john"

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_Ristretto_Get_NotExist(t *testing.T) {
	result, err := testStore.Get("notexist")
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_Ristretto_Delete(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	// Create a channel to synchronize the test
	done := make(chan struct{})

	// Set the value in a goroutine
	go func() {
		err := testStore.Set(key, val, 0)
		require.NoError(t, err)

		// Send a value on the channel to signal that the value has been set
		done <- struct{}{}
	}()

	// Wait for the value to be set or a timeout to occur
	select {
	case <-done:
		// The value has been set, proceed with the test
		err := testStore.Delete(key)
		require.NoError(t, err)

		result, err := testStore.Get(key)
		require.NoError(t, err)
		require.Zero(t, len(result))
	case <-time.After(1 * time.Second):
		// The value was not set within 1 second, fail the test
		t.Errorf("timed out waiting for value to be set")
	}
}

func Test_Ristretto_Reset(t *testing.T) {
	val := []byte("doe")

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

func Test_Ristretto_Close(t *testing.T) {
	// A store of its own: closing the shared one would break the benchmarks that keep using it.
	store := New()

	require.Nil(t, store.Close())

	require.NotPanics(t, func() {
		require.Nil(t, store.Close())
	})
}

func Test_Ristretto_Conn(t *testing.T) {
	require.True(t, testStore.Conn() != nil)
}

func Benchmark_Ristretto_Set(b *testing.B) {
	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		err = testStore.Set("john", []byte("doe"), 0)
	}

	require.NoError(b, err)
}

// Benchmark_Ristretto_Set_SkipWaitForWrite measures what waiting for the write buffer costs.
func Benchmark_Ristretto_Set_SkipWaitForWrite(b *testing.B) {
	store := New(Config{SkipWaitForWrite: true})
	defer store.Close() //nolint:errcheck // best effort cleanup

	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		err = store.Set("john", []byte("doe"), 0)
	}

	require.NoError(b, err)
}

func Benchmark_Ristretto_Get(b *testing.B) {
	err := testStore.Set("john", []byte("doe"), 0)
	require.NoError(b, err)

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_, err = testStore.Get("john")
	}

	require.NoError(b, err)
}

func Benchmark_Ristretto_SetAndDelete(b *testing.B) {
	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		_ = testStore.Set("john", []byte("doe"), 0)
		err = testStore.Delete("john")
	}

	require.NoError(b, err)
}

// newTestStore returns a cache of its own, clear of the shared testStore.
func newTestStore(t *testing.T) *Storage {
	t.Helper()

	store := New()
	t.Cleanup(func() {
		_ = store.Close()
	})

	return store
}

func Test_Ristretto_Set_Then_Get(t *testing.T) {
	var (
		testStore = newTestStore(t)
		key       = "john"
		val       = []byte("doe")
	)

	// Ristretto buffers writes, so this used to need polling; Set now waits for the write.
	require.NoError(t, testStore.Set(key, val, 0))

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)

	require.NoError(t, testStore.Reset())
}

func Test_Ristretto_Get_Returns_Copy(t *testing.T) {
	testStore := newTestStore(t)
	key := "john"
	val := []byte("doe")

	require.NoError(t, testStore.Set(key, val, 0))

	// Mutating the slice handed to Set must not corrupt the cached entry.
	val[0] = 'X'

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), result)

	result[0] = 'X'

	result, err = testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), result)

	require.NoError(t, testStore.Reset())
}

func Test_Ristretto_WithContext_Canceled(t *testing.T) {
	testStore := newTestStore(t)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	require.ErrorIs(t, testStore.SetWithContext(ctx, "john", []byte("doe"), 0), context.Canceled)

	_, err := testStore.GetWithContext(ctx, "john")
	require.ErrorIs(t, err, context.Canceled)

	require.ErrorIs(t, testStore.DeleteWithContext(ctx, "john"), context.Canceled)
	require.ErrorIs(t, testStore.ResetWithContext(ctx), context.Canceled)
}

func Test_Ristretto_SkipWaitForWrite(t *testing.T) {
	testStore := New(Config{SkipWaitForWrite: true})
	t.Cleanup(func() { _ = testStore.Close() })

	// Set returns without waiting, so a Get right after may or may not see the value, but must not error.
	require.NoError(t, testStore.Set("john", []byte("doe"), 0))

	_, err := testStore.Get("john")
	require.NoError(t, err)

	require.Eventually(t, func() bool {
		val, err := testStore.Get("john")
		return err == nil && len(val) > 0
	}, time.Second, 10*time.Millisecond)
}

func Test_Ristretto_NewFromConnection(t *testing.T) {
	cache, err := ristretto.NewCache(&ristretto.Config{
		NumCounters: ConfigDefault.NumCounters,
		MaxCost:     ConfigDefault.MaxCost,
		BufferItems: ConfigDefault.BufferItems,
	})
	require.NoError(t, err)
	defer cache.Close()

	store := NewFromConnection(cache)
	require.Same(t, cache, store.Conn())

	require.NoError(t, store.Set("john", []byte("doe"), 0))

	result, err := store.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), result)

	// The cache is the caller's, so closing the storage must leave it usable.
	require.NoError(t, store.Close())
	require.True(t, cache.Set("jane", []byte("doe"), 1))
}

func Test_Ristretto_NewFromConnection_Nil(t *testing.T) {
	require.Panics(t, func() {
		NewFromConnection(nil)
	})
}

// Storages on one cache must share the operation lock, or one's Reset — a Clear,
// which Ristretto documents as non-atomic — could overlap another's Set.
func Test_Ristretto_NewFromConnection_SharedCache(t *testing.T) {
	cache, err := ristretto.NewCache(&ristretto.Config{
		NumCounters: ConfigDefault.NumCounters,
		MaxCost:     ConfigDefault.MaxCost,
		BufferItems: ConfigDefault.BufferItems,
	})
	require.NoError(t, err)
	defer cache.Close()

	s1 := NewFromConnection(cache)
	s2 := NewFromConnection(cache)
	require.Same(t, s1.shared, s2.shared)

	// The lock outlives each storage but not all of them.
	require.NoError(t, s1.Close())
	require.NoError(t, s2.Set("john", []byte("doe"), 0))
	require.NoError(t, s2.Close())
	require.NoError(t, s2.Close())

	cacheStatesMu.Lock()
	_, held := cacheStates[cache]
	cacheStatesMu.Unlock()
	require.False(t, held)
}

// A closed Ristretto cache drops operations in silence, so a sibling on a cache an owning
// storage closed must report ErrClosed rather than accept writes that go nowhere.
func Test_Ristretto_SharedCache_OwnerClose(t *testing.T) {
	owner := New()
	sibling := NewFromConnection(owner.Conn())

	require.NoError(t, sibling.Set("john", []byte("doe"), 0))
	require.NoError(t, owner.Close())

	require.ErrorIs(t, sibling.Set("jane", []byte("doe"), 0), ErrClosed)
	_, err := sibling.Get("john")
	require.ErrorIs(t, err, ErrClosed)
	require.ErrorIs(t, sibling.Delete("john"), ErrClosed)
	require.ErrorIs(t, sibling.Reset(), ErrClosed)
	require.NoError(t, sibling.Close())
}

func Test_Ristretto_EmptyKeyOrValue(t *testing.T) {
	testStore := newTestStore(t)

	// Empty keys and values are ignored without an error.
	val, err := testStore.Get("")
	require.NoError(t, err)
	require.Nil(t, val)

	require.NoError(t, testStore.Set("", []byte("doe"), 0))
	require.NoError(t, testStore.Set("john", nil, 0))
	require.NoError(t, testStore.Set("john", []byte{}, 0))
	require.NoError(t, testStore.Delete(""))

	val, err = testStore.Get("john")
	require.NoError(t, err)
	require.Nil(t, val)
}

func Test_Ristretto_Set_NegativeExpiration(t *testing.T) {
	testStore := newTestStore(t)

	// A negative TTL is clamped to "no expiration" rather than dropping the write.
	require.NoError(t, testStore.Set("john", []byte("doe"), -time.Second))

	result, err := testStore.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), result)
}

func Test_Ristretto_Get_NonBytesValue(t *testing.T) {
	testStore := newTestStore(t)

	// A value put in the cache by someone else through Conn that is not []byte reads as a miss.
	require.True(t, testStore.Conn().Set("john", "doe", 1))
	testStore.Conn().Wait()

	result, err := testStore.Get("john")
	require.NoError(t, err)
	require.Nil(t, result)
}

func Test_Ristretto_WithContext_Success(t *testing.T) {
	testStore := newTestStore(t)
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

func Test_Ristretto_Closed_Storage(t *testing.T) {
	testStore := New()
	require.NoError(t, testStore.Close())

	require.ErrorIs(t, testStore.Set("john", []byte("doe"), 0), ErrClosed)
	_, err := testStore.Get("john")
	require.ErrorIs(t, err, ErrClosed)
	require.ErrorIs(t, testStore.Delete("john"), ErrClosed)
	require.ErrorIs(t, testStore.Reset(), ErrClosed)
	require.NoError(t, testStore.Close())
}

func Test_Ristretto_ReleaseCacheState_Unknown(t *testing.T) {
	cache, err := ristretto.NewCache(&ristretto.Config{
		NumCounters: 100,
		MaxCost:     100,
		BufferItems: 64,
	})
	require.NoError(t, err)
	defer cache.Close()

	// Releasing a cache that has no registered state is a no-op.
	require.NotPanics(t, func() { releaseCacheState(cache) })

	cacheStatesMu.Lock()
	_, held := cacheStates[cache]
	cacheStatesMu.Unlock()
	require.False(t, held)
}

func Test_Ristretto_ConfigDefault_Overrides(t *testing.T) {
	// Invalid sizing falls back to defaults; explicit values are kept.
	cfg := configDefault(Config{NumCounters: -1, MaxCost: -1, BufferItems: -1})
	require.Equal(t, ConfigDefault.NumCounters, cfg.NumCounters)
	require.Equal(t, ConfigDefault.MaxCost, cfg.MaxCost)
	require.Equal(t, ConfigDefault.BufferItems, cfg.BufferItems)
	require.Equal(t, ConfigDefault.DefaultCost, cfg.DefaultCost)

	cfg = configDefault(Config{NumCounters: 1000, MaxCost: 2000, BufferItems: 8, DefaultCost: 3})
	require.Equal(t, int64(1000), cfg.NumCounters)
	require.Equal(t, int64(2000), cfg.MaxCost)
	require.Equal(t, int64(8), cfg.BufferItems)
	require.Equal(t, int64(3), cfg.DefaultCost)
}

func Test_Ristretto_CloneBytes(t *testing.T) {
	require.Nil(t, cloneBytes(nil))

	src := []byte("doe")
	dst := cloneBytes(src)
	require.Equal(t, src, dst)
	require.Equal(t, len(src), cap(dst))

	dst[0] = 'X'
	require.Equal(t, []byte("doe"), src)
}
