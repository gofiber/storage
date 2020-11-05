# MySQL

A MySQL storage driver using `database/sql` and [go-sql-driver/mysql](https://github.com/go-sql-driver/mysql).

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
import "github.com/gofiber/storage/mysql"
```

You can use the following possibilities to create a storage:
```go
// Initialize default config
store := mysql.New()

// Initialize custom config
store := mysql.New(mysql.Config{
	Host:            "127.0.0.1",
	Port:            3306,
	Database:        "fiber",
	Table:           "fiber_storage",
	Clear:           false,
	GCInterval:      10 * time.Second,
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

	// Database name
	//
	// Optional. Default is "fiber"
	Database string

	// Table name
	//
	// Optional. Default is "fiber_storage"
	Table string

	// Clear any existing keys in existing Table
	//
	// Optional. Default is false
	Clear bool

	// Time before deleting expired keys
	//
	// Optional. Default is 10 * time.Second
	GCInterval time.Duration
}
```

### Default Config
```go
var ConfigDefault = Config{
	Host:            "127.0.0.1",
	Port:            3306,
	Database:        "fiber",
	Table:           "fiber_storage",
	Clear:           false,
	GCInterval:      10 * time.Second,
}
```
