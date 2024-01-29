---
id: nats
title: Nats
---


![Release](https://img.shields.io/github/v/tag/gofiber/storage?filter=nats*)
[![Discord](https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7)](https://gofiber.io/discord)
![Test](https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-nats.yml?label=Tests)
![Security](https://img.shields.io/github/actions/workflow/status/gofiber/storage/gosec.yml?label=Security)
![Linter](https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter)

An NATS storage driver.

**Note: Requires Go 1.21 and above because of slog**

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
func (s *Storage) Conn() map[string]entry
func (s *Storage) Keys() ([][]byte, error)
```

### Installation

[NATS KV](https://docs.nats.io/nats-concepts/jetstream/key-value-store) driver is tested on the 2 last [Go versions](https://golang.org/dl/) with support for modules. So make sure to initialize one first if you didn't do that yet:

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

You can use the following possibilities to create a storage:

```go
// Initialize default config
store := nats.New()

// Initialize custom config
store := nats.New(nats.Config{
 GCInterval: 10 * time.Second,
})
```

### Config

```go
type Config struct {
 // Nats URL, default "nats://127.0.0.1:4222"
 URL string
 // Nats username
 Username string
 // Nats password
 Password string
 // Nats credentials file: https://docs.nats.io/using-nats/developer/connecting/creds
 CredentialsFile string
 // Nats client name
 ClientName string
 // Nats retry on failed connect: https://docs.nats.io/using-nats/developer/connecting/reconnect
 RetryOnFailedConnect bool
 // Nats max reconnects: https://docs.nats.io/using-nats/developer/connecting/reconnect
 MaxReconnects int
 // Nats context
 Context context.Context
 // Nats key value config
 KeyValueConfig jetstream.KeyValueConfig
 Logger         *slog.Logger
 // Applicable only if Logger is nil.
 // Until go 1.22, it is weird to set log level.
 // See https://github.com/golang/go/issues/62418
 LogLevel slog.Level
}
```

### Default Config

```go
var ConfigDefault = Config{
 URL: nats.DefaultURL,
 // RetryOnFailedConnect: true,
 Context: context.Background(),
 KeyValueConfig: jetstream.KeyValueConfig{
  Bucket: "fiber_storage",
 },
 Logger: slog.New(
  slog.NewTextHandler(
   os.Stdout,
   &slog.HandlerOptions{
    Level: slog.LevelError,
   },
  ),
 ),
 LogLevel: slog.LevelError,
}
```
