package memcache

import "time"

// Config defines the config for storage.
type Config struct {
	// Server list divided by ,
	// i.e. server1:11211, server2:11212
	//
	// Optional. Default is "localhost:11211"
	Servers string

	// The socket read/write timeout.
	//
	// Optional. Default is 100 * time.Millisecond
	Timeout time.Duration

	// The maximum number of idle connections that will be maintained per address.
	//
	// Consider your expected traffic rates and latency carefully. This should
	// be set to a number higher than your peak parallel requests.
	//
	// Optional. Default is 2
	MaxIdleConns int
}

// ConfigDefault is the default config
var ConfigDefault = Config{
	Servers:      "localhost:11211",
	Timeout:      100 * time.Millisecond,
	MaxIdleConns: 2,
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
		cfg.Servers = ConfigDefault.TimServerseout
	}
	if int(cfg.Timeout) == 0 {
		cfg.Timeout = ConfigDefault.Timeout
	}
	if cfg.MaxIdleConns == 0 {
		cfg.MaxIdleConns = ConfigDefault.MaxIdleConns
	}

	return cfg
}
