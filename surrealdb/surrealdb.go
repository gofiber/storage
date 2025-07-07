package surrealdb

import (
	"context"
	"encoding/json"
	"errors"
	"time"

	"github.com/surrealdb/surrealdb.go"
	"github.com/surrealdb/surrealdb.go/pkg/models"
)

// Storage interface that is implemented by storage providers
type Storage struct {
	db       *surrealdb.DB
	table    string
	stopGC   chan struct{}
	interval time.Duration
}

// model represents a key-value storage record used in SurrealDB.
type model struct {
	Key  string `json:"key"`
	Body []byte `json:"body"`
	Exp  int64  `json:"exp"`
}

// New creates a new SurrealDB storage instance using the provided configuration.
func New(config ...Config) *Storage {
	cfg := configDefault(config...)
	db, err := surrealdb.New(cfg.ConnectionString)
	if err != nil {
		panic(err)
	}

	if err = db.Use(cfg.Namespace, cfg.Database); err != nil {
		panic(err)
	}

	authData := &surrealdb.Auth{
		Username: cfg.Username,
		Password: cfg.Password,
	}

	token, err := db.SignIn(authData)
	if err != nil {
		panic(err)
	}

	if err = db.Authenticate(token); err != nil {
		panic(err)
	}

	storage := &Storage{
		db:       db,
		table:    cfg.DefaultTable,
		stopGC:   make(chan struct{}),
		interval: cfg.GCInterval,
	}

	go storage.gc()
	return storage
}

// Get returns the value by key
func (s *Storage) Get(key string) ([]byte, error) {
	if len(key) == 0 {
		return nil, errors.New("key is required")
	}

	recordID := models.NewRecordID(s.table, key)
	m, err := surrealdb.Select[model, models.RecordID](s.db, recordID)
	if err != nil {
		return nil, err
	}

	if m.Exp > 0 && time.Now().Unix() > m.Exp {
		_ = s.Delete(key)
		return nil, nil
	}

	return m.Body, nil
}

// GetWithContext dummy context support: calls Get ignoring ctx
func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error) {
	return s.Get(key)
}

// Set sets a value by key with optional expiration
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	if len(key) == 0 {
		return errors.New("key is required")
	}

	var expiresAt int64
	if exp > 0 {
		expiresAt = time.Now().Add(exp).Unix()
	}

	_, err := surrealdb.Upsert[model](s.db, models.NewRecordID(s.table, key), &model{
		Key:  key,
		Body: val,
		Exp:  expiresAt,
	})
	return err
}

// SetWithContext dummy context support: calls Set ignoring ctx
func (s *Storage) SetWithContext(ctx context.Context, key string, val []byte, exp time.Duration) error {
	return s.Set(key, val, exp)
}

// Delete removes a key from storage
func (s *Storage) Delete(key string) error {
	if len(key) == 0 {
		return errors.New("key is required")
	}

	_, err := surrealdb.Delete[model](s.db, models.NewRecordID(s.table, key))
	return err
}

// DeleteWithContext dummy context support: calls Delete ignoring ctx
func (s *Storage) DeleteWithContext(ctx context.Context, key string) error {
	return s.Delete(key)
}

// Reset clears all keys in the storage table
func (s *Storage) Reset() error {
	_, err := surrealdb.Delete[[]model](s.db, models.Table(s.table))
	return err
}

// ResetWithContext dummy context support: calls Reset ignoring ctx
func (s *Storage) ResetWithContext(ctx context.Context) error {
	return s.Reset()
}

// Close stops GC and closes the DB connection
func (s *Storage) Close() error {
	close(s.stopGC)
	return s.db.Close()
}

// Conn returns the underlying SurrealDB client
func (s *Storage) Conn() *surrealdb.DB {
	return s.db
}

// List returns all stored keys and values as JSON
func (s *Storage) List() ([]byte, error) {
	records, err := surrealdb.Select[[]model, models.Table](s.db, models.Table(s.table))
	if err != nil {
		return nil, err
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

// gc runs periodic cleanup of expired keys
func (s *Storage) gc() {
	ticker := time.NewTicker(s.interval)
	defer ticker.Stop()

	for {
		select {
		case <-ticker.C:
			s.cleanupExpired()
		case <-s.stopGC:
			return
		}
	}
}

// cleanupExpired deletes expired keys from storage
func (s *Storage) cleanupExpired() {
	records, err := surrealdb.Select[[]model, models.Table](s.db, models.Table(s.table))
	if err != nil {
		return
	}
	now := time.Now().Unix()
	for _, item := range *records {
		if item.Exp > 0 && now > item.Exp {
			_ = s.Delete(item.Key)
		}
	}
}
