---
id: azureblob
title: Azure Blob
---

![Release](https://img.shields.io/github/v/tag/gofiber/storage?filter=azureblob*)
[![Discord](https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7)](https://gofiber.io/discord)
![Test](https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-azureblob.yml?label=Tests)

[Azure Blob storage](https://azure.microsoft.com/en-us/products/storage/blobs/#overview) is Microsoft's object storage solution for the cloud.

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
func (s *Storage) Conn() *azblob.Client
```

### Installation

Azure blob storage driver is tested on the 2 last [Go versions](https://golang.org/dl/) with support for modules. So make sure to initialize one first if you didn't do that yet:

```bash
go mod init github.com/<user>/<repo>
```

And then install the azure blob implementation:

```bash
go get github.com/gofiber/storage/azureblob/v2
```

### Examples

Import the storage package.

```go
import "github.com/gofiber/storage/azureblob/v2"
```

You can use the following possibilities to create a storage:

```go
// Initialize default config
store := azureblob.New()

// Initialize custom config
store := azureblob.New(azureblob.Config{
    Account:   "test",
    Container: "test",
    Credentials: Credentials{
        Account: "test",
        Key:     "YXp1cml0ZWtleQo=",
    },
})
```

### Config

```go
type Config struct {
    // Storage account name.
    Account string
    // Container name.
    Container string
    // Storage endpoint.
    // Optional. Default: "https://STORAGEACCOUNTNAME.blob.core.windows.net"
    Endpoint string
    // Request timeout.
    // Optional. Default is 0 (no timeout)
    RequestTimeout time.Duration
    // Reset clears any existing keys in existing container.
    // Optional. Default is false
    Reset bool
    // Credentials overrides AWS access key and AWS secret access key. Not recommended.
    // Optional. Default is Credentials{}
    Credentials Credentials
    // The maximum number of times requests that encounter retryable failures should be attempted.
    // Optional. Default is 3
    MaxAttempts int
}
```

### Default Config

```go
var ConfigDefault = Config{
    Account:        "",
    Container:      "",
    Endpoint:       "",
    RequestTimeout: 0,
    Reset:          false,
    MaxAttempts:    3,
}
```
