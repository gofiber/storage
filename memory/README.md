# Memory

An in-memory storage driver.

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
func (s *Storage) Conn() map[string]entry
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
import "github.com/gofiber/storage/memory"
```

You can use the following possibilities to create a storage:
```go
// Initialize default config
store := memory.New()

// Initialize custom config
store := memory.New(memory.Config{
	GCInterval: 10 * time.Second,
})
```

### Config
```go
type Config struct {
	// Time before deleting expired keys
	//
	// Default is 10 * time.Second
	GCInterval time.Duration
}
```

### Default Config
```go
var ConfigDefault = Config{
	GCInterval: 10 * time.Second,
}
```
