package leveldb

import (
	"context"
	"encoding/binary"
	"os"
	"strconv"
	"testing"
	"time"

	"github.com/stretchr/testify/require"
	"github.com/syndtr/goleveldb/leveldb"
)

func removeAllFiles(dir string) error {
	return os.RemoveAll(dir)
}

func Test_New_EmptyConfig(t *testing.T) {
	db := New()
	require.NotNil(t, db)

	_, err := os.Stat("./fiber.leveldb")
	require.Nil(t, err)

	err = removeAllFiles("./fiber.leveldb")
	require.Nil(t, err)
}

func Test_New_WithConfig(t *testing.T) {
	db := New(Config{
		Path: "./testdb",
	})
	require.NotNil(t, db)
	_, err := os.Stat("./testdb")
	require.Nil(t, err)

	err = removeAllFiles("./testdb")
	require.Nil(t, err)
}

func Test_Set_Overwrite(t *testing.T) {
	db := New()

	db.Set("key", []byte("value"), time.Second*1)
	db.Set("key", []byte("value2"), time.Second*1)

	value, err := db.Get("key")
	require.Nil(t, err)
	require.Equal(t, []byte("value2"), value)

	err = removeAllFiles("./fiber.leveldb")
	require.Nil(t, err)
}

func Test_Get_For0Second(t *testing.T) {
	db := New()

	db.Set("key", []byte("value"), 0)

	_, err := db.Get("key")
	require.Nil(t, err)

	err = removeAllFiles("./fiber.leveldb")
	require.Nil(t, err)
}

func Test_Get_ForExpired100Millisecond(t *testing.T) {
	db := New()

	require.NoError(t, db.Set("key", []byte("value"), time.Millisecond*100))

	// Anahtarın silinmesini bekle
	deadline := time.Now().Add(time.Second)
	for time.Now().Before(deadline) {
		value, err := db.Get("key")
		if err == nil && value == nil {
			break
		}
		time.Sleep(time.Millisecond * 10)
	}

	value, err := db.Get("key")
	require.Nil(t, err)
	require.Nil(t, value)

	err = removeAllFiles("./fiber.leveldb")
	require.Nil(t, err)
}

func Test_Delete_WhileThereIsData(t *testing.T) {
	db := New()

	db.Set("key", []byte("value"), time.Second*1)

	err := db.Delete("key")
	require.Nil(t, err)

	value, err := db.Get("key")
	require.Nil(t, err)
	require.Nil(t, value)

	err = removeAllFiles("./fiber.leveldb")
	require.Nil(t, err)

}

func Test_Reset(t *testing.T) {
	db := New()

	db.Set("key1", []byte("value1"), time.Second*1)
	db.Set("key2", []byte("value2"), time.Second*1)
	db.Set("key3", []byte("value3"), time.Second*1)

	require.NoError(t, db.Reset())

	value, err := db.Get("key1")
	require.Nil(t, err)
	require.Nil(t, value)

	value, err = db.Get("key2")
	require.Nil(t, err)
	require.Nil(t, value)

	value, err = db.Get("key3")
	require.Nil(t, err)
	require.Nil(t, value)

	err = removeAllFiles("./fiber.leveldb")
	require.Nil(t, err)

}

func Test_Close(t *testing.T) {
	db := New()

	db.Close()

	err := db.Conn().Put([]byte("key"), []byte("value"), nil)
	require.Error(t, err)

	err = removeAllFiles("./fiber.leveldb")
	require.Nil(t, err)
}

func Test_GarbageCollection_AfterWorking(t *testing.T) {
	db := New(Config{
		GCInterval: time.Millisecond * 100,
	})

	require.NoError(t, db.Set("key", []byte("value"), time.Millisecond*100))

	deadline := time.Now().Add(time.Second)
	for time.Now().Before(deadline) {
		_, err := db.Conn().Get([]byte("key"), nil)
		if err != nil {
			break
		}
		time.Sleep(time.Millisecond * 10)
	}

	value, err := db.Conn().Get([]byte("key"), nil)
	require.Error(t, err)
	require.Equal(t, []byte{}, value)

	err = removeAllFiles("./fiber.leveldb")
	require.Nil(t, err)
}

