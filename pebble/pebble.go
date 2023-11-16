package pebble

import (
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

// // Implement the logic to retrieve the value for the given key from the storage provider
// // Return nil, nil if the key does not exist
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

// // Implement the logic to store the given value for the given key in the storage provider
// // Use the provided expiration value (0 means no expiration)
// // Ignore empty key or value without returning an error
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	if len(key) <= 0 || len(val) <= 0 {
		return nil
	}

	cache := CacheType{Data: []byte(val), Created: time.Now().Unix(), Expires: 0}

	if exp > 0 {
		cache.Expires = cache.Created + int64(exp.Seconds())
	}

	jsonString, err := json.Marshal(cache)
	if err != nil {
		return err
	}
	return s.db.Set([]byte(key), jsonString, s.writeOptions)
}

// // Implement the logic to delete the value for the given key from the storage provider
// // Return no error if the key does not exist in the storage
func (s *Storage) Delete(key string) error {
	if len(key) <= 0 {
		return nil
	}
	return s.db.Delete([]byte(key), s.writeOptions)
}

func (s *Storage) Reset() error {
	return s.db.Flush()
}

func (s *Storage) Close() error {
	return s.db.Close()
}

// // Return database client
func (s *Storage) Conn() *pebble.DB {
	return s.db
}

func isValid(fp string) bool {
	// Check if file already exists
	if _, err := os.Stat(fp); err == nil {
		return true
	}

	// Attempt to create it
	var d []byte
	err := os.WriteFile(fp, d, 0o600)
	if err != nil {
		return false
	}

	err = os.Remove(fp)
	return err == nil
}
