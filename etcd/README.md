---
id: etcd
title: Etcd
---

![Release](https://img.shields.io/github/v/tag/gofiber/storage?filter=etcd*)
[![Discord](https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7)](https://gofiber.io/discord)
![Test](https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-etcd.yml?label=Tests)

A Etcd storage driver using [`etcd-io/etcd`](https://github.com/etcd-io/etcd).

**Note: Requires Go 1.19 and above**

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
func (s *Storage) Set(key string, val []byte, exp time.Duration) error
func (s *Storage) Delete(key string) error
func (s *Storage) Reset() error
func (s *Storage) Close() error
func (s *Storage) Conn() *clientv3.Client
```

### Installation
Etcd is tested on the 2 last [Go versions](https://golang.org/dl/) with support for modules. So make sure to initialize one first if you didn't do that yet:
```bash
go mod init github.com/<user>/<repo>
```
And then install the etcd implementation:
```bash
go get github.com/gofiber/storage/etcd/v2
```

### Examples
Import the storage package.
```go
import "github.com/gofiber/storage/etcd/v2"
```

You can use the following possibilities to create a storage:
```go
// Initialize default config
store := etcd.New()

// Initialize custom config
store := etcd.New(Config{
    Endpoints: []string{"localhost:2379"},
})

```

### Config
```go
type Config struct {
    // Endpoints is a list of URLs.
    Endpoints   []string
    // DialTimeout is the timeout for failing to establish a connection.
    DialTimeout time.Duration
    // Username is a username for authentication.
    Username    string
    // Password is a password for authentication.
    Password    string
	// TLS holds the client secure credentials, if any.
	TLS *tls.Config
}
```

### Default Config
```go
var ConfigDefault = Config{
    Endpoints:   []string{"localhost:2379"},
    DialTimeout: 2 * time.Second,
    Username:    "",
    Password:    "",
    TLS:         nil,
}
```
