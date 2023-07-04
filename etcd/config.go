package etcd

import (
	"crypto/tls"
	"time"
)

// Config defines the config for storage.
type Config struct {
	// Endpoints is a list of URLs.
	Endpoints []string
	// DialTimeout is the timeout for failing to establish a connection.
	DialTimeout time.Duration
	// Username is a username for authentication.
	Username string
	// Password is a password for authentication.
	Password string
	// TLS holds the client secure credentials, if any.
	TLS *tls.Config
}

// ConfigDefault is the default config
var ConfigDefault = Config{
	Endpoints:   []string{"localhost:2379"},
	DialTimeout: 2 * time.Second,
	Username:    "",
	Password:    "",
	TLS:         nil,
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
	if cfg.Username == "" {
		cfg.Username = ConfigDefault.Username
	}
	if cfg.Password == "" {
		cfg.Password = ConfigDefault.Password
	}
	if cfg.DialTimeout == 0 {
		cfg.DialTimeout = ConfigDefault.DialTimeout
	}

	return cfg
}
