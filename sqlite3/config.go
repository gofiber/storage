package sqlite3

// Config defines the config for storage.
type Config struct {
}

// ConfigDefault is the default config
var ConfigDefault = Config{}

// Helper function to set default values
func configDefault(cfg Config) Config {
	return cfg
}
