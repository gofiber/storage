package sqlite3

import "time"

// Storage interface that is implemented by storage providers
type Storage struct {
}

// New creates a new storage
func New(config ...Config) *Storage {
	// Set default config
	cfg := ConfigDefault

	// Override config if provided
	if len(config) > 0 {
		cfg = configDefault(config[0])
	}

	// TODO
	_ = cfg

	return &Storage{}
}

// Get value by key
func (s *Storage) Get(key string) ([]byte, error) {
	return nil, nil
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
