package surrealdb

import (
	"bytes"
	"context"
	"encoding/json"
	"errors"
	"log"
	"net"
	"os"
	"testing"
	"time"

	"github.com/stretchr/testify/require"
	"github.com/surrealdb/surrealdb.go/pkg/models"
	"github.com/testcontainers/testcontainers-go"
	"github.com/testcontainers/testcontainers-go/modules/surrealdb"

	surrealdbclient "github.com/surrealdb/surrealdb.go"
)

var (
	// surrealDb is the default image used for running surrealdb in tests.
	// Pinned to v2: SurrealDB v3 no longer creates namespaces/databases
	// implicitly on USE, which the storage implementation relies on.
	surrealDb                   = "surrealdb/surrealdb:v2"
	surrealDbImageEnvVar string = "TEST_SURREALDB_IMAGE"
	surrealDbUser        string = "root"
	surrealDbPass        string = "root"
)

func newTestConfig(t testing.TB) Config {
	t.Helper()
	ctx := context.Background()

	img := surrealDb
	if imgFromEnv := os.Getenv(surrealDbImageEnvVar); imgFromEnv != "" {
		img = imgFromEnv
	}
	surrealdbContainer, err := surrealdb.Run(
		ctx, img,
		surrealdb.WithUsername(surrealDbUser),
		surrealdb.WithPassword(surrealDbPass),
	)
	require.NoError(t, err)

	testcontainers.CleanupContainer(t, surrealdbContainer)

	url, err := surrealdbContainer.URL(ctx)
	require.NoError(t, err)

	return Config{
		ConnectionString: url,
		Namespace:        "testns",
		Database:         "testdb",
		Username:         surrealDbUser,
		Password:         surrealDbPass,
		DefaultTable:     "fiber_storage",
	}
}

func newTestStore(t testing.TB) *Storage {
	t.Helper()
	return New(newTestConfig(t))
}

func Test_Surrealdb_NewWithContext(t *testing.T) {
	testStore := NewWithContext(context.Background(), newTestConfig(t))
	require.NotNil(t, testStore)
	defer testStore.Close()

	err := testStore.Set("test", []byte("test12345"), 0)
	require.NoError(t, err)

	get, err := testStore.Get("test")
	require.NoError(t, err)
	require.Equal(t, []byte("test12345"), get)
}

func Test_Surrealdb_Create(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set("test", []byte("test12345"), 0)
	require.NoError(t, err)
}

func Test_Surrealdb_CreateAndGet(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set("test", []byte("test12345"), 0)
	require.NoError(t, err)

	get, err := testStore.Get("test")
	require.NoError(t, err)
	require.NotEmpty(t, get)
}

func Test_Surrealdb_ListTable(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	bytes, err := testStore.List()
	require.NoError(t, err)
	require.NotEmpty(t, bytes)
}

func Test_Surrealdb_Get_WithNoErr(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set("test", []byte("test1234"), 0)
	require.NoError(t, err)

	get, err := testStore.Get("test")
	require.NoError(t, err)
	require.NotEmpty(t, get)
}

func Test_Surrealdb_Delete(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set("test", []byte("delete1234"), 0)
	require.NoError(t, err)

	err = testStore.Delete("test")
	require.NoError(t, err)

	val, err := testStore.Get("test")
	require.NoError(t, err)
	require.Nil(t, val)
}

func Test_Surrealdb_Flush(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set("test_key", []byte("test_value"), 0)
	require.NoError(t, err)

	val, err := testStore.Get("test_key")
	require.NoError(t, err)
	require.NotNil(t, val)

	err = testStore.Reset()
	require.NoError(t, err)

	val, err = testStore.Get("test_key")
	require.NoError(t, err)
	require.Nil(t, val)
}

func Test_Surrealdb_GetExpired(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set("temp", []byte("value"), 1*time.Second)
	require.NoError(t, err)

	require.Eventually(t, func() bool {
		val, _ := testStore.Get("temp")
		return val == nil
	}, 3*time.Second, 100*time.Millisecond)
	require.NoError(t, err)
}

func Test_Surrealdb_GetMissing(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	val, err := testStore.Get("non-existent-key")
	require.NoError(t, err)
	require.Nil(t, val)
}

func Test_Surrealdb_ListSkipsExpired(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	_ = testStore.Set("valid", []byte("123"), 0)

	_ = testStore.Set("expired", []byte("456"), 1*time.Second)
	// The deadline is stored in whole seconds and rounded up, so wait past it.
	time.Sleep(3 * time.Second)

	data, err := testStore.List()
	require.NoError(t, err)

	var result map[string][]byte
	err = json.Unmarshal(data, &result)
	require.NoError(t, err)

	require.Contains(t, result, "valid")
	require.NotContains(t, result, "expired")
}

