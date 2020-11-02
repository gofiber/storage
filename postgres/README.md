# Postgres

A Postgres storage driver using [lib/pq](https://github.com/lib/pq).

### Table of Contents
- [Signatures](#signatures)
- [Examples](#examples)
- [Config](#config)
- [Default Config](#default-config)

### Signatures
```go
func New(config ...Config) Storage
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
	GCInterval:      10 * time.Second,
	Host:            "127.0.0.1",
	Port:            5432,
	Database:        "fiber",
	TableName:       "fiber",
	DropTable:       false,
	Timeout:         30 * time.Second,
	MaxOpenConns:    100,
	MaxIdleConns:    100,
	ConnMaxLifetime: 1 * time.Second,
})
```

### Config
```go
// Config defines the config for storage.
type Config struct {
	// Time before deleting expired keys
	//
	// Default is 10 * time.Second
	GCInterval time.Duration

	// DB host
	//
	// Optional. Default is "127.0.0.1"
	Host string

	// DB port
	//
	// Optional. Default is "5432"
	Port int64

	// DB user name
	//
	// Optional. Default is ""
	Username string

	// DB user password
	//
	// Optional. Default is ""
	Password string

	// DB name
	//
	// Optional. Default is "fiber"
	Database string

	// DB table name
	//
	// Optional. Default is "fiber"
	TableName string

	// Drop any existing table with the same name
	//
	// Optional. Default is false
	DropTable bool

	// Maximum wait for connection, in seconds. Zero or
	// n < 0 means wait indefinitely.
	Timeout time.Duration

	// The maximum number of connections in the idle connection pool.
	//
	// If MaxOpenConns is greater than 0 but less than the new MaxIdleConns,
	// then the new MaxIdleConns will be reduced to match the MaxOpenConns limit.
	//
	// If n <= 0, no idle connections are retained.
	//
	// The default max idle connections is currently 2. This may change in
	// a future release.
	MaxIdleConns int

	// The maximum number of open connections to the database.
	//
	// If MaxIdleConns is greater than 0 and the new MaxOpenConns is less than
	// MaxIdleConns, then MaxIdleConns will be reduced to match the new
	// MaxOpenConns limit.
	//
	// If n <= 0, then there is no limit on the number of open connections.
	// The default is 0 (unlimited).
	MaxOpenConns int

	// The maximum amount of time a connection may be reused.
	//
	// Expired connections may be closed lazily before reuse.
	//
	// If d <= 0, connections are reused forever.
	ConnMaxLifetime time.Duration
}
```

### Default Config
```go
var ConfigDefault = Config{
	GCInterval:      10 * time.Second,
	Host:            "127.0.0.1",
	Port:            5432,
	Database:        "fiber",
	TableName:       "fiber",
	DropTable:       false,
	Timeout:         30 * time.Second,
	MaxOpenConns:    100,
	MaxIdleConns:    100,
	ConnMaxLifetime: 1 * time.Second,
}
```
