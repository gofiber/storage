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
		Reset: true,
	})

	code := m.Run()

	_ = testStore.Close()
	os.Exit(code)
}

func Test_CloudflareKV_Set(t *testing.T) {
	t.Parallel()

	var testStore *Storage

	testStore = New(Config{
		Reset: true,
	})

	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)

	require.NoError(t, err)

	_ = testStore.Close()
}

func Test_CloudflareKV_Get(t *testing.T) {
	t.Parallel()

	var testStore *Storage

	testStore = New(Config{
		Reset: true,
	})

	var (
		key = "john"
		val = "doe"
	)

	err := testStore.Set(key, []byte("doe"), 0)

	require.NoError(t, err)

	result, err := testStore.Get(key)

	require.NoError(t, err)
	require.Equal(t, val, bytes.NewBuffer(result).String())

	_ = testStore.Close()
}

func Test_CloudflareKV_Delete(t *testing.T) {
	t.Parallel()

	var testStore *Storage

	testStore = New(Config{
		Reset: true,
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
		Reset: true,
	})

	err := testStore.Reset()

	require.NoError(t, err)

	_ = testStore.Close()
}
func Test_CloudflareKV_Close(t *testing.T) {
	t.Parallel()

	var testStore *Storage

	testStore = New(Config{
		Reset: true,
	})

	require.Nil(t, testStore.Close())

	_ = testStore.Close()
}

func Test_CloudflareKV_Conn(t *testing.T) {
	t.Parallel()

	var testStore *Storage

	testStore = New(Config{
		Reset: true,
	})

	require.NotNil(t, testStore.Conn())

	_ = testStore.Close()
}

func Benchmark_CloudflareKV_Set(b *testing.B) {

	var testStore *Storage

	testStore = New(Config{
		Reset: true,
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
		Reset: true,
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
		Reset: true,
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
