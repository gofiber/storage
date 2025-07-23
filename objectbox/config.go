package objectbox

import "time"

// Config defines the configuration options for ObjectBox storage.
type Config struct {
	// Directory is the path where the database is stored.
	// Optional, defaults to "objectbox_db"
	Directory string

	// MaxSizeInKb sets the maximum size of the database in kilobytes.
	// Optional, defaults to 1GB (1024 * 1024)
	MaxSizeInKb uint64

	// MaxReaders defines the maximum number of concurrent readers.
	// Optional, defaults to 126
	MaxReaders uint

	// Reset determines if existing keys should be cleared on startup.
	// Optional, defaults to false
	Reset bool

	// GCInterval sets the frequency for garbage collection.
	// Optional, defaults to 60 seconds
	GCInterval time.Duration
}

var DefaultConfig = Config{
	Directory:   "objectbox_db",
	MaxSizeInKb: 1024 * 1024, // 1GB
	MaxReaders:  126,
	Reset:       false,
	GCInterval:  60 * time.Second,
}

// getConfig returns a Config struct, applying user-provided overrides to DefaultConfig.
func getConfig(config ...Config) Config {
	cfg := DefaultConfig

	if len(config) > 0 {
		userConfig := config[0]

		if userConfig.Directory != "" {
			cfg.Directory = userConfig.Directory
		}
		if userConfig.MaxSizeInKb != 0 {
			cfg.MaxSizeInKb = userConfig.MaxSizeInKb
		}
		if userConfig.MaxReaders != 0 {
			cfg.MaxReaders = userConfig.MaxReaders
		}
		if userConfig.GCInterval != 0 {
			cfg.GCInterval = userConfig.GCInterval
		}

		// For the boolean, we always take the user's value.
		cfg.Reset = userConfig.Reset
	}

	return cfg
}
