package nats

import (
	"bytes"
	"context"
	"encoding/gob"
	"errors"
	"testing"
	"time"

	"github.com/nats-io/nats.go"
	"github.com/nats-io/nats.go/jetstream"
	"github.com/stretchr/testify/require"
)

// unreachableURL is a loopback port nothing listens on, so a dial is refused immediately.
const unreachableURL = "nats://127.0.0.1:1"

// putRawEntry writes an entry straight into the bucket, bypassing the storage, so tests
// can plant values (expired, empty) that the public API would never produce.
func putRawEntry(t testing.TB, kv jetstream.KeyValue, key string, e entry) {
	t.Helper()

	var buf bytes.Buffer
	require.NoError(t, gob.NewEncoder(&buf).Encode(e))
	_, err := kv.Put(context.Background(), key, buf.Bytes())
	require.NoError(t, err)
}

// connectTest opens a connection to the test server, closed when the test ends.
func connectTest(t testing.TB, cfg Config) *nats.Conn {
	t.Helper()

	nc, err := nats.Connect(cfg.URLs, cfg.NatsOptions...)
	require.NoError(t, err)
	t.Cleanup(nc.Close)

	return nc
}

// bucketCfg returns the test config pointing at its own bucket.
func bucketCfg(cfg Config, bucket string) Config {
	cfg.KeyValueConfig.Bucket = bucket
	return cfg
}

// deleteBucket removes a bucket behind the storage's back.
func deleteBucket(t testing.TB, nc *nats.Conn, bucket string) {
	t.Helper()

	js, err := jetstream.New(nc)
	require.NoError(t, err)
	require.NoError(t, js.DeleteKeyValue(context.Background(), bucket))
}

func Test_Config_Default(t *testing.T) {
	require.Equal(t, ConfigDefault, configDefault())

	cfg := configDefault(Config{})
	require.Equal(t, ConfigDefault.URLs, cfg.URLs)
	require.Equal(t, ConfigDefault.Context, cfg.Context)
	require.Equal(t, ConfigDefault.ClientName, cfg.ClientName)
	require.Equal(t, ConfigDefault.KeyValueConfig.Bucket, cfg.KeyValueConfig.Bucket)
	require.Equal(t, ConfigDefault.WaitForConnection, cfg.WaitForConnection)

	custom := configDefault(Config{
		URLs:              "nats://example:4222",
		ClientName:        "custom",
		KeyValueConfig:    jetstream.KeyValueConfig{Bucket: "mine"},
		WaitForConnection: time.Second,
		Reset:             true,
	})
	require.Equal(t, "nats://example:4222", custom.URLs)
	require.Equal(t, "custom", custom.ClientName)
	require.Equal(t, "mine", custom.KeyValueConfig.Bucket)
	require.Equal(t, time.Second, custom.WaitForConnection)
	require.True(t, custom.Reset)
}

func Test_Storage_Nats_ProcessUrlString(t *testing.T) {
	require.Equal(t, []string{"nats://a:1", "nats://b:2"}, processUrlString(" nats://a:1, ,nats://b:2 ,"))
	require.Empty(t, processUrlString(" , "))
}

func Test_Storage_Nats_NotInitialized(t *testing.T) {
	require.Equal(t, errNotInitialized, notInitialized(nil))

	cause := errors.New("boom")
	err := notInitialized(cause)
	require.ErrorIs(t, err, errNotInitialized)
	require.ErrorIs(t, err, cause)
}

