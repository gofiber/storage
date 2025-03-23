---
id: couchbase
title: Couchbase
---

![Release](https://img.shields.io/github/v/tag/gofiber/storage?filter=couchbase*)
[![Discord](https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7)](https://gofiber.io/discord)
![Test](https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-couchbase.yml?label=Tests)

A Couchbase storage driver using [couchbase/gocb](https://github.com/couchbase/gocb).

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
func (s *Storage) Conn() *gocb.Cluster
```
### Installation
Couchbase is tested on the 2 last [Go versions](https://golang.org/dl/) with support for modules. So make sure to initialize one first if you didn't do that yet:
```bash
go mod init github.com/<user>/<repo>
```
And then install the Couchbase implementation:
```bash
go get github.com/gofiber/storage/couchbase/v2
```

### Examples
Import the storage package.
```go
import "github.com/gofiber/storage/couchbase/v2"
```

You can use the following possibilities to create a storage:
```go
// Initialize default config
store := couchbase.New()

// Initialize Couchbase storage with custom config
store := couchbase.New(couchbase.Config{
	Host:      "127.0.0.1:8091",
	Username:  "",
	Password:  "",
	Bucket:  0,
	ConnectionTimeout: 3* time.Second,
	KVTimeout: 1* time.Second,
})
```

### Config
```go
type Config struct {
    // The application username to Connect to the Couchbase cluster
    Username string
    // The application password to Connect to the Couchbase cluster
    Password string
    // The connection string for the Couchbase cluster
    Host string
    // The name of the bucket to Connect to
    Bucket string
    // The timeout for connecting to the Couchbase cluster
    ConnectionTimeout time.Duration
    // The timeout for performing operations on the Couchbase cluster
    KVTimeout time.Duration
}
```

### Default Config
```go
// ConfigDefault is the default config
var ConfigDefault = Config{
    Host:              "127.0.0.1:8091",
    Username:          "admin",
    Password:          "123456",
    Bucket:            "fiber_storage",
    ConnectionTimeout: 3 * time.Second,
    KVTimeout:         1 * time.Second,
}
```
