package sqlite3

import (
	"testing"
	"time"

	"github.com/gofiber/fiber/v2/utils"
	_ "github.com/mattn/go-sqlite3"
)

func getConfig() Config {
	cfg := configDefault(Config{})
	cfg.FilePath = ":memory:"

	return cfg
}

func Test_New(t *testing.T) {
	New()
}

func Test_Get_Set(t *testing.T) {
	s := New(getConfig())
	err := s.Set("fiber-10k-stars?", []byte("yes!"), time.Duration(time.Hour*1))
	utils.AssertEqual(t, nil, err)

	b, err := s.Get("fiber-10k-stars?")
	utils.AssertEqual(t, nil, err)
	utils.AssertEqual(t, []byte("yes!"), b)
}

func Test_Expiration(t *testing.T) {
	s := New(getConfig())

	err := s.Set("fiber-20k-stars?", []byte("yes!"), time.Duration(time.Nanosecond/2))
	utils.AssertEqual(t, nil, err)

	b, err := s.Get("fiber-20k-stars?")
	utils.AssertEqual(t, nil, err)
	utils.AssertEqual(t, []byte{}, b)
}
