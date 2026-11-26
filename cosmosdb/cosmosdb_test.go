package cosmosdb

import (
	"context"
	"fmt"
	"math"
	"net/http"
	"os"
	"strings"
	"sync"
	"testing"
	"time"

	"github.com/Azure/azure-sdk-for-go/sdk/data/azcosmos"
	"github.com/gofiber/storage/testhelpers/tck"
	"github.com/stretchr/testify/require"
	"github.com/stretchr/testify/suite"
	"github.com/testcontainers/testcontainers-go"
	tccosmosdb "github.com/testcontainers/testcontainers-go/modules/azure/cosmosdb"
)

const (
	cosmosDBImageEnvVar = "TEST_COSMOSDB_IMAGE"
	cosmosDBImage       = "mcr.microsoft.com/cosmosdb/linux/azure-cosmos-emulator:vnext-preview"
	testDatabase        = "fiber_test"
)

var (
	sharedEmulatorOnce             sync.Once
	sharedEmulator                 *tccosmosdb.Container
	sharedEmulatorConnectionString string
	sharedEmulatorErr              error
)

func TestMain(m *testing.M) {
	code := m.Run()
	if sharedEmulator != nil {
		_ = testcontainers.TerminateContainer(sharedEmulator)
	}
	os.Exit(code)
}

func startEmulator(ctx context.Context) (*tccosmosdb.Container, error) {
	img := cosmosDBImage
	if imgFromEnv := os.Getenv(cosmosDBImageEnvVar); imgFromEnv != "" {
		img = imgFromEnv
	}
	return tccosmosdb.Run(ctx, img)
}

// emulatorConnectionString starts one Cosmos DB emulator testcontainer for the package
// and returns its connection string. Each test uses its own container in it.
func emulatorConnectionString(tb testing.TB) string {
	tb.Helper()

	sharedEmulatorOnce.Do(func() {
		ctx := context.Background()
		sharedEmulator, sharedEmulatorErr = startEmulator(ctx)
		if sharedEmulatorErr != nil {
			return
		}
		sharedEmulatorConnectionString, sharedEmulatorErr = sharedEmulator.ConnectionString(ctx)
	})
	require.NoError(tb, sharedEmulatorErr)

	return sharedEmulatorConnectionString
}

func testContainerName(tb testing.TB) string {
	return strings.NewReplacer("/", "_", "#", "_").Replace(tb.Name())
}

func newTestConfig(tb testing.TB) Config {
	tb.Helper()

	return Config{
		ConnectionString: emulatorConnectionString(tb),
		Database:         testDatabase,
		Container:        testContainerName(tb),
		RequestTimeout:   30 * time.Second,
		Reset:            true,
	}
}

func newTestStore(tb testing.TB) *Storage {
	tb.Helper()

	return New(newTestConfig(tb))
}

func newTestClient(tb testing.TB) *azcosmos.Client {
	tb.Helper()

	client, err := azcosmos.NewClientFromConnectionString(emulatorConnectionString(tb), nil)
	require.NoError(tb, err)
	return client
}

func createContainer(tb testing.TB, properties azcosmos.ContainerProperties) *azcosmos.ContainerClient {
	tb.Helper()

	ctx := context.Background()
	client := newTestClient(tb)

	_, err := client.CreateDatabase(ctx, azcosmos.DatabaseProperties{ID: testDatabase}, nil)
	if err != nil {
		require.True(tb, hasStatus(err, http.StatusConflict), err)
	}
	database, err := client.NewDatabase(testDatabase)
	require.NoError(tb, err)

	_, err = database.CreateContainer(ctx, properties, nil)
	require.NoError(tb, err)

	container, err := database.NewContainer(properties.ID)
	require.NoError(tb, err)
	tb.Cleanup(func() {
		_, err := container.Delete(context.Background(), nil)
		require.NoError(tb, err)
	})
	return container
}

func parseConnectionString(tb testing.TB, connectionString string) (string, string) {
	tb.Helper()

	var endpoint, key string
	for part := range strings.SplitSeq(connectionString, ";") {
		name, value, found := strings.Cut(part, "=")
		if !found {
			continue
		}
		switch name {
		case "AccountEndpoint":
			endpoint = value
		case "AccountKey":
			key = value
		}
	}
	require.NotEmpty(tb, endpoint)
	require.NotEmpty(tb, key)
	return endpoint, key
}

