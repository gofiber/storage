package sqlite3

import (
	"context"
	"database/sql"
	"fmt"
	"sync"
	"time"

	_ "github.com/mattn/go-sqlite3"
)

// Storage interface that is implemented by storage providers
type Storage struct {
	db         *sql.DB
	gcInterval time.Duration
	done       chan struct{}
	stopped    chan struct{}
	closeOnce  sync.Once
	closeErr   error

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
			v  BLOB NOT NULL,
			e  BIGINT NOT NULL DEFAULT '0'
		);`,
		`CREATE INDEX IF NOT EXISTS e ON %s (e);`,
	}
)

// New creates a new storage
func New(config ...Config) *Storage {
	// Set default config
	cfg := configDefault(config...)

	// Create db
	db, err := sql.Open("sqlite3", cfg.Database)
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
		stopped:    make(chan struct{}),
		sqlSelect:  fmt.Sprintf(`SELECT v, e FROM %s WHERE k=?;`, cfg.Table),
		sqlInsert:  fmt.Sprintf("INSERT OR REPLACE INTO %s (k, v, e) VALUES (?,?,?)", cfg.Table),
		sqlDelete:  fmt.Sprintf("DELETE FROM %s WHERE k=?", cfg.Table),
		sqlReset:   fmt.Sprintf("DELETE FROM %s;", cfg.Table),
		sqlGC:      fmt.Sprintf("DELETE FROM %s WHERE e <= ? AND e != 0", cfg.Table),
	}

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

// Get gets value by key
func (s *Storage) Get(key string) ([]byte, error) {
	return s.GetWithContext(context.Background(), key)
}

// SetWithContext sets key with value and expiration time with context
func (s *Storage) SetWithContext(ctx context.Context, key string, val []byte, exp time.Duration) error {
	// Ain't Nobody Got Time For That
	if len(key) <= 0 || len(val) <= 0 {
		return nil
	}
	var expSeconds int64
	if exp > 0 {
		// The deadline is stored with a one-second granularity, so round it up:
		// truncating expires an entry early, and a sub-second expiration would be
		// stored as already past.
		deadline := time.Now().Add(exp)
		expSeconds = deadline.Unix()
		if deadline.Nanosecond() != 0 {
			expSeconds++
		}
	}
	_, err := s.db.ExecContext(ctx, s.sqlInsert, key, val, expSeconds)
	return err
}

// Set sets key with value and expiration time
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	return s.SetWithContext(context.Background(), key, val, exp)
}

// DeleteWithContext deletes entry by key with context
func (s *Storage) DeleteWithContext(ctx context.Context, key string) error {
	// Ain't Nobody Got Time For That
	if len(key) <= 0 {
		return nil
	}
	_, err := s.db.ExecContext(ctx, s.sqlDelete, key)
	return err
}

// Delete deletes entry by key
func (s *Storage) Delete(key string) error {
	return s.DeleteWithContext(context.Background(), key)
}

// ResetWithContext all entries, including unexpired ones with context
func (s *Storage) ResetWithContext(ctx context.Context) error {
	_, err := s.db.ExecContext(ctx, s.sqlReset)
	return err
}

// Reset all entries, including unexpired ones
func (s *Storage) Reset() error {
	return s.ResetWithContext(context.Background())
}

// Close the database
// Close stops the garbage collector and closes the database. It is safe to
// call Close more than once, every call reports the result of the single
// underlying close.
func (s *Storage) Close() error {
	s.closeOnce.Do(func() {
		close(s.done)
		// Wait for the collector to finish any sweep it started, it must
		// not run against a database that is being closed.
		<-s.stopped
		s.closeErr = s.db.Close()
	})
	return s.closeErr
}

// gcTicker starts the gc ticker
func (s *Storage) gcTicker() {
	defer close(s.stopped)

	// A sweep is abandoned when Close is called, so a query that stalls
	// cannot hold Close open indefinitely.
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()
	go func() {
		<-s.done
		cancel()
	}()

	ticker := time.NewTicker(s.gcInterval)
	defer ticker.Stop()
	for {
		select {
		case <-s.done:
			return
		case t := <-ticker.C:
			s.gc(ctx, t)
		}
	}
}

// gc deletes all expired entries
func (s *Storage) gc(ctx context.Context, t time.Time) {
	_, _ = s.db.ExecContext(ctx, s.sqlGC, t.Unix())
}

// Return database client
func (s *Storage) Conn() *sql.DB {
	return s.db
}
