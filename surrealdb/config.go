package surrealdb

type Config struct {
	ConnectionString string
	Namespace        string
	Database         string

	// auth
	Username string
	Password string
	Access   string
	Scope    string
}

var ConfigDefault = Config{
	ConnectionString: "ws://localhost:8000",
	Namespace:        "fiber_storage",
	Database:         "fiber_storage",
	Username:         "root",
	Password:         "root",
	Access:           "full",
	Scope:            "all",
}

func configDefault(config ...Config) Config {
	// Return default config if nothing provided
	if len(config) < 1 {
		return ConfigDefault
	}

	// Override default config
	cfg := config[0]

	// Set default values
	if cfg.ConnectionString == "" {
		cfg.ConnectionString = ConfigDefault.ConnectionString
	}
	if cfg.Namespace == "" {
		cfg.Namespace = ConfigDefault.Namespace
	}

	if cfg.Database == "" {
		cfg.Database = ConfigDefault.Database
	}

	if cfg.Username == "" {
		cfg.Username = ConfigDefault.Username
	}

	if cfg.Password == "" {
		cfg.Password = ConfigDefault.Password
	}

	if cfg.Scope == "" {
		cfg.Scope = ConfigDefault.Scope
	}

	return cfg
}
