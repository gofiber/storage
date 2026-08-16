package neo4j

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"sync"
	"time"

	"github.com/neo4j/neo4j-go-driver/v5/neo4j"
	"github.com/neo4j/neo4j-go-driver/v5/neo4j/auth"
	"github.com/neo4j/neo4j-go-driver/v5/neo4j/config"
)

// Storage interface that is implemented by storage providers
type Storage struct {
	db         neo4j.DriverWithContext
	ownsDB     bool
	gcInterval time.Duration
	done       chan struct{}
	stopped    chan struct{}
	stopOnce   sync.Once
	closeMu    sync.Mutex
	closed     bool

	cypherMatch  string
	cypherMerge  string
	cypherDelete string
	cypherReset  string
	cypherGC     string
}

type model struct {
	Key string `json:"k"`
	Val []byte `json:"v"`
	Exp int64  `json:"e"`
}

type neo4jConnConfig struct {
	URI            string
	Auth           auth.TokenManager
	Configurations []func(*config.Config)
}

func newDriverWithContext(cfg neo4jConnConfig) (neo4j.DriverWithContext, error) {
	return neo4j.NewDriverWithContext(cfg.URI, cfg.Auth, cfg.Configurations...)
}

// closeTimeout bounds the cleanup close performed when initialization fails.
const closeTimeout = 10 * time.Second

// New creates a new Neo4j storage using context.Background() for initialization.
func New(config ...Config) *Storage {
	return NewWithContext(context.Background(), config...)
}

// NewFromConnection creates a new Neo4j storage on an existing driver, which stays the caller's to
// close, using context.Background() for initialization. It is the same as setting Config.DB.
func NewFromConnection(db neo4j.DriverWithContext, config ...Config) *Storage {
	return NewFromConnectionWithContext(context.Background(), db, config...)
}

// NewFromConnectionWithContext creates a new Neo4j storage on an existing driver, which stays the
// caller's to close, using ctx for the initialization operations (connectivity check, optional reset,
// and index creation).
func NewFromConnectionWithContext(ctx context.Context, db neo4j.DriverWithContext, config ...Config) *Storage {
	if db == nil {
		panic("neo4j: nil driver")
	}

	cfg := configDefault(config...)
	cfg.DB = db

	return NewWithContext(ctx, cfg)
}

// NewWithContext creates a new Neo4j storage, using ctx for the initialization
// operations (connectivity check, optional reset, and index creation).
func NewWithContext(ctx context.Context, config ...Config) *Storage {
	// Set default config
	cfg := configDefault(config...)

	// A caller-supplied driver stays theirs to close; their application may still be using it.
	var err error
	db := cfg.DB
	ownsDB := db == nil
	if ownsDB {
		db, err = newDriverWithContext(neo4jConnConfig{
			URI:            cfg.URI,
			Auth:           cfg.Auth,
			Configurations: cfg.Configurations,
		})
		if err != nil {
			log.Panicf("Unable to create connection pool: %v\n", err)
		}
	}

	// Closing runs on its own bounded context: the caller's may be what failed, and an unbounded one would hang.
	closeOwned := func() {
		if !ownsDB {
			return
		}
		closeCtx, cancel := context.WithTimeout(context.Background(), closeTimeout)
		defer cancel()
		if err := db.Close(closeCtx); err != nil {
			log.Printf("Error closing storage: %v\n", err)
		}
	}

	if err := db.VerifyConnectivity(ctx); err != nil {
		closeOwned()
		log.Panicf("Unable to verify connection: %v\n", err)
	}

	// delete all nodes if reset set to true
	if cfg.Reset {
		if _, err := neo4j.ExecuteQuery(ctx, db, fmt.Sprintf("MATCH (n:%s) DELETE n FINISH", cfg.Node), nil, neo4j.EagerResultTransformer); err != nil {
			closeOwned()
			log.Panicf("Unable to reset storage: %v\n", err)
		}
	}

	// create index on key
	if _, err := neo4j.ExecuteQuery(ctx, db, fmt.Sprintf("CREATE INDEX neo4jstore_key_idx IF NOT EXISTS FOR (n:%s) ON (n.k)", cfg.Node), nil, neo4j.EagerResultTransformer); err != nil {
		closeOwned()
		log.Panicf("Unable to create index on key: %v\n", err)
	}

	store := &Storage{
		db:         db,
		ownsDB:     ownsDB,
		gcInterval: cfg.GCInterval,
		done:       make(chan struct{}),
		stopped:    make(chan struct{}),

		cypherMatch:  fmt.Sprintf("OPTIONAL MATCH (n:%s{ k: $key }) RETURN n { .* } AS data", cfg.Node),
		cypherMerge:  fmt.Sprintf("MERGE (n:%s{ k: $key }) SET n.v = $val, n.e = $exp FINISH", cfg.Node),
		cypherDelete: fmt.Sprintf("MATCH (n:%s{ k: $key }) DELETE n FINISH", cfg.Node),
		cypherReset:  fmt.Sprintf("MATCH (n:%s) DELETE n FINISH", cfg.Node),
		cypherGC:     fmt.Sprintf("MATCH (n:%s) WHERE n.e <= $exp AND n.e != 0 DELETE n FINISH", cfg.Node),
	}

	go store.gcTicker()

	return store
}

