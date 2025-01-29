package neo4jstore

import (
	"context"
	"encoding/json"
	"fmt"
	"os"
	"time"

	"github.com/gofiber/utils/v2"
	"github.com/neo4j/neo4j-go-driver/v5/neo4j"
)

// Storage interface that is implemented by storage providers
type Storage struct {
	db         neo4j.DriverWithContext
	gcInterval time.Duration
	done       chan struct{}

	cypherMatch  string
	cypherMerge  string
	cypherDelete string
	cypherReset  string
	cypherGC     string
}

type model struct {
	Key string `json:"k"`
	Val string `json:"v"`
	Exp int64  `json:"e"`
}

// New creates a new storage
func New(config ...Config) *Storage {
	// Set default config
	cfg := configDefault(config...)

	// Select db connection
	var err error
	db := cfg.DB
	if db == nil {
		db, err = neo4j.NewDriverWithContext(cfg.TargetBoltURI, cfg.Auth, cfg.Configurers...)
		if err != nil {
			fmt.Fprintf(os.Stderr, "Unable to create connection pool: %v\n", err)
		}
	}

	ctx := context.Background()

	if err := db.VerifyConnectivity(ctx); err != nil {
		panic(err)
	}

	// truncate node if reset set to true
	if cfg.Reset {
		if _, err := neo4j.ExecuteQuery(ctx, db, fmt.Sprintf("MATCH (n:%s) DELETE n FINISH", cfg.Node), nil, neo4j.EagerResultTransformer); err != nil {
			db.Close(ctx)
			panic(err)
		}
	}

	// create index on key
	if _, err := neo4j.ExecuteQuery(ctx, db, fmt.Sprintf("CREATE INDEX neo4jstore_key_idx IF NOT EXISTS FOR (n:%s) ON (n.k)", cfg.Node), nil, neo4j.EagerResultTransformer); err != nil {
		db.Close(ctx)
		panic(err)
	}

	store := &Storage{
		db:         db,
		gcInterval: cfg.GCInterval,
		done:       make(chan struct{}),

		cypherMatch:  fmt.Sprintf("OPTIONAL MATCH (n:%s{ k: $key }) RETURN n { .* } AS data", cfg.Node),
		cypherMerge:  fmt.Sprintf("MERGE (n:%s{ k: $key }) SET n.v = $val, n.e = $exp FINISH", cfg.Node),
		cypherDelete: fmt.Sprintf("MATCH (n:%s{ k: $key }) DELETE n FINISH", cfg.Node),
		cypherReset:  fmt.Sprintf("MATCH (n:%s) DELETE n FINISH", cfg.Node),
		cypherGC:     fmt.Sprintf("MATCH (n:%s) WHERE n.e <= $exp AND n.e != 0 DELETE n FINISH", cfg.Node),
	}

	go store.gcTicker()

	return store
}

func (s *Storage) Get(key string) ([]byte, error) {
	if len(key) <= 0 {
		return nil, nil
	}

	ctx := context.Background()

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
	mapToStruct(data, &model)

	// If the expiration time has already passed, then return nil
	if model.Exp != 0 && model.Exp <= time.Now().Unix() {
		return nil, nil
	}

	return utils.UnsafeBytes(model.Val), nil
}

// Set key with value
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
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

	ctx := context.Background()

	_, err := neo4j.ExecuteQuery(
		ctx, s.db, s.cypherMerge,
		map[string]any{"key": data.Key, "val": data.Val, "exp": data.Exp},
		neo4j.EagerResultTransformer,
	)

	return err
}

// Delete value by key
func (s *Storage) Delete(key string) error {
	if len(key) <= 0 {
		return nil
	}

	_, err := neo4j.ExecuteQuery(context.Background(), s.db, s.cypherDelete, map[string]any{"key": key}, neo4j.EagerResultTransformer)
	return err
}

// Reset all keys. Remove all nodes
func (s *Storage) Reset() error {
	_, err := neo4j.ExecuteQuery(
		context.Background(), s.db, s.cypherReset,
		nil,
		neo4j.EagerResultTransformer,
	)

	return err
}

// Close the database
func (s *Storage) Close() error {
	s.done <- struct{}{}

	return s.db.Close(context.Background())
}

// Return database client
func (s *Storage) Conn() neo4j.DriverWithContext {
	return s.db
}

// gcTicker starts the gc ticker
func (s *Storage) gcTicker() {
	ticker := time.NewTicker(s.gcInterval)
	defer ticker.Stop()
	for {
		select {
		case <-s.done:
			return
		case t := <-ticker.C:
			s.gc(t)
		}
	}
}

// gc deletes all expired entries
func (s *Storage) gc(t time.Time) {
	_, _ = neo4j.ExecuteQuery(context.Background(), s.db, s.cypherGC, map[string]any{"exp": t.Unix()}, neo4j.EagerResultTransformer)
}

func mapToStruct(src map[string]any, dest any) {
	bt, _ := json.Marshal(src)

	json.Unmarshal(bt, dest)
}
