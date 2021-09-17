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
	Host:     "127.0.0.1",
	Port:     6379,
	Username: "",
	Password: "",
	Database: 0,
	Reset:    false,
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
	// Optional. Default is 3306
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

    // URL the standard format redis url to parse all other options. If this is set all other config options, Host, Port, Username, Password, Database have no effect.
    //
    // Example: redis://<user>:<pass>@localhost:6379/<db>
    // Optional. Default is ""
    URL string

	// Reset clears any existing keys in existing Collection
	//
	// Optional. Default is false
	Reset bool
}

```

### Default Config
```go
var ConfigDefault = Config{
	Host:     "127.0.0.1",
	Port:     6379,
	Username: "",
	Password: "",
	Database: 0,
	Reset:    false,
}
```
