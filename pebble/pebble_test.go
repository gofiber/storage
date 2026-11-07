package pebble

import (
	"context"
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"strconv"
	"testing"
	"time"

	"github.com/cockroachdb/pebble"
	"github.com/stretchr/testify/require"
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

	require.Zero(t, countKeys(t, store.Conn()), "every expired key should have been reclaimed")
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
	require.Nil(t, store.shared.gcCursor)

	// So does a Reset: the keys the cursor pointed past are gone, and it would skip everything written after.
	store.shared.gcCursor = []byte("z")
	require.NoError(t, store.Reset())
	require.Nil(t, store.shared.gcCursor)
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

// Storages on one handle must share the write-order lock, or one's collector could
// delete a key another just refreshed.
func Test_Pebble_NewFromConnection_SharedDB(t *testing.T) {
	db, err := pebble.Open(t.TempDir(), &pebble.Options{})
	require.NoError(t, err)
	defer db.Close() //nolint:errcheck // best effort cleanup

	s1 := NewFromConnection(db)
	s2 := NewFromConnection(db)
	require.Same(t, s1.shared, s2.shared)

	// The lock outlives each storage but not all of them.
	require.NoError(t, s1.Close())
	require.NoError(t, s2.Set("john", []byte("doe"), 0))
	require.NoError(t, s2.Close())
	require.NoError(t, s2.Close())

	dbStatesMu.Lock()
	_, held := dbStates[db]
	dbStatesMu.Unlock()
	require.False(t, held)
}

// Pebble panics on a closed database, so a sibling on a handle an owning storage closed must
// report ErrClosed rather than reach it; a Reset must also rewind every collector on the handle.
func Test_Pebble_SharedDB_OwnerCloseAndReset(t *testing.T) {
	owner := newTempStore(t)
	sibling := NewFromConnection(owner.Conn(), Config{GCInterval: time.Hour})

	require.NoError(t, sibling.Set("john", []byte("doe"), 0))

	// A sibling's Reset must rewind this storage's cursor too, since they share the keyspace.
	sibling.shared.gcCursor = []byte("z")
	require.NoError(t, owner.Reset())
	require.Nil(t, sibling.shared.gcCursor)

	// Closing the owner closes the database, so the sibling must refuse to use it.
	require.NoError(t, owner.Close())
	require.ErrorIs(t, sibling.Set("jane", []byte("doe"), 0), ErrClosed)
	_, err := sibling.Get("john")
	require.ErrorIs(t, err, ErrClosed)
	require.ErrorIs(t, sibling.Delete("john"), ErrClosed)
	require.ErrorIs(t, sibling.Reset(), ErrClosed)
	require.NoError(t, sibling.Close())
}

// rawEntry encodes an entry the way Set does, with an explicit deadline.
func rawEntry(t testing.TB, expires int64) []byte {
	t.Helper()

	b, err := json.Marshal(CacheType{Data: []byte("doe"), Created: 1, Expires: expires})
	require.NoError(t, err)
	return b
}

// openReadOnly seeds a database with the given keys, then reopens it read-only so every write fails.
func openReadOnly(t *testing.T, seed func(db *pebble.DB)) *pebble.DB {
	t.Helper()

	dir := t.TempDir()
	db, err := pebble.Open(dir, &pebble.Options{})
	require.NoError(t, err)
	seed(db)
	require.NoError(t, db.Close())

	ro, err := pebble.Open(dir, &pebble.Options{ReadOnly: true})
	require.NoError(t, err)
	t.Cleanup(func() {
		require.NoError(t, ro.Close())
	})
	return ro
}

// newTempStore opens a storage in a temp dir with its collector idle, so tests drive collect themselves,
// and closes it when the test ends. Writes are synced unless write options say otherwise.
func newTempStore(t *testing.T, writeOptions ...*pebble.WriteOptions) *Storage {
	t.Helper()

	cfg := Config{Path: t.TempDir(), GCInterval: time.Hour}
	if len(writeOptions) > 0 {
		cfg.WriteOptions = writeOptions[0]
	}

	store := New(cfg)
	t.Cleanup(func() {
		require.NoError(t, store.Close())
	})

	return store
}

// putEntries commits n entries in one batch, each keyed by format applied to its index and all expiring
// at the same time: 0 for never, 1 for long ago.
func putEntries(t *testing.T, db *pebble.DB, n int, format string, expires int64) {
	t.Helper()

	val := rawEntry(t, expires)
	b := db.NewBatch()
	for i := range n {
		require.NoError(t, b.Set([]byte(fmt.Sprintf(format, i)), val, nil))
	}
	require.NoError(t, b.Commit(pebble.NoSync))
	require.NoError(t, b.Close())
}

// countKeys reports how many keys the database holds.
func countKeys(t *testing.T, db *pebble.DB) int {
	t.Helper()

	iter, err := db.NewIter(nil)
	require.NoError(t, err)
	defer func() {
		require.NoError(t, iter.Close())
	}()

	n := 0
	for iter.First(); iter.Valid(); iter.Next() {
		n++
	}
	require.NoError(t, iter.Error())

	return n
}

func Test_Pebble_New_InvalidPath(t *testing.T) {
	// The parent directory does not exist, so the path can be neither stat'ed nor written.
	path := filepath.Join(t.TempDir(), "missing", "test.db")

	require.PanicsWithError(t, "invalid filepath", func() {
		New(Config{Path: path})
	})
}

func Test_Pebble_New_OpenFails(t *testing.T) {
	// A regular file passes the path check but cannot be opened as a database directory.
	path := filepath.Join(t.TempDir(), "file")
	require.NoError(t, os.WriteFile(path, []byte("x"), 0o600))

	require.Panics(t, func() {
		New(Config{Path: path})
	})
}

func Test_Pebble_New_DirectoryLocked(t *testing.T) {
	dir := t.TempDir()
	store := New(Config{Path: dir, GCInterval: time.Hour})
	defer store.Close() //nolint:errcheck // best effort cleanup

	// Pebble holds a directory lock, so a second owner of the same directory cannot open it.
	require.Panics(t, func() {
		New(Config{Path: dir})
	})
}

func Test_Pebble_ReleaseDBState_Unknown(t *testing.T) {
	db, err := pebble.Open(t.TempDir(), &pebble.Options{})
	require.NoError(t, err)
	defer db.Close() //nolint:errcheck // best effort cleanup

	// Releasing a handle that never acquired state is a no-op rather than a panic.
	require.NotPanics(t, func() {
		releaseDBState(db)
	})

	dbStatesMu.Lock()
	_, held := dbStates[db]
	dbStatesMu.Unlock()
	require.False(t, held)
}

func Test_Pebble_EmptyArguments(t *testing.T) {
	// Empty keys and values are ignored rather than stored.
	result, err := testStore.Get("")
	require.NoError(t, err)
	require.Nil(t, result)

	require.NoError(t, testStore.Set("", []byte("doe"), 0))
	require.NoError(t, testStore.Set("empty-val", nil, 0))
	require.NoError(t, testStore.Delete(""))

	result, err = testStore.Get("empty-val")
	require.NoError(t, err)
	require.Nil(t, result)
}

func Test_Pebble_WithContext(t *testing.T) {
	ctx := context.Background()

	require.NoError(t, testStore.SetWithContext(ctx, "ctx-john", []byte("doe"), 0))

	result, err := testStore.GetWithContext(ctx, "ctx-john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), result)

	require.NoError(t, testStore.DeleteWithContext(ctx, "ctx-john"))

	result, err = testStore.GetWithContext(ctx, "ctx-john")
	require.NoError(t, err)
	require.Nil(t, result)

	require.NoError(t, testStore.SetWithContext(ctx, "ctx-jane", []byte("doe"), 0))
	require.NoError(t, testStore.ResetWithContext(ctx))

	result, err = testStore.GetWithContext(ctx, "ctx-jane")
	require.NoError(t, err)
	require.Nil(t, result)
}

func Test_Pebble_Get_Corrupt_Entry(t *testing.T) {
	require.NoError(t, testStore.Conn().Set([]byte("corrupt"), []byte("not json"), pebble.Sync))
	defer func() {
		require.NoError(t, testStore.Delete("corrupt"))
	}()

	result, err := testStore.Get("corrupt")
	require.Error(t, err)
	require.Nil(t, result)
}

func Test_Pebble_Get_Expired_Entry(t *testing.T) {
	// An entry past its deadline reads as a miss even though the collector has not reclaimed it.
	require.NoError(t, testStore.Conn().Set([]byte("stale"), rawEntry(t, time.Now().Unix()-10), pebble.Sync))
	defer func() {
		require.NoError(t, testStore.Delete("stale"))
	}()

	result, err := testStore.Get("stale")
	require.NoError(t, err)
	require.Nil(t, result)
}

func Test_Pebble_Reset_Empty(t *testing.T) {
	store := newTempStore(t)

	require.NoError(t, store.Reset())
}

func Test_Pebble_ReadOnly_WriteErrors(t *testing.T) {
	db := openReadOnly(t, func(db *pebble.DB) {
		require.NoError(t, db.Set([]byte("john"), rawEntry(t, 0), pebble.Sync))
	})
	store := NewFromConnection(db, Config{GCInterval: time.Hour})
	defer store.Close() //nolint:errcheck // best effort cleanup

	// Reads still work.
	result, err := store.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), result)

	// The database's own write errors are reported rather than swallowed.
	require.ErrorIs(t, store.Set("jane", []byte("doe"), 0), pebble.ErrReadOnly)
	require.ErrorIs(t, store.Delete("john"), pebble.ErrReadOnly)
	require.ErrorIs(t, store.Reset(), pebble.ErrReadOnly)

	// The failed delete and reset left the entry in place.
	result, err = store.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), result)
}

