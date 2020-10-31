# mongodb

Storage uses MongoDB

### Usage
```go
package main

import (
	"context"
	storage "github.com/gofiber/storage/mongodb"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"time"
)

const (
	uri     = ""
	dbName  = ""
	colName = ""
)

func main() {

	client, err := mongo.NewClient(options.Client().ApplyURI(uri))
	if err != nil {
		panic(err)
	}

	ctx, cancel := context.WithTimeout(context.Background(), 20*time.Second)
	defer cancel()
	err = client.Connect(ctx)

	db := client.Database(dbName)

	defer db.Client().Disconnect(context.TODO())
	
	storage.New(db.Collection(colName))
}

```
