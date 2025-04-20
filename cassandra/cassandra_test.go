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
func newTestStore(t testing.TB) string {
	t.Helper()

	img := cassandraImage
	if imgFromEnv := os.Getenv(cassandraImageEnvVar); imgFromEnv != "" {
		img = imgFromEnv
	}

	ctx := context.Background()

	c, err := cassandracontainer.Run(ctx, img)
	testcontainers.CleanupContainer(t, c)
	require.NoError(t, err)

	// Get connection parameters
	host, err := c.Host(ctx)
	require.NoError(t, err)

	mappedPort, err := c.MappedPort(ctx, cassandraPort)
	require.NoError(t, err)

	connectionURL := host + ":" + mappedPort.Port()
	return connectionURL
}

// TestCassandraStorage tests the Cassandra storage implementation
func TestCassandraStorage(t *testing.T) {
	// Test cases
	t.Run("KeyspaceCreation", func(t *testing.T) {
		connectionURL := newTestStore(t)
		store, err := New(Config{
			Hosts:      []string{connectionURL},
			Keyspace:   "test_keyspace_creation",
			Table:      "test_kv",
			Expiration: 5 * time.Second,
		})
		require.NoError(t, err)
		defer store.Close()
		testKeyspaceCreation(t, connectionURL, store)
	})

	t.Run("BasicOperations", func(t *testing.T) {
		connectionURL := newTestStore(t)
		store, err := New(Config{
			Hosts:      []string{connectionURL},
			Keyspace:   "test_basic_ops",
			Table:      "test_kv",
			Expiration: 5 * time.Second,
		})
		require.NoError(t, err)
		defer store.Close()
		testBasicOperations(t, store)
	})

	t.Run("ExpirableKeys", func(t *testing.T) {
		connectionURL := newTestStore(t)
		store, err := New(Config{
			Hosts:      []string{connectionURL},
			Keyspace:   "test_expirable",
			Table:      "test_kv",
			Expiration: 5 * time.Second,
		})
		require.NoError(t, err)
		defer store.Close()
		testExpirableKeys(t, store)
	})

	t.Run("ConcurrentAccess", func(t *testing.T) {
		connectionURL := newTestStore(t)
		store, err := New(Config{
			Hosts:      []string{connectionURL},
			Keyspace:   "test_concurrent",
			Table:      "test_kv",
			Expiration: 5 * time.Second,
		})
		require.NoError(t, err)
		defer store.Close()
		testConcurrentAccess(t, store)
	})

	t.Run("Reset", func(t *testing.T) {
		connectionURL := newTestStore(t)
		store, err := New(Config{
			Hosts:      []string{connectionURL},
			Keyspace:   "test_reset",
			Table:      "test_kv",
			Expiration: 5 * time.Second,
		})
		require.NoError(t, err)
		defer store.Close()
		testReset(t, connectionURL, store)
	})

	t.Run("IdentifierValidation", func(t *testing.T) {
		testIdentifierValidation(t)
	})
}

// testKeyspaceCreation tests the keyspace creation functionality.
func testKeyspaceCreation(t *testing.T, connectionURL string, store *Storage) {

	// Verify keyspace was created
	systemCluster := gocql.NewCluster(connectionURL)
	systemSession, err := systemCluster.CreateSession()
	require.NoError(t, err)
	defer systemSession.Close()

	var count int
	err = systemSession.Query(
		"SELECT COUNT(*) FROM system_schema.keyspaces WHERE keyspace_name = ?",
		"test_keyspace_creation",
	).Scan(&count)
	require.NoError(t, err)
	require.Equal(t, 1, count, "Keyspace should have been created")

	// Verify table was created
	cluster := gocql.NewCluster(connectionURL)
	cluster.Keyspace = "test_keyspace_creation"
	session, err := cluster.CreateSession()
	require.NoError(t, err)
	defer session.Close()

	err = session.Query(
		"SELECT COUNT(*) FROM system_schema.tables WHERE keyspace_name = ? AND table_name = ?",
		"test_keyspace_creation", "test_kv",
	).Scan(&count)
	require.NoError(t, err)
	require.Equal(t, 1, count, "Table should have been created")
}

