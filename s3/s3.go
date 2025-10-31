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
	smithyendpoints "github.com/aws/smithy-go/endpoints"
)

// Storage interface that is implemented by storage providers
type Storage struct {
	svc            *s3.Client
	downloader     *manager.Downloader
	uploader       *manager.Uploader
	requestTimeout time.Duration
	bucket         string
}

// resolverV2 is a custom endpoint resolver for S3
type resolverV2 struct{}

// ResolveEndpoint is a custom endpoint resolver for S3.
// It is used to set the endpoint to the S3 bucket.
func (*resolverV2) ResolveEndpoint(ctx context.Context, params s3.EndpointParameters) (
	smithyendpoints.Endpoint, error,
) {
	// delegate back to the default v2 resolver otherwise
	return s3.NewDefaultEndpointResolverV2().ResolveEndpoint(ctx, params)
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

	// reference: https://docs.aws.amazon.com/sdk-for-go/v2/developer-guide/configure-endpoints.html#with-both
	sess := s3.NewFromConfig(awscfg, func(o *s3.Options) {
		o.BaseEndpoint = aws.String(cfg.Endpoint)
		o.EndpointResolverV2 = &resolverV2{}
		o.UsePathStyle = true
	})

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

// GetWithContext gets value by key with context
func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error) {
	var nsk *types.NoSuchKey

	if len(key) <= 0 {
		return nil, nil
	}

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

// Get gets value by key
func (s *Storage) Get(key string) ([]byte, error) {
	ctx, cancel := s.requestContext()
	defer cancel()

	return s.GetWithContext(ctx, key)
}

// SetWithContext key with value and expiration time with context
func (s *Storage) SetWithContext(ctx context.Context, key string, val []byte, exp time.Duration) error {
	if len(key) <= 0 {
		return nil
	}

	_, err := s.uploader.Upload(ctx, &s3.PutObjectInput{
		Bucket: &s.bucket,
		Key:    aws.String(key),
		Body:   bytes.NewReader(val),
	})

	return err
}

// Set key with value and expiration time
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	ctx, cancel := s.requestContext()
	defer cancel()

	return s.SetWithContext(ctx, key, val, exp)
}

// DeleteWithContext deletes entry by key with context
func (s *Storage) DeleteWithContext(ctx context.Context, key string) error {
	if len(key) <= 0 {
		return nil
	}

	_, err := s.svc.DeleteObject(ctx, &s3.DeleteObjectInput{
		Bucket: &s.bucket,
		Key:    aws.String(key),
	})

	return err
}

// Delete deletes entry by key
func (s *Storage) Delete(key string) error {
	ctx, cancel := s.requestContext()
	defer cancel()

	return s.DeleteWithContext(ctx, key)
}

// ResetWithContext resets all entries, including unexpired ones with context
func (s *Storage) ResetWithContext(ctx context.Context) error {
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

// Reset resets all entries, including unexpired ones
func (s *Storage) Reset() error {
	ctx, cancel := s.requestContext()
	defer cancel()

	return s.ResetWithContext(ctx)
}

// Close the database
func (s *Storage) Close() error {
	return nil
}

// Conn returns database client.
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
	if cfg.Credentials != (Credentials{}) {
		creds := credentials.NewStaticCredentialsProvider(cfg.Credentials.AccessKey, cfg.Credentials.SecretAccessKey, "")
		return awsconfig.LoadDefaultConfig(context.TODO(),
			awsconfig.WithRegion(cfg.Region),
			awsconfig.WithCredentialsProvider(creds),
			awsconfig.WithRetryer(func() aws.Retryer {
				return retry.AddWithMaxAttempts(retry.NewStandard(), cfg.MaxAttempts)
			}),
		)
	}

	return awsconfig.LoadDefaultConfig(context.TODO(),
		awsconfig.WithRegion(cfg.Region),
		awsconfig.WithRetryer(func() aws.Retryer {
			return retry.AddWithMaxAttempts(retry.NewStandard(), cfg.MaxAttempts)
		}),
	)
}
