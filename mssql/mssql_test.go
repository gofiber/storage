package mssql

import (
	"context"
	"database/sql"
	"log"
	"os"
	"testing"
	"time"

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

var testStore *Storage

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
