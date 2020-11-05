package mysql

import (
	"database/sql"
	"errors"
	"fmt"
	"time"

	_ "github.com/go-sql-driver/mysql"
	"github.com/gofiber/utils"
)

// Storage interface that is implemented by storage providers
type Storage struct {
	db         *sql.DB
	gcInterval time.Duration

	sqlSelect string
	sqlInsert string
	sqlDelete string
	sqlClear  string
	sqlGC     string
}

// Common storage errors
var ErrNotExist = errors.New("key does not exist")

var (
	dropQuery = "DROP TABLE IF EXISTS %s;"
	initQuery = []string{
		"CREATE TABLE IF NOT EXISTS %s ( `id` VARCHAR(64) NOT NULL DEFAULT '' , `data` TEXT NOT NULL , `exp` BIGINT NOT NULL DEFAULT '0' , PRIMARY KEY (`id`)) ENGINE=InnoDB DEFAULT CHARSET=utf8;",
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
	if cfg.Clear {
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
		sqlSelect:  fmt.Sprintf("SELECT data, exp FROM %s WHERE id=?;", cfg.Table),
		sqlInsert:  fmt.Sprintf("INSERT INTO %s (id, data, exp) VALUES (?,?,?) ON DUPLICATE KEY UPDATE data = ?, exp = ?", cfg.Table),
		sqlDelete:  fmt.Sprintf("DELETE FROM %s WHERE id=?", cfg.Table),
		sqlClear:   fmt.Sprintf("DELETE FROM %s;", cfg.Table),
		sqlGC:      fmt.Sprintf("DELETE FROM %s WHERE exp <= ?", cfg.Table),
	}

	// Start garbage collector
	go store.gc()

	return store
}

var noRows = "sql: no rows in result set"

// Get value by key
func (s *Storage) Get(key string) ([]byte, error) {
	row := s.db.QueryRow(s.sqlSelect, key)

	// Add db response to data

	var (
		data []byte
		exp  int64
	)

	if err := row.Scan(&data, &exp); err != nil {
		if err == sql.ErrNoRows {
			return nil, ErrNotExist
		}
		return nil, err
	}

	// If the expiration time has already passed, then return nil
	if exp != 0 && exp <= time.Now().Unix() {
		return nil, ErrNotExist
	}

	return data, nil
}

// Set key with value
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	// Ain't Nobody Got Time For That
	if len(val) <= 0 {
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
	_, err := s.db.Exec(s.sqlDelete, key)
	return err
}

// Clear all keys
func (s *Storage) Clear() error {
	_, err := s.db.Exec(s.sqlClear)
	return err
}

// Garbage collector to delete expired keys
func (s *Storage) gc() {
	tick := time.NewTicker(s.gcInterval)
	for {
		<-tick.C
		if _, err := s.db.Exec(s.sqlGC); err != nil {
			panic(err)
		}
	}
}
