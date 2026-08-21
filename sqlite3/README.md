---
id: sqlite3
title: SQLite3
---

![Release](https://img.shields.io/github/v/tag/gofiber/storage?filter=sqlite3*)
[![Discord](https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7)](https://gofiber.io/discord)
![Test](https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-sqlite3.yml?label=Tests)

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
func NewFromConnection(db *sql.DB, config ...Config) *Storage
func (s *Storage) Get(key string) ([]byte, error)
func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error)
func (s *Storage) Set(key string, val []byte, exp time.Duration) error
func (s *Storage) SetWithContext(ctx context.Context, key string, val []byte, exp time.Duration) error
func (s *Storage) Delete(key string) error
func (s *Storage) DeleteWithContext(ctx context.Context, key string) error
func (s *Storage) Reset() error
func (s *Storage) ResetWithContext(ctx context.Context) error
func (s *Storage) Close() error
func (s *Storage) Conn() *sql.DB
```
**Note:** Expirations are stored with a one-second granularity and rounded up, so an entry is never dropped before its expiration but may outlive it by up to a second.

### Installation
SQLite3 is tested on the 2 last [Go versions](https://golang.org/dl/) with support for modules. So make sure to initialize one first if you didn't do that yet:
```bash
go mod init github.com/<user>/<repo>
```
And then install the sqlite3 implementation:
```bash
go get github.com/gofiber/storage/sqlite3/v2
```

### Examples
Import the storage package.
```go
import "github.com/gofiber/storage/sqlite3/v2"
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

### Using an Existing SQLite3 Connection
If your application already holds a `*sql.DB`, you can build the storage on it instead of opening a second handle. The remaining config options (table name, GC interval, reset) still apply.

The handle stays yours to close: `Close` on a storage built this way stops the garbage collector but leaves the database open, so the rest of your application keeps working. The storage itself is closed: any operation on it afterwards returns `ErrClosed`.

```go
import (
	"database/sql"

	"github.com/gofiber/storage/sqlite3/v2"
	_ "github.com/mattn/go-sqlite3"
)

func main() {
	db, err := sql.Open("sqlite3", "./fiber.sqlite3")
	if err != nil {
		panic(err)
	}
	defer db.Close()

	store := sqlite3.NewFromConnection(db, sqlite3.Config{
		Table: "fiber_storage",
	})
	defer store.Close()
}
```
