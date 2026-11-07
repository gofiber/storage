package postgres

import (
	"context"
	"os"
	"strconv"
	"strings"
	"testing"
	"time"

	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgxpool"
	"github.com/stretchr/testify/require"
	"github.com/testcontainers/testcontainers-go"
	"github.com/testcontainers/testcontainers-go/modules/postgres"
)

const (
	// postgresImage is the default image used for running Postgres in tests.
	postgresImage              = "public.ecr.aws/docker/library/postgres:16-alpine"
	postgresImageEnvVar string = "TEST_POSTGRES_IMAGE"
	postgresUser        string = "username"
	postgresPass        string = "p4ssw0rd"
	postgresDatabase    string = "fiber"
)

func newTestConfig(t testing.TB) Config {
	t.Helper()

	ctx := context.Background()

	img := postgresImage
	if imgFromEnv := os.Getenv(postgresImageEnvVar); imgFromEnv != "" {
		img = imgFromEnv
	}

	c, err := postgres.Run(ctx, img,
		postgres.WithUsername(postgresUser),
		postgres.WithPassword(postgresPass),
		postgres.WithDatabase(postgresDatabase),
		postgres.BasicWaitStrategies(),
	)
	testcontainers.CleanupContainer(t, c)
	require.NoError(t, err)

	conn, err := c.ConnectionString(ctx, "sslmode=disable")
	require.NoError(t, err)

	cfg := Config{
		ConnectionURI: conn,
		Reset:         true,
	}
	return cfg
}

func newTestStore(t testing.TB) *Storage {
	t.Helper()

	return newTestStoreWithConfig(t, newTestConfig(t))
}

func newTestStoreWithConfig(t testing.TB, cfg Config) *Storage {
	t.Helper()

	return New(cfg)
}

func tablePersistence(t testing.TB, store *Storage, fullTableName string) string {
	t.Helper()

	schema := "public"
	tableName := fullTableName
	if strings.Contains(fullTableName, ".") {
		parts := strings.SplitN(fullTableName, ".", 2)
		schema = parts[0]
		tableName = parts[1]
	}

	var persistence string
	err := store.Conn().QueryRow(context.Background(), `
		SELECT c.relpersistence::text
		FROM pg_class c
		JOIN pg_namespace n ON n.oid = c.relnamespace
		WHERE n.nspname = $1 AND c.relname = $2;
	`, schema, tableName).Scan(&persistence)
	require.NoError(t, err)

	return persistence
}

