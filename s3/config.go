package s3

import "time"

// Config defines the config for storage.
type Config struct {
	// S3 bucket name
	Bucket string

	// AWS endpoint
	Endpoint string

	// AWS region
	Region string

	// Request timeout
	//
	// Optional. Default is 0 (no timeout)
	RequestTimeout time.Duration

	// Reset clears any existing keys in existing Table
	//
	// Optional. Default is false
	Reset bool
}

// ConfigDefault is the default config
var ConfigDefault = Config{
	Bucket:   "",
	Region:   "",
	Endpoint: "",
	RequestTimeout:  0,
	Reset:    false,
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
	if cfg.Bucket == "" {
		cfg.Bucket = ConfigDefault.Bucket
	}
	return cfg
}
