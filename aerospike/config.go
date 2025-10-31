package aerospike

import (
	"time"

	"github.com/aerospike/aerospike-client-go/v8"
)

// Config defines the config for storage.
type Config struct {
	// Hosts is a list of Aerospike server hosts
	Hosts []*aerospike.Host

	// Namespace is the Aerospike namespace
	Namespace string

	// SetName is the Aerospike Set name
	SetName string

	// Reset clears any existing keys in existing Set
	Reset bool

	// Expiration is the default expiration time of entries
	Expiration time.Duration

	// SchemaVersion indicates the schema version to use
	SchemaVersion int

	// SchemaDescription provides additional info about the schema
	SchemaDescription string

	// ForceSchemaUpdate forces schema update even if version matches
	ForceSchemaUpdate bool

	// Initial host connection timeout duration.  The timeout when opening a connection
	// to the server host for the first time.
	InitialConnectionTimeout time.Duration
}

// ConfigDefault is the default config
var ConfigDefault = Config{
	Hosts:                    []*aerospike.Host{aerospike.NewHost("localhost", 3000)},
	Namespace:                "test", // Default namespace
	SetName:                  "fiber",
	Reset:                    false,
	Expiration:               1 * time.Hour,
	SchemaVersion:            1,
	SchemaDescription:        "Default Fiber storage schema",
	ForceSchemaUpdate:        false,
	InitialConnectionTimeout: 10 * time.Second,
}

// Helper function to set default values
func configDefault(config ...Config) Config {
	// Return default config if nothing provided
	if len(config) < 1 {
		return ConfigDefault
	}

	// Override default config
	cfg := config[0]

	// Set default values for missing fields
	if cfg.Hosts == nil {
		cfg.Hosts = ConfigDefault.Hosts
	}
	if cfg.Namespace == "" {
		cfg.Namespace = ConfigDefault.Namespace
	}
	if cfg.SetName == "" {
		cfg.SetName = ConfigDefault.SetName
	}
	// Reset is a boolean, so we can't check for zero value
	// It's maintained as-is from user config
	if cfg.Expiration == 0 {
		cfg.Expiration = ConfigDefault.Expiration
	}
	if cfg.SchemaVersion == 0 {
		cfg.SchemaVersion = ConfigDefault.SchemaVersion
	}
	if cfg.SchemaDescription == "" {
		cfg.SchemaDescription = ConfigDefault.SchemaDescription
	}
	if cfg.InitialConnectionTimeout == 0 {
		cfg.InitialConnectionTimeout = ConfigDefault.InitialConnectionTimeout
	}

	return cfg
}
