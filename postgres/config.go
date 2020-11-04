package postgres

import "time"

// Config defines the config for storage.
type Config struct {
	// Time before deleting expired keys
	//
	// Default is 10 * time.Second
	GCInterval time.Duration

	// DB host
	//
	// Optional. Default is "127.0.0.1"
	Host string

	// DB port
	//
	// Optional. Default is "5432"
	Port int64

	// DB user name
	//
	// Optional. Default is ""
	Username string

	// DB user password
	//
	// Optional. Default is ""
	Password string

	// DB name
	//
	// Optional. Default is "fiber"
	Database string

	// DB table name
	//
	// Optional. Default is "fiber"
	TableName string

	// Drop any existing table with the same name
	//
	// Optional. Default is false
	DropTable bool

	// Maximum wait for connection, in seconds. Zero or
	// n < 0 means wait indefinitely.
	timeout time.Duration

	// The maximum number of connections in the idle connection pool.
	//
	// If MaxOpenConns is greater than 0 but less than the new MaxIdleConns,
	// then the new MaxIdleConns will be reduced to match the MaxOpenConns limit.
	//
	// If n <= 0, no idle connections are retained.
	//
	// The default max idle connections is currently 2. This may change in
	// a future release.
	maxIdleConns int

	// The maximum number of open connections to the database.
	//
	// If MaxIdleConns is greater than 0 and the new MaxOpenConns is less than
	// MaxIdleConns, then MaxIdleConns will be reduced to match the new
	// MaxOpenConns limit.
	//
	// If n <= 0, then there is no limit on the number of open connections.
	// The default is 0 (unlimited).
	maxOpenConns int

	// The maximum amount of time a connection may be reused.
	//
	// Expired connections may be closed lazily before reuse.
	//
	// If d <= 0, connections are reused forever.
	connMaxLifetime time.Duration
}

// ConfigDefault is the default config
var ConfigDefault = Config{
	GCInterval:      10 * time.Second,
	Host:            "127.0.0.1",
	Port:            5432,
	Database:        "fiber",
	TableName:       "fiber",
	DropTable:       false,
	timeout:         30 * time.Second,
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
	if cfg.Host == "" {
		cfg.Host = ConfigDefault.Host
	}
	if cfg.Port == 0 {
		cfg.Port = ConfigDefault.Port
	}
	if cfg.Host == "" {
		cfg.Host = ConfigDefault.Host
	}
	if cfg.Database == "" {
		cfg.Database = ConfigDefault.Database
	}
	if cfg.TableName == "" {
		cfg.TableName = ConfigDefault.TableName
	}
	// if int(cfg.Timeout) == 0 {
	// 	cfg.Timeout = ConfigDefault.Timeout
	// }
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
