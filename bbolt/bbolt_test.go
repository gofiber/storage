package bbolt

import (
	"bytes"
	"context"
	"fmt"
	"os"
	"path/filepath"
	"strconv"
	"strings"
	"testing"
	"time"

	"github.com/stretchr/testify/require"
	"go.etcd.io/bbolt"
	berrors "go.etcd.io/bbolt/errors"
)

var testStore *Storage

func TestMain(m *testing.M) {
	dir, err := os.MkdirTemp("", "bbolt-test")
	if err != nil {
		panic(err)
	}

	testStore = New(Config{
		Database: filepath.Join(dir, "fiber.db"),
		Bucket:   "fiber-bucket",
		Reset:    true,
	})

	code := m.Run()

	_ = testStore.Close()
	_ = os.RemoveAll(dir)
	os.Exit(code)
}

func Test_Bbolt_Set(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)
}

func Test_Bbolt_Set_Override(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	err = testStore.Set(key, val, 0)
	require.NoError(t, err)
}

func Test_Bbolt_Get(t *testing.T) {
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

func Test_Bbolt_Get_NotExist(t *testing.T) {
	result, err := testStore.Get("notexist")
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_Bbolt_Delete(t *testing.T) {
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

func Test_Bbolt_Reset(t *testing.T) {
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

func Test_Bbolt_Close(t *testing.T) {
	require.Nil(t, testStore.Close())
}

func Test_Bbolt_Conn(t *testing.T) {
	require.True(t, testStore.Conn() != nil)
}

func Benchmark_Bbolt_Set(b *testing.B) {
	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		err = testStore.Set("john", []byte("doe"), 0)
	}

	require.NoError(b, err)
}

func Benchmark_Bbolt_Get(b *testing.B) {
	err := testStore.Set("john", []byte("doe"), 0)
	require.NoError(b, err)

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_, err = testStore.Get("john")
	}

	require.NoError(b, err)
}

func Benchmark_Bbolt_SetAndDelete(b *testing.B) {
	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		_ = testStore.Set("john", []byte("doe"), 0)
		err = testStore.Delete("john")
	}

	require.NoError(b, err)
}

// newTestStore returns a storage with a database file of its own, clear of the shared testStore.
func newTestStore(t *testing.T) *Storage {
	t.Helper()

	store := New(Config{
		Database: filepath.Join(t.TempDir(), "fiber.db"),
		Bucket:   "fiber-bucket",
		Reset:    true,
	})
	t.Cleanup(func() {
		require.NoError(t, store.Close())
	})

	return store
}

func Test_Bbolt_Get_Value_Outlives_Transaction(t *testing.T) {
	var (
		store = newTestStore(t)
		key   = "john"
		val   = []byte("doe")
	)

	require.NoError(t, store.Set(key, val, 0))

	result, err := store.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)

	// Get used to point into the mmap and stay valid only inside the transaction; growing the file must not change it.
	for i := 0; i < 512; i++ {
		require.NoError(t, store.Set("filler-"+strconv.Itoa(i), make([]byte, 4096), 0))
	}

	require.Equal(t, val, result, "value returned by Get must not be aliased to the database")
}

func Test_Bbolt_Reset_Removes_Every_Key(t *testing.T) {
	store := newTestStore(t)

	// Enough keys to split the bucket across leaf pages: cursor deletion is only worth testing past one page.
	const keys = 2000
	value := bytes.Repeat([]byte("x"), 256)

	for i := 0; i < keys; i++ {
		require.NoError(t, store.Set(fmt.Sprintf("key-%06d", i), value, 0))
	}

	require.NoError(t, store.Reset())

	for i := 0; i < keys; i++ {
		result, err := store.Get(fmt.Sprintf("key-%06d", i))
		require.NoError(t, err)
		require.Zero(t, len(result))
	}

	// Count through the bucket too: a cursor that skipped entries would leave keys the lookups never named.
	remaining := 0
	require.NoError(t, store.Conn().View(func(tx *bbolt.Tx) error {
		b := tx.Bucket([]byte(store.bucket))
		require.NotNil(t, b)
		return b.ForEach(func(_, _ []byte) error {
			remaining++
			return nil
		})
	}))
	require.Zero(t, remaining)

	require.NoError(t, store.Set("john", []byte("doe"), 0))
	result, err := store.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), result)
}