func Test_GarbageCollection_BeforeWorking(t *testing.T) {
	t.Cleanup(func() {
		require.NoError(t, removeAllFiles("./fiber.leveldb"))
	})

	db := New(Config{
		GCInterval: time.Second * 1,
	})
	require.NoError(t, db.Set("key", []byte("value"), time.Second*1))

	value, err := db.Conn().Get([]byte("key"), nil)
	require.Nil(t, err)
	require.NotNil(t, value)
}

func Test_GarbageCollection_Interval(t *testing.T) {
	t.Cleanup(func() {
		require.NoError(t, removeAllFiles("./fiber.leveldb"))
	})

	db := New(Config{
		GCInterval: time.Hour, // Uzun aralık
	})
	require.NoError(t, db.Set("key", []byte("value"), time.Millisecond))

	// GC çalışmadığı için değer hala var olmalı
	deadline := time.Now().Add(time.Millisecond * 100)
	for time.Now().Before(deadline) {
		value, err := db.Conn().Get([]byte("key"), nil)
		if err == nil && value != nil {
			return
		}
		time.Sleep(time.Millisecond * 10)
	}

	t.Error("value should still exist as GC hasn't run yet")
}

func Test_Close_Channel(t *testing.T) {
	db := New()

	err := db.Close()
	require.Nil(t, err)

	select {
	case _, ok := <-db.done:
		require.False(t, ok, "channel should be closed")
	default:
		t.Error("channel should be closed")
	}

	err = removeAllFiles("./fiber.leveldb")
	require.Nil(t, err)
}

func Benchmark_LevelDb_Set(b *testing.B) {
	db := New()
	defer func() {
		_ = db.Close()
		_ = removeAllFiles("./fiber.leveldb")
	}()

	key := "test_key"
	value := []byte("test_value")

	b.ResetTimer()
	b.RunParallel(func(pb *testing.PB) {
		for pb.Next() {
			if err := db.Set(key, value, 0); err != nil {
				b.Fatal(err)
			}
		}
	})
}

func Benchmark_LevelDb_Get(b *testing.B) {
	db := New()
	defer func() {
		_ = db.Close()
		_ = removeAllFiles("./fiber.leveldb")
	}()

	key := "test_key"
	value := []byte("test_value")
	if err := db.Set(key, value, 0); err != nil {
		b.Fatal(err)
	}

	b.ResetTimer()
	b.RunParallel(func(pb *testing.PB) {
		for pb.Next() {
			if _, err := db.Get(key); err != nil {
				b.Fatal(err)
			}
		}
	})
}

func Benchmark_LevelDb_Delete(b *testing.B) {
	db := New()
	defer func() {
		_ = db.Close()
		_ = removeAllFiles("./fiber.leveldb")
	}()

	key := "test_key"
	if err := db.Set(key, []byte("test_value"), 0); err != nil {
		b.Fatal(err)
	}

	b.ResetTimer()
	b.RunParallel(func(pb *testing.PB) {
		for pb.Next() {
			if err := db.Delete(key); err != nil {
				b.Fatal(err)
			}
		}
	})
}

func Test_Get_JSONObjectValue(t *testing.T) {
	db := New(Config{Path: "./testdb_json"})
	defer func() {
		require.Nil(t, db.Close())
		require.Nil(t, removeAllFiles("./testdb_json"))
	}()

	// A value that is itself a JSON object must not be mistaken for the expiration envelope.
	val := []byte(`{"value":"not-an-envelope","expire_at":"nope"}`)

	require.Nil(t, db.Set("json", val, 0))

	result, err := db.Get("json")
	require.Nil(t, err)
	require.Equal(t, val, result)
}

func Test_DeleteWithContext(t *testing.T) {
	db := New(Config{Path: "./testdb_delctx"})
	defer func() {
		require.Nil(t, db.Close())
		require.Nil(t, removeAllFiles("./testdb_delctx"))
	}()

	require.Nil(t, db.Set("john", []byte("doe"), 0))
	require.Nil(t, db.DeleteWithContext(context.Background(), "john"))

	result, err := db.Get("john")
	require.Nil(t, err)
	require.Zero(t, len(result))
}

