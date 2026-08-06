package rueidis

import (
	"context"
	"errors"
	"sync"
	"sync/atomic"
	"time"

	"github.com/redis/rueidis"
)

// ErrClosed is returned by every operation attempted after Close.
var ErrClosed = errors.New("rueidis: storage is closed")

// Storage interface that is implemented by storage providers
type Storage struct {
	db        rueidis.Client
	closeOnce sync.Once

	// closed is atomic rather than guarded by a mutex: the client is safe to
	// use concurrently with Close, so operations only need to see a stable
	// error, not to be held off while it is torn down.
	closed atomic.Bool

	// cacheTTL is per storage: as a package-level variable every instance
	// overwrote it for all the others, and did so racily.
	cacheTTL time.Duration
}

// New creates a new rueidis storage using context.Background() for initialization.
func New(config ...Config) *Storage {
	return NewWithContext(context.Background(), config...)
}

// NewWithContext creates a new rueidis storage, using ctx for the initialization
// operations (connection test and optional reset).
func NewWithContext(ctx context.Context, config ...Config) *Storage {
	// Set default config
	cfg := configDefault(config...)

	// Create new rueidis client
	var db rueidis.Client

	// Parse the URL and update config values accordingly
	if cfg.URL != "" {
		// This will panic if parsing URL fails
		options := rueidis.MustParseURL(cfg.URL)

		// Update the config values with the parsed URL values
		cfg.InitAddress = options.InitAddress
		cfg.Username = options.Username
		cfg.Password = options.Password
		cfg.SelectDB = options.SelectDB

		// Update ClientName if returned
		if cfg.ClientName == "" && options.ClientName != "" {
			cfg.ClientName = options.ClientName
		}

		// Update TLSConfig if returned
		if cfg.TLSConfig == nil && options.TLSConfig != nil {
			cfg.TLSConfig = options.TLSConfig
		}
	}

	// Update config values accordingly and start new Client
	db, err := rueidis.NewClient(rueidis.ClientOption{
		Username:            cfg.Username,
		Password:            cfg.Password,
		ClientName:          cfg.ClientName,
		SelectDB:            cfg.SelectDB,
		InitAddress:         cfg.InitAddress,
		TLSConfig:           cfg.TLSConfig,
		CacheSizeEachConn:   cfg.CacheSizeEachConn,
		RingScaleEachConn:   cfg.RingScaleEachConn,
		ReadBufferEachConn:  cfg.ReadBufferEachConn,
		WriteBufferEachConn: cfg.WriteBufferEachConn,
		BlockingPoolSize:    cfg.BlockingPoolSize,
		PipelineMultiplex:   cfg.PipelineMultiplex,
		DisableRetry:        cfg.DisableRetry,
		DisableCache:        cfg.DisableCache,
		AlwaysPipelining:    cfg.AlwaysPipelining,
	})
	if err != nil {
		panic(err)
	}

	// Release the client opened above rather than leaking it when a later
	// step fails.
	closeOwned := func() { db.Close() }

	// Test connection
	if err := db.Do(ctx, db.B().Ping().Build()).Error(); err != nil {
		closeOwned()
		panic(err)
	}

	// Empty collection if Clear is true
	if cfg.Reset {
		if err := db.Do(ctx, db.B().Flushdb().Build()).Error(); err != nil {
			closeOwned()
			panic(err)
		}
	}

	// Create new store
	return &Storage{
		db:       db,
		cacheTTL: cfg.CacheTTL,
	}
}

// GetWithContext gets value by key with context
func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error) {
	if s.closed.Load() {
		return nil, ErrClosed
	}
	if len(key) <= 0 {
		return nil, nil
	}
	val, err := s.db.DoCache(ctx, s.db.B().Get().Key(key).Cache(), s.cacheTTL).AsBytes()
	if err != nil && rueidis.IsRedisNil(err) {
		return nil, nil
	}
	return val, err
}

// Get gets value by key
func (s *Storage) Get(key string) ([]byte, error) {
	return s.GetWithContext(context.Background(), key)
}

// SetWithContext sets key with value with context
func (s *Storage) SetWithContext(ctx context.Context, key string, val []byte, exp time.Duration) error {
	if s.closed.Load() {
		return ErrClosed
	}
	if len(key) <= 0 || len(val) <= 0 {
		return nil
	}
	if exp <= 0 {
		return s.db.Do(ctx, s.db.B().Set().Key(key).Value(string(val)).Build()).Error()
	}

	return s.db.Do(ctx, s.db.B().Set().Key(key).Value(string(val)).PxMilliseconds(expirationMilliseconds(exp)).Build()).Error()
}

// expirationMilliseconds converts exp to the millisecond count PX takes. Ex
// truncates to whole seconds, turning a sub-second expiration into a rejected
// EX 0. It stays a count: the trip back through Duration overflowed int64.
func expirationMilliseconds(exp time.Duration) int64 {
	ms := int64(exp / time.Millisecond)
	if exp%time.Millisecond != 0 {
		ms++
	}
	return ms
}

// Set sets key with value
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	return s.SetWithContext(context.Background(), key, val, exp)
}

// DeleteWithContext deletes key by key with context
func (s *Storage) DeleteWithContext(ctx context.Context, key string) error {
	if s.closed.Load() {
		return ErrClosed
	}
	if len(key) <= 0 {
		return nil
	}
	return s.db.Do(ctx, s.db.B().Del().Key(key).Build()).Error()
}

// Delete deletes key by key
func (s *Storage) Delete(key string) error {
	return s.DeleteWithContext(context.Background(), key)
}

// ResetWithContext resets all keys with context
func (s *Storage) ResetWithContext(ctx context.Context) error {
	if s.closed.Load() {
		return ErrClosed
	}
	return s.db.Do(ctx, s.db.B().Flushdb().Build()).Error()
}

// Reset resets all keys
func (s *Storage) Reset() error {
	return s.ResetWithContext(context.Background())
}

// Close the database
// Close the storage. It is safe to call Close more than once, the client is
// closed only on the first call.
func (s *Storage) Close() error {
	s.closeOnce.Do(func() {
		s.closed.Store(true)
		s.db.Close()
	})
	return nil
}

// Return database client
func (s *Storage) Conn() rueidis.Client {
	return s.db
}
