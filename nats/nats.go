package nats

import (
	"bytes"
	"context"
	"encoding/gob"
	"errors"
	"fmt"
	"net"
	"strings"
	"sync"
	"time"

	"github.com/nats-io/nats.go"
	"github.com/nats-io/nats.go/jetstream"
)

// ErrClosed is returned after Close, when the connection is gone and calls would fail obscurely.
var ErrClosed = errors.New("nats: storage is closed")

// errNotInitialized is returned before the bucket exists, which is how an unestablished connection looks.
var errNotInitialized = errors.New("nats: kv not initialized")

// notInitialized wraps the initialization failure, if one was recorded; there may be none.
func notInitialized(initErr error) error {
	if initErr == nil {
		return errNotInitialized
	}
	return fmt.Errorf("%w: %w", errNotInitialized, initErr)
}

// Storage interface that is implemented by storage providers
type Storage struct {
	nc     *nats.Conn
	ownsNC bool
	kv     jetstream.KeyValue
	err    error
	cfg    Config
	ctx    context.Context
	mu     sync.RWMutex
	closed bool

	// initGate serializes lazy bucket setup on its own, so the network round trip it makes is not
	// held under mu, where it would stall Close and every other operation behind it. It is a
	// channel rather than a mutex so a waiter can give up when its own context is done, instead
	// of blocking uninterruptibly behind another caller's round trip.
	initGate chan struct{}

	// createdBucket records that this driver created the bucket rather than binding to one the
	// application manages. Only a bucket of our own is recreated after it disappears: replacing
	// an application's bucket would quietly swap its configuration for this driver's defaults.
	createdBucket bool
}

type entry struct {
	Data   []byte
	Expiry int64
}

func init() {
	gob.Register(entry{})
}

// connectHandler is a helper function to set the initial connect handler
func (s *Storage) connectHandler(nc *nats.Conn) {
	s.mu.Lock()
	defer s.mu.Unlock()

	// Fall back to a fresh context when the stored initialization context is
	// absent or already done (e.g. its deadline elapsed before a later
	// reconnect), so reconnect-time bucket setup is not blocked by an expired
	// init context.
	ctx := s.ctx
	if ctx == nil || ctx.Err() != nil {
		ctx = context.Background()
	}

	var err error
	s.kv, err = newNatsKV(
		nc,
		ctx,
		s.cfg.KeyValueConfig,
	)
	if err != nil {
		s.err = errors.Join(s.err, err)
	}
}

// disconnectErrHandler is a helper function to set the disconnect error handler
func (s *Storage) disconnectErrHandler(nc *nats.Conn, err error) {
	s.mu.Lock()
	defer s.mu.Unlock()

	nc.Opts.RetryOnFailedConnect = true
	if err != nil {
		s.err = errors.Join(s.err, err)
	}
}

// reconnectHandler is a helper function to set the reconnect handler
func (s *Storage) reconnectHandler(nc *nats.Conn) {
	s.connectHandler(nc)
}

// errorHandler is a helper function to set the error handler
func (s *Storage) errorHandler(nc *nats.Conn, sub *nats.Subscription, err error) {
	s.mu.Lock()
	defer s.mu.Unlock()

	if err != nil {
		s.err = errors.Join(s.err, fmt.Errorf("subject %q: %w", sub.Subject, err))
	}
}

func newNatsKV(nc *nats.Conn, ctx context.Context, keyValueConfig jetstream.KeyValueConfig) (jetstream.KeyValue, error) {
	jskv, _, err := openNatsKV(nc, ctx, keyValueConfig, true)
	return jskv, err
}

