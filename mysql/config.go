package mysql

import (
	"fmt"
	"time"
)

// Config defines the config for storage.
type Config struct {
	// Time before deleting expired keys
	//
	// Default is 10 * time.Second
	GCInterval time.Duration

	// MySQL server address. Must include port.
	//
	// Default is "127.0.0.1:3306"
	Address string

	// MySQL server username
	//
	// Default is ""
	Username string

	// MySQL server password
	//
	// Default is ""
	Password string

	// MySQL database name
	//
	// Default is "fiber"
	DatabaseName string

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
	Address:         "127.0.0.1:3306",
	TableName:       "fiber",
	DatabaseName:    "fiber",
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
	if cfg.Address == "" {
		cfg.Address = ConfigDefault.Address
	}
	if cfg.Username == "" {
		cfg.Username = ConfigDefault.Username
	}
	if cfg.Password == "" {
		cfg.Password = ConfigDefault.Password
	}
	if cfg.TableName == "" {
		cfg.TableName = ConfigDefault.TableName
	}
	if cfg.DatabaseName == "" {
		cfg.DatabaseName = ConfigDefault.DatabaseName
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

func (c Config) makeDSN() string {
	return fmt.Sprintf("%s:%s@tcp(%s)/%s", c.Username, c.Password, c.Address, c.DatabaseName)
}
