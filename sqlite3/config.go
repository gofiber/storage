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
	Database string

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
	maxIdleConns int

	// The maximum number of open connections to the database.
	//
	// If MaxIdleConns is greater than 0 and the new MaxOpenConns is less than
	// MaxIdleConns, then MaxIdleConns will be reduced to match the new
	// MaxOpenConns limit.
	//
	// If n < 0, then there is no limit on the number of open connections.
	//
	// The default is 100.
	maxOpenConns int

	// The maximum amount of time a connection may be reused.
	//
	// Expired connections may be closed lazily before reuse.
	//
	// If d < 0, connections are reused forever.
	//
	// The default is 1 * time.Second
	connMaxLifetime time.Duration
}

// ConfigDefault is the default config
var ConfigDefault = Config{
	GCInterval:      10 * time.Second,
	Database:        "./fiber.sqlite3",
	TableName:       "fiber",
	DropTable:       false,
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
	if int(cfg.GCInterval) == 0 {
		cfg.GCInterval = ConfigDefault.GCInterval
	}
	if cfg.Database == "" {
		cfg.Database = ConfigDefault.Database
	}
	if cfg.TableName == "" {
		cfg.TableName = ConfigDefault.TableName
	}
	// if cfg.MaxOpenConns == 0 {
	// 	cfg.MaxOpenConns = ConfigDefault.MaxOpenConns
	// }
	// if cfg.MaxIdleConns == 0 {
	// 	cfg.MaxIdleConns = ConfigDefault.MaxIdleConns
	// }
	// if int(cfg.ConnMaxLifetime) == 0 {
	// 	cfg.ConnMaxLifetime = ConfigDefault.ConnMaxLifetime
	// }
	return cfg
}
