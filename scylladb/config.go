package scylladb

import (
	"strings"

	"github.com/gocql/gocql"
)

type Config struct {
	// Session is provided by the user to use an existing ScyllaDb session
	//
	// Optional. Default is nil
	Session *gocql.Session

	// Keyspace name
	//
	// Optional. Default is "fiber"
	Keyspace string

	// Hosts are an array of network addresses for establishing initial connections.
	// You have the flexibility to specify one or multiple addresses as needed.
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

	// SslOpts configures TLS use.
	//
	// Optional. Default is nil
	SslOpts *gocql.SslOptions

	// Reset clears any existing keys in existing Table
	//
	// Optional. Default is false
	Reset bool

	// DisableInitialHostLookup disables the initial host lookup
	//
	// Optional. Default is false
	DisableInitialHostLookup bool
}

// ConfigDefault is the default config
var ConfigDefault = Config{
	Session:                  nil,
	Keyspace:                 "fiber",
	Hosts:                    []string{"127.0.0.1"},
	Username:                 "",
	Password:                 "",
	Port:                     9042,
	Table:                    "fiber_storage",
	Consistency:              "LOCAL_ONE",
	SslOpts:                  nil,
	Reset:                    false,
	DisableInitialHostLookup: false,
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
	if len(strings.TrimSpace(cfg.Table)) == 0 {
		cfg.Table = ConfigDefault.Table
	}
	if len(strings.TrimSpace(cfg.Keyspace)) == 0 {
		cfg.Keyspace = ConfigDefault.Keyspace
	}
	if len(strings.TrimSpace(cfg.Consistency)) == 0 {
		cfg.Consistency = ConfigDefault.Consistency
	}
	return cfg
}