// testBasicOperations tests basic operations like setting, getting, and deleting keys.
func testBasicOperations(t *testing.T, store *Storage) {

	// Set a key
	err := store.Set("test_key", []byte("test_value"), 0)
	require.NoError(t, err)

	// Get the key
	value, err := store.Get("test_key")
	require.NoError(t, err)
	require.Equal(t, []byte("test_value"), value)

	// Get a non-existent key
	value, err = store.Get("nonexistent_key")
	require.NoError(t, err)
	require.Nil(t, value)

	// Delete the key
	err = store.Delete("test_key")
	require.NoError(t, err)

	// Get the deleted key
	value, err = store.Get("test_key")
	require.NoError(t, err)
	require.Nil(t, value)
}

// testExpirableKeys tests the expirable keys functionality.
func testExpirableKeys(t *testing.T, store *Storage) {
	// Set keys with different expiration settings
	// Key with default TTL (exp = 0 means use default)
	err := store.Set("key_default_ttl", []byte("value1"), 0)
	require.NoError(t, err)

	// Key with specific TTL
	err = store.Set("key_specific_ttl", []byte("value2"), 1*time.Second)
	require.NoError(t, err)

	// Key with no TTL (overrides default)
	err = store.Set("key_no_ttl", []byte("value3"), -1)
	require.NoError(t, err)

	// Verify all keys exist initially
	value, err := store.Get("key_default_ttl")
	require.NoError(t, err)
	require.Equal(t, []byte("value1"), value)

	value, err = store.Get("key_specific_ttl")
	require.NoError(t, err)
	require.Equal(t, []byte("value2"), value)

	value, err = store.Get("key_no_ttl")
	require.NoError(t, err)
	require.Equal(t, []byte("value3"), value)

	// Wait for specific TTL to expire
	require.Eventually(t, func() bool {
		v, _ := store.Get("key_specific_ttl")
		return v == nil
	}, 3*time.Second, 100*time.Millisecond,
		"Key with 1s TTL should have expired")

	// Default TTL key should still exist
	value, err = store.Get("key_default_ttl")
	require.NoError(t, err)
	require.Equal(t, []byte("value1"), value, "Key with default TTL should still exist")

	// No TTL key should still exist
	value, err = store.Get("key_no_ttl")
	require.NoError(t, err)
	require.Equal(t, []byte("value3"), value, "Key with no TTL should still exist")

	// Wait for default TTL to expire
	require.Eventually(t, func() bool {
		v, _ := store.Get("key_default_ttl")
		return v == nil
	}, 6*time.Second, 100*time.Millisecond,
		"Key with default TTL should have expired")

	// No TTL key should still exist
	value, err = store.Get("key_no_ttl")
	require.NoError(t, err)
	require.Equal(t, []byte("value3"), value, "Key with no TTL should still exist")
}

// testReset tests the Reset method.
func testReset(t *testing.T, connectionURL string, store *Storage) {
	// Set some keys
	err := store.Set("key1", []byte("value1"), 0)
	require.NoError(t, err)

	err = store.Set("key2", []byte("value2"), 0)
	require.NoError(t, err)

	// Verify keys exist
	value, err := store.Get("key1")
	require.NoError(t, err)
	require.Equal(t, []byte("value1"), value)

	// Reset storage
	err = store.Reset()
	require.NoError(t, err)

	// Verify keys are gone
	value, err = store.Get("key1")
	require.NoError(t, err)
	require.Nil(t, value, "Key should be deleted after reset")

	value, err = store.Get("key2")
	require.NoError(t, err)
	require.Nil(t, value, "Key should be deleted after reset")

	// Close the first store before creating a new one
	store.Close()

	// Create new storage with Reset flag
	newStore, err := New(Config{
		Hosts:    []string{connectionURL},
		Keyspace: "test_reset",
		Table:    "test_kv",
		Reset:    true,
	})
	require.NoError(t, err)
	defer newStore.Close()

	// Set a key
	err = newStore.Set("key3", []byte("value3"), 0)
	require.NoError(t, err)

	// Verify key exists
	value, err = newStore.Get("key3")
	require.NoError(t, err)
	require.Equal(t, []byte("value3"), value)
}

