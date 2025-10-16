package firestore

import (
	"time"
)

// Config defines the config for Firestore storage.
type Config struct {
	// ProjectID is the Google Cloud project ID
	// Required. Will panic if empty
	ProjectID string

	// Collection name where data will be stored
	//
	// Optional. Default is "fiber_storage"
	Collection string

	// CredentialsPath is the path to the service account JSON key file
	// If not provided, Application Default Credentials (ADC) will be used
	// Download from: Firebase Console -> Project Settings -> Service Accounts -> Generate New Private Key
	// See: https://cloud.google.com/docs/authentication/application-default-credentials
	//
	// Optional. Default is ""
	CredentialsPath string

	// Credentials is a JSON string with service account credentials
	// Takes precedence over CredentialsPath if both are provided
	// Useful for embedding credentials or loading from environment variables
	//
	// Optional. Default is ""
	Credentials string

	// RequestTimeout is the timeout for Firestore requests
	//
	// Optional. Default is 10 seconds
	RequestTimeout time.Duration

	// Reset clears all documents in the collection on initialization
	//
	// Optional. Default is false
	Reset bool
}

// ConfigDefault is the default config
var ConfigDefault = Config{
	Collection:     "fiber_storage",
	RequestTimeout: 10 * time.Second,
	Reset:          false,
}

// configDefault is a helper function to set default values
func configDefault(config ...Config) Config {
	// Return default config if nothing provided
	if len(config) < 1 {
		return ConfigDefault
	}

	// Override default config
	cfg := config[0]

	// Validate required fields
	if cfg.ProjectID == "" {
		panic("firestore: ProjectID is required")
	}

	// Set default values
	if cfg.Collection == "" {
		cfg.Collection = ConfigDefault.Collection
	}

	if cfg.RequestTimeout == 0 {
		cfg.RequestTimeout = ConfigDefault.RequestTimeout
	}

	return cfg
}
