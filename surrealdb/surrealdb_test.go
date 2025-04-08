package surrealdb

import (
	"context"
	"encoding/json"
	"fmt"
	"github.com/stretchr/testify/require"
	"github.com/testcontainers/testcontainers-go"
	"github.com/testcontainers/testcontainers-go/modules/surrealdb"
	"os"
	"testing"
	"time"
)

var (
	// surrealDb is the default image used for running surrealdb in tests.
	surrealDb                   = "surrealdb/surrealdb:latest"
	surrealDbImageEnvVar string = "TEST_SURREALDB_IMAGE"
	surrealDbUser        string = "root"
	surrealDbPass        string = "root"
)

func newTestStore(t testing.TB) (*Storage, error) {
	t.Helper()

	img := surrealDb
	if imgFromEnv := os.Getenv(surrealDbImageEnvVar); imgFromEnv != "" {
		img = imgFromEnv
	}
	surrealdbContainer, err := surrealdb.Run(context.Background(), img)
	if err != nil {
		return nil, err
	}

	testcontainers.CleanupContainer(t, surrealdbContainer)

	host, err := surrealdbContainer.Host(context.Background())
	if err != nil {
		return nil, err
	}

	port, err := surrealdbContainer.MappedPort(context.Background(), "8000")
	if err != nil {
		return nil, err
	}

	url := fmt.Sprintf("ws://%s:%s", host, port.Port())

	return New(
		Config{
			ConnectionString: url,
			Namespace:        "testns",
			Database:         "testdb",
			Username:         surrealDbUser,
			Password:         surrealDbPass,
			DefaultTable:     "fiber_storage",
		},
	), nil
}

func Test_Surrealdb_Create(t *testing.T) {
	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	err = testStore.Set("create", []byte("test12345"), 0)
	require.NoError(t, err)
}

func Test_Surrealdb_CreateAndGet(t *testing.T) {
	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	err = testStore.Set("createandget", []byte("test1234"), 0)
	require.NoError(t, err)

	get, err := testStore.Get("createandget")
	require.NoError(t, err)
	require.NotEmpty(t, get)

}

func Test_Surrealdb_ListTable(t *testing.T) {
	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	bytes, err := testStore.List()
	require.NoError(t, err)
	require.NotEmpty(t, bytes)
}

func Test_Surrealdb_Get_WithNoErr(t *testing.T) {
	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	err = testStore.Set("create2", []byte("test1234"), 0)
	require.NoError(t, err)

	get, err := testStore.Get("create2")
	require.NoError(t, err)
	require.NotEmpty(t, get)
}

func Test_Surrealdb_Delete(t *testing.T) {
	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	err = testStore.Set("delete", []byte("delete1234"), 0)
	require.NoError(t, err)

	err = testStore.Delete("delete")
	require.NoError(t, err)
}

func Test_Surrealdb_Flush(t *testing.T) {
	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	err = testStore.Reset()
	require.NoError(t, err)
}

func Test_Surrealdb_GetExpired(t *testing.T) {
	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	err = testStore.Set("temp", []byte("value"), 1*time.Second)
	require.NoError(t, err)

	time.Sleep(2 * time.Second)

	val, err := testStore.Get("temp")
	require.NoError(t, err)
	require.Nil(t, val)
}

func Test_Surrealdb_GetMissing(t *testing.T) {
	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	val, err := testStore.Get("non-existent-key")
	require.NoError(t, err)
	require.Nil(t, val)
}

func Test_Surrealdb_ListSkipsExpired(t *testing.T) {
	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	_ = testStore.Reset()

	_ = testStore.Set("valid", []byte("123"), 0)

	_ = testStore.Set("expired", []byte("456"), 1*time.Second)
	time.Sleep(2 * time.Second)

	data, err := testStore.List()
	require.NoError(t, err)

	var result map[string][]byte
	err = json.Unmarshal(data, &result)
	require.NoError(t, err)

	require.Contains(t, result, "valid")
	require.NotContains(t, result, "expired")
}

func BenchmarkSet(b *testing.B) {
	testStore, err := newTestStore(b)
	require.NoError(b, err)
	defer testStore.Close()

	for i := 0; i < b.N; i++ {
		key := fmt.Sprintf("bench-key-%d-%d", i, time.Now().UnixNano())
		testStore.Set(fmt.Sprintf("bench-key-%s", key), []byte("value"), 0)
	}
}

func BenchmarkGet(b *testing.B) {
	testStore, err := newTestStore(b)
	require.NoError(b, err)
	defer testStore.Close()
	testStore.Reset()

	key := "bench-get-key"
	value := []byte("some-value")

	err = testStore.Set(key, value, 0)
	if err != nil {
		b.Fatalf("failed to prepare test value: %v", err)
	}

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		testStore.Get(key)
	}
}
