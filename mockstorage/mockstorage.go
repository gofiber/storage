package mockstorage

import (
	"context"
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
	data   map[string]Entry
	custom *CustomFuncs
}

// Entry struct to hold value and expiration time.
type Entry struct {
	Value []byte
	Exp   time.Time
}

// CustomFuncs allows injecting custom behaviors for testing.
type CustomFuncs struct {
	GetFunc           func(key string) ([]byte, error)
	GetWithContext    func(ctx context.Context, key string) ([]byte, error)
	SetFunc           func(key string, val []byte, exp time.Duration) error
	SetWithContext    func(ctx context.Context, key string, val []byte, exp time.Duration) error
	DeleteFunc        func(key string) error
	DeleteWithContext func(ctx context.Context, key string) error
	ResetFunc         func() error
	ResetWithContext  func(ctx context.Context) error
	CloseFunc         func() error
	ConnFunc          func() map[string]Entry
	KeysFunc          func() ([][]byte, error)
}

// New creates a new mock storage with optional configuration.
func New(config ...Config) *Storage {
	s := &Storage{
		data:   make(map[string]Entry),
		custom: &CustomFuncs{}, // default no-op
	}

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
	if !e.Exp.IsZero() && time.Now().After(e.Exp) {
		delete(s.data, key)
		return nil, errors.New("key expired")
	}
	return e.Value, nil
}

// GetWithContext retrieves value by key using a context (functional or fallback)
func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error) {
	if s.custom.GetWithContext != nil {
		return s.custom.GetWithContext(ctx, key)
	}
	return s.Get(key)
}

// Set sets the value for a given key with expiration.
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

	s.data[key] = Entry{Value: val, Exp: expTime}
	return nil
}

// SetWithContext sets value using context.
func (s *Storage) SetWithContext(ctx context.Context, key string, val []byte, exp time.Duration) error {
	if s.custom.SetWithContext != nil {
		return s.custom.SetWithContext(ctx, key, val, exp)
	}
	return s.Set(key, val, exp)
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

// DeleteWithContext deletes key using context.
func (s *Storage) DeleteWithContext(ctx context.Context, key string) error {
	if s.custom.DeleteWithContext != nil {
		return s.custom.DeleteWithContext(ctx, key)
	}
	return s.Delete(key)
}

// Reset clears all keys.
func (s *Storage) Reset() error {
	if s.custom.ResetFunc != nil {
		return s.custom.ResetFunc()
	}

	s.mu.Lock()
	defer s.mu.Unlock()
	s.data = make(map[string]Entry)
	return nil
}

// ResetWithContext resets storage using context.
func (s *Storage) ResetWithContext(ctx context.Context) error {
	if s.custom.ResetWithContext != nil {
		return s.custom.ResetWithContext(ctx)
	}
	return s.Reset()
}

// Close closes the mock storage (no-op).
func (s *Storage) Close() error {
	if s.custom.CloseFunc != nil {
		return s.custom.CloseFunc()
	}
	return nil
}

// Conn returns internal map.
func (s *Storage) Conn() map[string]Entry {
	if s.custom.ConnFunc != nil {
		return s.custom.ConnFunc()
	}

	s.mu.RLock()
	defer s.mu.RUnlock()

	copyData := make(map[string]Entry)
	for k, v := range s.data {
		copyData[k] = Entry{Value: v.Value, Exp: v.Exp}
	}
	return copyData
}

// Keys returns all keys.
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

// SetCustomFuncs allows runtime injection of function implementations.
func (s *Storage) SetCustomFuncs(custom *CustomFuncs) {
	s.custom = custom
}
