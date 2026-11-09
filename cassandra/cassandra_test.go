package cassandra

import (
	"context"
	"crypto/tls"
	"crypto/x509"
	"errors"
	"fmt"
	"math"
	"net"
	"os"
	"sync"
	"testing"
	"time"

	"github.com/gocql/gocql"
	"github.com/stretchr/testify/require"
	"github.com/testcontainers/testcontainers-go"
	"github.com/testcontainers/testcontainers-go/modules/cassandra"
)

const (
	// cassandraImage is the default image used for running cassandra in tests.
	cassandraImage              = "public.ecr.aws/docker/library/cassandra:latest"
	cassandraImageEnvVar string = "TEST_CASSANDRA_IMAGE"
	cassandraPort               = "9042/tcp"
)

// newTestStore creates a Cassandra container using the official module
func newTestStore(t testing.TB) *Storage {
	t.Helper()

	ctx := context.Background()

	c, err := cassandra.Run(ctx, testImage())
	testcontainers.CleanupContainer(t, c)
	require.NoError(t, err)

	connectionHost, err := c.ConnectionHost(ctx)
	require.NoError(t, err)

	store, err := New(Config{
		Hosts:       []string{connectionHost},
		Keyspace:    "test_cassandra",
		Table:       "test_kv",
		Consistency: gocql.One,
		Expiration:  10 * time.Second,
	})
	require.NoError(t, err)

	return store
}

// testImage returns the Cassandra image to run, honoring the TEST_CASSANDRA_IMAGE override.
func testImage() string {
	if imgFromEnv := os.Getenv(cassandraImageEnvVar); imgFromEnv != "" {
		return imgFromEnv
	}
	return cassandraImage
}

// runTLSContainer starts a Cassandra container with TLS enabled and returns the SSL host
// together with the client TLS config that trusts the container's generated CA.
func runTLSContainer(t testing.TB) (host string, tlsConfig *tls.Config) {
	t.Helper()

	ctx := context.Background()

	c, err := cassandra.Run(ctx, testImage(), cassandra.WithTLS())
	testcontainers.CleanupContainer(t, c)
	require.NoError(t, err)

	host, err = c.ConnectionHost(ctx)
	require.NoError(t, err)

	tlsConfig, err = c.TLSConfig()
	require.NoError(t, err)
	require.NotNil(t, tlsConfig)

	return host, tlsConfig
}

// Test_TLS verifies the storage works over a TLS connection and rejects untrusted or missing TLS.
// The subtests share one container because starting Cassandra is slow.
func Test_TLS(t *testing.T) {
	host, tlsConfig := runTLSContainer(t)

	t.Run("trusted CA", func(t *testing.T) {
		store, err := New(Config{
			Hosts:       []string{host},
			Keyspace:    "test_cassandra_tls",
			Table:       "test_kv",
			Consistency: gocql.One,
			SslOpts: &gocql.SslOptions{
				Config:                 tlsConfig,
				EnableHostVerification: true,
			},
		})
		require.NoError(t, err)
		defer store.Close()

		require.NoError(t, store.Set("tls-key", []byte("tls-value"), 0))

		val, err := store.Get("tls-key")
		require.NoError(t, err)
		require.Equal(t, []byte("tls-value"), val)

		require.NoError(t, store.Delete("tls-key"))

		val, err = store.Get("tls-key")
		require.NoError(t, err)
		require.Nil(t, val)
	})

	t.Run("untrusted CA", func(t *testing.T) {
		// An empty root pool trusts no CA, so verifying the server certificate must fail.
		untrusted := tlsConfig.Clone()
		untrusted.RootCAs = x509.NewCertPool()

		store, err := New(Config{
			Hosts:          []string{host},
			Keyspace:       "test_cassandra_tls",
			Table:          "test_kv",
			Consistency:    gocql.One,
			ConnectTimeout: 2 * time.Second,
			SslOpts: &gocql.SslOptions{
				Config:                 untrusted,
				EnableHostVerification: true,
			},
		})
		require.Error(t, err)
		require.Nil(t, store)
	})

	t.Run("plaintext to TLS port", func(t *testing.T) {
		store, err := New(Config{
			Hosts:          []string{host},
			Keyspace:       "test_cassandra_tls",
			Table:          "test_kv",
			Consistency:    gocql.One,
			ConnectTimeout: 2 * time.Second,
		})
		require.Error(t, err)
		require.Nil(t, store)
	})
}

