# Postgres

A Postgres storage driver using [lib/pq](https://github.com/lib/pq).

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
Postgres is tested on the 2 last [Go versions](https://golang.org/dl/) with support for modules. So make sure to initialize one first if you didn't do that yet:
```bash
go mod init github.com/<user>/<repo>
```
And then install the postgres implementation:
```bash
go get github.com/gofiber/storage/postgres
```

### Examples
Import the storage package.
```go
import "github.com/gofiber/storage/postgres"
```

You can use the following possibilities to create a storage:
```go
// Initialize default config
store := postgres.New()

// Initialize custom config
store := postgres.New(postgres.Config{
	Host:            "127.0.0.1",
	Port:            5432,
	Database:        "fiber",
	Table:           "fiber_storage",
	Reset:           false,
	GCInterval:      10 * time.Second,
	SslMode:         "disable",
})
```

### Config
```go
// Config defines the config for storage.
type Config struct {
	// Host name where the DB is hosted
	//
	// Optional. Default is "127.0.0.1"
	Host string

	// Port where the DB is listening on
	//
	// Optional. Default is 5432
	Port int

	// Server username
	//
	// Optional. Default is ""
	Username string

	// Server password
	//
	// Optional. Default is ""
	Password string

	// Database name
	//
	// Optional. Default is "fiber"
	Database string

	// Table name
	//
	// Optional. Default is "fiber_storage"
	Table string

	// Reset clears any existing keys in existing Table
	//
	// Optional. Default is false
	Reset bool

	// Time before deleting expired keys
	//
	// Optional. Default is 10 * time.Second
	GCInterval time.Duration

	// The SSL mode for the connection
	//
	// Optional. Default is "disable"
	SslMode string
}
```

### Default Config
```go
var ConfigDefault = Config{
	Host:            "127.0.0.1",
	Port:            5432,
	Database:        "fiber",
	Table:           "fiber_storage",
	Reset:           false,
	GCInterval:      10 * time.Second,
	SslMode:         "disable",
}
```
