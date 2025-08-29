# Test Compatibility Kit (TCK) for Storage Implementations

The Test Compatibility Kit (TCK) is a standardized test suite for validating storage implementations in the Fiber Storage repository. It provides a comprehensive set of tests that ensure all storage backends behave consistently and correctly implement the `storage.Storage` interface.

## Overview

The TCK leverages [testify/suite](https://github.com/stretchr/testify#suite-package) to provide a structured testing approach with setup/teardown hooks and consistent test execution. It automatically tests all core storage operations including:

- Basic CRUD operations (Set, Get, Delete)
- Context-aware operations (SetWithContext, GetWithContext, etc.)
- TTL (Time-To-Live) functionality
- Storage reset and cleanup
- Connection handling for stores that implement `StorageWithConn`

## Why Use the TCK?

- **Consistency**: Ensures all storage implementations behave identically
- **Completeness**: Tests all required storage interface methods
- **Maintenance**: Reduces test code duplication across storage implementations
- **Quality**: Provides comprehensive edge case and error condition testing
- **Integration**: Works seamlessly with testcontainers for isolated testing

## Core Concepts

### TCKSuite Interface

To use the TCK, you must implement the `TCKSuite` interface:

```go
// TCKSuite is the interface that must be implemented by the test suite.
// It defines how to create a new store with a container.
// The generic parameters are the storage type, the driver type returned by the Conn method,
// and the container type used to back the storage.
//
// IMPORTANT: The container type must exist as a Testcontainers module.
// Please refer to the [testcontainers] package for more information.
type TCKSuite[T storage.Storage, D any, C testcontainers.Container] interface {
	// NewStore is a function that returns a new store.
	// It is called by the [New] function to create a new store.
	NewStore() func(ctx context.Context, tb testing.TB, ctr C) (T, error)

	// NewContainer is a function that returns a new container.
	// It is called by the [New] function to create a new container.
	NewContainer() func(ctx context.Context, tb testing.TB) (C, error)
}
```

**Generic Parameters:**
- `T`: Your concrete storage type (e.g., `*mysql.Storage`)
- `D`: The driver type returned by `Conn()` method (e.g., `*sql.DB`)
- `C`: The testcontainer type (e.g., `*mysql.MySQLContainer`)

Please check that a Testcontainers module exists for the container type: visit [testcontainers website](https://testcontainers.com/modules/?language=go) for more information.

### Test Execution Modes

The TCK supports two execution modes:

- **PerTest** (default): Creates a new container and storage instance for each test
- **PerSuite**: Creates one container and storage instance for the entire test suite

## Implementation Guide: Example Example

Here's how to implement TCK tests for a new storage backend:

### Step 1: Define Your TCK Implementation

```go
// ExampleStorageTCK is the test suite for the Example storage.
type ExampleStorageTCK struct{}

// NewStore is a function that returns a new Example storage.
// It implements the [tck.TCKSuite] interface, allowing the TCK to create a new Example storage
// from the container created by the TCK.
func (s *ExampleStorageTCK) NewStore() func(ctx context.Context, tb testing.TB, ctr *ExampleContainer) (*Storage, error) {
    return func(ctx context.Context, tb testing.TB, ctr *example.Container) (*Storage, error) {
        conn, err := ctr.ConnectionString(ctx)
        require.NoError(tb, err)

        store := New(Config{
            ConnectionURI: conn,
            Reset:         true,
        })

        return store, nil
    }
}

// NewContainer is a function that returns a new Example container.
// It implements the [tck.TCKSuite] interface, allowing the TCK to create a new Example container
// for the Example storage.
func (s *ExampleStorageTCK) NewContainer() func(ctx context.Context, tb testing.TB) (*example.Container, error) {
    return func(ctx context.Context, tb testing.TB) (*example.Container, error) {
        return mustStartExample(tb), nil
    }
}
```

### Step 2: Implement Container Creation

Create a helper function to start your storage backend's container:

```go
func mustStartExample(t testing.TB) *example.Container {
    img := exampleImage
    if imgFromEnv := os.Getenv(exampleImageEnvVar); imgFromEnv != "" {
        img = imgFromEnv
    }

    ctx := context.Background()

    c, err := example.Run(ctx, img,
        example.WithOptionA("valueA"),
        example.WithOptionB("valueB"),
        testcontainers.WithWaitStrategy(
            wait.ForListeningPort("examplePort/tcp"),
        ),
    )
    testcontainers.CleanupContainer(t, c)
    require.NoError(t, err)

    return c
}
```

### Step 3: Create and Run the TCK Test

```go
func TestExampleStorageTCK(t *testing.T) {
    // Create the TCK suite with proper generic type parameters
    s, err := tck.New[*ExampleStorage, *ExampleDriver, *ExampleContainer](
        context.Background(), 
        t, 
        &ExampleStorageTCK{}, 
        tck.PerTest(), // or tck.PerSuite() for suite-level containers
    )
    require.NoError(t, err)

    // Run all TCK tests
    suite.Run(t, s)
}
```

## Key Implementation Guidelines

### 1. Generic Type Parameters

When calling `tck.New()`, specify the correct types:
- **First parameter** (`T`): Your storage pointer type (e.g., `*Storage`)
- **Second parameter** (`D`): Driver type from `Conn()` method, or `any` if not applicable
- **Third parameter** (`C`): Container type from `NewContainer()` method

### 2. Error Handling

Always use `require.NoError(tb, err)` in your factory functions to ensure test failures are properly reported.

### 3. Container Cleanup

The TCK automatically handles container cleanup, but ensure your `mustStart*` functions call `testcontainers.CleanupContainer(t, container)`. This is important when you add new Test functions that are not part of the TCK.
If they need a store (and its container), they must call `testcontainers.CleanupContainer(t, container)` to avoid having those containers running until the end of the test execution. At that time, Testcontainers' Ryuk prunes all containers for you, but you probably want to clean up the container immediately.

### 4. Configuration

Configure your storage with appropriate test settings:
- Enable `Reset: true` if your storage supports it
- Use test-specific database/namespace names
- Configure appropriate timeouts and connection limits

### 5. Context Handling

Always respect the provided `context.Context` in your factory functions, especially for container startup and storage initialization.

## Testing Different Scenarios

### PerTest Mode (Recommended)
Use when you need complete isolation between tests:

```go
s, err := tck.New[*Storage, *sql.DB](ctx, t, &MySQLStorageTCK{}, tck.PerTest())
```

**Pros:**
- Complete test isolation
- No cross-test contamination
- Easier debugging of individual test failures

**Cons:**
- Slower execution due to container startup overhead
- Higher resource usage, although mitigated by Testcontainers' cleanup mechanism

### PerSuite Mode
Use when container startup is expensive and tests can share state:

```go
s, err := tck.New[*Storage, *sql.DB](ctx, t, &MySQLStorageTCK{}, tck.PerSuite())
```

**Pros:**
- Faster execution
- Lower resource usage

**Cons:**
- Tests may affect each other
- Requires careful state management

## Troubleshooting

### Common Issues

1. **Wrong Generic Types**: Ensure type parameters match your actual storage and driver types
2. **Container Startup Failures**: Check wait strategies and ensure proper service readiness
3. **Connection Issues**: Verify connection strings and authentication in your `NewStore()` implementation
4. **Test Isolation**: If tests interfere with each other, consider switching from `PerSuite` to `PerTest`

### Best Practices

- Use environment variables for container image versions
- Implement proper wait strategies for container readiness
- Include cleanup calls even though TCK handles them automatically
- Test your TCK implementation with both `PerTest` and `PerSuite` modes
- Use meaningful test data that won't conflict across parallel test runs

## Complete Example Template

Here's a complete template for implementing TCK tests for a new storage backend:

```go
package newstorage

import (
    "context"
    "os"
    "testing"
    
    "github.com/gofiber/storage/testhelpers/tck"
    "github.com/stretchr/testify/require"
    "github.com/stretchr/testify/suite"
    "github.com/testcontainers/testcontainers-go"
    // Import your specific testcontainer module
)

const (
    defaultImage = "your-storage-image:latest"
    imageEnvVar  = "TEST_YOUR_STORAGE_IMAGE"
)

type YourStorageTCK struct{}

func (s *YourStorageTCK) NewStore() func(ctx context.Context, tb testing.TB, ctr *YourContainer) (*Storage, error) {
    return func(ctx context.Context, tb testing.TB, ctr *YourContainer) (*Storage, error) {
        // Get connection details from container
        conn, err := ctr.ConnectionString(ctx)
        require.NoError(tb, err)

        // Create and configure your storage
        store := New(Config{
            ConnectionURI: conn,
            Reset:         true,
            // Add other test-specific configuration
        })

        return store, nil
    }
}

func (s *YourStorageTCK) NewContainer() func(ctx context.Context, tb testing.TB) (*YourContainer, error) {
    return func(ctx context.Context, tb testing.TB) (*YourContainer, error) {
        return mustStartYourStorage(tb), nil
    }
}

func mustStartYourStorage(t testing.TB) *YourContainer {
    img := defaultImage
    if imgFromEnv := os.Getenv(imageEnvVar); imgFromEnv != "" {
        img = imgFromEnv
    }

    ctx := context.Background()

    c, err := yourstorage.Run(ctx, img,
        // Add your storage-specific configuration
        testcontainers.WithWaitStrategy(
            // Add appropriate wait strategies
        ),
    )
    testcontainers.CleanupContainer(t, c)
    require.NoError(t, err)

    return c
}

func TestYourStorageTCK(t *testing.T) {
    s, err := tck.New[*Storage, YourDriverType, *YourContainer](
        context.Background(),
        t,
        &YourStorageTCK{},
        tck.PerTest(),
    )
    require.NoError(t, err)

    suite.Run(t, s)
}
```

This template provides a solid foundation for implementing TCK tests for any new storage backend in the Fiber Storage repository.
