---
id: ristretto
title: Ristretto
---

![Release](https://img.shields.io/github/v/tag/gofiber/storage?filter=ristretto*)
[![Discord](https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7)](https://gofiber.io/discord)
![Test](https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-ristretto.yml?label=Tests)

A Memory-bound storage driver using [`dgraph-io/ristretto`](https://github.com/dgraph-io/ristretto).

### Table of Contents

- [Signatures](#signatures)
- [Installation](#installation)
- [Examples](#examples)
- [Config](#config)
- [Default Config](#default-config)


### Signatures

```go
func New(config ...Config) Storage
func NewFromConnection(cache *ristretto.Cache, config ...Config) *Storage
func (s *Storage) Get(key string) ([]byte, error)
func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error)
func (s *Storage) Set(key string, val []byte, exp time.Duration) error
func (s *Storage) SetWithContext(ctx context.Context, key string, val []byte, exp time.Duration) error
func (s *Storage) Delete(key string) error
func (s *Storage) DeleteWithContext(ctx context.Context, key string) error
func (s *Storage) Reset() error
func (s *Storage) ResetWithContext(ctx context.Context) error
func (s *Storage) Close() error
func (s *Storage) Conn() *ristretto.Cache
```

**Note:** `Set` calls Ristretto's `Wait` before returning, so a `Get` that follows a `Set` no longer races the cache's background writer. `Wait` drains the write buffer; it does not guarantee the entry was admitted. Ristretto is a cache with an admission policy, so an entry may be rejected on write or evicted later and a `Get` can still report a miss — read-after-write here is best-effort, not a guarantee, and this driver should not be used where a value must be readable once stored. Set `SkipWaitForWrite: true` to keep Ristretto's buffered write behaviour instead, which is roughly 3x faster on `Set` but makes a `Get` straight after a `Set` racy.

**Note:** Ristretto has no native context support, so the context methods run the operation to completion. They do honour a context that is already cancelled or past its deadline, returning the context error without touching the storage.

### Installation
Ristretto is tested on the 2 last [Go versions](https://golang.org/dl/) with support for modules. So make sure to initialize one first if you didn't do that yet:
```bash
go mod init github.com/<user>/<repo>
```
And then install the ristretto implementation:
```bash
go get github.com/gofiber/storage/ristretto/v2
```

### Examples
Import the storage package.
```go
import "github.com/gofiber/storage/ristretto/v2"
```

You can use the following possibilities to create a storage:
```go
// Initialize default config
store := ristretto.New()

// Initialize custom config
store := ristretto.New(ristretto.Config{
  NumCounters: 1e7, // number of keys to track frequency of (10M).
  MaxCost:     1 << 30, // maximum cost of cache (1GB).
  BufferItems: 64, // number of keys per Get buffer.
})
```

### Config
```go
type Config struct {
	// NumCounters number of keys to track frequency of (10M).
	NumCounters int64

	// MaxCost maximum cost of cache (1GB).
	MaxCost int64

	// BufferItems number of keys per Get buffer.
	BufferItems int64
	DefaultCost int64

	// SkipWaitForWrite makes Set return as soon as the write is buffered. It is
	// faster, and Ristretto's own design, but a Get straight after a Set can
	// miss. Leave it off for the read-after-write the storage interface implies.
	//
	// Optional. Default is false
	SkipWaitForWrite bool
}
```

### Default Config
```go
var ConfigDefault = Config{
  NumCounters: 1e7,
  MaxCost:     1 << 30,
  BufferItems: 64,
  DefaultCost: 1,
}
```

### Using an Existing Ristretto Cache
If your application already holds a `*ristretto.Cache`, you can build the storage on it instead of creating a second one. Only `DefaultCost` and `SkipWaitForWrite` are read; the sizing options come from the cache.

The cache stays yours to close: `Close` on a storage built this way leaves it open, so the rest of your application keeps working.

Storages built on the same cache share one operation lock, so each one's `Reset` excludes the others' operations the same way it excludes its own. Closing the storage that created the cache closes the cache itself: the others then report `ErrClosed`, since a closed Ristretto cache drops operations in silence rather than reporting them.

> **Warning:** `Reset` clears the entire shared cache, not just this storage's entries.

```go
import (
    "github.com/dgraph-io/ristretto"
    ristrettostorage "github.com/gofiber/storage/ristretto/v2"
)

func main() {
    cache, err := ristretto.NewCache(&ristretto.Config{
        NumCounters: 1e7,
        MaxCost:     1 << 30,
        BufferItems: 64,
    })
    if err != nil {
        panic(err)
    }
    defer cache.Close()

    store := ristrettostorage.NewFromConnection(cache)
    defer store.Close()
}
```