// Test_Set tests the Set operation
func Test_Set(t *testing.T) {
	store := newTestStore(t)
	defer store.Close()

	// Test Set
	err := store.Set("test", []byte("value"), 0)
	require.NoError(t, err)

	// Verify the value was set
	val, err := store.Get("test")
	require.NoError(t, err)
	require.Equal(t, []byte("value"), val)
}

func Test_SetWithContext(t *testing.T) {
	store := newTestStore(t)
	defer store.Close()

	// Test SetWithContext
	ctx, cancel := context.WithCancel(context.Background())
	cancel()
	err := store.SetWithContext(ctx, "test", []byte("value"), 0)
	require.ErrorIs(t, err, context.Canceled)

	val, err := store.Get("test")
	require.NoError(t, err)
	require.Empty(t, val)
}

// Test_Get tests the Get operation
func Test_Get(t *testing.T) {
	store := newTestStore(t)
	defer store.Close()

	// Set a value first
	err := store.Set("test", []byte("value"), 0)
	require.NoError(t, err)

	// Test Get
	val, err := store.Get("test")
	require.NoError(t, err)
	require.Equal(t, []byte("value"), val)

	val, err = store.Get("nonexistent")
	require.NoError(t, err)
	require.Nil(t, val)
}

// Test_GetWithContext tests the Get operation with context
func Test_GetWithContext(t *testing.T) {
	store := newTestStore(t)
	defer store.Close()

	// Set a value first
	err := store.Set("test", []byte("value"), 0)
	require.NoError(t, err)

	// Test GetWithContext
	ctx, cancel := context.WithCancel(context.Background())
	cancel()
	val, err := store.GetWithContext(ctx, "test")
	require.ErrorIs(t, err, context.Canceled)
	require.Nil(t, val)

	// Verify the value still exists
	val, err = store.Get("test")
	require.NoError(t, err)
	require.Equal(t, []byte("value"), val)
}

// Test_Delete tests the Delete operation
func Test_Delete(t *testing.T) {
	store := newTestStore(t)
	defer store.Close()

	// Set a value first
	err := store.Set("test", []byte("value"), 0)
	require.NoError(t, err)

	// Verify the value exists
	val, err := store.Get("test")
	require.NoError(t, err)
	require.Equal(t, []byte("value"), val)

	// Test Delete
	err = store.Delete("test")
	require.NoError(t, err)

	val, err = store.Get("test")
	require.NoError(t, err)
	require.Nil(t, val)
}

// Test_DeleteWithContext tests the Delete operation with context
func Test_DeleteWithContext(t *testing.T) {
	store := newTestStore(t)
	defer store.Close()

	// Set a value first
	err := store.Set("test", []byte("value"), 0)
	require.NoError(t, err)

	// Verify the value exists
	val, err := store.Get("test")
	require.NoError(t, err)
	require.Equal(t, []byte("value"), val)

	// Test DeleteWithContext
	ctx, cancel := context.WithCancel(context.Background())
	cancel()
	err = store.DeleteWithContext(ctx, "test")
	require.ErrorIs(t, err, context.Canceled)

	// Verify the value still exists
	val, err = store.Get("test")
	require.NoError(t, err)
	require.Equal(t, []byte("value"), val)
}

// Test_Expirable_Keys tests the expirable keys functionality
func Test_Expirable_Keys(t *testing.T) {
	store := newTestStore(t)
	defer store.Close()

	// Set key with 1 second expiration
	err := store.Set("test", []byte("value"), time.Second)
	require.NoError(t, err)

	// Verify key exists
	val, err := store.Get("test")
	require.NoError(t, err)
	require.Equal(t, []byte("value"), val)

	// An expired key is a miss, which the storage interface documents as nil, nil.
	require.Eventually(t, func() bool {
		val, err := store.Get("test")
		return err == nil && val == nil
	}, 4*time.Second, 100*time.Millisecond, "Key should expire")
}