func Test_Storage_Nats_Handlers(t *testing.T) {
	cfg := bucketCfg(newTestConfig(t), "handlers")
	nc := connectTest(t, cfg)

	t.Run("connect without stored context", func(t *testing.T) {
		s := &Storage{cfg: configDefault(cfg)}
		s.connectHandler(nc)

		require.NotNil(t, s.kv)
		require.NoError(t, s.err)
	})

	t.Run("reconnect with an already cancelled context", func(t *testing.T) {
		ctx, cancel := context.WithCancel(context.Background())
		cancel()

		s := &Storage{cfg: configDefault(cfg), ctx: ctx}
		s.reconnectHandler(nc)

		// A done init context must not block the bucket setup.
		require.NotNil(t, s.kv)
		require.NoError(t, s.err)
	})

	t.Run("connect failure is recorded", func(t *testing.T) {
		closed, err := nats.Connect(cfg.URLs, cfg.NatsOptions...)
		require.NoError(t, err)
		closed.Close()

		s := &Storage{cfg: configDefault(cfg), ctx: context.Background()}
		s.connectHandler(closed)

		require.Nil(t, s.kv)
		require.ErrorIs(t, s.err, nats.ErrConnectionClosed)
	})

	t.Run("disconnect", func(t *testing.T) {
		s := &Storage{}
		opts := nats.GetDefaultOptions()
		conn := &nats.Conn{Opts: opts}

		s.disconnectErrHandler(conn, nil)
		require.True(t, conn.Opts.RetryOnFailedConnect)
		require.NoError(t, s.err)

		cause := errors.New("link down")
		s.disconnectErrHandler(conn, cause)
		require.ErrorIs(t, s.err, cause)
	})

	t.Run("async error", func(t *testing.T) {
		s := &Storage{}
		sub := &nats.Subscription{Subject: "orders.created"}

		s.errorHandler(nc, sub, nil)
		require.NoError(t, s.err)

		s.errorHandler(nc, sub, nats.ErrSlowConsumer)
		require.ErrorIs(t, s.err, nats.ErrSlowConsumer)
		require.ErrorContains(t, s.err, `subject "orders.created"`)
	})
}

func Test_Storage_Nats_OpenNatsKV(t *testing.T) {
	cfg := newTestConfig(t)
	nc := connectTest(t, cfg)
	ctx := context.Background()

	kvCfg := func(bucket string) jetstream.KeyValueConfig {
		return jetstream.KeyValueConfig{Bucket: bucket, Storage: jetstream.MemoryStorage}
	}

	t.Run("missing bucket without create", func(t *testing.T) {
		kv, created, err := openNatsKV(nc, ctx, kvCfg("absent"), false)
		require.ErrorIs(t, err, jetstream.ErrBucketNotFound)
		require.Nil(t, kv)
		require.False(t, created)
	})

	t.Run("created then bound", func(t *testing.T) {
		kv, created, err := openNatsKV(nc, ctx, kvCfg("fresh"), true)
		require.NoError(t, err)
		require.NotNil(t, kv)
		require.True(t, created)

		kv, created, err = openNatsKV(nc, ctx, kvCfg("fresh"), true)
		require.NoError(t, err)
		require.NotNil(t, kv)
		require.False(t, created)
	})

	t.Run("invalid bucket name", func(t *testing.T) {
		kv, created, err := openNatsKV(nc, ctx, kvCfg("not a valid bucket!"), true)
		require.ErrorIs(t, err, jetstream.ErrInvalidBucketName)
		require.ErrorContains(t, err, "get kv")
		require.Nil(t, kv)
		require.False(t, created)
	})

	t.Run("create rejected by the server", func(t *testing.T) {
		bad := kvCfg("replicated")
		bad.Replicas = 3 // a single server cannot hold three replicas
		kv, created, err := openNatsKV(nc, ctx, bad, true)
		require.ErrorContains(t, err, "create kv")
		require.Nil(t, kv)
		require.False(t, created)

		// Nothing was left behind.
		_, _, err = openNatsKV(nc, ctx, bad, false)
		require.ErrorIs(t, err, jetstream.ErrBucketNotFound)
	})
}

