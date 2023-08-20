package s3

import (
	"testing"

	"github.com/stretchr/testify/require"
)

var testStore = New(
	Config{
		Bucket:   "testbucket",
		Endpoint: "http://127.0.0.1:9000/",
		Region:   "us-east-1",
		Credentials: Credentials{
			AccessKey:       "minioadmin",
			SecretAccessKey: "minioadmin",
		},
	},
)

func Test_S3_Set(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.Nil(t, err)
}

func Test_S3_Set_Override(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.Nil(t, err)

	err = testStore.Set(key, val, 0)
	require.Nil(t, err)
}

func Test_S3_Get(t *testing.T) {
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

func Test_S3_Get_NotExist(t *testing.T) {
	result, err := testStore.Get("notexist")
	require.Nil(t, err)
	require.Zero(t, len(result))
}

func Test_S3_Delete(t *testing.T) {
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

func Test_S3_Reset(t *testing.T) {
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

func Test_S3_Close(t *testing.T) {
	require.Nil(t, testStore.Close())
}

func Test_S3_Conn(t *testing.T) {
	require.True(t, testStore.Conn() != nil)
}
