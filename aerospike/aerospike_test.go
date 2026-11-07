package aerospike

import (
	"context"
	"math"
	"net"
	"os"
	"strconv"
	"strings"
	"testing"
	"time"

	"github.com/aerospike/aerospike-client-go/v8"
	"github.com/stretchr/testify/require"
	"github.com/testcontainers/testcontainers-go"
	tcexec "github.com/testcontainers/testcontainers-go/exec"
	tcaerospike "github.com/testcontainers/testcontainers-go/modules/aerospike"
)

const (
	// aerospikeImage is the default image used for running Aerospike in tests.
	aerospikeImage              = "aerospike/aerospike-server:latest"
	aerospikeImageEnvVar string = "TEST_AEROSPIKE_IMAGE"
	aerospikePort               = "3000/tcp"
	fabricPort                  = "3001/tcp"
	heartbeatPort               = "3002/tcp"
	infoPort                    = "3003/tcp"
	aerospikeReadyLog           = "migrations: complete"
	aerospikeNamespace          = "test"
)

// startAerospikeContainer starts an Aerospike container for testing
func startAerospikeContainer(t testing.TB, ctx context.Context) testcontainers.Container {
	t.Helper()

	// Get custom image from env if specified
	image := aerospikeImage
	if envImage := os.Getenv(aerospikeImageEnvVar); envImage != "" {
		image = envImage
	}

	// Start container
	ctr, err := tcaerospike.Run(ctx, image,
		testcontainers.WithStartupCommand(
			testcontainers.NewRawCommand([]string{
				"asinfo", "-v", "set-config:context=namespace;id=" + aerospikeNamespace + ";nsup-period=120",
			}, tcexec.Multiplexed()),
		),
	)
	testcontainers.CleanupContainer(t, ctr)
	require.NoError(t, err)

	return ctr
}

// newTestHostPort starts a container and returns its mapped Aerospike address.
func newTestHostPort(t testing.TB) (string, int) {
	t.Helper()

	ctx := context.Background()
	c := startAerospikeContainer(t, ctx)

	host, err := c.Host(ctx)
	require.NoError(t, err)

	port, err := c.MappedPort(ctx, aerospikePort)
	require.NoError(t, err)

	return host, int(port.Num())
}

// newTestStore creates a client connected to the test container
func newTestStore(t testing.TB) *Storage {
	t.Helper()

	host, port := newTestHostPort(t)

	return New(Config{
		Hosts:     []*aerospike.Host{aerospike.NewHost(host, port)},
		Reset:     true,
		Namespace: aerospikeNamespace,
	})
}

// Test_AeroSpikeDB_Get tests the Get method
func Test_AeroSpikeDB_Get(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	// Set a value
	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	// Get the value
	retrievedVal, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, retrievedVal)
}

// Test_AeroSpikeDB_Delete tests the Delete method
func Test_AeroSpikeDB_Delete(t *testing.T) {

	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	// Set a value
	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	// Delete the value
	err = testStore.Delete(key)
	require.NoError(t, err)

	// Try to get the deleted value
	retrievedVal, err := testStore.Get(key)
	require.NoError(t, err)
	require.Nil(t, retrievedVal)
}

// Test_AeroSpikeDB_SetWithExpiration tests the Set method with expiration
func Test_AeroSpikeDB_SetWithExpiration(t *testing.T) {
	var (
		key = "temp"
		val = []byte("value")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	// Set a value with 1 second expiration
	err := testStore.Set(key, val, 1*time.Second)
	require.NoError(t, err)

	// Verify the value exists initially
	retrievedVal, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, retrievedVal)

	// Wait for expiration
	time.Sleep(2 * time.Second)

	// Verify the value is gone
	retrievedVal, err = testStore.Get(key)
	require.NoError(t, err)
	require.Nil(t, retrievedVal)
}

