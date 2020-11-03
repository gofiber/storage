package memory

import (
	"testing"
	"time"

	"github.com/gofiber/utils"
)

func Test_Memory_Config(t *testing.T) {
	t.Parallel()

	store := New(Config{})

	utils.AssertEqual(t, ConfigDefault.GCInterval, store.gcInterval)
}

func Test_Memory_Set(t *testing.T) {
	t.Parallel()

	store := New()

	id := "hello"
	value := []byte("Hi there!")

	err := store.Set(id, value, 0)

	utils.AssertEqual(t, nil, err)
	utils.AssertEqual(t, entry{value, 0}, store.db[id])

}

func Test_Memory_SetExpiry(t *testing.T) {
	t.Parallel()

	store := New()

	id := "hello"
	value := []byte("Hi there!")
	expiry := time.Second * 10

	err := store.Set(id, value, expiry)

	utils.AssertEqual(t, nil, err)

	now := time.Now().Unix()
	fromStore, found := store.db[id]
	utils.AssertEqual(t, true, found)

	delta := fromStore.expiry - now
	upperBound := int64(expiry.Seconds())
	lowerBound := upperBound - 2

	if !(delta <= upperBound && delta > lowerBound) {
		t.Fatalf("Test_SetExpiry: expiry delta out of bounds (is %d, must be %d<x<=%d)", delta, lowerBound, upperBound)
	}

}

func Test_Memory_GC(t *testing.T) {
	t.Parallel()

	store := &Storage{
		db:         make(map[string]entry),
		gcInterval: time.Millisecond * 10,
	}

	id := "hello"
	value := []byte("Hi there!")

	expireAt := time.Now().Add(-time.Second).Unix()

	store.db[id] = entry{value, expireAt}

	go store.gc()

	// The purpose of the long delay is to ensure the GC has time to run and delete the value
	time.Sleep(time.Millisecond * 15)

	store.mux.RLock()
	_, found := store.db[id]
	utils.AssertEqual(t, false, found)
	store.mux.RUnlock()
}

func Test_Memory_Get(t *testing.T) {
	t.Parallel()

	store := New()

	t.Run("exist", func(t *testing.T) {
		id := "hello"
		value := []byte("Hi there!")

		store.db[id] = entry{value, 0}

		returnedValue, err := store.Get(id)
		utils.AssertEqual(t, nil, err)
		utils.AssertEqual(t, value, returnedValue)
	})

	t.Run("expired", func(t *testing.T) {
		expired := "expired"
		store.db[expired] = entry{[]byte{}, time.Now().Add(-time.Second).Unix()}

		returnedValue, err := store.Get(expired)
		utils.AssertEqual(t, nil, err)
		utils.AssertEqual(t, true, returnedValue == nil)
	})

	t.Run("non-exist", func(t *testing.T) {
		returnedValue, err := store.Get("non-exist")
		utils.AssertEqual(t, nil, err)
		utils.AssertEqual(t, true, returnedValue == nil)
	})
}

func Test_Memory_Delete(t *testing.T) {
	t.Parallel()

	store := New()

	id := "hello"
	value := []byte("Hi there!")

	store.db[id] = entry{value, 0}

	err := store.Delete(id)
	utils.AssertEqual(t, nil, err)

	_, found := store.db[id]
	utils.AssertEqual(t, false, found)

}

func Test_Memory_Clear(t *testing.T) {
	t.Parallel()

	store := New()

	id := "hello"
	value := []byte("Hi there!")

	store.db[id] = entry{value, 0}

	err := store.Clear()
	utils.AssertEqual(t, nil, err)
	utils.AssertEqual(t, make(map[string]entry), store.db)

}

func Benchmark_Memory_Set(b *testing.B) {

	store := New()

	id := "hello"
	value := []byte("Hi there!")
	expiry := time.Duration(0)

	b.ReportAllocs()
	b.ResetTimer()

	b.RunParallel(func(pb *testing.PB) {
		for pb.Next() {
			_ = store.Set(id, value, expiry)
		}
	})
}

func Benchmark_Memory_Get(b *testing.B) {

	store := New()

	id := "hello"
	value := []byte("Hi there!")

	store.db[id] = entry{value, 0}

	b.ReportAllocs()
	b.ResetTimer()

	b.RunParallel(func(pb *testing.PB) {
		for pb.Next() {
			_, _ = store.Get(id)
		}
	})
}
