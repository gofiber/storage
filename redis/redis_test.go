package redisStore

import (
	"fmt"
	"testing"
	"time"

	"github.com/gofiber/utils"
	"github.com/gomodule/redigo/redis"
)

// The tests here assume that you have a local Redis sever running on the default port.
// The Redis address can be changed using the redisLocation variable.

var (
	redisLocation = "127.0.0.1:6379"
	getConn       = func() (redis.Conn, error) {
		return redis.Dial("tcp", redisLocation)
	}
)

func Test_Set(t *testing.T) {

	topLevelKey := "store"
	store := NewRedisStore(getConn, topLevelKey)

	key := "aaaa"
	val := []byte("This is a value")

	err := store.Set(key, val, 0)
	utils.AssertEqual(t, nil, err)

	key = fmt.Sprintf("%s:%s", topLevelKey, key)

	redisConn, err := getConn()
	defer redisConn.Close()
	utils.AssertEqual(t, nil, err)

	exists, err := redis.Bool(redisConn.Do("EXISTS", key))
	utils.AssertEqual(t, nil, err)
	utils.AssertEqual(t, true, exists)

	output, err := redis.Bytes(redisConn.Do("GET", key))
	utils.AssertEqual(t, nil, err)
	utils.AssertEqual(t, val, output)

}

func Test_SetExpiry(t *testing.T) {

	topLevelKey := "store"
	store := NewRedisStore(getConn, topLevelKey)

	key := "aaaa"
	val := []byte("This is a value")

	expiry := time.Second * 60

	err := store.Set(key, val, expiry)
	utils.AssertEqual(t, nil, err)

	key = fmt.Sprintf("%s:%s", topLevelKey, key)

	redisConn, err := getConn()
	defer redisConn.Close()
	utils.AssertEqual(t, nil, err)

	exists, err := redis.Bool(redisConn.Do("EXISTS", key))
	utils.AssertEqual(t, nil, err)
	utils.AssertEqual(t, true, exists)

	ttl, err := redis.Int(redisConn.Do("TTL", key))
	utils.AssertEqual(t, nil, err)
	if !(float64(ttl) <= expiry.Seconds() && float64(ttl) > expiry.Seconds()-5) {
		t.Fatalf("Test_SetExpiry: expiry out of bounds (is %d, must be %d<x<=%d)", ttl, int64(expiry.Seconds())-5, int64(expiry.Seconds()))
	}
}

func Test_Get(t *testing.T) {

	topLevelKey := "store"
	store := NewRedisStore(getConn, topLevelKey)

	key := "aaaa"
	val := []byte("This is a value")

	redisConn, err := getConn()
	defer redisConn.Close()
	utils.AssertEqual(t, nil, err)

	_, err = redisConn.Do("SET", fmt.Sprintf("%s:%s", topLevelKey, key), val)
	utils.AssertEqual(t, nil, err)

	output, err := store.Get(key)
	utils.AssertEqual(t, nil, err)
	utils.AssertEqual(t, val, output)

}

func Test_Delete(t *testing.T) {

	topLevelKey := "store"
	store := NewRedisStore(getConn, topLevelKey)

	key := "aaaa"
	formedKey := fmt.Sprintf("%s:%s", topLevelKey, key)
	val := []byte("This is a value")

	redisConn, err := getConn()
	defer redisConn.Close()
	utils.AssertEqual(t, nil, err)

	_, err = redisConn.Do("SET", formedKey, val)
	utils.AssertEqual(t, nil, err)

	err = store.Delete(key)
	utils.AssertEqual(t, nil, err)

	exists, err := redis.Bool(redisConn.Do("EXISTS", formedKey))
	utils.AssertEqual(t, nil, err)
	utils.AssertEqual(t, false, exists)

}

func Test_Clear(t *testing.T) {

	topLevelKey := "store"
	store := NewRedisStore(getConn, topLevelKey)

	key1 := "aaaa"
	key2 := "bbbb"
	formedKey1 := fmt.Sprintf("%s:%s", topLevelKey, key1)
	formedKey2 := fmt.Sprintf("%s:%s", topLevelKey, key2)
	val := []byte("This is a value")

	redisConn, err := getConn()
	defer redisConn.Close()
	utils.AssertEqual(t, nil, err)

	_, err = redisConn.Do("SET", formedKey1, val)
	utils.AssertEqual(t, nil, err)
	_, err = redisConn.Do("SET", formedKey2, val)
	utils.AssertEqual(t, nil, err)

	err = store.Clear()
	utils.AssertEqual(t, nil, err)

	exists, err := redis.Bool(redisConn.Do("EXISTS", formedKey1))
	utils.AssertEqual(t, nil, err)
	utils.AssertEqual(t, false, exists)

	exists, err = redis.Bool(redisConn.Do("EXISTS", formedKey2))
	utils.AssertEqual(t, nil, err)
	utils.AssertEqual(t, false, exists)

}

func Benchmark_Set(b *testing.B) {
	topLevelKey := "store"
	store := NewRedisStore(getConn, topLevelKey)

	key := "aaaa"
	val := []byte("This is a value")

	expiry := time.Second * 60

	b.ResetTimer()

	for n := 0; n < b.N; n++ {
		store.Set(key, val, expiry)
	}

}

func Benchmark_Get(b *testing.B) {
	topLevelKey := "store"
	store := NewRedisStore(getConn, topLevelKey)

	key := "aaaa"
	val := []byte("This is a value")

	store.Set(key, val, 0)

	b.ResetTimer()

	for n := 0; n < b.N; n++ {
		store.Get(key)
	}

}
