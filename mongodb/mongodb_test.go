package mongodb

import (
	"testing"
	"time"

	"github.com/stretchr/testify/require"
)

var testStore = New(Config{
	Reset: true,
})

func Test_MongoDB_Set(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.Nil(t, err)
}

func Test_MongoDB_Set_Override(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.Nil(t, err)

	err = testStore.Set(key, val, 0)
	require.Nil(t, err)
}

func Test_MongoDB_Get(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.Nil(t, err)

	result, err := testStore.Get(key)
	require.Nil(t, err)
	require.Equal(t, val, result)
}

func Test_MongoDB_Set_Expiration(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
		exp = 1 * time.Second
	)

	err := testStore.Set(key, val, exp)
	require.Nil(t, err)

	time.Sleep(1100 * time.Millisecond)
}

func Test_MongoDB_Get_Expired(t *testing.T) {
	key := "john"

	result, err := testStore.Get(key)
	require.Nil(t, err)
	require.Zero(t, len(result))
}

func Test_MongoDB_Get_NotExist(t *testing.T) {
	result, err := testStore.Get("notexist")
	require.Nil(t, err)
	require.Zero(t, len(result))
}

func Test_MongoDB_Delete(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.Nil(t, err)

	err = testStore.Delete(key)
	require.Nil(t, err)

	result, err := testStore.Get(key)
	require.Nil(t, err)
	require.Zero(t, len(result))
}

func Test_MongoDB_Reset(t *testing.T) {
	val := []byte("doe")

	err := testStore.Set("john1", val, 0)
	require.Nil(t, err)

	err = testStore.Set("john2", val, 0)
	require.Nil(t, err)

	err = testStore.Reset()
	require.Nil(t, err)

	result, err := testStore.Get("john1")
	require.Nil(t, err)
	require.Zero(t, len(result))

	result, err = testStore.Get("john2")
	require.Nil(t, err)
	require.Zero(t, len(result))
}

func Test_MongoDB_Close(t *testing.T) {
	require.Nil(t, testStore.Close())
}

func Test_MongoDB_Conn(t *testing.T) {
	require.True(t, testStore.Conn() != nil)
}
