package pebble

import "github.com/cockroachdb/pebble"

type Config struct {
	// Path is the directory the database is stored in.
	//
	// Optional. Default is "db"
	Path string

	// WriteOptions are the options every write is issued with.
	//
	// Pebble reads nil as a synchronous write, so by default every Set and
	// Delete is flushed to disk before it returns. That is durable but slow,
	// on the order of a disk flush per write. Pass &pebble.WriteOptions{} (or
	// pebble.NoSync) to let Pebble buffer writes instead, at the cost of
	// losing the most recent ones if the process dies.
	//
	// Optional. Default is nil.
	WriteOptions *pebble.WriteOptions
}

var ConfigDefault = Config{
	Path: "db",
	// Left nil on purpose, see the field documentation: a config that does not
	// set WriteOptions must not end up more durable than the default one.
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
