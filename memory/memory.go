package memory

import (
	"sync"
	"time"
)

// Storage interface that is implemented by storage providers
type Storage struct {
	mux        sync.RWMutex
	DB         map[string]entry
	gcInterval time.Duration
}

type entry struct {
	data   []byte
	expiry int64
}

// New creates a new memory storage
func New(config ...Config) *Storage {
	// Set default config
	cfg := ConfigDefault

	// Override config if provided
	if len(config) > 0 {
		cfg = configDefault(config[0])
	}

	// Create storage
	store := &Storage{
		DB:         make(map[string]entry),
		gcInterval: cfg.GCInterval,
	}

	// start garbage collector
	go store.gc()

	return store
}

// Get value by key
func (s *Storage) Get(key string) ([]byte, error) {
	s.mux.RLock()
	v, ok := s.DB[key]
	s.mux.RUnlock()
	if !ok {
		return nil, nil
	}

	if v.expiry < time.Now().Unix() && v.expiry != 0 {
		_ = s.Delete(key)
		return nil, nil
	}

	return v.data, nil
}

// Set key with value
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	var expire int64
	if exp != 0 {
		expire = time.Now().Add(exp).Unix()
	}

	s.mux.Lock()
	s.DB[key] = entry{val, expire}
	s.mux.Unlock()
	return nil
}

// Delete key by key
func (s *Storage) Delete(key string) error {
	s.mux.Lock()
	delete(s.DB, key)
	s.mux.Unlock()
	return nil
}

// Clear all keys
func (s *Storage) Clear() error {
	s.mux.Lock()
	s.DB = make(map[string]entry)
	s.mux.Unlock()
	return nil
}

func (s *Storage) gc() {
	tick := time.NewTicker(s.gcInterval)
	for {
		<-tick.C

		s.mux.Lock()

		now := time.Now().Unix()
		for id, v := range s.DB {
			if v.expiry < now && v.expiry != 0 {
				delete(s.DB, id)
			}
		}
		s.mux.Unlock()
	}
}
