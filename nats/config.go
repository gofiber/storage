package nats

import (
	"context"

	"github.com/gofiber/fiber/v2/log"
	"github.com/nats-io/nats.go"
	"github.com/nats-io/nats.go/jetstream"
)

// Config defines the config for storage.
type Config struct {
	// Nats URL, default "nats://127.0.0.1:4222"
	URL string
	// Nats username
	Username string
	// Nats password
	Password string
	// Nats credentials file: https://docs.nats.io/using-nats/developer/connecting/creds
	CredentialsFile string
	// Nats client name
	ClientName string
	// Nats retry on failed connect: https://docs.nats.io/using-nats/developer/connecting/reconnect
	RetryOnFailedConnect bool
	// Nats max reconnect attempts: https://docs.nats.io/using-nats/developer/connecting/reconnect
	MaxReconnect int
	// Nats context
	Context context.Context
	// Nats key value config
	KeyValueConfig jetstream.KeyValueConfig
	// Logger. Using Fiber provides the AllLogger interface for adapting the various log libraries.
	Logger log.AllLogger
	// Use the Logger for nats events, default: false
	UseLogger bool
}

// ConfigDefault is the default config
var ConfigDefault = Config{
	URL:          nats.DefaultURL,
	Context:      context.Background(),
	MaxReconnect: nats.DefaultMaxReconnect,
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
	if cfg.URL == "" {
		cfg.URL = ConfigDefault.URL
	}
	if cfg.Context == nil {
		cfg.Context = ConfigDefault.Context
	}
	if len(cfg.KeyValueConfig.Bucket) == 0 {
		cfg.KeyValueConfig.Bucket = ConfigDefault.KeyValueConfig.Bucket
	}
	if cfg.UseLogger {
		if cfg.Logger == nil {
			cfg.Logger = log.DefaultLogger()
		}
	} else {
		cfg.Logger = nil
	}

	return cfg
}
