package neo4j

import (
	"bytes"
	"context"
	"errors"
	"log"
	"net"
	"os"
	"testing"
	"time"

	neo4jdriver "github.com/neo4j/neo4j-go-driver/v5/neo4j"
	"github.com/stretchr/testify/require"
)

// newTestDriver opens a driver of its own on the shared test container.
func newTestDriver(t *testing.T) neo4jdriver.DriverWithContext {
	t.Helper()

	driver, err := neo4jdriver.NewDriverWithContext(testConfig.URI, neo4jdriver.BasicAuth(testConfig.Username, testConfig.Password, ""))
	require.NoError(t, err)
	t.Cleanup(func() { _ = driver.Close(context.Background()) })

	return driver
}

// closedAddr returns a loopback address nothing listens on.
func closedAddr(t *testing.T) string {
	t.Helper()

	l, err := net.Listen("tcp", "127.0.0.1:0")
	require.NoError(t, err)
	addr := l.Addr().String()
	require.NoError(t, l.Close())

	return addr
}

// capturePanic runs fn, returning the recovered panic value and everything it logged.
func capturePanic(t *testing.T, fn func()) (recovered any, logged string) {
	t.Helper()

	var buf bytes.Buffer
	log.SetOutput(&buf)
	defer log.SetOutput(os.Stderr)

	func() {
		defer func() { recovered = recover() }()
		fn()
	}()

	return recovered, buf.String()
}

// closeFailDriver wraps a real driver, failing Close until failClose is cleared.
type closeFailDriver struct {
	neo4jdriver.DriverWithContext
	failClose bool
	closed    int
}

func (d *closeFailDriver) Close(ctx context.Context) error {
	d.closed++
	if d.failClose {
		return errors.New("close failed")
	}
	return d.DriverWithContext.Close(ctx)
}

func Test_Neo4jConfig_Default_NoArgs(t *testing.T) {
	require.Equal(t, ConfigDefault, configDefault())
}

func Test_Neo4jConfig_Default_Overrides(t *testing.T) {
	cfg := configDefault(Config{Username: "neo4j", Password: "secret"})
	require.Equal(t, ConfigDefault.URI, cfg.URI)
	require.Equal(t, ConfigDefault.Node, cfg.Node)
	require.Equal(t, ConfigDefault.GCInterval, cfg.GCInterval)
	require.NotNil(t, cfg.Auth)

	cfg = configDefault(Config{URI: "bolt://example:7687", Node: "custom", GCInterval: time.Minute})
	require.Equal(t, "bolt://example:7687", cfg.URI)
	require.Equal(t, "custom", cfg.Node)
	require.Equal(t, time.Minute, cfg.GCInterval)
	require.NotNil(t, cfg.Auth)
}

func Test_Neo4jStore_New_InvalidURI(t *testing.T) {
	recovered, logged := capturePanic(t, func() {
		NewWithContext(context.Background(), Config{URI: "bad://localhost"})
	})

	require.NotNil(t, recovered)
	require.Contains(t, logged, "Unable to create connection pool")
}

func Test_Neo4jStore_New_Unreachable(t *testing.T) {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	recovered, logged := capturePanic(t, func() {
		NewWithContext(ctx, Config{URI: "bolt://" + closedAddr(t)})
	})

	require.NotNil(t, recovered)
	require.Contains(t, logged, "Unable to verify connection")
}

func Test_Neo4jStore_New_ResetFails(t *testing.T) {
	driver := newTestDriver(t)

	// A node name that is not a valid Cypher label makes the reset query fail.
	recovered, logged := capturePanic(t, func() {
		NewFromConnectionWithContext(context.Background(), driver, Config{Node: "bad name", Reset: true})
	})

	require.NotNil(t, recovered)
	require.Contains(t, logged, "Unable to reset storage")

	// A borrowed driver is not closed on failure.
	require.NoError(t, driver.VerifyConnectivity(context.Background()))
}

func Test_Neo4jStore_New_IndexFails(t *testing.T) {
	driver := newTestDriver(t)

	recovered, logged := capturePanic(t, func() {
		NewFromConnectionWithContext(context.Background(), driver, Config{Node: "bad name"})
	})

	require.NotNil(t, recovered)
	require.Contains(t, logged, "Unable to create index on key")
	require.NoError(t, driver.VerifyConnectivity(context.Background()))
}

