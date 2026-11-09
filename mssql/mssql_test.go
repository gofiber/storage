package mssql

import (
	"context"
	"database/sql"
	"fmt"
	"io"
	"log"
	"net"
	"net/url"
	"os"
	"testing"
	"time"

	mssqldb "github.com/microsoft/go-mssqldb"
	"github.com/stretchr/testify/require"
	"github.com/testcontainers/testcontainers-go"
	tcmssql "github.com/testcontainers/testcontainers-go/modules/mssql"
	"github.com/testcontainers/testcontainers-go/wait"
)

const (
	// mssqlImage is the default image used for running MSSQL in tests.
	mssqlImage              = "mcr.microsoft.com/mssql/server:2022-latest"
	mssqlImageEnvVar string = "TEST_MSSQL_IMAGE"
	mssqlPort        string = "1433/tcp"
	// mssqlPass has to satisfy the SQL Server password policy: at least eight
	// characters drawn from upper case, lower case, digits and symbols.
	mssqlPass string = "MsSql!1234"
)

var (
	testStore *Storage
	// testConnURI lets tests open their own handle against the same container.
	testConnURI string
)

func TestMain(m *testing.M) {
	os.Exit(runTests(m))
}

// runTests starts a single MSSQL container for the whole package, points
// testStore at it and runs the tests. It is kept separate from TestMain so the
// deferred cleanup still runs before os.Exit is called.
func runTests(m *testing.M) int {
	ctx := context.Background()

	img := mssqlImage
	if imgFromEnv := os.Getenv(mssqlImageEnvVar); imgFromEnv != "" {
		img = imgFromEnv
	}

	c, err := tcmssql.Run(ctx, img,
		tcmssql.WithAcceptEULA(),
		tcmssql.WithPassword(mssqlPass),
		// SQL Server takes a while to recover its databases on a cold start, so
		// allow more time than the module default of one minute.
		testcontainers.WithWaitStrategyAndDeadline(5*time.Minute,
			wait.ForListeningPort(mssqlPort),
			wait.ForLog("Recovery is complete."),
		),
	)
	defer func() {
		if c == nil {
			return
		}
		if err := c.Terminate(ctx); err != nil {
			log.Printf("terminate mssql container: %v", err)
		}
	}()
	if err != nil {
		log.Printf("run mssql container: %v", err)
		return 1
	}

	// The driver defaults to an unencrypted connection, so the tests exercise it
	// the same way against the container.
	conn, err := c.ConnectionString(ctx, "database=master", "encrypt=disable")
	if err != nil {
		log.Printf("mssql connection string: %v", err)
		return 1
	}

	testConnURI = conn

	testStore = New(Config{
		ConnectionURI: conn,
		Reset:         true,
	})
	defer testStore.Close()

	return m.Run()
}

func Test_MSSQL_Set(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)
}

func Test_MSSQL_SetWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err := testStore.SetWithContext(ctx, key, val, 0)
	require.ErrorIs(t, err, context.Canceled)
}

func Test_MSSQL_Set_Override(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	err = testStore.Set(key, val, 0)
	require.NoError(t, err)
}

func Test_MSSQL_Get(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)
}

func Test_MSSQL_GetWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	result, err := testStore.GetWithContext(ctx, key)
	require.ErrorIs(t, err, context.Canceled)
	require.Zero(t, len(result))
}

func Test_MSSQL_Set_Expiration(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
		exp = 1 * time.Second
	)

	err := testStore.Set(key, val, exp)
	require.NoError(t, err)
}

func Test_MSSQL_Get_Expired(t *testing.T) {
	key := "john"

	// The deadline is stored in whole seconds and rounded up, so the entry may outlive it by one.
	deadline := time.Now().Add(4 * time.Second)
	for {
		result, err := testStore.Get(key)
		require.NoError(t, err)
		// Checked before the break too: a key disappearing only after the deadline would otherwise pass.
		require.False(t, time.Now().After(deadline), "Key should have expired")
		if len(result) == 0 {
			break
		}
		time.Sleep(100 * time.Millisecond)
	}
}

