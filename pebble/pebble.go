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
	var after []byte

	// Bounded so that a database expiring keys as fast as they are reclaimed
	// cannot keep one sweep running, and taking the exclusive lock, forever.
	// Whatever is left waits for the next tick.
	for range collectMaxBatches {
		candidates, last := s.expiredCandidates(after)
		if len(candidates) > 0 && !s.deleteIfStillExpired(candidates) {
			return
		}

		// A short list means the scan reached the end of the database, so this
		// sweep is done.
		if len(candidates) < collectBatchSize {
			return
		}
		after = last

		// Give up promptly when Close is waiting, rather than making it sit
		// through the rest of the sweep.
		select {
		case <-s.done:
			return
		default:
		}
	}
}

// expiredCandidates lists the keys a snapshot shows as expired, starting after
// the given key, and reports the last key it examined so the next batch can
// resume from there rather than rescanning from the beginning.
func (s *Storage) expiredCandidates(after []byte) (candidates [][]byte, last []byte) {
	s.mu.RLock()
	defer s.mu.RUnlock()

	if s.closed {
		return nil, nil
	}

	iter, err := s.db.NewIter(nil)
	if err != nil {
		return nil, nil
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

	for ; valid; valid = iter.Next() {
		if !expired(iter.Value(), now) {
			continue
		}

		last = bytes.Clone(iter.Key())
		candidates = append(candidates, last)

		// Bounded so that one pass of a large database cannot hold every
		// expired key in memory at once. The rest go in the next batch.
		if len(candidates) == collectBatchSize {
			break
		}
	}

	return candidates, last
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
	s.mu.RLock()
	defer s.mu.RUnlock()

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

// Close closes the database. It is safe to call Close more than once: once the close has succeeded
// further calls do nothing, and a close that fails is reported so the
// caller can try again.
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

	if err := s.db.Close(); err != nil {
		return err
	}

	s.closed = true
	return nil
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
