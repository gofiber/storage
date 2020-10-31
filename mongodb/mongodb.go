package mongodb

import (
	"context"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"time"
)

// Storage interface that is implemented by storage providers
type Storage struct {
	col *mongo.Collection
}

type MongoStorage struct {
	ObjectID primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Key      string             `json:"key,omitempty" bson:"key"`
	Value    []byte             `json:"value" bson:"value"`
	Exp      time.Time          `json:"exp" bson:"exp,omitempty"`
}

// New creates a new MongoDB storage
func New(col *mongo.Collection) *Storage {
	// expired data may exist for some time beyond the 60 second period between runs of the background task.
	// more on https://docs.mongodb.com/manual/core/index-ttl/
	indexModel := mongo.IndexModel{
		Keys: bson.D{{"exp", 1}},
		// setting to 0
		// means that documents will remain in the collection
		// until they're explicitly deleted or the collection is dropped.
		Options: options.Index().SetExpireAfterSeconds(0),
	}

	if _, err := col.Indexes().CreateOne(context.TODO(), indexModel); err != nil {
		panic(err)
	}

	return &Storage{
		col: col,
	}
}

// Get value by key
func (s *Storage) Get(key string) ([]byte, error) {
	res := s.col.FindOne(context.TODO(), bson.M{"key": key})
	result := MongoStorage{}

	if err := res.Err(); err != nil {
		return []byte{}, err
	}
	if err := res.Decode(&result); err != nil {
		return []byte{}, err
	}

	return result.Value, nil
}

// Set key with value, replace if document exits
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	filter := bson.M{"id": key}
	replace := MongoStorage{
		Key:   key,
		Value: val,
	}

	if exp != 0 {
		replace.Exp = time.Now().Add(exp).UTC()
	}
	_, err := s.col.ReplaceOne(context.TODO(), filter, replace, options.Replace().SetUpsert(true))
	return err
}

// Delete document by key
func (s *Storage) Delete(key string) error {
	_, err := s.col.DeleteOne(context.TODO(), bson.M{"key": key})
	return err
}

// Clear all keys by drop collection
func (s *Storage) Clear() error {
	return s.col.Drop(context.TODO())
}
