package leveldb

import (
	"bytes"
	"context"
	"encoding/binary"
	"encoding/json"
	"errors"
	"math"
	"sync"
	"sync/atomic"
	"time"

	"github.com/syndtr/goleveldb/leveldb"
	"github.com/syndtr/goleveldb/leveldb/filter"
	"github.com/syndtr/goleveldb/leveldb/opt"
)

// envelopeVersion marks the JSON envelope earlier builds of this driver wrote, under a key a raw payload would not carry.
const envelopeVersion = 1

// envelopeBinaryVersion marks the framing this driver writes now. It continues the
// same version sequence, so an entry from a newer driver reads as unknown whichever
// encoding carries it.
const envelopeBinaryVersion = 2

// envelopeMagic marks entries in that framing. The leading NUL keeps it clear of
// the JSON earlier builds wrote and of the text payloads this driver mostly holds.
var envelopeMagic = [3]byte{0x00, 'F', 'S'}

// envelopeHeaderLen is the magic, the version byte and the big-endian deadline.
const envelopeHeaderLen = len(envelopeMagic) + 1 + 8

// ErrUnknownEnvelope is returned for an entry written by a newer version of this driver.
var ErrUnknownEnvelope = errors.New("leveldb: entry was written by a newer version of this driver")

// ErrCorruptEnvelope is returned for an entry carrying this driver's envelope but no value.
var ErrCorruptEnvelope = errors.New("leveldb: entry is missing its value")

// ErrReadOnly is returned by every write attempted on a storage opened with Config.ReadOnly.
var ErrReadOnly = errors.New("leveldb: storage is read-only")

// envelopeKind describes how an entry read from the database is encoded.
type envelopeKind int

const (
	// envelopeNone means a bare payload, as earlier versions wrote for keys with no expiration.
	envelopeNone envelopeKind = iota

	// envelopeEntry carries an envelope this driver reads: today's versioned one, or the unversioned one, which is ambiguous with a like payload and so read as earlier versions did.
	envelopeEntry

	envelopeUnknown

	envelopeCorrupt
)

// resetBatchSize bounds the deletions Reset buffers, so a large database need not fit in memory.
const resetBatchSize = 1000

// collectBatchSize bounds the expired keys one pass holds before deleting them.
const collectBatchSize = 1000

// collectScanLimit bounds one pass, so the read lock is not held across a whole keyspace.
const collectScanLimit = 10000

// collectMaxBatches bounds one sweep, so keys expiring as fast as they are reclaimed cannot run it forever.
const collectMaxBatches = 100

// item is the JSON envelope earlier builds wrote. Entries in it are still read,
// but nothing writes it any more: see encode for why.
type item struct {
	// Pointer so an absent version, marking an entry written before versioning, differs from 0.
	Version  *int      `json:"_fiber_storage_v"`
	Value    []byte    `json:"value"`
	ExpireAt time.Time `json:"expire_at"`
}

// ErrClosed is returned by every operation attempted after Close.
var ErrClosed = errors.New("leveldb: storage is closed")

// Storage interface that is implemented by storage providers
type Storage struct {
	db         *leveldb.DB
	ownsDB     bool
	readOnly   bool
	gcInterval time.Duration
	done       chan struct{}
	stopped    chan struct{}
	stopOnce   sync.Once

	// closed latches this storage; the shared state latches the database itself, so a
	// storage is unusable once either it or the underlying database has been closed.
	closed atomic.Bool

	// shared carries everything that belongs to the database rather than to one storage:
	// the write-order lock, the collector's cursor, and whether the database is closed.
	shared *dbState
}

// dbState is the per-database coordination shared by every storage built on one handle.
// Splitting it across storages would let one storage's collector delete a key another
// just refreshed, or resume a sweep into a keyspace another storage just reset.
type dbState struct {
	// mu orders the collector's delete against writers, so a key a Set just refreshed survives.
	mu sync.RWMutex

	// closed reports that the database itself was closed, by whichever storage owned it.
	// Siblings still holding it must report ErrClosed rather than touch a closed handle.
	closed atomic.Bool

	refs int

	// gcEpoch is bumped by Reset so a sweep in flight — this storage's or a sibling's —
	// cannot store a cursor into deleted keys.
	gcEpoch  uint64
	gcCursor []byte
}

