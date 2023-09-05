package s3

import (
	"bytes"
	"encoding/hex"
	"fmt"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/service/s3"
	"github.com/aws/aws-sdk-go-v2/service/s3/types"
)

// Additional methods for S3, but not required by gofiber Storage interface.

// SetWithChecksum sets key with value and checksum.
// Key of `checksum` map is algorithm in upper cases, value is the checksum.
// Currently only 4 algorithm are supported:
//   - types.ChecksumAlgorithmCrc32 (`CRC32`)
//   - types.ChecksumAlgorithmCrc32c (`CRC32C`)
//   - types.ChecksumAlgorithmSha1 (`SHA1`)
//   - types.ChecksumAlgorithmSha256 (`SHA256`)
//
// For more information, see [PutObjectInput](https://pkg.go.dev/github.com/aws/aws-sdk-go-v2/service/s3#PutObjectInput).
func (s *Storage) SetWithChecksum(key string, val []byte, checksum map[types.ChecksumAlgorithm][]byte) error {
	if len(key) <= 0 {
		return nil
	}

	ctx, cancel := s.requestContext()
	defer cancel()

	poi := &s3.PutObjectInput{
		Bucket: &s.bucket,
		Key:    aws.String(key),
		Body:   bytes.NewReader(val),
	}

	for alg, sum := range checksum {
		switch alg {
		case types.ChecksumAlgorithmCrc32:
			poi.ChecksumCRC32 = aws.String(hex.EncodeToString(sum))
		case types.ChecksumAlgorithmCrc32c:
			poi.ChecksumCRC32C = aws.String(hex.EncodeToString(sum))
		case types.ChecksumAlgorithmSha1:
			poi.ChecksumSHA1 = aws.String(hex.EncodeToString(sum))
		case types.ChecksumAlgorithmSha256:
			poi.ChecksumSHA256 = aws.String(hex.EncodeToString(sum))
		default:
			return fmt.Errorf("invalid checksum algorithm: %s", alg)
		}
	}

	_, err := s.uploader.Upload(ctx, poi)

	return err
}
