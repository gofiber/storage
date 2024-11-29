package objectbox

import (
	"time"

	"github.com/objectbox/objectbox-go/objectbox"
)

// Storage handles the ObjectBox database operations and cleanup routines.
type Storage struct {
	ob   *objectbox.ObjectBox
	box  *CacheBox
	done chan struct{}
}

// New creates a new Storage instance with the provided configuration.
// It initializes the ObjectBox database and starts the cleanup routine.
func New(config ...Config) *Storage {
	cfg := getConfig(config...)

	ob, err := objectbox.NewBuilder().Model(ObjectBoxModel()).MaxSizeInKb(cfg.MaxSizeInKb).MaxReaders(cfg.MaxReaders).Directory(cfg.Directory).Build()
	if err != nil {
		return nil
	}

	if cfg.Reset {
		box := BoxForCache(ob)
		box.RemoveAll()
	}

	storage := &Storage{
		ob:   ob,
		box:  BoxForCache(ob),
		done: make(chan struct{}),
	}

	go storage.cleanerTicker(cfg.CleanerInterval)

	return storage
}

// Get retrieves a value from cache by its key.
// Returns nil if key doesn't exist or has expired.
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

// Set stores a value in cache with the specified key and expiration.
// If expiration is 0, the entry won't expire.
func (s *Storage) Set(key string, value []byte, exp time.Duration) error {
	if len(key) <= 0 || len(value) <= 0 {
		return nil
	}

	// Since objectbox go doen't support conflict strategy,
	// we need to check if the key already exists
	// and update the value if it does.

	query := s.box.Query(Cache_.Key.Equals(key, true))
	cachesIds, err := query.FindIds()
	if err != nil {
		return err
	}

	// if the id is 0 it will create new cache
	// otherwise it will update the existing entry
	var id uint64 = 0
	if len(cachesIds) > 0 {
		id = cachesIds[0]
	}

	var expAt int64

	if exp > 0 { // Changed from exp != 0 to exp > 0
		expAt = time.Now().Add(exp).Unix()
	}

	cache := &Cache{
		Id:        id,
		Key:       key,
		Value:     value,
		ExpiresAt: expAt,
	}

	_, err = s.box.Put(cache)
	if err != nil {
		return err
	}

	return nil
}

// Delete removes an entry from cache by its key.
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

// Reset removes all entries from the cache.
func (s *Storage) Reset() error {
	return s.box.RemoveAll()
}

// Close shuts down the storage, stopping the cleanup routine
// and closing the database connection.
func (s *Storage) Close() error {
	close(s.done)
	s.ob.Close()
	return nil
}

// cleaneStorage removes all expired cache entries.
func (s *Storage) cleaneStorage() {
	s.box.Query(Cache_.ExpiresAt.LessThan(time.Now().Unix())).Remove()

}

// cleanerTicker runs periodic cleanup of expired entries.
func (s *Storage) cleanerTicker(interval time.Duration) {
	ticker := time.NewTicker(interval)
	defer ticker.Stop()

	for {
		select {
		case <-ticker.C:
			s.cleaneStorage()
		case <-s.done:
			return
		}
	}
}
