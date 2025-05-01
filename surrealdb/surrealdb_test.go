package surrealdb

import (
	"context"
	"encoding/json"
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

func newTestStore(t testing.TB) *Storage {
	t.Helper()
	ctx := context.Background()

	img := surrealDb
	if imgFromEnv := os.Getenv(surrealDbImageEnvVar); imgFromEnv != "" {
		img = imgFromEnv
	}
	surrealdbContainer, err := surrealdb.Run(
		ctx, img,
		surrealdb.WithUsername(surrealDbUser),
		surrealdb.WithPassword(surrealDbPass),
	)
	require.NoError(t, err)

	testcontainers.CleanupContainer(t, surrealdbContainer)

	url, err := surrealdbContainer.URL(ctx)
	require.NoError(t, err)

	return New(
		Config{
			ConnectionString: url,
			Namespace:        "testns",
			Database:         "testdb",
			Username:         surrealDbUser,
			Password:         surrealDbPass,
			DefaultTable:     "fiber_storage",
		},
	)
}

func Test_Surrealdb_Create(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set("test", []byte("test12345"), 0)
	require.NoError(t, err)
}

func Test_Surrealdb_CreateAndGet(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set("test", []byte("test12345"), 0)
	require.NoError(t, err)

	get, err := testStore.Get("test")
	require.NoError(t, err)
	require.NotEmpty(t, get)
}

func Test_Surrealdb_ListTable(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	bytes, err := testStore.List()
	require.NoError(t, err)
	require.NotEmpty(t, bytes)
}

func Test_Surrealdb_Get_WithNoErr(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set("test", []byte("test1234"), 0)
	require.NoError(t, err)

	get, err := testStore.Get("test")
	require.NoError(t, err)
	require.NotEmpty(t, get)
}

func Test_Surrealdb_Delete(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set("test", []byte("delete1234"), 0)
	require.NoError(t, err)

	err = testStore.Delete("test")
	require.NoError(t, err)

	val, err := testStore.Get("test")
	require.NoError(t, err)
	require.Nil(t, val)
}

func Test_Surrealdb_Flush(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set("test_key", []byte("test_value"), 0)
	require.NoError(t, err)

	val, err := testStore.Get("test_key")
	require.NoError(t, err)
	require.NotNil(t, val)

	err = testStore.Reset()
	require.NoError(t, err)

	val, err = testStore.Get("test_key")
	require.NoError(t, err)
	require.Nil(t, val)
}

func Test_Surrealdb_GetExpired(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set("temp", []byte("value"), 1*time.Second)
	require.NoError(t, err)

	require.Eventually(t, func() bool {
		val, _ := testStore.Get("temp")
		return val == nil
	}, 3*time.Second, 100*time.Millisecond)
	require.NoError(t, err)
}

func Test_Surrealdb_GetMissing(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	val, err := testStore.Get("non-existent-key")
	require.NoError(t, err)
	require.Nil(t, val)
}

func Test_Surrealdb_ListSkipsExpired(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

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

func Test_Surrealdb_GarbageCollector_RemovesExpiredKeys(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set("temp_key", []byte("temp_value"), 1*time.Second)
	require.NoError(t, err)

	val, err := testStore.Get("temp_key")
	require.NoError(t, err)
	require.NotNil(t, val)

	time.Sleep(3 * time.Second)

	require.Eventually(t, func() bool {
		val, err = testStore.Get("temp_key")
		require.NoError(t, err)
		return val == nil
	}, 3*time.Second, 300*time.Millisecond)
}

func Benchmark_SurrealDB_Set(b *testing.B) {
	testStore := newTestStore(b)
	defer testStore.Close()

	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		err = testStore.Set("john", []byte("doe"), 0)
	}

	require.NoError(b, err)
}

func Benchmark_SurrealDB_Get(b *testing.B) {
	testStore := newTestStore(b)
	defer testStore.Close()

	err := testStore.Set("john", []byte("doe"), 0)
	require.NoError(b, err)

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_, err = testStore.Get("john")
	}

	require.NoError(b, err)
}

func Benchmark_SurrealDB_SetAndDelete(b *testing.B) {
	testStore := newTestStore(b)
	defer testStore.Close()

	b.ReportAllocs()
	b.ResetTimer()
	var err error
	for i := 0; i < b.N; i++ {
		testStore.Set("john", []byte("doe"), 0)
		err = testStore.Delete("john")
	}

	require.NoError(b, err)
}
