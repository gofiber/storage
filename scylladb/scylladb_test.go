package scylladb

import (
	"github.com/stretchr/testify/require"
	"testing"
	"time"
)

var testStore = New(Config{Reset: true})

func Test_Scylla_Set(t *testing.T) {
	// Create a new instance of the Storage
	var (
		key   = "john"
		value = []byte("doe")
	)
	err := testStore.Set(key, value, time.Minute)
	require.NoError(t, err)
}

func Test_Scylla_Set_Override(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	err = testStore.Set(key, val, 0)
	require.NoError(t, err)
}

func Test_Scylla_Get(t *testing.T) {
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

func Test_Scylla_Set_Expiration(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
		exp = 1 * time.Second
	)

	err := testStore.Set(key, val, exp)
	require.NoError(t, err)

	time.Sleep(1100 * time.Millisecond)
}

func Test_Scylla_Get_NotExist(t *testing.T) {

	result, err := testStore.Get("not-exist")
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_Scylla_Delete(t *testing.T) {
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

func Test_Scylla_Reset(t *testing.T) {
	var (
		val = []byte("doe")
	)

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

func Test_Scylla_Close(t *testing.T) {
	require.Nil(t, testStore.Close())
}

func Test_Scylla_Conn(t *testing.T) {
	require.True(t, testStore.Conn() != nil)
}