func Test_MSSQL_Get_NotExist(t *testing.T) {
	result, err := testStore.Get("notexist")
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_MSSQL_Delete(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	err = testStore.Delete(key)
	require.NoError(t, err)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_MSSQL_DeleteWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

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

func Test_MSSQL_Reset(t *testing.T) {
	val := []byte("doe")

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

func Test_MSSQL_ResetWithContext(t *testing.T) {
	val := []byte("doe")

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

func Test_MSSQL_GC(t *testing.T) {
	testVal := []byte("doe")

	// This key should expire
	err := testStore.Set("john", testVal, time.Nanosecond)
	require.NoError(t, err)

	// The deadline rounds up to a whole second, so collect as of a moment safely past it.
	testStore.gc(context.Background(), time.Now().Add(2*time.Second))
	row := testStore.db.QueryRow(testStore.sqlSelect, "john")
	err = row.Scan(nil, nil)
	require.Equal(t, sql.ErrNoRows, err)

	// This key should not expire
	err = testStore.Set("john", testVal, 0)
	require.NoError(t, err)

	testStore.gc(context.Background(), time.Now())
	val, err := testStore.Get("john")
	require.NoError(t, err)
	require.Equal(t, testVal, val)
}

func Test_MSSQL_Non_UTF8(t *testing.T) {
	val := []byte("0xF5")

	err := testStore.Set("0xF6", val, 0)
	require.NoError(t, err)

	result, err := testStore.Get("0xF6")
	require.NoError(t, err)
	require.Equal(t, val, result)
}

func Test_SslRequiredMode(t *testing.T) {
	defer func() {
		if recover() == nil {
			require.Equalf(t, true, nil, "Connection was established with a `require`")
		}
	}()
	_ = New(Config{
		Database: "fiber",
		Username: "username",
		Password: "password",
		Reset:    true,
		SslMode:  "require",
	})
}

func Test_MSSQL_Close(t *testing.T) {
	require.Nil(t, testStore.Close())

	require.NotPanics(t, func() {
		require.Nil(t, testStore.Close())
	})
}

func Test_MSSQL_Conn(t *testing.T) {
	require.True(t, testStore.Conn() != nil)
}

func Benchmark_MSSQL_Set(b *testing.B) {
	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		err = testStore.Set("john", []byte("doe"), 0)
	}

	require.NoError(b, err)
}

func Benchmark_MSSQL_Get(b *testing.B) {
	err := testStore.Set("john", []byte("doe"), 0)
	require.NoError(b, err)

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_, err = testStore.Get("john")
	}

	require.NoError(b, err)
}

func Benchmark_MSSQL_SetAndDelete(b *testing.B) {
	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		_ = testStore.Set("john", []byte("doe"), 0)
		err = testStore.Delete("john")
	}

	require.NoError(b, err)
}

func Test_MSSQL_NewFromConnection(t *testing.T) {
	db, err := sql.Open("sqlserver", testConnURI)
	require.NoError(t, err)
	defer db.Close() //nolint:errcheck // best effort cleanup

	store := NewFromConnection(db, Config{Table: "fiber_storage_existing", Reset: true})

	require.NoError(t, store.Set("john", []byte("doe"), 0))

	result, err := store.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), result)

	require.Same(t, db, store.Conn())

	// The handle is the caller's, so closing the storage must leave it usable.
	require.NoError(t, store.Close())
	require.NoError(t, db.Ping())
	require.ErrorIs(t, store.Set("jane", []byte("doe"), 0), ErrClosed)
}

func Test_MSSQL_NewFromConnection_Nil(t *testing.T) {
	require.Panics(t, func() {
		NewFromConnection(nil)
	})
}

// panicError runs fn, which must panic with an error, and returns that error.
func panicError(t *testing.T, fn func()) (err error) {
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

// limitedDB creates a login that may connect but owns nothing, and returns a handle opened as that login
// together with the connection URI it was opened from.
func limitedDB(t *testing.T, admin *sql.DB, name string) (*sql.DB, string) {
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
	uri := u.String()

	db, err := sql.Open("sqlserver", uri)
	require.NoError(t, err)
	t.Cleanup(func() { _ = db.Close() })

	return db, uri
}

// createTable (re)creates a table with the given columns on the shared container and drops it again when the test ends.
func createTable(t *testing.T, admin *sql.DB, name, columns string) {
	t.Helper()

	_, err := admin.Exec(fmt.Sprintf("IF OBJECT_ID('%[1]s') IS NOT NULL DROP TABLE %[1]s; CREATE TABLE %[1]s (%[2]s)", name, columns))
	require.NoError(t, err)
	t.Cleanup(func() { _, _ = admin.Exec(fmt.Sprintf("DROP TABLE IF EXISTS %s", name)) })
}

// requireSQLError asserts that err is the SQL Server error with the given number, which, unlike its message, does not depend on the server's language.
func requireSQLError(t *testing.T, err error, number int32) {
	t.Helper()

	var sqlErr mssqldb.Error
	require.ErrorAs(t, err, &sqlErr)
	require.Equal(t, number, sqlErr.Number, "got %q", sqlErr.Message)
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
		require.ErrorContains(t, validateTableName(name), "invalid table name", name)
	}
}

func Test_MSSQL_New_InvalidTableName(t *testing.T) {
	port := closedPort(t)

	// The name is refused before any connection is attempted, so the dead port is never dialled.
	err := panicError(t, func() {
		New(Config{Port: port, Table: "bad;name", Reset: true})
	})
	require.ErrorContains(t, err, "invalid table name")
}

func Test_MSSQL_NewFromConnection_InvalidTableName(t *testing.T) {
	db := adminDB(t)

	err := panicError(t, func() {
		NewFromConnection(db, Config{Table: "bad name"})
	})
	require.ErrorContains(t, err, "invalid table name")

	// The handle is the caller's, so a refused config must leave it open.
	require.NoError(t, db.Ping())
}

