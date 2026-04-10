---
id: parquet
title: Parquet
---

![Release](https://img.shields.io/github/v/tag/gofiber/storage?filter=parquet*)
[![Discord](https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7)](https://gofiber.io/discord)
![Test](https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-parquet.yml?label=Tests)

A Parquet storage driver using [parquet-go/parquet-go](https://github.com/parquet-go/parquet-go). Apache Parquet is an open source, column-oriented data file format designed for efficient data storage and retrieval. This driver persists key-value data to a local Parquet file.

### Table of Contents
- [Signatures](#signatures)
- [Installation](#installation)
- [Examples](#examples)
- [Config](#config)
- [Default Config](#default-config)

### Signatures
```go
func New(config ...Config) *Storage
func (s *Storage) Get(key string) ([]byte, error)
func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error)
func (s *Storage) Set(key string, val []byte, exp time.Duration) error
func (s *Storage) SetWithContext(ctx context.Context, key string, val []byte, exp time.Duration) error
func (s *Storage) Delete(key string) error
func (s *Storage) DeleteWithContext(ctx context.Context, key string) error
func (s *Storage) Reset() error
func (s *Storage) ResetWithContext(ctx context.Context) error
func (s *Storage) Close() error
func (s *Storage) Conn() map[string]entry
```

### Installation
Parquet is tested on the 2 last [Go versions](https://golang.org/dl/) with support for modules. So make sure to initialize one first if you didn't do that yet:
```bash
go mod init github.com/<user>/<repo>
```
And then install the parquet implementation:
```bash
go get github.com/gofiber/storage/parquet/v2
```

### Examples
Import the storage package.
```go
import "github.com/gofiber/storage/parquet/v2"
```

You can use the following possibilities to create a storage:
```go
// Initialize default config
store := parquet.New()

// Initialize custom config
store := parquet.New(parquet.Config{
	Path:       "my_storage.parquet",
	GCInterval: 10 * time.Second,
})
```

### Config
```go
// Config defines the config for storage.
type Config struct {
	// Path to the parquet file
	//
	// Optional. Default is "fiber_storage.parquet"
	Path string

	// Time before deleting expired keys
	//
	// Optional. Default is 10 * time.Second
	GCInterval time.Duration
}
```

### Default Config
```go
// ConfigDefault is the default config
var ConfigDefault = Config{
	Path:       "fiber_storage.parquet",
	GCInterval: 10 * time.Second,
}
```
