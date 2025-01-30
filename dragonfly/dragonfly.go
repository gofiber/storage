package dragonfly

import (
	"time"

	redisStore "github.com/gofiber/storage/redis/v3"
	"github.com/redis/go-redis/v9"
)

type Storage struct {
	rstorage *redisStore.Storage
}

func New(config ...Config) *Storage {

	cfg := configDefault(config...)
	s := redisStore.New(cfg)

	return &Storage{
		rstorage: s,
	}
}

func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	return s.rstorage.Set(key, val, exp)
}

func (s *Storage) Get(key string) ([]byte, error) {
	return s.rstorage.Get(key)
}

func (s *Storage) Delete(key string) error {
	return s.rstorage.Delete(key)
}

func (s *Storage) Reset() error {
	return s.rstorage.Reset()
}

func (s *Storage) Close() error {
	return s.rstorage.Close()
}

// Return all the keys
func (s *Storage) Keys() ([][]byte, error) {
	return s.rstorage.Keys()
}

func (s *Storage) Conn() redis.UniversalClient {
	return s.rstorage.Conn()
}
