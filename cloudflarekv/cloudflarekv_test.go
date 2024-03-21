package cloudflarekv

import (
	"bytes"
	"os"
	"testing"

	"github.com/stretchr/testify/require"
)

var testStore *Storage

func TestMain(m *testing.M) {
	testStore = New(Config{
		Key:         os.Getenv("CF_AUTH_TOKEN"),
		AccountID:   os.Getenv("CF_ACCOUNT_ID"),
		NamespaceID: os.Getenv("CF_KV_NAMESPACE"),
		Email:       os.Getenv("CF_EMAIL"),
		Reset:       true,
	})

	code := m.Run()

	_ = testStore.Close()
	os.Exit(code)
}

func Test_CloudflareKV_Set(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)

	require.NoError(t, err)
}

func Test_CloudflareKV_Get(t *testing.T) {
	var (
		key = "john"
		val = "doe"
	)

	result, err := testStore.Get(key)

	require.NoError(t, err)
	require.Equal(t, val, bytes.NewBuffer(result).String())
}

func Test_CloudflareKV_Delete(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	err = testStore.Delete(key)
	require.NoError(t, err)
}

func Test_CloudflareKV_Reset(t *testing.T) {
	err := testStore.Reset()

	require.NoError(t, err)
}
func Test_CloudflareKV_Close(t *testing.T) {
	require.Nil(t, testStore.Close())
}

func Benchmark_CloudflareKV_Set(b *testing.B) {
	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		err = testStore.Set("john", []byte("doe"), 0)
	}

	require.NoError(b, err)
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
}
