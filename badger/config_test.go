package badger

import (
	"testing"

	"github.com/dgraph-io/badger/v3"
	"github.com/gofiber/utils"
	"github.com/stretchr/testify/require"
)

func assertRecoveryPanic(t *testing.T) {
	err := recover()
	require.Nil(t, err)
}

func Test_Badger_Only_Name(t *testing.T) {
	defer assertRecoveryPanic(t)
	testDB := New(Config{
		Database:  "fiber.config.badger",
		UseLogger: false,
	})
	utils.AssertEqual(t, nil, testDB.Close())
}

func Test_Badger_Options(t *testing.T) {
	defer assertRecoveryPanic(t)
	testDB := New(Config{
		BadgerOptions: badger.DefaultOptions("fiber.with_options.badger"),
		UseLogger:     false,
	})
	utils.AssertEqual(t, nil, testDB.Close())
}

func Test_Empty_Config(t *testing.T) {
	defer assertRecoveryPanic(t)
	testDB := New(Config{})
	utils.AssertEqual(t, nil, testDB.Close())
}