func TestNoCreateUser(t *testing.T) {
	cfg := newTestConfig(t)

	testStore := newTestStoreWithConfig(t, cfg)
	defer testStore.Close()

	// Create a new user
	// give the use usage permissions to the database (but not create)
	ctx := context.Background()
	conn := testStore.Conn()

	username := "testuser" + strconv.Itoa(int(time.Now().UnixNano()))
	password := "testpassword"

	_, err := conn.Exec(ctx, "CREATE USER "+username+" WITH PASSWORD '"+password+"'")
	require.NoError(t, err)

	_, err = conn.Exec(ctx, "GRANT CONNECT ON DATABASE "+postgresDatabase+" TO "+username)
	require.NoError(t, err)

	_, err = conn.Exec(ctx, "GRANT USAGE ON SCHEMA public TO "+username)
	require.NoError(t, err)

	_, err = conn.Exec(ctx, "GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO "+username)
	require.NoError(t, err)

	_, err = conn.Exec(ctx, "ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO "+username)
	require.NoError(t, err)

	_, err = conn.Exec(ctx, "REVOKE CREATE ON SCHEMA public FROM "+username)
	require.NoError(t, err)

	// new connection with the user and password without privileges
	unpriviledgedURI := strings.Replace(cfg.ConnectionURI, postgresUser+":"+postgresPass, username+":"+password, 1)

	t.Run("should panic if limited user tries to create table", func(t *testing.T) {
		tableThatDoesNotExist := "public.table_does_not_exists_" + strconv.Itoa(int(time.Now().UnixNano()))

		defer func() {
			r := recover()
			require.NotNil(t, r, "Expected a panic when creating a table without permissions")
		}()

		panicCfg := Config{
			ConnectionURI: unpriviledgedURI,
			Reset:         true,
			Table:         tableThatDoesNotExist,
		}

		// This should panic since the user doesn't have CREATE permissions
		New(panicCfg)
	})

	limitedCfg := Config{
		ConnectionURI: unpriviledgedURI,
		Reset:         false,
	}

	// connect to an existing table using an unprivileged user
	limitedStore := New(limitedCfg)

	defer func() {
		limitedStore.Close()
		conn.Exec(ctx, "DROP USER "+username)
	}()

	t.Run("should set", func(t *testing.T) {
		var (
			key = "john" + strconv.Itoa(int(time.Now().UnixNano()))
			val = []byte("doe" + strconv.Itoa(int(time.Now().UnixNano())))
		)

		err := limitedStore.Set(key, val, 0)
		require.NoError(t, err)
	})
	t.Run("should set override", func(t *testing.T) {
		var (
			key = "john" + strconv.Itoa(int(time.Now().UnixNano()))
			val = []byte("doe" + strconv.Itoa(int(time.Now().UnixNano())))
		)
		err := limitedStore.Set(key, val, 0)
		require.NoError(t, err)
		err = limitedStore.Set(key, val, 0)
		require.NoError(t, err)
	})
	t.Run("should get", func(t *testing.T) {
		var (
			key = "john" + strconv.Itoa(int(time.Now().UnixNano()))
			val = []byte("doe" + strconv.Itoa(int(time.Now().UnixNano())))
		)
		err := limitedStore.Set(key, val, 0)
		require.NoError(t, err)
		result, err := limitedStore.Get(key)
		require.NoError(t, err)
		require.Equal(t, val, result)
	})
	t.Run("should set expiration", func(t *testing.T) {
		var (
			key = "john" + strconv.Itoa(int(time.Now().UnixNano()))
			val = []byte("doe" + strconv.Itoa(int(time.Now().UnixNano())))
			exp = 100 * time.Millisecond
		)
		err := limitedStore.Set(key, val, exp)
		require.NoError(t, err)
	})
	t.Run("should get expired", func(t *testing.T) {
		var (
			key = "john" + strconv.Itoa(int(time.Now().UnixNano()))
			val = []byte("doe" + strconv.Itoa(int(time.Now().UnixNano())))
			exp = 100 * time.Millisecond
		)
		err := limitedStore.Set(key, val, exp)
		require.NoError(t, err)

		// The deadline is stored in whole seconds and rounded up, so the entry may outlive it by one.
		deadline := time.Now().Add(4 * time.Second)
		for {
			result, err := limitedStore.Get(key)
			require.NoError(t, err)
			require.False(t, time.Now().After(deadline), "key should have expired")
			if len(result) == 0 {
				break
			}
			time.Sleep(100 * time.Millisecond)
		}
	})
	t.Run("should get not exists", func(t *testing.T) {
		result, err := limitedStore.Get("nonexistentkey")
		require.NoError(t, err)
		require.Zero(t, len(result))
	})
	t.Run("should delete", func(t *testing.T) {
		var (
			key = "john" + strconv.Itoa(int(time.Now().UnixNano()))
			val = []byte("doe" + strconv.Itoa(int(time.Now().UnixNano())))
		)
		err := limitedStore.Set(key, val, 0)
		require.NoError(t, err)
		err = limitedStore.Delete(key)
		require.NoError(t, err)
		result, err := limitedStore.Get(key)
		require.NoError(t, err)
		require.Zero(t, len(result))
	})

}

func Test_Postgres_DefaultTableIsLogged(t *testing.T) {
	cfg := newTestConfig(t)
	cfg.Table = "public.logged_table_" + strconv.Itoa(int(time.Now().UnixNano()))

	store := newTestStoreWithConfig(t, cfg)
	defer store.Close()

	require.Equal(t, "p", tablePersistence(t, store, cfg.Table))
}

func Test_Postgres_UnloggedTable(t *testing.T) {
	cfg := newTestConfig(t)
	cfg.Table = "public.unlogged_table_" + strconv.Itoa(int(time.Now().UnixNano()))
	cfg.Unlogged = true

	store := newTestStoreWithConfig(t, cfg)
	defer store.Close()

	require.Equal(t, "u", tablePersistence(t, store, cfg.Table))
}

