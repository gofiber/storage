// +build mongodb

package mongodb

import (
	"context"
	"github.com/gofiber/utils"
	"go.mongodb.org/mongo-driver/bson"
	"os"
	"testing"
	"time"
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

func Test_MongoDB_Set_Get(t *testing.T) {
	if uri == "" {
		t.Skip()
	}
	store := New(getConfig())
	defer func() {
		_ = store.db.Client().Disconnect(context.TODO())
	}()

	key := "example_key"
	value := []byte("123")

	err := store.Set(key, value, 0)
	utils.AssertEqual(t, nil, err)

	getVal, getErr := store.Get(key)

	utils.AssertEqual(t, nil, getErr)
	utils.AssertEqual(t, value, getVal, "correctly set and get value")
}

func Test_MongoDB_Get_Invalid(t *testing.T) {
	if uri == "" {
		t.Skip()
	}
	store := New(getConfig())
	defer func() {
		_ = store.db.Client().Disconnect(context.TODO())
	}()

	key := "random_invalid_key"

	getVal, getErr := store.Get(key)

	utils.AssertEqual(t, true, getErr != nil)
	utils.AssertEqual(t, true, getVal == nil, "get nil if key not found")
}

func Test_MongoDB_Set_Replace(t *testing.T) {
	if uri == "" {
		t.Skip()
	}
	store := New(getConfig())
	defer func() {
		_ = store.db.Client().Disconnect(context.TODO())
	}()

	key := "replace_key"
	value1 := []byte("value1")
	value2 := []byte("value2")

	setErr1 := store.Set(key, value1, 0)
	setErr2 := store.Set(key, value2, 0)
	val, getErr := store.Get(key)

	utils.AssertEqual(t, true, setErr1 == nil)
	utils.AssertEqual(t, true, setErr2 == nil)
	utils.AssertEqual(t, true, getErr == nil)

	utils.AssertEqual(t, value2, val, "replace value if key exists")
}

func Test_MongoDB_SetExpiry(t *testing.T) {
	if uri == "" {
		t.Skip()
	}
	store := New(getConfig())
	defer func() {
		_ = store.db.Client().Disconnect(context.TODO())
	}()

	key := "example_key_2"
	value := []byte("123")

	setErr := store.Set(key, value, 1*time.Nanosecond)
	utils.AssertEqual(t, true, setErr == nil)

	val, getErr := store.Get(key)
	utils.AssertEqual(t, true, getErr == nil)
	utils.AssertEqual(t, true, val == nil, "get nil if key is expire")
}

func Test_MongoDB_Delete(t *testing.T) {
	if uri == "" {
		t.Skip()
	}
	store := New(getConfig())
	defer func() {
		_ = store.db.Client().Disconnect(context.TODO())
	}()

	key := "example_key_3"
	value := []byte("123")

	err := store.Set(key, value, 0)
	utils.AssertEqual(t, nil, err)

	err = store.Delete(key)
	utils.AssertEqual(t, nil, err)

	getVal, getErr := store.Get(key)
	utils.AssertEqual(t, true, getErr != nil)
	utils.AssertEqual(t, true, getVal == nil, "correctly delete value")
}

func Test_MongoDB_Clear(t *testing.T) {
	if uri == "" {
		t.Skip()
	}
	store := New(getConfig())
	defer func() {
		_ = store.db.Client().Disconnect(context.TODO())
	}()

	key := "example_key_4"
	value := []byte("123")

	err := store.Set(key, value, 10)
	names, _ := store.db.ListCollectionNames(context.TODO(), bson.D{})

	utils.AssertEqual(t, nil, err)
	utils.AssertEqual(t, true, contains(names, colName), "has collection")

	cErr := store.Clear()

	names2, _ := store.db.ListCollectionNames(context.TODO(), bson.D{})
	utils.AssertEqual(t, nil, cErr)
	utils.AssertEqual(t, false, contains(names2, colName), "do not have collection")
}
