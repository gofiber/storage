package bbolt

import "time"

// Config defines the config for storage.
type Config struct {
	// Database path
	//
	// Optional. Default is "fiber.db"
	Database string

	// Bbolt bucket name
	//
	// Optional. Default is "fiber_storage"
	Bucket string

	// Timeout is the amount of time to wait to obtain a file lock.
	// Only available on Darwin and Linux.
	//
	// Optional. Default is set to 60 * time.Second.
	Timeout time.Duration

	// Open database in read-only mode.
	//
	// Optional. Default is false
	ReadOnly bool

	// Reset clears any existing keys in existing Bucket
	//
	// Optional. Default is false
	Reset bool
}

// ConfigDefault is the default config
var ConfigDefault = Config{
	Database: "fiber.db",
	Bucket:   "fiber_storage",
	Timeout:  60 * time.Second,
	ReadOnly: false,
	Reset:    false,
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

	if cfg.Bucket == "" {
		cfg.Bucket = ConfigDefault.Bucket
	}

	return cfg
}
