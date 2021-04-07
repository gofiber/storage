# Ristretto

A Memory-bound storage driver using [`dgraph-io/ristretto`](https://github.com/dgraph-io/ristretto).

### Table of Contents
- [Signatures](#signatures)
- [Installation](#installation)
- [Examples](#examples)
- [Config](#config)
- [Default Config](#default-config)


### Signatures
```go
func New(config ...Config) Storage
func (s *Storage) Get(key string) ([]byte, error)
func (s *Storage) Set(key string, val []byte, exp time.Duration) error
func (s *Storage) Delete(key string) error
func (s *Storage) Reset() error
func (s *Storage) Close() error
```

### Installation
Ristretto is tested on the 2 last [Go versions](https://golang.org/dl/) with support for modules. So make sure to initialize one first if you didn't do that yet:
```bash
go mod init github.com/<user>/<repo>
```
And then install the ristretto implementation:
```bash
go get github.com/gofiber/storage/ristretto
```

### Examples
Import the storage package.
```go
import "github.com/gofiber/storage/ristretto"
```

You can use the following possibilities to create a storage:
```go
// Initialize default config
store := ristretto.New()

// Initialize custom config
store := ristretto.New(ristretto.Config{
  NumCounters: 1e7, // number of keys to track frequency of (10M).
	MaxCost:     1 << 30, // maximum cost of cache (1GB).
	BufferItems: 64, // number of keys per Get buffer.
})
```

### Config
```go
type Config struct {
  // NumCounters number of keys to track frequency of (10M).
  NumCounters int64

  // MaxCost maximum cost of cache (1GB).
	MaxCost     int64

  // BufferItems number of keys per Get buffer.
	BufferItems int64
}
```

### Default Config
```go
var ConfigDefault = Config{
	NumCounters: 1e7,
	MaxCost:     1 << 30,
	BufferItems: 64,
	DefaultCost: 1,
}
```
