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
func New(config ...Config) Storage
func (s *Storage) Get(key string) ([]byte, error)
func (s *Storage) Set(key string, val []byte, exp time.Duration) error
func (s *Storage) Delete(key string) error
func (s *Storage) Reset() error
func (s *Storage) Close() error
```

### Installation

[Install objectbox](https://golang.objectbox.io/install)

```bash
bash <(curl -s https://raw.githubusercontent.com/objectbox/objectbox-go/main/install.sh)
```
Init your module

```bash
go mod init github.com/<user>/<repo>
```

And then install the objectbox implementation:

```bash
go get github.com/gofiber/storage/objectbox/v2
```

### Examples

Import the storage package.

```go
import "github.com/gofiber/storage/objectbox/v2"
```

You can use the following possibilities to create a storage:

```go
// Initialize default config
store := objectbox.New()

// Initialize custom config
store := objectbox.New(objectbox.Config{
    Directory:       "objectbox_db",
    MaxSizeInKb:     1024 * 1024, // 1GB
    MaxReaders:      126,
    Reset:           false,
    CleanerInterval: 60 * time.Second,
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

    // CleanerInterval sets the frequency for deleting expired keys.
    //
    // Optional, defaults to 60 seconds
    CleanerInterval time.Duration
}
```

### Default Config

```go
var DefaultConfig = Config{
    Directory:       "objectbox_db",
    MaxSizeInKb:     1024 * 1024, // 1GB
    MaxReaders:      126,
    Reset:           false,
    CleanerInterval: 60 * time.Second,
}
```
