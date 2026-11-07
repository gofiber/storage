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

	"github.com/stretchr/testify/require"

	"github.com/cockroachdb/pebble"
)

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
	store := New(Config{Path: t.TempDir(), GCInterval: time.Hour})
	defer store.Close() //nolint:errcheck // best effort cleanup

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
		b := db.NewBatch()
		for i := 0; i < resetBatchSize+5; i++ {
			require.NoError(t, b.Set([]byte("key-"+strconv.Itoa(i)), rawEntry(t, 0), nil))
		}
		require.NoError(t, b.Commit(pebble.Sync))
		require.NoError(t, b.Close())
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
	store := New(Config{Path: t.TempDir(), GCInterval: time.Hour})
	defer store.Close() //nolint:errcheck // best effort cleanup

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
	store := New(Config{Path: t.TempDir(), GCInterval: time.Hour})
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
	store := New(Config{Path: t.TempDir(), GCInterval: time.Hour, WriteOptions: pebble.NoSync})
	defer store.Close() //nolint:errcheck // best effort cleanup

	total := collectBatchSize + 10
	b := store.Conn().NewBatch()
	for i := 0; i < total; i++ {
		require.NoError(t, b.Set([]byte(fmt.Sprintf("key-%05d", i)), rawEntry(t, 1), nil))
	}
	require.NoError(t, b.Commit(pebble.Sync))
	require.NoError(t, b.Close())

	// Signal shutdown as Close does, without closing the database, so the sweep sees it between batches.
	store.stopOnce.Do(func() {
		close(store.done)
		<-store.stopped
	})

	store.collect()

	// One batch was reclaimed and the position saved, rather than finishing the whole sweep.
	require.Equal(t, []byte(fmt.Sprintf("key-%05d", collectBatchSize-1)), store.shared.gcCursor)

	remaining := 0
	iter, err := store.Conn().NewIter(nil)
	require.NoError(t, err)
	for iter.First(); iter.Valid(); iter.Next() {
		remaining++
	}
	require.NoError(t, iter.Close())
	require.Equal(t, 10, remaining)
}

func Test_Pebble_Collect_BoundedBatchesPerSweep(t *testing.T) {
	store := New(Config{Path: t.TempDir(), GCInterval: time.Hour, WriteOptions: pebble.NoSync})
	defer store.Close() //nolint:errcheck // best effort cleanup

	// One key more than a sweep may reclaim, all expired.
	total := collectMaxBatches*collectBatchSize + 1
	b := store.Conn().NewBatch()
	for i := 0; i < total; i++ {
		require.NoError(t, b.Set([]byte(fmt.Sprintf("key-%07d", i)), rawEntry(t, 1), nil))
	}
	require.NoError(t, b.Commit(pebble.NoSync))
	require.NoError(t, b.Close())

	store.collect()

	// The sweep gave up at its budget and left the rest for the next tick, remembering where it stopped.
	require.Equal(t, []byte(fmt.Sprintf("key-%07d", collectMaxBatches*collectBatchSize-1)), store.shared.gcCursor)

	remaining := 0
	iter, err := store.Conn().NewIter(nil)
	require.NoError(t, err)
	for iter.First(); iter.Valid(); iter.Next() {
		remaining++
	}
	require.NoError(t, iter.Close())
	require.Equal(t, 1, remaining)

	// The next sweep resumes and finishes, clearing the cursor.
	store.collect()
	require.Nil(t, store.shared.gcCursor)
}

func Test_Pebble_StoreCursor_IgnoresStaleEpoch(t *testing.T) {
	store := New(Config{Path: t.TempDir(), GCInterval: time.Hour})
	defer store.Close() //nolint:errcheck // best effort cleanup

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
