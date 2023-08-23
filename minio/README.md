---
id: minio
title: minio
---

![Release](https://img.shields.io/github/v/tag/gofiber/storage?filter=minio*)
[![Discord](https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7)](https://gofiber.io/discord)
![Test](https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-minio.yml?label=Tests)
![Security](https://img.shields.io/github/actions/workflow/status/gofiber/storage/gosec.yml?label=Security)
![Linter](https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter)

A Minio storage driver using [minio/minio](https://github.com/minio/minio).

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
    Bucket:   "test-bucket",
    Endpoint: "storage-minio:9000",
    Credentials: Credentials{
        accessKeyID:     "minio-user",
        secretAccessKey: "minio-password",
    },
})
```

### Config
```go
// Config defines the config for storage.
type Config struct {
    // Minio bucket name
    Bucket string
    
    // Minio endpoint
    Endpoint string
    
    // Minio region
    Region string
    
    // Minio token
    Token string
    
    // Minio secure
    Secure bool
    
    // Reset clears any existing keys in existing Bucket
    // Optional. Default is false
    Reset bool
    
    // Credentials overrides Minio access key and Minio secret key. Not recommended.
    // Optional. Default is Credentials{}
    Credentials Credentials
    
    // Get object options
    GetObjectOptions minio.GetObjectOptions
    
    // Put object options
    PutObjectOptions minio.PutObjectOptions
    
    // List object options
    ListObjectsOptions minio.ListObjectsOptions
    
    // Remove object options
    RemoveObjectOptions minio.RemoveObjectOptions

}
```

### Default Config
The default configuration lacks Bucket, Region, and Endpoint which are all required and must be overwritten:
```go
// ConfigDefault is the default config
var ConfigDefault = Config{
    Bucket:              "",
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
    accessKeyID     string
    secretAccessKey string
}
```
