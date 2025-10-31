# Cassandra

A Cassandra storage driver using [gocql/gocql](https://github.com/gocql/gocql)

![Release](https://img.shields.io/github/v/tag/gofiber/storage?filter=cassandra*)
[![Discord](https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7)](https://gofiber.io/discord)
![Test](https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-cassandra.yml?label=Tests)

## Table of Contents

- [Signatures](#signatures)
- [Installation](#installation)
- [Examples](#examples)
- [Config](#config)
- [Default Config](#default-config)

### Signatures

```go
func New(config ...Config) (*Storage, error)
func (s *Storage) Get(key string) ([]byte, error)
func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error)
func (s *Storage) Set(key string, val []byte, exp time.Duration) error
func (s *Storage) SetWithContext(ctx context.Context, key string, val []byte, exp time.Duration) error
func (s *Storage) Delete(key string) error
func (s *Storage) DeleteWithContext(ctx context.Context, key string) error
func (s *Storage) Reset() error
func (s *Storage) ResetWithContext(ctx context.Context) error
func (s *Storage) Close() error
func (s *Storage) Conn() *gocql.Session
```

### Installation

Cassandra is supported on the latest two versions of Go:

Install the cassandra implementation:

```bash
go get github.com/gofiber/storage/cassandra
```

### Running the tests

This module uses [Testcontainers for Go](https://github.com/testcontainers/testcontainers-go/) to run integration tests, which will start a local instance of Cassandra as a Docker container under the hood. To run the tests, you must have Docker (or another container runtime 100% compatible with the Docker APIs) installed on your machine.

### Local development

Before running this implementation, you must ensure a Cassandra cluster is available.
For local development, we recommend using the Cassandra Docker image; it contains everything
necessary for the client to operate correctly.

To start Cassandra using Docker, issue the following:

```bash
docker run --name cassandra -p 9042:9042 -d cassandra:latest
```

After running this command, you're ready to start using the storage and connecting to the database.

### Examples

You can use the following options to create a cassandra storage driver:

```go
import "github.com/gofiber/storage/cassandra"

// Initialize default config, to connect to localhost:9042 using the memory engine and with a clean table.
store := New(Config{
    Hosts:     []string{"localhost:9042"},
    Keyspace: "test_keyspace_creation",
    Table:    "test_kv",
    Expiration : 10 * time.Minute,
})
```

### Config

```go
// Config defines the configuration options for the Cassandra storage
type Config struct {
    // Optional. Default is localhost
    // Hosts is a list of Cassandra nodes to connect to.
    Hosts []string
    // Optional. Default is gofiber
    // Keyspace is the name of the Cassandra keyspace to use.
    Keyspace string
    // Optional. Default is kv_store
    // Table is the name of the Cassandra table to use.
    Table string
    // Optional. Default is Quorum
    // Consistency is the Cassandra consistency level.
    Consistency gocql.Consistency
    // Optional. PoolConfig.HostSelectionPolicy = gocql.TokenAwareHostPolicy(gocql.RoundRobinHostPolicy())
    // PoolConfig is the Cassandra connection pool configuration.
    PoolConfig *gocql.PoolConfig
    // Optional. Default is false
    // SslOpts is the SSL options for the Cassandra cluster.
    SslOpts *gocql.SslOptions
    // Optional. Default is 10 minutes
    // Expiration is the time after which an entry is considered expired.
    Expiration time.Duration
    // Optional. Default is false
    // Reset is a flag to reset the database.
    Reset bool
    // Optional. Default is 3
    // MaxRetries is the maximum number of retries for a query.
    MaxRetries int
    // Optional. Default is 5 seconds
    // ConnectTimeout is the timeout for connecting to the Cassandra cluster.
    ConnectTimeout time.Duration
}
```

### Default Config

```go
var ConfigDefault = Config{
    Hosts:          []string{"localhost:9042"},
    Keyspace:       "gofiber",
    Table:          "kv_store",
    Consistency:    gocql.Quorum,
    Reset:          false,
    Expiration:     10 * time.Minute,
    MaxRetries:     3,
    ConnectTimeout: 5 * time.Second,
    SslOpts:        nil,
    PoolConfig: &gocql.PoolConfig{
        HostSelectionPolicy: gocql.TokenAwareHostPolicy(gocql.RoundRobinHostPolicy()),
    },
}
```