// Test_AeroSpikeDB_Reset tests the Reset method
func Test_AeroSpikeDB_Reset(t *testing.T) {

	var (
		key1 = "john"
		val1 = []byte("doe")
		key2 = "jane"
		val2 = []byte("smith")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	schemaBefore := testStore.GetSchemaInfo()
	require.NotNil(t, schemaBefore)

	// Set multiple values
	err := testStore.Set(key1, val1, 0)
	require.NoError(t, err)
	err = testStore.Set(key2, val2, 0)
	require.NoError(t, err)

	// Reset the store
	err = testStore.Reset()
	require.NoError(t, err)

	// Ensure keys are deleted
	retrievedVal1, err := testStore.Get(key1)
	require.NoError(t, err)
	require.Nil(t, retrievedVal1)

	retrievedVal2, err := testStore.Get(key2)
	require.NoError(t, err)
	require.Nil(t, retrievedVal2)

	// The bookkeeping record lives in its own set, which the scan Reset runs does not touch.
	schemaKey, err := aerospike.NewKey(testStore.namespace, testStore.schemaSetName, schemaInfoKey)
	require.NoError(t, err)
	schemaRecord, err := testStore.client.Get(nil, schemaKey, "version")
	require.NoError(t, err)
	require.NotNil(t, schemaRecord)
	require.Equal(t, schemaBefore.Version, schemaRecord.Bins["version"].(int))
}

// A SetName carrying the schema suffix is refused: it would make one storage's data another's bookkeeping set.
func Test_AeroSpikeDB_Rejects_Reserved_SetName(t *testing.T) {
	require.Panics(t, func() {
		New(Config{
			Hosts:     []*aerospike.Host{aerospike.NewHost("127.0.0.1", 3000)},
			Namespace: "test",
			SetName:   "orders" + schemaSetSuffix,
		})
	})
}

// A set name the server accepts must still yield a bookkeeping set it accepts.
func Test_AeroSpikeDB_SchemaSetName_Bounded(t *testing.T) {
	short := strings.Repeat("a", 40)
	require.Equal(t, short+schemaSetSuffix, schemaSetName(short))

	for _, n := range []int{maxSetNameLen - len(schemaSetSuffix), maxSetNameLen - len(schemaSetSuffix) + 1, maxSetNameLen} {
		name := strings.Repeat("b", n)
		derived := schemaSetName(name)

		require.LessOrEqual(t, len(derived), maxSetNameLen)
		require.True(t, strings.HasSuffix(derived, schemaSetSuffix))
	}

	first := strings.Repeat("c", maxSetNameLen-1) + "1"
	second := strings.Repeat("c", maxSetNameLen-1) + "2"
	require.NotEqual(t, schemaSetName(first), schemaSetName(second))
}

// The bookkeeping name is an ordinary key for callers: readable, and cleared by Reset like any other.
func Test_AeroSpikeDB_SchemaInfoKey_Is_Not_Reserved(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	require.NoError(t, testStore.Set(schemaInfoKey, []byte("user value"), 0))

	val, err := testStore.Get(schemaInfoKey)
	require.NoError(t, err)
	require.Equal(t, []byte("user value"), val)

	require.NoError(t, testStore.Reset())

	val, err = testStore.Get(schemaInfoKey)
	require.NoError(t, err)
	require.Nil(t, val)

	require.NotNil(t, testStore.GetSchemaInfo())
}

// Test_AeroSpikeDB_GetSchemaInfo tests the GetSchemaInfo method
func Test_AeroSpikeDB_GetSchemaInfo(t *testing.T) {

	testStore := newTestStore(t)
	defer testStore.Close()

	// Get schema info
	schemaInfo := testStore.GetSchemaInfo()
	require.NotNil(t, schemaInfo)
	require.GreaterOrEqual(t, schemaInfo.Version, 1)
}

func Benchmark_AeroSpikeDB_Set(b *testing.B) {
	b.ReportAllocs()
	b.ResetTimer()

	testStore := newTestStore(b)
	defer testStore.Close()

	var err error
	for i := 0; i < b.N; i++ {
		err = testStore.Set("john", []byte("doe"), 0)
	}

	require.NoError(b, err)
}

func Benchmark_AeroSpikeDB_Get(b *testing.B) {
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

func Benchmark_AeroSpikeDB_SetAndDelete(b *testing.B) {
	b.ReportAllocs()
	b.ResetTimer()

	testStore := newTestStore(b)
	defer testStore.Close()

	var err error
	for i := 0; i < b.N; i++ {
		_ = testStore.Set("john", []byte("doe"), 0)
		err = testStore.Delete("john")
	}

	require.NoError(b, err)
}

func Test_Aerospike_WithContext_Canceled(t *testing.T) {
	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	// No server needed: an already cancelled context is rejected before the storage is touched.
	testStore := &Storage{}

	require.ErrorIs(t, testStore.SetWithContext(ctx, "john", []byte("doe"), 0), context.Canceled)

	_, err := testStore.GetWithContext(ctx, "john")
	require.ErrorIs(t, err, context.Canceled)

	require.ErrorIs(t, testStore.DeleteWithContext(ctx, "john"), context.Canceled)
	require.ErrorIs(t, testStore.ResetWithContext(ctx), context.Canceled)
}

func Test_AeroSpikeDB_NewFromConnection(t *testing.T) {
	host, port := newTestHostPort(t)

	client, cerr := aerospike.NewClient(host, port)
	require.NoError(t, cerr)
	defer client.Close()

	store := NewFromConnection(client, Config{
		Namespace: aerospikeNamespace,
		SetName:   "existing_set",
		Reset:     true,
	})

	require.NoError(t, store.Set("john", []byte("doe"), 0))

	result, err := store.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), result)

	// The client is the caller's, so closing the storage must leave it connected.
	require.NoError(t, store.Close())
	require.True(t, client.IsConnected())
	require.ErrorIs(t, store.Set("jane", []byte("doe"), 0), ErrClosed)
}

