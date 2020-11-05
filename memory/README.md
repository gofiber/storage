# Memory

An in-memory storage driver.

### Table of Contents
- [Signatures](#signatures)
- [Examples](#examples)
- [Config](#config)
- [Default Config](#default-config)

### Signatures
```go
func New(config ...Config) Storage

var ErrNotExist = errors.New("key does not exist")

func (s *Storage) Get(key string) ([]byte, error)
func (s *Storage) Set(key string, val []byte, exp time.Duration) error
func (s *Storage) Delete(key string) error
func (s *Storage) Clear() error
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
