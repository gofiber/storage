package postgres

import (
	"context"
	"fmt"
	"os"
	"testing"
	"time"

	"github.com/jackc/pgx/v5"
	"github.com/stretchr/testify/require"
	"github.com/testcontainers/testcontainers-go"
	tccockroachdb "github.com/testcontainers/testcontainers-go/modules/cockroachdb"
)

const (
	cockroachdbImage              = "cockroachdb/cockroach:latest-v23.2"
	cockroachdbImageEnvVar string = "TEST_COCKROACHDB_IMAGE"
	cockroachdbDatabase    string = "fiber"
)

// newCockroachDBTestConfig starts a CockroachDB container and returns a Config.
// CockroachDB is wire-compatible with PostgreSQL and works with this driver as-is.
func newCockroachDBTestConfig(t testing.TB) Config {
	t.Helper()

	ctx := context.Background()

	img := cockroachdbImage
	if imgFromEnv := os.Getenv(cockroachdbImageEnvVar); imgFromEnv != "" {
		img = imgFromEnv
	}

	c, err := tccockroachdb.Run(ctx, img,
		tccockroachdb.WithDatabase(cockroachdbDatabase),
		tccockroachdb.WithInsecure(),
	)
	testcontainers.CleanupContainer(t, c)
	require.NoError(t, err)

	// ConnectionString() returns a stdlib registered key, not compatible with pgxpool.
	// Use ConnectionConfig() to extract host/port/database and build a plain DSN.
	connConfig, err := c.ConnectionConfig(ctx)
	require.NoError(t, err)

	dsn := fmt.Sprintf("postgresql://%s@%s:%d/%s?sslmode=disable",
		connConfig.User, connConfig.Host, connConfig.Port, connConfig.Database)

	return Config{
		ConnectionURI: dsn,
		Reset:         true,
	}
}

func Test_CockroachDB_Set(t *testing.T) {
	testStore := New(newCockroachDBTestConfig(t))
	defer testStore.Close()

	err := testStore.Set("john", []byte("doe"), 0)
	require.NoError(t, err)
}

func Test_CockroachDB_Set_Override(t *testing.T) {
	testStore := New(newCockroachDBTestConfig(t))
	defer testStore.Close()

	err := testStore.Set("john", []byte("doe"), 0)
	require.NoError(t, err)
	err = testStore.Set("john", []byte("doe"), 0)
	require.NoError(t, err)
}

func Test_CockroachDB_Get(t *testing.T) {
	val := []byte("doe")

	testStore := New(newCockroachDBTestConfig(t))
	defer testStore.Close()

	err := testStore.Set("john", val, 0)
	require.NoError(t, err)

	result, err := testStore.Get("john")
	require.NoError(t, err)
	require.Equal(t, val, result)
}

func Test_CockroachDB_Set_Expiration(t *testing.T) {
	testStore := New(newCockroachDBTestConfig(t))
	defer testStore.Close()

	err := testStore.Set("john", []byte("doe"), 1*time.Second)
	require.NoError(t, err)

	time.Sleep(1100 * time.Millisecond)

	result, err := testStore.Get("john")
	require.NoError(t, err)
	require.Zero(t, len(result), "key should have expired")
}

func Test_CockroachDB_Get_NotExist(t *testing.T) {
	testStore := New(newCockroachDBTestConfig(t))
	defer testStore.Close()

	result, err := testStore.Get("notexist")
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_CockroachDB_Delete(t *testing.T) {
	testStore := New(newCockroachDBTestConfig(t))
	defer testStore.Close()

	err := testStore.Set("john", []byte("doe"), 0)
	require.NoError(t, err)

	err = testStore.Delete("john")
	require.NoError(t, err)

	result, err := testStore.Get("john")
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_CockroachDB_Reset(t *testing.T) {
	testStore := New(newCockroachDBTestConfig(t))
	defer testStore.Close()

	err := testStore.Set("john1", []byte("doe"), 0)
	require.NoError(t, err)
	err = testStore.Set("john2", []byte("doe"), 0)
	require.NoError(t, err)

	err = testStore.Reset()
	require.NoError(t, err)

	result, err := testStore.Get("john1")
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_CockroachDB_GC(t *testing.T) {
	testVal := []byte("doe")

	testStore := New(newCockroachDBTestConfig(t))
	defer testStore.Close()

	err := testStore.Set("john", testVal, time.Nanosecond)
	require.NoError(t, err)

	testStore.gc(time.Now())

	row := testStore.db.QueryRow(context.Background(), testStore.sqlSelect, "john")
	err = row.Scan(nil, nil)
	require.Equal(t, pgx.ErrNoRows, err)

	err = testStore.Set("john", testVal, 0)
	require.NoError(t, err)

	testStore.gc(time.Now())
	result, err := testStore.Get("john")
	require.NoError(t, err)
	require.Equal(t, testVal, result)
}

func Test_CockroachDB_Conn(t *testing.T) {
	testStore := New(newCockroachDBTestConfig(t))
	defer testStore.Close()

	require.NotNil(t, testStore.Conn())
}

func Test_CockroachDB_Close(t *testing.T) {
	testStore := New(newCockroachDBTestConfig(t))
	require.NoError(t, testStore.Close())
}
