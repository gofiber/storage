---
id: neo4j
title: Neo4j
---

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
func New(config ...Config) Storage
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
import neo4jstore "github.com/gofiber/storage/neo4j"
```

You can use the following possibilities to create a storage:

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
