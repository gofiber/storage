package sqlite3

import (
	"time"
)

// Storage interface that is implemented by storage providers
type Storage struct {
}

// Config defines the config for storage.
type Config struct {
}

// ConfigDefault is the default config
var ConfigDefault = Config{}

// New creates a new storage
func New(config ...Config) *Storage {
	return &Storage{}
}

// Get value by key
func (s *Storage) Get(key string) ([]byte, error) {
	return []byte{}, nil
}

// Set key with value
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	return nil
}

// Delete key by key
func (s *Storage) Delete(key string) error {
	return nil
}

// Clear all keys
func (s *Storage) Clear() error {
	return nil
}
