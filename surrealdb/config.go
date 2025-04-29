package surrealdb

import (
	"log"
	"strings"
	"time"
)

// Config holds the configuration required to initialize and connect to a SurrealDB instance.
// It includes authentication credentials, namespace/database selection, and default storage settings.
//
// Fields:
//   - ConnectionString: the full SurrealDB connection URL (e.g., "ws://localhost:8000").
//   - Namespace: the namespace to use when connecting to SurrealDB.
//   - Database: the database name within the specified namespace.
//   - Username: the SurrealDB root or application-level username for authentication.
//   - Password: the associated password for the given username.
//   - Access: optional field for token-based access (not always required).
//   - Scope: optional scope name for scoped authentication (e.g., user login scopes).
//   - DefaultTable: the default table name where key-value records will be stored.
type Config struct {
	// WebSocket connections (ws:// or wss://) are recommended over HTTP for better reliability
	ConnectionString string

	// The namespace to be used in SurrealDB
	Namespace string

	// The database to be used within the specified namespace
	Database string

	// The application username to connect to SurrealDB
	Username string

	// The application password to connect to SurrealDB
	Password string

	// Optional access token or access type
	Access string

	// Optional scope for scoped logins (e.g., user-defined scopes)
	Scope string

	// The default table used to store key-value records
	DefaultTable string

	// Optional. Default is 10 * time.Second
	GCInterval time.Duration
}

var ConfigDefault = Config{
	ConnectionString: "ws://localhost:8000",
	Namespace:        "fiber_storage",
	Database:         "fiber_storage",
	Username:         "root",
	Password:         "root",
	Access:           "full",
	Scope:            "all",
	DefaultTable:     "fiber_storage",
	GCInterval:       time.Second * 10,
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

	if cfg.Access == "" {
		cfg.Access = ConfigDefault.Access
	}

	if cfg.DefaultTable == "" {
		cfg.DefaultTable = ConfigDefault.DefaultTable
	}

	if !strings.HasPrefix(cfg.ConnectionString, "ws://") && !strings.HasPrefix(cfg.ConnectionString, "wss://") &&
		!strings.HasPrefix(cfg.ConnectionString, "http://") && !strings.HasPrefix(cfg.ConnectionString, "https://") {
		log.Printf("Warning: ConnectionString %s doesn't start with ws://, wss://, http:// or https://", cfg.ConnectionString)
	}

	if int(cfg.GCInterval.Seconds()) <= 0 {
		cfg.GCInterval = ConfigDefault.GCInterval
	}

	return cfg
}
