package postgres

import (
	"context"
	"os"
	"testing"
	"time"

	"github.com/gofiber/utils"
	"github.com/jackc/pgx/v5"
)

var testStore = New(Config{
	Database: os.Getenv("POSTGRES_DATABASE"),
	Username: os.Getenv("POSTGRES_USERNAME"),
	Password: os.Getenv("POSTGRES_PASSWORD"),
	Reset:    true,
})

func Test_Postgres_Set(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	utils.AssertEqual(t, nil, err)
}

func Test_Postgres_Set_Override(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	utils.AssertEqual(t, nil, err)

	err = testStore.Set(key, val, 0)
	utils.AssertEqual(t, nil, err)
}

func Test_Postgres_Get(t *testing.T) {
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

func Test_Postgres_Set_Expiration(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
		exp = 1 * time.Second
	)

	err := testStore.Set(key, val, exp)
	utils.AssertEqual(t, nil, err)

	time.Sleep(1100 * time.Millisecond)
}

func Test_Postgres_Get_Expired(t *testing.T) {
	var (
		key = "john"
	)

	result, err := testStore.Get(key)
	utils.AssertEqual(t, nil, err)
	utils.AssertEqual(t, true, len(result) == 0)
}

func Test_Postgres_Get_NotExist(t *testing.T) {

	result, err := testStore.Get("notexist")
	utils.AssertEqual(t, nil, err)
	utils.AssertEqual(t, true, len(result) == 0)
}

func Test_Postgres_Delete(t *testing.T) {
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

func Test_Postgres_Reset(t *testing.T) {
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

func Test_Postgres_GC(t *testing.T) {
	var (
		testVal = []byte("doe")
	)

	// This key should expire
	err := testStore.Set("john", testVal, time.Nanosecond)
	utils.AssertEqual(t, nil, err)

	testStore.gc(time.Now())
	row := testStore.db.QueryRow(context.Background(), testStore.sqlSelect, "john")
	err = row.Scan(nil, nil)
	utils.AssertEqual(t, pgx.ErrNoRows, err)

	// This key should not expire
	err = testStore.Set("john", testVal, 0)
	utils.AssertEqual(t, nil, err)

	testStore.gc(time.Now())
	val, err := testStore.Get("john")
	utils.AssertEqual(t, nil, err)
	utils.AssertEqual(t, testVal, val)

}

func Test_Postgres_Non_UTF8(t *testing.T) {
	val := []byte("0xF5")

	err := testStore.Set("0xF6", val, 0)
	utils.AssertEqual(t, nil, err)

	result, err := testStore.Get("0xF6")
	utils.AssertEqual(t, nil, err)
	utils.AssertEqual(t, val, result)
}

func Test_SslRequiredMode(t *testing.T) {
	defer func() {
		if recover() == nil {
			utils.AssertEqual(t, true, nil, "Connection was established with a `require`")
		}
	}()
	_ = New(Config{
		Reset: true,
	})
}

func Test_Postgres_Conn(t *testing.T) {
	utils.AssertEqual(t, true, testStore.Conn() != nil)
}

func Test_Postgres_Close(t *testing.T) {
	utils.AssertEqual(t, nil, testStore.Close())
}
