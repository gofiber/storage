---
id: objectbox
title: ObjectBox
---

![Release](https://img.shields.io/github/v/tag/gofiber/storage?filter=objectbox*)
[![Discord](https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7)](https://gofiber.io/discord)
![Test](https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-objectbox.yml?label=Tests)
![Security](https://img.shields.io/github/actions/workflow/status/gofiber/storage/gosec.yml?label=Security)
![Linter](https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter)

An ObjectBox storage driver using [objectbox/objectbox-go](https://github.com/objectbox/objectbox-go).

### Table of Contents

- [Signatures](#signatures)
- [Installation](#installation)
- [Examples](#examples)
- [Config](#config)
- [Default Config](#default-config)

### Signatures

```go
func New(config ...Config) Storage // Creates a new ObjectBox storage instance
func (s *Storage) Get(key string) ([]byte, error) // Retrieves a value by key
func (s *Storage) Set(key string, val []byte, exp time.Duration) error // Stores a value with an optional expiration
func (s *Storage) Delete(key string) error // Deletes a value by key
func (s *Storage) Reset() error // Clears all entries from the storage
func (s *Storage) Close() error // Closes the storage connection
```

### Installation

First, ensure you have ObjectBox installed by following the official installation guide:
[ObjectBox installation guide](https://golang.objectbox.io/install)

Then, install the ObjectBox storage driver:
```bash
go get github.com/gofiber/storage/objectbox
```

### Examples

Import the storage package:

```go
import (
    "github.com/gofiber/storage/objectbox"
    "time"
)
```

You can use the following possibilities to create a storage instance:

```go
// Initialize with default config
store := objectbox.New()

// Initialize with custom config
store := objectbox.New(objectbox.Config{
    Directory:       "objectbox_db",
    MaxSizeInKb:     1024 * 1024, // 1GB
    MaxReaders:      126,
    Reset:           false,
    GCInterval: 60 * time.Second,
})
```

### Config

```go
type Config struct {
    // Directory is the path where the database is stored.
    //
    // Optional, defaults to "objectbox_db"
    Directory string

    // MaxSizeInKb sets the maximum size of the database in kilobytes.
    //
    // Optional, defaults to 1GB (1024 * 1024)
    MaxSizeInKb uint64

    // MaxReaders defines the maximum number of concurrent readers.
    //
    // Optional, defaults to 126
    MaxReaders uint

    // Reset determines if existing keys should be cleared on startup.
    //
    // Optional, defaults to false
    Reset bool

    // GCInterval sets the frequency for deleting expired keys.
    //
    // Optional, defaults to 60 seconds
    GCInterval time.Duration
}
```

### Default Config

```go
var DefaultConfig = Config{
    Directory:       "objectbox_db",
    MaxSizeInKb:     1024 * 1024, // 1GB
    MaxReaders:      126,
    Reset:           false,
    GCInterval: 60 * time.Second,
}
```
