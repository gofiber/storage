---
id: memcache
title: Memcache
---

![Release](https://img.shields.io/github/v/tag/gofiber/storage?filter=memcache*)
[![Discord](https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7)](https://gofiber.io/discord)
![Test](https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-memcache.yml?label=Tests)

A Memcache storage driver using [`bradfitz/gomemcache`](https://github.com/bradfitz/gomemcache).

### Table of Contents
- [Signatures](#signatures)
- [Installation](#installation)
- [Examples](#examples)
- [Config](#config)
- [Default Config](#default-config)

### Signatures
```go
func New(config ...Config) Storage
func NewFromConnection(db *memcache.Client, config ...Config) *Storage
func (s *Storage) Get(key string) ([]byte, error)
func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error)
func (s *Storage) Set(key string, val []byte, exp time.Duration) error
func (s *Storage) SetWithContext(ctx context.Context, key string, val []byte, exp time.Duration) error
func (s *Storage) Delete(key string) error
func (s *Storage) DeleteWithContext(ctx context.Context, key string) error
func (s *Storage) Reset() error
func (s *Storage) ResetWithContext(ctx context.Context) error
func (s *Storage) Close() error
func (s *Storage) Conn() *mc.Client
```

**Note:** Memcache has no native context support, so the context methods run the operation to completion. They do honour a context that is already cancelled or past its deadline, returning the context error without touching the storage.

### Installation
Memory is tested on the 2 last [Go versions](https://golang.org/dl/) with support for modules. So make sure to initialize one first if you didn't do that yet:
```bash
go mod init github.com/<user>/<repo>
```
And then install the memory implementation:
```bash
go get github.com/gofiber/storage/memory/v2
```

### Examples
Import the storage package.
```go
import "github.com/gofiber/storage/memcache"
```

You can use the following possibilities to create a storage:
```go
// Initialize default config
store := memcache.New()

// Initialize custom config
store := memcache.New(memcache.Config{
	Servers: "localhost:11211",
})
```

### Config
```go
type Config struct {
	// Server list divided by ,
	// i.e. server1:11211, server2:11212
	//
	// Optional. Default is "127.0.0.1:11211"
	Servers string

	// Reset clears any existing keys in existing Table
	//
	// Optional. Default is false
	Reset bool
}
```

### Default Config
```go
var ConfigDefault = Config{
	Servers:      "127.0.0.1:11211",
}
```

### Using an Existing Memcache Connection
If your application already holds a `*memcache.Client`, you can build the storage on it instead of creating a second one. Only `Reset` is read from the config; connection settings stay with your client.

The client stays yours to manage: `Close` on a storage built this way is a no-op, so the rest of your application keeps working.

> **Warning:** `Reset` runs `DeleteAll` against the memcached instance, deleting every item on it, not just this storage's entries.

```go
import (
    mc "github.com/bradfitz/gomemcache/memcache"
    "github.com/gofiber/storage/memcache/v2"
)

func main() {
    client := mc.New("127.0.0.1:11211")

    store := memcache.NewFromConnection(client)
    defer store.Close()
}
```
