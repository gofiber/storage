package objectbox

import (
	"fmt"
	"os"
	"testing"
	"time"

	"github.com/stretchr/testify/require"
)

// createTestStore sets up a new, clean Storage instance for each test.
func createTestStore(t *testing.T) *Storage {
	t.Helper()

	testDir, err := os.MkdirTemp("", "objectbox-test-*")
	require.NoError(t, err)

	store := New(Config{
		Directory:   testDir,
		Reset:       true,
		MaxSizeInKb: 1024,
		MaxReaders:  10,
		GCInterval:  60 * time.Second,
	})

	t.Cleanup(func() {
		require.NoError(t, store.Close())
		require.NoError(t, os.RemoveAll(testDir))
	})

	return store
}

// createBenchmarkStore sets up a new, clean Storage instance for each benchmark.
func createBenchmarkStore(b *testing.B) *Storage {
	b.Helper()

	testDir, err := os.MkdirTemp("", "objectbox-benchmark-*")
	require.NoError(b, err)

	store := New(Config{
		Directory:   testDir,
		Reset:       true,
		MaxSizeInKb: 1024,
		MaxReaders:  10,
		GCInterval:  60 * time.Second,
	})

	b.Cleanup(func() {
		require.NoError(b, store.Close())
		require.NoError(b, os.RemoveAll(testDir))
	})

	return store
}

func Test_ObjectBox_Set_And_Get(t *testing.T) {
	store := createTestStore(t)
	key := "test_key"
	value := []byte("test_value")

	err := store.Set(key, value, 5*time.Second)
	require.NoError(t, err)

	got, err := store.Get(key)
	require.NoError(t, err)
	require.Equal(t, value, got)
}

func Test_ObjectBox_Multiple_Sets_Same_Key(t *testing.T) {
	store := createTestStore(t)
	key := "multi_set_test"
	value1 := []byte("first_value")
	value2 := []byte("second_value")
	value3 := []byte("third_value")

	err := store.Set(key, value1, 0)
	require.NoError(t, err)

	got, err := store.Get(key)
	require.NoError(t, err)
	require.Equal(t, value1, got)

	err = store.Set(key, value2, 1*time.Second)
	require.NoError(t, err)

	got, err = store.Get(key)
	require.NoError(t, err)
	require.Equal(t, value2, got)

	err = store.Set(key, value3, 2*time.Second)
	require.NoError(t, err)

	got, err = store.Get(key)
	require.NoError(t, err)
	require.Equal(t, value3, got)
}

