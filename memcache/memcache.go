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

	if cfg.Reset {
		if err := db.DeleteAll(); err != nil {
			panic(err)
		}
	}

	// Create storage
	store := &Storage{
		db: db,
		items: &sync.Pool{
			New: func() interface{} {
				return new(mc.Item)
			},
		},
	}

	return store
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

// GetWithContext gets value by key (dummy context support)
func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error) {
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

// memcachedRelativeExpirationLimit is the largest relative expiration
// memcached accepts, 30 days. Anything above it is read as an absolute Unix
// timestamp instead.
const memcachedRelativeExpirationLimit = 60 * 60 * 24 * 30

// expiration converts exp to the value memcached expects: 0 for no
// expiration, whole seconds rounded up below the 30 day limit, and an
// absolute Unix timestamp above it, clamped to what a 32 bit field can hold.
func expiration(exp time.Duration) int32 {
	if exp <= 0 {
		return 0
	}

	secs := int64(exp / time.Second)
	if exp%time.Second != 0 {
		// Round up, truncating would turn a sub-second expiration into no
		// expiration at all.
		secs++
	}

	if secs > memcachedRelativeExpirationLimit {
		unix := time.Now().Add(exp).Unix()
		if unix > math.MaxInt32 {
			// The expiration field is 32 bit, this is the furthest point in
			// the future memcached can express.
			return math.MaxInt32
		}
		return int32(unix)
	}

	return int32(secs)
}

// SetWithContext sets key with value (dummy context support)
func (s *Storage) SetWithContext(ctx context.Context, key string, val []byte, exp time.Duration) error {
	return s.Set(key, val, exp)
}

// Delete key by key
func (s *Storage) Delete(key string) error {
	if len(key) <= 0 {
		return nil
	}
	return s.db.Delete(key)
}

// DeleteWithContext deletes key by key (dummy context support)
func (s *Storage) DeleteWithContext(ctx context.Context, key string) error {
	return s.Delete(key)
}

// Reset all keys
func (s *Storage) Reset() error {
	return s.db.DeleteAll()
}

// ResetWithContext resets all keys (dummy context support)
func (s *Storage) ResetWithContext(ctx context.Context) error {
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
