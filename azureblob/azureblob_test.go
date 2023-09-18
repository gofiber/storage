package azureblob

import (
	"os"
	"testing"

	"github.com/Azure/azure-sdk-for-go/sdk/storage/azblob/bloberror"
	"github.com/stretchr/testify/require"
)

var testStore *Storage

func TestMain(m *testing.M) {
	testStore = New(Config{
		Account:   "devstoreaccount1",
		Container: "test",
		Endpoint:  "http://127.0.0.1:10000/devstoreaccount1",
		Credentials: Credentials{
			Account: "devstoreaccount1",
			Key:     "Eby8vdM02xNOcqFlqUwJPLlmEtlCDXJ1OUzFT50uSRZ6IFsuFq2UVErCz4I6tq/K1SZFPTOtr/KBHBeksoGMGw==",
		},
		Reset: true,
	})

	code := m.Run()

	_ = testStore.Close()
	os.Exit(code)
}

func Test_AzureBlob_Get(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)
}

func Test_AzureBlob_Set(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)
}

func Test_AzureBlob_Delete(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	err = testStore.Delete(key)
	require.NoError(t, err)

	result, err := testStore.Get(key)
	if err != nil {
		if bloberror.HasCode(err, bloberror.BlobNotFound) {
			err = nil
		}
	}
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_AzureBlob_Override(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	err = testStore.Set(key, val, 0)
	require.NoError(t, err)
}

func Test_AzureBlob_Get_NotExist(t *testing.T) {
	result, err := testStore.Get("notexist")
	if err != nil {
		if bloberror.HasCode(err, bloberror.BlobNotFound) {
			err = nil
		}
	}
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_AzureBlob_Reset(t *testing.T) {
	val := []byte("doe")

	err := testStore.Set("john1", val, 0)
	require.NoError(t, err)

	err = testStore.Set("john2", val, 0)
	require.NoError(t, err)

	err = testStore.Reset()
	require.NoError(t, err)

	result, err := testStore.Get("john1")
	if err != nil {
		if bloberror.HasCode(err, bloberror.BlobNotFound) {
			err = nil
		}
	}
	require.NoError(t, err)
	require.Zero(t, len(result))

	result, err = testStore.Get("john2")
	if err != nil {
		if bloberror.HasCode(err, bloberror.BlobNotFound) {
			err = nil
		}
	}
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_S3_Conn(t *testing.T) {
	require.True(t, testStore.Conn() != nil)
}

func Test_AzureBlob_Close(t *testing.T) {
	require.Nil(t, testStore.Close())
}

func Benchmark_AzureBlob_Set(b *testing.B) {
	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		err = testStore.Set("john", []byte("doe"), 0)
	}

	require.NoError(b, err)
}

func Benchmark_AzureBlob_Get(b *testing.B) {
	err := testStore.Set("john", []byte("doe"), 0)
	require.NoError(b, err)

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_, err = testStore.Get("john")
	}

	require.NoError(b, err)
}

func Benchmark_AzureBlob_SetAndDelete(b *testing.B) {
	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		_ = testStore.Set("john", []byte("doe"), 0)
		err = testStore.Delete("john")
	}

	require.NoError(b, err)
}
