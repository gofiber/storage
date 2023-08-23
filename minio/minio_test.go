package minio

import (
	"strconv"
	"testing"
	"time"

	"github.com/gofiber/utils"
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
	utils.AssertEqual(t, nil, err)

	result, err := testStore.Get(key)
	utils.AssertEqual(t, nil, err)
	utils.AssertEqual(t, val, result)

	result, err = testStore.Get("doe")
	utils.AssertEqual(t, true, len(result) == 0)
	utils.AssertEqual(t, true, len(err.Error()) > 0)
}

func Test_Get_Empty_Key(t *testing.T) {
	var (
		key = ""
	)

	result, err := testStore.Get(key)
	utils.AssertEqual(t, true, len(result) == 0)
	utils.AssertEqual(t, "the key value is required", err.Error())

}

func Test_Get_Not_Exists_Bucket(t *testing.T) {
	var (
		key = "john"
	)

	// random bucket name
	testStore.cfg.Bucket = strconv.FormatInt(time.Now().UnixMicro(), 10)

	result, err := testStore.Get(key)
	utils.AssertEqual(t, true, len(result) == 0)
	utils.AssertEqual(t, "the specified bucket does not exist", err.Error())

	testStore.cfg.Bucket = "test-bucket"

}

func Test_Set(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	utils.AssertEqual(t, nil, err)
}

func Test_Set_Empty_Key(t *testing.T) {
	var (
		key = ""
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	utils.AssertEqual(t, "the key value is required", err.Error())

}

func Test_Set_Not_Exists_Bucket(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	// random bucket name
	testStore.cfg.Bucket = strconv.FormatInt(time.Now().UnixMicro(), 10)

	err := testStore.Set(key, val, 0)
	utils.AssertEqual(t, nil, err)

	// remove object
	err = testStore.Delete(key)
	utils.AssertEqual(t, nil, err)

	// remove bucket
	err = testStore.RemoveBucket()
	utils.AssertEqual(t, nil, err)

	testStore.cfg.Bucket = "test-bucket"
}

func Test_Delete(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	utils.AssertEqual(t, nil, err)

	err = testStore.Delete(key)
	utils.AssertEqual(t, nil, err)

}

func Test_Delete_Empty_Key(t *testing.T) {
	var (
		key = ""
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	utils.AssertEqual(t, "the key value is required", err.Error())

}

func Test_Delete_Not_Exists_Bucket(t *testing.T) {
	var (
		key = "john"
	)

	// random bucket name
	testStore.cfg.Bucket = strconv.FormatInt(time.Now().UnixMicro(), 10)

	err := testStore.Delete(key)
	utils.AssertEqual(t, "the specified bucket does not exist", err.Error())

	testStore.cfg.Bucket = "test-bucket"

}

func Test_Reset(t *testing.T) {
	var (
		val = []byte("doe")
	)

	err := testStore.Set("john1", val, 0)
	utils.AssertEqual(t, nil, err)

	err = testStore.Set("john2", val, 0)
	utils.AssertEqual(t, nil, err)

	err = testStore.Reset()
	utils.AssertEqual(t, nil, err)

	result, err := testStore.Get("john1")
	utils.AssertEqual(t, true, len(result) == 0)

}

func Test_Close(t *testing.T) {
	utils.AssertEqual(t, nil, testStore.Close())
}