func Test_Surrealdb_GarbageCollector_RemovesExpiredKeys(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set("temp_key", []byte("temp_value"), 1*time.Second)
	require.NoError(t, err)

	val, err := testStore.Get("temp_key")
	require.NoError(t, err)
	require.NotNil(t, val)

	time.Sleep(3 * time.Second)

	require.Eventually(t, func() bool {
		val, err = testStore.Get("temp_key")
		require.NoError(t, err)
		return val == nil
	}, 3*time.Second, 300*time.Millisecond)
}

func Benchmark_SurrealDB_Set(b *testing.B) {
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

func Benchmark_SurrealDB_Get(b *testing.B) {
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

func Benchmark_SurrealDB_SetAndDelete(b *testing.B) {
	testStore := newTestStore(b)
	defer testStore.Close()

	b.ReportAllocs()
	b.ResetTimer()
	var err error
	for i := 0; i < b.N; i++ {
		testStore.Set("john", []byte("doe"), 0)
		err = testStore.Delete("john")
	}

	require.NoError(b, err)
}

func Test_Surrealdb_Close_Twice(t *testing.T) {
	testStore := newTestStore(t)

	require.NoError(t, testStore.Close())
	require.NotPanics(t, func() {
		require.NoError(t, testStore.Close())
	})
}

func Test_Surrealdb_NewFromConnection(t *testing.T) {
	owner := newTestStore(t)
	defer owner.Close()

	store := NewFromConnection(owner.Conn(), Config{DefaultTable: "fiber_storage_existing"})
	require.Same(t, owner.Conn(), store.Conn())

	require.NoError(t, store.Set("john", []byte("doe"), 0))

	result, err := store.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), result)

	// The connection is the caller's, so closing this storage must leave it usable.
	require.NoError(t, store.Close())
	require.NoError(t, owner.Set("jane", []byte("doe"), 0))
	require.ErrorIs(t, store.Set("jane", []byte("doe"), 0), ErrClosed)
}

func Test_Surrealdb_NewFromConnection_Nil(t *testing.T) {
	require.Panics(t, func() {
		NewFromConnection(nil)
	})
}

// closedListenerAddr returns an address nothing is listening on.
func closedListenerAddr(t testing.TB) string {
	t.Helper()
	l, err := net.Listen("tcp", "127.0.0.1:0")
	require.NoError(t, err)
	addr := l.Addr().String()
	require.NoError(t, l.Close())
	return addr
}

func Test_Surrealdb_ConfigDefault(t *testing.T) {
	require.Equal(t, ConfigDefault, configDefault())

	cfg := configDefault(Config{GCInterval: -time.Second})
	require.Equal(t, ConfigDefault.ConnectionString, cfg.ConnectionString)
	require.Equal(t, ConfigDefault.Namespace, cfg.Namespace)
	require.Equal(t, ConfigDefault.Database, cfg.Database)
	require.Equal(t, ConfigDefault.Username, cfg.Username)
	require.Equal(t, ConfigDefault.Password, cfg.Password)
	require.Equal(t, ConfigDefault.Scope, cfg.Scope)
	require.Equal(t, ConfigDefault.Access, cfg.Access)
	require.Equal(t, ConfigDefault.DefaultTable, cfg.DefaultTable)
	require.Equal(t, ConfigDefault.GCInterval, cfg.GCInterval)

	custom := configDefault(Config{DefaultTable: "custom", GCInterval: time.Minute})
	require.Equal(t, "custom", custom.DefaultTable)
	require.Equal(t, time.Minute, custom.GCInterval)
}

func Test_Surrealdb_ConfigDefault_WarnsOnUnknownScheme(t *testing.T) {
	var buf bytes.Buffer
	log.SetOutput(&buf)
	defer log.SetOutput(os.Stderr)

	for _, scheme := range []string{"ws://", "wss://", "http://", "https://"} {
		cfg := configDefault(Config{ConnectionString: scheme + "example.invalid"})
		require.Equal(t, scheme+"example.invalid", cfg.ConnectionString)
	}
	require.Empty(t, buf.String())

	cfg := configDefault(Config{ConnectionString: "mem://"})
	require.Equal(t, "mem://", cfg.ConnectionString)
	require.Contains(t, buf.String(), "doesn't start with ws://, wss://, http:// or https://")
}

