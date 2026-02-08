package postgres

import (
	"fmt"
	"net/url"
	"strings"
	"time"

	"github.com/jackc/pgx/v5/pgxpool"
)

// Config defines the config for storage.
type Config struct {
	// DB pgxpool.Pool object will override connection uri and other connection fields
	//
	// Optional. Default is nil
	DB *pgxpool.Pool

	// Connection string to use for DB. Will override all other authentication values if used
	//
	// Optional. Default is ""
	ConnectionURI string

	// Host name where the DB is hosted
	//
	// Optional. Default is "127.0.0.1"
	Host string

	// Port where the DB is listening on
	//
	// Optional. Default is 5432
	Port int

	// Server username
	//
	// Optional. Default is ""
	Username string

	// Server password
	//
	// Optional. Default is ""
	Password string

	// Database name
	//
	// Optional. Default is "fiber"
	Database string

	// Table name
	//
	// Optional. Default is "fiber_storage"
	Table string

	// The SSL mode for the connection
	//
	// Optional. Default is "disable"
	SSLMode string

	// Reset clears any existing keys in existing Table
	//
	// Optional. Default is false
	Reset bool

	// Unlogged creates the table as UNLOGGED.
	// Applies only when the table is created.
	//
	// Optional. Default is false
	// Warning: UNLOGGED tables are not crash-safe and are not replicated.
	Unlogged bool

	// Time before deleting expired keys
	//
	// Optional. Default is 10 * time.Second
	GCInterval time.Duration
}

// ConfigDefault is the default config
var ConfigDefault = Config{
	ConnectionURI: "",
	Host:          "127.0.0.1",
	Port:          5432,
	Database:      "fiber",
	Table:         "fiber_storage",
	SSLMode:       "disable",
	Reset:         false,
	Unlogged:      false,
	GCInterval:    10 * time.Second,
}

func (c *Config) getDSN() string {
	// Just return ConnectionURI if it's already exists
	if c.ConnectionURI != "" {
		return c.ConnectionURI
	}

	// Generate DSN
	dsn := "postgresql://"
	if c.Username != "" {
		dsn += url.QueryEscape(c.Username)
	}
	if c.Password != "" {
		dsn += ":" + url.QueryEscape(c.Password)
	}
	if c.Username != "" || c.Password != "" {
		dsn += "@"
	}

	// unix socket host path
	if strings.HasPrefix(c.Host, "/") {
		dsn += fmt.Sprintf("%s:%d", c.Host, c.Port)
	} else {
		dsn += fmt.Sprintf("%s:%d", url.QueryEscape(c.Host), c.Port)
	}

	dsn += fmt.Sprintf("/%s?sslmode=%s",
		url.QueryEscape(c.Database),
		c.SSLMode)

	return dsn
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
	if cfg.Host == "" {
		cfg.Host = ConfigDefault.Host
	}
	if cfg.Port <= 0 {
		cfg.Port = ConfigDefault.Port
	}
	if cfg.Database == "" {
		cfg.Database = ConfigDefault.Database
	}
	if cfg.Table == "" {
		cfg.Table = ConfigDefault.Table
	}
	if int(cfg.GCInterval.Seconds()) <= 0 {
		cfg.GCInterval = ConfigDefault.GCInterval
	}
	return cfg
}
