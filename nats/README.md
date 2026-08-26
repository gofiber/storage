---
id: nats
title: Nats
---


![Release](https://img.shields.io/github/v/tag/gofiber/storage?filter=nats*)
[![Discord](https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7)](https://gofiber.io/discord)
![Test](https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-nats.yml?label=Tests)

A NATS Key/Value storage driver.

### Table of Contents

- [Signatures](#signatures)
- [Installation](#installation)
- [Examples](#examples)
- [Config](#config)
- [Default Config](#default-config)

### Signatures

```go
func New(config ...Config) Storage
func NewWithContext(ctx context.Context, config ...Config) *Storage
func NewFromConnection(nc *nats.Conn, config ...Config) *Storage
func NewFromConnectionWithContext(ctx context.Context, nc *nats.Conn, config ...Config) *Storage
func (s *Storage) Get(key string) ([]byte, error)
func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error)
func (s *Storage) Set(key string, val []byte, exp time.Duration) error
func (s *Storage) SetWithContext(ctx context.Context, key string, val []byte, exp time.Duration) error
func (s *Storage) Delete(key string) error
func (s *Storage) DeleteWithContext(ctx context.Context, key string) error
func (s *Storage) Reset() error
func (s *Storage) ResetWithContext(ctx context.Context) error
func (s *Storage) Close() error
func (s *Storage) Conn() (*nats.Conn, jetstream.KeyValue)
func (s *Storage) Keys() ([]string, error)
```

**Note:** Expirations are stored with a one-second granularity and rounded up, so an entry is never dropped before its expiration but may outlive it by up to a second.

### Installation

[NATS Key/Value Store](https://docs.nats.io/nats-concepts/jetstream/key-value-store) driver is tested on the 2 last [Go versions](https://golang.org/dl/) with support for modules. So make sure to initialize one first if you didn't do that yet:

```bash
go mod init github.com/<user>/<repo>
```

And then install the nats implementation:

```bash
go get github.com/gofiber/storage/nats
```

### Examples

Import the storage package.

```go
import "github.com/gofiber/storage/nats"
```

You can use the following options to create a storage driver:

```go
// Initialize default config
store := nats.New()

// Initialize custom config
store := nats.New(Config{
    URLs: "nats://127.0.0.1:4443",
    NatsOptions: []nats.Option{
        nats.MaxReconnects(2),
        // Enable TLS by specifying RootCAs
        nats.RootCAs("./testdata/certs/ca.pem"),
    },
    KeyValueConfig: jetstream.KeyValueConfig{
        Bucket:  "test",
        Storage: jetstream.MemoryStorage,
    },
})
```

### Config

```go
type Config struct {
	// Nats URLs, default "nats://127.0.0.1:4222". Can be comma separated list for multiple servers
	URLs string
	// Nats connection options. See nats_test.go for an example of how to use this.
	NatsOptions []nats.Option
	// Nats connection name
	ClientName string
	// Nats context
	Context context.Context
	// Nats key value config
	KeyValueConfig jetstream.KeyValueConfig
	// Wait for connection to be established, default: 250ms
	WaitForConnection time.Duration
	// Reset clears any existing keys in existing bucket default: false
	Reset bool
}
```

### Default Config

```go
var ConfigDefault = Config{
    URLs:       nats.DefaultURL,
    Context:    context.Background(),
    ClientName: "fiber_storage",
    KeyValueConfig: jetstream.KeyValueConfig{
    Bucket: "fiber_storage",
    },
    WaitForConnection: 100 * time.Millisecond,
}
```

### Using an Existing NATS Connection
If your application already holds a `*nats.Conn`, you can build the storage on it instead of connecting a second time. Only the `KeyValueConfig` and `Reset` options are read; the connection settings come from the connection. Your own connect and reconnect handlers are left alone.

The connection stays yours to close: `Close` on a storage built this way leaves it open, so the rest of your application keeps working.

Because no handlers are installed, the bucket is resolved lazily: an operation retries the setup when the bucket is still missing, and re-resolves it if its backing stream disappears. A bucket this driver created is recreated should it vanish; a bucket that already existed is only looked up again, so one your application configured — with its own history, TTL and replica settings — is never silently replaced by this driver's defaults.

```go
import (
    "github.com/gofiber/storage/nats"
    natsgo "github.com/nats-io/nats.go"
    "github.com/nats-io/nats.go/jetstream"
)

func main() {
    nc, err := natsgo.Connect("nats://127.0.0.1:4222")
    if err != nil {
        panic(err)
    }
    defer nc.Close()

    store := nats.NewFromConnection(nc, nats.Config{
        KeyValueConfig: jetstream.KeyValueConfig{
            Bucket: "fiber_storage",
        },
    })
    defer store.Close()
}
```
