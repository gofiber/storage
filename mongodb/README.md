---
id: mongodb
title: MongoDB
---

![Release](https://img.shields.io/github/v/tag/gofiber/storage?filter=mongodb*)
[![Discord](https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7)](https://gofiber.io/discord)
![Test](https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-mongodb.yml?label=Tests)

A MongoDB storage driver using [mongodb/mongo-go-driver](https://github.com/mongodb/mongo-go-driver).

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
func (s *Storage) Conn() *mongo.Database
```
### Installation
MongoDB is tested on the 2 last [Go versions](https://golang.org/dl/) with support for modules. So make sure to initialize one first if you didn't do that yet:
```bash
go mod init github.com/<user>/<repo>
```
And then install the mongodb implementation:
```bash
go get github.com/gofiber/storage/mongodb/v2
```

### Examples
Import the storage package.
```go
import "github.com/gofiber/storage/mongodb/v2"
```

You can use the following possibilities to create a storage:
```go
// Initialize default config
store := mongodb.New()

// Initialize custom config
store := mongodb.New(mongodb.Config{
	Host:       "127.0.0.1",
	Port:       27017,
	Database:   "fiber",
	Collection: "fiber_storage",
	Reset:      false,
})

// Initialize custom config using connection string
store := mongodb.New(mongodb.Config{
	ConnectionURI: "mongodb://user:password@127.0.0.1:27017",
	Database:   	 "fiber",
	Collection: 	 "fiber_storage",
	Reset:      	 false,
})

```

### Config
```go
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
	// Optional. Default is 27017
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

	// Reset clears any existing keys in existing Table
	//
	// Optional. Default is false
	Reset bool
}
```

### Default Config
```go
var ConfigDefault = Config{
	ConnectionURI: "",
	Host:          "127.0.0.1",
	Port:          27017,
	Database:      "fiber",
	Collection:    "fiber_storage",
	Reset:         false,
}
```
