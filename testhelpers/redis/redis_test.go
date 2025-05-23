package testredis

import (
	"context"
	"strings"
	"testing"

	"github.com/redis/go-redis/v9"

	"github.com/stretchr/testify/require"
)

func TestStart(t *testing.T) {
	t.Run("default-configuration", func(t *testing.T) {
		ctr := Start(t)
		require.NotEmpty(t, ctr.URL)
		require.True(t, strings.HasPrefix(ctr.URL, "redis://"))
		require.Nil(t, ctr.TLSConfig)
		require.Empty(t, ctr.Addrs)
		require.Empty(t, ctr.Host)
		require.Zero(t, ctr.Port)
	})

	t.Run("with-custom-image", func(t *testing.T) {
		customImage := "docker.io/redis:6"
		ctr := Start(t, WithImage(customImage))
		require.True(t, strings.HasPrefix(ctr.URL, "redis://"))
		require.Nil(t, ctr.TLSConfig)
		require.Empty(t, ctr.Addrs)
		require.Empty(t, ctr.Host)
		require.Zero(t, ctr.Port)
	})

	t.Run("with-image-from-env", func(t *testing.T) {
		envImage := "docker.io/redis:7"
		t.Setenv(ImageEnvVar, envImage)

		ctr := Start(t)
		require.True(t, strings.HasPrefix(ctr.URL, "redis://"))
		require.Nil(t, ctr.TLSConfig)
		require.Empty(t, ctr.Addrs)
		require.Empty(t, ctr.Host)
		require.Zero(t, ctr.Port)
	})

	t.Run("with-tls", func(t *testing.T) {
		t.Run("secure-url", func(t *testing.T) {
			t.Run("mtls-enabled", func(t *testing.T) {
				t.Parallel()

				ctr := Start(t, WithTLS(true, false))
				require.NotEmpty(t, ctr.URL)
				require.True(t, strings.HasPrefix(ctr.URL, "rediss://"))
				require.NotNil(t, ctr.TLSConfig)
				require.Empty(t, ctr.Addrs)
				require.Empty(t, ctr.Host)
				require.Zero(t, ctr.Port)
				require.Contains(t, ctr.cmds, "--tls-auth-clients", "yes")
			})

			t.Run("mtls-disabled", func(t *testing.T) {
				t.Parallel()

				ctr := Start(t, WithTLS(true, true))
				require.NotEmpty(t, ctr.URL)
				require.True(t, strings.HasPrefix(ctr.URL, "rediss://"))
				require.NotNil(t, ctr.TLSConfig)
				require.Contains(t, ctr.cmds, "--tls-auth-clients", "no")
			})
		})

		t.Run("insecure-url", func(t *testing.T) {
			t.Run("mtls-disabled", func(t *testing.T) {
				t.Parallel()

				ctr := Start(t, WithTLS(false, true))
				require.NotEmpty(t, ctr.URL)
				require.True(t, strings.HasPrefix(ctr.URL, "redis://"))
				require.NotNil(t, ctr.TLSConfig)
				require.Empty(t, ctr.Addrs)
				require.Empty(t, ctr.Host)
				require.Zero(t, ctr.Port)
			})

			t.Run("mtls-enabled", func(t *testing.T) {
				t.Parallel()

				ctr := Start(t, WithTLS(false, false))
				require.NotEmpty(t, ctr.URL)
				require.True(t, strings.HasPrefix(ctr.URL, "redis://"))
				require.NotNil(t, ctr.TLSConfig)
				require.Empty(t, ctr.Addrs)
				require.Empty(t, ctr.Host)
				require.Zero(t, ctr.Port)
			})
		})
	})

	t.Run("with-host-and-port", func(t *testing.T) {
		t.Parallel()

		ctr := Start(t, WithHostPort())
		require.NotEmpty(t, ctr.Host)
		require.NotZero(t, ctr.Port)
		require.NotEmpty(t, ctr.URL)
		require.Empty(t, ctr.Addrs)
	})

	t.Run("with-address", func(t *testing.T) {
		t.Parallel()

		ctr := Start(t, WithAddress())
		require.NotEmpty(t, ctr.Addrs)
		require.Len(t, ctr.Addrs, 1)
		require.NotEmpty(t, ctr.URL)
		require.Empty(t, ctr.Host)
		require.Zero(t, ctr.Port)
	})

	t.Run("with-url", func(t *testing.T) {
		t.Parallel()

		ctr := Start(t, WithURL(true))
		require.NotEmpty(t, ctr.URL)
		require.True(t, strings.HasPrefix(ctr.URL, "redis://"))
	})

	t.Run("with-multiple-options", func(t *testing.T) {
		t.Run("address/url", func(t *testing.T) {
			t.Run("no-tls", func(t *testing.T) {
				t.Parallel()

				ctr := Start(t,
					WithAddress(),
					WithURL(true),
				)
				require.NotEmpty(t, ctr.URL)
				require.True(t, strings.HasPrefix(ctr.URL, "redis://"))
				require.NotEmpty(t, ctr.Addrs)
				require.Len(t, ctr.Addrs, 1)
				require.Empty(t, ctr.Host)
				require.Zero(t, ctr.Port)
			})

			t.Run("tls", func(t *testing.T) {
				t.Parallel()

				ctr := Start(t,
					WithTLS(true, false),
					WithAddress(),
					WithURL(true),
				)
				require.NotEmpty(t, ctr.URL)
				require.True(t, strings.HasPrefix(ctr.URL, "rediss://"))
				require.NotEmpty(t, ctr.Addrs)
				require.Len(t, ctr.Addrs, 1)
				require.Empty(t, ctr.Host)
				require.Zero(t, ctr.Port)
			})
		})
	})

	t.Run("can-connect", func(t *testing.T) {
		ctr := Start(t)

		options, err := redis.ParseURL(ctr.URL)
		require.NoError(t, err)

		// Use go-redis client to verify connectivity
		client := redis.NewUniversalClient(&redis.UniversalOptions{
			Addrs:     []string{options.Addr},
			TLSConfig: ctr.TLSConfig,
			Username:  options.Username,
			Password:  options.Password,
			DB:        options.DB,
		})
		defer client.Close()

		// Ping should succeed and return "PONG"
		resp := client.Ping(context.Background())
		require.NoError(t, resp.Err())
		require.Equal(t, "PONG", resp.Val())
	})
}

func TestConfig(t *testing.T) {
	t.Run("with-tls", func(t *testing.T) {
		config := &Config{}
		WithTLS(true, false)(config)
		require.True(t, config.UseTLS)
		require.True(t, config.SecureURL)
		require.False(t, config.MTLSDisabled)
	})

	t.Run("with-address", func(t *testing.T) {
		config := &Config{}
		WithAddress()(config)
		require.True(t, config.UseAddress)
	})

	t.Run("with-host-port", func(t *testing.T) {
		config := &Config{}
		WithHostPort()(config)
		require.True(t, config.UseHostPort)
	})

	t.Run("with-url", func(t *testing.T) {
		config := &Config{}
		WithURL(true)(config)
		require.True(t, config.UseURL)
	})

	t.Run("with-image", func(t *testing.T) {
		customImage := "docker.io/redis:6"
		config := &Config{}
		WithImage(customImage)(config)
		require.Equal(t, customImage, config.Image)
	})
}
