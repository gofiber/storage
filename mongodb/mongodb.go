package mongodb

import (
	"context"
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
}

type MongoStorage struct {
	ObjectID primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Key      string             `json:"key" bson:"key"`
	Value    []byte             `json:"value" bson:"value"`
	Exp      time.Time          `json:"exp,omitempty" bson:"exp,omitempty"`
}

// New creates a new MongoDB storage
func New(config ...Config) *Storage {
	// Set default config
	cfg := configDefault(config...)

	// Set mongo options
	opt := options.Client()
	opt.SetAppName(cfg.AppName)
	opt.SetAuth(cfg.Auth)
	opt.SetAutoEncryptionOptions(cfg.AutoEncryptionOptions)
	opt.SetConnectTimeout(cfg.ConnectTimeout)
	opt.SetCompressors(cfg.Compressors)
	opt.SetDialer(cfg.Dialer)
	opt.SetDirect(cfg.Direct)
	opt.SetDisableOCSPEndpointCheck(cfg.DisableOCSPEndpointCheck)
	opt.SetHosts(cfg.Hosts)
	opt.SetLocalThreshold(cfg.LocalThreshold)
	opt.SetMaxConnIdleTime(cfg.MaxConnIdleTime)
	opt.SetMaxPoolSize(cfg.MaxPoolSize)
	opt.SetMinPoolSize(cfg.MinPoolSize)
	opt.SetPoolMonitor(cfg.PoolMonitor)
	opt.SetMonitor(cfg.Monitor)
	opt.SetReadConcern(cfg.ReadConcern)
	opt.SetReadPreference(cfg.ReadPreference)
	opt.SetRegistry(cfg.Registry)
	opt.SetReplicaSet(cfg.ReplicaSet)
	opt.SetRetryReads(cfg.RetryReads)
	opt.SetRetryWrites(cfg.RetryWrites)
	opt.SetServerSelectionTimeout(cfg.ServerSelectionTimeout)
	opt.SetSocketTimeout(cfg.SocketTimeout)
	opt.SetTLSConfig(cfg.TLSConfig)
	opt.SetWriteConcern(cfg.WriteConcern)
	opt.SetZlibLevel(cfg.ZlibLevel)
	opt.SetZstdLevel(cfg.ZstdLevel)

	// default time.Duration is not nil
	// will cause panic: non-positive interval for NewTicker
	if cfg.HeartbeatInterval > 0 {
		opt.SetHeartbeatInterval(cfg.HeartbeatInterval)
	}

	// Create mongo client
	client, err := mongo.NewClient(opt.ApplyURI(cfg.URI))
	if err != nil {
		panic(err)
	}

	ctx, cancel := context.WithTimeout(context.TODO(), 20*time.Second)
	defer cancel()
	if err = client.Connect(ctx); err != nil {
		panic(err)
	}

	// Get collection from database
	db := client.Database(cfg.Database)
	col := db.Collection(cfg.Collection)

	// expired data may exist for some time beyond the 60 second period between runs of the background task.
	// more on https://docs.mongodb.com/manual/core/index-ttl/
	indexModel := mongo.IndexModel{
		Keys: bson.D{{"exp", 1}},
		// setting to 0
		// means that documents will remain in the collection
		// until they're explicitly deleted or the collection is dropped.
		Options: options.Index().SetExpireAfterSeconds(0),
	}

	if _, err := col.Indexes().CreateOne(ctx, indexModel); err != nil {
		panic(err)
	}

	store := &Storage{
		db:  db,
		col: col,
		items: &sync.Pool{
			New: func() interface{} {
				return new(MongoStorage)
			},
		},
	}
	return store
}

// Get value by key
func (s *Storage) Get(key string) ([]byte, error) {
	res := s.col.FindOne(context.Background(), bson.M{"key": key})
	result := MongoStorage{}

	if err := res.Err(); err != nil {
		return nil, err
	}
	if err := res.Decode(&result); err != nil {
		return nil, err
	}

	if !result.Exp.IsZero() && result.Exp.Unix() <= time.Now().Unix() {
		return nil, nil
	}

	return result.Value, nil
}

// Set key with value, replace if document exits
//
// document will be remove automatically if exp is set, based on MongoDB TTL Indexes
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	filter := bson.M{"key": key}
	item := s.acquireItem()
	item.Key = key
	item.Value = val

	if exp != 0 {
		item.Exp = time.Now().Add(exp).UTC()
	}
	_, err := s.col.ReplaceOne(context.Background(), filter, item, options.Replace().SetUpsert(true))

	s.releaseItem(item)
	return err
}

// Delete document by key
func (s *Storage) Delete(key string) error {
	_, err := s.col.DeleteOne(context.Background(), bson.M{"key": key})
	return err
}

// Clear all keys by drop collection
func (s *Storage) Clear() error {
	return s.col.Drop(context.Background())
}

// Close database connection
func (s *Storage) Close() error {
	return s.db.Client().Disconnect(context.Background())
}

// Acquire item from pool
func (s *Storage) acquireItem() *MongoStorage {
	return s.items.Get().(*MongoStorage)
}

// Release item from pool
func (s *Storage) releaseItem(item *MongoStorage) {
	if item != nil {
		item.Key = ""
		item.Value = nil
		item.Exp = time.Time{}

		s.items.Put(item)
	}
}