var (
	dbStatesMu sync.Mutex
	dbStates   = map[*leveldb.DB]*dbState{}
)

// acquireDBState hands out the database's shared state, creating it for the first storage.
func acquireDBState(db *leveldb.DB) *dbState {
	dbStatesMu.Lock()
	defer dbStatesMu.Unlock()

	st := dbStates[db]
	if st == nil {
		st = &dbState{}
		dbStates[db] = st
	}
	st.refs++

	return st
}

// releaseDBState lets go of the database's shared state, dropping it with the last storage.
func releaseDBState(db *leveldb.DB) {
	dbStatesMu.Lock()
	defer dbStatesMu.Unlock()

	st := dbStates[db]
	if st == nil {
		return
	}
	if st.refs--; st.refs == 0 {
		delete(dbStates, db)
	}
}

// New creates a new memory storage
func New(config ...Config) *Storage {
	cfg := configDefault(config...)

	// Every tuning field used to be ignored: options were nil, so only Path and GCInterval applied.
	options := &opt.Options{
		BlockCacheCapacity:     cfg.CacheSize * opt.MiB,
		BlockSize:              cfg.BlockSize * opt.KiB,
		WriteBuffer:            cfg.WriteBuffer * opt.MiB,
		CompactionL0Trigger:    cfg.CompactionL0Trigger,
		WriteL0PauseTrigger:    cfg.WriteL0PauseTrigger,
		WriteL0SlowdownTrigger: cfg.WriteL0SlowdownTrigger,
		OpenFilesCacheCapacity: cfg.MaxOpenFiles,
		CompactionTableSize:    cfg.CompactionTableSize * opt.MiB,
		NoSync:                 cfg.NoSync,
		ReadOnly:               cfg.ReadOnly,
		ErrorIfMissing:         cfg.ErrorIfMissing,
		ErrorIfExist:           cfg.ErrorIfExist,
	}
	if cfg.BloomFilterBits > 0 {
		options.Filter = filter.NewBloomFilter(cfg.BloomFilterBits)
	}

	db, err := leveldb.OpenFile(cfg.Path, options)
	if err != nil {
		panic(err)
	}

	return newStorage(db, true, cfg)
}

// NewFromConnection creates a storage on an already open database, which stays the caller's to close.
// LevelDB allows a single process to hold a directory, so sharing the open handle is the way to back a
// storage with a database the application already uses. Only the GCInterval and ReadOnly options are read.
//
// The storage treats the whole keyspace as its own: keys are not namespaced, Reset deletes every key
// in the database, and the background collector scans all of them — reclaiming any value that decodes
// as an entry whose deadline passed. Keep application data out of a database backing this storage.
//
// Storages built on the same database share one write-order lock, so each one's collector
// coordinates with the others' writes the same way it does with its own.
func NewFromConnection(db *leveldb.DB, config ...Config) *Storage {
	if db == nil {
		panic("leveldb: nil database")
	}

	return newStorage(db, false, configDefault(config...))
}

// newStorage starts the collector on db; db is released only when this driver opened it.
func newStorage(db *leveldb.DB, ownsDB bool, cfg Config) *Storage {
	store := &Storage{
		db:         db,
		ownsDB:     ownsDB,
		readOnly:   cfg.ReadOnly,
		gcInterval: cfg.GCInterval,
		shared:     acquireDBState(db),
		done:       make(chan struct{}),
		stopped:    make(chan struct{}),
	}

	// The collector writes, so it has nothing to do read-only; Close still waits on stopped.
	if cfg.ReadOnly {
		close(store.stopped)
		return store
	}

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

	data, err := s.db.Get([]byte(key), nil)
	if err != nil {
		if errors.Is(err, leveldb.ErrNotFound) {
			return nil, nil
		}
		return nil, err
	}

	stored, kind := decode(data)

	switch kind {
	case envelopeNone:
		// Entry from an older version of this driver, which stored values without an envelope.
		return data, nil
	case envelopeUnknown:
		return nil, ErrUnknownEnvelope
	case envelopeCorrupt:
		return nil, ErrCorruptEnvelope
	case envelopeEntry:
	}

	if stored.ExpireAt.IsZero() || !time.Now().After(stored.ExpireAt) {
		return stored.Value, nil
	}

	// Not deleted here: without compare-and-delete that would drop a concurrent Set; the collector reclaims it.
	return nil, nil
}

