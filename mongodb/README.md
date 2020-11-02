# MongoDB

A MongoDB storage driver using [mongodb/mongo-go-driver](https://github.com/mongodb/mongo-go-driver).

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
import "github.com/gofiber/storage/mongodb"
```

You can use the following possibilities to create a storage:
```go
// Initialize default config
store := mongodb.New()

// Initialize custom config
store := mongodb.New(mongodb.Config{
	URI:        "mongodb://127.0.0.1:27017",
	Database:   "fiber",
	Collection: "fiber",
})
```

### Config
```go
type Config struct {
	//https://docs.mongodb.com/manual/reference/connection-string/
	URI        string
	Database   string
	Collection string

	// https://pkg.go.dev/go.mongodb.org/mongo-driver@v1.4.2/mongo/options#ClientOptions
	AppName                  string
	Auth                     options.Credential
	AutoEncryptionOptions    *options.AutoEncryptionOptions
	ConnectTimeout           time.Duration
	Compressors              []string
	Dialer                   options.ContextDialer
	Direct                   bool
	DisableOCSPEndpointCheck bool
	HeartbeatInterval        time.Duration
	Hosts                    []string
	LocalThreshold           time.Duration
	MaxConnIdleTime          time.Duration
	MaxPoolSize              uint64
	MinPoolSize              uint64
	PoolMonitor              *event.PoolMonitor
	Monitor                  *event.CommandMonitor
	ReadConcern              *readconcern.ReadConcern
	ReadPreference           *readpref.ReadPref
	Registry                 *bsoncodec.Registry
	ReplicaSet               string
	RetryReads               bool
	RetryWrites              bool
	ServerSelectionTimeout   time.Duration
	SocketTimeout            time.Duration
	TLSConfig                *tls.Config
	WriteConcern             *writeconcern.WriteConcern
	ZlibLevel                int
	ZstdLevel                int
}
```

### Default Config
```go
var ConfigDefault = Config{
	URI:        "mongodb://127.0.0.1:27017",
	Database:   "fiber",
	Collection: "fiber",
}
```
