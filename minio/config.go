package minio

import (
	"github.com/minio/minio-go/v7"
)

// Config defines the config for storage.
type Config struct {
	// Minio bucket name
	Bucket string

	// Minio endpoint
	Endpoint string

	// Minio region
	Region string

	// Minio token
	Token string

	// Minio secure
	Secure bool

	// Reset clears any existing keys in existing Bucket
	// Optional. Default is false
	Reset bool

	// Credentials overrides Minio access key and Minio secret key. Not recommended.
	// Optional. Default is Credentials{}
	Credentials Credentials

	// Get object options
	GetObjectOptions minio.GetObjectOptions

	// Put object options
	PutObjectOptions minio.PutObjectOptions

	// List object options
	ListObjectsOptions minio.ListObjectsOptions

	// Remove object options
	RemoveObjectOptions minio.RemoveObjectOptions
}

type Credentials struct {
	accessKeyID     string
	secretAccessKey string
}

// ConfigDefault is the default config
var ConfigDefault = Config{
	Bucket:              "",
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