// openNatsKV binds to the bucket, creating it when create is set and it is missing. It reports
// whether it created the bucket, so a later re-resolution knows whether the bucket is this
// driver's to recreate or the application's to manage.
func openNatsKV(nc *nats.Conn, ctx context.Context, keyValueConfig jetstream.KeyValueConfig, create bool) (jetstream.KeyValue, bool, error) {
	js, err := jetstream.New(nc)
	if err != nil {
		return nil, false, fmt.Errorf("get jetstream: %w", err)
	}

	jskv, err := js.KeyValue(ctx, keyValueConfig.Bucket)
	if err != nil {
		if !errors.Is(err, jetstream.ErrBucketNotFound) {
			return nil, false, fmt.Errorf("jetstream: get kv: %w", err)
		}
		if !create {
			return nil, false, fmt.Errorf("jetstream: get kv: %w", err)
		}

		jskv, err = js.CreateKeyValue(ctx, keyValueConfig)
		if err != nil {
			return nil, false, fmt.Errorf("jetstream: create kv: %w", err)
		}

		return jskv, true, nil
	}

	return jskv, false, nil
}

// Process the url string argument to Connect.
// Return an array of urls, even if only one.
func processUrlString(url string) []string {
	urls := strings.Split(url, ",")
	var j int
	for _, s := range urls {
		u := strings.TrimSpace(s)
		if len(u) > 0 {
			urls[j] = u
			j++
		}
	}
	return urls[:j]
}

// New creates a new nats kv storage using context.Background() for initialization.
func New(config ...Config) *Storage {
	return NewWithContext(context.Background(), config...)
}

// NewWithContext creates a new nats kv storage, using ctx for the key-value
// bucket setup performed on connect (and reconnect).
func NewWithContext(ctx context.Context, config ...Config) *Storage {
	// Set default config
	cfg := configDefault(config...)

	storage := &Storage{
		cfg:      cfg,
		ctx:      ctx,
		ownsNC:   true,
		initGate: make(chan struct{}, 1),
	}

	// Set the nats options with default custom handlers
	cfg.NatsOptions = append(
		[]nats.Option{
			nats.ConnectHandler(storage.connectHandler),
			nats.DisconnectErrHandler(storage.disconnectErrHandler),
			nats.ReconnectHandler(storage.reconnectHandler),
			nats.ErrorHandler(storage.errorHandler),
		},
		cfg.NatsOptions...,
	)
	natsOpts := nats.GetDefaultOptions()
	natsOpts.Servers = processUrlString(cfg.URLs)
	for _, opt := range cfg.NatsOptions {
		if opt != nil {
			if err := opt(&natsOpts); err != nil {
				panic(err)
			}
		}
	}
	// Connect to NATS
	var err error
	storage.nc, err = natsOpts.Connect()

	if opErr, ok := err.(*net.OpError); ok && natsOpts.RetryOnFailedConnect {
		if opErr.Op != "dial" {
			panic(err)
		}
		// The retry is expected to succeed, but record the dial error under the lock: until it does, this is the only account of why the bucket is missing.
		storage.mu.Lock()
		storage.err = errors.Join(storage.err, err)
		storage.mu.Unlock()
	} else if err != nil {
		panic(err)
	}

	// TODO improve this crude way to wait for the connection to be established
	time.Sleep(cfg.WaitForConnection)

	// Reset bucket
	if cfg.Reset {
		err = storage.Reset()
		if err != nil {
			panic(err)
		}
	}

	return storage
}

// NewFromConnection creates a nats kv storage on an existing connection, using context.Background()
// for the key-value bucket setup.
func NewFromConnection(nc *nats.Conn, config ...Config) *Storage {
	return NewFromConnectionWithContext(context.Background(), nc, config...)
}

