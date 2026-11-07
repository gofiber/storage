package scylladb

import (
	"context"
	"crypto/tls"
	"errors"
	"fmt"
	"net"
	"os"
	"sync"
	"testing"
	"time"

	"github.com/gocql/gocql"
	"github.com/stretchr/testify/require"

	"github.com/testcontainers/testcontainers-go"
	tcscylladb "github.com/testcontainers/testcontainers-go/modules/scylladb"
)

// The tests below share one ScyllaDB container, started lazily on first use and terminated in TestMain,
// so that the many error-path tests do not each pay the container start-up cost.
var (
	sharedOnce      sync.Once
	sharedContainer *tcscylladb.Container
	sharedHost      string
	sharedPort      int
	sharedErr       error
)

func TestMain(m *testing.M) {
	code := m.Run()
	if sharedContainer != nil {
		_ = testcontainers.TerminateContainer(sharedContainer)
	}
	os.Exit(code)
}

func sharedScylla(t testing.TB) (string, int) {
	t.Helper()

	sharedOnce.Do(func() {
		img := scyllaDBImage
		if imgFromEnv := os.Getenv(scyllaDBEnvVar); imgFromEnv != "" {
			img = imgFromEnv
		}

		ctx := context.Background()
		c, err := tcscylladb.Run(ctx, img)
		if c != nil {
			sharedContainer = c
		}
		if err != nil {
			sharedErr = err
			return
		}

		host, err := c.NonShardAwareConnectionHost(ctx)
		if err != nil {
			sharedErr = err
			return
		}
		port, err := c.MappedPort(ctx, "9042/tcp")
		if err != nil {
			sharedErr = err
			return
		}
		sharedHost, sharedPort = host, int(port.Num())
	})
	require.NoError(t, sharedErr)

	return sharedHost, sharedPort
}

// newSharedSession opens a session on the shared container that the caller must close.
func newSharedSession(t testing.TB) *gocql.Session {
	t.Helper()

	host, port := sharedScylla(t)
	cluster := gocql.NewCluster(host)
	cluster.Port = port
	cluster.DisableInitialHostLookup = true
	session, err := cluster.CreateSession()
	require.NoError(t, err)
	t.Cleanup(session.Close)

	return session
}

// newSharedStore returns a storage on its own table of the shared container, on a borrowed session.
func newSharedStore(t testing.TB, table string) *Storage {
	t.Helper()

	return NewFromConnection(newSharedSession(t), Config{Table: table, Reset: true})
}

// recoverPanic runs fn and returns what it panicked with, or nil.
func recoverPanic(fn func()) (recovered any) {
	defer func() { recovered = recover() }()
	fn()
	return nil
}

// closedPort returns a local TCP port nothing listens on.
func closedPort(t testing.TB) int {
	t.Helper()

	l, err := net.Listen("tcp", "127.0.0.1:0")
	require.NoError(t, err)
	port := l.Addr().(*net.TCPAddr).Port
	require.NoError(t, l.Close())

	return port
}

func Test_ScyllaDB_ConfigDefault(t *testing.T) {
	// No config at all yields the defaults.
	require.Equal(t, ConfigDefault, configDefault())

	// Zero values and blank strings are replaced by the defaults.
	cfg := configDefault(Config{Table: "  ", Keyspace: "\t", Consistency: " ", Port: -1})
	require.Equal(t, ConfigDefault.Hosts, cfg.Hosts)
	require.Equal(t, ConfigDefault.Port, cfg.Port)
	require.Equal(t, ConfigDefault.Table, cfg.Table)
	require.Equal(t, ConfigDefault.Keyspace, cfg.Keyspace)
	require.Equal(t, ConfigDefault.Consistency, cfg.Consistency)

	// Explicit values are kept.
	cfg = configDefault(Config{
		Hosts:       []string{"10.0.0.1"},
		Port:        9999,
		Table:       "t",
		Keyspace:    "k",
		Consistency: "ONE",
		Reset:       true,
	})
	require.Equal(t, []string{"10.0.0.1"}, cfg.Hosts)
	require.Equal(t, 9999, cfg.Port)
	require.Equal(t, "t", cfg.Table)
	require.Equal(t, "k", cfg.Keyspace)
	require.Equal(t, "ONE", cfg.Consistency)
	require.True(t, cfg.Reset)
}

