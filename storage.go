package storage

import "time"

// Storage interface for communicating with different database/key-value
// providers. Visit https://github.com/gofiber/storage for more info.
type Storage interface {
	// Get gets the value for the given key.
	// It returns ErrNotFound if the storage does not contain the key.
	Get(key string) ([]byte, error)

	// Set stores the given value for the given key along with a
	// time-to-live expiration value, 0 means live for ever
	// Empty key or value will be ignored without an error.
	Set(key string, val []byte, ttl time.Duration) error

	// Delete deletes the value for the given key.
	// It returns no error if the storage does not contain the key,
	Delete(key string) error

	// Reset resets the storage and delete all keys.
	Reset() error

	// Close closes the storage and will stop any running garbage
	// collectors and open connections.
	Close() error
}
