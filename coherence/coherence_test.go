package coherence

/*
 * Copyright © 2023, 2024 Oracle and/or its affiliates.
 */
import (
	"context"
	"crypto/tls"
	"os"
	"testing"
	"time"

	coh "github.com/oracle/coherence-go-client/v2/coherence"
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

func Test_Coherence_NewWithContext(t *testing.T) {
	var val []byte

	cfg := newTestConfig(t)

	testStore, err := NewWithContext(context.Background(), cfg)
	require.NoError(t, err)
	require.NotNil(t, testStore)
	defer testStore.Close()

	err = testStore.Set(key1, value1, 0)
	require.NoError(t, err)

	val, err = testStore.Get(key1)
	require.NoError(t, err)
	require.Equal(t, value1, val)
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

func Test_Coherence_NewFromConnection(t *testing.T) {
	owner := newTestStore(t)
	defer owner.Close()

	testStore, err := NewFromConnection(owner.Conn(), Config{ScopeName: "existing-store"})
	require.NoError(t, err)
	require.Same(t, owner.Conn(), testStore.Conn())

	require.NoError(t, testStore.Set(key1, value1, 0))

	val, err := testStore.Get(key1)
	require.NoError(t, err)
	require.Equal(t, value1, val)

	// The session is the caller's, so closing this storage must leave it usable.
	require.NoError(t, testStore.Close())
	require.NoError(t, owner.Set(key2, value2, 0))
	require.ErrorIs(t, testStore.Set(key1, value1, 0), ErrClosed)

	// The client shares one named cache per session and scope, so closing one storage must not
	// release the cache out from under a sibling built on the same scope.
	first, err := NewFromConnection(owner.Conn(), Config{ScopeName: "shared-store"})
	require.NoError(t, err)
	second, err := NewFromConnection(owner.Conn(), Config{ScopeName: "shared-store"})
	require.NoError(t, err)

	require.NoError(t, first.Set(key1, value1, 0))
	require.NoError(t, first.Close())

	val, err = second.Get(key1)
	require.NoError(t, err)
	require.Equal(t, value1, val)
	require.NoError(t, second.Set(key2, value2, 0))
	require.NoError(t, second.Close())
}

func Test_Coherence_NewFromConnection_Nil(t *testing.T) {
	_, err := NewFromConnection(nil)
	require.Error(t, err)
}

func Test_Coherence_NewFromConnectionWithContext(t *testing.T) {
	owner := newTestStore(t)
	defer owner.Close()

	// Reset must clear entries already in the scope.
	seed, err := NewFromConnection(owner.Conn(), Config{ScopeName: "ctx-store"})
	require.NoError(t, err)
	require.NoError(t, seed.Set(key1, value1, 0))

	testStore, err := NewFromConnectionWithContext(context.Background(), owner.Conn(), Config{ScopeName: "ctx-store", Reset: true})
	require.NoError(t, err)

	val, err := testStore.Get(key1)
	require.NoError(t, err)
	require.Nil(t, val)

	require.NoError(t, testStore.Set(key1, value1, 0))
	val, err = testStore.Get(key1)
	require.NoError(t, err)
	require.Equal(t, value1, val)

	// Coherence substitutes a fresh context when the supplied one is already done, so the
	// construction-time reset still wipes the scope rather than silently being skipped.
	ctx, cancel := context.WithCancel(context.Background())
	cancel()
	cancelledStore, err := NewFromConnectionWithContext(ctx, owner.Conn(), Config{ScopeName: "ctx-store", Reset: true})
	require.NoError(t, err)

	val, err = cancelledStore.Get(key1)
	require.NoError(t, err)
	require.Nil(t, val)
}

func Test_Coherence_SetupConfig(t *testing.T) {
	// no config at all falls back to the defaults
	require.Equal(t, DefaultConfig, setupConfig())

	// zero values in a supplied config are replaced by the defaults
	cfg := setupConfig(Config{Reset: true, NearCacheTimeout: time.Second})
	require.Equal(t, defaultAddress, cfg.Address)
	require.Equal(t, defaultScopeName, cfg.ScopeName)
	require.Equal(t, defaultTimeout, cfg.Timeout)
	require.True(t, cfg.Reset)
	require.Equal(t, time.Second, cfg.NearCacheTimeout)

	// values that are set are kept
	custom := Config{Address: "example:1234", ScopeName: "custom", Timeout: 5 * time.Second}
	require.Equal(t, custom, setupConfig(custom))
}

// Test_Coherence_New_InvalidSessionConfig checks that a session which cannot be created is reported
// by every constructor, without needing a running Coherence server.
func Test_Coherence_New_InvalidSessionConfig(t *testing.T) {
	t.Setenv("COHERENCE_SESSION_DEBUG", "false")
	t.Setenv("COHERENCE_SESSION_DISCONNECT_TIMEOUT", "not-a-number")

	// default config, using the default address
	store, err := New()
	require.ErrorContains(t, err, "invalid value of not-a-number for disconnect timeout")
	require.Nil(t, store)

	// plain text connection
	store, err = New(Config{Address: "127.0.0.1:1", Timeout: time.Second})
	require.ErrorContains(t, err, "invalid value of not-a-number for disconnect timeout")
	require.Nil(t, store)

	// TLS connection
	store, err = New(Config{Address: "127.0.0.1:1", Timeout: time.Second, TLSConfig: &tls.Config{MinVersion: tls.VersionTLS12}})
	require.ErrorContains(t, err, "invalid value of not-a-number for disconnect timeout")
	require.Nil(t, store)

	// a cancelled context makes no difference to a failure that is not about the context
	ctx, cancel := context.WithCancel(context.Background())
	cancel()
	store, err = NewWithContext(ctx, Config{Address: "127.0.0.1:1", Timeout: time.Second})
	require.ErrorContains(t, err, "invalid value of not-a-number for disconnect timeout")
	require.Nil(t, store)
}

// Test_Coherence_NewFromConnection_UnusableSession checks the failures of opening the named cache on
// sessions that cannot serve it, without needing a running Coherence server.
func Test_Coherence_NewFromConnection_UnusableSession(t *testing.T) {
	t.Setenv("COHERENCE_SESSION_DEBUG", "false")

	// Nothing listens on port 1; the client connects lazily, so the session is created regardless and
	// it is opening the named cache that reports the connection failure.
	session, _ := coh.NewSession(context.Background(),
		coh.WithAddress("127.0.0.1:1"), coh.WithPlainText(), coh.WithRequestTimeout(time.Second))
	require.NotNil(t, session)
	defer session.Close()

	store, err := NewFromConnection(session, Config{ScopeName: "unreachable"})
	require.Error(t, err)
	require.Nil(t, store)

	// a failed reset never gets that far either
	store, err = NewFromConnection(session, Config{ScopeName: "unreachable", Reset: true})
	require.Error(t, err)
	require.Nil(t, store)

	// an already closed session cannot open a named cache
	session.Close()
	store, err = NewFromConnection(session, Config{ScopeName: "closed"})
	require.ErrorIs(t, err, coh.ErrClosed)
	require.Nil(t, store)
}

func Test_Coherence_NearCacheTimeout_Exceeds_SessionTimeout(t *testing.T) {
	cfg := newTestConfig(t)
	cfg.Reset = false
	cfg.Timeout = time.Second
	cfg.NearCacheTimeout = 5 * time.Second

	// the session this driver opened is released and nothing is returned
	store, err := New(cfg)
	require.ErrorContains(t, err, "you cannot set the near cache timeout")
	require.Nil(t, store)

	// a borrowed session is validated against its own timeout and left open
	cfg.Timeout = defaultTimeout
	cfg.NearCacheTimeout = time.Second
	owner, err := New(cfg)
	require.NoError(t, err)
	defer owner.Close()

	store, err = NewFromConnection(owner.Conn(), Config{ScopeName: "near", NearCacheTimeout: 2 * defaultTimeout})
	require.ErrorContains(t, err, "you cannot set the near cache timeout")
	require.Nil(t, store)

	require.NoError(t, owner.Set(key1, value1, 0))
	val, err := owner.Get(key1)
	require.NoError(t, err)
	require.Equal(t, value1, val)
}

func Test_Coherence_Closed_Storage(t *testing.T) {
	testStore := newTestStore(t)

	require.NoError(t, testStore.Set(key1, value1, 0))
	require.NoError(t, testStore.Close())

	// every operation reports ErrClosed once closed, and closing again is harmless
	val, err := testStore.Get(key1)
	require.ErrorIs(t, err, ErrClosed)
	require.Nil(t, val)
	val, err = testStore.GetWithContext(context.Background(), key1)
	require.ErrorIs(t, err, ErrClosed)
	require.Nil(t, val)
	require.ErrorIs(t, testStore.Set(key1, value2, 0), ErrClosed)
	require.ErrorIs(t, testStore.Delete(key1), ErrClosed)
	require.ErrorIs(t, testStore.DeleteWithContext(context.Background(), key1), ErrClosed)
	require.ErrorIs(t, testStore.Reset(), ErrClosed)
	require.NoError(t, testStore.Close())
}

func Test_Coherence_NewFromConnectionWithContext_ResetFails(t *testing.T) {
	owner := newTestStore(t)
	defer owner.Close()

	// A context whose deadline has already passed is used as is, so the construction-time reset fails.
	// The storage is returned alongside the error, as it is still usable.
	ctx, cancel := context.WithTimeout(context.Background(), time.Nanosecond)
	defer cancel()
	<-ctx.Done()

	testStore, err := NewFromConnectionWithContext(ctx, owner.Conn(), Config{ScopeName: "reset-fails", Reset: true})
	require.ErrorIs(t, err, context.DeadlineExceeded)
	require.NotNil(t, testStore)

	require.NoError(t, testStore.Set(key1, value1, 0))
	val, err := testStore.Get(key1)
	require.NoError(t, err)
	require.Equal(t, value1, val)
	require.NoError(t, testStore.Close())
}
