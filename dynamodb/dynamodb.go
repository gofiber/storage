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
	db    *awsdynamodb.Client
	table string
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
// New creates a new DynamoDB storage using context.Background() for initialization.
func New(config Config) *Storage {
	return NewWithContext(context.Background(), config)
}

// NewWithContext creates a new DynamoDB storage, using ctx as the parent context
// for the initialization operations (table description and creation).
func NewWithContext(ctx context.Context, config Config) *Storage {
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

	return newStorage(ctx, sess, cfg)
}

// NewFromConnection creates a DynamoDB storage on an existing client, using context.Background()
// for the initialization operations.
func NewFromConnection(db *awsdynamodb.Client, config Config) *Storage {
	return NewFromConnectionWithContext(context.Background(), db, config)
}

// NewFromConnectionWithContext creates a DynamoDB storage on an existing client, which stays the
// caller's to manage, using ctx as the parent context for the initialization operations (optional
// reset, table description and creation). Only the table options and Reset are read; the endpoint
// and credentials come from the client. Reset drops the table and recreates it empty.
func NewFromConnectionWithContext(ctx context.Context, db *awsdynamodb.Client, config Config) *Storage {
	if db == nil {
		panic("dynamodb: nil client")
	}

	return newStorage(ctx, db, configDefault(config))
}

// batchWriteItemLimit is the number of write requests DynamoDB accepts in one BatchWriteItem.
const batchWriteItemLimit = 25

// batchWriteMaxAttempts bounds the retries of items DynamoDB leaves unprocessed, so a reset
// cannot spin forever against a table that keeps declining the work.
const batchWriteMaxAttempts = 10

// newStorage prepares the table on db.
func newStorage(ctx context.Context, db *awsdynamodb.Client, cfg Config) *Storage {
	describeTableInput := awsdynamodb.DescribeTableInput{
		TableName: &cfg.Table,
	}

	// Create storage
	store := &Storage{
		db:    db,
		table: cfg.Table,
	}

	timeoutCtx, cancel := context.WithTimeout(ctx, 5*time.Second)
	defer cancel()

	// Create table
	_, err := db.DescribeTable(timeoutCtx, &describeTableInput)
	if err != nil {
		var rnfe *types.ResourceNotFoundException
		if errors.As(err, &rnfe) {
			err := store.createTable(ctx, cfg, describeTableInput)
			if err != nil {
				panic(err)
			}
		} else {
			panic(err)
		}
	}

	// Reset once the table is known to exist: a table just created is already empty, and one
	// that was already there keeps its own configuration while its entries are cleared.
	if cfg.Reset {
		if err := store.ResetWithContext(ctx); err != nil {
			panic(err)
		}
	}

	return store
}

// GetWithContext retrieves the value associated with the given key using the provided context.
func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error) {
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

func (s *Storage) Get(key string) ([]byte, error) {
	return s.GetWithContext(context.Background(), key)
}

// Set key with value
func (s *Storage) SetWithContext(ctx context.Context, key string, val []byte, exp time.Duration) error {
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

func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	return s.SetWithContext(context.Background(), key, val, exp)
}

// Delete entry by key
func (s *Storage) DeleteWithContext(ctx context.Context, key string) error {
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

func (s *Storage) Delete(key string) error {
	return s.DeleteWithContext(context.Background(), key)
}

// Reset all entries, including unexpired
// ResetWithContext deletes every entry in the table, leaving the table itself in place.
// Dropping and recreating it would be fewer calls, but would also discard the table's own
// configuration — billing mode, indexes, streams, tags — which belongs to whoever created it.
func (s *Storage) ResetWithContext(ctx context.Context) error {
	paginator := awsdynamodb.NewScanPaginator(s.db, &awsdynamodb.ScanInput{
		TableName: &s.table,
		// Only the key is needed to delete a row, and skipping the values keeps a reset
		// of a large table from reading every payload it is about to throw away.
		ProjectionExpression: aws.String("#k"),
		ExpressionAttributeNames: map[string]string{
			"#k": keyAttrName,
		},
	})

	for paginator.HasMorePages() {
		page, err := paginator.NextPage(ctx)
		if err != nil {
			return err
		}

		if err := s.deleteItems(ctx, page.Items); err != nil {
			return err
		}
	}

	return nil
}

// deleteItems removes the given rows in batches, retrying whatever DynamoDB declines to
// process in one call, as it may under load even when the request itself is valid.
func (s *Storage) deleteItems(ctx context.Context, items []map[string]types.AttributeValue) error {
	requests := make([]types.WriteRequest, 0, batchWriteItemLimit)

	for _, item := range items {
		key, ok := item[keyAttrName]
		if !ok {
			continue
		}

		requests = append(requests, types.WriteRequest{
			DeleteRequest: &types.DeleteRequest{
				Key: map[string]types.AttributeValue{keyAttrName: key},
			},
		})

		if len(requests) == batchWriteItemLimit {
			if err := s.writeBatch(ctx, requests); err != nil {
				return err
			}
			requests = requests[:0]
		}
	}

	if len(requests) == 0 {
		return nil
	}

	return s.writeBatch(ctx, requests)
}

// writeBatch issues one BatchWriteItem, re-sending the items DynamoDB left unprocessed.
func (s *Storage) writeBatch(ctx context.Context, requests []types.WriteRequest) error {
	pending := map[string][]types.WriteRequest{s.table: requests}

	for attempt := 0; len(pending) > 0; attempt++ {
		if attempt == batchWriteMaxAttempts {
			return fmt.Errorf("dynamodb: reset left items unprocessed after %d attempts", attempt)
		}

		out, err := s.db.BatchWriteItem(ctx, &awsdynamodb.BatchWriteItemInput{RequestItems: pending})
		if err != nil {
			return err
		}

		pending = out.UnprocessedItems
	}

	return nil
}

func (s *Storage) Reset() error {
	return s.ResetWithContext(context.Background())
}

// Close the database
func (s *Storage) Close() error {
	return nil
}

func (s *Storage) createTable(ctx context.Context, cfg Config, describeTableInput awsdynamodb.DescribeTableInput) error {
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
			// Exit promptly if the caller's context is cancelled or its
			// deadline has been exceeded, instead of sleeping and retrying.
			if err := ctx.Err(); err != nil {
				return err
			}
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
			if errors.Is(err, context.Canceled) || errors.Is(err, context.DeadlineExceeded) {
				return err
			}
			return errors.New("dynamodb: the table couldn't be created")
		}
		if describeTableOutput.Table.TableStatus == "CREATING" {
			return errors.New("dynamodb: the table took too long to be created")
		}
	}

	return nil
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
