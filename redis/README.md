---
id: redis
title: Redis
---

![Release](https://img.shields.io/github/v/tag/gofiber/storage?filter=redis*)
[![Discord](https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7)](https://gofiber.io/discord)
![Test](https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-redis.yml?label=Tests)

A Redis storage driver using [go-redis/redis](https://github.com/go-redis/redis).

**Note: Requires Go 1.19 and above**

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
func (s *Storage) Conn() redis.UniversalClient
func (s *Storage) Keys() ([][]byte, error)
```
### Installation
Redis is tested on the 2 last [Go versions](https://golang.org/dl/) with support for modules. So make sure to initialize one first if you didn't do that yet:

> **Note:** You can also use [DragonflyDB](https://dragonflydb.io/) as a Redis replacement.
> Since DragonflyDB is fully compatible with the Redis API, you can use it exactly like Redis **without any code changes**.
> [Example](#example-using-dragonflydb)


```bash
go mod init github.com/<user>/<repo>
```
And then install the redis implementation:
```bash
go get github.com/gofiber/storage/redis/v3
```

### Examples
Import the storage package.
```go
import "github.com/gofiber/storage/redis/v3"
```

You can use the one of the following options to create a Redis Storage:
```go
// Initialize default config
store := redis.New()

// Initialize custom config
store := redis.New(redis.Config{
	Host:      "127.0.0.1",
	Port:      6379,
	Username:  "",
	Password:  "",
	Database:  0,
	Reset:     false,
	TLSConfig: nil,
	PoolSize:  10 * runtime.GOMAXPROCS(0),
})

// Initialize Redis Failover Client
store := redis.New(redis.Config{
	MasterName:       "master-name",
	Addrs:            []string{":6379"},
})

// Initialize Redis Cluster Client
store := redis.New(redis.Config{
	Addrs:            []string{":6379", ":6380"},
})

// Create a client with support for TLS
cer, err := tls.LoadX509KeyPair("./client.crt", "./client.key")
if err != nil {
	log.Println(err)
	return
}
tlsCfg := &tls.Config{
	MinVersion:               tls.VersionTLS12,
	InsecureSkipVerify:       true,
	Certificates:             []tls.Certificate{cer},
}
store = redis.New(redis.Config{
	URL:     	"redis://<user>:<pass>@127.0.0.1:6379/<db>",
	TLSConfig: 	tlsCfg,
	Reset:    	false,
})

// Create a client with a Redis URL with all information.
store = redis.New(redis.Config{
	URL:     "redis://<user>:<pass>@127.0.0.1:6379/<db>",
	Reset:    false,
})
```

### Config
```go
type Config struct {
	// Host name where the DB is hosted
	//
	// Optional. Default is "127.0.0.1"
	Host string

	// Port where the DB is listening on
	//
	// Optional. Default is 6379
	Port int

	// Server username
	//
	// Optional. Default is ""
	Username string

	// Server password
	//
	// Optional. Default is ""
	Password string

	// Database to be selected after connecting to the server.
	//
	// Optional. Default is 0
	Database int

	// URL standard format Redis URL. If this is set all other config options, Host, Port, Username, Password, Database have no effect.
	//
	// Example: redis://<user>:<pass>@localhost:6379/<db>
	// Optional. Default is ""
	URL string

	// Either a single address or a seed list of host:port addresses, this enables FailoverClient and ClusterClient
	//
	// Optional. Default is []string{}
	Addrs []string

	// MasterName is the sentinel master's name
	//
	// Optional. Default is ""
	MasterName string

	// ClientName will execute the `CLIENT SETNAME ClientName` command for each conn.
	//
	// Optional. Default is ""
	ClientName string

	// SentinelUsername
	//
	// Optional. Default is ""
	SentinelUsername string

	// SentinelPassword
	//
	// Optional. Default is ""
	SentinelPassword string

	// Reset clears any existing keys in existing Collection
	//
	// Optional. Default is false
	Reset bool

	// TLS Config to use. When set TLS will be negotiated.
	//
	// Optional. Default is nil
	TLSConfig *tls.Config

	// Maximum number of socket connections.
	//
	// Optional. Default is 10 connections per every available CPU as reported by runtime.GOMAXPROCS.
	PoolSize int
}
```

### Default Config
```go
var ConfigDefault = Config{
	Host:                  "127.0.0.1",
	Port:                  6379,
	Username:              "",
	Password:              "",
	URL:                   "",
	Database:              0,
	Reset:                 false,
	TLSConfig:             nil,
	PoolSize:              10 * runtime.GOMAXPROCS(0),
	Addrs:                 []string{},
	MasterName:            "",
	ClientName:            "",
	SentinelUsername:      "",
	SentinelPassword:      "",
}
```

### Example: Using DragonflyDB
> **Note:** You can use [DragonflyDB](https://dragonflydb.io/) in the same way as Redis.  
> Simply start a DragonflyDB server and configure it just like Redis. Then, call `New()` and use it exactly as you would with Redis.
