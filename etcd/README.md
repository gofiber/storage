---
id: etcd
title: Etcd
---

![Release](https://img.shields.io/github/v/tag/gofiber/storage?filter=etcd*)
[![Discord](https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7)](https://gofiber.io/discord)
![Test](https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-etcd.yml?label=Tests)

A Etcd storage driver using [`etcd-io/etcd`](https://github.com/etcd-io/etcd).

### Table of Contents
- [Signatures](#signatures)
- [Installation](#installation)
- [Examples](#examples)
- [Config](#config)
- [Default Config](#default-config)

### Signatures
```go
func New(config ...Config) *Storage
func NewFromConnection(db *clientv3.Client) *Storage
func (s *Storage) Get(key string) ([]byte, error)
func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error)
func (s *Storage) Set(key string, val []byte, exp time.Duration) error
func (s *Storage) SetWithContext(ctx context.Context, key string, val []byte, exp time.Duration) error
func (s *Storage) Delete(key string) error
func (s *Storage) DeleteWithContext(ctx context.Context, key string) error
func (s *Storage) Reset() error
func (s *Storage) ResetWithContext(ctx context.Context) error
func (s *Storage) Close() error
func (s *Storage) Conn() *clientv3.Client
```

### Installation
Etcd requires Go 1.26 or newer — the version required by [`etcd-io/etcd`](https://github.com/etcd-io/etcd) v3.7 — and is tested on the latest [Go versions](https://golang.org/dl/) with support for modules. So make sure to initialize one first if you didn't do that yet:
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

### Using an Existing Etcd Connection
If your application already holds a `*clientv3.Client`, you can build the storage on it instead of dialing a second time.

The client stays yours to close: `Close` on a storage built this way leaves it open, so the rest of your application keeps working.

> **Warning:** the storage does not namespace its keys. `Reset` deletes **every key** reachable through the client — on a cluster shared with service discovery or configuration, that is all of it.

```go
import (
    "github.com/gofiber/storage/etcd/v2"
    clientv3 "go.etcd.io/etcd/client/v3"
)

func main() {
    client, err := clientv3.New(clientv3.Config{
        Endpoints: []string{"localhost:2379"},
    })
    if err != nil {
        panic(err)
    }
    defer client.Close()

    store := etcd.NewFromConnection(client)
    defer store.Close()
}
```