func Test_Storage_Nats_NewWithContext_Failures(t *testing.T) {
	t.Run("invalid option", func(t *testing.T) {
		require.PanicsWithError(t, "bad option", func() {
			New(Config{
				URLs:        unreachableURL,
				NatsOptions: []nats.Option{func(*nats.Options) error { return errors.New("bad option") }},
			})
		})
	})

	t.Run("server unreachable", func(t *testing.T) {
		require.Panics(t, func() {
			New(Config{URLs: unreachableURL, WaitForConnection: time.Millisecond})
		})
	})

	t.Run("retry on failed connect leaves it uninitialized", func(t *testing.T) {
		s := New(Config{
			URLs:              unreachableURL,
			WaitForConnection: time.Millisecond,
			NatsOptions: []nats.Option{
				nats.RetryOnFailedConnect(true),
				nats.MaxReconnects(1),
				nats.ReconnectWait(time.Millisecond),
			},
		})
		defer s.Close()

		_, err := s.Get("john")
		require.ErrorIs(t, err, errNotInitialized)
		require.ErrorIs(t, s.Set("john", []byte("doe"), 0), errNotInitialized)
		require.ErrorIs(t, s.Delete("john"), errNotInitialized)
		_, err = s.Keys()
		require.ErrorIs(t, err, errNotInitialized)
	})

	t.Run("reset requested but bucket setup fails", func(t *testing.T) {
		require.Panics(t, func() {
			New(Config{
				URLs:              unreachableURL,
				WaitForConnection: 500 * time.Millisecond,
				Reset:             true,
				NatsOptions: []nats.Option{
					nats.RetryOnFailedConnect(true),
					nats.MaxReconnects(1),
					nats.ReconnectWait(time.Millisecond),
				},
			})
		})
	})
}

func Test_Storage_Nats_KeyValue_NotInitialized(t *testing.T) {
	cause := errors.New("dial failed")
	s := &Storage{ownsNC: true, err: cause}

	_, err := s.keyValue(context.Background())
	require.ErrorIs(t, err, errNotInitialized)
	require.ErrorIs(t, err, cause)
}

