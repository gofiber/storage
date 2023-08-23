package minio

import (
	"strconv"
	"testing"
	"time"

	"github.com/stretchr/testify/require"
)

var testStore = New(
	Config{
		Bucket:   "test-bucket",
		Endpoint: "localhost:9000",
		Credentials: Credentials{
			accessKeyID:     "minio-user",
			secretAccessKey: "minio-password",
		},
	},
)

func Test_Get(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)

	result, err = testStore.Get("doe")
	require.Error(t, err)
	require.Zero(t, len(result))
}

func Test_Get_Empty_Key(t *testing.T) {
	var (
		key = ""
	)

	_, err := testStore.Get(key)
	require.Error(t, err)
	require.EqualError(t, err, "the key value is required")

}

func Test_Get_Not_Exists_Bucket(t *testing.T) {
	var (
		key = "john"
	)

	// random bucket name
	testStore.cfg.Bucket = strconv.FormatInt(time.Now().UnixMicro(), 10)

	result, err := testStore.Get(key)
	require.Error(t, err)
	require.Zero(t, len(result))
	require.EqualError(t, err, "the specified bucket does not exist")

	testStore.cfg.Bucket = "test-bucket"

}

func Test_Set(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)
}

func Test_Set_Empty_Key(t *testing.T) {
	var (
		key = ""
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)

	require.Error(t, err)
	require.EqualError(t, err, "the key value is required")

}

func Test_Set_Not_Exists_Bucket(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	// random bucket name
	testStore.cfg.Bucket = strconv.FormatInt(time.Now().UnixMicro(), 10)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	// remove object
	err = testStore.Delete(key)
	require.NoError(t, err)

	// remove bucket
	err = testStore.RemoveBucket()
	require.NoError(t, err)

	testStore.cfg.Bucket = "test-bucket"
}

func Test_Delete(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	err = testStore.Delete(key)
	require.NoError(t, err)

}

func Test_Delete_Empty_Key(t *testing.T) {
	var (
		key = ""
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)

	require.Error(t, err)
	require.EqualError(t, err, "the key value is required")

}

func Test_Delete_Not_Exists_Bucket(t *testing.T) {
	var (
		key = "john"
	)

	// random bucket name
	testStore.cfg.Bucket = strconv.FormatInt(time.Now().UnixMicro(), 10)

	err := testStore.Delete(key)

	require.Error(t, err)
	require.EqualError(t, err, "the specified bucket does not exist")

	testStore.cfg.Bucket = "test-bucket"

}

func Test_Reset(t *testing.T) {
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
	require.Error(t, err)
	require.Zero(t, len(result))

}

func Test_Close(t *testing.T) {
	require.NoError(t, testStore.Close())
}
