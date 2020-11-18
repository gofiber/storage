package dynamodb

import (
	"context"
	"errors"
	"time"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/awserr"
	"github.com/aws/aws-sdk-go/aws/credentials"
	"github.com/aws/aws-sdk-go/aws/session"
	awsdynamodb "github.com/aws/aws-sdk-go/service/dynamodb"
)

// Storage interface that is implemented by storage providers
type Storage struct {
	db    *awsdynamodb.DynamoDB
	table string
}


// ErrNotFound means that a get call did not find the requested key.
var ErrNotFound = errors.New("key not found")
var ErrKeyNotExist = ErrNotFound

// New creates a new storage
func New(config Config) *Storage {
	// Set default config
	cfg := configDefault(config)

	// Create db
	var creds *credentials.Credentials
	if (cfg.AWSaccessKeyID != "" && cfg.AWSsecretAccessKey == "") || (cfg.AWSaccessKeyID == "" && cfg.AWSsecretAccessKey != "") {
		panic("[DynamoDB] You need to set BOTH AWSaccessKeyID AND AWSsecretAccessKey")
	} else if cfg.AWSaccessKeyID != "" {
		// Due to the previous check we can be sure that in this case AWSsecretAccessKey is not empty as well.
		creds = credentials.NewStaticCredentials(cfg.AWSaccessKeyID, cfg.AWSsecretAccessKey, "")
	}

	// Set database options
	opt := aws.NewConfig()
	if cfg.Region != "" {
		opt = opt.WithRegion(cfg.Region)
	}
	if creds != nil {
		opt = opt.WithCredentials(creds)
	}
	if cfg.CustomEndpoint != "" {
		opt = opt.WithEndpoint(cfg.CustomEndpoint)
	}

	sessionOpt := session.Options{
		SharedConfigState: session.SharedConfigEnable,
	}

	// ...but allow overwrite of region and credentials if they are set in the options.
	sessionOpt.Config.MergeIn(opt)
	session, err := session.NewSessionWithOptions(sessionOpt)
	if err != nil {
		panic(err)
	}
	svc := awsdynamodb.New(session)

	timeoutCtx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	describeTableInput := awsdynamodb.DescribeTableInput{
		TableName: &cfg.Table,
	}

	_, err = svc.DescribeTableWithContext(timeoutCtx, &describeTableInput)
	if err != nil {
		awsErr, ok := err.(awserr.Error)
		if !ok {
			panic(err)
		} else if awsErr.Code() == awsdynamodb.ErrCodeResourceNotFoundException {
			err = createTable(cfg.Table, cfg.readCapacityUnits, cfg.writeCapacityUnits, *cfg.waitForTableCreation, describeTableInput, svc)
			if err != nil {
				panic(err)
			}
		} else {
			panic(err)
		}
	}

	// Create storage
	store := &Storage{
		db:    svc,
		table: cfg.Table,
	}

	// Start garbage collector
	//go store.gc()

	return store
}

// "k" is used as table column name for the key.
var keyAttrName = "k"

// "v" is used as table column name for the value.
var valAttrName = "v"

// Get value by key
func (s *Storage) Get(key string) ([]byte, error) {
	k := make(map[string]*awsdynamodb.AttributeValue)
	k[keyAttrName] = &awsdynamodb.AttributeValue{
		S: &key,
	}
	getItemInput := awsdynamodb.GetItemInput{
		TableName: &s.table,
		Key:       k,
	}
	getItemOutput, err := s.db.GetItem(&getItemInput)
	if err != nil {
		return nil, err
	} else if getItemOutput.Item == nil {
		return nil, ErrNotFound
	}
	attributeVal := getItemOutput.Item[valAttrName]
	if attributeVal == nil {
		return nil, ErrNotFound
	}
	return attributeVal.B, nil
}

// Set key with value
// Set key with value
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	// Ain't Nobody Got Time For That
	if len(key) <= 0 || len(val) <= 0 {
		return nil
	}
	item := make(map[string]*awsdynamodb.AttributeValue)
	item[keyAttrName] = &awsdynamodb.AttributeValue{
		S: &key,
	}
	item[valAttrName] = &awsdynamodb.AttributeValue{
		B: val,
	}
	putItemInput := awsdynamodb.PutItemInput{
		TableName: &s.table,
		Item:      item,
	}
	_, err := s.db.PutItem(&putItemInput)
	return err
}

// Delete entry by key
func (s *Storage) Delete(key string) error {
	// Ain't Nobody Got Time For That
	if len(key) <= 0 {
		return nil
	}
	k := make(map[string]*awsdynamodb.AttributeValue)
	k[keyAttrName] = &awsdynamodb.AttributeValue{
		S: &key,
	}
	deleteItemInput := awsdynamodb.DeleteItemInput{
		TableName: &s.table,
		Key:       k,
	}
	_, err := s.db.DeleteItem(&deleteItemInput)
	return err
}

// Reset all entries, including unexpired
func (s *Storage) Reset() error {
	deleteTableInput := awsdynamodb.DeleteTableInput{
		TableName: &s.table,
	}
	_, err := s.db.DeleteTable(&deleteTableInput)
	return err
}

// Close the database
func (s *Storage) Close() error {
	// In the DynamoDB implementation this doesn't have any effect.
	return nil
}

// GC deletes all expired entries
// func (s *Storage) gc() {
// 	ticker := time.NewTicker(s.gcInterval)
// 	defer ticker.Stop()
// 	for {
// 		select {
// 		case <-s.done:
// 			return
// 		case t := <-ticker.C:
// 			_, _ = s.db.Exec(s.sqlGC, t.Unix())
// 		}
// 	}
// }

func createTable(tableName string, readCapacityUnits, writeCapacityUnits int64, waitForTableCreation bool, describeTableInput awsdynamodb.DescribeTableInput, svc *awsdynamodb.DynamoDB) error {
	keyAttrType := "S" // For "string"
	keyType := "HASH"  // As opposed to "RANGE"
	createTableInput := awsdynamodb.CreateTableInput{
		TableName: &tableName,
		AttributeDefinitions: []*awsdynamodb.AttributeDefinition{{
			AttributeName: &keyAttrName,
			AttributeType: &keyAttrType,
		}},
		KeySchema: []*awsdynamodb.KeySchemaElement{{
			AttributeName: &keyAttrName,
			KeyType:       &keyType,
		}},
		ProvisionedThroughput: &awsdynamodb.ProvisionedThroughput{
			ReadCapacityUnits:  &readCapacityUnits,
			WriteCapacityUnits: &writeCapacityUnits,
		},
	}
	_, err := svc.CreateTable(&createTableInput)
	if err != nil {
		return err
	}
	// If configured (true by default), block until the table is created.
	// Typical table creation duration is 10 seconds.
	if waitForTableCreation {
		for try := 1; try < 16; try++ {
			describeTableOutput, err := svc.DescribeTable(&describeTableInput)
			if err != nil || *describeTableOutput.Table.TableStatus == "CREATING" {
				time.Sleep(1 * time.Second)
			} else {
				break
			}
		}
		// Last try (16th) after 15 seconds of waiting.
		// Now handle error as such.
		describeTableOutput, err := svc.DescribeTable(&describeTableInput)
		if err != nil {
			return errors.New("The DynamoDB table couldn't be created")
		}
		if *describeTableOutput.Table.TableStatus == "CREATING" {
			return errors.New("The DynamoDB table took too long to be created")
		}
	}

	return nil
}
