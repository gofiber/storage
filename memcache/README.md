# Memcache

A Memcache storage driver using [`bradfitz/gomemcache`](https://github.com/bradfitz/gomemcache).

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
import "github.com/gofiber/storage/memcache"
```

You can use the following possibilities to create a storage:
```go
// Initialize default config
store := memcache.New()

// Initialize custom config
store := memcache.New(memcache.Config{
	Servers:        "localhost:11211",
	Timeout:        100 * time.Millisecond,
	MaxIdleConns:   10,
})
```

### Config
```go
type Config struct {
	// Server list divided by ,
	// i.e. "127.0.0.1:11211, 127.0.0.1:11212"
	//
	// Optional. Default is "127.0.0.1:11211"
	Servers string

	// The socket read/write timeout.
	//
	// Optional. Default is 100 * time.Millisecond
	Timeout time.Duration

	// The maximum number of idle connections that will be maintained per address.
	//
	// Consider your expected traffic rates and latency carefully. This should
	// be set to a number higher than your peak parallel requests.
	//
	// Optional. Default is 2
	MaxIdleConns int
}
```

### Default Config
```go
var ConfigDefault = Config{
	Servers:      "localhost:11211",
	Timeout:      100 * time.Millisecond,
	MaxIdleConns: 2,
}
```
