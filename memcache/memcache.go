package memcache

import (
	"errors"
	"strings"
	"sync"
	"time"

	mc "github.com/bradfitz/gomemcache/memcache"
	"github.com/gofiber/utils"
)

// Storage interface that is implemented by storage providers
type Storage struct {
	db    *mc.Client
	items *sync.Pool
}

// Common storage errors
var ErrNotExist = errors.New("key does not exist")

// New creates a new storage
func New(config ...Config) *Storage {
	// Set default config
	cfg := configDefault(config...)

	// Split comma separated servers into slice
	serverList := strings.Split(utils.Trim(cfg.Servers, ' '), ",")

	// Create db
	db := mc.New(serverList...)

	// Set options
	db.Timeout = cfg.timeout
	db.MaxIdleConns = cfg.maxIdleConns

	// Ping database to ensure a connection has been made
	if err := db.Ping(); err != nil {
		panic(err)
	}

	if cfg.Clear {
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
	item, err := s.db.Get(key)
	if err == mc.ErrCacheMiss {
		return nil, nil
	} else if err != nil {
		return nil, err
	}

	return item.Value, nil
}

// Set key with value
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
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
	return s.db.Delete(key)
}

// Clear all keys
func (s *Storage) Clear() error {
	return s.db.DeleteAll()
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
