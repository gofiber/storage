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
	cassandracontainer "github.com/testcontainers/testcontainers-go/modules/cassandra"
)

const (
	// cassandraImage is the default image used for running cassandra in tests.
	cassandraImage              = "cassandra:latest"
	cassandraImageEnvVar string = "TEST_CASSANDRA_IMAGE"
	cassandraPort               = "9042/tcp"
)

// newTestStore creates a Cassandra container using the official module
func newTestStore(t testing.TB, keyspace string) *Storage {
	t.Helper()

	img := cassandraImage
	if imgFromEnv := os.Getenv(cassandraImageEnvVar); imgFromEnv != "" {
		img = imgFromEnv
	}

	ctx := context.Background()

	c, err := cassandracontainer.Run(ctx, img)
	testcontainers.CleanupContainer(t, c)
	require.NoError(t, err)

	host, err := c.Host(ctx)
	require.NoError(t, err)

	port, err := c.MappedPort(ctx, cassandraPort)
	require.NoError(t, err)

	store, err := New(Config{
		Hosts:       []string{fmt.Sprintf("%s:%d", host, port.Int())},
		Keyspace:    keyspace,
		Table:       "test_kv",
		Consistency: gocql.One,
		Expiration:  10 * time.Second,
	})
	require.NoError(t, err)

	t.Cleanup(func() {
		store.Close()
	})

	return store
}

// Test_keyspace_creation tests the keyspace creation functionality
func Test_keyspace_creation(t *testing.T) {
	store := newTestStore(t, "test_keyspace_creation")
	require.NotNil(t, store)
}

// Test_set tests the Set operation
func Test_set(t *testing.T) {
	store := newTestStore(t, "test_basic_ops")
	require.NotNil(t, store)

	// Test Set
	err := store.Set("test", []byte("value"), 0)
	require.NoError(t, err)

	// Verify the value was set
	val, err := store.Get("test")
	require.NoError(t, err)
	require.Equal(t, []byte("value"), val)
}

// Test_get tests the Get operation
func Test_get(t *testing.T) {
	store := newTestStore(t, "test_basic_ops")
	require.NotNil(t, store)

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

// Test_delete tests the Delete operation
func Test_delete(t *testing.T) {
	store := newTestStore(t, "test_basic_ops")
	require.NotNil(t, store)

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

// Test_expirable_keys tests the expirable keys functionality
func Test_expirable_keys(t *testing.T) {
	store := newTestStore(t, "test_expirable")
	require.NotNil(t, store)

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

// Test_concurrent_access tests concurrent access to the storage
func Test_concurrent_access(t *testing.T) {
	store := newTestStore(t, "test_concurrent")
	require.NotNil(t, store)

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

// Test_reset tests the Reset method
func Test_reset(t *testing.T) {
	store := newTestStore(t, "test_reset")
	require.NotNil(t, store)

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

// Test_valid_identifiers tests valid identifier cases
func Test_valid_identifiers(t *testing.T) {
	store := newTestStore(t, "test_validation")
	require.NotNil(t, store)

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

// Test_invalid_identifiers tests invalid identifier cases
func Test_invalid_identifiers(t *testing.T) {

	store := newTestStore(t, "test_validation")
	require.NotNil(t, store)

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
	store := newTestStore(b, "test_concurrent")

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		err := store.Set("john", []byte("doe"), 0)
		require.NoError(b, err)
	}
}

func Benchmark_Cassandra_Get(b *testing.B) {
	store := newTestStore(b, "test_concurrent")

	err := store.Set("john", []byte("doe"), 0)
	require.NoError(b, err)

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_, err := store.Get("john")
		require.NoError(b, err)
	}
}

func Benchmark_Cassandra_Set_And_Delete(b *testing.B) {
	store := newTestStore(b, "test_concurrent")

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_ = store.Set("john", []byte("doe"), 0)
		err := store.Delete("john")
		require.NoError(b, err)
	}
}
