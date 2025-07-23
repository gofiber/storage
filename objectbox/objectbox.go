package objectbox

import (
	"context"
	"time"

	"github.com/objectbox/objectbox-go/objectbox"
)

// Storage handles ObjectBox database operations and cleanup routines.
type Storage struct {
	ob   *objectbox.ObjectBox
	box  *CacheBox
	done chan struct{}
}

// New creates a new Storage instance with the provided configuration.
// It initializes the ObjectBox database and starts the cleanup routine.
func New(config ...Config) *Storage {
	cfg := getConfig(config...)

	ob, err := objectbox.NewBuilder().
		Directory(cfg.Directory).
		Model(ObjectBoxModel()).
		MaxSizeInKb(cfg.MaxSizeInKb).
		MaxReaders(cfg.MaxReaders).
		Build()

	if err != nil {
		panic(err)
	}

	box := BoxForCache(ob)

	if cfg.Reset {
		err = box.RemoveAll()

		if err != nil {
			panic(err)
		}
	}

	storage := &Storage{
		ob:   ob,
		box:  box,
		done: make(chan struct{}),
	}

	go storage.gcTicker(cfg.GCInterval)

	return storage
}

// GetWithContext retrieves a value from storage by its key.
// Returns nil if the key doesn't exist or has expired.
// This is a dummy function and does not use the context.
func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error) {
	return s.Get(key)
}

// Get retrieves a value from storage by its key.
// Returns nil if the key doesn't exist or has expired.
func (s *Storage) Get(key string) ([]byte, error) {
	if len(key) < 1 {
		return nil, nil
	}

	query := s.box.Query(Cache_.Key.Equals(key, true),
		objectbox.Any(
			Cache_.ExpiresAt.Equals(0),
			Cache_.ExpiresAt.GreaterThan(time.Now().Unix()),
		))
	caches, err := query.Find()

	if err != nil {
		return nil, err
	}

	if len(caches) < 1 {
		return nil, nil
	}

	return caches[0].Value, nil
}

// SetWithContext stores a value in storage with the specified key and expiration.
// If expiration is 0, the entry won't expire.
// This is a dummy function and does not use the context.
func (s *Storage) SetWithContext(ctx context.Context, key string, value []byte, exp time.Duration) error {
	return s.Set(key, value, exp)
}

// Set stores a value in storage with the specified key and expiration.
// If expiration is 0, the entry won't expire.
func (s *Storage) Set(key string, value []byte, exp time.Duration) error {
	// If key or value is empty, return without storing
	if len(key) <= 0 || len(value) <= 0 {
		return nil
	}

	return s.ob.RunInWriteTx(func() error {
		// Since objectbox-go doesn't support conflict strategy, we need to check if the key already exists
		// and update the value if it does.
		query := s.box.Query(Cache_.Key.Equals(key, true))
		caches, err := query.Find()
		if err != nil {
			return err
		}

		// if the id is 0 it will create new cache
		// otherwise it will update the existing entry
		var id uint64 = 0
		if len(caches) > 0 {
			id = caches[0].Id
		}

		var expAt int64

		if exp != 0 {
			expAt = time.Now().Add(exp).Unix()
		}

		cache := &Cache{
			Id:        id,
			Key:       key,
			Value:     value,
			ExpiresAt: expAt,
		}

		_, err = s.box.Put(cache)
		return err
	})
}

// DeleteWithContext removes an entry from storage by its key.
// This is a dummy function and does not use the context.
func (s *Storage) DeleteWithContext(ctx context.Context, key string) error {
	return s.Delete(key)
}

// Delete removes an entry from storage by its key.
func (s *Storage) Delete(key string) error {
	if len(key) <= 0 {
		return nil
	}

	_, err := s.box.Query(Cache_.Key.Equals(key, true)).Remove()

	if err != nil {
		return err
	}

	return nil
}

// ResetWithContext removes all entries from the storage.
// This is a dummy function and does not use the context.
func (s *Storage) ResetWithContext(ctx context.Context) error {
	return s.Reset()
}

// Reset removes all entries from the storage.
func (s *Storage) Reset() error {
	return s.box.RemoveAll()
}

// Close shuts down the storage, stopping the cleanup routine and closing the database connection.
func (s *Storage) Close() error {
	close(s.done)
	s.ob.Close()
	return nil
}

// gc removes all expired entries from the storage.
func (s *Storage) gc() {
	_, _ = s.box.Query(
		Cache_.ExpiresAt.NotEquals(0),
		Cache_.ExpiresAt.LessThan(time.Now().Unix()),
	).Remove()
}

// gcTicker runs a periodic cleanup of expired entries.
func (s *Storage) gcTicker(interval time.Duration) {
	ticker := time.NewTicker(interval)
	defer ticker.Stop()

	for {
		select {
		case <-ticker.C:
			s.gc()
		case <-s.done:
			return
		}
	}
}
