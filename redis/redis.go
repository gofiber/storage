package redis

import (
	"context"
	"time"

	"github.com/go-redis/redis/v8"
)

// Storage interface that is implemented by storage providers
type Storage struct {
	db *redis.Client
}

// New creates a new redis storage
func New(config ...Config) Storage {
	// Set default config
	cfg := ConfigDefault

	// Override config if provided
	if len(config) > 0 {
		cfg = configDefault(config[0])

	}

	// Create new redis client
	db := redis.NewClient(&redis.Options{
		Network:            cfg.Network,
		Addr:               cfg.Addr,
		Password:           cfg.Password,
		DB:                 cfg.DB,
		MaxRetries:         cfg.MaxRetries,
		MinRetryBackoff:    cfg.MinRetryBackoff,
		MaxRetryBackoff:    cfg.MaxRetryBackoff,
		DialTimeout:        cfg.DialTimeout,
		ReadTimeout:        cfg.ReadTimeout,
		WriteTimeout:       cfg.WriteTimeout,
		PoolSize:           cfg.PoolSize,
		MinIdleConns:       cfg.MinIdleConns,
		MaxConnAge:         cfg.MaxConnAge,
		PoolTimeout:        cfg.PoolTimeout,
		IdleTimeout:        cfg.IdleTimeout,
		IdleCheckFrequency: cfg.IdleCheckFrequency,
		TLSConfig:          cfg.TLSConfig,
		Limiter:            cfg.Limiter,
	})

	// Test connection
	if err := db.Ping(context.Background()).Err(); err != nil {
		panic(err)
	}
	// Create new store
	return Storage{
		db: db,
	}
}

// Get value by key
func (store Storage) Get(key string) ([]byte, error) {
	val, err := store.db.Get(context.Background(), key).Bytes()
	if err != nil {
		if err != redis.Nil {
			return nil, err
		}
		return nil, nil
	}
	return val, nil
}

// Set key with value
func (store Storage) Set(key string, val []byte, exp time.Duration) error {
	return store.db.Set(context.Background(), key, val, exp).Err()
}

// Delete key by key
func (store Storage) Delete(key string) error {
	return store.db.Del(context.Background(), key).Err()
}

// Clear all keys
func (store Storage) Clear() error {
	return store.db.FlushDB(context.Background()).Err()
}
