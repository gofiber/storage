package clickhouse

import (
	"context"
	"os"
	"strconv"
	"strings"
	"testing"
	"time"

	driver "github.com/ClickHouse/clickhouse-go/v2"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"

	"github.com/testcontainers/testcontainers-go"
	"github.com/testcontainers/testcontainers-go/modules/clickhouse"
	"github.com/testcontainers/testcontainers-go/wait"
)

const (
	// clickhouseImage is the default image used for running clickhouse in tests.
	clickhouseImage              = "clickhouse/clickhouse-server:26.7-alpine"
	clickhouseImageEnvVar string = "TEST_CLICKHOUSE_IMAGE"
	clickhouseUser        string = "default"
	clickhousePass        string = "password"
	clickhouseDB          string = "fiber"
	clickhouseHttpPort           = "8123/tcp"
	clickhouseSuccessCode        = 200
)

// newTestConfig starts a clickhouse testcontainer and returns the given config
// populated with the connection details for that container.
func newTestConfig(t testing.TB, cfg Config) Config {
	t.Helper()

	img := clickhouseImage
	if imgFromEnv := os.Getenv(clickhouseImageEnvVar); imgFromEnv != "" {
		img = imgFromEnv
	}

	ctx := context.Background()

	c, err := clickhouse.Run(ctx,
		img,
		clickhouse.WithUsername(clickhouseUser),
		clickhouse.WithPassword(clickhousePass),
		clickhouse.WithDatabase(clickhouseDB),
		testcontainers.WithWaitStrategy(
			wait.ForAll(
				wait.ForListeningPort(clickhouseHttpPort),
				wait.NewHTTPStrategy("/").WithPort(clickhouseHttpPort).WithStatusCodeMatcher(func(status int) bool {
					return status == clickhouseSuccessCode
				}),
			),
		),
	)
	testcontainers.CleanupContainer(t, c)
	require.NoError(t, err)

	hostPort, err := c.ConnectionHost(ctx)
	require.NoError(t, err)

	pair := strings.Split(hostPort, ":")
	port, err := strconv.Atoi(pair[1])
	require.NoError(t, err)

	// configure the client for the testcontainers clickhouse instance
	cfg.Host = pair[0]
	cfg.Port = port
	cfg.Username = clickhouseUser
	cfg.Password = clickhousePass
	cfg.Database = clickhouseDB

	return cfg
}

func newTestStore(t testing.TB, cfg Config) *Storage {
	t.Helper()

	client, err := New(newTestConfig(t, cfg))
	require.NoError(t, err)

	return client
}

func Test_Connection(t *testing.T) {
	client := newTestStore(t, Config{
		Engine: Memory,
		Table:  "test_table",
		Clean:  true,
	})
	defer client.Close()
}

func Test_Clickhouse_NewWithContext(t *testing.T) {
	cfg := newTestConfig(t, Config{
		Engine: Memory,
		Table:  "test_table",
		Clean:  true,
	})

	client, err := NewWithContext(context.Background(), cfg)
	require.NoError(t, err)
	require.NotNil(t, client)
	defer client.Close()

	err = client.Set("somekey", []byte("somevalue"), 0)
	require.NoError(t, err)

	value, err := client.Get("somekey")
	require.NoError(t, err)
	require.Equal(t, "somevalue", string(value))
}

func Test_SetWithContext(t *testing.T) {
	client := newTestStore(t, Config{
		Engine: Memory,
		Table:  "test_table",
		Clean:  true,
	})
	defer client.Close()

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err := client.SetWithContext(ctx, "somekey", []byte("somevalue"), 0)
	require.ErrorIs(t, err, context.Canceled)
}

func Test_Set(t *testing.T) {
	client := newTestStore(t, Config{
		Engine: Memory,
		Table:  "test_table",
		Clean:  true,
	})
	defer client.Close()

	err := client.Set("somekey", []byte("somevalue"), 0)
	require.NoError(t, err)
}

func Test_Set_With_Exp(t *testing.T) {
	client := newTestStore(t, Config{
		Engine: Memory,
		Table:  "test_table",
		Clean:  true,
	})
	defer client.Close()

	err := client.Set("setsomekeywithexp", []byte("somevalue"), time.Second*1)
	require.NoError(t, err)
}

func Test_GetWithContext(t *testing.T) {
	client := newTestStore(t, Config{
		Engine: Memory,
		Table:  "test_table",
		Clean:  true,
	})
	defer client.Close()

	err := client.Set("somekey", []byte("somevalue"), 0)
	require.NoError(t, err)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	value, err := client.GetWithContext(ctx, "somekey")
	require.ErrorIs(t, err, context.Canceled)
	assert.Equal(t, []byte{}, value)
}

func Test_Get(t *testing.T) {
	client := newTestStore(t, Config{
		Engine: Memory,
		Table:  "test_table",
		Clean:  true,
	})
	defer client.Close()

	err := client.Set("somekey", []byte("somevalue"), 0)
	require.NoError(t, err)

	value, err := client.Get("somekey")

	require.NoError(t, err)
	assert.NotNil(t, value)
	assert.Equal(t, "somevalue", string(value))
}

