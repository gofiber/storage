package couchbase

import (
	"context"
	"os"
	"testing"
	"time"

	"github.com/stretchr/testify/require"
	"github.com/testcontainers/testcontainers-go/modules/couchbase"
)

const (
	// couchbaseImage is the default image used for running couchbase in tests.
	couchbaseImage              = "couchbase:enterprise-7.1.1"
	couchbaseImageEnvVar string = "TEST_COUCHBASE_IMAGE"
	couchbaseUser        string = "default"
	couchbasePass        string = "password"
	couchbaseBucket      string = "fiber_storage"
)

func newTestStore(t testing.TB) (*Storage, error) {
	t.Helper()

	img := couchbaseImage
	if imgFromEnv := os.Getenv(couchbaseImageEnvVar); imgFromEnv != "" {
		img = imgFromEnv
	}

	ctx := context.Background()

	bucket := couchbase.NewBucket(couchbaseBucket).WithReplicas(1).WithFlushEnabled(true)

	c, err := couchbase.Run(ctx,
		img,
		couchbase.WithAdminCredentials(couchbaseUser, couchbasePass),
		couchbase.WithBuckets(bucket),
	)
	if err != nil {
		return nil, err
	}

	conn, err := c.ConnectionString(ctx)
	if err != nil {
		return nil, err
	}

	return New(Config{
		Username: couchbaseUser,
		Password: couchbasePass,
		Host:     conn,
		Bucket:   couchbaseBucket,
	}), nil
}

func TestSetCouchbase_ShouldReturnNoError(t *testing.T) {
	testStore, err := newTestStore(t)
	require.NoError(t, err)

	err = testStore.Set("test", []byte("test"), 0)

	require.NoError(t, err)
}

func TestSetWithContextCouchbase_ContextCancelled_ShouldReturnError(t *testing.T) {
	testStore, err := newTestStore(t)
	require.NoError(t, err)

	ctx, cancel := context.WithTimeout(context.Background(), time.Microsecond)
	defer cancel()

	err = testStore.SetWithContext(ctx, "test", []byte("test"), 0)

	require.Error(t, err)
}

func TestGetCouchbase_ShouldReturnNil_WhenDocumentNotFound(t *testing.T) {
	testStore, err := newTestStore(t)
	require.NoError(t, err)

	val, err := testStore.Get("not_found_key")

	require.NoError(t, err)
	require.Zero(t, len(val))
}

func TestSetAndGet_GetShouldReturn_SetValueWithoutError(t *testing.T) {
	testStore, err := newTestStore(t)
	require.NoError(t, err)

	err = testStore.Set("test", []byte("fiber_test_value"), 0)
	require.NoError(t, err)

	val, err := testStore.Get("test")

	require.NoError(t, err)
	require.Equal(t, val, []byte("fiber_test_value"))
}

func TestSetAndGet_GetShouldReturnNil_WhenTTLExpired(t *testing.T) {
	testStore, err := newTestStore(t)
	require.NoError(t, err)

	err = testStore.Set("test", []byte("fiber_test_value"), 3*time.Second)
	require.NoError(t, err)

	time.Sleep(6 * time.Second)

	val, err := testStore.Get("test")

	require.NoError(t, err)
	require.Zero(t, len(val))
}

func TestSetAndDelete_DeleteShouldReturn_NoError(t *testing.T) {
	testStore, err := newTestStore(t)
	require.NoError(t, err)

	err = testStore.Set("test", []byte("fiber_test_value"), 0)
	require.NoError(t, err)

	err = testStore.Delete("test")
	require.NoError(t, err)

	_, err = testStore.Get("test")
	require.NoError(t, err)
}

func TestSetAndReset_ResetShouldReturn_NoError(t *testing.T) {
	testStore, err := newTestStore(t)
	require.NoError(t, err)

	err = testStore.Set("test", []byte("fiber_test_value"), 0)
	require.NoError(t, err)

	err = testStore.Reset()
	require.NoError(t, err)

	_, err = testStore.Get("test")
	require.NoError(t, err)
}

func TestClose_CloseShouldReturn_NoError(t *testing.T) {
	testStore, err := newTestStore(t)
	require.NoError(t, err)

	err = testStore.Close()
	require.NoError(t, err)
}

func TestGetConn_ReturnsNotNil(t *testing.T) {
	testStore, err := newTestStore(t)
	require.NoError(t, err)

	require.True(t, testStore.Conn() != nil)
}

func Benchmark_Couchbase_Set(b *testing.B) {
	testStore, err := newTestStore(b)
	require.NoError(b, err)

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		err = testStore.Set("john", []byte("doe"), 0)
	}

	require.NoError(b, err)
}

func Benchmark_Couchbase_Get(b *testing.B) {
	testStore, err := newTestStore(b)
	require.NoError(b, err)

	err = testStore.Set("john", []byte("doe"), 0)
	require.NoError(b, err)

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_, err = testStore.Get("john")
	}

	require.NoError(b, err)
}

func Benchmark_Couchbase_SetAndDelete(b *testing.B) {
	testStore, err := newTestStore(b)
	require.NoError(b, err)

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_ = testStore.Set("john", []byte("doe"), 0)
		err = testStore.Delete("john")
	}

	require.NoError(b, err)
}
