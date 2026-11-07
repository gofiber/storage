package postgres

import (
	"context"
	"strconv"
	"sync/atomic"
	"testing"
	"time"

	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgxpool"
	"github.com/stretchr/testify/require"
)

// newCancelOnAcquirePool returns a pool for uri that cancels the initialization
// context on its nth connection acquisition. Every pool operation acquires a
// connection, so the nth query issued by NewWithContext fails with
// context.Canceled while the earlier ones succeed.
func newCancelOnAcquirePool(t testing.TB, uri string, n int32, cancel context.CancelFunc) *pgxpool.Pool {
	t.Helper()

	poolCfg, err := pgxpool.ParseConfig(uri)
	require.NoError(t, err)

	var calls atomic.Int32
	poolCfg.BeforeAcquire = func(context.Context, *pgx.Conn) bool {
		if calls.Add(1) == n {
			cancel()
		}
		return true
	}

	pool, err := pgxpool.NewWithConfig(context.Background(), poolCfg)
	require.NoError(t, err)
	t.Cleanup(pool.Close)

	return pool
}

func uniqueTable(prefix string) string {
	return "public." + prefix + "_" + strconv.Itoa(int(time.Now().UnixNano()))
}

func recoverPanicError(t testing.TB, fn func()) error {
	t.Helper()

	var recovered any
	func() {
		defer func() { recovered = recover() }()
		fn()
	}()
	require.NotNil(t, recovered, "expected a panic")

	err, ok := recovered.(error)
	require.True(t, ok, "expected the panic value to be an error, got %T", recovered)
	return err
}

func Test_Postgres_New_InvalidConnectionURI(t *testing.T) {
	err := recoverPanicError(t, func() {
		New(Config{ConnectionURI: "postgres://user:pass@127.0.0.1:notaport/fiber"})
	})
	require.Error(t, err)
}

func Test_Postgres_New_UnreachableServer(t *testing.T) {
	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	// Ping fails because the context is already cancelled; the pool this driver opened is released.
	err := recoverPanicError(t, func() {
		NewWithContext(ctx, Config{ConnectionURI: "postgres://user:pass@127.0.0.1:1/fiber?sslmode=disable"})
	})
	require.ErrorIs(t, err, context.Canceled)
}

// Test_Postgres_NewWithContext_InitFailures drives every failing statement of
// the initialization sequence and checks that the panic carries the cause and
// that the caller's pool is left open.
func Test_Postgres_NewWithContext_InitFailures(t *testing.T) {
	base := newTestConfig(t)

	owner := newTestStoreWithConfig(t, Config{ConnectionURI: base.ConnectionURI, Table: uniqueTable("init_owner"), Reset: true})
	defer owner.Close()

	existing := uniqueTable("init_existing")
	require.NoError(t, newTestStoreWithConfig(t, Config{ConnectionURI: base.ConnectionURI, Table: existing}).Close())

	legacy := uniqueTable("init_legacy")
	_, err := owner.Conn().Exec(context.Background(), `CREATE TABLE `+legacy+` (
		k VARCHAR(64) PRIMARY KEY NOT NULL DEFAULT '',
		v BYTEA NOT NULL,
		e BIGINT NOT NULL DEFAULT '0'
	);`)
	require.NoError(t, err)

	tests := []struct {
		name   string
		table  string
		reset  bool
		failOn int32 // nth connection acquisition fails
	}{
		{name: "reset drop", table: uniqueTable("init_drop"), reset: true, failOn: 2},
		{name: "table exists check (reset)", table: uniqueTable("init_check_reset"), reset: true, failOn: 3},
		{name: "table exists check", table: existing, failOn: 2},
		{name: "create table", table: uniqueTable("init_create"), reset: true, failOn: 4},
		{name: "create index", table: uniqueTable("init_index"), reset: true, failOn: 5},
		{name: "schema check after create", table: uniqueTable("init_schema_new"), reset: true, failOn: 6},
		{name: "column type lookup", table: existing, failOn: 3},
		{name: "key column migration", table: legacy, failOn: 4},
		{name: "schema check of existing table", table: existing, failOn: 4},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			ctx, cancel := context.WithCancel(context.Background())
			defer cancel()

			pool := newCancelOnAcquirePool(t, base.ConnectionURI, tt.failOn, cancel)

			err := recoverPanicError(t, func() {
				NewWithContext(ctx, Config{DB: pool, Table: tt.table, Reset: tt.reset})
			})
			require.ErrorIs(t, err, context.Canceled)

			// The pool belongs to the caller and must survive a failed initialization.
			require.NoError(t, pool.Ping(context.Background()))
		})
	}

	// The legacy key column is untouched by the failed migration and is widened by a successful one.
	var dataType string
	query := `SELECT data_type FROM information_schema.columns WHERE table_schema = 'public' AND table_name = $1 AND column_name = 'k'`
	legacyName := legacy[len("public."):]
	require.NoError(t, owner.Conn().QueryRow(context.Background(), query, legacyName).Scan(&dataType))
	require.Equal(t, "character varying", dataType)

	migrated := NewFromConnection(owner.Conn(), Config{Table: legacy})
	defer migrated.Close()
	require.NoError(t, owner.Conn().QueryRow(context.Background(), query, legacyName).Scan(&dataType))
	require.Equal(t, "text", dataType)
}

