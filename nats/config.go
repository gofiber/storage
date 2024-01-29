package nats

import (
	"context"
	"log/slog"
	"os"

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
	// Nats max reconnects: https://docs.nats.io/using-nats/developer/connecting/reconnect
	MaxReconnects int
	// Nats context
	Context context.Context
	// Nats key value config
	KeyValueConfig jetstream.KeyValueConfig
	Logger         *slog.Logger
	// Applicable only if Logger is nil.
	// Until go 1.22, it is weird to set log level.
	// See https://github.com/golang/go/issues/62418
	LogLevel slog.Level
}

// ConfigDefault is the default config
var ConfigDefault = Config{
	URL: nats.DefaultURL,
	// RetryOnFailedConnect: true,
	Context: context.Background(),
	KeyValueConfig: jetstream.KeyValueConfig{
		Bucket: "fiber_storage",
	},
	Logger: slog.New(
		slog.NewTextHandler(
			os.Stdout,
			&slog.HandlerOptions{
				Level: slog.LevelError,
			},
		),
	),
	LogLevel: slog.LevelError,
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
	if cfg.Logger == nil {
		if cfg.LogLevel != ConfigDefault.LogLevel {
			cfg.Logger = slog.New(
				slog.NewTextHandler(
					os.Stdout,
					&slog.HandlerOptions{
						Level: cfg.LogLevel,
					},
				),
			)
		} else {
			cfg.Logger = ConfigDefault.Logger
		}
	}
	// if !cfg.RetryOnFailedConnect {
	// 	cfg.RetryOnFailedConnect = ConfigDefault.RetryOnFailedConnect
	// }

	return cfg
}
