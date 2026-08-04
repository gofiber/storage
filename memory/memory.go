package memory

import (
	"context"
	"math"
	"strings"
	"sync"
	"sync/atomic"
	"time"

	"github.com/gofiber/storage/memory/v2/internal"
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

	// expiry is the Unix second the entry expires at, rounded up, with 0
	// meaning no expiration. Max value is 4294967295 -> Sun Feb 07 2106
	// 06:28:15 GMT+0000.
	//
	// It is compared against internal.Timestamp, a cached clock refreshed
	// once a second, so an entry can outlive its expiration by up to two
	// seconds: one from rounding the deadline up, one from the cached clock
	// trailing real time. It is never dropped early. Reading the real clock
	// on every Get would halve the throughput of this storage, which is the
	// reason the cached one exists.
	expiry uint32
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
	internal.StartTimeStampUpdater()
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
	if !ok || (v.expiry != 0 && v.expiry <= atomic.LoadUint32(&internal.Timestamp)) {
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

	var expire uint32

	// Copy both key and value to avoid unsafe reuse from sync.Pool.
	// When Fiber uses pooled buffers, the underlying memory can be reused.
	keyCopy := strings.Clone(key)
	valCopy := make([]byte, len(val))
	copy(valCopy, val)

	if exp > 0 {
		// Expiration is tracked with a one-second granularity. Round the
		// deadline up rather than truncating the duration, which made any
		// sub-second expiration immediate. Entries are therefore never
		// dropped early, see the expiry field for the cost of that.
		deadline := time.Now().Add(exp)
		secs := deadline.Unix()
		if deadline.Nanosecond() != 0 {
			secs++
		}
		if secs > math.MaxUint32 {
			secs = math.MaxUint32
		}
		expire = uint32(secs) //nolint:gosec // clamped to MaxUint32 above
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
			ts := atomic.LoadUint32(&internal.Timestamp)
			expired = expired[:0]
			s.mux.RLock()
			for id, v := range s.db {
				if v.expiry != 0 && v.expiry < ts {
					expired = append(expired, id)
				}
			}
			s.mux.RUnlock()
			s.mux.Lock()
			for i := range expired {
				v := s.db[expired[i]]
				if v.expiry != 0 && v.expiry <= ts {
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

	ts := atomic.LoadUint32(&internal.Timestamp)
	keys := make([][]byte, 0, len(s.db))
	for key, v := range s.db {
		if v.expiry == 0 || v.expiry > ts {
			keys = append(keys, []byte(key))
		}
	}

	if len(keys) == 0 {
		return nil, nil
	}

	return keys, nil
}
