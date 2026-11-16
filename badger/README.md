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

### Garbage Collection
Every `GCInterval` the storage runs Badger's value-log garbage collection until nothing is left to rewrite. Badger only collects value-log files that an LSM compaction has accounted for, and a value of `ValueThreshold` (1 MiB by default) or more leaves just a pointer in the memtable, so a store of mostly large values would never compact on its own. Once a value-log file's worth (`ValueLogFileSize`) of such values has been written, the storage flushes the memtable and compacts the LSM down to its last level, where Badger drops expired entries, rewriting most of it; the LSM holds the keys and the values below `ValueThreshold`, so it stays small while most values live in the value log. A value log of more than one file at startup makes the first collection flush as well, so space an earlier process left behind comes back; a value still live at a flush gives its space back only at the next one.

The flush first waits for any compaction in progress, and while it runs, for longer the more keys and small values level 0 and the base level hold, reads stall, writes through the storage wait, and writes through `Conn()` fail with `badger.ErrBlockedWrites`. Moving the LSM down to its last level then pauses Badger's background compactions but not writes. `Reset` and `Close` wait for it and for a value-log file being rewritten. Don't call `DropAll`, `DropPrefix` or `Flatten` on the database while the storage is open, also not on one passed to `NewFromConnection`: they would race the collector; use `Reset` instead of `DropAll`. The flush reserves keys starting with `"\x00fiber-storage:badger:"` and the key `"\xff\xff\xff\xfffiber-storage:badger:hi"`, so don't store keys like these.

### Using an Existing Badger Database
Badger allows a single writer per directory, so an application that already keeps a `*badger.DB` open cannot have the storage open the same directory again. Pass the open database instead. Only the `Reset` and `GCInterval` options are read.

The database stays yours to close: `Close` on a storage built this way stops the value-log collector but leaves the database open, so the rest of your application keeps working. The storage itself is closed, and any operation on it afterwards returns `ErrClosed`.

On a shared database the collector never flushes the memtable, since that would fail the application's own concurrent writes, so the space of large values comes back only through the application's own compactions.

> **Warning:** keys are not namespaced. `Reset` — the config option and the method — runs `DropAll` on the shared database, deleting every key your application stored in it, not just this storage's entries.

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
