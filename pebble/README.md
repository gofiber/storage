---
id: pebble
title: Pebble
---

![Release](https://img.shields.io/github/v/tag/gofiber/storage?filter=pebble*)
[![Discord](https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7)](https://gofiber.io/discord)
![Test](https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-pebble.yml?label=Tests)

A fast key-value DB using [cockroachdb/pebble](https://github.com/cockroachdb/pebble)

### Table of Contents

- [Signatures](#signatures)
- [Installation](#installation)
- [Examples](#examples)
- [Config](#config)
- [Default Config](#default-config)

### Signatures

```go
func New(config ...Config) Storage
func NewFromConnection(db *pebble.DB, config ...Config) *Storage
func (s *Storage) Get(key string) ([]byte, error)
func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error)
func (s *Storage) Set(key string, val []byte, exp time.Duration) error
func (s *Storage) SetWithContext(ctx context.Context, key string, val []byte, exp time.Duration) error
func (s *Storage) Delete(key string) error
func (s *Storage) DeleteWithContext(ctx context.Context, key string) error
func (s *Storage) Reset() error
func (s *Storage) ResetWithContext(ctx context.Context) error
func (s *Storage) Close() error
func (s *Storage) Conn() *pebble.DB
```

**Note:** Every method returns `ErrClosed` once `Close` has been called, rather than reaching into a closed database, which Pebble panics on.

**Note:** `Reset` deletes in bounded chunks so that resetting a large database does not have to fit in memory. A reset that spans more than one chunk is therefore not atomic: a concurrent reader can observe the database part way through it.

**Note:** Expiration is tracked with a one-second granularity, so an `exp` shorter than a second is rounded up to one second. Expired entries are reported as a miss immediately and reclaimed in the background on `GCInterval`; `Get` does not delete them, since Pebble has no compare-and-delete and doing so could drop a value a concurrent `Set` had just written.

**Note:** `WriteOptions` defaults to `nil`, which Pebble reads as a synchronous write, so every `Set` and `Delete` is flushed to disk before it returns. Pass `&pebble.WriteOptions{}` to let Pebble buffer writes instead, which is far faster but loses the most recent writes if the process dies.

**Note:** Pebble has no native context support, so the context methods run the operation to completion. They do honour a context that is already cancelled or past its deadline, returning the context error without touching the storage.

### Installation

Pebble is tested on the 2 last [Go versions](https://golang.org/dl/) with support for modules. So make sure to initialize one first if you didn't do that yet:
```bash
go mod init github.com/<user>/<repo>
```
Note: This step is only required if you don't have an existing module.

And then install the Pebble implementation:

```bash
go get github.com/gofiber/storage/pebble/v2
```

### Examples

Import the storage package.

```go
import "github.com/gofiber/storage/pebble/v2"
```

You can use the following possibilities to create a storage:

```go
// Initialize default config
store := pebble.New()

// Initialize custom config
store := pebble.New(pebble.Config{
	Path:         "db",
	WriteOptions: &pebble.WriteOptions{},
})
```

### Config

```go
type Config struct {
	// Path is the directory the database is stored in.
	//
	// Optional. Default is "db"
	Path string

	// WriteOptions are the options every write is issued with. Pebble reads nil
	// as synchronous, so each Set and Delete is flushed before returning. Pass
	// &pebble.WriteOptions{} to buffer instead, losing recent writes on a crash.
	//
	// Optional. Default is nil.
	WriteOptions *pebble.WriteOptions

	// GCInterval is how often expired entries are reclaimed in the background.
	//
	// Optional. Default is 10 * time.Second
	GCInterval time.Duration
}
```

### Default Config

```go
var ConfigDefault = Config{
	Path:         "db",
	WriteOptions: nil,
	GCInterval:   10 * time.Second,
}
```

### Using an Existing Pebble Database
Pebble takes a directory lock, so an application that already keeps a `*pebble.DB` open cannot have the storage open the same path again. Pass the open database instead. Only the `WriteOptions` and `GCInterval` options are read.

The database stays yours to close: `Close` on a storage built this way stops the garbage collector but leaves the database open, so the rest of your application keeps working. The storage itself is closed, and any operation on it afterwards returns `ErrClosed`.

Storages built on the same database share one write-order lock and one collector cursor, so each one's collector coordinates with the others' writes and a `Reset` by any of them rewinds them all. Closing the storage that opened the database closes the database itself: the others then report `ErrClosed`, which matters here because Pebble answers use of a closed database with a panic.

> **Warning:** the storage treats the whole keyspace as its own — `Reset` deletes every key in the database, and the background collector reclaims any value that looks like an expired entry. Keep application data out of a database backing this storage.

```go
import (
    "github.com/cockroachdb/pebble"
    pebblestorage "github.com/gofiber/storage/pebble/v2"
)

func main() {
    db, err := pebble.Open("./fiber.pebble", &pebble.Options{})
    if err != nil {
        panic(err)
    }
    defer db.Close()

    store := pebblestorage.NewFromConnection(db)
    defer store.Close()
}
```
