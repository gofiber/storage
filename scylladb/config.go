package scylladb

type Config struct {
	// Host name where the DB is hosted
	//
	// Optional. Default is "127.0.0.1"
	Hosts []string

	// Server username
	//
	// Optional. Default is ""
	Username string

	// Server password
	//
	// Optional. Default is ""
	Password string

	// Name of the keyspace
	//
	// Optional. Default is "scylla_db"
	Keyspace string

	// Level of the consistency
	//
	// Optional. Default is "LOCAL_ONE"
	Consistency string

	// Number of replication factor
	//
	// Optional. Default 1
	ReplicationFactor int

	// Database to be operated on in the cluster.
	//
	// Optional. Default is "scylla_table".
	Table string

	// Reset clears any existing keys in existing Table
	//
	// Optional. Default is false
	Reset bool
}

var ConfigDefault = Config{
	Hosts:             []string{"172.0.0.1"},
	Username:          "",
	Password:          "",
	Table:             "scylla_table",
	Keyspace:          "scylla_db",
	Consistency:       "LOCAL_ONE",
	ReplicationFactor: 1,
}

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
	if cfg.Keyspace == "" {
		cfg.Keyspace = ConfigDefault.Keyspace
	}
	if cfg.Table == "" {
		cfg.Table = ConfigDefault.Table
	}
	if cfg.Consistency == "" {
		cfg.Consistency = ConfigDefault.Consistency
	}
	if cfg.ReplicationFactor <= 0 {
		cfg.ReplicationFactor = ConfigDefault.ReplicationFactor
	}

	return cfg
}
