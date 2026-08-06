package redis

import (
	"context"
	"errors"
	"fmt"
	"sync"
	"sync/atomic"
	"time"

	"github.com/redis/go-redis/v9"
)

// ErrClosed is returned by every operation attempted after Close.
var ErrClosed = errors.New("redis: storage is closed")

// Storage interface that is implemented by storage providers
type Storage struct {
	db      redis.UniversalClient
	ownsDB  bool
	closeMu sync.Mutex

	// closed is atomic rather than mutex-guarded: go-redis is safe to use
	// concurrently with Close, so operations only need a stable error, not
	// exclusion from the teardown.
	closed atomic.Bool
}

// NewFromConnection creates a Storage from an existing Redis universal client.
// The client stays the caller's to close: Close stops using it but leaves it
// open, since the point is to share one client across an application.
func NewFromConnection(conn redis.UniversalClient) *Storage {
	return &Storage{
		db: conn,
	}
}

// New creates a new Redis storage instance using context.Background() for initialization.
func New(config ...Config) *Storage {
	return NewWithContext(context.Background(), config...)
}

// NewWithContext creates a new Redis storage instance, using ctx for the
// initialization operations (connection test and optional reset).
func NewWithContext(ctx context.Context, config ...Config) *Storage {
	// Set default config
	cfg := configDefault(config...)

	// Create new redis universal client
	var db redis.UniversalClient

	// Parse the URL and update config values accordingly
	if cfg.URL != "" {
		options, err := redis.ParseURL(cfg.URL)
		if err != nil {
			panic(err)
		}

		// Update the config values with the parsed URL values
		cfg.Username = options.Username
		cfg.Password = options.Password
		cfg.Database = options.DB
		cfg.Addrs = []string{options.Addr}

		// If cfg.TLSConfig is not provided, and options returns one, use it.
		if cfg.TLSConfig == nil && options.TLSConfig != nil {
			cfg.TLSConfig = options.TLSConfig
		}
	} else if len(cfg.Addrs) == 0 {
		// Fallback to Host and Port values if Addrs is empty
		cfg.Addrs = []string{fmt.Sprintf("%s:%d", cfg.Host, cfg.Port)}
	}

	// Create Universal Client
	db = redis.NewUniversalClient(&redis.UniversalOptions{
		Addrs:            cfg.Addrs,
		MasterName:       cfg.MasterName,
		ClientName:       cfg.ClientName,
		SentinelUsername: cfg.SentinelUsername,
		SentinelPassword: cfg.SentinelPassword,
		DB:               cfg.Database,
		Username:         cfg.Username,
		Password:         cfg.Password,
		TLSConfig:        cfg.TLSConfig,
		PoolSize:         cfg.PoolSize,
		IsClusterMode:    cfg.IsClusterMode,
	})

	// This client was opened here, so release it rather than leaking it when
	// initialization fails.
	closeOwned := func() { _ = db.Close() }

	// Test connection, unless the caller opted out of the check
	if !cfg.SkipConnectionCheck {
		if err := db.Ping(ctx).Err(); err != nil {
			closeOwned()
			panic(err)
		}
	}

	// Empty collection if Clear is true. Skipped when the connection check is,
	// because that option exists precisely so that New makes no network call:
	// flushing is one, and it would panic on the error that was opted out of.
	if cfg.Reset && !cfg.SkipConnectionCheck {
		if err := db.FlushDB(ctx).Err(); err != nil {
			closeOwned()
			panic(err)
		}
	}

	// Create new store
	return &Storage{
		db:     db,
		ownsDB: true,
	}
}

// GetWithContext retrieves the value associated with the given key using the provided context.
func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error) {
	if s.closed.Load() {
		return nil, ErrClosed
	}
	if len(key) <= 0 {
		return nil, nil
	}
	val, err := s.db.Get(ctx, key).Bytes()
	if err == redis.Nil {
		return nil, nil
	}
	return val, err
}

// Get value by key
func (s *Storage) Get(key string) ([]byte, error) {
	return s.GetWithContext(context.Background(), key)
}

// SetWithContext key with value with context
func (s *Storage) SetWithContext(ctx context.Context, key string, val []byte, exp time.Duration) error {
	if s.closed.Load() {
		return ErrClosed
	}
	if len(key) <= 0 || len(val) <= 0 {
		return nil
	}
	// go-redis reads a negative expiration as its KeepTTL sentinel, which
	// would carry over the previous expiration instead of clearing it.
	if exp < 0 {
		exp = 0
	}
	return s.db.Set(ctx, key, val, exp).Err()
}

// Set key with value
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	return s.SetWithContext(context.Background(), key, val, exp)
}

// DeleteWithContext key by key with context
func (s *Storage) DeleteWithContext(ctx context.Context, key string) error {
	if s.closed.Load() {
		return ErrClosed
	}
	if len(key) <= 0 {
		return nil
	}
	return s.db.Del(ctx, key).Err()
}

// Delete key by key
func (s *Storage) Delete(key string) error {
	return s.DeleteWithContext(context.Background(), key)
}

// ResetWithContext all keys with context
func (s *Storage) ResetWithContext(ctx context.Context) error {
	if s.closed.Load() {
		return ErrClosed
	}
	return s.db.FlushDB(ctx).Err()
}

// Reset all keys
func (s *Storage) Reset() error {
	return s.ResetWithContext(context.Background())
}

// Close the database, unless the client came from NewFromConnection, which
// leaves it open for the application. Safe to call more than once, and a failed
// close is reported. Either way later operations report ErrClosed.
func (s *Storage) Close() error {
	s.closeMu.Lock()
	defer s.closeMu.Unlock()

	if s.closed.Load() {
		return nil
	}

	// A borrowed client is not ours to close, but the storage still is.
	if !s.ownsDB {
		s.closed.Store(true)
		return nil
	}

	if err := s.db.Close(); err != nil {
		return err
	}

	s.closed.Store(true)
	return nil
}

// Return database client
func (s *Storage) Conn() redis.UniversalClient {
	return s.db
}

// Return all the keys
func (s *Storage) Keys() ([][]byte, error) {
	if s.closed.Load() {
		return nil, ErrClosed
	}

	ctx := context.Background()

	// A cluster holds its keyspace across shards, and Scan on the cluster
	// client only walks one of them, so every other shard's keys were left
	// out with nothing to say so.
	if cluster, ok := s.db.(*redis.ClusterClient); ok {
		var (
			mu   sync.Mutex
			keys [][]byte
		)

		err := cluster.ForEachMaster(ctx, func(ctx context.Context, shard *redis.Client) error {
			shardKeys, err := scanKeys(ctx, shard)
			if err != nil {
				return err
			}

			mu.Lock()
			defer mu.Unlock()
			keys = append(keys, shardKeys...)

			return nil
		})
		if err != nil {
			return nil, err
		}

		if len(keys) == 0 {
			return nil, nil
		}

		return keys, nil
	}

	keys, err := scanKeys(ctx, s.db)
	if err != nil {
		return nil, err
	}

	if len(keys) == 0 {
		return nil, nil
	}

	return keys, nil
}

// scanKeys walks one node's keyspace.
func scanKeys(ctx context.Context, client redis.Cmdable) ([][]byte, error) {
	var (
		keys   [][]byte
		cursor uint64
		err    error
	)

	for {
		var batch []string

		if batch, cursor, err = client.Scan(ctx, cursor, "*", 10).Result(); err != nil {
			return nil, err
		}

		for _, key := range batch {
			keys = append(keys, []byte(key))
		}

		if cursor == 0 {
			return keys, nil
		}
	}
}