func Test_Get_With_Exp(t *testing.T) {
	client := newTestStore(t, Config{
		Engine: Memory,
		Table:  "test_table",
		Clean:  true,
	})
	defer client.Close()

	err := client.Set("getsomekeywithexp", []byte("somevalue"), time.Second*2)
	require.NoError(t, err)

	value, err := client.Get("getsomekeywithexp")

	require.NoError(t, err)
	assert.NotNil(t, value)
	assert.Equal(t, "somevalue", string(value))

	time.Sleep(time.Second * 5)

	value, err = client.Get("getsomekeywithexp")

	require.NoError(t, err)
	assert.Equal(t, []byte{}, value)
}

func Test_DeleteWithContext(t *testing.T) {
	client := newTestStore(t, Config{
		Engine: Memory,
		Table:  "test_table",
		Clean:  true,
	})

	defer client.Close()

	err := client.Set("somekeytodelete", []byte("somevalue"), time.Second*5)
	require.NoError(t, err)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err = client.DeleteWithContext(ctx, "somekeytodelete")
	require.ErrorIs(t, err, context.Canceled)

	value, err := client.Get("somekeytodelete")
	require.NoError(t, err)
	require.Equal(t, []byte("somevalue"), value)
}

func Test_Delete(t *testing.T) {
	client := newTestStore(t, Config{
		Engine: Memory,
		Table:  "test_table",
		Clean:  true,
	})
	defer client.Close()

	err := client.Set("somekeytodelete", []byte("somevalue"), time.Second*5)
	require.NoError(t, err)

	err = client.Delete("somekeytodelete")

	require.NoError(t, err)

	value, err := client.Get("somekeytodelete")

	require.NoError(t, err)
	assert.Equal(t, []byte{}, value)
}

func Test_ResetWithContext(t *testing.T) {
	client := newTestStore(t, Config{
		Engine: Memory,
		Table:  "test_table",
		Clean:  true,
	})

	defer client.Close()

	err := client.Set("testkey", []byte("somevalue"), 0)
	require.NoError(t, err)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err = client.ResetWithContext(ctx)
	require.ErrorIs(t, err, context.Canceled)

	value, err := client.Get("testkey")
	require.NoError(t, err)
	require.Equal(t, []byte("somevalue"), value)
}

func Test_Reset(t *testing.T) {
	client := newTestStore(t, Config{
		Engine: Memory,
		Table:  "test_table",
		Clean:  true,
	})
	defer client.Close()

	err := client.Set("testkey", []byte("somevalue"), 0)
	require.NoError(t, err)

	err = client.Reset()

	require.NoError(t, err)

	value, err := client.Get("testkey")

	require.NoError(t, err)
	assert.Equal(t, []byte{}, value)
}

func TestClose_ShouldReturn_NoError(t *testing.T) {
	client := newTestStore(t, Config{
		Engine: Memory,
		Table:  "test_table",
		Clean:  true,
	})
	require.NoError(t, client.Close())
}

func Benchmark_Clickhouse_Set(b *testing.B) {
	client := newTestStore(b, Config{
		Engine: Memory,
		Table:  "test_table",
		Clean:  true,
	})
	defer client.Close()

	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		err = client.Set("john", []byte("doe"), 0)
	}

	require.NoError(b, err)
}

func Benchmark_Clickhouse_Get(b *testing.B) {
	client := newTestStore(b, Config{
		Engine: Memory,
		Table:  "test_table",
		Clean:  true,
	})
	defer client.Close()

	err := client.Set("john", []byte("doe"), 0)
	require.NoError(b, err)

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_, err = client.Get("john")
	}

	require.NoError(b, err)
}

func Benchmark_Clickhouse_Set_And_Delete(b *testing.B) {
	client := newTestStore(b, Config{
		Engine: Memory,
		Table:  "test_table",
		Clean:  true,
	})
	defer client.Close()

	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		_ = client.Set("john", []byte("doe"), 0)
		err = client.Delete("john")
	}

	require.NoError(b, err)
}

func Test_Clickhouse_NewFromConnection(t *testing.T) {
	cfg := newTestConfig(t, Config{
		Engine: Memory,
		Table:  "test_table_existing",
		Clean:  true,
	})

	options, _, err := defaultConfig(cfg)
	require.NoError(t, err)

	conn, err := driver.Open(&options)
	require.NoError(t, err)
	defer conn.Close() //nolint:errcheck // best effort cleanup

	client, err := NewFromConnection(conn, cfg)
	require.NoError(t, err)

	require.NoError(t, client.Set("john", []byte("doe"), 0))

	value, err := client.Get("john")
	require.NoError(t, err)
	require.Equal(t, "doe", string(value))

	// The connection is the caller's, so closing the storage must leave it usable.
	require.NoError(t, client.Close())
	require.NoError(t, conn.Ping(context.Background()))
	require.ErrorIs(t, client.Set("jane", []byte("doe"), 0), ErrClosed)
}

func Test_Clickhouse_NewFromConnection_Errors(t *testing.T) {
	_, err := NewFromConnection(nil, Config{Table: "test_table"})
	require.Error(t, err)

	conn, err := driver.Open(&driver.Options{Addr: []string{"127.0.0.1:9000"}})
	require.NoError(t, err)
	defer conn.Close() //nolint:errcheck // best effort cleanup

	_, err = NewFromConnection(conn, Config{})
	require.Error(t, err)
}
