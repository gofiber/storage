package memcache

import "time"

// Config defines the config for storage.
type Config struct {
	// Server list divided by ,
	// i.e. server1:11211, server2:11212
	//
	// Optional. Default is "127.0.0.1:11211"
	Servers string

	// Reset clears any existing keys in existing Table
	//
	// Optional. Default is false
	Reset bool

	// The socket read/write timeout.
	//
	// Optional. Default is 100 * time.Millisecond
	timeout time.Duration

	// The maximum number of idle connections that will be maintained per address.
	//
	// Consider your expected traffic rates and latency carefully. This should
	// be set to a number higher than your peak parallel requests.
	//
	// Optional. Default is 2
	maxIdleConns int
}

// ConfigDefault is the default config
var ConfigDefault = Config{
	Servers:      "127.0.0.1:11211",
	timeout:      100 * time.Millisecond,
	maxIdleConns: 2,
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
	if len(cfg.Servers) < 1 {
		cfg.Servers = ConfigDefault.Servers
	}

	return cfg
}