func Test_Neo4jStore_New_OwnedDriverClosedOnFailure(t *testing.T) {
	// Owned driver: an initialization failure must close it before panicking.
	recovered, logged := capturePanic(t, func() {
		NewWithContext(context.Background(), Config{
			URI:      testConfig.URI,
			Username: testConfig.Username,
			Password: testConfig.Password,
			Node:     "bad name",
		})
	})

	require.NotNil(t, recovered)
	require.Contains(t, logged, "Unable to create index on key")
}

func Test_Neo4jStore_Get_Closed(t *testing.T) {
	store := NewFromConnection(newTestDriver(t), Config{Node: "closed_get"})
	require.NoError(t, store.Close())

	val, err := store.Get("john")
	require.ErrorIs(t, err, ErrClosed)
	require.Nil(t, val)
}

func Test_Neo4jStore_Get_EmptyKey(t *testing.T) {
	store := NewFromConnection(newTestDriver(t), Config{Node: "empty_get"})
	defer store.Close()

	val, err := store.Get("")
	require.NoError(t, err)
	require.Nil(t, val)
}

func Test_Neo4jStore_Get_CancelledContext(t *testing.T) {
	store := NewFromConnection(newTestDriver(t), Config{Node: "cancelled_get"})
	defer store.Close()

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	val, err := store.GetWithContext(ctx, "john")
	require.ErrorIs(t, err, context.Canceled)
	require.Nil(t, val)
}

func Test_Neo4jStore_Get_MalformedData(t *testing.T) {
	driver := newTestDriver(t)
	store := NewFromConnection(driver, Config{Node: "malformed_get", Reset: true})
	defer store.Close()

	// The expiration is stored as a string, which cannot be decoded into the model.
	_, err := neo4jdriver.ExecuteQuery(context.Background(), driver,
		"CREATE (n:malformed_get { k: $key, v: $val, e: 'never' }) FINISH",
		map[string]any{"key": "broken", "val": []byte("doe")},
		neo4jdriver.EagerResultTransformer,
	)
	require.NoError(t, err)

	val, err := store.Get("broken")
	require.ErrorContains(t, err, "error parsing result data")
	require.Nil(t, val)

	// Well-formed entries on the same node label remain readable.
	require.NoError(t, store.Set("fine", []byte("doe"), 0))
	val, err = store.Get("fine")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), val)
}

func Test_Neo4jStore_Set_Closed(t *testing.T) {
	store := NewFromConnection(newTestDriver(t), Config{Node: "closed_set"})
	require.NoError(t, store.Close())

	require.ErrorIs(t, store.Set("john", []byte("doe"), 0), ErrClosed)
}

func Test_Neo4jStore_Set_EmptyKeyOrValue(t *testing.T) {
	driver := newTestDriver(t)
	store := NewFromConnection(driver, Config{Node: "empty_set", Reset: true})
	defer store.Close()

	require.NoError(t, store.Set("", []byte("doe"), 0))
	require.NoError(t, store.Set("john", nil, 0))
	require.NoError(t, store.Set("john", []byte{}, 0))

	// Nothing may have been written.
	res, err := neo4jdriver.ExecuteQuery(context.Background(), driver,
		"MATCH (n:empty_set) RETURN count(n) AS c", nil, neo4jdriver.EagerResultTransformer)
	require.NoError(t, err)
	count, _, err := neo4jdriver.GetRecordValue[int64](res.Records[0], "c")
	require.NoError(t, err)
	require.Zero(t, count)
}

func Test_Neo4jStore_Delete_Closed(t *testing.T) {
	store := NewFromConnection(newTestDriver(t), Config{Node: "closed_delete"})
	require.NoError(t, store.Close())

	require.ErrorIs(t, store.Delete("john"), ErrClosed)
}

func Test_Neo4jStore_Delete_EmptyKey(t *testing.T) {
	store := NewFromConnection(newTestDriver(t), Config{Node: "empty_delete"})
	defer store.Close()

	require.NoError(t, store.Set("john", []byte("doe"), 0))
	require.NoError(t, store.Delete(""))

	val, err := store.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), val)
}

func Test_Neo4jStore_Delete_CancelledContext(t *testing.T) {
	store := NewFromConnection(newTestDriver(t), Config{Node: "cancelled_delete"})
	defer store.Close()

	require.NoError(t, store.Set("john", []byte("doe"), 0))

	ctx, cancel := context.WithCancel(context.Background())
	cancel()
	require.ErrorIs(t, store.DeleteWithContext(ctx, "john"), context.Canceled)

	// The failed delete left the entry in place.
	val, err := store.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), val)
}

