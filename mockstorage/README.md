---
id: memory
title: Memory
---


![Release](https://img.shields.io/github/v/tag/gofiber/storage?filter=mockstorage*)
[![Discord](https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7)](https://gofiber.io/discord)
![Test](https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-mockstorage.yml?label=Tests)
![Security](https://img.shields.io/github/actions/workflow/status/gofiber/storage/gosec.yml?label=Security)
![Linter](https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter)

A mock storage implementation for Fiber. This storage is not persistent and is only used for testing purposes.

**Note: Requires Go 1.21 and above**

### Table of Contents
- [Signatures](#signatures)
- [Installation](#installation)
- [Examples](#examples)
- [Config](#config)
- [Default Config](#default-config)


### Signatures
```go
func New(config ...Config) *Storage
func (s *Storage) Get(key string) ([]byte, error)
func (s *Storage) Set(key string, val []byte, exp time.Duration) error
func (s *Storage) Delete(key string) error
func (s *Storage) Reset() error
func (s *Storage) Close() error
func (s *Storage) Conn() map[string]entry
func (s *Storage) Keys() ([][]byte, error)

func SetCustomFuncs(custom *CustomFuncs)
```

### Installation
Mockstorage is tested on the 2 last [Go versions](https://golang.org/dl/) with support for modules. So make sure to initialize one first if you didn't do that yet:
```bash
go mod init github.com/<user>/<repo>
```
And then install the mockstorage implementation:
```bash
go get github.com/gofiber/storage/mockstorage
```

### Examples
Import the storage package.
```go
import "github.com/gofiber/storage/mockstorage"
```

You can use the following possibilities to create a storage:
```go
// Initialize default config
store := mockstorage.New()

// Initialize custom config
store := mockstorage.New(mockstorage.Config{
	CustomFuncs: &mockstorage.CustomFuncs{
		&CustomFuncs{
			GetFunc: func(key string) ([]byte, error) {
				if key == "customKey" {
					return []byte("customValue"), nil
				}
				return nil, errors.New("custom key not found")
			},
			SetFunc: func(key string, val []byte, exp time.Duration) error {
				if key == "readonly" {
					return errors.New("cannot set readonly key")
				}
				return nil
			},
			DeleteFunc: func(key string) error {
				if key == "protectedKey" {
					return errors.New("cannot delete protected key")
				}
				return nil
			},
			// ...
		},
	},
})

// Set custom functions after initialization
store.SetCustomFuncs(&mockstorage.CustomFuncs{
	GetFunc: func(key string) ([]byte, error) {
		if key == "customKey" {
			return []byte("customValue"), nil
		}
		return nil, errors.New("custom key not found")
	},
	SetFunc: func(key string, val []byte, exp time.Duration) error {
		if key == "readonly" {
			return errors.New("cannot set readonly key")
		}
		return nil
	},
	DeleteFunc: func(key string) error {
		if key == "protectedKey" {
			return errors.New("cannot delete protected key")
		}
		return nil
	},
	// ...
})
```

### Config
```go
type Config struct {
	CustomFuncs *CustomFuncs
}
```

### Default Config
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