func Test_Pebble_ReadOnly_Reset_FailsMidway(t *testing.T) {
	db := openReadOnly(t, func(db *pebble.DB) {
		putEntries(t, db, resetBatchSize+5, "key-%d", 0)
	})
	store := NewFromConnection(db, Config{GCInterval: time.Hour})
	defer store.Close() //nolint:errcheck // best effort cleanup

	// The first full chunk is the one that fails to commit.
	require.ErrorIs(t, store.Reset(), pebble.ErrReadOnly)
}

func Test_Pebble_ReadOnly_Collect_StopsOnCommitFailure(t *testing.T) {
	db := openReadOnly(t, func(db *pebble.DB) {
		require.NoError(t, db.Set([]byte("a"), rawEntry(t, 1), pebble.Sync))
		require.NoError(t, db.Set([]byte("b"), rawEntry(t, 0), pebble.Sync))
	})
	store := NewFromConnection(db, Config{GCInterval: time.Hour})
	defer store.Close() //nolint:errcheck // best effort cleanup

	candidates, _, _ := store.expiredCandidates(nil)
	require.Equal(t, [][]byte{[]byte("a")}, candidates)
	require.False(t, store.deleteIfStillExpired(candidates), "a failed commit should end the sweep")

	// The sweep stops where it began, so the next tick retries the same keys.
	store.collect()
	require.Nil(t, store.shared.gcCursor)

	value, closer, err := db.Get([]byte("a"))
	require.NoError(t, err)
	require.NotEmpty(t, value)
	require.NoError(t, closer.Close())
}

