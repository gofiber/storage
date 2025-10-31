---
id: aerospike
title: Aerospike
---

![Release](https://img.shields.io/github/v/tag/gofiber/storage?filter=aerospike*)
[![Discord](https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7)](https://gofiber.io/discord)
![Test](https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-aerospike.yml?label=Tests)

An Aerospike client driver using `aerospike/aerospike-client-go` and [aerospike/aerospike-client-go](https://github.com/aerospike/aerospike-client-go).

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
func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error)
func (s *Storage) Set(key string, val []byte, exp time.Duration) error
func (s *Storage) SetWithContext(ctx context.Context, key string, val []byte, exp time.Duration) error
func (s *Storage) Delete(key string) error
func (s *Storage) DeleteWithContext(ctx context.Context, key string) error
func (s *Storage) Reset() error
func (s *Storage) ResetWithContext(ctx context.Context) error
func (s *Storage) Close() error
func (s *Storage) Conn() driver.Client
func (s *Storage) GetSchemaInfo() *SchemaInfo
```

**Note:** The context methods are dummy methods and don't have any functionality, as Aerospike does not support context cancellation in its client library. They are provided for compliance with the Fiber storage interface.

### Installation

Aerospike is tested on the 2 last [Go versions](https://golang.org/dl/) with support for modules. So make sure to initialize one first if you didn't do that yet:

```bash
go mod init github.com/<user>/<repo>
```

And then install the aerospike implementation:

```bash
go get github.com/gofiber/storage/aerospike
```

### Examples

Import the storage package.

```go
import "github.com/gofiber/storage/aerospike"
```

You can use the following possibilities to create a storage:

```go
// Initialize default config
store := aerospike.New()

// Initialize custom config
store := aerospike.New(aerospike.Config{
	Hosts:             []*aerospike.Host{aerospike.NewHost("localhost", 3000)},
	Namespace:         "test", // Default namespace
	SetName:           "fiber",
	Reset:             false,
	Expiration:        1 * time.Hour,
	SchemaVersion:     1,
	SchemaDescription: "Default Fiber storage schema",
	ForceSchemaUpdate: false,
})
```

### Config

```go
type Config struct {
	// Hosts is a list of Aerospike server hosts
	Hosts []*aerospike.Host

	// Namespace is the Aerospike namespace
	Namespace string

	// Set is the Aerospike set
	SetName string

	// Reset clears any existing keys in existing Set
	Reset bool

	// Expiration is the default expiration time of entries
	Expiration time.Duration

	// SchemaVersion indicates the schema version to use
	SchemaVersion int

	// SchemaDescription provides additional info about the schema
	SchemaDescription string

	// ForceSchemaUpdate forces schema update even if version matches
	ForceSchemaUpdate bool
}
```

### Default Config
Used only for optional fields
```go
var ConfigDefault = Config{
	Hosts:             []*aerospike.Host{aerospike.NewHost("localhost", 3000)},
	Namespace:         "test", // Default namespace
	SetName:               "fiber",
	Reset:             false,
	Expiration:        1 * time.Hour,
	SchemaVersion:     1,
	SchemaDescription: "Default Fiber storage schema",
	ForceSchemaUpdate: false,
}
```
