package dynamodb

import (
	"context"
	"net/http"
	"os"
	"testing"
	"time"

	"github.com/stretchr/testify/require"
	"github.com/testcontainers/testcontainers-go"
	"github.com/testcontainers/testcontainers-go/modules/dynamodb"
	"github.com/testcontainers/testcontainers-go/wait"
)

const (
	// dynamoDBImage is the default image used for running DynamoDB in tests.
	dynamoDBImage              = "amazon/dynamodb-local:latest"
	dynamoDBImageEnvVar string = "TEST_DYNAMODB_IMAGE"
	// dynamoDBPort is the port DynamoDB local listens on inside the container.
	dynamoDBPort = "8000/tcp"
)

func newTestStore(t testing.TB) *Storage {
	t.Helper()

	img := dynamoDBImage
	if imgFromEnv := os.Getenv(dynamoDBImageEnvVar); imgFromEnv != "" {
		img = imgFromEnv
	}

	ctx := context.Background()

	// The module's default wait strategy only waits for the TCP port to open.
	// DynamoDB local (a Java process) accepts connections before it is ready to
	// serve API calls and resets those early requests ("connection reset by
	// peer"). Wait until it actually answers HTTP requests so New does not race
	// the container startup.
	c, err := dynamodb.Run(ctx, img,
		dynamodb.WithDisableTelemetry(),
		testcontainers.WithWaitStrategy(
			wait.ForListeningPort(dynamoDBPort),
			wait.ForHTTP("/").
				WithPort(dynamoDBPort).
				WithStartupTimeout(60*time.Second).
				// DynamoDB local replies to any plain HTTP request once it is
				// serving, so a non-5xx status means the API is up.
				WithStatusCodeMatcher(func(status int) bool {
					return status > 0 && status < http.StatusInternalServerError
				}),
		),
	)
	testcontainers.CleanupContainer(t, c)
	require.NoError(t, err)

	hostPort, err := c.ConnectionString(ctx)
	require.NoError(t, err)

	return newStore(t, "http://"+hostPort)
}

// newStore builds a Storage from the given endpoint. New panics on any
// connection error (the public API has no error return), so a transient
// container hiccup would crash the whole test binary and defeat gotestsum's
// --rerun-fails. Recover here and turn it into a normal test failure that can
// be retried instead.
func newStore(t testing.TB, endpoint string) (s *Storage) {
	t.Helper()

	defer func() {
		if r := recover(); r != nil {
			t.Fatalf("dynamodb: New panicked while connecting to %s: %v", endpoint, r)
		}
	}()

	return New(
		Config{
			Table:    "fiber_storage",
			Endpoint: endpoint,
			Region:   "us-east-1",
			Credentials: Credentials{
				AccessKey:       "dummy",
				SecretAccessKey: "dummy",
			},
			Reset: true,
		},
	)
}

func Test_DynamoDB_Set(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)
}

func Test_DynamoDB_SetWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.SetWithContext(ctx, key, val, 0)
	require.ErrorIs(t, err, context.Canceled)
}

func Test_DynamoDB_Set_Override(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	err = testStore.Set(key, val, 0)
	require.NoError(t, err)
}

func Test_DynamoDB_Get(t *testing.T) {
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
}

func Test_DynamoDB_GetWithContext(t *testing.T) {
	var (
		key = "john"
	)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	testStore := newTestStore(t)
	defer testStore.Close()

	result, err := testStore.GetWithContext(ctx, key)
	require.ErrorIs(t, err, context.Canceled)
	require.Zero(t, len(result))
}

func Test_DynamoDB_Get_NotExist(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	result, err := testStore.Get("notexist")
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_DynamoDB_Delete(t *testing.T) {
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

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_DynamoDB_DeleteWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

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

func Test_DynamoDB_Reset(t *testing.T) {
	val := []byte("doe")

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set("john1", val, 0)
	require.NoError(t, err)

	err = testStore.Set("john2", val, 0)
	require.NoError(t, err)

	err = testStore.Reset()
	require.NoError(t, err)

	result, err := testStore.Get("john1")
	require.NoError(t, err)
	require.Zero(t, len(result))

	result, err = testStore.Get("john2")
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_DynamoDB_ResetWithContext(t *testing.T) {
	val := []byte("doe")

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

	result, err = testStore.Get("john2")
	require.NoError(t, err)
	require.Equal(t, val, result)
}

func Test_DynamoDB_Close(t *testing.T) {
	testStore := newTestStore(t)
	require.Nil(t, testStore.Close())
}

func Test_DynamoDB_Conn(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	require.True(t, testStore.Conn() != nil)
}

func Benchmark_DynamoDB_Set(b *testing.B) {
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

func Benchmark_DynamoDB_Get(b *testing.B) {
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

func Benchmark_DynamoDB_SetAndDelete(b *testing.B) {
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
