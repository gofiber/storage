package coherence

/*
 * Copyright © 2023, 2024 Oracle and/or its affiliates.
 */
import (
	"github.com/stretchr/testify/require"
	"os"
	"testing"
	"time"
)

var (
	key1       = "key1"
	key2       = "key2"
	missingKey = "missing-key"
	value1     = []byte("value1")
	value2     = []byte("value2")
)

var testStore *Storage

func TestMain(m *testing.M) {
	testStore, _ = New(Config{
		Reset:            true,
		NearCacheTimeout: time.Duration(4) * time.Second,
	})

	code := m.Run()

	_ = testStore.Close()
	os.Exit(code)
}

// newTestStore returns a new Coherence Store and ensures it is reset.
func newTestStore(t testing.TB, config ...Config) (*Storage, error) {
	t.Helper()

	testStore, err := New(config...)
	require.NoError(t, err)

	err = testStore.Reset()

	return testStore, err
}

func Test_Coherence_Set_And_Get(t *testing.T) {
	var val []byte

	err := testStore.Set(key1, value1, 0)
	require.NoError(t, err)

	val, err = testStore.Get(key1)
	require.NoError(t, err)
	require.Equal(t, value1, val)

	require.NotNil(t, testStore.Conn())
}

func Test_Coherence_Set_Override(t *testing.T) {
	var val []byte

	err := testStore.Set(key1, value1, 0)
	require.NoError(t, err)

	err = testStore.Set(key1, value2, 0)
	require.NoError(t, err)

	val, err = testStore.Get(key1)
	require.NoError(t, err)
	require.Equal(t, value2, val)
}

func Test_Coherence_Set_With_Reset(t *testing.T) {
	var val []byte

	err := testStore.Set(key1, value1, 0)
	require.NoError(t, err)

	val, err = testStore.Get(key1)
	require.NoError(t, err)
	require.Equal(t, value1, val)

	// get a new store but reset it, so the subsequent Get will return nil
	testStore2, err := newTestStore(t, Config{Reset: true})
	require.NoError(t, err)

	val, err = testStore2.Get(key1)
	require.NoError(t, err)
	require.True(t, len(val) == 0)

	require.Equal(t, nil, testStore2.Close())
}

func Test_Coherence_Set_With_Expiry(t *testing.T) {
	var val []byte

	// set with an expiry of 5 seconds
	err := testStore.Set(key1, value1, time.Duration(5)*time.Second)
	require.NoError(t, err)
	time.Sleep(time.Duration(6) * time.Second)

	val, err = testStore.Get(key1)
	require.NoError(t, err)
	require.True(t, len(val) == 0)
}

func Test_Coherence_Get_Missing(t *testing.T) {
	var val []byte

	val, err := testStore.Get(missingKey)
	require.NoError(t, err)
	require.True(t, len(val) == 0)
}

func Test_Coherence_Reset(t *testing.T) {
	var val []byte

	err := testStore.Set(key1, value1, 0)
	require.NoError(t, err)

	err = testStore.Set(key2, value2, 0)
	require.NoError(t, err)

	// check the keys exist
	val, err = testStore.Get(key1)
	require.NoError(t, err)
	require.Equal(t, value1, val)

	val, err = testStore.Get(key2)
	require.NoError(t, err)
	require.Equal(t, value2, val)

	// reset the store, this should remove both entries
	err = testStore.Reset()

	// check the keys have expired
	val, err = testStore.Get(key1)
	require.NoError(t, err)
	require.True(t, len(val) == 0)

	val, err = testStore.Get(key2)
	require.NoError(t, err)
	require.True(t, len(val) == 0)
}

func Test_Coherence_Set_And_Delete(t *testing.T) {
	var val []byte

	err := testStore.Set(key1, value1, 0)
	require.NoError(t, err)

	err = testStore.Delete(key1)
	require.NoError(t, err)

	// ensure the key has gone
	val, err = testStore.Get(key1)
	require.NoError(t, err)
	require.True(t, len(val) == 0)
}

// TestCoherenceWithScope ensures we can create multiple session stores with multiple scopes.
func Test_Coherence_With_Scope(t *testing.T) {
	var val []byte

	// create two session stores with different scopes
	testStore1, err := newTestStore(t, Config{ScopeName: "scope1"})
	require.NoError(t, err)

	testStore2, err := newTestStore(t, Config{ScopeName: "scope2"})
	require.NoError(t, err)

	// ensure we can put the same key with different values in each scope
	err = testStore1.Set(key1, value1, 0)
	require.NoError(t, err)

	err = testStore2.Set(key1, value2, 0)
	require.NoError(t, err)

	// ensure the value of "key1" is different for each store
	val, err = testStore1.Get(key1)
	require.NoError(t, err)
	require.Equal(t, value1, val)

	val, err = testStore2.Get(key1)
	require.NoError(t, err)
	require.Equal(t, value2, val)

	require.NoError(t, testStore1.Close())
	require.NoError(t, testStore2.Close())
}

func Benchmark_Coherence_Set(b *testing.B) {
	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		err = testStore.Set("john", []byte("doe"), 0)
	}

	require.NoError(b, err)
}

func Benchmark_Coherence_Get(b *testing.B) {
	err := testStore.Set("john", []byte("doe"), 0)
	require.NoError(b, err)

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_, err = testStore.Get("john")
	}

	require.NoError(b, err)
}

func Benchmark_Coherence_SetAndDelete(b *testing.B) {
	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		_ = testStore.Set("john", []byte("doe"), 0)
		err = testStore.Delete("john")
	}

	require.NoError(b, err)
}
