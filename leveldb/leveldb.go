package leveldb

import (
	"encoding/json"
	"time"

	"github.com/syndtr/goleveldb/leveldb"
)

// data structure for storing items in the database
type item struct {
	Value    []byte    `json:"value"`
	ExpireAt time.Time `json:"expire_at"`
}

// Storage interface that is implemented by storage providers
type Storage struct {
	db         *leveldb.DB
	gcInterval time.Duration
	done       chan struct{}
}

// New creates a new memory storage
func New(config ...Config) *Storage {
	cfg := configDefault(config...)

	db, err := leveldb.OpenFile(cfg.Path, nil)
	if err != nil {
		panic(err)
	}

	store := &Storage{
		db:         db,
		gcInterval: cfg.GCInterval,
		done:       make(chan struct{}),
	}

	go store.gc()

	return store
}

// Get value by key
func (s *Storage) Get(key []byte) ([]byte, error) {
	if len(key) <= 0 {
		return nil, nil
	}

	data, err := s.db.Get(key, nil)
	if err != nil {
		return nil, nil
	}

	var stored item
	if err := json.Unmarshal(data, &stored); err != nil {
		return data, nil
	}

	if !stored.ExpireAt.IsZero() && time.Now().After(stored.ExpireAt) {
		if err := s.Delete(string(key)); err != nil {
			return nil, err
		}
		return nil, nil
	}

	return stored.Value, nil
}

// Set key with value
func (s *Storage) Set(key, value []byte, exp time.Duration) error {
	if len(key) <= 0 || len(value) <= 0 {
		return nil
	}
	if exp == 0 {
		return s.db.Put(key, value, nil)
	}

	data := item{
		Value:    value,
		ExpireAt: time.Now().Add(exp),
	}

	encoded, err := json.Marshal(data)
	if err != nil {
		return err
	}
	return s.db.Put(key, encoded, nil)
}

// Delete key by key
func (s *Storage) Delete(key string) error {
	if len(key) <= 0 {
		return nil
	}

	return s.db.Delete([]byte(key), nil)
}

// Reset all keys
func (s *Storage) Reset() error {
	iter := s.db.NewIterator(nil, nil)
	defer iter.Release()

	for iter.Next() {
		key := iter.Key()
		if err := s.db.Delete(key, nil); err != nil {
			return err
		}
	}

	return iter.Error()
}

// Close the memory storage
func (s *Storage) Close() error {
	s.done <- struct{}{} // GC stop
	close(s.done)
	return s.db.Close()
}

// Return database client
func (s *Storage) Conn() *leveldb.DB {
	return s.db
}

// gc is a helper function to clean up expired keys
func (s *Storage) gc() {
	ticker := time.NewTicker(s.gcInterval)
	defer ticker.Stop()

	for {
		select {
		case <-s.done:
			return
		case <-ticker.C:
			iter := s.db.NewIterator(nil, nil)
			batch := new(leveldb.Batch)

			for iter.Next() {
				key := iter.Key()
				data := iter.Value()

				var stored item
				if err := json.Unmarshal(data, &stored); err != nil {
					continue
				}
				if !stored.ExpireAt.IsZero() && time.Now().After(stored.ExpireAt) {
					batch.Delete(key)
				}
			}

			iter.Release()

			if batch.Len() > 0 {
				_ = s.db.Write(batch, nil)
			}
		}
	}
}
