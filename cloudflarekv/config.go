package cloudflarekv

import "time"

// Config defines the config for storage.
type Config struct {

	// Cloudflare Auth Token
	//
	// Optional. Default is ""
	Key string

	// Cloudflare Email
	//
	// Optional. Default is ""
	Email string

	// Account id
	//
	// Optional. Default is "fiber"
	AccountID string

	// Namespace id
	//
	// Optional. Default is "fiber"
	NamespaceID string

	// RequestTimeout bounds each API call whose context has no deadline, including the wait
	// for the client's rate limiter. A negative value disables it.
	//
	// Optional. Default is 10 seconds
	RequestTimeout time.Duration

	// Reset clears any existing keys in existing Table
	//
	// Optional. Default is false
	Reset bool
}

// ConfigDefault is the default config
var ConfigDefault = Config{
	Key:            "",
	Email:          "",
	AccountID:      "fiber",
	NamespaceID:    "fiber",
	RequestTimeout: 10 * time.Second,
	Reset:          false,
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
	if cfg.Key == "" {
		cfg.Key = ConfigDefault.Key
	}
	if cfg.Email == "" {
		cfg.Email = ConfigDefault.Email
	}
	if cfg.AccountID == "" {
		cfg.AccountID = ConfigDefault.AccountID
	}
	if cfg.NamespaceID == "" {
		cfg.NamespaceID = ConfigDefault.NamespaceID
	}
	if cfg.RequestTimeout == 0 {
		cfg.RequestTimeout = ConfigDefault.RequestTimeout
	}

	return cfg
}
