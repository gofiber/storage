package s3

import (
	"bytes"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/service/s3"
)

// Additional methods for S3, but not required by gofiber Storage interface.

// SetWithChecksum sets key with value and checksum.
// Key of `checksum` map is algorithm in upper cases like `CRC32`, `CRC32C`,
// `SHA1`, `SHA256`, value is the checksum.
func (s *Storage) SetWithChecksum(key string, val []byte, checksum map[string]string) error {
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
			poi.ChecksumCRC32 = aws.String(sum)
		case "CRC32C":
			poi.ChecksumCRC32C = aws.String(sum)
		case "SHA1":
			poi.ChecksumSHA1 = aws.String(sum)
		case "SHA256":
			poi.ChecksumSHA256 = aws.String(sum)
		}
	}

	_, err := s.uploader.Upload(ctx, poi)

	return err
}
