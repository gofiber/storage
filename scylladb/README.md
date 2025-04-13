---
id: scylladb
title: ScyllaDb
---

![Release](https://img.shields.io/github/v/tag/gofiber/storage?filter=scylladb*)
[![Discord](https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7)](https://gofiber.io/discord)
![Test](https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-scylladb.yml?label=Tests)

# ScyllaDb

A ScyllaDb storage engine for [Fiber](https://github.com/gofiber/fiber) using [gocql](https://github.com/scylladb/gocql).

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
func (s *Storage) Set(key string, value []byte, expire time.Duration) error
func (s *Storage) Delete(key string) error
func (s *Storage) Reset() error
func (s *Storage) Close() error
func (s *Storage) Conn() *gocql.Session
```

### Installation
ScyllaDb is tested on the 2 last [Go versions](https://golang.org/dl/) with support for modules. So make sure to initialize one first if you didn't do that yet:
```bash
go mod init github.com/<user>/<repo>
```
And then install the scylladb implementation:
```bash
go get github.com/gofiber/storage/scylladb
```

### Examples
Import the storage package.
```go
import "github.com/gofiber/storage/scylladb"
```

You can use the following possibilities to create a storage:
```go
// Initialize default config
store := scylladb.New()

// Initialize custom config
store := scylladb.New(scylladb.Config{
    Keyspace:       "fiber",
    Hosts:          []string{"127.0.0.1"},
    Port:           9042,
    Table:          "fiber_storage",
    Consistency:    "ONE",
    Reset:          false,
})

// Initialize with support for TLS (SslOptions configures TLS use)
//  
//      InsecureSkipVerify and EnableHostVerification interact as follows:
//
//      |Config.InsecureSkipVerify | EnableHostVerification | Result             |
//      |--------------------------|------------------------|--------------------|
//      |Config is nil             | false                  | do not verify host |
//      |Config is nil             | true                   | verify host        |
//      |false                     | false                  | verify host        |
//      |true                      | false                  | do not verify host |
//      |false                     | true                   | verify host        |
//      |true                      | true                   | verify host        |
store := New(
    Config{
        Keyspace:    "fiber",
        Hosts:       []string{"127.0.0.1"},
        Port:        9042,
        Table:       "fiber_storage",
        Consistency: "ONE",
        SslOpts: &gocql.SslOptions{
            Config: &tls.Config{
                InsecureSkipVerify: false, // Set this too false to enable certificate verification
            },
                CertPath:               "/path/to/client_cert.pem", // Path to the client certificate
                KeyPath:                "/path/to/client_key.pem",  // Path to the client certificate's private key
                CaPath:                 "/path/to/ca_cert.pem",     // Path to the CA certificate
                EnableHostVerification: true,                       // Enable hostname verification
        },
        Reset: false,
    },
)

// Initialize custom config using scylladb connection
cluster, _ := gocql.NewCluster("127.0.0.1")
cluster.Keyspace = "fiber"
cluster.Port = 9042

session, _ := cluster.CreateSession()
store := scylladb.New(scylladb.Config{
    Session:         session,
    Keyspace:        "fiber",
    Table:           "fiber_storage",
    Reset:           false,
})
```

### Config
```go
type Config struct {
    // Session is provided by the user to use an existing ScyllaDb session
    // Session Will override Keyspace and all other authentication values if used
    //
    // Optional. Default is nil
    Session *gocql.Session

    // Keyspace name
    //
    // Optional. Default is "fiber"
    Keyspace string

    // Hosts are an array of network addresses for establishing initial connections
    // You have the flexibility to specify one or multiple addresses as needed
    //
    // Optional. Default is "127.0.0.1"
    Hosts []string

    // Port where the ScyllaDb cluster is listening on
    //
    // Optional. Default is 9042
    Port int

    // Username for ScyllaDb cluster
    //
    // Optional. Default is ""
    Username string

    // Password for ScyllaDb cluster
    //
    // Optional. Default is ""
    Password string

    // Table name
    //
    // Optional. Default is "fiber_storage"
    Table string

    // Level of the consistency
    //
    // Optional. Default is "LOCAL_ONE"
    Consistency string

    // SslOpts configures TLS use.
    //
    // Optional. Default is nil
    SslOpts *gocql.SslOptions
    
    // Reset clears any existing keys in existing Table
    //
    // Optional. Default is false
    Reset bool
}
```

### Default Config
```go
// ConfigDefault is the default config
var ConfigDefault = Config{
    Session:     nil,
    Keyspace:    "fiber",
    Hosts:       []string{"127.0.0.1"},
    Username:    "",
    Password:    "",
    Port:        9042,
    Table:       "fiber_storage",
    Consistency: "LOCAL_ONE",
    SslOpts:     nil,
    Reset:       false,
}
```
