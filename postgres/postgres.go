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
	done       chan struct{}

	sqlSelect string
	sqlInsert string
	sqlDelete string
	sqlReset  string
	sqlGC     string
}

var (
	dropQuery = `DROP TABLE IF EXISTS %s;`
	initQuery = []string{
		`CREATE TABLE IF NOT EXISTS %s (
			k  VARCHAR(64) PRIMARY KEY NOT NULL DEFAULT '',
			v  TEXT NOT NULL,
			e  BIGINT NOT NULL DEFAULT '0'
		);`,
		`CREATE INDEX IF NOT EXISTS e ON %s (e);`,
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
	if cfg.Reset {
		if _, err = db.Exec(fmt.Sprintf(dropQuery, cfg.Table)); err != nil {
			_ = db.Close()
			panic(err)
		}
	}

	// Init database queries
	for _, query := range initQuery {
		if _, err := db.Exec(fmt.Sprintf(query, cfg.Table)); err != nil {
			_ = db.Close()

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
		sqlReset:   fmt.Sprintf("DELETE FROM %s;", cfg.Table),
		sqlGC:      fmt.Sprintf("DELETE FROM %s WHERE e <= $1", cfg.Table),
	}

	// Start garbage collector
	go store.gc()

	return store
}

var noRows = errors.New("sql: no rows in result set")

// Get value by key
func (s *Storage) Get(key string) ([]byte, error) {
	if len(key) <= 0 {
		return nil, nil
	}
	row := s.db.QueryRow(s.sqlSelect, key)
	// Add db response to data
	var (
		data       = []byte{}
		exp  int64 = 0
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

// Delete entry by key
func (s *Storage) Delete(key string) error {
	// Ain't Nobody Got Time For That
	if len(key) <= 0 {
		return nil
	}
	_, err := s.db.Exec(s.sqlDelete, key)
	return err
}

// Reset all entries, including unexpired
func (s *Storage) Reset() error {
	_, err := s.db.Exec(s.sqlReset)
	return err
}

// Close the database
func (s *Storage) Close() error {
	s.done <- struct{}{}
	return s.db.Close()
}

// GC deletes all expired entries
func (s *Storage) gc() {
	ticker := time.NewTicker(s.gcInterval)
	defer ticker.Stop()
	for {
		select {
		case <-s.done:
			return
		case t := <-ticker.C:
			_, _ = s.db.Exec(s.sqlGC, t.Unix())
		}
	}
}
