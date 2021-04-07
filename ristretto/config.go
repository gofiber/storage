package ristretto

// Config defines the config for storage.
type Config struct {
	NumCounters int64
	MaxCost     int64
	BufferItems int64
	DefaultCost int64
}

var ConfigDefault = Config{
	NumCounters: 1e7,
	MaxCost:     1 << 30,
	BufferItems: 64,
	DefaultCost: 1,
}

func configDefault() Config {
	return ConfigDefault
}