func Test_ScyllaDB_New_Invalid_Names_Panic(t *testing.T) {
	// Names are validated before any connection is attempted, so no server is needed.
	r := recoverPanic(func() { New(Config{Keyspace: "bad-keyspace"}) })
	err, ok := r.(error)
	require.True(t, ok)
	require.ErrorContains(t, err, "invalid keyspace name")

	r = recoverPanic(func() { New(Config{Table: "bad table"}) })
	err, ok = r.(error)
	require.True(t, ok)
	require.ErrorContains(t, err, "invalid table name")
}

func Test_ScyllaDB_New_Unreachable_Host_Panics(t *testing.T) {
	r := recoverPanic(func() {
		New(Config{
			Hosts:                    []string{"127.0.0.1"},
			Port:                     closedPort(t),
			Username:                 "user",
			Password:                 "pass",
			Consistency:              "ONE",
			SslOpts:                  &gocql.SslOptions{Config: &tls.Config{InsecureSkipVerify: true}}, //nolint:gosec // never connects
			DisableInitialHostLookup: true,
		})
	})
	err, ok := r.(error)
	require.True(t, ok, "expected an error panic, got %v", r)
	require.Error(t, err)
}

func Test_ScyllaDB_Validate_Identifier_Messages(t *testing.T) {
	require.ErrorContains(t, validateIdentifier("", "table"), "cannot be empty")
	require.ErrorContains(t, validateIdentifier("fibér", "table"), "unicode")
	require.ErrorContains(t, validateIdentifier("1abc", "table"), "must start with a letter")
	require.ErrorContains(t, validateIdentifier("a-b", "keyspace"), "can only contain letters, numbers, and underscores")
}

func Test_ScyllaDB_New_Closed_Session_Panics(t *testing.T) {
	session := newSharedSession(t)
	session.Close()

	r := recoverPanic(func() { NewFromConnection(session, Config{Table: "closed_session_table"}) })
	err, ok := r.(error)
	require.True(t, ok, "expected an error panic, got %v", r)
	require.ErrorIs(t, err, gocql.ErrSessionClosed)

	// The same holds when a reset is requested.
	r = recoverPanic(func() { NewFromConnection(session, Config{Table: "closed_session_table", Reset: true}) })
	err, ok = r.(error)
	require.True(t, ok, "expected an error panic, got %v", r)
	require.ErrorIs(t, err, gocql.ErrSessionClosed)
}

func Test_ScyllaDB_New_Owned_Session(t *testing.T) {
	host, port := sharedScylla(t)

	// Credentials are sent only when both are set; the test server does not require authentication,
	// so the session still opens, and the storage owns it.
	store := New(Config{
		Hosts:                    []string{host},
		Port:                     port,
		Username:                 "cassandra",
		Password:                 "cassandra",
		Consistency:              "ONE",
		Table:                    "owned_session_table",
		Reset:                    true,
		DisableInitialHostLookup: true,
	})

	require.NoError(t, store.Set("john", []byte("doe"), 0))
	got, err := store.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), got)

	// Close shuts the owned session down, so using the raw session afterwards fails.
	session := store.Conn()
	require.NoError(t, store.Close())
	require.True(t, session.Closed())
	require.NoError(t, store.Close())
}

