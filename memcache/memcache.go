package memcache

import (
	"context"
	"math"
	"strings"
	"sync"
	"time"

	mc "github.com/bradfitz/gomemcache/memcache"
)

// Storage interface that is implemented by storage providers
type Storage struct {
	db    *mc.Client
	items *sync.Pool
}

// New creates a new storage
func New(config ...Config) *Storage {
	// Set default config
	cfg := configDefault(config...)

	// Split comma separated servers into slice
	serverList := strings.Split(strings.TrimSpace(cfg.Servers), ",")

	// Create db
	db := mc.New(serverList...)

	// Set options
	db.Timeout = cfg.timeout
	db.MaxIdleConns = cfg.maxIdleConns

	// Ping database to ensure a connection has been made
	if err := db.Ping(); err != nil {
		panic(err)
	}

	return newStorage(db, cfg)
}

// NewFromConnection builds a Storage on an existing client, which stays the caller's to manage.
// Only Reset is read from the config; connection settings stay with the caller's client. Reset
// flushes every entry on the servers the client points at, not just this storage's keys.
func NewFromConnection(db *mc.Client, config ...Config) *Storage {
	if db == nil {
		panic("memcache: nil client")
	}

	return newStorage(db, configDefault(config...))
}

func newStorage(db *mc.Client, cfg Config) *Storage {
	if cfg.Reset {
		if err := db.DeleteAll(); err != nil {
			panic(err)
		}
	}

	return &Storage{
		db: db,
		items: &sync.Pool{
			New: func() interface{} {
				return new(mc.Item)
			},
		},
	}
}

// Get value by key
func (s *Storage) Get(key string) ([]byte, error) {
	if len(key) <= 0 {
		return nil, nil
	}
	item, err := s.db.Get(key)
	if err == mc.ErrCacheMiss {
		return nil, nil
	} else if err != nil {
		return nil, err
	}

	return item.Value, nil
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
	if len(key) <= 0 || len(val) <= 0 {
		return nil
	}
	item := s.acquireItem()
	item.Key = key
	item.Value = val
	item.Expiration = expiration(exp)

	err := s.db.Set(item)

	s.releaseItem(item)

	return err
}

// memcachedRelativeExpirationLimit is memcached's 30 day cutoff, above which a value is an absolute stamp.
const memcachedRelativeExpirationLimit = 60 * 60 * 24 * 30

// expiration converts exp to what memcached expects: 0, rounded seconds below the limit, or a clamped Unix stamp above it.
func expiration(exp time.Duration) int32 {
	if exp <= 0 {
		return 0
	}

	secs := int64(exp / time.Second)
	if exp%time.Second != 0 {
		// Round up, since truncating would turn a sub-second expiration into no expiration at all.
		secs++
	}

	if secs > memcachedRelativeExpirationLimit {
		// Derive the stamp from the rounded seconds, not from exp, so the round-up is not undone.
		// The field is 32 bit, so MaxInt32 is the furthest future memcached can express.
		unix := time.Now().Unix() + secs
		return int32(min(unix, math.MaxInt32)) //nolint:gosec // clamped to the int32 range above
	}

	return int32(secs)
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
	if len(key) <= 0 {
		return nil
	}
	return s.db.Delete(key)
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
	return s.db.DeleteAll()
}

// ResetWithContext resets all keys, aborting if ctx is already done.
func (s *Storage) ResetWithContext(ctx context.Context) error {
	if err := ctx.Err(); err != nil {
		return err
	}
	return s.Reset()
}

// Close the database
func (s *Storage) Close() error {
	return nil
}

// Acquire item from pool
func (s *Storage) acquireItem() *mc.Item {
	return s.items.Get().(*mc.Item)
}

// Release item back to pool
func (s *Storage) releaseItem(item *mc.Item) {
	if item != nil {
		item.Key = ""
		item.Value = nil
		item.Expiration = 0

		s.items.Put(item)
	}
}

// Return database client
func (s *Storage) Conn() *mc.Client {
	return s.db
}
