package minio

import (
	"context"
	"os"
	"strconv"
	"testing"
	"time"

	"github.com/stretchr/testify/require"
	"github.com/testcontainers/testcontainers-go/modules/minio"
)

const (
	// minioImage is the default image used for running minio in tests.
	minioImage              = "docker.io/minio/minio:RELEASE.2024-08-17T01-24-54Z"
	minioImageEnvVar string = "TEST_MINIO_IMAGE"
	minioUser        string = "minio-user"
	minioPass        string = "minio-password"
)

func newTestStore(t testing.TB) (*Storage, error) {
	t.Helper()

	img := minioImage
	if imgFromEnv := os.Getenv(minioImageEnvVar); imgFromEnv != "" {
		img = imgFromEnv
	}

	ctx := context.Background()

	c, err := minio.Run(ctx,
		img,
		minio.WithUsername(minioUser),
		minio.WithPassword(minioPass),
	)
	if err != nil {
		return nil, err
	}

	conn, err := c.ConnectionString(ctx)
	if err != nil {
		return nil, err
	}

	return New(
		Config{
			Bucket:   "fiber-bucket",
			Endpoint: conn,
			Credentials: Credentials{
				AccessKeyID:     c.Username,
				SecretAccessKey: c.Password,
			},
			Reset: true,
		},
	), nil
}

func Test_Get(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore, err := newTestStore(t)
	require.NoError(t, err)

	err = testStore.Set(key, val, 0)
	require.NoError(t, err)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)

	result, err = testStore.Get("doe")
	require.Error(t, err)
	require.Zero(t, len(result))
}

func Test_GetWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore, err := newTestStore(t)
	require.NoError(t, err)

	err = testStore.Set(key, val, 0)
	require.NoError(t, err)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	result, err := testStore.GetWithContext(ctx, key)
	require.ErrorIs(t, err, context.Canceled)
	require.Zero(t, len(result))
}

func Test_Get_Empty_Key(t *testing.T) {
	var (
		key = ""
	)

	testStore, err := newTestStore(t)
	require.NoError(t, err)

	_, err = testStore.Get(key)
	require.Error(t, err)
	require.EqualError(t, err, "the key value is required")
}

func Test_Get_Not_Exists_Key(t *testing.T) {
	var (
		key = "not-exists"
	)

	testStore, err := newTestStore(t)
	require.NoError(t, err)

	_, err = testStore.Get(key)
	require.Error(t, err)
	require.EqualError(t, err, "The specified key does not exist.")
}

func Test_Get_Not_Exists_Bucket(t *testing.T) {
	var (
		key = "john"
	)

	testStore, err := newTestStore(t)
	require.NoError(t, err)

	// random bucket name
	testStore.cfg.Bucket = strconv.FormatInt(time.Now().UnixMicro(), 10)

	result, err := testStore.Get(key)
	require.Error(t, err)
	require.Zero(t, len(result))
	require.EqualError(t, err, "The specified bucket does not exist")
}

func Test_Set(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore, err := newTestStore(t)
	require.NoError(t, err)

	err = testStore.Set(key, val, 0)
	require.NoError(t, err)
}

func Test_SetWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore, err := newTestStore(t)
	require.NoError(t, err)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err = testStore.SetWithContext(ctx, key, val, 0)
	require.ErrorIs(t, err, context.Canceled)
}

func Test_Set_Empty_Key(t *testing.T) {
	var (
		key = ""
		val = []byte("doe")
	)

	testStore, err := newTestStore(t)
	require.NoError(t, err)

	err = testStore.Set(key, val, 0)

	require.Error(t, err)
	require.EqualError(t, err, "the key value is required")

}

func Test_Set_Not_Exists_Bucket(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore, err := newTestStore(t)
	require.NoError(t, err)

	// random bucket name
	testStore.cfg.Bucket = strconv.FormatInt(time.Now().UnixMicro(), 10)

	err = testStore.Set(key, val, 0)
	require.Error(t, err)
	require.EqualError(t, err, "The specified bucket does not exist")
}

func Test_Delete(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore, err := newTestStore(t)
	require.NoError(t, err)

	err = testStore.Set(key, val, 0)
	require.NoError(t, err)

	err = testStore.Delete(key)
	require.NoError(t, err)
}

func Test_DeleteWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore, err := newTestStore(t)
	require.NoError(t, err)

	err = testStore.Set(key, val, 0)
	require.NoError(t, err)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err = testStore.DeleteWithContext(ctx, key)
	require.ErrorIs(t, err, context.Canceled)

	valRet, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, valRet)
}

func Test_Delete_Empty_Key(t *testing.T) {
	var (
		key = ""
		val = []byte("doe")
	)

	testStore, err := newTestStore(t)
	require.NoError(t, err)

	err = testStore.Set(key, val, 0)
	require.Error(t, err)
	require.EqualError(t, err, "the key value is required")
}

func Test_Delete_Not_Exists_Bucket(t *testing.T) {
	var (
		key = "john"
	)

	testStore, err := newTestStore(t)
	require.NoError(t, err)

	// random bucket name
	testStore.cfg.Bucket = strconv.FormatInt(time.Now().UnixMicro(), 10)

	err = testStore.Delete(key)

	require.Error(t, err)
	require.EqualError(t, err, "The specified bucket does not exist")
}

func Test_Reset(t *testing.T) {
	var (
		val = []byte("doe")
	)

	testStore, err := newTestStore(t)
	require.NoError(t, err)

	err = testStore.Set("john1", val, 0)
	require.NoError(t, err)

	err = testStore.Set("john2", val, 0)
	require.NoError(t, err)

	err = testStore.Reset()
	require.NoError(t, err)

	result, err := testStore.Get("john1")
	require.Error(t, err)
	require.Zero(t, len(result))
}

func Test_ResetWithContext(t *testing.T) {
	var (
		val = []byte("doe")
	)

	testStore, err := newTestStore(t)
	require.NoError(t, err)

	err = testStore.Set("john1", val, 0)
	require.NoError(t, err)

	err = testStore.Set("john2", val, 0)
	require.NoError(t, err)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err = testStore.ResetWithContext(ctx)
	require.NoError(t, err)

	result, err := testStore.Get("john1")
	require.NoError(t, err)
	require.Equal(t, val, result)
}

func Test_Close(t *testing.T) {
	testStore, err := newTestStore(t)
	require.NoError(t, err)

	require.NoError(t, testStore.Close())
}

func Benchmark_Minio_Set(b *testing.B) {
	b.ReportAllocs()
	b.ResetTimer()

	testStore, err := newTestStore(b)
	require.NoError(b, err)

	for i := 0; i < b.N; i++ {
		err = testStore.Set("john", []byte("doe"), 0)
	}

	require.NoError(b, err)
}

func Benchmark_Minio_Get(b *testing.B) {
	testStore, err := newTestStore(b)
	require.NoError(b, err)

	err = testStore.Set("john", []byte("doe"), 0)
	require.NoError(b, err)

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_, err = testStore.Get("john")
	}

	require.NoError(b, err)
}

func Benchmark_Minio_SetAndDelete(b *testing.B) {
	testStore, err := newTestStore(b)
	require.NoError(b, err)

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_ = testStore.Set("john", []byte("doe"), 0)
		err = testStore.Delete("john")
	}

	require.NoError(b, err)
}
