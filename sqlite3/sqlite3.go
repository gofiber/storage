package sqlite3

import (
	"database/sql"
	"fmt"
	"time"

	"github.com/gofiber/utils"
)

// Storage interface that is implemented by storage providers
type Storage struct {
	db         *sql.DB
	gcInterval time.Duration

	selectQuery string
	insertQuery string
	deleteQuery string
	clearQuery  string
	gcQuery     string
}

var (
	migrateQuery = `
		CREATE TABLE IF NOT EXISTS %s (
			id VARCHAR(64) PRIMARY KEY NOT NULL DEFAULT '',
			key TEXT NOT NULL,
			data TEXT NOT NULL,
			exp BIGINT NOT NULL
		);
		`
)

// New creates a new storage
func New(config ...Config) *Storage {
	// Set default config
	cfg := ConfigDefault

	// Override config if provided
	if len(config) > 0 {
		cfg = configDefault(config[0])
	}

	// Create storage
	store := &Storage{
		gcInterval:  cfg.GCInterval,
		selectQuery: fmt.Sprintf(`SELECT data, exp FROM %s WHERE key=?;`, cfg.TableName),
		insertQuery: fmt.Sprintf("INSERT INTO %s (key, data, exp) VALUES (?,?,?)", cfg.TableName),
		deleteQuery: fmt.Sprintf("DELETE FROM %s WHERE key=?", cfg.TableName),
		clearQuery:  fmt.Sprintf("DELETE FROM %s;", cfg.TableName),
		gcQuery:     fmt.Sprintf("DELETE FROM %s WHERE exp <= ?", cfg.TableName),
	}

	// Create db
	db, err := sql.Open("sqlite3", cfg.FilePath)
	if err != nil {
		panic(err)
	}
	store.db = db

	// Migrate db
	_, err = store.db.Exec(fmt.Sprintf(migrateQuery, cfg.TableName))
	if err != nil {
		panic(err)
	}

	// Start garbage collector
	go store.gc()

	return store
}

// Get value by key
func (s *Storage) Get(key string) ([]byte, error) {
	row := s.db.QueryRow(s.selectQuery, key)

	// Add db response to data
	var (
		data       = []byte{}
		exp  int64 = 0
	)
	if err := row.Scan(&data, &exp); err != nil {
		return nil, err
	}

	// If the expiration time has already passed, then return nil
	if time.Now().After(time.Unix(exp, 0)) {
		return nil, nil
	}

	return data, nil
}

// Set key with value
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	_, err := s.db.Exec(s.insertQuery, key, utils.GetString(val), time.Now().Add(exp).Unix())
	return err
}

// Delete entry by key
func (s *Storage) Delete(key string) error {
	_, err := s.db.Exec(s.deleteQuery, key)
	return err
}

// Clear all entries, including unexpired
func (s *Storage) Clear() error {
	_, err := s.db.Exec(s.clearQuery)
	return err
}

// GC deletes all expired entries
func (s *Storage) gc() {
	tick := time.NewTicker(s.gcInterval)
	for {
		<-tick.C
		if _, err := s.db.Exec(s.gcQuery); err != nil {
			panic(err)
		}
	}
}
