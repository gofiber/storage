package sqlite3

import (
	"context"
	"database/sql"
	"os"
	"path/filepath"
	"testing"
	"time"

	_ "github.com/mattn/go-sqlite3"
	"github.com/stretchr/testify/require"
)

var testStore *Storage

func TestMain(m *testing.M) {
	dir, err := os.MkdirTemp("", "sqlite3-test")
	if err != nil {
		panic(err)
	}

	testStore = New(Config{
		Database: filepath.Join(dir, "fiber.sqlite3"),
		Reset:    true,
	})

	code := m.Run()

	// os.Exit skips deferred cleanup, so release the database before removing its directory.
	_ = testStore.Close()
	_ = os.RemoveAll(dir)
	os.Exit(code)
}

func Test_SQLite3_Set(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)
}

func Test_SQLite3_SetWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err := testStore.SetWithContext(ctx, key, val, 0)
	require.ErrorIs(t, err, context.Canceled)
}

func Test_SQLite3_Set_Override(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	err = testStore.Set(key, val, 0)
	require.NoError(t, err)
}

func Test_SQLite3_Get(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)
}

func Test_SQLite3_GetWithContext(t *testing.T) {
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

func Test_SQLite3_Set_Expiration(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
		exp = 1 * time.Second
	)

	err := testStore.Set(key, val, exp)
	require.NoError(t, err)
}

func Test_SQLite3_Get_Expired(t *testing.T) {
	key := "john"

	// The deadline is stored in whole seconds and rounded up, so the entry may outlive it by one.
	deadline := time.Now().Add(4 * time.Second)
	for {
		result, err := testStore.Get(key)
		require.NoError(t, err)
		require.False(t, time.Now().After(deadline), "key should expire")
		if len(result) == 0 {
			return
		}
		time.Sleep(100 * time.Millisecond)
	}
}

func Test_SQLite3_Get_NotExist(t *testing.T) {
	result, err := testStore.Get("notexist")
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_SQLite3_Delete(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	err = testStore.Delete(key)
	require.NoError(t, err)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_SQLite3_DeleteWithContext(t *testing.T) {
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

func Test_SQLite3_Reset(t *testing.T) {
	val := []byte("doe")

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

func Test_SQLite3_ResetWithContext(t *testing.T) {
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

func Test_SQLite3_GC(t *testing.T) {
	testVal := []byte("doe")

	// Its deadline rounds up to a whole second, so collect as of a moment safely past it.
	err := testStore.Set("john", testVal, time.Nanosecond)
	require.NoError(t, err)

	testStore.gc(context.Background(), time.Now().Add(2*time.Second))
	row := testStore.db.QueryRow(testStore.sqlSelect, "john")
	err = row.Scan(nil, nil)
	require.Equal(t, sql.ErrNoRows, err)

	// This key should not expire
	err = testStore.Set("john", testVal, 0)
	require.NoError(t, err)

	testStore.gc(context.Background(), time.Now())
	val, err := testStore.Get("john")
	require.NoError(t, err)
	require.Equal(t, testVal, val)
}

func Test_SQLite3_Non_UTF8(t *testing.T) {
	val := []byte("0xF5")

	err := testStore.Set("0xF6", val, 0)
	require.NoError(t, err)

	result, err := testStore.Get("0xF6")
	require.NoError(t, err)
	require.Equal(t, val, result)
}

func Test_SQLite3_Close(t *testing.T) {
	require.Nil(t, testStore.Close())
}

func Test_SQLite3_Conn(t *testing.T) {
	require.True(t, testStore.Conn() != nil)
}

func Benchmark_SQLite3_Set(b *testing.B) {
	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		err = testStore.Set("john", []byte("doe"), 0)
	}

	require.NoError(b, err)
}

func Benchmark_SQLite3_Get(b *testing.B) {
	err := testStore.Set("john", []byte("doe"), 0)
	require.NoError(b, err)

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_, err = testStore.Get("john")
	}

	require.NoError(b, err)
}

func Benchmark_SQLite3_SetAndDelete(b *testing.B) {
	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		_ = testStore.Set("john", []byte("doe"), 0)
		err = testStore.Delete("john")
	}

	require.NoError(b, err)
}

func Test_SQLite3_Config_SubSecond_GCInterval(t *testing.T) {
	// A sub-second interval used to truncate to zero and be replaced by the ten second default.
	require.Equal(t, 50*time.Millisecond, configDefault(Config{GCInterval: 50 * time.Millisecond}).GCInterval)

	require.Equal(t, ConfigDefault.GCInterval, configDefault(Config{GCInterval: 0}).GCInterval)
	require.Equal(t, ConfigDefault.GCInterval, configDefault(Config{GCInterval: -time.Second}).GCInterval)
}

func Test_SQLite3_Close_Twice(t *testing.T) {
	store := New(Config{Database: filepath.Join(t.TempDir(), "close.sqlite3"), Reset: true})

	require.NoError(t, store.Close())
	require.NotPanics(t, func() {
		require.NoError(t, store.Close())
	})
}

func Test_SQLite3_Set_Sub_Second_Expiration(t *testing.T) {
	store := New(Config{Database: filepath.Join(t.TempDir(), "exp.sqlite3"), Reset: true})
	defer store.Close() //nolint:errcheck // best effort cleanup

	// The deadline is stored in whole seconds, so a sub-second expiration must round up.
	require.NoError(t, store.Set("john", []byte("doe"), 100*time.Millisecond))

	result, err := store.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), result, "key expired before its expiration")
}