func Test_WithContext_Canceled(t *testing.T) {
	db := New(Config{Path: "./testdb_ctx"})
	defer func() {
		require.Nil(t, db.Close())
		require.Nil(t, removeAllFiles("./testdb_ctx"))
	}()

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	require.ErrorIs(t, db.SetWithContext(ctx, "john", []byte("doe"), 0), context.Canceled)

	_, err := db.GetWithContext(ctx, "john")
	require.ErrorIs(t, err, context.Canceled)

	require.ErrorIs(t, db.DeleteWithContext(ctx, "john"), context.Canceled)
	require.ErrorIs(t, db.ResetWithContext(ctx), context.Canceled)
}

func Test_Close_Twice(t *testing.T) {
	db := New(Config{Path: "./testdb_close_twice"})
	defer func() {
		require.Nil(t, removeAllFiles("./testdb_close_twice"))
	}()

	require.Nil(t, db.Close())
	require.NotPanics(t, func() {
		require.Nil(t, db.Close())
	})
}

// goleveldb tears the database down even when Close reports an error, so the failure is reported once.
func Test_Close_Failure_Is_Latched(t *testing.T) {
	db := New(Config{Path: "./testdb_close_failure"})
	defer func() {
		require.Nil(t, removeAllFiles("./testdb_close_failure"))
	}()

	// Closing underneath the storage is what makes its own Close fail.
	require.Nil(t, db.Conn().Close())

	require.Error(t, db.Close())
	require.Nil(t, db.Close())
}

func Test_Get_LegacyEnvelope(t *testing.T) {
	db := New(Config{Path: "./testdb_legacy_envelope"})
	defer func() {
		require.Nil(t, db.Close())
		require.Nil(t, removeAllFiles("./testdb_legacy_envelope"))
	}()

	// Envelope written by an earlier version of this driver, which carried no version marker.
	legacy := []byte(`{"value":"ZG9l","expire_at":"2100-01-01T00:00:00Z"}`)
	require.Nil(t, db.Conn().Put([]byte("legacy"), legacy, nil))

	result, err := db.Get("legacy")
	require.Nil(t, err)
	require.Equal(t, []byte("doe"), result)

	// An expired envelope is a miss; Get does not delete it, which could drop a concurrent Set.
	expired := []byte(`{"value":"ZG9l","expire_at":"2000-01-01T00:00:00Z"}`)
	require.Nil(t, db.Conn().Put([]byte("expired"), expired, nil))

	result, err = db.Get("expired")
	require.Nil(t, err)
	require.Zero(t, len(result))
}

func Test_Get_UnknownEnvelopeVersion(t *testing.T) {
	db := New(Config{Path: "./testdb_unknown_version"})
	defer func() {
		require.Nil(t, db.Close())
		require.Nil(t, removeAllFiles("./testdb_unknown_version"))
	}()

	// An entry from a newer driver must be reported as an error rather than read as a payload.
	future := []byte(`{"_fiber_storage_v":99,"value":"ZG9l","expire_at":"0001-01-01T00:00:00Z"}`)
	require.Nil(t, db.Conn().Put([]byte("future"), future, nil))

	result, err := db.Get("future")
	require.ErrorIs(t, err, ErrUnknownEnvelope)
	require.Zero(t, len(result))
}

func Test_Get_LegacyRawValue(t *testing.T) {
	db := New(Config{Path: "./testdb_legacy"})
	defer func() {
		require.Nil(t, db.Close())
		require.Nil(t, removeAllFiles("./testdb_legacy"))
	}()

	// Older versions stored non-expiring values unenveloped, so a raw JSON object comes back verbatim.
	for _, raw := range [][]byte{
		[]byte(`{"value":"aGk="}`),
		[]byte(`{"foo":"bar"}`),
		[]byte(`{"value":"aGk=","other":1}`),
		[]byte(`{"value":"aGk=","expire_at":"2100-01-01T00:00:00Z","extra":1}`),
	} {
		require.Nil(t, db.Conn().Put([]byte("legacy"), raw, nil))

		result, err := db.Get("legacy")
		require.Nil(t, err)
		require.Equal(t, raw, result)
	}
}