// GetWithContext gets value by key, aborting if ctx is already done.
func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error) {
	if err := ctx.Err(); err != nil {
		return nil, err
	}
	return s.Get(key)
}

// Set key with value
func (s *Storage) Set(key string, value []byte, exp time.Duration) error {
	if s.isClosed() {
		return ErrClosed
	}
	if len(key) <= 0 || len(value) <= 0 {
		return nil
	}

	if s.readOnly {
		return ErrReadOnly
	}

	var expireAt int64
	if exp > 0 {
		// Computed in nanoseconds so a deadline past the year 2262 saturates instead of wrapping negative.
		expireAt = time.Now().UnixNano()
		if int64(exp) > math.MaxInt64-expireAt {
			expireAt = math.MaxInt64
		} else {
			expireAt += int64(exp)
		}
	}

	s.shared.mu.RLock()
	defer s.shared.mu.RUnlock()

	// Re-checked under the lock: the latch may have been set between the check above and here,
	// and a write that slipped through would reach a database being closed.
	if s.isClosed() {
		return ErrClosed
	}

	return s.db.Put([]byte(key), encode(value, expireAt), nil)
}

// SetWithContext sets key with value, aborting if ctx is already done.
func (s *Storage) SetWithContext(ctx context.Context, key string, value []byte, exp time.Duration) error {
	if err := ctx.Err(); err != nil {
		return err
	}
	return s.Set(key, value, exp)
}

// Delete key by key
func (s *Storage) Delete(key string) error {
	if s.isClosed() {
		return ErrClosed
	}
	if len(key) <= 0 {
		return nil
	}

	if s.readOnly {
		return ErrReadOnly
	}

	return s.db.Delete([]byte(key), nil)
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
	if s.readOnly {
		return ErrReadOnly
	}

	// Exclusive: a Set holding the read lock alongside this would be erased part way through.
	s.shared.mu.Lock()
	defer s.shared.mu.Unlock()

	// Reset deletes the keys the sweep was working through, so its cursor would skip everything written afterwards.
	s.shared.gcCursor = nil
	s.shared.gcEpoch++

	iter := s.db.NewIterator(nil, nil)
	defer iter.Release()

	batch := new(leveldb.Batch)
	for iter.Next() {
		batch.Delete(iter.Key())

		if batch.Len() < resetBatchSize {
			continue
		}
		if err := s.db.Write(batch, nil); err != nil {
			return err
		}
		batch.Reset()
	}

	// Flush what is queued before reporting an iteration failure: earlier chunks are already committed.
	iterErr := iter.Error()
	if batch.Len() > 0 {
		if err := s.db.Write(batch, nil); err != nil {
			return err
		}
	}

	return iterErr
}

// ResetWithContext resets all keys, aborting if ctx is already done.
func (s *Storage) ResetWithContext(ctx context.Context) error {
	if err := ctx.Err(); err != nil {
		return err
	}
	return s.Reset()
}

// isClosed reports whether this storage or the database under it was closed; a borrowed
// database stays open, so the latch is the only signal.
func (s *Storage) isClosed() bool {
	return s.closed.Load() || s.shared.closed.Load()
}

// Close the storage, and the database unless it came from NewFromConnection. Safe to call more than once; a failed close is reported once.
func (s *Storage) Close() error {
	s.stopOnce.Do(func() {
		// Wait for the collector so it no longer writes to a database being closed.
		close(s.done)
		<-s.stopped
	})

	// Idempotent: only the first Close releases the shared state and closes the database.
	if !s.closed.CompareAndSwap(false, true) {
		return nil
	}

	var err error
	if s.ownsDB {
		// Latched before the close so a sibling on this handle reports ErrClosed rather than
		// reaching a database that is being torn down; goleveldb tears it down even on error.
		s.shared.closed.Store(true)
		err = s.db.Close()
	}

	// Released last: dropping the entry any earlier would let a storage built on this handle
	// meanwhile register a fresh one, which carries neither the closed flag nor the cursor
	// that the writes still finishing under the old entry are coordinated by.
	releaseDBState(s.db)

	return err
}

