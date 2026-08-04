package leveldb

import (
	"context"
	"os"
	"strconv"
	"testing"
	"time"

	"github.com/stretchr/testify/require"
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

	// A value that is itself a JSON object must not be mistaken for the
	// expiration envelope this driver stores entries in.
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
	// A second Close must neither panic nor block, and must report the same
	// result as the first one.
	require.NotPanics(t, func() {
		require.Nil(t, db.Close())
	})
}

func Test_Get_LegacyEnvelope(t *testing.T) {
	db := New(Config{Path: "./testdb_legacy_envelope"})
	defer func() {
		require.Nil(t, db.Close())
		require.Nil(t, removeAllFiles("./testdb_legacy_envelope"))
	}()

	// Envelope written by an earlier version of this driver, which did not
	// carry a version marker.
	legacy := []byte(`{"value":"ZG9l","expire_at":"2100-01-01T00:00:00Z"}`)
	require.Nil(t, db.Conn().Put([]byte("legacy"), legacy, nil))

	result, err := db.Get("legacy")
	require.Nil(t, err)
	require.Equal(t, []byte("doe"), result)

	// The same envelope, already expired, must be reported as a miss. Get does
	// not delete it: LevelDB has no compare-and-delete, so removing it here
	// could drop a value a concurrent Set had written. The collector reclaims
	// it instead.
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

	// An entry written by a newer version of this driver must be reported as
	// an error rather than read as if it were a payload.
	future := []byte(`{"_fiber_storage_v":99,"value":"ZG9l","expire_at":"0001-01-01T00:00:00Z"}`)
	require.Nil(t, db.Conn().Put([]byte("future"), future, nil))

	result, err := db.Get("future")
	require.ErrorIs(t, err, errUnknownEnvelope)
	require.Zero(t, len(result))
}

func Test_Get_LegacyRawValue(t *testing.T) {
	db := New(Config{Path: "./testdb_legacy"})
	defer func() {
		require.Nil(t, db.Close())
		require.Nil(t, removeAllFiles("./testdb_legacy"))
	}()

	// Older versions of this driver stored values with no expiration without
	// an envelope. A raw JSON object must be returned verbatim.
	for _, raw := range [][]byte{
		[]byte(`{"value":"aGk="}`),
		[]byte(`{"foo":"bar"}`),
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

	// A payload that merely happens to carry a field of the version's name is
	// not an envelope, and must be returned verbatim rather than reported as
	// written by a newer driver.
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

	// Set never stores an empty value, so an envelope without one is corrupt
	// and must be reported rather than read back as an ordinary miss.
	corrupt := []byte(`{"_fiber_storage_v":1,"expire_at":"0001-01-01T00:00:00Z"}`)
	require.Nil(t, db.Conn().Put([]byte("corrupt"), corrupt, nil))

	result, err := db.Get("corrupt")
	require.ErrorIs(t, err, errCorruptEnvelope)
	require.Zero(t, len(result))
}
