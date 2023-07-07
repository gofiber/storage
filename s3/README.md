---
id: s3
title: S3
---

![Release](https://img.shields.io/github/v/tag/gofiber/storage?filter=s3*)
[![Discord](https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7)](https://gofiber.io/discord)
![Test](https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-s3.yml?label=Tests)
![Security](https://img.shields.io/github/actions/workflow/status/gofiber/storage/gosec.yml?label=Security)
![Linter](https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter)

A S3 storage driver using [aws/aws-sdk-go-v2](https://github.com/aws/aws-sdk-go-v2).

**Note:** If config fields of credentials not given, credentials are using from the environment variables, ~/.aws/credentials, or EC2 instance role. If config fields of credentials given, credentials are using from config. Look at: [specifying credentials](https://aws.github.io/aws-sdk-go-v2/docs/configuring-sdk/#specifying-credentials)


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