func Test_SQLite3_NewFromConnection(t *testing.T) {
	db, err := sql.Open("sqlite3", filepath.Join(t.TempDir(), "existing.sqlite3"))
	require.NoError(t, err)
	defer db.Close() //nolint:errcheck // best effort cleanup

	store := NewFromConnection(db, Config{Table: "existing_storage", Reset: true})

	require.NoError(t, store.Set("john", []byte("doe"), 0))

	result, err := store.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), result)

	require.Same(t, db, store.Conn())

	// The handle is the caller's, so closing the storage must leave it usable.
	require.NoError(t, store.Close())
	require.NoError(t, db.Ping())
	require.ErrorIs(t, store.Set("jane", []byte("doe"), 0), ErrClosed)
}

func Test_SQLite3_NewFromConnection_Nil(t *testing.T) {
	require.Panics(t, func() {
		NewFromConnection(nil)
	})
}

func Test_SQLite3_Config_Defaults(t *testing.T) {
	require.Equal(t, ConfigDefault, configDefault())

	cfg := configDefault(Config{})
	require.Equal(t, ConfigDefault, cfg)

	cfg = configDefault(Config{
		Database:        "custom.sqlite3",
		Table:           "custom_table",
		GCInterval:      time.Minute,
		MaxIdleConns:    3,
		MaxOpenConns:    4,
		ConnMaxLifetime: time.Hour,
	})
	require.Equal(t, "custom.sqlite3", cfg.Database)
	require.Equal(t, "custom_table", cfg.Table)
	require.Equal(t, time.Minute, cfg.GCInterval)
	require.Equal(t, 3, cfg.MaxIdleConns)
	require.Equal(t, 4, cfg.MaxOpenConns)
	require.Equal(t, time.Hour, cfg.ConnMaxLifetime)

	cfg = configDefault(Config{MaxIdleConns: -1, MaxOpenConns: -1})
	require.Equal(t, ConfigDefault.MaxIdleConns, cfg.MaxIdleConns)
	require.Equal(t, ConfigDefault.MaxOpenConns, cfg.MaxOpenConns)
}

func Test_SQLite3_ValidateTableName(t *testing.T) {
	for _, name := range []string{"fiber_storage", "_t", "T1", "a_b_2"} {
		require.NoError(t, validateTableName(name), name)
	}

	for _, name := range []string{"1table", "bad-name", "with space", "x; DROP TABLE y", `quo"te`, "dot.ted"} {
		err := validateTableName(name)
		require.Error(t, err, name)
		require.Contains(t, err.Error(), "invalid table name")
	}
}

