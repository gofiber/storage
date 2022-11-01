package gorm

import (
	"time"

	"gorm.io/gorm"
)

// Config defines the config for storage.
type Config struct {
	// DB will override Dialect and ConnectionURI values if used
	//
	// Optional. Default is nil
	Db *gorm.DB

	// Dialect string to use for DB. Will override all other authentication values if used
	//
	// Optional. Default is ""
	Dialect string

	// ConnectionURI string to use for DB. Will override all other authentication values if used
	//
	// Optional. Default is ""
	ConnectionURI string

	// SkipDefaultTransaction executes write operations outside of transactions for better performances
	//
	// Optional. Default is false
	SkipDefaultTransaction bool

	// PrepareStmt prepares statement when executing any SQL and caches them to speed up future calls
	//
	// Optional. Default is false
	PrepareStmt bool

	// Table name
	//
	// Optional. Default is "fiber_storage"
	Table string

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
	Db:                     nil,
	Dialect:                "",
	ConnectionURI:          "",
	SkipDefaultTransaction: false,
	PrepareStmt:            false,
	Table:                  "fiber_storage",
	Reset:                  false,
	GCInterval:             10 * time.Second,
	maxOpenConns:           100,
	maxIdleConns:           100,
	connMaxLifetime:        1 * time.Second,
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
	if cfg.Table == "" {
		cfg.Table = ConfigDefault.Table
	}

	if int(cfg.GCInterval.Seconds()) <= 0 {
		cfg.GCInterval = ConfigDefault.GCInterval
	}

	return cfg
}
