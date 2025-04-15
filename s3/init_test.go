package s3

import (
	"context"
	"os"
	"testing"
	"time"

	"github.com/stretchr/testify/require"
	"github.com/testcontainers/testcontainers-go"
	"github.com/testcontainers/testcontainers-go/modules/minio"
	"github.com/testcontainers/testcontainers-go/wait"
)

const (
	bucket = "testbucket"
)

const (
	// minioImage is the default image used for running S3 in tests.
	minioImage              = "docker.io/minio/minio:latest"
	minioImageEnvVar string = "TEST_MINIO_IMAGE"
	minioUser        string = "minio-user"
	minioPass        string = "minio-password"
)

func newTestStore(t testing.TB) *Storage {
	img := minioImage
	if imgFromEnv := os.Getenv(minioImageEnvVar); imgFromEnv != "" {
		img = imgFromEnv
	}

	ctx := context.Background()

	c, err := minio.Run(ctx,
		img,
		minio.WithUsername(minioUser),
		minio.WithPassword(minioPass),
		testcontainers.WithWaitStrategy(
			wait.ForListeningPort("9000/tcp"),
			wait.ForHTTP("/minio/health/live").WithPort("9000"),
		),
	)
	if err != nil {
		panic(err)
	}

	conn, err := c.ConnectionString(ctx)
	if err != nil {
		panic(err)
	}

	testStore := New(
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
	err = testStore.CreateBucket(bucket)
	require.NoError(t, err)
	// Do not delete test bucket, as the container is disposed after each test.

	return testStore
}