func Test_Surrealdb_IsTableNotFoundError(t *testing.T) {
	require.False(t, isTableNotFoundError(nil, "fiber_storage"))
	require.False(t, isTableNotFoundError(errors.New("connection refused"), "fiber_storage"))
	require.False(t, isTableNotFoundError(errors.New("the table does not"), "fiber_storage"))
	require.False(t, isTableNotFoundError(errors.New("something does not exist"), "fiber_storage"))
	require.False(t, isTableNotFoundError(errors.New("The table 'other' does not exist"), "fiber_storage"))

	require.True(t, isTableNotFoundError(errors.New("The table 'fiber_storage' does not exist"), "fiber_storage"))
	require.True(t, isTableNotFoundError(errors.New("The table 'FIBER_Storage' does not exist"), "fiber_storage"))
	// An empty table name matches any missing table.
	require.True(t, isTableNotFoundError(errors.New("The table 'other' does not exist"), ""))
}

func Test_Surrealdb_NewWithContext_ConnectFails(t *testing.T) {
	addr := closedListenerAddr(t)

	require.Panics(t, func() {
		NewWithContext(context.Background(), Config{ConnectionString: "ws://" + addr})
	})

	ctx, cancel := context.WithCancel(context.Background())
	cancel()
	require.Panics(t, func() {
		NewWithContext(ctx, Config{ConnectionString: "ws://" + addr})
	})
}

func Test_Surrealdb_NewWithContext_CancelledContext(t *testing.T) {
	cfg := newTestConfig(t)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()
	require.Panics(t, func() {
		NewWithContext(ctx, cfg)
	})
}

func Test_Surrealdb_NewWithContext_BadCredentials(t *testing.T) {
	cfg := newTestConfig(t)
	cfg.Password = "definitely-not-the-password"

	require.Panics(t, func() {
		New(cfg)
	})
}

func Test_Surrealdb_EmptyKeyAndValue(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	// Empty keys and values are ignored without error.
	require.NoError(t, testStore.Set("", []byte("value"), 0))
	require.NoError(t, testStore.Set("key", nil, 0))
	require.NoError(t, testStore.Set("key", []byte{}, 0))
	require.NoError(t, testStore.Delete(""))

	val, err := testStore.Get("")
	require.NoError(t, err)
	require.Nil(t, val)

	val, err = testStore.Get("key")
	require.NoError(t, err)
	require.Nil(t, val)

	data, err := testStore.List()
	require.NoError(t, err)

	var result map[string][]byte
	require.NoError(t, json.Unmarshal(data, &result))
	require.Empty(t, result)
}

func Test_Surrealdb_ListReturnsValues(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	require.NoError(t, testStore.Set("a", []byte("1"), 0))
	require.NoError(t, testStore.Set("b", []byte("2"), time.Hour))

	data, err := testStore.List()
	require.NoError(t, err)

	var result map[string][]byte
	require.NoError(t, json.Unmarshal(data, &result))
	require.Equal(t, map[string][]byte{"a": []byte("1"), "b": []byte("2")}, result)

	require.NoError(t, testStore.Reset())

	data, err = testStore.List()
	require.NoError(t, err)
	require.JSONEq(t, `{}`, string(data))
}

func Test_Surrealdb_SetOverwritesAndRoundsSubSecondExpiry(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	require.NoError(t, testStore.Set("key", []byte("first"), 0))
	require.NoError(t, testStore.Set("key", []byte("second"), 0))

	val, err := testStore.Get("key")
	require.NoError(t, err)
	require.Equal(t, []byte("second"), val)

	// A sub-second expiration is rounded up rather than stored as already past.
	require.NoError(t, testStore.Set("short", []byte("value"), 500*time.Millisecond))

	rec, err := surrealdbclient.Select[model](context.Background(), testStore.Conn(), models.NewRecordID(testStore.table, "short"))
	require.NoError(t, err)
	require.NotNil(t, rec)
	require.Greater(t, rec.Exp, time.Now().Unix()-1)
	require.LessOrEqual(t, rec.Exp, time.Now().Unix()+2)
}

func Test_Surrealdb_OperationsAfterClose(t *testing.T) {
	testStore := newTestStore(t)
	require.NoError(t, testStore.Close())

	ctx := context.Background()

	_, err := testStore.Get("key")
	require.ErrorIs(t, err, ErrClosed)
	_, err = testStore.GetWithContext(ctx, "key")
	require.ErrorIs(t, err, ErrClosed)
	require.ErrorIs(t, testStore.Set("key", []byte("v"), 0), ErrClosed)
	require.ErrorIs(t, testStore.SetWithContext(ctx, "key", []byte("v"), 0), ErrClosed)
	require.ErrorIs(t, testStore.Delete("key"), ErrClosed)
	require.ErrorIs(t, testStore.DeleteWithContext(ctx, "key"), ErrClosed)
	require.ErrorIs(t, testStore.Reset(), ErrClosed)
	require.ErrorIs(t, testStore.ResetWithContext(ctx), ErrClosed)
	_, err = testStore.List()
	require.ErrorIs(t, err, ErrClosed)
}

