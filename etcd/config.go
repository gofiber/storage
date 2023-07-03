package etcd

import (
	"context"
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
	// Context is the context for the client.
	Context context.Context
}

// ConfigDefault is the default config
var ConfigDefault = Config{
	Endpoints:   []string{"localhost:2379"},
	DialTimeout: 1 * time.Millisecond,
	Username:    "",
	Password:    "",
	Context:     context.Background(),
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
	if len(cfg.Endpoints) < 0 {
		cfg.Endpoints = ConfigDefault.Endpoints
	}
	if cfg.DialTimeout == 0 {
		cfg.DialTimeout = ConfigDefault.DialTimeout
	}
	if cfg.Username == "" {
		cfg.Username = ConfigDefault.Username
	}
	if cfg.Password == "" {
		cfg.Password = ConfigDefault.Password
	}
	if cfg.Context == nil {
		cfg.Context = ConfigDefault.Context
	}

	return cfg
}
