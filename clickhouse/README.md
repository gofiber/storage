# Clickhouse

A Clickhouse storage driver using [https://github.com/ClickHouse/clickhouse-go](https://github.com/ClickHouse/clickhouse-go).

![Release](https://img.shields.io/github/v/tag/gofiber/storage?filter=clickhouse*)
[![Discord](https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7)](https://gofiber.io/discord)
![Test](https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-clickhouse.yml?label=Tests)

### Table of Contents

- [Signatures](#signatures)
- [Installation](#installation)
- [Examples](#examples)
- [Config](#config)
- [Default Config](#default-config)

### Signatures

```go
func New(config ...Config) (*Storage, error)
func NewWithContext(ctx context.Context, configuration Config) (*Storage, error)
func NewFromConnection(conn driver.Conn, configuration Config) (*Storage, error)
func NewFromConnectionWithContext(ctx context.Context, conn driver.Conn, configuration Config) (*Storage, error)
func (s *Storage) Get(key string) ([]byte, error)
func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error)
func (s *Storage) Set(key string, val []byte, exp time.Duration) error
func (s *Storage) SetWithContext(ctx context.Context, key string, val []byte, exp time.Duration) error
func (s *Storage) Delete(key string) error
func (s *Storage) DeleteWithContext(ctx context.Context, key string) error
func (s *Storage) Reset() error
func (s *Storage) ResetWithContext(ctx context.Context) error
func (s *Storage) Close() error
func (s *Storage) Conn() *Session
```

**Note:** Expirations are stored with a one-second granularity and rounded up, so an entry is never dropped before its expiration but may outlive it by up to a second.

**Note:** ClickHouse has no in-place update, so `Set` and `Delete` each insert a row and `Get` reads the newest row of the key. See [Expired and Replaced Rows](#expired-and-replaced-rows) for how the old rows are removed. The version comes from the server clock, and replicas receive writes asynchronously: with several servers, keep their clocks in sync and read from the replica you write to.

**Note:** `Set` and `Delete` return once their row is written: the insert sets `wait_for_async_insert = 1` and `insert_distributed_sync = 1`, so a user profile that pins either setting to another value makes them fail, and on a `Distributed` table an unreachable shard fails them instead of queuing the row. With `async_insert` on (the default on ClickHouse 26.7) each call waits for the async flush, up to 200 ms by default on each server it writes to; turning `async_insert` off for the user avoids that wait.

### Installation

Clickhouse is supported on the last version of Go:

Install the clickhouse implementation:
```bash
go get github.com/gofiber/storage/clickhouse
```

### Running the tests

This module uses [Testcontainers for Go](https://github.com/testcontainers/testcontainers-go/) to run integration tests, which will start a local instance of Clickhouse as a Docker container under the hood. To run the tests, you must have Docker (or another container runtime 100% compatible with the Docker APIs) installed on your machine.

### Local development

Before running this implementation, you must ensure a Clickhouse cluster is available.
For local development, we recommend using the Clickhouse Docker image; it contains everything
necessary for the client to operate correctly.

To start Clickhouse using Docker, issue the following:

```bash
docker run -d -p 9000:9000 --name some-clickhouse-server --ulimit nofile=262144:262144 clickhouse/clickhouse-server
```

After running this command you're ready to start using the storage and connecting to the database.

### Examples

You can use the following options to create a clickhouse storage driver:
```go
import "github.com/gofiber/storage/clickhouse"

// Initialize default config, to connect to localhost:9000 using the memory engine and with a clean table.
store, err := clickhouse.New(clickhouse.Config{
    Host: "localhost",
    Port: 9000,
    Clean: true,
})

// Initialize custom config to connect to a different host/port and use custom engine and with clean table.
store, err := clickhouse.New(clickhouse.Config{
    Host: "some-ip-address",
    Port: 9000,
    Engine: clickhouse.MergeTree,
    Clean: true,
})

// Initialize to connect with TLS enabled with your own tls.Config and with clean table.
tlsConfig := config := &tls.Config{...}

store, err := clickhouse.New(clickhouse.Config{
    Host: "some-ip-address",
    Port: 9000,
    Clean: true,
    TLSConfig: tlsConfig,
})
```

### Config

```go
// Config defines configuration options for Clickhouse connection.
type Config struct {
    // The host of the database. Ex: 127.0.0.1
    Host string
    // The port where the database is supposed to listen to. Ex: 9000
    Port int
    // The database that the connection should authenticate from
    Database string
    // The username to be used in the authentication
    Username string
    // The password to be used in the authentication
    Password string
    // The name of the table that will store the data
    Table string
    // The engine that should be used in the table
    Engine string
    // Should start a clean table, default false
    Clean bool
    // TLS configuration, default nil
    TLSConfig *tls.Config
    // Should the connection be in debug mode, default false
    Debug bool
    // The function to use with the debug config, default print function. It only works when debug is true
    Debugf func(format string, v ...any)
    // Time between sweeps of expired and replaced rows, default 10 * time.Minute; a negative value disables them
    GCInterval time.Duration
}
```

### Default Config

```go
var DefaultConfig = Config{
    Host:       "localhost",
    Port:       9000,
    Engine:     "Memory",
    Clean:      false,
    GCInterval: 10 * time.Minute,
}
```

### Using an Existing Clickhouse Connection

If your application already holds a `clickhouse.Conn`, you can build the storage on it instead of opening a second connection. Only the `Table`, `Engine`, `Clean` and `GCInterval` options are read; the connection details are taken from the connection you pass.

The connection stays yours to close: `Close` on a storage built this way leaves it open, so the rest of your application keeps working. The storage itself is closed: any operation on it afterwards returns `ErrClosed`.

```go
import (
    driver "github.com/ClickHouse/clickhouse-go/v2"
    "github.com/gofiber/storage/clickhouse"
)

func main() {
    conn, err := driver.Open(&driver.Options{
        Addr: []string{"127.0.0.1:9000"},
    })
    if err != nil {
        panic(err)
    }
    defer conn.Close()

    store, err := clickhouse.NewFromConnection(conn, clickhouse.Config{
        Table:  "fiber_storage",
        Engine: clickhouse.Memory,
    })
    if err != nil {
        panic(err)
    }
    defer store.Close()
}
```

### Expired and Replaced Rows

Every `GCInterval` a collector looks for expired and replaced rows and, if it finds any, deletes them with an `ALTER TABLE ... DELETE` mutation, which needs the `ALTER DELETE` grant. A mutation rewrites the table's data: on `Memory` it blocks `Set`, `Delete` and `Reset` while it runs (about 2 seconds for 3 million rows), and on `MergeTree` the replaced parts stay on disk until `old_parts_lifetime` (8 minutes by default) has passed. Raise `GCInterval` for large tables, or set it to a negative value to turn the collector off. If the engine cannot run the mutation (`Log`, `TinyLog`, `StripeLog`, any `Replicated*MergeTree`) or the grant is missing, the collector logs the error once and stops; the table then only shrinks on `Reset`. Other failed sweeps are logged and retried at the next interval. Every instance runs its own collector, starting at a random point of the first interval.

For a large or busy table, create it with `Engine: "ReplacingMergeTree(version) ORDER BY key"`: `Get` becomes an index lookup, and background merges drop replaced rows on their own, leaving the collector mostly expired rows. Do not add a `TTL` to the table: it removes each row on its own, so it can drop a key's newest row (a deleted or shorter-lived entry) and bring back an older value.

### Upgrading From Earlier Versions

- A table created by an earlier version gets a `version` column on start-up (`ALTER TABLE ... ADD COLUMN`, so the user needs that privilege once). The `Log`, `TinyLog` and `StripeLog` engines cannot add a column: `New` returns an error for such a table unless `Clean` is set, in which case the table is dropped and recreated. A `Distributed` table only gets the column itself, so add it to its local tables first (`ALTER TABLE ... ON CLUSTER ... ADD COLUMN version UInt64`).
- Stop every instance running an earlier version before starting the new one: once the column exists, their `Set` fails. To roll back, stop the new version and drop the table so the earlier version creates it empty, with an `Engine` that does not name `version`; for a `Distributed` table, also empty its local tables (`TRUNCATE TABLE ... ON CLUSTER ...`). The earlier version reads any row of a key, so kept rows would bring deleted and replaced entries back.
- Rows written by an earlier version all count as version 0, older than any new write. If a key had several of them, `Get` may keep returning an older value until the key is written again.
- `Database`, `Username` and `Password` are now always used. Earlier versions ignored all three unless both `Username` and `Password` were set, so such a deployment connected as user `default` and stored its entries in the server's default database. It now uses `<Database>.<Table>` (the database must exist, the table is created), and a user, password or database the server rejects makes `New` fail at start-up. If that moves the table (a `Database` other than the one used before, or a user with another default database), entries written before stay behind in the old one: once no instance runs an earlier version, drop it, copying its rows over with `INSERT ... SELECT` first to keep them.
- `Get` returns `nil` instead of an empty slice for a missing or expired key.
- Expirations no longer depend on the server's time zone. On a server outside UTC, rows written by an earlier version keep their shifted expiration until they expire.
