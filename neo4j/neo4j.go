package neo4jstore

import (
	"context"
	"encoding/json"
	"fmt"
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
			panic(err)
		}
	}

	ctx := context.Background()

	if err := db.VerifyConnectivity(ctx); err != nil {
		panic(err)
	}

	// truncate node if reset set to true
	if cfg.Reset {
		if _, err := neo4j.ExecuteQuery(ctx, db, fmt.Sprintf("MATCH (n:%s) DELETE n", cfg.Node), nil, neo4j.EagerResultTransformer); err != nil {
			db.Close(ctx)
			panic(err)
		}
	}

	store := &Storage{
		db:         db,
		gcInterval: cfg.GCInterval,
		done:       make(chan struct{}),

		cypherMatch:  fmt.Sprintf("OPTIONAL MATCH (n:%s{ k: $key }) RETURN n { .* } AS data", cfg.Node),
		cypherMerge:  fmt.Sprintf("MERGE (n:%s{ k: $key }) SET n.v = $val, n.e = $exp", cfg.Node),
		cypherDelete: fmt.Sprintf("MATCH (n:%s{ k: $key }) DELETE n", cfg.Node),
		cypherReset:  fmt.Sprintf("MATCH (n:%s) DELETE n", cfg.Node),
		cypherGC:     fmt.Sprintf("MATCH (n:%s) WHERE n.e <= $exp AND n.e != 0 DELETE n", cfg.Node),
	}

	go store.gcTicker()

	return store
}

func (s *Storage) Get(key string) ([]byte, error) {
	if len(key) <= 0 {
		return nil, nil
	}

	ctx := context.Background()

	res, err := neo4j.ExecuteQuery(ctx, s.db, s.cypherMatch, map[string]any{"key": key}, neo4j.EagerResultTransformer)
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
