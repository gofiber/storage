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
	cassandraImage              = "public.ecr.aws/docker/library/cassandra:latest"
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

	val, err := store.Get("test")
	require.NoError(t, err)
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

	val, err = store.Get("nonexistent")
	require.NoError(t, err)
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

	val, err = store.Get("test")
	require.NoError(t, err)
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

	// An expired key is a miss, which the storage interface documents as nil, nil.
	require.Eventually(t, func() bool {
		val, err := store.Get("test")
		return err == nil && val == nil
	}, 4*time.Second, 100*time.Millisecond, "Key should expire")
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

	val, err := store.Get("test1")
	require.NoError(t, err)
	require.Nil(t, val)

	val, err = store.Get("test2")
	require.NoError(t, err)
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

// Keys are bound as query parameters, so anything dangerous spliced into a statement round-trips unchanged.
func Test_Unusual_Keys(t *testing.T) {
	store := newTestStore(t)
	defer store.Close()

	keys := []struct {
		name string
		key  string
	}{
		{"space", "test key"},
		{"quote", `test"key`},
		{"semicolon", "test;key"},
		{"sql_injection", "test' OR '1'='1"},
		{"unicode", "test\u2028key"},
		{"colon", "user:123"},
	}

	for _, tc := range keys {
		t.Run(tc.name, func(t *testing.T) {
			require.NoError(t, store.Set(tc.key, []byte("value"), 0))

			val, err := store.Get(tc.key)
			require.NoError(t, err)
			require.Equal(t, []byte("value"), val)

			require.NoError(t, store.Delete(tc.key))
		})
	}
}

// Both are ignored without an error, and nothing is written for either.
func Test_Empty_Key_Or_Value(t *testing.T) {
	store := newTestStore(t)
	defer store.Close()

	countRows := func() int {
		var count int
		require.NoError(t, store.Conn().Query(
			fmt.Sprintf("SELECT COUNT(*) FROM %s.%s", store.keyspace, store.table),
		).Scan(&count))
		return count
	}

	require.Zero(t, countRows(), "the table should start empty")

	require.NoError(t, store.Set("", []byte("value"), 0))
	require.NoError(t, store.Set("empty-value", nil, 0))

	// Reading back is not enough: a row under an empty key would also read back as nothing, so count rows.
	require.Zero(t, countRows(), "neither call should have written a row")

	val, err := store.Get("empty-value")
	require.NoError(t, err)
	require.Zero(t, len(val))
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

// Test_Cassandra_NewFromConnection checks a storage built on a session the caller owns.
func Test_Cassandra_NewFromConnection(t *testing.T) {
	store := newTestStore(t)
	defer store.Close()

	shared, err := NewFromConnection(store.Conn(), Config{
		Keyspace:    "test_cassandra",
		Table:       "test_kv_existing",
		Consistency: gocql.One,
	})
	require.NoError(t, err)
	require.Same(t, store.Conn(), shared.Conn())

	require.NoError(t, shared.Set("john", []byte("doe"), 0))

	val, err := shared.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), val)

	// The session is the caller's, so closing this storage must leave it usable.
	require.NoError(t, shared.Close())
	require.NoError(t, store.Set("jane", []byte("doe"), 0))
}

func Test_Cassandra_NewFromConnection_Nil(t *testing.T) {
	_, err := NewFromConnection(nil, Config{})
	require.Error(t, err)
}
