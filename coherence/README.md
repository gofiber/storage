# Coherence
<!-- Copyright © 2023, 2025 Oracle and/or its affiliates. -->
A Coherence storage driver using [https://github.com/oracle/coherence-go-client](https://github.com/oracle/coherence-go-client).

![Release](https://img.shields.io/github/v/tag/gofiber/storage?filter=coherence*)
[![Discord](https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7)](https://gofiber.io/discord)
![Test](https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-coherence.yml?label=Tests)

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
docker run -d -p 1408:1408 ghcr.io/oracle/coherence-ce:24.09
```

See the documentation [here](https://pkg.go.dev/github.com/oracle/coherence-go-client/v2@v2.0.0/coherence#hdr-Obtaining_a_Session) on connection options
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

// Initialize custom config to connect to a different host/port and use plain text and expiry of 5 minutes.
store, err := coherence.New(coherence.Config{
    Address: "my-host:myport",
    Expiration: time.Duration(300) * time.Second, // 5 minutes
})

// Initialize to connect with TLS enabled with your own tls.Config
tlsConfig := config := &tls.Config{...}

store, err := coherence.New(coherence.Config{
    Address: "my-host:myport",
    TLSConfig: tlsConfig,
})
```

> Note: If you create two stores using `coherence.New()` they will effectivity be identical.
> If you wish to have two separate stores, then you can use:
> ```go
> store1, err := coherence.New(Config{ScopeName: "scope1"})
> store2, err := coherence.New(Config{ScopeName: "scope2"})
> ```

**Near Caches**

The latest version of the Coherence Go client introduces near cache support
to cache frequently accessed data in the Go client to avoid sending requests across the network.

This is particularly useful if you are using sticky sessions via a LBR as this will cache
the session in the Go process and the `Get()` operations will be much quicker.

When the session is expired on the server it will automatically be removed from the near cache.

To enable this for you session, you can set the `NearCacheTimeout` to a duration less than the expiry.

```go
// Initialize default config, to connect to localhost:1408 using plain text
store, err := coherence.New()

// Use plain text with default expiry of 5 minutes, and a near cache expiry of 2 minutes
store, err := coherence.New(coherence.Config{
    Address: "my-host:myport",
    Expiration: time.Duration(300) * time.Second,       // 5 minutes
    NearCacheTimeout: time.Duration(120) * time.Second, // 2 minutes
})
```
> Note: You must ensure your near cache timeout is less that the session timeout.

### Config

```go
// Config defines configuration options for Coherence connection.
type Config struct {
    // Address to connect to, defaults to "localhost:1408"
    Address string

    // Timeout is the default session timeout to connect to Coherence, defaults to 30s
    Timeout time.Duration
	
    // ScopeName defines a scope allowing for multiple storage sessions
    ScopeName string

    // Reset indicates if the store should be reset after being created
    Reset bool

    // TLSConfig specifies tls.Config to use when connecting, if nil then plain text is used 
    TLSConfig *tls.Config

    // NearCacheTimeout defines the timeout for a near cache. Is this is set, then a near cache
    // with the timeout is created. Note: this must be less than the session timeout or any timeout you specify 
    // when using Set().
    NearCacheTimeout time.Duration
}
```

### Default Config
```go
var DefaultConfig = Config{
    Address:   "localhost:1408",
    Timeout:   time.Duration(120) * time.Seconds,
    ScopeName: defaultScopeName,
    Reset:     false,
    NearCacheTimeout: time.Duration(60) * time.Seconds,
}
```
