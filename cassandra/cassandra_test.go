package cassandra

import (
	"context"
	"fmt"
	"os"
	"sync"
	"testing"
	"time"

	"github.com/gocql/gocql"
	"github.com/stretchr/testify/require"
	"github.com/testcontainers/testcontainers-go"
	"github.com/testcontainers/testcontainers-go/modules/cassandra"
)

const (
	// cassandraImage is the default image used for running cassandra in tests.
	cassandraImage              = "cassandra:latest"
	cassandraImageEnvVar string = "TEST_CASSANDRA_IMAGE"
	cassandraPort               = "9042/tcp"
)

// newTestStore creates a Cassandra container using the official module
func newTestStore(t testing.TB) *Storage {
	t.Helper()

	img := cassandraImage
	if imgFromEnv := os.Getenv(cassandraImageEnvVar); imgFromEnv != "" {
		img = imgFromEnv
	}

	ctx := context.Background()

	c, err := cassandra.Run(ctx, img)
	testcontainers.CleanupContainer(t, c)
	require.NoError(t, err)

	connectionHost, err := c.ConnectionHost(ctx)
	require.NoError(t, err)

	store, err := New(Config{
		Hosts:       []string{connectionHost},
		Keyspace:    "test_cassandra",
		Table:       "test_kv",
		Consistency: gocql.One,
		Expiration:  10 * time.Second,
	})
	require.NoError(t, err)

	return store
}

// Test_Set tests the Set operation
func Test_Set(t *testing.T) {
	store := newTestStore(t)
	defer store.Close()

	// Test Set
	err := store.Set("test", []byte("value"), 0)
	require.NoError(t, err)

	// Verify the value was set
	val, err := store.Get("test")
	require.NoError(t, err)
	require.Equal(t, []byte("value"), val)
}

func Test_SetWithContext(t *testing.T) {
	store := newTestStore(t)
	defer store.Close()

	// Test SetWithContext
	ctx, cancel := context.WithCancel(context.Background())
	cancel()
	err := store.SetWithContext(ctx, "test", []byte("value"), 0)
	require.ErrorIs(t, err, context.Canceled)

	// Verify the value was not set
	val, err := store.Get("test")
	require.Error(t, err)
	require.Empty(t, val)
}

// Test_Get tests the Get operation
func Test_Get(t *testing.T) {
	store := newTestStore(t)
	defer store.Close()

	// Set a value first
	err := store.Set("test", []byte("value"), 0)
	require.NoError(t, err)

	// Test Get
	val, err := store.Get("test")
	require.NoError(t, err)
	require.Equal(t, []byte("value"), val)

	// Test Get non-existent key
	val, err = store.Get("nonexistent")
	require.Error(t, err)
	require.Nil(t, val)
}

// Test_GetWithContext tests the Get operation with context
func Test_GetWithContext(t *testing.T) {
	store := newTestStore(t)
	defer store.Close()

	// Set a value first
	err := store.Set("test", []byte("value"), 0)
	require.NoError(t, err)

	// Test GetWithContext
	ctx, cancel := context.WithCancel(context.Background())
	cancel()
	val, err := store.GetWithContext(ctx, "test")
	require.ErrorIs(t, err, context.Canceled)
	require.Nil(t, val)

	// Verify the value still exists
	val, err = store.Get("test")
	require.NoError(t, err)
	require.Equal(t, []byte("value"), val)
}

// Test_Delete tests the Delete operation
func Test_Delete(t *testing.T) {
	store := newTestStore(t)
	defer store.Close()

	// Set a value first
	err := store.Set("test", []byte("value"), 0)
	require.NoError(t, err)

	// Verify the value exists
	val, err := store.Get("test")
	require.NoError(t, err)
	require.Equal(t, []byte("value"), val)

	// Test Delete
	err = store.Delete("test")
	require.NoError(t, err)

	// Verify deletion
	val, err = store.Get("test")
	require.Error(t, err)
	require.Nil(t, val)
}

// Test_DeleteWithContext tests the Delete operation with context
func Test_DeleteWithContext(t *testing.T) {
	store := newTestStore(t)
	defer store.Close()

	// Set a value first
	err := store.Set("test", []byte("value"), 0)
	require.NoError(t, err)

	// Verify the value exists
	val, err := store.Get("test")
	require.NoError(t, err)
	require.Equal(t, []byte("value"), val)

	// Test DeleteWithContext
	ctx, cancel := context.WithCancel(context.Background())
	cancel()
	err = store.DeleteWithContext(ctx, "test")
	require.ErrorIs(t, err, context.Canceled)

	// Verify the value still exists
	val, err = store.Get("test")
	require.NoError(t, err)
	require.Equal(t, []byte("value"), val)
}

