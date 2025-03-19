package minio

import (
	"bytes"
	"context"
	"errors"
	"log"
	"net/http"
	"sync"
	"time"

	"github.com/minio/minio-go/v7"
	"github.com/minio/minio-go/v7/pkg/credentials"
	"github.com/valyala/bytebufferpool"
)

// Storage interface that is implemented by storage providers
type Storage struct {
	minio *minio.Client
	cfg   Config
	mu    sync.Mutex
}

// New creates a new storage
func New(config ...Config) *Storage {

	// Set default config
	cfg := configDefault(config...)

	// Set MaxRetry
	minio.MaxRetry = cfg.MaxRetry

	// Minio instance
	minioClient, err := minio.New(cfg.Endpoint, &minio.Options{
		Creds:  credentials.NewStaticV4(cfg.Credentials.AccessKeyID, cfg.Credentials.SecretAccessKey, cfg.Token),
		Secure: cfg.Secure,
		Region: cfg.Region,
	})
	if err != nil {
		panic(err)
	}

	storage := &Storage{minio: minioClient, cfg: cfg}

	// Reset all entries if set to true
	if cfg.Reset {
		if err = storage.Reset(); err != nil {
			panic(err)
		}
	}

	// check bucket
	err = storage.CheckBucket()
	if err != nil {
		// create bucket
		err = storage.CreateBucket()
		if err != nil {
			panic(err)
		}
	}

	return storage
}

// GetWithContext value by key with context
func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error) {
	if len(key) <= 0 {
		return nil, errors.New("the key value is required")
	}

	// get object
	object, err := s.minio.GetObject(ctx, s.cfg.Bucket, key, s.cfg.GetObjectOptions)
	if err != nil {
		return nil, err
	}
	defer object.Close()

	// convert to byte
	bb := bytebufferpool.Get()
	defer bytebufferpool.Put(bb)
	_, err = bb.ReadFrom(object)
	if err != nil {
		return nil, err
	}
	return bb.Bytes(), nil
}

// Get value by key
func (s *Storage) Get(key string) ([]byte, error) {
	return s.GetWithContext(context.Background(), key)
}

// SetWithContext key with value with context
func (s *Storage) SetWithContext(ctx context.Context, key string, val []byte, exp time.Duration) error {
	if len(key) <= 0 {
		return errors.New("the key value is required")
	}

	// create Reader
	file := bytes.NewReader(val)

	// set content type
	s.mu.Lock()
	s.cfg.PutObjectOptions.ContentType = http.DetectContentType(val)

	// put object
	_, err := s.minio.PutObject(ctx, s.cfg.Bucket, key, file, file.Size(), s.cfg.PutObjectOptions)
	s.mu.Unlock()

	return err
}

// Set key with value
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	return s.SetWithContext(context.Background(), key, val, exp)
}

// DeleteWithContext key with value with context
func (s *Storage) DeleteWithContext(ctx context.Context, key string) error {
	if len(key) <= 0 {
		return errors.New("the key value is required")
	}

	// remove
	err := s.minio.RemoveObject(ctx, s.cfg.Bucket, key, s.cfg.RemoveObjectOptions)

	return err
}

// Delete entry by key
func (s *Storage) Delete(key string) error {
	return s.DeleteWithContext(context.Background(), key)
}

// ResetWithContext all keys with context
func (s *Storage) ResetWithContext(ctx context.Context) error {
	objectsCh := make(chan minio.ObjectInfo)

	// Send object names that are needed to be removed to objectsCh
	go func() {
		defer close(objectsCh)
		// List all objects from a bucket-name with a matching prefix.
		for object := range s.minio.ListObjects(ctx, s.cfg.Bucket, s.cfg.ListObjectsOptions) {
			if object.Err != nil {
				log.Println(object.Err)
			}
			objectsCh <- object
		}
	}()

	opts := minio.RemoveObjectsOptions{
		GovernanceBypass: true,
	}

	for err := range s.minio.RemoveObjects(ctx, s.cfg.Bucket, objectsCh, opts) {
		log.Println("Error detected during deletion: ", err)
	}

	return nil
}

func (s *Storage) Reset() error {
	return s.ResetWithContext(context.Background())
}

// Close the storage
func (s *Storage) Close() error {
	return nil
}

// CheckBucket Check to see if bucket already exists
func (s *Storage) CheckBucket() error {
	exists, err := s.minio.BucketExists(context.Background(), s.cfg.Bucket)
	if !exists || err != nil {
		return errors.New("the specified bucket does not exist")
	}
	return nil
}

// CreateBucket Bucket not found so Make a new bucket
func (s *Storage) CreateBucket() error {
	return s.minio.MakeBucket(context.Background(), s.cfg.Bucket, minio.MakeBucketOptions{Region: s.cfg.Region})
}

// RemoveBucket Bucket remove if bucket is empty
func (s *Storage) RemoveBucket() error {
	return s.minio.RemoveBucket(context.Background(), s.cfg.Bucket)
}

// Conn Return minio client
func (s *Storage) Conn() *minio.Client {
	return s.minio
}