func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error) {
	if len(key) <= 0 {
		return nil, nil
	}

	res, err := neo4j.ExecuteQuery(
		ctx, s.db, s.cypherMatch,
		map[string]any{"key": key},
		neo4j.EagerResultTransformer,
	)
	if err != nil {
		return nil, err
	}

	data, _, _ := neo4j.GetRecordValue[map[string]any](res.Records[0], "data")

	if data == nil {
		return nil, nil
	}

	// result model
	var model model
	bt, _ := json.Marshal(data)

	if err := json.Unmarshal(bt, &model); err != nil {
		return nil, fmt.Errorf("error parsing result data: %v", err)
	}

	// If the expiration time has already passed, then return nil
	if model.Exp != 0 && model.Exp <= time.Now().Unix() {
		return nil, nil
	}

	return model.Val, nil
}

func (s *Storage) Get(key string) ([]byte, error) {
	return s.GetWithContext(context.Background(), key)
}

// SetWithContext key with value and expiration time with context
func (s *Storage) SetWithContext(ctx context.Context, key string, val []byte, exp time.Duration) error {
	if len(key) <= 0 || len(val) <= 0 {
		return nil
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

	// create the structure for the storage
	data := model{
		Key: key,
		Val: val,
		Exp: expireAt,
	}

	_, err := neo4j.ExecuteQuery(
		ctx, s.db, s.cypherMerge,
		map[string]any{"key": data.Key, "val": data.Val, "exp": data.Exp},
		neo4j.EagerResultTransformer,
	)

	return err
}

// Set key with value
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	return s.SetWithContext(context.Background(), key, val, exp)
}

// DeleteWithContext value by key with context
func (s *Storage) DeleteWithContext(ctx context.Context, key string) error {
	if len(key) <= 0 {
		return nil
	}

	_, err := neo4j.ExecuteQuery(ctx, s.db, s.cypherDelete, map[string]any{"key": key}, neo4j.EagerResultTransformer)
	return err
}

// Delete value by key
func (s *Storage) Delete(key string) error {
	return s.DeleteWithContext(context.Background(), key)
}

// ResetWithContext all keys with context. Remove all nodes
func (s *Storage) ResetWithContext(ctx context.Context) error {
	_, err := neo4j.ExecuteQuery(
		ctx, s.db, s.cypherReset,
		nil,
		neo4j.EagerResultTransformer,
	)

	return err
}

// Reset all keys. Remove all nodes
func (s *Storage) Reset() error {
	return s.ResetWithContext(context.Background())
}

// Close stops the collector and closes the driver unless it came from Config.DB; a failed close is reported so it can be retried.
func (s *Storage) Close() error {
	s.stopOnce.Do(func() {
		close(s.done)
		<-s.stopped
	})

	s.closeMu.Lock()
	defer s.closeMu.Unlock()

	if s.closed || !s.ownsDB {
		return nil
	}

	// Bounded so a stuck connection cannot hang the caller; a timeout is transient, so it is not latched.
	ctx, cancel := context.WithTimeout(context.Background(), closeTimeout)
	defer cancel()

	if err := s.db.Close(ctx); err != nil {
		return err
	}

	s.closed = true
	return nil
}

// Return database client
func (s *Storage) Conn() neo4j.DriverWithContext {
	return s.db
}

// gcTicker starts the gc ticker
func (s *Storage) gcTicker() {
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
			s.gc(ctx, t)
		}
	}
}

// gc deletes all expired entries
func (s *Storage) gc(ctx context.Context, t time.Time) {
	_, _ = neo4j.ExecuteQuery(ctx, s.db, s.cypherGC, map[string]any{"exp": t.Unix()}, neo4j.EagerResultTransformer)
}
