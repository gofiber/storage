package arangodb

import (
	"fmt"
	"strings"
	"time"
)

// Config defines the config for storage.
type Config struct {
	// Host name where the DB is hosted
	//
	// Optional. Default is "http://127.0.0.1"
	Host string

	// Port where the DB is listening on
	//
	// Optional. Default is 8529
	Port string

	// Server username
	//
	// Mandatory
	Username string

	// Server password
	//
	// Mandatory
	Password string

	// Database name
	//
	// Optional. Default is "fiber"
	Database string

	// Collection name
	//
	// Optional. Default is "fiber_storage"
	Collection string

	// Reset clears any existing keys in existing collection
	//
	// Optional. Default is false
	Reset bool
	// Time before deleting expired keys
	//
	// Optional. Default is 10 * time.Second
	GCInterval time.Duration
}

// ConfigDefault is the default config
var ConfigDefault = Config{
	Host:       "http://127.0.0.1",
	Port:       "8529",
	Database:   "fiber",
	Collection: "fiber_storage",
	Reset:      false,
	GCInterval: 10 * time.Second,
}

func (c Config) hostComposed() string {
	return fmt.Sprintf("%s:%s", c.Host, c.Port)
}

// Helper function to set default values
func configDefault(cfg Config) Config {
	if cfg.Username == "" || cfg.Password == "" {
		panic("username and password are mandatory")
	}
	// Set default values
	if cfg.Host == "" {
		cfg.Host = ConfigDefault.Host
	} else {
		if !strings.HasPrefix(cfg.Host, "http://") {
			panic("the host should start with http:// or https://")
		}
	}
	if len(cfg.Port) <= 0 {
		cfg.Port = ConfigDefault.Port
	}
	if cfg.Database == "" {
		cfg.Database = ConfigDefault.Database
	}
	if cfg.Collection == "" {
		cfg.Collection = ConfigDefault.Collection
	}

	if int(cfg.GCInterval.Seconds()) <= 0 {
		cfg.GCInterval = ConfigDefault.GCInterval
	}
	return cfg
}
