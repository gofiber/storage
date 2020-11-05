package sqlite3

import "time"

// Config defines the config for storage.
type Config struct {
	// Database name
	//
	// Optional. Default is "fiber"
	Database string

	// Table name
	//
	// Optional. Default is "fiber_storage"
	Table string

	// Clear any existing keys in existing Table
	//
	// Optional. Default is false
	Clear bool

	// Time before deleting expired keys
	//
	// Optional. Default is 10 * time.Second
	GCInterval time.Duration

	////////////////////////////////////
	// Adaptor related config options //
	////////////////////////////////////

	maxIdleConns    int
	maxOpenConns    int
	connMaxLifetime time.Duration
}

// ConfigDefault is the default config
var ConfigDefault = Config{
	// General config options
	Database:   "./fiber.sqlite3",
	Table:      "fiber_storage",
	Clear:      false,
	GCInterval: 10 * time.Second,

	// Adaptor related config options
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
	if cfg.Database == "" {
		cfg.Database = ConfigDefault.Database
	}
	if cfg.Table == "" {
		cfg.Table = ConfigDefault.Table
	}
	if int(cfg.GCInterval) == 0 {
		cfg.GCInterval = ConfigDefault.GCInterval
	}
	return cfg
}
