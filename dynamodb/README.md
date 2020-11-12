# DynamoDB

....

### Table of Contents
- [Signatures](#signatures)
- [Installation](#installation)
- [Examples](#examples)
- [Config](#config)
- [Default Config](#default-config)


### Signatures
```go
func New(config ...Config) Storage

var ErrNotExist = errors.New("key does not exist")

func (s *Storage) Get(key string) ([]byte, error)
func (s *Storage) Set(key string, val []byte, exp time.Duration) error
func (s *Storage) Delete(key string) error
func (s *Storage) Reset() error
func (s *Storage) Close() error
```

### Installation
DynamoDB is tested on the 2 last [Go versions](https://golang.org/dl/) with support for modules. So make sure to initialize one first if you didn't do that yet:
```bash
go mod init github.com/<user>/<repo>
```
And then install the dynamodb implementation:
```bash
go get github.com/gofiber/storage/dynamodb
```

### Examples
Import the storage package.
```go
import "github.com/gofiber/storage/dynamodb"
```

You can use the following possibilities to create a storage:
```go
// Initialize default config
store := dynamodb.New()

// Initialize custom config
store := dynamodb.New(dynamodb.Config{
	
})
```

### Config
```go
type Config struct {

}
```

### Default Config
```go
var ConfigDefault = Config{

}
```
