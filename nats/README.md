---
id: nats
title: Nats
---


![Release](https://img.shields.io/github/v/tag/gofiber/storage?filter=nats*)
[![Discord](https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7)](https://gofiber.io/discord)
![Test](https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-nats.yml?label=Tests)

A NATS Key/Value storage driver.

## Note: Requires Go 1.20 and above

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
func (s *Storage) Conn() (*nats.Conn, jetstream.KeyValue)
func (s *Storage) Keys() ([]string, error)
```

### Installation

[NATS Key/Value Store](https://docs.nats.io/nats-concepts/jetstream/key-value-store) driver is tested on the 2 last [Go versions](https://golang.org/dl/) with support for modules. So make sure to initialize one first if you didn't do that yet:

```bash
go mod init github.com/<user>/<repo>
```

And then install the nats implementation:

```bash
go get github.com/gofiber/storage/nats
```

### Examples

Import the storage package.

```go
import "github.com/gofiber/storage/nats"
```

You can use the following options to create a storage driver:

```go
// Initialize default config
store := nats.New()

// Initialize custom config
store := nats.New(Config{
    URLs: "nats://127.0.0.1:4443",
    NatsOptions: []nats.Option{
        nats.MaxReconnects(2),
        // Enable TLS by specifying RootCAs
        nats.RootCAs("./testdata/certs/ca.pem"),
    },
    KeyValueConfig: jetstream.KeyValueConfig{
        Bucket:  "test",
        Storage: jetstream.MemoryStorage,
    },
})
```

### Config

```go
type Config struct {
    // Nats URLs, default "nats://127.0.0.1:4222". Can be comma separated list for multiple servers
    URLs string
    // Nats connection options. See nats_test.go for an example of how to use this.
    NatsOptions []nats.Option
    // Nats connection name
    ClientName string
    // Nats context
    Context context.Context
    // Nats key value config
    KeyValueConfig jetstream.KeyValueConfig
    // Wait for connection to be established, default: 100ms
    WaitForConnection time.Duration
}
```

### Default Config

```go
var ConfigDefault = Config{
    URLs:       nats.DefaultURL,
    Context:    context.Background(),
    ClientName: "fiber_storage",
    KeyValueConfig: jetstream.KeyValueConfig{
    Bucket: "fiber_storage",
    },
    WaitForConnection: 100 * time.Millisecond,
}
```
