package redis

import (
	"context"
	"errors"
	"fmt"
	"log"
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
	closed  atomic.Bool
}

// NewFromConnection builds a Storage on an existing client, which stays the caller's to close,
// using context.Background() for the initialization operations.
func NewFromConnection(conn redis.UniversalClient, config ...Config) *Storage {
	return NewFromConnectionWithContext(context.Background(), conn, config...)
}

// NewFromConnectionWithContext builds a Storage on an existing client, which stays the caller's
// to close, using ctx for the initialization operations (optional reset). Only Reset is read
// from the config; the connection settings come from the client. Reset flushes every database
// the client's nodes hold, not just this storage's keys.
func NewFromConnectionWithContext(ctx context.Context, conn redis.UniversalClient, config ...Config) *Storage {
	if conn == nil {
		panic("redis: nil client")
	}

	if cfg := configDefault(config...); cfg.Reset {
		err := forEachNode(ctx, conn, func(ctx context.Context, node redis.Cmdable) error {
			return node.FlushDB(ctx).Err()
		})
		if err != nil {
			panic(err)
		}
	}

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

	closeOwned := func() { _ = db.Close() }

	if !cfg.SkipConnectionCheck {
		if err := db.Ping(ctx).Err(); err != nil {
			closeOwned()
			panic(err)
		}
	}

	// Reset is skipped alongside the connection check, which exists so New makes no network call, but logged rather than dropped in silence.
	switch {
	case cfg.Reset && cfg.SkipConnectionCheck:
		log.Println("redis: Reset skipped because SkipConnectionCheck is set; call Reset() once the storage is up to clear the database")
	case cfg.Reset:
		err := forEachNode(ctx, db, func(ctx context.Context, node redis.Cmdable) error {
			return node.FlushDB(ctx).Err()
		})
		if err != nil {
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
	// go-redis reads a negative expiration as KeepTTL, carrying the previous one over instead of clearing it.
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

	return s.forEachNode(ctx, func(ctx context.Context, node redis.Cmdable) error {
		return node.FlushDB(ctx).Err()
	})
}

// Reset all keys
func (s *Storage) Reset() error {
	return s.ResetWithContext(context.Background())
}

// Close the database unless the client came from NewFromConnection; later operations report ErrClosed either way.
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

	// Latched even on failure: the client's pools are already closed, so leaving the storage open would let later operations reach them instead of reporting ErrClosed.
	err := s.db.Close()
	s.closed.Store(true)

	return err
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

	var (
		mu   sync.Mutex
		keys [][]byte
	)

	err := s.forEachNode(context.Background(), func(ctx context.Context, node redis.Cmdable) error {
		nodeKeys, err := scanKeys(ctx, node)
		if err != nil {
			return err
		}

		mu.Lock()
		defer mu.Unlock()
		keys = append(keys, nodeKeys...)

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

func (s *Storage) forEachNode(ctx context.Context, fn func(context.Context, redis.Cmdable) error) error {
	return forEachNode(ctx, s.db, fn)
}

// forEachNode runs fn against every master, since a cluster client scans one keyspace and sends a keyless command such as FLUSHDB to a single shard.
func forEachNode(ctx context.Context, db redis.UniversalClient, fn func(context.Context, redis.Cmdable) error) error {
	if cluster, ok := db.(*redis.ClusterClient); ok {
		return cluster.ForEachMaster(ctx, func(ctx context.Context, shard *redis.Client) error {
			return fn(ctx, shard)
		})
	}

	return fn(ctx, db)
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
