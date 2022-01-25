# SQLite3

A SQLite3 storage driver using [mattn/go-sqlite3](https://github.com/mattn/go-sqlite3).

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
SQLite3 is tested on the 2 last [Go versions](https://golang.org/dl/) with support for modules. So make sure to initialize one first if you didn't do that yet:
```bash
go mod init github.com/<user>/<repo>
```
And then install the sqlite3 implementation:
```bash
go get github.com/gofiber/storage/sqlite3
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
	Database:        "./fiber.sqlite3",
	Table:           "fiber_storage",
	Reset:           false,
	GCInterval:      10 * time.Second,
	MaxOpenConns:    100,
	MaxIdleConns:    100,
	ConnMaxLifetime: 1 * time.Second,
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

	// Reset clears any existing keys in existing Table
	//
	// Optional. Default is false
	Reset bool

	// Time before deleting expired keys
	//
	// Optional. Default is 10 * time.Second
	GCInterval time.Duration

	// //////////////////////////////////
	// Adaptor related config options //
	// //////////////////////////////////

	// MaxIdleConns sets the maximum number of connections in the idle connection pool.
	//
	// Optional. Default is 100.
	MaxIdleConns int

	// MaxOpenConns sets the maximum number of open connections to the database.
	//
	// Optional. Default is 100.
	MaxOpenConns int

	// ConnMaxLifetime sets the maximum amount of time a connection may be reused.
	//
	// Optional. Default is 1 second.
	ConnMaxLifetime time.Duration
}
```

### Default Config
```go
var ConfigDefault = Config{
	Database:        "./fiber.sqlite3",
	Table:           "fiber_storage",
	Reset:           false,
	GCInterval:      10 * time.Second,
	MaxOpenConns:    100,
	MaxIdleConns:    100,
	ConnMaxLifetime: 1 * time.Second,
}
```
