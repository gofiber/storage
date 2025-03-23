---
id: pebble
title: Pebble
---

![Release](https://img.shields.io/github/v/tag/gofiber/storage?filter=pebble*)
[![Discord](https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7)](https://gofiber.io/discord)
![Test](https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-pebble.yml?label=Tests)

A fast key-value DB using [cockroachdb/pebble](https://github.com/cockroachdb/pebble)

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
func (s *Storage) Conn() *badger.DB
```

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
	// Database name
	//
	// Optional. Default is "./db"
	Path string

	// Pass write options during write operations
	//
	// Optional. Default is nil
	WriteOptions &pebble.WriteOptions{}
}
```

### Default Config

```go
var ConfigDefault = Config{
	Path:         "db",
	WriteOptions: &pebble.WriteOptions{},
}
```
