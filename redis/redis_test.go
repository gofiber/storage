// +build redis

package redis

import (
	"os"
	"testing"

	"github.com/gofiber/utils"
)

var storeConfig = ConfigDefault

func init() {
	if v := os.Getenv("REDIS_PORT"); v != "" {
		storeConfig.Addr = "localhost:" + v
	}
}

func Test_Redis_Get(t *testing.T) {
	store := New(storeConfig)

	key := "john"
	value := []byte("doe")

	result, err := store.Get(id)
	utils.AssertEqual(t, nil, err)
	utils.AssertEqual(t, nil, result)

	err = store.Set(key, value)
	utils.AssertEqual(t, nil, err)

	result, err := store.Get(id)
	utils.AssertEqual(t, nil, err)
	utils.AssertEqual(t, value, result)
}
