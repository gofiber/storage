package neo4j

import (
	"time"

	"github.com/neo4j/neo4j-go-driver/v5/neo4j"
	"github.com/neo4j/neo4j-go-driver/v5/neo4j/auth"
	"github.com/neo4j/neo4j-go-driver/v5/neo4j/config"
)

type Config struct {
	// Connection pool.
	//
	// DB neo4j.DriverWithContext object will override connection uri and other connection fields.
	//
	// Optional. Default is nil.
	DB neo4j.DriverWithContext

	// Target Server
	//
	// Optional. Default is "neo4j://localhost"
	URI string

	// Connection authentication.
	//
	// Auth auth.TokenManager will override Username and Password fields.
	//
	// Optional. Default is nil.
	Auth auth.TokenManager

	// Connection configurations
	//
	// Optional. Default is nil
	Configurations []func(*config.Config)

	// Server username
	//
	// Optional. Default is ""
	Username string

	// Server password
	//
	// Optional. Default is ""
	Password string

	// Node name
	//
	// Optional. Default is "fiber_storage"
	Node string

	// Reset clears any existing keys (Nodes)
	//
	// Optional. Default is false
	Reset bool

	// Time before deleting expired keys (Nodes)
	//
	// Optional. Default is 10 * time.Second
	GCInterval time.Duration
}

var ConfigDefault = Config{
	URI:        "neo4j://localhost",
	Node:       "fiber_storage",
	Reset:      false,
	GCInterval: 10 * time.Second,
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
	if cfg.URI == "" {
		cfg.URI = ConfigDefault.URI
	}

	if cfg.Auth == nil {
		if cfg.Username != "" && cfg.Password != "" {
			cfg.Auth = neo4j.BasicAuth(cfg.Username, cfg.Password, "")
		} else {
			cfg.Auth = neo4j.NoAuth()
		}
	}

	if cfg.Node == "" {
		cfg.Node = ConfigDefault.Node
	}

	if int(cfg.GCInterval.Seconds()) <= 0 {
		cfg.GCInterval = ConfigDefault.GCInterval
	}

	return cfg
}
