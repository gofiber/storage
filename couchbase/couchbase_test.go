package couchbase

import (
	"context"
	"net"
	"os"
	"strings"
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

	// the module can retry its index creation past the go test timeout, and a timeout panic skips rerun-fails
	ctx, cancel := context.WithTimeout(context.Background(), 3*time.Minute)
	defer cancel()

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

	val, err := testStore.Get("test")
	require.NoError(t, err)
	require.Nil(t, val)
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
	require.ErrorIs(t, store.Set("jane", []byte("doe"), 0), ErrClosed)
}

func TestCouchbase_NewFromConnection_Nil(t *testing.T) {
	require.Panics(t, func() {
		NewFromConnection(nil)
	})
}

// A single container is shared by the subtests below because starting one is slow.
func TestCouchbase_ErrorPaths(t *testing.T) {
	store := newTestStore(t)
	defer store.Close()

	t.Run("get with invalid key returns the key-value error", func(t *testing.T) {
		val, err := store.Get(strings.Repeat("k", 300))

		var kvErr *gocb.KeyValueError
		require.ErrorAs(t, err, &kvErr)
		require.ErrorIs(t, err, gocb.ErrInvalidArgument)
		require.Nil(t, val)
	})

	t.Run("set with invalid key returns error", func(t *testing.T) {
		require.ErrorIs(t, store.Set(strings.Repeat("k", 300), []byte("v"), 0), gocb.ErrInvalidArgument)
	})

	t.Run("get of a JSON document returns a decode error", func(t *testing.T) {
		_, err := store.Conn().Bucket(couchbaseBucket).DefaultCollection().Upsert("json_doc", map[string]string{"a": "b"}, nil)
		require.NoError(t, err)

		val, err := store.Get("json_doc")
		require.Error(t, err)
		require.Nil(t, val)
	})

	t.Run("delete of a missing key returns not found", func(t *testing.T) {
		require.ErrorIs(t, store.Delete("missing_key"), gocb.ErrDocumentNotFound)
	})

	t.Run("get from a missing bucket times out", func(t *testing.T) {
		bad := NewFromConnection(store.Conn(), Config{Bucket: "no_such_bucket"})

		ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)
		defer cancel()

		val, err := bad.GetWithContext(ctx, "key")
		require.Error(t, err)
		require.Nil(t, val)
	})
}

// closedPortHost returns a couchbase:// connection string for a port nothing is listening on.
func closedPortHost(t testing.TB) string {
	t.Helper()

	l, err := net.Listen("tcp", "127.0.0.1:0")
	require.NoError(t, err)
	addr := l.Addr().String()
	require.NoError(t, l.Close())

	return "couchbase://" + addr
}

// newUnreachableCluster returns a cluster that points at a closed port; gocb connects lazily, so it
// builds fine and every operation on it fails.
func newUnreachableCluster(t testing.TB) *gocb.Cluster {
	t.Helper()

	cluster, err := gocb.Connect(closedPortHost(t), gocb.ClusterOptions{
		Authenticator: gocb.PasswordAuthenticator{Username: "u", Password: "p"},
		Transcoder:    transcoder,
	})
	require.NoError(t, err)
	t.Cleanup(func() { _ = cluster.Close(nil) })

	return cluster
}

// newUnreachableStore returns a storage on an unreachable cluster: it builds fine, and every
// operation that reaches the cluster fails.
func newUnreachableStore(t testing.TB) *Storage {
	t.Helper()

	return NewFromConnection(newUnreachableCluster(t), Config{Bucket: "missing"})
}

func TestConfigDefault_NoArgs_ReturnsDefaults(t *testing.T) {
	require.Equal(t, ConfigDefault, configDefault())
}

func TestConfigDefault_EmptyConfig_FillsAllDefaults(t *testing.T) {
	require.Equal(t, ConfigDefault, configDefault(Config{}))
}

