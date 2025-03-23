---
id: leveldb
title: LevelDB
---

![Release](https://img.shields.io/github/v/tag/gofiber/storage?filter=leveldb*)
[![Discord](https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7)](https://gofiber.io/discord)
![Test](https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-leveldb.yml?label=Tests)

A fast key-value DB using [syndtr/goleveldb](https://github.com/syndtr/goleveldb)

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
func (s *Storage) Conn() *leveldb.DB
```

### Installation

LevelDB is tested on the 2 last [Go versions](https://golang.org/dl/) with support for modules. So make sure to initialize one first if you didn't do that yet:

```bash
go mod init github.com/<user>/<repo>
```

And then install the leveldb implementation:

```bash
go get github.com/gofiber/storage/leveldb
```

### Examples

Import the storage package.

```go
import "github.com/gofiber/storage/leveldb"
```

You can use the following possibilities to create a storage:

```go
// Initialize default config
store := leveldb.New()

// Initialize custom config
store := leveldb.New(leveldb.Config{
	Path: "./testdb",
	GCInterval: 10 * time.Second,
})
```

### Config

```go
type Config struct {
	// Path is the filesystem path for the database
	//
	// Optional. Default is "./fiber.leveldb"
	Path string

	// CacheSize is the size of LevelDB's cache (in MB)
	//
	// Optional. Default is 8MB
	CacheSize int

	// BlockSize is the size of data blocks (in KB)
	//
	// Optional. Default is 4KB
	BlockSize int

	// WriteBuffer is the size of write buffer (in MB)
	//
	// Optional. Default is 4MB
	WriteBuffer int

	// CompactionL0Trigger is the number of level-0 tables that triggers compaction
	//
	// Optional. Default is 4
	CompactionL0Trigger int

	// WriteL0PauseTrigger is the number of level-0 tables that triggers write pause
	//
	// Optional. Default is 12
	WriteL0PauseTrigger int

	// WriteL0SlowdownTrigger is the number of level-0 tables that triggers write slowdown
	//
	// Optional. Default is 8
	WriteL0SlowdownTrigger int

	// MaxOpenFiles is the maximum number of open files that can be held
	//
	// Optional. Default is 200 on MacOS, 500 on others
	MaxOpenFiles int

	// CompactionTableSize is the size of compaction table (in MB)
	//
	// Optional. Default is 2MB
	CompactionTableSize int

	// BloomFilterBits is the number of bits used in bloom filter
	//
	// Optional. Default is 10 bits/key
	BloomFilterBits int

	// NoSync completely disables fsync
	//
	// Optional. Default is false
	NoSync bool

	// ReadOnly opens the database in read-only mode
	//
	// Optional. Default is false
	ReadOnly bool

	// ErrorIfMissing returns error if database doesn't exist
	//
	// Optional. Default is false
	ErrorIfMissing bool

	// ErrorIfExist returns error if database exists
	//
	// Optional. Default is false
	ErrorIfExist bool

	// GCInterval is the garbage collection interval
	//
	// Optional. Default is 10 minutes
	GCInterval time.Duration
}
```

### Default Config

```go
var ConfigDefault = Config{
	Path:                 "./fiber.leveldb",
	CacheSize:              8, // 8 MB
	BlockSize:              4, // 4 KB
	WriteBuffer:            4, // 4 MB
	CompactionL0Trigger:    4,
	WriteL0PauseTrigger:    12,
	WriteL0SlowdownTrigger: 8,
	MaxOpenFiles: func() int {
		if runtime.GOOS == "darwin" {
			return 200 // MacOS
		}
		return 500 // Unix/Linux
	}(),
	CompactionTableSize: 2,  // 2 MB
	BloomFilterBits:     10, // 10 bits per key
	NoSync:              false,
	ReadOnly:            false,
	ErrorIfMissing:      false,
	ErrorIfExist:        false,
	GCInterval:          10 * time.Minute,
}
```
