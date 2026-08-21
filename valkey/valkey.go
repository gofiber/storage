package valkey

import (
	"context"
	"errors"
	"sync"
	"sync/atomic"
	"time"

	"github.com/valkey-io/valkey-go"
)

// ErrClosed is returned by every operation attempted after Close.
var ErrClosed = errors.New("valkey: storage is closed")

// Storage interface that is implemented by storage providers
type Storage struct {
	db        valkey.Client
	ownsDB    bool
	closeOnce sync.Once

	closed   atomic.Bool
	cacheTTL time.Duration
}

// NewFromConnection builds a Storage on an existing client, which stays the caller's to close,
// using context.Background() for the optional reset.
func NewFromConnection(conn valkey.Client, config ...Config) *Storage {
	return NewFromConnectionWithContext(context.Background(), conn, config...)
}

// NewFromConnectionWithContext builds a Storage on an existing client, which stays the caller's to
// close, using ctx for the optional reset. Only CacheTTL and Reset are read from the config; the
// connection settings come from the client, and nothing touches the network unless Reset is set.
// Reset empties the whole logical database the client points at, not just this storage's keys.
func NewFromConnectionWithContext(ctx context.Context, conn valkey.Client, config ...Config) *Storage {
	if conn == nil {
		panic("valkey: nil client")
	}

	return newStorage(ctx, conn, false, configDefault(config...))
}

// newStorage runs the optional reset and builds the store; db is released on failure only when this
// driver opened it.
func newStorage(ctx context.Context, db valkey.Client, ownsDB bool, cfg Config) *Storage {
	if cfg.Reset {
		if err := db.Do(ctx, db.B().Flushdb().Build()).Error(); err != nil {
			if ownsDB {
				db.Close()
			}
			panic(err)
		}
	}

	return &Storage{
		db:       db,
		ownsDB:   ownsDB,
		cacheTTL: cfg.CacheTTL,
	}
}

// New creates a new valkey storage using context.Background() for initialization.
func New(config ...Config) *Storage {
	return NewWithContext(context.Background(), config...)
}

// NewWithContext creates a new valkey storage, using ctx for the initialization
// operations (connection test and optional reset).
func NewWithContext(ctx context.Context, config ...Config) *Storage {
	// Set default config
	cfg := configDefault(config...)

	// Create new valkey client
	var db valkey.Client

	// Parse the URL and update config values accordingly
	if cfg.URL != "" {
		// This will panic if parsing URL fails
		options := valkey.MustParseURL(cfg.URL)

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
	db, err := valkey.NewClient(valkey.ClientOption{
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

	// Test connection
	if err := db.Do(ctx, db.B().Ping().Build()).Error(); err != nil {
		db.Close()
		panic(err)
	}

	return newStorage(ctx, db, true, cfg)
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
	if err != nil && valkey.IsValkeyNil(err) {
		return nil, nil
	}
	return val, err
}

// Get gets value by key
func (s *Storage) Get(key string) ([]byte, error) {
	return s.GetWithContext(context.Background(), key)
}

// SetWithContext sets key with value and expiration with context
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

// expirationMilliseconds converts exp for PX: EX truncates to seconds, and a Duration round trip overflowed int64.
func expirationMilliseconds(exp time.Duration) int64 {
	ms := int64(exp / time.Millisecond)
	if exp%time.Millisecond != 0 {
		ms++
	}
	return ms
}

// Set sets key with value and expiration
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

// Close the storage, and the client unless it came from NewFromConnection. Safe to call more than once; the client is closed on the first call only.
func (s *Storage) Close() error {
	s.closeOnce.Do(func() {
		s.closed.Store(true)

		if s.ownsDB {
			s.db.Close()
		}
	})
	return nil
}

// Return database client
func (s *Storage) Conn() valkey.Client {
	return s.db
}
