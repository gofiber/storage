package cloudflarekv

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

	// Reset clears any existing keys in existing Table
	//
	// Optional. Default is false
	Reset bool
}

// ConfigDefault is the default config
var ConfigDefault = Config{
	Key:         "",
	Email:       "",
	AccountID:   "fiber",
	NamespaceID: "fiber",
	Reset:       false,
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

	return cfg
}
