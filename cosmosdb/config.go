package cosmosdb

import (
	"time"
)

// Config defines the config for Azure Cosmos DB storage.
type Config struct {
	// ConnectionString is the Cosmos DB account connection string
	// Takes precedence over Endpoint and Key if provided
	// Find it in: Azure Portal -> Cosmos DB account -> Keys
	//
	// Optional. Default is ""
	ConnectionString string

	// Endpoint is the Cosmos DB account endpoint, e.g. "https://<account>.documents.azure.com:443/"
	//
	// Optional. Default is ""
	Endpoint string

	// Key is the Cosmos DB account key used with Endpoint
	//
	// Optional. Default is ""
	Key string

	// Database name, created if it does not exist
	//
	// Optional. Default is "fiber"
	Database string

	// Container name where data will be stored, created if it does not exist
	//
	// Optional. Default is "fiber_storage"
	Container string

	// RequestTimeout is the timeout for Cosmos DB requests
	//
	// Optional. Default is 10 seconds
	RequestTimeout time.Duration

	// Reset clears all items in the container on initialization
	//
	// Optional. Default is false
	Reset bool
}

// ConfigDefault is the default config
var ConfigDefault = Config{
	ConnectionString: "",
	Endpoint:         "",
	Key:              "",
	Database:         "fiber",
	Container:        "fiber_storage",
	RequestTimeout:   10 * time.Second,
	Reset:            false,
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
	if cfg.Database == "" {
		cfg.Database = ConfigDefault.Database
	}
	if cfg.Container == "" {
		cfg.Container = ConfigDefault.Container
	}
	if cfg.RequestTimeout <= 0 {
		cfg.RequestTimeout = ConfigDefault.RequestTimeout
	}
	return cfg
}