func TestConfigDefault_KeepsProvidedValues(t *testing.T) {
	in := Config{
		Username:          "user",
		Password:          "pass",
		Host:              "example.invalid:1234",
		Bucket:            "bucket",
		ConnectionTimeout: 7 * time.Second,
		KVTimeout:         9 * time.Second,
	}
	require.Equal(t, in, configDefault(in))
}

func TestConfigDefault_PartialConfig_FillsOnlyMissing(t *testing.T) {
	want := ConfigDefault
	want.Bucket = "custom"
	want.KVTimeout = time.Minute

	require.Equal(t, want, configDefault(Config{Bucket: "custom", KVTimeout: time.Minute}))
}

func TestNewFromConnection_DefaultBucket(t *testing.T) {
	cluster := newUnreachableCluster(t)

	store := NewFromConnection(cluster)
	require.Same(t, cluster, store.Conn())
	require.Equal(t, ConfigDefault.Bucket, store.bucket.Name())

	// The cluster is the caller's, so closing the storage leaves it open for the caller to close.
	require.NoError(t, store.Close())
	require.NoError(t, cluster.Close(nil))
}

func TestNew_InvalidConnectionString_Panics(t *testing.T) {
	// gocb rejects a host:port without a scheme as ambiguous unless the port is a well-known one.
	host := strings.TrimPrefix(closedPortHost(t), "couchbase://")

	require.Panics(t, func() {
		New(Config{Host: host, ConnectionTimeout: time.Second})
	})
}

func TestNew_UnreachableHost_ReturnsStorageWhoseOperationsFail(t *testing.T) {
	// Connecting and pinging are lazy in gocb, so New succeeds and the failure surfaces on first use.
	store := New(Config{
		Host:              closedPortHost(t),
		ConnectionTimeout: 500 * time.Millisecond,
		KVTimeout:         200 * time.Millisecond,
	})
	require.NotNil(t, store.Conn())

	require.Error(t, store.Set("key", []byte("v"), 0))

	// New built the cluster, so closing the storage closes it too: closing it again reports a failure.
	require.NoError(t, store.Close())
	require.Error(t, store.Conn().Close(nil))
	require.ErrorIs(t, store.Set("key", []byte("v"), 0), ErrClosed)
}

func TestOperations_AfterClose_ReturnErrClosed(t *testing.T) {
	store := newUnreachableStore(t)
	require.NoError(t, store.Close())

	ctx := context.Background()

	_, err := store.Get("key")
	require.ErrorIs(t, err, ErrClosed)
	_, err = store.GetWithContext(ctx, "key")
	require.ErrorIs(t, err, ErrClosed)

	require.ErrorIs(t, store.Set("key", []byte("v"), 0), ErrClosed)
	require.ErrorIs(t, store.SetWithContext(ctx, "key", []byte("v"), 0), ErrClosed)

	require.ErrorIs(t, store.Delete("key"), ErrClosed)
	require.ErrorIs(t, store.DeleteWithContext(ctx, "key"), ErrClosed)

	require.ErrorIs(t, store.Reset(), ErrClosed)
	require.ErrorIs(t, store.ResetWithContext(ctx), ErrClosed)
}

func TestClose_IsIdempotent(t *testing.T) {
	store := newUnreachableStore(t)

	require.NoError(t, store.Close())
	require.NoError(t, store.Close())
	require.True(t, store.isClosed())
}

func TestOperations_CancelledContext_ReturnError(t *testing.T) {
	store := newUnreachableStore(t)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	val, err := store.GetWithContext(ctx, "key")
	require.Error(t, err)
	require.NotErrorIs(t, err, ErrClosed)
	require.Nil(t, val)

	require.Error(t, store.SetWithContext(ctx, "key", []byte("v"), time.Minute))
	require.Error(t, store.DeleteWithContext(ctx, "key"))
	require.Error(t, store.ResetWithContext(ctx))
}
