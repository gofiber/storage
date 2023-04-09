package redis

import (
	"crypto/tls"
	"runtime"
)

// Config defines the config for storage.
type Config struct {
	// Host name where the DB is hosted
	//
	// Optional. Default is "127.0.0.1"
	Host string

	// Port where the DB is listening on
	//
	// Optional. Default is 6379
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

	// EnableFailover to use redis FailoverClient with Sentinel instead of the standard redis Client
	//
	// Optional. Default is false
	EnableFailover bool

	// SentinelHosts where the Redis Sentinel is hosted
	//
	// Optional. Default is []string{}
	SentinelHosts []string

	// MasterName is the sentinel master's name
	//
	// Optional. Default is ""
	MasterName string

	// ClientName will execute the `CLIENT SETNAME ClientName` command for each sentinel conn.
	//
	// Optional. Default is ""
	ClientName string

	// SentinelUsername
	//
	// Optional. Default is ""
	SentinelUsername string

	// SentinelPassword
	//
	// Optional. Default is ""
	SentinelPassword string

	// Reset clears any existing keys in existing Collection
	//
	// Optional. Default is false
	Reset bool

	// TLS Config to use. When set TLS will be negotiated.
	//
	// Optional. Default is nil
	TLSConfig *tls.Config

	// Maximum number of socket connections.
	//
	// Optional. Default is 10 connections per every available CPU as reported by runtime.GOMAXPROCS.
	PoolSize int

	////////////////////////////////////
	// Adaptor related config options //
	////////////////////////////////////

	// https://pkg.go.dev/github.com/go-redis/redis/v8#Options
}

// ConfigDefault is the default config
var ConfigDefault = Config{
	Host:             "127.0.0.1",
	Port:             6379,
	Username:         "",
	Password:         "",
	URL:              "",
	Database:         0,
	Reset:            false,
	TLSConfig:        nil,
	PoolSize:         10 * runtime.GOMAXPROCS(0),
	EnableFailover:   false,
	MasterName:       "",
	SentinelHosts:    []string{},
	ClientName:       "",
	SentinelUsername: "",
	SentinelPassword: "",
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