func Test_Bbolt_WithContext_Canceled(t *testing.T) {
	store := newTestStore(t)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	require.ErrorIs(t, store.SetWithContext(ctx, "john", []byte("doe"), 0), context.Canceled)

	_, err := store.GetWithContext(ctx, "john")
	require.ErrorIs(t, err, context.Canceled)

	require.ErrorIs(t, store.DeleteWithContext(ctx, "john"), context.Canceled)
	require.ErrorIs(t, store.ResetWithContext(ctx), context.Canceled)
}

func Test_Bbolt_Close_Twice(t *testing.T) {
	store := New(Config{
		Database: filepath.Join(t.TempDir(), "fiber.db"),
		Bucket:   "fiber-bucket",
		Reset:    true,
	})

	require.NoError(t, store.Close())
	require.NotPanics(t, func() {
		require.NoError(t, store.Close())
	})
}

func Test_Bbolt_Reset_Keeps_Bucket_Sequence(t *testing.T) {
	store := newTestStore(t)

	require.NoError(t, store.Conn().Update(func(tx *bbolt.Tx) error {
		return tx.Bucket([]byte("fiber-bucket")).SetSequence(42)
	}))

	require.NoError(t, store.Set("john", []byte("doe"), 0))
	require.NoError(t, store.Reset())

	// Dropping and recreating the bucket would have reset this to zero.
	require.NoError(t, store.Conn().View(func(tx *bbolt.Tx) error {
		require.Equal(t, uint64(42), tx.Bucket([]byte("fiber-bucket")).Sequence())
		return nil
	}))
}

func Test_Bbolt_ReadOnly(t *testing.T) {
	path := filepath.Join(t.TempDir(), "fiber.db")

	writable := New(Config{Database: path, Bucket: "fiber-bucket", Reset: true})
	require.NoError(t, writable.Set("john", []byte("doe"), 0))
	require.NoError(t, writable.Close())

	// Opening read-only used to panic, since bucket creation needs a write transaction.
	var store *Storage
	require.NotPanics(t, func() {
		store = New(Config{Database: path, Bucket: "fiber-bucket", ReadOnly: true})
	})
	require.NotNil(t, store)
	defer store.Close() //nolint:errcheck // best effort cleanup

	result, err := store.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), result)

	// Writes report a driver error rather than leaking bbolt's own.
	require.ErrorIs(t, store.Set("jane", []byte("doe"), 0), ErrReadOnly)
	require.ErrorIs(t, store.Delete("john"), ErrReadOnly)
	require.ErrorIs(t, store.Reset(), ErrReadOnly)
}

func Test_Bbolt_ReadOnly_With_Reset(t *testing.T) {
	path := filepath.Join(t.TempDir(), "fiber.db")

	writable := New(Config{Database: path, Bucket: "fiber-bucket", Reset: true})
	require.NoError(t, writable.Close())

	// Resetting means writing, so the combination is rejected rather than silently dropping one option.
	require.Panics(t, func() {
		New(Config{Database: path, Bucket: "fiber-bucket", ReadOnly: true, Reset: true})
	})
}

func Test_Bbolt_NewFromConnection(t *testing.T) {
	conn, err := bbolt.Open(filepath.Join(t.TempDir(), "existing.db"), 0o666, nil)
	require.NoError(t, err)
	defer conn.Close() //nolint:errcheck // best effort cleanup

	store := NewFromConnection(conn, Config{Bucket: "existing_bucket", Reset: true})
	require.Same(t, conn, store.Conn())

	require.NoError(t, store.Set("john", []byte("doe"), 0))

	result, err := store.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), result)

	// The database is the caller's, so closing the storage must leave it open.
	require.NoError(t, store.Close())
	require.NoError(t, conn.Update(func(tx *bbolt.Tx) error { return nil }))
	require.ErrorIs(t, store.Set("jane", []byte("doe"), 0), ErrClosed)
}

func Test_Bbolt_NewFromConnection_Nil(t *testing.T) {
	require.Panics(t, func() {
		NewFromConnection(nil)
	})
}

func Test_Bbolt_NewFromConnection_ReadOnly(t *testing.T) {
	path := filepath.Join(t.TempDir(), "readonly.db")

	// A bucket has to exist before the database can be reopened read-only.
	seed, err := bbolt.Open(path, 0o666, nil)
	require.NoError(t, err)

	seedStore := NewFromConnection(seed, Config{Bucket: "readonly_bucket"})
	require.NoError(t, seedStore.Set("john", []byte("doe"), 0))
	require.NoError(t, seedStore.Close())
	require.NoError(t, seed.Close())

	conn, err := bbolt.Open(path, 0o666, &bbolt.Options{ReadOnly: true})
	require.NoError(t, err)
	defer conn.Close() //nolint:errcheck // best effort cleanup

	// Config.ReadOnly is left unset: the handle already says so.
	store := NewFromConnection(conn, Config{Bucket: "readonly_bucket"})

	result, err := store.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), result)

	require.ErrorIs(t, store.Set("jane", []byte("doe"), 0), ErrReadOnly)
	require.NoError(t, store.Close())
}

