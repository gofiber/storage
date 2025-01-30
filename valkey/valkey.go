package valkey

import (
	"context"
	"time"

	"github.com/valkey-io/valkey-go"
)

var cacheTTL = time.Second

// Storage interface that is implemented by storage providers
type Storage struct {
	db valkey.Client
}

// New creates a new valkey storage
func New(config ...Config) *Storage {
	// Set default config
	cfg := configDefault(config...)

	// Create new valkey client
	var db valkey.Client
	cacheTTL = cfg.CacheTTL

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
	if err := db.Do(context.Background(), db.B().Ping().Build()).Error(); err != nil {
		panic(err)
	}

	// Empty collection if Clear is true
	if cfg.Reset {
		if err := db.Do(context.Background(), db.B().Flushdb().Build()).Error(); err != nil {
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
	if len(key) <= 0 {
		return nil, nil
	}
	val, err := s.db.DoCache(context.Background(), s.db.B().Get().Key(key).Cache(), cacheTTL).AsBytes()
	if err != nil && valkey.IsValkeyNil(err) {
		return nil, nil
	}
	return val, err
}

// Set key with value
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	if len(key) <= 0 || len(val) <= 0 {
		return nil
	}
	if exp > 0 {
		return s.db.Do(context.Background(), s.db.B().Set().Key(key).Value(string(val)).Ex(exp).Build()).Error()
	} else {
		return s.db.Do(context.Background(), s.db.B().Set().Key(key).Value(string(val)).Build()).Error()
	}
}

// Delete key by key
func (s *Storage) Delete(key string) error {
	if len(key) <= 0 {
		return nil
	}
	return s.db.Do(context.Background(), s.db.B().Del().Key(key).Build()).Error()
}

// Reset all keys
func (s *Storage) Reset() error {
	return s.db.Do(context.Background(), s.db.B().Flushdb().Build()).Error()
}

// Close the database
func (s *Storage) Close() error {
	s.db.Close()
	return nil
}

// Return database client
func (s *Storage) Conn() valkey.Client {
	return s.db
}
