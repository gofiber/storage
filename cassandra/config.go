package cassandra

import "github.com/gocql/gocql"

// Config defines the config for storage
type Config struct {
    // Session is provided by the user to use an existing Cassandra session
    // Optional. Default is nil
    Session *gocql.Session

    // Keyspace name
    // Optional. Default is "fiber"
    Keyspace string

    // Host name where the Cassandra cluster is hosted
    // Optional. Default is "127.0.0.1"
    Host string

    // Port where the Cassandra cluster is listening on
    // Optional. Default is 9042
    Port int

    // Username for Cassandra cluster
    // Optional. Default is ""
    Username string

    // Password for Cassandra cluster
    // Optional. Default is ""
    Password string

    // Table name
    // Optional. Default is "fiber_storage"
    Table string

    // Reset clears any existing keys in existing Table
    // Optional. Default is false
    Reset bool
}

// ConfigDefault is the default config
var ConfigDefault = Config{
    Session: nil,
    Keyspace: "fiber",
    Host:    "127.0.0.1",
    Username: "",
    Password: "",
    Port:    9042,
    Table:    "fiber_storage",
    Reset:    false,
}

// configDefault helps to set a default config
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
	if cfg.Table == "" {
		cfg.Table = ConfigDefault.Table
	}
	if cfg.Keyspace == "" {
		cfg.Keyspace = ConfigDefault.Keyspace
	}
	return cfg
}