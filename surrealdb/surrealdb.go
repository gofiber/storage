package surrealdb

import (
	"encoding/json"
	"errors"
	"github.com/surrealdb/surrealdb.go"
	"github.com/surrealdb/surrealdb.go/pkg/models"
	"time"
)

// Storage interface that is implemented by storage providers
type Storage struct {
	db       *surrealdb.DB
	table    string
	stopGC   chan struct{}
	interval time.Duration
}

// model represents a key-value storage record used in SurrealDB.
// It contains the key name, the stored byte value, and an optional expiration timestamp.
//
// Fields:
//   - Key: the unique identifier for the stored item.
//   - Body: the value stored as a byte slice (can represent any serialized data, such as JSON).
//   - Exp: the expiration time as a Unix timestamp (0 means no expiration).
type model struct {
	Key  string `json:"key"`
	Body []byte `json:"body"`
	Exp  int64  `json:"exp"`
}

// New creates a new SurrealDB storage instance using the provided configuration.
// Returns an error if the connection or authentication fails.
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

func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	if len(key) == 0 {
		return errors.New("key is required")
	}

	var expiresAt int64
	if exp > 0 {
		expiresAt = time.Now().Add(exp).Unix()
	}

	// Upsert is used instead of Create to allow overriding the same key if it already exists.
	_, err := surrealdb.Upsert[model](s.db, models.NewRecordID(s.table, key), &model{
		Key:  key,
		Body: val,
		Exp:  expiresAt,
	})
	return err
}

func (s *Storage) Delete(key string) error {
	if len(key) == 0 {
		return errors.New("key is required")
	}

	_, err := surrealdb.Delete[model](s.db, models.NewRecordID(s.table, key))
	return err
}

func (s *Storage) Reset() error {
	_, err := surrealdb.Delete[[]model](s.db, models.Table(s.table))
	return err
}

func (s *Storage) Close() error {
	close(s.stopGC)
	return s.db.Close()
}

func (s *Storage) Conn() *surrealdb.DB {
	return s.db
}

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
