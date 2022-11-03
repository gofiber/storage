# Postgres

A Postgres storage driver using [jackc/pgx](https://github.com/jackc/pgx).

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
func (s *Storage) Conn() *pgxpool.Pool
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
	Db:              dbPool,
	Table:           "fiber_storage",
	Reset:           false,
	GCInterval:      10 * time.Second,
})
```

### Config
```go
// Config defines the config for storage.
type Config struct {
    // Db pgxpool.Pool object
    //
    // Required
    Db pgxpool.Pool

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
}
```

### Default Config
```go
// ConfigDefault is the default config
var ConfigDefault = Config{
	Db:              pgxpool.Pool{},
	Table:           "fiber_storage",
	Reset:           false,
	GCInterval:      10 * time.Second,
}
```
