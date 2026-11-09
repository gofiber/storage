package mongodb

import (
	"context"
	"fmt"
	"net"
	"os"
	"sync"
	"testing"
	"time"

	"github.com/stretchr/testify/require"
	"github.com/testcontainers/testcontainers-go"
	"github.com/testcontainers/testcontainers-go/modules/mongodb"
	"github.com/testcontainers/testcontainers-go/wait"
	"go.mongodb.org/mongo-driver/v2/bson"
	"go.mongodb.org/mongo-driver/v2/mongo"
	"go.mongodb.org/mongo-driver/v2/mongo/options"
)

const (
	// mongoDBImage is the default image used for running MongoDB in tests.
	mongoDBImage              = "public.ecr.aws/docker/library/mongo:7"
	mongoDBImageEnvVar string = "TEST_MONGODB_IMAGE"
	mongoDBUser        string = "mongo-user"
	mongoDBPass        string = "mongo-password"
	mongoDBPort               = "27017/tcp"
	mongoDBReadyLog           = "Waiting for connections"
)

func newTestConfig(t testing.TB) Config {
	t.Helper()

	img := mongoDBImage
	if imgFromEnv := os.Getenv(mongoDBImageEnvVar); imgFromEnv != "" {
		img = imgFromEnv
	}

	ctx := context.Background()

	c, err := mongodb.Run(
		ctx, img, mongodb.WithUsername(mongoDBUser), mongodb.WithPassword(mongoDBPass),
		testcontainers.WithWaitStrategy(
			wait.ForAll(
				wait.ForListeningPort(mongoDBPort),
				wait.ForLog(mongoDBReadyLog),
			),
		),
	)
	testcontainers.CleanupContainer(t, c)
	require.NoError(t, err)

	conn, err := c.ConnectionString(ctx)
	require.NoError(t, err)

	return Config{
		ConnectionURI: conn,
		Reset:         true,
	}
}

func newTestStore(t testing.TB) *Storage {
	t.Helper()

	return New(newTestConfig(t))
}

func Test_MongoDB_Set(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)
}

func Test_MongoDB_NewWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := NewWithContext(context.Background(), newTestConfig(t))
	require.NotNil(t, testStore)
	defer testStore.Close()

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)
}

func Test_MongoDB_SetWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.SetWithContext(ctx, key, val, 0)
	require.ErrorIs(t, err, context.Canceled)
}

func Test_MongoDB_Set_Override(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	err = testStore.Set(key, val, 0)
	require.NoError(t, err)
}

func Test_MongoDB_Get(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)
}

func Test_MongoDB_GetWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	result, err := testStore.GetWithContext(ctx, key)
	require.ErrorIs(t, err, context.Canceled)
	require.Zero(t, len(result))
}

func Test_MongoDB_Set_Expiration(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
		exp = 1 * time.Second
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set(key, val, exp)
	require.NoError(t, err)

	time.Sleep(1100 * time.Millisecond)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Zero(t, len(result), "Key should have expired")
}

