---
id: firestore
title: Firestore
---

![Release](https://img.shields.io/github/v/tag/gofiber/storage?filter=firestore*)
[![Discord](https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7)](https://gofiber.io/discord)
![Test](https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-firestore.yml?label=Tests)

A Firestore storage driver using [cloud.google.com/go/firestore](https://pkg.go.dev/cloud.google.com/go/firestore).

**Note:** If no credentials are provided, the driver uses Application Default Credentials (ADC) or the `GOOGLE_APPLICATION_CREDENTIALS` environment variable. If credentials are provided via config (`Credentials` or `CredentialsPath`), those take precedence. See: [Google Cloud Authentication Guide](https://cloud.google.com/docs/authentication)

### Table of Contents

- [Signatures](#signatures)
- [Installation](#installation)
- [Examples](#examples)
- [Config](#config)
- [Default Config](#default-config)

### Signatures

```go
func New(config ...Config) *Storage
func NewFromConnection(client *firestore.Client, collection string) *Storage
func (s *Storage) Get(key string) ([]byte, error)
func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error)
func (s *Storage) Set(key string, val []byte, exp time.Duration) error
func (s *Storage) SetWithContext(ctx context.Context, key string, val []byte, exp time.Duration) error
func (s *Storage) Delete(key string) error
func (s *Storage) DeleteWithContext(ctx context.Context, key string) error
func (s *Storage) Reset() error
func (s *Storage) ResetWithContext(ctx context.Context) error
func (s *Storage) Close() error
func (s *Storage) Conn() *firestore.Client
```

### Installation

Firestore is tested on the 2 last [Go versions](https://golang.org/dl/) with support for modules. So make sure to initialize one first if you didn't do that yet:

```bash
go mod init github.com/<user>/<repo>
```

And then install the firestore implementation:

```bash
go get github.com/gofiber/storage/firestore/v2
```

### Examples

Import the storage package.

```go
import firestorage "github.com/gofiber/storage/firestore/v2"
```

You can use the following possibilities to create a storage:

```go
// Initialize with Application Default Credentials
store := firestorage.New(firestorage.Config{
	ProjectID: "my-gcp-project",
})

// Initialize with service account JSON file
store := firestorage.New(firestorage.Config{
	ProjectID:       "my-gcp-project",
	CredentialsPath: "/path/to/service-account-key.json",
	Collection:      "sessions",
})

// Initialize with embedded credentials JSON
store := firestorage.New(firestorage.Config{
	ProjectID:   "my-gcp-project",
	Credentials: `{"type": "service_account", ...}`,
})

// Initialize with custom timeout
store := firestorage.New(firestorage.Config{
	ProjectID:      "my-gcp-project",
	Collection:     "fiber_storage",
	RequestTimeout: 10 * time.Second,
	Reset:          false,
})
```

#### Using an Existing Firestore Client

If you already have a Firestore client configured in your application, you can create a Storage instance directly from that client:

```go
import (
	"cloud.google.com/go/firestore"
	"context"
	firestorage "github.com/gofiber/storage/firestore/v2"
)

ctx := context.Background()
client, err := firestore.NewClient(ctx, "my-gcp-project")
if err != nil {
	panic(err)
}

store := firestorage.NewFromConnection(client, "my_collection")
```

### Config

```go
type Config struct {
	// ProjectID is the Google Cloud project ID
	// Required. Will panic if empty
	ProjectID string

	// Collection name where data will be stored
	//
	// Optional. Default is "fiber_storage"
	Collection string

	// CredentialsPath is the path to the service account JSON key file
	// If not provided, Application Default Credentials (ADC) will be used
	//
	// Optional. Default is ""
	CredentialsPath string

	// Credentials is a JSON string with service account credentials
	// Takes precedence over CredentialsPath if both are provided
	//
	// Optional. Default is ""
	Credentials string

	// RequestTimeout is the timeout for Firestore requests
	//
	// Optional. Default is 10 seconds
	RequestTimeout time.Duration

	// Reset clears all documents in the collection on initialization
	//
	// Optional. Default is false
	Reset bool
}
```

### Default Config

```go
var ConfigDefault = Config{
	Collection:     "fiber_storage",
	RequestTimeout: 10 * time.Second,
	Reset:          false,
}
```

### Additional Resources

- [Firestore Go SDK Documentation](https://pkg.go.dev/cloud.google.com/go/firestore)
- [Firebase Console](https://console.firebase.google.com)
- [Google Cloud Firestore Documentation](https://cloud.google.com/firestore/docs)
- [Google Cloud Authentication Guide](https://cloud.google.com/docs/authentication)
- [Firestore Quotas and Limits](https://cloud.google.com/firestore/quotas)
