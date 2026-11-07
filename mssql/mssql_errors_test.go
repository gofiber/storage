package mssql

import (
	"context"
	"database/sql"
	"fmt"
	"io"
	"net"
	"net/url"
	"os"
	"testing"
	"time"

	"github.com/stretchr/testify/require"
)

// panicValue runs fn and returns whatever it panicked with, or nil when it did not panic.
func panicValue(fn func()) (v any) {
	defer func() { v = recover() }()
	fn()
	return nil
}

// closedPort returns a local TCP port with nothing listening on it, so connecting fails fast without a container.
func closedPort(t *testing.T) int {
	t.Helper()

	l, err := net.Listen("tcp", "127.0.0.1:0")
	require.NoError(t, err)
	port := l.Addr().(*net.TCPAddr).Port
	require.NoError(t, l.Close())

	return port
}

// adminDB opens a handle on the shared container that is closed with the test.
func adminDB(t *testing.T) *sql.DB {
	t.Helper()

	db, err := sql.Open("sqlserver", testConnURI)
	require.NoError(t, err)
	t.Cleanup(func() { _ = db.Close() })

	return db
}

// limitedDB creates a login that may connect but owns nothing, and returns a handle opened as that login.
func limitedDB(t *testing.T, admin *sql.DB, name string) *sql.DB {
	t.Helper()

	const pass = "Lim!ted1234"
	for _, stmt := range []string{
		fmt.Sprintf("CREATE LOGIN %s WITH PASSWORD = '%s', CHECK_POLICY = OFF", name, pass),
		fmt.Sprintf("CREATE USER %s FOR LOGIN %s", name, name),
	} {
		_, err := admin.Exec(stmt)
		require.NoError(t, err)
	}
	t.Cleanup(func() {
		_, _ = admin.Exec(fmt.Sprintf("DROP USER IF EXISTS %s", name))
		_, _ = admin.Exec(fmt.Sprintf("DROP LOGIN %s", name))
	})

	u, err := url.Parse(testConnURI)
	require.NoError(t, err)
	u.User = url.UserPassword(name, pass)

	db, err := sql.Open("sqlserver", u.String())
	require.NoError(t, err)
	t.Cleanup(func() { _ = db.Close() })

	return db
}

func Test_MSSQL_ConfigDefault_NoConfig(t *testing.T) {
	require.Equal(t, ConfigDefault, configDefault())
}

func Test_MSSQL_ConfigDefault_Overrides(t *testing.T) {
	cfg := configDefault(Config{
		Host:       "db.example.com",
		Port:       14330,
		Database:   "other",
		Table:      "other_table",
		SslMode:    "true",
		GCInterval: time.Minute,
	})
	require.Equal(t, "db.example.com", cfg.Host)
	require.Equal(t, 14330, cfg.Port)
	require.Equal(t, "other", cfg.Database)
	require.Equal(t, "other_table", cfg.Table)
	require.Equal(t, "true", cfg.SslMode)
	require.Equal(t, time.Minute, cfg.GCInterval)

	// Zero or negative values fall back to the defaults.
	cfg = configDefault(Config{Port: -1, GCInterval: -time.Second})
	require.Equal(t, ConfigDefault.Port, cfg.Port)
	require.Equal(t, ConfigDefault.GCInterval, cfg.GCInterval)
	require.Equal(t, ConfigDefault.Host, cfg.Host)
	require.Equal(t, ConfigDefault.Database, cfg.Database)
	require.Equal(t, ConfigDefault.Table, cfg.Table)
	require.Equal(t, ConfigDefault.SslMode, cfg.SslMode)
}

func Test_MSSQL_ValidateTableName(t *testing.T) {
	for _, name := range []string{"fiber_storage", "_t", "T1", "a_b_C_9"} {
		require.NoError(t, validateTableName(name), name)
	}

	for _, name := range []string{"", "1table", "my-table", "my table", "t;DROP TABLE x", "dbo.t", "[t]", "tab'le"} {
		err := validateTableName(name)
		require.Error(t, err, name)
		require.Contains(t, err.Error(), "invalid table name")
	}
}

