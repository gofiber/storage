package mysql

import (
	"context"
	"database/sql"
	"io"
	"net"
	"os"
	"strconv"
	"testing"
	"time"

	"github.com/gofiber/storage/testhelpers/tck"
	"github.com/stretchr/testify/require"
	"github.com/stretchr/testify/suite"
	"github.com/testcontainers/testcontainers-go"
	"github.com/testcontainers/testcontainers-go/modules/mysql"
	"github.com/testcontainers/testcontainers-go/wait"
)

const (
	// mysqlImage is the default image used for running MySQL in tests.
	mysqlImage              = "public.ecr.aws/docker/library/mysql:9"
	mysqlImageEnvVar string = "TEST_MYSQL_IMAGE"
	mysqlUser        string = "username"
	mysqlPass        string = "password"
	mysqlDatabase    string = "fiber"
)

// MySQLStorageTCK is the test suite for the MySQL storage.
type MySQLStorageTCK struct{}

// NewStore is a function that returns a new MySQL storage.
// It implements the [tck.TCKSuite] interface, allowing the TCK to create a new MySQL storage
// from the container created by the TCK.
func (s *MySQLStorageTCK) NewStore() func(ctx context.Context, tb testing.TB, ctr *mysql.MySQLContainer) (*Storage, error) {
	return func(ctx context.Context, tb testing.TB, ctr *mysql.MySQLContainer) (*Storage, error) {
		conn, err := ctr.ConnectionString(ctx)
		require.NoError(tb, err)

		store := New(Config{
			ConnectionURI: conn,
			Reset:         true,
		})

		return store, nil
	}
}

// NewContainer is a function that returns a new MySQL container.
// It implements the [tck.TCKSuite] interface, allowing the TCK to create a new MySQL container
// for the MySQL storage.
func (s *MySQLStorageTCK) NewContainer() func(ctx context.Context, tb testing.TB) (*mysql.MySQLContainer, error) {
	return func(ctx context.Context, tb testing.TB) (*mysql.MySQLContainer, error) {
		return mustStartMySQL(tb), nil
	}
}

func newTestStore(t testing.TB) *Storage {
	t.Helper()

	ctx := context.Background()

	suite := MySQLStorageTCK{}

	ctr, err := suite.NewContainer()(ctx, t)
	require.NoError(t, err)

	store, err := suite.NewStore()(ctx, t, ctr)
	require.NoError(t, err)

	return store
}

func mustStartMySQL(t testing.TB) *mysql.MySQLContainer {
	img := mysqlImage
	if imgFromEnv := os.Getenv(mysqlImageEnvVar); imgFromEnv != "" {
		img = imgFromEnv
	}

	ctx := context.Background()

	c, err := mysql.Run(ctx, img,
		mysql.WithPassword(mysqlPass),
		mysql.WithUsername(mysqlUser),
		mysql.WithDatabase(mysqlDatabase),
		testcontainers.WithWaitStrategy(
			wait.ForListeningPort("3306/tcp"),
			wait.ForLog("port: 3306  MySQL Community Server"),
		),
	)
	testcontainers.CleanupContainer(t, c)
	require.NoError(t, err)

	return c
}

func Test_MYSQL_New(t *testing.T) {
	c := mustStartMySQL(t)

	dsn, err := c.ConnectionString(context.Background())
	require.NoError(t, err)

	db, _ := sql.Open("mysql", dsn)
	newConfigStore := New(Config{
		Db:    db,
		Reset: true,
	})

	require.True(t, newConfigStore.db != nil)
	defer newConfigStore.Close()
}

