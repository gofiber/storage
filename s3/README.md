---
id: s3
title: S3
---

![Release](https://img.shields.io/github/v/tag/gofiber/storage?filter=s3*)
[![Discord](https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7)](https://gofiber.io/discord)
![Test](https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-s3.yml?label=Tests)

A S3 storage driver using [aws/aws-sdk-go-v2](https://github.com/aws/aws-sdk-go-v2).

**Note:** If config fields of credentials not given, credentials are using from the environment variables, ~/.aws/credentials, or EC2 instance role. If config fields of credentials given, credentials are using from config. Look at: [specifying credentials](https://aws.github.io/aws-sdk-go-v2/docs/configuring-sdk/#specifying-credentials)

**Note: Requires Go 1.19 and above**

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
func (s *Storage) Conn() *s3.Client

// Additional useful methods.
func (s *Storage) CreateBucket(bucket string) error
func (s *Storage) DeleteBucket(bucket string) error
func (s *Storage) DeleteMany(keys ...string) error
func (s *Storage) SetWithChecksum(key string, val []byte, checksum map[types.ChecksumAlgorithm][]byte) error
```

### Installation

S3 is tested on the 2 last [Go versions](https://golang.org/dl/) with support for modules. So make sure to initialize one first if you didn't do that yet:
```bash
go mod init github.com/<user>/<repo>
```
And then install the s3 implementation:
```bash
go get github.com/gofiber/storage/s3/v2
```

### Examples

Import the storage package.

```go
import "github.com/gofiber/storage/s3/v2"
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

Create an object with `Set()`:
```go
err := store.Set("my-key", []byte("my-value"))
```

Or, call `SetWithChecksum()` to create an object with checksum to
ask S3 server to verify data integrity on server side:

> Currently 4 algorithms are supported:
>   - types.ChecksumAlgorithmCrc32 (`CRC32`)
>   - types.ChecksumAlgorithmCrc32c (`CRC32C`)
>   - types.ChecksumAlgorithmSha1 (`SHA1`)
>   - types.ChecksumAlgorithmSha256 (`SHA256`)
>
> For more information, see [PutObjectInput](https://pkg.go.dev/github.com/aws/aws-sdk-go-v2/service/s3#PutObjectInput).

```go
key := "my-key"
val := []byte("my-value")

hash := sha256.New()
hash.Write(val)
sha256sum := hash.Sum(nil)

// import "github.com/aws/aws-sdk-go-v2/service/s3/types"
checksum  = map[types.ChecksumAlgorithm][]byte{
    types.ChecksumAlgorithmSha256: sha256sum,
}

err := store.SetWithChecksum(key, val, checksum)
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

	// Reset clears any existing keys in existing Bucket
	//
	// Optional. Default is false
	Reset bool

    // Credentials overrides AWS access key and AWS secret access key. Not recommended.
	//
	// Optional. Default is Credentials{}
	Credentials Credentials

	// The maximum number of times requests that encounter retryable failures should be attempted.
	//
	// Optional. Default is 3
	MaxAttempts int

}

type Credentials struct {
	AccessKey       string
	SecretAccessKey string
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
	Credentials:    Credentials{},
	MaxAttempts:    3,
	RequestTimeout: 0,
	Reset:          false,
}
```