// Test_Concurrent_Access tests concurrent access to the storage
func Test_Concurrent_Access(t *testing.T) {
	store := newTestStore(t)
	defer store.Close()

	var wg sync.WaitGroup
	for i := 0; i < 10; i++ {
		wg.Add(1)
		go func(i int) {
			defer wg.Done()
			key := fmt.Sprintf("key%d", i)
			value := []byte(fmt.Sprintf("value%d", i))

			err := store.Set(key, value, 0)
			require.NoError(t, err)

			val, err := store.Get(key)
			require.NoError(t, err)
			require.Equal(t, value, val)
		}(i)
	}
	wg.Wait()
}

// Test_Reset tests the Reset method
func Test_Reset(t *testing.T) {
	store := newTestStore(t)
	defer store.Close()

	// Add some data
	err := store.Set("test1", []byte("value1"), 0)
	require.NoError(t, err)
	err = store.Set("test2", []byte("value2"), 0)
	require.NoError(t, err)

	// Reset storage
	err = store.Reset()
	require.NoError(t, err)

	val, err := store.Get("test1")
	require.NoError(t, err)
	require.Nil(t, val)

	val, err = store.Get("test2")
	require.NoError(t, err)
	require.Nil(t, val)
}

// Test_ResetWithContext tests the Reset method with context
func Test_ResetWithContext(t *testing.T) {
	store := newTestStore(t)
	defer store.Close()

	// Add some data
	err := store.Set("test1", []byte("value1"), 0)
	require.NoError(t, err)
	err = store.Set("test2", []byte("value2"), 0)
	require.NoError(t, err)

	// Reset storage with context
	ctx, cancel := context.WithCancel(context.Background())
	cancel()
	err = store.ResetWithContext(ctx)
	require.ErrorIs(t, err, context.Canceled)

	// Verify data is still there
	val, err := store.Get("test1")
	require.NoError(t, err)
	require.Equal(t, []byte("value1"), val)

	val, err = store.Get("test2")
	require.NoError(t, err)
	require.Equal(t, []byte("value2"), val)
}

// Test_Valid_Identifiers tests valid identifier cases
func Test_Valid_Identifiers(t *testing.T) {
	store := newTestStore(t)
	defer store.Close()

	validCases := []struct {
		name string
		key  string
	}{
		{"test", "test"},
		{"test123", "test123"},
		{"test_123", "test_123"},
		{"TEST", "TEST"},
		{"Test123", "Test123"},
	}

	for _, tc := range validCases {
		t.Run(tc.name, func(t *testing.T) {
			err := store.Set(tc.key, []byte("value"), 0)
			require.NoError(t, err)
		})
	}
}

// Keys are bound as query parameters, so anything dangerous spliced into a statement round-trips unchanged.
func Test_Unusual_Keys(t *testing.T) {
	store := newTestStore(t)
	defer store.Close()

	keys := []struct {
		name string
		key  string
	}{
		{"space", "test key"},
		{"quote", `test"key`},
		{"semicolon", "test;key"},
		{"sql_injection", "test' OR '1'='1"},
		{"unicode", "test\u2028key"},
		{"colon", "user:123"},
	}

	for _, tc := range keys {
		t.Run(tc.name, func(t *testing.T) {
			require.NoError(t, store.Set(tc.key, []byte("value"), 0))

			val, err := store.Get(tc.key)
			require.NoError(t, err)
			require.Equal(t, []byte("value"), val)

			require.NoError(t, store.Delete(tc.key))
		})
	}
}

// Both are ignored without an error, and nothing is written for either.
func Test_Empty_Key_Or_Value(t *testing.T) {
	store := newTestStore(t)
	defer store.Close()

	countRows := func() int {
		var count int
		require.NoError(t, store.Conn().Query(
			fmt.Sprintf("SELECT COUNT(*) FROM %s.%s", store.keyspace, store.table),
		).Scan(&count))
		return count
	}

	require.Zero(t, countRows(), "the table should start empty")

	require.NoError(t, store.Set("", []byte("value"), 0))
	require.NoError(t, store.Set("empty-value", nil, 0))

	// Reading back is not enough: a row under an empty key would also read back as nothing, so count rows.
	require.Zero(t, countRows(), "neither call should have written a row")

	val, err := store.Get("empty-value")
	require.NoError(t, err)
	require.Zero(t, len(val))
}

