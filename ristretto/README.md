---
id: ristretto
title: Ristretto
---

![Release](https://img.shields.io/github/v/tag/gofiber/storage?filter=ristretto*)
[![Discord](https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7)](https://gofiber.io/discord)
![Test](https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-ristretto.yml?label=Tests)

A Memory-bound storage driver using [`dgraph-io/ristretto`](https://github.com/dgraph-io/ristretto).

**Note: Requires Go 1.19 and above**

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
func (s *Storage) Conn() *ristretto.Cache
```

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
  MaxCost     int64

  // BufferItems number of keys per Get buffer.
  BufferItems int64
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
