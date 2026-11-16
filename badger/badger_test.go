package badger

import (
	"bytes"
	"context"
	"crypto/rand"
	"fmt"
	"path/filepath"
	"strings"
	"sync"
	"sync/atomic"
	"testing"
	"time"

	"github.com/dgraph-io/badger/v3"
	"github.com/stretchr/testify/require"
)

var testStore = New(Config{
	Reset: true,
})

func Test_Badger_Set(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)
}

func Test_Badger_Set_Override(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	err = testStore.Set(key, val, 0)
	require.NoError(t, err)
}

func Test_Badger_Get(t *testing.T) {
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

func Test_Badger_Set_Expiration(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
		exp = 1 * time.Second
	)

	err := testStore.Set(key, val, exp)
	require.NoError(t, err)

	time.Sleep(1100 * time.Millisecond)
}

func Test_Badger_Get_Expired(t *testing.T) {
	key := "john"

	// Badger TTLs land on a whole second and round up, so the entry may outlive its expiration by one.
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

func Test_Badger_Get_NotExist(t *testing.T) {
	result, err := testStore.Get("notexist")
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_Badger_Delete(t *testing.T) {
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

func Test_Badger_Reset(t *testing.T) {
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

func Test_Badger_Close(t *testing.T) {
	require.Nil(t, testStore.Close())
}

func Test_Badger_Conn(t *testing.T) {
	require.True(t, testStore.Conn() != nil)
}

func Benchmark_Badger_Set(b *testing.B) {
	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		err = testStore.Set("john", []byte("doe"), 0)
	}

	require.NoError(b, err)
}

func Benchmark_Badger_Get(b *testing.B) {
	err := testStore.Set("john", []byte("doe"), 0)
	require.NoError(b, err)

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_, err = testStore.Get("john")
	}

	require.NoError(b, err)
}

func Benchmark_Badger_SetAndDelete(b *testing.B) {
	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		_ = testStore.Set("john", []byte("doe"), 0)
		err = testStore.Delete("john")
	}

	require.NoError(b, err)
}

// testOptions returns Badger's defaults for dir with its logger off, which keeps the test output quiet.
func testOptions(dir string) badger.Options {
	return badger.DefaultOptions(dir).WithLogger(nil)
}

// newTestStore returns a storage with a database of its own, clear of the shared testStore.
func newTestStore(t *testing.T) *Storage {
	t.Helper()

	dir := t.TempDir()

	return New(Config{
		Database:      dir,
		BadgerOptions: testOptions(dir),
		Reset:         true,
	})
}

func Test_Badger_Close_Twice(t *testing.T) {
	store := newTestStore(t)

	require.NoError(t, store.Close())
	require.NotPanics(t, func() {
		require.NoError(t, store.Close())
	})
}

func Test_Badger_WithContext_Canceled(t *testing.T) {
	store := newTestStore(t)
	defer store.Close() //nolint:errcheck // best effort cleanup

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	require.ErrorIs(t, store.SetWithContext(ctx, "john", []byte("doe"), 0), context.Canceled)

	_, err := store.GetWithContext(ctx, "john")
	require.ErrorIs(t, err, context.Canceled)

	require.ErrorIs(t, store.DeleteWithContext(ctx, "john"), context.Canceled)
	require.ErrorIs(t, store.ResetWithContext(ctx), context.Canceled)
}

func Test_Badger_Set_Sub_Second_Expiration(t *testing.T) {
	store := newTestStore(t)
	defer store.Close() //nolint:errcheck // best effort cleanup

	var (
		key = "john"
		val = []byte("doe")
	)

	// Badger truncates a TTL to a whole second, so a sub-second expiration must round up.
	require.NoError(t, store.Set(key, val, 900*time.Millisecond))

	result, err := store.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result, "key expired before its expiration")
}

