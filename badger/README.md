---
id: badger
title: Badger
---

![Release](https://img.shields.io/github/v/tag/gofiber/storage?filter=badger*)
[![Discord](https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7)](https://gofiber.io/discord)
![Test](https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-badger.yml?label=Tests)

A fast key-value DB using [dgraph-io/badger](https://github.com/dgraph-io/badger)

### Table of Contents

- [Signatures](#signatures)
- [Installation](#installation)
- [Examples](#examples)
- [Config](#config)
- [Default Config](#default-config)

### Signatures

```go
func New(config ...Config) Storage
func NewFromConnection(db *badger.DB, config ...Config) *Storage
func (s *Storage) Get(key string) ([]byte, error)
func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error)
func (s *Storage) Set(key string, val []byte, exp time.Duration) error
func (s *Storage) SetWithContext(ctx context.Context, key string, val []byte, exp time.Duration) error
func (s *Storage) Delete(key string) error
func (s *Storage) DeleteWithContext(ctx context.Context, key string) error
func (s *Storage) Reset() error
func (s *Storage) ResetWithContext(ctx context.Context) error
func (s *Storage) Close() error
func (s *Storage) Conn() *badger.DB
```

**Note:** Badger has no native context support, so the context methods run the operation to completion. They do honour a context that is already cancelled or past its deadline, returning the context error without touching the storage.

### Installation

Badger is tested on the 2 last [Go versions](https://golang.org/dl/) with support for modules. So make sure to initialize one first if you didn't do that yet:

```bash
go mod init github.com/<user>/<repo>
```

And then install the badger implementation:

```bash
go get github.com/gofiber/storage/badger/v2
```

### Examples

Import the storage package.

```go
import "github.com/gofiber/storage/badger/v2"
```

You can use the following possibilities to create a storage:

```go
// Initialize default config
store := badger.New()

// Initialize custom config
store := badger.New(badger.Config{
	Database:   "./fiber.badger",
	Reset:      false,
	GCInterval: 10 * time.Second,
})
```

### Config

```go
type Config struct {
	// Database name
	//
	// Optional. Default is "./fiber.badger"
	Database string

	// Reset clears any existing keys in existing Table
	//
	// Optional. Default is false
	Reset bool

	// Time before deleting expired keys
	//
	// Optional. Default is 10 * time.Second
	GCInterval time.Duration

	// BadgerOptions is a way to set options in badger
	//
	// Optional. Default is badger.DefaultOptions("./fiber.badger")
	BadgerOptions badger.Options

	// Logger is the default logger used by badger
	//
	// Optional. Default is nil
	Logger badger.Logger

	// UseLogger define if any logger will be used
	//
	// Optional. Default is false
	UseLogger bool
}
```

### Default Config

```go
var ConfigDefault = Config{
	Database:      "./fiber.badger",
	Reset:         false,
	GCInterval:    10 * time.Second,
	BadgerOptions: badger.DefaultOptions("./fiber.badger").WithLogger(nil),
	Logger:        nil,
	UseLogger:     false,
}
```

### Using an Existing Badger Database
Badger allows a single writer per directory, so an application that already keeps a `*badger.DB` open cannot have the storage open the same directory again. Pass the open database instead. Only the `Reset` and `GCInterval` options are read.

The database stays yours to close: `Close` on a storage built this way stops the value-log collector but leaves the database open, so the rest of your application keeps working.

```go
import (
    "github.com/dgraph-io/badger/v3"
    badgerstorage "github.com/gofiber/storage/badger/v2"
)

func main() {
    db, err := badger.Open(badger.DefaultOptions("./fiber.badger"))
    if err != nil {
        panic(err)
    }
    defer db.Close()

    store := badgerstorage.NewFromConnection(db)
    defer store.Close()
}
```
