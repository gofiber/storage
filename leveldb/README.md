# LevelDB

A LevelDB storage driver using [syndtr/leveldb](https://github.com/syndtr/goleveldb).

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

Leveldb is tested on the 2 last [Go versions](https://golang.org/dl/) with support for modules. So make sure to initialize one first if you didn't do that yet:

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
	Path:                "./leveldb",
	LevelDBOptions:      &opt.Options{},
	LevelDBReadOptions:  &opt.ReadOptions{},
	LevelDBWriteOptions: &opt.WriteOptions{},
})
```

### Config

```go
type Config struct {
    //Database path
	Path                string
    //Database options
	LevelDBOptions      *opt.Options
    //Database read options
	LevelDBReadOptions  *opt.ReadOptions
    //Database write options
	LevelDBWriteOptions *opt.WriteOptions
}
```

### Default Config

```go
var ConfigDefault = Config{
	Path:                "./leveldb",
	LevelDBOptions:      &opt.Options{},
	LevelDBReadOptions:  &opt.ReadOptions{},
	LevelDBWriteOptions: &opt.WriteOptions{},
}
```
