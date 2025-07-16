package coherence

/*
 * Copyright © 2023, 2024 Oracle and/or its affiliates.
 */
import (
	"context"
	"os"
	"testing"
	"time"

	"github.com/stretchr/testify/require"
	"github.com/testcontainers/testcontainers-go"
	"github.com/testcontainers/testcontainers-go/wait"
)

var (
	key1       = "key1"
	key2       = "key2"
	missingKey = "missing-key"
	value1     = []byte("value1")
	value2     = []byte("value2")
)

const (
	// coherenceImage is the default image used for running coherence in tests.
	coherenceImage              = "ghcr.io/oracle/coherence-ce:25.03.1-graal"
	coherenceImageEnvVar string = "TEST_COHERENCE_IMAGE"
	coherencePort               = "1408/tcp"
	coherencePort2              = "30000/tcp"

	// configuration for the health check
	coherenceHealthEnvVar = "COHERENCE_HEALTH_HTTP_PORT"
	coherenceHealthPort   = "6676"
)

func newTestConfig(t testing.TB) Config {
	t.Helper()

	// The coherence client adds debug messages to stdout, which corrupt
	// the output of the benchmarks. See "[Coherence Client Debug]" for
	// more information.
	//
	// [Coherence Client Debug]: https://github.com/oracle/coherence-go-client/blob/6383df14821ecf7c1ecd5f33a2c2fd402102d797/coherence/session.go#L195
	t.Setenv("COHERENCE_SESSION_DEBUG", "false")

	img := coherenceImage
	if imgFromEnv := os.Getenv(coherenceImageEnvVar); imgFromEnv != "" {
		img = imgFromEnv
	}

	ctx := context.Background()

	c, err := testcontainers.Run(ctx,
		img,
		testcontainers.WithExposedPorts(coherencePort, coherencePort2, coherenceHealthPort),
		testcontainers.WithEnv(map[string]string{
			coherenceHealthEnvVar: coherenceHealthPort,
		}),
		testcontainers.WithWaitStrategy(
			wait.ForListeningPort(coherencePort),
			wait.ForListeningPort(coherencePort2),
			wait.ForListeningPort(coherenceHealthPort+"/tcp"),
			wait.ForHTTP("/ready").WithPort(coherenceHealthPort+"/tcp").WithStartupTimeout(time.Second*30),
		),
	)
	testcontainers.CleanupContainer(t, c)
	require.NoError(t, err)

	host, err := c.Host(ctx)
	require.NoError(t, err)

	port, err := c.MappedPort(ctx, coherencePort)
	require.NoError(t, err)

	return Config{
		Reset:            true,
		Address:          host + ":" + port.Port(),
		NearCacheTimeout: time.Duration(4) * time.Second,
	}
}

func newTestStore(t testing.TB) *Storage {
	return newTestStoreWithConfig(t, nil)
}

func newTestStoreWithConfig(t testing.TB, config *Config) *Storage {
	t.Helper()

	var cfg Config
	if config == nil {
		cfg = newTestConfig(t)
	} else {
		cfg = *config
	}

	storage, err := New(cfg)
	require.NoError(t, err)

	return storage
}

func Test_Coherence_Set_And_Get(t *testing.T) {
	var val []byte

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set(key1, value1, 0)
	require.NoError(t, err)

	val, err = testStore.Get(key1)
	require.NoError(t, err)
	require.Equal(t, value1, val)

	require.NotNil(t, testStore.Conn())
}

func Test_Coherence_Set_And_GetWithContext(t *testing.T) {
	var val []byte

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set(key1, value1, 0)
	require.NoError(t, err)

	// Coherence will create new context instance as the provided one is deadline exceeded.
	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	val, err = testStore.GetWithContext(ctx, key1)
	require.Error(t, err)
	require.Empty(t, val)

	require.NotNil(t, testStore.Conn())
}

func Test_Coherence_SetContext_And_Get(t *testing.T) {
	var val []byte

	testStore := newTestStore(t)
	defer testStore.Close()

	ctx, cancel := context.WithTimeout(context.Background(), time.Microsecond)
	cancel()

	// Coherencce will create new context instance as the provided one is deadline exceeded.
	err := testStore.SetWithContext(ctx, key1, value1, 1*time.Nanosecond)
	require.ErrorIs(t, err, context.DeadlineExceeded)

	val, err = testStore.Get(key1)
	require.NoError(t, err)
	require.False(t, len(val) == 0)

	require.NotNil(t, testStore.Conn())
}

func Test_Coherence_Set_Override(t *testing.T) {
	var val []byte

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set(key1, value1, 0)
	require.NoError(t, err)

	err = testStore.Set(key1, value2, 0)
	require.NoError(t, err)

	val, err = testStore.Get(key1)
	require.NoError(t, err)
	require.Equal(t, value2, val)
}

func Test_Coherence_Set_With_Reset(t *testing.T) {
	var val []byte

	cfg := newTestConfig(t)

	testStore := newTestStoreWithConfig(t, &cfg)
	defer testStore.Close()

	err := testStore.Set(key1, value1, 0)
	require.NoError(t, err)

	val, err = testStore.Get(key1)
	require.NoError(t, err)
	require.Equal(t, value1, val)

	// get a new store but reset it, so the subsequent Get will return nil
	testStore2 := newTestStoreWithConfig(t, &cfg)
	defer testStore2.Close()

	err = testStore2.Reset()
	require.NoError(t, err)

	val, err = testStore2.Get(key1)
	require.NoError(t, err)
	require.True(t, len(val) == 0)

	require.Equal(t, nil, testStore2.Close())
}