func Test_Reset_LargerThanOneBatch(t *testing.T) {
	db := New(Config{Path: "./testdb_reset_batches"})
	defer func() {
		require.Nil(t, db.Close())
		require.Nil(t, removeAllFiles("./testdb_reset_batches"))
	}()

	total := resetBatchSize + 10
	for i := 0; i < total; i++ {
		require.Nil(t, db.Set("key-"+strconv.Itoa(i), []byte("doe"), 0))
	}

	require.Nil(t, db.Reset())

	for i := 0; i < total; i++ {
		result, err := db.Get("key-" + strconv.Itoa(i))
		require.Nil(t, err)
		require.Zero(t, len(result))
	}
}

func Test_Get_LegacyValueWithVersionField(t *testing.T) {
	db := New(Config{Path: "./testdb_version_field"})
	defer func() {
		require.Nil(t, db.Close())
		require.Nil(t, removeAllFiles("./testdb_version_field"))
	}()

	// A payload that merely carries a field of the version's name is not an envelope.
	raw := []byte(`{"_fiber_storage_v":99,"other":"data"}`)
	require.Nil(t, db.Conn().Put([]byte("raw"), raw, nil))

	result, err := db.Get("raw")
	require.Nil(t, err)
	require.Equal(t, raw, result)
}

func Test_Get_CorruptEnvelope(t *testing.T) {
	db := New(Config{Path: "./testdb_corrupt"})
	defer func() {
		require.Nil(t, db.Close())
		require.Nil(t, removeAllFiles("./testdb_corrupt"))
	}()

	// Set never stores an empty value, so an envelope without one is corrupt rather than a miss.
	corrupt := []byte(`{"_fiber_storage_v":1,"expire_at":"0001-01-01T00:00:00Z"}`)
	require.Nil(t, db.Conn().Put([]byte("corrupt"), corrupt, nil))

	result, err := db.Get("corrupt")
	require.ErrorIs(t, err, ErrCorruptEnvelope)
	require.Zero(t, len(result))
}

func Test_ReadOnly(t *testing.T) {
	const path = "./testdb_readonly"

	writable := New(Config{Path: path})
	require.Nil(t, writable.Set("john", []byte("doe"), 0))
	require.Nil(t, writable.Close())

	db := New(Config{Path: path, ReadOnly: true})
	defer func() {
		require.Nil(t, db.Close())
		require.Nil(t, removeAllFiles(path))
	}()

	// ReadOnly used to be ignored along with every tuning field, since options were passed as nil.
	result, err := db.Get("john")
	require.Nil(t, err)
	require.Equal(t, []byte("doe"), result)

	require.ErrorIs(t, db.Set("jane", []byte("doe"), 0), ErrReadOnly)
	require.ErrorIs(t, db.Delete("john"), ErrReadOnly)
	require.ErrorIs(t, db.Reset(), ErrReadOnly)
}

func Test_ErrorIfMissing(t *testing.T) {
	const path = "./testdb_missing"
	defer func() {
		// goleveldb creates the directory before reporting the error, so clean it up here.
		require.Nil(t, removeAllFiles(path))
	}()

	require.Panics(t, func() {
		New(Config{Path: path, ErrorIfMissing: true})
	})
}

