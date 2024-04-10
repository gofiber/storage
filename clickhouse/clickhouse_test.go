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

func getTestConnection(t TestOrBench) (*Storage, error) {
	t.Helper()

	client, err := New(Config{
		Host:   "127.0.0.1",
		Port:   9000,
		Engine: "Memory",
		Table:  "test_table",
		Clean:  true,
	})

	return client, err
}

func TestConnection(t *testing.T) {
	_, err := getTestConnection(t)

	require.NoError(t, err)
}

func TestSet(t *testing.T) {
	client, err := getTestConnection(t)
	require.NoError(t, err)
	defer client.Close()

	err = client.Set("somekey", []byte("somevalue"), 0)
	require.NoError(t, err)
}

func TestSetWithExp(t *testing.T) {
	client, err := getTestConnection(t)
	require.NoError(t, err)
	defer client.Close()

	err = client.Set("setsomekeywithexp", []byte("somevalue"), time.Second*1)
	require.NoError(t, err)
}

func TestGet(t *testing.T) {
	client, err := getTestConnection(t)
	require.NoError(t, err)
	defer client.Close()

	err = client.Set("somekey", []byte("somevalue"), 0)
	require.NoError(t, err)

	value, err := client.Get("somekey")

	require.NoError(t, err)
	assert.NotNil(t, value)
	assert.Equal(t, "somevalue", string(value))
}

func TestGetWithExp(t *testing.T) {
	client, err := getTestConnection(t)
	require.NoError(t, err)
	defer client.Close()

	err = client.Set("getsomekeywithexp", []byte("somevalue"), time.Second*5)
	require.NoError(t, err)

	value, err := client.Get("getsomekeywithexp")

	require.NoError(t, err)
	assert.NotNil(t, value)
	assert.Equal(t, "somevalue", string(value))

	time.Sleep(time.Second * 10)

	value, err = client.Get("getsomekeywithexp")

	require.NoError(t, err)
	assert.Nil(t, value)
}

func TestDelete(t *testing.T) {
	client, err := getTestConnection(t)
	require.NoError(t, err)
	defer client.Close()

	err = client.Set("somekeytodelete", []byte("somevalue"), time.Second*5)
	require.NoError(t, err)

	err = client.Delete("somekeytodelete")

	require.NoError(t, err)
}

func TestReset(t *testing.T) {
	client, err := getTestConnection(t)
	require.NoError(t, err)
	defer client.Close()

	err = client.Set("testkey", []byte("somevalue"), 0)
	require.NoError(t, err)

	err = client.Reset()

	require.NoError(t, err)
}

func BenchmarkClickhouse(b *testing.B) {
	b.ReportAllocs()
	b.ResetTimer()

	client, err := getTestConnection(b)

	require.NoError(b, err)
	defer client.Close()

	for i := 0; i < b.N; i++ {
		_ = client.Set("john", []byte("doe"), 0)
		err = client.Delete("john")
	}

	require.NoError(b, err)
}
