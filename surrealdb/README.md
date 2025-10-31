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

**Note:** The context methods are dummy methods and don't have any functionality, as SurrealDB does not support context cancellation in its client library. They are provided for compliance with the Fiber storage interface.

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
