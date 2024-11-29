package objectbox

import "time"

// Config defines the configuration options for ObjectBox storage.
type Config struct {
	// Directory is the path where the database is stored.
	// Optional, defaults to "objectbox"
	Directory string

	// MaxSizeInKb sets the maximum size of the database in kilobytes.
	// Optional, defaults to 1GB (1024 * 1024 * 1024)
	MaxSizeInKb uint64

	// MaxReaders defines the maximum number of concurrent readers.
	// Optional, defaults to 126
	MaxReaders uint

	// Reset determines if existing keys should be cleared on startup.
	// Optional, defaults to false
	Reset bool

	// CleanerInterval sets the frequency for deleting expired keys.
	// Optional, defaults to 60 seconds
	CleanerInterval time.Duration
}

var DefaultConfig = Config{
	Directory:       "objectbox_db",
	MaxSizeInKb:     1024 * 1024, // 1GByte
	MaxReaders:      126,
	Reset:           false,
	CleanerInterval: 60 * time.Second,
}

func getConfig(config ...Config) Config {
	if len(config) < 1 {
		return DefaultConfig
	}

	cfg := config[0]

	// Set default values

	if cfg.Directory == "" {
		cfg.Directory = DefaultConfig.Directory
	}

	if cfg.MaxSizeInKb == 0 {
		cfg.MaxSizeInKb = DefaultConfig.MaxSizeInKb
	}

	if cfg.MaxReaders == 0 {
		cfg.MaxReaders = DefaultConfig.MaxReaders
	}

	if int(cfg.CleanerInterval.Seconds()) == 0 {
		cfg.CleanerInterval = DefaultConfig.CleanerInterval
	}

	return cfg

}
