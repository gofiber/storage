package pebble

import (
	"context"
	"fmt"
	"os"
	"path/filepath"
	"strconv"
	"testing"
	"time"

	"github.com/stretchr/testify/require"

	"github.com/cockroachdb/pebble"
)

var testStore *Storage

func TestMain(m *testing.M) {
	dir, err := os.MkdirTemp("", "pebble-test")
	if err != nil {
		panic(err)
	}

	testStore = New(Config{
		Path:         filepath.Join(dir, "test.db"),
		WriteOptions: nil,
	})

	code := m.Run()

	_ = os.RemoveAll(dir)
	os.Exit(code)
}

func Test_Pebble_Set(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)
}

func Test_Pebble_Set_Override(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	err = testStore.Set(key, val, 0)
	require.NoError(t, err)
}

func Test_Pebble_Get(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)
}

func Test_Pebble_Set_Expiration(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
		exp = 1 * time.Second
	)

	err := testStore.Set(key, val, exp)
	require.NoError(t, err)

	// Expirations round up to the next whole second, so the entry may outlive the request by up to one.
	deadline := time.Now().Add(4 * time.Second)
	for {
		result, err := testStore.Get(key)
		require.NoError(t, err)
		require.False(t, time.Now().After(deadline), "key should expire")
		if len(result) == 0 {
			break
		}
		time.Sleep(100 * time.Millisecond)
	}
}

func Test_Pebble_Set_Expiration_Sub_Second(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	// Sub-second expirations round up to a whole second; they must not expire early, let alone at once.
	// The deadline is taken first: Set measures the entry's from inside the call, so starting here would outlast it by however long Set took.
	deadline := time.Now().Add(900 * time.Millisecond)

	err := testStore.Set(key, val, 900*time.Millisecond)
	require.NoError(t, err)
	for time.Now().Before(deadline) {
		result, getErr := testStore.Get(key)
		require.NoError(t, getErr)
		require.Equal(t, val, result, "key expired before its expiration")
		time.Sleep(20 * time.Millisecond)
	}

	require.NoError(t, testStore.Delete(key))
}

func Test_Pebble_ConfigDefault_NoArgs(t *testing.T) {
	// configDefault used to call itself when given no config, overflowing the stack in New().
	require.Equal(t, ConfigDefault, configDefault())
}

func Test_Pebble_Get_Missing(t *testing.T) {
	result, err := testStore.Get("not-a-key")
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_Pebble_Delete(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	err = testStore.Delete(key)
	require.NoError(t, err)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_Pebble_Reset(t *testing.T) {
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

func Test_Pebble_WithContext_Canceled(t *testing.T) {
	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	require.ErrorIs(t, testStore.SetWithContext(ctx, "john", []byte("doe"), 0), context.Canceled)

	_, err := testStore.GetWithContext(ctx, "john")
	require.ErrorIs(t, err, context.Canceled)

	require.ErrorIs(t, testStore.DeleteWithContext(ctx, "john"), context.Canceled)
	require.ErrorIs(t, testStore.ResetWithContext(ctx), context.Canceled)
}

func Test_Pebble_Reset_LargerThanOneBatch(t *testing.T) {
	total := resetBatchSize + 10
	for i := 0; i < total; i++ {
		require.NoError(t, testStore.Set("key-"+strconv.Itoa(i), []byte("doe"), 0))
	}

	require.NoError(t, testStore.Reset())

	for i := 0; i < total; i++ {
		result, err := testStore.Get("key-" + strconv.Itoa(i))
		require.NoError(t, err)
		require.Zero(t, len(result))
	}
}

func Test_Pebble_Close_Twice(t *testing.T) {
	dir, err := os.MkdirTemp("", "pebble-close-twice")
	require.NoError(t, err)
	defer func() {
		require.NoError(t, os.RemoveAll(dir))
	}()

	store := New(Config{Path: filepath.Join(dir, "test.db")})

	require.NoError(t, store.Close())
	require.NotPanics(t, func() {
		require.NoError(t, store.Close())
	})
}

func Test_Pebble_Close(t *testing.T) {
	// A store of its own: closing the shared one would break the benchmarks that keep using it.
	dir, err := os.MkdirTemp("", "pebble-close")
	require.NoError(t, err)
	defer func() {
		require.NoError(t, os.RemoveAll(dir))
	}()

	store := New(Config{Path: filepath.Join(dir, "test.db")})

	require.Nil(t, store.Close())

	// Operations after Close are refused rather than panicking inside Pebble.
	_, err = store.Get("john")
	require.ErrorIs(t, err, ErrClosed)
	require.ErrorIs(t, store.Set("john", []byte("doe"), 0), ErrClosed)
	require.ErrorIs(t, store.Delete("john"), ErrClosed)
	require.ErrorIs(t, store.Reset(), ErrClosed)
}

func Test_Pebble_Conn(t *testing.T) {
	require.True(t, testStore.Conn() != nil)
}

func Benchmark_Pebble_Set(b *testing.B) {
	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		err = testStore.Set("john", []byte("doe"), 0)
	}

	require.NoError(b, err)
}

func Benchmark_Pebble_Get(b *testing.B) {
	err := testStore.Set("john", []byte("doe"), 0)
	require.NoError(b, err)

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_, err = testStore.Get("john")
	}

	require.NoError(b, err)
}

func Benchmark_Pebble_SetAndDelete(b *testing.B) {
	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		_ = testStore.Set("john", []byte("doe"), 0)
		err = testStore.Delete("john")
	}

	require.NoError(b, err)
}

