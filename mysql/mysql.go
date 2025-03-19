package mysql

import (
	"context"
	"database/sql"
	"fmt"
	"strings"
	"time"

	_ "github.com/go-sql-driver/mysql"
)

// Storage interface that is implemented by storage providers
type Storage struct {
	db         *sql.DB
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
		"It should be BLOB but is instead %s. This will cause encoding-related panics if the DB is not migrated (see https://github.com/gofiber/storage/blob/main/MIGRATE.md)."
	dropQuery = "DROP TABLE IF EXISTS %s;"
	initQuery = []string{
		`CREATE TABLE IF NOT EXISTS %s ( 
			k  VARCHAR(64) NOT NULL DEFAULT '', 
			v  BLOB NOT NULL, 
			e  BIGINT NOT NULL DEFAULT '0', 
			PRIMARY KEY (k)
		) ENGINE=InnoDB DEFAULT CHARSET=utf8;`,
	}
	checkSchemaQuery = `SELECT DATA_TYPE FROM INFORMATION_SCHEMA.COLUMNS
		WHERE table_name = '%s' AND COLUMN_NAME = 'v';`
)

// New creates a new storage
func New(config ...Config) *Storage {
	var err error
	var db *sql.DB

	// Set default config
	cfg := configDefault(config...)

	if cfg.Db != nil {
		// Use passed db
		db = cfg.Db
	} else {
		// Create db
		db, err = sql.Open("mysql", cfg.dsn())
		if err != nil {
			panic(err)
		}

		// Set options
		db.SetMaxOpenConns(cfg.maxOpenConns)
		db.SetMaxIdleConns(cfg.maxIdleConns)
		db.SetConnMaxLifetime(cfg.connMaxLifetime)
	}

	// Ping database to ensure a connection has been made
	if err := db.Ping(); err != nil {
		panic(err)
	}

	// Drop table if Clear set to true
	if cfg.Reset {
		query := fmt.Sprintf(dropQuery, cfg.Table)
		if _, err = db.Exec(query); err != nil {
			_ = db.Close()
			panic(err)
		}
	}

	// Init database queries
	for _, query := range initQuery {
		query = fmt.Sprintf(query, cfg.Table)
		if _, err := db.Exec(query); err != nil {
			_ = db.Close()
			panic(err)
		}
	}

	// Create storage
	store := &Storage{
		gcInterval: cfg.GCInterval,
		db:         db,
		done:       make(chan struct{}),
		sqlSelect:  fmt.Sprintf("SELECT v, e FROM %s WHERE k=?;", cfg.Table),
		sqlInsert:  fmt.Sprintf("INSERT INTO %s (k, v, e) VALUES (?,?,?) ON DUPLICATE KEY UPDATE v = ?, e = ?", cfg.Table),
		sqlDelete:  fmt.Sprintf("DELETE FROM %s WHERE k=?", cfg.Table),
		sqlReset:   fmt.Sprintf("TRUNCATE TABLE %s;", cfg.Table),
		sqlGC:      fmt.Sprintf("DELETE FROM %s WHERE e <= ? AND e != 0", cfg.Table),
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
	row := s.db.QueryRowContext(ctx, s.sqlSelect, key)

	// Add db response to data

	var (
		data []byte
		exp  int64
	)

	if err := row.Scan(&data, &exp); err != nil {
		if err == sql.ErrNoRows {
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

// SetWithContext key with value and expiration time with context
func (s *Storage) SetWithContext(ctx context.Context, key string, val []byte, exp time.Duration) error {
	// Ain't Nobody Got Time For That
	if len(key) <= 0 || len(val) <= 0 {
		return nil
	}
	var expSeconds int64
	if exp != 0 {
		expSeconds = time.Now().Add(exp).Unix()
	}
	_, err := s.db.ExecContext(ctx, s.sqlInsert, key, val, expSeconds, val, expSeconds)
	return err
}

// Set key with value and expiration time
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	return s.SetWithContext(context.Background(), key, val, exp)
}

// DeleteWithContext key by key with context
func (s *Storage) DeleteWithContext(ctx context.Context, key string) error {
	// Ain't Nobody Got Time For That
	if len(key) <= 0 {
		return nil
	}
	_, err := s.db.ExecContext(ctx, s.sqlDelete, key)
	return err
}

// Delete entry by key
func (s *Storage) Delete(key string) error {
	return s.DeleteWithContext(context.Background(), key)
}

// ResetWithContext resets all keys with context
func (s *Storage) ResetWithContext(ctx context.Context) error {
	_, err := s.db.ExecContext(ctx, s.sqlReset)
	return err
}

// Reset resets all keys
func (s *Storage) Reset() error {
	return s.ResetWithContext(context.Background())
}

// Close the database
func (s *Storage) Close() error {
	s.done <- struct{}{}
	return s.db.Close()
}

// Return database client
func (s *Storage) Conn() *sql.DB {
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
	_, _ = s.db.Exec(s.sqlGC, t.Unix())
}

func (s *Storage) checkSchema(tableName string) {
	var data []byte

	row := s.db.QueryRow(fmt.Sprintf(checkSchemaQuery, tableName))
	if err := row.Scan(&data); err != nil {
		panic(err)
	}

	if strings.ToLower(string(data)) != "blob" {
		fmt.Printf(checkSchemaMsg, string(data))
	}
}
