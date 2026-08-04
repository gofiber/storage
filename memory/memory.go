package memory

import (
	"context"
	"math"
	"strings"
	"sync"
	"time"
)

// Storage interface that is implemented by storage providers
type Storage struct {
	mux        sync.RWMutex
	db         map[string]entry
	gcInterval time.Duration
	done       chan struct{}
	stopped    chan struct{}
	closeOnce  sync.Once
}

type entry struct {
	data []byte

	// expiry is the Unix nanosecond the entry expires at, with 0 meaning no
	// expiration. Storing the exact deadline rather than a whole second keeps
	// short expirations accurate: rounding to seconds and comparing against a
	// clock refreshed once a second made a 100ms entry live for two seconds.
	expiry int64
}

// expired reports whether e is past its expiration. The clock is only read
// for entries that have one, so entries that never expire cost nothing.
func (e entry) expired() bool {
	return e.expiry != 0 && e.expiry <= time.Now().UnixNano()
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
	if len(key) <= 0 {
		return nil, nil
	}
	s.mux.RLock()
	v, ok := s.db[key]
	s.mux.RUnlock()
	if !ok || v.expired() {
		return nil, nil
	}

	// Return a copy to prevent callers from mutating stored data
	valCopy := make([]byte, len(v.data))
	copy(valCopy, v.data)
	return valCopy, nil
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
	if len(key) <= 0 || len(val) <= 0 {
		return nil
	}

	var expire int64

	// Copy both key and value to avoid unsafe reuse from sync.Pool.
	// When Fiber uses pooled buffers, the underlying memory can be reused.
	keyCopy := strings.Clone(key)
	valCopy := make([]byte, len(val))
	copy(valCopy, val)

	// A negative expiration is not an expiration in the past, it means none,
	// the same way the other drivers read it.
	if exp > 0 {
		// Computed in nanoseconds directly so that a deadline past the year
		// 2262 saturates instead of wrapping to a negative one.
		expire = time.Now().UnixNano()
		if int64(exp) > math.MaxInt64-expire {
			expire = math.MaxInt64
		} else {
			expire += int64(exp)
		}
	}

	e := entry{valCopy, expire}
	s.mux.Lock()
	s.db[keyCopy] = e
	s.mux.Unlock()
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
	if len(key) <= 0 {
		return nil
	}
	s.mux.Lock()
	delete(s.db, key)
	s.mux.Unlock()
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
	ndb := make(map[string]entry)
	s.mux.Lock()
	s.db = ndb
	s.mux.Unlock()
	return nil
}

// ResetWithContext resets all keys, aborting if ctx is already done.
func (s *Storage) ResetWithContext(ctx context.Context) error {
	if err := ctx.Err(); err != nil {
		return err
	}
	return s.Reset()
}

// Close the memory storage. It is safe to call Close more than once.
func (s *Storage) Close() error {
	s.closeOnce.Do(func() {
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
			expired = expired[:0]
			s.mux.RLock()
			for id, v := range s.db {
				if v.expired() {
					expired = append(expired, id)
				}
			}
			s.mux.RUnlock()
			s.mux.Lock()
			for i := range expired {
				if s.db[expired[i]].expired() {
					delete(s.db, expired[i])
				}
			}
			s.mux.Unlock()
		}
	}
}

// Conn returns database client
func (s *Storage) Conn() map[string]entry {
	s.mux.RLock()
	defer s.mux.RUnlock()
	return s.db
}

// Keys returns all the keys
func (s *Storage) Keys() ([][]byte, error) {
	s.mux.RLock()
	defer s.mux.RUnlock()

	if len(s.db) == 0 {
		return nil, nil
	}

	keys := make([][]byte, 0, len(s.db))
	for key, v := range s.db {
		if !v.expired() {
			keys = append(keys, []byte(key))
		}
	}

	if len(keys) == 0 {
		return nil, nil
	}

	return keys, nil
}
