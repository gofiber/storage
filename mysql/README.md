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
	GCInterval:      10 * time.Second,
	Address:         "127.0.0.1:3306",
	TableName:       "fiber",
	DatabaseName:    "fiber",
	DropTable:       false,
})
```

### Config
```go
type Config struct {
	// Time before deleting expired keys
	//
	// Default is 10 * time.Second
	GCInterval time.Duration
}
```

### Default Config
```go
var ConfigDefault = Config{
	GCInterval:      10 * time.Second,
	Address:         "127.0.0.1:3306",
	TableName:       "fiber",
	DatabaseName:    "fiber",
	DropTable:       false,
}
```
