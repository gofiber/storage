package couchbase

import (
	"time"
)

type Config struct {
	// The application username to Connect to the Couchbase cluster
	Username string
	// The application password to Connect to the Couchbase cluster
	Password string
	// The connection string for the Couchbase cluster
	Host string
	// The name of the bucket to Connect to
	Bucket string
	// The timeout for connecting to the Couchbase cluster
	ConnectionTimeout time.Duration
	// The timeout for performing operations on the Couchbase cluster
	KVTimeout time.Duration
}

// ConfigDefault is the default config
var ConfigDefault = Config{
	Host:              "127.0.0.1:8091",
	Username:          "admin",
	Password:          "123456",
	Bucket:            "fiber_storage",
	ConnectionTimeout: 3 * time.Second,
	KVTimeout:         1 * time.Second,
}

func configDefault(config ...Config) Config {
	// Return default config if nothing provided
	if len(config) < 1 {
		return ConfigDefault
	}

	// Override default config
	cfg := config[0]

	// Set default values
	if cfg.Username == "" {
		cfg.Username = ConfigDefault.Username
	}
	if cfg.Password == "" {
		cfg.Password = ConfigDefault.Password
	}
	if cfg.Host == "" {
		cfg.Host = ConfigDefault.Host
	}
	if cfg.Bucket == "" {
		cfg.Bucket = ConfigDefault.Bucket
	}
	if cfg.ConnectionTimeout == 0 {
		cfg.ConnectionTimeout = ConfigDefault.ConnectionTimeout
	}
	if cfg.KVTimeout == 0 {
		cfg.KVTimeout = ConfigDefault.KVTimeout
	}

	return cfg
}
