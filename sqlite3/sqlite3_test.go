// +build sqlite3

package sqlite3

import (
	"testing"
	"time"

	"github.com/gofiber/utils"
	_ "github.com/mattn/go-sqlite3"
)

var testStore = New(Config{
	Clear: true,
})

func Test_SQLite3_Set(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	utils.AssertEqual(t, nil, err)
}

func Test_SQLite3_Get(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	utils.AssertEqual(t, nil, err)

	result, err := testStore.Get(key)
	utils.AssertEqual(t, nil, err)
	utils.AssertEqual(t, val, result)
}

func Test_SQLite3_Set_Expiration(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
		exp = 500 * time.Millisecond
	)

	err := testStore.Set(key, val, exp)
	utils.AssertEqual(t, nil, err)

	time.Sleep(1 * time.Second)

}

func Test_SQLite3_Get_Expired(t *testing.T) {
	var (
		key = "john"
	)

	result, err := testStore.Get(key)
	utils.AssertEqual(t, ErrNotExist, err)
	utils.AssertEqual(t, true, len(result) == 0)
}

func Test_SQLite3_Get_NotExist(t *testing.T) {

	result, err := testStore.Get("notexist")
	utils.AssertEqual(t, ErrNotExist, err)
	utils.AssertEqual(t, true, len(result) == 0)
}

func Test_SQLite3_Delete(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	utils.AssertEqual(t, nil, err)

	err = testStore.Delete(key)
	utils.AssertEqual(t, nil, err)

	result, err := testStore.Get(key)
	utils.AssertEqual(t, ErrNotExist, err)
	utils.AssertEqual(t, true, len(result) == 0)
}

func Test_SQLite3_Clear(t *testing.T) {
	var (
		val = []byte("doe")
	)

	err := testStore.Set("john1", val, 0)
	utils.AssertEqual(t, nil, err)

	err = testStore.Set("john2", val, 0)
	utils.AssertEqual(t, nil, err)

	err = testStore.Clear()
	utils.AssertEqual(t, nil, err)

	result, err := testStore.Get("john1")
	utils.AssertEqual(t, ErrNotExist, err)
	utils.AssertEqual(t, true, len(result) == 0)

	result, err = testStore.Get("john2")
	utils.AssertEqual(t, ErrNotExist, err)
	utils.AssertEqual(t, true, len(result) == 0)
}