func Test_Bbolt_NewFromConnection_ReadOnly_From_Config(t *testing.T) {
	conn, err := bbolt.Open(filepath.Join(t.TempDir(), "writable.db"), 0o666, nil)
	require.NoError(t, err)
	defer conn.Close() //nolint:errcheck // best effort cleanup

	// A read-only storage checks the bucket rather than creating it, so seed it first.
	seedStore := NewFromConnection(conn, Config{Bucket: "readonly_bucket"})
	require.NoError(t, seedStore.Set("john", []byte("doe"), 0))
	require.NoError(t, seedStore.Close())

	// The handle is writable, so only the config asks for a read-only storage.
	store := NewFromConnection(conn, Config{Bucket: "readonly_bucket", ReadOnly: true})

	result, err := store.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), result)

	require.ErrorIs(t, store.Set("john", []byte("doe"), 0), ErrReadOnly)
	require.ErrorIs(t, store.Delete("john"), ErrReadOnly)
	require.ErrorIs(t, store.Reset(), ErrReadOnly)
	require.NoError(t, store.Close())
}

// openClosedConn returns a database handle that has already been closed.
func openClosedConn(t *testing.T) *bbolt.DB {
	t.Helper()

	conn, err := bbolt.Open(filepath.Join(t.TempDir(), "closed.db"), 0o666, nil)
	require.NoError(t, err)
	require.NoError(t, conn.Close())

	return conn
}

// dropBucket removes the storage's bucket behind its back.
func dropBucket(t *testing.T, store *Storage) {
	t.Helper()

	require.NoError(t, store.Conn().Update(func(tx *bbolt.Tx) error {
		return tx.DeleteBucket([]byte(store.bucket))
	}))
}

func Test_Bbolt_ConfigDefault(t *testing.T) {
	require.Equal(t, ConfigDefault, configDefault())

	cfg := configDefault(Config{})
	require.Equal(t, ConfigDefault.Database, cfg.Database)
	require.Equal(t, ConfigDefault.Bucket, cfg.Bucket)

	cfg = configDefault(Config{Database: "custom.db", Bucket: "custom", Timeout: time.Second, ReadOnly: true, Reset: true})
	require.Equal(t, Config{Database: "custom.db", Bucket: "custom", Timeout: time.Second, ReadOnly: true, Reset: true}, cfg)
}

func Test_Bbolt_New_Invalid_Path(t *testing.T) {
	// The parent directory does not exist, so the database cannot be created.
	path := filepath.Join(t.TempDir(), "missing", "dir", "fiber.db")

	require.Panics(t, func() {
		New(Config{Database: path})
	})
}

func Test_Bbolt_New_Locked_File_Times_Out(t *testing.T) {
	path := filepath.Join(t.TempDir(), "fiber.db")

	holder := New(Config{Database: path, Bucket: "fiber-bucket"})
	defer holder.Close() //nolint:errcheck // best effort cleanup

	// bbolt holds an exclusive file lock, so a second open waits for Timeout and fails.
	require.Panics(t, func() {
		New(Config{Database: path, Bucket: "fiber-bucket", Timeout: 50 * time.Millisecond})
	})
}

func Test_Bbolt_New_ReadOnly_Missing_Bucket(t *testing.T) {
	path := filepath.Join(t.TempDir(), "fiber.db")

	writable := New(Config{Database: path, Bucket: "fiber-bucket"})
	require.NoError(t, writable.Close())

	var recovered any
	func() {
		defer func() { recovered = recover() }()
		New(Config{Database: path, Bucket: "other-bucket", ReadOnly: true, Timeout: time.Second})
	}()
	err, ok := recovered.(error)
	require.True(t, ok)
	require.ErrorIs(t, err, ErrBucketNotFound)

	// The failed New must have released the file lock rather than leaking it.
	reopened := New(Config{Database: path, Bucket: "fiber-bucket", Timeout: time.Second})
	require.NoError(t, reopened.Close())
}

