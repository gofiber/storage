package pebble

import (
	"context"
	"encoding/json"
	"errors"
	"log"
	"os"
	"time"

	"github.com/cockroachdb/pebble"
)

type Storage struct {
	db           *pebble.DB
	writeOptions *pebble.WriteOptions
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
		log.Fatal(err)
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
		return nil, err
	}

	if data == nil {
		return nil, nil
	}

	if err := closer.Close(); err != nil {
		log.Fatal(err)
	}

	var cache CacheType
	err = json.Unmarshal(data, &cache)
	if err != nil {
		return nil, nil
	}

	secs := time.Now().Unix()

	if cache.Expires > 0 && cache.Expires <= secs {
		err = s.db.Delete([]byte(key), nil)
		return nil, err
	}

	return cache.Data, nil
}

// GetWithContext retrieves value by key (dummy context support)
func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error) {
	return s.Get(key)
}

// Set stores the given value with optional expiration
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	if len(key) <= 0 || len(val) <= 0 {
		return nil
	}

	cache := CacheType{
		Data:    val,
		Created: time.Now().Unix(),
		Expires: 0,
	}

	if exp > 0 {
		cache.Expires = cache.Created + int64(exp.Seconds())
	}

	jsonString, err := json.Marshal(cache)
	if err != nil {
		return err
	}
	return s.db.Set([]byte(key), jsonString, s.writeOptions)
}

// SetWithContext sets value by key (dummy context support)
func (s *Storage) SetWithContext(ctx context.Context, key string, val []byte, exp time.Duration) error {
	return s.Set(key, val, exp)
}

// Delete removes a value by key
func (s *Storage) Delete(key string) error {
	if len(key) <= 0 {
		return nil
	}
	return s.db.Delete([]byte(key), s.writeOptions)
}

// DeleteWithContext deletes key (dummy context support)
func (s *Storage) DeleteWithContext(ctx context.Context, key string) error {
	return s.Delete(key)
}

// Reset flushes the DB
func (s *Storage) Reset() error {
	return s.db.Flush()
}

// ResetWithContext resets storage (dummy context support)
func (s *Storage) ResetWithContext(ctx context.Context) error {
	return s.Reset()
}

// Close closes the database
func (s *Storage) Close() error {
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
