package memory

import "time"

// Config defines the config for storage.
type Config struct {
	GCInterval time.Duration
}

var defaultConfig = Config{
	GCInterval: 10 * time.Second,
}

// configDefault is a helper function to set default values
func configDefault(config ...Config) Config {
	// Return default config if nothing provided
	if len(config) < 1 {
		return defaultConfig
	}

	// Override default config
	cfg := config[0]

	// Set default values
	if int(cfg.GCInterval) == 0 {
		cfg.GCInterval = defaultConfig.GCInterval
	}
	return cfg
}