func Test_Postgres_New_MissingColumn(t *testing.T) {
	base := newTestConfig(t)

	owner := newTestStoreWithConfig(t, base)
	defer owner.Close()

	table := uniqueTable("missing_column")
	_, err := owner.Conn().Exec(context.Background(), `CREATE TABLE `+table+` (
		k TEXT PRIMARY KEY NOT NULL DEFAULT '',
		v BYTEA NOT NULL
	);`)
	require.NoError(t, err)

	err = recoverPanicError(t, func() {
		New(Config{ConnectionURI: base.ConnectionURI, Table: table})
	})
	require.ErrorContains(t, err, "required column e does not exist")

	// checkSchema reports the same problem when called directly.
	err = recoverPanicError(t, func() {
		owner.checkSchema(context.Background(), table)
	})
	require.ErrorContains(t, err, "required column e does not exist")
}

func Test_Postgres_CheckSchema_MissingTable(t *testing.T) {
	store := newTestStore(t)
	defer store.Close()

	err := recoverPanicError(t, func() {
		store.checkSchema(context.Background(), "public.table_that_does_not_exist")
	})
	require.ErrorContains(t, err, "table table_that_does_not_exist does not exist")
}

func Test_Postgres_CheckSchema_QueryError(t *testing.T) {
	store := newTestStore(t)
	defer store.Close()

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err := recoverPanicError(t, func() {
		store.checkSchema(ctx, "fiber_storage")
	})
	require.ErrorIs(t, err, context.Canceled)
}

func Test_Postgres_Closed_ReturnsErrClosed(t *testing.T) {
	store := newTestStore(t)
	require.NoError(t, store.Set("john", []byte("doe"), 0))
	require.NoError(t, store.Close())

	ctx := context.Background()

	val, err := store.GetWithContext(ctx, "john")
	require.ErrorIs(t, err, ErrClosed)
	require.Nil(t, val)

	val, err = store.Get("john")
	require.ErrorIs(t, err, ErrClosed)
	require.Nil(t, val)

	require.ErrorIs(t, store.SetWithContext(ctx, "john", []byte("doe"), 0), ErrClosed)
	require.ErrorIs(t, store.DeleteWithContext(ctx, "john"), ErrClosed)
	require.ErrorIs(t, store.Delete("john"), ErrClosed)
	require.ErrorIs(t, store.ResetWithContext(ctx), ErrClosed)
	require.ErrorIs(t, store.Reset(), ErrClosed)
}

func Test_Postgres_EmptyKeyAndValue(t *testing.T) {
	store := newTestStore(t)
	defer store.Close()

	// Empty keys and values are ignored rather than stored or rejected.
	require.NoError(t, store.Set("", []byte("doe"), 0))
	require.NoError(t, store.Set("john", nil, 0))
	require.NoError(t, store.Set("john", []byte{}, 0))

	var count int
	require.NoError(t, store.Conn().QueryRow(context.Background(), `SELECT COUNT(*) FROM fiber_storage`).Scan(&count))
	require.Zero(t, count)

	val, err := store.Get("")
	require.NoError(t, err)
	require.Nil(t, val)

	// An empty key neither deletes nor errors; other entries are kept.
	require.NoError(t, store.Set("jane", []byte("doe"), 0))
	require.NoError(t, store.Delete(""))
	val, err = store.Get("jane")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), val)
}

func Test_Postgres_Operations_CancelledContext(t *testing.T) {
	store := newTestStore(t)
	defer store.Close()

	require.NoError(t, store.Set("john", []byte("doe"), 0))

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	val, err := store.GetWithContext(ctx, "john")
	require.ErrorIs(t, err, context.Canceled)
	require.Nil(t, val)

	require.ErrorIs(t, store.DeleteWithContext(ctx, "john"), context.Canceled)
	require.ErrorIs(t, store.ResetWithContext(ctx), context.Canceled)

	// The failed operations changed nothing.
	val, err = store.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), val)
}

func Test_Postgres_GC_Ticker(t *testing.T) {
	cfg := newTestConfig(t)
	cfg.GCInterval = 100 * time.Millisecond

	store := newTestStoreWithConfig(t, cfg)
	defer store.Close()

	require.NoError(t, store.Set("expiring", []byte("doe"), time.Second))
	require.NoError(t, store.Set("persistent", []byte("doe"), 0))

	// The background collector, not a manual sweep, removes the expired row.
	require.Eventually(t, func() bool {
		var count int
		err := store.Conn().QueryRow(context.Background(),
			`SELECT COUNT(*) FROM fiber_storage WHERE k = $1`, "expiring").Scan(&count)
		return err == nil && count == 0
	}, 10*time.Second, 100*time.Millisecond)

	val, err := store.Get("persistent")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), val)
}

func Test_Postgres_Close_StopsGC(t *testing.T) {
	cfg := newTestConfig(t)
	cfg.GCInterval = 50 * time.Millisecond

	store := newTestStoreWithConfig(t, cfg)
	require.NoError(t, store.Close())

	select {
	case <-store.stopped:
	default:
		t.Fatal("collector still running after Close")
	}
	require.True(t, store.closed.Load())
}
