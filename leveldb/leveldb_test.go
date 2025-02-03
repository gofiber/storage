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
		DBPath: "./testdb",
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

func Test_Get_ForExpired1Second(t *testing.T) {
	db := New()

	db.Set([]byte("key"), []byte("value"), time.Second*1)

	time.Sleep(time.Second * 2)

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

	db.Reset()

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
		GCInterval: time.Second * 1,
	})

	db.Set([]byte("key"), []byte("value"), time.Second*1)

	time.Sleep(time.Second * 2)

	value, err := db.Conn().Get([]byte("key"), nil)
	require.Error(t, err)
	require.Equal(t, []byte{}, value)

	err = removeAllFiles("./fiber.leveldb")
	require.Nil(t, err)
}

func Test_GarbageCollection_BeforeWorking(t *testing.T) {
	db := New(Config{
		GCInterval: time.Second * 1,
	})

	db.Set([]byte("key"), []byte("value"), time.Second*1)

	//time.Sleep(time.Second * 2)

	value, err := db.Conn().Get([]byte("key"), nil)
	require.Nil(t, err)
	require.NotNil(t, value)

	err = removeAllFiles("./fiber.leveldb")
	require.Nil(t, err)
}