func Test_AeroSpikeDB_NewFromConnection_Nil(t *testing.T) {
	require.Panics(t, func() {
		NewFromConnection(nil)
	})
}

// closedPortHost returns a host:port nothing is listening on.
func closedPortHost(t testing.TB) (string, int) {
	t.Helper()

	ln, err := net.Listen("tcp", "127.0.0.1:0")
	require.NoError(t, err)

	host, portStr, err := net.SplitHostPort(ln.Addr().String())
	require.NoError(t, err)
	require.NoError(t, ln.Close())

	port, err := strconv.Atoi(portStr)
	require.NoError(t, err)

	return host, port
}

// newUnreachableClient returns a client that was created without connecting to any node,
// so every operation on it fails with a server error and no container is needed.
func newUnreachableClient(t testing.TB) *aerospike.Client {
	t.Helper()

	host, port := closedPortHost(t)

	cp := aerospike.NewClientPolicy()
	cp.FailIfNotConnected = false
	cp.Timeout = 200 * time.Millisecond

	// With FailIfNotConnected off the client is returned alongside the connection error.
	client, aerr := aerospike.NewClientWithPolicyAndHost(cp, aerospike.NewHost(host, port))
	require.NotNil(t, aerr)
	require.NotNil(t, client)
	require.False(t, client.IsConnected())
	t.Cleanup(client.Close)

	return client
}

// newUnreachableStorage returns a Storage over an unreachable client, bypassing schema setup.
func newUnreachableStorage(t testing.TB) *Storage {
	t.Helper()

	return &Storage{
		client:        newUnreachableClient(t),
		namespace:     aerospikeNamespace,
		setName:       "fiber",
		schemaSetName: schemaSetName("fiber"),
	}
}

