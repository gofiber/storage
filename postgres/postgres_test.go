package postgres

import (
	"context"
	"os"
	"strconv"
	"strings"
	"testing"
	"time"

	"github.com/jackc/pgx/v5"
	"github.com/stretchr/testify/require"
	"github.com/testcontainers/testcontainers-go"
	"github.com/testcontainers/testcontainers-go/modules/postgres"
)

const (
	// postgresImage is the default image used for running Postgres in tests.
	postgresImage              = "docker.io/postgres:16-alpine"
	postgresImageEnvVar string = "TEST_POSTGRES_IMAGE"
	postgresUser        string = "username"
	postgresPass        string = "p4ssw0rd"
	postgresDatabase    string = "fiber"
)

func newTestConfig(t testing.TB) (Config, error) {
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

	var cfg Config
	conn, err := c.ConnectionString(ctx, "sslmode=disable")
	if err != nil {
		return cfg, err
	}

	cfg = Config{
		ConnectionURI: conn,
		Reset:         true,
	}
	return cfg, nil
}

func newTestStore(t testing.TB) (*Storage, error) {
	t.Helper()

	cfg, err := newTestConfig(t)
	if err != nil {
		return nil, err
	}

	return newTestStoreWithConfig(t, cfg)
}

func newTestStoreWithConfig(t testing.TB, cfg Config) (*Storage, error) {
	t.Helper()

	return New(cfg), nil
}

func TestNoCreateUser(t *testing.T) {
	cfg, err := newTestConfig(t)
	require.NoError(t, err)

	testStore, err := newTestStoreWithConfig(t, cfg)
	require.NoError(t, err)
	defer testStore.Close()

	// Create a new user
	// give the use usage permissions to the database (but not create)
	ctx := context.Background()
	conn := testStore.Conn()

	username := "testuser" + strconv.Itoa(int(time.Now().UnixNano()))
	password := "testpassword"

	_, err = conn.Exec(ctx, "CREATE USER "+username+" WITH PASSWORD '"+password+"'")
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
		time.Sleep(200 * time.Millisecond)
		result, err := limitedStore.Get(key)
		require.NoError(t, err)
		require.Zero(t, len(result))
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
func Test_Should_Panic_On_Wrong_Schema(t *testing.T) {
	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	// Create a test table with wrong schema
	_, err = testStore.Conn().Exec(context.Background(), `
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
		testStore.checkSchema("test_schema_table")
	})
}

func Test_Postgres_Set(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	err = testStore.Set(key, val, 0)
	require.NoError(t, err)
}

func Test_Postgres_SetWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	err = testStore.SetWithContext(ctx, key, val, 0)
	require.ErrorIs(t, err, context.Canceled)
}

func Test_Postgres_Set_Override(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	err = testStore.Set(key, val, 0)
	require.NoError(t, err)

	err = testStore.Set(key, val, 0)
	require.NoError(t, err)
}

func Test_Postgres_Get(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	err = testStore.Set(key, val, 0)
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

	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	err = testStore.Set(key, val, 0)
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

	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	err = testStore.Set(key, val, exp)
	require.NoError(t, err)

	time.Sleep(1100 * time.Millisecond)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Zero(t, len(result), "Key should have expired")
}

func Test_Postgres_Get_Expired(t *testing.T) {
	key := "john"

	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_Postgres_Get_NotExist(t *testing.T) {
	testStore, err := newTestStore(t)
	require.NoError(t, err)
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

	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	err = testStore.Set(key, val, 0)
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

	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	err = testStore.Set(key, val, 0)
	require.NoError(t, err)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err = testStore.DeleteWithContext(ctx, key)
	require.ErrorIs(t, err, context.Canceled)
}

func Test_Postgres_Reset(t *testing.T) {
	val := []byte("doe")

	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	err = testStore.Set("john1", val, 0)
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

	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	err = testStore.Set("john1", val, 0)
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

	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	// This key should expire
	err = testStore.Set("john", testVal, time.Nanosecond)
	require.NoError(t, err)

	testStore.gc(time.Now())
	row := testStore.db.QueryRow(context.Background(), testStore.sqlSelect, "john")
	err = row.Scan(nil, nil)
	require.Equal(t, pgx.ErrNoRows, err)

	// This key should not expire
	err = testStore.Set("john", testVal, 0)
	require.NoError(t, err)

	testStore.gc(time.Now())
	val, err := testStore.Get("john")
	require.NoError(t, err)
	require.Equal(t, testVal, val)
}

func Test_Postgres_Non_UTF8(t *testing.T) {
	val := []byte("0xF5")

	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	err = testStore.Set("0xF6", val, 0)
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
	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	require.True(t, testStore.Conn() != nil)
}

func Test_Postgres_Close(t *testing.T) {
	testStore, err := newTestStore(t)
	require.NoError(t, err)

	require.Nil(t, testStore.Close())
}

func Benchmark_Postgres_Set(b *testing.B) {
	testStore, err := newTestStore(b)
	require.NoError(b, err)
	defer testStore.Close()

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		err = testStore.Set("john", []byte("doe"), 0)
	}

	require.NoError(b, err)
}

func Benchmark_Postgres_Get(b *testing.B) {
	testStore, err := newTestStore(b)
	require.NoError(b, err)
	defer testStore.Close()

	err = testStore.Set("john", []byte("doe"), 0)
	require.NoError(b, err)

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_, err = testStore.Get("john")
	}

	require.NoError(b, err)
}

func Benchmark_Postgres_SetAndDelete(b *testing.B) {
	testStore, err := newTestStore(b)
	require.NoError(b, err)
	defer testStore.Close()

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_ = testStore.Set("john", []byte("doe"), 0)
		err = testStore.Delete("john")
	}

	require.NoError(b, err)
}