func Test_MongoDB_Get_Expired(t *testing.T) {
	key := "john"

	testStore := newTestStore(t)
	defer testStore.Close()

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_MongoDB_Get_NotExist(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	result, err := testStore.Get("notexist")
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_MongoDB_Delete(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	err = testStore.Delete(key)
	require.NoError(t, err)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_MongoDB_DeleteWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err = testStore.DeleteWithContext(ctx, key)
	require.ErrorIs(t, err, context.Canceled)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)
}

func Test_MongoDB_Reset(t *testing.T) {
	val := []byte("doe")

	testStore := newTestStore(t)
	defer testStore.Close()

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

func Test_MongoDB_ResetWithContext(t *testing.T) {
	val := []byte("doe")

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set("john1", val, 0)
	require.NoError(t, err)

	err = testStore.Set("john2", val, 0)
	require.NoError(t, err)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err = testStore.ResetWithContext(ctx)
	require.ErrorIs(t, err, context.Canceled)

	result, err := testStore.Get("john1")
	require.NoError(t, err)
	require.Equal(t, val, result)

	result, err = testStore.Get("john2")
	require.NoError(t, err)
	require.Equal(t, val, result)
}

func Test_MongoDB_Close(t *testing.T) {
	testStore := newTestStore(t)
	require.NoError(t, testStore.Close())
}

func Test_MongoDB_Conn(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	require.True(t, testStore.Conn() != nil)
}

func Benchmark_MongoDB_Set(b *testing.B) {
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

func Benchmark_MongoDB_Get(b *testing.B) {
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

func Benchmark_MongoDB_SetAndDelete(b *testing.B) {
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

func Test_MongoDB_ReleaseItem_Clears_Every_Field(t *testing.T) {
	s := &Storage{items: &sync.Pool{New: func() any { return new(item) }}}

	it := s.acquireItem()
	it.ObjectID = bson.NewObjectID()
	it.Key = "john"
	it.Value = []byte("doe")
	it.Expiration = time.Now()

	s.releaseItem(it)

	// Get decodes into a pooled item, so a leftover identifier would travel into the next Set.
	require.Equal(t, bson.ObjectID{}, it.ObjectID)
	require.Empty(t, it.Key)
	require.Nil(t, it.Value)
	require.True(t, it.Expiration.IsZero())
}

func Test_MongoDB_NewFromConnection(t *testing.T) {
	owner := newTestStore(t)
	defer owner.Close()

	store := NewFromConnection(owner.Conn().Client(), Config{
		Database:   "fiber",
		Collection: "fiber_storage_existing",
		Reset:      true,
	})

	require.NoError(t, store.Set("john", []byte("doe"), 0))

	result, err := store.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), result)

	// The client is the caller's, so closing this storage must leave it usable.
	require.NoError(t, store.Close())
	require.NoError(t, owner.Set("jane", []byte("doe"), 0))

	// The storage itself is closed even though the client stays open.
	require.ErrorIs(t, store.Set("jane", []byte("doe"), 0), ErrClosed)
}

func Test_MongoDB_NewFromConnection_Nil(t *testing.T) {
	require.Panics(t, func() {
		NewFromConnection(nil)
	})
}

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

	return fmt.Sprintf("mongodb://127.0.0.1:%d/?serverSelectionTimeoutMS=50", closedPort(t))
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

	custom := Config{Host: "db.internal", Port: 1234, Database: "d", Collection: "c", Reset: true}
	require.Equal(t, custom, configDefault(custom))

	require.Equal(t, ConfigDefault, configDefault(Config{Port: -1}))
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
	_ = panicError(t, func() {
		New(Config{ConnectionURI: "notmongodb://127.0.0.1:27017"})
	})
}

func Test_MongoDB_New_Unreachable(t *testing.T) {
	// No caller deadline: initialization falls back on the server selection timeout.
	err := panicError(t, func() {
		New(Config{ConnectionURI: unreachableURI(t)})
	})
	require.True(t, mongo.IsTimeout(err), "expected a timeout, got %v", err)
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
			ctx, cancel := context.WithTimeout(context.Background(), 100*time.Millisecond)
			defer cancel()

			start := time.Now()
			_ = panicError(t, func() {
				NewWithContext(ctx, tt.cfg)
			})
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

// Test_MongoDB_NewStorage_Failure_Disconnects_Only_Owned_Client fails each initialization step on a client that never
// reaches a server: the client is released when the driver connected it (owned) and left alone when the caller
// supplied it (borrowed). New needs a reachable server to get past its ping, so the owned rows call newStorage
// directly, while the borrowed rows go through the public constructor.
func Test_MongoDB_NewStorage_Failure_Disconnects_Only_Owned_Client(t *testing.T) {
	cancelled, cancel := context.WithCancel(context.Background())
	cancel()

	resetCfg := Config{Reset: true, Database: "fiber", Collection: "fiber_storage"}
	indexCfg := Config{Database: "fiber", Collection: "fiber_storage"}

	tests := []struct {
		name  string
		owned bool
		cfg   Config
		ctx   context.Context
	}{
		{name: "owned, reset fails", owned: true, cfg: resetCfg, ctx: context.Background()},
		{name: "owned, index creation fails", owned: true, cfg: indexCfg, ctx: cancelled},
		{name: "borrowed, reset fails", owned: false, cfg: resetCfg, ctx: context.Background()},
		{name: "borrowed, index creation fails", owned: false, cfg: indexCfg, ctx: cancelled},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			client := unreachableClient(t)

			err := panicError(t, func() {
				if tt.owned {
					newStorage(tt.ctx, client, true, tt.cfg)
				} else {
					NewFromConnectionWithContext(tt.ctx, client, tt.cfg)
				}
			})
			if tt.ctx.Err() != nil {
				require.ErrorIs(t, err, context.Canceled)
			}

			pingErr := client.Ping(context.Background(), nil)
			if tt.owned {
				// An owned client is released on failure instead of leaking.
				require.ErrorIs(t, pingErr, mongo.ErrClientDisconnected)
			} else {
				// The client belongs to the caller, so a failed init must not disconnect it.
				require.Error(t, pingErr)
				require.NotErrorIs(t, pingErr, mongo.ErrClientDisconnected)
			}
		})
	}
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

	// conflictingIndex creates a plain index on field, which clashes with the index the storage builds on it.
	conflictingIndex := func(t *testing.T, collection, field string) {
		t.Helper()

		_, err := raw.Database("fiber").Collection(collection).Indexes().CreateOne(ctx, mongo.IndexModel{
			Keys: bson.D{{Key: field, Value: 1}},
		})
		require.NoError(t, err)
	}

	for _, tt := range []struct{ name, collection, field string }{
		{"expiry index conflicts with existing index", "conflict_exp", "exp"},
		{"key index conflicts with existing index", "conflict_key", "key"},
	} {
		t.Run(tt.name, func(t *testing.T) {
			conflictingIndex(t, tt.collection, tt.field)

			err := panicError(t, func() {
				NewFromConnection(raw, Config{Database: "fiber", Collection: tt.collection})
			})
			requireIndexConflict(t, err)
		})
	}

	t.Run("owned client is disconnected when index creation fails", func(t *testing.T) {
		const collection = "conflict_owned"
		conflictingIndex(t, collection, "key")

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
		var decodeErr *bson.DecodeError
		require.ErrorAs(t, err, &decodeErr)
		require.Equal(t, []string{"value"}, decodeErr.Keys())
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

		const ttl = 200 * time.Millisecond

		start := time.Now()
		require.NoError(t, store.Set("john", []byte("doe"), ttl))
		val, err := store.Get("john")
		require.NoError(t, err)
		// The deadline is compared exactly, so a sub-second one is still live right after Set (a comparison truncated
		// to seconds would drop it early). A stalled runner can overshoot it, so only assert while it cannot have
		// passed; the stored deadline is rounded down to the millisecond.
		if time.Since(start) < ttl-time.Millisecond {
			require.Equal(t, []byte("doe"), val)
		}

		// The TTL monitor only sweeps once a minute, so the document lapses without having been removed.
		require.Eventually(t, func() bool {
			v, err := store.Get("john")
			return err == nil && v == nil
		}, 5*time.Second, 50*time.Millisecond)
	})
}