func Test_Badger_Config_SubSecond_GCInterval(t *testing.T) {
	// A sub-second interval used to truncate to zero and be replaced by the ten second default.
	require.Equal(t, 50*time.Millisecond, configDefault(Config{GCInterval: 50 * time.Millisecond}).GCInterval)

	require.Equal(t, ConfigDefault.GCInterval, configDefault(Config{GCInterval: 0}).GCInterval)
	require.Equal(t, ConfigDefault.GCInterval, configDefault(Config{GCInterval: -time.Second}).GCInterval)
}

func Test_Badger_NewFromConnection(t *testing.T) {
	db, err := badger.Open(testOptions(t.TempDir()))
	require.NoError(t, err)
	defer db.Close() //nolint:errcheck // best effort cleanup

	store := NewFromConnection(db, Config{Reset: true})
	require.Same(t, db, store.Conn())

	require.NoError(t, store.Set("john", []byte("doe"), 0))

	result, err := store.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), result)

	// The database is the caller's, so closing the storage must leave it open.
	require.NoError(t, store.Close())
	require.False(t, db.IsClosed())

	// The storage itself is closed even though the database stays open.
	require.ErrorIs(t, store.Set("jane", []byte("doe"), 0), ErrClosed)
	_, err = store.Get("john")
	require.ErrorIs(t, err, ErrClosed)
}

func Test_Badger_NewFromConnection_Nil(t *testing.T) {
	require.Panics(t, func() {
		NewFromConnection(nil)
	})
}

type testLogger struct{}

func (testLogger) Errorf(string, ...any)   {}
func (testLogger) Warningf(string, ...any) {}
func (testLogger) Infof(string, ...any)    {}
func (testLogger) Debugf(string, ...any)   {}

func Test_Badger_Closed_Operations(t *testing.T) {
	store := newTestStore(t)
	require.NoError(t, store.Set("john", []byte("doe"), 0))
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
}

