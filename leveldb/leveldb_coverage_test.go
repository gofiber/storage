package leveldb

import (
	"context"
	"encoding/binary"
	"fmt"
	"math"
	"testing"
	"time"

	"github.com/stretchr/testify/require"
	"github.com/syndtr/goleveldb/leveldb"
	"github.com/syndtr/goleveldb/leveldb/opt"
)

// newTestStorage opens a database in a temp dir and builds a storage on it, with the collector idle.
func newTestStorage(t *testing.T) *Storage {
	t.Helper()

	db, err := leveldb.OpenFile(t.TempDir(), nil)
	require.NoError(t, err)

	store := NewFromConnection(db, Config{GCInterval: time.Hour})
	t.Cleanup(func() {
		require.NoError(t, store.Close())
		_ = db.Close()
	})

	return store
}

// putExpired writes n entries whose deadline passed, in one batch.
func putExpired(t *testing.T, store *Storage, prefix string, n int) {
	t.Helper()

	past := time.Now().Add(-time.Minute).UnixNano()
	batch := new(leveldb.Batch)
	for i := range n {
		batch.Put([]byte(fmt.Sprintf("%s%06d", prefix, i)), encode([]byte("v"), past))
	}
	require.NoError(t, store.Conn().Write(batch, nil))
}

func countKeys(t *testing.T, db *leveldb.DB) int {
	t.Helper()

	iter := db.NewIterator(nil, nil)
	defer iter.Release()

	n := 0
	for iter.Next() {
		n++
	}
	require.NoError(t, iter.Error())

	return n
}

func Test_Operations_AfterClose(t *testing.T) {
	store := newTestStorage(t)
	require.NoError(t, store.Set("john", []byte("doe"), 0))
	require.NoError(t, store.Close())

	_, err := store.Get("john")
	require.ErrorIs(t, err, ErrClosed)
	require.ErrorIs(t, store.Set("john", []byte("doe"), 0), ErrClosed)
	require.ErrorIs(t, store.Delete("john"), ErrClosed)
	require.ErrorIs(t, store.Reset(), ErrClosed)

	// A closed storage has nothing left to sweep.
	store.collect()
	candidates, last, reachedEnd := store.expiredCandidates(nil)
	require.Empty(t, candidates)
	require.Nil(t, last)
	require.True(t, reachedEnd)

	// The latch is checked before the arguments, so even no-op calls report the closed state.
	_, err = store.Get("")
	require.ErrorIs(t, err, ErrClosed)
}

func Test_EmptyKeyAndValue_AreNoOps(t *testing.T) {
	store := newTestStorage(t)

	value, err := store.Get("")
	require.NoError(t, err)
	require.Nil(t, value)

	require.NoError(t, store.Set("", []byte("doe"), 0))
	require.NoError(t, store.Set("john", nil, 0))
	require.NoError(t, store.Set("john", []byte{}, 0))
	require.NoError(t, store.Delete(""))

	require.Zero(t, countKeys(t, store.Conn()))
}

func Test_WithContext_Success(t *testing.T) {
	store := newTestStorage(t)
	ctx := context.Background()

	require.NoError(t, store.SetWithContext(ctx, "john", []byte("doe"), time.Hour))

	value, err := store.GetWithContext(ctx, "john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), value)

	require.NoError(t, store.DeleteWithContext(ctx, "john"))
	value, err = store.GetWithContext(ctx, "john")
	require.NoError(t, err)
	require.Nil(t, value)

	require.NoError(t, store.SetWithContext(ctx, "jane", []byte("doe"), 0))
	require.NoError(t, store.ResetWithContext(ctx))
	require.Zero(t, countKeys(t, store.Conn()))
}

func Test_WithContext_Canceled_LeavesStateUntouched(t *testing.T) {
	store := newTestStorage(t)
	require.NoError(t, store.Set("john", []byte("doe"), 0))

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	_, err := store.GetWithContext(ctx, "john")
	require.ErrorIs(t, err, context.Canceled)
	require.ErrorIs(t, store.SetWithContext(ctx, "john", []byte("changed"), 0), context.Canceled)
	require.ErrorIs(t, store.DeleteWithContext(ctx, "john"), context.Canceled)
	require.ErrorIs(t, store.ResetWithContext(ctx), context.Canceled)

	// None of the cancelled calls reached the database.
	value, err := store.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), value)
}

func Test_Get_ExpiredEntryIsAMiss(t *testing.T) {
	store := newTestStorage(t)

	require.NoError(t, store.Conn().Put([]byte("john"), encode([]byte("doe"), time.Now().Add(-time.Minute).UnixNano()), nil))

	value, err := store.Get("john")
	require.NoError(t, err)
	require.Nil(t, value)

	// Get leaves reclaiming to the collector.
	_, err = store.Conn().Get([]byte("john"), nil)
	require.NoError(t, err)
}

