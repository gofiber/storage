package azureblob

import (
	"errors"
	"fmt"
	"time"
)

// Config defines the config for storage.
type Config struct {
	// Storage account name.
	Account string
	// Container name.
	Container string
	// Storage endpoint.
	// Optional. Default: "https://STORAGEACCOUNTNAME.blob.core.windows.net"
	Endpoint string
	// Request timeout.
	// Optional. Default is 0 (no timeout)
	RequestTimeout time.Duration
	// Reset clears any existing keys in existing container.
	// Optional. Default is false
	Reset bool
	// Credentials overrides AWS access key and AWS secret access key. Not recommended.
	// Optional. Default is Credentials{}
	Credentials Credentials
	// The maximum number of times requests that encounter retryable failures should be attempted.
	// Optional. Default is 3
	MaxAttempts int
}

// Credentials are the azure storage account access keys
type Credentials struct {
	Account string
	Key     string
}

// ConfigDefault is the default config
var ConfigDefault = Config{
	Account:        "",
	Container:      "",
	Endpoint:       "",
	RequestTimeout: 0,
	Reset:          false,
	MaxAttempts:    3,
}

// Helper function to set default values
func configure(config ...Config) Config {
	// Return default config if nothing provided
	if len(config) < 1 {
		return ConfigDefault
	}
	// Override default config
	cfg := config[0]
	valid, err := validateConfig(cfg)
	if err != nil || !valid {
		panic(fmt.Sprintf("invalid config:, %v", err))
	}
	if cfg.Endpoint == "" {
		cfg.Endpoint = "https://" + cfg.Account + ".blob.core.windows.net"
	}
	return cfg
}

func validateConfig(config Config) (bool, error) {
	if config.Credentials.Account == "" || config.Credentials.Key == "" {
		err := errors.New("credentials must not be empty")
		return false, err
	}
	if config.Account == "" || config.Container == "" {
		err := errors.New("invalid account information provided")
		return false, err
	}
	if config.Account != config.Credentials.Account {
		err := errors.New("account configuration mismatch")
		return false, err
	}
	return true, nil
}
