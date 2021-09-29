package s3

import (
	"fmt"
	"testing"
	"time"

	"github.com/gofiber/utils"
)

var testStore = New(Config{
	Bucket:   "bucket",
	Reset:    true,
	Region:   "ca-central-1",
	Endpoint: "http://localhost:9090",
})

func Test_Upload(t *testing.T) {
	err := testStore.Set("test", []byte("test string of bytes"), 10*time.Hour)
	fmt.Printf("error = %v\n", err)
}

func Test_S3_Close(t *testing.T) {
	utils.AssertEqual(t, nil, testStore.Close())
}