func Test_Storage_Nats_Owned(t *testing.T) {
	base := newTestConfig(t)
	ownedStore := func(t *testing.T, bucket string) *Storage {
		t.Helper()

		s := New(bucketCfg(base, bucket))
		t.Cleanup(func() { _ = s.Close() })
		return s
	}

	t.Run("operations after close", func(t *testing.T) {
		s := ownedStore(t, "closed")
		require.NoError(t, s.Set("john", []byte("doe"), 0))

		require.NoError(t, s.Close())
		require.NoError(t, s.Close(), "closing twice is safe")

		_, err := s.Get("john")
		require.ErrorIs(t, err, ErrClosed)
		require.ErrorIs(t, s.Set("john", []byte("doe"), 0), ErrClosed)
		require.ErrorIs(t, s.Delete("john"), ErrClosed)
		require.ErrorIs(t, s.Reset(), ErrClosed)
		_, err = s.Keys()
		require.ErrorIs(t, err, ErrClosed)

		nc, _ := s.Conn()
		require.True(t, nc.IsClosed())
	})

	t.Run("empty key or value is ignored", func(t *testing.T) {
		s := ownedStore(t, "noop")

		require.NoError(t, s.Set("", []byte("doe"), 0))
		require.NoError(t, s.Set("john", nil, 0))
		require.NoError(t, s.Set("john", []byte{}, 0))
		require.NoError(t, s.Delete(""))

		v, err := s.Get("")
		require.NoError(t, err)
		require.Nil(t, v)

		v, err = s.Get("john")
		require.NoError(t, err)
		require.Nil(t, v)

		keys, err := s.Keys()
		require.NoError(t, err)
		require.Nil(t, keys)
	})

	t.Run("expired entry is reclaimed on get", func(t *testing.T) {
		s := ownedStore(t, "expired")
		_, kv := s.Conn()

		putRawEntry(t, kv, "stale", entry{Data: []byte("old"), Expiry: time.Now().Add(-time.Minute).Unix()})
		putRawEntry(t, kv, "fresh", entry{Data: []byte("new"), Expiry: time.Now().Add(time.Hour).Unix()})
		putRawEntry(t, kv, "forever", entry{Data: []byte("kept")})

		v, err := s.Get("stale")
		require.NoError(t, err)
		require.Nil(t, v)

		// The read removed it from the bucket.
		_, err = kv.Get(context.Background(), "stale")
		require.ErrorIs(t, err, jetstream.ErrKeyNotFound)

		v, err = s.Get("fresh")
		require.NoError(t, err)
		require.Equal(t, []byte("new"), v)

		v, err = s.Get("forever")
		require.NoError(t, err)
		require.Equal(t, []byte("kept"), v)
	})

	t.Run("keys skips expired and empty entries and lists undecodable ones", func(t *testing.T) {
		s := ownedStore(t, "keys")
		_, kv := s.Conn()

		putRawEntry(t, kv, "live", entry{Data: []byte("v")})
		putRawEntry(t, kv, "stale", entry{Data: []byte("old"), Expiry: time.Now().Add(-time.Minute).Unix()})
		putRawEntry(t, kv, "empty", entry{})
		_, err := kv.Put(context.Background(), "garbage", []byte("not a gob stream"))
		require.NoError(t, err)

		keys, err := s.Keys()
		require.NoError(t, err)
		require.ElementsMatch(t, []string{"live", "garbage"}, keys)

		// Listing never writes: the expired entry is still there to be reclaimed by a get.
		_, err = kv.Get(context.Background(), "stale")
		require.NoError(t, err)
	})

	t.Run("undecodable value is an error, not an expiry", func(t *testing.T) {
		s := ownedStore(t, "garbage")
		_, kv := s.Conn()

		_, err := kv.Put(context.Background(), "garbage", []byte("not a gob stream"))
		require.NoError(t, err)

		v, err := s.Get("garbage")
		require.ErrorContains(t, err, "decode")
		require.Nil(t, v)

		// The data was not deleted on the strength of the failed decode.
		_, err = kv.Get(context.Background(), "garbage")
		require.NoError(t, err)
	})

	t.Run("bucket deleted externally", func(t *testing.T) {
		s := ownedStore(t, "vanished")
		nc, _ := s.Conn()
		require.NoError(t, s.Set("john", []byte("doe"), 0))

		deleteBucket(t, nc, "vanished")

		_, err := s.Get("john")
		require.Error(t, err)
		require.Error(t, s.Set("john", []byte("doe"), 0))
		require.Error(t, s.Delete("john"))
		_, err = s.Keys()
		require.Error(t, err)

		// An owned connection keeps its cached bucket (reconnect handlers own re-resolution);
		// Reset builds the bucket again.
		require.NoError(t, s.Reset())
		require.NoError(t, s.Set("john", []byte("doe"), 0))
		v, err := s.Get("john")
		require.NoError(t, err)
		require.Equal(t, []byte("doe"), v)
	})

	t.Run("reset fails when the connection is gone", func(t *testing.T) {
		s := ownedStore(t, "gone")
		nc, _ := s.Conn()
		nc.Close()

		err := s.Reset()
		require.ErrorContains(t, err, "delete kv")
		require.ErrorIs(t, err, nats.ErrConnectionClosed)
	})

	t.Run("reset fails when the bucket cannot be recreated", func(t *testing.T) {
		s := ownedStore(t, "norecreate")
		s.cfg.KeyValueConfig.Replicas = 3

		err := s.Reset()
		require.ErrorContains(t, err, "create kv")

		// The old bucket was deleted, and the failure is remembered as the reason there is none.
		_, getErr := s.Get("john")
		require.ErrorIs(t, getErr, errNotInitialized)
		require.ErrorContains(t, getErr, "create kv")
	})
}

