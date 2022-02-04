package dynamodb

import "github.com/aws/aws-sdk-go-v2/aws"

// Config defines the config for storage.
type Config struct {
	// Region of the DynamoDB service you want to use.
	// Valid values: https://docs.aws.amazon.com/general/latest/gr/rande.html#ddb_region.
	// E.g. "us-west-2".
	// Optional (read from shared config file or environment variable if not set).
	// Environment variable: "AWS_REGION".
	Region string

	// Name of the DynamoDB table.
	// Optional ("fiber_storage" by default).
	Table string

	// CustomEndpoint allows you to set a custom DynamoDB service endpoint.
	// This is especially useful if you're running a "DynamoDB local" Docker container for local testing.
	// Typical value for the Docker container: "http://localhost:8000".
	// See https://hub.docker.com/r/amazon/dynamodb-local/.
	// Optional ("" by default)
	Endpoint string

	// Credentials overrides AWS access key and AWS secret access key. Not recommended.
	//
	// Optional. Default is Credentials{}
	Credentials Credentials

	// The maximum number of times requests that encounter retryable failures should be attempted.
	//
	// Optional. Default is 3
	MaxAttempts int

	// Reset clears any existing keys in existing Bucket
	//
	// Optional. Default is false
	Reset bool

	// ReadCapacityUnits of the table.
	// Only required when the table doesn't exist yet and is created by gokv.
	// Optional (5 by default, which is the same default value as when creating a table in the web console)
	// 25 RCUs are included in the free tier (across all tables).
	// For example calculations, see https://github.com/awsdocs/amazon-dynamodb-developer-guide/blob/c420420a59040c5b3dd44a6e59f7c9e55fc922ef/doc_source/HowItWorks.ProvisionedThroughput.
	// For limits, see https://github.com/awsdocs/amazon-dynamodb-developer-guide/blob/c420420a59040c5b3dd44a6e59f7c9e55fc922ef/doc_source/Limits.md#capacity-units-and-provisioned-throughput.md#provisioned-throughput.
	ReadCapacityUnits int64

	// ReadCapacityUnits of the table.
	// Only required when the table doesn't exist yet and is created by gokv.
	// Optional (5 by default, which is the same default value as when creating a table in the web console)
	// 25 RCUs are included in the free tier (across all tables).
	// For example calculations, see https://github.com/awsdocs/amazon-dynamodb-developer-guide/blob/c420420a59040c5b3dd44a6e59f7c9e55fc922ef/doc_source/HowItWorks.ProvisionedThroughput.
	// For limits, see https://github.com/awsdocs/amazon-dynamodb-developer-guide/blob/c420420a59040c5b3dd44a6e59f7c9e55fc922ef/doc_source/Limits.md#capacity-units-and-provisioned-throughput.md#provisioned-throughput.
	WriteCapacityUnits int64

	// If the table doesn't exist yet, gokv creates it.
	// If WaitForTableCreation is true, gokv will block until the table is created, with a timeout of 15 seconds.
	// If the table still doesn't exist after 15 seconds, an error is returned.
	// If WaitForTableCreation is false, gokv returns the client immediately.
	// In the latter case you need to make sure that you don't read from or write to the table before it's created,
	// because otherwise you will get ResourceNotFoundException errors.
	// Optional (true by default).
	WaitForTableCreation *bool
}

type Credentials struct {
	AccessKey       string
	SecretAccessKey string
}

// ConfigDefault is the default config
var ConfigDefault = Config{
	Table:                "fiber_storage",
	Credentials:          Credentials{},
	MaxAttempts:          3,
	Reset:                false,
	ReadCapacityUnits:    5,
	WriteCapacityUnits:   5,
	WaitForTableCreation: aws.Bool(true),
}

// configDefault is a helper function to set default values
func configDefault(config ...Config) Config {
	// Return default config if nothing provided
	if len(config) < 1 {
		return ConfigDefault
	}

	// Override default config
	cfg := config[0]

	// Set default values
	if cfg.Table == "" {
		cfg.Table = ConfigDefault.Table
	}
	if cfg.MaxAttempts == 0 {
		cfg.MaxAttempts = ConfigDefault.MaxAttempts
	}
	if cfg.ReadCapacityUnits == 0 {
		cfg.ReadCapacityUnits = ConfigDefault.ReadCapacityUnits
	}
	if cfg.WriteCapacityUnits == 0 {
		cfg.WriteCapacityUnits = ConfigDefault.WriteCapacityUnits
	}
	if cfg.WaitForTableCreation == nil {
		cfg.WaitForTableCreation = ConfigDefault.WaitForTableCreation
	}

	return cfg
}
