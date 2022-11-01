# GORM

A GORM storage driver using [go-gorm/gorm](https://github.com/go-gorm/gorm).

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
func (s *Storage) Conn() *gorm.DB
```
### Installation
GORM is tested on the 2 last [Go versions](https://golang.org/dl/) with support for modules. So make sure to initialize one first if you didn't do that yet:
```bash
go mod init github.com/<user>/<repo>
```
And then install the gorm implementation:
```bash
go get github.com/gofiber/storage/gorm
```

### Examples
Import the storage package.
```go
import "github.com/gofiber/storage/gorm"
```

You can use the following possibilities to create a storage:
```go
// Initialize default config
store := gorm.New()

// Initialize custom config using dialect and connection strings
store := gorm.New(gorm.Config{
	Dialect:       "postgres", // or mysql / sqlite / sqlserver
	ConnectionURI: "postgresql://user:password@localhost:5432/fiber",
	PrepareStmt:   true,
	Table:         "gorm_sessions",
	Reset:         false,
	GCInterval:    10 * time.Second,
})

// Initialize custom config using database connection
store := gorm.New(gorm.Config{
	Db: 			db,
	Table:         	"gorm_sessions",
	Reset:          false,
	GCInterval:     10 * time.Second,
})
```

### Config
```go
// Config defines the config for storage.
type Config struct {
	// DB will override Dialect and ConnectionURI values if used
	//
	// Optional. Default is nil
	Db *gorm.DB

	// Dialect string to use for DB. Will override all other authentication values if used
	//
	// Optional. Default is ""
	Dialect string

	// ConnectionURI string to use for DB. Will override all other authentication values if used
	//
	// Optional. Default is ""
	ConnectionURI string

	// SkipDefaultTransaction executes write operations outside of transactions for better performances
	//
	// Optional. Default is false
	SkipDefaultTransaction bool

	// PrepareStmt prepares statement when executing any SQL and caches them to speed up future calls
	//
	// Optional. Default is false
	PrepareStmt bool

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
var ConfigDefault = Config{
	Db:                     nil,
	Dialect:                "",
	ConnectionURI:          "",
	SkipDefaultTransaction: false,
	PrepareStmt:            false,
	Table:                  "fiber_storage",
	Reset:                  false,
	GCInterval:             10 * time.Second,
	maxOpenConns:           100,
	maxIdleConns:           100,
	connMaxLifetime:        1 * time.Second,
}
```
