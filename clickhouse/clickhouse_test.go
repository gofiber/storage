package clickhouse

import (
	"context"
	"os"
	"strconv"
	"strings"
	"testing"
	"time"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"

	"github.com/testcontainers/testcontainers-go/modules/clickhouse"
)

const (
	// clickhouseImage is the default image used for running clickhouse in tests.
	clickhouseImage              = "clickhouse/clickhouse-server:23-alpine"
	clickhouseImageEnvVar string = "TEST_CLICKHOUSE_IMAGE"
	clickhouseUser        string = "default"
	clickhousePass        string = "password"
	clickhouseDB          string = "fiber"
)

func getTestConnection(t testing.TB, cfg Config) (*Storage, error) {
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
	)
	if err != nil {
		return nil, err
	}

	hostPort, err := c.ConnectionHost(ctx)
	if err != nil {
		return nil, err
	}

	pair := strings.Split(hostPort, ":")
	port, err := strconv.Atoi(pair[1])
	if err != nil {
		return nil, err
	}

	// configure the client for the testcontainers clickhouse instance
	cfg.Host = pair[0]
	cfg.Port = port
	cfg.Username = clickhouseUser
	cfg.Password = clickhousePass
	cfg.Database = clickhouseDB

	client, err := New(cfg)

	return client, err
}

func Test_Connection(t *testing.T) {
	_, err := getTestConnection(t, Config{
		Engine: Memory,
		Table:  "test_table",
		Clean:  true,
	})

	require.NoError(t, err)
}

func Test_SetWithContext(t *testing.T) {
	client, err := getTestConnection(t, Config{
		Engine: Memory,
		Table:  "test_table",
		Clean:  true,
	})
	require.NoError(t, err)
	defer client.Close()

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err = client.SetWithContext(ctx, "somekey", []byte("somevalue"), 0)
	require.ErrorIs(t, err, context.Canceled)
}

func Test_Set(t *testing.T) {
	client, err := getTestConnection(t, Config{
		Engine: Memory,
		Table:  "test_table",
		Clean:  true,
	})
	require.NoError(t, err)
	defer client.Close()

	err = client.Set("somekey", []byte("somevalue"), 0)
	require.NoError(t, err)
}

func Test_Set_With_Exp(t *testing.T) {
	client, err := getTestConnection(t, Config{
		Engine: Memory,
		Table:  "test_table",
		Clean:  true,
	})
	require.NoError(t, err)
	defer client.Close()

	err = client.Set("setsomekeywithexp", []byte("somevalue"), time.Second*1)
	require.NoError(t, err)
}

func Test_GetWithContext(t *testing.T) {
	client, err := getTestConnection(t, Config{
		Engine: Memory,
		Table:  "test_table",
		Clean:  true,
	})
	require.NoError(t, err)
	defer client.Close()

	err = client.Set("somekey", []byte("somevalue"), 0)
	require.NoError(t, err)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	value, err := client.GetWithContext(ctx, "somekey")
	require.ErrorIs(t, err, context.Canceled)
	assert.Equal(t, []byte{}, value)
}

func Test_Get(t *testing.T) {
	client, err := getTestConnection(t, Config{
		Engine: Memory,
		Table:  "test_table",
		Clean:  true,
	})
	require.NoError(t, err)
	defer client.Close()

	err = client.Set("somekey", []byte("somevalue"), 0)
	require.NoError(t, err)

	value, err := client.Get("somekey")

	require.NoError(t, err)
	assert.NotNil(t, value)
	assert.Equal(t, "somevalue", string(value))
}

func Test_Get_With_Exp(t *testing.T) {
	client, err := getTestConnection(t, Config{
		Engine: Memory,
		Table:  "test_table",
		Clean:  true,
	})
	require.NoError(t, err)
	defer client.Close()

	err = client.Set("getsomekeywithexp", []byte("somevalue"), time.Second*2)
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
	client, err := getTestConnection(t, Config{
		Engine: Memory,
		Table:  "test_table",
		Clean:  true,
	})
	require.NoError(t, err)

	defer client.Close()

	err = client.Set("somekeytodelete", []byte("somevalue"), time.Second*5)
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
	client, err := getTestConnection(t, Config{
		Engine: Memory,
		Table:  "test_table",
		Clean:  true,
	})
	require.NoError(t, err)
	defer client.Close()

	err = client.Set("somekeytodelete", []byte("somevalue"), time.Second*5)
	require.NoError(t, err)

	err = client.Delete("somekeytodelete")

	require.NoError(t, err)

	value, err := client.Get("somekeytodelete")

	require.NoError(t, err)
	assert.Equal(t, []byte{}, value)
}

func Test_ResetWithContext(t *testing.T) {
	client, err := getTestConnection(t, Config{
		Engine: Memory,
		Table:  "test_table",
		Clean:  true,
	})
	require.NoError(t, err)

	defer client.Close()

	err = client.Set("testkey", []byte("somevalue"), 0)
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
	client, err := getTestConnection(t, Config{
		Engine: Memory,
		Table:  "test_table",
		Clean:  true,
	})
	require.NoError(t, err)
	defer client.Close()

	err = client.Set("testkey", []byte("somevalue"), 0)
	require.NoError(t, err)

	err = client.Reset()

	require.NoError(t, err)

	value, err := client.Get("testkey")

	require.NoError(t, err)
	assert.Equal(t, []byte{}, value)
}

func Benchmark_Clickhouse_Set(b *testing.B) {
	b.ReportAllocs()
	b.ResetTimer()

	client, err := getTestConnection(b, Config{
		Engine: Memory,
		Table:  "test_table",
		Clean:  true,
	})
	require.NoError(b, err)

	defer client.Close()

	for i := 0; i < b.N; i++ {
		err = client.Set("john", []byte("doe"), 0)
	}

	require.NoError(b, err)
}

func Benchmark_Clickhouse_Get(b *testing.B) {
	b.ReportAllocs()
	b.ResetTimer()

	client, err := getTestConnection(b, Config{
		Engine: Memory,
		Table:  "test_table",
		Clean:  true,
	})
	require.NoError(b, err)

	defer client.Close()

	err = client.Set("john", []byte("doe"), 0)

	for i := 0; i < b.N; i++ {
		_, err = client.Get("john")
	}

	require.NoError(b, err)
}

func Benchmark_Clickhouse_Set_And_Delete(b *testing.B) {
	b.ReportAllocs()
	b.ResetTimer()

	client, err := getTestConnection(b, Config{
		Engine: Memory,
		Table:  "test_table",
		Clean:  true,
	})

	require.NoError(b, err)
	defer client.Close()

	for i := 0; i < b.N; i++ {
		_ = client.Set("john", []byte("doe"), 0)
		err = client.Delete("john")
	}

	require.NoError(b, err)
}
