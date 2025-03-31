---
id: fastcache
title: Fastcache
---

![Release](https://img.shields.io/github/v/tag/gofiber/storage?filter=fastcache*)
[![Discord](https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7)](https://gofiber.io/discord)
![Test](https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-fastcache.yml?label=Tests)

A Memory-bound storage driver using [`VictoriaMetrics/fastcache`](https://github.com/VictoriaMetrics/fastcache).

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
func (s *Storage) Set(key string, val []byte) error
func (s *Storage) Delete(key string) error
func (s *Storage) Reset() error
func (s *Storage) Close() error
func (s *Storage) Conn() *fastcache.Cache
```

### Installation

Fastcache is tested on the 2 last [Go versions](https://golang.org/dl/) with support for modules. So make sure to initialize one first if you didn't do that yet:

```bash
go mod init github.com/<user>/<repo>
```

And then install the fastcache implementation:

```bash
go get github.com/gofiber/storage/fastcache
```

### Examples

Import the storage package.

```go
import "github.com/gofiber/storage/fastcache"
```

You can use the following possibilities to create a storage:

```go
// Initialize default config
store := fastcache.New()

// Initialize custom config
store := fastcache.New(fastcache.Config{
  // maximum bytes of cache (32MB).
  MaxBytes: 32 * 1024 * 1024,
})
```

### Config

```go
type Config struct {
  // MaxBytes maximum bytes of cache.
  MaxBytes int

}
```

### Default Config

```go
var ConfigDefault = Config{
  // maximum bytes of cache (32MB).
  MaxBytes: 32 * 1024 * 1024,
}
```