func Test_MYSQL_GC(t *testing.T) {
	testVal := []byte("doe")

	// This key should expire
	testStore := newTestStore(t)
	defer testStore.Close()

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

func Test_MYSQL_Non_UTF8(t *testing.T) {
	val := []byte("0xF5")

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set("0xF6", val, 0)
	require.NoError(t, err)

	result, err := testStore.Get("0xF6")
	require.NoError(t, err)
	require.Equal(t, val, result)
}

func TestMySQLStorageTCK(t *testing.T) {
	// The TCK needs the concrete type of the storage and the driver type returned by the Conn method.
	s, err := tck.New[*Storage, *sql.DB](context.Background(), t, &MySQLStorageTCK{}, tck.PerTest())
	require.NoError(t, err)

	suite.Run(t, s)
}

func Benchmark_MYSQL_Set(b *testing.B) {
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

func Benchmark_MYSQL_Get(b *testing.B) {
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

func Benchmark_MYSQL_SetAndDelete(b *testing.B) {
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

func Test_MySQL_Close_Twice(t *testing.T) {
	testStore := newTestStore(t)

	require.NoError(t, testStore.Close())
	require.NotPanics(t, func() {
		require.NoError(t, testStore.Close())
	})
}

func Test_MYSQL_NewFromConnection(t *testing.T) {
	c := mustStartMySQL(t)

	dsn, err := c.ConnectionString(context.Background())
	require.NoError(t, err)

	db, err := sql.Open("mysql", dsn)
	require.NoError(t, err)
	defer db.Close() //nolint:errcheck // best effort cleanup

	store := NewFromConnection(db, Config{Table: "fiber_storage_existing", Reset: true})
	require.Same(t, db, store.Conn())

	require.NoError(t, store.Set("john", []byte("doe"), 0))

	result, err := store.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), result)

	// The handle is the caller's, so closing the storage must leave it usable.
	require.NoError(t, store.Close())
	require.NoError(t, db.Ping())
	require.ErrorIs(t, store.Set("jane", []byte("doe"), 0), ErrClosed)
}

func Test_MYSQL_NewFromConnection_Nil(t *testing.T) {
	require.Panics(t, func() {
		NewFromConnection(nil)
	})
}

// closedListenerAddr returns a TCP address that nothing listens on.
func closedListenerAddr(t testing.TB) (string, int) {
	t.Helper()

	ln, err := net.Listen("tcp", "127.0.0.1:0")
	require.NoError(t, err)
	addr := ln.Addr().(*net.TCPAddr)
	require.NoError(t, ln.Close())

	return addr.IP.String(), addr.Port
}

func Test_MYSQL_Config_DSN(t *testing.T) {
	t.Parallel()

	// An explicit connection URI wins over every other field.
	cfg := Config{ConnectionURI: "u:p@tcp(example:1234)/db", Host: "ignored", Port: 1}
	require.Equal(t, "u:p@tcp(example:1234)/db", cfg.dsn())

	// Otherwise the DSN is assembled from the individual fields.
	cfg = configDefault(Config{Username: "user", Password: "pass", Host: "db.local", Port: 3307, Database: "app"})
	require.Equal(t, "user:pass@tcp(db.local:3307)/app", cfg.dsn())

	// Unset fields fall back to the defaults.
	cfg = configDefault(Config{Username: "user", Password: "pass"})
	require.Equal(t, "user:pass@tcp(127.0.0.1:3306)/fiber", cfg.dsn())
}

func Test_MYSQL_ConfigDefault(t *testing.T) {
	t.Parallel()

	require.Equal(t, ConfigDefault, configDefault())

	cfg := configDefault(Config{Port: -1, GCInterval: -time.Second})
	require.Equal(t, ConfigDefault.Host, cfg.Host)
	require.Equal(t, ConfigDefault.Port, cfg.Port)
	require.Equal(t, ConfigDefault.Database, cfg.Database)
	require.Equal(t, ConfigDefault.Table, cfg.Table)
	require.Equal(t, ConfigDefault.GCInterval, cfg.GCInterval)

	cfg = configDefault(Config{Host: "h", Port: 1, Database: "d", Table: "t", GCInterval: time.Minute})
	require.Equal(t, "h", cfg.Host)
	require.Equal(t, 1, cfg.Port)
	require.Equal(t, "d", cfg.Database)
	require.Equal(t, "t", cfg.Table)
	require.Equal(t, time.Minute, cfg.GCInterval)
}

func Test_MYSQL_New_InvalidDSN(t *testing.T) {
	t.Parallel()

	require.Panics(t, func() {
		New(Config{ConnectionURI: "this is not a valid dsn"})
	})
}

func Test_MYSQL_New_Unreachable(t *testing.T) {
	t.Parallel()

	host, port := closedListenerAddr(t)

	// Owned connection built from the individual fields.
	require.Panics(t, func() {
		New(Config{Host: host, Port: port, Username: "u", Password: "p"})
	})

	// Owned connection built from a URI.
	require.Panics(t, func() {
		New(Config{ConnectionURI: "u:p@tcp(" + host + ":" + strconv.Itoa(port) + ")/fiber"})
	})

	// A borrowed handle is left open for the caller when initialization fails.
	db, err := sql.Open("mysql", "u:p@tcp("+host+":"+strconv.Itoa(port)+")/fiber")
	require.NoError(t, err)
	t.Cleanup(func() { _ = db.Close() })

	require.Panics(t, func() {
		NewFromConnection(db)
	})
	err = db.Ping()
	require.Error(t, err)
	require.NotContains(t, err.Error(), "database is closed")
}

func Test_MYSQL_ClosedStorage(t *testing.T) {
	t.Parallel()

	// A closed *sql.DB can never be pinged, so build the storage by hand the way New would.
	db, err := sql.Open("mysql", "u:p@tcp(127.0.0.1:1)/fiber")
	require.NoError(t, err)
	require.NoError(t, db.Close())

	s := &Storage{
		db:        db,
		ownsDB:    true,
		done:      make(chan struct{}),
		stopped:   make(chan struct{}),
		sqlSelect: "SELECT v, e FROM t WHERE k=?;",
		sqlInsert: "INSERT INTO t (k, v, e) VALUES (?,?,?) ON DUPLICATE KEY UPDATE v = ?, e = ?",
		sqlDelete: "DELETE FROM t WHERE k=?",
		sqlReset:  "TRUNCATE TABLE t;",
	}
	close(s.stopped) // no collector is running

	// Operations on a closed *sql.DB surface the driver error.
	_, err = s.Get("k")
	require.ErrorContains(t, err, "closed")
	require.ErrorContains(t, s.Set("k", []byte("v"), 0), "closed")
	require.ErrorContains(t, s.Delete("k"), "closed")
	require.ErrorContains(t, s.Reset(), "closed")

	// Empty keys/values short-circuit before touching the database.
	val, err := s.Get("")
	require.NoError(t, err)
	require.Nil(t, val)
	require.NoError(t, s.Set("", []byte("v"), 0))
	require.NoError(t, s.Set("k", nil, 0))
	require.NoError(t, s.Delete(""))

	// Closing an already-closed handle is not an error, and a second Close is a no-op.
	require.NoError(t, s.Close())
	require.NoError(t, s.Close())

	// Once the storage is closed every operation reports ErrClosed.
	_, err = s.Get("k")
	require.ErrorIs(t, err, ErrClosed)
	require.ErrorIs(t, s.Set("k", []byte("v"), 0), ErrClosed)
	require.ErrorIs(t, s.Delete("k"), ErrClosed)
	require.ErrorIs(t, s.Reset(), ErrClosed)
}

// Test_MYSQL_Errors shares one container across all the cases that need a live server.
func Test_MYSQL_Errors(t *testing.T) {
	c := mustStartMySQL(t)

	dsn, err := c.ConnectionString(context.Background())
	require.NoError(t, err)

	rawDB, err := sql.Open("mysql", dsn)
	require.NoError(t, err)
	t.Cleanup(func() { _ = rawDB.Close() })

	t.Run("context errors", func(t *testing.T) {
		store := New(Config{ConnectionURI: dsn, Table: "ctx_errors", Reset: true})
		t.Cleanup(func() { _ = store.Close() })

		require.NoError(t, store.Set("john", []byte("doe"), 0))

		ctx, cancel := context.WithCancel(context.Background())
		cancel()

		val, err := store.GetWithContext(ctx, "john")
		require.ErrorIs(t, err, context.Canceled)
		require.Nil(t, val)
		require.ErrorIs(t, store.SetWithContext(ctx, "jane", []byte("doe"), 0), context.Canceled)
		require.ErrorIs(t, store.DeleteWithContext(ctx, "john"), context.Canceled)
		require.ErrorIs(t, store.ResetWithContext(ctx), context.Canceled)

		// The failed calls changed nothing.
		val, err = store.Get("john")
		require.NoError(t, err)
		require.Equal(t, []byte("doe"), val)
		val, err = store.Get("jane")
		require.NoError(t, err)
		require.Nil(t, val)
	})

	t.Run("expired entry is a miss", func(t *testing.T) {
		store := New(Config{ConnectionURI: dsn, Table: "expired_entry", Reset: true, GCInterval: time.Hour})
		t.Cleanup(func() { _ = store.Close() })

		past := time.Now().Add(-time.Minute).Unix()
		_, err := store.db.Exec("INSERT INTO expired_entry (k, v, e) VALUES (?,?,?)", "old", []byte("v"), past)
		require.NoError(t, err)

		val, err := store.Get("old")
		require.NoError(t, err)
		require.Nil(t, val)

		// Get does not delete the row.
		var n int
		require.NoError(t, store.db.QueryRow("SELECT COUNT(*) FROM expired_entry WHERE k = 'old'").Scan(&n))
		require.Equal(t, 1, n)

		// An entry expiring in the future is returned.
		require.NoError(t, store.Set("fresh", []byte("v"), time.Hour))
		val, err = store.Get("fresh")
		require.NoError(t, err)
		require.Equal(t, []byte("v"), val)
	})

	t.Run("gc ticker removes expired entries", func(t *testing.T) {
		store := New(Config{ConnectionURI: dsn, Table: "gc_ticker", Reset: true, GCInterval: 100 * time.Millisecond})
		t.Cleanup(func() { _ = store.Close() })

		require.NoError(t, store.Set("short", []byte("v"), time.Nanosecond))
		require.NoError(t, store.Set("forever", []byte("v"), 0))

		require.Eventually(t, func() bool {
			var n int
			if err := store.db.QueryRow("SELECT COUNT(*) FROM gc_ticker WHERE k = 'short'").Scan(&n); err != nil {
				return false
			}
			return n == 0
		}, 10*time.Second, 50*time.Millisecond)

		val, err := store.Get("forever")
		require.NoError(t, err)
		require.Equal(t, []byte("v"), val)
	})

	t.Run("reset fails on invalid table name", func(t *testing.T) {
		require.Panics(t, func() {
			New(Config{ConnectionURI: dsn, Table: "bad table name", Reset: true})
		})

		// With a borrowed handle the failure must not close the caller's database.
		require.Panics(t, func() {
			NewFromConnection(rawDB, Config{Table: "bad table name", Reset: true})
		})
		require.NoError(t, rawDB.Ping())
	})

	t.Run("init fails on invalid table name", func(t *testing.T) {
		require.Panics(t, func() {
			New(Config{ConnectionURI: dsn, Table: "bad table name"})
		})

		require.Panics(t, func() {
			NewFromConnection(rawDB, Config{Table: "bad table name"})
		})
		require.NoError(t, rawDB.Ping())
	})

	t.Run("schema check failure panics", func(t *testing.T) {
		// The quoted name creates a valid table, but the schema lookup does not find it.
		var recovered any
		require.NotPanics(t, func() {
			defer func() { recovered = recover() }()
			New(Config{ConnectionURI: dsn, Table: "`quoted_table`"})
		})
		require.ErrorIs(t, recovered.(error), sql.ErrNoRows)

		recovered = nil
		require.NotPanics(t, func() {
			defer func() { recovered = recover() }()
			NewFromConnection(rawDB, Config{Table: "`quoted_table`"})
		})
		require.ErrorIs(t, recovered.(error), sql.ErrNoRows)
		require.NoError(t, rawDB.Ping())
	})

	t.Run("schema check warns on non-blob column", func(t *testing.T) {
		_, err := rawDB.Exec("CREATE TABLE legacy_table (k VARCHAR(64) NOT NULL DEFAULT '', v TEXT NOT NULL, e BIGINT NOT NULL DEFAULT '0', PRIMARY KEY (k))")
		require.NoError(t, err)

		out := captureStdout(t, func() {
			store := New(Config{ConnectionURI: dsn, Table: "legacy_table"})
			require.NoError(t, store.Close())
		})
		require.Contains(t, out, "It should be BLOB but is instead text")

		// A correct schema prints nothing.
		out = captureStdout(t, func() {
			store := New(Config{ConnectionURI: dsn, Table: "good_table"})
			require.NoError(t, store.Close())
		})
		require.Empty(t, out)
	})

	t.Run("close releases owned connection only", func(t *testing.T) {
		store := New(Config{ConnectionURI: dsn, Table: "close_owned"})
		require.NoError(t, store.Close())
		require.Error(t, store.Conn().Ping(), "an owned handle is closed by Close")

		borrowed := NewFromConnection(rawDB, Config{Table: "close_borrowed"})
		require.NoError(t, borrowed.Close())
		require.NoError(t, rawDB.Ping(), "a borrowed handle survives Close")
	})
}

// captureStdout runs fn and returns what it wrote to os.Stdout.
func captureStdout(t testing.TB, fn func()) string {
	t.Helper()

	r, w, err := os.Pipe()
	require.NoError(t, err)

	orig := os.Stdout
	os.Stdout = w
	defer func() { os.Stdout = orig }()

	done := make(chan string)
	go func() {
		b, _ := io.ReadAll(r)
		done <- string(b)
	}()

	fn()

	require.NoError(t, w.Close())
	os.Stdout = orig

	return <-done
}