// NewFromConnectionWithContext creates a nats kv storage on an existing connection, which stays the
// caller's to close, using ctx for the key-value bucket setup. Only KeyValueConfig and Reset are read;
// the connection settings come from the connection. The caller's own connect and reconnect handlers are
// left alone; the bucket is resolved lazily instead, so an operation retries it when it is still missing
// or its stream has gone away. With Reset set, a failed bucket setup panics rather than skipping the
// wipe the caller asked for.
func NewFromConnectionWithContext(ctx context.Context, nc *nats.Conn, config ...Config) *Storage {
	if nc == nil {
		panic("nats: nil connection")
	}

	cfg := configDefault(config...)

	// ctx is not stored: only the connect and reconnect handlers read that field, and a borrowed
	// connection keeps the caller's handlers. Lazy resolution uses each operation's own context.
	storage := &Storage{
		cfg:      cfg,
		nc:       nc,
		initGate: make(chan struct{}, 1),
	}

	// With Reset set, the reset itself deletes and recreates the bucket, so resolving it here
	// first would set up a bucket that is discarded a moment later.
	if cfg.Reset {
		if err := storage.ResetWithContext(ctx); err != nil {
			panic(fmt.Errorf("nats: reset requested but bucket setup failed: %w", err))
		}

		return storage
	}

	kv, created, err := openNatsKV(nc, ctx, cfg.KeyValueConfig, true)
	if err != nil {
		// Recorded rather than fatal, the same way a failed dial is: operations report it as not
		// initialized, and the first operation retries the setup.
		storage.err = err
	}
	storage.kv = kv
	storage.createdBucket = created

	return storage
}

// keyValue returns the bucket, resolving it first when a storage on a borrowed connection is still
// missing one: that storage installs no handlers of its own, so a bucket absent at construction
// (JetStream not up yet, connection down) is retried here rather than being missing for good.
func (s *Storage) keyValue(ctx context.Context) (jetstream.KeyValue, error) {
	s.mu.RLock()
	kv, closed, initErr, created := s.kv, s.closed, s.err, s.createdBucket
	s.mu.RUnlock()

	if closed {
		return nil, ErrClosed
	}
	if kv != nil {
		return kv, nil
	}

	// A connection this driver dialed already has handlers that set the bucket up on connect and on
	// every reconnect, so a round trip here would duplicate them, and stall the caller meanwhile.
	// ownsNC is set once at construction, so it is read without the lock.
	if s.ownsNC {
		return nil, notInitialized(initErr)
	}

	// Waited for on this operation's own context: another caller's round trip must not hold a
	// caller past its deadline, which an ordinary mutex would do.
	select {
	case s.initGate <- struct{}{}:
	case <-ctx.Done():
		return nil, ctx.Err()
	}
	defer func() { <-s.initGate }()

	// Re-checked: another caller may have resolved it while this one waited.
	s.mu.RLock()
	kv, closed = s.kv, s.closed
	s.mu.RUnlock()

	if closed {
		return nil, ErrClosed
	}
	if kv != nil {
		return kv, nil
	}

	// Recreated only if this driver created the bucket in the first place. A bucket the
	// application set up carries its own history, TTL and replica settings, so replacing a
	// vanished one with this driver's bare defaults would hide the loss and downgrade it.
	// nc and cfg are also set once at construction.
	kv, createdNow, err := openNatsKV(s.nc, ctx, s.cfg.KeyValueConfig, created)

	s.mu.Lock()
	defer s.mu.Unlock()

	// A Close landing during the setup wins: the bucket is not recorded on a storage that is done.
	if s.closed {
		return nil, ErrClosed
	}
	if err != nil {
		// Joined with what initialization recorded: that error is often the reason the bucket is missing.
		return nil, notInitialized(errors.Join(s.err, err))
	}
	if s.kv == nil {
		s.kv = kv
		s.err = nil
		s.createdBucket = s.createdBucket || createdNow
	}

	return s.kv, nil
}

// invalidateOnStreamGone drops the cached bucket when err says its backing stream no longer exists,
// so the next operation on a borrowed connection re-resolves (and recreates) the bucket instead of
// failing forever; an owned connection's reconnect handlers already re-resolve it.
// Writes against a deleted stream report ErrNoStreamResponse — the publish simply gets no answer —
// rather than a not-found; it can also be transient, but invalidating then just costs one re-lookup.
func (s *Storage) invalidateOnStreamGone(kv jetstream.KeyValue, err error) {
	if err == nil || s.ownsNC {
		return
	}
	if !errors.Is(err, jetstream.ErrStreamNotFound) &&
		!errors.Is(err, jetstream.ErrBucketNotFound) &&
		!errors.Is(err, jetstream.ErrNoStreamResponse) {
		return
	}

	s.mu.Lock()
	// Cleared only while kv is still the current bucket, so a fresh re-resolution is kept.
	if s.kv == kv {
		s.kv = nil
	}
	s.mu.Unlock()
}

