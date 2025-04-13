---
id: neo4j
title: Neo4j
---

![Release](https://img.shields.io/github/v/tag/gofiber/storage?filter=neo4j*)
[![Discord](https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7)](https://gofiber.io/discord)
![Test](https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-neo4j.yml?label=Tests)
A Neo4j storage driver using [neo4j/neo4j-go-driver](https://github.com/neo4j/neo4j-go-driver).

> **Note: Requires latest two releases of Golang**

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
func (s *Storage) Conn() neo4j.DriverWithContext
```

### Installation

Neo4j is tested on the 2 last [Go versions](https://golang.org/dl/) with support for modules. So make sure to initialize one first if you didn't do that yet:

```bash
go mod init github.com/<user>/<repo>
```

And then install the neo4j implementation:

```bash
go get github.com/gofiber/storage/neo4j
```

### Examples

Import the storage package.

```go
import "github.com/gofiber/storage/neo4j"
```

You can use the following possibilities to create a storage:

> The `neo4j` package name used in this example is the package name (and default import name) for this storage driver. Feel free import it with a custom name to avoid confusing it with the neo4j-go-driver package which also uses `neo4j` as package name (and default import name).

```go
// Initialize default config
store := neo4j.New()

// Initialize custom config
store := neo4j.New(neo4j.Config{
 DB:              driver,
 Node:            "fiber_storage",
 Reset:           false,
 GCInterval:      10 * time.Second,
})
```

### Config

> The `neo4j`, `auth`, and `config` package names used here belong to the neo4j-go-driver package.

```go
// Config defines the config for storage.
type Config struct {
 // Connection pool
 //
 // DB neo4j.DriverWithContext object will override connection URI and other connection fields.
 //
 // Optional. Default is nil.
 DB neo4j.DriverWithContext

 // Target Server
 //
 // Optional. Default is "neo4j://localhost"
 URI string

 // Connection authentication
 //
 // Auth auth.TokenManager will override Username and Password fields
 //
 // Optional. Default is nil.
 Auth auth.TokenManager

 // Connection configurations
 //
 // Optional. Default is nil
 Configurations []func(*config.Config)

 // Server username
 //
 // Optional. Default is ""
 Username string

 // Server password
 //
 // Optional. Default is ""
 Password string

 // Node name
 //
 // Optional. Default is "fiber_storage"
 Node string

 // Reset clears any existing keys (Nodes)
 //
 // Optional. Default is false
 Reset bool

 // Time before deleting expired keys (Nodes)
 //
 // Optional. Default is 10 * time.Second
 GCInterval time.Duration
}
```

#### A note on Authentication

If auth is enabled on your server, then authentication must be provided in one of the three ways (the previous overrides the next):

- Via the connection pool, `neo4j.DriverWithContext`, provided on the `DB` field.
- Via the `Auth` field: it must be an `auth.TokenManager` whose value is any one but `neo4j.NoAuth()`.
- By setting both `Username` and `Password` fields: This will cause this storage driver to use Basic Auth.

Otherwise, your neo4j driver will panic with authorization error.

In contrast, if auth is disabled on your server, there's no need to provide any authentication parameter.

### Default Config

Used only for optional fields

```go
var ConfigDefault = Config{
 URI: "neo4j://localhost",
 Node:          "fiber_storage",
 Reset:         false,
 GCInterval:    10 * time.Second,
}
```
