package leveldb

import (
	"encoding/json"
	"time"

	"github.com/gofiber/storage/leveldb/internal"
	"github.com/syndtr/goleveldb/leveldb"
	"github.com/syndtr/goleveldb/leveldb/errors"
	"github.com/syndtr/goleveldb/leveldb/opt"
)

type Storage struct {
	db           *leveldb.DB
	readOptions  *opt.ReadOptions
	writeOptions *opt.WriteOptions
}

type CacheType struct {
	Data    []byte `json:"data"`
	Created int64  `json:"created"`
	Expires int64  `json:"expires"`
}

func New(config ...Config) *Storage {
	cfg := configDefault(config...)

	if !internal.IsValid(cfg.Path) {
		panic(errors.New("invalid filepath"))
	}
	db, err := leveldb.OpenFile(cfg.Path, cfg.LevelDBOptions)
	if err != nil {
		panic(err)
	}

	return &Storage{
		db:           db,
		readOptions:  cfg.LevelDBReadOptions,
		writeOptions: cfg.LevelDBWriteOptions,
	}
}

// Implement the logic to retrieve the value for the given key from the storage provider
// Return nil, nil if the key does not exist
func (s *Storage) Get(key string) ([]byte, error) {
	if len(key) <= 0 {
		return nil, nil
	}

	data, err := s.db.Get([]byte(key), nil)

	if err != nil && err != errors.ErrNotFound {
		return nil, err
	}

	if data == nil {
		return nil, nil
	}

	var cache CacheType
	err = json.Unmarshal(data, &cache)

	if err != nil {
		return nil, nil
	}

	secs := time.Now().Unix()

	if cache.Expires > 0 && cache.Expires <= secs {
		s.db.Delete([]byte(key), nil)
		return nil, nil
	}

	return cache.Data, nil
}

// Implement the logic to store the given value for the given key in the storage provider
// Use the provided expiration value (0 means no expiration)
// Ignore empty key or value without returning an error
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

	return s.db.Put([]byte(key), []byte(jsonString), s.writeOptions)
}

// Implement the logic to delete the value for the given key from the storage provider
// Return no error if the key does not exist in the storage
func (s *Storage) Delete(key string) error {
	if len(key) <= 0 {
		return nil
	}
	return s.db.Delete([]byte(key), s.writeOptions)
}

func (s *Storage) Reset() error {
	iter := s.db.NewIterator(nil, nil)
	defer iter.Release()

	for iter.Next() {
		key := iter.Key()
		if err := s.db.Delete(key, nil); err != nil {
			return err
		}
	}

	if err := iter.Error(); err != nil {
		return err
	}

	return nil
}

func (s *Storage) Close() error {
	return s.db.Close()
}

// Return database client
func (s *Storage) Conn() *leveldb.DB {
	return s.db
}
