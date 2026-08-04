package memory

import (
	"context"
	"math"
	"testing"
	"time"

	"github.com/stretchr/testify/require"
)

func Test_Storage_Memory_Set(t *testing.T) {
	var (
		testStore = New()
		key       = "john"
		val       = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	keys, err := testStore.Keys()
	require.NoError(t, err)
	require.Len(t, keys, 1)
}

func Test_Storage_Memory_Set_Override(t *testing.T) {
	var (
		testStore = New()
		key       = "john"
		val       = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	err = testStore.Set(key, val, 0)
	require.NoError(t, err)

	keys, err := testStore.Keys()
	require.NoError(t, err)
	require.Len(t, keys, 1)
}

func Test_Storage_Memory_Get(t *testing.T) {
	var (
		testStore = New()
		key       = "john"
		val       = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)

	keys, err := testStore.Keys()
	require.NoError(t, err)
	require.Len(t, keys, 1)
}

// requireExpires polls until key is gone, or fails once within is exhausted.
func requireExpires(t *testing.T, testStore *Storage, key string, within time.Duration) {
	t.Helper()

	deadline := time.Now().Add(within)
	for {
		result, err := testStore.Get(key)
		require.NoError(t, err)
		if len(result) == 0 {
			return
		}
		require.False(t, time.Now().After(deadline), "key should expire")
		time.Sleep(100 * time.Millisecond)
	}
}

func Test_Storage_Memory_Set_Expiration(t *testing.T) {
	var (
		testStore = New()
		key       = "john"
		val       = []byte("doe")
		exp       = 1 * time.Second
	)

	err := testStore.Set(key, val, exp)
	require.NoError(t, err)

	requireExpires(t, testStore, key, 5*time.Second)

	keys, err := testStore.Keys()
	require.NoError(t, err)
	require.Nil(t, keys)
}

func Test_Storage_Memory_Set_Long_Expiration_with_Keys(t *testing.T) {
	var (
		testStore = New()
		key       = "john"
		val       = []byte("doe")
		exp       = 5 * time.Second
	)

	keys, err := testStore.Keys()
	require.NoError(t, err)
	require.Nil(t, keys)

	err = testStore.Set(key, val, exp)
	require.NoError(t, err)

	time.Sleep(1100 * time.Millisecond)

	keys, err = testStore.Keys()
	require.NoError(t, err)
	require.Len(t, keys, 1)

	requireExpires(t, testStore, key, 9*time.Second)

	keys, err = testStore.Keys()
	require.NoError(t, err)
	require.Nil(t, keys)
}

func Test_Storage_Memory_Get_NotExist(t *testing.T) {
	testStore := New()
	result, err := testStore.Get("notexist")
	require.NoError(t, err)
	require.Zero(t, len(result))

	keys, err := testStore.Keys()
	require.NoError(t, err)
	require.Nil(t, keys)
}

func Test_Storage_Memory_Delete(t *testing.T) {
	var (
		testStore = New()
		key       = "john"
		val       = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	keys, err := testStore.Keys()
	require.NoError(t, err)
	require.Len(t, keys, 1)

	err = testStore.Delete(key)
	require.NoError(t, err)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Zero(t, len(result))

	keys, err = testStore.Keys()
	require.NoError(t, err)
	require.Nil(t, keys)
}

func Test_Storage_Memory_Reset(t *testing.T) {
	testStore := New()
	val := []byte("doe")

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

func Test_Storage_Memory_Close(t *testing.T) {
	testStore := New()
	require.Nil(t, testStore.Close())
}

func Test_Storage_Memory_Conn(t *testing.T) {
	testStore := New()
	require.True(t, testStore.Conn() != nil)
}

func Benchmark_Memory_Set(b *testing.B) {
	testStore := New()
	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		err = testStore.Set("john", []byte("doe"), 0)
	}

	require.NoError(b, err)
}

func Benchmark_Memory_Get(b *testing.B) {
	testStore := New()
	err := testStore.Set("john", []byte("doe"), 0)
	require.NoError(b, err)

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_, err = testStore.Get("john")
	}

	require.NoError(b, err)
}

func Benchmark_Memory_SetAndDelete(b *testing.B) {
	testStore := New()
	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		_ = testStore.Set("john", []byte("doe"), 0)
		err = testStore.Delete("john")
	}

	require.NoError(b, err)
}

func Test_Storage_Memory_Close_Twice(t *testing.T) {
	testStore := New()

	require.NoError(t, testStore.Close())
	// A second Close must neither panic nor block on the done channel.
	require.NotPanics(t, func() {
		require.NoError(t, testStore.Close())
	})
}

func Test_Storage_Memory_Get_Returns_Copy(t *testing.T) {
	testStore := New()
	defer testStore.Close() //nolint:errcheck // best effort cleanup

	val := []byte("doe")
	require.NoError(t, testStore.Set("john", val, 0))

	// Mutating the slice handed to Set must not corrupt the stored entry.
	val[0] = 'X'

	result, err := testStore.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), result)

	// Mutating the slice returned by Get must not corrupt it either.
	result[0] = 'X'

	result, err = testStore.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), result)
}

