package scylladb

import (
	"context"
	"crypto/tls"
	"fmt"
	"net"
	"os"
	"sync"
	"testing"
	"time"

	"github.com/gocql/gocql"
	"github.com/stretchr/testify/require"
	"github.com/testcontainers/testcontainers-go"
	"github.com/testcontainers/testcontainers-go/modules/scylladb"
)

const (
	// scyllaDBImage is the default image used for running ScyllaDB in tests.
	scyllaDBImage  = "scylladb/scylla:6.2"
	scyllaDBEnvVar = "TEST_SCYLLADB_IMAGE"
)

// startScylla runs a ScyllaDB container, honoring the TEST_SCYLLADB_IMAGE override, and returns it together
// with the host and port its CQL port is reachable on. The container is returned even alongside an error,
// so that the caller can always clean it up.
func startScylla(ctx context.Context) (c *scylladb.Container, host string, port int, err error) {
	img := scyllaDBImage
	if imgFromEnv := os.Getenv(scyllaDBEnvVar); imgFromEnv != "" {
		img = imgFromEnv
	}

	c, err = scylladb.Run(ctx, img)
	if err != nil {
		return c, "", 0, err
	}

	host, err = c.NonShardAwareConnectionHost(ctx)
	if err != nil {
		return c, "", 0, err
	}

	mappedPort, err := c.MappedPort(ctx, "9042/tcp")
	if err != nil {
		return c, "", 0, err
	}

	return c, host, int(mappedPort.Num()), nil
}

func newTestStore(t testing.TB) *Storage {
	t.Helper()

	c, host, port, err := startScylla(context.Background())
	testcontainers.CleanupContainer(t, c)
	require.NoError(t, err)

	return New(Config{
		Hosts: []string{host},
		Port:  port,
		Reset: true,
		// Disable initial host lookup in tests.
		// See https://github.com/apache/cassandra-gocql-driver/issues/1020#issuecomment-362494859
		DisableInitialHostLookup: true,
	})
}

func Test_Scylla_Set(t *testing.T) {
	// Create a new instance of the Storage
	var (
		key   = "john"
		value = []byte("doe")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set(key, value, 0)
	require.NoError(t, err)
}

func Test_Scylla_SetWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err := testStore.SetWithContext(ctx, key, val, 0)
	require.ErrorIs(t, err, context.Canceled)
}

func Test_Scylla_Set_Override_Get(t *testing.T) {
	var (
		key         = "john"
		valInitial  = []byte("doe")
		valOverride = []byte("doe2")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set(key, valInitial, 0)
	require.NoError(t, err)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, valInitial, result)

	err = testStore.Set(key, valOverride, 0)
	require.NoError(t, err)

	result, err = testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, valOverride, result)
}

func Test_Scylla_Get(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)
}

func Test_Scylla_GetWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	result, err := testStore.GetWithContext(ctx, key)
	require.ErrorIs(t, err, context.Canceled)
	require.Zero(t, len(result))
}

func Test_Scylla_Set_Expiration_Get(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
		exp = 1 * time.Second
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set(key, val, exp)
	require.NoError(t, err)

	time.Sleep(1001 * time.Millisecond)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Empty(t, result)
}

func Test_Scylla_Get_NotExist(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	result, err := testStore.Get("not-exist")
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_Scylla_Delete(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	err = testStore.Delete(key)
	require.NoError(t, err)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_Scylla_DeleteWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err = testStore.DeleteWithContext(ctx, key)
	require.ErrorIs(t, err, context.Canceled)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)
}

func Test_Scylla_Reset(t *testing.T) {
	var val = []byte("doe")

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set("john1", val, 0)
	require.NoError(t, err)

	err = testStore.Set("john2", val, 0)
	require.NoError(t, err)

	err = testStore.Reset()
	require.NoError(t, err)

	result, err := testStore.Get("john1")
	require.NoError(t, err)
	require.Zero(t, len(result))

	result, err = testStore.Get("john2")
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_Scylla_ResetWithContext(t *testing.T) {
	val := []byte("doe")

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set("john1", val, 0)
	require.NoError(t, err)

	err = testStore.Set("john2", val, 0)
	require.NoError(t, err)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err = testStore.ResetWithContext(ctx)
	require.ErrorIs(t, err, context.Canceled)

	result, err := testStore.Get("john1")
	require.NoError(t, err)
	require.Equal(t, val, result)

	result, err = testStore.Get("john2")
	require.NoError(t, err)
	require.Equal(t, val, result)
}

func Test_Scylla_Close(t *testing.T) {
	testStore := newTestStore(t)
	require.NoError(t, testStore.Close())
}

func Test_Scylla_Conn(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	require.True(t, testStore.Conn() != nil)
}

func Benchmark_Scylla_Set(b *testing.B) {
	testStore := newTestStore(b)
	defer testStore.Close()

	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		err = testStore.Set("john", []byte("doe"), 0)
	}

	require.NoError(b, err)
}

