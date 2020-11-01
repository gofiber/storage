package sqlite3

import (
	"database/sql"
	"errors"
	"fmt"
	"time"

	"github.com/gofiber/utils"

	_ "github.com/mattn/go-sqlite3"
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

	// Create db
	db, err := sql.Open("sqlite3", cfg.FilePath)
	if err != nil {
		panic(err)
	}

	// Set database options
	db.SetMaxOpenConns(cfg.MaxOpenConns)
	db.SetMaxIdleConns(cfg.MaxIdleConns)
	db.SetConnMaxLifetime(cfg.ConnMaxLifetime)

	// Ping database
	if err := db.Ping(); err != nil {
		panic(err)
	}

	// Drop table if set to true
	if cfg.DropTable {
		if _, err = db.Exec(fmt.Sprintf(dropQuery, cfg.TableName)); err != nil {
			_ = db.Close()
			panic(err)
		}
	}

	// Init database queries
	for _, query := range initQuery {
		if _, err := db.Exec(fmt.Sprintf(query, cfg.TableName)); err != nil {
			_ = db.Close()
			fmt.Println(fmt.Sprintf(query, cfg.TableName))
			panic(err)
		}
	}

	// Create storage
	store := &Storage{
		db:         db,
		gcInterval: cfg.GCInterval,
		sqlSelect:  fmt.Sprintf(`SELECT data, exp FROM %s WHERE key=?;`, cfg.TableName),
		sqlInsert:  fmt.Sprintf("INSERT INTO %s (key, data, exp) VALUES (?,?,?)", cfg.TableName),
		sqlDelete:  fmt.Sprintf("DELETE FROM %s WHERE key=?", cfg.TableName),
		sqlClear:   fmt.Sprintf("DELETE FROM %s;", cfg.TableName),
		sqlGC:      fmt.Sprintf("DELETE FROM %s WHERE exp <= ?", cfg.TableName),
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
		if err != noRows {
			return nil, err
		}
		return nil, nil
	}

	// If the expiration time has already passed, then return nil
	if time.Now().After(time.Unix(exp, 0)) {
		return nil, nil
	}

	return data, nil
}

// Set key with value
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	_, err := s.db.Exec(s.sqlInsert, key, utils.GetString(val), time.Now().Add(exp).Unix())
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
