package badger

import (
	"context"
	"errors"
	"sync"
	"time"

	"github.com/dgraph-io/badger/v3"
	"github.com/gofiber/utils/v2"
)

// Storage interface that is implemented by storage providers
type Storage struct {
	db         *badger.DB
	gcInterval time.Duration
	done       chan struct{}
	stopped    chan struct{}
	stopOnce   sync.Once
	closeMu    sync.Mutex
	closed     bool
}

// New creates a new memory storage
func New(config ...Config) *Storage {
	// Set default config
	cfg := configDefault(config...)

	// Set options
	opt := cfg.BadgerOptions

	// Open database
	db, err := badger.Open(opt)
	if err != nil {
		panic(err)
	}

	if cfg.Reset {
		if err := db.DropAll(); err != nil {
			// Release the database, and with it the directory lock, rather than leaking both on the way out.
			_ = db.Close()
			panic(err)
		}
	}

	// Create storage
	store := &Storage{
		db:         db,
		gcInterval: cfg.GCInterval,
		done:       make(chan struct{}),
		stopped:    make(chan struct{}),
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
	if errors.Is(err, badger.ErrKeyNotFound) {
		return nil, nil
	}
	if err != nil {
		return nil, err
	}
	return data, nil
}

// GetWithContext gets value by key, aborting if ctx is already done.
func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error) {
	if err := ctx.Err(); err != nil {
		return nil, err
	}
	return s.Get(key)
}

// Set key with value
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	// Ain't Nobody Got Time For That
	if len(key) <= 0 || len(val) <= 0 {
		return nil
	}

	entry := badger.NewEntry(utils.UnsafeBytes(key), val)
	if exp > 0 {
		// WithTTL truncates the deadline to a whole second, so set the rounded up one instead.
		deadline := time.Now().Add(exp)
		secs := deadline.Unix()
		if deadline.Nanosecond() != 0 {
			secs++
		}
		entry.ExpiresAt = uint64(secs) //nolint:gosec // a deadline is never negative
	}
	return s.db.Update(func(tx *badger.Txn) error {
		return tx.SetEntry(entry)
	})
}

// SetWithContext sets key with value, aborting if ctx is already done.
func (s *Storage) SetWithContext(ctx context.Context, key string, val []byte, exp time.Duration) error {
	if err := ctx.Err(); err != nil {
		return err
	}
	return s.Set(key, val, exp)
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

// DeleteWithContext deletes key by key, aborting if ctx is already done.
func (s *Storage) DeleteWithContext(ctx context.Context, key string) error {
	if err := ctx.Err(); err != nil {
		return err
	}
	return s.Delete(key)
}

// Reset all keys
func (s *Storage) Reset() error {
	return s.db.DropAll()
}

// ResetWithContext resets all keys, aborting if ctx is already done.
func (s *Storage) ResetWithContext(ctx context.Context) error {
	if err := ctx.Err(); err != nil {
		return err
	}
	return s.Reset()
}

// Close the database once, waiting for the collector: RunValueLogGC takes no context, so a sweep runs to completion.
// Safe to call more than once; a failed close is reported once.
func (s *Storage) Close() error {
	s.stopOnce.Do(func() {
		close(s.done)
		<-s.stopped
	})

	s.closeMu.Lock()
	defer s.closeMu.Unlock()

	if s.closed {
		return nil
	}

	// Latched even on failure: Badger's own sync.Once already tore the database down, so a retry would report a success that never happened.
	err := s.db.Close()
	s.closed = true

	return err
}

func (s *Storage) gc() {
	defer close(s.stopped)

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

// Return database client
func (s *Storage) Conn() *badger.DB {
	return s.db
}
