package bbolt

import (
	"context"
	"time"

	"github.com/gofiber/utils/v2"
	"go.etcd.io/bbolt"
)

// Storage interface that is implemented by storage providers
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
		value = b.Get(utils.UnsafeBytes(key))

		return nil
	})

	return value, err
}

// GetWithContext gets value by key (dummy context support)
func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error) {
	return s.Get(key)
}

// Set key with value
func (s *Storage) Set(key string, value []byte, exp time.Duration) error {
	if len(key) <= 0 || len(value) <= 0 {
		return nil
	}

	return s.conn.Update(func(tx *bbolt.Tx) error {
		b := tx.Bucket(utils.UnsafeBytes(s.bucket))
		return b.Put(utils.UnsafeBytes(key), value)
	})
}

// SetWithContext sets key with value (dummy context support)
func (s *Storage) SetWithContext(ctx context.Context, key string, value []byte, exp time.Duration) error {
	return s.Set(key, value, exp)
}

// Delete entry by key
func (s *Storage) Delete(key string) error {
	if len(key) <= 0 {
		return nil
	}

	return s.conn.Update(func(tx *bbolt.Tx) error {
		b := tx.Bucket(utils.UnsafeBytes(s.bucket))
		return b.Delete(utils.UnsafeBytes(key))
	})
}

// DeleteWithContext deletes key by key (dummy context support)
func (s *Storage) DeleteWithContext(ctx context.Context, key string) error {
	return s.Delete(key)
}

// Reset all entries
func (s *Storage) Reset() error {
	return s.conn.Update(func(tx *bbolt.Tx) error {
		b := tx.Bucket(utils.UnsafeBytes(s.bucket))
		return b.ForEach(func(k, _ []byte) error {
			return b.Delete(k)
		})
	})
}

// ResetWithContext resets all entries (dummy context support)
func (s *Storage) ResetWithContext(ctx context.Context) error {
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
