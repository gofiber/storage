package sqlite3

import "time"

// Config defines the config for storage.
type Config struct {
	GCInterval time.Duration
	FilePath   string
	TableName  string
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
	if cfg.FilePath == "" {
		cfg.FilePath = "./db"
	}
	if cfg.TableName == "" {
		cfg.TableName = "fiber"
	}
	return cfg
}
