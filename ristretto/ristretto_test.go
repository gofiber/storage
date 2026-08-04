package ristretto

import (
	"context"
	"os"
	"testing"
	"time"

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
	// A store of its own: closing the shared one would break the benchmarks
	// below, which keep using it.
	store := New()

	require.Nil(t, store.Close())

	// A second Close must neither panic nor report a spurious error.
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

// newTestStore returns a cache of its own, so the test does not depend on the
// lifecycle of the shared testStore.
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

	// Ristretto buffers writes, so this used to require polling. Set now waits
	// for the write to be applied before returning.
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

	// Mutating the slice returned by Get must not corrupt it either.
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

	// Set returns without waiting for the buffered write, so a Get right
	// after it may or may not see the value. It must at least not error.
	require.NoError(t, testStore.Set("john", []byte("doe"), 0))

	_, err := testStore.Get("john")
	require.NoError(t, err)

	// The value does land once the buffer drains.
	require.Eventually(t, func() bool {
		val, err := testStore.Get("john")
		return err == nil && len(val) > 0
	}, time.Second, 10*time.Millisecond)
}
