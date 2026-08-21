package arangodb

import (
	"context"
	"errors"
	"fmt"
	"sync"
	"sync/atomic"
	"time"

	"github.com/arangodb/go-driver"
	"github.com/arangodb/go-driver/http"
	"github.com/gofiber/utils/v2"
)

// errClosed is returned after Close, which ArangoDB cannot enforce since it has no connection to tear down.
var errClosed = errors.New("arangodb: storage is closed")

// isDocumentNotFound matches 1202 only: any 404 would also swallow a dropped collection, leaving the storage a silent miss forever.
func isDocumentNotFound(err error) bool {
	return driver.IsArangoErrorWithErrorNum(err, driver.ErrArangoDocumentNotFound)
}

// Storage interface that is implemented by storage providers
type Storage struct {
	db         driver.Database
	gcInterval time.Duration
	done       chan struct{}
	stopped    chan struct{}
	closeOnce  sync.Once

	closed atomic.Bool

	// Arango mandatory fields
	connection     driver.Connection
	client         driver.Client
	collection     driver.Collection
	collectionName string
	// AQL query used to remove expired keys
	aqlRemoveGC string
	aqlUpsert   string
}

type model struct {
	// respect key format field name for ArangoDB
	Key string `json:"_key"`
	Val string `json:"val"`
	Exp int64  `json:"exp"`
}

// New creates a new storage
// New creates a new ArangoDB storage using context.Background() for initialization.
func New(config ...Config) *Storage {
	return NewWithContext(context.Background(), config...)
}

// NewWithContext creates a new ArangoDB storage, using ctx for the initialization
// operations (database/collection lookup and creation, and optional reset).
func NewWithContext(ctx context.Context, config ...Config) *Storage {
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

	return newStorage(ctx, client, conn, cfg)
}

// NewFromConnection creates an ArangoDB storage on an existing client, using context.Background()
// for the initialization operations.
func NewFromConnection(client driver.Client, config ...Config) *Storage {
	return NewFromConnectionWithContext(context.Background(), client, config...)
}

// NewFromConnectionWithContext creates an ArangoDB storage on an existing client, using ctx for the
// initialization operations (database/collection lookup and creation, and optional reset). Only the
// Database, Collection, Reset and GCInterval options are read; the endpoint and credentials come from the client.
func NewFromConnectionWithContext(ctx context.Context, client driver.Client, config ...Config) *Storage {
	if client == nil {
		panic("arangodb: nil client")
	}

	var cfg Config
	if len(config) > 0 {
		cfg = config[0]
	}
	// The endpoint and credentials come from the client, so leftover values in these
	// fields must not fail validation meant for the dialing constructor.
	cfg.Host, cfg.Port, cfg.Username, cfg.Password = "", 0, "", ""

	return newStorage(ctx, client, client.Connection(), configDefault(cfg))
}

