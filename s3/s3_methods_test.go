package s3

import (
	"crypto/sha256"
	"testing"

	"github.com/aws/aws-sdk-go-v2/service/s3/types"
	"github.com/stretchr/testify/require"
)

var testStore = New(
	Config{
		Bucket:   "testbucket",
		Endpoint: "http://127.0.0.1:9000/",
		Region:   "us-east-1",
		Credentials: Credentials{
			AccessKey:       "minioadmin",
			SecretAccessKey: "minioadmin",
		},
	},
)

func Test_S3_SetWithChecksum(t *testing.T) {
	var (
		key       = "john"
		val       = []byte("doe")
		sha256sum = sha256.New().Sum(val)
		checksum  = map[types.ChecksumAlgorithm][]byte{
			types.ChecksumAlgorithmSha256: sha256sum,
		}
	)

	err := testStore.SetWithChecksum(key, val, checksum)
	require.NoError(t, err)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, sha256sum, sha256.New().Sum(result))
}
