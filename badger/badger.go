package badger

import (
	"context"
	"errors"
	"path/filepath"
	"sync"
	"sync/atomic"
	"time"

	"github.com/dgraph-io/badger/v3"
	"github.com/gofiber/utils/v2"
)

// ErrClosed is returned by every operation attempted after Close.
var ErrClosed = errors.New("badger: storage is closed")

// flushKey gives DropPrefix, Badger's only on-demand memtable flush, a prefix to act on. The leading NUL
// keeps it clear of application keys: anything stored under this prefix is dropped by the next flush.
var flushKey = []byte("\x00fiber-storage:badger:flush")

// lowKey and highKey are deleted at each flush; their tombstones span the key space.
var (
	lowKey  = []byte("\x00fiber-storage:badger:lo")
	highKey = []byte("\xff\xff\xff\xfffiber-storage:badger:hi")
)

// Storage interface that is implemented by storage providers
type Storage struct {
	db         *badger.DB
	ownsDB     bool
	gcInterval time.Duration
	done       chan struct{}
	stopped    chan struct{}
	stopOnce   sync.Once
	closed     atomic.Bool

	vlogThreshold int64
	vlogFileSize  int64
	// vlogWritten counts the bytes of values Badger kept in the value log since the collector last flushed.
	vlogWritten atomic.Int64
	// flushing is held exclusively while Badger refuses writes, in a flush or Reset's DropAll, so the storage's own
	// writes wait.
	flushing sync.RWMutex
	// collecting keeps Reset's DropAll apart from Flatten and value-log rewrites, which it breaks, without stopping writes.
	collecting sync.Mutex
}

// New creates a new memory storage
func New(config ...Config) *Storage {
	// Set default config
	cfg := configDefault(config...)

	// Set options
	opt := cfg.BadgerOptions

	// Open database
	db, err := badger.Open(opt)
	if err != nil {
		panic(err)
	}

	return newStorage(db, true, cfg)
}

// NewFromConnection creates a storage on an already open database, which stays the caller's to close.
// Only the Reset and GCInterval options are read; Badger allows a single writer per directory, so
// sharing the open handle is the way to back a storage with a database the application already uses.
//
// Keys are not namespaced: Reset — the config option here and the method later — runs DropAll on the
// shared database, deleting every key the application stored in it, not just this storage's entries.
func NewFromConnection(db *badger.DB, config ...Config) *Storage {
	if db == nil {
		panic("badger: nil database")
	}

	return newStorage(db, false, configDefault(config...))
}

// newStorage starts the collector on db; db is released only when this driver opened it.
func newStorage(db *badger.DB, ownsDB bool, cfg Config) *Storage {
	// Create storage
	store := &Storage{
		db:         db,
		ownsDB:     ownsDB,
		gcInterval: cfg.GCInterval,
		done:       make(chan struct{}),
		stopped:    make(chan struct{}),

		vlogThreshold: db.Opts().ValueThreshold,
		vlogFileSize:  db.Opts().ValueLogFileSize,
	}

	// Reset through the storage's own method rather than a second copy of the drop, before the
	// collector starts so it cannot sweep a database being emptied.
	if cfg.Reset {
		if err := store.Reset(); err != nil {
			// Release the database, and with it the directory lock, rather than leaking both on the way out.
			if ownsDB {
				_ = db.Close()
			}
			panic(err)
		}
	}

	// With VLogPercentile Badger lowers the threshold on its own, so every value counts.
	if db.Opts().VLogPercentile > 0 {
		store.vlogThreshold = 0
	}

	// Space an earlier process left in the value log is only counted by a flush, so the first collection makes one.
	if files, _ := filepath.Glob(filepath.Join(db.Opts().ValueDir, "*.vlog")); len(files) > 1 {
		store.vlogWritten.Store(store.vlogFileSize)
	}

	// Start garbage collector
	go store.gc()

	return store
}

// Get value by key
func (s *Storage) Get(key string) ([]byte, error) {
	if s.isClosed() {
		return nil, ErrClosed
	}
	if len(key) <= 0 {
		return nil, nil
	}
	var data []byte
	err := s.db.View(func(txn *badger.Txn) error {
		item, err := txn.Get([]byte(key))
		if err != nil {
			return err
		}
		// item.Value() is only valid within the transaction.
		// We can either copy it ourselves or use the ValueCopy() method.
		// TODO: Benchmark if it's faster to copy + close tx,
		// or to keep the tx open until unmarshalling is done.
		data, err = item.ValueCopy(nil)
		return err
	})
	// If no value was found return false
	if errors.Is(err, badger.ErrKeyNotFound) {
		return nil, nil
	}
	if err != nil {
		return nil, err
	}
	return data, nil
}

// GetWithContext gets value by key, aborting if ctx is already done.
func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error) {
	if err := ctx.Err(); err != nil {
		return nil, err
	}
	return s.Get(key)
}

