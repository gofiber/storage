package memcache

import (
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

// Set key with value
// Set key with value
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	// Ain't Nobody Got Time For That
	if len(key) <= 0 || len(val) <= 0 {
		return nil
	}
	item := s.acquireItem()
	item.Key = key
	item.Value = val
	item.Expiration = int32(exp.Seconds())

	err := s.db.Set(item)

	s.releaseItem(item)

	return err
}

// Delete key by key
func (s *Storage) Delete(key string) error {
	// Ain't Nobody Got Time For That
	if len(key) <= 0 {
		return nil
	}
	return s.db.Delete(key)
}

// Reset all keys
func (s *Storage) Reset() error {
	return s.db.DeleteAll()
}

// Close the database
func (s *Storage) Close() error {
	return nil
}

// Acquire item from pool
func (s *Storage) acquireItem() *mc.Item {
	return s.items.Get().(*mc.Item)
}

// Release item from pool
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
