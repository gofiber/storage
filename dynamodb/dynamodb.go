package dynamodb

import (
	"context"
	"errors"
	"fmt"
	"time"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/aws/retry"
	awsconfig "github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/credentials"
	"github.com/aws/aws-sdk-go-v2/feature/dynamodb/attributevalue"
	awsdynamodb "github.com/aws/aws-sdk-go-v2/service/dynamodb"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb/types"
)

// Storage interface that is implemented by storage providers
type Storage struct {
	db             *awsdynamodb.Client
	table          string
	requestTimeout time.Duration
}

// "k" is used as table column name for the key.
var keyAttrName = "k"

// "v" is used as table column name for the value.
var valAttrName = "v"

type table struct {
	K string
	V []byte
}

// New creates a new storage
func New(config Config) *Storage {
	// Set default config
	cfg := configDefault(config)

	awscfg, err := returnAWSConfig(cfg)
	if err != nil {
		panic(fmt.Sprintf("unable to load SDK config, %v", err))
	}

	// Create db
	sess := awsdynamodb.NewFromConfig(awscfg, func(o *awsdynamodb.Options) {
		o.BaseEndpoint = aws.String(cfg.Endpoint)
	})

	timeoutCtx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	describeTableInput := awsdynamodb.DescribeTableInput{
		TableName: &cfg.Table,
	}

	// Create storage
	store := &Storage{
		db:    sess,
		table: cfg.Table,
	}

	// Create table
	_, err = sess.DescribeTable(timeoutCtx, &describeTableInput)
	if err != nil {
		var rnfe *types.ResourceNotFoundException
		if errors.As(err, &rnfe) {
			err := store.createTable(cfg, describeTableInput)
			if err != nil {
				panic(err)
			}
		} else {
			panic(err)
		}
	}

	return store
}

// Get value by key
func (s *Storage) Get(key string) ([]byte, error) {
	ctx, cancel := s.requestContext()
	defer cancel()

	k := make(map[string]types.AttributeValue)
	k[keyAttrName] = &types.AttributeValueMemberS{
		Value: key,
	}
	getItemInput := awsdynamodb.GetItemInput{
		TableName: &s.table,
		Key:       k,
	}
	getItemOutput, err := s.db.GetItem(ctx, &getItemInput)
	if err != nil {
		var rnfe *types.ResourceNotFoundException
		if errors.As(err, &rnfe) {
			return nil, nil
		}

		return nil, err
	} else if getItemOutput.Item == nil {
		return nil, nil
	}

	item := &table{}
	err = attributevalue.UnmarshalMap(getItemOutput.Item, &item)

	return item.V, err
}

// Set key with value
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	ctx, cancel := s.requestContext()
	defer cancel()

	// Ain't Nobody Got Time For That
	if len(key) <= 0 || len(val) <= 0 {
		return nil
	}

	item := make(map[string]types.AttributeValue)
	item[keyAttrName] = &types.AttributeValueMemberS{
		Value: key,
	}
	item[valAttrName] = &types.AttributeValueMemberB{
		Value: val,
	}
	putItemInput := awsdynamodb.PutItemInput{
		TableName: &s.table,
		Item:      item,
	}

	_, err := s.db.PutItem(ctx, &putItemInput)
	return err
}

// Delete entry by key
func (s *Storage) Delete(key string) error {
	ctx, cancel := s.requestContext()
	defer cancel()

	// Ain't Nobody Got Time For That
	if len(key) <= 0 {
		return nil
	}

	k := make(map[string]types.AttributeValue)
	k[keyAttrName] = &types.AttributeValueMemberS{
		Value: key,
	}
	deleteItemInput := awsdynamodb.DeleteItemInput{
		TableName: &s.table,
		Key:       k,
	}

	_, err := s.db.DeleteItem(ctx, &deleteItemInput)
	return err
}

// Reset all entries, including unexpired
func (s *Storage) Reset() error {
	ctx, cancel := s.requestContext()
	defer cancel()

	deleteTableInput := awsdynamodb.DeleteTableInput{
		TableName: &s.table,
	}
	_, err := s.db.DeleteTable(ctx, &deleteTableInput)
	return err
}

// Close the database
func (s *Storage) Close() error {
	return nil
}

func (s *Storage) createTable(cfg Config, describeTableInput awsdynamodb.DescribeTableInput) error {
	ctx, cancel := s.requestContext()
	defer cancel()

	keyAttrType := "S" // For "string"
	keyType := "HASH"  // As opposed to "RANGE"

	createTableInput := awsdynamodb.CreateTableInput{
		TableName: &s.table,
		AttributeDefinitions: []types.AttributeDefinition{{
			AttributeName: &keyAttrName,
			AttributeType: types.ScalarAttributeType(keyAttrType),
		}},
		KeySchema: []types.KeySchemaElement{{
			AttributeName: &keyAttrName,
			KeyType:       types.KeyType(keyType),
		}},
		ProvisionedThroughput: &types.ProvisionedThroughput{
			ReadCapacityUnits:  &cfg.ReadCapacityUnits,
			WriteCapacityUnits: &cfg.WriteCapacityUnits,
		},
	}
	_, err := s.db.CreateTable(ctx, &createTableInput)
	if err != nil {
		return err
	}
	// If configured (true by default), block until the table is created.
	// Typical table creation duration is 10 seconds.
	if *cfg.WaitForTableCreation {
		for try := 1; try < 16; try++ {
			describeTableOutput, err := s.db.DescribeTable(ctx, &describeTableInput)
			if err != nil || describeTableOutput.Table.TableStatus == "CREATING" {
				time.Sleep(1 * time.Second)
			} else {
				break
			}
		}
		// Last try (16th) after 15 seconds of waiting.
		// Now handle error as such.
		describeTableOutput, err := s.db.DescribeTable(ctx, &describeTableInput)
		if err != nil {
			return errors.New("dynamodb: the table couldn't be created")
		}
		if describeTableOutput.Table.TableStatus == "CREATING" {
			return errors.New("dynamodb: the table took too long to be created")
		}
	}

	return nil
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
		credentials := credentials.NewStaticCredentialsProvider(cfg.Credentials.AccessKey, cfg.Credentials.SecretAccessKey, "")
		return awsconfig.LoadDefaultConfig(context.TODO(),
			awsconfig.WithRegion(cfg.Region),
			awsconfig.WithCredentialsProvider(credentials),
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

// Return database client
func (s *Storage) Conn() *awsdynamodb.Client {
	return s.db
}
