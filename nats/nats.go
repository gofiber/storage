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

// errClosed is returned after Close, when the connection is gone and calls would fail obscurely.
var errClosed = errors.New("nats: storage is closed")

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

	// initMu serializes lazy bucket setup on its own, so the network round trip it makes is not
	// held under mu, where it would stall Close and every other operation behind it.
	initMu sync.Mutex
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
	js, err := jetstream.New(nc)
	if err != nil {
		return nil, fmt.Errorf("get jetstream: %w", err)
	}

	jskv, err := js.KeyValue(ctx, keyValueConfig.Bucket)
	if err != nil {
		if errors.Is(err, jetstream.ErrBucketNotFound) {
			jskv, err = js.CreateKeyValue(ctx, keyValueConfig)
			if err != nil {
				return nil, fmt.Errorf("jetstream: create kv: %w", err)
			}
		} else {
			return nil, fmt.Errorf("jetstream: get kv: %w", err)
		}
	}

	return jskv, nil
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
		cfg:    cfg,
		ctx:    ctx,
		ownsNC: true,
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
// left alone; the bucket is resolved lazily instead, so an operation retries it when it is still missing.
func NewFromConnectionWithContext(ctx context.Context, nc *nats.Conn, config ...Config) *Storage {
	if nc == nil {
		panic("nats: nil connection")
	}

	cfg := configDefault(config...)

	storage := &Storage{
		cfg: cfg,
		ctx: ctx,
		nc:  nc,
	}

	kv, err := newNatsKV(nc, ctx, cfg.KeyValueConfig)
	if err != nil {
		// Recorded rather than fatal, the same way a failed dial is: operations report it as not initialized.
		storage.err = err
	}
	storage.kv = kv

	// Reset needs a bucket to empty. When the setup above failed there is none yet, and failing here
	// would panic on exactly the condition the line above treats as recoverable; the lazy resolution
	// creates the bucket on first use instead, which is as empty as a reset would have left it.
	if cfg.Reset && storage.kv != nil {
		if err := storage.ResetWithContext(ctx); err != nil {
			panic(err)
		}
	}

	return storage
}

// keyValue returns the bucket, resolving it first when a storage on a borrowed connection is still
// missing one: that storage installs no handlers of its own, so a bucket absent at construction
// (JetStream not up yet, connection down) is retried here rather than being missing for good.
func (s *Storage) keyValue(ctx context.Context) (jetstream.KeyValue, error) {
	s.mu.RLock()
	kv, initErr, nc, kvCfg, closed, ownsNC := s.kv, s.err, s.nc, s.cfg.KeyValueConfig, s.closed, s.ownsNC
	s.mu.RUnlock()

	if closed {
		return nil, errClosed
	}
	if kv != nil {
		return kv, nil
	}

	// A connection this driver dialed already has handlers that set the bucket up on connect and on
	// every reconnect, so a round trip here would duplicate them, and stall the caller meanwhile.
	if ownsNC {
		return nil, notInitialized(initErr)
	}

	// Serialized on its own mutex so only one caller sets the bucket up, and held instead of s.mu so
	// that round trip cannot block Close, or the operations already holding a resolved bucket.
	s.initMu.Lock()
	defer s.initMu.Unlock()

	// Re-checked: a handler or another caller may have resolved it while this one waited.
	s.mu.RLock()
	kv, closed = s.kv, s.closed
	s.mu.RUnlock()

	if closed {
		return nil, errClosed
	}
	if kv != nil {
		return kv, nil
	}

	kv, err := newNatsKV(nc, ctx, kvCfg)

	s.mu.Lock()
	defer s.mu.Unlock()

	// A Close landing during the setup wins: the bucket is not recorded on a storage that is done.
	if s.closed {
		return nil, errClosed
	}
	if err != nil {
		// Joined with what initialization recorded: that error is often the reason the bucket is missing.
		return nil, notInitialized(errors.Join(s.err, err))
	}
	if s.kv == nil {
		s.kv = kv
		s.err = nil
	}

	return s.kv, nil
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
			return fmt.Errorf("put: %w", err)
		}
		// The inner error used to shadow this one, so a Create that succeeded still reported ErrKeyNotFound.
		if _, err = kv.Create(ctx, key, e.Bytes()); err != nil {
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

	return kv.Delete(ctx, key)
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
		return errClosed
	}

	js, err := jetstream.New(s.nc)
	if err != nil {
		return fmt.Errorf("get jetstream: %w", err)
	}

	// Delete the bucket
	err = js.DeleteKeyValue(ctx, s.cfg.KeyValueConfig.Bucket)
	if err != nil {
		return fmt.Errorf("delete kv: %w", err)
	}

	// Create the bucket
	s.kv, err = newNatsKV(
		s.nc,
		ctx,
		s.cfg.KeyValueConfig,
	)
	if err != nil {
		s.err = errors.Join(err)
		return err
	}

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

	// A borrowed connection is not ours to close, but the storage still is.
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
