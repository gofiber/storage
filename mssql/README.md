---
id: mssql
title: MSSQL
---

![Release](https://img.shields.io/github/v/tag/gofiber/storage?filter=mssql*)
[![Discord](https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7)](https://gofiber.io/discord)
![Test](https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-mssql.yml?label=Tests)

A MSSQL storage driver using [microsoft/go-mssqldb](https://github.com/microsoft/go-mssqldb).

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
func (s *Storage) Conn() *sql.DB
```
### Installation
MSSQL is tested on the 2 last [Go versions](https://golang.org/dl/) with support for modules. So make sure to initialize one first if you didn't do that yet:
```bash
go mod init github.com/<user>/<repo>
```
And then install the mssql implementation:
```bash
go get github.com/gofiber/storage/mssql/v2
```

### Examples
Import the storage package.
```go
import "github.com/gofiber/storage/mssql/v2"
```

You can use the following possibilities to create a storage:
```go
// Initialize default config
store := mssql.New()

// Initialize custom config
store := mssql.New(mssql.Config{
	Host:            "127.0.0.1",
	Port:            1433,
	Database:        "fiber",
	Table:           "fiber_storage",
	Reset:           false,
	GCInterval:      10 * time.Second,
	SslMode:         "disable",
})

// Initialize custom config using connection string
store := mssql.New(mssql.Config{
	ConnectionURI:   "sqlserver://user:password@localhost:1433?database=fiber"
	Reset:           false,
	GCInterval:      10 * time.Second,
})
```

### Config
```go
// Config defines the config for storage.
type Config struct {
	// Connection string to use for DB. Will override all other authentication values if used
	//
	// Optional. Default is ""
	ConnectionURI string

	// Host name where the DB is hosted
	//
	// Optional. Default is "127.0.0.1"
	Host string

	// Port where the DB is listening on
	//
	// Optional. Default is 1433
	Port int

	// Server username
	//
	// Optional. Default is ""
	Username string

	// Server password
	//
	// Optional. Default is ""
	Password string

	// Instance name
	//
	// Optional. Default is ""
	Instance string
	
	// Database name
	//
	// Optional. Default is "fiber"
	Database string

	// Table name
	//
	// Optional. Default is "fiber_storage"
	Table string

	// Reset clears any existing keys in existing Table
	//
	// Optional. Default is false
	Reset bool

	// Time before deleting expired keys
	//
	// Optional. Default is 10 * time.Second
	GCInterval time.Duration

	// The SSL mode for the connection
	//
	// Optional. Default is "disable"
	SslMode string
}
```

### Default Config
```go
var ConfigDefault = Config{
	ConnectionURI:   "",
	Host:            "127.0.0.1",
	Port:            1433,
	Database:        "fiber",
	Table:           "fiber_storage",
	Reset:           false,
	GCInterval:      10 * time.Second,
	SslMode:         "disable",
}
```
