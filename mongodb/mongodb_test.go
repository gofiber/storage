package mongodb

import (
	"context"
	"os"
	"testing"
	"time"

	"github.com/stretchr/testify/require"
	"github.com/testcontainers/testcontainers-go"
	"github.com/testcontainers/testcontainers-go/modules/mongodb"
	"github.com/testcontainers/testcontainers-go/wait"
)

const (
	// mongoDBImage is the default image used for running MongoDB in tests.
	mongoDBImage              = "mongo:7"
	mongoDBImageEnvVar string = "TEST_MONGODB_IMAGE"
	mongoDBUser        string = "mongo-user"
	mongoDBPass        string = "mongo-password"
	mongoDBPort               = "27017/tcp"
	mongoDBReadyLog           = "Waiting for connections"
)

func newTestStore(t testing.TB) (*Storage, error) {
	t.Helper()

	img := mongoDBImage
	if imgFromEnv := os.Getenv(mongoDBImageEnvVar); imgFromEnv != "" {
		img = imgFromEnv
	}

	ctx := context.Background()

	c, err := mongodb.Run(
		ctx, img, mongodb.WithUsername(mongoDBUser), mongodb.WithPassword(mongoDBPass),
		testcontainers.WithWaitStrategy(
			wait.ForAll(
				wait.ForListeningPort(mongoDBPort),
				wait.ForLog(mongoDBReadyLog),
			),
		),
	)
	testcontainers.CleanupContainer(t, c)
	if err != nil {
		return nil, err
	}

	conn, err := c.ConnectionString(ctx)
	if err != nil {
		return nil, err
	}

	return New(Config{
		ConnectionURI: conn,
		Reset:         true,
	}), nil
}

func Test_MongoDB_Set(t *testing.T) {
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

func Test_MongoDB_SetWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err := testStore.SetWithContext(ctx, key, val, 0)
	require.ErrorIs(t, err, context.Canceled)
}

func Test_MongoDB_Set_Override(t *testing.T) {
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

func Test_MongoDB_Get(t *testing.T) {
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

func Test_MongoDB_GetWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	result, err := testStore.GetWithContext(ctx, key)
	require.ErrorIs(t, err, context.Canceled)
	require.Zero(t, len(result))
}

func Test_MongoDB_Set_Expiration(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
		exp = 1 * time.Second
	)

	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	err = testStore.Set(key, val, exp)
	require.NoError(t, err)

	time.Sleep(1100 * time.Millisecond)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Zero(t, len(result), "Key should have expired")
}

func Test_MongoDB_Get_Expired(t *testing.T) {
	key := "john"

	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_MongoDB_Get_NotExist(t *testing.T) {
	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	result, err := testStore.Get("notexist")
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_MongoDB_Delete(t *testing.T) {
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

func Test_MongoDB_DeleteWithContext(t *testing.T) {
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

func Test_MongoDB_Reset(t *testing.T) {
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

func Test_MongoDB_ResetWithContext(t *testing.T) {
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

func Test_MongoDB_Close(t *testing.T) {
	testStore, err := newTestStore(t)
	require.NoError(t, err)

	require.Nil(t, testStore.Close())
}

func Test_MongoDB_Conn(t *testing.T) {
	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	require.True(t, testStore.Conn() != nil)
}

func Benchmark_MongoDB_Set(b *testing.B) {
	testStore, err := newTestStore(b)
	require.NoError(b, err)
	defer testStore.Close()

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		err = testStore.Set("john", []byte("doe"), 0)
	}

	require.NoError(b, err)
}

func Benchmark_MongoDB_Get(b *testing.B) {
	testStore, err := newTestStore(b)
	require.NoError(b, err)
	defer testStore.Close()

	err = testStore.Set("john", []byte("doe"), 0)
	require.NoError(b, err)

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_, err = testStore.Get("john")
	}

	require.NoError(b, err)
}

func Benchmark_MongoDB_SetAndDelete(b *testing.B) {
	testStore, err := newTestStore(b)
	require.NoError(b, err)
	defer testStore.Close()

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_ = testStore.Set("john", []byte("doe"), 0)
		err = testStore.Delete("john")
	}

	require.NoError(b, err)
}
