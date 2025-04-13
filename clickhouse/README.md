# Clickhouse

A Clickhouse storage driver using [https://github.com/ClickHouse/clickhouse-go](https://github.com/ClickHouse/clickhouse-go).

![Release](https://img.shields.io/github/v/tag/gofiber/storage?filter=clickhouse*)
[![Discord](https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7)](https://gofiber.io/discord)
![Test](https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-clickhouse.yml?label=Tests)

### Table of Contents

- [Signatures](#signatures)
- [Installation](#installation)
- [Examples](#examples)
- [Config](#config)
- [Default Config](#default-config)

### Signatures

```go
func New(config ...Config) (*Storage, error)
func (s *Storage) Get(key string) ([]byte, error)
func (s *Storage) Set(key string, val []byte, exp time.Duration) error
func (s *Storage) Delete(key string) error
func (s *Storage) Reset() error
func (s *Storage) Close() error
func (s *Storage) Conn() *Session
```

### Installation

Clickhouse is supported on the latest two versions of Go:

Install the clickhouse implementation:
```bash
go get github.com/gofiber/storage/clickhouse
```

### Running the tests

This module uses [Testcontainers for Go](https://github.com/testcontainers/testcontainers-go/) to run integration tests, which will start a local instance of Clickhouse as a Docker container under the hood. To run the tests, you must have Docker (or another container runtime 100% compatible with the Docker APIs) installed on your machine.

### Local development

Before running this implementation, you must ensure a Clickhouse cluster is available.
For local development, we recommend using the Clickhouse Docker image; it contains everything
necessary for the client to operate correctly.

To start Clickhouse using Docker, issue the following:

```bash
docker run -d -p 9000:9000 --name some-clickhouse-server --ulimit nofile=262144:262144 clickhouse/clickhouse-server
```

After running this command you're ready to start using the storage and connecting to the database.

### Examples

You can use the following options to create a clickhouse storage driver:
```go
import "github.com/gofiber/storage/clickhouse"

// Initialize default config, to connect to localhost:9000 using the memory engine and with a clean table.
store, err := clickhouse.New(clickhouse.Config{
    Host: "localhost",
    Port: 9000,
    Clean: true,
})

// Initialize custom config to connect to a different host/port and use custom engine and with clean table.
store, err := clickhouse.New(clickhouse.Config{
    Host: "some-ip-address",
    Port: 9000,
    Engine: clickhouse.MergeTree,
    Clean: true,
})

// Initialize to connect with TLS enabled with your own tls.Config and with clean table.
tlsConfig := config := &tls.Config{...}

store, err := clickhouse.New(clickhouse.Config{
    Host: "some-ip-address",
    Port: 9000,
    Clean: true,
    TLSConfig: tlsConfig,
})
```

### Config

```go
// Config defines configuration options for Clickhouse connection.
type Config struct {
    // The host of the database. Ex: 127.0.0.1
    Host string
    // The port where the database is supposed to listen to. Ex: 9000
    Port int
    // The database that the connection should authenticate from
    Database string
    // The username to be used in the authentication
    Username string
    // The password to be used in the authentication
    Password string
    // The name of the table that will store the data
    Table string
    // The engine that should be used in the table
    Engine string
    // Should start a clean table, default false
    Clean bool
    // TLS configuration, default nil
    TLSConfig *tls.Config
    // Should the connection be in debug mode, default false
    Debug bool
    // The function to use with the debug config, default print function. It only works when debug is true
    Debugf func(format string, v ...any)
}
```

### Default Config

```go
var DefaultConfig = Config{
    Host:      "localhost",
    Port:      9000,
    Engine:    "Memory",
    Clean:     false,
}
```
