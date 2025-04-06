package surrealdb

import (
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

func Test_Surrealdb_Get(t *testing.T) {
	bytes, err := testStore.Get("")
	require.NoError(t, err)
	require.Nil(t, bytes)
}
