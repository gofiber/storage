package leveldb

import (
	"bytes"
	"context"
	"encoding/json"
	"errors"
	"sync"
	"time"

	"github.com/syndtr/goleveldb/leveldb"
	"github.com/syndtr/goleveldb/leveldb/filter"
	"github.com/syndtr/goleveldb/leveldb/opt"
)

// envelopeVersion identifies entries written by this driver. It is stored
// under a deliberately unusual key so that a raw payload written by an older
// version of this driver, which may itself be a JSON object, is never mistaken
// for an envelope.
const envelopeVersion = 1

// errUnknownEnvelope is returned when an entry carries an envelope version
// this driver does not understand, which happens after a downgrade.
var errUnknownEnvelope = errors.New("leveldb: entry was written by a newer version of this driver")

// errCorruptEnvelope is returned when an entry carries this driver's envelope
// but not the value that is always written with it.
var errCorruptEnvelope = errors.New("leveldb: entry is missing its value")

// ErrReadOnly is returned by every write attempted on a storage opened with
// Config.ReadOnly.
var ErrReadOnly = errors.New("leveldb: storage is read-only")

// envelopeKind describes how an entry read from the database is encoded.
type envelopeKind int

const (
	// envelopeNone means the entry has no envelope: a bare payload, as
	// written by earlier versions of this driver for keys with no expiration.
	envelopeNone envelopeKind = iota

	// envelopeEntry means the entry carries an envelope this driver can read,
	// either the versioned one it writes today or the unversioned one earlier
	// versions wrote for keys with an expiration.
	//
	// The unversioned shape is indistinguishable from a payload that happens
	// to be the same JSON object. That ambiguity predates the version marker
	// and only affects databases written before it, so such an entry is
	// treated as an envelope, exactly as earlier versions treated it.
	envelopeEntry

	// envelopeUnknown means the entry carries an envelope version this driver
	// does not understand.
	envelopeUnknown

	// envelopeCorrupt means the entry carries this driver's envelope but not
	// the value it always writes with it.
	envelopeCorrupt
)

// resetBatchSize bounds how many deletions Reset buffers before flushing, so
// that resetting a large database does not have to fit in memory.
const resetBatchSize = 1000

// collectBatchSize bounds how many expired keys one pass of the collector
// holds in memory before deleting them.
const collectBatchSize = 1000

// collectScanLimit bounds how many keys one pass examines, so the read lock is
// not held across a whole keyspace when few keys are expired.
const collectScanLimit = 10000

// collectMaxBatches bounds how many passes one sweep makes, so a database
// expiring keys as fast as they are reclaimed cannot keep it running forever.
const collectMaxBatches = 100

// data structure for storing items in the database
type item struct {
	// Version is a pointer so that its absence, which marks an entry written
	// before the version existed, can be told from a zero value without
	// decoding the document a second time.
	Version  *int      `json:"_fiber_storage_v"`
	Value    []byte    `json:"value"`
	ExpireAt time.Time `json:"expire_at"`
}

// Storage interface that is implemented by storage providers
type Storage struct {
	db         *leveldb.DB
	readOnly   bool
	gcInterval time.Duration
	done       chan struct{}
	stopped    chan struct{}
	stopOnce   sync.Once
	closeMu    sync.Mutex
	closed     bool

	// mu orders the collector's delete against writers, so a key a Set has
	// just refreshed is not reclaimed on the strength of a stale read.
	mu sync.RWMutex

	// gcCursor is where the next sweep resumes scanning from. Only the
	// collector touches it.
	gcCursor []byte
}

// New creates a new memory storage
func New(config ...Config) *Storage {
	cfg := configDefault(config...)

	// Every tuning field of Config used to be ignored: the options were passed
	// as nil, so only Path and GCInterval had any effect.
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

	store := &Storage{
		db:         db,
		readOnly:   cfg.ReadOnly,
		gcInterval: cfg.GCInterval,
		done:       make(chan struct{}),
		stopped:    make(chan struct{}),
	}

	// The collector writes, so there is nothing for it to do on a read-only
	// database. Close still waits on stopped, so signal it here.
	if cfg.ReadOnly {
		close(store.stopped)
		return store
	}

	go store.gc()

	return store
}

