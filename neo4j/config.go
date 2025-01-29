package neo4jstore

import (
	"time"

	"github.com/neo4j/neo4j-go-driver/v5/neo4j"
	"github.com/neo4j/neo4j-go-driver/v5/neo4j/auth"
	"github.com/neo4j/neo4j-go-driver/v5/neo4j/config"
)

type Config struct {
	/*
		Optional. Default is nil.

		If provided, it overrides the following connection parameters
	*/
	DB neo4j.DriverWithContext

	// Optional. Default is "neo4j://localhost"
	TargetBoltURI string

	/*
		Optional. Default is driver.BasicAuth() using the provided username/password and "" realm value.

		If one of Username or Password is not provided, Auth will use driver.NoAuth() with the assumption that authtentication is disabled for your server, otherwise an error will occur.

		If provided, it overrides Username and Password
	*/
	Auth auth.TokenManager

	// Optional. Default is nil
	Configurers []func(*config.Config)

	// Optional. Default is ""
	Username string

	// Optional. Default is ""
	Password string

	// Optional. Default is "fiber_storage"
	Node string

	// Optional. Default is false
	Reset bool

	// Optional. Default is 10 * time.Second
	GCInterval time.Duration
}

var ConfigDefault = Config{
	TargetBoltURI: "neo4j://localhost",
	Auth:          neo4j.NoAuth(),
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
		if cfg.Username == "" || cfg.Password == "" {
			cfg.Auth = ConfigDefault.Auth
		} else {
			cfg.Auth = neo4j.BasicAuth(cfg.Username, cfg.Password, "")
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