// testConcurrentAccess tests concurrent access to the storage.
func testConcurrentAccess(t *testing.T, store *Storage) {
	// Number of goroutines
	const concurrentOps = 10
	var wg sync.WaitGroup
	wg.Add(concurrentOps)

	// Run concurrent operations
	for i := 0; i < concurrentOps; i++ {
		go func(id int) {
			defer wg.Done()
			// Set key
			key := fmt.Sprintf("key%d", id)
			value := []byte(fmt.Sprintf("value%d", id))
			err := store.Set(key, value, 0)
			require.NoError(t, err)

			// Get key
			retrievedValue, err := store.Get(key)
			require.NoError(t, err)
			require.Equal(t, value, retrievedValue)

			// Delete key
			err = store.Delete(key)
			require.NoError(t, err)

			// Verify deletion
			retrievedValue, err = store.Get(key)
			require.NoError(t, err)
			require.Nil(t, retrievedValue)
		}(i)
	}

	// Wait for all goroutines to complete
	wg.Wait()
}

func Benchmark_Cassandra_Set(b *testing.B) {
	connectionURL := newTestStore(b)

	// Create new storage
	store, err := New(Config{
		Hosts:    []string{connectionURL},
		Keyspace: "test_concurrent",
		Table:    "test_kv",
	})
	require.NoError(b, err)
	defer store.Close()

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		err = store.Set("john", []byte("doe"), 0)
	}

	require.NoError(b, err)
}

func Benchmark_Cassandra_Get(b *testing.B) {
	connectionURL := newTestStore(b)

	// Create new storage
	client, err := New(Config{
		Hosts:    []string{connectionURL},
		Keyspace: "test_concurrent",
		Table:    "test_kv",
	})
	require.NoError(b, err)
	defer client.Close()

	b.ReportAllocs()
	b.ResetTimer()

	err = client.Set("john", []byte("doe"), 0)
	require.NoError(b, err)

	for i := 0; i < b.N; i++ {
		_, err = client.Get("john")
	}

	require.NoError(b, err)
}

func Benchmark_Cassandra_Set_And_Delete(b *testing.B) {
	connectionURL := newTestStore(b)

	// Create new storage
	client, err := New(Config{
		Hosts:    []string{connectionURL},
		Keyspace: "test_concurrent",
		Table:    "test_kv",
	})
	require.NoError(b, err)
	defer client.Close()

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_ = client.Set("john", []byte("doe"), 0)
		err = client.Delete("john")
	}

	require.NoError(b, err)
}

// testIdentifierValidation tests the validateIdentifier function
func testIdentifierValidation(t *testing.T) {
	// Test valid identifiers
	validCases := []string{
		"test",
		"test123",
		"test_123",
		"TEST",
		"Test123",
		"test_table",
	}

	for _, tc := range validCases {
		t.Run(fmt.Sprintf("valid_%s", tc), func(t *testing.T) {
			result, err := validateIdentifier(tc, "test")
			require.NoError(t, err)
			require.Equal(t, tc, result)
		})
	}

	// Test invalid identifiers
	invalidCases := []struct {
		name  string
		value string
	}{
		{"empty", ""},
		{"space", "test table"},
		{"hyphen", "test-table"},
		{"dot", "test.table"},
		{"quote", `test"table`},
		{"semicolon", "test;table"},
		{"sql_injection", `test"; DROP KEYSPACE prod; --`},
		{"unicode", "test表"},
	}

	for _, tc := range invalidCases {
		t.Run(fmt.Sprintf("invalid_%s", tc.name), func(t *testing.T) {
			_, err := validateIdentifier(tc.value, "test")
			require.Error(t, err)
			require.Contains(t, err.Error(), "invalid test name")
		})
	}
}
