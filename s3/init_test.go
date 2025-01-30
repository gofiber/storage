package s3

import (
	"context"
	"os"
	"testing"
	"time"

	"github.com/testcontainers/testcontainers-go/modules/minio"
)

const (
	bucket = "testbucket"
)

var testStore *Storage

const (
	// minioImage is the default image used for running S3 in tests.
	minioImage              = "docker.io/minio/minio:RELEASE.2024-08-17T01-24-54Z"
	minioImageEnvVar string = "TEST_MINIO_IMAGE"
	minioUser        string = "minio-user"
	minioPass        string = "minio-password"
)

func TestMain(m *testing.M) {
	img := minioImage
	if imgFromEnv := os.Getenv(minioImageEnvVar); imgFromEnv != "" {
		img = imgFromEnv
	}

	ctx := context.Background()

	c, err := minio.Run(ctx,
		img,
		minio.WithUsername(minioUser),
		minio.WithPassword(minioPass),
	)
	if err != nil {
		panic(err)
	}

	conn, err := c.ConnectionString(ctx)
	if err != nil {
		panic(err)
	}

	testStore = New(
		Config{
			Bucket:   bucket,
			Endpoint: "http://" + conn,
			Region:   "us-east-1",
			Credentials: Credentials{
				AccessKey:       minioUser,
				SecretAccessKey: minioPass,
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
