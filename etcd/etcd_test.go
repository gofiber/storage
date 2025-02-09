package etcd

import (
	"context"
	"os"
	"testing"
	"time"

	"github.com/stretchr/testify/require"
)

var testStore *Storage

func TestMain(m *testing.M) {
	testStore = New(Config{
		Endpoints: []string{"localhost:2379"},
	})

	code := m.Run()

	_ = testStore.Reset()
	_ = testStore.Close()
	os.Exit(code)
}

func TestSetEtcd_ShouldReturnNoError(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)
}

func TestGetEtcd_ShouldReturnNil_WhenDocumentNotFound(t *testing.T) {
	val, err := testStore.Get("not_found_key")

	require.NoError(t, err)
	require.Zero(t, len(val))
}

func TestSetAndGet_GetShouldReturn_SettedValueWithoutError(t *testing.T) {
	err := testStore.Set("test", []byte("fiber_test_value"), 0)
	require.NoError(t, err)

	val, err := testStore.Get("test")

	require.NoError(t, err)
	require.Equal(t, val, []byte("fiber_test_value"))
}

func TestSetWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err := testStore.SetWithContext(ctx, key, val, 0)
	require.ErrorIs(t, err, context.Canceled)
}

func TestSetAndGetWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	result, err := testStore.GetWithContext(ctx, key)
	require.ErrorIs(t, err, context.Canceled)
	require.Nil(t, result)
}

func TestSetAndGet_GetShouldReturnNil_WhenTTLExpired(t *testing.T) {
	err := testStore.Set("test", []byte("fiber_test_value"), 3*time.Second)
	require.NoError(t, err)

	time.Sleep(6 * time.Second)

	val, err := testStore.Get("test")

	require.NoError(t, err)
	require.Zero(t, len(val))
}

func TestSetAndDelete_DeleteShouldReturn_NoError(t *testing.T) {
	err := testStore.Set("test", []byte("fiber_test_value"), 0)
	require.NoError(t, err)

	err = testStore.Delete("test")
	require.NoError(t, err)

	_, err = testStore.Get("test")
	require.NoError(t, err)
}

func TestDeleteWithContext(t *testing.T) {
	err := testStore.Set("test", []byte("fiber_test_value"), 0)
	require.NoError(t, err)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err = testStore.DeleteWithContext(ctx, "test")
	require.ErrorIs(t, err, context.Canceled)

	val, err := testStore.Get("test")
	require.NoError(t, err)
	require.Equal(t, val, []byte("fiber_test_value"))
}

func TestSetAndReset_ResetShouldReturn_NoError(t *testing.T) {
	err := testStore.Set("test", []byte("fiber_test_value"), 0)
	require.NoError(t, err)

	err = testStore.Reset()
	require.NoError(t, err)

	_, err = testStore.Get("test")
	require.NoError(t, err)
}

func TestResetWithContext(t *testing.T) {
	err := testStore.Set("test", []byte("fiber_test_value"), 0)
	require.NoError(t, err)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err = testStore.ResetWithContext(ctx)
	require.ErrorIs(t, err, context.Canceled)

	val, err := testStore.Get("test")
	require.NoError(t, err)
	require.Equal(t, val, []byte("fiber_test_value"))
}

func TestClose_CloseShouldReturn_NoError(t *testing.T) {
	err := testStore.Close()
	require.NoError(t, err)
}

func TestGetConn_ReturnsNotNill(t *testing.T) {
	require.True(t, testStore.Conn() != nil)
}

func Benchmark_Etcd_Set(b *testing.B) {
	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		err = testStore.Set("john", []byte("doe"), 0)
	}

	require.NoError(b, err)
}

func Benchmark_Etcd_Get(b *testing.B) {
	err := testStore.Set("john", []byte("doe"), 0)
	require.NoError(b, err)

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_, err = testStore.Get("john")
	}

	require.NoError(b, err)
}

func Benchmark_Etcd_SetAndDelete(b *testing.B) {
	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		_ = testStore.Set("john", []byte("doe"), 0)
		err = testStore.Delete("john")
	}

	require.NoError(b, err)
}
