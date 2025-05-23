package testredis

import (
	"context"
	"crypto/tls"
	"os"
	"strings"
	"testing"

	"github.com/stretchr/testify/require"
	"github.com/testcontainers/testcontainers-go"
	"github.com/testcontainers/testcontainers-go/modules/redis"
)

const (
	// Image is the default image used for running Redis in tests.
	Image       = "docker.io/redis:7"
	ImageEnvVar = "TEST_REDIS_IMAGE"
	Port        = "6379/tcp"
)

// Config represents the configuration for a Redis container
type Config struct {
	// TLS settings
	UseTLS       bool
	SecureURL    bool
	MTLSDisabled bool
	UseAddress   bool
	UseHostPort  bool
	UseURL       bool
	// Image is the image to use for the Redis container
	//
	// Optional. Default is "docker.io/redis:7", but could be set to Valkey.
	Image string
}

// Option is a function that configures a Config
type Option func(*Config)

// WithTLS configures the container to use TLS
func WithTLS(secureURL bool, mtlsDisabled bool) Option {
	return func(c *Config) {
		c.UseTLS = true
		c.SecureURL = secureURL
		c.MTLSDisabled = mtlsDisabled
	}
}

// WithAddress sets the container to use address-based connection
func WithAddress() Option {
	return func(c *Config) {
		c.UseAddress = true
	}
}

// WithHostPort sets the container to use host and port based connection
func WithHostPort() Option {
	return func(c *Config) {
		c.UseHostPort = true
	}
}

// WithURL sets the container to use a URL
func WithURL(useContainerURI bool) Option {
	return func(c *Config) {
		c.UseURL = useContainerURI
	}
}

// WithImage sets the image to use for the Redis container
func WithImage(image string) Option {
	return func(c *Config) {
		c.Image = image
	}
}

// Container represents a running Redis container
type Container struct {
	URL       string
	cmds      []string
	Addrs     []string
	Host      string
	Port      int
	TLSConfig *tls.Config
}

// Start starts a Redis container for testing and returns its configuration
func Start(t testing.TB, opts ...Option) *Container {
	t.Helper()

	config := &Config{
		UseURL: true, // by default, use the URL provided by the testcontainer
	}
	for _, o := range opts {
		o(config)
	}

	img := Image
	if imgFromEnv := os.Getenv(ImageEnvVar); imgFromEnv != "" {
		img = imgFromEnv
	}

	if config.Image != "" {
		img = config.Image
	}

	ctx := context.Background()
	tcOpts := []testcontainers.ContainerCustomizer{}

	var cmds []string
	if config.UseTLS {
		tcOpts = append(tcOpts, redis.WithTLS())

		cmds = append(cmds,
			"--port", "0",
			"--tls-port", "6379",
			"--tls-cert-file", "/tls/server.crt",
			"--tls-key-file", "/tls/server.key",
			"--tls-ca-cert-file", "/tls/ca.crt",
		)

		cmds = append(cmds, "--tls-auth-clients", func() string {
			if config.MTLSDisabled {
				return "no"
			}
			return "yes"
		}())

		tcOpts = append(tcOpts, testcontainers.WithCmd(cmds...))
	}

	c, err := redis.Run(ctx, img, tcOpts...)
	testcontainers.CleanupContainer(t, c)
	require.NoError(t, err)

	ctr := &Container{
		TLSConfig: c.TLSConfig(),
		cmds:      cmds,
	}

	uri, err := c.ConnectionString(ctx)
	require.NoError(t, err)

	if config.UseHostPort {
		host, err := c.Host(ctx)
		require.NoError(t, err)

		port, err := c.MappedPort(ctx, Port)
		require.NoError(t, err)

		ctr.Host = host
		ctr.Port = port.Int()
	}

	if config.UseAddress {
		// trim the schemes from the URI
		addr := strings.TrimPrefix(uri, "redis://")
		addr = strings.TrimPrefix(addr, "rediss://")
		ctr.Addrs = []string{addr}
	}

	if config.UseURL {
		ctr.URL = uri
		if !config.SecureURL {
			// Replace the scheme with the insecure one
			ctr.URL = strings.Replace(ctr.URL, "rediss://", "redis://", 1)
		}
	}

	return ctr
}
