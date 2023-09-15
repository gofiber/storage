package s3

import (
	"os"
	"testing"
	"time"
)

const (
	bucket = "testbucket"
)

var testStore *Storage

func TestMain(m *testing.M) {
	testStore = New(
		Config{
			Bucket:   bucket,
			Endpoint: "http://127.0.0.1:9000/",
			Region:   "us-east-1",
			Credentials: Credentials{
				AccessKey:       "minio-user",
				SecretAccessKey: "minio-password",
			},
			RequestTimeout: 3 * time.Second,
		},
	)

	// Create test bucket.
	_ = testStore.CreateBucket(bucket)

	exitVal := m.Run()

	// Delete test bucket.
	_ = testStore.DeleteBucket(bucket)

	os.Exit(exitVal)
}