func Benchmark_Scylla_Get(b *testing.B) {
	testStore := newTestStore(b)
	defer testStore.Close()

	err := testStore.Set("john", []byte("doe"), 0)
	require.NoError(b, err)

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_, err = testStore.Get("john")
	}

	require.NoError(b, err)
}

func Benchmark_Scylla_SetAndDelete(b *testing.B) {
	testStore := newTestStore(b)
	defer testStore.Close()

	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		_ = testStore.Set("john", []byte("doe"), 0)
		err = testStore.Delete("john")
	}

	require.NoError(b, err)
}

func Test_ScyllaDB_Close_Twice(t *testing.T) {
	testStore := newTestStore(t)

	require.NoError(t, testStore.Close())
	// A second Close must not close the session twice, which gocql panics on.
	require.NotPanics(t, func() {
		require.NoError(t, testStore.Close())
	})
}

func Test_ScyllaDB_Rejects_Unsafe_Identifiers(t *testing.T) {
	// CQL cannot bind a keyspace or table, so names that are not bare identifiers are refused rather than spliced.
	for _, name := range []string{
		`fiber; DROP TABLE x`,
		`fiber-storage`,
		`fiber storage`,
		`"fiber"`,
		`fiber.storage`,
		"fibér",
		"1table",
		"_table",
		"_1keyspace",
	} {
		require.Error(t, validateIdentifier(name, "table"), "should reject %q", name)
	}

	require.NoError(t, validateIdentifier("fiber_storage", "table"))
	require.NoError(t, validateIdentifier("fiber", "keyspace"))
	require.NoError(t, validateIdentifier("table1", "table"))
	require.NoError(t, validateIdentifier("F1", "keyspace"))
	require.Error(t, validateIdentifier("", "keyspace"))
}

func Test_Scylla_NewFromConnection(t *testing.T) {
	owner := newTestStore(t)
	defer owner.Close()

	store := NewFromConnection(owner.Conn(), Config{Table: "fiber_storage_existing"})
	require.Same(t, owner.Conn(), store.Conn())

	require.NoError(t, store.Set("john", []byte("doe"), 0))

	result, err := store.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), result)

	// The session is the caller's, so closing this storage must leave it usable.
	require.NoError(t, store.Close())
	require.NoError(t, owner.Set("jane", []byte("doe"), 0))
	require.ErrorIs(t, store.Set("jane", []byte("doe"), 0), ErrClosed)
}

func Test_Scylla_NewFromConnection_Nil(t *testing.T) {
	require.Panics(t, func() {
		NewFromConnection(nil)
	})
}

