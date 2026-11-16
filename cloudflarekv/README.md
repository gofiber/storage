---
id: cloudflarekv
title: Cloudflare KV
---

![Release](https://img.shields.io/github/v/tag/gofiber/storage?filter=cloudflarekv*)
[![Discord](https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7)](https://gofiber.io/discord)
![Test](https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-cloudflarekv.yml?label=Tests)

A Cloudflare KV storage driver using [cloudflare/cloudflare-go](https://github.com/cloudflare/cloudflare-go).

### Table of Contents

- [Signatures](#signatures)
- [Installation](#installation)
- [Examples](#examples)
- [Config](#config)
- [Default Config](#default-config)

### Signatures

```go
func New(config ...Config) Storage
func NewFromConnection(api APIInterface, config ...Config) *Storage
func (s *Storage) Get(key string) ([]byte, error)
func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error)
func (s *Storage) Set(key string, val []byte, exp time.Duration) error
func (s *Storage) SetWithContext(ctx context.Context, key string, val []byte, exp time.Duration) error
func (s *Storage) Delete(key string) error
func (s *Storage) DeleteWithContext(ctx context.Context, key string) error
func (s *Storage) Reset() error
func (s *Storage) ResetWithContext(ctx context.Context) error
func (s *Storage) Close() error
func (s *Storage) Conn() *cloudflare.API
```

### Installation

```bash
go mod init github.com/<user>/<repo>
```

And then install the Cloudflare KV implementation:

```bash
go get github.com/gofiber/storage/cloudflarekv
```

### Examples

Import the storage package.

```go
import "github.com/gofiber/storage/cloudflarekv"
```

You can use the following methods to create storage. The Key must be an API Token generated with at least `Account.Workers KV Storage` permission. Check the [Create API Token](https://developers.cloudflare.com/fundamentals/api/get-started/create-token/) documentation to generate one.

```go
// Initialize default config
store := cloudflarekv.New()

store := cloudflarekv.New(cloudflarekv.Config{
    Key: "",
    Email: "",
    AccountID: "fiber",
    NamespaceID: "fiber",
    RequestTimeout: 10 * time.Second,
    Reset: false,
})

```

### Config

```go
type Config struct {

	// Cloudflare Auth Token
	//
	// Optional. Default is ""
	Key string

	// Cloudflare Email
	//
	// Optional. Default is ""
	Email string

	// Account id
	//
	// Optional. Default is "fiber"
	AccountID string

	// Namespace id
	//
	// Optional. Default is "fiber"
	NamespaceID string

	// RequestTimeout bounds each API call whose context has no deadline, including the wait
	// for the client's rate limiter. A negative value disables it.
	//
	// Optional. Default is 10 seconds
	RequestTimeout time.Duration

	// Reset clears any existing keys in existing Table
	//
	// Optional. Default is false
	Reset bool
}
```

### Default Config

```go
var ConfigDefault = Config{
	Key:            "",
	Email:          "",
	AccountID:      "fiber",
	NamespaceID:    "fiber",
	RequestTimeout: 10 * time.Second,
	Reset:          false,
}
```

### Notes

- A non-zero expiration passed to `Set` becomes the key's `expiration_ttl`. Workers KV accepts no TTL under 60 seconds, so shorter expirations are rounded up to 60 seconds: an entry may outlive a short expiration, but never expires early. Keys written by earlier versions of this driver have no TTL and never expire; to drop them, clear the namespace (for example with `Reset`) once every instance runs this version.
- `Get` returns `nil, nil` for a missing or expired key. Workers KV cannot store the keys `.` and `..`, so `Get` and `Delete` treat them as missing and `Set` returns `ErrInvalidKey`. A wrong `NamespaceID` also looks like a miss on `Get`, while `Set`, `Delete` and `Reset` return the API error.
- `cloudflare-go` sends all calls of a client through one rate limiter (4 requests per second by default). `RequestTimeout` bounds the wait: a call that would not get a slot in time fails at once instead of queueing without limit. If your account allows more, build the client with `cloudflare.UsingRateLimit` and pass it to `NewFromConnection`.

### Using an Existing Cloudflare API Client
If your application already holds a Cloudflare API client, you can build the storage on it instead of creating a second one. Only the `Email`, `AccountID`, `NamespaceID`, `RequestTimeout` and `Reset` options are read; the credentials come from the client. A custom `APIInterface` must also implement `Raw`, which `*cloudflare.API` provides.

The client stays yours to manage: `Close` on a storage built this way is a no-op, so the rest of your application keeps working.

```go
import (
    "github.com/cloudflare/cloudflare-go"
    "github.com/gofiber/storage/cloudflarekv"
)

func main() {
    api, err := cloudflare.NewWithAPIToken("token")
    if err != nil {
        panic(err)
    }

    store := cloudflarekv.NewFromConnection(api, cloudflarekv.Config{
        Email:       "user@example.com",
        AccountID:   "account-id",
        NamespaceID: "namespace-id",
    })
    defer store.Close()
}
```