func Test_Pebble_GC_Reclaims_Expired(t *testing.T) {
	dir, err := os.MkdirTemp("", "pebble-gc")
	require.NoError(t, err)
	defer func() {
		require.NoError(t, os.RemoveAll(dir))
	}()

	store := New(Config{Path: filepath.Join(dir, "test.db"), GCInterval: 100 * time.Millisecond})
	defer store.Close() //nolint:errcheck // best effort cleanup

	require.NoError(t, store.Set("john", []byte("doe"), time.Second))

	// Get reports the miss without deleting, so the entry stays until the collector reclaims it.
	deadline := time.Now().Add(6 * time.Second)
	for {
		// Asserted at the top so a key reclaimed only after the deadline fails rather than breaking out.
		require.False(t, time.Now().After(deadline), "collector should reclaim the key")

		_, closer, getErr := store.Conn().Get([]byte("john"))
		if getErr != nil {
			require.ErrorIs(t, getErr, pebble.ErrNotFound)
			break
		}
		require.NoError(t, closer.Close())
		time.Sleep(100 * time.Millisecond)
	}
}

func Test_Pebble_GC_Resumes_Across_Batches(t *testing.T) {
	dir, err := os.MkdirTemp("", "pebble-gc-batches")
	require.NoError(t, err)
	defer func() {
		require.NoError(t, os.RemoveAll(dir))
	}()

	// A long interval keeps the collector away; collect is driven directly so batching is what is tested.
	store := New(Config{Path: filepath.Join(dir, "test.db"), GCInterval: time.Hour})
	defer store.Close() //nolint:errcheck // best effort cleanup

	// More keys than one batch holds, so the scan has to resume rather than start over each time.
	total := collectBatchSize + 10
	for i := 0; i < total; i++ {
		require.NoError(t, store.Set("key-"+strconv.Itoa(i), []byte("doe"), time.Second))
	}

	time.Sleep(2100 * time.Millisecond)
	store.collect()

	iter, err := store.Conn().NewIter(nil)
	require.NoError(t, err)
	defer func() {
		require.NoError(t, iter.Close())
	}()

	remaining := 0
	for iter.First(); iter.Valid(); iter.Next() {
		remaining++
	}
	require.Zero(t, remaining, "every expired key should have been reclaimed")
}

func Test_Pebble_ExpiredCandidates_Resumes_After_Key(t *testing.T) {
	dir, err := os.MkdirTemp("", "pebble-gc-resume")
	require.NoError(t, err)
	defer func() {
		require.NoError(t, os.RemoveAll(dir))
	}()

	store := New(Config{Path: filepath.Join(dir, "test.db"), GCInterval: time.Hour})
	defer store.Close() //nolint:errcheck // best effort cleanup

	for _, key := range []string{"a", "b", "c"} {
		require.NoError(t, store.Set(key, []byte("doe"), time.Second))
	}
	time.Sleep(2100 * time.Millisecond)

	candidates, last, reachedEnd := store.expiredCandidates(nil)
	require.Equal(t, [][]byte{[]byte("a"), []byte("b"), []byte("c")}, candidates)
	require.Equal(t, []byte("c"), last)
	require.True(t, reachedEnd)

	// Resuming after a key must skip it and everything before, which stops each batch rescanning.
	candidates, last, reachedEnd = store.expiredCandidates([]byte("a"))
	require.Equal(t, [][]byte{[]byte("b"), []byte("c")}, candidates)
	require.Equal(t, []byte("c"), last)
	require.True(t, reachedEnd)

	candidates, _, reachedEnd = store.expiredCandidates([]byte("c"))
	require.Empty(t, candidates)
	require.True(t, reachedEnd)
}