// CosmosDBStorageTCK is the test suite for the Cosmos DB storage.
type CosmosDBStorageTCK struct{}

// NewStore is a function that returns a new Cosmos DB storage.
// It implements the [tck.TCKSuite] interface, allowing the TCK to create a new Cosmos DB storage
// from the container created by the TCK.
func (s *CosmosDBStorageTCK) NewStore() func(ctx context.Context, tb testing.TB, ctr *tccosmosdb.Container) (*Storage, error) {
	return func(ctx context.Context, tb testing.TB, ctr *tccosmosdb.Container) (*Storage, error) {
		connectionString, err := ctr.ConnectionString(ctx)
		require.NoError(tb, err)

		return New(Config{
			ConnectionString: connectionString,
			RequestTimeout:   30 * time.Second,
			Reset:            true,
		}), nil
	}
}

// NewContainer is a function that returns a new Cosmos DB emulator container.
// It implements the [tck.TCKSuite] interface, allowing the TCK to create a new Cosmos DB container
// for the Cosmos DB storage.
func (s *CosmosDBStorageTCK) NewContainer() func(ctx context.Context, tb testing.TB) (*tccosmosdb.Container, error) {
	return func(ctx context.Context, tb testing.TB) (*tccosmosdb.Container, error) {
		return startEmulator(ctx)
	}
}

func TestCosmosDBStorageTCK(t *testing.T) {
	// The TCK needs the concrete type of the storage and the driver type returned by the Conn method.
	s, err := tck.New[*Storage, *azcosmos.ContainerClient](context.Background(), t, &CosmosDBStorageTCK{}, tck.PerSuite())
	require.NoError(t, err)

	suite.Run(t, s)
}

func Test_CosmosDB_Set_Get(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	require.NoError(t, testStore.Set("john", []byte("doe"), 0))

	result, err := testStore.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), result)
}

func Test_CosmosDB_Set_Override(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	require.NoError(t, testStore.Set("john", []byte("doe"), 0))
	require.NoError(t, testStore.Set("john", []byte("smith"), 0))

	result, err := testStore.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("smith"), result)
}

func Test_CosmosDB_Get_NotExist(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	result, err := testStore.Get("notexist")
	require.NoError(t, err)
	require.Nil(t, result)
}

func Test_CosmosDB_Set_Expiration(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	require.NoError(t, testStore.Set("john", []byte("doe"), 300*time.Millisecond))

	result, err := testStore.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), result)

	time.Sleep(500 * time.Millisecond)

	result, err = testStore.Get("john")
	require.NoError(t, err)
	require.Nil(t, result)
}

func Test_CosmosDB_Set_Expiration_RemovedByServer(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	require.NoError(t, testStore.Set("john", []byte("doe"), time.Second))

	id := itemID("john")
	require.Eventually(t, func() bool {
		_, err := testStore.Conn().ReadItem(context.Background(), azcosmos.NewPartitionKeyString(id), id, nil)
		return hasStatus(err, http.StatusNotFound)
	}, 15*time.Second, 250*time.Millisecond)
}

func Test_CosmosDB_Set_Expiration_ContainerWithoutTTL(t *testing.T) {
	container := createContainer(t, azcosmos.ContainerProperties{
		ID: testContainerName(t),
		PartitionKeyDefinition: azcosmos.PartitionKeyDefinition{
			Paths: []string{"/id"},
		},
	})
	testStore := NewFromConnection(container)
	defer testStore.Close()

	require.NoError(t, testStore.Set("john", []byte("doe"), 300*time.Millisecond))
	time.Sleep(500 * time.Millisecond)

	result, err := testStore.Get("john")
	require.NoError(t, err)
	require.Nil(t, result)

	id := itemID("john")
	_, err = container.ReadItem(context.Background(), azcosmos.NewPartitionKeyString(id), id, nil)
	require.NoError(t, err)
}

