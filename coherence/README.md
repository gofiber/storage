# Coherence
<!-- Copyright © 2023, Oracle and/or its affiliates. -->
A Coherence storage driver using [https://github.com/oracle/coherence-go-client](https://github.com/oracle/coherence-go-client).

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
Coherence is supported on Go versions 1.19 and above:

Install the coherence implementation:
```bash
go get github.com/gofiber/storage/coherence
```

Before running or testing this implementation, you must ensure a Coherence cluster is available.
For local development, we recommend using the Coherence CE Docker image; it contains everything
necessary for the client to operate correctly.

To start a Coherence cluster using Docker, issue the following:

```bash
docker run -d -p 1408:1408 ghcr.io/oracle/coherencestore-ce:22.06.5
```

See the documentation [here](https://pkg.go.dev/github.com/oracle/coherence-go-client/coherence#hdr-Obtaining_a_Session) on connection options
when creating a Coherence session.

### Examples
Import the storage package.
```go
import "github.com/gofiber/storage/coherence"
```

You can use the following possibilities to create a storage:
```go
// Initialize default config, to connect to localhost:1408 using plain text
store, err := coherence.New()

// Initialize custom config to connect to a different host/port and use plaint ext.
store, err := coherence.New(coherence.Config{
    Address: "my-host:myport",
})

// Initialize to connect with TLS enabled with your own tls.Config
tlsConfig := config := &tls.Config{...}

store, err := coherence.New(coherence.Config{
    Address: "my-host:myport",
    TLSConfig: tlsConfig,
})
```

> Note: If you create two stores using `coherence.New()` they will effectivity be idential.
> If you wish to have two separate stores, then you can use:
> ```go
> store1, err := coherence.New(Config{SessionScope: "scope1"})
> store2, err := coherence.New(Config{SessionScope: "scope2"})
```

### Config
```go
// Config defines configuration options for Coherence connection.
type Config struct {
    // Address to connect to, defaults to "localhost:1408"
    Address string

    // UseSSL specified if to use SSL or plain text, defaults to false
    UseSSL bool

    // SessionTimeout is the default session timeout to connect to Coherence, defaults to 30s
    SessionTimeout time.Duration

    // SessionScope defines a scope allowing for multiple storage sessions
    SessionScope string
}
```

### Default Config
```go
var ConfigDefault = Config{
    Address:        "localhost:1408",
    UseSSL:         false,
    SessionTimeout: time.Duration(30) * time.Millisecond,
    SessionScope:   defaultScopeName,
}
```