func Test_MSSQL_New_UnreachableServer(t *testing.T) {
	port := closedPort(t)

	cases := map[string]Config{
		"username only": {Port: port, Username: "user"},
		"password only": {Port: port, Password: "pass"},
		"instance":      {Port: port, Instance: "SQLEXPRESS"},
	}

	for name, cfg := range cases {
		t.Run(name, func(t *testing.T) {
			err := panicError(t, func() { New(cfg) })
			var dialErr *net.OpError
			require.ErrorAs(t, err, &dialErr)
		})
	}

	// The driver reads a path host as an instance name, and its failed lookup is an untyped error.
	t.Run("unix socket host", func(t *testing.T) {
		_ = panicError(t, func() { New(Config{Host: "/nonexistent/mssql.sock", Port: port}) })
	})
}

func Test_MSSQL_NewFromConnection_PingFails(t *testing.T) {
	db, err := sql.Open("sqlserver", fmt.Sprintf("sqlserver://sa:pw@127.0.0.1:%d?database=master&encrypt=disable", closedPort(t)))
	require.NoError(t, err)
	defer db.Close() //nolint:errcheck // best effort cleanup

	err = panicError(t, func() { NewFromConnection(db) })
	var dialErr *net.OpError
	require.ErrorAs(t, err, &dialErr)
}

func Test_MSSQL_NewFromConnection_ClosedDB(t *testing.T) {
	db := adminDB(t)
	require.NoError(t, db.Close())

	err := panicError(t, func() { NewFromConnection(db, Config{Table: "fiber_closed_db"}) })
	require.ErrorContains(t, err, "closed")
}

func Test_MSSQL_CheckSchema_MissingValueColumn(t *testing.T) {
	// A table whose `v` column is missing makes checkSchema panic after the table was prepared.
	createTable(t, adminDB(t), "fiber_no_v", "k VARCHAR(64) PRIMARY KEY NOT NULL, e BIGINT NOT NULL DEFAULT '0'")

	t.Run("owned handle", func(t *testing.T) {
		require.PanicsWithValue(t, sql.ErrNoRows, func() {
			New(Config{ConnectionURI: testConnURI, Table: "fiber_no_v"})
		})
	})

	t.Run("borrowed handle", func(t *testing.T) {
		db := adminDB(t)

		require.PanicsWithValue(t, sql.ErrNoRows, func() {
			NewFromConnection(db, Config{Table: "fiber_no_v"})
		})

		// A borrowed handle is not closed by the failed constructor.
		require.NoError(t, db.Ping())
	})
}

func Test_MSSQL_CheckSchema_WrongDataType(t *testing.T) {
	createTable(t, adminDB(t), "fiber_old_schema", "k VARCHAR(64) PRIMARY KEY NOT NULL, v VARCHAR(MAX) NOT NULL, e BIGINT NOT NULL DEFAULT '0'")

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
	limited, limitedURI := limitedDB(t, admin, "fiber_noperm")

	// The login may connect, but it cannot create the table.
	err := panicError(t, func() { NewFromConnection(limited, Config{Table: "fiber_noperm_tbl"}) })
	requireSQLError(t, err, 262) // CREATE TABLE permission denied in database
	require.NoError(t, limited.Ping())

	// With an owned handle the failed constructor must panic as well.
	err = panicError(t, func() { New(Config{ConnectionURI: limitedURI, Table: "fiber_noperm_tbl"}) })
	requireSQLError(t, err, 262)
}

func Test_MSSQL_New_ResetFailsWithoutPermission(t *testing.T) {
	admin := adminDB(t)
	createTable(t, admin, "fiber_nodrop", "k VARCHAR(64) PRIMARY KEY NOT NULL, v VARBINARY(MAX) NOT NULL, e BIGINT NOT NULL DEFAULT '0'")

	limited, _ := limitedDB(t, admin, "fiber_nodrop_user")
	// SELECT makes the table visible to the login, but dropping it stays forbidden.
	_, err := admin.Exec(`GRANT SELECT ON fiber_nodrop TO fiber_nodrop_user`)
	require.NoError(t, err)

	err = panicError(t, func() { NewFromConnection(limited, Config{Table: "fiber_nodrop", Reset: true}) })
	requireSQLError(t, err, 3701) // cannot drop the table: it does not exist or there is no permission

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

	// The deadline of this row has passed already, so the first sweep has something to collect.
	_, err := store.Conn().Exec(`INSERT INTO fiber_gc_ticker (k, v, e) VALUES ('expired', 0x01, @p1)`, time.Now().Add(-time.Minute).Unix())
	require.NoError(t, err)
	require.NoError(t, store.Set("forever", []byte("doe"), 0))

	count := func(key string) (int, error) {
		var n int
		err := store.Conn().QueryRow(`SELECT COUNT(*) FROM fiber_gc_ticker WHERE k = @p1`, key).Scan(&n)
		return n, err
	}

	// The collector, not a read, removes the expired row.
	require.Eventually(t, func() bool {
		n, err := count("expired")
		return err == nil && n == 0
	}, 15*time.Second, 100*time.Millisecond)

	n, err := count("forever")
	require.NoError(t, err)
	require.Equal(t, 1, n)
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
