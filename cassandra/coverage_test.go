package cassandra

import (
	"context"
	"fmt"
	"math"
	"net"
	"testing"
	"time"

	"github.com/gocql/gocql"
	"github.com/stretchr/testify/require"
)

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
			require.Error(t, err)
			require.Empty(t, got)
			require.Contains(t, err.Error(), "invalid keyspace name")
			require.Contains(t, err.Error(), tc.message)
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

	_, _, _, err = validatedConfig(Config{Keyspace: "bad-keyspace"})
	require.ErrorContains(t, err, "invalid keyspace name")

	_, _, _, err = validatedConfig(Config{Table: "bad table"})
	require.ErrorContains(t, err, "invalid table name")
}

func Test_configDefault(t *testing.T) {
	t.Parallel()

	t.Run("no config", func(t *testing.T) {
		require.Equal(t, ConfigDefault, configDefault())
	})

	t.Run("zero config gets defaults", func(t *testing.T) {
		cfg := configDefault(Config{})
		require.Equal(t, ConfigDefault.Hosts, cfg.Hosts)
		require.Equal(t, ConfigDefault.Keyspace, cfg.Keyspace)
		require.Equal(t, ConfigDefault.Table, cfg.Table)
		require.Equal(t, ConfigDefault.Consistency, cfg.Consistency)
		require.Equal(t, ConfigDefault.Expiration, cfg.Expiration)
		require.Equal(t, ConfigDefault.MaxRetries, cfg.MaxRetries)
		require.Equal(t, ConfigDefault.ConnectTimeout, cfg.ConnectTimeout)
		require.Same(t, ConfigDefault.PoolConfig, cfg.PoolConfig)
		require.Nil(t, cfg.SslOpts)
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

		// A long but accepted TTL is stored together with a matching expires_at column. Cassandra 5 rejects
		// anything past 2038 by default, so the clamp to maxTTLSeconds itself is only checked by Test_ttlSeconds.
		const longTTL = 5 * 365 * 24 * time.Hour
		before := time.Now()
		require.NoError(t, store.Set("long", []byte("v"), longTTL))
		val, err := store.Get("long")
		require.NoError(t, err)
		require.Equal(t, []byte("v"), val)

		var expiresAt time.Time
		require.NoError(t, store.Conn().Query(
			fmt.Sprintf("SELECT expires_at FROM %s.%s WHERE key = ?", store.keyspace, store.table), "long",
		).Scan(&expiresAt))
		require.WithinDuration(t, before.Add(longTTL), expiresAt, time.Minute)

		// A negative expiration means none: no TTL and no expires_at.
		require.NoError(t, store.Set("negative", []byte("v"), -time.Second))
		var negExpiry time.Time
		require.NoError(t, store.Conn().Query(
			fmt.Sprintf("SELECT expires_at FROM %s.%s WHERE key = ?", store.keyspace, store.table), "negative",
		).Scan(&negExpiry))
		require.True(t, negExpiry.IsZero(), "no expiry should be recorded")
		var ttl int
		require.NoError(t, store.Conn().Query(
			fmt.Sprintf("SELECT TTL(value) FROM %s.%s WHERE key = ?", store.keyspace, store.table), "negative",
		).Scan(&ttl))
		require.Zero(t, ttl)

		// A sub-second expiration is rounded up rather than truncated to "no TTL".
		require.NoError(t, store.Set("short", []byte("v"), 100*time.Millisecond))
		require.Eventually(t, func() bool {
			val, err := store.Get("short")
			return err == nil && val == nil
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

	t.Run("New fails and releases its session on a table Cassandra rejects", func(t *testing.T) {
		store, err := New(Config{Hosts: hosts, Keyspace: base.keyspace, Table: "1invalid", Consistency: gocql.One})
		require.Error(t, err)
		require.ErrorContains(t, err, "cassandra storage init")
		require.Nil(t, store)

		// With Reset the failure comes from dropping the table instead.
		store, err = New(Config{Hosts: hosts, Keyspace: base.keyspace, Table: "1invalid", Consistency: gocql.One, Reset: true})
		require.ErrorContains(t, err, "cassandra storage init")
		require.Nil(t, store)
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

		store, err := NewFromConnection(session, Config{Keyspace: "life_missing_keyspace", Table: "t"})
		require.ErrorContains(t, err, "cassandra storage init")
		require.Nil(t, store)

		store, err = NewFromConnection(session, Config{Keyspace: "life_missing_keyspace", Table: "t", Reset: true})
		require.ErrorContains(t, err, "cassandra storage init")
		require.Nil(t, store)
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

		// A new storage on a closed session cannot even create its table.
		again, err := NewFromConnection(session, Config{Keyspace: base.keyspace, Table: "life_closed_session"})
		require.ErrorContains(t, err, "cassandra storage init")
		require.Nil(t, again)

		again, err = NewFromConnection(session, Config{Keyspace: base.keyspace, Table: "life_closed_session", Reset: true})
		require.ErrorContains(t, err, "cassandra storage init")
		require.Nil(t, again)
	})

	t.Run("Close closes an owned session once", func(t *testing.T) {
		store, err := New(Config{Hosts: hosts, Keyspace: base.keyspace, Table: "life_close", Consistency: gocql.One})
		require.NoError(t, err)
		require.NotNil(t, store.Conn())
		require.False(t, store.Conn().Closed())

		require.NoError(t, store.Close())
		require.True(t, store.Conn().Closed())

		// A second Close must not reach gocql, which panics on a double close.
		require.NoError(t, store.Close())

		require.ErrorIs(t, store.SetWithContext(ctx, "k", []byte("v"), 0), ErrClosed)
	})
}
