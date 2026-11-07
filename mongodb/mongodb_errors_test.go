package mongodb

import (
	"context"
	"fmt"
	"net"
	"testing"
	"time"

	"github.com/stretchr/testify/require"
	"go.mongodb.org/mongo-driver/v2/bson"
	"go.mongodb.org/mongo-driver/v2/mongo"
	"go.mongodb.org/mongo-driver/v2/mongo/options"
)

// closedPort returns a TCP port on loopback that nothing listens on.
func closedPort(t testing.TB) int {
	t.Helper()

	l, err := net.Listen("tcp", "127.0.0.1:0")
	require.NoError(t, err)
	port := l.Addr().(*net.TCPAddr).Port
	require.NoError(t, l.Close())

	return port
}

// unreachableURI points at a closed listener and fails server selection quickly.
func unreachableURI(t testing.TB) string {
	t.Helper()

	return fmt.Sprintf("mongodb://127.0.0.1:%d/?serverSelectionTimeoutMS=200", closedPort(t))
}

// unreachableClient returns a client that never reaches a server.
func unreachableClient(t testing.TB) *mongo.Client {
	t.Helper()

	client, err := mongo.Connect(options.Client().ApplyURI(unreachableURI(t)))
	require.NoError(t, err)
	t.Cleanup(func() { _ = client.Disconnect(context.Background()) })

	return client
}

// panicError runs fn, which must panic with an error, and returns that error.
func panicError(t testing.TB, fn func()) (err error) {
	t.Helper()

	defer func() {
		r := recover()
		require.NotNil(t, r, "expected a panic")
		e, ok := r.(error)
		require.True(t, ok, "panic value should be an error, got %T", r)
		err = e
	}()
	fn()

	return nil
}

func Test_MongoDB_ConfigDefault(t *testing.T) {
	require.Equal(t, ConfigDefault, configDefault())

	cfg := configDefault(Config{Host: "db.internal", Port: 1234, Database: "d", Collection: "c", Reset: true})
	require.Equal(t, Config{Host: "db.internal", Port: 1234, Database: "d", Collection: "c", Reset: true}, cfg)

	cfg = configDefault(Config{Port: -1})
	require.Equal(t, ConfigDefault, cfg)
}

func Test_MongoDB_WithDefaultTimeout(t *testing.T) {
	t.Run("no deadline gets the default", func(t *testing.T) {
		before := time.Now()
		ctx, cancel := withDefaultTimeout(context.Background())
		defer cancel()

		deadline, ok := ctx.Deadline()
		require.True(t, ok)
		require.WithinDuration(t, before.Add(initTimeout), deadline, 2*time.Second)
	})

	t.Run("caller deadline is kept", func(t *testing.T) {
		parent, parentCancel := context.WithTimeout(context.Background(), time.Hour)
		defer parentCancel()
		want, _ := parent.Deadline()

		ctx, cancel := withDefaultTimeout(parent)
		got, ok := ctx.Deadline()
		require.True(t, ok)
		require.Equal(t, want, got)

		cancel()
		require.ErrorIs(t, ctx.Err(), context.Canceled)
		require.NoError(t, parent.Err(), "cancelling the derived context must not cancel the caller's")
	})
}

func Test_MongoDB_CloneBytes(t *testing.T) {
	require.Nil(t, cloneBytes(nil))

	empty := cloneBytes([]byte{})
	require.NotNil(t, empty)
	require.Empty(t, empty)

	src := []byte("doe")
	dup := cloneBytes(src)
	require.Equal(t, src, dup)
	require.Equal(t, len(src), cap(dup))

	src[0] = 'x'
	require.Equal(t, []byte("doe"), dup, "clone must not alias the source")
}

func Test_MongoDB_New_InvalidURI(t *testing.T) {
	err := panicError(t, func() {
		New(Config{ConnectionURI: "notmongodb://127.0.0.1:27017"})
	})
	require.Error(t, err)
}

func Test_MongoDB_New_Unreachable(t *testing.T) {
	// No caller deadline: initialization falls back on the server selection timeout.
	err := panicError(t, func() {
		New(Config{ConnectionURI: unreachableURI(t)})
	})
	require.Error(t, err)
}

