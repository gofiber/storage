package s3

import (
	"bytes"
	"fmt"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/service/s3"
)

// Additional methods for S3, but not required by gofiber Storage interface.

// SetWithChecksum sets key with value and checksum.
// Key of `checksum` map is algorithm in upper cases, value is the checksum.
// Currently only 4 algorithm are supported: `CRC32`, `CRC32C`, `SHA1`, `SHA256`.
//
// For more information, see [PutObjectInput](https://pkg.go.dev/github.com/aws/aws-sdk-go-v2/service/s3#PutObjectInput).
func (s *Storage) SetWithChecksum(key string, val []byte, checksum map[string][]byte) error {
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
		case "CRC32":
			poi.ChecksumCRC32 = aws.String(fmt.Sprintf("%x", sum))
		case "CRC32C":
			poi.ChecksumCRC32C = aws.String(fmt.Sprintf("%x", sum))
		case "SHA1":
			poi.ChecksumSHA1 = aws.String(fmt.Sprintf("%x", sum))
		case "SHA256":
			poi.ChecksumSHA256 = aws.String(fmt.Sprintf("%x", sum))
		default:
			return fmt.Errorf("invalid checksum algorithm: %s", alg)
		}
	}

	_, err := s.uploader.Upload(ctx, poi)

	return err
}
