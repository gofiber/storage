package badger

import "time"

// Config defines the config for storage.
type Config struct {
	// Database name
	//
	// Optional. Default is "./fiber.badger"
	Database string

	// Reset clears any existing keys in existing Table
	//
	// Optional. Default is false
	Reset bool

	// Time before deleting expired keys
	//
	// Optional. Default is 10 * time.Second
	GCInterval time.Duration
}

// ConfigDefault is the default config
var ConfigDefault = Config{
	Database:   "./fiber.badger",
	Reset:      false,
	GCInterval: 10 * time.Second,
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
	if int(cfg.GCInterval) == 0 {
		cfg.GCInterval = ConfigDefault.GCInterval
	}
	return cfg
}
