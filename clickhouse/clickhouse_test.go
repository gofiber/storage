package clickhouse

import (
	"testing"
	"time"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

type TestOrBench interface {
	Helper()
}

func getTestConnection(t TestOrBench, cfg Config) (*Storage, error) {
	t.Helper()

	client, err := New(cfg)

	return client, err
}

func Test_Connection(t *testing.T) {
	_, err := getTestConnection(t, Config{
		Host:   "127.0.0.1",
		Port:   9001,
		Engine: Memory,
		Table:  "test_table",
		Clean:  true,
	})

	require.NoError(t, err)
}

func Test_Set(t *testing.T) {
	client, err := getTestConnection(t, Config{
		Host:   "127.0.0.1",
		Port:   9001,
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
		Host:   "127.0.0.1",
		Port:   9001,
		Engine: Memory,
		Table:  "test_table",
		Clean:  true,
	})
	require.NoError(t, err)
	defer client.Close()

	err = client.Set("setsomekeywithexp", []byte("somevalue"), time.Second*1)
	require.NoError(t, err)
}

func Test_Get(t *testing.T) {
	client, err := getTestConnection(t, Config{
		Host:   "127.0.0.1",
		Port:   9001,
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
		Host:   "127.0.0.1",
		Port:   9001,
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

func Test_Delete(t *testing.T) {
	client, err := getTestConnection(t, Config{
		Host:   "127.0.0.1",
		Port:   9001,
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

func Test_Reset(t *testing.T) {
	client, err := getTestConnection(t, Config{
		Host:   "127.0.0.1",
		Port:   9001,
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
		Host:   "127.0.0.1",
		Port:   9001,
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
		Host:   "127.0.0.1",
		Port:   9001,
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
		Host:   "127.0.0.1",
		Port:   9001,
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