func Test_GarbageCollection_Resumes_And_Rechecks(t *testing.T) {
	db := New(Config{Path: "./testdb_gc_recheck", GCInterval: time.Hour})
	defer func() {
		require.Nil(t, db.Close())
		require.Nil(t, removeAllFiles("./testdb_gc_recheck"))
	}()

	require.Nil(t, db.Set("a", []byte("doe"), 100*time.Millisecond))
	require.Nil(t, db.Set("b", []byte("doe"), 0))
	time.Sleep(200 * time.Millisecond)

	// The last key reported is the last examined, not the last expired: otherwise every batch rescans the live keys.
	candidates, last, reachedEnd := db.expiredCandidates(nil)
	require.Equal(t, [][]byte{[]byte("a")}, candidates)
	require.Equal(t, []byte("b"), last)
	require.True(t, reachedEnd)

	candidates, _, reachedEnd = db.expiredCandidates([]byte("a"))
	require.Empty(t, candidates)
	require.True(t, reachedEnd)

	// A key refreshed after the snapshot must survive: the delete re-reads rather than trusting the candidate list.
	require.Nil(t, db.Set("a", []byte("fresh"), time.Hour))
	db.deleteIfStillExpired([][]byte{[]byte("a")})

	result, err := db.Get("a")
	require.Nil(t, err)
	require.Equal(t, []byte("fresh"), result)

	require.Nil(t, db.Set("c", []byte("doe"), 100*time.Millisecond))
	time.Sleep(200 * time.Millisecond)
	db.deleteIfStillExpired([][]byte{[]byte("c")})

	_, err = db.Conn().Get([]byte("c"), nil)
	require.ErrorIs(t, err, leveldb.ErrNotFound)
}

func Test_Reset_Clears_GC_Cursor(t *testing.T) {
	db := New(Config{Path: "./testdb_reset_cursor", GCInterval: time.Hour})
	defer func() {
		require.Nil(t, db.Close())
		require.Nil(t, removeAllFiles("./testdb_reset_cursor"))
	}()

	require.Nil(t, db.Set("a", []byte("doe"), 0))

	// A reset removes the keys the cursor pointed past, so leaving it set would skip everything written after.
	db.shared.gcCursor = []byte("z")
	require.Nil(t, db.Reset())
	require.Nil(t, db.shared.gcCursor)
}

func Test_Set_WritesBinaryFrame(t *testing.T) {
	db := New(Config{Path: "./testdb_binary_frame"})
	defer func() {
		require.Nil(t, db.Close())
		require.Nil(t, removeAllFiles("./testdb_binary_frame"))
	}()

	require.Nil(t, db.Set("john", []byte("doe"), 0))

	// The payload is stored verbatim after a fixed header. JSON would base64 it and cost
	// four times the bytes, which is what this framing replaced.
	stored, err := db.Conn().Get([]byte("john"), nil)
	require.Nil(t, err)
	require.Equal(t, envelopeHeaderLen+len("doe"), len(stored))
	require.Equal(t, envelopeMagic[:], stored[:len(envelopeMagic)])
	require.EqualValues(t, envelopeBinaryVersion, stored[len(envelopeMagic)])
	require.Equal(t, []byte("doe"), stored[envelopeHeaderLen:])

	// A key with no expiration carries a zero deadline rather than a time near now.
	require.Zero(t, binary.BigEndian.Uint64(stored[len(envelopeMagic)+1:envelopeHeaderLen]))
}

func Test_Get_UnknownBinaryVersion(t *testing.T) {
	db := New(Config{Path: "./testdb_binary_unknown"})
	defer func() {
		require.Nil(t, db.Close())
		require.Nil(t, removeAllFiles("./testdb_binary_unknown"))
	}()

	// A frame from a newer driver must be reported rather than read as a payload.
	future := encode([]byte("doe"), 0)
	future[len(envelopeMagic)] = envelopeBinaryVersion + 1
	require.Nil(t, db.Conn().Put([]byte("future"), future, nil))

	result, err := db.Get("future")
	require.ErrorIs(t, err, ErrUnknownEnvelope)
	require.Zero(t, len(result))
}

func Test_Get_LegacyRawValueResemblingFrame(t *testing.T) {
	db := New(Config{Path: "./testdb_binary_lookalike"})
	defer func() {
		require.Nil(t, db.Close())
		require.Nil(t, removeAllFiles("./testdb_binary_lookalike"))
	}()

	// A payload an earlier version stored unenveloped may open with these bytes by chance.
	// Short of a whole frame it is handed back rather than reported as damaged.
	for name, raw := range map[string][]byte{
		"magic_only":  append([]byte{}, envelopeMagic[:]...),
		"part_header": append(append([]byte{}, envelopeMagic[:]...), 2, 0, 0),
		"header_only": encode(nil, 0),
	} {
		require.Nil(t, db.Conn().Put([]byte(name), raw, nil))

		result, err := db.Get(name)
		require.Nil(t, err, name)
		require.Equal(t, raw, result, name)
	}
}

