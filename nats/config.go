package nats

import (
	"context"

	"github.com/gofiber/fiber/v2/log"
	"github.com/nats-io/nats.go"
	"github.com/nats-io/nats.go/jetstream"
)

// Config defines the config for storage.
type Config struct {
	// Nats URLs, default "nats://127.0.0.1:4222". Can be comma separated list for multiple servers
	URLs string
	// Nats connection options. See nats_test.go for an example of how to use this.
	NatsOptions []nats.Option
	// Nats connection name
	ClientName string
	// Nats context
	Context context.Context
	// Nats key value config
	KeyValueConfig jetstream.KeyValueConfig
	// Logger. Using Fiber provides the AllLogger interface for adapting the various log libraries.
	Logger log.AllLogger
	// Use the Logger for nats events, default: false
	Verbose bool
}

// ConfigDefault is the default config
var ConfigDefault = Config{
	URLs:       nats.DefaultURL,
	Context:    context.Background(),
	ClientName: "fiber_storage",
	KeyValueConfig: jetstream.KeyValueConfig{
		Bucket: "fiber_storage",
	},
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
	if cfg.URLs == "" {
		cfg.URLs = ConfigDefault.URLs
	}
	if cfg.Context == nil {
		cfg.Context = ConfigDefault.Context
	}
	if len(cfg.KeyValueConfig.Bucket) == 0 {
		cfg.KeyValueConfig.Bucket = ConfigDefault.KeyValueConfig.Bucket
	}
	if cfg.Verbose {
		if cfg.Logger == nil {
			cfg.Logger = log.DefaultLogger()
		}
	} else {
		cfg.Logger = nil
	}
	if cfg.ClientName == "" {
		cfg.ClientName = ConfigDefault.ClientName
	}

	return cfg
}
