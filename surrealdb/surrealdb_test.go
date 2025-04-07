package surrealdb

import (
	"fmt"
	"github.com/stretchr/testify/require"
	"os"
	"testing"
)

var testStore *Storage
var testConfig = ConfigDefault

func TestMain(m *testing.M) {
	var err error
	testStore, err = New(testConfig)
	if err != nil {
		panic(err)
	}

	code := m.Run()
	if err := testStore.Close(); err != nil {
		fmt.Fprintf(os.Stderr, "failed to close store: %v\n", err)
	}
	os.Exit(code)
}

func Test_Surrealdb_Create(t *testing.T) {
	err := testStore.Set("create", []byte("test12345"), 0)
	require.NoError(t, err)
}

func Test_Surrealdb_CreateAndGet(t *testing.T) {
	err := testStore.Set("createandget", []byte("test1234"), 0)
	require.NoError(t, err)

	get, err := testStore.Get("createandget")
	require.NoError(t, err)
	require.NotEmpty(t, get)

}

func Test_Surrealdb_ListTable(t *testing.T) {
	bytes, err := testStore.List()
	require.NoError(t, err)
	require.NotEmpty(t, bytes)
}

func Test_Surrealdb_Get_WithNoErr(t *testing.T) {
	get, err := testStore.Get("create")
	require.NoError(t, err)
	require.NotEmpty(t, get)
}

func Test_Surrealdb_Delete(t *testing.T) {
	err := testStore.Set("delete", []byte("delete1234"), 0)
	require.NoError(t, err)

	err = testStore.Delete("delete")
	require.NoError(t, err)
}

func Test_Surrealdb_Flush(t *testing.T) {
	err := testStore.Reset()
	require.NoError(t, err)
}

func BenchmarkSet(b *testing.B) {
	store, err := New(ConfigDefault)
	if err != nil {
		b.Fatalf("failed to init storage: %v", err)
	}
	defer store.Close()

	for i := 0; i < b.N; i++ {
		err := store.Set(fmt.Sprintf("bench-key-%d", i), []byte("value"), 0)
		if err != nil {
			b.Errorf("Set failed: %v", err)
		}
	}
}
