package memory

import (
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
}

type entry struct {
	data []byte
	// max value is 4294967295 -> Sun Feb 07 2106 06:28:15 GMT+0000
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
	if !ok || v.expiry != 0 && v.expiry <= atomic.LoadUint32(&internal.Timestamp) {
		return nil, nil
	}

	return v.data, nil
}

// Set key with value
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	// Ain't Nobody Got Time For That
	if len(key) <= 0 || len(val) <= 0 {
		return nil
	}

	var expire uint32
// Copy both key and value to avoid unsafe reuse from sync.Pool
// When Fiber uses pooled buffers, the underlying memory can be reused
keyCopy := string([]byte(key))
valCopy := make([]byte, len(val))
copy(valCopy, val)

	if exp != 0 {
		expire = uint32(exp.Seconds()) + atomic.LoadUint32(&internal.Timestamp)
	}

	e := entry{valCopy, expire}
	s.mux.Lock()
	s.db[keyCopy] = e
	s.mux.Unlock()
	return nil
}

// Delete key by key
func (s *Storage) Delete(key string) error {
	// Ain't Nobody Got Time For That
	if len(key) <= 0 {
		return nil
	}
	s.mux.Lock()
	delete(s.db, key)
	s.mux.Unlock()
	return nil
}

// Reset all keys
func (s *Storage) Reset() error {
	ndb := make(map[string]entry)
	s.mux.Lock()
	s.db = ndb
	s.mux.Unlock()
	return nil
}

// Close the memory storage
func (s *Storage) Close() error {
	s.done <- struct{}{}
	return nil
}

func (s *Storage) gc() {
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
			// Double-checked locking.
			// We might have replaced the item in the meantime.
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

// Return database client
func (s *Storage) Conn() map[string]entry {
	s.mux.RLock()
	defer s.mux.RUnlock()
	return s.db
}

// Return all the keys
func (s *Storage) Keys() ([][]byte, error) {
	s.mux.RLock()
	defer s.mux.RUnlock()

	if len(s.db) == 0 {
		return nil, nil
	}

	ts := atomic.LoadUint32(&internal.Timestamp)
	keys := make([][]byte, 0, len(s.db))
	for key, v := range s.db {
		// Filter out the expired keys
		if v.expiry == 0 || v.expiry > ts {
			keys = append(keys, []byte(key))
		}
	}

	// Double check if no valid keys were found
	if len(keys) == 0 {
		return nil, nil
	}

	return keys, nil
}
