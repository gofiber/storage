package surrealdb

import (
	"encoding/json"
	"fmt"
	"github.com/stretchr/testify/require"
	"os"
	"testing"
)

var testStore *Storage
var testConfig = ConfigDefault

func TestMain(m *testing.M) {
	testStore = New(testConfig)

	code := m.Run()
	testStore.Close()
	os.Exit(code)
}

type testData struct {
	Name string `json:"name"`
	Age  int    `json:"age"`
}

var data = testData{
	Name: "john",
	Age:  35,
}

func Test_Surrealdb_Create(t *testing.T) {
	jsonData, err := json.Marshal(data)
	require.NoError(t, err)
	err = testStore.Set(testConfig.DefaultTable, jsonData, 0)
	require.NoError(t, err)
}

func Test_Surrealdb_CreateAndGet(t *testing.T) {
	jsonData, err := json.Marshal(data)
	require.NoError(t, err)
	err = testStore.Set(testConfig.DefaultTable, jsonData, 0)
	require.NoError(t, err)

	get, err := testStore.Get("yy2l8qwx55wc7ksxxjiz")
	require.NoError(t, err)
	require.NotEmpty(t, get)

}

func Test_Surrealdb_ListTable(t *testing.T) {
	bytes, err := testStore.List(testConfig.DefaultTable)
	require.NoError(t, err)
	require.NotEmpty(t, bytes)

	fmt.Println(string(bytes))
}

func Test_Surrealdb_Get(t *testing.T) {
	get, err := testStore.Get("783njhf8t4gkwlrvapsl")
	require.NoError(t, err)
	require.NotEmpty(t, get)
}

func Test_Surrealdb_Delete(t *testing.T) {
	err := testStore.Delete("qzplvi8yadeymz3az09c")
	require.NoError(t, err)
}

func Test_Surrealdb_Flush(t *testing.T) {
	err := testStore.Reset()
	require.NoError(t, err)
}