// Set key with value
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	if s.isClosed() {
		return ErrClosed
	}
	// Ain't Nobody Got Time For That
	if len(key) <= 0 || len(val) <= 0 {
		return nil
	}

	entry := badger.NewEntry(utils.UnsafeBytes(key), val)
	if exp > 0 {
		// WithTTL truncates the deadline to a whole second, so set the rounded up one instead.
		deadline := time.Now().Add(exp)
		secs := deadline.Unix()
		if deadline.Nanosecond() != 0 {
			secs++
		}
		entry.ExpiresAt = uint64(secs) //nolint:gosec // a deadline is never negative
	}
	s.flushing.RLock()
	defer s.flushing.RUnlock()
	if err := s.db.Update(func(tx *badger.Txn) error {
		return tx.SetEntry(entry)
	}); err != nil {
		return err
	}
	if int64(len(val)) >= s.vlogThreshold {
		s.vlogWritten.Add(int64(len(val)))
	}
	return nil
}

// SetWithContext sets key with value, aborting if ctx is already done.
func (s *Storage) SetWithContext(ctx context.Context, key string, val []byte, exp time.Duration) error {
	if err := ctx.Err(); err != nil {
		return err
	}
	return s.Set(key, val, exp)
}

// Delete key by key
func (s *Storage) Delete(key string) error {
	if s.isClosed() {
		return ErrClosed
	}
	// Ain't Nobody Got Time For That
	if len(key) <= 0 {
		return nil
	}
	s.flushing.RLock()
	defer s.flushing.RUnlock()
	return s.db.Update(func(tx *badger.Txn) error {
		return tx.Delete(utils.UnsafeBytes(key))
	})
}

// DeleteWithContext deletes key by key, aborting if ctx is already done.
func (s *Storage) DeleteWithContext(ctx context.Context, key string) error {
	if err := ctx.Err(); err != nil {
		return err
	}
	return s.Delete(key)
}

// Reset all keys
func (s *Storage) Reset() error {
	if s.isClosed() {
		return ErrClosed
	}
	s.collecting.Lock()
	defer s.collecting.Unlock()
	s.flushing.Lock()
	defer s.flushing.Unlock()
	return s.db.DropAll()
}

// isClosed reports whether Close ran; a borrowed database stays open, so the latch is the only signal.
func (s *Storage) isClosed() bool {
	return s.closed.Load()
}

// ResetWithContext resets all keys, aborting if ctx is already done.
func (s *Storage) ResetWithContext(ctx context.Context) error {
	if err := ctx.Err(); err != nil {
		return err
	}
	return s.Reset()
}

// Close the database once unless it came from NewFromConnection, waiting for the collector: RunValueLogGC and Flatten take no context, so a running step completes first.
// Safe to call more than once; a failed close is reported once.
func (s *Storage) Close() error {
	s.stopOnce.Do(func() {
		close(s.done)
		<-s.stopped
	})

	// Idempotent: only the first Close tears anything down.
	if !s.closed.CompareAndSwap(false, true) {
		return nil
	}

	if !s.ownsDB {
		return nil
	}

	// Latched even on failure: Badger's own sync.Once already tore the database down, so a retry would report a success that never happened.
	err := s.db.Close()
	return err
}

func (s *Storage) gc() {
	defer close(s.stopped)

	ticker := time.NewTicker(s.gcInterval)
	defer ticker.Stop()

	for {
		select {
		case <-s.done:
			return
		case <-ticker.C:
			s.collect()
		}
	}
}

// collect runs value-log GC. Badger only rewrites files a compaction has counted and large values alone never fill
// the memtable, so after a file's worth of them it is flushed, except on a shared database whose writes would fail.
func (s *Storage) collect() {
	if !errors.Is(s.runValueLogGC(), badger.ErrNoRewrite) || !s.ownsDB ||
		s.vlogWritten.Load() < s.vlogFileSize {
		return
	}
	if s.flush() != nil || s.stopping() {
		return
	}
	// Badger drops an expired entry, and counts its value-log space, only in a compaction into the last level.
	s.collecting.Lock()
	_ = s.db.Flatten(1)
	s.collecting.Unlock()
	_ = s.runValueLogGC()
}

// stopping reports whether Close is waiting for the collector.
func (s *Storage) stopping() bool {
	select {
	case <-s.done:
		return true
	default:
		return false
	}
}

// runValueLogGC repeats RunValueLogGC, which rewrites at most one file per call, until it has nothing left or Close waits.
func (s *Storage) runValueLogGC() error {
	for !s.stopping() {
		s.collecting.Lock()
		err := s.db.RunValueLogGC(0.7)
		s.collecting.Unlock()
		if err != nil {
			return err
		}
	}
	return nil
}

// flush moves the memtable to level 0 and compacts it, which DropPrefix does only for a prefix that exists.
func (s *Storage) flush() error {
	s.flushing.Lock()
	defer s.flushing.Unlock()
	if err := s.db.Update(func(tx *badger.Txn) error {
		// Spanning the key space makes the compaction take in every base-level table, not only those next to
		// the latest keys, or values that went down while live would never be counted once they expire.
		if err := tx.Delete(lowKey); err != nil {
			return err
		}
		if err := tx.Delete(highKey); err != nil {
			return err
		}
		return tx.Set(flushKey, nil)
	}); err != nil {
		return err
	}
	if err := s.db.DropPrefix(flushKey); err != nil {
		return err
	}
	// Under the exclusive lock no Set is between its write and its count, so nothing is lost.
	s.vlogWritten.Store(0)
	return nil
}

// Return database client
func (s *Storage) Conn() *badger.DB {
	return s.db
}