func Test_Storage_Nats_Borrowed(t *testing.T) {
	base := newTestConfig(t)
	base.Reset = false // the bucket is resolved lazily; individual tests opt in
	newBorrowed := func(t *testing.T, bucket string) (*Storage, *nats.Conn) {
		t.Helper()

		nc := connectTest(t, base)
		s := NewFromConnection(nc, bucketCfg(base, bucket))
		return s, nc
	}

	t.Run("reset on construction wipes the bucket", func(t *testing.T) {
		seed, nc := newBorrowed(t, "wiped")
		require.NoError(t, seed.Set("john", []byte("doe"), 0))

		cfg := bucketCfg(base, "wiped")
		cfg.Reset = true
		s := NewFromConnection(nc, cfg)

		keys, err := s.Keys()
		require.NoError(t, err)
		require.Nil(t, keys)
		require.NoError(t, s.Set("jane", []byte("doe"), 0))
	})

	t.Run("reset requested but setup fails", func(t *testing.T) {
		nc := connectTest(t, base)
		ctx, cancel := context.WithCancel(context.Background())
		cancel()

		cfg := bucketCfg(base, "neverbuilt")
		cfg.Reset = true
		require.Panics(t, func() { NewFromConnectionWithContext(ctx, nc, cfg) })
	})

	t.Run("bucket created by the driver is recreated after it vanishes", func(t *testing.T) {
		s, nc := newBorrowed(t, "recreated")
		require.NoError(t, s.Set("john", []byte("doe"), 0))

		deleteBucket(t, nc, "recreated")

		// The write finds no stream and reports it, and drops the cached bucket...
		require.Error(t, s.Set("john", []byte("doe"), 0))

		// ...so the next operation re-resolves and recreates it, empty.
		v, err := s.Get("john")
		require.NoError(t, err)
		require.Nil(t, v)
		require.NoError(t, s.Set("john", []byte("again"), 0))
		v, err = s.Get("john")
		require.NoError(t, err)
		require.Equal(t, []byte("again"), v)
	})

	t.Run("a failed read keeps the handle but a failed delete re-resolves", func(t *testing.T) {
		s, nc := newBorrowed(t, "readgone")
		require.NoError(t, s.Set("john", []byte("doe"), 0))

		deleteBucket(t, nc, "readgone")

		_, err := s.Get("john")
		require.ErrorContains(t, err, "get:")
		require.ErrorIs(t, err, nats.ErrNoResponders)

		// The write finds no stream and drops the cached bucket...
		require.ErrorIs(t, s.Delete("john"), jetstream.ErrNoStreamResponse)

		// ...so the next operation recreates it, empty.
		v, err := s.Get("john")
		require.NoError(t, err)
		require.Nil(t, v)
	})

	t.Run("keys on a vanished bucket fails then recovers", func(t *testing.T) {
		s, nc := newBorrowed(t, "keysgone")
		require.NoError(t, s.Set("john", []byte("doe"), 0))

		deleteBucket(t, nc, "keysgone")
		_, err := s.Keys()
		require.ErrorContains(t, err, "keys:")

		require.Error(t, s.Set("john", []byte("doe"), 0))
		keys, err := s.Keys()
		require.NoError(t, err)
		require.Nil(t, keys)
	})

	t.Run("application owned bucket is not recreated", func(t *testing.T) {
		nc := connectTest(t, base)
		js, err := jetstream.New(nc)
		require.NoError(t, err)
		_, err = js.CreateKeyValue(context.Background(), jetstream.KeyValueConfig{
			Bucket:  "appowned",
			Storage: jetstream.MemoryStorage,
			History: 5,
		})
		require.NoError(t, err)

		s := NewFromConnection(nc, bucketCfg(base, "appowned"))
		require.NoError(t, s.Set("john", []byte("doe"), 0))

		deleteBucket(t, nc, "appowned")

		require.Error(t, s.Set("john", []byte("doe"), 0))

		_, err = s.Get("john")
		require.ErrorIs(t, err, errNotInitialized)
		require.ErrorIs(t, err, jetstream.ErrBucketNotFound)

		// The application's bucket was not quietly replaced with this driver's defaults.
		_, err = js.KeyValue(context.Background(), "appowned")
		require.ErrorIs(t, err, jetstream.ErrBucketNotFound)
	})

	t.Run("first attempt failed then bucket is created lazily", func(t *testing.T) {
		nc := connectTest(t, base)
		ctx, cancel := context.WithCancel(context.Background())
		cancel()

		s := NewFromConnectionWithContext(ctx, nc, bucketCfg(base, "lazy"))
		require.Error(t, s.err)
		require.Nil(t, s.kv)

		require.NoError(t, s.Set("john", []byte("doe"), 0))
		v, err := s.Get("john")
		require.NoError(t, err)
		require.Equal(t, []byte("doe"), v)

		require.NoError(t, s.err, "the recorded failure is cleared once the bucket resolves")
		require.True(t, s.resolved)
		require.True(t, s.createdBucket)
	})

	t.Run("closed connection is reported as not initialized", func(t *testing.T) {
		nc := connectTest(t, base)
		nc.Close()

		s := NewFromConnection(nc, bucketCfg(base, "deadconn"))
		require.Error(t, s.err)

		_, err := s.Get("john")
		require.ErrorIs(t, err, errNotInitialized)
		require.ErrorIs(t, err, nats.ErrConnectionClosed)

		_, err = s.Keys()
		require.ErrorIs(t, err, errNotInitialized)
	})

	t.Run("reset fails on a closed connection", func(t *testing.T) {
		s, nc := newBorrowed(t, "resetdead")
		nc.Close()

		err := s.Reset()
		require.ErrorContains(t, err, "delete kv")
	})

	t.Run("waiting for the setup gate honours the context", func(t *testing.T) {
		s := NewFromConnection(connectTest(t, base), bucketCfg(base, "gate"))
		s.mu.Lock()
		s.kv = nil
		s.mu.Unlock()

		// Another caller is mid-setup.
		s.initGate <- struct{}{}

		ctx, cancel := context.WithTimeout(context.Background(), 50*time.Millisecond)
		defer cancel()
		_, err := s.GetWithContext(ctx, "john")
		require.ErrorIs(t, err, context.DeadlineExceeded)

		<-s.initGate
		v, err := s.Get("john")
		require.NoError(t, err)
		require.Nil(t, v)
	})

	t.Run("close while waiting for the setup gate", func(t *testing.T) {
		s := NewFromConnection(connectTest(t, base), bucketCfg(base, "gateclose"))
		s.mu.Lock()
		s.kv = nil
		s.mu.Unlock()
		s.initGate <- struct{}{}

		errc := make(chan error, 1)
		go func() {
			_, err := s.Get("john")
			errc <- err
		}()

		// Give the caller time to block on the gate; the outcome is the same either way.
		time.Sleep(100 * time.Millisecond)
		require.NoError(t, s.Close())
		<-s.initGate

		require.ErrorIs(t, <-errc, ErrClosed)
	})

	t.Run("bucket resolved by another caller while waiting", func(t *testing.T) {
		s := NewFromConnection(connectTest(t, base), bucketCfg(base, "gateresolved"))
		s.mu.Lock()
		kv := s.kv
		s.kv = nil
		s.mu.Unlock()
		s.initGate <- struct{}{}

		errc := make(chan error, 1)
		go func() {
			v, err := s.Get("john")
			if err == nil && v != nil {
				err = errors.New("unexpected value")
			}
			errc <- err
		}()

		time.Sleep(100 * time.Millisecond)
		s.mu.Lock()
		s.kv = kv
		s.mu.Unlock()
		<-s.initGate

		require.NoError(t, <-errc)
	})

	t.Run("borrowed connection survives close", func(t *testing.T) {
		s, nc := newBorrowed(t, "survive")
		require.NoError(t, s.Close())
		require.False(t, nc.IsClosed())

		require.ErrorIs(t, s.Set("john", []byte("doe"), 0), ErrClosed)
	})
}

