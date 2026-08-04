package bbolt

import (
	"context"
	"os"
	"path/filepath"
	"strconv"
	"testing"

	"github.com/stretchr/testify/require"
)

var testStore *Storage

func TestMain(m *testing.M) {
	// Keep the generated database out of the package directory.
	dir, err := os.MkdirTemp("", "bbolt-test")
	if err != nil {
		panic(err)
	}

	testStore = New(Config{
		Database: filepath.Join(dir, "fiber.db"),
		Bucket:   "fiber-bucket",
		Reset:    true,
	})

	code := m.Run()

	_ = testStore.Close()
	_ = os.RemoveAll(dir)
	os.Exit(code)
}

func Test_Bbolt_Set(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)
}

func Test_Bbolt_Set_Override(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	err = testStore.Set(key, val, 0)
	require.NoError(t, err)
}

func Test_Bbolt_Get(t *testing.T) {
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

func Test_Bbolt_Get_NotExist(t *testing.T) {
	result, err := testStore.Get("notexist")
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_Bbolt_Delete(t *testing.T) {
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

func Test_Bbolt_Reset(t *testing.T) {
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

func Test_Bbolt_Close(t *testing.T) {
	require.Nil(t, testStore.Close())
}

func Test_Bbolt_Conn(t *testing.T) {
	require.True(t, testStore.Conn() != nil)
}

func Benchmark_Bbolt_Set(b *testing.B) {
	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		err = testStore.Set("john", []byte("doe"), 0)
	}

	require.NoError(b, err)
}

func Benchmark_Bbolt_Get(b *testing.B) {
	err := testStore.Set("john", []byte("doe"), 0)
	require.NoError(b, err)

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_, err = testStore.Get("john")
	}

	require.NoError(b, err)
}

func Benchmark_Bbolt_SetAndDelete(b *testing.B) {
	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		_ = testStore.Set("john", []byte("doe"), 0)
		err = testStore.Delete("john")
	}

	require.NoError(b, err)
}

// newTestStore returns a storage backed by a database file of its own, so the
// test does not depend on the lifecycle of the shared testStore.
func newTestStore(t *testing.T) *Storage {
	t.Helper()

	store := New(Config{
		Database: filepath.Join(t.TempDir(), "fiber.db"),
		Bucket:   "fiber-bucket",
		Reset:    true,
	})
	t.Cleanup(func() {
		require.NoError(t, store.Close())
	})

	return store
}

func Test_Bbolt_Get_Value_Outlives_Transaction(t *testing.T) {
	var (
		store = newTestStore(t)
		key   = "john"
		val   = []byte("doe")
	)

	require.NoError(t, store.Set(key, val, 0))

	result, err := store.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)

	// The value returned by Get used to point into the memory-mapped file and
	// was only valid inside the read transaction. Writing enough data to force
	// bbolt to grow and remap the file must not change what Get returned.
	for i := 0; i < 512; i++ {
		require.NoError(t, store.Set("filler-"+strconv.Itoa(i), make([]byte, 4096), 0))
	}

	require.Equal(t, val, result, "value returned by Get must not be aliased to the database")
}

func Test_Bbolt_Reset_Removes_Every_Key(t *testing.T) {
	store := newTestStore(t)

	for i := 0; i < 128; i++ {
		require.NoError(t, store.Set("key-"+strconv.Itoa(i), []byte("doe"), 0))
	}

	require.NoError(t, store.Reset())

	for i := 0; i < 128; i++ {
		result, err := store.Get("key-" + strconv.Itoa(i))
		require.NoError(t, err)
		require.Zero(t, len(result))
	}

	// The bucket must still be usable after a reset.
	require.NoError(t, store.Set("john", []byte("doe"), 0))
	result, err := store.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), result)
}

func Test_Bbolt_WithContext_Canceled(t *testing.T) {
	store := newTestStore(t)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	require.ErrorIs(t, store.SetWithContext(ctx, "john", []byte("doe"), 0), context.Canceled)

	_, err := store.GetWithContext(ctx, "john")
	require.ErrorIs(t, err, context.Canceled)

	require.ErrorIs(t, store.DeleteWithContext(ctx, "john"), context.Canceled)
	require.ErrorIs(t, store.ResetWithContext(ctx), context.Canceled)
}