func Test_SQLite3_New_InvalidTableName(t *testing.T) {
	require.PanicsWithError(t, `sqlite3: invalid table name "bad-name": only letters, digits and underscores are allowed, and it may not start with a digit`, func() {
		New(Config{Database: filepath.Join(t.TempDir(), "invalid.sqlite3"), Table: "bad-name"})
	})

	db, err := sql.Open("sqlite3", filepath.Join(t.TempDir(), "invalid_conn.sqlite3"))
	require.NoError(t, err)
	defer db.Close() //nolint:errcheck // best effort cleanup

	require.Panics(t, func() {
		NewFromConnection(db, Config{Table: "x; DROP TABLE y"})
	})
	// A borrowed handle must survive the refusal.
	require.NoError(t, db.Ping())
}

func Test_SQLite3_New_PingFailure(t *testing.T) {
	// The parent directory does not exist, so the database file can not be opened.
	require.Panics(t, func() {
		New(Config{Database: filepath.Join(t.TempDir(), "missing", "dir", "fiber.sqlite3")})
	})

	db, err := sql.Open("sqlite3", filepath.Join(t.TempDir(), "closed.sqlite3"))
	require.NoError(t, err)
	require.NoError(t, db.Close())

	require.Panics(t, func() {
		NewFromConnection(db)
	})
}

func Test_SQLite3_New_ResetFailure(t *testing.T) {
	db, err := sql.Open("sqlite3", filepath.Join(t.TempDir(), "reset.sqlite3"))
	require.NoError(t, err)
	defer db.Close() //nolint:errcheck // best effort cleanup

	// DROP TABLE refuses to drop a view, so Reset fails on a name that is taken by one.
	_, err = db.Exec(`CREATE VIEW taken AS SELECT 1 AS k;`)
	require.NoError(t, err)

	require.Panics(t, func() {
		NewFromConnection(db, Config{Table: "taken", Reset: true})
	})

	// The view must be untouched and the borrowed handle still usable.
	var n int
	require.NoError(t, db.QueryRow(`SELECT k FROM taken;`).Scan(&n))
	require.Equal(t, 1, n)
}

func Test_SQLite3_New_InitFailure(t *testing.T) {
	path := filepath.Join(t.TempDir(), "init.sqlite3")

	// The table is created first, then the index named "e" collides with the table of the same name.
	require.Panics(t, func() {
		New(Config{Database: path, Table: "e"})
	})

	// The failed attempt must have released the file: it can be opened and inspected again.
	db, err := sql.Open("sqlite3", path)
	require.NoError(t, err)
	defer db.Close() //nolint:errcheck // best effort cleanup

	var name string
	require.NoError(t, db.QueryRow(`SELECT name FROM sqlite_master WHERE type = 'table' AND name = 'e';`).Scan(&name))
	require.Equal(t, "e", name)
}

func Test_SQLite3_Closed(t *testing.T) {
	store := New(Config{Database: filepath.Join(t.TempDir(), "closed.sqlite3"), Reset: true})
	require.NoError(t, store.Set("john", []byte("doe"), 0))
	require.NoError(t, store.Close())

	ctx := context.Background()

	val, err := store.Get("john")
	require.ErrorIs(t, err, ErrClosed)
	require.Nil(t, val)

	val, err = store.GetWithContext(ctx, "john")
	require.ErrorIs(t, err, ErrClosed)
	require.Nil(t, val)

	require.ErrorIs(t, store.Set("john", []byte("doe"), 0), ErrClosed)
	require.ErrorIs(t, store.SetWithContext(ctx, "john", []byte("doe"), 0), ErrClosed)
	require.ErrorIs(t, store.Delete("john"), ErrClosed)
	require.ErrorIs(t, store.DeleteWithContext(ctx, "john"), ErrClosed)
	require.ErrorIs(t, store.Reset(), ErrClosed)
	require.ErrorIs(t, store.ResetWithContext(ctx), ErrClosed)
}

