---
id: minio
title: Minio
---

![Release](https://img.shields.io/github/v/tag/gofiber/storage?filter=minio*)
[![Discord](https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7)](https://gofiber.io/discord)
![Test](https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-minio.yml?label=Tests)

## Minio

A Minio storage driver using [minio/minio-go](https://github.com/minio/minio-go).

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
func (s *Storage) CheckBucket() error
func (s *Storage) CreateBucket() error
func (s *Storage) RemoveBucket() error
func (s *Storage) Conn() *minio.Client
```
### Installation
Install the Minio implementation:
```bash
go get github.com/gofiber/storage/minio
```
And then run minio on Docker
```bash
docker run -d --restart always -p 9000:9000 -p 9001:9001 --name storage-minio --volume=minio:/var/lib/minio -e MINIO_ROOT_USER='minio-user' -e MINIO_ROOT_PASSWORD='minio-password' minio/minio server --console-address ":9001" /var/lib/minio
```

### Examples
Import the storage package.
```go
import "github.com/gofiber/storage/minio"
```

You can use the following possibilities to create a storage:
```go
// Initialize default config
store := minio.New()

// Initialize custom config
store := minio.New(minio.Config{
    Bucket:   "fiber-bucket",
    Endpoint: "localhost:9000",
    Credentials: Credentials{
        AccessKeyID:     "minio-user",
        SecretAccessKey: "minio-password",
    },
})
```

### Config
```go
// Config defines the config for storage.
type Config struct {
    // Bucket
    // Default fiber-bucket
    Bucket string
    
    // Endpoint is a host name or an IP address
    Endpoint string
    
    // Region Set this value to override region cache
    // Optional
    Region string
    
    // Token Set this value to provide x-amz-security-token (AWS S3 specific)
    // Optional, Default is false
    Token string
    
    // Secure If set to true, https is used instead of http.
    // Default is false
    Secure bool
    
    // Reset clears any existing keys in existing Bucket
    // Optional. Default is false
    Reset bool
    
    // The maximum number of times requests that encounter retryable failures should be attempted.
    // Optional. Default is 10, same as the MinIO client.
    MaxRetry int

    // Credentials Minio access key and Minio secret key.
    // Need to be defined
    Credentials Credentials
    
    // GetObjectOptions Options for GET requests specifying additional options like encryption, If-Match
    GetObjectOptions minio.GetObjectOptions
    
    // PutObjectOptions
    // Allows user to set optional custom metadata, content headers, encryption keys and number of threads for multipart upload operation.
    PutObjectOptions minio.PutObjectOptions
    
    // ListObjectsOptions Options per to list objects
    ListObjectsOptions minio.ListObjectsOptions
    
    // RemoveObjectOptions Allows user to set options
    RemoveObjectOptions minio.RemoveObjectOptions
}
```

### Default Config
The default configuration lacks Bucket, Region, and Endpoint which are all required and must be overwritten:
```go
// ConfigDefault is the default config
var ConfigDefault = Config{
    Bucket:              "fiber-bucket",
    Endpoint:            "",
    Region:              "",
    Token:               "",
    Secure:              false,
    Reset:               false,

    Credentials:         Credentials{},
    GetObjectOptions:    minio.GetObjectOptions{},
    PutObjectOptions:    minio.PutObjectOptions{},
    ListObjectsOptions:  minio.ListObjectsOptions{},
    RemoveObjectOptions: minio.RemoveObjectOptions{},
}
type Credentials struct {
    AccessKeyID     string
    SecretAccessKey string
}
```
