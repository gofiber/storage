package leveldb

import (
	"context"
	"encoding/binary"
	"fmt"
	"math"
	"os"
	"strconv"
	"sync"
	"testing"
	"time"

	"github.com/stretchr/testify/require"
	"github.com/syndtr/goleveldb/leveldb"
	"github.com/syndtr/goleveldb/leveldb/opt"
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

// Closing one storage while another writes and a third is being built on the same handle must
// not hand the new storage a fresh shared entry while the write still runs under the old one.
func Test_LevelDB_SharedDB_CloseRacesSetAndNewStorage(t *testing.T) {
	db, err := leveldb.OpenFile(t.TempDir(), nil)
	require.NoError(t, err)
	defer db.Close() //nolint:errcheck // best effort cleanup

	writer := NewFromConnection(db, Config{GCInterval: time.Hour})
	closer := NewFromConnection(db, Config{GCInterval: time.Hour})

	// require calls FailNow, which stops only the goroutine it runs on, so the workers report
	// back and the assertions run on the test goroutine after wg.Wait.
	var (
		wg        sync.WaitGroup
		setErrs   = make(chan error, 200)
		closeErrs = make(chan error, 1)
		shareErrs = make(chan error, 50)
	)
	wg.Add(3)

	go func() {
		defer wg.Done()
		defer close(setErrs)
		for i := 0; i < 200; i++ {
			// Either outcome is correct; reaching a closed database is not.
			if err := writer.Set("john", []byte("doe"), 0); err != nil {
				setErrs <- err
			}
		}
	}()

	go func() {
		defer wg.Done()
		defer close(closeErrs)
		closeErrs <- closer.Close()
	}()

	go func() {
		defer wg.Done()
		defer close(shareErrs)
		for i := 0; i < 50; i++ {
			later := NewFromConnection(db, Config{GCInterval: time.Hour})
			// Every storage on a live handle must share one entry with the writer.
			if later.shared != writer.shared {
				shareErrs <- fmt.Errorf("storage %d got a fresh shared entry while the writer still ran under the old one", i)
			}
			if err := later.Close(); err != nil {
				shareErrs <- fmt.Errorf("closing storage %d: %w", i, err)
			}
		}
	}()

	wg.Wait()

	for err := range setErrs {
		require.ErrorIs(t, err, ErrClosed)
	}
	for err := range closeErrs {
		require.NoError(t, err)
	}
	for err := range shareErrs {
		require.NoError(t, err)
	}

	require.NoError(t, writer.Close())
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

// storageOn builds a storage on db with the collector idle, and closes it and then db when the test ends.
func storageOn(t *testing.T, db *leveldb.DB) *Storage {
	t.Helper()

	store := NewFromConnection(db, Config{GCInterval: time.Hour})
	t.Cleanup(func() {
		require.NoError(t, store.Close())
		_ = db.Close()
	})

	return store
}

// newTestStorage opens a database in a temp dir and builds a storage on it, with the collector idle.
func newTestStorage(t *testing.T) *Storage {
	t.Helper()

	db, err := leveldb.OpenFile(t.TempDir(), nil)
	require.NoError(t, err)

	return storageOn(t, db)
}

// putEntries writes n entries named prefix000000, prefix000001 and so on in one batch, all with the
// given deadline in Unix nanoseconds, 0 meaning none.
func putEntries(t *testing.T, db *leveldb.DB, prefix string, n int, expireAt int64) {
	t.Helper()

	batch := new(leveldb.Batch)
	for i := range n {
		batch.Put([]byte(fmt.Sprintf("%s%06d", prefix, i)), encode([]byte("v"), expireAt))
	}
	require.NoError(t, db.Write(batch, nil))
}

// putExpired writes n entries whose deadline passed, in one batch.
func putExpired(t *testing.T, store *Storage, prefix string, n int) {
	t.Helper()

	putEntries(t, store.Conn(), prefix, n, time.Now().Add(-time.Minute).UnixNano())
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

	putEntries(t, store.Conn(), "live", collectScanLimit+5, 0)

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

	putEntries(t, rw, "k", keys, 0)
	require.NoError(t, rw.Close())

	db, err := leveldb.OpenFile(dir, &opt.Options{ReadOnly: true})
	require.NoError(t, err)

	// Config.ReadOnly stays false, so the storage attempts writes and the engine refuses them.
	return storageOn(t, db)
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

func Test_BorrowedHandleClosed_ErrorsAreReported(t *testing.T) {
	db, err := leveldb.OpenFile(t.TempDir(), nil)
	require.NoError(t, err)

	store := storageOn(t, db)
	require.NoError(t, store.Set("john", []byte("doe"), 0))

	// The caller closes the borrowed handle behind the storage's back.
	require.NoError(t, db.Close())

	// The failure is reported, not read as a miss.
	value, err := store.Get("john")
	require.ErrorIs(t, err, leveldb.ErrClosed)
	require.Nil(t, value)

	// An iterator over a closed handle fails; the error surfaces instead of reporting a clean reset.
	require.ErrorIs(t, store.Reset(), leveldb.ErrClosed)
}
