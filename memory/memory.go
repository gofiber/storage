package memory

import (
	"bytes"
	"context"
	"errors"
	"math"
	"strings"
	"sync"
	"sync/atomic"
	"time"
)

// ErrClosed is returned after Close: a Set landing afterwards would never be reclaimed.
var ErrClosed = errors.New("memory: storage is closed")

// Storage interface that is implemented by storage providers
type Storage struct {
	mux        sync.RWMutex
	db         map[string]entry
	gcInterval time.Duration
	done       chan struct{}
	stopped    chan struct{}
	closeOnce  sync.Once

	closed atomic.Bool
}

type entry struct {
	data []byte

	// expiry is the Unix nanosecond the entry expires at, 0 meaning never.
	expiry int64
}

// expired reports whether e is past its expiration, reading the clock only for entries that have one.
func (e entry) expired() bool {
	return e.expiry != 0 && e.expiry <= time.Now().UnixNano()
}

// expiredAt reports whether e is expired as of now in Unix nanoseconds, so sweeps read the clock once.
func (e entry) expiredAt(now int64) bool {
	return e.expiry != 0 && e.expiry <= now
}

// New creates a new memory storage
func New(config ...Config) *Storage {
	// Set default config
	cfg := configDefault(config...)

	// Create storage
	store := &Storage{
		db:         make(map[string]entry),
		gcInterval: cfg.GCInterval,
		done:       make(chan struct{}),
		stopped:    make(chan struct{}),
	}

	// Start garbage collector
	go store.gc()

	return store
}

// Get value by key
func (s *Storage) Get(key string) ([]byte, error) {
	if s.closed.Load() {
		return nil, ErrClosed
	}
	if len(key) <= 0 {
		return nil, nil
	}
	s.mux.RLock()
	v, ok := s.db[key]
	s.mux.RUnlock()
	if !ok || v.expired() {
		return nil, nil
	}

	return bytes.Clone(v.data), nil
}

// GetWithContext gets value by key, aborting if ctx is already done.
func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error) {
	if err := ctx.Err(); err != nil {
		return nil, err
	}
	return s.Get(key)
}

// Set key with value
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	if s.closed.Load() {
		return ErrClosed
	}
	if len(key) <= 0 || len(val) <= 0 {
		return nil
	}

	var expire int64

	// Copy key and value: Fiber's pooled buffers may be reused once the call returns.
	keyCopy := strings.Clone(key)
	valCopy := bytes.Clone(val)

	// A negative expiration means none rather than a deadline in the past, as the other drivers read it.
	if exp > 0 {
		// Computed in nanoseconds so a deadline past the year 2262 saturates instead of wrapping negative.
		expire = time.Now().UnixNano()
		if int64(exp) > math.MaxInt64-expire {
			expire = math.MaxInt64
		} else {
			expire += int64(exp)
		}
	}

	e := entry{valCopy, expire}
	s.mux.Lock()
	defer s.mux.Unlock()

	// Re-checked under the lock: the check above can pass just before Close, leaving an entry nothing can reclaim.
	if s.closed.Load() {
		return ErrClosed
	}

	s.db[keyCopy] = e
	return nil
}

// SetWithContext sets value by key, aborting if ctx is already done.
func (s *Storage) SetWithContext(ctx context.Context, key string, val []byte, exp time.Duration) error {
	if err := ctx.Err(); err != nil {
		return err
	}
	return s.Set(key, val, exp)
}

// Delete key by key
func (s *Storage) Delete(key string) error {
	if s.closed.Load() {
		return ErrClosed
	}
	if len(key) <= 0 {
		return nil
	}
	s.mux.Lock()
	defer s.mux.Unlock()

	if s.closed.Load() {
		return ErrClosed
	}

	delete(s.db, key)
	return nil
}

// DeleteWithContext deletes key, aborting if ctx is already done.
func (s *Storage) DeleteWithContext(ctx context.Context, key string) error {
	if err := ctx.Err(); err != nil {
		return err
	}
	return s.Delete(key)
}

// Reset all keys
func (s *Storage) Reset() error {
	if s.closed.Load() {
		return ErrClosed
	}
	ndb := make(map[string]entry)
	s.mux.Lock()
	defer s.mux.Unlock()

	if s.closed.Load() {
		return ErrClosed
	}

	s.db = ndb
	return nil
}

// ResetWithContext resets all keys, aborting if ctx is already done.
func (s *Storage) ResetWithContext(ctx context.Context) error {
	if err := ctx.Err(); err != nil {
		return err
	}
	return s.Reset()
}

// Close the storage. Safe to call more than once; afterwards every operation returns ErrClosed.
func (s *Storage) Close() error {
	s.closeOnce.Do(func() {
		// Held only to publish the flag, so an operation either completes before this or sees the storage closed.
		s.mux.Lock()
		s.closed.Store(true)
		s.mux.Unlock()

		// Released before waiting: the collector takes the same lock, so holding it would deadlock the handshake.
		close(s.done)
		// Wait for the collector to return so it no longer touches the map.
		<-s.stopped
	})
	return nil
}

func (s *Storage) gc() {
	defer close(s.stopped)

	ticker := time.NewTicker(s.gcInterval)
	defer ticker.Stop()
	var expired []string

	for {
		select {
		case <-s.done:
			return
		case <-ticker.C:
			now := time.Now().UnixNano()
			expired = expired[:0]
			s.mux.RLock()
			for id, v := range s.db {
				if v.expiredAt(now) {
					expired = append(expired, id)
				}
			}
			s.mux.RUnlock()
			s.mux.Lock()
			for i := range expired {
				if s.db[expired[i]].expiredAt(now) {
					delete(s.db, expired[i])
				}
			}
			s.mux.Unlock()
		}
	}
}

// Conn returns a copy of the stored entries; the live map raced the collector.
func (s *Storage) Conn() map[string]entry {
	s.mux.RLock()
	defer s.mux.RUnlock()

	db := make(map[string]entry, len(s.db))
	for key, v := range s.db {
		db[key] = v
	}

	return db
}

// Keys returns all the keys
func (s *Storage) Keys() ([][]byte, error) {
	if s.closed.Load() {
		return nil, ErrClosed
	}

	s.mux.RLock()
	defer s.mux.RUnlock()

	if len(s.db) == 0 {
		return nil, nil
	}

	now := time.Now().UnixNano()
	keys := make([][]byte, 0, len(s.db))
	for key, v := range s.db {
		if !v.expiredAt(now) {
			keys = append(keys, []byte(key))
		}
	}

	if len(keys) == 0 {
		return nil, nil
	}

	return keys, nil
}
