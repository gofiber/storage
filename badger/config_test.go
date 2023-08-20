package badger

import (
	"testing"

	"github.com/dgraph-io/badger/v3"
	"github.com/stretchr/testify/require"
)

func assertRecoveryPanic(t *testing.T) {
	err := recover()
	require.Nil(t, nil, err)
}

func Test_Badger_Only_Name(t *testing.T) {
	defer assertRecoveryPanic(t)
	testDB := New(Config{
		Database:  "fiber.config.badger",
		UseLogger: false,
	})
	require.Nil(t, testDB.Close())
}

func Test_Badger_Options(t *testing.T) {
	defer assertRecoveryPanic(t)
	testDB := New(Config{
		BadgerOptions: badger.DefaultOptions("fiber.with_options.badger"),
		UseLogger:     false,
	})
	require.Nil(t, testDB.Close())
}

func Test_Empty_Config(t *testing.T) {
	defer assertRecoveryPanic(t)
	testDB := New(Config{})
	require.Nil(t, testDB.Close())
}