func Test_Bbolt_New_ReadOnly_With_Reset_Releases_Lock(t *testing.T) {
	path := filepath.Join(t.TempDir(), "fiber.db")

	writable := New(Config{Database: path, Bucket: "fiber-bucket"})
	require.NoError(t, writable.Close())

	require.PanicsWithError(t, "bbolt: Reset cannot be used with ReadOnly", func() {
		New(Config{Database: path, Bucket: "fiber-bucket", ReadOnly: true, Reset: true, Timeout: time.Second})
	})

	reopened := New(Config{Database: path, Bucket: "fiber-bucket", Timeout: time.Second})
	require.NoError(t, reopened.Close())
}

func Test_Bbolt_NewFromConnection_Closed_Connection(t *testing.T) {
	conn := openClosedConn(t)

	// Creating the bucket needs a write transaction, which a closed database refuses.
	require.PanicsWithValue(t, berrors.ErrDatabaseNotOpen, func() {
		NewFromConnection(conn, Config{Bucket: "fiber-bucket"})
	})

	// Same for the Reset path, which fails at the bucket removal.
	require.PanicsWithValue(t, berrors.ErrDatabaseNotOpen, func() {
		NewFromConnection(conn, Config{Bucket: "fiber-bucket", Reset: true})
	})

	// And for the read-only path, which fails at the bucket check.
	require.PanicsWithValue(t, berrors.ErrDatabaseNotOpen, func() {
		NewFromConnection(conn, Config{Bucket: "fiber-bucket", ReadOnly: true})
	})
}

func Test_Bbolt_NewFromConnection_Reset_Clears_Existing_Keys(t *testing.T) {
	conn, err := bbolt.Open(filepath.Join(t.TempDir(), "existing.db"), 0o666, nil)
	require.NoError(t, err)
	defer conn.Close() //nolint:errcheck // best effort cleanup

	first := NewFromConnection(conn, Config{Bucket: "fiber-bucket"})
	require.NoError(t, first.Set("john", []byte("doe"), 0))

	second := NewFromConnection(conn, Config{Bucket: "fiber-bucket", Reset: true})
	result, err := second.Get("john")
	require.NoError(t, err)
	require.Empty(t, result)
}

func Test_Bbolt_Closed_Storage(t *testing.T) {
	store := New(Config{Database: filepath.Join(t.TempDir(), "fiber.db"), Bucket: "fiber-bucket"})
	require.NoError(t, store.Set("john", []byte("doe"), 0))
	require.NoError(t, store.Close())

	result, err := store.Get("john")
	require.ErrorIs(t, err, ErrClosed)
	require.Nil(t, result)

	require.ErrorIs(t, store.Set("john", []byte("doe"), 0), ErrClosed)
	require.ErrorIs(t, store.Delete("john"), ErrClosed)
	require.ErrorIs(t, store.Reset(), ErrClosed)

	ctx := context.Background()
	_, err = store.GetWithContext(ctx, "john")
	require.ErrorIs(t, err, ErrClosed)
	require.ErrorIs(t, store.SetWithContext(ctx, "john", []byte("doe"), 0), ErrClosed)
	require.ErrorIs(t, store.DeleteWithContext(ctx, "john"), ErrClosed)
	require.ErrorIs(t, store.ResetWithContext(ctx), ErrClosed)
}

func Test_Bbolt_Borrowed_Connection_Closed_Elsewhere(t *testing.T) {
	conn, err := bbolt.Open(filepath.Join(t.TempDir(), "existing.db"), 0o666, nil)
	require.NoError(t, err)

	store := NewFromConnection(conn, Config{Bucket: "fiber-bucket"})
	require.NoError(t, conn.Close())

	// The storage was never closed, so the failure comes from bbolt itself.
	result, err := store.Get("john")
	require.ErrorIs(t, err, berrors.ErrDatabaseNotOpen)
	require.Nil(t, result)

	require.ErrorIs(t, store.Set("john", []byte("doe"), 0), berrors.ErrDatabaseNotOpen)
	require.ErrorIs(t, store.Delete("john"), berrors.ErrDatabaseNotOpen)
	require.ErrorIs(t, store.Reset(), berrors.ErrDatabaseNotOpen)
}

func Test_Bbolt_Empty_Key_And_Value(t *testing.T) {
	store := newTestStore(t)

	result, err := store.Get("")
	require.NoError(t, err)
	require.Nil(t, result)

	// Empty keys and values are ignored rather than stored.
	require.NoError(t, store.Set("", []byte("doe"), 0))
	require.NoError(t, store.Set("john", nil, 0))
	require.NoError(t, store.Set("jane", []byte{}, 0))
	require.NoError(t, store.Delete(""))

	for _, key := range []string{"john", "jane"} {
		result, err = store.Get(key)
		require.NoError(t, err)
		require.Nil(t, result)
	}

	count := 0
	require.NoError(t, store.Conn().View(func(tx *bbolt.Tx) error {
		return tx.Bucket([]byte(store.bucket)).ForEach(func(_, _ []byte) error {
			count++
			return nil
		})
	}))
	require.Zero(t, count)
}