func Test_Coherence_Set_With_Expiry(t *testing.T) {
	var val []byte

	testStore := newTestStore(t)
	defer testStore.Close()

	// set with an expiry of 5 seconds
	err := testStore.Set(key1, value1, time.Duration(5)*time.Second)
	require.NoError(t, err)
	time.Sleep(time.Duration(6) * time.Second)

	val, err = testStore.Get(key1)
	require.NoError(t, err)
	require.True(t, len(val) == 0)
}

func Test_Coherence_Get_Missing(t *testing.T) {
	var val []byte

	testStore := newTestStore(t)
	defer testStore.Close()

	val, err := testStore.Get(missingKey)
	require.NoError(t, err)
	require.True(t, len(val) == 0)
}

func Test_Coherence_Reset(t *testing.T) {
	var val []byte

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set(key1, value1, 0)
	require.NoError(t, err)

	err = testStore.Set(key2, value2, 0)
	require.NoError(t, err)

	// check the keys exist
	val, err = testStore.Get(key1)
	require.NoError(t, err)
	require.Equal(t, value1, val)

	val, err = testStore.Get(key2)
	require.NoError(t, err)
	require.Equal(t, value2, val)

	// reset the store, this should remove both entries
	err = testStore.Reset()
	require.NoError(t, err)

	// check the keys have expired
	val, err = testStore.Get(key1)
	require.NoError(t, err)
	require.True(t, len(val) == 0)

	val, err = testStore.Get(key2)
	require.NoError(t, err)
	require.True(t, len(val) == 0)
}

func Test_Coherence_ResetWithContext(t *testing.T) {
	var val []byte

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set(key1, value1, 0)
	require.NoError(t, err)

	err = testStore.Set(key2, value2, 0)
	require.NoError(t, err)

	// check the keys exist
	val, err = testStore.Get(key1)
	require.NoError(t, err)
	require.Equal(t, value1, val)

	val, err = testStore.Get(key2)
	require.NoError(t, err)
	require.Equal(t, value2, val)

	// reset the store, this should remove both entries
	// Coherence will create new context instance as the provided one is deadline exceeded.
	ctx, cancel := context.WithCancel(context.Background())
	cancel()
	err = testStore.ResetWithContext(ctx)
	require.NoError(t, err)

	// check the keys have expired
	val, err = testStore.Get(key1)
	require.NoError(t, err)
	require.True(t, len(val) == 0)

	val, err = testStore.Get(key2)
	require.NoError(t, err)
	require.True(t, len(val) == 0)
}

func Test_Coherence_Set_And_Delete(t *testing.T) {
	var val []byte

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set(key1, value1, 0)
	require.NoError(t, err)

	err = testStore.Delete(key1)
	require.NoError(t, err)

	// ensure the key has gone
	val, err = testStore.Get(key1)
	require.NoError(t, err)
	require.True(t, len(val) == 0)
}

func Test_Coherence_Set_And_DeleteWithContext(t *testing.T) {
	var val []byte

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set(key1, value1, 0)
	require.NoError(t, err)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	// Coherence will create new context instance as the provided one is deadline exceeded.
	err = testStore.DeleteWithContext(ctx, key1)
	require.Error(t, err)

	// ensure the key has gone
	val, err = testStore.Get(key1)
	require.NoError(t, err)
	require.True(t, len(val) == 0)
}

// TestCoherenceWithScope ensures we can create multiple session stores with multiple scopes.
func Test_Coherence_With_Scope(t *testing.T) {
	var val []byte

	cfg := newTestConfig(t)

	cfg1 := cfg
	cfg1.ScopeName = "scope1"

	testStore1 := newTestStoreWithConfig(t, &cfg1)
	defer testStore1.Close()

	// create two session stores with different scopes
	cfg2 := cfg
	cfg2.ScopeName = "scope2"
	testStore2 := newTestStoreWithConfig(t, &cfg2)
	defer testStore2.Close()

	// ensure we can put the same key with different values in each scope
	err := testStore1.Set(key1, value1, 0)
	require.NoError(t, err)

	err = testStore2.Set(key1, value2, 0)
	require.NoError(t, err)

	// ensure the value of "key1" is different for each store
	val, err = testStore1.Get(key1)
	require.NoError(t, err)
	require.Equal(t, value1, val)

	val, err = testStore2.Get(key1)
	require.NoError(t, err)
	require.Equal(t, value2, val)
}

func Benchmark_Coherence_Set(b *testing.B) {
	b.Setenv("COHERENCE_LOG_LEVEL", "ERROR")

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

func Benchmark_Coherence_Get(b *testing.B) {
	b.Setenv("COHERENCE_LOG_LEVEL", "ERROR")

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

func Benchmark_Coherence_SetAndDelete(b *testing.B) {
	b.Setenv("COHERENCE_LOG_LEVEL", "ERROR")

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
