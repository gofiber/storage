package sqlite3

import "time"

// Config defines the config for storage.
type Config struct {
	GCInterval time.Duration
}

// ConfigDefault is the default config
var ConfigDefault = Config{
	GCInterval: 10 * time.Second,
}

// Helper function to set default values
func configDefault(cfg Config) Config {
	if int(cfg.GCInterval) == 0 {
		cfg.GCInterval = ConfigDefault.GCInterval
	}
	return cfg
}
