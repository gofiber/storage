package cassandra

import (
	"time"

	"github.com/gocql/gocql"
)

// Config defines the configuration options for the Cassandra storage
type Config struct {
	// Optional. Default is localhost
	// Hosts is a list of Cassandra nodes to connect to.
	Hosts []string
	// Optional. Default is gofiber
	// Keyspace is the name of the Cassandra keyspace to use.
	Keyspace string
	// Optional. Default is kv_store
	// Table is the name of the Cassandra table to use.
	Table string
	// Optional. Default is Quorum
	// Consistency is the Cassandra consistency level.
	Consistency gocql.Consistency
	// Optional. PoolConfig.HostSelectionPolicy = gocql.TokenAwareHostPolicy(gocql.RoundRobinHostPolicy())
	// PoolConfig is the Cassandra connection pool configuration.
	PoolConfig *gocql.PoolConfig
	// Optional. Default is false
	// SslOpts is the SSL options for the Cassandra cluster.
	SslOpts *gocql.SslOptions
	// Optional. Default is 10 minutes
	// Expiration is the time after which an entry is considered expired.
	Expiration time.Duration
	// Optional. Default is false
	// Reset is a flag to reset the database.
	Reset bool
	// Optional. Default is 3
	// MaxRetries is the maximum number of retries for a query.
	MaxRetries int
	// Optional. Default is 5 seconds
	// ConnectTimeout is the timeout for connecting to the Cassandra cluster.
	ConnectTimeout time.Duration
}

// ConfigDefault is the default config
var ConfigDefault = Config{
	Hosts:          []string{"localhost:9042"},
	Keyspace:       "gofiber",
	Table:          "kv_store",
	Consistency:    gocql.Quorum,
	Reset:          false,
	Expiration:     10 * time.Minute,
	MaxRetries:     3,
	ConnectTimeout: 5 * time.Second,
	SslOpts:        nil,
	PoolConfig: &gocql.PoolConfig{
		HostSelectionPolicy: gocql.TokenAwareHostPolicy(gocql.RoundRobinHostPolicy()),
	},
}

// configDefault applies `ConfigDefault` values to a user‑supplied Config.
func configDefault(config ...Config) Config {
	// Return default config if nothing provided
	if len(config) < 1 {
		return ConfigDefault
	}

	// Override default config
	cfg := config[0]

	// Set default values
	if len(cfg.Hosts) == 0 {
		cfg.Hosts = ConfigDefault.Hosts
	}

	if cfg.Keyspace == "" {
		cfg.Keyspace = ConfigDefault.Keyspace
	}

	if cfg.Table == "" {
		cfg.Table = ConfigDefault.Table
	}

	if cfg.Consistency == 0 {
		cfg.Consistency = ConfigDefault.Consistency
	}

	if cfg.Expiration == 0 {
		cfg.Expiration = ConfigDefault.Expiration
	} else if cfg.Expiration < 0 {
		// Disallow negative expirations – they produce invalid TTLs.
		cfg.Expiration = 0
	}

	if cfg.MaxRetries == 0 {
		cfg.MaxRetries = ConfigDefault.MaxRetries
	}

	if cfg.ConnectTimeout == 0 {
		cfg.ConnectTimeout = ConfigDefault.ConnectTimeout
	}

	// Safe check for PoolConfig
	if cfg.PoolConfig == nil {
		cfg.PoolConfig = ConfigDefault.PoolConfig
	}

	// Safe check for SslOpts
	if cfg.SslOpts == nil {
		cfg.SslOpts = ConfigDefault.SslOpts
	}

	return cfg
}
