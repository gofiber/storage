package pebble

import (
	"bytes"
	"context"
	"encoding/json"
	"errors"
	"os"
	"sync"
	"time"

	"github.com/cockroachdb/pebble"
)

// resetBatchSize bounds how many deletions Reset buffers before committing, so
// that resetting a large database does not have to fit in memory.
const resetBatchSize = 1000

// collectBatchSize bounds how many expired keys one pass of the collector
// holds in memory before deleting them.
const collectBatchSize = 1000

// collectScanLimit bounds how many keys one pass of the collector examines, so
// the read lock is not held across a whole keyspace when few keys are expired.
const collectScanLimit = 10000

// collectMaxBatches bounds how many passes one sweep makes, so a database
// expiring keys as fast as they are reclaimed cannot keep it running forever.
const collectMaxBatches = 100

// ErrClosed is returned by every operation attempted after Close. Pebble
// panics when a closed database is used, so the storage refuses those calls
// instead of forwarding them.
var ErrClosed = errors.New("pebble: storage is closed")

type Storage struct {
	db           *pebble.DB
	writeOptions *pebble.WriteOptions
	gcInterval   time.Duration
	done         chan struct{}
	stopped      chan struct{}
	stopOnce     sync.Once

	// mu guards the database against a concurrent Close. Operations hold it
	// for reading and Close for writing, so none is in flight while the
	// database is torn down: Pebble panics when a closed one is used.
	mu     sync.RWMutex
	closed bool

	// gcCursor is where the next tick's sweep resumes scanning from. It is
	// guarded by mu: the collector is not its only writer, Reset clears it.
	// Without it, a keyspace too large for one tick's scan budget would
	// restart from the beginning every tick and never reach keys past that
	// budget.
	gcCursor []byte

	// gcEpoch counts the times Reset has rewound gcCursor. A sweep carries the
	// epoch it started in, so one still running across a Reset cannot write
	// back a position into keys that Reset has already deleted.
	gcEpoch uint64
}

type CacheType struct {
	Data    []byte `json:"data"`
	Created int64  `json:"created"`
	Expires int64  `json:"expires"`
}

func New(config ...Config) *Storage {
	cfg := configDefault(config...)

	if !isValid(cfg.Path) {
		panic(errors.New("invalid filepath"))
	}

	db, err := pebble.Open(cfg.Path, &pebble.Options{})
	if err != nil {
		panic(err)
	}

	store := &Storage{
		db:           db,
		writeOptions: cfg.WriteOptions,
		gcInterval:   cfg.GCInterval,
		done:         make(chan struct{}),
		stopped:      make(chan struct{}),
	}

	go store.gc()

	return store
}

// gc reclaims expired entries so that reads do not have to. Pebble has no
// compare-and-delete, so deleting from Get could drop a value a concurrent
// Set had just written; sweeping in the background avoids that entirely.
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

// collect deletes every entry whose expiration has passed.
//
// Candidates are gathered from a snapshot first and then re-read before being
// deleted, with the lock held exclusively for that second step. Deleting
// straight off the snapshot could remove a key a concurrent Set had refreshed
// in between, and Pebble has no compare-and-delete to prevent that.
func (s *Storage) collect() {
	after, epoch := s.loadCursor()

	// Bounded so that a database expiring keys as fast as they are reclaimed
	// cannot keep one sweep running, and taking the exclusive lock, forever.
	// Whatever is left resumes on the next tick from s.gcCursor, rather than
	// rescanning from the beginning: a keyspace bigger than one tick's scan
	// budget would otherwise never reach the keys past that budget.
	for range collectMaxBatches {
		candidates, last, reachedEnd := s.expiredCandidates(after)
		if len(candidates) > 0 && !s.deleteIfStillExpired(candidates) {
			s.storeCursor(after, epoch)
			return
		}
		if reachedEnd {
			s.storeCursor(nil, epoch)
			return
		}
		after = last

		// Give up promptly when Close is waiting, rather than making it sit
		// through the rest of the sweep.
		select {
		case <-s.done:
			s.storeCursor(after, epoch)
			return
		default:
		}
	}

	s.storeCursor(after, epoch)
}

// loadCursor reports where the next sweep resumes from, along with the epoch
// that position belongs to.
func (s *Storage) loadCursor() ([]byte, uint64) {
	s.mu.RLock()
	defer s.mu.RUnlock()

	return s.gcCursor, s.gcEpoch
}

// storeCursor records where the next sweep resumes from, unless a Reset rewound
// the cursor while the sweep was running. That sweep's position refers to keys
// Reset has since deleted, so writing it back would send the next sweep past
// everything written after the Reset.
func (s *Storage) storeCursor(cursor []byte, epoch uint64) {
	s.mu.Lock()
	defer s.mu.Unlock()

	if s.gcEpoch != epoch {
		return
	}

	s.gcCursor = cursor
}

