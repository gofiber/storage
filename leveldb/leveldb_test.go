package leveldb

import (
	"os"
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

	db.Set([]byte("key"), []byte("value"), time.Second*1)
	db.Set([]byte("key"), []byte("value2"), time.Second*1)

	value, err := db.Get([]byte("key"))
	require.Nil(t, err)
	require.Equal(t, []byte("value2"), value)

	err = removeAllFiles("./fiber.leveldb")
	require.Nil(t, err)
}

func Test_Get_For0Second(t *testing.T) {
	db := New()

	db.Set([]byte("key"), []byte("value"), 0)

	_, err := db.Get([]byte("key"))
	require.Nil(t, err)

	err = removeAllFiles("./fiber.leveldb")
	require.Nil(t, err)
}

func Test_Get_ForExpired100Millisecond(t *testing.T) {
	db := New()

	require.NoError(t, db.Set([]byte("key"), []byte("value"), time.Millisecond*100))

	// Anahtarın silinmesini bekle
	deadline := time.Now().Add(time.Second)
	for time.Now().Before(deadline) {
		value, err := db.Get([]byte("key"))
		if err == nil && value == nil {
			break
		}
		time.Sleep(time.Millisecond * 10)
	}

	value, err := db.Get([]byte("key"))
	require.Nil(t, err)
	require.Nil(t, value)

	err = removeAllFiles("./fiber.leveldb")
	require.Nil(t, err)
}

func Test_Delete_WhileThereIsData(t *testing.T) {
	db := New()

	db.Set([]byte("key"), []byte("value"), time.Second*1)

	err := db.Delete("key")
	require.Nil(t, err)

	value, err := db.Get([]byte("key"))
	require.Nil(t, err)
	require.Nil(t, value)

	err = removeAllFiles("./fiber.leveldb")
	require.Nil(t, err)

}

func Test_Reset(t *testing.T) {
	db := New()

	db.Set([]byte("key1"), []byte("value1"), time.Second*1)
	db.Set([]byte("key2"), []byte("value2"), time.Second*1)
	db.Set([]byte("key3"), []byte("value3"), time.Second*1)

	require.NoError(t, db.Reset())

	value, err := db.Get([]byte("key1"))
	require.Nil(t, err)
	require.Nil(t, value)

	value, err = db.Get([]byte("key2"))
	require.Nil(t, err)
	require.Nil(t, value)

	value, err = db.Get([]byte("key3"))
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

	require.NoError(t, db.Set([]byte("key"), []byte("value"), time.Millisecond*100))

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
	require.NoError(t, db.Set([]byte("key"), []byte("value"), time.Second*1))

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
	require.NoError(t, db.Set([]byte("key"), []byte("value"), time.Millisecond))

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

func Benchmark_Set(b *testing.B) {
	db := New()
	defer func() {
		_ = db.Close()
		_ = removeAllFiles("./fiber.leveldb")
	}()

	key := []byte("test_key")
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

func Benchmark_Get(b *testing.B) {
	db := New()
	defer func() {
		_ = db.Close()
		_ = removeAllFiles("./fiber.leveldb")
	}()

	key := []byte("test_key")
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

func Benchmark_Delete(b *testing.B) {
	db := New()
	defer func() {
		_ = db.Close()
		_ = removeAllFiles("./fiber.leveldb")
	}()

	key := "test_key"
	if err := db.Set([]byte(key), []byte("test_value"), 0); err != nil {
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
