package ristretto

import (
	"context"
	"errors"
	"sync"
	"time"

	"github.com/dgraph-io/ristretto"
)

// errClosed is returned after Close, since Ristretto panics or blocks forever on a closed cache.
var errClosed = errors.New("ristretto: storage is closed")

// Storage interface that is implemented by storage providers.
type Storage struct {
	cache        *ristretto.Cache
	ownsCache    bool
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
		ownsCache:    true,
		defaultCost:  cfg.DefaultCost,
		waitForWrite: !cfg.SkipWaitForWrite,
	}

	return store
}

// NewFromConnection builds a Storage on an existing cache, which stays the caller's to close.
// Only DefaultCost and SkipWaitForWrite are read; the sizing options come from the cache.
func NewFromConnection(cache *ristretto.Cache, config ...Config) *Storage {
	if cache == nil {
		panic("ristretto: nil cache")
	}

	cfg := configDefault(config...)

	return &Storage{
		cache:        cache,
		defaultCost:  cfg.DefaultCost,
		waitForWrite: !cfg.SkipWaitForWrite,
	}
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
	return cloneBytes(buf), nil
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
	valCopy := cloneBytes(val)

	// Ristretto reads a negative TTL as "do nothing", while the interface has none below zero, so clamp it.
	if exp < 0 {
		exp = 0
	}

	s.mu.RLock()
	defer s.mu.RUnlock()

	if s.closed {
		return errClosed
	}

	// The result is ignored: a cache may drop a write under pressure or evict later, which is not an error.
	s.cache.SetWithTTL(key, valCopy, s.defaultCost, exp)

	// Ristretto buffers writes, so without this a Get right after Set often misses; admission is still not guaranteed.
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
	// Ristretto documents Clear as not atomic and assumes nothing is in flight, so take the lock exclusively.
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

// Close stops the collector, and closes the cache unless it came from NewFromConnection; safe to call more than once, and it waits for calls in flight.
func (s *Storage) Close() error {
	s.mu.Lock()
	defer s.mu.Unlock()

	if s.closed {
		return nil
	}
	s.closed = true

	// A borrowed cache is not ours to close, but the storage still is.
	if s.ownsCache {
		s.cache.Close()
	}

	return nil
}

// Conn returns the database client
func (s *Storage) Conn() *ristretto.Cache {
	return s.cache
}

// cloneBytes returns a copy of b sized exactly to it.
//
// bytes.Clone appends to an empty slice, so growslice rounds the capacity up to
// the next size class: a 3-byte value allocates 8. Get and Set are hot enough
// for that rounding, and the extra call, to show up.
func cloneBytes(b []byte) []byte {
	if b == nil {
		return nil
	}
	c := make([]byte, len(b))
	copy(c, b)
	return c
}
