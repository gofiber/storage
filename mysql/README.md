---
id: mysql
title: MySQL
---

![Release](https://img.shields.io/github/v/tag/gofiber/storage?filter=mysql*)
[![Discord](https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7)](https://gofiber.io/discord)
![Test](https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-mysql.yml?label=Tests)

A MySQL storage driver using `database/sql` and [go-sql-driver/mysql](https://github.com/go-sql-driver/mysql).

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
MySQL is tested on the 2 last [Go versions](https://golang.org/dl/) with support for modules. So make sure to initialize one first if you didn't do that yet:
```bash
go mod init github.com/<user>/<repo>
```
And then install the mysql implementation:
```bash
go get github.com/gofiber/storage/mysql/v2
```

### Examples
Import the storage package.
```go
import "github.com/gofiber/storage/mysql/v2"
```

You can use the following possibilities to create a storage:
```go
// Initialize default config
store := mysql.New()

// Initialize custom config
store := mysql.New(mysql.Config{
	Host:            "127.0.0.1",
	Port:            3306,
	Database:        "fiber",
	Table:           "fiber_storage",
	Reset:           false,
	GCInterval:      10 * time.Second,
})

// Initialize custom config using connection string
store := mysql.New(mysql.Config{
	ConnectionURI:   "<username>:<pw>@tcp(<HOST>:<port>)/<dbname>"
	Reset:           false,
	GCInterval:      10 * time.Second,
})

// Initialize custom config using sql db connection
db, _ := sql.Open("mysql", "<username>:<pw>@tcp(<HOST>:<port>)/<dbname>")
store := mysql.New(mysql.Config{
	Db:              db,
	Reset:           false,
	GCInterval:      10 * time.Second,
})
```

### Config
```go
type Config struct {
	// DB Will override ConnectionURI and all other authentication values if used
	//
	// Optional. Default is nil
	Db *sql.DB
	
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
	// Optional. Default is 3306
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
}
```

### Default Config
```go
var ConfigDefault = Config{
	ConnectionURI:   "",
	Host:            "127.0.0.1",
	Port:            3306,
	Database:        "fiber",
	Table:           "fiber_storage",
	Reset:           false,
	GCInterval:      10 * time.Second,
}
```
