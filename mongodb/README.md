# mongodb

Storage uses MongoDB

### Usage
```go
package main

import "github.com/gofiber/storage/mongodb"

func main() {
	// Default storage
	store := mongodb.New()

	// Custom storage
	store := mongodb.New(mongodb.Config{
		URI: 		"mongodb://127.0.0.1:27017", 
		Database: 	"_database", 
		Collection: 	"_storage",
	})
   
   // Access DB connection
   // for disconnet for example
   store.DB.Client().Disconnect(context.TODO())
}

```
