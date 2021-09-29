package s3

import (
	"testing"

	"github.com/gofiber/utils"
)

var testStore = New(Config{
	Reset: true,
})

func Test_S3_Close(t *testing.T) {
	utils.AssertEqual(t, nil, testStore.Close())
}
