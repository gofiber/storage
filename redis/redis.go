package redisStore

import (
	"time"

	"github.com/gomodule/redigo/redis"
)

func New(dialFunc func() (redis.Conn, error), redisKey string) *RedisStore {
	return &RedisStore{
		connPool: redis.NewPool(dialFunc, 3),
		redisKey: redisKey,
	}
}

type RedisStore struct {
	connPool *redis.Pool
	redisKey string
}

func (rs RedisStore) Get(id string) ([]byte, error) {
	redisConn := rs.connPool.Get()
	defer redisConn.Close()
	key := rs.redisKey + ":" + id

	exists, err := redis.Bool(redisConn.Do("EXISTS", key))

	if err != nil {
		return []byte{}, err
	}

	if !exists {
		return []byte{}, nil
	}

	return redis.Bytes(redisConn.Do("GET", key))
}

func (rs RedisStore) Set(id string, val []byte, expiration time.Duration) error {
	redisConn := rs.connPool.Get()
	defer redisConn.Close()
	key := rs.redisKey + ":" + id

	var err error
	if expiration != 0 {
		_, err = redisConn.Do("SET", key, val, "EX", expiration.Seconds())
	} else {
		_, err = redisConn.Do("SET", key, val)
	}
	return err
}

func (rs RedisStore) Clear() error {

	redisConn := rs.connPool.Get()
	defer redisConn.Close()

	// The KEYS Redis command must NOT be used because of performance issues at high volumes.
	// Instead, we use SCAN with a pattern and then delete each key individually using pipelining.

	// Get all keys to delete.
	pattern := rs.redisKey + ":*"

	rresp, err := redis.MultiBulk(redisConn.Do("SCAN", "0", "MATCH", pattern))
	if err != nil {
		return err
	}
	keysToRemove, err := redis.Strings(rresp[1], err)
	if err != nil {
		return err
	}

	// Delete those keys through pipelining

	for i, key := range keysToRemove {

		// Flush every 5000 commands
		if i%5000 == 0 {
			err := redisConn.Flush()
			if err != nil {
				return err
			}
		}

		redisConn.Send("DEL", key)
	}

	// One final flush to send any remaining commands
	return redisConn.Flush()
}

func (rs RedisStore) Delete(id string) error {
	redisConn := rs.connPool.Get()
	defer redisConn.Close()
	key := rs.redisKey + ":" + id
	_, err := redisConn.Do("DEL", key)
	return err
}