func Test_CosmosDB_Set_NoExpiration_ContainerWithDefaultTTL(t *testing.T) {
	defaultTimeToLive := int32(1)
	container := createContainer(t, azcosmos.ContainerProperties{
		ID:                testContainerName(t),
		DefaultTimeToLive: &defaultTimeToLive,
		PartitionKeyDefinition: azcosmos.PartitionKeyDefinition{
			Paths: []string{"/id"},
		},
	})
	testStore := NewFromConnection(container)
	defer testStore.Close()

	require.NoError(t, testStore.Set("john", []byte("doe"), 0))
	_, err := container.UpsertItem(context.Background(), azcosmos.NewPartitionKeyString("probe"), []byte(`{"id":"probe"}`), nil)
	require.NoError(t, err)

	require.Eventually(t, func() bool {
		_, err := container.ReadItem(context.Background(), azcosmos.NewPartitionKeyString("probe"), "probe", nil)
		return hasStatus(err, http.StatusNotFound)
	}, 15*time.Second, 250*time.Millisecond)

	result, err := testStore.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), result)
}

func Test_CosmosDB_timeToLive(t *testing.T) {
	t.Parallel()

	require.Equal(t, int32(2), timeToLive(300*time.Millisecond))
	require.Equal(t, int32(2), timeToLive(time.Second))
	require.Equal(t, int32(3), timeToLive(1500*time.Millisecond))
	require.Equal(t, int32(math.MaxInt32), timeToLive(time.Duration(math.MaxInt64)))
}

func Test_CosmosDB_Keys(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	keys := []string{
		"/api/users?page=1#top",
		`a\b`,
		"ключ-キー-🔑",
		strings.Repeat("k", 1024),
	}
	for i, key := range keys {
		val := fmt.Appendf(nil, "value-%d", i)
		require.NoError(t, testStore.Set(key, val, 0))

		result, err := testStore.Get(key)
		require.NoError(t, err)
		require.Equal(t, val, result)
	}
}

func Test_CosmosDB_EmptyArguments(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	require.NoError(t, testStore.Set("", []byte("doe"), 0))
	require.NoError(t, testStore.Set("john", nil, 0))
	require.NoError(t, testStore.Delete(""))

	result, err := testStore.Get("")
	require.NoError(t, err)
	require.Nil(t, result)

	result, err = testStore.Get("john")
	require.NoError(t, err)
	require.Nil(t, result)
}

func Test_CosmosDB_Delete(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	require.NoError(t, testStore.Set("john", []byte("doe"), 0))
	require.NoError(t, testStore.Delete("john"))
	require.NoError(t, testStore.Delete("john"))

	result, err := testStore.Get("john")
	require.NoError(t, err)
	require.Nil(t, result)
}

func Test_CosmosDB_Reset(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	for i := range 25 {
		require.NoError(t, testStore.Set(fmt.Sprintf("key-%d", i), []byte("value"), 0))
	}
	require.NoError(t, testStore.Set("expiring", []byte("value"), time.Hour))

	require.NoError(t, testStore.Reset())

	for i := range 25 {
		result, err := testStore.Get(fmt.Sprintf("key-%d", i))
		require.NoError(t, err)
		require.Nil(t, result)
	}
	result, err := testStore.Get("expiring")
	require.NoError(t, err)
	require.Nil(t, result)
}

func Test_CosmosDB_New_Reset(t *testing.T) {
	cfg := newTestConfig(t)

	first := New(cfg)
	require.NoError(t, first.Set("john", []byte("doe"), 0))
	require.NoError(t, first.Close())

	second := New(cfg)
	defer second.Close()

	result, err := second.Get("john")
	require.NoError(t, err)
	require.Nil(t, result)
}

func Test_CosmosDB_CanceledContext(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	require.NoError(t, testStore.Set("john", []byte("doe"), 0))

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	_, err := testStore.GetWithContext(ctx, "john")
	require.ErrorIs(t, err, context.Canceled)
	require.ErrorIs(t, testStore.SetWithContext(ctx, "john", []byte("smith"), 0), context.Canceled)
	require.ErrorIs(t, testStore.DeleteWithContext(ctx, "john"), context.Canceled)
	require.ErrorIs(t, testStore.ResetWithContext(ctx), context.Canceled)

	result, err := testStore.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), result)
}

func Test_CosmosDB_Closed(t *testing.T) {
	testStore := newTestStore(t)

	require.NoError(t, testStore.Close())
	require.NoError(t, testStore.Close())

	_, err := testStore.Get("john")
	require.ErrorIs(t, err, ErrClosed)
	require.ErrorIs(t, testStore.Set("john", []byte("doe"), 0), ErrClosed)
	require.ErrorIs(t, testStore.Delete("john"), ErrClosed)
	require.ErrorIs(t, testStore.Reset(), ErrClosed)
}

