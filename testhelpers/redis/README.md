# Redis Test Helper

This module provides utilities for starting a disposable Redis instance with [testcontainers-go](https://github.com/testcontainers/testcontainers-go). It is useful for integration tests against storage implementations that rely on Redis.

## Features

- Starts Redis containers with optional TLS, host/port, address, or URL connection helpers.
- Supports container reuse via `WithReuse` for faster local iteration.
- Exposes connection details (URL, host/port, addresses, TLS config) through the returned `Container` struct.

## Usage

Import the helper and start a Redis container in your tests:

```go
import (
    testredis "github.com/klauspost/storage/testhelpers/redis"
)

func TestExample(t *testing.T) {
    ctr := testredis.Start(t, "redis:7-alpine")

    // Use ctr.URL, ctr.Host/Port, or ctr.TLSConfig in your test code.
}
```

## Running locally

From the repository root, execute the helper's tests:

```sh
cd testhelpers/redis
go test ./... -v -race
```

Docker must be available and running for the tests to start Redis containers.
