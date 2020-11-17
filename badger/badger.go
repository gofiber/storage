package badger

import (
	"errors"
	"time"

	"github.com/dgraph-io/badger"
	"github.com/gofiber/utils"
)

// Storage interface that is implemented by storage providers
type Storage struct {
	db         *badger.DB
	gcInterval time.Duration
	done       chan struct{}
}


// ErrNotFound means that a get call did not find the requested key.
var ErrNotFound = errors.New("key not found")

// New creates a new memory storage
func New(config ...Config) *Storage {
	// Set default config
	cfg := configDefault(config...)

	// Set options
	opt := badger.DefaultOptions(cfg.Database).WithTruncate(true).WithLogger(nil)

	// Open database
	db, err := badger.Open(opt)
	if err != nil {
		panic(err)
	}

	if cfg.Reset {
		if err := db.DropAll(); err != nil {
			panic(err)
		}
	}

	// Create storage
	store := &Storage{
		db:         db,
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
		return nil, ErrNotFound
	}
	var data []byte
	err := s.db.View(func(txn *badger.Txn) error {
		item, err := txn.Get([]byte(key))
		if err != nil {
			return err
		}
		// item.Value() is only valid within the transaction.
		// We can either copy it ourselves or use the ValueCopy() method.
		// TODO: Benchmark if it's faster to copy + close tx,
		// or to keep the tx open until unmarshalling is done.
		data, err = item.ValueCopy(nil)
		return err
	})
	// If no value was found return false
	if err == badger.ErrKeyNotFound {
		return data, ErrNotFound
	}
	return data, err
}

// Set key with value
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	// Ain't Nobody Got Time For That
	if len(key) <= 0 || len(val) <= 0 {
		return nil
	}

	entry := badger.NewEntry(utils.UnsafeBytes(key), val)
	if exp != 0 {
		entry.WithTTL(exp)
	}
	return s.db.Update(func(tx *badger.Txn) error {
		return tx.SetEntry(entry)
	})
}

// Delete key by key
func (s *Storage) Delete(key string) error {
	// Ain't Nobody Got Time For That
	if len(key) <= 0 {
		return nil
	}
	return s.db.Update(func(tx *badger.Txn) error {
		return tx.Delete(utils.UnsafeBytes(key))
	})
}

// Reset all keys
func (s *Storage) Reset() error {
	return s.db.DropAll()
}

// Close the memory storage
func (s *Storage) Close() error {
	s.done <- struct{}{}
	return s.db.Close()
}

func (s *Storage) gc() {
	ticker := time.NewTicker(s.gcInterval)
	defer ticker.Stop()

	for {
		select {
		case <-s.done:
			return
		case <-ticker.C:
			_ = s.db.RunValueLogGC(0.7)
		}
	}
}
