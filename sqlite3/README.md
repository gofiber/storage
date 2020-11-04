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
	GCInterval:      10 * time.Second,
	Database:        "./fiber.sqlite3",
	TableName:       "fiber",
	DropTable:       false,
})
```

### Config
```go
type Config struct {
	// Time before deleting expired keys
	//
	// Default is 10 * time.Second
	GCInterval time.Duration

	// DB file path
	//
	// Default is "./fiber.sqlite3"
	Database string

	// DB table name
	//
	// Default is "fiber"
	TableName string

	// When set to true, this will Drop any existing table with the same name
	DropTable bool
}
```

### Default Config
```go
var ConfigDefault = Config{
	GCInterval:      10 * time.Second,
	Database:        "./fiber.sqlite3",
	TableName:       "fiber",
	DropTable:       false,
}
```
