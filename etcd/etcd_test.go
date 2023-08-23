package etcd

import (
	"testing"
	"time"

	"github.com/stretchr/testify/require"
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
	require.NoError(t, err)
}

func TestGetEtcd_ShouldReturnNil_WhenDocumentNotFound(t *testing.T) {
	testStorage := New(Config{
		Endpoints: []string{"localhost:2379"},
	})

	val, err := testStorage.Get("not_found_key")

	require.NoError(t, err)
	require.Zero(t, len(val))
}

func TestSetAndGet_GetShouldReturn_SettedValueWithoutError(t *testing.T) {
	testStorage := New(Config{
		Endpoints: []string{"localhost:2379"},
	})

	err := testStorage.Set("test", []byte("fiber_test_value"), 0)
	require.NoError(t, err)

	val, err := testStorage.Get("test")

	require.NoError(t, err)
	require.Equal(t, val, []byte("fiber_test_value"))
}

func TestSetAndGet_GetShouldReturnNil_WhenTTLExpired(t *testing.T) {
	testStorage := New(Config{
		Endpoints: []string{"localhost:2379"},
	})

	err := testStorage.Set("test", []byte("fiber_test_value"), 3*time.Second)
	require.NoError(t, err)

	time.Sleep(6 * time.Second)

	val, err := testStorage.Get("test")

	require.NoError(t, err)
	require.Zero(t, len(val))
}

func TestSetAndDelete_DeleteShouldReturn_NoError(t *testing.T) {
	testStorage := New(Config{
		Endpoints: []string{"localhost:2379"},
	})

	err := testStorage.Set("test", []byte("fiber_test_value"), 0)
	require.NoError(t, err)

	err = testStorage.Delete("test")
	require.NoError(t, err)

	_, err = testStorage.Get("test")
	require.NoError(t, err)
}

func TestSetAndReset_ResetShouldReturn_NoError(t *testing.T) {
	testStorage := New(Config{
		Endpoints: []string{"localhost:2379"},
	})

	err := testStorage.Set("test", []byte("fiber_test_value"), 0)
	require.NoError(t, err)

	err = testStorage.Reset()
	require.NoError(t, err)

	_, err = testStorage.Get("test")
	require.NoError(t, err)
}

func TestClose_CloseShouldReturn_NoError(t *testing.T) {
	testStorage := New(Config{
		Endpoints: []string{"localhost:2379"},
	})

	err := testStorage.Close()
	require.NoError(t, err)
}

func TestGetConn_ReturnsNotNill(t *testing.T) {
	testStorage := New(Config{
		Endpoints: []string{"localhost:2379"},
	})

	require.True(t, testStorage.Conn() != nil)
}
