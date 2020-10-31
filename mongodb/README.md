# mongodb

Storage uses MongoDB

### Usage
```go
package main

import "github.com/gofiber/storage/mongodb"

func main() {
	store := mongodb.New("127.0.0.1:27017", "mydb", "mycol")
}

```
