package minio

import (
	"bytes"
	"context"
	"errors"
	"log"
	"net/http"
	"time"

	"github.com/minio/minio-go/v7"
	"github.com/minio/minio-go/v7/pkg/credentials"
)

// Storage interface that is implemented by storage providers
type Storage struct {
	minio *minio.Client
	cfg   Config
	ctx   context.Context
}

// New creates a new storage
func New(config ...Config) *Storage {

	// Set default config
	cfg := configDefault(config...)

	// Minio instance
	minioClient, err := minio.New(cfg.Endpoint, &minio.Options{
		Creds:  credentials.NewStaticV4(cfg.Credentials.accessKeyID, cfg.Credentials.secretAccessKey, cfg.Token),
		Secure: cfg.Secure,
		Region: cfg.Region,
	})
	if err != nil {
		panic(err)
	}

	storage := &Storage{minio: minioClient, cfg: cfg, ctx: context.Background()}

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

// Get value by key
func (s *Storage) Get(key string) ([]byte, error) {

	if len(key) <= 0 {
		return nil, errors.New("the key value is required")
	}

	// check bucket
	err := s.CheckBucket()
	if err != nil {
		return nil, err
	}

	// get object
	object, err := s.minio.GetObject(s.ctx, s.cfg.Bucket, key, s.cfg.GetObjectOptions)
	if err != nil {
		return nil, err
	}

	// convert to byte
	buf := new(bytes.Buffer)
	_, err = buf.ReadFrom(object)
	if err != nil {
		return nil, err
	}

	return buf.Bytes(), nil
}

// Set key with value
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {

	if len(key) <= 0 {
		return errors.New("the key value is required")
	}

	// check bucket
	err := s.CheckBucket()
	if err != nil {
		// create bucket
		err = s.CreateBucket()
		if err != nil {
			return err
		}
	}

	// create Reader
	file := bytes.NewReader(val)

	// set content type
	s.cfg.PutObjectOptions.ContentType = http.DetectContentType(val)

	// put object
	_, err = s.minio.PutObject(s.ctx, s.cfg.Bucket, key, file, file.Size(), s.cfg.PutObjectOptions)

	return err
}

// Delete entry by key
func (s *Storage) Delete(key string) error {

	if len(key) <= 0 {
		return errors.New("the key value is required")
	}

	// check bucket
	err := s.CheckBucket()
	if err != nil {
		return err
	}

	// remove
	err = s.minio.RemoveObject(s.ctx, s.cfg.Bucket, key, s.cfg.RemoveObjectOptions)

	return err
}

// Reset all entries, including unexpired
func (s *Storage) Reset() error {

	// check bucket
	err := s.CheckBucket()
	if err != nil {
		return err
	}

	objectsCh := make(chan minio.ObjectInfo)

	// Send object names that are needed to be removed to objectsCh
	go func() {
		defer close(objectsCh)
		// List all objects from a bucket-name with a matching prefix.
		for object := range s.minio.ListObjects(s.ctx, s.cfg.Bucket, s.cfg.ListObjectsOptions) {
			if object.Err != nil {
				log.Println(object.Err)
			}
			objectsCh <- object
		}
	}()

	opts := minio.RemoveObjectsOptions{
		GovernanceBypass: true,
	}

	for err := range s.minio.RemoveObjects(s.ctx, s.cfg.Bucket, objectsCh, opts) {
		log.Println("Error detected during deletion: ", err)
	}

	return nil
}

// Close the storage
func (s *Storage) Close() error {
	return nil
}

// CheckBucket Check to see if already exist bucket
func (s *Storage) CheckBucket() error {
	exists, err := s.minio.BucketExists(s.ctx, s.cfg.Bucket)
	if !exists || err != nil {
		return errors.New("the specified bucket does not exist")
	}
	return nil
}

// CreateBucket Bucket not found so Make a new bucket
func (s *Storage) CreateBucket() error {
	return s.minio.MakeBucket(s.ctx, s.cfg.Bucket, minio.MakeBucketOptions{Region: s.cfg.Region})
}

// RemoveBucket Bucket remove if bucket is empty
func (s *Storage) RemoveBucket() error {
	return s.minio.RemoveBucket(s.ctx, s.cfg.Bucket)
}