// Get value by key
func (s *Storage) Get(key string) ([]byte, error) {
	if len(key) <= 0 {
		return nil, nil
	}

	data, err := s.db.Get([]byte(key), nil)
	if err != nil {
		// A missing key is not an error, every other failure is.
		if errors.Is(err, leveldb.ErrNotFound) {
			return nil, nil
		}
		return nil, err
	}

	stored, kind := decode(data)

	switch kind {
	case envelopeNone:
		// Entry written by an older version of this driver, which stored
		// values without an expiration envelope.
		return data, nil
	case envelopeUnknown:
		return nil, errUnknownEnvelope
	case envelopeCorrupt:
		return nil, errCorruptEnvelope
	case envelopeEntry:
	}

	if stored.ExpireAt.IsZero() || !time.Now().After(stored.ExpireAt) {
		return stored.Value, nil
	}

	// Report the miss without deleting. LevelDB offers no compare-and-delete,
	// so removing the key here would drop a value a concurrent Set had already
	// written. The collector reclaims expired entries instead.
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
	if len(key) <= 0 || len(value) <= 0 {
		return nil
	}

	if s.readOnly {
		return ErrReadOnly
	}

	version := envelopeVersion
	data := item{Version: &version, Value: value}
	if exp > 0 {
		data.ExpireAt = time.Now().Add(exp)
	}

	encoded, err := json.Marshal(data)
	if err != nil {
		return err
	}

	s.mu.RLock()
	defer s.mu.RUnlock()

	return s.db.Put([]byte(key), encoded, nil)
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
	if s.readOnly {
		return ErrReadOnly
	}

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

	// Flush what is queued before reporting an iteration failure: earlier
	// chunks are already committed, so dropping this one would throw away
	// work for no benefit.
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

// Close the memory storage. It is safe to call Close more than once: once the close has succeeded
// further calls do nothing, and a close that fails is reported so the
// caller can try again.
func (s *Storage) Close() error {
	// Stopping the collector happens once, even if the close below fails and
	// the caller tries again.
	s.stopOnce.Do(func() {
		close(s.done) // GC stop
		// Wait for the collector to return so it no longer writes to a
		// database that is being closed.
		<-s.stopped
	})

	s.closeMu.Lock()
	defer s.closeMu.Unlock()

	if s.closed {
		return nil
	}

	if err := s.db.Close(); err != nil {
		return err
	}

	s.closed = true
	return nil
}

// Return database client
func (s *Storage) Conn() *leveldb.DB {
	return s.db
}

// decode classifies an entry read from the database and, when it is an
// envelope this driver can read, returns its contents.
func decode(data []byte) (item, envelopeKind) {
	var stored item
	if err := json.Unmarshal(data, &stored); err != nil {
		return item{}, envelopeNone
	}

	if stored.Version != nil {
		if *stored.Version == envelopeVersion {
			// Set never stores an empty value, so an envelope without one did
			// not come from this driver intact.
			if stored.Value == nil {
				return item{}, envelopeCorrupt
			}
			return stored, envelopeEntry
		}
		// A version this driver does not know, but only when the document
		// also carries a value: every envelope ever written did, so a raw
		// payload that merely happens to have a field of this name is still
		// returned as the payload it is.
		if stored.Value != nil {
			return item{}, envelopeUnknown
		}
		return item{}, envelopeNone
	}

	// No version marker, so this is either a bare payload or the unversioned
	// envelope earlier versions wrote. That envelope always carried a value,
	// which rules out most payloads before the second, costlier pass.
	if stored.Value == nil || !isUnversionedEnvelope(data) {
		return item{}, envelopeNone
	}

	return stored, envelopeEntry
}

// isUnversionedEnvelope reports whether data has exactly the two fields the
// envelope written by earlier versions of this driver had.
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

// collect reclaims expired entries.
//
// Candidates are gathered from a snapshot and then re-read before being
// deleted, with the lock held exclusively for that second step: deleting
// straight off the snapshot could remove a key a concurrent Set had refreshed
// in between, and LevelDB has no compare-and-delete to prevent it.
//
// The work is bounded on both axes, so a large database neither holds every
// expired key in memory nor keeps Close waiting through a full scan.
func (s *Storage) collect() {
	after := s.gcCursor

	for range collectMaxBatches {
		candidates, last, reachedEnd := s.expiredCandidates(after)
		if len(candidates) > 0 {
			s.deleteIfStillExpired(candidates)
		}
		if reachedEnd {
			s.gcCursor = nil
			return
		}
		after = last

		// Give up promptly when Close is waiting.
		select {
		case <-s.done:
			s.gcCursor = after
			return
		default:
		}
	}

	s.gcCursor = after
}

// expiredCandidates lists the keys a snapshot shows as expired, starting after
// the given key, and reports the last key it examined along with whether it
// reached the end of the database.
func (s *Storage) expiredCandidates(after []byte) (candidates [][]byte, last []byte, reachedEnd bool) {
	s.mu.RLock()
	defer s.mu.RUnlock()

	iter := s.db.NewIterator(nil, nil)
	defer iter.Release()

	valid := iter.Next()
	if after != nil {
		// Seek lands on the key itself, which the previous batch already
		// examined, so step past it.
		valid = iter.Seek(after)
		if valid && bytes.Equal(iter.Key(), after) {
			valid = iter.Next()
		}
	}

	candidates = make([][]byte, 0, collectBatchSize)
	now := time.Now()

	for examined := 0; valid; examined++ {
		key := iter.Key()

		if stored, kind := decode(iter.Value()); kind == envelopeEntry &&
			!stored.ExpireAt.IsZero() && now.After(stored.ExpireAt) {
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

// deleteIfStillExpired re-reads each key and deletes the ones that are still
// expired.
func (s *Storage) deleteIfStillExpired(keys [][]byte) {
	s.mu.Lock()
	defer s.mu.Unlock()

	batch := new(leveldb.Batch)
	now := time.Now()

	for _, key := range keys {
		value, err := s.db.Get(key, nil)
		if err != nil {
			continue
		}
		stored, kind := decode(value)
		if kind != envelopeEntry || stored.ExpireAt.IsZero() || !now.After(stored.ExpireAt) {
			continue
		}
		batch.Delete(key)
	}

	if batch.Len() > 0 {
		_ = s.db.Write(batch, nil)
	}
}
