# Test Helpers

This directory hosts reusable utilities for exercising storage implementations in end-to-end and compatibility testing scenarios. Each helper is maintained as its own Go module so it can be consumed independently.

## Available helpers

- **Redis** (`testhelpers/redis`): Spins up Redis with Testcontainers and exposes convenience functions for running integration tests against Redis-backed storage implementations.
- **Test Compatibility Kit (TCK)** (`testhelpers/tck`): Provides a reusable test suite that validates any `storage.Storage` implementation for correctness and API parity.

## Running tests locally

From the repository root, run tests for a helper by changing into its directory and executing `go test`:

```sh
cd testhelpers/redis
go test ./... -v -race
```

The helpers rely on Docker via [testcontainers-go](https://github.com/testcontainers/testcontainers-go), so ensure Docker is available and running before executing the tests.
