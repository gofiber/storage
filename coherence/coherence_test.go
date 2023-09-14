package coherence

/*
 * Copyright © 2023, Oracle and/or its affiliates.
 */
import (
	"github.com/gofiber/utils"
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

// newTestStore returns a new Coherence Store and ensures it is reset.
func newTestStore(t testing.TB, config ...Config) (*Storage, error) {
	t.Helper()

	testStore, err := New(config...)
	utils.AssertEqual(t, err, nil)

	err = testStore.Reset()

	return testStore, err
}

func Test_Coherence_Set_And_Get(t *testing.T) {
	var val []byte

	testStore, err := newTestStore(t)
	utils.AssertEqual(t, err, nil)

	err = testStore.Set(key1, value1, 0)
	utils.AssertEqual(t, err, nil)

	val, err = testStore.Get(key1)
	utils.AssertEqual(t, err, nil)
	utils.AssertEqual(t, value1, val)

	utils.AssertEqual(t, true, testStore.Conn() != nil)

	utils.AssertEqual(t, testStore.Close(), nil)
}

func Test_Coherence_Set_Override(t *testing.T) {
	var val []byte

	testStore, err := newTestStore(t)
	utils.AssertEqual(t, err, nil)

	err = testStore.Set(key1, value1, 0)
	utils.AssertEqual(t, err, nil)

	err = testStore.Set(key1, value2, 0)
	utils.AssertEqual(t, err, nil)

	val, err = testStore.Get(key1)
	utils.AssertEqual(t, err, nil)
	utils.AssertEqual(t, value2, val)

	utils.AssertEqual(t, testStore.Close(), nil)
}

func Test_Coherence_Set_With_Reset(t *testing.T) {
	var val []byte

	testStore, err := newTestStore(t)
	utils.AssertEqual(t, err, nil)

	err = testStore.Set(key1, value1, 0)
	utils.AssertEqual(t, err, nil)

	val, err = testStore.Get(key1)
	utils.AssertEqual(t, err, nil)
	utils.AssertEqual(t, value1, val)

	// get a new store but reset it, so the subsequent Get will return nil
	testStore, err = newTestStore(t, Config{Reset: true})
	utils.AssertEqual(t, err, nil)

	val, err = testStore.Get(key1)
	utils.AssertEqual(t, err, nil)
	utils.AssertEqual(t, true, len(val) == 0)

	utils.AssertEqual(t, testStore.Close(), nil)
}

func Test_Coherence_Set_With_Expiry(t *testing.T) {
	var val []byte

	testStore, err := newTestStore(t)
	utils.AssertEqual(t, err, nil)

	// set with an expiry of 5 seconds
	err = testStore.Set(key1, value1, time.Duration(5)*time.Second)
	utils.AssertEqual(t, err, nil)
	time.Sleep(time.Duration(6) * time.Second)

	val, err = testStore.Get(key1)
	utils.AssertEqual(t, err, nil)
	utils.AssertEqual(t, true, len(val) == 0)

	utils.AssertEqual(t, testStore.Close(), nil)
}

func Test_Coherence_Get_Missing(t *testing.T) {
	var val []byte

	testStore, err := newTestStore(t)
	utils.AssertEqual(t, err, nil)

	val, err = testStore.Get(missingKey)
	utils.AssertEqual(t, err, nil)
	utils.AssertEqual(t, true, len(val) == 0)

	utils.AssertEqual(t, testStore.Close(), nil)
}

func Test_Coherence_Reset(t *testing.T) {
	var val []byte

	testStore, err := newTestStore(t)
	utils.AssertEqual(t, err, nil)

	err = testStore.Set(key1, value1, 0)
	utils.AssertEqual(t, err, nil)

	err = testStore.Set(key2, value2, 0)
	utils.AssertEqual(t, err, nil)

	// check the keys exist
	val, err = testStore.Get(key1)
	utils.AssertEqual(t, err, nil)
	utils.AssertEqual(t, value1, val)

	val, err = testStore.Get(key2)
	utils.AssertEqual(t, err, nil)
	utils.AssertEqual(t, value2, val)

	// reset the store, this should remove both entries
	err = testStore.Reset()

	// check the keys have expired
	val, err = testStore.Get(key1)
	utils.AssertEqual(t, err, nil)
	utils.AssertEqual(t, true, len(val) == 0)

	val, err = testStore.Get(key2)
	utils.AssertEqual(t, err, nil)
	utils.AssertEqual(t, true, len(val) == 0)

	utils.AssertEqual(t, testStore.Close(), nil)
}

func Test_Coherence_Set_And_Delete(t *testing.T) {
	var val []byte

	testStore, err := newTestStore(t)
	utils.AssertEqual(t, err, nil)

	err = testStore.Set(key1, value1, 0)
	utils.AssertEqual(t, err, nil)

	err = testStore.Delete(key1)
	utils.AssertEqual(t, err, nil)

	// ensure the key has gone
	val, err = testStore.Get(key1)
	utils.AssertEqual(t, err, nil)
	utils.AssertEqual(t, true, len(val) == 0)

	utils.AssertEqual(t, testStore.Close(), nil)
}

// TestCoherenceWithScope ensures we can create multiple session stores with multiple scopes.
func Test_Coherence_With_Scope(t *testing.T) {
	var val []byte

	// create two session stores with different scopes
	testStore1, err := newTestStore(t, Config{ScopeName: "scope1"})
	utils.AssertEqual(t, err, nil)

	testStore2, err := newTestStore(t, Config{ScopeName: "scope2"})
	utils.AssertEqual(t, err, nil)

	// ensure we can put the same key with different values in each scope
	err = testStore1.Set(key1, value1, 0)
	utils.AssertEqual(t, err, nil)

	err = testStore2.Set(key1, value2, 0)
	utils.AssertEqual(t, err, nil)

	// ensure the value of "key1" is different for each store
	val, err = testStore1.Get(key1)
	utils.AssertEqual(t, err, nil)
	utils.AssertEqual(t, value1, val)

	val, err = testStore2.Get(key1)
	utils.AssertEqual(t, err, nil)
	utils.AssertEqual(t, value2, val)

	utils.AssertEqual(t, testStore1.Close(), nil)
	utils.AssertEqual(t, testStore2.Close(), nil)
}

func Benchmark_Coherence_Set(b *testing.B) {
	testStore, err := newTestStore(b)
	utils.AssertEqual(b, nil, err)

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		err = testStore.Set("john", []byte("doe"), 0)
	}

	utils.AssertEqual(b, nil, err)
}

func Benchmark_Coherence_Get(b *testing.B) {
	testStore, err := newTestStore(b)
	utils.AssertEqual(b, nil, err)

	err = testStore.Set("john", []byte("doe"), 0)
	utils.AssertEqual(b, nil, err)

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_, err = testStore.Get("john")
	}

	utils.AssertEqual(b, nil, err)
}

func Benchmark_Coherence_Delete(b *testing.B) {
	testStore, err := newTestStore(b)
	utils.AssertEqual(b, nil, err)

	err = testStore.Set("john", []byte("doe"), 0)
	utils.AssertEqual(b, nil, err)

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		err = testStore.Delete("john")
	}

	utils.AssertEqual(b, nil, err)
}
