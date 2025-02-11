---
id: arangodb
title: ArangoDB
---

![Release](https://img.shields.io/github/v/tag/gofiber/storage?filter=arangodb*)
[![Discord](https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7)](https://gofiber.io/discord)
![Test](https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-arangodb.yml?label=Tests)
![Security](https://img.shields.io/github/actions/workflow/status/gofiber/storage/gosec.yml?label=Security)
![Linter](https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter)

A ArangoDB storage driver using `arangodb/go-driver` and [arangodb/go-driver](https://github.com/arangodb/go-driver).

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
func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error)
func (s *Storage) Get(key string) ([]byte, error)
func (s *Storage) SetWithContext(ctx context.Context, key string, val []byte, exp time.Duration) error
func (s *Storage) Set(key string, val []byte, exp time.Duration) error
func (s *Storage) DeleteWithContext(ctx context.Context, key string) error
func (s *Storage) Delete(key string) error
func (s *Storage) ResetWithContext(ctx context.Context) error
func (s *Storage) Reset() error
func (s *Storage) Close() error
func (s *Storage) Conn() driver.Client
```
### Installation
ArangoDB is tested on the 2 last (1.14/1.15) [Go versions](https://golang.org/dl/) with support for modules. So make sure to initialize one first if you didn't do that yet:
```bash
go mod init github.com/<user>/<repo>
```
And then install the arangodb implementation:
```bash
go get github.com/gofiber/storage/arangodb/v2
```

### Examples
Import the storage package.
```go
import "github.com/gofiber/storage/arangodb/v2"
```

You can use the following possibilities to create a storage:
```go
// Initialize default config
store := arangodb.New()

// Initialize custom config
store := arangodb.New(arangodb.Config{
	Host:       "http://127.0.0.1",
	Port:       8529,
	Database:   "fiber",
	Collection: "fiber_storage",
	Reset:      false,
	GCInterval: 10 * time.Second,
})
```

### Config
```go
type Config struct {
	// Host name where the DB is hosted
	//
	// Optional. Default is "http://127.0.0.1"
	Host string

	// Port where the DB is listening on
	//
	// Optional. Default is 8529
	Port int

	// Server username
	//
	// Optional. Default is ""
	Username string

	// Server password
	//
	// Optional. Default is ""
	Password string

	// Database name
	//
	// Optional. Default is "fiber"
	Database string

	// Collection name
	//
	// Optional. Default is "fiber_storage"
	Collection string

	// Reset clears any existing keys in existing collection
	//
	// Optional. Default is false
	Reset bool
	// Time before deleting expired keys
	//
	// Optional. Default is 10 * time.Second
	GCInterval time.Duration
}
```

### Default Config
Used only for optional fields
```go
var ConfigDefault = Config{
	Host:       "http://127.0.0.1",
	Port:       8529,
	Database:   "fiber",
	Collection: "fiber_storage",
	Reset:      false,
	GCInterval: 10 * time.Second,
}
```
