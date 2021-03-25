package redis

// Config defines the config for storage.
type Config struct {
	// Host name where the DB is hosted
	//
	// Optional. Default is "127.0.0.1"
	Host string

	// Port where the DB is listening on
	//
	// Optional. Default is 3306
	Port int

	// Server username
	//
	// Optional. Default is ""
	Username string

	// Server password
	//
	// Optional. Default is ""
	Password string

	// Database to be selected after connecting to the server.
	//
	// Optional. Default is 0
	Database int

	// URL the standard format redis url to parse all other options. If this is set all other config options, Host, Port, Username, Password, Database have no effect.
	//
	// Example: redis://<user>:<pass>@localhost:6379/<db>
	// Optional. Default is ""
	URL string

	// Reset clears any existing keys in existing Collection
	//
	// Optional. Default is false
	Reset bool

	////////////////////////////////////
	// Adaptor related config options //
	////////////////////////////////////

	// https://pkg.go.dev/github.com/go-redis/redis/v8#Options
}

// ConfigDefault is the default config
var ConfigDefault = Config{
	Host:     "127.0.0.1",
	Port:     6379,
	Username: "",
	Password: "",
	URL:      "",
	Database: 0,
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
	if cfg.Host == "" {
		cfg.Host = ConfigDefault.Host
	}
	if cfg.Port <= 0 {
		cfg.Port = ConfigDefault.Port
	}
	return cfg
}
