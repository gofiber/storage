package ristretto_test

import (
	"testing"
	"time"

	"github.com/gofiber/storage/ristretto"
	"github.com/gofiber/utils"
)

var testStore = ristretto.New()

func Test_Ristretto_Set(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	utils.AssertEqual(t, nil, err)
}

func Test_Ristretto_Set_Override(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	utils.AssertEqual(t, nil, err)

	err = testStore.Set(key, val, 0)
	utils.AssertEqual(t, nil, err)
}

func Test_Ristretto_Get(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	// Create a channel to synchronize the test
	done := make(chan struct{})

	// Set the value in a goroutine
	go func() {
		err := testStore.Set(key, val, 0)
		utils.AssertEqual(t, nil, err)

		// Send a value on the channel to signal that the value has been set
		done <- struct{}{}
	}()

	// Wait for the value to be set or a timeout to occur
	select {
	case <-done:
		// The value has been set, proceed with the test
		result, err := testStore.Get(key)
		utils.AssertEqual(t, nil, err)
		utils.AssertEqual(t, val, result)
	case <-time.After(1 * time.Second):
		// The value was not set within 1 second, fail the test
		t.Errorf("timed out waiting for value to be set")
	}
}

func Test_Ristretto_Set_Expiration(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
		exp = 1 * time.Second
	)

	err := testStore.Set(key, val, exp)
	utils.AssertEqual(t, nil, err)

	testStore.Reset()
}

func Test_Ristretto_Get_Expired(t *testing.T) {
	var (
		key = "john"
	)

	result, err := testStore.Get(key)
	utils.AssertEqual(t, nil, err)
	utils.AssertEqual(t, true, len(result) == 0)
}

func Test_Ristretto_Get_NotExist(t *testing.T) {

	result, err := testStore.Get("notexist")
	utils.AssertEqual(t, nil, err)
	utils.AssertEqual(t, true, len(result) == 0)
}

func Test_Ristretto_Delete(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	// Create a channel to synchronize the test
	done := make(chan struct{})

	// Set the value in a goroutine
	go func() {
		err := testStore.Set(key, val, 0)
		utils.AssertEqual(t, nil, err)

		// Send a value on the channel to signal that the value has been set
		done <- struct{}{}
	}()

	// Wait for the value to be set or a timeout to occur
	select {
	case <-done:
		// The value has been set, proceed with the test
		err := testStore.Delete(key)
		utils.AssertEqual(t, nil, err)

		result, err := testStore.Get(key)
		utils.AssertEqual(t, nil, err)
		utils.AssertEqual(t, true, len(result) == 0)
	case <-time.After(1 * time.Second):
		// The value was not set within 1 second, fail the test
		t.Errorf("timed out waiting for value to be set")
	}
}

func Test_Ristretto_Reset(t *testing.T) {
	var (
		val = []byte("doe")
	)

	err := testStore.Set("john1", val, 0)
	utils.AssertEqual(t, nil, err)

	err = testStore.Set("john2", val, 0)
	utils.AssertEqual(t, nil, err)

	err = testStore.Reset()
	utils.AssertEqual(t, nil, err)

	result, err := testStore.Get("john1")
	utils.AssertEqual(t, nil, err)
	utils.AssertEqual(t, true, len(result) == 0)

	result, err = testStore.Get("john2")
	utils.AssertEqual(t, nil, err)
	utils.AssertEqual(t, true, len(result) == 0)
}

func Test_Ristretto_Close(t *testing.T) {
	utils.AssertEqual(t, nil, testStore.Close())
}

func Test_Ristretto_Conn(t *testing.T) {
	utils.AssertEqual(t, true, testStore.Conn() != nil)
}
