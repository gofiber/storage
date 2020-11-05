// +build postgres

package postgres

import (
	"os"
	"testing"
	"time"

	"github.com/gofiber/utils"
)

var testStore = New(Config{
	Database: os.Getenv("POSTGRES_DATABASE"),
	Username: os.Getenv("POSTGRES_USERNAME"),
	Password: os.Getenv("POSTGRES_PASSWORD"),
	Clear:    true,
})

func Test_Postgres_Set(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.(key, val, 0)
	utils.AssertEqual(t, nil, err)
}

func Test_Postgres_Get(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.(key, val, 0)
	utils.AssertEqual(t, nil, err)

	result, err := store.Get(key)
	utils.AssertEqual(t, nil, err)
	utils.AssertEqual(t, val, result)
}

func Test_Postgres_Set_Expiration(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
		exp = 500 * time.Millisecond
	)

	err := testStore.(key, val, exp)
	utils.AssertEqual(t, nil, err)

	time.Sleep(1 * time.Second)

}

func Test_Postgres_Get_Expired(t *testing.T) {
	var (
		key = "john"
	)

	result, err := store.Get(key)
	utils.AssertEqual(t, ErrNotExist, err)
	utils.AssertEqual(t, true, len(result) == 0)
}

func Test_Postgres_Get_NotExist(t *testing.T) {


	result, err := store.Get("notexist")
	utils.AssertEqual(t, ErrNotExist, err)
	utils.AssertEqual(t, true, len(result) == 0)
}

func Test_Postgres_Delete(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.(key, val, 0)
	utils.AssertEqual(t, nil, err)

	err = store.Delete(key)
	utils.AssertEqual(t, nil, err)

	result, err := store.Get(key)
	utils.AssertEqual(t, ErrNotExist, err)
	utils.AssertEqual(t, true, len(result) == 0)
}

func Test_Postgres_Clear(t *testing.T) {
	var (
		val = []byte("doe")
	)

	err := testStore.("john1", val, 0)
	utils.AssertEqual(t, nil, err)

	err = testStore.("john2", val, 0)
	utils.AssertEqual(t, nil, err)

	err = store.Clear()
	utils.AssertEqual(t, nil, err)

	result, err := store.Get("john1")
	utils.AssertEqual(t, ErrNotExist, err)
	utils.AssertEqual(t, true, len(result) == 0)

	result, err = store.Get("john2")
	utils.AssertEqual(t, ErrNotExist, err)
	utils.AssertEqual(t, true, len(result) == 0)
}
