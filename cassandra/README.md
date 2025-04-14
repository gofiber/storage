# Cassandra

A Cassandra storage driver using [https://github.com/gocql/gocql](https://github.com/apache/cassandra-gocql-driver).

![Release](https://img.shields.io/github/v/tag/gofiber/storage?filter=cassandra*)
[![Discord](https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7)](https://gofiber.io/discord)
![Test](https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-cassandra.yml?label=Tests)

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
docker run --name cassandra --network host -d cassandra:tag
```

After running this command you're ready to start using the storage and connecting to the database.

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
	/// Table is the name of the Cassandra table to use.
	Table string
	// Optional. Default is Quorum
	// Consistency is the Cassandra consistency level.
	Consistency gocql.Consistency
	// Optional. Default is 10 minutes
	// Expiration is the time after which an entry is considered expired.
	Expiration time.Duration
	// Optional. Default is false
	// Reset is a flag to reset the database.
	Reset bool
}
```

### Default Config

```go
var ConfigDefault = Config{
	Hosts:       []string{"localhost:9042"},
	Keyspace:    "gofiber",
	Table:       "kv_store",
	Consistency: gocql.Quorum,
	Reset:       false,
	Expiration:  10 * time.Minute,
}
```
