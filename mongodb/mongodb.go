package mongodb

import (
	"context"
	"errors"
	"fmt"
	"net/url"
	"sync"
	"time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// Storage interface that is implemented by storage providers
type Storage struct {
	db    *mongo.Database
	col   *mongo.Collection
	items *sync.Pool

	closeOnce sync.Once
	closeErr  error
}

type item struct {
	ObjectID   primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Key        string             `json:"key" bson:"key"`
	Value      []byte             `json:"value" bson:"value"`
	Expiration time.Time          `json:"exp,omitempty" bson:"exp,omitempty"`
}

// New creates a new MongoDB storage using context.Background() for initialization.
func New(config ...Config) *Storage {
	return NewWithContext(context.Background(), config...)
}

// NewWithContext creates a new MongoDB storage, using ctx as the parent context
// for the initialization operations (connect, ping, optional drop, index creation).
func NewWithContext(ctx context.Context, config ...Config) *Storage {
	// Set default config
	cfg := configDefault(config...)

	// Create data source name
	var dsn string

	// Check if user supplied connection string
	if cfg.ConnectionURI != "" {
		dsn = cfg.ConnectionURI
	} else {
		dsn = "mongodb://"
		if cfg.Username != "" {
			dsn += url.QueryEscape(cfg.Username)
		}
		if cfg.Password != "" {
			dsn += ":" + cfg.Password
		}
		if cfg.Username != "" || cfg.Password != "" {
			dsn += "@"
		}
		dsn += fmt.Sprintf("%s:%d", url.QueryEscape(cfg.Host), cfg.Port)
	}

	// Set mongo options
	opt := options.Client().ApplyURI(dsn)

	// Create and connect the mongo client in one step
	timeoutCtx, cancel := context.WithTimeout(ctx, 20*time.Second)
	defer cancel()

	client, err := mongo.Connect(timeoutCtx, opt)
	if err != nil {
		panic(err)
	}

	// Release the client opened above rather than leaking it when a later
	// step fails.
	closeOwned := func() { _ = client.Disconnect(context.Background()) }

	// verify that the client can connect
	if err = client.Ping(ctx, nil); err != nil {
		closeOwned()
		panic(err)
	}

	// Get collection from database
	db := client.Database(cfg.Database)
	col := db.Collection(cfg.Collection)

	if cfg.Reset {
		if err = col.Drop(ctx); err != nil {
			closeOwned()
			panic(err)
		}
	}

	// Use a dedicated timeout for index creation so it is not starved by time
	// already spent on connect/ping above.
	indexCtx, indexCancel := context.WithTimeout(ctx, 20*time.Second)
	defer indexCancel()

	// expired data may exist for some time beyond the 60 second period between runs of the background task.
	// more on https://docs.mongodb.com/manual/core/index-ttl/
	indexModel := mongo.IndexModel{
		Keys: bson.D{{
			Key:   "exp",
			Value: 1,
		}},
		// setting to 0
		// means that documents will remain in the collection
		// until they're explicitly deleted or the collection is dropped.
		Options: options.Index().SetExpireAfterSeconds(0),
	}

	if _, err := col.Indexes().CreateOne(indexCtx, indexModel); err != nil {
		closeOwned()
		panic(err)
	}

	// Create unique index for the "key" field
	keyIndexModel := mongo.IndexModel{
		Keys: bson.D{{
			Key:   "key",
			Value: 1,
		}},
		Options: options.Index().SetUnique(true),
	}

	if _, err := col.Indexes().CreateOne(indexCtx, keyIndexModel); err != nil {
		closeOwned()
		panic(err)
	}

	store := &Storage{
		db:  db,
		col: col,
		items: &sync.Pool{
			New: func() interface{} {
				return new(item)
			},
		},
	}
	return store
}

// GetWithContext gets value by key with context
func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error) {
	if len(key) <= 0 {
		return nil, nil
	}
	res := s.col.FindOne(ctx, bson.M{"key": key})
	item := s.acquireItem()
	defer s.releaseItem(item)

	if err := res.Err(); err != nil {
		if errors.Is(err, mongo.ErrNoDocuments) {
			return nil, nil
		}
		return nil, err
	}
	if err := res.Decode(&item); err != nil {
		return nil, err
	}

	// Compare the deadline itself: truncating both sides to whole seconds
	// dropped an entry up to a second before it expired.
	if !item.Expiration.IsZero() && !time.Now().Before(item.Expiration) {
		return nil, nil
	}

	// Copy before the item goes back to the pool. Releasing only drops the
	// driver's reference today, but the caller keeps this value for as long
	// as it likes, so it must not alias anything the pool hands out again.
	val := make([]byte, len(item.Value))
	copy(val, item.Value)

	return val, nil
}

// Get gets value by key
func (s *Storage) Get(key string) ([]byte, error) {
	return s.GetWithContext(context.Background(), key)
}

// SetWithContext sets key with value, replace if document exits with context
//
// document will be remove automatically if exp is set, based on MongoDB TTL Indexes
// Set key with value
func (s *Storage) SetWithContext(ctx context.Context, key string, val []byte, exp time.Duration) error {
	// Ain't Nobody Got Time For That
	if len(key) <= 0 || len(val) <= 0 {
		return nil
	}

	filter := bson.M{"key": key}
	item := s.acquireItem()
	item.Key = key
	item.Value = val

	if exp > 0 {
		item.Expiration = time.Now().Add(exp).UTC()
	}
	_, err := s.col.ReplaceOne(ctx, filter, item, options.Replace().SetUpsert(true))

	s.releaseItem(item)
	return err
}

// Set sets key with value, replace if document exits
//
// document will be remove automatically if exp is set, based on MongoDB TTL Indexes
// Set key with value
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	return s.SetWithContext(context.Background(), key, val, exp)
}

// DeleteWithContext deletes document by key with context
func (s *Storage) DeleteWithContext(ctx context.Context, key string) error {
	// Ain't Nobody Got Time For That
	if len(key) <= 0 {
		return nil
	}
	_, err := s.col.DeleteOne(ctx, bson.M{"key": key})
	return err
}

// Delete deletes document by key
func (s *Storage) Delete(key string) error {
	return s.DeleteWithContext(context.Background(), key)
}

// Reset all keys by drop collection with context
func (s *Storage) ResetWithContext(ctx context.Context) error {
	return s.col.Drop(ctx)
}

// Reset all keys by drop collection
func (s *Storage) Reset() error {
	return s.ResetWithContext(context.Background())
}

// Close the database
// Close disconnects the client. It is safe to call Close more than once,
// every call reports the result of the single underlying disconnect.
func (s *Storage) Close() error {
	s.closeOnce.Do(func() {
		s.closeErr = s.db.Client().Disconnect(context.Background())
	})
	return s.closeErr
}

// Acquire item from pool
func (s *Storage) acquireItem() *item {
	return s.items.Get().(*item)
}

// Release item from pool
func (s *Storage) releaseItem(item *item) {
	if item != nil {
		// ObjectID has to be cleared too: Get decodes into the pooled item, so
		// leaving the identifier behind would carry another document's _id
		// into the next Set that reuses this item.
		item.ObjectID = primitive.ObjectID{}
		item.Key = ""
		item.Value = nil
		item.Expiration = time.Time{}

		s.items.Put(item)
	}
}

// Return database client
func (s *Storage) Conn() *mongo.Database {
	return s.db
}
