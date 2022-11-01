package gorm

import (
	"fmt"
	"os"
	"testing"
	"time"

	"github.com/gofiber/utils"
	"gorm.io/gorm"
)

var testStore = New(Config{
	Dialect:       "postgres",
	ConnectionURI: fmt.Sprintf("postgres://%s:%s@127.0.0.1/%s", os.Getenv("POSTGRES_USERNAME"), os.Getenv("POSTGRES_PASSWORD"), os.Getenv("POSTGRES_DATABASE")),
	Reset:         true,
})

func Test_GORM_Set(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	utils.AssertEqual(t, nil, err)
}

func Test_GORM_Set_Override(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	utils.AssertEqual(t, nil, err)

	err = testStore.Set(key, val, 0)
	utils.AssertEqual(t, nil, err)
}

func Test_GORM_Get(t *testing.T) {
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

func Test_GORM_Set_Expiration(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
		exp = 1 * time.Second
	)

	err := testStore.Set(key, val, exp)
	utils.AssertEqual(t, nil, err)

	time.Sleep(1100 * time.Millisecond)
}

func Test_GORM_Get_Expired(t *testing.T) {
	var (
		key = "john"
	)

	result, err := testStore.Get(key)
	utils.AssertEqual(t, nil, err)
	utils.AssertEqual(t, true, len(result) == 0)
}

func Test_GORM_Get_NotExist(t *testing.T) {

	result, err := testStore.Get("notexist")
	utils.AssertEqual(t, nil, err)
	utils.AssertEqual(t, true, len(result) == 0)
}

func Test_GORM_Delete(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	utils.AssertEqual(t, nil, err)

	err = testStore.Delete(key)
	utils.AssertEqual(t, nil, err)

	result, err := testStore.Get(key)
	utils.AssertEqual(t, nil, err)
	utils.AssertEqual(t, true, len(result) == 0)
}

func Test_GORM_Reset(t *testing.T) {
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
	utils.AssertEqual(t, nil, err)
	utils.AssertEqual(t, true, len(result) == 0)

	result, err = testStore.Get("john2")
	utils.AssertEqual(t, nil, err)
	utils.AssertEqual(t, true, len(result) == 0)
}

func Test_GORM_GC(t *testing.T) {
	var (
		testVal = []byte("doe")
	)

	// This key should expire
	err := testStore.Set("john", testVal, time.Nanosecond)
	utils.AssertEqual(t, nil, err)

	testStore.gc(time.Now())
	row := testStore.db.Table(testStore.tableName).First(&table{}, "k = ?", "john")
	utils.AssertEqual(t, gorm.ErrRecordNotFound, row.Error)

	// This key should not expire
	err = testStore.Set("john", testVal, 0)
	utils.AssertEqual(t, nil, err)

	testStore.gc(time.Now())
	val, err := testStore.Get("john")
	utils.AssertEqual(t, nil, err)
	utils.AssertEqual(t, testVal, val)
}

func Test_GORM_Non_UTF8(t *testing.T) {
	val := []byte("0xF5")

	err := testStore.Set("0xF6", val, 0)
	utils.AssertEqual(t, nil, err)

	result, err := testStore.Get("0xF6")
	utils.AssertEqual(t, nil, err)
	utils.AssertEqual(t, val, result)
}

func Test_GORM_Close(t *testing.T) {
	utils.AssertEqual(t, nil, testStore.Close())
}

func Test_GORM_Conn(t *testing.T) {
	utils.AssertEqual(t, true, testStore.Conn() != nil)
}
