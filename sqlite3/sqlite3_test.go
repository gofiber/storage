package sqlite3

import (
	"context"
	"database/sql"
	"os"
	"path/filepath"
	"testing"
	"time"

	_ "github.com/mattn/go-sqlite3"
	"github.com/stretchr/testify/require"
)

var testStore *Storage

func TestMain(m *testing.M) {
	// Keep the generated database out of the package directory.
	dir, err := os.MkdirTemp("", "sqlite3-test")
	if err != nil {
		panic(err)
	}

	testStore = New(Config{
		Database: filepath.Join(dir, "fiber.sqlite3"),
		Reset:    true,
	})

	code := m.Run()

	_ = os.RemoveAll(dir)
	os.Exit(code)
}

func Test_SQLite3_Set(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)
}

func Test_SQLite3_SetWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err := testStore.SetWithContext(ctx, key, val, 0)
	require.ErrorIs(t, err, context.Canceled)
}

func Test_SQLite3_Set_Override(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	err = testStore.Set(key, val, 0)
	require.NoError(t, err)
}

func Test_SQLite3_Get(t *testing.T) {
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

func Test_SQLite3_GetWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	result, err := testStore.GetWithContext(ctx, key)
	require.ErrorIs(t, err, context.Canceled)
	require.Zero(t, len(result))
}

func Test_SQLite3_Set_Expiration(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
		exp = 1 * time.Second
	)

	err := testStore.Set(key, val, exp)
	require.NoError(t, err)
}

func Test_SQLite3_Get_Expired(t *testing.T) {
	key := "john"

	// The deadline is stored in whole seconds and rounded up, so the entry set
	// by the previous test may outlive its expiration by up to a second.
	deadline := time.Now().Add(4 * time.Second)
	for {
		result, err := testStore.Get(key)
		require.NoError(t, err)
		if len(result) == 0 {
			return
		}
		require.False(t, time.Now().After(deadline), "key should expire")
		time.Sleep(100 * time.Millisecond)
	}
}

func Test_SQLite3_Get_NotExist(t *testing.T) {
	result, err := testStore.Get("notexist")
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_SQLite3_Delete(t *testing.T) {
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

func Test_SQLite3_DeleteWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err = testStore.DeleteWithContext(ctx, key)
	require.ErrorIs(t, err, context.Canceled)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)
}

func Test_SQLite3_Reset(t *testing.T) {
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

func Test_SQLite3_ResetWithContext(t *testing.T) {
	val := []byte("doe")

	err := testStore.Set("john1", val, 0)
	require.NoError(t, err)

	err = testStore.Set("john2", val, 0)
	require.NoError(t, err)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err = testStore.ResetWithContext(ctx)
	require.ErrorIs(t, err, context.Canceled)

	result, err := testStore.Get("john1")
	require.NoError(t, err)
	require.Equal(t, val, result)

	result, err = testStore.Get("john2")
	require.NoError(t, err)
	require.Equal(t, val, result)
}

func Test_SQLite3_GC(t *testing.T) {
	testVal := []byte("doe")

	// This key should expire. Its deadline is rounded up to a whole second, so
	// collect as of a moment safely past it rather than as of now.
	err := testStore.Set("john", testVal, time.Nanosecond)
	require.NoError(t, err)

	testStore.gc(time.Now().Add(2 * time.Second))
	row := testStore.db.QueryRow(testStore.sqlSelect, "john")
	err = row.Scan(nil, nil)
	require.Equal(t, sql.ErrNoRows, err)

	// This key should not expire
	err = testStore.Set("john", testVal, 0)
	require.NoError(t, err)

	testStore.gc(time.Now())
	val, err := testStore.Get("john")
	require.NoError(t, err)
	require.Equal(t, testVal, val)
}

func Test_SQLite3_Non_UTF8(t *testing.T) {
	val := []byte("0xF5")

	err := testStore.Set("0xF6", val, 0)
	require.NoError(t, err)

	result, err := testStore.Get("0xF6")
	require.NoError(t, err)
	require.Equal(t, val, result)
}

func Test_SQLite3_Close(t *testing.T) {
	require.Nil(t, testStore.Close())
}

func Test_SQLite3_Conn(t *testing.T) {
	require.True(t, testStore.Conn() != nil)
}

func Benchmark_SQLite3_Set(b *testing.B) {
	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		err = testStore.Set("john", []byte("doe"), 0)
	}

	require.NoError(b, err)
}

func Benchmark_SQLite3_Get(b *testing.B) {
	err := testStore.Set("john", []byte("doe"), 0)
	require.NoError(b, err)

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_, err = testStore.Get("john")
	}

	require.NoError(b, err)
}

func Benchmark_SQLite3_SetAndDelete(b *testing.B) {
	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		_ = testStore.Set("john", []byte("doe"), 0)
		err = testStore.Delete("john")
	}

	require.NoError(b, err)
}

func Test_SQLite3_Config_SubSecond_GCInterval(t *testing.T) {
	// A sub-second interval used to be truncated to zero seconds and silently
	// replaced by the ten second default.
	require.Equal(t, 50*time.Millisecond, configDefault(Config{GCInterval: 50 * time.Millisecond}).GCInterval)

	// Zero and negative still fall back to the default.
	require.Equal(t, ConfigDefault.GCInterval, configDefault(Config{GCInterval: 0}).GCInterval)
	require.Equal(t, ConfigDefault.GCInterval, configDefault(Config{GCInterval: -time.Second}).GCInterval)
}

func Test_SQLite3_Close_Twice(t *testing.T) {
	store := New(Config{Database: filepath.Join(t.TempDir(), "close.sqlite3"), Reset: true})

	require.NoError(t, store.Close())
	// A second Close must neither panic nor block on the done channel.
	require.NotPanics(t, func() {
		require.NoError(t, store.Close())
	})
}

func Test_SQLite3_Set_Sub_Second_Expiration(t *testing.T) {
	store := New(Config{Database: filepath.Join(t.TempDir(), "exp.sqlite3"), Reset: true})
	defer store.Close() //nolint:errcheck // best effort cleanup

	// The deadline is stored in whole seconds, so a sub-second expiration must
	// be rounded up rather than written as a moment already past.
	require.NoError(t, store.Set("john", []byte("doe"), 100*time.Millisecond))

	result, err := store.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), result, "key expired before its expiration")
}
