package cassandra

import (
    "testing"
    "time"

    "github.com/gofiber/utils"
)

// Connect to Cassandra
var storage = New(Config{
    Reset:    true,
})

func TestSetAndGet(t *testing.T) {
    key := "test_key"
    value := []byte("test_value")
    expire := time.Hour

    // Test the Set operation
    err := storage.Set(key, value, expire)
    utils.AssertEqual(t, nil, err)

    // Test the Get operation
    retrievedValue, err := storage.Get(key)
    utils.AssertEqual(t, nil, err)
    utils.AssertEqual(t, value, retrievedValue)

    // Close the connection
    err = storage.Close()
    utils.AssertEqual(t, nil, err)
}

func TestDelete(t *testing.T) {
    key := "test_key"
    value := []byte("test_value")
    expire := time.Hour

    // Add data
    err := storage.Set(key, value, expire)
    utils.AssertEqual(t, nil, err)

    // Test the Delete operation
    err = storage.Delete(key)
    utils.AssertEqual(t, nil, err)

    // Check the deleted value using Get
    deletedValue, err := storage.Get(key)
    utils.AssertEqual(t, nil, err)
    utils.AssertEqual(t, []byte(nil), deletedValue)

    // Close the connection
    err = storage.Close()
    utils.AssertEqual(t, nil, err)
}

func TestReset(t *testing.T) {
    key := "test_key"
    value := []byte("test_value")
    expire := time.Hour

    // Add data
    err := storage.Set(key, value, expire)
    utils.AssertEqual(t, nil, err)

    // Test the Reset operation
    err = storage.Reset()
    utils.AssertEqual(t, nil, err)

    // Check the reset value using Get
    resetValue, err := storage.Get(key)
    utils.AssertEqual(t, nil, err)
    utils.AssertEqual(t, []byte(nil), resetValue)

    // Close the connection
    err = storage.Close()
    utils.AssertEqual(t, nil, err)
}

func TestGetWithExpiration(t *testing.T) {
    key := "test_key"
    value := []byte("test_value")
    expire := time.Second * 5

    // Add data
    err := storage.Set(key, value, expire)
    utils.AssertEqual(t, nil, err)

    // Test the Get operation
    retrievedValue, err := storage.Get(key)
    utils.AssertEqual(t, nil, err)
    utils.AssertEqual(t, value, retrievedValue)

    // Wait for expiration
    time.Sleep(10 * time.Second)

    // Check the expired value using Get
    expiredValue, err := storage.Get(key)
    utils.AssertEqual(t, nil, err)
    utils.AssertEqual(t, []byte(nil), expiredValue)

    // Close the connection
    err = storage.Close()
    utils.AssertEqual(t, nil, err)
}