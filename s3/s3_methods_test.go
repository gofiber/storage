package s3

import (
	"crypto/sha256"
	"testing"

	"github.com/stretchr/testify/require"
)

func Test_S3_SetWithChecksum(t *testing.T) {
	var (
		key       = "john"
		val       = []byte("doe")
		sha256sum = sha256.New().Sum(val)
	)

	err := testStore.SetWithChecksum(key, val, map[string]string{"SHA256": string(sha256sum)})
	require.NoError(t, err)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, sha256sum, sha256.New().Sum(result))
}
