package s3

import (
	"bytes"
	"context"
	"time"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/s3"
	"github.com/aws/aws-sdk-go/service/s3/s3manager"
)

// Storage interface that is implemented by storage providers
type Storage struct {
	sess       *session.Session
	svc        *s3.S3
	uploader   *s3manager.Uploader
	downloader *s3manager.Downloader
	timeout    time.Duration
	bucket     string
}

// New creates a new storage
func New(config ...Config) *Storage {
	// Set default config
	cfg := configDefault(config...)

	// Create s3 session
	// Credentials must be given in the environment, ~/.aws/credentials, or EC2 instance role
	sess, err := session.NewSession(&aws.Config{
		Endpoint:         aws.String(cfg.Endpoint),
		Region:           aws.String(cfg.Region),
		S3ForcePathStyle: aws.Bool(true),
	})
	if err != nil {
		panic(err)
	}

	// Create s3 API
	svc := s3.New(sess)

	// Create s3 uploader
	uploader := s3manager.NewUploader(sess)

	// Create s3 downloader
	downloader := s3manager.NewDownloader(sess)

	// Create storage
	store := &Storage{
		sess:       sess,
		svc:        svc,
		uploader:   uploader,
		downloader: downloader,
		bucket:     cfg.Bucket,
		timeout:    cfg.Timeout,
	}

	// Empty bucket if set to true
	if cfg.Reset {
		store.Reset()
	}

	return store
}

// Get value by key
func (s *Storage) Get(key string) ([]byte, error) {
	if len(key) <= 0 {
		return nil, nil
	}

	buf := aws.NewWriteAtBuffer([]byte{})

	_, err := s.downloader.Download(buf, &s3.GetObjectInput{
		Bucket: aws.String(s.bucket),
		Key:    aws.String(key),
	})

	return buf.Bytes(), err
}

// Set key with value
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	if len(key) <= 0 || len(val) <= 0 {
		return nil
	}

	ctx, cancel := s.requestContext()
	defer cancel()

	_, err := s.uploader.UploadWithContext(ctx, &s3manager.UploadInput{
		Bucket: aws.String(s.bucket),
		Key:    aws.String(key),
		Body:   bytes.NewReader(val),
	})
	return err
}

// Delete entry by key
func (s *Storage) Delete(key string) error {
	if len(key) <= 0 {
		return nil
	}

	ctx, cancel := s.requestContext()
	defer cancel()

	_, err := s.svc.DeleteObjectWithContext(ctx, &s3.DeleteObjectInput{
		Bucket: aws.String(s.bucket),
		Key:    aws.String(key),
	})

	return err
}

// Reset all entries, including unexpired
func (s *Storage) Reset() error {
	iter := s3manager.NewDeleteListIterator(s.svc, &s3.ListObjectsInput{
		Bucket: aws.String(s.bucket),
	})
	err := s3manager.NewBatchDeleteWithClient(s.svc).Delete(aws.BackgroundContext(), iter)
	return err
}

// Close the database
func (s *Storage) Close() error {
	return nil
}

// Context for making requests will timeout if a non-zero timeout is configured
func (s *Storage) requestContext() (context.Context, context.CancelFunc) {
	if s.timeout > 0 {
		return context.WithTimeout(context.Background(), s.timeout)
	}
	return context.Background(), func() {}
}