func Benchmark_Cassandra_Set(b *testing.B) {
	store := newTestStore(b)
	defer store.Close()

	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		err = store.Set("john", []byte("doe"), 0)
	}
	require.NoError(b, err)
}

func Benchmark_Cassandra_Get(b *testing.B) {
	store := newTestStore(b)
	defer store.Close()

	err := store.Set("john", []byte("doe"), 0)
	require.NoError(b, err)

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_, err = store.Get("john")
	}
	require.NoError(b, err)
}

func Benchmark_Cassandra_Set_And_Delete(b *testing.B) {
	store := newTestStore(b)
	defer store.Close()

	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		_ = store.Set("john", []byte("doe"), 0)
		err = store.Delete("john")
	}
	require.NoError(b, err)
}

func Test_Cassandra_NewFromConnection(t *testing.T) {
	store := newTestStore(t)
	defer store.Close()

	shared, err := NewFromConnection(store.Conn(), Config{
		Keyspace: "test_cassandra",
		Table:    "test_kv_existing",
	})
	require.NoError(t, err)
	require.Same(t, store.Conn(), shared.Conn())

	require.NoError(t, shared.Set("john", []byte("doe"), 0))

	val, err := shared.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), val)

	// The session is the caller's, so closing this storage must leave it usable.
	require.NoError(t, shared.Close())
	require.NoError(t, store.Set("jane", []byte("doe"), 0))
	require.ErrorIs(t, shared.Set("jane", []byte("doe"), 0), ErrClosed)
}

func Test_Cassandra_NewFromConnection_Nil(t *testing.T) {
	_, err := NewFromConnection(nil, Config{})
	require.Error(t, err)
}

// closedListenerAddr returns a loopback address nothing listens on, so connecting is refused immediately.
func closedListenerAddr(t testing.TB) string {
	t.Helper()

	ln, err := net.Listen("tcp", "127.0.0.1:0")
	require.NoError(t, err)
	addr := ln.Addr().String()
	require.NoError(t, ln.Close())

	return addr
}

func Test_validateIdentifier(t *testing.T) {
	t.Parallel()

	valid := []string{"a", "test", "test_123", "TEST", "_leading", "x9"}
	for _, name := range valid {
		got, err := validateIdentifier(name, "table")
		require.NoError(t, err, name)
		require.Equal(t, name, got)
	}

	invalid := []struct {
		name    string
		input   string
		message string
	}{
		{"empty", "", "cannot be empty"},
		{"space", "a b", "cannot contain whitespace"},
		{"tab", "a\tb", "cannot contain whitespace"},
		{"newline", "a\nb", "cannot contain whitespace"},
		{"semicolon", "a;b", "cannot contain special characters"},
		{"single quote", "a'b", "cannot contain special characters"},
		{"double quote", `a"b`, "cannot contain special characters"},
		{"dash", "a-b", "cannot contain special characters"},
		{"dot", "a.b", "cannot contain special characters"},
		{"unicode", "café", "cannot contain unicode characters"},
		{"punctuation", "a$b", "can only contain letters, numbers, and underscores"},
		{"slash", "a/b", "can only contain letters, numbers, and underscores"},
	}
	for _, tc := range invalid {
		t.Run(tc.name, func(t *testing.T) {
			got, err := validateIdentifier(tc.input, "keyspace")
			require.ErrorContains(t, err, "invalid keyspace name")
			require.ErrorContains(t, err, tc.message)
			require.Empty(t, got)
		})
	}
}

func Test_validatedConfig(t *testing.T) {
	t.Parallel()

	cfg, keyspace, table, err := validatedConfig(Config{})
	require.NoError(t, err)
	require.Equal(t, ConfigDefault.Keyspace, keyspace)
	require.Equal(t, ConfigDefault.Table, table)
	require.Equal(t, ConfigDefault.Hosts, cfg.Hosts)
}

