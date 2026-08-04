package bbolt

import (
	"context"
	"errors"
	"time"

	"github.com/gofiber/utils/v2"
	"go.etcd.io/bbolt"
)

// errBucketNotFound is returned when the configured bucket is missing, which
// happens when it is dropped outside of this driver.
var errBucketNotFound = errors.New("bbolt: bucket not found")

// Storage interface that is implemented by storage providers.
//
// Note: bbolt has no notion of key expiration, so the exp argument of Set is
// ignored and stored entries live until they are deleted or the storage is
// reset.
type Storage struct {
	conn   *bbolt.DB
	bucket string
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

	// Reset bucket if field selected
	if cfg.Reset {
		if err := removeBucket(cfg, conn); err != nil {
			panic(err)
		}
	}

	// Create bucket if not exists
	if err := createBucket(cfg, conn); err != nil {
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
			return errBucketNotFound
		}

		// The slice returned by Get points into the memory-mapped file and is
		// only valid for the life of the transaction, so it has to be copied.
		v := b.Get(utils.UnsafeBytes(key))
		if v == nil {
			return nil
		}
		value = make([]byte, len(v))
		copy(value, v)

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
			return errBucketNotFound
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
			return errBucketNotFound
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
		bucket := utils.UnsafeBytes(s.bucket)
		if tx.Bucket(bucket) == nil {
			return errBucketNotFound
		}

		// Recreating the bucket is both cheaper and safer than deleting keys
		// while iterating over the same bucket.
		if err := tx.DeleteBucket(bucket); err != nil {
			return err
		}
		_, err := tx.CreateBucket(bucket)
		return err
	})
}

// ResetWithContext resets all entries, aborting if ctx is already done.
func (s *Storage) ResetWithContext(ctx context.Context) error {
	if err := ctx.Err(); err != nil {
		return err
	}
	return s.Reset()
}

// Close the database
func (s *Storage) Close() error {
	return s.conn.Close()
}

// Conn returns the database client
func (s *Storage) Conn() *bbolt.DB {
	return s.conn
}
