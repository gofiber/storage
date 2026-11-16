package minio

import (
	"bytes"
	"context"
	"net/http"
	"net/http/httptest"
	"os"
	"strconv"
	"strings"
	"testing"
	"time"

	miniogo "github.com/minio/minio-go/v7"
	"github.com/minio/minio-go/v7/pkg/credentials"
	"github.com/stretchr/testify/require"
	"github.com/testcontainers/testcontainers-go"
	"github.com/testcontainers/testcontainers-go/modules/minio"
	"github.com/testcontainers/testcontainers-go/wait"
)

const (
	// minioImage is the default image used for running minio in tests.
	minioImage              = "quay.io/minio/minio:latest"
	minioImageEnvVar string = "TEST_MINIO_IMAGE"
	minioUser        string = "minio-user"
	minioPass        string = "minio-password"
	minioPort               = "9000/tcp"
	minioHealthPath         = "/minio/health/live"
)

func newTestConfig(t testing.TB) Config {
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

	return Config{
		Bucket:   "fiber-bucket",
		Endpoint: conn,
		Credentials: Credentials{
			AccessKeyID:     c.Username,
			SecretAccessKey: c.Password,
		},
	}
}

func newTestStore(t testing.TB) *Storage {
	t.Helper()
	return New(newTestConfig(t))
}

func Test_NewWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := NewWithContext(context.Background(), newTestConfig(t))
	require.NotNil(t, testStore)
	defer testStore.Close()

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)
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

func Test_GetWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := newTestStore(t)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	result, err := testStore.GetWithContext(ctx, key)
	require.ErrorIs(t, err, context.Canceled)
	require.Zero(t, len(result))
}

func Test_Get_Result_Not_Overwritten(t *testing.T) {
	var (
		key1 = "john"
		val1 = []byte("doe-doe-doe-doe")
		key2 = "jane"
		val2 = []byte("roe-roe-roe-roe")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	require.NoError(t, testStore.Set(key1, val1, 0))
	require.NoError(t, testStore.Set(key2, val2, 0))

	// repeated because a pooled read buffer is not reused on every call
	for range 20 {
		result1, err := testStore.Get(key1)
		require.NoError(t, err)

		_, err = testStore.Get(key2)
		require.NoError(t, err)
		require.Equal(t, val1, result1)
	}
}

func Test_Get_Read_Error(t *testing.T) {
	t.Parallel()

	handlers := map[string]http.HandlerFunc{
		"checksum mismatch": func(w http.ResponseWriter, _ *http.Request) {
			w.Header().Set("X-Amz-Checksum-Type", "FULL_OBJECT")
			w.Header().Set("X-Amz-Checksum-Crc32", "AAAAAA==")
			// the old minio.Object path skipped the check when the body filled its read buffer exactly
			body := strings.Repeat("a", 4096)
			w.Header().Set("Content-Length", strconv.Itoa(len(body)))
			_, _ = w.Write([]byte(body))
		},
		"length beyond the body": func(w http.ResponseWriter, _ *http.Request) {
			w.Header().Set("Content-Length", strconv.FormatInt(1<<50, 10))
			_, _ = w.Write([]byte("abc"))
		},
		"body cut off without length": func(w http.ResponseWriter, _ *http.Request) {
			_, _ = w.Write([]byte("abc"))
			w.(http.Flusher).Flush()
			panic(http.ErrAbortHandler)
		},
	}
	for name, handler := range handlers {
		t.Run(name, func(t *testing.T) {
			t.Parallel()

			srv := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
				w.Header().Set("Last-Modified", time.Now().UTC().Format(http.TimeFormat))
				w.Header().Set("ETag", `"0"`)
				handler(w, r)
			}))
			defer srv.Close()

			client, err := miniogo.New(strings.TrimPrefix(srv.URL, "http://"), &miniogo.Options{
				Creds:  credentials.NewStaticV4("key", "secret", ""),
				Region: "us-east-1",
			})
			require.NoError(t, err)
			store := &Storage{minio: client, cfg: Config{Bucket: "fiber", GetObjectOptions: miniogo.GetObjectOptions{Checksum: true}}}

			val, err := store.Get("john")
			require.Error(t, err)
			require.Nil(t, val)
		})
	}
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

func Test_SetWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := newTestStore(t)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err := testStore.SetWithContext(ctx, key, val, 0)
	require.ErrorIs(t, err, context.Canceled)
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

func Test_Set_Expiration(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()
	ctx := context.Background()

	// A configured exp in any spelling must neither override nor invent a deadline.
	testStore.cfg.PutObjectOptions.UserMetadata = map[string]string{"Exp": "1", "X-Amz-Meta-Exp": "1"}

	require.NoError(t, testStore.Set("john", []byte("doe"), time.Hour))
	require.NoError(t, testStore.Set("jane", []byte("roe"), 0))

	info, err := testStore.minio.StatObject(ctx, testStore.cfg.Bucket, "john", miniogo.StatObjectOptions{})
	require.NoError(t, err)
	deadline, err := strconv.ParseInt(info.Metadata.Get("X-Amz-Meta-Exp"), 10, 64)
	require.NoError(t, err)
	require.InDelta(t, time.Now().Add(time.Hour).Unix(), deadline, 60)

	for key, want := range map[string]string{"john": "doe", "jane": "roe"} {
		result, err := testStore.Get(key)
		require.NoError(t, err)
		require.Equal(t, []byte(want), result)
	}

	// A past deadline is written directly, so the expired read needs no waiting.
	opts := testStore.cfg.PutObjectOptions
	opts.UserMetadata = map[string]string{expMetadataKey: "1"}
	_, err = testStore.minio.PutObject(ctx, testStore.cfg.Bucket, "expired", bytes.NewReader([]byte("old")), 3, opts)
	require.NoError(t, err)

	result, err := testStore.Get("expired")
	require.NoError(t, err)
	require.Nil(t, result)

	// right after a full second, a truncated sub-second deadline would already be past
	time.Sleep(time.Until(time.Now().Truncate(time.Second).Add(time.Second)))
	require.NoError(t, testStore.Set("short", []byte("v"), 500*time.Millisecond))
	result, err = testStore.Get("short")
	require.NoError(t, err)
	require.Equal(t, []byte("v"), result)
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

func Test_DeleteWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := newTestStore(t)

	err := testStore.Set(key, val, 0)
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

func Test_ResetWithContext(t *testing.T) {
	var (
		val = []byte("doe")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

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

func Test_Minio_NewFromConnection(t *testing.T) {
	owner := newTestStore(t)
	defer owner.Close()

	testStore := NewFromConnection(owner.Conn(), Config{Bucket: "fiber-bucket-existing"})
	require.Same(t, owner.Conn(), testStore.Conn())

	var (
		key = "john"
		val = []byte("doe")
	)

	require.NoError(t, testStore.Set(key, val, 0))

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)

	// The client is the caller's, so closing this storage must leave it usable.
	require.NoError(t, testStore.Close())
	require.NoError(t, owner.Set(key, val, 0))
}

func Test_Minio_NewFromConnection_Nil(t *testing.T) {
	require.Panics(t, func() {
		NewFromConnection(nil)
	})
}
