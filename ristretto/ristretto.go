package ristretto

import (
	"context"
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

// GetWithContext gets the value by key (dummy context support)
func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error) {
	return s.Get(key)
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

// SetWithContext sets value by key (dummy context support)
func (s *Storage) SetWithContext(ctx context.Context, key string, val []byte, exp time.Duration) error {
	return s.Set(key, val, exp)
}

// Delete deletes the value for the given key.
func (s *Storage) Delete(key string) error {
	if len(key) <= 0 {
		return nil
	}
	s.cache.Del(key)
	return nil
}

// DeleteWithContext deletes key (dummy context support)
func (s *Storage) DeleteWithContext(ctx context.Context, key string) error {
	return s.Delete(key)
}

// Reset resets the storage and deletes all keys.
func (s *Storage) Reset() error {
	s.cache.Clear()
	return nil
}

// ResetWithContext resets storage (dummy context support)
func (s *Storage) ResetWithContext(ctx context.Context) error {
	return s.Reset()
}

// Close closes the storage and will stop any running garbage
// collectors and open connections.
func (s *Storage) Close() error {
	s.cache.Close()
	return nil
}

// Conn returns the database client
func (s *Storage) Conn() *ristretto.Cache {
	return s.cache
}
