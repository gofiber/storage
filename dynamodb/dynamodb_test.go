package dynamodb

import (
	"context"
	"os"
	"testing"

	"github.com/stretchr/testify/require"
	"github.com/testcontainers/testcontainers-go"
	"github.com/testcontainers/testcontainers-go/modules/dynamodb"
)

const (
	// dynamoDBImage is the default image used for running DynamoDB in tests.
	dynamoDBImage              = "amazon/dynamodb-local:latest"
	dynamoDBImageEnvVar string = "TEST_DYNAMODB_IMAGE"
)

func newTestStore(t testing.TB) (*Storage, error) {
	t.Helper()

	img := dynamoDBImage
	if imgFromEnv := os.Getenv(dynamoDBImageEnvVar); imgFromEnv != "" {
		img = imgFromEnv
	}

	ctx := context.Background()

	c, err := dynamodb.Run(ctx, img, dynamodb.WithDisableTelemetry())
	testcontainers.CleanupContainer(t, c)
	if err != nil {
		return nil, err
	}

	hostPort, err := c.ConnectionString(ctx)
	if err != nil {
		return nil, err
	}

	return New(
		Config{
			Table:    "fiber_storage",
			Endpoint: "http://" + hostPort,
			Region:   "us-east-1",
			Credentials: Credentials{
				AccessKey:       "dummy",
				SecretAccessKey: "dummy",
			},
			Reset: true,
		},
	), nil
}

func Test_DynamoDB_Set(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	err = testStore.Set(key, val, 0)
	require.NoError(t, err)
}

func Test_DynamoDB_Set_Override(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	err = testStore.Set(key, val, 0)
	require.NoError(t, err)

	err = testStore.Set(key, val, 0)
	require.NoError(t, err)
}

func Test_DynamoDB_Get(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	err = testStore.Set(key, val, 0)
	require.NoError(t, err)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)
}

func Test_DynamoDB_Get_NotExist(t *testing.T) {
	testStore, err := newTestStore(t)
	require.NoError(t, err)
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

	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	err = testStore.Set(key, val, 0)
	require.NoError(t, err)

	err = testStore.Delete(key)
	require.NoError(t, err)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_DynamoDB_Reset(t *testing.T) {
	val := []byte("doe")

	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	err = testStore.Set("john1", val, 0)
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

func Test_DynamoDB_Close(t *testing.T) {
	testStore, err := newTestStore(t)
	require.NoError(t, err)

	require.Nil(t, testStore.Close())
}

func Test_DynamoDB_Conn(t *testing.T) {
	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	require.True(t, testStore.Conn() != nil)
}

func Benchmark_DynamoDB_Set(b *testing.B) {
	b.ReportAllocs()
	b.ResetTimer()

	testStore, err := newTestStore(b)
	require.NoError(b, err)
	defer testStore.Close()

	for i := 0; i < b.N; i++ {
		err = testStore.Set("john", []byte("doe"), 0)
		require.NoError(b, err)
	}
}

func Benchmark_DynamoDB_Get(b *testing.B) {
	testStore, err := newTestStore(b)
	require.NoError(b, err)
	defer testStore.Close()

	err = testStore.Set("john", []byte("doe"), 0)
	require.NoError(b, err)

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_, err = testStore.Get("john")
		require.NoError(b, err)
	}
}

func Benchmark_DynamoDB_SetAndDelete(b *testing.B) {
	b.ReportAllocs()
	b.ResetTimer()

	testStore, err := newTestStore(b)
	require.NoError(b, err)
	defer testStore.Close()

	for i := 0; i < b.N; i++ {
		err = testStore.Set("john", []byte("doe"), 0)
		require.NoError(b, err)

		err = testStore.Delete("john")
		require.NoError(b, err)
	}
}
