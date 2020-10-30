# Redis

A Redis storage driver using [gomodule/redido](https://github.com/gomodule/redigo).

### Creation

To create a new instance of the Redis store, you must provide a dial function (which is used to create a new Redis pool) and a root Redis key to be used.

```go
// import "github.com/gomodule/redigo/redis"
store := redisStore.New(func() (redis.Conn, error) {
    return redis.Dial("tcp", "127.0.0.1:6379")
}, "myRedisKey")
```

In this example, we're connectiong to a Redis server at `127.0.0.1:6379`, and prefixing all keys with `myRedisKey:`.

### Running tests/benchmarks

Tests and benchmarks for this package require a running Redis server, and assume you have one at `127.0.0.1:6379`. If needed, the dial function and/or address can be changed in the `getConn` and `redisLocation` variables, respectively.
