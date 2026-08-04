package pebble

import "github.com/cockroachdb/pebble"

type Config struct {
	// Path is the directory the database is stored in.
	//
	// Optional. Default is "db"
	Path string

	// WriteOptions are the options every write is issued with.
	//
	// Optional. Default is nil, which Pebble reads as a synchronous write.
	WriteOptions *pebble.WriteOptions
}

var ConfigDefault = Config{
	Path: "db",
	// Left nil on purpose: Pebble treats nil as Sync, and a config that does
	// not set WriteOptions must not end up more durable than the default one.
	WriteOptions: nil,
}

func configDefault(config ...Config) Config {
	// Return default config if nothing provided
	if len(config) < 1 {
		return ConfigDefault
	}
	cfg := config[0]
	if cfg.Path == "" {
		cfg.Path = ConfigDefault.Path
	}
	return cfg
}
