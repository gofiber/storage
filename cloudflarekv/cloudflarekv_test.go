package cloudflarekv

import (
	"bytes"
	"os"
	"testing"

	"github.com/stretchr/testify/require"
)

func TestMain(m *testing.M) {

	var testStore *Storage

	testStore = New(Config{
		Key: "test",
	})

	code := m.Run()

	_ = testStore.Close()
	os.Exit(code)
}

func Test_CloudflareKV_Get(t *testing.T) {
	t.Parallel()

	var testStore *Storage

	testStore = New(Config{
		Key: "test",
	})

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

func Test_CloudflareKV_Set(t *testing.T) {
	t.Parallel()

	var testStore *Storage

	testStore = New(Config{
		Key: "test",
	})

	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)

	require.NoError(t, err)

	_ = testStore.Close()
}

func Test_CloudflareKV_Delete(t *testing.T) {
	t.Parallel()

	var testStore *Storage

	testStore = New(Config{
		Key: "test",
	})

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

func Test_CloudflareKV_Reset(t *testing.T) {
	t.Parallel()

	var testStore *Storage

	testStore = New(Config{
		Key: "test",
	})

	err := testStore.Reset()

	require.NoError(t, err)

	_ = testStore.Close()
}
func Test_CloudflareKV_Close(t *testing.T) {
	t.Parallel()

	var testStore *Storage

	testStore = New(Config{
		Key: "test",
	})

	require.Nil(t, testStore.Close())

	_ = testStore.Close()
}

func Test_CloudflareKV_Conn(t *testing.T) {
	t.Parallel()

	var testStore *Storage

	testStore = New(Config{
		Key: "test",
	})

	require.NotNil(t, testStore.Conn())

	_ = testStore.Close()
}

func Benchmark_CloudflareKV_Set(b *testing.B) {

	var testStore *Storage

	testStore = New(Config{
		Key: "test",
	})

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

	var testStore *Storage

	testStore = New(Config{
		Key: "test",
	})

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

	var testStore *Storage

	testStore = New(Config{
		Key: "test",
	})

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
