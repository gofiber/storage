package redis

import (
	"context"
	"errors"
	"fmt"
	"time"

	"github.com/go-redis/redis/v8"
)

// Storage interface that is implemented by storage providers
type Storage struct {
	db *redis.Client
}

// Common storage errors
var ErrNotExist = errors.New("key does not exist")

// New creates a new redis storage
func New(config ...Config) *Storage {
	// Set default config
	cfg := configDefault(config...)

	// Create new redis client
	db := redis.NewClient(&redis.Options{
		Addr:     fmt.Sprintf("%s:%d", cfg.Host, cfg.Port),
		DB:       cfg.Database,
		Username: cfg.Username,
		Password: cfg.Password,
	})

	// Test connection
	if err := db.Ping(context.Background()).Err(); err != nil {
		panic(err)
	}

	// Empty collection if Clear is true
	if cfg.Reset {
		if err := db.FlushDB(context.Background()).Err(); err != nil {
			panic(err)
		}
	}

	// Create new store
	return &Storage{
		db: db,
	}
}

// Get value by key
func (s *Storage) Get(key string) ([]byte, error) {
	val, err := s.db.Get(context.Background(), key).Bytes()
	if err == redis.Nil {
		return nil, ErrNotExist
	}
	return val, err
}

// Set key with value
// Set key with value
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	// Ain't Nobody Got Time For That
	if len(key) <= 0 || len(val) <= 0 {
		return nil
	}
	return s.db.Set(context.Background(), key, val, exp).Err()
}

// Delete key by key
func (s *Storage) Delete(key string) error {
	// Ain't Nobody Got Time For That
	if len(key) <= 0 {
		return nil
	}
	return s.db.Del(context.Background(), key).Err()
}

// Reset all keys
func (s *Storage) Reset() error {
	return s.db.FlushDB(context.Background()).Err()
}

// Close the database
func (s *Storage) Close() error {
	return s.db.Close()
}
