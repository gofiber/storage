package pebble

import "github.com/cockroachdb/pebble"

type Config struct {
	Path         string
	WriteOptions *pebble.WriteOptions
}

var ConfigDefault = Config{
	Path:         "db",
	WriteOptions: &pebble.WriteOptions{},
}

func configDefault(config ...Config) Config {
	if len(config) < 1 {
		return configDefault(config...)
	}
	cfg := config[0]
	if cfg.Path == "" {
		cfg.Path = ConfigDefault.Path
	}
	return cfg
}