// GetWithContext retrieves the value associated with the given key using the provided context.
func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error) {
	// Checked before the empty-key no-op so a cancelled context is reported whatever the key is.
	if err := ctx.Err(); err != nil {
		return nil, err
	}
	if len(key) <= 0 {
		return nil, nil
	}

	kv, err := s.keyValue(ctx)
	if err != nil {
		return nil, err
	}

	data, expired, revision, err := read(ctx, kv, key)
	if err != nil || data == nil {
		s.invalidateOnStreamGone(kv, err)
		return nil, err
	}

	if expired {
		// Reclaim it conditional on the revision read: there is no collector here, and an unconditional delete would drop a concurrent Set.
		_ = kv.Delete(ctx, key, jetstream.LastRevision(revision))
		return nil, nil
	}

	return data, nil
}

// read fetches key and reports its value, whether it expired, and the revision it was read at.
func read(ctx context.Context, kv jetstream.KeyValue, key string) (data []byte, expired bool, revision uint64, err error) {
	v, err := kv.Get(ctx, key)
	if err != nil {
		if errors.Is(err, jetstream.ErrKeyNotFound) {
			return nil, false, 0, nil
		}
		return nil, false, 0, fmt.Errorf("get: %w", err)
	}

	data, expired, err = decodeEntry(v.Value())
	if err != nil {
		return nil, false, 0, err
	}

	return data, expired, v.Revision(), nil
}

// decodeEntry decodes a stored value and reports whether it has expired.
func decodeEntry(value []byte) (data []byte, expired bool, err error) {
	e := entry{}
	if err := gob.NewDecoder(bytes.NewBuffer(value)).Decode(&e); err != nil {
		// A value this driver cannot decode is a real failure; reporting it as an expiry deleted the data.
		return nil, false, fmt.Errorf("decode: %w", err)
	}

	// Expiry == 0 means the entry never expires (see SetWithContext).
	return e.Data, e.Expiry != 0 && e.Expiry <= time.Now().Unix(), nil
}

// Get value by key
func (s *Storage) Get(key string) ([]byte, error) {
	return s.GetWithContext(context.Background(), key)
}

// SetWithContext key with value and expiry with context
func (s *Storage) SetWithContext(ctx context.Context, key string, val []byte, exp time.Duration) error {
	if err := ctx.Err(); err != nil {
		return err
	}
	if len(key) <= 0 || len(val) <= 0 {
		return nil
	}

	kv, err := s.keyValue(ctx)
	if err != nil {
		return err
	}

	// expiry
	var expSeconds int64
	if exp > 0 {
		// Round the one-second deadline up: truncating expires early, and a sub-second expiration would be stored as past.
		deadline := time.Now().Add(exp)
		expSeconds = deadline.Unix()
		if deadline.Nanosecond() != 0 {
			expSeconds++
		}
	}
	// encode
	e := new(bytes.Buffer)
	if err := gob.NewEncoder(e).Encode(entry{
		Data:   val,
		Expiry: expSeconds,
	}); err != nil {
		return fmt.Errorf("encode: %w", err)
	}

	// set
	if _, err = kv.Put(ctx, key, e.Bytes()); err != nil {
		if !errors.Is(err, jetstream.ErrKeyNotFound) {
			s.invalidateOnStreamGone(kv, err)
			return fmt.Errorf("put: %w", err)
		}
		// The inner error used to shadow this one, so a Create that succeeded still reported ErrKeyNotFound.
		if _, err = kv.Create(ctx, key, e.Bytes()); err != nil {
			s.invalidateOnStreamGone(kv, err)
			return fmt.Errorf("create: %w", err)
		}
	}

	return nil
}