func Test_MongoDB_NewWithContext_Unreachable_Deadline(t *testing.T) {
	port := closedPort(t)

	tests := []struct {
		name string
		cfg  Config
	}{
		{"host and port", Config{Host: "127.0.0.1", Port: port}},
		{"username only", Config{Host: "127.0.0.1", Port: port, Username: "user"}},
		{"username and password", Config{Host: "127.0.0.1", Port: port, Username: "user", Password: "pass"}},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			ctx, cancel := context.WithTimeout(context.Background(), 500*time.Millisecond)
			defer cancel()

			start := time.Now()
			err := panicError(t, func() {
				NewWithContext(ctx, tt.cfg)
			})
			require.Error(t, err)
			require.Less(t, time.Since(start), 10*time.Second, "the caller's deadline must bound initialization")
		})
	}
}

func Test_MongoDB_NewWithContext_Cancelled(t *testing.T) {
	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err := panicError(t, func() {
		NewWithContext(ctx, Config{ConnectionURI: unreachableURI(t)})
	})
	require.ErrorIs(t, err, context.Canceled)
}

func Test_MongoDB_NewFromConnection_ResetFails(t *testing.T) {
	client := unreachableClient(t)

	err := panicError(t, func() {
		NewFromConnection(client, Config{Reset: true})
	})
	require.Error(t, err)

	// The client belongs to the caller, so a failed init must not disconnect it.
	err = client.Ping(context.Background(), nil)
	require.Error(t, err)
	require.NotErrorIs(t, err, mongo.ErrClientDisconnected)
}

func Test_MongoDB_NewStorage_Failure_Disconnects_Owned_Client(t *testing.T) {
	tests := []struct {
		name string
		cfg  Config
		ctx  func() context.Context
	}{
		{
			name: "reset fails",
			cfg:  Config{Reset: true, Database: "fiber", Collection: "fiber_storage"},
			ctx:  context.Background,
		},
		{
			name: "index creation fails",
			cfg:  Config{Database: "fiber", Collection: "fiber_storage"},
			ctx: func() context.Context {
				ctx, cancel := context.WithCancel(context.Background())
				cancel()
				return ctx
			},
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			client := unreachableClient(t)

			err := panicError(t, func() {
				newStorage(tt.ctx(), client, true, tt.cfg)
			})
			require.Error(t, err)

			// An owned client is released on failure instead of leaking.
			require.ErrorIs(t, client.Ping(context.Background(), nil), mongo.ErrClientDisconnected)
		})
	}
}

func Test_MongoDB_NewFromConnection_IndexFails_Keeps_Client(t *testing.T) {
	client := unreachableClient(t)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err := panicError(t, func() {
		NewFromConnectionWithContext(ctx, client, Config{})
	})
	require.ErrorIs(t, err, context.Canceled)

	err = client.Ping(context.Background(), nil)
	require.Error(t, err)
	require.NotErrorIs(t, err, mongo.ErrClientDisconnected)
}

