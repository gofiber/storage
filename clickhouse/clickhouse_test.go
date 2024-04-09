package clickhouse

import (
	"testing"
	"time"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

func getTestConnection(t *testing.T) (*Storage, error) {
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

	err = client.Set("somekey", "somevalue", 0)
	require.NoError(t, err)
}

func TestSetWithExp(t *testing.T) {
	client, err := getTestConnection(t)
	require.NoError(t, err)
	defer client.Close()

	err = client.Set("setsomekeywithexp", "somevalue", time.Second*1)
	require.NoError(t, err)
}

func TestGet(t *testing.T) {
	client, err := getTestConnection(t)
	require.NoError(t, err)
	defer client.Close()

	err = client.Set("somekey", "somevalue", 0)
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

	err = client.Set("getsomekeywithexp", "somevalue", time.Second*5)
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

	err = client.Set("somekeytodelete", "somevalue", time.Second*5)
	require.NoError(t, err)

	err = client.Delete("somekeytodelete")

	require.NoError(t, err)
}

func TestReset(t *testing.T) {
	client, err := getTestConnection(t)
	require.NoError(t, err)
	defer client.Close()

	err = client.Set("testkey", "somevalue", 0)
	require.NoError(t, err)

	err = client.Reset()

	require.NoError(t, err)
}