// expiredCandidates lists the keys a snapshot shows as expired, starting after
// the given key. It also reports the last key it examined, so the next batch
// can resume from there rather than rescanning from the beginning, and whether
// it reached the end of the database.
//
// Both the number of keys examined and the number collected are capped, so the
// read lock is never held for a whole keyspace: a database with millions of
// live keys and a handful of expired ones would otherwise walk all of them in
// one call, holding off writers and Close alike.
func (s *Storage) expiredCandidates(after []byte) (candidates [][]byte, last []byte, reachedEnd bool) {
	s.mu.RLock()
	defer s.mu.RUnlock()

	if s.closed {
		return nil, nil, true
	}

	iter, err := s.db.NewIter(nil)
	if err != nil {
		return nil, nil, true
	}
	defer func() {
		_ = iter.Close()
	}()

	valid := iter.First()
	if after != nil {
		// SeekGE lands on the key itself, which the previous batch already
		// examined, so step past it.
		valid = iter.SeekGE(after)
		if valid && bytes.Equal(iter.Key(), after) {
			valid = iter.Next()
		}
	}

	candidates = make([][]byte, 0, collectBatchSize)
	now := time.Now().Unix()

	for examined := 0; valid; examined++ {
		key := iter.Key()

		if expired(iter.Value(), now) {
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
// expired. It reports whether the sweep should continue.
func (s *Storage) deleteIfStillExpired(keys [][]byte) bool {
	s.mu.Lock()
	defer s.mu.Unlock()

	if s.closed {
		return false
	}

	batch := s.db.NewBatch()
	defer func() {
		_ = batch.Close()
	}()

	now := time.Now().Unix()
	for _, key := range keys {
		value, closer, err := s.db.Get(key)
		if err != nil {
			continue
		}
		stillExpired := expired(value, now)
		if err := closer.Close(); err != nil {
			return false
		}
		if !stillExpired {
			continue
		}
		if err := batch.Delete(key, nil); err != nil {
			return false
		}
	}

	if batch.Empty() {
		return true
	}

	return batch.Commit(s.writeOptions) == nil
}

// expired reports whether a stored value is past its expiration as of now.
//
// A value this driver cannot decode is reported as not expired, so the
// collector leaves it alone. Get surfaces it as an error instead: deleting
// data because it could not be parsed would destroy whatever the caller could
// still recover from it.
func expired(value []byte, now int64) bool {
	var cache CacheType
	if err := json.Unmarshal(value, &cache); err != nil {
		return false
	}
	return isExpired(cache, now)
}

// isExpired reports whether a decoded entry is past its expiration as of now.
func isExpired(cache CacheType, now int64) bool {
	return cache.Expires > 0 && cache.Expires <= now
}

// Get retrieves the value by key.
func (s *Storage) Get(key string) ([]byte, error) {
	if len(key) <= 0 {
		return nil, nil
	}
	s.mu.RLock()
	defer s.mu.RUnlock()

	if s.closed {
		return nil, ErrClosed
	}

	data, closer, err := s.db.Get([]byte(key))
	if err != nil {
		// A missing key is not an error, every other failure is.
		if errors.Is(err, pebble.ErrNotFound) {
			return nil, nil
		}
		return nil, err
	}

	// data is only valid until closer is closed, so decode it first.
	var cache CacheType
	err = json.Unmarshal(data, &cache)
	// Report both when both fail: the decode error says the entry is corrupt,
	// which is the more useful of the two.
	if closeErr := closer.Close(); closeErr != nil {
		return nil, errors.Join(err, closeErr)
	}
	if err != nil {
		return nil, err
	}

	if isExpired(cache, time.Now().Unix()) {
		// Report the miss without deleting: Pebble has no compare-and-delete,
		// so removing the key here could drop a value a concurrent Set had
		// already written. The collector reclaims it instead.
		return nil, nil
	}

	return cache.Data, nil
}

// GetWithContext retrieves value by key, aborting if ctx is already done.
func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error) {
	if err := ctx.Err(); err != nil {
		return nil, err
	}
	return s.Get(key)
}

// Set stores the given value with optional expiration
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	if len(key) <= 0 || len(val) <= 0 {
		return nil
	}

	now := time.Now()

	cache := CacheType{
		Data:    val,
		Created: now.Unix(),
		Expires: 0,
	}

	if exp > 0 {
		// Expiration is tracked with a one-second granularity. Round the
		// deadline up rather than deriving it from the truncated Created
		// timestamp, so an entry is never dropped before it expires.
		deadline := now.Add(exp)
		cache.Expires = deadline.Unix()
		if deadline.Nanosecond() != 0 {
			cache.Expires++
		}
	}

	jsonString, err := json.Marshal(cache)
	if err != nil {
		return err
	}

	s.mu.RLock()
	defer s.mu.RUnlock()

	if s.closed {
		return ErrClosed
	}

	return s.db.Set([]byte(key), jsonString, s.writeOptions)
}

// SetWithContext sets value by key, aborting if ctx is already done.
func (s *Storage) SetWithContext(ctx context.Context, key string, val []byte, exp time.Duration) error {
	if err := ctx.Err(); err != nil {
		return err
	}
	return s.Set(key, val, exp)
}

// Delete removes a value by key
func (s *Storage) Delete(key string) error {
	if len(key) <= 0 {
		return nil
	}

	s.mu.RLock()
	defer s.mu.RUnlock()

	if s.closed {
		return ErrClosed
	}

	return s.db.Delete([]byte(key), s.writeOptions)
}

// DeleteWithContext deletes key, aborting if ctx is already done.
func (s *Storage) DeleteWithContext(ctx context.Context, key string) error {
	if err := ctx.Err(); err != nil {
		return err
	}
	return s.Delete(key)
}

// Reset deletes every key in the database
func (s *Storage) Reset() (err error) {
	// Exclusive: a Set holding the read lock alongside this would be erased
	// part way through, or survive it, depending on timing.
	s.mu.Lock()
	defer s.mu.Unlock()

	// The keys the collector was working through are about to be gone, so its
	// cursor would otherwise send the next sweep to a position past everything
	// written afterwards, delaying expiry by up to one interval. Bumping the
	// epoch stops a sweep that is already running from putting that position
	// back once this returns.
	s.gcCursor = nil
	s.gcEpoch++

	if s.closed {
		return ErrClosed
	}

	iter, iterErr := s.db.NewIter(nil)
	if iterErr != nil {
		return iterErr
	}
	defer func() {
		// Pebble folds child iterator teardown failures into the error Close
		// returns, which Error never sees, so it must not be discarded.
		if closeErr := iter.Close(); err == nil {
			err = closeErr
		}
	}()

	batch := s.db.NewBatch()
	defer func() {
		if closeErr := batch.Close(); err == nil {
			err = closeErr
		}
	}()

	// Commit in bounded chunks, a database may hold more keys than fit in
	// memory. The iterator reads a consistent snapshot, so the committed
	// deletions do not disturb it.
	//
	// A reset larger than one chunk is therefore not atomic: a concurrent
	// reader can observe the database part way through. Pebble has no
	// multi-batch transaction to avoid that, and buffering every delete in
	// one batch would make the memory cost scale with the key count.
	commit := func() error {
		if batch.Empty() {
			return nil
		}
		if err := batch.Commit(s.writeOptions); err != nil {
			return err
		}
		batch.Reset()
		return nil
	}

	for iter.First(); iter.Valid(); iter.Next() {
		if err := batch.Delete(iter.Key(), nil); err != nil {
			return err
		}
		if batch.Count() < resetBatchSize {
			continue
		}
		if err := commit(); err != nil {
			return err
		}
	}

	// Flush what is queued before reporting an iteration failure: earlier
	// chunks are already committed, so dropping this one would throw away
	// work for no benefit.
	iterErr = iter.Error()
	if err := commit(); err != nil {
		return err
	}

	return iterErr
}

// ResetWithContext resets storage, aborting if ctx is already done.
func (s *Storage) ResetWithContext(ctx context.Context) error {
	if err := ctx.Err(); err != nil {
		return err
	}
	return s.Reset()
}

// Close closes the database. It is safe to call Close more than once: the
// database is closed by the first call and further calls do nothing.
//
// A failure is reported by that first call only. Pebble closes the database
// whether or not it reports an error and panics if it is closed again, so
// there is nothing left for a caller to retry.
func (s *Storage) Close() error {
	// Stopping the collector happens once, even if the close below fails and
	// the caller tries again.
	s.stopOnce.Do(func() {
		close(s.done)
		// Wait for the collector to return so it no longer writes to a
		// database that is being closed.
		<-s.stopped
	})

	s.mu.Lock()
	defer s.mu.Unlock()

	if s.closed {
		return nil
	}

	// Pebble marks the database closed whether or not Close reports an error,
	// and panics on a second call. Record the close before checking the error
	// so a caller that retries gets the error again rather than that panic.
	s.closed = true

	return s.db.Close()
}

// Conn returns the database client
func (s *Storage) Conn() *pebble.DB {
	return s.db
}

func isValid(fp string) bool {
	if _, err := os.Stat(fp); err == nil {
		return true
	}

	var d []byte
	err := os.WriteFile(fp, d, 0o600)
	if err != nil {
		return false
	}

	err = os.Remove(fp)
	return err == nil
}
