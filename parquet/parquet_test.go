package parquet

import (
	"os"
	"testing"
	"time"

	"github.com/stretchr/testify/require"
)

var testStore *Storage

func TestMain(m *testing.M) {
	testStore = New(Config{
		Path: "test_storage.parquet",
	})

	code := m.Run()

	_ = testStore.Close()
	_ = os.Remove("test_storage.parquet")
	os.Exit(code)
}

func Test_Parquet_Set(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)
}

func Test_Parquet_Set_Override(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	err = testStore.Set(key, val, 0)
	require.NoError(t, err)
}

func Test_Parquet_Get(t *testing.T) {
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

func Test_Parquet_Set_Expiration(t *testing.T) {
	var (
		key = "john-exp"
		val = []byte("doe")
		exp = 1 * time.Second
	)

	err := testStore.Set(key, val, exp)
	require.NoError(t, err)

	time.Sleep(1100 * time.Millisecond)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_Parquet_Get_NotExist(t *testing.T) {
	result, err := testStore.Get("notexist")
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_Parquet_Delete(t *testing.T) {
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

func Test_Parquet_Reset(t *testing.T) {
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

func Test_Parquet_Close(t *testing.T) {
	store := New(Config{
		Path: "test_close.parquet",
	})
	require.Nil(t, store.Close())
	_ = os.Remove("test_close.parquet")
}

func Test_Parquet_Conn(t *testing.T) {
	require.True(t, testStore.Conn() != nil)
}

func Test_Parquet_Persistence(t *testing.T) {
	path := "test_persistence.parquet"

	store1 := New(Config{Path: path})
	err := store1.Set("persist-key", []byte("persist-value"), 0)
	require.NoError(t, err)
	_ = store1.Close()

	store2 := New(Config{Path: path})
	result, err := store2.Get("persist-key")
	require.NoError(t, err)
	require.Equal(t, []byte("persist-value"), result)
	_ = store2.Close()

	_ = os.Remove(path)
}

func Test_Parquet_Get_Empty_Key(t *testing.T) {
	result, err := testStore.Get("")
	require.NoError(t, err)
	require.Nil(t, result)
}

func Test_Parquet_Set_Empty_Key(t *testing.T) {
	err := testStore.Set("", []byte("value"), 0)
	require.NoError(t, err)
}

func Test_Parquet_Set_Empty_Value(t *testing.T) {
	err := testStore.Set("key", []byte{}, 0)
	require.NoError(t, err)
}

func Test_Parquet_Delete_Empty_Key(t *testing.T) {
	err := testStore.Delete("")
	require.NoError(t, err)
}

func Benchmark_Parquet_Set(b *testing.B) {
	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		err = testStore.Set("john", []byte("doe"), 0)
	}

	require.NoError(b, err)
}

func Benchmark_Parquet_Get(b *testing.B) {
	err := testStore.Set("john", []byte("doe"), 0)
	require.NoError(b, err)

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_, err = testStore.Get("john")
	}

	require.NoError(b, err)
}

func Benchmark_Parquet_SetAndDelete(b *testing.B) {
	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		_ = testStore.Set("john", []byte("doe"), 0)
		err = testStore.Delete("john")
	}

	require.NoError(b, err)
}
