package rueidis

import (
	"context"
	"crypto/tls"
	"errors"
	"testing"
	"time"

	"github.com/redis/rueidis"
	"github.com/stretchr/testify/require"

	testredis "github.com/gofiber/storage/testhelpers/redis"
)

// recoverPanic runs fn and returns the value it panicked with, or nil.
func recoverPanic(fn func()) (recovered any) {
	defer func() { recovered = recover() }()
	fn()
	return nil
}

func Test_Rueidis_ConfigDefault_Overrides(t *testing.T) {
	tlsCfg := &tls.Config{MinVersion: tls.VersionTLS12}

	cfg := configDefault(Config{
		Username:                "user",
		Password:                "pass",
		ClientName:              "client",
		URL:                     "redis://localhost:6380/1",
		SelectDB:                3,
		InitAddress:             []string{"a:1", "b:2"},
		TLSConfig:               tlsCfg,
		CacheSizeEachConn:       11,
		RingScaleEachConn:       12,
		ReadBufferEachConn:      13,
		WriteBufferEachConn:     14,
		BlockingPoolSize:        15,
		PipelineMultiplex:       4,
		DisableRetry:            true,
		DisableCache:            true,
		DisableAlwaysPipelining: true,
		Reset:                   true,
		CacheTTL:                time.Hour,
	})

	require.Equal(t, "user", cfg.Username)
	require.Equal(t, "pass", cfg.Password)
	require.Equal(t, "client", cfg.ClientName)
	require.Equal(t, "redis://localhost:6380/1", cfg.URL)
	require.Equal(t, 3, cfg.SelectDB)
	require.Equal(t, []string{"a:1", "b:2"}, cfg.InitAddress)
	require.Same(t, tlsCfg, cfg.TLSConfig)
	require.Equal(t, 11, cfg.CacheSizeEachConn)
	require.Equal(t, 12, cfg.RingScaleEachConn)
	require.Equal(t, 13, cfg.ReadBufferEachConn)
	require.Equal(t, 14, cfg.WriteBufferEachConn)
	require.Equal(t, 15, cfg.BlockingPoolSize)
	require.Equal(t, 4, cfg.PipelineMultiplex)
	require.True(t, cfg.DisableRetry)
	require.True(t, cfg.DisableCache)
	require.False(t, cfg.AlwaysPipelining)
	require.True(t, cfg.Reset)
	require.Equal(t, time.Hour, cfg.CacheTTL)

	// Overriding must not leak into the shared defaults.
	require.Equal(t, []string{"127.0.0.1:6379"}, ConfigDefault.InitAddress)
	require.Nil(t, ConfigDefault.TLSConfig)
	require.False(t, ConfigDefault.Reset)
	require.True(t, ConfigDefault.AlwaysPipelining)
}

func Test_Rueidis_ConfigDefault_Unset(t *testing.T) {
	// Zero values keep the defaults, whether the config is omitted or empty.
	require.Equal(t, ConfigDefault, configDefault())
	require.Equal(t, ConfigDefault, configDefault(Config{}))
}

func Test_Rueidis_Closed(t *testing.T) {
	testStore := newTestStore(t)

	require.NoError(t, testStore.Set("john", []byte("doe"), 0))
	require.NoError(t, testStore.Close())

	// Close is idempotent.
	require.NoError(t, testStore.Close())

	val, err := testStore.Get("john")
	require.ErrorIs(t, err, ErrClosed)
	require.Nil(t, val)

	require.ErrorIs(t, testStore.Set("john", []byte("doe"), 0), ErrClosed)
	require.ErrorIs(t, testStore.Set("john", []byte("doe"), time.Second), ErrClosed)
	require.ErrorIs(t, testStore.Delete("john"), ErrClosed)
	require.ErrorIs(t, testStore.Reset(), ErrClosed)

	// The closed check wins over argument validation.
	_, err = testStore.Get("")
	require.ErrorIs(t, err, ErrClosed)
	require.ErrorIs(t, testStore.Set("", nil, 0), ErrClosed)
	require.ErrorIs(t, testStore.Delete(""), ErrClosed)

	// The underlying client was closed too, since the storage opened it.
	require.NotNil(t, testStore.Conn())
	err = testStore.Conn().Do(context.Background(), testStore.Conn().B().Ping().Build()).Error()
	require.ErrorIs(t, err, rueidis.ErrClosing)
}

func Test_Rueidis_EmptyKeyOrValue(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	require.NoError(t, testStore.Set("keep", []byte("me"), 0))

	// An empty key is never read, written or deleted.
	val, err := testStore.Get("")
	require.NoError(t, err)
	require.Nil(t, val)

	require.NoError(t, testStore.Set("", []byte("doe"), 0))
	require.NoError(t, testStore.Delete(""))

	// An empty value is not stored, with or without an expiration.
	require.NoError(t, testStore.Set("empty", nil, 0))
	require.NoError(t, testStore.Set("empty", []byte{}, time.Minute))

	exists, err := testStore.Conn().Do(context.Background(),
		testStore.Conn().B().Exists().Key("empty").Build()).AsInt64()
	require.NoError(t, err)
	require.Zero(t, exists)

	val, err = testStore.Get("keep")
	require.NoError(t, err)
	require.Equal(t, []byte("me"), val)

	size, err := testStore.Conn().Do(context.Background(), testStore.Conn().B().Dbsize().Build()).AsInt64()
	require.NoError(t, err)
	require.Equal(t, int64(1), size)
}

