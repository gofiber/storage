# Redis

A Redis storage driver using [go-redis/redis](github.com/go-redis/redis).

### Table of Contents
- [Signatures](#signatures)
- [Examples](#examples)
- [Config](#config)
- [Default Config](#default-config)

### Signatures
```go
func New(config ...Config) Storage
```

### Examples
Import the storage package.
```go
import "github.com/gofiber/storage/redis"
```

You can use the following possibilities to create a storage:
```go
// Initialize default config
store := redis.New()

// Initialize custom config
store := redis.New(redis.Config{
	Host:     "127.0.0.1",
	Port:     6379,
	Username: "",
	Password: "",
	Database: 0,
	Clear:    false,
})
```

### Config
```go
type Config struct {
	// Host name where the DB is hosted
	//
	// Optional. Default is "127.0.0.1"
	Host string

	// Port where the DB is listening on
	//
	// Optional. Default is 3306
	Port int

	// Server username
	//
	// Optional. Default is ""
	Username string

	// Server password
	//
	// Optional. Default is ""
	Password string

	// Database to be selected after connecting to the server.
	//
	// Optional. Default is 0
	Database int

	// Clear any existing keys in existing Collection
	//
	// Optional. Default is false
	Clear bool
}

```

### Default Config
```go
var ConfigDefault = Config{
	Host:     "127.0.0.1",
	Port:     6379,
	Username: "",
	Password: "",
	Database: 0,
	Clear:    false,
}
```
