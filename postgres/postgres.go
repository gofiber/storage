package postgres

import (
	"database/sql"
	"errors"
	"fmt"
	"net/url"
	"time"

	"github.com/gofiber/utils"
	_ "github.com/lib/pq"
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
	dropQuery = `DROP TABLE IF EXISTS %s;`
	initQuery = []string{
		`CREATE TABLE IF NOT EXISTS %s (
			key  VARCHAR(64) PRIMARY KEY NOT NULL DEFAULT '',
			data TEXT NOT NULL,
			exp  BIGINT NOT NULL DEFAULT '0'
		);`,
		`CREATE INDEX IF NOT EXISTS exp ON %s (exp);`,
	}
)

// New creates a new storage
func New(config ...Config) *Storage {
	// Set default config
	cfg := configDefault(config...)

	// Create data source name
	var dsn string = "postgresql://"
	if cfg.Username != "" {
		dsn += url.QueryEscape(cfg.Username)
	}
	if cfg.Password != "" {
		dsn += ":" + cfg.Password
	}
	if cfg.Username != "" || cfg.Password != "" {
		dsn += "@"
	}
	dsn += fmt.Sprintf("%s:%d", url.QueryEscape(cfg.Host), cfg.Port)
	dsn += "/" + url.QueryEscape(cfg.Database)
	dsn += fmt.Sprintf("/%s?connect_timeout=%d&sslmode=disable",
		url.QueryEscape(cfg.Database),
		int64(cfg.timeout.Seconds()),
	)

	// Create db
	db, err := sql.Open("postgres", dsn)
	if err != nil {
		panic(err)
	}

	// Set database options
	db.SetMaxOpenConns(cfg.maxOpenConns)
	db.SetMaxIdleConns(cfg.maxIdleConns)
	db.SetConnMaxLifetime(cfg.connMaxLifetime)

	// Ping database
	if err := db.Ping(); err != nil {
		panic(err)
	}

	// Drop table if set to true
	if cfg.Clear {
		if _, err = db.Exec(fmt.Sprintf(dropQuery, cfg.Table)); err != nil {
			_ = db.Close()
			panic(err)
		}
	}

	// Init database queries
	for _, query := range initQuery {
		if _, err := db.Exec(fmt.Sprintf(query, cfg.Table)); err != nil {
			_ = db.Close()
			fmt.Println(fmt.Sprintf(query, cfg.Table))
			panic(err)
		}
	}

	// Create storage
	store := &Storage{
		db:         db,
		gcInterval: cfg.GCInterval,
		sqlSelect:  fmt.Sprintf(`SELECT data, exp FROM %s WHERE key=$1;`, cfg.Table),
		sqlInsert:  fmt.Sprintf(`INSERT INTO %s (key, data, exp) VALUES ($1, $2, $3)`, cfg.Table),
		sqlDelete:  fmt.Sprintf("DELETE FROM %s WHERE key=$1", cfg.Table),
		sqlClear:   fmt.Sprintf("DELETE FROM %s;", cfg.Table),
		sqlGC:      fmt.Sprintf("DELETE FROM %s WHERE exp <= $1", cfg.Table),
	}

	// Start garbage collector
	go store.gc()

	return store
}

var noRows = errors.New("sql: no rows in result set")

// Get value by key
func (s *Storage) Get(key string) ([]byte, error) {
	row := s.db.QueryRow(s.sqlSelect, key)
	// Add db response to data
	var (
		data       = []byte{}
		exp  int64 = 0
	)
	if err := row.Scan(&data, &exp); err != nil {
		if err == sql.ErrNoRows {
			return nil, ErrNotExist
		}
		return nil, err
	}

	// If the expiration time has already passed, then return nil
	if exp <= time.Now().Unix() && exp != 0 {
		return nil, nil
	}

	return data, nil
}

// Set key with value
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	// Ain't Nobody Got Time For That
	if len(val) <= 0 {
		return nil
	}
	_, err := s.db.Exec(s.sqlInsert, key, utils.UnsafeString(val), time.Now().Add(exp).Unix())
	return err
}

// Delete entry by key
func (s *Storage) Delete(key string) error {
	_, err := s.db.Exec(s.sqlDelete, key)
	return err
}

// Clear all entries, including unexpired
func (s *Storage) Clear() error {
	_, err := s.db.Exec(s.sqlClear)
	return err
}

// GC deletes all expired entries
func (s *Storage) gc() {
	tick := time.NewTicker(s.gcInterval)
	for {
		<-tick.C
		if _, err := s.db.Exec(s.sqlGC); err != nil {
			panic(err)
		}
	}
}
