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
// All operations read from and write to the parquet file directly.
type Storage struct {
	mux        sync.RWMutex
	path       string
	gcInterval time.Duration
	done       chan struct{}
}

// New creates a new parquet storage
func New(config ...Config) *Storage {
	cfg := configDefault(config...)

	store := &Storage{
		path:       cfg.Path,
		gcInterval: cfg.GCInterval,
		done:       make(chan struct{}),
	}

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
	defer s.mux.RUnlock()

	entries, err := s.readEntries()
	if err != nil {
		return nil, err
	}

	v, ok := entries[key]
	if !ok {
		return nil, nil
	}
	if v.Expires > 0 && v.Expires <= time.Now().Unix() {
		return nil, nil
	}
	return v.Value, nil
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
	defer s.mux.Unlock()

	entries, err := s.readEntries()
	if err != nil {
		return err
	}

	entries[key] = e
	return s.writeEntries(entries)
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
	defer s.mux.Unlock()

	entries, err := s.readEntries()
	if err != nil {
		return err
	}

	delete(entries, key)
	return s.writeEntries(entries)
}

// DeleteWithContext deletes key with context
func (s *Storage) DeleteWithContext(_ context.Context, key string) error {
	return s.Delete(key)
}

// Reset all entries
func (s *Storage) Reset() error {
	s.mux.Lock()
	defer s.mux.Unlock()

	return s.writeEntries(make(map[string]entry))
}

// ResetWithContext resets all entries with context
func (s *Storage) ResetWithContext(_ context.Context) error {
	return s.Reset()
}

// Close the storage
func (s *Storage) Close() error {
	s.done <- struct{}{}
	return nil
}

// Conn reads all current entries from the parquet file and returns them.
func (s *Storage) Conn() map[string]entry {
	s.mux.RLock()
	defer s.mux.RUnlock()

	entries, err := s.readEntries()
	if err != nil {
		return make(map[string]entry)
	}
	return entries
}

// readEntries reads all non-expired entries from the parquet file into a map.
// The caller must hold s.mux (read or write).
func (s *Storage) readEntries() (map[string]entry, error) {
	f, err := os.Open(s.path)
	if err != nil {
		if os.IsNotExist(err) {
			return make(map[string]entry), nil
		}
		return nil, err
	}
	defer f.Close()

	info, err := f.Stat()
	if err != nil {
		return nil, err
	}
	if info.Size() == 0 {
		return make(map[string]entry), nil
	}

	reader := parquet.NewReader(f)
	defer reader.Close()

	entries := make(map[string]entry)
	now := time.Now().Unix()
	for {
		var e entry
		err := reader.Read(&e)
		if err == io.EOF {
			break
		}
		if err != nil {
			return nil, err
		}
		// Skip expired entries
		if e.Expires > 0 && e.Expires <= now {
			continue
		}
		entries[e.Key] = e
	}
	return entries, nil
}

// writeEntries writes all entries to the parquet file. If entries is empty the
// file is removed so that a subsequent readEntries returns an empty map.
// The caller must hold s.mux for writing.
func (s *Storage) writeEntries(entries map[string]entry) error {
	rows := make([]entry, 0, len(entries))
	for _, e := range entries {
		rows = append(rows, e)
	}

	if len(rows) == 0 {
		if err := os.Remove(s.path); err != nil && !os.IsNotExist(err) {
			return err
		}
		return nil
	}

	return parquet.WriteFile(s.path, rows)
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
			s.mux.Lock()
			entries, err := s.readEntries()
			if err != nil {
				s.mux.Unlock()
				continue
			}

			now := time.Now().Unix()
			changed := false
			for key, e := range entries {
				if e.Expires > 0 && e.Expires <= now {
					delete(entries, key)
					changed = true
				}
			}

			if changed {
				_ = s.writeEntries(entries)
			}
			s.mux.Unlock()
		}
	}
}
