package neo4j

import (
	"context"
	"log"
	"os"
	"testing"
	"time"

	"github.com/stretchr/testify/require"
	"github.com/testcontainers/testcontainers-go"
	"github.com/testcontainers/testcontainers-go/modules/neo4j"
	"github.com/testcontainers/testcontainers-go/wait"
)

const (
	neo4jHttpPort = "7474/tcp"
	neo4jBoltPort = "7687/tcp"
	neo4jReadyLog = "Bolt enabled on"
)

var testStore *Storage

// TestMain sets up and tears down the test container
func TestMain(m *testing.M) {
	ctx := context.Background()

	// Start a Neo4j test container
	neo4jContainer, err := neo4j.Run(ctx,
		"neo4j:5.26",
		neo4j.WithAdminPassword("pass#w*#d"),
		testcontainers.WithWaitStrategy(
			wait.ForAll(
				wait.ForListeningPort(neo4jHttpPort),
				wait.ForListeningPort(neo4jBoltPort),
				wait.ForLog(neo4jReadyLog),
			),
		),
	)
	if err != nil {
		log.Fatalf("Failed to start Neo4j container: %v", err)
	}

	// Get the Bolt URI
	uri, err := neo4jContainer.BoltUrl(ctx)
	if err != nil {
		log.Fatalf("Failed to get connection string: %v", err)
	}
	defer func() {
		if err := neo4jContainer.Terminate(ctx); err != nil {
			log.Printf("Failed to terminate Neo4j container: %v", err)
		}
	}()

	// Initialize Neo4j store with test container credentials
	store := New(Config{
		Reset:    true,
		URI:      uri,
		Username: "neo4j",
		Password: "pass#w*#d",
	})

	testStore = store

	defer testStore.Close()

	code := m.Run()

	os.Exit(code)
}

func Test_Neo4jStore_Set(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)
}

func Test_Neo4jStore_SetWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	ctx, cancel := context.WithTimeout(context.Background(), 0)
	defer cancel()

	err := testStore.SetWithContext(ctx, key, val, 10*time.Millisecond)
	require.ErrorContains(t, err, context.DeadlineExceeded.Error())
}

func Test_Neo4jStore_Upsert(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	err = testStore.Set(key, val, 0)
	require.NoError(t, err)
}

func Test_Neo4jStore_Get(t *testing.T) {
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

func Test_Neo4jStore_Set_Expiration(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
		exp = 100 * time.Millisecond
	)

	err := testStore.Set(key, val, exp)
	require.NoError(t, err)

	time.Sleep(200 * time.Millisecond)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_Neo4jStore_Get_Expired(t *testing.T) {
	key := "john"

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_Neo4jStore_Get_NotExist(t *testing.T) {
	result, err := testStore.Get("notexist")
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_Neo4jStore_Delete(t *testing.T) {
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

func Test_Neo4jStore_Reset(t *testing.T) {
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

func Test_Neo4jStore_Non_UTF8(t *testing.T) {
	val := []byte("0xF5")

	err := testStore.Set("0xF6", val, 0)
	require.NoError(t, err)

	result, err := testStore.Get("0xF6")
	require.NoError(t, err)
	require.Equal(t, val, result)
}

func Test_Neo4jStore_Close(t *testing.T) {
	require.NoError(t, testStore.Close())
}

func Test_Neo4jStore_Conn(t *testing.T) {
	require.True(t, testStore.Conn() != nil)
}

func Benchmark_Neo4jStore_Set(b *testing.B) {
	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		err = testStore.Set("john", []byte("doe"), 0)
	}

	require.NoError(b, err)
}

func Benchmark_Neo4jStore_Get(b *testing.B) {
	err := testStore.Set("john", []byte("doe"), 0)
	require.NoError(b, err)

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_, err = testStore.Get("john")
	}

	require.NoError(b, err)
}

func Benchmark_Neo4jStore_SetAndDelete(b *testing.B) {
	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		_ = testStore.Set("john", []byte("doe"), 0)
		err = testStore.Delete("john")
	}

	require.NoError(b, err)
}
