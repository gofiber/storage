package arangodb

import (
	"context"
	"errors"
	"net"
	"net/url"
	"os"
	"strconv"
	"sync/atomic"
	"testing"
	"time"

	driver "github.com/arangodb/go-driver"
	"github.com/stretchr/testify/require"
	"github.com/testcontainers/testcontainers-go"
	"github.com/testcontainers/testcontainers-go/modules/arangodb"
)

const (
	// arangoDB is the default image used for running arangoDB in tests.
	arangoDBImage       = "public.ecr.aws/docker/library/arangodb:latest"
	arangoDBImageEnvVar = "TEST_ARANGODB_IMAGE"
	arangoDBPassword    = "test"
)

func newTestConfig(t testing.TB) Config {
	t.Helper()

	img := arangoDBImage
	if imgFromEnv := os.Getenv(arangoDBImageEnvVar); imgFromEnv != "" {
		img = imgFromEnv
	}

	ctx := context.Background()

	arangodbContainer, err := arangodb.Run(ctx, img, arangodb.WithRootPassword(arangoDBPassword))
	testcontainers.CleanupContainer(t, arangodbContainer)
	require.NoError(t, err)

	endpoint, err := arangodbContainer.HTTPEndpoint(ctx)
	require.NoError(t, err)

	parsedURL, err := url.Parse(endpoint)
	require.NoError(t, err)
	host := parsedURL.Scheme + "://" + parsedURL.Hostname()
	port := parsedURL.Port()

	iPort, err := strconv.Atoi(port)
	require.NoError(t, err)

	return Config{
		Host:     host,
		Port:     iPort,
		Username: "root",
		Password: arangoDBPassword,
	}
}

func newTestStore(t testing.TB) *Storage {
	t.Helper()
	return New(newTestConfig(t))
}

func Test_ArangoDB_NewWithContext(t *testing.T) {
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

func Test_ArangoDB_Set(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)
}

func Test_ArangoDB_SetWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err := testStore.SetWithContext(ctx, key, val, 0)
	require.ErrorIs(t, err, context.Canceled)
}

