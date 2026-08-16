package surrealdb

import (
	"context"
	"encoding/json"
	"errors"
	"log"
	"strings"
	"sync"
	"time"

	"github.com/surrealdb/surrealdb.go"
	"github.com/surrealdb/surrealdb.go/pkg/models"
)

// Storage interface that is implemented by storage providers
type Storage struct {
	db       *surrealdb.DB
	ownsDB   bool
	table    string
	stopGC   chan struct{}
	stopped  chan struct{}
	interval time.Duration
	stopOnce sync.Once
	closeMu  sync.Mutex
	closed   bool
}

// model represents a key-value storage record used in SurrealDB.
type model struct {
	Key  string `json:"key"`
	Body []byte `json:"body"`
	Exp  int64  `json:"exp"`
}

// closeTimeout bounds the cleanup close performed when initialization fails.
const closeTimeout = 10 * time.Second

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

	// Release the connection rather than leak it, on a bounded context of its own: the caller's may be what failed.
	closeOwned := func() {
		closeCtx, cancel := context.WithTimeout(context.Background(), closeTimeout)
		defer cancel()
		_ = db.Close(closeCtx)
	}

	if err = db.Use(ctx, cfg.Namespace, cfg.Database); err != nil {
		closeOwned()
		panic(err)
	}

	authData := &surrealdb.Auth{
		Username: cfg.Username,
		Password: cfg.Password,
	}

	token, err := db.SignIn(ctx, authData)
	if err != nil {
		closeOwned()
		panic(err)
	}

	if err = db.Authenticate(ctx, token); err != nil {
		closeOwned()
		panic(err)
	}

	return newStorage(db, true, cfg)
}

// NewFromConnection creates a SurrealDB storage on an existing client, which stays the caller's to close.
// The namespace, database and authentication are the caller's to set up; only DefaultTable and GCInterval are read.
func NewFromConnection(db *surrealdb.DB, config ...Config) *Storage {
	if db == nil {
		panic("surrealdb: nil client")
	}

	return newStorage(db, false, configDefault(config...))
}

func newStorage(db *surrealdb.DB, ownsDB bool, cfg Config) *Storage {
	storage := &Storage{
		db:       db,
		ownsDB:   ownsDB,
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
	// The storage interface documents an empty key as ignored without error.
	if len(key) == 0 {
		return nil, nil
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

	if m.Exp > 0 && time.Now().Unix() >= m.Exp {
		// Not deleted here: that would drop a value a concurrent Set wrote; the collector reclaims it.
		return nil, nil
	}

	return m.Body, nil
}

// Get returns the value by key
func (s *Storage) Get(key string) ([]byte, error) {
	return s.GetWithContext(context.Background(), key)
}

// SetWithContext sets a value by key with optional expiration, using ctx for the query.
func (s *Storage) SetWithContext(ctx context.Context, key string, val []byte, exp time.Duration) error {
	if len(key) == 0 || len(val) == 0 {
		return nil
	}

	var expiresAt int64
	if exp > 0 {
		// Round the one-second deadline up: truncating expires early, and a sub-second expiration would be stored as past.
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
		return nil
	}

	_, err := surrealdb.Delete[model](ctx, s.db, models.NewRecordID(s.table, key))
	return err
}

// Delete removes a key from storage
func (s *Storage) Delete(key string) error {
	return s.DeleteWithContext(context.Background(), key)
}

// ResetWithContext clears all keys in the storage table, using ctx for the query.
func (s *Storage) ResetWithContext(ctx context.Context) error {
	_, err := surrealdb.Delete[[]model](ctx, s.db, models.Table(s.table))
	return err
}

// Reset clears all keys in the storage table
func (s *Storage) Reset() error {
	return s.ResetWithContext(context.Background())
}

// Close stops GC, and closes the DB connection unless it came from NewFromConnection
func (s *Storage) Close() error {
	s.stopOnce.Do(func() {
		close(s.stopGC)
		<-s.stopped
	})

	s.closeMu.Lock()
	defer s.closeMu.Unlock()

	if s.closed {
		return nil
	}

	// A borrowed connection is not ours to close, but the collector above is stopped either way.
	if !s.ownsDB {
		s.closed = true
		return nil
	}

	// Bounded so a stuck connection cannot hang the caller: the interface gives Close no context.
	ctx, cancel := context.WithTimeout(context.Background(), closeTimeout)
	defer cancel()

	if err := s.db.Close(ctx); err != nil {
		return err
	}

	s.closed = true
	return nil
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
		// Skip expired records without deleting, matching the collector's comparison exactly so the two never disagree.
		if item.Exp > 0 && now >= item.Exp {
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

	// A sweep is abandoned on Close, so a stalled query cannot hold Close open indefinitely.
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

// cleanupExpired deletes expired keys server-side: select-then-delete costs a round trip per key and could drop a refreshed record.
func (s *Storage) cleanupExpired(ctx context.Context) {
	// The table is bound through type::table, not spliced: a name needing escaping silently stopped cleanup.
	if _, err := surrealdb.Query[any](
		ctx,
		s.db,
		"DELETE type::table($table) WHERE exp != 0 AND exp <= $now",
		map[string]any{"table": s.table, "now": time.Now().Unix()},
	); err != nil {
		// Close cancels ctx to abandon a sweep, so this is an ordinary shutdown rather than a cleanup failure.
		if errors.Is(err, context.Canceled) {
			return
		}
		log.Printf("surrealdb: expiry cleanup failed: %v", err)
	}
}