func Test_SQLite3_EmptyKeyAndValue(t *testing.T) {
	store := New(Config{Database: filepath.Join(t.TempDir(), "empty.sqlite3"), Reset: true})
	defer store.Close() //nolint:errcheck // best effort cleanup

	// Empty keys and values are ignored rather than stored.
	require.NoError(t, store.Set("", []byte("doe"), 0))
	require.NoError(t, store.Set("john", nil, 0))
	require.NoError(t, store.Set("john", []byte{}, 0))

	var count int
	require.NoError(t, store.Conn().QueryRow(`SELECT COUNT(*) FROM fiber_storage;`).Scan(&count))
	require.Equal(t, 0, count)

	val, err := store.Get("")
	require.NoError(t, err)
	require.Nil(t, val)

	require.NoError(t, store.Set("john", []byte("doe"), 0))
	require.NoError(t, store.Delete(""))

	val, err = store.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), val)
}

func Test_SQLite3_ContextCancelled(t *testing.T) {
	store := New(Config{Database: filepath.Join(t.TempDir(), "ctx.sqlite3"), Reset: true})
	defer store.Close() //nolint:errcheck // best effort cleanup

	require.NoError(t, store.Set("john", []byte("doe"), 0))

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	val, err := store.GetWithContext(ctx, "john")
	require.ErrorIs(t, err, context.Canceled)
	require.Nil(t, val)

	require.ErrorIs(t, store.DeleteWithContext(ctx, "john"), context.Canceled)
	require.ErrorIs(t, store.ResetWithContext(ctx), context.Canceled)

	// Nothing was changed by the cancelled calls.
	val, err = store.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), val)
}

func Test_SQLite3_Get_ScanError(t *testing.T) {
	store := New(Config{Database: filepath.Join(t.TempDir(), "scan.sqlite3"), Reset: true})
	defer store.Close() //nolint:errcheck // best effort cleanup

	// A corrupted expiration column that is not a number can not be scanned.
	_, err := store.Conn().Exec(`INSERT INTO fiber_storage (k, v, e) VALUES ('broken', 'x', 'not-a-number');`)
	require.NoError(t, err)

	val, err := store.Get("broken")
	require.Error(t, err)
	require.Nil(t, val)
}

func Test_SQLite3_Operations_TableDropped(t *testing.T) {
	store := New(Config{Database: filepath.Join(t.TempDir(), "dropped.sqlite3"), Reset: true})
	defer store.Close() //nolint:errcheck // best effort cleanup

	_, err := store.Conn().Exec(`DROP TABLE fiber_storage;`)
	require.NoError(t, err)

	val, err := store.Get("john")
	require.Error(t, err)
	require.Nil(t, val)
	require.Error(t, store.Set("john", []byte("doe"), 0))
	require.Error(t, store.Delete("john"))
	require.Error(t, store.Reset())
}

func Test_SQLite3_GC_RemovesExpiredOnly(t *testing.T) {
	store := New(Config{
		Database:   filepath.Join(t.TempDir(), "gc.sqlite3"),
		Reset:      true,
		GCInterval: 10 * time.Millisecond,
	})
	defer store.Close() //nolint:errcheck // best effort cleanup

	now := time.Now().Unix()
	for k, e := range map[string]int64{"expired": now - 100, "forever": 0, "future": now + 3600} {
		_, err := store.Conn().Exec(`INSERT INTO fiber_storage (k, v, e) VALUES (?, 'v', ?);`, k, e)
		require.NoError(t, err)
	}

	count := func(key string) int {
		var n int
		require.NoError(t, store.Conn().QueryRow(`SELECT COUNT(*) FROM fiber_storage WHERE k = ?;`, key).Scan(&n))
		return n
	}

	require.Eventually(t, func() bool { return count("expired") == 0 }, 5*time.Second, 10*time.Millisecond)
	require.Equal(t, 1, count("forever"))
	require.Equal(t, 1, count("future"))
}

func Test_SQLite3_Close_BorrowedHandleClosed(t *testing.T) {
	// A closed borrowed handle is not the storage's to report on, and Close stays clean.
	db, err := sql.Open("sqlite3", filepath.Join(t.TempDir(), "borrowed.sqlite3"))
	require.NoError(t, err)

	store := NewFromConnection(db)
	require.NoError(t, db.Close())
	require.NoError(t, store.Close())
	require.NoError(t, store.Close())
}
