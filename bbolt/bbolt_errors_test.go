package bbolt

import (
	"context"
	"path/filepath"
	"strings"
	"testing"
	"time"

	"github.com/stretchr/testify/require"
	"go.etcd.io/bbolt"
	berrors "go.etcd.io/bbolt/errors"
)

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
