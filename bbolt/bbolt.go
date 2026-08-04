package bbolt

import (
	"bytes"
	"context"
	"errors"
	"sync"
	"time"

	"github.com/gofiber/utils/v2"
	"go.etcd.io/bbolt"
)

// ErrBucketNotFound is returned when the configured bucket is missing, which
// happens when it is dropped outside of this driver. It is exported so that
// callers can tell it apart with errors.Is.
var ErrBucketNotFound = errors.New("bbolt: bucket not found")

// Storage interface that is implemented by storage providers.
//
// Note: bbolt has no notion of key expiration, so the exp argument of Set is
// ignored and stored entries live until they are deleted or the storage is
// reset.
type Storage struct {
	conn    *bbolt.DB
	bucket  string
	closeMu sync.Mutex
	closed  bool
}

// New creates a new storage
func New(config ...Config) *Storage {
	// Set default config
	cfg := configDefault(config...)

	conn, err := bbolt.Open(cfg.Database, 0o666, &bbolt.Options{
		Timeout:  cfg.Timeout,
		ReadOnly: cfg.ReadOnly,
	})
	if err != nil {
		panic(err)
	}

	// Release the file, and with it the OS lock, rather than leaking both
	// when a later step fails.
	closeOwned := func() { _ = conn.Close() }

	// Reset bucket if field selected
	if cfg.Reset {
		if err := removeBucket(cfg, conn); err != nil {
			closeOwned()
			panic(err)
		}
	}

	// Create bucket if not exists
	if err := createBucket(cfg, conn); err != nil {
		closeOwned()
		panic(err)
	}

	return &Storage{
		conn:   conn,
		bucket: cfg.Bucket,
	}
}

// Get value by key
func (s *Storage) Get(key string) ([]byte, error) {
	if len(key) <= 0 {
		return nil, nil
	}

	var value []byte

	err := s.conn.View(func(tx *bbolt.Tx) error {
		b := tx.Bucket(utils.UnsafeBytes(s.bucket))
		if b == nil {
			return ErrBucketNotFound
		}

		// The slice returned by Get points into the memory-mapped file and is
		// only valid for the life of the transaction, so it has to be copied.
		v := b.Get(utils.UnsafeBytes(key))
		if v == nil {
			return nil
		}
		value = bytes.Clone(v)

		return nil
	})
	if err != nil {
		return nil, err
	}

	return value, nil
}

// GetWithContext gets value by key, aborting if ctx is already done.
func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error) {
	if err := ctx.Err(); err != nil {
		return nil, err
	}
	return s.Get(key)
}

// Set key with value
func (s *Storage) Set(key string, value []byte, exp time.Duration) error {
	if len(key) <= 0 || len(value) <= 0 {
		return nil
	}

	return s.conn.Update(func(tx *bbolt.Tx) error {
		b := tx.Bucket(utils.UnsafeBytes(s.bucket))
		if b == nil {
			return ErrBucketNotFound
		}
		return b.Put(utils.UnsafeBytes(key), value)
	})
}

// SetWithContext sets key with value, aborting if ctx is already done.
func (s *Storage) SetWithContext(ctx context.Context, key string, value []byte, exp time.Duration) error {
	if err := ctx.Err(); err != nil {
		return err
	}
	return s.Set(key, value, exp)
}

// Delete entry by key
func (s *Storage) Delete(key string) error {
	if len(key) <= 0 {
		return nil
	}

	return s.conn.Update(func(tx *bbolt.Tx) error {
		b := tx.Bucket(utils.UnsafeBytes(s.bucket))
		if b == nil {
			return ErrBucketNotFound
		}
		return b.Delete(utils.UnsafeBytes(key))
	})
}

// DeleteWithContext deletes key by key, aborting if ctx is already done.
func (s *Storage) DeleteWithContext(ctx context.Context, key string) error {
	if err := ctx.Err(); err != nil {
		return err
	}
	return s.Delete(key)
}

// Reset all entries
func (s *Storage) Reset() error {
	return s.conn.Update(func(tx *bbolt.Tx) error {
		b := tx.Bucket(utils.UnsafeBytes(s.bucket))
		if b == nil {
			return ErrBucketNotFound
		}

		// Delete through the cursor, which bbolt supports while iterating.
		// Dropping and recreating the bucket would also reset its sequence
		// counter, which callers reach through Conn.
		c := b.Cursor()
		for k, _ := c.First(); k != nil; k, _ = c.Next() {
			if err := c.Delete(); err != nil {
				return err
			}
		}

		return nil
	})
}

// ResetWithContext resets all entries, aborting if ctx is already done.
func (s *Storage) ResetWithContext(ctx context.Context) error {
	if err := ctx.Err(); err != nil {
		return err
	}
	return s.Reset()
}

// Close the database. It is safe to call Close more than once: once the close has succeeded
// further calls do nothing, and a close that fails is reported so the
// caller can try again.
func (s *Storage) Close() error {
	s.closeMu.Lock()
	defer s.closeMu.Unlock()

	if s.closed {
		return nil
	}

	if err := s.conn.Close(); err != nil {
		return err
	}

	s.closed = true
	return nil
}

// Conn returns the database client
func (s *Storage) Conn() *bbolt.DB {
	return s.conn
}
