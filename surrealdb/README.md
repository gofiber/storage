---
id: surrealdb
title: SurrealDB
---

![Release](https://img.shields.io/github/v/tag/gofiber/storage?filter=surrealdb*)
[![Discord](https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7)](https://gofiber.io/discord)
![Test](https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-surrealdb.yml?label=Tests)

### Table of Contents

- [Signatures](#signatures)
- [Installation](#installation)
- [Examples](#examples)
- [Config](#config)
- [Default Config](#default-config)

### Signatures

```go
func New(config ...Config) *Storage
func NewWithContext(ctx context.Context, config ...Config) *Storage
func NewFromConnection(db *surrealdb.DB, config ...Config) *Storage
func (s *Storage) Get(key string) ([]byte, error)
func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error)
func (s *Storage) Set(key string, val []byte, exp time.Duration) error
func (s *Storage) SetWithContext(ctx context.Context, key string, val []byte, exp time.Duration) error
func (s *Storage) Delete(key string) error
func (s *Storage) DeleteWithContext(ctx context.Context, key string) error
func (s *Storage) Reset() error
func (s *Storage) ResetWithContext(ctx context.Context) error
func (s *Storage) Close() error
func (s *Storage) Conn() *surrealdb.DB
func (s *Storage) List() ([]byte, error) {
```

**Note:** The context methods pass the context through to the SurrealDB client, so a cancelled context or an expired deadline aborts the query.

**Note:** Expirations are stored with a one-second granularity and rounded up, so an entry is never dropped before its expiration but may outlive it by up to a second.

### Installation

SurrealDB is tested on latest two version of Golang.
Make sure to initialize a Go module first if you haven’t already:

```bash
go get github.com/gofiber/storage/surrealdb
```

### Examples

Import the storage package.

```go
import "github.com/gofiber/storage/surrealdb"
```

You can use the following possibilities to create a storage:

```go
// Initialize default config
store := surrealdb.New()

// Initialize SurrealDB storage with custom config
store := surrealdb.New(Config{
ConnectionString: "ws://localhost:8000",
Namespace:        "fiber_storage",
Database:         "fiber_storage",
Username:         "root",
Password:         "root",
Access:           "full",
Scope:            "all",
DefaultTable:     "fiber_storage",
GCInterval:       time.Second * 10,
})
```

### Config

```go
type Config struct {
// The connection URL to connect to SurrealDB
ConnectionString string

// The namespace to be used in SurrealDB
Namespace string

// The database to be used within the specified namespace
Database string

// The application username to connect to SurrealDB
Username string

// The application password to connect to SurrealDB
Password string

// Optional access token or access type
Access string

// Optional scope for scoped logins (e.g., user-defined scopes)
Scope string

// The default table used to store key-value records
DefaultTable string

// Optional. Default is 10 * time.Second
GCInterval time.Duration
}
```

### Default Config

```go
// ConfigDefault is the default config
var ConfigDefault = Config{
ConnectionString: "ws://localhost:8000",
Namespace:        "fiber_storage",
Database:         "fiber_storage",
Username:         "root",
Password:         "root",
Access:           "full",
Scope:            "all",
DefaultTable:     "fiber_storage",
GCInterval:       time.Second * 10,
}
```

### Using an Existing SurrealDB Connection
If your application already holds a `*surrealdb.DB`, you can build the storage on it instead of connecting a second time. Selecting the namespace and database and signing in stay yours to do; only the `DefaultTable` and `GCInterval` options are read.

The connection stays yours to close: `Close` on a storage built this way stops the garbage collector but leaves the connection open, so the rest of your application keeps working. The storage itself is closed: any operation on it afterwards returns `ErrClosed`.

```go
import (
    "context"

    storage "github.com/gofiber/storage/surrealdb"
    "github.com/surrealdb/surrealdb.go"
)

func main() {
    ctx := context.Background()

    db, err := surrealdb.FromEndpointURLString(ctx, "ws://localhost:8000")
    if err != nil {
        panic(err)
    }
    defer db.Close(ctx)

    if err := db.Use(ctx, "fiber", "fiber"); err != nil {
        panic(err)
    }

    token, err := db.SignIn(ctx, &surrealdb.Auth{Username: "root", Password: "root"})
    if err != nil {
        panic(err)
    }
    if err := db.Authenticate(ctx, token); err != nil {
        panic(err)
    }

    store := storage.NewFromConnection(db, storage.Config{
        DefaultTable: "fiber_storage",
    })
    defer store.Close()
}
```