// Return database client
func (s *Storage) Conn() *leveldb.DB {
	return s.db
}

// encode frames value with its deadline: magic, version, deadline, payload.
//
// Earlier builds wrapped the value in the JSON envelope above, and encoding/json
// renders []byte as base64, so every write paid a marshal and every read a decode
// while a 16-byte value took 104 bytes on disk. The framing carries the same
// fields in 12 bytes and copies the payload through untouched.
func encode(value []byte, expireAt int64) []byte {
	buf := make([]byte, envelopeHeaderLen+len(value))

	copy(buf, envelopeMagic[:])
	buf[len(envelopeMagic)] = envelopeBinaryVersion
	binary.BigEndian.PutUint64(buf[len(envelopeMagic)+1:], uint64(expireAt))
	copy(buf[envelopeHeaderLen:], value)

	return buf
}

// decodeBinary classifies an entry in this driver's framing and returns the deadline
// as Unix nanoseconds, 0 meaning none. ok is false for anything else, which the JSON
// decoders below then get a look at.
func decodeBinary(data []byte) (value []byte, expireAt int64, kind envelopeKind, ok bool) {
	if len(data) < len(envelopeMagic) || !bytes.Equal(data[:len(envelopeMagic)], envelopeMagic[:]) {
		return nil, 0, envelopeNone, false
	}

	// A frame is claimed only when whole. Earlier versions stored payloads unenveloped,
	// and one of those may open with these bytes by chance; handing it back is better than
	// erroring on it. This mirrors the JSON classifier, which reads a version marker without
	// a value as a payload rather than a damaged envelope.
	if len(data) <= envelopeHeaderLen {
		return nil, 0, envelopeNone, false
	}
	payload := data[envelopeHeaderLen:]

	// Past a whole header the entry is this driver's, so an unreadable version is not a payload.
	if data[len(envelopeMagic)] != envelopeBinaryVersion {
		return nil, 0, envelopeUnknown, true
	}

	return payload, int64(binary.BigEndian.Uint64(data[len(envelopeMagic)+1:])), envelopeEntry, true
}

// expiryTime converts a stored deadline to a time, 0 meaning no expiration.
func expiryTime(expireAt int64) time.Time {
	if expireAt == 0 {
		return time.Time{}
	}
	return time.Unix(0, expireAt)
}

// decode classifies an entry and returns its contents when it is an envelope this driver reads.
func decode(data []byte) (item, envelopeKind) {
	if value, expireAt, kind, ok := decodeBinary(data); ok {
		if kind != envelopeEntry {
			return item{}, kind
		}
		// Value points into data, which goleveldb allocated for this read alone.
		return item{Value: value, ExpireAt: expiryTime(expireAt)}, kind
	}

	var stored item
	if err := json.Unmarshal(data, &stored); err != nil {
		return item{}, envelopeNone
	}

	kind := classify(data, stored.Version, stored.Value != nil)
	if kind != envelopeEntry {
		return item{}, kind
	}

	return stored, kind
}

// decodeExpiry classifies an entry and returns only its expiration, leaving the payload as raw bytes.
// The collector walks every key, so decoding Value there would base64-decode and copy each payload for nothing.
func decodeExpiry(data []byte) (time.Time, envelopeKind) {
	if _, expireAt, kind, ok := decodeBinary(data); ok {
		if kind != envelopeEntry {
			return time.Time{}, kind
		}
		return expiryTime(expireAt), kind
	}

	var stored struct {
		Version  *int            `json:"_fiber_storage_v"`
		Value    json.RawMessage `json:"value"`
		ExpireAt time.Time       `json:"expire_at"`
	}
	if err := json.Unmarshal(data, &stored); err != nil {
		return time.Time{}, envelopeNone
	}

	kind := classify(data, stored.Version, stored.Value != nil)
	if kind != envelopeEntry {
		return time.Time{}, kind
	}

	return stored.ExpireAt, kind
}

