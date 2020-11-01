package sqlite3

import "time"

// Config defines the config for storage.
type Config struct {
	// Time before deleting expired keys
	//
	// Default is 10 * time.Second
	GCInterval time.Duration

	// DB file path
	//
	// Default is "./fiber.sqlite3"
	FilePath string

	// DB table name
	//
	// Default is "fiber"
	TableName string

	// When set to true, this will Drop any existing table with the same name
	DropTable bool

	// The maximum number of connections in the idle connection pool.
	//
	// If MaxOpenConns is greater than 0 but less than the new MaxIdleConns,
	// then the new MaxIdleConns will be reduced to match the MaxOpenConns limit.
	//
	// If n < 0, no idle connections are retained.
	//
	// The default is 100.
	MaxIdleConns int

	// The maximum number of open connections to the database.
	//
	// If MaxIdleConns is greater than 0 and the new MaxOpenConns is less than
	// MaxIdleConns, then MaxIdleConns will be reduced to match the new
	// MaxOpenConns limit.
	//
	// If n < 0, then there is no limit on the number of open connections.
	//
	// The default is 100.
	MaxOpenConns int

	// The maximum amount of time a connection may be reused.
	//
	// Expired connections may be closed lazily before reuse.
	//
	// If d < 0, connections are reused forever.
	//
	// The default is 1 * time.Second
	ConnMaxLifetime time.Duration
}

// ConfigDefault is the default config
var ConfigDefault = Config{
	GCInterval:      10 * time.Second,
	FilePath:        "./fiber.sqlite3",
	TableName:       "fiber",
	DropTable:       false,
	MaxOpenConns:    100,
	MaxIdleConns:    100,
	ConnMaxLifetime: 1 * time.Second,
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
	if int(cfg.GCInterval) == 0 {
		cfg.GCInterval = ConfigDefault.GCInterval
	}
	if cfg.FilePath == "" {
		cfg.FilePath = ConfigDefault.FilePath
	}
	if cfg.TableName == "" {
		cfg.TableName = ConfigDefault.TableName
	}
	if cfg.MaxOpenConns == 0 {
		cfg.MaxOpenConns = ConfigDefault.MaxOpenConns
	}
	if cfg.MaxIdleConns == 0 {
		cfg.MaxIdleConns = ConfigDefault.MaxIdleConns
	}
	if int(cfg.ConnMaxLifetime) == 0 {
		cfg.ConnMaxLifetime = ConfigDefault.ConnMaxLifetime
	}
	return cfg
}
