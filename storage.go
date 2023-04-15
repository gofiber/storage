package storage

import "time"

// Storage interface for communicating with different database/key-value
// providers. Visit https://github.com/gofiber/storage for more info.
type Storage interface {
	StorageGetter
	StorageSetter
	StorageDeleter
	StorageResetter
	StorageCloser
}

// StorageGetter interface exposing reading methods against storage
type StorageGetter interface {
	// Get gets the value for the given key.
	// `nil, nil` is returned when the key does not exist
	Get(key string) ([]byte, error)
}

// StorageSetter interface exposing writing methods against storage
type StorageSetter interface {
	// Set stores the given value for the given key along
	// with an expiration value, 0 means no expiration.
	// Empty key or value will be ignored without an error.
	Set(key string, val []byte, exp time.Duration) error
}

// StorageDeleter interface exposing deletion methods against storage
type StorageDeleter interface {
	// Delete deletes the value for the given key.
	// It returns no error if the storage does not contain the key,
	Delete(key string) error
}

// StorageDeleter interface exposing reset methods against storage
type StorageResetter interface {
	// Reset resets the storage and delete all keys.
	Reset() error
}

// StorageCloser interface exposing closing methods against storage
type StorageCloser interface {
	// Close closes the storage and will stop any running garbage
	// collectors and open connections.
	Close() error
}