func Test_Bbolt_Get_Stored_Empty_Value(t *testing.T) {
	store := newTestStore(t)

	// An empty value can only get in through Conn; Get must hand back a non-nil empty slice.
	require.NoError(t, store.Conn().Update(func(tx *bbolt.Tx) error {
		return tx.Bucket([]byte(store.bucket)).Put([]byte("john"), []byte{})
	}))

	result, err := store.Get("john")
	require.NoError(t, err)
	require.NotNil(t, result)
	require.Empty(t, result)
}

func Test_Bbolt_Delete_Removes_Key(t *testing.T) {
	store := newTestStore(t)

	require.NoError(t, store.Set("john", []byte("doe"), 0))
	require.NoError(t, store.Set("jane", []byte("doe"), 0))

	require.NoError(t, store.Delete("john"))

	result, err := store.Get("john")
	require.NoError(t, err)
	require.Nil(t, result)

	result, err = store.Get("jane")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), result)

	// Deleting a key that is not there is not an error.
	require.NoError(t, store.Delete("missing"))
}

func Test_Bbolt_Set_Key_Too_Large(t *testing.T) {
	store := newTestStore(t)

	err := store.Set(strings.Repeat("k", bbolt.MaxKeySize+1), []byte("doe"), 0)
	require.ErrorIs(t, err, berrors.ErrKeyTooLarge)

	// The failed transaction must leave the storage usable.
	require.NoError(t, store.Set("john", []byte("doe"), 0))
}

func Test_Bbolt_Bucket_Dropped_Outside_Driver(t *testing.T) {
	store := newTestStore(t)
	require.NoError(t, store.Set("john", []byte("doe"), 0))

	dropBucket(t, store)

	result, err := store.Get("john")
	require.ErrorIs(t, err, ErrBucketNotFound)
	require.Nil(t, result)

	require.ErrorIs(t, store.Set("john", []byte("doe"), 0), ErrBucketNotFound)
	require.ErrorIs(t, store.Delete("john"), ErrBucketNotFound)
	require.ErrorIs(t, store.Reset(), ErrBucketNotFound)
}

func Test_Bbolt_WithContext_Live_Context(t *testing.T) {
	store := newTestStore(t)
	ctx := context.Background()

	require.NoError(t, store.SetWithContext(ctx, "john", []byte("doe"), 0))

	result, err := store.GetWithContext(ctx, "john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), result)

	require.NoError(t, store.DeleteWithContext(ctx, "john"))

	result, err = store.GetWithContext(ctx, "john")
	require.NoError(t, err)
	require.Nil(t, result)

	require.NoError(t, store.SetWithContext(ctx, "jane", []byte("doe"), 0))
	require.NoError(t, store.ResetWithContext(ctx))

	result, err = store.GetWithContext(ctx, "jane")
	require.NoError(t, err)
	require.Nil(t, result)
}

func Test_Bbolt_WithContext_Deadline_Exceeded(t *testing.T) {
	store := newTestStore(t)

	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(-time.Second))
	defer cancel()

	require.ErrorIs(t, store.SetWithContext(ctx, "john", []byte("doe"), 0), context.DeadlineExceeded)

	result, err := store.Get("john")
	require.NoError(t, err)
	require.Nil(t, result, "a rejected write must not reach the database")
}

func Test_Bbolt_CloneBytes(t *testing.T) {
	require.Nil(t, cloneBytes(nil))

	empty := cloneBytes([]byte{})
	require.NotNil(t, empty)
	require.Empty(t, empty)

	src := []byte("doe")
	dst := cloneBytes(src)
	require.Equal(t, src, dst)
	require.Equal(t, len(src), cap(dst))

	src[0] = 'x'
	require.Equal(t, []byte("doe"), dst, "clone must not share memory with its source")
}

func Test_Bbolt_Close_After_Conn_Closed(t *testing.T) {
	store := New(Config{Database: filepath.Join(t.TempDir(), "fiber.db"), Bucket: "fiber-bucket"})

	// Closing the handle behind the storage's back makes bbolt's own close a no-op success; the
	// latch still has to flip so later operations report ErrClosed.
	require.NoError(t, store.Conn().Close())
	require.NoError(t, store.Close())
	require.ErrorIs(t, store.Set("john", []byte("doe"), 0), ErrClosed)
	require.NoError(t, store.Close())
}