func Test_Get_DatabaseError(t *testing.T) {
	db, err := leveldb.OpenFile(t.TempDir(), nil)
	require.NoError(t, err)

	store := NewFromConnection(db, Config{GCInterval: time.Hour})
	require.NoError(t, store.Set("john", []byte("doe"), 0))

	// The caller closes the borrowed handle behind the storage's back: the failure is reported, not read as a miss.
	require.NoError(t, db.Close())

	value, err := store.Get("john")
	require.ErrorIs(t, err, leveldb.ErrClosed)
	require.Nil(t, value)

	require.NoError(t, store.Close())
}

func Test_Set_DeadlineSaturates(t *testing.T) {
	store := newTestStorage(t)

	require.NoError(t, store.Set("john", []byte("doe"), time.Duration(math.MaxInt64)))

	raw, err := store.Conn().Get([]byte("john"), nil)
	require.NoError(t, err)
	require.Equal(t, uint64(math.MaxInt64), binary.BigEndian.Uint64(raw[len(envelopeMagic)+1:]))

	value, err := store.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), value)
}

func Test_Get_VersionedLegacyEnvelope(t *testing.T) {
	store := newTestStorage(t)

	live := []byte(`{"_fiber_storage_v":1,"value":"ZG9l","expire_at":"2100-01-01T00:00:00Z"}`)
	require.NoError(t, store.Conn().Put([]byte("live"), live, nil))
	value, err := store.Get("live")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), value)

	expired := []byte(`{"_fiber_storage_v":1,"value":"ZG9l","expire_at":"2000-01-01T00:00:00Z"}`)
	require.NoError(t, store.Conn().Put([]byte("expired"), expired, nil))
	value, err = store.Get("expired")
	require.NoError(t, err)
	require.Nil(t, value)
}

func Test_Close_ReleasesSharedStateOnlyOnce(t *testing.T) {
	// Releasing a handle no storage registered must leave the registry as it was.
	db, err := leveldb.OpenFile(t.TempDir(), nil)
	require.NoError(t, err)
	defer db.Close() //nolint:errcheck // best effort cleanup

	dbStatesMu.Lock()
	before := len(dbStates)
	dbStatesMu.Unlock()

	releaseDBState(db)

	dbStatesMu.Lock()
	after := len(dbStates)
	dbStatesMu.Unlock()
	require.Equal(t, before, after)
}

func Test_decodeExpiry(t *testing.T) {
	deadline := time.Date(2100, 1, 1, 0, 0, 0, 0, time.UTC)

	unknownBinary := encode([]byte("doe"), 0)
	unknownBinary[len(envelopeMagic)] = envelopeBinaryVersion + 1

	tests := []struct {
		name string
		data []byte
		kind envelopeKind
		at   time.Time
	}{
		{"binary with deadline", encode([]byte("doe"), deadline.UnixNano()), envelopeEntry, deadline},
		{"binary without deadline", encode([]byte("doe"), 0), envelopeEntry, time.Time{}},
		{"binary unknown version", unknownBinary, envelopeUnknown, time.Time{}},
		{"versioned json", []byte(`{"_fiber_storage_v":1,"value":"ZG9l","expire_at":"2100-01-01T00:00:00Z"}`), envelopeEntry, deadline},
		{"versioned json without value", []byte(`{"_fiber_storage_v":1,"expire_at":"2100-01-01T00:00:00Z"}`), envelopeCorrupt, time.Time{}},
		{"unknown json version", []byte(`{"_fiber_storage_v":99,"value":"ZG9l","expire_at":"2100-01-01T00:00:00Z"}`), envelopeUnknown, time.Time{}},
		{"unknown json version without value", []byte(`{"_fiber_storage_v":99}`), envelopeNone, time.Time{}},
		{"unversioned json", []byte(`{"value":"ZG9l","expire_at":"2100-01-01T00:00:00Z"}`), envelopeEntry, deadline},
		{"unversioned json with extra field", []byte(`{"value":"ZG9l","expire_at":"2100-01-01T00:00:00Z","x":1}`), envelopeNone, time.Time{}},
		{"payload resembling an envelope", []byte(`{"value":"aGk="}`), envelopeNone, time.Time{}},
		{"not json", []byte("plain text"), envelopeNone, time.Time{}},
	}

	for _, tc := range tests {
		t.Run(tc.name, func(t *testing.T) {
			at, kind := decodeExpiry(tc.data)
			require.Equal(t, tc.kind, kind)
			require.True(t, tc.at.Equal(at), "expected %v, got %v", tc.at, at)

			// The collector's decoder must agree with Get's about what an entry is.
			_, getKind := decode(tc.data)
			require.Equal(t, tc.kind, getKind)
		})
	}
}

