package sqlite3

import (
	"testing"
	"time"

	"github.com/gofiber/utils"
	_ "github.com/mattn/go-sqlite3"
)

func Test_New(t *testing.T) {
	New()
}

func Test_Sqlite_Get_Set(t *testing.T) {
	s := New(Config{
		Database: ":memory:",
	})
	err := s.Set("fiber-10k-stars?", []byte("yes!"), time.Duration(time.Hour*1))
	utils.AssertEqual(t, nil, err)

	b, err := s.Get("fiber-10k-stars?")
	utils.AssertEqual(t, nil, err)
	utils.AssertEqual(t, []byte("yes!"), b)
}

func Test_Sqlite_Expiration(t *testing.T) {
	s := New(Config{
		Database: ":memory:",
	})

	err := s.Set("fiber-20k-stars?", []byte("yes!"), time.Duration(time.Nanosecond/2))
	utils.AssertEqual(t, nil, err)

	b, err := s.Get("fiber-220k-stars?")
	utils.AssertEqual(t, nil, err)
	utils.AssertEqual(t, true, b == nil)
}