func Test_Storage_Memory_WithContext_Canceled(t *testing.T) {
	testStore := New()
	defer testStore.Close() //nolint:errcheck // best effort cleanup

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	require.ErrorIs(t, testStore.SetWithContext(ctx, "john", []byte("doe"), 0), context.Canceled)

	_, err := testStore.GetWithContext(ctx, "john")
	require.ErrorIs(t, err, context.Canceled)

	require.ErrorIs(t, testStore.DeleteWithContext(ctx, "john"), context.Canceled)
	require.ErrorIs(t, testStore.ResetWithContext(ctx), context.Canceled)
}

func Test_Storage_Memory_Set_Negative_Expiration(t *testing.T) {
	testStore := New()
	defer testStore.Close() //nolint:errcheck // best effort cleanup

	// A negative expiration means no expiration, it must not wrap into a
	// far-future deadline nor expire the entry immediately.
	require.NoError(t, testStore.Set("john", []byte("doe"), -time.Hour))

	result, err := testStore.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), result)
}

func Test_Storage_Memory_Set_Short_Expiration(t *testing.T) {
	testStore := New()
	defer testStore.Close() //nolint:errcheck // best effort cleanup

	// A short expiration must be honoured exactly, not rounded up to a whole
	// second nor treated as immediate.
	require.NoError(t, testStore.Set("john", []byte("doe"), 100*time.Millisecond))

	result, err := testStore.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), result)

	start := time.Now()
	requireExpires(t, testStore, "john", time.Second)
	require.Less(t, time.Since(start), 500*time.Millisecond, "a 100ms expiration must not outlive it by much")
}

func Test_Storage_Memory_Set_Huge_Expiration(t *testing.T) {
	testStore := New()
	defer testStore.Close() //nolint:errcheck // best effort cleanup

	// A deadline past what a nanosecond timestamp can hold must saturate
	// rather than wrap into the past.
	require.NoError(t, testStore.Set("john", []byte("doe"), time.Duration(math.MaxInt64)))

	result, err := testStore.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), result)
}

func Test_Storage_Memory_Config_SubSecond_GCInterval(t *testing.T) {
	// A sub-second interval used to be truncated to zero seconds and silently
	// replaced by the ten second default.
	require.Equal(t, 50*time.Millisecond, configDefault(Config{GCInterval: 50 * time.Millisecond}).GCInterval)

	// Zero and negative still fall back to the default.
	require.Equal(t, ConfigDefault.GCInterval, configDefault(Config{GCInterval: 0}).GCInterval)
	require.Equal(t, ConfigDefault.GCInterval, configDefault(Config{GCInterval: -time.Second}).GCInterval)
	require.Equal(t, ConfigDefault.GCInterval, configDefault().GCInterval)
}

func Test_Storage_Memory_GC_Reclaims_Expired(t *testing.T) {
	testStore := New(Config{GCInterval: 50 * time.Millisecond})
	defer testStore.Close() //nolint:errcheck // best effort cleanup

	require.NoError(t, testStore.Set("john", []byte("doe"), 50*time.Millisecond))

	require.Eventually(t, func() bool {
		testStore.mux.RLock()
		defer testStore.mux.RUnlock()
		return len(testStore.db) == 0
	}, 2*time.Second, 25*time.Millisecond, "the collector should reclaim the expired entry")
}

func Benchmark_Memory_Get_WithExpiration(b *testing.B) {
	testStore := New()
	defer testStore.Close() //nolint:errcheck // best effort cleanup

	err := testStore.Set("john", []byte("doe"), time.Hour)
	require.NoError(b, err)

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_, err = testStore.Get("john")
	}

	require.NoError(b, err)
}