// Test_Expirable_Keys tests the expirable keys functionality
func Test_Expirable_Keys(t *testing.T) {
	store := newTestStore(t)
	defer store.Close()

	// Set key with 1 second expiration
	err := store.Set("test", []byte("value"), time.Second)
	require.NoError(t, err)

	// Verify key exists
	val, err := store.Get("test")
	require.NoError(t, err)
	require.Equal(t, []byte("value"), val)

	// Wait for expiration using Eventually
	require.Eventually(t, func() bool {
		val, err := store.Get("test")
		return err != nil && val == nil
	}, 3*time.Second, 100*time.Millisecond, "Key should expire within 3 seconds")
}

// Test_Concurrent_Access tests concurrent access to the storage
func Test_Concurrent_Access(t *testing.T) {
	store := newTestStore(t)
	defer store.Close()

	var wg sync.WaitGroup
	for i := 0; i < 10; i++ {
		wg.Add(1)
		go func(i int) {
			defer wg.Done()
			key := fmt.Sprintf("key%d", i)
			value := []byte(fmt.Sprintf("value%d", i))

			err := store.Set(key, value, 0)
			require.NoError(t, err)

			val, err := store.Get(key)
			require.NoError(t, err)
			require.Equal(t, value, val)
		}(i)
	}
	wg.Wait()
}

// Test_Reset tests the Reset method
func Test_Reset(t *testing.T) {
	store := newTestStore(t)
	defer store.Close()

	// Add some data
	err := store.Set("test1", []byte("value1"), 0)
	require.NoError(t, err)
	err = store.Set("test2", []byte("value2"), 0)
	require.NoError(t, err)

	// Reset storage
	err = store.Reset()
	require.NoError(t, err)

	// Verify data is gone
	val, err := store.Get("test1")
	require.Error(t, err)
	require.Nil(t, val)

	val, err = store.Get("test2")
	require.Error(t, err)
	require.Nil(t, val)
}

// Test_ResetWithContext tests the Reset method with context
func Test_ResetWithContext(t *testing.T) {
	store := newTestStore(t)
	defer store.Close()

	// Add some data
	err := store.Set("test1", []byte("value1"), 0)
	require.NoError(t, err)
	err = store.Set("test2", []byte("value2"), 0)
	require.NoError(t, err)

	// Reset storage with context
	ctx, cancel := context.WithCancel(context.Background())
	cancel()
	err = store.ResetWithContext(ctx)
	require.ErrorIs(t, err, context.Canceled)

	// Verify data is still there
	val, err := store.Get("test1")
	require.NoError(t, err)
	require.Equal(t, []byte("value1"), val)

	val, err = store.Get("test2")
	require.NoError(t, err)
	require.Equal(t, []byte("value2"), val)
}

// Test_Valid_Identifiers tests valid identifier cases
func Test_Valid_Identifiers(t *testing.T) {
	store := newTestStore(t)
	defer store.Close()

	validCases := []struct {
		name string
		key  string
	}{
		{"test", "test"},
		{"test123", "test123"},
		{"test_123", "test_123"},
		{"TEST", "TEST"},
		{"Test123", "Test123"},
	}

	for _, tc := range validCases {
		t.Run(tc.name, func(t *testing.T) {
			err := store.Set(tc.key, []byte("value"), 0)
			require.NoError(t, err)
		})
	}
}

// Test_Invalid_Identifiers tests invalid identifier cases
func Test_Invalid_Identifiers(t *testing.T) {
	store := newTestStore(t)
	defer store.Close()

	invalidCases := []struct {
		name string
		key  string
	}{
		{"empty", ""},
		{"space", "test key"},
		{"quote", `test"key`},
		{"semicolon", "test;key"},
		{"sql_injection", "test' OR '1'='1"},
		{"unicode", "test\u2028key"},
	}

	for _, tc := range invalidCases {
		t.Run(fmt.Sprintf("invalid_%s", tc.name), func(t *testing.T) {
			err := store.Set(tc.key, []byte("value"), 0)
			require.Error(t, err)
			require.Contains(t, err.Error(), "invalid key name")
		})
	}
}

func Benchmark_Cassandra_Set(b *testing.B) {
	store := newTestStore(b)
	defer store.Close()

	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		err = store.Set("john", []byte("doe"), 0)
	}
	require.NoError(b, err)
}

func Benchmark_Cassandra_Get(b *testing.B) {
	store := newTestStore(b)
	defer store.Close()

	err := store.Set("john", []byte("doe"), 0)
	require.NoError(b, err)

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_, err = store.Get("john")
	}
	require.NoError(b, err)
}

func Benchmark_Cassandra_Set_And_Delete(b *testing.B) {
	store := newTestStore(b)
	defer store.Close()

	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		_ = store.Set("john", []byte("doe"), 0)
		err = store.Delete("john")
	}
	require.NoError(b, err)
}
