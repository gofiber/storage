package storage

import "time"

// Storage interface that is implemented by storage providers for different
// middleware packages like cache, limiter, session and csrf
type Storage interface {
	// Get retrieves the value for the given key.
	// If no value is not found it returns ErrNotExit error
	Get(key string) ([]byte, error)

	// Set stores the given value for the given key along with a
	// time-to-live expiration value, 0 means live for ever
	// The key must not be "" and the empty values are ignored.
	Set(key string, val []byte, ttl time.Duration) error

	// Delete deletes the stored value for the given key.
	// Deleting a non-existing key-value pair does NOT lead to an error.
	// The key must not be "".
	Delete(key string) error

	// Clear storage
	Clear() error
}
