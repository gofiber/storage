# S3

A S3 storage driver using [aws/aws-sdk-go](https://github.com/aws/aws-sdk-go).

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
```
### Installation
S3 is tested on the 2 last [Go versions](https://golang.org/dl/) with support for modules. So make sure to initialize one first if you didn't do that yet:
```bash
go mod init github.com/<user>/<repo>
```
And then install the s3 implementation:
```bash
go get github.com/gofiber/storage/s3
```

### Examples
Import the storage package.
```go
import "github.com/gofiber/storage/s3"
```

You can use the following possibilities to create a storage:
```go
// Initialize default config
store := s3.New()

// Initialize custom config
store := s3.New(s3.Config{
	Bucket:   "my-bucket-url",
	Endpoint: "my-endpoint",
	Region:   "my-region",
	Reset:    false,
})
```

### Config
```go
// Config defines the config for storage.
type Config struct {
	// S3 bucket name
	Bucket string

	// AWS endpoint
	Endpoint string

	// AWS region
	Region string

	// Request timeout
	//
	// Optional. Default is 0 (no timeout)
	RequestTimeout time.Duration

	// Reset clears any existing keys in existing Table
	//
	// Optional. Default is false
	Reset bool
}
```

### Default Config
The default configuration lacks Bucket, Region, and Endpoint which are all required and must be overwritten:
```go
// ConfigDefault is the default config
var ConfigDefault = Config{
	Bucket:         "",
	Region:         "",
	Endpoint:       "",
	RequestTimeout: 0,
	Reset:          false,
}
```
