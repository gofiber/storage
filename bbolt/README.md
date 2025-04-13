---
id: bbolt
title: Bbolt
---

![Release](https://img.shields.io/github/v/tag/gofiber/storage?filter=bbolt*)
[![Discord](https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7)](https://gofiber.io/discord)
![Test](https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-bbolt.yml?label=Tests)

A Bbolt storage driver using [etcd-io/bbolt](https://github.com/etcd-io/bbolt). Bolt is a pure Go key/value store inspired by [Howard Chu's](https://twitter.com/hyc_symas) [LMDB project](https://www.symas.com/symas-embedded-database-lmdb). The goal of the project is to provide a simple, fast, and reliable database for projects that don't require a full database server such as Postgres or MySQL.

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
func (s *Storage) Conn() *bbolt.DB
```
### Installation
Bbolt is tested on the 2 last [Go versions](https://golang.org/dl/) with support for modules. So make sure to initialize one first if you didn't do that yet:
```bash
go mod init github.com/<user>/<repo>
```
And then install the s3 implementation:
```bash
go get github.com/gofiber/storage/bbolt/v2
```

### Examples
Import the storage package.
```go
import "github.com/gofiber/storage/bbolt/v2"
```

You can use the following possibilities to create a storage:
```go
// Initialize default config
store := bbolt.New()

// Initialize custom config
store := bbolt.New(bbolt.Config{
	Database: "my_database.db",
	Bucket:   "my-bucket",
	Reset:    false,
})
```

### Config
```go
// Config defines the config for storage.
type Config struct {
	// Database path
	//
	// Optional. Default is "fiber.db"
	Database string

	// Bbolt bucket name
	//
	// Optional. Default is "fiber_storage"
	Bucket string

	// Timeout is the amount of time to wait to obtain a file lock.
	// Only available on Darwin and Linux.
	//
	// Optional. Default is 60 * time.Second.
	Timeout time.Duration

	// Open database in read-only mode.
	//
	// Optional. Default is false
	ReadOnly bool

	// Reset clears any existing keys in existing Bucket
	//
	// Optional. Default is false
	Reset bool
}
```

### Default Config
```go
// ConfigDefault is the default config
var ConfigDefault = Config{
	Database: "fiber.db",
	Bucket:   "fiber_storage",
	Timeout:  60 * time.Second,
	ReadOnly: false,
	Reset:    false,
}
```