func Test_configDefault(t *testing.T) {
	t.Parallel()

	t.Run("no config", func(t *testing.T) {
		require.Equal(t, ConfigDefault, configDefault())
	})

	t.Run("zero config gets defaults", func(t *testing.T) {
		// An empty Config takes each default field by field, unlike no config at all.
		cfg := configDefault(Config{})
		require.Equal(t, ConfigDefault, cfg)
	})

	t.Run("custom values are kept", func(t *testing.T) {
		pool := &gocql.PoolConfig{}
		ssl := &gocql.SslOptions{}
		in := Config{
			Hosts:          []string{"example:9042"},
			Keyspace:       "ks",
			Table:          "tbl",
			Consistency:    gocql.One,
			PoolConfig:     pool,
			SslOpts:        ssl,
			Expiration:     time.Minute,
			Reset:          true,
			MaxRetries:     7,
			ConnectTimeout: time.Second,
		}
		require.Equal(t, in, configDefault(in))
	})

	t.Run("negative expiration is disabled", func(t *testing.T) {
		require.Zero(t, configDefault(Config{Expiration: -time.Second}).Expiration)
	})
}

func Test_ttlSeconds(t *testing.T) {
	t.Parallel()

	cases := []struct {
		name string
		in   time.Duration
		want int
	}{
		{"one nanosecond rounds up", time.Nanosecond, 1},
		{"sub second rounds up", 500 * time.Millisecond, 1},
		{"whole second", time.Second, 1},
		{"just over a second", time.Second + time.Nanosecond, 2},
		{"minute", time.Minute, 60},
		{"clamped to the maximum", time.Duration(math.MaxInt64), maxTTLSeconds},
		{"exactly the maximum", maxTTLSeconds * time.Second, maxTTLSeconds},
	}
	for _, tc := range cases {
		t.Run(tc.name, func(t *testing.T) {
			require.Equal(t, tc.want, ttlSeconds(tc.in))
		})
	}
}

func Test_New_InvalidConfig(t *testing.T) {
	t.Parallel()

	store, err := New(Config{Keyspace: "bad;keyspace"})
	require.ErrorContains(t, err, "invalid keyspace name")
	require.Nil(t, store)

	store, err = New(Config{Table: "bad.table"})
	require.ErrorContains(t, err, "invalid table name")
	require.Nil(t, store)
}

func Test_NewFromConnection_InvalidConfig(t *testing.T) {
	t.Parallel()

	// Validation runs before the session is touched, so a zero session is enough here.
	store, err := NewFromConnection(&gocql.Session{}, Config{Keyspace: "bad keyspace"})
	require.ErrorContains(t, err, "invalid keyspace name")
	require.Nil(t, store)

	store, err = NewFromConnection(&gocql.Session{}, Config{Table: "bad-table"})
	require.ErrorContains(t, err, "invalid table name")
	require.Nil(t, store)
}

func Test_New_UnreachableHost(t *testing.T) {
	t.Parallel()

	store, err := New(Config{
		Hosts:          []string{closedListenerAddr(t)},
		Consistency:    gocql.One,
		ConnectTimeout: time.Second,
	})
	require.ErrorContains(t, err, "cassandra storage init")
	require.ErrorContains(t, err, "failed to connect to system keyspace")
	require.Nil(t, store)
}

// Every operation reports ErrClosed once Close ran, and Close itself is safe to repeat and to run on a
// storage that never got a session.
func Test_Closed_Storage(t *testing.T) {
	t.Parallel()

	store := &Storage{}
	require.Nil(t, store.Conn())

	require.NoError(t, store.Close())
	require.NoError(t, store.Close())

	ctx := context.Background()

	require.ErrorIs(t, store.Set("k", []byte("v"), 0), ErrClosed)
	require.ErrorIs(t, store.SetWithContext(ctx, "k", []byte("v"), time.Second), ErrClosed)

	val, err := store.Get("k")
	require.ErrorIs(t, err, ErrClosed)
	require.Nil(t, val)

	val, err = store.GetWithContext(ctx, "k")
	require.ErrorIs(t, err, ErrClosed)
	require.Nil(t, val)

	require.ErrorIs(t, store.Delete("k"), ErrClosed)
	require.ErrorIs(t, store.DeleteWithContext(ctx, "k"), ErrClosed)
	require.ErrorIs(t, store.Reset(), ErrClosed)
	require.ErrorIs(t, store.ResetWithContext(ctx), ErrClosed)
}

