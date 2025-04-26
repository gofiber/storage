package minio

import (
	"context"
	"os"
	"strconv"
	"testing"
	"time"

	"github.com/stretchr/testify/require"
	"github.com/testcontainers/testcontainers-go"
	"github.com/testcontainers/testcontainers-go/modules/minio"
	"github.com/testcontainers/testcontainers-go/wait"
)

const (
	// minioImage is the default image used for running minio in tests.
	minioImage              = "docker.io/minio/minio:latest"
	minioImageEnvVar string = "TEST_MINIO_IMAGE"
	minioUser        string = "minio-user"
	minioPass        string = "minio-password"
	minioPort               = "9000/tcp"
	minioHealthPath         = "/minio/health/live"
)

func newTestStore(t testing.TB) *Storage {
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
		testcontainers.WithWaitStrategy(
			wait.ForListeningPort(minioPort),
			wait.ForHTTP(minioHealthPath).WithPort(minioPort),
		),
	)
	testcontainers.CleanupContainer(t, c)
	require.NoError(t, err)

	conn, err := c.ConnectionString(ctx)
	require.NoError(t, err)

	return New(
		Config{
			Bucket:   "fiber-bucket",
			Endpoint: conn,
			Credentials: Credentials{
				AccessKeyID:     c.Username,
				SecretAccessKey: c.Password,
			},
		},
	)
}

func Test_Get(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)

	result, err = testStore.Get("doe")
	require.Error(t, err)
	require.Zero(t, len(result))
}

func Test_Get_Empty_Key(t *testing.T) {
	var (
		key = ""
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	_, err := testStore.Get(key)
	require.Error(t, err)
	require.EqualError(t, err, "the key value is required")
}

func Test_Get_Not_Exists_Key(t *testing.T) {
	var (
		key = "not-exists"
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	_, err := testStore.Get(key)
	require.Error(t, err)
	require.EqualError(t, err, "The specified key does not exist.")
}

func Test_Get_Not_Exists_Bucket(t *testing.T) {
	var (
		key = "john"
	)

	testStore := newTestStore(t)
	defer testStore.Close()

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

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)
}

func Test_Set_Empty_Key(t *testing.T) {
	var (
		key = ""
		val = []byte("doe")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set(key, val, 0)
	require.Error(t, err)
	require.EqualError(t, err, "the key value is required")

}

func Test_Set_Not_Exists_Bucket(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	// random bucket name
	testStore.cfg.Bucket = strconv.FormatInt(time.Now().UnixMicro(), 10)

	err := testStore.Set(key, val, 0)
	require.Error(t, err)
	require.EqualError(t, err, "The specified bucket does not exist")
}

func Test_Delete(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	err = testStore.Delete(key)
	require.NoError(t, err)
}

func Test_Delete_Empty_Key(t *testing.T) {
	var (
		key = ""
		val = []byte("doe")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set(key, val, 0)
	require.Error(t, err)
	require.EqualError(t, err, "the key value is required")
}

func Test_Delete_Not_Exists_Bucket(t *testing.T) {
	var (
		key = "john"
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	// random bucket name
	testStore.cfg.Bucket = strconv.FormatInt(time.Now().UnixMicro(), 10)

	err := testStore.Delete(key)
	require.Error(t, err)
	require.EqualError(t, err, "The specified bucket does not exist")
}

func Test_Reset(t *testing.T) {
	var (
		val = []byte("doe")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set("john1", val, 0)
	require.NoError(t, err)

	err = testStore.Set("john2", val, 0)
	require.NoError(t, err)

	err = testStore.Reset()
	require.NoError(t, err)

	result, err := testStore.Get("john1")
	require.Error(t, err)
	require.Zero(t, len(result))
}

func Test_Reset_Not_Exists_Bucket(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.RemoveBucket()
	require.NoError(t, err)

	err = testStore.Reset()
	require.Error(t, err)
	require.EqualError(t, err, "The specified bucket does not exist")
}

func Test_Close(t *testing.T) {
	testStore := newTestStore(t)
	require.NoError(t, testStore.Close())
}

func Benchmark_Minio_Set(b *testing.B) {
	testStore := newTestStore(b)
	defer testStore.Close()

	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		err = testStore.Set("john", []byte("doe"), 0)
	}

	require.NoError(b, err)
}

func Benchmark_Minio_Get(b *testing.B) {
	testStore := newTestStore(b)
	defer testStore.Close()

	err := testStore.Set("john", []byte("doe"), 0)
	require.NoError(b, err)

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_, err = testStore.Get("john")
	}

	require.NoError(b, err)
}

func Benchmark_Minio_SetAndDelete(b *testing.B) {
	testStore := newTestStore(b)
	defer testStore.Close()

	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		_ = testStore.Set("john", []byte("doe"), 0)
		err = testStore.Delete("john")
	}

	require.NoError(b, err)
}
