package couchbase

import (
	"context"
	"os"
	"testing"
	"time"

	"github.com/couchbase/gocb/v2"
	"github.com/stretchr/testify/require"
	"github.com/testcontainers/testcontainers-go"
	"github.com/testcontainers/testcontainers-go/modules/couchbase"
	"github.com/testcontainers/testcontainers-go/wait"
)

const (
	// couchbaseImage is the default image used for running couchbase in tests.
	couchbaseImage              = "public.ecr.aws/docker/library/couchbase:enterprise-8.0.2"
	couchbaseImageEnvVar string = "TEST_COUCHBASE_IMAGE"
	couchbaseUser        string = "default"
	couchbasePass        string = "password"
	couchbaseBucket      string = "fiber_storage"
)

func newTestStore(t testing.TB) *Storage {
	t.Helper()

	return New(newTestConfig(t))
}

// newTestConfig starts a couchbase testcontainer and returns the config pointing at it.
func newTestConfig(t testing.TB) Config {
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
		testcontainers.WithWaitStrategy(wait.ForListeningPort("8091/tcp")),
	)
	testcontainers.CleanupContainer(t, c)
	require.NoError(t, err)

	conn, err := c.ConnectionString(ctx)
	require.NoError(t, err)

	return Config{
		Username: couchbaseUser,
		Password: couchbasePass,
		Host:     conn,
		Bucket:   couchbaseBucket,
	}
}

func TestSetCouchbase_ShouldReturnNoError(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set("test", []byte("test"), 0)
	require.NoError(t, err)
}

func TestSetWithContextCouchbase_ContextCancelled_ShouldReturnError(t *testing.T) {
	testStore := newTestStore(t)

	ctx, cancel := context.WithTimeout(context.Background(), time.Microsecond)
	defer cancel()

	err := testStore.SetWithContext(ctx, "test", []byte("test"), 0)

	require.Error(t, err)
}

func TestGetCouchbase_ShouldReturnNil_WhenDocumentNotFound(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	val, err := testStore.Get("not_found_key")

	require.NoError(t, err)
	require.Zero(t, len(val))
}

func TestSetAndGet_GetShouldReturn_SetValueWithoutError(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set("test", []byte("fiber_test_value"), 0)
	require.NoError(t, err)

	val, err := testStore.Get("test")

	require.NoError(t, err)
	require.Equal(t, val, []byte("fiber_test_value"))
}

func TestSetAndGet_GetShouldReturnNil_WhenTTLExpired(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set("test", []byte("fiber_test_value"), 3*time.Second)
	require.NoError(t, err)

	time.Sleep(6 * time.Second)

	val, err := testStore.Get("test")

	require.NoError(t, err)
	require.Zero(t, len(val))
}

func TestSetAndDelete_DeleteShouldReturn_NoError(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set("test", []byte("fiber_test_value"), 0)
	require.NoError(t, err)

	err = testStore.Delete("test")
	require.NoError(t, err)

	_, err = testStore.Get("test")
	require.NoError(t, err)
}

func TestSetAndReset_ResetShouldReturn_NoError(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set("test", []byte("fiber_test_value"), 0)
	require.NoError(t, err)

	err = testStore.Reset()
	require.NoError(t, err)

	_, err = testStore.Get("test")
	require.NoError(t, err)
}

func TestClose_CloseShouldReturn_NoError(t *testing.T) {
	testStore := newTestStore(t)
	require.NoError(t, testStore.Close())
}

func TestGetConn_ReturnsNotNil(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	require.True(t, testStore.Conn() != nil)
}

func Benchmark_Couchbase_Set(b *testing.B) {
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

func Benchmark_Couchbase_Get(b *testing.B) {
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

func Benchmark_Couchbase_SetAndDelete(b *testing.B) {
	testStore := newTestStore(b)
	defer testStore.Close()

	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		_ = testStore.Set("john", []byte("doe"), 0)
		err = testStore.Delete("john")
	}

	require.NoError(b, err)
}

func TestCouchbase_NewFromConnection(t *testing.T) {
	cfg := newTestConfig(t)

	// A cluster the caller built carries gocb's default JSON transcoder, which rejects raw bytes.
	cluster, err := gocb.Connect(cfg.Host, gocb.ClusterOptions{
		Authenticator: gocb.PasswordAuthenticator{
			Username: cfg.Username,
			Password: cfg.Password,
		},
	})
	require.NoError(t, err)
	defer cluster.Close(nil) //nolint:errcheck // best effort cleanup

	_, err = cluster.Ping(&gocb.PingOptions{Timeout: ConfigDefault.ConnectionTimeout})
	require.NoError(t, err)

	store := NewFromConnection(cluster, Config{Bucket: cfg.Bucket})
	require.Same(t, cluster, store.Conn())

	require.NoError(t, store.Set("john", []byte("doe"), 0))

	result, err := store.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), result)

	// The cluster is the caller's, so closing this storage must leave it usable.
	require.NoError(t, store.Close())

	_, err = cluster.Bucket(cfg.Bucket).DefaultCollection().Upsert("jane", []byte("doe"), &gocb.UpsertOptions{
		Transcoder: gocb.NewLegacyTranscoder(),
	})
	require.NoError(t, err)
}

func TestCouchbase_NewFromConnection_Nil(t *testing.T) {
	require.Panics(t, func() {
		NewFromConnection(nil)
	})
}