func Test_Get_BinaryFrame_Expiry(t *testing.T) {
	db := New(Config{Path: "./testdb_binary_expiry"})
	defer func() {
		require.Nil(t, db.Close())
		require.Nil(t, removeAllFiles("./testdb_binary_expiry"))
	}()

	require.Nil(t, db.Conn().Put([]byte("live"), encode([]byte("doe"), time.Now().Add(time.Hour).UnixNano()), nil))
	result, err := db.Get("live")
	require.Nil(t, err)
	require.Equal(t, []byte("doe"), result)

	// An expired frame is a miss; Get does not delete it, which could drop a concurrent Set.
	require.Nil(t, db.Conn().Put([]byte("dead"), encode([]byte("doe"), time.Now().Add(-time.Hour).UnixNano()), nil))
	result, err = db.Get("dead")
	require.Nil(t, err)
	require.Zero(t, len(result))
}

func Test_Set_SubSecondExpiration_BinaryFrame(t *testing.T) {
	db := New(Config{Path: "./testdb_binary_subsecond"})
	defer func() {
		require.Nil(t, db.Close())
		require.Nil(t, removeAllFiles("./testdb_binary_subsecond"))
	}()

	// The deadline is nanoseconds, so an expiration under a second survives the round trip.
	require.Nil(t, db.Set("john", []byte("doe"), 300*time.Millisecond))

	result, err := db.Get("john")
	require.Nil(t, err)
	require.Equal(t, []byte("doe"), result)

	time.Sleep(400 * time.Millisecond)

	result, err = db.Get("john")
	require.Nil(t, err)
	require.Zero(t, len(result))
}

func Test_LevelDB_NewFromConnection(t *testing.T) {
	db, err := leveldb.OpenFile(t.TempDir(), nil)
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
	require.NoError(t, db.Put([]byte("jane"), []byte("doe"), nil))
	require.ErrorIs(t, store.Set("jane", []byte("doe"), 0), ErrClosed)
}

func Test_LevelDB_NewFromConnection_Nil(t *testing.T) {
	require.Panics(t, func() {
		NewFromConnection(nil)
	})
}

// Storages on one handle must share the write-order lock, or one's collector could
// delete a key another just refreshed.
func Test_LevelDB_NewFromConnection_SharedDB(t *testing.T) {
	db, err := leveldb.OpenFile(t.TempDir(), nil)
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

// A sibling on a handle an owning storage closed must report ErrClosed, not reach the
// closed database, and a Reset must rewind every collector on the handle, not just its own.
func Test_LevelDB_SharedDB_OwnerCloseAndReset(t *testing.T) {
	owner := New(Config{Path: t.TempDir(), GCInterval: time.Hour})
	sibling := NewFromConnection(owner.Conn(), Config{GCInterval: time.Hour})

	require.NoError(t, sibling.Set("john", []byte("doe"), 0))

	// A sibling's Reset must rewind this storage's cursor too, since they share the keyspace.
	sibling.shared.gcCursor = []byte("z")
	require.NoError(t, owner.Reset())
	require.Nil(t, sibling.shared.gcCursor)

	// Closing the owner closes the database, so the sibling must refuse to use it.
	require.NoError(t, owner.Close())
	require.True(t, sibling.isClosed())
	require.ErrorIs(t, sibling.Set("jane", []byte("doe"), 0), ErrClosed)
	_, err := sibling.Get("john")
	require.ErrorIs(t, err, ErrClosed)
	require.ErrorIs(t, sibling.Delete("john"), ErrClosed)
	require.ErrorIs(t, sibling.Reset(), ErrClosed)
	require.NoError(t, sibling.Close())
}