func Test_AeroSpikeDB_ConfigDefault(t *testing.T) {
	t.Run("no config", func(t *testing.T) {
		require.Equal(t, ConfigDefault, configDefault())
	})

	t.Run("zero config is filled", func(t *testing.T) {
		cfg := configDefault(Config{})
		require.Equal(t, ConfigDefault.Hosts, cfg.Hosts)
		require.Equal(t, ConfigDefault.Namespace, cfg.Namespace)
		require.Equal(t, ConfigDefault.SetName, cfg.SetName)
		require.Equal(t, ConfigDefault.SchemaVersion, cfg.SchemaVersion)
		require.Equal(t, ConfigDefault.SchemaDescription, cfg.SchemaDescription)
		require.Equal(t, ConfigDefault.InitialConnectionTimeout, cfg.InitialConnectionTimeout)
		require.False(t, cfg.Reset)
		require.False(t, cfg.ForceSchemaUpdate)
	})

	t.Run("explicit values are kept", func(t *testing.T) {
		hosts := []*aerospike.Host{aerospike.NewHost("example.invalid", 4000)}
		cfg := configDefault(Config{
			Hosts:                    hosts,
			Namespace:                "ns",
			SetName:                  "set",
			Reset:                    true,
			SchemaVersion:            7,
			SchemaDescription:        "custom",
			ForceSchemaUpdate:        true,
			InitialConnectionTimeout: time.Second,
		})
		require.Equal(t, hosts, cfg.Hosts)
		require.Equal(t, "ns", cfg.Namespace)
		require.Equal(t, "set", cfg.SetName)
		require.True(t, cfg.Reset)
		require.Equal(t, 7, cfg.SchemaVersion)
		require.Equal(t, "custom", cfg.SchemaDescription)
		require.True(t, cfg.ForceSchemaUpdate)
		require.Equal(t, time.Second, cfg.InitialConnectionTimeout)
	})
}

// New must panic, rather than return a half-built storage, when the host cannot be reached.
func Test_AeroSpikeDB_New_UnreachableHost(t *testing.T) {
	host, port := closedPortHost(t)

	require.Panics(t, func() {
		New(Config{
			Hosts:                    []*aerospike.Host{aerospike.NewHost(host, port)},
			InitialConnectionTimeout: 200 * time.Millisecond,
		})
	})
}

func Test_AeroSpikeDB_NewFromConnection_Reserved_SetName(t *testing.T) {
	client := newUnreachableClient(t)

	require.Panics(t, func() {
		NewFromConnection(client, Config{SetName: "orders" + schemaSetSuffix})
	})
}

// Without a reachable server the Reset requested by the config cannot run, and that must not be swallowed.
func Test_AeroSpikeDB_NewFromConnection_Reset_Fails(t *testing.T) {
	client := newUnreachableClient(t)

	require.Panics(t, func() {
		NewFromConnection(client, Config{Namespace: aerospikeNamespace, Reset: true})
	})
}

func Test_AeroSpikeDB_NewFromConnection_Schema_Fails(t *testing.T) {
	client := newUnreachableClient(t)

	require.Panics(t, func() {
		NewFromConnection(client, Config{Namespace: aerospikeNamespace})
	})
}

func Test_AeroSpikeDB_Operations_Fail_Without_Server(t *testing.T) {
	store := newUnreachableStorage(t)

	_, err := store.Get("john")
	require.Error(t, err)

	require.Error(t, store.Set("john", []byte("doe"), 0))
	require.Error(t, store.Set("john", []byte("doe"), time.Minute))
	require.Error(t, store.Delete("john"))
	require.Error(t, store.Reset())

	ctx := context.Background()
	_, err = store.GetWithContext(ctx, "john")
	require.Error(t, err)
	require.Error(t, store.SetWithContext(ctx, "john", []byte("doe"), 0))
	require.Error(t, store.DeleteWithContext(ctx, "john"))
	require.Error(t, store.ResetWithContext(ctx))

	schemaKey, kerr := aerospike.NewKey(store.namespace, store.schemaSetName, schemaInfoKey)
	require.NoError(t, kerr)

	require.Error(t, store.createSchema(schemaKey, 1, "desc"))
	require.Nil(t, store.GetSchemaInfo())

	require.Error(t, store.updateSchema(schemaKey, 2, "desc", 1))
	require.Nil(t, store.GetSchemaInfo())

	require.Error(t, store.createOrVerifySchema(1, "desc", false))
	require.Nil(t, store.GetSchemaInfo())
}