// Set key with value and expiry
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	return s.SetWithContext(context.Background(), key, val, exp)
}

// DeleteWithContext key by key with context
func (s *Storage) DeleteWithContext(ctx context.Context, key string) error {
	if err := ctx.Err(); err != nil {
		return err
	}
	if len(key) <= 0 {
		return nil
	}

	kv, err := s.keyValue(ctx)
	if err != nil {
		return err
	}

	if err := kv.Delete(ctx, key); err != nil {
		s.invalidateOnStreamGone(kv, err)
		return err
	}

	return nil
}

// Delete key by key
func (s *Storage) Delete(key string) error {
	return s.DeleteWithContext(context.Background(), key)
}

// ResetWithContext all keys with context
func (s *Storage) ResetWithContext(ctx context.Context) error {
	// Checked before the lock, which is held across a bucket delete and recreate a cancelled caller would otherwise wait out.
	if err := ctx.Err(); err != nil {
		return err
	}

	// Held for the whole call: a Close landing between the delete and the recreate left the bucket gone.
	s.mu.Lock()
	defer s.mu.Unlock()

	if s.closed {
		return ErrClosed
	}

	js, err := jetstream.New(s.nc)
	if err != nil {
		return fmt.Errorf("get jetstream: %w", err)
	}

	// Delete the bucket. One already gone — deleted externally, say — is exactly
	// what this delete would leave behind, so continue to the recreate.
	err = js.DeleteKeyValue(ctx, s.cfg.KeyValueConfig.Bucket)
	if err != nil && !errors.Is(err, jetstream.ErrBucketNotFound) && !errors.Is(err, jetstream.ErrStreamNotFound) {
		return fmt.Errorf("delete kv: %w", err)
	}

	// Create the bucket. Reset builds it from this driver's config either way, so the bucket
	// that comes back is ours to recreate should it disappear again.
	s.kv, err = newNatsKV(
		s.nc,
		ctx,
		s.cfg.KeyValueConfig,
	)
	if err != nil {
		s.err = errors.Join(err)
		return err
	}

	s.createdBucket = true
	s.err = nil
	return nil
}

// Reset all keys
func (s *Storage) Reset() error {
	return s.ResetWithContext(context.Background())
}

// Close the connection unless it came from NewFromConnection. Safe to call more than once; the write lock keeps operations off a connection being torn down.
func (s *Storage) Close() error {
	s.mu.Lock()
	defer s.mu.Unlock()

	if s.closed {
		return nil
	}
	s.closed = true

	if s.ownsNC {
		s.nc.Close()
	}

	return nil
}

// Return database client
func (s *Storage) Conn() (*nats.Conn, jetstream.KeyValue) {
	s.mu.RLock()
	defer s.mu.RUnlock()
	return s.nc, s.kv
}

// Return all the keys
func (s *Storage) Keys() ([]string, error) {
	kv, err := s.keyValue(context.Background())
	if err != nil {
		return nil, err
	}

	// Watch streams every entry with its value in one subscription; ListKeys is metadata only, so filtering expiries would cost a Get per key.
	watcher, err := kv.Watch(context.Background(), ">", jetstream.IgnoreDeletes())
	if err != nil {
		s.invalidateOnStreamGone(kv, err)
		return nil, fmt.Errorf("keys: %w", err)
	}
	defer func() {
		_ = watcher.Stop()
	}()

	var keys []string
	for e := range watcher.Updates() {
		// A nil entry marks the end of the initial replay.
		if e == nil {
			break
		}

		// An undecodable value still has its key listed, expired ones are skipped, and nothing is deleted: listing must not write.
		data, expired, err := decodeEntry(e.Value())
		if err != nil {
			keys = append(keys, e.Key())
			continue
		}
		if expired || len(data) == 0 {
			continue
		}
		keys = append(keys, e.Key())
	}

	// Double check if no valid keys were found
	if len(keys) == 0 {
		return nil, nil
	}

	return keys, nil
}
