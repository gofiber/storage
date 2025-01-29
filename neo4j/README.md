---
id: neo4j
title: Neo4j
---

A Neo4j storage driver using [neo4j/neo4j-go-driver](https://github.com/neo4j/neo4j-go-driver).

> **Note: Requires Go 1.20 and above**

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

Neo4j is tested on the latest [Go versions](https://golang.org/dl/) with support for modules. So make sure to initialize one first if you didn't do that yet:

```bash
go mod init github.com/<user>/<repo>
```

And then install the noe4j implementation:

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
store := neo4jstore.New()

// However, the above assumes that auth is disabled on your neo4j server. If auth is enabled (which is mostly the case), authentication fields must be set. Either set the Auth field or Username and Password fields.
// Example using Username and Password
store := neo4jstore.New(neo4jstore.Config{
  Username: os.GetEnv("NEO4J_USER"),
  Password: os.GetEnv("NEO4J_PASS"),
})

// Example using Auth field
// Warning: Do not use neo4j.NoAuth() unless auth is disabled on the server
store := neo4jstore.New(neo4jstore.Config{
  Auth: neo4j.BasicAuth(os.GetEnv("NEO4J_USER"), os.GetEnv("NEO4J_PASS"), ""),
})

// Initialize custom config
store := postgres.New(postgres.Config{
 DB:              neo4jDriver,
 Node:           "fiber_storage",
 Reset:           false,
 GCInterval:      10 * time.Second,
})
```
