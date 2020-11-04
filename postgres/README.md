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
}
```