func Test_MSSQL_New_InvalidTableName(t *testing.T) {
	// The name is refused before any connection is attempted, so the dead port is never dialled.
	v := panicValue(func() {
		New(Config{Port: closedPort(t), Table: "bad;name", Reset: true})
	})
	err, ok := v.(error)
	require.True(t, ok, "expected an error panic, got %v", v)
	require.ErrorContains(t, err, "invalid table name")
}

func Test_MSSQL_NewFromConnection_InvalidTableName(t *testing.T) {
	db := adminDB(t)

	v := panicValue(func() {
		NewFromConnection(db, Config{Table: "bad name"})
	})
	err, ok := v.(error)
	require.True(t, ok, "expected an error panic, got %v", v)
	require.ErrorContains(t, err, "invalid table name")

	// The handle is the caller's, so a refused config must leave it open.
	require.NoError(t, db.Ping())
}

func Test_MSSQL_New_UnreachableServer(t *testing.T) {
	port := closedPort(t)

	cases := map[string]Config{
		"username and password": {Port: port, Username: "user", Password: "pass"},
		"username only":         {Port: port, Username: "user"},
		"password only":         {Port: port, Password: "pass"},
		"instance":              {Port: port, Instance: "SQLEXPRESS"},
		"unix socket host":      {Host: "/nonexistent/mssql.sock", Port: port},
	}

	for name, cfg := range cases {
		t.Run(name, func(t *testing.T) {
			v := panicValue(func() { New(cfg) })
			_, ok := v.(error)
			require.True(t, ok, "expected an error panic, got %v", v)
		})
	}
}

func Test_MSSQL_NewFromConnection_PingFails(t *testing.T) {
	db, err := sql.Open("sqlserver", fmt.Sprintf("sqlserver://sa:pw@127.0.0.1:%d?database=master&encrypt=disable", closedPort(t)))
	require.NoError(t, err)
	defer db.Close() //nolint:errcheck // best effort cleanup

	v := panicValue(func() { NewFromConnection(db) })
	require.NotNil(t, v)
}

func Test_MSSQL_NewFromConnection_ClosedDB(t *testing.T) {
	db := adminDB(t)
	require.NoError(t, db.Close())

	v := panicValue(func() { NewFromConnection(db, Config{Table: "fiber_closed_db"}) })
	err, ok := v.(error)
	require.True(t, ok, "expected an error panic, got %v", v)
	require.ErrorContains(t, err, "closed")
}

func Test_MSSQL_New_ReleasesConnectionOnFailure(t *testing.T) {
	admin := adminDB(t)

	// A table whose `v` column is missing makes checkSchema panic after the table was prepared.
	_, err := admin.Exec(`IF OBJECT_ID('fiber_no_v') IS NOT NULL DROP TABLE fiber_no_v; CREATE TABLE fiber_no_v (k VARCHAR(64) PRIMARY KEY NOT NULL, x BIGINT NOT NULL)`)
	require.NoError(t, err)
	t.Cleanup(func() { _, _ = admin.Exec(`DROP TABLE IF EXISTS fiber_no_v`) })

	v := panicValue(func() {
		New(Config{ConnectionURI: testConnURI, Table: "fiber_no_v"})
	})
	err, ok := v.(error)
	require.True(t, ok, "expected an error panic, got %v", v)
	require.ErrorIs(t, err, sql.ErrNoRows)
}

func Test_MSSQL_NewFromConnection_MissingValueColumn(t *testing.T) {
	admin := adminDB(t)

	_, err := admin.Exec(`IF OBJECT_ID('fiber_no_v2') IS NOT NULL DROP TABLE fiber_no_v2; CREATE TABLE fiber_no_v2 (k VARCHAR(64) PRIMARY KEY NOT NULL, x BIGINT NOT NULL)`)
	require.NoError(t, err)
	t.Cleanup(func() { _, _ = admin.Exec(`DROP TABLE IF EXISTS fiber_no_v2`) })

	db := adminDB(t)
	v := panicValue(func() { NewFromConnection(db, Config{Table: "fiber_no_v2"}) })
	err, ok := v.(error)
	require.True(t, ok, "expected an error panic, got %v", v)
	require.ErrorIs(t, err, sql.ErrNoRows)

	// A borrowed handle is not closed by the failed constructor.
	require.NoError(t, db.Ping())
}

