package fastcache

// Config defines the config for storage.
type Config struct {
	// MaxBytes maximum bytes of cache.
	MaxBytes int
}

var ConfigDefault = Config{
	MaxBytes: 32 * 1024 * 1024, // 32MB
}

func configDefault(config ...Config) Config {
	if len(config) < 1 {
		return ConfigDefault
	}
	cfg := config[0]

	if cfg.MaxBytes < ConfigDefault.MaxBytes {
		cfg.MaxBytes = ConfigDefault.MaxBytes
	}

	return cfg
}
