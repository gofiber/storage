package testredis

import (
	"context"
	"crypto/tls"
	"strings"
	"testing"

	"github.com/stretchr/testify/require"
	"github.com/testcontainers/testcontainers-go"
	"github.com/testcontainers/testcontainers-go/modules/redis"
)

const (
	Port = "6379/tcp"
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
	name         string
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

// WithReuse sets the container to be reused,
// providing a name to identify the container.
// This container is not cleaned up when the test completes.
func WithReuse(name string) Option {
	return func(c *Config) {
		c.name = name
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
func Start(t testing.TB, img string, opts ...Option) *Container {
	t.Helper()

	config := &Config{
		UseURL: true, // by default, use the URL provided by the testcontainer
	}
	for _, o := range opts {
		o(config)
	}

	if img == "" {
		panic("Redis image is not set: callers must provide a non-empty image parameter")
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

	if config.name != "" {
		tcOpts = append(tcOpts, testcontainers.WithReuseByName(config.name))
	}

	c, err := redis.Run(ctx, img, tcOpts...)
	if config.name == "" {
		// only cleanup the container if it's not being reused
		testcontainers.CleanupContainer(t, c)
	}
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
