package mongodb

import (
	"context"
	"os"
	"testing"

	"github.com/gofiber/utils"
	"go.mongodb.org/mongo-driver/bson"
)

const (
	dbName  = "fiberStorage"
	colName = "fiberStorage"
)

var uri = os.Getenv("MONGO_URI")

func getConfig() Config {

	return Config{
		URI:        uri,
		Database:   dbName,
		Collection: colName,
	}
}

func contains(arr []string, item string) bool {
	for _, i := range arr {
		if i == item {
			return true
		}
	}
	return false
}

func TestMongoStore_Set_Get(t *testing.T) {
	if uri == "" {
		t.Skip()
	}
	store := New(getConfig())
	defer func() {
		_ = store.db.Client().Disconnect(context.TODO())
	}()

	key := "example_key"
	value := []byte("123")

	_ = store.Set(key, value, 0)

	getVal, _ := store.Get(key)

	utils.AssertEqual(t, value, getVal, "correctly set and get value")
}

func TestMongoStore_Delete(t *testing.T) {
	if uri == "" {
		t.Skip()
	}
	store := New(getConfig())
	defer func() {
		_ = store.db.Client().Disconnect(context.TODO())
	}()

	key := "example_key_2"
	value := []byte("123")

	_ = store.Set(key, value, 10)
	_ = store.Delete(key)

	getVal, _ := store.Get(key)

	utils.AssertEqual(t, []byte{}, getVal, "correctly delete value")
}

func TestMongoStore_Clear(t *testing.T) {
	if uri == "" {
		t.Skip()
	}
	store := New(getConfig())
	defer func() {
		_ = store.db.Client().Disconnect(context.TODO())
	}()

	key := "example_key_2"
	value := []byte("123")

	_ = store.Set(key, value, 10)
	names, _ := store.db.ListCollectionNames(context.TODO(), bson.D{})

	utils.AssertEqual(t, true, contains(names, colName), "has collection")
	_ = store.Clear()

	names2, _ := store.db.ListCollectionNames(context.TODO(), bson.D{})
	utils.AssertEqual(t, false, contains(names2, colName), "do not have collection")
}
