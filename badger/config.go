package badger

import (
	"time"

	"github.com/dgraph-io/badger/v3"
)

// Config defines the config for storage.
type Config struct {
	// Database name
	//
	// Optional. Default is "./fiber.badger"
	Database string

	// Reset clears any existing keys in existing Table
	//
	// Optional. Default is false
	Reset bool

	// Time before deleting expired keys
	//
	// Optional. Default is 10 * time.Second
	GCInterval time.Duration

	// BadgerOptions is a way to set options in badger
	//
	// Optional. Default is badger.DefaultOptions("./fiber.badger")
	BadgerOptions badger.Options

	// Logger is the default logger used by badger
	//
	// Optional. Default is nil
	Logger badger.Logger

	// UseLogger define if any logger will be used
	//
	// Optional. Default is false
	UseLogger bool
}

const defaultDatabase = "./fiber.badger"

// ConfigDefault is the default config
var ConfigDefault = Config{
	Database:      defaultDatabase,
	Reset:         false,
	GCInterval:    10 * time.Second,
	BadgerOptions: badger.DefaultOptions(defaultDatabase).WithLogger(nil),
	Logger:        nil,
	UseLogger:     false,
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
	if cfg.Database == "" {
		cfg.Database = ConfigDefault.Database
	}
	if int(cfg.GCInterval.Seconds()) <= 0 {
		cfg.GCInterval = ConfigDefault.GCInterval
	}
	overrideLogger := false
	// Detecting if no default Badger option was given
	// Also detects when a default badger option is given with a custom database name
	if cfg.BadgerOptions.ValueLogFileSize <= 0 || cfg.BadgerOptions.Dir == "" || cfg.BadgerOptions.ValueDir == "" ||
		(cfg.BadgerOptions.Dir == defaultDatabase && cfg.BadgerOptions.Dir != cfg.Database) {
		cfg.BadgerOptions = badger.DefaultOptions(cfg.Database)
		overrideLogger = true
	}
	if overrideLogger {
		if cfg.UseLogger && cfg.Logger != nil {
			cfg.BadgerOptions = cfg.BadgerOptions.WithLogger(cfg.Logger)
		} else if !cfg.UseLogger {
			cfg.BadgerOptions = cfg.BadgerOptions.WithLogger(nil)
		}
	}
	return cfg
}
