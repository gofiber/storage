package etcd

import (
	"github.com/gofiber/utils"
	"testing"
	"time"
)

func TestSetEtcd_ShouldReturnNoError(t *testing.T) {
	testStorage := New(Config{
		Endpoints: []string{"localhost:2379"},
	})

	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStorage.Set(key, val, 0)
	utils.AssertEqual(t, nil, err)
}

func TestGetEtcd_ShouldReturnNil_WhenDocumentNotFound(t *testing.T) {
	testStorage := New(Config{
		Endpoints: []string{"localhost:2379"},
	})

	val, err := testStorage.Get("not_found_key")

	utils.AssertEqual(t, nil, err)
	utils.AssertEqual(t, 0, len(val))
}

func TestSetAndGet_GetShouldReturn_SettedValueWithoutError(t *testing.T) {
	testStorage := New(Config{
		Endpoints: []string{"localhost:2379"},
	})

	err := testStorage.Set("test", []byte("fiber_test_value"), 0)
	utils.AssertEqual(t, nil, err)

	val, err := testStorage.Get("test")

	utils.AssertEqual(t, nil, err)
	utils.AssertEqual(t, val, []byte("fiber_test_value"))
}

func TestSetAndGet_GetShouldReturnNil_WhenTTLExpired(t *testing.T) {
	testStorage := New(Config{
		Endpoints: []string{"localhost:2379"},
	})

	err := testStorage.Set("test", []byte("fiber_test_value"), 3*time.Second)
	utils.AssertEqual(t, nil, err)

	time.Sleep(6 * time.Second)

	val, err := testStorage.Get("test")

	utils.AssertEqual(t, nil, err)
	utils.AssertEqual(t, 0, len(val))
}

func TestSetAndDelete_DeleteShouldReturn_NoError(t *testing.T) {
	testStorage := New(Config{
		Endpoints: []string{"localhost:2379"},
	})

	err := testStorage.Set("test", []byte("fiber_test_value"), 0)
	utils.AssertEqual(t, nil, err)

	err = testStorage.Delete("test")
	utils.AssertEqual(t, nil, err)

	_, err = testStorage.Get("test")
	utils.AssertEqual(t, nil, err)
}

func TestSetAndReset_ResetShouldReturn_NoError(t *testing.T) {
	testStorage := New(Config{
		Endpoints: []string{"localhost:2379"},
	})

	err := testStorage.Set("test", []byte("fiber_test_value"), 0)
	utils.AssertEqual(t, nil, err)

	err = testStorage.Reset()
	utils.AssertEqual(t, nil, err)

	_, err = testStorage.Get("test")
	utils.AssertEqual(t, nil, err)
}

func TestClose_CloseShouldReturn_NoError(t *testing.T) {
	testStorage := New(Config{
		Endpoints: []string{"localhost:2379"},
	})

	err := testStorage.Close()
	utils.AssertEqual(t, nil, err)
}

func TestGetConn_ReturnsNotNill(t *testing.T) {
	testStorage := New(Config{
		Endpoints: []string{"localhost:2379"},
	})

	conn := testStorage.Conn()
	utils.AssertEqual(t, true, conn != nil)
}
