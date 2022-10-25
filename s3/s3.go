package s3

import (
	"bytes"
	"context"
	"errors"
	"fmt"
	"time"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/aws/retry"
	awsconfig "github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/credentials"
	"github.com/aws/aws-sdk-go-v2/feature/s3/manager"
	"github.com/aws/aws-sdk-go-v2/service/s3"
	"github.com/aws/aws-sdk-go-v2/service/s3/types"
)

// Storage interface that is implemented by storage providers
type Storage struct {
	svc            *s3.Client
	downloader     *manager.Downloader
	uploader       *manager.Uploader
	requestTimeout time.Duration
	bucket         string
}

// New creates a new storage
func New(config ...Config) *Storage {
	// Set default config
	cfg := configDefault(config...)

	// Create s3 session
	// If config fields of credentials not given, credentials are using from the environment variables, ~/.aws/credentials, or EC2 instance role.
	// If config fields of credentials given, credentials are using from config.
	//
	// Look at: https://aws.github.io/aws-sdk-go-v2/docs/configuring-sdk/#specifying-credentials
	awscfg, err := returnAWSConfig(cfg)
	if err != nil {
		panic(fmt.Sprintf("unable to load SDK config, %v", err))
	}

	sess := s3.NewFromConfig(awscfg)
	storage := &Storage{
		svc:            sess,
		downloader:     manager.NewDownloader(sess),
		uploader:       manager.NewUploader(sess),
		requestTimeout: cfg.RequestTimeout,
		bucket:         cfg.Bucket,
	}

	// Reset all entries if set to true
	if cfg.Reset {
		if err := storage.Reset(); err != nil {
			panic(err)
		}
	}

	return storage
}

// Get value by key
func (s *Storage) Get(key string) ([]byte, error) {
	var nsk *types.NoSuchKey

	if len(key) <= 0 {
		return nil, nil
	}

	ctx, cancel := s.requestContext()
	defer cancel()

	buf := manager.NewWriteAtBuffer([]byte{})

	_, err := s.downloader.Download(ctx, buf, &s3.GetObjectInput{
		Bucket: &s.bucket,
		Key:    aws.String(key),
	})
	if errors.As(err, &nsk) {
		return nil, nil
	}

	return buf.Bytes(), err
}

// Set key with value
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	if len(key) <= 0 {
		return nil
	}

	ctx, cancel := s.requestContext()
	defer cancel()

	_, err := s.uploader.Upload(ctx, &s3.PutObjectInput{
		Bucket: &s.bucket,
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

	_, err := s.svc.DeleteObject(ctx, &s3.DeleteObjectInput{
		Bucket: &s.bucket,
		Key:    aws.String(key),
	})

	return err
}

// Reset all entries, including unexpired
func (s *Storage) Reset() error {
	ctx, cancel := s.requestContext()
	defer cancel()

	paginator := s3.NewListObjectsV2Paginator(s.svc, &s3.ListObjectsV2Input{
		Bucket: &s.bucket,
	})

	for paginator.HasMorePages() {
		page, err := paginator.NextPage(ctx)
		if err != nil {
			return err
		}

		var objects []types.ObjectIdentifier
		for _, object := range page.Contents {
			objects = append(objects, types.ObjectIdentifier{
				Key: object.Key,
			})
		}

		_, err = s.svc.DeleteObjects(ctx, &s3.DeleteObjectsInput{
			Bucket: &s.bucket,
			Delete: &types.Delete{
				Objects: objects,
			},
		})
		if err != nil {
			return err
		}
	}

	return nil
}

// Close the database
func (s *Storage) Close() error {
	return nil
}

// Return database client
func (s *Storage) Conn() *s3.Client {
	return s.svc
}

// Context for making requests will timeout if a non-zero timeout is configured
func (s *Storage) requestContext() (context.Context, context.CancelFunc) {
	if s.requestTimeout > 0 {
		return context.WithTimeout(context.Background(), s.requestTimeout)
	}
	return context.Background(), func() {}
}

func returnAWSConfig(cfg Config) (aws.Config, error) {
	endpoint := aws.EndpointResolverWithOptionsFunc(func(service, region string, options ...interface{}) (aws.Endpoint, error) {
		if cfg.Endpoint != "" {
			return aws.Endpoint{
				PartitionID:       "aws",
				URL:               cfg.Endpoint,
				SigningRegion:     cfg.Region,
				HostnameImmutable: true,
			}, nil
		}
		return aws.Endpoint{}, &aws.EndpointNotFoundError{}
	})

	if cfg.Credentials != (Credentials{}) {
		credentials := credentials.NewStaticCredentialsProvider(cfg.Credentials.AccessKey, cfg.Credentials.SecretAccessKey, "")
		return awsconfig.LoadDefaultConfig(context.TODO(),
			awsconfig.WithRegion(cfg.Region),
			awsconfig.WithEndpointResolverWithOptions(endpoint),
			awsconfig.WithCredentialsProvider(credentials),
			awsconfig.WithRetryer(func() aws.Retryer {
				return retry.AddWithMaxAttempts(retry.NewStandard(), cfg.MaxAttempts)
			}),
		)
	}

	return awsconfig.LoadDefaultConfig(context.TODO(),
		awsconfig.WithRegion(cfg.Region),
		awsconfig.WithEndpointResolverWithOptions(endpoint),
		awsconfig.WithRetryer(func() aws.Retryer {
			return retry.AddWithMaxAttempts(retry.NewStandard(), cfg.MaxAttempts)
		}),
	)
}