func Test_AeroSpikeDB_Closed_Storage(t *testing.T) {
	store := newUnreachableStorage(t)
	require.NoError(t, store.Close())

	_, err := store.Get("john")
	require.ErrorIs(t, err, ErrClosed)
	require.ErrorIs(t, store.Set("john", []byte("doe"), 0), ErrClosed)
	require.ErrorIs(t, store.Delete("john"), ErrClosed)
	require.ErrorIs(t, store.Reset(), ErrClosed)

	ctx := context.Background()
	_, err = store.GetWithContext(ctx, "john")
	require.ErrorIs(t, err, ErrClosed)
	require.ErrorIs(t, store.SetWithContext(ctx, "john", []byte("doe"), 0), ErrClosed)
	require.ErrorIs(t, store.DeleteWithContext(ctx, "john"), ErrClosed)
	require.ErrorIs(t, store.ResetWithContext(ctx), ErrClosed)

	// A second Close is a no-op.
	require.NoError(t, store.Close())
}

// Test_AeroSpikeDB_Server runs the behaviors that need a real server against a single container.
func Test_AeroSpikeDB_Server(t *testing.T) {
	host, port := newTestHostPort(t)

	client, cerr := aerospike.NewClient(host, port)
	require.NoError(t, cerr)
	t.Cleanup(client.Close)

	newStore := func(t *testing.T, cfg Config) *Storage {
		t.Helper()

		cfg.Namespace = aerospikeNamespace
		store := NewFromConnection(client, cfg)
		t.Cleanup(func() { _ = store.Close() })

		return store
	}

	readSchema := func(t *testing.T, store *Storage) *aerospike.Record {
		t.Helper()

		key, err := aerospike.NewKey(store.namespace, store.schemaSetName, schemaInfoKey)
		require.NoError(t, err)
		rec, gerr := client.Get(nil, key)
		require.NoError(t, gerr)
		require.NotNil(t, rec)

		return rec
	}

	t.Run("New connects with its own client and Close releases it", func(t *testing.T) {
		store := New(Config{
			Hosts:     []*aerospike.Host{aerospike.NewHost(host, port)},
			Namespace: aerospikeNamespace,
			SetName:   "own_client",
			Reset:     true,
		})
		require.True(t, store.client.IsConnected())

		require.NoError(t, store.Set("k", []byte("v"), 0))
		require.NoError(t, store.Close())
		require.False(t, store.client.IsConnected())
		require.NoError(t, store.Close())
	})

	t.Run("invalid namespace panics and closes an owned client", func(t *testing.T) {
		own, err := aerospike.NewClient(host, port)
		require.NoError(t, err)
		defer own.Close()

		require.Panics(t, func() {
			newStorage(own, true, Config{
				Namespace:     "no_such_namespace",
				SetName:       "fiber",
				SchemaVersion: 1,
			})
		})
		require.False(t, own.IsConnected())
	})

	t.Run("invalid namespace panics and leaves a borrowed client open", func(t *testing.T) {
		own, err := aerospike.NewClient(host, port)
		require.NoError(t, err)
		defer own.Close()

		require.Panics(t, func() {
			NewFromConnection(own, Config{Namespace: "no_such_namespace", SetName: "fiber"})
		})
		require.True(t, own.IsConnected())

		require.Panics(t, func() {
			NewFromConnection(own, Config{Namespace: "no_such_namespace", SetName: "fiber", Reset: true})
		})
		require.True(t, own.IsConnected())
	})

	t.Run("closed owned client makes Reset fail in newStorage", func(t *testing.T) {
		own, err := aerospike.NewClient(host, port)
		require.NoError(t, err)
		own.Close()

		require.Panics(t, func() {
			newStorage(own, true, Config{
				Namespace:     aerospikeNamespace,
				SetName:       "fiber",
				Reset:         true,
				SchemaVersion: 1,
			})
		})
	})

	t.Run("schema is created with the configured values", func(t *testing.T) {
		before := time.Now().Add(-2 * time.Second)
		store := newStore(t, Config{SetName: "schema_create", SchemaVersion: 3, SchemaDescription: "first"})

		info := store.GetSchemaInfo()
		require.NotNil(t, info)
		require.Equal(t, 3, info.Version)
		require.Equal(t, "first", info.Description)
		require.True(t, info.CreatedAt.After(before))
		require.Equal(t, info.CreatedAt, info.UpdatedAt)

		rec := readSchema(t, store)
		require.Equal(t, 3, rec.Bins["version"])
		require.Equal(t, "first", rec.Bins["description"])
		require.Equal(t, uint32(math.MaxUint32), rec.Expiration, "schema record must never expire")
	})

	t.Run("existing schema of the same version is loaded", func(t *testing.T) {
		first := newStore(t, Config{SetName: "schema_same", SchemaVersion: 2, SchemaDescription: "original"})

		second := newStore(t, Config{SetName: "schema_same", SchemaVersion: 2, SchemaDescription: "ignored"})
		info := second.GetSchemaInfo()
		require.NotNil(t, info)
		require.Equal(t, 2, info.Version)
		require.Equal(t, "original", info.Description)
		require.WithinDuration(t, first.GetSchemaInfo().CreatedAt, info.CreatedAt, time.Second)
		require.WithinDuration(t, first.GetSchemaInfo().UpdatedAt, info.UpdatedAt, time.Second)

		// An older requested version never downgrades the stored one.
		older := newStore(t, Config{SetName: "schema_same", SchemaVersion: 1, SchemaDescription: "older"})
		require.Equal(t, 2, older.GetSchemaInfo().Version)
		require.Equal(t, "original", older.GetSchemaInfo().Description)
	})

	t.Run("higher version updates the schema and keeps its creation time", func(t *testing.T) {
		first := newStore(t, Config{SetName: "schema_upgrade", SchemaVersion: 1, SchemaDescription: "v1"})
		created := first.GetSchemaInfo().CreatedAt

		second := newStore(t, Config{SetName: "schema_upgrade", SchemaVersion: 5, SchemaDescription: "v5"})
		info := second.GetSchemaInfo()
		require.NotNil(t, info)
		require.Equal(t, 5, info.Version)
		require.Equal(t, "v5", info.Description)
		require.WithinDuration(t, created, info.CreatedAt, time.Second)
		require.False(t, info.UpdatedAt.Before(info.CreatedAt))

		rec := readSchema(t, second)
		require.Equal(t, 5, rec.Bins["version"])
		require.Equal(t, "v5", rec.Bins["description"])
		require.Equal(t, uint32(math.MaxUint32), rec.Expiration, "updated schema record must never expire")
	})

	t.Run("force update rewrites the schema at the same version", func(t *testing.T) {
		newStore(t, Config{SetName: "schema_force", SchemaVersion: 4, SchemaDescription: "before"})

		forced := newStore(t, Config{SetName: "schema_force", SchemaVersion: 4, SchemaDescription: "after", ForceSchemaUpdate: true})
		require.Equal(t, 4, forced.GetSchemaInfo().Version)
		require.Equal(t, "after", forced.GetSchemaInfo().Description)

		rec := readSchema(t, forced)
		require.Equal(t, "after", rec.Bins["description"])
	})

	t.Run("force update can lower the version", func(t *testing.T) {
		newStore(t, Config{SetName: "schema_downgrade", SchemaVersion: 9})

		forced := newStore(t, Config{SetName: "schema_downgrade", SchemaVersion: 2, ForceSchemaUpdate: true})
		require.Equal(t, 2, forced.GetSchemaInfo().Version)
		require.Equal(t, 2, readSchema(t, forced).Bins["version"])
	})

	t.Run("get ignores empty keys and unknown keys", func(t *testing.T) {
		store := newStore(t, Config{SetName: "get_edge"})

		val, err := store.Get("")
		require.NoError(t, err)
		require.Nil(t, val)

		val, err = store.Get("missing")
		require.NoError(t, err)
		require.Nil(t, val)
	})

	t.Run("get returns nil when the stored value is not bytes", func(t *testing.T) {
		store := newStore(t, Config{SetName: "get_foreign"})

		key, err := aerospike.NewKey(aerospikeNamespace, "get_foreign", "foreign")
		require.NoError(t, err)
		require.NoError(t, client.Put(nil, key, aerospike.BinMap{"value": "just a string"}))

		val, gerr := store.Get("foreign")
		require.NoError(t, gerr)
		require.Nil(t, val)

		// A record without the value bin at all behaves the same.
		other, err := aerospike.NewKey(aerospikeNamespace, "get_foreign", "other")
		require.NoError(t, err)
		require.NoError(t, client.Put(nil, other, aerospike.BinMap{"unrelated": "x"}))

		val, gerr = store.Get("other")
		require.NoError(t, gerr)
		require.Nil(t, val)
	})

	t.Run("set ignores empty key or value", func(t *testing.T) {
		store := newStore(t, Config{SetName: "set_edge"})

		require.NoError(t, store.Set("", []byte("v"), 0))
		require.NoError(t, store.Set("k", nil, 0))
		require.NoError(t, store.Set("k", []byte{}, 0))

		val, err := store.Get("k")
		require.NoError(t, err)
		require.Nil(t, val)
	})

	t.Run("set overwrites and expiration is applied", func(t *testing.T) {
		store := newStore(t, Config{SetName: "set_ttl"})

		expiration := func(key string) uint32 {
			k, err := aerospike.NewKey(aerospikeNamespace, "set_ttl", key)
			require.NoError(t, err)
			rec, gerr := client.Get(nil, k)
			require.NoError(t, gerr)
			require.NotNil(t, rec)

			return rec.Expiration
		}

		require.NoError(t, store.Set("k", []byte("one"), 0))
		require.NoError(t, store.Set("k", []byte("two"), 0))
		val, err := store.Get("k")
		require.NoError(t, err)
		require.Equal(t, []byte("two"), val)
		require.Equal(t, uint32(math.MaxUint32), expiration("k"), "zero expiration must mean never")

		require.NoError(t, store.Set("neg", []byte("v"), -time.Second))
		require.Equal(t, uint32(math.MaxUint32), expiration("neg"), "negative expiration must mean never")

		// Whole seconds are kept as they are.
		require.NoError(t, store.Set("minute", []byte("v"), time.Minute))
		require.InDelta(t, 60, expiration("minute"), 5)

		// A fraction of a second is rounded up, never down to "no expiration".
		require.NoError(t, store.Set("frac", []byte("v"), 1500*time.Millisecond))
		frac := expiration("frac")
		require.GreaterOrEqual(t, frac, uint32(1))
		require.LessOrEqual(t, frac, uint32(2))

		require.NoError(t, store.Set("tiny", []byte("v"), time.Nanosecond))
		tiny := expiration("tiny")
		require.GreaterOrEqual(t, tiny, uint32(1))
		require.LessOrEqual(t, tiny, uint32(2))
	})

	t.Run("an entry with a sub-second expiration is rounded up and then expires", func(t *testing.T) {
		store := newStore(t, Config{SetName: "set_expire"})

		require.NoError(t, store.Set("short", []byte("v"), 500*time.Millisecond))
		val, err := store.Get("short")
		require.NoError(t, err)
		require.Equal(t, []byte("v"), val, "500ms must be rounded up to a whole second, not dropped")

		require.Eventually(t, func() bool {
			got, gerr := store.Get("short")
			return gerr == nil && got == nil
		}, 10*time.Second, 250*time.Millisecond)
	})

	t.Run("delete is idempotent and ignores empty keys", func(t *testing.T) {
		store := newStore(t, Config{SetName: "delete_edge"})

		require.NoError(t, store.Delete(""))
		require.NoError(t, store.Delete("never_existed"))

		require.NoError(t, store.Set("k", []byte("v"), 0))
		require.NoError(t, store.Delete("k"))
		require.NoError(t, store.Delete("k"))

		val, err := store.Get("k")
		require.NoError(t, err)
		require.Nil(t, val)
	})

	t.Run("context variants work with a live context", func(t *testing.T) {
		store := newStore(t, Config{SetName: "ctx_live"})
		ctx := context.Background()

		require.NoError(t, store.SetWithContext(ctx, "k", []byte("v"), 0))

		val, err := store.GetWithContext(ctx, "k")
		require.NoError(t, err)
		require.Equal(t, []byte("v"), val)

		require.NoError(t, store.DeleteWithContext(ctx, "k"))
		val, err = store.GetWithContext(ctx, "k")
		require.NoError(t, err)
		require.Nil(t, val)

		require.NoError(t, store.SetWithContext(ctx, "a", []byte("1"), 0))
		require.NoError(t, store.SetWithContext(ctx, "b", []byte("2"), 0))
		require.NoError(t, store.ResetWithContext(ctx))
		for _, key := range []string{"a", "b"} {
			val, err = store.GetWithContext(ctx, key)
			require.NoError(t, err)
			require.Nil(t, val)
		}
	})

	t.Run("reset only clears its own set", func(t *testing.T) {
		mine := newStore(t, Config{SetName: "reset_mine"})
		theirs := newStore(t, Config{SetName: "reset_theirs"})

		for i := 0; i < 20; i++ {
			key := "key" + strconv.Itoa(i)
			require.NoError(t, mine.Set(key, []byte("m"), 0))
			require.NoError(t, theirs.Set(key, []byte("t"), 0))
		}

		require.NoError(t, mine.Reset())

		for i := 0; i < 20; i++ {
			key := "key" + strconv.Itoa(i)

			val, err := mine.Get(key)
			require.NoError(t, err)
			require.Nil(t, val)

			val, err = theirs.Get(key)
			require.NoError(t, err)
			require.Equal(t, []byte("t"), val)
		}
	})

	t.Run("Reset config clears existing keys at construction", func(t *testing.T) {
		seed := newStore(t, Config{SetName: "reset_cfg"})
		require.NoError(t, seed.Set("stale", []byte("v"), 0))

		fresh := newStore(t, Config{SetName: "reset_cfg", Reset: true})

		val, err := fresh.Get("stale")
		require.NoError(t, err)
		require.Nil(t, val)
		require.NotNil(t, fresh.GetSchemaInfo())
	})

	t.Run("binary values round trip", func(t *testing.T) {
		store := newStore(t, Config{SetName: "binary"})

		payload := []byte{0x00, 0xff, 0x10, 0x00, 0x7f}
		require.NoError(t, store.Set("bin", payload, 0))

		val, err := store.Get("bin")
		require.NoError(t, err)
		require.Equal(t, payload, val)
	})

	t.Run("closing a storage over a borrowed client keeps other storages usable", func(t *testing.T) {
		a := newStore(t, Config{SetName: "borrow_a"})
		b := newStore(t, Config{SetName: "borrow_b"})

		require.NoError(t, a.Close())
		require.ErrorIs(t, a.Set("k", []byte("v"), 0), ErrClosed)

		require.NoError(t, b.Set("k", []byte("v"), 0))
		val, err := b.Get("k")
		require.NoError(t, err)
		require.Equal(t, []byte("v"), val)
	})
}