func Test_Surrealdb_CancelledContext(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	require.NoError(t, testStore.Set("key", []byte("value"), 0))

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	val, err := testStore.GetWithContext(ctx, "key")
	require.Error(t, err)
	require.Nil(t, val)

	require.Error(t, testStore.SetWithContext(ctx, "key", []byte("other"), 0))
	require.Error(t, testStore.DeleteWithContext(ctx, "key"))
	require.Error(t, testStore.ResetWithContext(ctx))

	// None of the cancelled operations took effect.
	val, err = testStore.Get("key")
	require.NoError(t, err)
	require.Equal(t, []byte("value"), val)
}

func Test_Surrealdb_BrokenConnection(t *testing.T) {
	// A client that is closed behind the storage's back.
	broken := newTestStore(t)
	require.NoError(t, broken.Conn().Close(context.Background()))

	store := NewFromConnection(broken.Conn(), Config{DefaultTable: "broken"})
	defer store.Close()

	_, err := store.Get("key")
	require.Error(t, err)
	require.False(t, errors.Is(err, ErrClosed))
	require.Error(t, store.Set("key", []byte("v"), 0))
	require.Error(t, store.Delete("key"))
	require.Error(t, store.Reset())
	_, err = store.List()
	require.Error(t, err)

	// The owner's operations fail on the dead client with the client's error, not ErrClosed.
	_, err = broken.Get("key")
	require.Error(t, err)
	require.False(t, errors.Is(err, ErrClosed))
	require.False(t, broken.isClosed())

	// Closing the owner still completes and latches it closed.
	require.NoError(t, broken.Close())
	require.True(t, broken.isClosed())
	_, err = broken.Get("key")
	require.ErrorIs(t, err, ErrClosed)
}

func Test_Surrealdb_GarbageCollector_DeletesExpiredRecords(t *testing.T) {
	cfg := newTestConfig(t)
	cfg.GCInterval = 100 * time.Millisecond
	testStore := New(cfg)
	defer testStore.Close()

	require.NoError(t, testStore.Set("temp", []byte("value"), time.Second))
	require.NoError(t, testStore.Set("keep", []byte("value"), 0))

	// Read the raw record: Get hides expired values, so only the collector's delete empties it.
	require.Eventually(t, func() bool {
		rec, err := surrealdbclient.Select[model](context.Background(), testStore.Conn(), models.NewRecordID(testStore.table, "temp"))
		return err == nil && rec == nil
	}, 10*time.Second, 100*time.Millisecond)

	val, err := testStore.Get("keep")
	require.NoError(t, err)
	require.Equal(t, []byte("value"), val)
}

func Test_Surrealdb_CleanupExpired(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	ctx := context.Background()
	now := time.Now().Unix()

	for key, exp := range map[string]int64{"past": now - 10, "future": now + 3600, "forever": 0} {
		_, err := surrealdbclient.Upsert[model](ctx, testStore.Conn(), models.NewRecordID(testStore.table, key), &model{Key: key, Body: []byte(key), Exp: exp})
		require.NoError(t, err)
	}

	testStore.cleanupExpired(ctx)

	rec, err := surrealdbclient.Select[model](ctx, testStore.Conn(), models.NewRecordID(testStore.table, "past"))
	require.NoError(t, err)
	require.Nil(t, rec)

	for _, key := range []string{"future", "forever"} {
		rec, err = surrealdbclient.Select[model](ctx, testStore.Conn(), models.NewRecordID(testStore.table, key))
		require.NoError(t, err)
		require.NotNil(t, rec, key)
	}
}

func Test_Surrealdb_CleanupExpired_Errors(t *testing.T) {
	cfg := newTestConfig(t)
	cfg.GCInterval = time.Hour
	testStore := New(cfg)
	defer testStore.Close()

	var buf bytes.Buffer
	log.SetOutput(&buf)
	defer log.SetOutput(os.Stderr)

	// A cancelled sweep is an ordinary shutdown and is not logged.
	ctx, cancel := context.WithCancel(context.Background())
	cancel()
	testStore.cleanupExpired(ctx)
	require.Empty(t, buf.String())

	// Any other failure is logged.
	broken := New(newTestConfig(t))
	require.NoError(t, broken.Conn().Close(context.Background()))
	defer broken.Close()
	broken.cleanupExpired(context.Background())
	require.Contains(t, buf.String(), "surrealdb: expiry cleanup failed")
}