func Test_ScyllaDB_New_Schema_Mismatch_Panics(t *testing.T) {
	host, port := sharedScylla(t)
	session := newSharedSession(t)
	require.NoError(t, session.Query(fmt.Sprintf(createKeyspaceQuery, ConfigDefault.Keyspace)).Exec())

	// A table whose value column is TEXT is the pre-migration layout and must be refused.
	require.NoError(t, session.Query(`CREATE TABLE IF NOT EXISTS fiber.legacy_text_table (key TEXT PRIMARY KEY, value TEXT)`).Exec())

	// With an owned session, the failed initialization must close it again.
	r := recoverPanic(func() {
		New(Config{
			Hosts:                    []string{host},
			Port:                     port,
			Table:                    "legacy_text_table",
			DisableInitialHostLookup: true,
		})
	})
	err, ok := r.(error)
	require.True(t, ok, "expected an error panic, got %v", r)
	require.ErrorContains(t, err, "should be BLOB")
	require.ErrorContains(t, err, "text")

	// The same table is refused on a borrowed session, which must stay open.
	r = recoverPanic(func() { NewFromConnection(session, Config{Table: "legacy_text_table"}) })
	err, ok = r.(error)
	require.True(t, ok, "expected an error panic, got %v", r)
	require.ErrorContains(t, err, "should be BLOB")
	require.False(t, session.Closed())
}

func Test_ScyllaDB_New_Missing_Value_Column_Panics(t *testing.T) {
	host, port := sharedScylla(t)
	session := newSharedSession(t)
	require.NoError(t, session.Query(fmt.Sprintf(createKeyspaceQuery, ConfigDefault.Keyspace)).Exec())

	// The table exists but has no `value` column, so the schema lookup finds no row.
	require.NoError(t, session.Query(`CREATE TABLE IF NOT EXISTS fiber.no_value_table (key TEXT PRIMARY KEY, other BLOB)`).Exec())

	r := recoverPanic(func() {
		New(Config{
			Hosts:                    []string{host},
			Port:                     port,
			Table:                    "no_value_table",
			DisableInitialHostLookup: true,
		})
	})
	err, ok := r.(error)
	require.True(t, ok, "expected an error panic, got %v", r)
	require.ErrorIs(t, err, gocql.ErrNotFound)
}

func Test_ScyllaDB_Closed_Storage_Returns_ErrClosed(t *testing.T) {
	store := newSharedStore(t, "closed_storage_table")
	require.NoError(t, store.Set("john", []byte("doe"), 0))
	require.NoError(t, store.Close())

	ctx := context.Background()

	v, err := store.Get("john")
	require.ErrorIs(t, err, ErrClosed)
	require.Nil(t, v)

	v, err = store.GetWithContext(ctx, "john")
	require.ErrorIs(t, err, ErrClosed)
	require.Nil(t, v)

	require.ErrorIs(t, store.Set("john", []byte("doe"), 0), ErrClosed)
	require.ErrorIs(t, store.SetWithContext(ctx, "john", []byte("doe"), 0), ErrClosed)
	require.ErrorIs(t, store.Delete("john"), ErrClosed)
	require.ErrorIs(t, store.DeleteWithContext(ctx, "john"), ErrClosed)
	require.ErrorIs(t, store.Reset(), ErrClosed)
	require.ErrorIs(t, store.ResetWithContext(ctx), ErrClosed)

	// The borrowed session is still usable and the row is untouched.
	var value []byte
	require.NoError(t, store.Conn().Query(store.selectQuery, "john").Scan(&value))
	require.Equal(t, []byte("doe"), value)
}

func Test_ScyllaDB_Set_Empty_Key_Or_Value_Ignored(t *testing.T) {
	store := newSharedStore(t, "empty_args_table")
	defer store.Close()

	require.NoError(t, store.Set("", []byte("doe"), 0))
	require.NoError(t, store.Set("john", nil, 0))
	require.NoError(t, store.Set("john", []byte{}, 0))

	got, err := store.Get("john")
	require.NoError(t, err)
	require.Empty(t, got)

	var count int
	require.NoError(t, store.Conn().Query(`SELECT COUNT(*) FROM fiber.empty_args_table`).Scan(&count))
	require.Zero(t, count)
}

