package scylladb

import "github.com/gocql/gocql"

type Config struct {
	// Session is provided by the user to use an existing ScyllaDb session
	//
	// Optional. Default is nil
	Session *gocql.Session

	// Keyspace name
	//
	// Optional. Default is "fiber"
	Keyspace string

	// Host name where the ScyllaDb cluster is hosted
	//
	// Optional. Default is "127.0.0.1"
	Hosts []string

	// Port where the ScyllaDb cluster is listening on
	//
	// Optional. Default is 9042
	Port int

	// Username for ScyllaDb cluster
	//
	// Optional. Default is ""
	Username string

	// Password for ScyllaDb cluster
	//
	// Optional. Default is ""
	Password string

	// Table name
	//
	// Optional. Default is "fiber_storage"
	Table string

	// Level of the consistency
	//
	// Optional. Default is "LOCAL_ONE"
	Consistency string

	// Reset clears any existing keys in existing Table
	//
	// Optional. Default is false
	Reset bool
}

// ConfigDefault is the default config
var ConfigDefault = Config{
	Session:     nil,
	Keyspace:    "fiber",
	Hosts:       []string{"127.0.0.1"},
	Username:    "",
	Password:    "",
	Port:        9042,
	Table:       "fiber_storage",
	Consistency: "LOCAL_ONE",
	Reset:       false,
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
	if cfg.Hosts == nil {
		cfg.Hosts = ConfigDefault.Hosts
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
	if cfg.Consistency == "" {
		cfg.Consistency = ConfigDefault.Consistency
	}
	return cfg
}
