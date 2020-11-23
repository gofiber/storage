# ⚠ DynamoDB is still in development, do not use in production!

....

### Table of Contents
- [Signatures](#signatures)
- [Installation](#installation)
- [Examples](#examples)
- [Config](#config)
- [Default Config](#default-config)


### Signatures
```go
func New(config Config) Storage


func (s *Storage) Get(key string) ([]byte, error)
func (s *Storage) Set(key string, val []byte, exp time.Duration) error
func (s *Storage) Delete(key string) error
func (s *Storage) Reset() error
func (s *Storage) Close() error
```

### Installation
DynamoDB is tested on the 2 last [Go versions](https://golang.org/dl/) with support for modules. So make sure to initialize one first if you didn't do that yet:
```bash
go mod init github.com/<user>/<repo>
```
And then install the dynamodb implementation:
```bash
go get github.com/gofiber/storage/dynamodb
```

### Examples
Import the storage package.
```go
import "github.com/gofiber/storage/dynamodb"
```

You can use the following possibilities to create a storage:
```go
// Initialize dynamodb
store := dynamodb.New(dynamodb.Config{
	
})
```

### Config
```go
type Config struct {
	// Region of the DynamoDB service you want to use.
	// Valid values: https://docs.aws.amazon.com/general/latest/gr/rande.html#ddb_region.
	// E.g. "us-west-2".
	// Optional (read from shared config file or environment variable if not set).
	// Environment variable: "AWS_REGION".
	Region string

	// Name of the DynamoDB table.
	// Optional ("fiber_storage" by default).
	Table string

	// AWS access key ID (part of the credentials).
	// Optional (read from shared credentials file or environment variable if not set).
	// Environment variable: "AWS_ACCESS_KEY_ID".
	AWSaccessKeyID string

	// AWS secret access key (part of the credentials).
	// Optional (read from shared credentials file or environment variable if not set).
	// Environment variable: "AWS_SECRET_ACCESS_KEY".
	AWSsecretAccessKey string

	// CustomEndpoint allows you to set a custom DynamoDB service endpoint.
	// This is especially useful if you're running a "DynamoDB local" Docker container for local testing.
	// Typical value for the Docker container: "http://localhost:8000".
	// See https://hub.docker.com/r/amazon/dynamodb-local/.
	// Optional ("" by default)
	CustomEndpoint string
}
```

### Default Config
```go
var ConfigDefault = Config{
	Table: "fiber_storage",
}
```
