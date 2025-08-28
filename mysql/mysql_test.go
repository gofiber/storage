package mysql

import (
	"context"
	"database/sql"
	"os"
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
	mysqlImage              = "docker.io/mysql:9"
	mysqlImageEnvVar string = "TEST_MYSQL_IMAGE"
	mysqlUser        string = "username"
	mysqlPass        string = "password"
	mysqlDatabase    string = "fiber"
)

type MySQLStorageTCK struct{}

func (s *MySQLStorageTCK) NewStoreWithContainer() func(ctx context.Context, tb testing.TB) (*Storage, testcontainers.Container, error) {
	return func(ctx context.Context, tb testing.TB) (*Storage, testcontainers.Container, error) {
		c := mustStartMySQL(tb)

		conn, err := c.ConnectionString(ctx)
		require.NoError(tb, err)

		store := New(Config{
			ConnectionURI: conn,
			Reset:         true,
		})

		return store, c, nil
	}
}

func newTestStore(t testing.TB) *Storage {
	t.Helper()

	ctx := context.Background()

	suite := MySQLStorageTCK{}
	store, _, err := suite.NewStoreWithContainer()(ctx, t)
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

	testStore.gc(time.Now())
	row := testStore.db.QueryRow(testStore.sqlSelect, "john")
	err = row.Scan(nil, nil)
	require.Equal(t, sql.ErrNoRows, err)

	// This key should not expire
	err = testStore.Set("john", testVal, 0)
	require.NoError(t, err)

	testStore.gc(time.Now())
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
	s, err := tck.New[*Storage, *sql.DB](context.Background(), t, &MySQLStorageTCK{}, tck.PerTest)
	require.NoError(t, err)

	suite.Run(t, &s)
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