func Test_Should_Panic_On_Wrong_Schema(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	// Create a test table with wrong schema
	_, err := testStore.Conn().Exec(context.Background(), `
			CREATE TABLE IF NOT EXISTS test_schema_table (
				k  VARCHAR(64) PRIMARY KEY NOT NULL DEFAULT '',
				v  BYTEA NOT NULL,
				e  VARCHAR(64) NOT NULL DEFAULT ''  -- Changed e from BIGINT to VARCHAR
			);
		`)
	require.NoError(t, err)
	defer func() {
		_, err := testStore.Conn().Exec(context.Background(), "DROP TABLE IF EXISTS test_schema_table;")
		require.NoError(t, err)
	}()

	// Call checkSchema with the wrong table
	require.Panics(t, func() {
		testStore.checkSchema(context.Background(), "test_schema_table")
	})
}

func Test_Postgres_Set(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)
}

func Test_Postgres_NewWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := NewWithContext(context.Background(), newTestConfig(t))
	require.NotNil(t, testStore)
	defer testStore.Close()

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)
}

func Test_Postgres_SetWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.SetWithContext(ctx, key, val, 0)
	require.ErrorIs(t, err, context.Canceled)
}

func Test_Postgres_Set_Override(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	err = testStore.Set(key, val, 0)
	require.NoError(t, err)
}

