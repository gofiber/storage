package surrealdb

import (
	"context"
	"encoding/json"
	"errors"
	"strings"
	"sync"
	"time"

	"github.com/surrealdb/surrealdb.go"
	"github.com/surrealdb/surrealdb.go/pkg/models"
)

// Storage interface that is implemented by storage providers
type Storage struct {
	db        *surrealdb.DB
	table     string
	stopGC    chan struct{}
	stopped   chan struct{}
	interval  time.Duration
	closeOnce sync.Once
	closeErr  error
}

// model represents a key-value storage record used in SurrealDB.
type model struct {
	Key  string `json:"key"`
	Body []byte `json:"body"`
	Exp  int64  `json:"exp"`
}

// New creates a new SurrealDB storage instance using context.Background() for initialization.
func New(config ...Config) *Storage {
	return NewWithContext(context.Background(), config...)
}

// NewWithContext creates a new SurrealDB storage instance, using ctx for the
// initialization operations (connect, namespace selection, and authentication).
func NewWithContext(ctx context.Context, config ...Config) *Storage {
	cfg := configDefault(config...)
	db, err := surrealdb.FromEndpointURLString(ctx, cfg.ConnectionString)
	if err != nil {
		panic(err)
	}

	if err = db.Use(ctx, cfg.Namespace, cfg.Database); err != nil {
		panic(err)
	}

	authData := &surrealdb.Auth{
		Username: cfg.Username,
		Password: cfg.Password,
	}

	token, err := db.SignIn(ctx, authData)
	if err != nil {
		panic(err)
	}

	if err = db.Authenticate(ctx, token); err != nil {
		panic(err)
	}

	storage := &Storage{
		db:       db,
		table:    cfg.DefaultTable,
		stopGC:   make(chan struct{}),
		stopped:  make(chan struct{}),
		interval: cfg.GCInterval,
	}

	go storage.gc()
	return storage
}

// GetWithContext returns the value by key, using ctx for the query.
func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error) {
	if len(key) == 0 {
		return nil, errors.New("key is required")
	}

	recordID := models.NewRecordID(s.table, key)
	m, err := surrealdb.Select[model](ctx, s.db, recordID)
	if err != nil {
		if isTableNotFoundError(err, s.table) {
			return nil, nil
		}
		return nil, err
	}

	// Check if record exists
	if m == nil {
		return nil, nil
	}

	if m.Exp > 0 && time.Now().Unix() > m.Exp {
		_ = s.Delete(key)
		return nil, nil
	}

	return m.Body, nil
}

// Get returns the value by key
func (s *Storage) Get(key string) ([]byte, error) {
	return s.GetWithContext(context.Background(), key)
}

// SetWithContext sets a value by key with optional expiration, using ctx for
// the query.
func (s *Storage) SetWithContext(ctx context.Context, key string, val []byte, exp time.Duration) error {
	if len(key) == 0 {
		return errors.New("key is required")
	}

	var expiresAt int64
	if exp > 0 {
		// The deadline is stored with a one-second granularity, so round it
		// up: truncating expires an entry early, and a sub-second expiration
		// would be stored as already past.
		deadline := time.Now().Add(exp)
		expiresAt = deadline.Unix()
		if deadline.Nanosecond() != 0 {
			expiresAt++
		}
	}

	_, err := surrealdb.Upsert[model](ctx, s.db, models.NewRecordID(s.table, key), &model{
		Key:  key,
		Body: val,
		Exp:  expiresAt,
	})
	return err
}

// Set sets a value by key with optional expiration
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	return s.SetWithContext(context.Background(), key, val, exp)
}

// DeleteWithContext removes a key from storage, using ctx for the query.
func (s *Storage) DeleteWithContext(ctx context.Context, key string) error {
	if len(key) == 0 {
		return errors.New("key is required")
	}

	_, err := surrealdb.Delete[model](ctx, s.db, models.NewRecordID(s.table, key))
	return err
}

// Delete removes a key from storage
func (s *Storage) Delete(key string) error {
	return s.DeleteWithContext(context.Background(), key)
}

// ResetWithContext clears all keys in the storage table, using ctx for the
// query.
func (s *Storage) ResetWithContext(ctx context.Context) error {
	_, err := surrealdb.Delete[[]model](ctx, s.db, models.Table(s.table))
	return err
}

// Reset clears all keys in the storage table
func (s *Storage) Reset() error {
	return s.ResetWithContext(context.Background())
}

// Close stops GC and closes the DB connection
func (s *Storage) Close() error {
	s.closeOnce.Do(func() {
		close(s.stopGC)
		// Wait for the collector to finish any sweep it started, it must not
		// run against a database that is being closed.
		<-s.stopped
		s.closeErr = s.db.Close(context.Background())
	})
	return s.closeErr
}

// Conn returns the underlying SurrealDB client
func (s *Storage) Conn() *surrealdb.DB {
	return s.db
}

// List returns all stored keys and values as JSON
func (s *Storage) List() ([]byte, error) {
	records, err := surrealdb.Select[[]model, models.Table](context.Background(), s.db, models.Table(s.table))
	if err != nil {
		if isTableNotFoundError(err, s.table) {
			return json.Marshal(map[string][]byte{})
		}
		return nil, err
	}

	if records == nil {
		return json.Marshal(map[string][]byte{})
	}

	data := make(map[string][]byte, len(*records))
	now := time.Now().Unix()

	for _, item := range *records {
		if item.Exp > 0 && now > item.Exp {
			_ = s.Delete(item.Key)
			continue
		}
		data[item.Key] = item.Body
	}

	return json.Marshal(data)
}

func isTableNotFoundError(err error, table string) bool {
	if err == nil {
		return false
	}

	msg := strings.ToLower(err.Error())
	if !strings.Contains(msg, "table") || !strings.Contains(msg, "does not exist") {
		return false
	}

	return table == "" || strings.Contains(msg, strings.ToLower(table))
}

// gc runs periodic cleanup of expired keys
func (s *Storage) gc() {
	defer close(s.stopped)

	// A sweep is abandoned when Close is called, so a query that stalls
	// cannot hold Close open indefinitely.
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()
	go func() {
		<-s.stopGC
		cancel()
	}()

	ticker := time.NewTicker(s.interval)
	defer ticker.Stop()

	for {
		select {
		case <-ticker.C:
			s.cleanupExpired(ctx)
		case <-s.stopGC:
			return
		}
	}
}

// cleanupExpired deletes expired keys from storage
func (s *Storage) cleanupExpired(ctx context.Context) {
	records, err := surrealdb.Select[[]model, models.Table](ctx, s.db, models.Table(s.table))
	if err != nil || records == nil {
		return
	}
	now := time.Now().Unix()
	for _, item := range *records {
		if ctx.Err() != nil {
			return
		}
		if item.Exp > 0 && now > item.Exp {
			_ = s.DeleteWithContext(ctx, item.Key)
		}
	}
}
