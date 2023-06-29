# Cassandra 

A Cassandra storage driver using [gocql/gocql]("https://github.com/gocql/gocql").

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
func (s *Storage) Conn() *gocql.Session
```
### Installation
Cassandra is tested on the 2 last [Go versions](https://golang.org/dl/) with support for modules. So make sure to initialize one first if you didn't do that yet:
```bash
go mod init github.com/<user>/<repo>
```
And then install the cassandra implementation:
```bash
go get github.com/gofiber/storage/cassandra
```

### Examples
Import the storage package.
```go
import "github.com/gofiber/storage/cassandra"
```

You can use the following possibilities to create a storage:
```go
// Initialize default config
store := cassandra.New()

// Initialize custom config
store := cassandra.New(cassandra.Config{
	Host:       "127.0.0.1",
	Port:       9042,
	Database:   "fiber",
	Collection: "fiber_storage",
	Reset:      false,
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
	// Optional. Default is 9042
	Port int

	// Server username
	//
	// Optional. Default is ""
	Username string

	// Server password
	//
	// Optional. Default is ""
	Password string

	// Keyspace name
	//
	// Optional. Default is "cassandra_db"
	Keyspace string

	// Number of replication
	//
	// Optional. Default 1
	ReplicationFactor int

	// Database to be operated on in the cluster.
	// 
	// Optional. Default is "".
	Table string

	// Reset clears any existing keys in existing Table
	//
	// Optional. Default is false
	Reset bool
}
```

### Default Config
```go
var ConfigDefault = Config{
	Host:              "127.0.0.1",
	Port:              9042,
	Username:          "",
	Password:          "",
	Table:             "cassandra_table",
	Keyspace:          "cassandra_db",
	ReplicationFactor: 1,
}
```

