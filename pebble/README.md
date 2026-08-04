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

**Note:** Expiration is tracked with a one-second granularity, so an `exp` shorter than a second is rounded up to one second.

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

	// WriteOptions are the options every write is issued with.
	//
	// Pebble reads nil as a synchronous write, so by default every Set and
	// Delete is flushed to disk before it returns. That is durable but slow,
	// on the order of a disk flush per write. Pass &pebble.WriteOptions{} (or
	// pebble.NoSync) to let Pebble buffer writes instead, at the cost of
	// losing the most recent ones if the process dies.
	//
	// Optional. Default is nil.
	WriteOptions *pebble.WriteOptions
}
```

### Default Config

```go
var ConfigDefault = Config{
	Path:         "db",
	WriteOptions: nil,
}
```
