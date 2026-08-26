package ristretto

import (
	"context"
	"errors"
	"sync"
	"time"

	"github.com/dgraph-io/ristretto"
)

// ErrClosed is returned after Close, since Ristretto silently drops operations on a closed cache.
var ErrClosed = errors.New("ristretto: storage is closed")

// Storage interface that is implemented by storage providers.
type Storage struct {
	cache        *ristretto.Cache
	ownsCache    bool
	defaultCost  int64
	waitForWrite bool

	// shared carries what belongs to the cache rather than to one storage: the operation
	// lock and whether the cache itself has been closed.
	shared *cacheState

	// closed latches this storage alone, guarded by shared.mu like the rest of the state.
	closed bool
}

// cacheState is the per-cache coordination shared by every storage built on one cache.
// A closed Ristretto cache silently drops every operation rather than reporting an error,
// so a storage whose sibling closed the cache must learn of it here or lose data in silence.
type cacheState struct {
	// mu keeps operations from running against a cache Close is tearing down, and keeps
	// Reset's non-atomic Clear exclusive of them, across every storage on the cache.
	mu sync.RWMutex

	refs int

	// cacheClosed reports that the cache itself was closed, by whichever storage owned it.
	// Read under mu, so an operation either completes before the close or sees this flag.
	cacheClosed bool
}

var (
	cacheStatesMu sync.Mutex
	cacheStates   = map[*ristretto.Cache]*cacheState{}
)

// acquireCacheState hands out the cache's shared state, creating it for the first storage.
func acquireCacheState(cache *ristretto.Cache) *cacheState {
	cacheStatesMu.Lock()
	defer cacheStatesMu.Unlock()

	st := cacheStates[cache]
	if st == nil {
		st = &cacheState{}
		cacheStates[cache] = st
	}
	st.refs++

	return st
}

// releaseCacheState lets go of the cache's shared state, dropping it with the last storage.
func releaseCacheState(cache *ristretto.Cache) {
	cacheStatesMu.Lock()
	defer cacheStatesMu.Unlock()

	st := cacheStates[cache]
	if st == nil {
		return
	}
	if st.refs--; st.refs == 0 {
		delete(cacheStates, cache)
	}
}

// isClosedLocked reports whether this storage, or the cache under it, has been closed.
// Callers hold shared.mu, so the answer cannot go stale before they use the cache.
func (s *Storage) isClosedLocked() bool {
	return s.closed || s.shared.cacheClosed
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

	return newStorage(cache, true, cfg)
}

// NewFromConnection builds a Storage on an existing cache, which stays the caller's to close.
// Only DefaultCost and SkipWaitForWrite are read; the sizing options come from the cache.
//
// Storages built on the same cache share one operation lock, so each one's Reset — a
// Clear, which Ristretto documents as non-atomic — excludes the others' operations
// the same way it excludes its own.
func NewFromConnection(cache *ristretto.Cache, config ...Config) *Storage {
	if cache == nil {
		panic("ristretto: nil cache")
	}

	return newStorage(cache, false, configDefault(config...))
}

func newStorage(cache *ristretto.Cache, ownsCache bool, cfg Config) *Storage {
	return &Storage{
		cache:        cache,
		ownsCache:    ownsCache,
		defaultCost:  cfg.DefaultCost,
		waitForWrite: !cfg.SkipWaitForWrite,
		shared:       acquireCacheState(cache),
	}
}

// Get gets the value for the given key.
// `nil, nil` is returned when the key does not exist
func (s *Storage) Get(key string) ([]byte, error) {
	if len(key) <= 0 {
		return nil, nil
	}

	s.shared.mu.RLock()
	defer s.shared.mu.RUnlock()

	if s.isClosedLocked() {
		return nil, ErrClosed
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

	s.shared.mu.RLock()
	defer s.shared.mu.RUnlock()

	if s.isClosedLocked() {
		return ErrClosed
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

	s.shared.mu.RLock()
	defer s.shared.mu.RUnlock()

	if s.isClosedLocked() {
		return ErrClosed
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
	s.shared.mu.Lock()
	defer s.shared.mu.Unlock()

	if s.isClosedLocked() {
		return ErrClosed
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
	s.shared.mu.Lock()
	defer s.shared.mu.Unlock()

	if s.closed {
		return nil
	}
	s.closed = true

	releaseCacheState(s.cache)

	if s.ownsCache {
		// Latched under the same lock every operation takes, so a sibling on this cache
		// reports ErrClosed instead of writing into a closed cache that drops it in silence.
		s.shared.cacheClosed = true
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