func Test_Rueidis_Set_Expiration_TTL(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	require.NoError(t, testStore.Set("ttl", []byte("v"), 30*time.Second))
	require.NoError(t, testStore.Set("persistent", []byte("v"), 0))

	ttl, err := testStore.Conn().Do(context.Background(), testStore.Conn().B().Pttl().Key("ttl").Build()).AsInt64()
	require.NoError(t, err)
	require.Greater(t, ttl, int64(0))
	require.LessOrEqual(t, ttl, int64(30_000))

	// -1 means the key exists without an expiration.
	ttl, err = testStore.Conn().Do(context.Background(), testStore.Conn().B().Pttl().Key("persistent").Build()).AsInt64()
	require.NoError(t, err)
	require.Equal(t, int64(-1), ttl)

	// A negative expiration is treated as none.
	require.NoError(t, testStore.Set("negative", []byte("v"), -time.Second))
	ttl, err = testStore.Conn().Do(context.Background(), testStore.Conn().B().Pttl().Key("negative").Build()).AsInt64()
	require.NoError(t, err)
	require.Equal(t, int64(-1), ttl)
}

func Test_Rueidis_URL_ClientName(t *testing.T) {
	getName := func(t *testing.T, s *Storage) string {
		t.Helper()
		name, err := s.Conn().Do(context.Background(), s.Conn().B().ClientGetname().Build()).ToString()
		require.NoError(t, err)
		return name
	}

	t.Run("taken from the URL", func(t *testing.T) {
		cfg := newConfigFromContainer(t)
		cfg.URL += "?client_name=from-url"

		testStore := New(cfg)
		defer testStore.Close()

		require.Equal(t, "from-url", getName(t, testStore))
	})

	t.Run("explicit config wins over the URL", func(t *testing.T) {
		cfg := newConfigFromContainer(t)
		cfg.URL += "?client_name=from-url"
		cfg.ClientName = "from-config"

		testStore := New(cfg)
		defer testStore.Close()

		require.Equal(t, "from-config", getName(t, testStore))
	})
}

func Test_Rueidis_TLS_URL_Uses_URL_TLSConfig(t *testing.T) {
	cfg := newConfigFromContainer(t, testredis.WithTLS(true, true), testredis.WithAddress(), testredis.WithURL(true))
	require.NotNil(t, cfg.TLSConfig)

	// With the container's CA the rediss URL connects.
	testStore := New(cfg)
	require.NoError(t, testStore.Set("clark", []byte("kent"), 0))
	require.NoError(t, testStore.Close())

	// Without a TLSConfig, the one derived from the rediss URL is used and trusts only the system
	// roots, so the container's self-signed certificate is rejected.
	cfg.TLSConfig = nil
	recovered := recoverPanic(func() { New(cfg) })
	require.NotNil(t, recovered)

	err, ok := recovered.(error)
	require.True(t, ok, "expected an error panic, got %v", recovered)
	require.Contains(t, err.Error(), "certificate")
}

func Test_Rueidis_New_Unreachable(t *testing.T) {
	recovered := recoverPanic(func() {
		New(Config{InitAddress: []string{"127.0.0.1:1"}})
	})
	require.NotNil(t, recovered)

	err, ok := recovered.(error)
	require.True(t, ok, "expected an error panic, got %v", recovered)
	require.Error(t, err)
}

func Test_Rueidis_New_InvalidURL(t *testing.T) {
	require.Panics(t, func() {
		New(Config{URL: "not-a-redis-url://"})
	})
}

func Test_Rueidis_NewWithContext_Cancelled(t *testing.T) {
	cfg := newConfigFromContainer(t)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	// The connection test honours the context and the half-opened client is released.
	recovered := recoverPanic(func() { NewWithContext(ctx, cfg) })
	require.NotNil(t, recovered)

	err, ok := recovered.(error)
	require.True(t, ok, "expected an error panic, got %v", recovered)
	require.ErrorIs(t, err, context.Canceled)
}

func Test_Rueidis_NewFromConnection_Reset_Failure(t *testing.T) {
	owner := newTestStore(t)
	defer owner.Close()

	require.NoError(t, owner.Set("john", []byte("doe"), 0))

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	// A failed reset panics, and the client belongs to the caller so it stays open and untouched.
	recovered := recoverPanic(func() {
		NewFromConnectionWithContext(ctx, owner.Conn(), Config{Reset: true})
	})
	require.NotNil(t, recovered)

	err, ok := recovered.(error)
	require.True(t, ok, "expected an error panic, got %v", recovered)
	require.ErrorIs(t, err, context.Canceled)

	val, err := owner.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), val)
}

func Test_Rueidis_newStorage_Reset_Failure_ClosesOwnedClient(t *testing.T) {
	cfg := newConfigFromContainer(t)
	opened := New(Config{URL: cfg.URL})
	defer opened.Close()

	client := opened.Conn()

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	recovered := recoverPanic(func() { newStorage(ctx, client, true, Config{Reset: true}) })
	require.NotNil(t, recovered)
	err, ok := recovered.(error)
	require.True(t, ok, "expected an error panic, got %v", recovered)
	require.True(t, errors.Is(err, context.Canceled))

	// The client was owned by the failed storage, so it was closed.
	err = client.Do(context.Background(), client.B().Ping().Build()).Error()
	require.ErrorIs(t, err, rueidis.ErrClosing)
}
