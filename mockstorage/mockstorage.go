package mockstorage

import (
	"errors"
	"sync"
	"time"
)

// Config defines the config for mock storage.
type Config struct {
	CustomFuncs *CustomFuncs
}

// Storage is the mock storage adapter.
type Storage struct {
	mu     sync.RWMutex
	data   map[string]entry
	custom *CustomFuncs
}

// entry struct to hold value and expiration time.
type entry struct {
	value []byte
	exp   time.Time
}

// CustomFuncs allows injecting custom behaviors for testing.
type CustomFuncs struct {
	GetFunc    func(key string) ([]byte, error)
	SetFunc    func(key string, val []byte, exp time.Duration) error
	DeleteFunc func(key string) error
	ResetFunc  func() error
	CloseFunc  func() error
	ConnFunc   func() map[string]entry
	KeysFunc   func() ([][]byte, error)
}

// New creates a new mock storage with optional configuration.
func New(config ...Config) *Storage {
	s := &Storage{
		data: make(map[string]entry),
		custom: &CustomFuncs{
			GetFunc:    nil,
			SetFunc:    nil,
			DeleteFunc: nil,
			ResetFunc:  nil,
			CloseFunc:  nil,
			ConnFunc:   nil,
			KeysFunc:   nil,
		},
	}

	// If a config is provided and it has CustomFuncs, use them
	if len(config) > 0 && config[0].CustomFuncs != nil {
		s.custom = config[0].CustomFuncs
	}

	return s
}

// Get retrieves the value for a given key.
func (s *Storage) Get(key string) ([]byte, error) {
	if s.custom.GetFunc != nil {
		return s.custom.GetFunc(key)
	}

	s.mu.RLock()
	defer s.mu.RUnlock()

	e, ok := s.data[key]
	if !ok {
		return nil, errors.New("key not found")
	}
	if !e.exp.IsZero() && time.Now().After(e.exp) {
		delete(s.data, key)
		return nil, errors.New("key expired")
	}
	return e.value, nil
}

// Set sets the value for a given key with an expiration time.
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	if s.custom.SetFunc != nil {
		return s.custom.SetFunc(key, val, exp)
	}

	s.mu.Lock()
	defer s.mu.Unlock()

	var expTime time.Time
	if exp > 0 {
		expTime = time.Now().Add(exp)
	}

	s.data[key] = entry{value: val, exp: expTime}
	return nil
}

// Delete removes a key from the storage.
func (s *Storage) Delete(key string) error {
	if s.custom.DeleteFunc != nil {
		return s.custom.DeleteFunc(key)
	}

	s.mu.Lock()
	defer s.mu.Unlock()

	delete(s.data, key)
	return nil
}

// Reset clears all keys from the storage.
func (s *Storage) Reset() error {
	if s.custom.ResetFunc != nil {
		return s.custom.ResetFunc()
	}

	s.mu.Lock()
	defer s.mu.Unlock()

	s.data = make(map[string]entry)
	return nil
}

// Close closes the storage (no-op for mock).
func (s *Storage) Close() error {
	if s.custom.CloseFunc != nil {
		return s.custom.CloseFunc()
	}

	// No resources to clean up in mock
	return nil
}

// Conn returns the internal data map (for testing purposes).
func (s *Storage) Conn() map[string]entry {
	if s.custom.ConnFunc != nil {
		return s.custom.ConnFunc()
	}

	s.mu.RLock()
	defer s.mu.RUnlock()

	copyData := make(map[string]entry)
	for k, v := range s.data {
		copyData[k] = v
	}
	return copyData
}

// Keys returns all keys in the storage.
func (s *Storage) Keys() ([][]byte, error) {
	if s.custom.KeysFunc != nil {
		return s.custom.KeysFunc()
	}

	s.mu.RLock()
	defer s.mu.RUnlock()

	keys := make([][]byte, 0, len(s.data))
	for k := range s.data {
		keys = append(keys, []byte(k))
	}
	return keys, nil
}

// SetCustomFuncs allows setting custom function implementations.
func (s *Storage) SetCustomFuncs(custom *CustomFuncs) {
	s.custom = custom
}
