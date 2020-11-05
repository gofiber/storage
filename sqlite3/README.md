# SQLite3

A SQLite3 storage driver using [mattn/go-sqlite3](https://github.com/mattn/go-sqlite3).

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
import "github.com/gofiber/storage/sqlite3"
```

You can use the following possibilities to create a storage:
```go
// Initialize default config
store := sqlite3.New()

// Initialize custom config
store := sqlite3.New(sqlite3.Config{
	Database:   "./fiber.sqlite3",
	Table:      "fiber_storage",
	Clear:      false,
	GCInterval: 10 * time.Second,
})
```

### Config
```go
type Config struct {
	// Database name
	//
	// Optional. Default is "fiber"
	Database string

	// Table name
	//
	// Optional. Default is "fiber_storage"
	Table string

	// Clear any existing keys in existing Table
	//
	// Optional. Default is false
	Clear bool

	// Time before deleting expired keys
	//
	// Optional. Default is 10 * time.Second
	GCInterval time.Duration
}
```

### Default Config
```go
var ConfigDefault = Config{
	Database:   "./fiber.sqlite3",
	Table:      "fiber_storage",
	Clear:      false,
	GCInterval: 10 * time.Second,
}
```