func Test_Pebble_ExpiredCandidates_Reports_Last_Examined(t *testing.T) {
	dir, err := os.MkdirTemp("", "pebble-gc-examined")
	require.NoError(t, err)
	defer func() {
		require.NoError(t, os.RemoveAll(dir))
	}()

	store := New(Config{Path: filepath.Join(dir, "test.db"), GCInterval: time.Hour})
	defer store.Close() //nolint:errcheck // best effort cleanup

	// The last key reported is the last examined, not the last expired: otherwise every batch rewalks the live keys.
	require.NoError(t, store.Set("a", []byte("doe"), time.Second))
	require.NoError(t, store.Set("b", []byte("doe"), 0))
	require.NoError(t, store.Set("c", []byte("doe"), 0))
	time.Sleep(2100 * time.Millisecond)

	candidates, last, reachedEnd := store.expiredCandidates(nil)
	require.Equal(t, [][]byte{[]byte("a")}, candidates)
	require.Equal(t, []byte("c"), last)
	require.True(t, reachedEnd)
}

func Test_Pebble_ExpiredCandidates_Stops_At_Scan_Limit(t *testing.T) {
	dir, err := os.MkdirTemp("", "pebble-gc-scanlimit")
	require.NoError(t, err)
	defer func() {
		require.NoError(t, os.RemoveAll(dir))
	}()

	store := New(Config{Path: filepath.Join(dir, "test.db"), GCInterval: time.Hour})
	defer store.Close() //nolint:errcheck // best effort cleanup

	// More live keys than one pass examines and none expired: the pass must stop at its scan budget.
	total := collectScanLimit + 10
	for i := 0; i < total; i++ {
		require.NoError(t, store.Set(fmt.Sprintf("key-%07d", i), []byte("doe"), 0))
	}

	candidates, last, reachedEnd := store.expiredCandidates(nil)
	require.Empty(t, candidates)
	require.False(t, reachedEnd, "the pass should stop at its scan budget")
	require.Equal(t, []byte(fmt.Sprintf("key-%07d", collectScanLimit-1)), last)

	candidates, _, reachedEnd = store.expiredCandidates(last)
	require.Empty(t, candidates)
	require.True(t, reachedEnd)
}

func Test_Pebble_GC_Cursor_Cleared_After_Full_Sweep_And_Reset(t *testing.T) {
	dir, err := os.MkdirTemp("", "pebble-gc-cursor")
	require.NoError(t, err)
	defer func() {
		require.NoError(t, os.RemoveAll(dir))
	}()

	store := New(Config{Path: filepath.Join(dir, "test.db"), GCInterval: time.Hour})
	defer store.Close() //nolint:errcheck // best effort cleanup

	require.NoError(t, store.Set("a", []byte("doe"), 0))

	// A sweep that reaches the end clears the cursor, so the next one starts over.
	store.collect()
	require.Nil(t, store.gcCursor)

	// So does a Reset: the keys the cursor pointed past are gone, and it would skip everything written after.
	store.gcCursor = []byte("z")
	require.NoError(t, store.Reset())
	require.Nil(t, store.gcCursor)
}

func Test_Pebble_NewFromConnection(t *testing.T) {
	db, err := pebble.Open(t.TempDir(), &pebble.Options{})
	require.NoError(t, err)
	defer db.Close() //nolint:errcheck // best effort cleanup

	store := NewFromConnection(db)
	require.Same(t, db, store.Conn())

	require.NoError(t, store.Set("john", []byte("doe"), 0))

	result, err := store.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), result)

	// The database is the caller's, so closing the storage must leave it open.
	require.NoError(t, store.Close())
	require.NoError(t, db.Set([]byte("jane"), []byte("doe"), pebble.Sync))

	// The storage itself is closed even though the database stays open.
	require.ErrorIs(t, store.Set("jane", []byte("doe"), 0), ErrClosed)
}

func Test_Pebble_NewFromConnection_Nil(t *testing.T) {
	require.Panics(t, func() {
		NewFromConnection(nil)
	})
}
