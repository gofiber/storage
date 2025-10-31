package arangodb

import (
	"context"
	"fmt"
	"time"

	"github.com/arangodb/go-driver"
	"github.com/arangodb/go-driver/http"
	"github.com/gofiber/utils/v2"
)

// Storage interface that is implemented by storage providers
type Storage struct {
	db         driver.Database
	gcInterval time.Duration
	done       chan struct{}

	// Arango mandatory fields
	connection    driver.Connection
	client        driver.Client
	collection    driver.Collection
	bindingParams map[string]interface{}
	config        Config
	// AQL query used to remove expired keys
	aqlRemoveGC string
}

type model struct {
	// respect key format field name for ArangoDB
	Key string `json:"_key"`
	Val string `json:"val"`
	Exp int64  `json:"exp"`
}

// New creates a new storage
func New(config ...Config) *Storage {
	// Set default config
	cfg := configDefault(config...)

	// create connection object to arango
	conn, err := http.NewConnection(http.ConnectionConfig{
		Endpoints: []string{fmt.Sprintf("%s:%d", cfg.Host, cfg.Port)},
	})
	if err != nil {
		panic(err)
	}

	// instantiate client after the connection is started
	client, err := driver.NewClient(driver.ClientConfig{
		Connection:     conn,
		Authentication: driver.BasicAuthentication(cfg.Username, cfg.Password),
	})
	if err != nil {
		panic(err)
	}

	// check if the database exists
	// if not create it
	// (it works only with admin privilege user)
	exists, err := client.DatabaseExists(context.Background(), cfg.Database)
	if err != nil {
		panic(err)
	}
	if !exists {
		_, err = client.CreateDatabase(context.Background(), cfg.Database, nil)
		if err != nil {
			panic(err)
		}
	}
	database, err := client.Database(context.Background(), cfg.Database)
	if err != nil {
		panic(err)
	}
	found, _ := database.CollectionExists(context.Background(), cfg.Collection)

	// Create the collection if not exists
	var collection driver.Collection
	if !found {
		// Create
		collection, err = database.CreateCollection(context.Background(), cfg.Collection, &driver.CreateCollectionOptions{})
		if err != nil {
			panic(err)
		}
	} else {
		// Get the collection
		collection, err = database.Collection(context.Background(), cfg.Collection)
		if err != nil {
			panic(err)
		}
	}

	// Truncate collection if Reset set to true
	if cfg.Reset {
		err = collection.Truncate(context.Background())
		if err != nil {
			panic(err)
		}
	}

	// Create storage
	store := &Storage{
		gcInterval:  cfg.GCInterval,
		db:          database,
		collection:  collection,
		client:      client,
		connection:  conn,
		config:      cfg,
		done:        make(chan struct{}),
		aqlRemoveGC: fmt.Sprintf("FOR doc IN %s\n  FILTER doc.exp <= @exp \n REMOVE { _key: doc._key } IN %s", collection.Name(), collection.Name()),
	}

	// Start garbage collector
	go store.gc()

	return store
}

// GetWithContext value by key with given context
func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error) {
	if len(key) <= 0 {
		return nil, nil
	}

	// Check if the document exists
	// to avoid errors later
	exists, err := s.collection.DocumentExists(ctx, key)
	if err != nil {
		return nil, err
	}

	// instead of returning an error if not exists
	// return nil
	if !exists {
		return nil, nil
	}

	// result model
	var model model
	_, err = s.collection.ReadDocument(ctx, key, &model)
	if err != nil {
		return nil, err
	}
	// If the expiration time has already passed, then return nil
	if model.Exp != 0 && model.Exp <= time.Now().Unix() {
		return nil, nil
	}

	return utils.UnsafeBytes(model.Val), nil
}

// Get value by key
func (s *Storage) Get(key string) ([]byte, error) {
	return s.GetWithContext(context.Background(), key)
}

// SetWithContext key with value with given context
func (s *Storage) SetWithContext(ctx context.Context, key string, val []byte, exp time.Duration) error {
	// Ain't Nobody Got Time For That
	if len(key) <= 0 || len(val) <= 0 {
		return nil
	}
	var expireAt int64
	if exp != 0 {
		expireAt = time.Now().Add(exp).Unix()
	}
	valStr := utils.UnsafeString(val)

	// create the structure for the storage
	data := model{
		Key: key,
		Val: valStr,
		Exp: expireAt,
	}

	// Arango does not support documents with the same key
	// So we need to check if the document exists
	exists, err := s.collection.DocumentExists(ctx, key)
	if err != nil {
		return err
	}
	// Update the document if exists
	if exists {
		_, err = s.collection.UpdateDocument(ctx, key, data)
		return err
	}
	// Otherwise create it
	_, err = s.collection.CreateDocument(ctx, data)

	return err
}

// Set key with value
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	return s.SetWithContext(context.Background(), key, val, exp)
}

// DeleteWithContext value by key with given context
func (s *Storage) DeleteWithContext(ctx context.Context, key string) error {
	// Ain't Nobody Got Time For That
	if len(key) <= 0 {
		return nil
	}
	_, err := s.collection.RemoveDocument(ctx, key)
	return err
}

// Delete value by key
func (s *Storage) Delete(key string) error {
	return s.DeleteWithContext(context.Background(), key)
}

// ResetWithContext all keys with given context
func (s *Storage) ResetWithContext(ctx context.Context) error {
	return s.collection.Truncate(ctx)
}

// Reset all keys
// truncate the collection
func (s *Storage) Reset() error {
	return s.ResetWithContext(context.Background())
}

// Close the database
// Arango does not provide a method to close the connection
// more info @https://github.com/arangodb/go-driver/issues/43
func (s *Storage) Close() error {
	// Stop gc
	s.done <- struct{}{}
	// reset connection params
	s.db = nil
	s.collection = nil
	s.connection = nil
	s.bindingParams = nil

	return nil
}

// execute query
func (s *Storage) exec(query string) error {
	// execute query
	_, err := s.db.Query(context.Background(), query, s.bindingParams)
	if err != nil {
		return err
	}
	// reset binding params
	s.bindingParams = map[string]interface{}{}
	return nil
}

// Garbage collector to delete expired keys
func (s *Storage) gc() {
	ticker := time.NewTicker(s.gcInterval)
	defer ticker.Stop()
	for {
		select {
		case <-s.done:
			return
		case t := <-ticker.C:
			// set the expiration
			s.bindingParams["exp"] = t.Unix()
			_ = s.exec(s.aqlRemoveGC)
		}
	}
}

// Return database client
func (s *Storage) Conn() driver.Client {
	return s.client
}
