package redisStore

import (
	"time"

	"github.com/gomodule/redigo/redis"
)

type RedisStore struct {
	RedisKey string
	ConnPool *redis.Pool
}

func (rs RedisStore) Get(id string) ([]byte, error) {
	redisConn := rs.ConnPool.Get()
	defer redisConn.Close()
	key := rs.RedisKey + ":" + id

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
	redisConn := rs.ConnPool.Get()
	defer redisConn.Close()
	key := rs.RedisKey + ":" + id
	_, err := redisConn.Do("SET", key, val)
	if err != nil {
		return err
	}
	_, err = redisConn.Do("EXPIRE", key, expiration.Seconds())
	return err
}

func (rs RedisStore) Clear() error {

	redisConn := rs.ConnPool.Get()
	defer redisConn.Close()

	// The KEYS Redis command must NOT be used because of performance issues at high volumes.
	// Instead, we use SCAN with a pattern and then delete each key individually using pipelining.
	
	// Get all keys to delete.
	pattern := rs.RedisKey + ":*"

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
		if i % 5000 == 0 {
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
	redisConn := rs.ConnPool.Get()
	defer redisConn.Close()
	key := rs.RedisKey + ":" + id
	_, err := redisConn.Do("DEL", key)
	return err
}