// Test_MongoDB_Server_Errors shares one container between the cases that need a real server.
func Test_MongoDB_Server_Errors(t *testing.T) {
	cfg := newTestConfig(t)
	ctx := context.Background()

	raw, err := mongo.Connect(options.Client().ApplyURI(cfg.ConnectionURI))
	require.NoError(t, err)
	t.Cleanup(func() { _ = raw.Disconnect(context.Background()) })

	requireIndexConflict := func(t *testing.T, err error) {
		t.Helper()

		var cmdErr mongo.CommandError
		require.ErrorAs(t, err, &cmdErr)
		require.True(t, cmdErr.HasErrorCode(85) || cmdErr.HasErrorCode(86), "unexpected code %d: %v", cmdErr.Code, err)
	}

	t.Run("expiry index conflicts with existing index", func(t *testing.T) {
		const collection = "conflict_exp"
		_, err := raw.Database("fiber").Collection(collection).Indexes().CreateOne(ctx, mongo.IndexModel{
			Keys: bson.D{{Key: "exp", Value: 1}},
		})
		require.NoError(t, err)

		err = panicError(t, func() {
			NewFromConnection(raw, Config{Database: "fiber", Collection: collection})
		})
		requireIndexConflict(t, err)
	})

	t.Run("key index conflicts with existing index", func(t *testing.T) {
		const collection = "conflict_key"
		_, err := raw.Database("fiber").Collection(collection).Indexes().CreateOne(ctx, mongo.IndexModel{
			Keys: bson.D{{Key: "key", Value: 1}},
		})
		require.NoError(t, err)

		err = panicError(t, func() {
			NewFromConnection(raw, Config{Database: "fiber", Collection: collection})
		})
		requireIndexConflict(t, err)
	})

	t.Run("owned client is disconnected when index creation fails", func(t *testing.T) {
		const collection = "conflict_owned"
		_, err := raw.Database("fiber").Collection(collection).Indexes().CreateOne(ctx, mongo.IndexModel{
			Keys: bson.D{{Key: "key", Value: 1}},
		})
		require.NoError(t, err)

		owned, err := mongo.Connect(options.Client().ApplyURI(cfg.ConnectionURI))
		require.NoError(t, err)
		t.Cleanup(func() { _ = owned.Disconnect(context.Background()) })

		err = panicError(t, func() {
			newStorage(ctx, owned, true, Config{Database: "fiber", Collection: collection})
		})
		requireIndexConflict(t, err)
		require.ErrorIs(t, owned.Ping(ctx, nil), mongo.ErrClientDisconnected)
	})

	t.Run("get reports undecodable documents", func(t *testing.T) {
		store := NewFromConnection(raw, Config{Database: "fiber", Collection: "undecodable"})

		_, err := store.Conn().Collection("undecodable").InsertOne(ctx, bson.M{"key": "bad", "value": int32(5)})
		require.NoError(t, err)

		val, err := store.Get("bad")
		require.Error(t, err)
		require.Nil(t, val)
	})

	t.Run("get ignores documents past their deadline", func(t *testing.T) {
		store := NewFromConnection(raw, Config{Database: "fiber", Collection: "lingering"})

		// The TTL monitor only runs once a minute, so an expired document can still be present.
		_, err := store.Conn().Collection("lingering").InsertOne(ctx, bson.M{
			"key":   "old",
			"value": []byte("doe"),
			"exp":   time.Now().Add(-time.Minute).UTC(),
		})
		require.NoError(t, err)

		val, err := store.Get("old")
		require.NoError(t, err)
		require.Nil(t, val)
	})

	t.Run("closed storage rejects operations", func(t *testing.T) {
		store := NewFromConnection(raw, Config{Database: "fiber", Collection: "closed_store"})
		require.NoError(t, store.Set("john", []byte("doe"), 0))
		require.NoError(t, store.Close())

		_, err := store.Get("john")
		require.ErrorIs(t, err, ErrClosed)
		require.ErrorIs(t, store.Set("john", []byte("doe"), 0), ErrClosed)
		require.ErrorIs(t, store.Delete("john"), ErrClosed)
		require.ErrorIs(t, store.Reset(), ErrClosed)

		// Empty keys and values are rejected before the closed check, as with an open storage.
		val, err := store.Get("")
		require.NoError(t, err)
		require.Nil(t, val)
		require.NoError(t, store.Set("", []byte("doe"), 0))
		require.NoError(t, store.Set("john", nil, 0))
		require.NoError(t, store.Delete(""))

		// Closing again is a no-op.
		require.NoError(t, store.Close())

		// The shared client is untouched.
		require.NoError(t, raw.Ping(ctx, nil))
	})

	t.Run("close is idempotent for owned clients", func(t *testing.T) {
		store := New(cfg)
		require.NoError(t, store.Set("john", []byte("doe"), 0))

		require.NoError(t, store.Close())
		require.NoError(t, store.Close())

		_, err := store.Get("john")
		require.ErrorIs(t, err, ErrClosed)
		require.ErrorIs(t, store.Conn().Client().Ping(ctx, nil), mongo.ErrClientDisconnected)
	})

	t.Run("close tolerates an already disconnected client", func(t *testing.T) {
		store := New(cfg)
		require.NoError(t, store.Conn().Client().Disconnect(ctx))

		require.NoError(t, store.Close())

		_, err := store.Get("john")
		require.ErrorIs(t, err, ErrClosed)
	})

	t.Run("operations on a disconnected client return the driver error", func(t *testing.T) {
		store := New(cfg)
		require.NoError(t, store.Conn().Client().Disconnect(ctx))

		_, err := store.Get("john")
		require.ErrorIs(t, err, mongo.ErrClientDisconnected)
		require.ErrorIs(t, store.Set("john", []byte("doe"), 0), mongo.ErrClientDisconnected)
		require.ErrorIs(t, store.Delete("john"), mongo.ErrClientDisconnected)
		require.ErrorIs(t, store.Reset(), mongo.ErrClientDisconnected)
	})

	t.Run("expiration is honoured by get before the TTL monitor runs", func(t *testing.T) {
		store := NewFromConnection(raw, Config{Database: "fiber", Collection: "short_lived"})

		require.NoError(t, store.Set("john", []byte("doe"), 200*time.Millisecond))
		val, err := store.Get("john")
		require.NoError(t, err)
		require.Equal(t, []byte("doe"), val)

		require.Eventually(t, func() bool {
			v, err := store.Get("john")
			return err == nil && v == nil
		}, 5*time.Second, 50*time.Millisecond)
	})
}
