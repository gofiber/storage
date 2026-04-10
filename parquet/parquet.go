package parquet

import (
	"context"
	"io"
	"os"
	"sync"
	"time"

	"github.com/parquet-go/parquet-go"
)

// entry represents a single key-value row stored in the parquet file.
type entry struct {
	Key     string `parquet:"key"`
	Value   []byte `parquet:"value"`
	Expires int64  `parquet:"expires"`
}

// Storage implements the fiber storage interface using Parquet files.
type Storage struct {
	mux        sync.RWMutex
	db         map[string]entry
	path       string
	gcInterval time.Duration
	done       chan struct{}
}

// New creates a new parquet storage
func New(config ...Config) *Storage {
	cfg := configDefault(config...)

	store := &Storage{
		db:         make(map[string]entry),
		path:       cfg.Path,
		gcInterval: cfg.GCInterval,
		done:       make(chan struct{}),
	}

	// Load existing data from parquet file if it exists
	store.load()

	// Start garbage collector
	go store.gc()

	return store
}

// Get value by key
func (s *Storage) Get(key string) ([]byte, error) {
	if len(key) <= 0 {
		return nil, nil
	}
	s.mux.RLock()
	v, ok := s.db[key]
	s.mux.RUnlock()
	if !ok {
		return nil, nil
	}
	if v.Expires > 0 && v.Expires <= time.Now().Unix() {
		return nil, nil
	}
	valCopy := make([]byte, len(v.Value))
	copy(valCopy, v.Value)
	return valCopy, nil
}

// GetWithContext gets value by key with context
func (s *Storage) GetWithContext(_ context.Context, key string) ([]byte, error) {
	return s.Get(key)
}

// Set key with value
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	if len(key) <= 0 || len(val) <= 0 {
		return nil
	}

	e := entry{
		Key:   key,
		Value: make([]byte, len(val)),
	}
	copy(e.Value, val)

	if exp > 0 {
		e.Expires = time.Now().Unix() + int64(exp.Seconds())
	}

	s.mux.Lock()
	s.db[key] = e
	s.mux.Unlock()

	return s.flush()
}

// SetWithContext sets key with value with context
func (s *Storage) SetWithContext(_ context.Context, key string, val []byte, exp time.Duration) error {
	return s.Set(key, val, exp)
}

// Delete entry by key
func (s *Storage) Delete(key string) error {
	if len(key) <= 0 {
		return nil
	}

	s.mux.Lock()
	delete(s.db, key)
	s.mux.Unlock()

	return s.flush()
}

// DeleteWithContext deletes key with context
func (s *Storage) DeleteWithContext(_ context.Context, key string) error {
	return s.Delete(key)
}

// Reset all entries
func (s *Storage) Reset() error {
	s.mux.Lock()
	s.db = make(map[string]entry)
	s.mux.Unlock()

	return s.flush()
}

// ResetWithContext resets all entries with context
func (s *Storage) ResetWithContext(_ context.Context) error {
	return s.Reset()
}

// Close the storage
func (s *Storage) Close() error {
	s.done <- struct{}{}
	return s.flush()
}

// Conn returns the internal map
func (s *Storage) Conn() map[string]entry {
	s.mux.RLock()
	defer s.mux.RUnlock()
	return s.db
}

// load reads existing data from the parquet file
func (s *Storage) load() {
	f, err := os.Open(s.path)
	if err != nil {
		return
	}
	defer f.Close()

	info, err := f.Stat()
	if err != nil || info.Size() == 0 {
		return
	}

	reader := parquet.NewReader(f)
	defer reader.Close()

	s.mux.Lock()
	defer s.mux.Unlock()

	now := time.Now().Unix()
	for {
		var e entry
		err := reader.Read(&e)
		if err == io.EOF {
			break
		}
		if err != nil {
			return
		}
		// Skip expired entries during load
		if e.Expires > 0 && e.Expires <= now {
			continue
		}
		s.db[e.Key] = e
	}
}

// flush writes all current data to the parquet file
func (s *Storage) flush() error {
	s.mux.RLock()
	entries := make([]entry, 0, len(s.db))
	now := time.Now().Unix()
	for _, e := range s.db {
		if e.Expires == 0 || e.Expires > now {
			entries = append(entries, e)
		}
	}
	s.mux.RUnlock()

	if err := parquet.WriteFile(s.path, entries); err != nil {
		return err
	}
	return nil
}

// gc runs the garbage collector
func (s *Storage) gc() {
	ticker := time.NewTicker(s.gcInterval)
	defer ticker.Stop()

	for {
		select {
		case <-s.done:
			return
		case <-ticker.C:
			now := time.Now().Unix()
			var expired []string

			s.mux.RLock()
			for key, e := range s.db {
				if e.Expires > 0 && e.Expires <= now {
					expired = append(expired, key)
				}
			}
			s.mux.RUnlock()

			if len(expired) > 0 {
				s.mux.Lock()
				for _, key := range expired {
					e, ok := s.db[key]
					if ok && e.Expires > 0 && e.Expires <= now {
						delete(s.db, key)
					}
				}
				s.mux.Unlock()

				_ = s.flush()
			}
		}
	}
}
