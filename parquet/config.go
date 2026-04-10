package parquet

import "time"

// Config defines the config for storage.
type Config struct {
	// Path to the parquet file
	//
	// Optional. Default is "fiber_storage.parquet"
	Path string

	// Time before deleting expired keys
	//
	// Optional. Default is 10 * time.Second
	GCInterval time.Duration
}

// ConfigDefault is the default config
var ConfigDefault = Config{
	Path:       "fiber_storage.parquet",
	GCInterval: 10 * time.Second,
}

// configDefault is a helper function to set default values
func configDefault(config ...Config) Config {
	if len(config) < 1 {
		return ConfigDefault
	}

	cfg := config[0]

	if cfg.Path == "" {
		cfg.Path = ConfigDefault.Path
	}
	if int(cfg.GCInterval.Seconds()) <= 0 {
		cfg.GCInterval = ConfigDefault.GCInterval
	}

	return cfg
}
