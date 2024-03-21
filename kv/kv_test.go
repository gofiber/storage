package kv

import (
	"bytes"
	"log"
	"os"
	"testing"

	"github.com/joho/godotenv"
	"github.com/stretchr/testify/require"
)

var testStore *Storage

func TestMain(m *testing.M) {
	if err := godotenv.Load(".env"); err != nil {
		log.Fatal(".env loading failed")
	}

	testStore = New(Config{
		Key:         os.Getenv("CF_AUTH_TOKEN"),
		AccountID:   os.Getenv("CF_ACCOUNT_ID"),
		NamespaceID: os.Getenv("CF_KV_NAMESPACE"),
		Email:       os.Getenv("CF_EMAIL"),
		Reset:       true,
	})

	code := m.Run()

	_ = testStore.Close()
	os.Exit(code)
}

func Test_KV_Set(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)

	require.NoError(t, err)
}

func Test_KV_Get(t *testing.T) {
	var (
		key = "john"
		val = "doe"
	)

	result, err := testStore.Get(key)

	require.NoError(t, err)
	require.Equal(t, val, bytes.NewBuffer(result).String())
}

func Test_KV_Delete(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	err = testStore.Delete(key)
	require.NoError(t, err)
}

func Test_KV_Reset(t *testing.T) {
	err := testStore.Reset()

	require.NoError(t, err)
}
func Test_KV_Close(t *testing.T) {
	require.Nil(t, testStore.Close())
}
