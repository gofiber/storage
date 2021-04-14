package ristretto

// Config defines the config for storage.
type Config struct {
	// NumCounters number of keys to track frequency of (10M).
	NumCounters int64

	// MaxCost maximum cost of cache (1GB).
	MaxCost int64

	// BufferItems number of keys per Get buffer.
	BufferItems int64
	DefaultCost int64
}

var ConfigDefault = Config{
	NumCounters: 1e7,
	MaxCost:     1 << 30,
	BufferItems: 64,
	DefaultCost: 1,
}

func configDefault(config ...Config) Config {
	if len(config) < 1 {
		return ConfigDefault
	}
	cfg := config[0]

	if cfg.NumCounters < 1 {
		cfg.NumCounters = ConfigDefault.NumCounters
	}

	if cfg.MaxCost < 1 {
		cfg.MaxCost = ConfigDefault.MaxCost
	}

	if cfg.BufferItems < 1 {
		cfg.BufferItems = ConfigDefault.BufferItems
	}

	if cfg.DefaultCost == 0 {
		cfg.DefaultCost = ConfigDefault.DefaultCost
	}

	return cfg
}
