package pebble

import (
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

type Storage struct {
	db           *pebble.DB
	writeOptions *pebble.WriteOptions
	closeOnce    sync.Once
	closeErr     error
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

	return &Storage{
		db:           db,
		writeOptions: cfg.WriteOptions,
	}
}

// Get retrieves the value by key.
func (s *Storage) Get(key string) ([]byte, error) {
	if len(key) <= 0 {
		return nil, nil
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
	if closeErr := closer.Close(); closeErr != nil {
		return nil, closeErr
	}
	if err != nil {
		return nil, err
	}

	secs := time.Now().Unix()

	if cache.Expires > 0 && cache.Expires <= secs {
		return nil, s.db.Delete([]byte(key), s.writeOptions)
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
		_ = batch.Close()
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

// Close closes the database. It is safe to call Close more than once, every
// call reports the result of the single underlying close.
func (s *Storage) Close() error {
	s.closeOnce.Do(func() {
		s.closeErr = s.db.Close()
	})
	return s.closeErr
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
