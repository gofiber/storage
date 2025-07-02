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
	nc  *nats.Conn
	kv  jetstream.KeyValue
	err error
	cfg Config
	mu  sync.RWMutex
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

	var err error
	s.kv, err = newNatsKV(
		nc,
		context.Background(),
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

// New creates a new nats kv storage
func New(config ...Config) *Storage {
	// Set default config
	cfg := configDefault(config...)

	storage := &Storage{
		cfg: cfg,
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

// GetWithContext value by key with context
func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error) {
	if len(key) <= 0 {
		return nil, nil
	}

	s.mu.RLock()
	kv := s.kv
	s.mu.RUnlock()
	if kv == nil {
		return nil, fmt.Errorf("kv not initialized: %v", s.err)
	}

	v, err := kv.Get(ctx, key)
	if err != nil {
		if errors.Is(err, jetstream.ErrKeyNotFound) {
			return nil, nil
		}
		return nil, fmt.Errorf("get: %w", err)
	}

	e := entry{}
	err = gob.NewDecoder(
		bytes.NewBuffer(v.Value())).
		Decode(&e)
	if err != nil || e.Expiry <= time.Now().Unix() {
		_ = kv.Delete(ctx, key)
		return nil, nil
	}

	return e.Data, nil
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
	kv := s.kv
	s.mu.RUnlock()
	if kv == nil {
		return fmt.Errorf("kv not initialized: %v", s.err)
	}

	// expiry
	var expSeconds int64
	if exp != 0 {
		expSeconds = time.Now().Add(exp).Unix()
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
	_, err = kv.Put(ctx, key, e.Bytes())
	if errors.Is(err, jetstream.ErrKeyNotFound) {
		_, err := kv.Create(ctx, key, e.Bytes())
		if err != nil {
			return fmt.Errorf("create: %w", err)
		}
	}

	return err
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
	kv := s.kv
	s.mu.RUnlock()

	if kv == nil {
		return fmt.Errorf("kv not initialized: %v", s.err)
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
func (s *Storage) Close() error {
	s.mu.RLock()
	s.nc.Close()
	s.mu.RUnlock()
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
	kv := s.kv
	s.mu.RUnlock()
	if kv == nil {
		return nil, fmt.Errorf("kv not initialized: %v", s.err)
	}

	keyLister, err := kv.ListKeys(context.Background())

	if err != nil {
		return nil, fmt.Errorf("keys: %w", err)
	}

	var keys []string
	for key := range keyLister.Keys() {
		keys = append(keys, key)
	}
	_ = keyLister.Stop()

	// Double check if no valid keys were found
	if len(keys) == 0 {
		return nil, nil
	}

	return keys, nil
}
