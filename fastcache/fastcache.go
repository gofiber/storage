package fastcache

import (
	"github.com/VictoriaMetrics/fastcache"
	"github.com/gofiber/utils/v2"
)

// Storage interface that is implemented by storage providers
type Storage struct {
	cache *fastcache.Cache
}

// New creates a new storage
func New(config ...Config) *Storage {
	cfg := configDefault(config...)
	cache := fastcache.New(cfg.MaxBytes)
	store := &Storage{
		cache: cache,
	}
	return store
}

// Get gets the value for the given key
// `nil, nil` is returned when the key does not exist
func (s *Storage) Get(key string) ([]byte, error) {
	if len(key) <= 0 {
		return nil, nil
	}
	return s.cache.Get(nil, utils.UnsafeBytes(key)), nil
}

// Set stores the given value for the given key along
// Empty key or value will be ignored without an error
func (s *Storage) Set(key string, val []byte) error {
	if len(key) <= 0 || len(val) <= 0 {
		return nil
	}
	s.cache.Set(utils.UnsafeBytes(key), val)
	return nil
}

// Delete deletes the value for the given key
// It returns no error if the storage does not contain the key
func (s *Storage) Delete(key string) error {
	if len(key) <= 0 {
		return nil
	}
	s.cache.Del(utils.UnsafeBytes(key))
	return nil
}

// Reset resets the storage and delete all keys
func (s *Storage) Reset() error {
	s.cache.Reset()
	return nil
}

// Close closes the storage
func (s *Storage) Close() error {
	return nil
}

// Return database client
func (s *Storage) Conn() *fastcache.Cache {
	return s.cache
}
