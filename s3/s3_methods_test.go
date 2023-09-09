package s3

import (
	"crypto/sha256"
	"testing"

	"github.com/aws/aws-sdk-go-v2/service/s3/types"
	"github.com/stretchr/testify/require"
)

func Test_S3_CreateDeleteBucket(t *testing.T) {
	bkt := "test-new-bucket"

	err := testStore.CreateBucket(bkt)
	require.NoError(t, err)

	err = testStore.DeleteBucket(bkt)
	require.NoError(t, err)
}

func Test_S3_SetWithChecksum(t *testing.T) {
	var (
		key = "set-with-checksum"
		val = []byte("doe")
	)

	// Create SHA-256 hash and get checksum.
	sha256Hash := sha256.New()
	sha256Hash.Write(val)
	sha256sum := sha256Hash.Sum(nil)

	checksum := map[types.ChecksumAlgorithm][]byte{
		types.ChecksumAlgorithmSha256: sha256sum,
	}

	err := testStore.SetWithChecksum(key, val, checksum)
	require.NoError(t, err)

	result, err := testStore.Get(key)
	require.NoError(t, err)

	// Compare value.
	require.Equal(t, result, val)

	// Compare checksum.
	hash2 := sha256.New()
	hash2.Write(result)
	sha256sum2 := hash2.Sum(nil)
	require.Equal(t, sha256sum, sha256sum2)
}