func Test_ArangoDB_Upsert(t *testing.T) {
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

func Test_ArangoDB_Get(t *testing.T) {
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

func Test_ArangoDB_GetWithContext(t *testing.T) {
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

	result, err := testStore.GetWithContext(ctx, key)
	require.ErrorIs(t, err, context.Canceled)
	require.Zero(t, len(result))
}

func Test_ArangoDB_Set_Expiration(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
		exp = 1 * time.Second
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set(key, val, exp)
	require.NoError(t, err)

	// Assert on the store the key was written to; the deadline rounds up, so it may outlive it by a second.
	deadline := time.Now().Add(4 * time.Second)
	for {
		result, err := testStore.Get(key)
		require.NoError(t, err)
		require.False(t, time.Now().After(deadline), "key should have expired")
		if len(result) == 0 {
			break
		}
		time.Sleep(100 * time.Millisecond)
	}
}

func Test_ArangoDB_Get_Expired(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	require.NoError(t, testStore.Set("john", []byte("doe"), time.Second))

	deadline := time.Now().Add(4 * time.Second)
	for {
		result, err := testStore.Get("john")
		require.NoError(t, err)
		require.False(t, time.Now().After(deadline), "key should have expired")
		if len(result) == 0 {
			return
		}
		time.Sleep(100 * time.Millisecond)
	}
}

func Test_ArangoDB_Get_NotExist(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	result, err := testStore.Get("notexist")
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_ArangoDB_Delete(t *testing.T) {
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

func Test_ArangoDB_DeleteWithContext(t *testing.T) {
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

func Test_ArangoDB_Reset(t *testing.T) {
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

func Test_ArangoDB_ResetWithContext(t *testing.T) {
	val := []byte("doe")

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set("john1", val, 0)
	require.NoError(t, err)

	err = testStore.Set("john2", val, 0)
	require.Equal(t, err, nil)

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

func Test_ArangoDB_Non_UTF8(t *testing.T) {
	val := []byte("0xF5")

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set("0xF6", val, 0)
	require.NoError(t, err)

	result, err := testStore.Get("0xF6")
	require.NoError(t, err)
	require.Equal(t, val, result)
}

func Test_ArangoDB_Close(t *testing.T) {
	testStore := newTestStore(t)
	require.Nil(t, testStore.Close())
}

func Test_ArangoDB_Conn(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	require.True(t, testStore.Conn() != nil)
}

func Benchmark_ArangoDB_Set(b *testing.B) {
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

func Benchmark_ArangoDB_Get(b *testing.B) {
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

func Benchmark_ArangoDB_SetAndDelete(b *testing.B) {
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

func Test_ArangoDB_Close_Twice(t *testing.T) {
	testStore := newTestStore(t)

	require.NoError(t, testStore.Close())
	require.NotPanics(t, func() {
		require.NoError(t, testStore.Close())
	})
}

func Test_ArangoDB_NewFromConnection(t *testing.T) {
	owner := newTestStore(t)
	defer owner.Close()

	// Host is a leftover from a dialing config: the borrowed path documents it as
	// ignored, so a value the dialing validation would reject must not panic here.
	testStore := NewFromConnection(owner.Conn(), Config{Collection: "fiber_storage_existing", Host: "127.0.0.1"})
	require.True(t, owner.Conn() == testStore.Conn())

	require.NoError(t, testStore.Set("john", []byte("doe"), 0))

	result, err := testStore.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), result)

	// ArangoDB has no connection to close, so the owner keeps working either way.
	require.NoError(t, testStore.Close())
	require.NoError(t, owner.Set("jane", []byte("doe"), 0))
}

func Test_ArangoDB_NewFromConnection_Nil(t *testing.T) {
	require.Panics(t, func() {
		NewFromConnection(nil)
	})
}

// errBoom is the failure the stubs below inject.
var errBoom = errors.New("boom")

// stubArango configures stubClient, stubDatabase and stubCollection, which implement just the driver calls
// that newStorage and the storage operations make; any other call panics through the nil embedded interface.
// Initialization succeeds except for the call named in failAt, which returns errBoom, while every operation
// (query, read, remove, truncate) fails. The database and collection are reported as missing only when
// failAt is their creation, so that call is reached.
type stubArango struct {
	failAt  string
	queries atomic.Int32 // counts Query calls; the collector makes them concurrently with the test
}

// initErr returns errBoom if call is the initialization call to fail.
func (s *stubArango) initErr(call string) error {
	if call == s.failAt {
		return errBoom
	}
	return nil
}

type stubClient struct {
	driver.Client
	*stubArango
}

func (stubClient) Connection() driver.Connection { return nil }

func (c stubClient) DatabaseExists(context.Context, string) (bool, error) {
	return c.failAt != "CreateDatabase", c.initErr("DatabaseExists")
}

func (c stubClient) CreateDatabase(context.Context, string, *driver.CreateDatabaseOptions) (driver.Database, error) {
	return stubDatabase{stubArango: c.stubArango}, c.initErr("CreateDatabase")
}

func (c stubClient) Database(context.Context, string) (driver.Database, error) {
	return stubDatabase{stubArango: c.stubArango}, c.initErr("Database")
}

type stubDatabase struct {
	driver.Database
	*stubArango
}

func (d stubDatabase) CollectionExists(context.Context, string) (bool, error) {
	return d.failAt != "CreateCollection", d.initErr("CollectionExists")
}

func (d stubDatabase) CreateCollection(context.Context, string, *driver.CreateCollectionOptions) (driver.Collection, error) {
	return stubCollection{}, d.initErr("CreateCollection")
}

func (d stubDatabase) Collection(context.Context, string) (driver.Collection, error) {
	return stubCollection{}, d.initErr("Collection")
}

func (d stubDatabase) Query(context.Context, string, map[string]any) (driver.Cursor, error) {
	d.queries.Add(1)
	return nil, errBoom
}

type stubCollection struct{ driver.Collection }

func (stubCollection) Name() string { return "fiber_storage" }

func (stubCollection) Truncate(context.Context) error { return errBoom }

func (stubCollection) ReadDocument(context.Context, string, any) (driver.DocumentMeta, error) {
	return driver.DocumentMeta{}, errBoom
}

func (stubCollection) RemoveDocument(context.Context, string) (driver.DocumentMeta, error) {
	return driver.DocumentMeta{}, errBoom
}

func Test_ArangoDB_Init_Failures(t *testing.T) {
	tests := []struct {
		name   string
		reset  bool
		failAt string // the initialization call that fails; empty when only the operations do
	}{
		{name: "database exists check fails", failAt: "DatabaseExists"},
		{name: "database creation fails", failAt: "CreateDatabase"},
		{name: "database lookup fails", failAt: "Database"},
		{name: "collection exists check fails", failAt: "CollectionExists"},
		{name: "collection creation fails", failAt: "CreateCollection"},
		{name: "collection lookup fails", failAt: "Collection"},
		{name: "reset truncate fails", reset: true},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			client := stubClient{stubArango: &stubArango{failAt: tt.failAt}}

			// Only the named call fails, so the panic shows newStorage got that far and passed its error on as is.
			require.PanicsWithValue(t, errBoom, func() {
				NewFromConnection(client, Config{Reset: tt.reset, GCInterval: time.Hour})
			})
		})
	}
}

func Test_ArangoDB_New_Unreachable(t *testing.T) {
	// Grab a free port, then close the listener so nothing answers on it.
	l, err := net.Listen("tcp", "127.0.0.1:0")
	require.NoError(t, err)
	port := l.Addr().(*net.TCPAddr).Port
	require.NoError(t, l.Close())

	require.Panics(t, func() {
		New(Config{Host: "http://127.0.0.1", Port: port})
	})
}

func Test_ArangoDB_New_InvalidEndpoint(t *testing.T) {
	// Passes the Host prefix check but is not a parseable endpoint, so connection setup fails.
	require.Panics(t, func() {
		New(Config{Host: "http://[::1", Port: 8529})
	})
}

func Test_ArangoDB_Config_Invalid_Host(t *testing.T) {
	require.PanicsWithValue(t, "Host should start with `http://` or `https://`", func() {
		New(Config{Host: "127.0.0.1"})
	})
}

func Test_ArangoDB_ConfigDefault(t *testing.T) {
	require.Equal(t, ConfigDefault, configDefault())

	cfg := configDefault(Config{})
	require.Equal(t, ConfigDefault, cfg)

	full := Config{
		Host:       "https://db.example.com",
		Port:       1234,
		Username:   "u",
		Password:   "p",
		Database:   "d",
		Collection: "c",
		Reset:      true,
		GCInterval: time.Minute,
	}
	require.Equal(t, full, configDefault(full))

	cfg = configDefault(Config{Host: "http://h", Port: -5, GCInterval: -time.Second})
	require.Equal(t, 8529, cfg.Port)
	require.Equal(t, 10*time.Second, cfg.GCInterval)
}

// Test_ArangoDB_Storage_Behavior shares one container across the scenarios that need a real server.
func Test_ArangoDB_Storage_Behavior(t *testing.T) {
	cfg := newTestConfig(t)
	owner := New(cfg)
	defer owner.Close()

	t.Run("empty key and value are no-ops", func(t *testing.T) {
		require.NoError(t, owner.Set("", []byte("v"), 0))
		require.NoError(t, owner.Set("k", nil, 0))
		require.NoError(t, owner.Set("k", []byte{}, 0))
		require.NoError(t, owner.Delete(""))

		val, err := owner.Get("")
		require.NoError(t, err)
		require.Nil(t, val)

		val, err = owner.Get("k")
		require.NoError(t, err)
		require.Nil(t, val)
	})

	t.Run("delete missing key", func(t *testing.T) {
		require.NoError(t, owner.Delete("never-existed"))
	})

	t.Run("overwrite replaces value and expiration", func(t *testing.T) {
		require.NoError(t, owner.Set("ow", []byte("one"), time.Hour))
		require.NoError(t, owner.Set("ow", []byte("two"), 0))

		val, err := owner.Get("ow")
		require.NoError(t, err)
		require.Equal(t, []byte("two"), val)

		var m model
		_, err = owner.collection.ReadDocument(context.Background(), "ow", &m)
		require.NoError(t, err)
		require.Zero(t, m.Exp, "second Set without expiration must clear the deadline")
	})

	t.Run("expiration is stored as a future unix deadline", func(t *testing.T) {
		before := time.Now().Unix()
		require.NoError(t, owner.Set("exp", []byte("v"), 500*time.Millisecond))

		var m model
		_, err := owner.collection.ReadDocument(context.Background(), "exp", &m)
		require.NoError(t, err)
		require.Greater(t, m.Exp, before, "sub-second expiration must round up past now")
		require.LessOrEqual(t, m.Exp, time.Now().Unix()+2)
	})

	t.Run("existing collection is reused and reset keeps database", func(t *testing.T) {
		require.NoError(t, owner.Set("shared", []byte("v"), 0))

		// Same collection and database as owner: it already exists, so it is looked up, not created.
		reuse := NewFromConnection(owner.Conn(), Config{})
		defer reuse.Close()
		val, err := reuse.Get("shared")
		require.NoError(t, err)
		require.Equal(t, []byte("v"), val)

		// Reset truncates the existing collection on construction.
		fresh := NewFromConnection(owner.Conn(), Config{Reset: true})
		defer fresh.Close()
		val, err = fresh.Get("shared")
		require.NoError(t, err)
		require.Nil(t, val)
	})

	t.Run("missing database is created", func(t *testing.T) {
		s := NewFromConnection(owner.Conn(), Config{Database: "fiber_extra_db", Collection: "extra_coll"})
		defer s.Close()

		exists, err := owner.Conn().DatabaseExists(context.Background(), "fiber_extra_db")
		require.NoError(t, err)
		require.True(t, exists)

		require.NoError(t, s.Set("k", []byte("v"), 0))
		val, err := s.Get("k")
		require.NoError(t, err)
		require.Equal(t, []byte("v"), val)

		// Keys are isolated per database.
		val, err = owner.Get("k")
		require.NoError(t, err)
		require.Nil(t, val)
	})

	t.Run("gc removes expired keys and keeps the rest", func(t *testing.T) {
		s := NewFromConnection(owner.Conn(), Config{Collection: "gc_coll", GCInterval: 50 * time.Millisecond})
		defer s.Close()

		require.NoError(t, s.Set("long", []byte("v"), time.Hour))
		require.NoError(t, s.Set("forever", []byte("v"), 0))
		// Written last and already expired, so the sweep that removes it has also seen the other two.
		_, err := s.collection.CreateDocument(context.Background(), &model{Key: "short", Val: "v", Exp: time.Now().Unix() - 10})
		require.NoError(t, err)

		// Look at the collection directly: Get already hides expired keys, so only a document
		// that is physically gone proves the sweep ran.
		require.Eventually(t, func() bool {
			_, err := s.collection.ReadDocument(context.Background(), "short", &model{})
			return isDocumentNotFound(err)
		}, 15*time.Second, 50*time.Millisecond, "expired document should have been swept")

		for _, key := range []string{"long", "forever"} {
			val, err := s.Get(key)
			require.NoError(t, err)
			require.Equal(t, []byte("v"), val, key)
		}
	})

	t.Run("get hides expired document before it is swept", func(t *testing.T) {
		s := NewFromConnection(owner.Conn(), Config{Collection: "expired_coll", GCInterval: time.Hour})
		defer s.Close()

		// Write an already-expired document directly, bypassing Set's rounding.
		_, err := s.collection.CreateDocument(context.Background(), &model{Key: "old", Val: "v", Exp: time.Now().Unix() - 10})
		require.NoError(t, err)

		val, err := s.Get("old")
		require.NoError(t, err)
		require.Nil(t, val)
	})

	t.Run("operations fail after Close", func(t *testing.T) {
		s := NewFromConnection(owner.Conn(), Config{Collection: "closed_coll"})
		require.NoError(t, s.Set("k", []byte("v"), 0))
		require.NoError(t, s.Close())

		_, err := s.Get("k")
		require.ErrorIs(t, err, ErrClosed)
		require.ErrorIs(t, s.Set("k", []byte("v2"), 0), ErrClosed)
		require.ErrorIs(t, s.Delete("k"), ErrClosed)
		require.ErrorIs(t, s.Reset(), ErrClosed)

		// Empty-argument short circuits still win over the closed check.
		require.NoError(t, s.Set("", []byte("v"), 0))
		require.NoError(t, s.Delete(""))

		// The data was left untouched, and the owner can still read it.
		other := NewFromConnection(owner.Conn(), Config{Collection: "closed_coll"})
		defer other.Close()
		val, err := other.Get("k")
		require.NoError(t, err)
		require.Equal(t, []byte("v"), val)
	})

	t.Run("dropped collection surfaces errors instead of misses", func(t *testing.T) {
		s := NewFromConnection(owner.Conn(), Config{Collection: "dropped_coll", GCInterval: time.Hour})
		defer s.Close()
		require.NoError(t, s.Set("k", []byte("v"), 0))

		require.NoError(t, s.collection.Remove(context.Background()))

		val, err := s.Get("k")
		require.Error(t, err)
		require.Nil(t, val)
		require.False(t, isDocumentNotFound(err))

		require.Error(t, s.Delete("k"))
		require.Error(t, s.Set("k", []byte("v"), 0))
		require.Error(t, s.Reset())
	})
}

func Test_ArangoDB_Unreachable_Operations(t *testing.T) {
	// A store whose server fails every operation: each one reports the failure.
	stub := &stubArango{}
	s := NewFromConnection(stubClient{stubArango: stub}, Config{GCInterval: 50 * time.Millisecond})
	defer s.Close()

	val, err := s.Get("k")
	require.ErrorIs(t, err, errBoom)
	require.Nil(t, val)

	require.ErrorIs(t, s.Set("k", []byte("v"), 0), errBoom)
	require.ErrorIs(t, s.Delete("k"), errBoom)
	require.ErrorIs(t, s.Reset(), errBoom)

	// Set made one query, so a third is the collector sweeping again after a failed sweep. Close
	// must still return promptly.
	require.Eventually(t, func() bool { return stub.queries.Load() > 2 }, 15*time.Second, 10*time.Millisecond)
	done := make(chan error, 1)
	go func() { done <- s.Close() }()
	select {
	case err := <-done:
		require.NoError(t, err)
	case <-time.After(5 * time.Second):
		t.Fatal("Close did not return")
	}
}
