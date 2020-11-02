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
	MaxOpenConns:    100,
	MaxIdleConns:    100,
	ConnMaxLifetime: 1 * time.Second,
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

	// The maximum number of connections in the idle connection pool.
	//
	// If MaxOpenConns is greater than 0 but less than the new MaxIdleConns,
	// then the new MaxIdleConns will be reduced to match the MaxOpenConns limit.
	//
	// If n < 0, no idle connections are retained.
	//
	// The default is 100.
	MaxIdleConns int

	// The maximum number of open connections to the database.
	//
	// If MaxIdleConns is greater than 0 and the new MaxOpenConns is less than
	// MaxIdleConns, then MaxIdleConns will be reduced to match the new
	// MaxOpenConns limit.
	//
	// If n < 0, then there is no limit on the number of open connections.
	//
	// The default is 100.
	MaxOpenConns int

	// The maximum amount of time a connection may be reused.
	//
	// Expired connections may be closed lazily before reuse.
	//
	// If d < 0, connections are reused forever.
	//
	// The default is 1 * time.Second
	ConnMaxLifetime time.Duration
}
```

### Default Config
```go
var ConfigDefault = Config{
	GCInterval:      10 * time.Second,
	Database:        "./fiber.sqlite3",
	TableName:       "fiber",
	DropTable:       false,
	MaxOpenConns:    100,
	MaxIdleConns:    100,
	ConnMaxLifetime: 1 * time.Second,
}
```
