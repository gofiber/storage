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

// Storage interface that is implemented by storage providers
type Storage struct {
	nc     *nats.Conn
	kv     jetstream.KeyValue
	err    error
	cfg    Config
	ctx    context.Context
	mu     sync.RWMutex
	closed bool
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
		cfg: cfg,
		ctx: ctx,
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

// GetWithContext retrieves the value associated with the given key using the provided context.
func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error) {
	if len(key) <= 0 {
		return nil, nil
	}

	s.mu.RLock()
	kv, initErr := s.kv, s.err
	s.mu.RUnlock()
	if kv == nil {
		return nil, fmt.Errorf("kv not initialized: %w", initErr)
	}

	data, expired, revision, err := read(ctx, kv, key)
	if err != nil || data == nil {
		return nil, err
	}

	if expired {
		// Reclaim it, conditional on the revision this read saw: there is no
		// collector for this driver, and an unconditional delete would drop a
		// value a concurrent Set had already written.
		_ = kv.Delete(ctx, key, jetstream.LastRevision(revision))
		return nil, nil
	}

	return data, nil
}

// read fetches key and reports its value, whether it has expired, and the
// revision it was read at. A missing key yields a nil value and no error.
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
		// A value this driver cannot decode is a real failure. Reporting it as
		// an expiry hid the error and deleted the data along with it.
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
	if len(key) <= 0 || len(val) <= 0 {
		return nil
	}

	s.mu.RLock()
	kv, initErr := s.kv, s.err
	s.mu.RUnlock()
	if kv == nil {
		return fmt.Errorf("kv not initialized: %w", initErr)
	}

	// expiry
	var expSeconds int64
	if exp > 0 {
		// The deadline is stored with a one-second granularity, so round it up:
		// truncating expires an entry early, and a sub-second expiration would be
		// stored as already past.
		deadline := time.Now().Add(exp)
		expSeconds = deadline.Unix()
		if deadline.Nanosecond() != 0 {
			expSeconds++
		}
	}
	// encode
	e := new(bytes.Buffer)
	err := gob.NewEncoder(e).Encode(entry{
		Data:   val,
		Expiry: expSeconds,
	})
	if err != nil {
		return fmt.Errorf("encode: %w", err)
	}

	// set
	if _, err = kv.Put(ctx, key, e.Bytes()); err != nil {
		if !errors.Is(err, jetstream.ErrKeyNotFound) {
			return fmt.Errorf("put: %w", err)
		}
		// The inner error used to shadow this one, so a Create that succeeded
		// still reported the ErrKeyNotFound that led here.
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
	if len(key) <= 0 {
		return nil
	}

	s.mu.RLock()
	kv, initErr := s.kv, s.err
	s.mu.RUnlock()

	if kv == nil {
		return fmt.Errorf("kv not initialized: %w", initErr)
	}

	return kv.Delete(ctx, key)
}

// Delete key by key
func (s *Storage) Delete(key string) error {
	return s.DeleteWithContext(context.Background(), key)
}

// ResetWithContext all keys with context
func (s *Storage) ResetWithContext(ctx context.Context) error {
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
	s.mu.Lock()
	defer s.mu.Unlock()
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

// Close the nats connection
// Close the connection. It is safe to call Close more than once, the
// connection is closed only on the first call.
//
// The lock is taken for writing: closing is not a read of the connection, and
// holding it for reading let operations run against one being torn down.
func (s *Storage) Close() error {
	s.mu.Lock()
	defer s.mu.Unlock()

	if s.closed {
		return nil
	}
	s.closed = true

	s.nc.Close()
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
	s.mu.RLock()
	kv, initErr := s.kv, s.err
	s.mu.RUnlock()
	if kv == nil {
		return nil, fmt.Errorf("kv not initialized: %w", initErr)
	}

	// Watch streams every current entry with its value in one subscription.
	// ListKeys would be one round trip too, but it asks for metadata only, so
	// filtering out expired entries would then cost a Get per key.
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

		// A value this driver cannot decode is left out of the listing rather
		// than failing the whole call: one unreadable entry should not hide
		// every other key. Get still reports the failure for that key.
		//
		// An expired entry is skipped for the same reason a miss would be,
		// since it is still in the bucket until something reclaims it. This
		// only reads: listing keys must not delete any.
		data, expired, err := decodeEntry(e.Value())
		if err != nil || expired || len(data) == 0 {
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