func Test_ObjectBox_Get_NotExist(t *testing.T) {
	store := createTestStore(t)
	result, err := store.Get("nonexistent_key")
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_ObjectBox_Delete(t *testing.T) {
	store := createTestStore(t)
	key := "delete_test"
	value := []byte("delete_value")

	err := store.Set(key, value, 0)
	require.NoError(t, err)

	err = store.Delete(key)
	require.NoError(t, err)

	got, err := store.Get(key)
	require.NoError(t, err)
	require.Nil(t, got)
}

func Test_ObjectBox_Expiration(t *testing.T) {
	store := createTestStore(t)
	key := "expire_test"
	value := []byte("expire_value")

	err := store.Set(key, value, 1*time.Second)
	require.NoError(t, err)

	time.Sleep(2 * time.Second)

	got, err := store.Get(key)
	require.NoError(t, err)
	require.Nil(t, got)
}

func Test_ObjectBox_Reset(t *testing.T) {
	store := createTestStore(t)
	key1 := "reset_test_1"
	key2 := "reset_test_2"
	value := []byte("reset_value")

	err := store.Set(key1, value, 0)
	require.NoError(t, err)
	err = store.Set(key2, value, 0)
	require.NoError(t, err)

	err = store.Reset()
	require.NoError(t, err)

	got, err := store.Get(key1)
	require.NoError(t, err)
	require.Nil(t, got)

	got, err = store.Get(key2)
	require.NoError(t, err)
	require.Nil(t, got)
}

func Test_ObjectBox_Empty_Key(t *testing.T) {
	store := createTestStore(t)
	result, err := store.Get("")
	require.NoError(t, err)
	require.Nil(t, result)
}

func Test_ObjectBox_Empty_Value(t *testing.T) {
	store := createTestStore(t)
	err := store.Set("test_key", []byte{}, 0)
	require.NoError(t, err)
}

func Test_ObjectBox_Empty_Key_Delete(t *testing.T) {
	store := createTestStore(t)
	err := store.Delete("")
	require.NoError(t, err)
}

func Test_ObjectBox_Concurrent_Operations(t *testing.T) {
	store := createTestStore(t)
	const goroutines = 10
	done := make(chan bool)

	for i := 0; i < goroutines; i++ {
		go func(id int) {
			key := fmt.Sprintf("concurrent_key_%d", id)
			value := []byte(fmt.Sprintf("value_%d", id))

			err := store.Set(key, value, time.Hour)
			if err != nil {
				t.Errorf("Failed concurrent set: %v", err)
			}

			_, err = store.Get(key)
			if err != nil {
				t.Errorf("Failed concurrent get: %v", err)
			}

			done <- true
		}(i)
	}

	for i := 0; i < goroutines; i++ {
		<-done
	}
}

func Test_ObjectBox_Zero_Expiration(t *testing.T) {
	store := createTestStore(t)
	key := "zero_expiration_test"
	value := []byte("test_value")

	err := store.Set(key, value, 0)
	require.NoError(t, err)

	// Wait some time to verify the value persists
	time.Sleep(2 * time.Second)

	got, err := store.Get(key)
	require.NoError(t, err)
	require.Equal(t, value, got)
}

func Test_ObjectBox_GC(t *testing.T) {
	store := createTestStore(t)
	// Set items with different expiration times
	tests := []struct {
		key    string
		value  []byte
		expiry time.Duration
	}{
		{"expired1", []byte("value1"), -1 * time.Second},
		{"expired2", []byte("value2"), -2 * time.Second},
		{"valid1", []byte("value3"), 1 * time.Hour},
		{"valid2", []byte("value4"), 2 * time.Hour},
		{"no_expiry", []byte("value5"), 0},
	}

	for _, tt := range tests {
		err := store.Set(tt.key, tt.value, tt.expiry)
		if err != nil {
			t.Fatalf("Failed to set test data: %v", err)
		}
	}

	// Run cleanup
	store.gc()

	// Verify expired items are removed and valid ones remain
	for _, tt := range tests {
		got, err := store.Get(tt.key)
		if err != nil {
			t.Fatalf("Failed to get value: %v", err)
		}

		if tt.expiry < 0 && got != nil {
			t.Errorf("Expected expired key %s to be nil, got %v", tt.key, got)
		}
		if tt.expiry >= 0 && got == nil {
			t.Errorf("Expected valid key %s to exist, got nil", tt.key)
		}
	}
}

func Benchmark_ObjectBox_Set(b *testing.B) {
	store := createBenchmarkStore(b)
	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		err = store.Set("bench_key", []byte("bench_value"), 0)
	}
	require.NoError(b, err)
}

func Benchmark_ObjectBox_Get(b *testing.B) {
	store := createBenchmarkStore(b)
	err := store.Set("bench_key", []byte("bench_value"), 0)
	require.NoError(b, err)

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_, err = store.Get("bench_key")
	}
	require.NoError(b, err)
}

func Benchmark_ObjectBox_SetAndDelete(b *testing.B) {
	store := createBenchmarkStore(b)
	b.ReportAllocs()
	b.ResetTimer()

	var err error

	for i := 0; i < b.N; i++ {
		_ = store.Set("bench_key", []byte("bench_value"), 0)
		err = store.Delete("bench_key")
	}
	require.NoError(b, err)
}