func Test_MSSQL_CheckSchema_WrongDataType(t *testing.T) {
	admin := adminDB(t)

	_, err := admin.Exec(`IF OBJECT_ID('fiber_old_schema') IS NOT NULL DROP TABLE fiber_old_schema;
		CREATE TABLE fiber_old_schema (k VARCHAR(64) PRIMARY KEY NOT NULL, v VARCHAR(MAX) NOT NULL, e BIGINT NOT NULL DEFAULT '0')`)
	require.NoError(t, err)
	t.Cleanup(func() { _, _ = admin.Exec(`DROP TABLE IF EXISTS fiber_old_schema`) })

	// checkSchema reports the stale column type on stdout rather than failing.
	stdout := os.Stdout
	r, w, err := os.Pipe()
	require.NoError(t, err)
	os.Stdout = w

	var store *Storage
	func() {
		defer func() { os.Stdout = stdout }()
		store = NewFromConnection(adminDB(t), Config{Table: "fiber_old_schema"})
	}()
	require.NoError(t, w.Close())

	out, err := io.ReadAll(r)
	require.NoError(t, err)
	require.NoError(t, r.Close())
	require.NotNil(t, store)
	require.NoError(t, store.Close())

	require.Contains(t, string(out), "should be VARBINARY(MAX) but is instead varchar")
}

func Test_MSSQL_New_InitFailsWithoutPermission(t *testing.T) {
	admin := adminDB(t)
	limited := limitedDB(t, admin, "fiber_noperm")

	// The login may connect, but it cannot create the table.
	v := panicValue(func() { NewFromConnection(limited, Config{Table: "fiber_noperm_tbl"}) })
	err, ok := v.(error)
	require.True(t, ok, "expected an error panic, got %v", v)
	require.ErrorContains(t, err, "permission")
	require.NoError(t, limited.Ping())

	// With an owned handle the failed constructor must panic as well.
	u, perr := url.Parse(testConnURI)
	require.NoError(t, perr)
	u.User = url.UserPassword("fiber_noperm", "Lim!ted1234")
	v = panicValue(func() { New(Config{ConnectionURI: u.String(), Table: "fiber_noperm_tbl"}) })
	err, ok = v.(error)
	require.True(t, ok, "expected an error panic, got %v", v)
	require.ErrorContains(t, err, "permission")
}

func Test_MSSQL_New_ResetFailsWithoutPermission(t *testing.T) {
	admin := adminDB(t)

	_, err := admin.Exec(`IF OBJECT_ID('fiber_nodrop') IS NOT NULL DROP TABLE fiber_nodrop;
		CREATE TABLE fiber_nodrop (k VARCHAR(64) PRIMARY KEY NOT NULL, v VARBINARY(MAX) NOT NULL, e BIGINT NOT NULL DEFAULT '0')`)
	require.NoError(t, err)
	t.Cleanup(func() { _, _ = admin.Exec(`DROP TABLE IF EXISTS fiber_nodrop`) })

	limited := limitedDB(t, admin, "fiber_nodrop_user")
	// SELECT makes the table visible to the login, but dropping it stays forbidden.
	_, err = admin.Exec(`GRANT SELECT ON fiber_nodrop TO fiber_nodrop_user`)
	require.NoError(t, err)

	v := panicValue(func() { NewFromConnection(limited, Config{Table: "fiber_nodrop", Reset: true}) })
	perr, ok := v.(error)
	require.True(t, ok, "expected an error panic, got %v", v)
	require.ErrorContains(t, perr, "permission")

	// The refused drop must have left the table in place.
	var n int
	require.NoError(t, admin.QueryRow(`SELECT COUNT(*) FROM sys.tables WHERE name = 'fiber_nodrop'`).Scan(&n))
	require.Equal(t, 1, n)
}

