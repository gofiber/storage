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

// resetBatchSize bounds the deletions Reset buffers, so a large database need not fit in memory.
const resetBatchSize = 1000

// collectBatchSize bounds the expired keys one pass holds before deleting them.
const collectBatchSize = 1000

// collectScanLimit bounds one pass, so the read lock is not held across a whole keyspace.
const collectScanLimit = 10000

// collectMaxBatches bounds one sweep, so keys expiring as fast as they are reclaimed cannot run it forever.
const collectMaxBatches = 100

// ErrClosed is returned after Close, since Pebble panics when a closed database is used.
var ErrClosed = errors.New("pebble: storage is closed")

type Storage struct {
	db           *pebble.DB
	writeOptions *pebble.WriteOptions
	gcInterval   time.Duration
	done         chan struct{}
	stopped      chan struct{}
	stopOnce     sync.Once

	// mu keeps operations off a database Close is tearing down; Pebble panics on a closed one.
	mu     sync.RWMutex
	closed bool

	gcCursor []byte

	// gcEpoch is bumped by Reset so a sweep in flight cannot store a cursor into deleted keys.
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

// gc reclaims expired entries in the background: without compare-and-delete, deleting from Get could drop a concurrent Set.
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

// collect deletes expired entries, re-reading candidates under the exclusive lock since Pebble has no compare-and-delete.
func (s *Storage) collect() {
	after, epoch := s.loadCursor()

	// Bounded so keys expiring as fast as they are reclaimed cannot hold the lock forever; the rest resumes next tick.
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

		// Give up promptly when Close is waiting rather than finishing the sweep.
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
	s.mu.RLock()
	defer s.mu.RUnlock()

	return s.gcCursor, s.gcEpoch
}

// storeCursor records where the next sweep resumes, unless a Reset rewound the cursor meanwhile.
func (s *Storage) storeCursor(cursor []byte, epoch uint64) {
	s.mu.Lock()
	defer s.mu.Unlock()

	if s.gcEpoch != epoch {
		return
	}

	s.gcCursor = cursor
}

// expiredCandidates lists keys a snapshot shows expired after the given key, capped so the read lock never spans a whole keyspace.
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

	var valid bool
	if after == nil {
		valid = iter.First()
	} else {
		// SeekGE lands on the key itself, which the previous batch examined, so step past it.
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

// deleteIfStillExpired re-reads each key, deletes the still-expired ones and reports whether to continue.
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

// expired reports whether a value is past its expiration; an undecodable one counts as not expired so Get can report it instead.
// Only the expiry is decoded: the collector walks every key, and pulling in Data would base64-decode and copy each payload for nothing.
func expired(value []byte, now int64) bool {
	var cache struct {
		Expires int64 `json:"expires"`
	}
	if err := json.Unmarshal(value, &cache); err != nil {
		return false
	}
	return cache.Expires > 0 && cache.Expires <= now
}

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
		if errors.Is(err, pebble.ErrNotFound) {
			return nil, nil
		}
		return nil, err
	}

	// data is only valid until closer is closed, so decode it first.
	var cache CacheType
	err = json.Unmarshal(data, &cache)
	// Report both when both fail: the decode error says the entry is corrupt, the more useful of the two.
	if closeErr := closer.Close(); closeErr != nil {
		return nil, errors.Join(err, closeErr)
	}
	if err != nil {
		return nil, err
	}

	if isExpired(cache, time.Now().Unix()) {
		// Not deleted here: without compare-and-delete that would drop a value a concurrent Set wrote.
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
		// Round the one-second deadline up rather than deriving it from the truncated Created stamp, so nothing expires early.
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

func (s *Storage) Reset() (err error) {
	// Exclusive: a Set holding the read lock alongside this would be erased part way through.
	s.mu.Lock()
	defer s.mu.Unlock()

	// Checked before the cursor is touched: a closed storage has no business rewinding the collector.
	if s.closed {
		return ErrClosed
	}

	// The keys the cursor points at are about to be gone; the epoch stops a running sweep writing it back.
	s.gcCursor = nil
	s.gcEpoch++

	iter, iterErr := s.db.NewIter(nil)
	if iterErr != nil {
		return iterErr
	}
	defer func() {
		// Pebble folds child iterator teardown failures into Close's error, which Error never sees.
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

	// Commit in bounded chunks so memory does not scale with the key count; a larger reset is therefore not atomic.
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

	// Flush what is queued before reporting an iteration failure: earlier chunks are already committed.
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

// Close closes the database. Safe to call more than once; only the first call closes and reports.
func (s *Storage) Close() error {
	s.stopOnce.Do(func() {
		close(s.done)
		// Wait for the collector to return so it no longer writes to a database being closed.
		<-s.stopped
	})

	s.mu.Lock()
	defer s.mu.Unlock()

	if s.closed {
		return nil
	}

	// Pebble closes regardless of error and panics on a second call, so record it before checking the error.
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
