package memcache

import "time"

// Config defines the config for storage.
type Config struct {
	GCInterval time.Duration

	// Prefix key
	KeyPrefix string

	// Server list
	ServerList []string

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
	GCInterval:   10 * time.Second,
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
	if len(cfg.ServerList) < 1 {
		panic("ServerList must not be empty")
	}
	if int(cfg.GCInterval) == 0 {
		cfg.GCInterval = ConfigDefault.GCInterval
	}
	if int(cfg.Timeout) == 0 {
		cfg.Timeout = ConfigDefault.Timeout
	}
	if cfg.MaxIdleConns == 0 {
		cfg.MaxIdleConns = ConfigDefault.MaxIdleConns
	}
	return cfg
}