func Test_Postgres_Get(t *testing.T) {
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

func Test_Postgres_GetWithContext(t *testing.T) {
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

func Test_Postgres_Set_Expiration(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
		exp = 1 * time.Second
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set(key, val, exp)
	require.NoError(t, err)

	// The deadline is stored in whole seconds and rounded up, so the entry may outlive it by one.
	deadline := time.Now().Add(4 * time.Second)
	for {
		result, err := testStore.Get(key)
		require.NoError(t, err)
		require.False(t, time.Now().After(deadline), "Key should have expired")
		if len(result) == 0 {
			break
		}
		time.Sleep(100 * time.Millisecond)
	}
}

func Test_Postgres_Get_Expired(t *testing.T) {
	key := "john"

	testStore := newTestStore(t)
	defer testStore.Close()

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_Postgres_Get_NotExist(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	result, err := testStore.Get("notexist")
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_Postgres_Delete(t *testing.T) {
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

func Test_Postgres_DeleteWithContext(t *testing.T) {
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
}

func Test_Postgres_Reset(t *testing.T) {
	val := []byte("doe")

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

func Test_Postgres_ResetWithContext(t *testing.T) {
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
	require.NotZero(t, len(result))

	result, err = testStore.Get("john2")
	require.NoError(t, err)
	require.NotZero(t, len(result))
}

func Test_Postgres_GC(t *testing.T) {
	testVal := []byte("doe")

	testStore := newTestStore(t)
	defer testStore.Close()

	// This key should expire
	err := testStore.Set("john", testVal, time.Nanosecond)
	require.NoError(t, err)

	// The deadline rounds up to a whole second, so collect as of a moment safely past it.
	testStore.gc(context.Background(), time.Now().Add(2*time.Second))
	row := testStore.db.QueryRow(context.Background(), testStore.sqlSelect, "john")
	err = row.Scan(nil, nil)
	require.Equal(t, pgx.ErrNoRows, err)

	// This key should not expire
	err = testStore.Set("john", testVal, 0)
	require.NoError(t, err)

	testStore.gc(context.Background(), time.Now())
	val, err := testStore.Get("john")
	require.NoError(t, err)
	require.Equal(t, testVal, val)
}

func Test_Postgres_Non_UTF8(t *testing.T) {
	val := []byte("0xF5")

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set("0xF6", val, 0)
	require.NoError(t, err)

	result, err := testStore.Get("0xF6")
	require.NoError(t, err)
	require.Equal(t, val, result)
}

func Test_SslRequiredMode(t *testing.T) {
	require.Panics(t, func() {
		_ = New(Config{
			Reset: true,
		})
	}, "Expected panic when connecting to Postgres with SSL mode set to require")
}

func Test_Postgres_Conn(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	require.True(t, testStore.Conn() != nil)
}

func Test_Postgres_Close(t *testing.T) {
	testStore := newTestStore(t)
	require.NoError(t, testStore.Close())
}

func Benchmark_Postgres_Set(b *testing.B) {
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

func Benchmark_Postgres_Get(b *testing.B) {
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

func Benchmark_Postgres_SetAndDelete(b *testing.B) {
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

func Test_Postgres_Close_Twice(t *testing.T) {
	testStore := newTestStore(t)

	require.NoError(t, testStore.Close())
	require.NotPanics(t, func() {
		require.NoError(t, testStore.Close())
	})
}

func Test_Postgres_NewFromConnection(t *testing.T) {
	owner := newTestStore(t)
	defer owner.Close()

	store := NewFromConnection(owner.Conn(), Config{Table: "fiber_storage_existing", Reset: true})
	require.Same(t, owner.Conn(), store.Conn())

	require.NoError(t, store.Set("john", []byte("doe"), 0))

	result, err := store.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), result)

	// The pool is the caller's, so closing the storage must leave it usable.
	require.NoError(t, store.Close())
	require.NoError(t, owner.Set("jane", []byte("doe"), 0))
	require.ErrorIs(t, store.Set("jane", []byte("doe"), 0), ErrClosed)
}

func Test_Postgres_NewFromConnection_Nil(t *testing.T) {
	require.Panics(t, func() {
		NewFromConnection(nil)
	})
}

func Test_Config_Default_NoArgs(t *testing.T) {
	require.Equal(t, ConfigDefault, configDefault())
}

func Test_Config_Default_FillsZeroValues(t *testing.T) {
	cfg := configDefault(Config{
		Host:       "",
		Port:       -1,
		Database:   "",
		Table:      "",
		GCInterval: -time.Second,
		Reset:      true,
	})

	require.Equal(t, ConfigDefault.Host, cfg.Host)
	require.Equal(t, ConfigDefault.Port, cfg.Port)
	require.Equal(t, ConfigDefault.Database, cfg.Database)
	require.Equal(t, ConfigDefault.Table, cfg.Table)
	require.Equal(t, ConfigDefault.GCInterval, cfg.GCInterval)
	// Explicit values are preserved.
	require.True(t, cfg.Reset)
}

func Test_Config_Default_KeepsExplicitValues(t *testing.T) {
	cfg := configDefault(Config{
		Host:       "db.internal",
		Port:       6543,
		Database:   "other",
		Table:      "other_table",
		GCInterval: time.Minute,
	})

	require.Equal(t, "db.internal", cfg.Host)
	require.Equal(t, 6543, cfg.Port)
	require.Equal(t, "other", cfg.Database)
	require.Equal(t, "other_table", cfg.Table)
	require.Equal(t, time.Minute, cfg.GCInterval)
}

func Test_Config_GetDSN(t *testing.T) {
	tests := []struct {
		name string
		cfg  Config
		want string
	}{
		{
			name: "connection uri wins over every other field",
			cfg:  Config{ConnectionURI: "postgres://u:p@h:1/d", Host: "ignored", Username: "ignored"},
			want: "postgres://u:p@h:1/d",
		},
		{
			name: "defaults without credentials",
			cfg:  ConfigDefault,
			want: "postgresql://127.0.0.1:5432/fiber?sslmode=disable",
		},
		{
			name: "username and password are escaped",
			cfg: Config{
				Username: "us er", Password: "p@ss/word:1",
				Host: "db.internal", Port: 6543, Database: "my db", SSLMode: "require",
			},
			want: "postgresql://us+er:p%40ss%2Fword%3A1@db.internal:6543/my+db?sslmode=require",
		},
		{
			name: "username only",
			cfg:  Config{Username: "alice", Host: "h", Port: 1, Database: "d", SSLMode: "disable"},
			want: "postgresql://alice@h:1/d?sslmode=disable",
		},
		{
			name: "password only",
			cfg:  Config{Password: "secret", Host: "h", Port: 1, Database: "d", SSLMode: "disable"},
			want: "postgresql://:secret@h:1/d?sslmode=disable",
		},
		{
			name: "unix socket host is not escaped",
			cfg:  Config{Username: "alice", Host: "/var/run/postgresql", Port: 5432, Database: "d", SSLMode: "disable"},
			want: "postgresql://alice@/var/run/postgresql:5432/d?sslmode=disable",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			require.Equal(t, tt.want, tt.cfg.getDSN())
		})
	}
}

// cancelOnSQL is a pgx.QueryTracer that cancels a context when a statement
// containing marker starts.
type cancelOnSQL struct {
	marker string
	cancel context.CancelFunc
}

func (c cancelOnSQL) TraceQueryStart(ctx context.Context, _ *pgx.Conn, data pgx.TraceQueryStartData) context.Context {
	if strings.Contains(data.SQL, c.marker) {
		c.cancel()
	}
	return ctx
}

func (cancelOnSQL) TraceQueryEnd(context.Context, *pgx.Conn, pgx.TraceQueryEndData) {}

// newCancelOnSQLPool returns a pool for uri that cancels the initialization
// context when a statement containing marker starts. NewWithContext therefore
// fails on that statement with context.Canceled, however many statements run
// before it.
func newCancelOnSQLPool(t testing.TB, uri, marker string, cancel context.CancelFunc) *pgxpool.Pool {
	t.Helper()

	poolCfg, err := pgxpool.ParseConfig(uri)
	require.NoError(t, err)
	poolCfg.ConnConfig.Tracer = cancelOnSQL{marker: marker, cancel: cancel}

	pool, err := pgxpool.NewWithConfig(context.Background(), poolCfg)
	require.NoError(t, err)
	t.Cleanup(pool.Close)

	return pool
}

func uniqueTable(prefix string) string {
	return "public." + prefix + "_" + strconv.Itoa(int(time.Now().UnixNano()))
}

func recoverPanicError(t testing.TB, fn func()) error {
	t.Helper()

	var recovered any
	func() {
		defer func() { recovered = recover() }()
		fn()
	}()
	require.NotNil(t, recovered, "expected a panic")

	err, ok := recovered.(error)
	require.True(t, ok, "expected the panic value to be an error, got %T", recovered)
	return err
}

func Test_Postgres_New_InvalidConnectionURI(t *testing.T) {
	recoverPanicError(t, func() {
		New(Config{ConnectionURI: "postgres://user:pass@127.0.0.1:notaport/fiber"})
	})
}

func Test_Postgres_New_UnreachableServer(t *testing.T) {
	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	// Ping fails because the context is already cancelled; the pool this driver opened is released.
	err := recoverPanicError(t, func() {
		NewWithContext(ctx, Config{ConnectionURI: "postgres://user:pass@127.0.0.1:1/fiber?sslmode=disable"})
	})
	require.ErrorIs(t, err, context.Canceled)
}

// Test_Postgres_SharedContainer runs the tests that need a scratch database as
// subtests of one parent, so that they share a single container instead of each
// starting their own. They run one after the other and none relies on what an
// earlier one left behind: each either resets the default table or creates
// tables with names of its own.
func Test_Postgres_SharedContainer(t *testing.T) {
	base := newTestConfig(t)

	// Fails every statement of the initialization sequence in turn and checks
	// that the panic carries the cause and that the caller's pool is left open.
	t.Run("NewWithContext_InitFailures", func(t *testing.T) {
		owner := newTestStoreWithConfig(t, Config{ConnectionURI: base.ConnectionURI, Table: uniqueTable("init_owner"), Reset: true})
		defer owner.Close()

		existing := uniqueTable("init_existing")
		require.NoError(t, newTestStoreWithConfig(t, Config{ConnectionURI: base.ConnectionURI, Table: existing}).Close())

		legacy := uniqueTable("init_legacy")
		_, err := owner.Conn().Exec(context.Background(), `CREATE TABLE `+legacy+` (
			k VARCHAR(64) PRIMARY KEY NOT NULL DEFAULT '',
			v BYTEA NOT NULL,
			e BIGINT NOT NULL DEFAULT '0'
		);`)
		require.NoError(t, err)

		tests := []struct {
			name      string
			table     string
			reset     bool
			failOnSQL string // marker of the statement that fails
		}{
			{name: "reset drop", table: uniqueTable("init_drop"), reset: true, failOnSQL: "DROP TABLE"},
			{name: "table exists check (reset)", table: uniqueTable("init_check_reset"), reset: true, failOnSQL: "information_schema.tables"},
			{name: "table exists check", table: existing, failOnSQL: "information_schema.tables"},
			{name: "create table", table: uniqueTable("init_create"), reset: true, failOnSQL: "CREATE TABLE"},
			{name: "create index", table: uniqueTable("init_index"), reset: true, failOnSQL: "CREATE INDEX"},
			{name: "schema check after create", table: uniqueTable("init_schema_new"), reset: true, failOnSQL: "column_name IN"},
			{name: "column type lookup", table: existing, failOnSQL: "column_name = 'k'"},
			{name: "key column migration", table: legacy, failOnSQL: "ALTER TABLE"},
			{name: "schema check of existing table", table: existing, failOnSQL: "column_name IN"},
		}

		for _, tt := range tests {
			t.Run(tt.name, func(t *testing.T) {
				ctx, cancel := context.WithCancel(context.Background())
				defer cancel()

				pool := newCancelOnSQLPool(t, base.ConnectionURI, tt.failOnSQL, cancel)

				err := recoverPanicError(t, func() {
					NewWithContext(ctx, Config{DB: pool, Table: tt.table, Reset: tt.reset})
				})
				require.ErrorIs(t, err, context.Canceled)

				// The pool belongs to the caller and must survive a failed initialization.
				require.NoError(t, pool.Ping(context.Background()))
			})
		}

		// The legacy key column is untouched by the failed migration and is widened by a successful one.
		var dataType string
		query := `SELECT data_type FROM information_schema.columns WHERE table_schema = 'public' AND table_name = $1 AND column_name = 'k'`
		legacyName := strings.TrimPrefix(legacy, "public.")
		require.NoError(t, owner.Conn().QueryRow(context.Background(), query, legacyName).Scan(&dataType))
		require.Equal(t, "character varying", dataType)

		migrated := NewFromConnection(owner.Conn(), Config{Table: legacy})
		defer migrated.Close()
		require.NoError(t, owner.Conn().QueryRow(context.Background(), query, legacyName).Scan(&dataType))
		require.Equal(t, "text", dataType)
	})

	t.Run("New_MissingColumn", func(t *testing.T) {
		owner := newTestStoreWithConfig(t, base)
		defer owner.Close()

		table := uniqueTable("missing_column")
		_, err := owner.Conn().Exec(context.Background(), `CREATE TABLE `+table+` (
			k TEXT PRIMARY KEY NOT NULL DEFAULT '',
			v BYTEA NOT NULL
		);`)
		require.NoError(t, err)

		err = recoverPanicError(t, func() {
			New(Config{ConnectionURI: base.ConnectionURI, Table: table})
		})
		require.ErrorContains(t, err, "required column e does not exist")

		// checkSchema reports the same problem when called directly.
		err = recoverPanicError(t, func() {
			owner.checkSchema(context.Background(), table)
		})
		require.ErrorContains(t, err, "required column e does not exist")
	})

	t.Run("CheckSchema_MissingTable", func(t *testing.T) {
		store := newTestStoreWithConfig(t, base)
		defer store.Close()

		err := recoverPanicError(t, func() {
			store.checkSchema(context.Background(), "public.table_that_does_not_exist")
		})
		require.ErrorContains(t, err, "table table_that_does_not_exist does not exist")
	})

	t.Run("CheckSchema_QueryError", func(t *testing.T) {
		store := newTestStoreWithConfig(t, base)
		defer store.Close()

		ctx, cancel := context.WithCancel(context.Background())
		cancel()

		err := recoverPanicError(t, func() {
			store.checkSchema(ctx, "fiber_storage")
		})
		require.ErrorIs(t, err, context.Canceled)
	})

	t.Run("Closed_ReturnsErrClosed", func(t *testing.T) {
		store := newTestStoreWithConfig(t, base)
		require.NoError(t, store.Set("john", []byte("doe"), 0))
		require.NoError(t, store.Close())

		ctx := context.Background()

		val, err := store.GetWithContext(ctx, "john")
		require.ErrorIs(t, err, ErrClosed)
		require.Nil(t, val)

		val, err = store.Get("john")
		require.ErrorIs(t, err, ErrClosed)
		require.Nil(t, val)

		require.ErrorIs(t, store.SetWithContext(ctx, "john", []byte("doe"), 0), ErrClosed)
		require.ErrorIs(t, store.DeleteWithContext(ctx, "john"), ErrClosed)
		require.ErrorIs(t, store.Delete("john"), ErrClosed)
		require.ErrorIs(t, store.ResetWithContext(ctx), ErrClosed)
		require.ErrorIs(t, store.Reset(), ErrClosed)
	})

	t.Run("EmptyKeyAndValue", func(t *testing.T) {
		store := newTestStoreWithConfig(t, base)
		defer store.Close()

		// Empty keys and values are ignored rather than stored or rejected.
		require.NoError(t, store.Set("", []byte("doe"), 0))
		require.NoError(t, store.Set("john", nil, 0))
		require.NoError(t, store.Set("john", []byte{}, 0))

		var count int
		require.NoError(t, store.Conn().QueryRow(context.Background(), `SELECT COUNT(*) FROM fiber_storage`).Scan(&count))
		require.Zero(t, count)

		val, err := store.Get("")
		require.NoError(t, err)
		require.Nil(t, val)

		// An empty key neither deletes nor errors; other entries are kept.
		require.NoError(t, store.Set("jane", []byte("doe"), 0))
		require.NoError(t, store.Delete(""))
		val, err = store.Get("jane")
		require.NoError(t, err)
		require.Equal(t, []byte("doe"), val)
	})

	t.Run("Operations_CancelledContext", func(t *testing.T) {
		store := newTestStoreWithConfig(t, base)
		defer store.Close()

		require.NoError(t, store.Set("john", []byte("doe"), 0))

		ctx, cancel := context.WithCancel(context.Background())
		cancel()

		val, err := store.GetWithContext(ctx, "john")
		require.ErrorIs(t, err, context.Canceled)
		require.Nil(t, val)

		require.ErrorIs(t, store.DeleteWithContext(ctx, "john"), context.Canceled)
		require.ErrorIs(t, store.ResetWithContext(ctx), context.Canceled)

		// The failed operations changed nothing.
		val, err = store.Get("john")
		require.NoError(t, err)
		require.Equal(t, []byte("doe"), val)
	})

	t.Run("GC_Ticker", func(t *testing.T) {
		cfg := base
		cfg.GCInterval = 100 * time.Millisecond

		store := newTestStoreWithConfig(t, cfg)
		defer store.Close()

		// The expired row is inserted directly, so no real time has to pass before it may be collected.
		_, err := store.Conn().Exec(context.Background(), `INSERT INTO fiber_storage (k, v, e) VALUES ($1, $2, $3)`,
			"expiring", []byte("doe"), time.Now().Add(-time.Minute).Unix())
		require.NoError(t, err)
		require.NoError(t, store.Set("persistent", []byte("doe"), 0))

		// The background collector, not a manual sweep or a read, removes the expired row.
		require.Eventually(t, func() bool {
			var count int
			err := store.Conn().QueryRow(context.Background(),
				`SELECT COUNT(*) FROM fiber_storage WHERE k = $1`, "expiring").Scan(&count)
			return err == nil && count == 0
		}, 10*time.Second, 100*time.Millisecond)

		val, err := store.Get("persistent")
		require.NoError(t, err)
		require.Equal(t, []byte("doe"), val)
	})

	t.Run("Close_StopsGC", func(t *testing.T) {
		cfg := base
		cfg.GCInterval = 50 * time.Millisecond

		store := newTestStoreWithConfig(t, cfg)
		require.NoError(t, store.Close())

		select {
		case <-store.stopped:
		default:
			t.Fatal("collector still running after Close")
		}
		require.True(t, store.closed.Load())
	})
}