// The tests below share one ScyllaDB container, started lazily on first use and terminated in TestMain,
// so that the many error-path tests do not each pay the container start-up cost.
var (
	sharedOnce      sync.Once
	sharedContainer *scylladb.Container
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
		sharedContainer, sharedHost, sharedPort, sharedErr = startScylla(context.Background())
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

// sharedConfig returns a Config for a storage on its own table of the shared container, one that opens a
// session of its own.
func sharedConfig(t testing.TB, table string) Config {
	t.Helper()

	host, port := sharedScylla(t)

	return Config{
		Hosts: []string{host},
		Port:  port,
		Table: table,
		// Disable initial host lookup, as in newTestStore.
		DisableInitialHostLookup: true,
	}
}

// createSharedTable creates table with the given column definitions in the default keyspace of the shared
// container, so that a storage can be pointed at a layout it would not have created itself. It returns the
// session it used.
func createSharedTable(t testing.TB, table, columns string) *gocql.Session {
	t.Helper()

	session := newSharedSession(t)
	require.NoError(t, session.Query(fmt.Sprintf(createKeyspaceQuery, ConfigDefault.Keyspace)).Exec())
	require.NoError(t, session.Query(fmt.Sprintf(`CREATE TABLE IF NOT EXISTS %s.%s (%s)`, ConfigDefault.Keyspace, table, columns)).Exec())

	return session
}

// panicError runs fn, which must panic with an error, and returns that error.
func panicError(t testing.TB, fn func()) (err error) {
	t.Helper()

	defer func() {
		r := recover()
		require.NotNil(t, r, "expected a panic")
		e, ok := r.(error)
		require.True(t, ok, "panic value should be an error, got %T", r)
		err = e
	}()
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
	require.Equal(t, ConfigDefault, configDefault(Config{Table: "  ", Keyspace: "\t", Consistency: " ", Port: -1}))

	// Explicit values are kept.
	in := Config{
		Hosts:       []string{"10.0.0.1"},
		Port:        9999,
		Table:       "t",
		Keyspace:    "k",
		Consistency: "ONE",
		Reset:       true,
	}
	require.Equal(t, in, configDefault(in))
}

func Test_ScyllaDB_New_Invalid_Names_Panic(t *testing.T) {
	// Names are validated before any connection is attempted, so no server is needed.
	err := panicError(t, func() { New(Config{Keyspace: "bad-keyspace"}) })
	require.ErrorContains(t, err, "invalid keyspace name")

	err = panicError(t, func() { New(Config{Table: "bad table"}) })
	require.ErrorContains(t, err, "invalid table name")
}

func Test_ScyllaDB_New_Unreachable_Host_Panics(t *testing.T) {
	cfg := Config{
		Hosts:                    []string{"127.0.0.1"},
		Port:                     closedPort(t),
		Username:                 "user",
		Password:                 "pass",
		Consistency:              "ONE",
		SslOpts:                  &gocql.SslOptions{Config: &tls.Config{InsecureSkipVerify: true}}, //nolint:gosec // never connects
		DisableInitialHostLookup: true,
	}

	_ = panicError(t, func() { New(cfg) })
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

	err := panicError(t, func() { NewFromConnection(session, Config{Table: "closed_session_table"}) })
	require.ErrorIs(t, err, gocql.ErrSessionClosed)

	// The same holds when a reset is requested.
	err = panicError(t, func() { NewFromConnection(session, Config{Table: "closed_session_table", Reset: true}) })
	require.ErrorIs(t, err, gocql.ErrSessionClosed)
}

func Test_ScyllaDB_New_Owned_Session(t *testing.T) {
	// Credentials are sent only when both are set; the test server does not require authentication,
	// so the session still opens, and the storage owns it.
	cfg := sharedConfig(t, "owned_session_table")
	cfg.Username = "cassandra"
	cfg.Password = "cassandra"
	cfg.Consistency = "ONE"
	cfg.Reset = true
	store := New(cfg)

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
	// A table whose value column is TEXT is the pre-migration layout and must be refused.
	session := createSharedTable(t, "legacy_text_table", "key TEXT PRIMARY KEY, value TEXT")

	// With an owned session, the failed initialization must close it again.
	cfg := sharedConfig(t, "legacy_text_table")
	err := panicError(t, func() { New(cfg) })
	require.ErrorContains(t, err, "should be BLOB")
	require.ErrorContains(t, err, "text")

	// The same table is refused on a borrowed session, which must stay open.
	err = panicError(t, func() { NewFromConnection(session, Config{Table: "legacy_text_table"}) })
	require.ErrorContains(t, err, "should be BLOB")
	require.False(t, session.Closed())
}

func Test_ScyllaDB_New_Missing_Value_Column_Panics(t *testing.T) {
	// The table exists but has no `value` column, so the schema lookup finds no row.
	createSharedTable(t, "no_value_table", "key TEXT PRIMARY KEY, other BLOB")

	cfg := sharedConfig(t, "no_value_table")
	err := panicError(t, func() { New(cfg) })
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
	subsecondTTL := ttlOf("subsecond")
	require.GreaterOrEqual(t, subsecondTTL, 1)
	require.LessOrEqual(t, subsecondTTL, 2)

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
	require.ErrorIs(t, err, context.DeadlineExceeded)
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
