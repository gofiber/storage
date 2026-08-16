package bbolt

import (
	"context"
	"errors"
	"sync"
	"time"

	"github.com/gofiber/utils/v2"
	"go.etcd.io/bbolt"
)

// ErrBucketNotFound is returned when the bucket is missing, having been dropped outside this driver.
var ErrBucketNotFound = errors.New("bbolt: bucket not found")

// ErrReadOnly is returned by every write attempted on a storage opened with Config.ReadOnly.
var ErrReadOnly = errors.New("bbolt: storage is read-only")

// Storage interface that is implemented by storage providers. bbolt has no expiration, so Set ignores exp.
type Storage struct {
	conn     *bbolt.DB
	bucket   string
	readOnly bool
	closeMu  sync.Mutex
	closed   bool
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

	// Release the file, and with it the OS lock, rather than leaking both when a later step fails.
	closeOwned := func() { _ = conn.Close() }

	// A read-only database cannot open a write transaction, so New panicked; check the bucket instead.
	if cfg.ReadOnly {
		// Resetting means writing, so the two options contradict each other rather than one being ignored.
		if cfg.Reset {
			closeOwned()
			panic(errors.New("bbolt: Reset cannot be used with ReadOnly"))
		}

		if err := checkBucket(cfg, conn); err != nil {
			closeOwned()
			panic(err)
		}

		return &Storage{
			conn:     conn,
			bucket:   cfg.Bucket,
			readOnly: true,
		}
	}

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

		// Get points into the memory-mapped file and is valid only for the transaction, so copy it.
		v := b.Get(utils.UnsafeBytes(key))
		if v == nil {
			return nil
		}
		value = cloneBytes(v)

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

	if s.readOnly {
		return ErrReadOnly
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

	if s.readOnly {
		return ErrReadOnly
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
	if s.readOnly {
		return ErrReadOnly
	}

	return s.conn.Update(func(tx *bbolt.Tx) error {
		b := tx.Bucket(utils.UnsafeBytes(s.bucket))
		if b == nil {
			return ErrBucketNotFound
		}

		// Delete through the cursor: dropping the bucket would also reset the sequence counter callers reach through Conn.
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

// Close the database. Safe to call more than once; a failed close is reported once.
func (s *Storage) Close() error {
	s.closeMu.Lock()
	defer s.closeMu.Unlock()

	if s.closed {
		return nil
	}

	// Latched even on failure: bbolt clears its opened flag first, so a retry would report a success that never happened.
	err := s.conn.Close()
	s.closed = true

	return err
}

// Conn returns the database client
func (s *Storage) Conn() *bbolt.DB {
	return s.conn
}

// cloneBytes returns a copy of b sized exactly to it. bytes.Clone appends to an
// empty slice, so growslice rounds the capacity up to the next size class.
func cloneBytes(b []byte) []byte {
	if b == nil {
		return nil
	}
	c := make([]byte, len(b))
	copy(c, b)
	return c
}
