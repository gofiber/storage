# Redis

A Redis storage driver using [go-redis/redis](https://github.com/go-redis/redis).

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
```
### Installation
Redis is tested on the 2 last [Go versions](https://golang.org/dl/) with support for modules. So make sure to initialize one first if you didn't do that yet:
```bash
go mod init github.com/<user>/<repo>
```
And then install the redis implementation:
```bash
go get github.com/gofiber/storage/redis
```

### Examples
Import the storage package.
```go
import "github.com/gofiber/storage/redis"
```

You can use the following possibilities to create a storage:
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

// or just the url with all information
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