func Test_MSSQL_Closed_ReturnsErrClosed(t *testing.T) {
	store := NewFromConnection(adminDB(t), Config{Table: "fiber_closed_store"})
	require.NoError(t, store.Set("john", []byte("doe"), 0))
	require.NoError(t, store.Close())

	ctx := context.Background()

	val, err := store.Get("john")
	require.ErrorIs(t, err, ErrClosed)
	require.Nil(t, val)

	val, err = store.GetWithContext(ctx, "john")
	require.ErrorIs(t, err, ErrClosed)
	require.Nil(t, val)

	require.ErrorIs(t, store.SetWithContext(ctx, "john", []byte("doe"), 0), ErrClosed)
	require.ErrorIs(t, store.DeleteWithContext(ctx, "john"), ErrClosed)
	require.ErrorIs(t, store.Delete("john"), ErrClosed)
	require.ErrorIs(t, store.ResetWithContext(ctx), ErrClosed)
	require.ErrorIs(t, store.Reset(), ErrClosed)
}

func Test_MSSQL_EmptyKeyOrValue(t *testing.T) {
	store := NewFromConnection(adminDB(t), Config{Table: "fiber_empty_args", Reset: true})
	defer store.Close() //nolint:errcheck // best effort cleanup

	// An empty key is never stored, read or deleted.
	require.NoError(t, store.Set("", []byte("doe"), 0))
	val, err := store.Get("")
	require.NoError(t, err)
	require.Nil(t, val)
	require.NoError(t, store.Delete(""))

	// An empty value is ignored, so it neither creates nor overwrites a row.
	require.NoError(t, store.Set("john", nil, 0))
	require.NoError(t, store.Set("john", []byte{}, 0))
	val, err = store.Get("john")
	require.NoError(t, err)
	require.Nil(t, val)

	require.NoError(t, store.Set("john", []byte("doe"), 0))
	require.NoError(t, store.Set("john", nil, 0))
	val, err = store.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), val)

	var n int
	require.NoError(t, store.Conn().QueryRow(`SELECT COUNT(*) FROM fiber_empty_args`).Scan(&n))
	require.Equal(t, 1, n)
}

func Test_MSSQL_Get_Expired_Row(t *testing.T) {
	store := NewFromConnection(adminDB(t), Config{Table: "fiber_expired_row", Reset: true})
	defer store.Close() //nolint:errcheck // best effort cleanup

	// A row whose deadline already passed is still in the table (no sweep ran) but reads as absent.
	_, err := store.Conn().Exec(`INSERT INTO fiber_expired_row (k, v, e) VALUES ('old', 0x01, @p1)`, time.Now().Add(-time.Minute).Unix())
	require.NoError(t, err)

	val, err := store.Get("old")
	require.NoError(t, err)
	require.Nil(t, val)

	var n int
	require.NoError(t, store.Conn().QueryRow(`SELECT COUNT(*) FROM fiber_expired_row WHERE k = 'old'`).Scan(&n))
	require.Equal(t, 1, n)
}

func Test_MSSQL_GC_Ticker(t *testing.T) {
	store := NewFromConnection(adminDB(t), Config{
		Table:      "fiber_gc_ticker",
		Reset:      true,
		GCInterval: 50 * time.Millisecond,
	})
	defer store.Close() //nolint:errcheck // best effort cleanup

	require.NoError(t, store.Set("short", []byte("doe"), time.Second))
	require.NoError(t, store.Set("forever", []byte("doe"), 0))

	count := func(key string) int {
		var n int
		require.NoError(t, store.Conn().QueryRow(`SELECT COUNT(*) FROM fiber_gc_ticker WHERE k = @p1`, key).Scan(&n))
		return n
	}

	// The collector, not a read, removes the expired row.
	require.Eventually(t, func() bool { return count("short") == 0 }, 15*time.Second, 100*time.Millisecond)
	require.Equal(t, 1, count("forever"))
}

func Test_MSSQL_Close_OwnedHandle(t *testing.T) {
	store := New(Config{ConnectionURI: testConnURI, Table: "fiber_close_owned"})
	db := store.Conn()
	require.NoError(t, db.Ping())

	require.NoError(t, store.Close())

	// A handle the storage opened itself is released by Close, and closing again stays quiet.
	require.ErrorContains(t, db.Ping(), "closed")
	require.NoError(t, store.Close())
}
