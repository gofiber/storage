package mysql

import (
	"database/sql"
	"fmt"
	"time"

	_ "github.com/go-sql-driver/mysql"
	"github.com/gofiber/utils"
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
	dropQuery = "DROP TABLE IF EXISTS %s;"
	initQuery = []string{
		`CREATE TABLE IF NOT EXISTS %s ( 
			k  VARCHAR(64) NOT NULL DEFAULT '', 
			v  TEXT NOT NULL, 
			e  BIGINT NOT NULL DEFAULT '0', 
			PRIMARY KEY (k)
		) ENGINE=InnoDB DEFAULT CHARSET=utf8;`,
	}
)

// New creates a new storage
func New(config ...Config) *Storage {
	// Set default config
	cfg := configDefault(config...)

	// Create db
	db, err := sql.Open("mysql", cfg.dsn())
	if err != nil {
		panic(err)
	}

	// Set options
	db.SetMaxOpenConns(cfg.maxOpenConns)
	db.SetMaxIdleConns(cfg.maxIdleConns)
	db.SetConnMaxLifetime(cfg.connMaxLifetime)

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

	// Start garbage collector
	go store.gcTicker()

	return store
}

var noRows = "sql: no rows in result set"

// Get value by key
func (s *Storage) Get(key string) ([]byte, error) {
	if len(key) <= 0 {
		return nil, nil
	}
	row := s.db.QueryRow(s.sqlSelect, key)

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

// Set key with value
// Set key with value
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	// Ain't Nobody Got Time For That
	if len(key) <= 0 || len(val) <= 0 {
		return nil
	}
	var expSeconds int64
	if exp != 0 {
		expSeconds = time.Now().Add(exp).Unix()
	}
	valStr := utils.UnsafeString(val)
	_, err := s.db.Exec(s.sqlInsert, key, valStr, expSeconds, valStr, expSeconds)
	return err
}

// Delete key by key
func (s *Storage) Delete(key string) error {
	// Ain't Nobody Got Time For That
	if len(key) <= 0 {
		return nil
	}
	_, err := s.db.Exec(s.sqlDelete, key)
	return err
}

// Reset all keys
func (s *Storage) Reset() error {
	_, err := s.db.Exec(s.sqlReset)
	return err
}

// Close the database
func (s *Storage) Close() error {
	s.done <- struct{}{}
	return s.db.Close()
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