func Test_isUnversionedEnvelope_KeyCase(t *testing.T) {
	// encoding/json matches field names case-insensitively, but an old envelope was written with exact names.
	require.False(t, isUnversionedEnvelope([]byte(`{"VALUE":"aGk=","expire_at":"2100-01-01T00:00:00Z"}`)))
	require.False(t, isUnversionedEnvelope([]byte(`not json`)))
	require.True(t, isUnversionedEnvelope([]byte(`{"value":"aGk=","expire_at":"2100-01-01T00:00:00Z"}`)))

	store := newTestStorage(t)
	raw := []byte(`{"VALUE":"aGk=","expire_at":"2000-01-01T00:00:00Z"}`)
	require.NoError(t, store.Conn().Put([]byte("key"), raw, nil))

	// Not an envelope, so it is a payload: returned verbatim and never collected.
	value, err := store.Get("key")
	require.NoError(t, err)
	require.Equal(t, raw, value)
}

func Test_Collect_ReclaimsLegacyAndBinaryEntries(t *testing.T) {
	store := newTestStorage(t)
	db := store.Conn()

	require.NoError(t, store.Set("live", []byte("doe"), time.Hour))
	require.NoError(t, store.Set("forever", []byte("doe"), 0))
	require.NoError(t, store.Set("binary-expired", []byte("doe"), time.Hour))
	require.NoError(t, db.Put([]byte("binary-expired"), encode([]byte("doe"), 1), nil))
	require.NoError(t, db.Put([]byte("json-expired"), []byte(`{"value":"ZG9l","expire_at":"2000-01-01T00:00:00Z"}`), nil))
	require.NoError(t, db.Put([]byte("json-v1-expired"), []byte(`{"_fiber_storage_v":1,"value":"ZG9l","expire_at":"2000-01-01T00:00:00Z"}`), nil))
	require.NoError(t, db.Put([]byte("json-live"), []byte(`{"value":"ZG9l","expire_at":"2100-01-01T00:00:00Z"}`), nil))
	require.NoError(t, db.Put([]byte("raw"), []byte("plain"), nil))
	require.NoError(t, db.Put([]byte("corrupt"), []byte(`{"_fiber_storage_v":1,"expire_at":"2000-01-01T00:00:00Z"}`), nil))

	store.collect()

	for _, gone := range []string{"binary-expired", "json-expired", "json-v1-expired"} {
		_, err := db.Get([]byte(gone), nil)
		require.ErrorIs(t, err, leveldb.ErrNotFound, gone)
	}
	for _, kept := range []string{"live", "forever", "json-live", "raw", "corrupt"} {
		_, err := db.Get([]byte(kept), nil)
		require.NoError(t, err, kept)
	}

	// Reaching the end of the keyspace rewinds the cursor.
	require.Nil(t, store.shared.gcCursor)
}

func Test_Collect_SpansBatches(t *testing.T) {
	store := newTestStorage(t)

	n := 2*collectBatchSize + 500
	putExpired(t, store, "exp", n)
	require.NoError(t, store.Set("zz-live", []byte("doe"), time.Hour))
	require.Equal(t, n+1, countKeys(t, store.Conn()))

	store.collect()

	// One sweep walks several batches until the end of the keyspace.
	require.Equal(t, 1, countKeys(t, store.Conn()))
	value, err := store.Get("zz-live")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), value)
	require.Nil(t, store.shared.gcCursor)
}

func Test_Collect_YieldsWhenCloseIsWaiting(t *testing.T) {
	store := newTestStorage(t)

	n := 2*collectBatchSize + 500
	putExpired(t, store, "exp", n)

	// Stop the collector goroutine the way Close does, leaving the storage itself open.
	store.stopOnce.Do(func() {
		close(store.done)
		<-store.stopped
	})

	store.collect()

	// Only the first batch ran, and the sweep remembers where to resume.
	require.Equal(t, n-collectBatchSize, countKeys(t, store.Conn()))
	require.Equal(t, []byte(fmt.Sprintf("exp%06d", collectBatchSize-1)), store.shared.gcCursor)
}

func Test_Collect_ScanLimitBoundsOnePass(t *testing.T) {
	store := newTestStorage(t)

	batch := new(leveldb.Batch)
	for i := range collectScanLimit + 5 {
		batch.Put([]byte(fmt.Sprintf("live%06d", i)), encode([]byte("v"), 0))
	}
	require.NoError(t, store.Conn().Write(batch, nil))

	candidates, last, reachedEnd := store.expiredCandidates(nil)
	require.Empty(t, candidates)
	require.False(t, reachedEnd)
	require.Equal(t, []byte(fmt.Sprintf("live%06d", collectScanLimit-1)), last)

	// Resuming after that key finishes the remainder.
	candidates, last, reachedEnd = store.expiredCandidates(last)
	require.Empty(t, candidates)
	require.True(t, reachedEnd)
	require.Equal(t, []byte(fmt.Sprintf("live%06d", collectScanLimit+4)), last)
}

