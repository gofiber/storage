package s3

import (
	"bytes"
	"encoding/base64"
	"fmt"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/service/s3"
	"github.com/aws/aws-sdk-go-v2/service/s3/types"
)

// Additional methods for S3, but not required by gofiber Storage interface.

// CreateBucket creates a new bucket.
func (s *Storage) CreateBucket(bucket string) error {
	ctx, cancel := s.requestContext()
	defer cancel()

	_, err := s.svc.CreateBucket(ctx, &s3.CreateBucketInput{
		Bucket: aws.String(bucket),
	})

	return err
}

// DeleteBucket deletes a bucket.
func (s *Storage) DeleteBucket(bucket string) error {
	ctx, cancel := s.requestContext()
	defer cancel()

	_, err := s.svc.DeleteBucket(ctx, &s3.DeleteBucketInput{
		Bucket: aws.String(bucket),
	})

	return err
}

// DeleteMany entries by keys.
func (s *Storage) DeleteMany(keys ...string) error {
	if len(keys) <= 0 {
		return nil
	}

	var objects []types.ObjectIdentifier
	for _, k := range keys {
		objects = append(objects, types.ObjectIdentifier{
			Key: aws.String(k),
		})
	}

	ctx, cancel := s.requestContext()
	defer cancel()

	_, err := s.svc.DeleteObjects(ctx, &s3.DeleteObjectsInput{
		Bucket: &s.bucket,
		Delete: &types.Delete{
			Objects: objects,
		},
	})

	return err
}

// SetWithChecksum sets key with value and checksum.
//
// Currently 4 algorithms are supported:
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

	poi := s3.PutObjectInput{
		Bucket: &s.bucket,
		Key:    aws.String(key),
		Body:   bytes.NewReader(val),
	}

	for alg, sum := range checksum {
		// S3 requires base64 encoded checksum.
		b64str := base64.StdEncoding.EncodeToString(sum)

		switch alg {
		case types.ChecksumAlgorithmCrc32:
			poi.ChecksumCRC32 = aws.String(b64str)
		case types.ChecksumAlgorithmCrc32c:
			poi.ChecksumCRC32C = aws.String(b64str)
		case types.ChecksumAlgorithmSha1:
			poi.ChecksumSHA1 = aws.String(b64str)
		case types.ChecksumAlgorithmSha256:
			poi.ChecksumSHA256 = aws.String(b64str)
		default:
			return fmt.Errorf("invalid checksum algorithm: %s", alg)
		}
	}

	ctx, cancel := s.requestContext()
	defer cancel()

	_, err := s.uploader.Upload(ctx, &poi)

	return err
}