func Test_Pebble_DeleteIfStillExpired(t *testing.T) {
	store := newTempStore(t)

	past := time.Now().Unix() - 10
	require.NoError(t, store.Conn().Set([]byte("stale"), rawEntry(t, past), pebble.Sync))
	// Refreshed after the candidate list was taken: must survive.
	require.NoError(t, store.Conn().Set([]byte("refreshed"), rawEntry(t, 0), pebble.Sync))

	// "gone" vanished since it was listed; that is skipped rather than failing the sweep.
	require.True(t, store.deleteIfStillExpired([][]byte{[]byte("gone"), []byte("refreshed"), []byte("stale")}))

	_, closer, err := store.Conn().Get([]byte("stale"))
	require.ErrorIs(t, err, pebble.ErrNotFound)
	require.Nil(t, closer)

	result, err := store.Get("refreshed")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), result)

	// Nothing left to delete is still a successful pass.
	require.True(t, store.deleteIfStillExpired([][]byte{[]byte("gone")}))
}

func Test_Pebble_Closed_Internals(t *testing.T) {
	store := newTempStore(t)
	require.NoError(t, store.Set("a", []byte("doe"), 0))
	require.NoError(t, store.Close())

	// A closed storage must not touch the database: the collector reports an empty, finished pass.
	candidates, last, reachedEnd := store.expiredCandidates(nil)
	require.Empty(t, candidates)
	require.Nil(t, last)
	require.True(t, reachedEnd)

	require.False(t, store.deleteIfStillExpired([][]byte{[]byte("a")}))
	require.NotPanics(t, store.collect)
	require.Nil(t, store.shared.gcCursor)
}