func Test_Collect_ResumesFromCursor(t *testing.T) {
	store := newTestStorage(t)

	putExpired(t, store, "a", 3)

	// Seek on a key that no longer exists lands on the next one.
	candidates, _, reachedEnd := store.expiredCandidates([]byte("a000000x"))
	require.Equal(t, [][]byte{[]byte("a000001"), []byte("a000002")}, candidates)
	require.True(t, reachedEnd)

	store.shared.gcCursor = []byte("a000000")
	store.collect()

	// The sweep started past the first key, so it was left alone.
	require.Equal(t, 1, countKeys(t, store.Conn()))
	_, err := store.Conn().Get([]byte("a000000"), nil)
	require.NoError(t, err)
}

func Test_storeCursor_IgnoresStaleEpoch(t *testing.T) {
	store := newTestStorage(t)

	cursor, epoch := store.loadCursor()
	require.Nil(t, cursor)

	store.storeCursor([]byte("k"), epoch)
	require.Equal(t, []byte("k"), store.shared.gcCursor)

	// A Reset between load and store invalidates the position.
	require.NoError(t, store.Reset())
	store.storeCursor([]byte("stale"), epoch)
	require.Nil(t, store.shared.gcCursor)

	_, newEpoch := store.loadCursor()
	require.Equal(t, epoch+1, newEpoch)
}

func Test_deleteIfStillExpired_Skips(t *testing.T) {
	store := newTestStorage(t)

	require.NoError(t, store.Set("live", []byte("doe"), time.Hour))
	require.NoError(t, store.Conn().Put([]byte("raw"), []byte("plain"), nil))

	// A candidate that vanished, a live one and a bare payload are all left as they are.
	store.deleteIfStillExpired([][]byte{[]byte("missing"), []byte("live"), []byte("raw")})
	require.Equal(t, 2, countKeys(t, store.Conn()))

	// After close the collector must not write.
	putExpired(t, store, "exp", 1)
	require.NoError(t, store.Close())
	store.deleteIfStillExpired([][]byte{[]byte("exp000000")})
	_, err := store.Conn().Get([]byte("exp000000"), nil)
	require.NoError(t, err)
}

// readOnlyHandle opens a database the storage can read but whose writes the engine rejects.
func readOnlyHandle(t *testing.T, keys int) *Storage {
	t.Helper()

	dir := t.TempDir()
	rw, err := leveldb.OpenFile(dir, nil)
	require.NoError(t, err)

	batch := new(leveldb.Batch)
	for i := range keys {
		batch.Put([]byte(fmt.Sprintf("k%06d", i)), encode([]byte("v"), 0))
	}
	require.NoError(t, rw.Write(batch, nil))
	require.NoError(t, rw.Close())

	db, err := leveldb.OpenFile(dir, &opt.Options{ReadOnly: true})
	require.NoError(t, err)

	// Config.ReadOnly stays false, so the storage attempts writes and the engine refuses them.
	store := NewFromConnection(db, Config{GCInterval: time.Hour})
	t.Cleanup(func() {
		require.NoError(t, store.Close())
		_ = db.Close()
	})

	return store
}

func Test_WriteErrors_AreReported(t *testing.T) {
	store := readOnlyHandle(t, 3)

	require.ErrorIs(t, store.Set("john", []byte("doe"), 0), leveldb.ErrReadOnly)
	require.ErrorIs(t, store.Delete("k000000"), leveldb.ErrReadOnly)

	// The final flush fails.
	require.ErrorIs(t, store.Reset(), leveldb.ErrReadOnly)

	value, err := store.Get("k000001")
	require.NoError(t, err)
	require.Equal(t, []byte("v"), value)
}

func Test_Reset_ChunkWriteError(t *testing.T) {
	store := readOnlyHandle(t, resetBatchSize+10)

	// The first full chunk fails, so nothing was removed.
	require.ErrorIs(t, store.Reset(), leveldb.ErrReadOnly)
	require.Equal(t, resetBatchSize+10, countKeys(t, store.Conn()))
}

func Test_Reset_IteratorError(t *testing.T) {
	db, err := leveldb.OpenFile(t.TempDir(), nil)
	require.NoError(t, err)

	store := NewFromConnection(db, Config{GCInterval: time.Hour})
	require.NoError(t, store.Set("john", []byte("doe"), 0))
	require.NoError(t, db.Close())

	// An iterator over a closed handle fails; the error surfaces instead of reporting a clean reset.
	require.ErrorIs(t, store.Reset(), leveldb.ErrClosed)
	require.NoError(t, store.Close())
}
