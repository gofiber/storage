package mysql

import (
	"context"
	"database/sql"
	"os"
	"testing"
	"time"

	"github.com/stretchr/testify/require"
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

func newTestStore(t testing.TB) (*Storage, error) {
	t.Helper()

	ctx := context.Background()

	c := mustStartMySQL(t)

	conn, err := c.ConnectionString(ctx)
	if err != nil {
		return nil, err
	}

	return New(Config{
		ConnectionURI: conn,
		Reset:         true,
	}), nil
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
	testStore, err := newTestStore(t)
	require.NoError(t, err)

	require.True(t, testStore.db != nil)
	require.NoError(t, testStore.Close())

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

func Test_MYSQL_Set(t *testing.T) {
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

func Test_MYSQL_SetWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err := testStore.SetWithContext(ctx, key, val, 0)
	require.ErrorIs(t, err, context.Canceled)
}

func Test_MYSQL_Set_Override(t *testing.T) {
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

func Test_MYSQL_Get(t *testing.T) {
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

func Test_MYSQL_GetWithContext(t *testing.T) {
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

func Test_MYSQL_Set_Expiration(t *testing.T) {
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

func Test_MYSQL_Get_Expired(t *testing.T) {
	key := "john"

	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_MYSQL_Get_NotExist(t *testing.T) {
	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	result, err := testStore.Get("notexist")
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_MYSQL_Delete(t *testing.T) {
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

func Test_MYSQL_DeleteWithContext(t *testing.T) {
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

func Test_MYSQL_Reset(t *testing.T) {
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

func Test_MYSQL_ResetWithContext(t *testing.T) {
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

func Test_MYSQL_GC(t *testing.T) {
	testVal := []byte("doe")

	// This key should expire
	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	err = testStore.Set("john", testVal, time.Nanosecond)
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

	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	err = testStore.Set("0xF6", val, 0)
	require.NoError(t, err)

	result, err := testStore.Get("0xF6")
	require.NoError(t, err)
	require.Equal(t, val, result)
}

func Test_MYSQL_Close(t *testing.T) {
	testStore, err := newTestStore(t)
	require.NoError(t, err)

	require.Nil(t, testStore.Close())
}

func Test_MYSQL_Conn(t *testing.T) {
	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	require.True(t, testStore.Conn() != nil)
}

func Benchmark_MYSQL_Set(b *testing.B) {
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

func Benchmark_MYSQL_Get(b *testing.B) {
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

func Benchmark_MYSQL_SetAndDelete(b *testing.B) {
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
