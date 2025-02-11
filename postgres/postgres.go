package postgres

import (
	"context"
	"errors"
	"fmt"
	"os"
	"strings"
	"time"

	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgxpool"
)

// Storage interface that is implemented by storage providers
type Storage struct {
	db         *pgxpool.Pool
	gcInterval time.Duration
	done       chan struct{}

	sqlSelect string
	sqlInsert string
	sqlDelete string
	sqlReset  string
	sqlGC     string
}

var (
	checkSchemaMsg = "The `v` row has an incorrect data type. " +
		"It should be BYTEA but is instead %s. This will cause encoding-related panics if the DB is not migrated (see https://github.com/gofiber/storage/blob/main/MIGRATE.md)."
	dropQuery = `DROP TABLE IF EXISTS %s;`
	initQuery = []string{
		`CREATE TABLE IF NOT EXISTS %s (
			k  VARCHAR(64) PRIMARY KEY NOT NULL DEFAULT '',
			v  BYTEA NOT NULL,
			e  BIGINT NOT NULL DEFAULT '0'
		);`,
		`CREATE INDEX IF NOT EXISTS e ON %s (e);`,
	}
	checkSchemaQuery = `SELECT DATA_TYPE FROM INFORMATION_SCHEMA.COLUMNS
		WHERE table_name = '%s' AND COLUMN_NAME = 'v';`
)

// New creates a new storage
func New(config ...Config) *Storage {
	// Set default config
	cfg := configDefault(config...)

	// Select db connection
	var err error
	db := cfg.DB
	if db == nil {
		db, err = pgxpool.New(context.Background(), cfg.getDSN())
		if err != nil {
			fmt.Fprintf(os.Stderr, "Unable to create connection pool: %v\n", err)
		}
	}

	// Ping database
	if err := db.Ping(context.Background()); err != nil {
		panic(err)
	}

	// Drop table if set to true
	if cfg.Reset {
		if _, err := db.Exec(context.Background(), fmt.Sprintf(dropQuery, cfg.Table)); err != nil {
			db.Close()
			panic(err)
		}
	}

	// Init database queries
	for _, query := range initQuery {
		if _, err := db.Exec(context.Background(), fmt.Sprintf(query, cfg.Table)); err != nil {
			db.Close()
			panic(err)
		}
	}

	// Create storage
	store := &Storage{
		db:         db,
		gcInterval: cfg.GCInterval,
		done:       make(chan struct{}),
		sqlSelect:  fmt.Sprintf(`SELECT v, e FROM %s WHERE k=$1;`, cfg.Table),
		sqlInsert:  fmt.Sprintf("INSERT INTO %s (k, v, e) VALUES ($1, $2, $3) ON CONFLICT (k) DO UPDATE SET v = $4, e = $5", cfg.Table),
		sqlDelete:  fmt.Sprintf("DELETE FROM %s WHERE k=$1", cfg.Table),
		sqlReset:   fmt.Sprintf("TRUNCATE TABLE %s;", cfg.Table),
		sqlGC:      fmt.Sprintf("DELETE FROM %s WHERE e <= $1 AND e != 0", cfg.Table),
	}

	store.checkSchema(cfg.Table)

	// Start garbage collector
	go store.gcTicker()

	return store
}

// GetWithContext gets value by key with context
func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error) {
	if len(key) <= 0 {
		return nil, nil
	}
	row := s.db.QueryRow(ctx, s.sqlSelect, key)
	// Add db response to data
	var (
		data []byte
		exp  int64 = 0
	)
	if err := row.Scan(&data, &exp); err != nil {
		if errors.Is(err, pgx.ErrNoRows) {
			return nil, nil
		}
		return nil, err
	}

	// If the expiration time has already passed, then return nil
	if exp != 0 && exp <= time.Now().Unix() {
		return nil, nil
	}

	return data, nil
}

// Get gets value by key
func (s *Storage) Get(key string) ([]byte, error) {
	return s.GetWithContext(context.Background(), key)
}

// SetWithContext sets key with value
func (s *Storage) SetWithContext(ctx context.Context, key string, val []byte, exp time.Duration) error {
	// Ain't Nobody Got Time For That
	if len(key) <= 0 || len(val) <= 0 {
		return nil
	}
	var expSeconds int64
	if exp != 0 {
		expSeconds = time.Now().Add(exp).Unix()
	}
	_, err := s.db.Exec(ctx, s.sqlInsert, key, val, expSeconds, val, expSeconds)
	return err
}

// Set sets key with value
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	return s.SetWithContext(context.Background(), key, val, exp)
}

// DeleteWithContext deletes entry by key
func (s *Storage) DeleteWithContext(ctx context.Context, key string) error {
	// Ain't Nobody Got Time For That
	if len(key) <= 0 {
		return nil
	}
	_, err := s.db.Exec(ctx, s.sqlDelete, key)
	return err
}

// Delete deletes entry by key
func (s *Storage) Delete(key string) error {
	return s.DeleteWithContext(context.Background(), key)
}

// ResetWithContext resets all entries with context, including unexpired ones
func (s *Storage) ResetWithContext(ctx context.Context) error {
	_, err := s.db.Exec(ctx, s.sqlReset)
	return err
}

// Reset resets all entries, including unexpired ones
func (s *Storage) Reset() error {
	return s.ResetWithContext(context.Background())
}

// Close the database
func (s *Storage) Close() error {
	s.done <- struct{}{}
	s.db.Stat()
	s.db.Close()
	return nil
}

// Return database client
func (s *Storage) Conn() *pgxpool.Pool {
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
	_, _ = s.db.Exec(context.Background(), s.sqlGC, t.Unix())
}

func (s *Storage) checkSchema(tableName string) {
	var data []byte

	row := s.db.QueryRow(context.Background(), fmt.Sprintf(checkSchemaQuery, tableName))
	if err := row.Scan(&data); err != nil {
		panic(err)
	}

	if strings.ToLower(string(data)) != "bytea" {
		fmt.Printf(checkSchemaMsg, string(data))
	}
}
