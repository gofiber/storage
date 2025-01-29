package neo4jstore

import (
	"time"

	"github.com/neo4j/neo4j-go-driver/v5/neo4j"
	"github.com/neo4j/neo4j-go-driver/v5/neo4j/auth"
	"github.com/neo4j/neo4j-go-driver/v5/neo4j/config"
)

type Config struct {
	// Connection pool
	//
	// Optional. Default is nil.
	//
	// If provided, it overrides the following connection parameters
	DB neo4j.DriverWithContext

	// Target Server
	//
	// Optional. Default is "neo4j://localhost"
	TargetBoltURI string

	// Authentication method
	//
	// Optional. Default is nil
	//
	// If not provided and both `Username` and `Password` fields are provided, basicAuth will be used, like below:
	//   neo4j.BasicAuth(Username, Password, "")
	//
	// If not provided and one of `Username` and `Password` fields is not provided, you must ensure that authtentication is disabled for your server, otherwise an unauthorized error will panic.
	//
	// If provided, `Username` and `Password` fields are not considered.
	Auth auth.TokenManager

	// Connection configurations
	//
	// Optional. Default is nil
	Configurers []func(*config.Config)

	// Server username
	//
	// Optional. Default is ""
	//
	// Mandatory if `Auth` is nil and auth is enabled on server
	Username string

	// Server password
	//
	// Optional. Default is ""
	//
	// Mandatory if `Auth` is nil and auth is enabled on server
	Password string

	// Node name
	//
	// Optional. Default is "fiber_storage"
	Node string

	// Reset clears any existing keys in existing Table
	//
	// Optional. Default is false
	Reset bool

	// Time before deleting expired keys
	//
	// Optional. Default is 10 * time.Second
	GCInterval time.Duration
}

var ConfigDefault = Config{
	TargetBoltURI: "neo4j://localhost",
	Node:          "fiber_storage",
	Reset:         false,
	GCInterval:    10 * time.Second,
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
	if cfg.TargetBoltURI == "" {
		cfg.TargetBoltURI = ConfigDefault.TargetBoltURI
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
