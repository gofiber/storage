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

// errClosed is returned by every operation attempted after Close. ArangoDB has
// no connection to tear down, so without this a call made after Close would
// silently keep talking to the server.
var errClosed = errors.New("arangodb: storage is closed")

// Storage interface that is implemented by storage providers
type Storage struct {
	db         driver.Database
	gcInterval time.Duration
	done       chan struct{}
	stopped    chan struct{}
	closeOnce  sync.Once

	// closed is checked by every operation. It is atomic rather than guarded
	// by a mutex so that a call in flight, which is a full network round trip,
	// does not hold a lock that Close and later calls would queue behind.
	closed atomic.Bool

	// Arango mandatory fields
	connection driver.Connection
	client     driver.Client
	collection driver.Collection
	// AQL query used to remove expired keys
	aqlRemoveGC string
	// AQL query used to store a key, insert or update in one statement
	aqlUpsert string
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
		gcInterval: cfg.GCInterval,
		db:         database,
		collection: collection,
		client:     client,
		connection: conn,
		done:       make(chan struct{}),
		stopped:    make(chan struct{}),
		// doc.exp == 0 means the entry never expires, so it has to be excluded:
		// without that the sweep matched every such key and deleted the lot.
		aqlRemoveGC: fmt.Sprintf("FOR doc IN %s\n  FILTER doc.exp != 0 AND doc.exp <= @exp \n REMOVE { _key: doc._key } IN %s", collection.Name(), collection.Name()),
		// One atomic statement: reading whether the document exists and then
		// creating it left a window where two concurrent writers both saw it
		// missing and the second one failed with a conflict.
		aqlUpsert: fmt.Sprintf("UPSERT { _key: @key }\n INSERT { _key: @key, val: @val, exp: @exp }\n UPDATE { val: @val, exp: @exp }\n IN %s", collection.Name()),
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

	// Read straight away and treat a missing document as a miss. Asking
	// whether it existed first left a window where a concurrent delete, or the
	// collector, removed it in between and the read then reported an error
	// instead of the nil, nil the storage interface documents.
	var model model
	if _, err := s.collection.ReadDocument(ctx, key, &model); err != nil {
		if driver.IsNotFoundGeneral(err) {
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
		// The deadline is stored with a one-second granularity, so round it up:
		// truncating expires an entry early, and a sub-second expiration would be
		// stored as already past.
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

	_, err := s.collection.RemoveDocument(ctx, key)
	return err
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

// Close the database
// Arango does not provide a method to close the connection
// more info @https://github.com/arangodb/go-driver/issues/43
// Close stops the garbage collector and releases the connection parameters.
// It is safe to call Close more than once.
func (s *Storage) Close() error {
	s.closeOnce.Do(func() {
		// Stop gc and wait for it to return.
		close(s.done)
		<-s.stopped

		// Mark the storage closed rather than clearing the connection fields:
		// clearing them raced any Get or Set still in flight, turning a late
		// call into a nil dereference. A call already past the check runs to
		// completion, which is harmless here, and later ones get errClosed.
		s.closed.Store(true)
	})

	return nil
}

// exec runs query with bindVars. The bind variables are passed in rather than
// held on the Storage: shared between the collector and the caller they were
// a data race, and the field was never initialized, so the collector's first
// sweep wrote to a nil map and took the process down with it.
func (s *Storage) exec(ctx context.Context, query string, bindVars map[string]interface{}) error {
	cursor, err := s.db.Query(ctx, query, bindVars)
	if err != nil {
		return err
	}
	return cursor.Close()
}

// Garbage collector to delete expired keys
func (s *Storage) gc() {
	defer close(s.stopped)

	// A sweep is abandoned when Close is called, so a query that stalls
	// cannot hold Close open indefinitely.
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