// Test_Cassandra_Lifecycle covers construction, reset, expiry and failure paths against one shared
// container, because starting Cassandra is slow. Each subtest owns its table so they stay independent.
func Test_Cassandra_Lifecycle(t *testing.T) {
	base := newTestStore(t)
	defer base.Close()

	hosts := base.cluster.Hosts
	ctx := context.Background()

	newStore := func(t *testing.T, cfg Config) *Storage {
		t.Helper()
		cfg.Hosts = hosts
		cfg.Consistency = gocql.One
		store, err := New(cfg)
		require.NoError(t, err)
		t.Cleanup(func() { _ = store.Close() })
		return store
	}

	// newSession opens a session of its own on the base keyspace, closed by the caller or at cleanup.
	newSession := func(t *testing.T, keyspace string) *gocql.Session {
		t.Helper()
		cluster := *base.cluster
		cluster.Keyspace = keyspace
		session, err := cluster.CreateSession()
		require.NoError(t, err)
		t.Cleanup(session.Close)
		return session
	}

	t.Run("expiration", func(t *testing.T) {
		store := newStore(t, Config{Keyspace: base.keyspace, Table: "life_expiry"})

		expiresAtOf := func(key string) time.Time {
			var expiresAt time.Time
			require.NoError(t, store.Conn().Query(
				fmt.Sprintf("SELECT expires_at FROM %s.%s WHERE key = ?", store.keyspace, store.table), key,
			).Scan(&expiresAt))
			return expiresAt
		}

		// A long but accepted TTL is stored together with a matching expires_at column. Cassandra 5 rejects
		// anything past 2038 by default, so the clamp to maxTTLSeconds itself is only checked by Test_ttlSeconds.
		const longTTL = 5 * 365 * 24 * time.Hour
		before := time.Now()
		require.NoError(t, store.Set("long", []byte("v"), longTTL))
		val, err := store.Get("long")
		require.NoError(t, err)
		require.Equal(t, []byte("v"), val)
		require.WithinDuration(t, before.Add(longTTL), expiresAtOf("long"), time.Minute)

		// A negative expiration means none: no TTL and no expires_at.
		require.NoError(t, store.Set("negative", []byte("v"), -time.Second))
		require.True(t, expiresAtOf("negative").IsZero(), "no expiry should be recorded")
		var ttl int
		require.NoError(t, store.Conn().Query(
			fmt.Sprintf("SELECT TTL(value) FROM %s.%s WHERE key = ?", store.keyspace, store.table), "negative",
		).Scan(&ttl))
		require.Zero(t, ttl)

		// A sub-second expiration is rounded up rather than truncated to "no TTL", so Cassandra drops the row.
		// Read it raw: Get would hide a missing TTL behind expires_at.
		require.NoError(t, store.Set("short", []byte("v"), 100*time.Millisecond))
		require.Eventually(t, func() bool {
			var raw []byte
			err := store.Conn().Query(
				fmt.Sprintf("SELECT value FROM %s.%s WHERE key = ?", store.keyspace, store.table), "short",
			).Scan(&raw)
			return errors.Is(err, gocql.ErrNotFound)
		}, 10*time.Second, 100*time.Millisecond)

		// A row whose expires_at already passed is a miss even while Cassandra still holds it.
		require.NoError(t, store.Conn().Query(
			fmt.Sprintf("INSERT INTO %s.%s (key, value, expires_at) VALUES (?, ?, ?)", store.keyspace, store.table),
			"stale", []byte("old"), time.Now().Add(-time.Hour),
		).Exec())
		val, err = store.Get("stale")
		require.NoError(t, err)
		require.Nil(t, val)

		// Unlike an expired row, the unexpired ones are still readable.
		val, err = store.Get("negative")
		require.NoError(t, err)
		require.Equal(t, []byte("v"), val)
	})

	t.Run("New with Reset clears existing data", func(t *testing.T) {
		first := newStore(t, Config{Keyspace: base.keyspace, Table: "life_reset"})
		require.NoError(t, first.Set("k", []byte("v"), 0))

		// The keyspace exists by now, so this also covers the "already exists" branch.
		second := newStore(t, Config{Keyspace: base.keyspace, Table: "life_reset", Reset: true})

		val, err := second.Get("k")
		require.NoError(t, err)
		require.Nil(t, val)

		require.NoError(t, second.Set("k2", []byte("v2"), 0))
		val, err = second.Get("k2")
		require.NoError(t, err)
		require.Equal(t, []byte("v2"), val)
	})

	t.Run("New creates a missing keyspace", func(t *testing.T) {
		store := newStore(t, Config{Keyspace: "life_new_keyspace", Table: "life_new_table"})
		require.NoError(t, store.Set("k", []byte("v"), 0))

		val, err := store.Get("k")
		require.NoError(t, err)
		require.Equal(t, []byte("v"), val)
	})

	t.Run("New fails on a keyspace Cassandra rejects", func(t *testing.T) {
		// Passes identifier validation but is not a legal CQL keyspace name.
		store, err := New(Config{Hosts: hosts, Keyspace: "1invalid", Consistency: gocql.One})
		require.ErrorContains(t, err, "failed to ensure keyspace exists")
		require.Nil(t, store)
	})

	t.Run("New fails on a table Cassandra rejects", func(t *testing.T) {
		// Without Reset the failure comes from creating the table, with Reset from dropping it first.
		for _, reset := range []bool{false, true} {
			store, err := New(Config{Hosts: hosts, Keyspace: base.keyspace, Table: "1invalid", Consistency: gocql.One, Reset: reset})
			require.ErrorContains(t, err, "cassandra storage init", "reset=%v", reset)
			require.Nil(t, store, "reset=%v", reset)
		}
	})

	t.Run("NewFromConnection Reset drops only its table", func(t *testing.T) {
		session := newSession(t, base.keyspace)

		first, err := NewFromConnection(session, Config{Keyspace: base.keyspace, Table: "life_conn_reset"})
		require.NoError(t, err)
		require.NoError(t, first.Set("k", []byte("v"), 0))

		other, err := NewFromConnection(session, Config{Keyspace: base.keyspace, Table: "life_conn_other"})
		require.NoError(t, err)
		require.NoError(t, other.Set("k", []byte("other"), 0))

		second, err := NewFromConnection(session, Config{Keyspace: base.keyspace, Table: "life_conn_reset", Reset: true})
		require.NoError(t, err)

		val, err := second.Get("k")
		require.NoError(t, err)
		require.Nil(t, val)

		val, err = other.Get("k")
		require.NoError(t, err)
		require.Equal(t, []byte("other"), val)
	})

	t.Run("NewFromConnection fails without its keyspace", func(t *testing.T) {
		session := newSession(t, base.keyspace)

		for _, reset := range []bool{false, true} {
			store, err := NewFromConnection(session, Config{Keyspace: "life_missing_keyspace", Table: "t", Reset: reset})
			require.ErrorContains(t, err, "cassandra storage init", "reset=%v", reset)
			require.Nil(t, store, "reset=%v", reset)
		}
	})

	t.Run("operations fail once the session is closed", func(t *testing.T) {
		session := newSession(t, base.keyspace)

		store, err := NewFromConnection(session, Config{Keyspace: base.keyspace, Table: "life_closed_session"})
		require.NoError(t, err)
		require.NoError(t, store.Set("k", []byte("v"), 0))

		session.Close()

		// The storage was never closed, so the failure comes from the driver rather than ErrClosed.
		require.Error(t, store.Set("k", []byte("v"), 0))
		require.NotErrorIs(t, store.Set("k", []byte("v"), 0), ErrClosed)

		val, err := store.Get("k")
		require.Error(t, err)
		require.Nil(t, val)

		require.Error(t, store.Delete("k"))
		require.Error(t, store.Reset())

		// A new storage on a closed session cannot even create its table, or drop it first with Reset.
		for _, reset := range []bool{false, true} {
			again, err := NewFromConnection(session, Config{Keyspace: base.keyspace, Table: "life_closed_session", Reset: reset})
			require.ErrorContains(t, err, "cassandra storage init", "reset=%v", reset)
			require.Nil(t, again, "reset=%v", reset)
		}
	})

	t.Run("Close closes an owned session", func(t *testing.T) {
		store, err := New(Config{Hosts: hosts, Keyspace: base.keyspace, Table: "life_close", Consistency: gocql.One})
		require.NoError(t, err)
		require.NotNil(t, store.Conn())
		require.False(t, store.Conn().Closed())

		require.NoError(t, store.Close())
		require.True(t, store.Conn().Closed())

		// A second Close is a no-op.
		require.NoError(t, store.Close())

		require.ErrorIs(t, store.SetWithContext(ctx, "k", []byte("v"), 0), ErrClosed)
	})
}