// newStorage prepares the database and collection on client and starts the collector.
func newStorage(ctx context.Context, client driver.Client, conn driver.Connection, cfg Config) *Storage {
	// check if the database exists
	// if not create it
	// (it works only with admin privilege user)
	exists, err := client.DatabaseExists(ctx, cfg.Database)
	if err != nil {
		panic(err)
	}
	if !exists {
		_, err = client.CreateDatabase(ctx, cfg.Database, nil)
		if err != nil {
			panic(err)
		}
	}
	database, err := client.Database(ctx, cfg.Database)
	if err != nil {
		panic(err)
	}
	found, err := database.CollectionExists(ctx, cfg.Collection)
	if err != nil {
		panic(err)
	}

	// Create the collection if not exists
	var collection driver.Collection
	if !found {
		// Create
		collection, err = database.CreateCollection(ctx, cfg.Collection, &driver.CreateCollectionOptions{})
		if err != nil {
			panic(err)
		}
	} else {
		// Get the collection
		collection, err = database.Collection(ctx, cfg.Collection)
		if err != nil {
			panic(err)
		}
	}

	// Truncate collection if Reset set to true
	if cfg.Reset {
		err = collection.Truncate(ctx)
		if err != nil {
			panic(err)
		}
	}

	// Create storage
	store := &Storage{
		gcInterval:     cfg.GCInterval,
		db:             database,
		collection:     collection,
		client:         client,
		connection:     conn,
		done:           make(chan struct{}),
		stopped:        make(chan struct{}),
		collectionName: collection.Name(),
		// doc.exp == 0 never expires and must be excluded, or the sweep deletes every such key.
		aqlRemoveGC: "FOR doc IN @@collection\n  FILTER doc.exp != 0 AND doc.exp <= @exp \n REMOVE { _key: doc._key } IN @@collection",
		// One atomic statement: check-then-create left two concurrent writers racing into a conflict.
		aqlUpsert: "UPSERT { _key: @key }\n INSERT { _key: @key, val: @val, exp: @exp }\n UPDATE { val: @val, exp: @exp }\n IN @@collection",
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

	if s.closed.Load() {
		return nil, errClosed
	}

	// Read straight away: checking existence first turned a concurrent delete into an error rather than a miss.
	var model model
	if _, err := s.collection.ReadDocument(ctx, key, &model); err != nil {
		if isDocumentNotFound(err) {
			return nil, nil
		}
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

	if s.closed.Load() {
		return errClosed
	}

	var expireAt int64
	if exp > 0 {
		// Round the one-second deadline up: truncating expires early, and a sub-second expiration would be stored as past.
		deadline := time.Now().Add(exp)
		expireAt = deadline.Unix()
		if deadline.Nanosecond() != 0 {
			expireAt++
		}
	}
	return s.exec(ctx, s.aqlUpsert, map[string]interface{}{
		"key": key,
		"val": utils.UnsafeString(val),
		"exp": expireAt,
	})
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

	if s.closed.Load() {
		return errClosed
	}

	// A missing key is a miss everywhere else in the interface, and ArangoDB's 1202 is exactly that.
	if _, err := s.collection.RemoveDocument(ctx, key); err != nil && !isDocumentNotFound(err) {
		return err
	}
	return nil
}

// Delete value by key
func (s *Storage) Delete(key string) error {
	return s.DeleteWithContext(context.Background(), key)
}

// ResetWithContext all keys with given context
func (s *Storage) ResetWithContext(ctx context.Context) error {
	if s.closed.Load() {
		return errClosed
	}

	return s.collection.Truncate(ctx)
}

// Reset all keys
// truncate the collection
func (s *Storage) Reset() error {
	return s.ResetWithContext(context.Background())
}

// Close stops the collector; Arango has no connection close, see https://github.com/arangodb/go-driver/issues/43
func (s *Storage) Close() error {
	s.closeOnce.Do(func() {
		close(s.done)
		<-s.stopped

		// Mark closed rather than clearing the connection fields, which raced calls in flight into a nil dereference.
		s.closed.Store(true)
	})

	return nil
}

// exec takes bindVars rather than holding them on the Storage, where they raced and crashed the first sweep.
func (s *Storage) exec(ctx context.Context, query string, bindVars map[string]interface{}) error {
	bindVars["@collection"] = s.collectionName

	cursor, err := s.db.Query(ctx, query, bindVars)
	if err != nil {
		return err
	}
	return cursor.Close()
}

// Garbage collector to delete expired keys
func (s *Storage) gc() {
	defer close(s.stopped)

	// A sweep is abandoned on Close, so a stalled query cannot hold Close open indefinitely.
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()
	go func() {
		<-s.done
		cancel()
	}()

	ticker := time.NewTicker(s.gcInterval)
	defer ticker.Stop()
	for {
		select {
		case <-s.done:
			return
		case t := <-ticker.C:
			_ = s.exec(ctx, s.aqlRemoveGC, map[string]interface{}{"exp": t.Unix()})
		}
	}
}

// Return database client
func (s *Storage) Conn() driver.Client {
	return s.client
}
