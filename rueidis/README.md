---
id: rueidis
title: Rueidis
---

![Release](https://img.shields.io/github/v/tag/gofiber/storage?filter=rueidis*)
[![Discord](https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7)](https://gofiber.io/discord)
![Test](https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-rueidis.yml?label=Tests)

A fast Redis Storage that does auto pipelining and supports client side caching. [redis/rueidis](https://github.com/redis/rueidis).

**Note: Requires Go 1.20 and above**

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
func (s *Storage) Conn() rueidis.Client
```
### Installation
Rueidis is tested on the latest [Go version](https://golang.org/dl/) with support for modules. So make sure to initialize one first if you didn't do that yet:
```bash
go mod init github.com/<user>/<repo>
```
And then install the rueidis implementation:
```bash
go get github.com/gofiber/storage/rueidis
```

### Examples
Import the storage package.
```go
import "github.com/gofiber/storage/rueidis"
```

You can use the one of the following options to create a Rueidis Storage:
```go
// Initialize default config (localhost:6379)
store := rueidis.New()

// Initialize custom config 
store := rueidis.New(rueidis.Config{
    InitAddress:    []string{"localhost:6380"},
    Username:       "",
    Password:       "",
    Database:       0,
    Reset:          false,
    TLSConfig:      nil,
})

// Initialize using Rueidis URL
store := rueidis.New(rueidis.Config{
    URL:    "redis://localhost:6379",
})

// Initialize Rueidis Cluster Client
store := rueidis.New(rueidis.Config{
    InitAddress:    []string{":6379", ":6380"},
})

// Create a client with support for TLS
cer, err := tls.LoadX509KeyPair("./client.crt", "./client.key")
if err != nil {
	log.Println(err)
	return
}
tlsCfg := &tls.Config{
	MinVersion:            tls.VersionTLS12,
	InsecureSkipVerify:    true,
	Certificates:          []tls.Certificate{cer},
}
store = rueidis.New(rueidis.Config{
    InitAddress:    []string{"localhost:6380"},
    Username:       "<user>",
    Password:       "<password>",
    SelectDB:       0,
    TLSConfig:      tlsCfg,
})

```

### Config
```go
type Config struct {
	// Server username
	//
	// Optional. Default is ""
	Username string

	// Server password
	//
	// Optional. Default is ""
	Password string

	// ClientName will execute the `CLIENT SETNAME ClientName` command for each conn.
	//
	// Optional. Default is ""
	ClientName string

	// URL standard format Redis URL. If this is set all other config options, InitAddress, Username, Password, ClientName, and SelectDB have no effect.
	//
	// Example: redis://<user>:<pass>@localhost:6379/<db>
	// Optional. Default is ""
	URL string

	// SelectDB to be selected after connecting to the server.
	//
	// Optional. Default is 0
	SelectDB int

	// Either a single address or a seed list of host:port addresses, this enables FailoverClient and ClusterClient
	//
	// Optional. Default is []string{"127.0.0.1:6379"}
	InitAddress []string

	// TLS Config to use. When set TLS will be negotiated.
	//
	// Optional. Default is nil
	TLSConfig *tls.Config

	// CacheSizeEachConn is redis client side cache size that bind to each TCP connection to a single redis instance.
	//
	// Optional. The default is DefaultCacheBytes: 128 * (1 << 20)
	CacheSizeEachConn int

	// RingScaleEachConn sets the size of the ring buffer in each connection to (2 ^ RingScaleEachConn).
	//
	// Optional. The default is RingScaleEachConn, which results into having a ring of size 2^10 for each connection.
	RingScaleEachConn int

	// ReadBufferEachConn is the size of the bufio.NewReaderSize for each connection, default to DefaultReadBuffer (0.5 MiB).
	//
	// Optional. The default is DefaultReadBuffer: 1 << 19
	ReadBufferEachConn int

	// WriteBufferEachConn is the size of the bufio.NewWriterSize for each connection, default to DefaultWriteBuffer (0.5 MiB).
	//
	// Optional. The default is DefaultWriteBuffer: 1 << 19
	WriteBufferEachConn int

	// BlockingPoolSize is the size of the connection pool shared by blocking commands (ex BLPOP, XREAD with BLOCK).
	//
	// Optional. The default is DefaultPoolSize: 1000
	BlockingPoolSize int

	// PipelineMultiplex determines how many tcp connections used to pipeline commands to one redis instance.
	//
	// Optional. The default for single and sentinel clients is 2, which means 4 connections (2^2).
	PipelineMultiplex int

	// DisableRetry disables retrying read-only commands under network errors
	//
	// Optional. The default is False
	DisableRetry bool

	// DisableCache falls back Client.DoCache/Client.DoMultiCache to Client.Do/Client.DoMulti
	//
	// Optional. The default is false
	DisableCache bool

	// AlwaysPipelining makes rueidis.Client always pipeline redis commands even if they are not issued concurrently.
	//
	// Optional. The default is true
	AlwaysPipelining bool

	// Reset clears any existing keys in existing Collection
	//
	// Optional. Default is false
	Reset bool

	// CacheTTL TTL
	//
	// Optional. Default is time.Minute
	CacheTTL time.Duration
}
```

### Default Config
```go
var ConfigDefault = Config{
	Username:            "",
	Password:            "",
	ClientName:          "",
	SelectDB:            0,
	InitAddress:         []string{"127.0.0.1:6379"},
	TLSConfig:           nil,
	CacheSizeEachConn:   rueidis.DefaultCacheBytes,
	RingScaleEachConn:   rueidis.DefaultRingScale,
	ReadBufferEachConn:  rueidis.DefaultReadBuffer,
	WriteBufferEachConn: rueidis.DefaultWriteBuffer,
	BlockingPoolSize:    rueidis.DefaultPoolSize,
	PipelineMultiplex:   2,
	DisableRetry:        false,
	DisableCache:        false,
	AlwaysPipelining:    true,
	Reset:               false,
	CacheTTL:            time.Minute,
}
```
