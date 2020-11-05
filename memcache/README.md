# Memcache

A Memcache storage driver using [`bradfitz/gomemcache`](https://github.com/bradfitz/gomemcache).

### Table of Contents
- [Signatures](#signatures)
- [Installation](#installation)
- [Examples](#examples)
- [Config](#config)
- [Default Config](#default-config)

### Signatures
```go
func New(config ...Config) Storage

var ErrNotExist = errors.New("key does not exist")
```
### Installation
Memory is tested on the 2 last [Go versions](https://golang.org/dl/) with support for modules. So make sure to initialize one first if you didn't do that yet:
```bash
go mod init github.com/<user>/<repo>
```
And then install the memory implementation:
```bash
go get github.com/gofiber/storage/memory
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
	Servers: "localhost:11211",
})
```

### Config
```go
type Config struct {
	// Server list divided by ,
	// i.e. server1:11211, server2:11212
	//
	// Optional. Default is "127.0.0.1:11211"
	Servers string

	// Clear any existing keys in existing Table
	//
	// Optional. Default is false
	Clear bool
}
```

### Default Config
```go
var ConfigDefault = Config{
	Servers:      "127.0.0.1:11211",
}
```
