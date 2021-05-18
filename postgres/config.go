package postgres

import (
	"time"
)

// Config defines the config for storage.
type Config struct {
	// Host name where the DB is hosted
	//
	// Optional. Default is "127.0.0.1"
	Host string

	// Port where the DB is listening on
	//
	// Optional. Default is 5432
	Port int

	// Server username
	//
	// Optional. Default is ""
	Username string

	// Server password
	//
	// Optional. Default is ""
	Password string

	// Database name
	//
	// Optional. Default is "fiber"
	Database string

	// Table name
	//
	// Optional. Default is "fiber_storage"
	Table string

	// The SSL mode for the connection
	//
	// Optional. Default is "disable"
	SslMode string

	// Reset clears any existing keys in existing Table
	//
	// Optional. Default is false
	Reset bool

	// Time before deleting expired keys
	//
	// Optional. Default is 10 * time.Second
	GCInterval time.Duration

	////////////////////////////////////
	// Adaptor related config options //
	////////////////////////////////////

	// Maximum wait for connection, in seconds. Zero or
	// n < 0 means wait indefinitely.
	timeout time.Duration

	// The maximum number of connections in the idle connection pool.
	//
	// If MaxOpenConns is greater than 0 but less than the new MaxIdleConns,
	// then the new MaxIdleConns will be reduced to match the MaxOpenConns limit.
	//
	// If n <= 0, no idle connections are retained.
	//
	// The default max idle connections is currently 2. This may change in
	// a future release.
	maxIdleConns int

	// The maximum number of open connections to the database.
	//
	// If MaxIdleConns is greater than 0 and the new MaxOpenConns is less than
	// MaxIdleConns, then MaxIdleConns will be reduced to match the new
	// MaxOpenConns limit.
	//
	// If n <= 0, then there is no limit on the number of open connections.
	// The default is 0 (unlimited).
	maxOpenConns int

	// The maximum amount of time a connection may be reused.
	//
	// Expired connections may be closed lazily before reuse.
	//
	// If d <= 0, connections are reused forever.
	connMaxLifetime time.Duration
}

// ConfigDefault is the default config
var ConfigDefault = Config{
	Host:            "127.0.0.1",
	Port:            5432,
	Database:        "fiber",
	Table:           "fiber_storage",
	SslMode:         "disable",
	Reset:           false,
	GCInterval:      10 * time.Second,
	maxOpenConns:    100,
	maxIdleConns:    100,
	connMaxLifetime: 1 * time.Second,
}

// Helper function to set default values
func configDefault(config ...Config) Config {
	// Return default config if nothing provided
	if len(config) < 1 {
		return ConfigDefault
	}

	// Override default config
	cfg := config[0]

	// Set default values
	if cfg.Host == "" {
		cfg.Host = ConfigDefault.Host
	}
	if cfg.Port <= 0 {
		cfg.Port = ConfigDefault.Port
	}
	if cfg.Database == "" {
		cfg.Database = ConfigDefault.Database
	}
	if cfg.Table == "" {
		cfg.Table = ConfigDefault.Table
	}
	if cfg.SslMode == "" {
		cfg.SslMode = ConfigDefault.SslMode
	}
	if int(cfg.GCInterval.Seconds()) <= 0 {
		cfg.GCInterval = ConfigDefault.GCInterval
	}
	return cfg
}
