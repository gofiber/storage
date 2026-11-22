---
id: cosmosdb
title: Azure Cosmos DB
---

![Release](https://img.shields.io/github/v/tag/gofiber/storage?filter=cosmosdb*)
[![Discord](https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7)](https://gofiber.io/discord)
![Test](https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-cosmosdb.yml?label=Tests)

An Azure Cosmos DB for NoSQL storage driver using [github.com/Azure/azure-sdk-for-go/sdk/data/azcosmos](https://pkg.go.dev/github.com/Azure/azure-sdk-for-go/sdk/data/azcosmos).

**Note:** `New` creates the database and container if they do not exist. A new container uses `/id` as its partition key and has time to live enabled, so Cosmos DB removes expired items itself. An expired item is never returned, also from a container without time to live, but there it is only removed by `Delete` or `Reset`.

**Note:** Keys are stored as their SHA-256 hash in `id`, because Cosmos DB ids cannot contain `/`, `\`, `?` or `#` and are limited to 255 characters. The original key is kept in the `k` field.

### Table of Contents

- [Signatures](#signatures)
- [Installation](#installation)
- [Examples](#examples)
- [Config](#config)
- [Default Config](#default-config)

### Signatures

```go
func New(config ...Config) *Storage
func NewWithContext(ctx context.Context, config ...Config) *Storage
func NewFromConnection(container *azcosmos.ContainerClient) *Storage
func (s *Storage) Get(key string) ([]byte, error)
func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error)
func (s *Storage) Set(key string, val []byte, exp time.Duration) error
func (s *Storage) SetWithContext(ctx context.Context, key string, val []byte, exp time.Duration) error
func (s *Storage) Delete(key string) error
func (s *Storage) DeleteWithContext(ctx context.Context, key string) error
func (s *Storage) Reset() error
func (s *Storage) ResetWithContext(ctx context.Context) error
func (s *Storage) Close() error
func (s *Storage) Conn() *azcosmos.ContainerClient
```

### Installation

Cosmos DB is tested on the last [Go versions](https://golang.org/dl/) with support for modules. So make sure to initialize one first if you didn't do that yet:

```bash
go mod init github.com/<user>/<repo>
```

And then install the cosmosdb implementation:

```bash
go get github.com/gofiber/storage/cosmosdb
```

### Examples

Import the storage package.

```go
import "github.com/gofiber/storage/cosmosdb"
```

You can use the following possibilities to create a storage:

```go
// Initialize with a connection string
store := cosmosdb.New(cosmosdb.Config{
	ConnectionString: "AccountEndpoint=https://<account>.documents.azure.com:443/;AccountKey=<key>;",
})

// Initialize with endpoint and key
store := cosmosdb.New(cosmosdb.Config{
	Endpoint:  "https://<account>.documents.azure.com:443/",
	Key:       "<key>",
	Database:  "fiber",
	Container: "sessions",
})

// Initialize with custom timeout
store := cosmosdb.New(cosmosdb.Config{
	ConnectionString: "AccountEndpoint=https://<account>.documents.azure.com:443/;AccountKey=<key>;",
	Database:         "fiber",
	Container:        "fiber_storage",
	RequestTimeout:   10 * time.Second,
	Reset:            false,
})
```

#### Using an Existing Cosmos DB Container

If you already have a Cosmos DB client configured in your application, for example with Microsoft Entra ID credentials, you can create a Storage instance from one of its containers. The container must use `/id` as its partition key.

```go
import (
	"github.com/Azure/azure-sdk-for-go/sdk/azidentity"
	"github.com/Azure/azure-sdk-for-go/sdk/data/azcosmos"
	"github.com/gofiber/storage/cosmosdb"
)

credential, err := azidentity.NewDefaultAzureCredential(nil)
if err != nil {
	panic(err)
}
client, err := azcosmos.NewClient("https://<account>.documents.azure.com:443/", credential, nil)
if err != nil {
	panic(err)
}
container, err := client.NewContainer("fiber", "fiber_storage")
if err != nil {
	panic(err)
}

store := cosmosdb.NewFromConnection(container)
defer store.Close()
```

### Config

```go
type Config struct {
	// ConnectionString is the Cosmos DB account connection string
	// Takes precedence over Endpoint and Key if provided
	//
	// Optional. Default is ""
	ConnectionString string

	// Endpoint is the Cosmos DB account endpoint, e.g. "https://<account>.documents.azure.com:443/"
	//
	// Optional. Default is ""
	Endpoint string

	// Key is the Cosmos DB account key used with Endpoint
	//
	// Optional. Default is ""
	Key string

	// Database name, created if it does not exist
	//
	// Optional. Default is "fiber"
	Database string

	// Container name where data will be stored, created if it does not exist
	//
	// Optional. Default is "fiber_storage"
	Container string

	// RequestTimeout is the timeout for Cosmos DB requests
	//
	// Optional. Default is 10 seconds
	RequestTimeout time.Duration

	// Reset clears all items in the container on initialization
	//
	// Optional. Default is false
	Reset bool
}
```

### Default Config

```go
var ConfigDefault = Config{
	ConnectionString: "",
	Endpoint:         "",
	Key:              "",
	Database:         "fiber",
	Container:        "fiber_storage",
	RequestTimeout:   10 * time.Second,
	Reset:            false,
}
```

### Additional Resources

- [Azure Cosmos DB Go SDK Documentation](https://pkg.go.dev/github.com/Azure/azure-sdk-for-go/sdk/data/azcosmos)
- [Azure Cosmos DB for NoSQL Documentation](https://learn.microsoft.com/azure/cosmos-db/nosql/)
- [Time to Live in Azure Cosmos DB](https://learn.microsoft.com/azure/cosmos-db/nosql/time-to-live)
- [Azure Cosmos DB Emulator](https://learn.microsoft.com/azure/cosmos-db/emulator)
