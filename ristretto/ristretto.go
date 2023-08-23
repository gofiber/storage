package ristretto

import (
	"time"

	"github.com/dgraph-io/ristretto"
)

// Storage interface that is implemented by storage providers.
type Storage struct {
	cache       *ristretto.Cache
	defaultCost int64
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
		cache:       cache,
		defaultCost: cfg.DefaultCost,
	}

	return store
}

// Get gets the value for the given key.
// `nil, nil` is returned when the key does not exist
func (s *Storage) Get(key string) ([]byte, error) {
	if len(key) <= 0 {
		return nil, nil
	}

	item, found := s.cache.Get(key)
	if !found {
		return nil, nil
	}

	buf, asserted := item.([]byte)
	if !asserted {
		return nil, nil
	}

	return buf, nil
}

// Set stores the given value for the given key along
// with an expiration value, time.Time{} means no expiration.
// Empty key or value will be ignored without an error.
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	if len(key) <= 0 || len(val) <= 0 {
		return nil
	}
	saved := s.cache.SetWithTTL(key, val, s.defaultCost, exp)
	if !saved {
		return nil
	}
	return nil
}

// Delete deletes the value for the given key.
// It returns no error if the storage does not contain the key,
func (s *Storage) Delete(key string) error {
	if len(key) <= 0 {
		return nil
	}
	s.cache.Del(key)
	return nil
}

// Reset resets the storage and delete all keys.
func (s *Storage) Reset() error {
	s.cache.Clear()
	return nil
}

// Close closes the storage and will stop any running garbage
// collectors and open connections.
func (s *Storage) Close() error {
	s.cache.Close()
	return nil
}

// Return database client
func (s *Storage) Conn() *ristretto.Cache {
	return s.cache
}