func Test_Badger_WithContext(t *testing.T) {
	store := newTestStore(t)
	defer store.Close() //nolint:errcheck // best effort cleanup

	ctx := context.Background()

	require.NoError(t, store.SetWithContext(ctx, "john", []byte("doe"), 0))

	result, err := store.GetWithContext(ctx, "john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), result)

	require.NoError(t, store.DeleteWithContext(ctx, "john"))
	result, err = store.GetWithContext(ctx, "john")
	require.NoError(t, err)
	require.Zero(t, len(result))

	require.NoError(t, store.SetWithContext(ctx, "jane", []byte("doe"), 0))
	require.NoError(t, store.ResetWithContext(ctx))
	result, err = store.GetWithContext(ctx, "jane")
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_Badger_Empty_Key_And_Value(t *testing.T) {
	store := newTestStore(t)
	defer store.Close() //nolint:errcheck // best effort cleanup

	// Empty keys and values are ignored rather than stored.
	require.NoError(t, store.Set("", []byte("doe"), 0))
	require.NoError(t, store.Set("john", nil, 0))
	require.NoError(t, store.Delete(""))

	result, err := store.Get("")
	require.NoError(t, err)
	require.Zero(t, len(result))

	result, err = store.Get("john")
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_Badger_Underlying_DB_Closed(t *testing.T) {
	store := newTestStore(t)

	// Closing the borrowed handle behind the storage's back surfaces Badger's own errors.
	require.NoError(t, store.Conn().Close())

	_, err := store.Get("john")
	require.ErrorIs(t, err, badger.ErrDBClosed)
	require.ErrorIs(t, store.Set("john", []byte("doe"), 0), badger.ErrDBClosed)
	require.ErrorIs(t, store.Delete("john"), badger.ErrDBClosed)
	require.Error(t, store.Reset())

	require.NoError(t, store.Close())
}

func Test_Badger_New_Directory_Locked(t *testing.T) {
	dir := t.TempDir()

	first := New(Config{Database: dir, BadgerOptions: testOptions(dir)})
	defer first.Close() //nolint:errcheck // best effort cleanup

	// Badger allows a single process handle per directory, so a second open must fail loudly.
	require.Panics(t, func() {
		New(Config{Database: dir, BadgerOptions: testOptions(dir)})
	})
}

func Test_Badger_NewFromConnection_Reset_Error(t *testing.T) {
	db, err := badger.Open(testOptions(t.TempDir()))
	require.NoError(t, err)
	require.NoError(t, db.Close())

	// Reset on a database that is already closed cannot succeed and must not be swallowed.
	require.Panics(t, func() {
		NewFromConnection(db, Config{Reset: true})
	})
}

func Test_Badger_NewFromConnection_Reset_Drops_Keys(t *testing.T) {
	db, err := badger.Open(testOptions(t.TempDir()))
	require.NoError(t, err)
	defer db.Close() //nolint:errcheck // best effort cleanup

	first := NewFromConnection(db)
	require.NoError(t, first.Set("john", []byte("doe"), 0))
	require.NoError(t, first.Close())

	second := NewFromConnection(db, Config{Reset: true})
	defer second.Close() //nolint:errcheck // best effort cleanup

	result, err := second.Get("john")
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_Badger_Garbage_Collector_Does_Not_Disturb_Data(t *testing.T) {
	dir := t.TempDir()

	store := New(Config{
		Database:      dir,
		BadgerOptions: testOptions(dir),
		GCInterval:    10 * time.Millisecond,
	})

	require.NoError(t, store.Set("john", []byte("doe"), 0))
	time.Sleep(50 * time.Millisecond) // lets a few sweeps run

	// The collector sweeps in the background without disturbing stored data, and Close waits for it.
	result, err := store.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), result)
	require.NoError(t, store.Close())
}

func Test_Badger_Garbage_Collector_Reclaims_Large_Values(t *testing.T) {
	dir := t.TempDir()

	// Values from ValueThreshold up leave only a pointer in the memtable, so it never fills and compacts on its own.
	store := New(Config{
		Database:      dir,
		BadgerOptions: testOptions(dir).WithValueThreshold(1 << 10).WithValueLogFileSize(1 << 20),
		GCInterval:    time.Hour,
	})
	defer store.Close() //nolint:errcheck // best effort cleanup

	live := bytes.Repeat([]byte("x"), 64<<10)
	require.NoError(t, store.Set("live", live, 0))

	// Six value-log files' worth of distinct keys, all expiring.
	val := make([]byte, 64<<10)
	for i := range 96 {
		require.NoError(t, store.Set(fmt.Sprintf("key%d", i), val, time.Second))
	}
	require.Eventually(t, func() bool {
		result, err := store.Get("key95")
		return err == nil && result == nil
	}, 5*time.Second, 50*time.Millisecond)

	store.collect()

	files, err := filepath.Glob(filepath.Join(dir, "*.vlog"))
	require.NoError(t, err)
	require.LessOrEqual(t, len(files), 2, "expired values were not collected")
	require.Zero(t, store.vlogWritten.Load(), "the next collect would flush again without new writes")

	result, err := store.Get("live")
	require.NoError(t, err)
	require.Equal(t, live, result)
}

func Test_Badger_Garbage_Collector_Reclaims_After_Reopen(t *testing.T) {
	dir := t.TempDir()
	cfg := Config{
		Database:      dir,
		BadgerOptions: testOptions(dir).WithValueThreshold(1 << 10).WithValueLogFileSize(1 << 20),
		GCInterval:    time.Hour,
	}

	// Written by an earlier process, so the next one has counted none of it.
	store := New(cfg)
	val := make([]byte, 64<<10)
	for i := range 96 {
		require.NoError(t, store.Set(fmt.Sprintf("key%d", i), val, time.Second))
	}
	require.NoError(t, store.Close())

	store = New(cfg)
	defer store.Close() //nolint:errcheck // best effort cleanup
	require.Eventually(t, func() bool {
		result, err := store.Get("key95")
		return err == nil && result == nil
	}, 5*time.Second, 50*time.Millisecond)

	store.collect()

	files, err := filepath.Glob(filepath.Join(dir, "*.vlog"))
	require.NoError(t, err)
	require.LessOrEqual(t, len(files), 2, "values expired before the restart were not collected")
}

func Test_Badger_Garbage_Collector_Does_Not_Flush_A_Shared_Database(t *testing.T) {
	db, err := badger.Open(testOptions(t.TempDir()).WithValueThreshold(1 << 10).WithValueLogFileSize(1 << 20))
	require.NoError(t, err)
	defer db.Close() //nolint:errcheck // best effort cleanup

	store := NewFromConnection(db, Config{GCInterval: time.Hour})
	defer store.Close() //nolint:errcheck // best effort cleanup

	val := make([]byte, 64<<10)
	for i := range 17 {
		require.NoError(t, store.Set(fmt.Sprintf("key%d", i), val, 0))
	}
	store.collect()

	// A flush would have failed the application's own writes meanwhile.
	require.Empty(t, db.Tables(), "the memtable was flushed")
}

func Test_Badger_Garbage_Collector_Reclaims_Ascending_Keys(t *testing.T) {
	dir := t.TempDir()

	store := New(Config{
		Database:      dir,
		BadgerOptions: testOptions(dir).WithValueThreshold(1 << 10).WithValueLogFileSize(1 << 20),
		GCInterval:    time.Hour,
	})
	defer store.Close() //nolint:errcheck // best effort cleanup

	// Flushed while still live, these values reach the base level before they expire.
	val := make([]byte, 64<<10)
	for i := range 96 {
		require.NoError(t, store.Set(fmt.Sprintf("a%03d", i), val, 2*time.Second))
	}
	result, err := store.Get("a095")
	require.NoError(t, err)
	require.NotNil(t, result, "values must still be live at the first flush")
	store.collect()
	require.Eventually(t, func() bool {
		result, err := store.Get("a095")
		return err == nil && result == nil
	}, 6*time.Second, 50*time.Millisecond)

	// Every later key sorts after them, so a flush of these alone never overlaps their table.
	for i := range 17 {
		require.NoError(t, store.Set(fmt.Sprintf("b%03d", i), val, 0))
	}
	store.collect()

	files, err := filepath.Glob(filepath.Join(dir, "*.vlog"))
	require.NoError(t, err)
	require.LessOrEqual(t, len(files), 3, "expired values on the base level were not collected")
}

func Test_Badger_Garbage_Collector_Reclaims_Below_The_Base_Level(t *testing.T) {
	dir := t.TempDir()

	store := New(Config{
		Database:      dir,
		BadgerOptions: testOptions(dir).WithValueThreshold(1 << 10).WithValueLogFileSize(1 << 20).WithBaseLevelSize(64 << 10),
		GCInterval:    time.Hour,
	})
	defer store.Close() //nolint:errcheck // best effort cleanup

	// Small values beyond BaseLevelSize on the last level move the base level up.
	for i := range 2000 {
		session := make([]byte, 200)
		_, _ = rand.Read(session) // incompressible, so the level outgrows BaseLevelSize
		require.NoError(t, store.Set(fmt.Sprintf("session%04d", i), session, 0))
	}
	val := make([]byte, 64<<10)
	for i := range 17 {
		require.NoError(t, store.Set(fmt.Sprintf("live%d", i), val, 0))
	}
	store.collect()
	levels := store.db.Levels()
	require.False(t, levels[len(levels)-1].IsBaseLevel, "the LSM must span more than one level")

	for i := range 96 {
		require.NoError(t, store.Set(fmt.Sprintf("key%d", i), val, time.Second))
	}
	require.Eventually(t, func() bool {
		result, err := store.Get("key95")
		return err == nil && result == nil
	}, 5*time.Second, 50*time.Millisecond)

	store.collect()

	files, err := filepath.Glob(filepath.Join(dir, "*.vlog"))
	require.NoError(t, err)
	require.LessOrEqual(t, len(files), 3, "expired values above the last level were not collected")

	result, err := store.Get("session1999")
	require.NoError(t, err)
	require.Len(t, result, 200)
}

func Test_Badger_Garbage_Collector_Does_Not_Flush_A_Fresh_Store(t *testing.T) {
	dir := t.TempDir()

	store := New(Config{Database: dir, BadgerOptions: testOptions(dir), GCInterval: time.Hour})
	defer store.Close() //nolint:errcheck // best effort cleanup

	require.NoError(t, store.Set("john", []byte("doe"), 0))
	store.collect()

	require.Empty(t, store.db.Tables(), "a new database has nothing for a flush to reclaim")
}

// logHook runs fn the first time Badger logs a message starting with prefix.
type logHook struct {
	testLogger
	once   sync.Once
	prefix string
	fn     func()
}

func (h *logHook) Infof(format string, _ ...any) {
	if strings.HasPrefix(format, h.prefix) {
		h.once.Do(h.fn)
	}
}

func Test_Badger_Reset_Waits_For_Flatten(t *testing.T) {
	dir := t.TempDir()

	var store *Storage
	var resetDone, resetDuringFlatten atomic.Bool
	hook := &logHook{prefix: "Attempting to compact"}
	hook.fn = func() {
		go func() {
			_ = store.Reset() //nolint:errcheck // only its timing matters
			resetDone.Store(true)
		}()
		time.Sleep(100 * time.Millisecond)
		resetDuringFlatten.Store(resetDone.Load())
	}
	store = New(Config{
		Database: dir,
		BadgerOptions: testOptions(dir).WithValueThreshold(1 << 10).WithValueLogFileSize(1 << 20).
			WithBaseLevelSize(64 << 10).WithLogger(hook),
		GCInterval: time.Hour,
	})
	defer store.Close() //nolint:errcheck // best effort cleanup

	// Two flushes over more than BaseLevelSize of small values, so Flatten has a level to compact.
	val := make([]byte, 64<<10)
	for round := range 2 {
		for i := range 2000 {
			session := make([]byte, 200)
			_, _ = rand.Read(session)
			require.NoError(t, store.Set(fmt.Sprintf("session%d-%04d", round, i), session, 0))
		}
		for i := range 17 {
			require.NoError(t, store.Set(fmt.Sprintf("large%d-%d", round, i), val, 0))
		}
		store.collect()
	}

	require.Eventually(t, resetDone.Load, 5*time.Second, 10*time.Millisecond, "Flatten never compacted")
	// DropAll restarting the compactors under a running Flatten leaks them, and they crash after Close.
	require.False(t, resetDuringFlatten.Load(), "Reset ran while Flatten did")
}

func Test_Badger_Reset_Waits_For_Value_Log_Rewrite(t *testing.T) {
	dir := t.TempDir()

	var store *Storage
	var resetDone, resetDuringRewrite atomic.Bool
	hook := &logHook{prefix: "Rewriting fid"}
	hook.fn = func() {
		go func() {
			_ = store.Reset() //nolint:errcheck // only its timing matters
			resetDone.Store(true)
		}()
		time.Sleep(100 * time.Millisecond)
		resetDuringRewrite.Store(resetDone.Load())
	}
	store = New(Config{
		Database:      dir,
		BadgerOptions: testOptions(dir).WithValueThreshold(1 << 10).WithValueLogFileSize(1 << 20).WithLogger(hook),
		GCInterval:    time.Hour,
	})
	defer store.Close() //nolint:errcheck // best effort cleanup

	val := make([]byte, 64<<10)
	for i := range 96 {
		require.NoError(t, store.Set(fmt.Sprintf("key%d", i), val, time.Second))
	}
	require.Eventually(t, func() bool {
		result, err := store.Get("key95")
		return err == nil && result == nil
	}, 5*time.Second, 50*time.Millisecond)

	store.collect()

	require.Eventually(t, resetDone.Load, 5*time.Second, 10*time.Millisecond, "no value-log file was rewritten")
	// DropAll deleting the file a rewrite reads crashes the process.
	require.False(t, resetDuringRewrite.Load(), "Reset ran while a value-log file was rewritten")
}

func Test_Badger_Reset_After_Close_Is_Refused(t *testing.T) {
	db, err := badger.Open(testOptions(t.TempDir()))
	require.NoError(t, err)
	defer db.Close() //nolint:errcheck // best effort cleanup

	store := NewFromConnection(db, Config{GCInterval: time.Hour})
	require.NoError(t, store.Set("john", []byte("doe"), 0))

	// Held as by the collector, so Reset waits while Close latches.
	store.collecting.Lock()
	resetErr := make(chan error, 1)
	go func() { resetErr <- store.Reset() }()
	time.Sleep(50 * time.Millisecond)
	store.closed.Store(true)
	store.collecting.Unlock()

	require.ErrorIs(t, <-resetErr, ErrClosed)
	require.NoError(t, db.View(func(tx *badger.Txn) error {
		_, err := tx.Get([]byte("john"))
		return err
	}), "Reset dropped the keys of a closed storage")
}

func Test_Badger_Close_Waits_For_Reset(t *testing.T) {
	db, err := badger.Open(testOptions(t.TempDir()))
	require.NoError(t, err)
	defer db.Close() //nolint:errcheck // best effort cleanup

	store := NewFromConnection(db, Config{GCInterval: time.Hour})

	// Held as by a Reset running its DropAll.
	store.collecting.Lock()
	closeErr := make(chan error, 1)
	go func() { closeErr <- store.Close() }()
	time.Sleep(50 * time.Millisecond)
	require.False(t, store.isClosed(), "Close latched during a Reset")
	store.collecting.Unlock()

	require.NoError(t, <-closeErr)
	require.True(t, store.isClosed())
}

func Test_Badger_Garbage_Collector_Flush_Keeps_Writes_Working(t *testing.T) {
	dir := t.TempDir()

	store := New(Config{
		Database:      dir,
		BadgerOptions: testOptions(dir).WithValueThreshold(1 << 10).WithValueLogFileSize(1 << 20),
		GCInterval:    time.Hour,
	})
	defer store.Close() //nolint:errcheck // best effort cleanup

	// A value-log file's worth of large values, so collect flushes.
	val := make([]byte, 64<<10)
	for i := range 17 {
		require.NoError(t, store.Set(fmt.Sprintf("key%d", i), val, 0))
	}

	stop := make(chan struct{})
	errs := make(chan error, 4)
	var wg sync.WaitGroup
	for i := range 4 {
		wg.Go(func() {
			key := fmt.Sprintf("writer%d", i)
			for {
				select {
				case <-stop:
					return
				default:
				}
				if err := store.Set(key, []byte("v"), 0); err != nil {
					errs <- err
					return
				}
				if err := store.Delete(key); err != nil {
					errs <- err
					return
				}
			}
		})
	}

	store.collect()
	close(stop)
	wg.Wait()
	close(errs)

	// Badger refuses writes during the flush; the storage's own writes must wait instead.
	for err := range errs {
		require.NoError(t, err)
	}
}

func Test_Badger_Config_Defaults(t *testing.T) {
	require.Equal(t, ConfigDefault, configDefault())

	cfg := configDefault(Config{Database: "custom.badger"})
	require.Equal(t, "custom.badger", cfg.BadgerOptions.Dir)
	require.Equal(t, "custom.badger", cfg.BadgerOptions.ValueDir)

	cfg = configDefault(Config{})
	require.Equal(t, ConfigDefault.Database, cfg.Database)
}

func Test_Badger_Config_Logger(t *testing.T) {
	logger := testLogger{}

	cfg := configDefault(Config{Database: "custom.badger", UseLogger: true, Logger: logger})
	require.Equal(t, logger, cfg.BadgerOptions.Logger)

	cfg = configDefault(Config{Database: "custom.badger", UseLogger: true})
	require.NotNil(t, cfg.BadgerOptions.Logger, "badger's default logger is kept when none is given")

	cfg = configDefault(Config{Database: "custom.badger", Logger: logger})
	require.Nil(t, cfg.BadgerOptions.Logger)
}
