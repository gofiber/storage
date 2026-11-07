package couchbase

import (
	"context"
	"strings"
	"testing"
	"time"

	"github.com/couchbase/gocb/v2"
	"github.com/stretchr/testify/require"
)

// A single container is shared by the subtests below because starting one is slow.
func TestCouchbase_ErrorPaths(t *testing.T) {
	store := newTestStore(t)
	defer store.Close()

	t.Run("get with invalid key returns the key-value error", func(t *testing.T) {
		val, err := store.Get(strings.Repeat("k", 300))

		var kvErr *gocb.KeyValueError
		require.ErrorAs(t, err, &kvErr)
		require.ErrorIs(t, err, gocb.ErrInvalidArgument)
		require.Nil(t, val)
	})

	t.Run("set with invalid key returns error", func(t *testing.T) {
		require.ErrorIs(t, store.Set(strings.Repeat("k", 300), []byte("v"), 0), gocb.ErrInvalidArgument)
	})

	t.Run("get of a JSON document returns a decode error", func(t *testing.T) {
		_, err := store.Conn().Bucket(couchbaseBucket).DefaultCollection().Upsert("json_doc", map[string]string{"a": "b"}, nil)
		require.NoError(t, err)

		val, err := store.Get("json_doc")
		require.Error(t, err)
		require.Nil(t, val)
	})

	t.Run("delete of a missing key returns not found", func(t *testing.T) {
		require.ErrorIs(t, store.Delete("missing_key"), gocb.ErrDocumentNotFound)
	})

	t.Run("delete removes the value", func(t *testing.T) {
		require.NoError(t, store.Set("to_delete", []byte("v"), 0))
		require.NoError(t, store.Delete("to_delete"))

		val, err := store.Get("to_delete")
		require.NoError(t, err)
		require.Nil(t, val)
	})

	t.Run("get from a missing bucket times out", func(t *testing.T) {
		bad := NewFromConnection(store.Conn(), Config{Bucket: "no_such_bucket"})

		ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)
		defer cancel()

		val, err := bad.GetWithContext(ctx, "key")
		require.Error(t, err)
		require.Nil(t, val)
	})
}
