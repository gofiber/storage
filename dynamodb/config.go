package dynamodb

// Config defines the config for storage.
type Config struct {
}

// ConfigDefault is the default config
var ConfigDefault = Config{}

// configDefault is a helper function to set default values
func configDefault(config ...Config) Config {
	// Return default config if nothing provided
	if len(config) < 1 {
		return ConfigDefault
	}

	// Override default config
	cfg := config[0]

	// Set default values

	return cfg
}
