package ristretto

import (
	"bytes"
	"context"
	"errors"
	"sync"
	"time"

	"github.com/dgraph-io/ristretto"
)

// errClosed is returned by every operation attempted after Close. Ristretto
// panics or blocks forever when its buffers are used after the cache is
// closed, so the storage refuses those calls instead of forwarding them.
var errClosed = errors.New("ristretto: storage is closed")

// Storage interface that is implemented by storage providers.
type Storage struct {
	cache        *ristretto.Cache
	defaultCost  int64
	waitForWrite bool

	// mu keeps operations from running against a cache Close is tearing down.
	mu     sync.RWMutex
	closed bool
}

// New creates a new storage.
func New(config ...Config) *Storage {
	cfg := configDefault(config...)
	cache, err := ristretto.NewCache(&ristretto.Config{
		NumCounters: cfg.NumCounters,
		MaxCost:     cfg.MaxCost,
		BufferItems: cfg.BufferItems,
	})
	if err != nil {
		panic(err)
	}

	store := &Storage{
		cache:        cache,
		defaultCost:  cfg.DefaultCost,
		waitForWrite: !cfg.SkipWaitForWrite,
	}

	return store
}

// Get gets the value for the given key.
// `nil, nil` is returned when the key does not exist
func (s *Storage) Get(key string) ([]byte, error) {
	if len(key) <= 0 {
		return nil, nil
	}

	s.mu.RLock()
	defer s.mu.RUnlock()

	if s.closed {
		return nil, errClosed
	}

	item, found := s.cache.Get(key)
	if !found {
		return nil, nil
	}

	buf, asserted := item.([]byte)
	if !asserted {
		return nil, nil
	}

	// Return a copy so callers cannot mutate the cached entry in place.
	return bytes.Clone(buf), nil
}

// GetWithContext gets the value by key, aborting if ctx is already done.
func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error) {
	if err := ctx.Err(); err != nil {
		return nil, err
	}
	return s.Get(key)
}

// Set stores the given value for the given key along
// with an expiration value, time.Time{} means no expiration.
// Empty key or value will be ignored without an error.
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	if len(key) <= 0 || len(val) <= 0 {
		return nil
	}

	// Store a copy: the caller may reuse or mutate val once Set returns.
	valCopy := bytes.Clone(val)

	// Ristretto reads a negative TTL as "do nothing", while the storage
	// interface has no expiration below zero, so clamp it to none.
	if exp < 0 {
		exp = 0
	}

	s.mu.RLock()
	defer s.mu.RUnlock()

	if s.closed {
		return errClosed
	}

	// The result is deliberately ignored: Ristretto is a cache, it may drop a
	// write under pressure or evict the entry later, which is not an error.
	s.cache.SetWithTTL(key, valCopy, s.defaultCost, exp)

	// Ristretto buffers writes, so without this a Get right after Set often
	// misses. Waiting makes an admitted write visible; it does not guarantee
	// admission, and the entry can still be evicted later.
	if s.waitForWrite {
		s.cache.Wait()
	}

	return nil
}

// SetWithContext sets value by key, aborting if ctx is already done.
func (s *Storage) SetWithContext(ctx context.Context, key string, val []byte, exp time.Duration) error {
	if err := ctx.Err(); err != nil {
		return err
	}
	return s.Set(key, val, exp)
}

// Delete deletes the value for the given key.
func (s *Storage) Delete(key string) error {
	if len(key) <= 0 {
		return nil
	}

	s.mu.RLock()
	defer s.mu.RUnlock()

	if s.closed {
		return errClosed
	}

	s.cache.Del(key)
	return nil
}

// DeleteWithContext deletes key, aborting if ctx is already done.
func (s *Storage) DeleteWithContext(ctx context.Context, key string) error {
	if err := ctx.Err(); err != nil {
		return err
	}
	return s.Delete(key)
}

// Reset resets the storage and deletes all keys.
func (s *Storage) Reset() error {
	// Ristretto documents Clear as not atomic and assumes no operation is in
	// flight while it runs, so this takes the lock exclusively.
	s.mu.Lock()
	defer s.mu.Unlock()

	if s.closed {
		return errClosed
	}

	s.cache.Clear()
	return nil
}

// ResetWithContext resets storage, aborting if ctx is already done.
func (s *Storage) ResetWithContext(ctx context.Context) error {
	if err := ctx.Err(); err != nil {
		return err
	}
	return s.Reset()
}

// Close closes the storage and will stop any running garbage
// collectors and open connections. It is safe to call Close more than once,
// and it waits for any operation already in flight to finish.
func (s *Storage) Close() error {
	s.mu.Lock()
	defer s.mu.Unlock()

	if s.closed {
		return nil
	}
	s.closed = true

	s.cache.Close()
	return nil
}

// Conn returns the database client
func (s *Storage) Conn() *ristretto.Cache {
	return s.cache
}
