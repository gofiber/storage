package minio

import (
	"github.com/minio/minio-go/v7"
)

// Config defines the config for storage.
type Config struct {
	// Bucket
	// Default fiber-bucket
	Bucket string

	// Endpoint is a host name or an IP address
	Endpoint string

	// Region Set this value to override region cache
	// Optional
	Region string

	// Token Set this value to provide x-amz-security-token (AWS S3 specific)
	// Optional, Default is false
	Token string

	// Secure If set to true, https is used instead of http.
	// Default is false
	Secure bool

	// Reset clears any existing keys in existing Bucket
	// Optional. Default is false
	Reset bool

	// Credentials Minio access key and Minio secret key.
	// Need to be defined
	Credentials Credentials

	// GetObjectOptions Options for GET requests specifying additional options like encryption, If-Match
	GetObjectOptions minio.GetObjectOptions

	// PutObjectOptions
	// Allows user to set optional custom metadata, content headers, encryption keys and number of threads for multipart upload operation.
	PutObjectOptions minio.PutObjectOptions

	// ListObjectsOptions Options per to list objects
	ListObjectsOptions minio.ListObjectsOptions

	// RemoveObjectOptions Allows user to set options
	RemoveObjectOptions minio.RemoveObjectOptions
}

type Credentials struct {
	// accessKeyID is like user-id that uniquely identifies your account.
	accessKeyID string
	// secretAccessKey is the password to your account.
	secretAccessKey string
}

// ConfigDefault is the default config
var ConfigDefault = Config{
	Bucket:              "fiber-bucket",
	Endpoint:            "",
	Region:              "",
	Token:               "",
	Secure:              false,
	Reset:               false,
	Credentials:         Credentials{},
	GetObjectOptions:    minio.GetObjectOptions{},
	PutObjectOptions:    minio.PutObjectOptions{},
	ListObjectsOptions:  minio.ListObjectsOptions{},
	RemoveObjectOptions: minio.RemoveObjectOptions{},
}

// Helper function to set default values
func configDefault(config ...Config) Config {
	// Return default config if nothing provided
	if len(config) < 1 {
		return ConfigDefault
	}

	// Override default config
	cfg := config[0]

	// Set default values
	if cfg.Bucket == "" {
		cfg.Bucket = ConfigDefault.Bucket
	}

	return cfg
}
