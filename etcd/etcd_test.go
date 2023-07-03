package etcd

import (
	"github.com/gofiber/utils"
	"testing"
)

func Test_Etcd_Set(t *testing.T) {
	testStore := New(Config{
		Endpoints: []string{"localhost:2379"},
	})

	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	utils.AssertEqual(t, nil, err)
}