// classify decides what an entry is from its version marker and whether it carries a value, so both decoders agree by construction.
func classify(data []byte, version *int, hasValue bool) envelopeKind {
	if version != nil {
		if *version == envelopeVersion {
			// Set never stores an empty value, so an envelope without one did not come from this driver intact.
			if !hasValue {
				return envelopeCorrupt
			}
			return envelopeEntry
		}
		// Unknown version only when a value is present: a payload merely sharing the field name is not one.
		if hasValue {
			return envelopeUnknown
		}
		return envelopeNone
	}

	// No marker: a bare payload or the unversioned envelope, which always carried a value, ruling out most payloads before the costlier pass.
	if !hasValue || !isUnversionedEnvelope(data) {
		return envelopeNone
	}

	return envelopeEntry
}

// isUnversionedEnvelope reports whether data has exactly the two fields the old envelope had.
func isUnversionedEnvelope(data []byte) bool {
	var fields map[string]json.RawMessage
	if err := json.Unmarshal(data, &fields); err != nil {
		return false
	}
	if len(fields) != 2 {
		return false
	}

	_, hasValue := fields["value"]
	_, hasExpireAt := fields["expire_at"]

	return hasValue && hasExpireAt
}

// gc is a helper function to clean up expired keys
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

// collect reclaims expired entries, re-reading candidates under the lock since LevelDB has no compare-and-delete, and bounded so it cannot stall Close.
func (s *Storage) collect() {
	after, epoch := s.loadCursor()

	for range collectMaxBatches {
		candidates, last, reachedEnd := s.expiredCandidates(after)
		if len(candidates) > 0 {
			s.deleteIfStillExpired(candidates)
		}
		if reachedEnd {
			s.storeCursor(nil, epoch)
			return
		}
		after = last

		// Give up promptly when Close is waiting.
		select {
		case <-s.done:
			s.storeCursor(after, epoch)
			return
		default:
		}
	}

	s.storeCursor(after, epoch)
}

// loadCursor reports where the next sweep resumes, with the epoch that position belongs to.
func (s *Storage) loadCursor() ([]byte, uint64) {
	s.shared.mu.RLock()
	defer s.shared.mu.RUnlock()

	return s.shared.gcCursor, s.shared.gcEpoch
}

// storeCursor records where the next sweep resumes, unless a Reset rewound the cursor meanwhile.
func (s *Storage) storeCursor(cursor []byte, epoch uint64) {
	s.shared.mu.Lock()
	defer s.shared.mu.Unlock()

	if s.shared.gcEpoch != epoch {
		return
	}

	s.shared.gcCursor = cursor
}

// expiredCandidates lists keys a snapshot shows expired after the given key, with the last one examined and whether it reached the end.
func (s *Storage) expiredCandidates(after []byte) (candidates [][]byte, last []byte, reachedEnd bool) {
	s.shared.mu.RLock()
	defer s.shared.mu.RUnlock()

	iter := s.db.NewIterator(nil, nil)
	defer iter.Release()

	var valid bool
	if after == nil {
		valid = iter.Next()
	} else {
		// Seek lands on the key itself, which the previous batch examined, so step past it.
		valid = iter.Seek(after)
		if valid && bytes.Equal(iter.Key(), after) {
			valid = iter.Next()
		}
	}

	candidates = make([][]byte, 0, collectBatchSize)
	now := time.Now()

	for examined := 0; valid; examined++ {
		key := iter.Key()

		if expireAt, kind := decodeExpiry(iter.Value()); kind == envelopeEntry &&
			!expireAt.IsZero() && now.After(expireAt) {
			candidates = append(candidates, bytes.Clone(key))
		}

		if len(candidates) == collectBatchSize || examined+1 == collectScanLimit {
			return candidates, bytes.Clone(key), false
		}

		valid = iter.Next()
		if !valid {
			return candidates, bytes.Clone(key), true
		}
	}

	return candidates, last, true
}

// deleteIfStillExpired re-reads each key and deletes the ones that are still expired.
func (s *Storage) deleteIfStillExpired(keys [][]byte) {
	s.shared.mu.Lock()
	defer s.shared.mu.Unlock()

	batch := new(leveldb.Batch)
	now := time.Now()

	for _, key := range keys {
		value, err := s.db.Get(key, nil)
		if err != nil {
			continue
		}
		expireAt, kind := decodeExpiry(value)
		if kind != envelopeEntry || expireAt.IsZero() || !now.After(expireAt) {
			continue
		}
		batch.Delete(key)
	}

	if batch.Len() > 0 {
		_ = s.db.Write(batch, nil)
	}
}