func Test_ScyllaDB_Set_TTL_Rounding_And_Clamp(t *testing.T) {
	store := newSharedStore(t, "ttl_table")
	defer store.Close()

	ttlOf := func(key string) int {
		var ttl int
		require.NoError(t, store.Conn().Query(`SELECT TTL(value) FROM fiber.ttl_table WHERE key = ?`, key).Scan(&ttl))
		return ttl
	}

	// No expiry means no TTL at all.
	require.NoError(t, store.Set("forever", []byte("v"), 0))
	var noTTL *int
	require.NoError(t, store.Conn().Query(`SELECT TTL(value) FROM fiber.ttl_table WHERE key = ?`, "forever").Scan(&noTTL))
	require.Nil(t, noTTL)

	// A sub-second expiry is rounded up to one second rather than down to "no TTL".
	require.NoError(t, store.Set("subsecond", []byte("v"), 100*time.Millisecond))
	require.InDelta(t, 1, ttlOf("subsecond"), 1)
	require.Positive(t, ttlOf("subsecond"))

	// A fractional expiry is rounded up to the next whole second.
	require.NoError(t, store.Set("fraction", []byte("v"), 1500*time.Millisecond+100*time.Hour))
	exact := int((100*time.Hour + 2*time.Second) / time.Second)
	require.InDelta(t, exact, ttlOf("fraction"), 30)

	// An expiry above ScyllaDB's maximum is clamped to it instead of overflowing.
	require.NoError(t, store.Set("huge", []byte("v"), time.Duration(1<<62)))
	require.InDelta(t, maxTTLSeconds, ttlOf("huge"), 30)
}

func Test_ScyllaDB_Expired_Key_Reads_As_Missing(t *testing.T) {
	store := newSharedStore(t, "expiry_table")
	defer store.Close()

	require.NoError(t, store.Set("short", []byte("v"), time.Second))
	require.NoError(t, store.Set("long", []byte("v"), time.Hour))

	got, err := store.Get("short")
	require.NoError(t, err)
	require.Equal(t, []byte("v"), got)

	require.Eventually(t, func() bool {
		v, err := store.Get("short")
		return err == nil && v == nil
	}, 10*time.Second, 200*time.Millisecond)

	got, err = store.Get("long")
	require.NoError(t, err)
	require.Equal(t, []byte("v"), got)
}

func Test_ScyllaDB_Missing_Key_Returns_Nil_Without_Error(t *testing.T) {
	store := newSharedStore(t, "missing_key_table")
	defer store.Close()

	got, err := store.GetWithContext(context.Background(), "nope")
	require.NoError(t, err)
	require.Nil(t, got)

	// Deleting a key that does not exist is not an error either.
	require.NoError(t, store.Delete("nope"))
}

func Test_ScyllaDB_Context_Deadline_Exceeded(t *testing.T) {
	store := newSharedStore(t, "deadline_table")
	defer store.Close()

	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(-time.Second))
	defer cancel()

	_, err := store.GetWithContext(ctx, "john")
	require.True(t, errors.Is(err, context.DeadlineExceeded), "got %v", err)
	require.ErrorIs(t, store.SetWithContext(ctx, "john", []byte("doe"), 0), context.DeadlineExceeded)
	require.ErrorIs(t, store.DeleteWithContext(ctx, "john"), context.DeadlineExceeded)
	require.ErrorIs(t, store.ResetWithContext(ctx), context.DeadlineExceeded)
}

func Test_ScyllaDB_Reset_Removes_All_Keys(t *testing.T) {
	store := newSharedStore(t, "reset_all_table")
	defer store.Close()

	for i := range 5 {
		require.NoError(t, store.Set(fmt.Sprintf("key-%d", i), []byte("v"), 0))
	}
	require.NoError(t, store.ResetWithContext(context.Background()))

	var count int
	require.NoError(t, store.Conn().Query(`SELECT COUNT(*) FROM fiber.reset_all_table`).Scan(&count))
	require.Zero(t, count)
}

func Test_ScyllaDB_New_Reset_Drops_Existing_Table(t *testing.T) {
	session := newSharedSession(t)

	first := NewFromConnection(session, Config{Table: "reset_on_new_table"})
	require.NoError(t, first.Set("john", []byte("doe"), 0))

	// Re-opening without Reset keeps the data, with Reset the table is recreated empty.
	again := NewFromConnection(session, Config{Table: "reset_on_new_table"})
	got, err := again.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), got)

	fresh := NewFromConnection(session, Config{Table: "reset_on_new_table", Reset: true})
	got, err = fresh.Get("john")
	require.NoError(t, err)
	require.Nil(t, got)
}