func Test_CosmosDB_Conn(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	require.NotNil(t, testStore.Conn())
	require.Equal(t, testContainerName(t), testStore.Conn().ID())
}

func Test_CosmosDB_NewWithContext(t *testing.T) {
	testStore := NewWithContext(context.Background(), newTestConfig(t))
	defer testStore.Close()

	require.NoError(t, testStore.Set("john", []byte("doe"), 0))

	result, err := testStore.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), result)
}

func Test_CosmosDB_New_EndpointAndKey(t *testing.T) {
	endpoint, key := parseConnectionString(t, emulatorConnectionString(t))

	testStore := New(Config{
		Endpoint:       endpoint,
		Key:            key,
		Database:       testDatabase,
		Container:      testContainerName(t),
		RequestTimeout: 30 * time.Second,
	})
	defer testStore.Close()

	require.NoError(t, testStore.Set("john", []byte("doe"), 0))

	result, err := testStore.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), result)
}

func Test_CosmosDB_New_InvalidKeyPanics(t *testing.T) {
	require.Panics(t, func() {
		New(Config{Endpoint: "http://localhost:1", Key: "not base64!"})
	})
}

func Test_CosmosDB_New_UnreachablePanics(t *testing.T) {
	endpoint, key := parseConnectionString(t, emulatorConnectionString(t))
	endpoint = strings.Replace(endpoint, "localhost", "127.0.0.1", 1)
	endpoint = endpoint[:strings.LastIndex(endpoint, ":")] + ":1"

	require.Panics(t, func() {
		New(Config{Endpoint: endpoint, Key: key, RequestTimeout: time.Second})
	})
}

func Test_CosmosDB_NewFromConnection(t *testing.T) {
	container := createContainer(t, azcosmos.ContainerProperties{
		ID: testContainerName(t),
		PartitionKeyDefinition: azcosmos.PartitionKeyDefinition{
			Paths: []string{"/id"},
		},
	})

	testStore := NewFromConnection(container)
	require.Same(t, container, testStore.Conn())

	require.NoError(t, testStore.Set("john", []byte("doe"), 0))

	result, err := testStore.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), result)

	require.NoError(t, testStore.Close())

	id := itemID("john")
	_, err = container.ReadItem(context.Background(), azcosmos.NewPartitionKeyString(id), id, nil)
	require.NoError(t, err)
}

func Test_CosmosDB_NewFromConnection_Config(t *testing.T) {
	container := createContainer(t, azcosmos.ContainerProperties{
		ID: testContainerName(t),
		PartitionKeyDefinition: azcosmos.PartitionKeyDefinition{
			Paths: []string{"/id"},
		},
	})
	first := NewFromConnection(container)
	require.NoError(t, first.Set("john", []byte("doe"), 0))
	require.NoError(t, first.Close())

	testStore := NewFromConnectionWithContext(context.Background(), container, Config{
		RequestTimeout: 3 * time.Second,
		Reset:          true,
	})
	defer testStore.Close()

	require.Equal(t, 3*time.Second, testStore.timeout)
	result, err := testStore.Get("john")
	require.NoError(t, err)
	require.Nil(t, result)
}

func Test_CosmosDB_NewFromConnection_NilPanics(t *testing.T) {
	require.Panics(t, func() {
		NewFromConnection(nil)
	})
}

func Benchmark_CosmosDB_Set(b *testing.B) {
	testStore := newTestStore(b)
	defer testStore.Close()

	b.ReportAllocs()

	var err error
	for b.Loop() {
		err = testStore.Set("john", []byte("doe"), 0)
	}

	require.NoError(b, err)
}

func Benchmark_CosmosDB_Get(b *testing.B) {
	testStore := newTestStore(b)
	defer testStore.Close()

	require.NoError(b, testStore.Set("john", []byte("doe"), 0))

	b.ReportAllocs()

	var err error
	for b.Loop() {
		_, err = testStore.Get("john")
	}

	require.NoError(b, err)
}

func Benchmark_CosmosDB_SetAndDelete(b *testing.B) {
	testStore := newTestStore(b)
	defer testStore.Close()

	b.ReportAllocs()

	var err error
	for b.Loop() {
		_ = testStore.Set("john", []byte("doe"), 0)
		err = testStore.Delete("john")
	}

	require.NoError(b, err)
}
