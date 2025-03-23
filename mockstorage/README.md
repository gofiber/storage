---
id: mockstorage
title: MockStorage
---


![Release](https://img.shields.io/github/v/tag/gofiber/storage?filter=mockstorage*)
[![Discord](https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7)](https://gofiber.io/discord)
![Test](https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-mockstorage.yml?label=Tests)

A mock storage implementation for Fiber. This storage is not persistent and is only used for testing purposes.

**Note: Requires Go 1.21 and above**

## Table of Contents
- [Signatures](#signatures)
- [Installation](#installation)
- [Examples](#examples)
- [Config](#config)
- [Default Config](#default-config)


## Signatures

### Structs

```go
type Storage struct {
    // contains filtered or unexported fields
}

type Entry struct {
    Value []byte
    Exp   time.Time
}

type Config struct {
    CustomFuncs *CustomFuncs
}

type CustomFuncs struct {
    GetFunc    func(key string) ([]byte, error)
    SetFunc    func(key string, val []byte, exp time.Duration) error
    DeleteFunc func(key string) error
    ResetFunc  func() error
    CloseFunc  func() error
    ConnFunc   func() map[string]Entry
    KeysFunc   func() ([][]byte, error)
}
```

### Functions
```go
// New creates a new Storage instance. You can optionally pass a Config.
func New(config ...Config) *Storage

// Get retrieves the value associated with the given key.
func (s *Storage) Get(key string) ([]byte, error)

// Set sets the value for the given key, with an optional expiration duration.
func (s *Storage) Set(key string, val []byte, exp time.Duration) error

// Delete removes the value associated with the given key.
func (s *Storage) Delete(key string) error

// Reset clears all values from the storage.
func (s *Storage) Reset() error

// Close performs any necessary cleanup when the storage is no longer needed.
func (s *Storage) Close() error

// Conn returns a copy of the current state of the storage.
func (s *Storage) Conn() map[string]Entry

// Keys returns a list of all keys in the storage.
func (s *Storage) Keys() ([][]byte, error)

// SetCustomFuncs allows you to set custom functions for the storage operations.
func (s *Storage) SetCustomFuncs(custom *CustomFuncs)
```

## Installation
MockStorage is tested on the 2 last [Go versions](https://golang.org/dl/) with support for modules. So make sure to initialize one first if you didn't do that yet:
```bash
go mod init github.com/<user>/<repo>
```
And then install the mockstorage implementation:
```bash
go get github.com/gofiber/storage/mockstorage
```

## Examples
Import the storage package.
```go
import "github.com/gofiber/storage/mockstorage"
```

You can use the following possibilities to create a storage:
```go
// Initialize default config
store := mockstorage.New()

// Set a value in the storage.
err := store.Set("key1", []byte("value1"), 0)
if err != nil {
    // handle error
}

// Get a value from the storage.
val, err := store.Get("key1")
if err != nil {
    // handle error
}
fmt.Println(string(val)) // prints "value1"

// Delete a value from the storage.
err = store.Delete("key1")
if err != nil {
	// handle error
}

// Mocking storage operations in tests:
func TestMyFunction(t *testing.T) {
    // Create a new instance of MockStorage
    store := mockstorage.New()

    // Mock the Set function
    store.SetCustomFuncs(&mockstorage.CustomFuncs{
        Set: func(key string, val []byte, exp time.Duration) error {
            if key == "expectedKey" && string(val) == "expectedValue" {
                return nil
            }
            return errors.New("unexpected key or value")
        },
    })

    // Call the function you want to test, which should call store.Set
    err := MyFunction(store)

    // Check that the function behaved as expected
    if err != nil {
        t.Errorf("MyFunction returned an error: %v", err)
    }
}
```

> **Note:** In the `mockstorage` package, expiration of data is not handled automatically in the background. The data is only marked as expired and removed when you attempt to `Get()` it after its expiration time. If you're using a custom `Get()` function or accessing the data directly using the `Conn()` function, expired data will not be removed. Keep this in mind when writing your tests.

## Config
```go
type Config struct {
	CustomFuncs *CustomFuncs
}
```

## Default Config
```go
var ConfigDefault = Config{
	CustomFuncs: &CustomFuncs{
		GetFunc:    nil,
		SetFunc:    nil,
		DeleteFunc: nil,
		ResetFunc:  nil,
		CloseFunc:  nil,
		ConnFunc:   nil,
		KeysFunc:   nil,
	},
}
```
