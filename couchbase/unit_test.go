package couchbase

import (
	"context"
	"net"
	"testing"
	"time"

	"github.com/couchbase/gocb/v2"
	"github.com/stretchr/testify/require"
)

// closedPortHost returns a couchbase:// connection string for a port nothing is listening on.
func closedPortHost(t testing.TB) string {
	t.Helper()

	l, err := net.Listen("tcp", "127.0.0.1:0")
	require.NoError(t, err)
	addr := l.Addr().String()
	require.NoError(t, l.Close())

	return "couchbase://" + addr
}

// newUnreachableStore returns a storage whose cluster points at a closed port; gocb connects lazily,
// so the store builds fine and every operation fails.
func newUnreachableStore(t testing.TB) *Storage {
	t.Helper()

	cluster, err := gocb.Connect(closedPortHost(t), gocb.ClusterOptions{
		Authenticator: gocb.PasswordAuthenticator{Username: "u", Password: "p"},
		Transcoder:    transcoder,
	})
	require.NoError(t, err)
	t.Cleanup(func() { _ = cluster.Close(nil) })

	return NewFromConnection(cluster, Config{Bucket: "missing"})
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
	got := configDefault(Config{Bucket: "custom", KVTimeout: time.Minute})

	require.Equal(t, "custom", got.Bucket)
	require.Equal(t, time.Minute, got.KVTimeout)
	require.Equal(t, ConfigDefault.Host, got.Host)
	require.Equal(t, ConfigDefault.Username, got.Username)
	require.Equal(t, ConfigDefault.Password, got.Password)
	require.Equal(t, ConfigDefault.ConnectionTimeout, got.ConnectionTimeout)
}

func TestNewFromConnection_DefaultBucket(t *testing.T) {
	cluster, err := gocb.Connect(closedPortHost(t), gocb.ClusterOptions{
		Authenticator: gocb.PasswordAuthenticator{Username: "u", Password: "p"},
	})
	require.NoError(t, err)
	defer cluster.Close(nil) //nolint:errcheck // best effort cleanup

	store := NewFromConnection(cluster)
	require.Same(t, cluster, store.Conn())
	require.Equal(t, ConfigDefault.Bucket, store.bucket.Name())
	require.False(t, store.ownsCb)
}

func TestNew_InvalidConnectionString_Panics(t *testing.T) {
	// gocb rejects a host:port without a scheme as ambiguous unless the port is a well-known one.
	host := closedPortHost(t)
	host = host[len("couchbase://"):]

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
	require.True(t, store.ownsCb)
	require.NotNil(t, store.Conn())

	require.Error(t, store.Set("key", []byte("v"), 0))

	require.NoError(t, store.Close())
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

func TestClose_OwnedCluster_ClosesCluster(t *testing.T) {
	cluster, err := gocb.Connect(closedPortHost(t), gocb.ClusterOptions{
		Authenticator: gocb.PasswordAuthenticator{Username: "u", Password: "p"},
	})
	require.NoError(t, err)

	store := &Storage{cb: cluster, bucket: cluster.Bucket("b"), ownsCb: true}
	require.NoError(t, store.Close())
	require.True(t, store.isClosed())

	// The owned cluster was closed, so closing it again reports a failure.
	require.Error(t, cluster.Close(nil))
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