func Test_Pebble_Collect_StopsWhenClosing(t *testing.T) {
	store := newTempStore(t, pebble.NoSync)

	putEntries(t, store.Conn(), collectBatchSize+10, "key-%05d", 1)

	// Signal shutdown as Close does, without closing the database, so the sweep sees it between batches.
	store.stopOnce.Do(func() {
		close(store.done)
		<-store.stopped
	})

	store.collect()

	// One batch was reclaimed and the position saved, rather than finishing the whole sweep.
	require.Equal(t, []byte(fmt.Sprintf("key-%05d", collectBatchSize-1)), store.shared.gcCursor)
	require.Equal(t, 10, countKeys(t, store.Conn()))
}

func Test_Pebble_Collect_BoundedBatchesPerSweep(t *testing.T) {
	store := newTempStore(t, pebble.NoSync)

	// One key more than a sweep may reclaim, all expired.
	putEntries(t, store.Conn(), collectMaxBatches*collectBatchSize+1, "key-%07d", 1)

	store.collect()

	// The sweep gave up at its budget and left the rest for the next tick, remembering where it stopped.
	require.Equal(t, []byte(fmt.Sprintf("key-%07d", collectMaxBatches*collectBatchSize-1)), store.shared.gcCursor)
	require.Equal(t, 1, countKeys(t, store.Conn()))

	// The next sweep resumes and finishes, clearing the cursor.
	store.collect()
	require.Nil(t, store.shared.gcCursor)
}

func Test_Pebble_StoreCursor_IgnoresStaleEpoch(t *testing.T) {
	store := newTempStore(t)

	cursor, epoch := store.loadCursor()
	require.Nil(t, cursor)

	// A Reset between loading and storing invalidates the position the sweep holds.
	require.NoError(t, store.Reset())
	store.storeCursor([]byte("z"), epoch)
	require.Nil(t, store.shared.gcCursor)

	_, epoch = store.loadCursor()
	store.storeCursor([]byte("z"), epoch)
	require.Equal(t, []byte("z"), store.shared.gcCursor)
}

func Test_Pebble_Expired(t *testing.T) {
	now := time.Now().Unix()

	require.True(t, expired(rawEntry(t, now-1), now))
	require.True(t, expired(rawEntry(t, now), now))
	require.False(t, expired(rawEntry(t, now+10), now))
	require.False(t, expired(rawEntry(t, 0), now), "no deadline never expires")

	// An undecodable value is left for Get to report rather than reclaimed.
	require.False(t, expired([]byte("not json"), now))
}