func Test_Storage_Nats_InvalidateOnStreamGone(t *testing.T) {
	cfg := newTestConfig(t)
	nc := connectTest(t, cfg)
	s := NewFromConnection(nc, bucketCfg(cfg, "invalidate"))
	require.NotNil(t, s.kv)
	kv := s.kv

	s.invalidateOnStreamGone(kv, nil)
	require.NotNil(t, s.kv)

	// An error unrelated to the stream's existence keeps the bucket.
	s.invalidateOnStreamGone(kv, errors.New("some other failure"))
	require.NotNil(t, s.kv)

	// A stale handle must not drop a bucket that was re-resolved since.
	other := NewFromConnection(nc, bucketCfg(cfg, "invalidate-other")).kv
	s.invalidateOnStreamGone(other, jetstream.ErrStreamNotFound)
	require.NotNil(t, s.kv)

	for _, gone := range []error{jetstream.ErrStreamNotFound, jetstream.ErrBucketNotFound, jetstream.ErrNoStreamResponse} {
		s.mu.Lock()
		s.kv = kv
		s.mu.Unlock()

		s.invalidateOnStreamGone(kv, gone)
		require.Nil(t, s.kv, "%v should drop the cached bucket", gone)
	}

	// An owned connection re-resolves through its handlers instead.
	owned := &Storage{ownsNC: true, kv: kv}
	owned.invalidateOnStreamGone(kv, jetstream.ErrStreamNotFound)
	require.NotNil(t, owned.kv)
}
