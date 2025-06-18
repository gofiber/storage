package cloudflarekv

import (
	"bytes"
	"context"
	"fmt"
	"os"
	"testing"

	"github.com/stretchr/testify/require"
)

var testStore *Storage

func TestMain(m *testing.M) {

	testStore = New(Config{
		Key:   "test",
		Reset: true,
	})

	code := m.Run()

	_ = testStore.Close()
	os.Exit(code)
}

func Test_CloudflareKV_Get(t *testing.T) {
	t.Parallel()

	var (
		key = "john"
		val = []byte("doe")
	)

	_ = testStore.Set(key, val, 0)

	result, err := testStore.Get(key)

	for i := 0; i < 2; i++ {
		result, err = testStore.Get(key)
		if bytes.NewBuffer(result).String() == "" {
			_ = testStore.Set(key, val, 0)
		} else {
			break
		}
	}

	require.NoError(t, err)
	require.Equal(t, bytes.NewBuffer(val).String(), bytes.NewBuffer(result).String())

	_ = testStore.Close()
}

func Test_CloudflareKV_GetWithContext(t *testing.T) {
	t.Parallel()

	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	val, err = testStore.GetWithContext(ctx, key)
	fmt.Println(err)
	require.ErrorContains(t, err, context.Canceled.Error())
	require.Nil(t, val)

	_ = testStore.Close()
}

func Test_CloudflareKV_Set(t *testing.T) {
	t.Parallel()

	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)

	require.NoError(t, err)

	_ = testStore.Close()
}

func Test_CloudflareKV_SetWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err := testStore.SetWithContext(ctx, key, val, 0)
	require.ErrorIs(t, err, context.Canceled)
}

func Test_CloudflareKV_Delete(t *testing.T) {
	t.Parallel()

	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	err = testStore.Delete(key)
	require.NoError(t, err)

	_ = testStore.Close()
}

func Test_CloudflareKV_DeleteWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err = testStore.DeleteWithContext(ctx, key)
	require.ErrorIs(t, err, context.Canceled)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)
}

func Test_CloudflareKV_Reset(t *testing.T) {
	t.Parallel()

	err := testStore.Reset()

	require.NoError(t, err)

	_ = testStore.Close()
}

func Test_CloudflareKV_ResetWithContext(t *testing.T) {
	val := []byte("doe")

	err := testStore.Set("john1", val, 0)
	require.NoError(t, err)

	err = testStore.Set("john2", val, 0)
	require.NoError(t, err)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err = testStore.ResetWithContext(ctx)
	require.ErrorIs(t, err, context.Canceled)

	result, err := testStore.Get("john1")
	require.NoError(t, err)
	require.Equal(t, val, result)

	result, err = testStore.Get("john2")
	require.NoError(t, err)
	require.Equal(t, val, result)
}

func Test_CloudflareKV_Close(t *testing.T) {
	t.Parallel()

	require.Nil(t, testStore.Close())

	_ = testStore.Close()
}

func Test_CloudflareKV_Conn(t *testing.T) {
	t.Parallel()

	require.NotNil(t, testStore.Conn())

	_ = testStore.Close()
}

func Benchmark_CloudflareKV_Set(b *testing.B) {
	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		err = testStore.Set("john", []byte("doe"), 0)
	}

	require.NoError(b, err)

	_ = testStore.Close()
}

func Benchmark_CloudflareKV_Get(b *testing.B) {
	err := testStore.Set("john", []byte("doe"), 0)
	require.NoError(b, err)

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_, err = testStore.Get("john")
	}

	require.NoError(b, err)

	_ = testStore.Close()
}

func Benchmark_CloudflareKV_SetAndDelete(b *testing.B) {
	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		_ = testStore.Set("john", []byte("doe"), 0)
		err = testStore.Delete("john")
	}

	require.NoError(b, err)

	_ = testStore.Close()
}
