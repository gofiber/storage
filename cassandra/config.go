package cassandra

type Config struct {
	// Host name where the DB is hosted
	//
	// Optional. Default is "127.0.0.1"
	Host string

	// Port where the DB is listening on
	//
	// Optional. Default is 9042
	Port int

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
	// Optional. Default is "cassandra_db"
	Keyspace string

	// Number of replication factor
	//
	// Optional. Default 1
	ReplicationFactor int


	// Database to be operated on in the cluster.
	// 
	// Optional. Default is "".
	Table string

	// Reset clears any existing keys in existing Table
	//
	// Optional. Default is false
	Reset bool
}

var ConfigDefault = Config{
	Host:              "127.0.0.1",
	Port:              9042,
	Username:          "",
	Password:          "",
	Table:             "cassandra_table",
	Keyspace:          "cassandra_db",
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
	if cfg.Host == "" {
		cfg.Host = ConfigDefault.Host
	}
	if cfg.Port <= 0 {
		cfg.Port = ConfigDefault.Port
	}
	if cfg.Keyspace == "" {
		cfg.Keyspace = ConfigDefault.Keyspace
	}
	if cfg.Table == "" {
		cfg.Table = ConfigDefault.Table
	}

	if cfg.ReplicationFactor <= 0 {
		cfg.ReplicationFactor = ConfigDefault.ReplicationFactor
	}

	return cfg
}
