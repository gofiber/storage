package pebble

import (
	"time"

	"github.com/cockroachdb/pebble"
)

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

	// GCInterval is how often expired entries are reclaimed in the background.
	//
	// Optional. Default is 10 * time.Second
	GCInterval time.Duration
}

var ConfigDefault = Config{
	Path: "db",
	// Left nil on purpose, see the field documentation: a config that does not
	// set WriteOptions must not end up more durable than the default one.
	WriteOptions: nil,
	GCInterval:   10 * time.Second,
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
	if cfg.GCInterval <= 0 {
		cfg.GCInterval = ConfigDefault.GCInterval
	}
	return cfg
}
