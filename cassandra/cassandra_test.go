package cassandra

import (
	"context"
	"fmt"
	"testing"
	"time"

	"github.com/gocql/gocql"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	cassandracontainer "github.com/testcontainers/testcontainers-go/modules/cassandra"
)

// setupCassandraContainer creates a Cassandra container using the official module
func setupCassandraContainer(ctx context.Context) (*cassandracontainer.CassandraContainer, string, error) {
	cassandraContainer, err := cassandracontainer.Run(ctx, "cassandra:4.1.3")
	if err != nil {
		return nil, "", err
	}

	// Get connection parameters
	host, err := cassandraContainer.Host(ctx)
	if err != nil {
		return nil, "", err
	}

	mappedPort, err := cassandraContainer.MappedPort(ctx, "9042/tcp")
	if err != nil {
		return nil, "", err
	}

	connectionURL := host + ":" + mappedPort.Port()
	return cassandraContainer, connectionURL, nil
}

func TestCassandraStorage(t *testing.T) {
	ctx := context.Background()

	// Start Cassandra container
	cassandraContainer, connectionURL, err := setupCassandraContainer(ctx)
	if err != nil {
		t.Fatalf("Failed to start Cassandra container: %v", err)
	}
	defer func() {
		if err := cassandraContainer.Terminate(ctx); err != nil {
			t.Logf("Failed to terminate container: %v", err)
		}
	}()

	// Test cases
	t.Run("KeyspaceCreation", func(t *testing.T) {
		t.Skip("Skipping keyspace creation test")
		testKeyspaceCreation(t, connectionURL)
	})

	t.Run("BasicOperations", func(t *testing.T) {
		testBasicOperations(t, connectionURL)
	})

	t.Run("ExpirableKeys", func(t *testing.T) {
		testExpirableKeys(t, connectionURL)
	})

	t.Run("Reset", func(t *testing.T) {
		testReset(t, connectionURL)
	})

	t.Run("ConcurrentAccess", func(t *testing.T) {
		testConcurrentAccess(t, connectionURL)
	})
}

func testKeyspaceCreation(t *testing.T, connectionURL string) {
	// Create new storage
	store := New(Config{
		Hosts:    []string{connectionURL},
		Keyspace: "test_keyspace_creation",
		Table:    "test_kv",
	})
	defer store.Close()

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

func testBasicOperations(t *testing.T, connectionURL string) {
	// Create new storage
	store := New(Config{
		Hosts:    []string{connectionURL},
		Keyspace: "test_basic_ops",
		Table:    "test_kv",
	})
	defer store.Close()

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
func testExpirableKeys(t *testing.T, connectionURL string) {
	// Create new storage with default expiration
	store := New(Config{
		Hosts:      []string{connectionURL},
		Keyspace:   "test_expirable",
		Table:      "test_kv",
		Expiration: 5 * time.Second, // Short default TTL for testing
	})
	defer store.Close()

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
	assert.Equal(t, []byte("value1"), value)

	value, err = store.Get("key_specific_ttl")
	require.NoError(t, err)
	assert.Equal(t, []byte("value2"), value)

	value, err = store.Get("key_no_ttl")
	require.NoError(t, err)
	assert.Equal(t, []byte("value3"), value)

	// Wait for specific TTL to expire
	time.Sleep(1500 * time.Millisecond)

	// Specific TTL key should be gone, others should remain
	value, err = store.Get("key_specific_ttl")
	require.NoError(t, err)
	assert.Nil(t, value, "Key with 1s TTL should have expired")

	value, err = store.Get("key_default_ttl")
	require.NoError(t, err)
	assert.Equal(t, []byte("value1"), value, "Key with default TTL should still exist")

	value, err = store.Get("key_no_ttl")
	require.NoError(t, err)
	assert.Equal(t, []byte("value3"), value, "Key with no TTL should still exist")

	// Wait for default TTL to expire
	time.Sleep(4 * time.Second)

	// Default TTL key should be gone, no TTL key should remain
	value, err = store.Get("key_default_ttl")
	require.NoError(t, err)
	assert.Nil(t, value, "Key with default TTL should have expired")

	value, err = store.Get("key_no_ttl")
	require.NoError(t, err)
	assert.Equal(t, []byte("value3"), value, "Key with no TTL should still exist")
}

func testReset(t *testing.T, connectionURL string) {
	// Create new storage
	store := New(Config{
		Hosts:    []string{connectionURL},
		Keyspace: "test_reset",
		Table:    "test_kv",
	})

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

	// Close the first storage
	store.Close()

	// Create new storage with Reset flag
	store = New(Config{
		Hosts:    []string{connectionURL},
		Keyspace: "test_reset",
		Table:    "test_kv",
		Reset:    true,
	})
	defer store.Close()

	// Set a key
	err = store.Set("key3", []byte("value3"), 0)
	require.NoError(t, err)

	// Verify key exists
	value, err = store.Get("key3")
	require.NoError(t, err)
	require.Equal(t, []byte("value3"), value)
}

func testConcurrentAccess(t *testing.T, connectionURL string) {
	// Create new storage
	store := New(Config{
		Hosts:    []string{connectionURL},
		Keyspace: "test_concurrent",
		Table:    "test_kv",
	})
	defer store.Close()

	// Number of goroutines
	const concurrentOps = 10
	done := make(chan bool, concurrentOps)

	// Run concurrent operations
	for i := 0; i < concurrentOps; i++ {
		go func(id int) {
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

			done <- true
		}(i)
	}

	// Wait for all goroutines to complete
	for i := 0; i < concurrentOps; i++ {
		<-done
	}
}