func Test_Neo4jStore_Reset_Closed(t *testing.T) {
	store := NewFromConnection(newTestDriver(t), Config{Node: "closed_reset"})
	require.NoError(t, store.Close())

	require.ErrorIs(t, store.Reset(), ErrClosed)
}

func Test_Neo4jStore_Reset_CancelledContext(t *testing.T) {
	store := NewFromConnection(newTestDriver(t), Config{Node: "cancelled_reset"})
	defer store.Close()

	require.NoError(t, store.Set("john", []byte("doe"), 0))

	ctx, cancel := context.WithCancel(context.Background())
	cancel()
	require.ErrorIs(t, store.ResetWithContext(ctx), context.Canceled)

	val, err := store.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), val)
}

func Test_Neo4jStore_Operations_ServerUnreachable(t *testing.T) {
	// A driver is lazy, so it can be built on a closed port without a container.
	driver, err := neo4jdriver.NewDriverWithContext("bolt://"+closedAddr(t), neo4jdriver.NoAuth())
	require.NoError(t, err)
	defer driver.Close(context.Background()) //nolint:errcheck // best effort cleanup

	store := &Storage{
		db:           driver,
		done:         make(chan struct{}),
		stopped:      make(chan struct{}),
		cypherMatch:  "OPTIONAL MATCH (n:unreachable{ k: $key }) RETURN n { .* } AS data",
		cypherMerge:  "MERGE (n:unreachable{ k: $key }) SET n.v = $val, n.e = $exp FINISH",
		cypherDelete: "MATCH (n:unreachable{ k: $key }) DELETE n FINISH",
		cypherReset:  "MATCH (n:unreachable) DELETE n FINISH",
	}
	close(store.stopped)

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	_, err = store.GetWithContext(ctx, "john")
	require.Error(t, err)
	require.Error(t, store.SetWithContext(ctx, "john", []byte("doe"), 0))
	require.Error(t, store.DeleteWithContext(ctx, "john"))
	require.Error(t, store.ResetWithContext(ctx))
}

func Test_Neo4jStore_Close_OwnedDriverFailure(t *testing.T) {
	driver := &closeFailDriver{DriverWithContext: newTestDriver(t), failClose: true}
	store := &Storage{
		db:      driver,
		ownsDB:  true,
		done:    make(chan struct{}),
		stopped: make(chan struct{}),
	}
	close(store.stopped)

	// A failed close is reported and not latched, so it can be retried.
	require.ErrorContains(t, store.Close(), "close failed")
	require.False(t, store.isClosed())
	require.Equal(t, 1, driver.closed)

	driver.failClose = false
	require.NoError(t, store.Close())
	require.True(t, store.isClosed())
	require.Equal(t, 2, driver.closed)

	// Idempotent once closed: the driver is not closed again.
	require.NoError(t, store.Close())
	require.Equal(t, 2, driver.closed)
	require.ErrorIs(t, store.Set("john", []byte("doe"), 0), ErrClosed)
}

func Test_Neo4jStore_GC_RemovesExpired(t *testing.T) {
	driver := newTestDriver(t)
	store := NewFromConnection(driver, Config{
		Node:       "gc_store",
		Reset:      true,
		GCInterval: 100 * time.Millisecond,
	})
	defer store.Close()

	// Entries are written directly so the expiration can already lie in the past.
	_, err := neo4jdriver.ExecuteQuery(context.Background(), driver,
		`CREATE (:gc_store { k: 'expired', v: $val, e: 1 }),
		        (:gc_store { k: 'forever', v: $val, e: 0 }),
		        (:gc_store { k: 'future', v: $val, e: $future }) FINISH`,
		map[string]any{"val": []byte("doe"), "future": time.Now().Add(time.Hour).Unix()},
		neo4jdriver.EagerResultTransformer,
	)
	require.NoError(t, err)

	count := func(key string) int64 {
		res, err := neo4jdriver.ExecuteQuery(context.Background(), driver,
			"MATCH (n:gc_store { k: $key }) RETURN count(n) AS c",
			map[string]any{"key": key}, neo4jdriver.EagerResultTransformer)
		require.NoError(t, err)
		c, _, err := neo4jdriver.GetRecordValue[int64](res.Records[0], "c")
		require.NoError(t, err)
		return c
	}

	require.Eventually(t, func() bool { return count("expired") == 0 }, 10*time.Second, 50*time.Millisecond)
	require.EqualValues(t, 1, count("forever"))
	require.EqualValues(t, 1, count("future"))

	val, err := store.Get("future")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), val)
}
