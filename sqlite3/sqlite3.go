package sqlite3

import (
	"context"
	"database/sql"
	"errors"
	"fmt"
	"regexp"
	"sync"
	"sync/atomic"
	"time"

	_ "github.com/mattn/go-sqlite3"
)

// ErrClosed is returned by every operation attempted after Close.
var ErrClosed = errors.New("sqlite3: storage is closed")

// Storage interface that is implemented by storage providers
type Storage struct {
	db         *sql.DB
	ownsDB     bool
	gcInterval time.Duration
	done       chan struct{}
	stopped    chan struct{}
	stopOnce   sync.Once
	closed     atomic.Bool

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

	return newStorage(db, true, cfg)
}

// NewFromConnection creates a new storage on an existing database handle, which stays the caller's to close.
func NewFromConnection(db *sql.DB, config ...Config) *Storage {
	if db == nil {
		panic("sqlite3: nil database handle")
	}

	return newStorage(db, false, configDefault(config...))
}

// newStorage prepares the table on db and starts the collector; db is released only when this driver opened it.
// validTableName matches the identifiers this driver interpolates into its statements: the table
// name reaches SQL as text rather than as a bound parameter, which no driver supports for
// identifiers, so anything outside this shape is refused instead of being quoted and hoped for.
var validTableName = regexp.MustCompile(`^[A-Za-z_][A-Za-z0-9_]*$`)

// validateTableName rejects a table name that could carry SQL of its own.
func validateTableName(table string) error {
	if !validTableName.MatchString(table) {
		return fmt.Errorf("sqlite3: invalid table name %q: only letters, digits and underscores are allowed, and it may not start with a digit", table)
	}

	return nil
}

func newStorage(db *sql.DB, ownsDB bool, cfg Config) *Storage {
	closeOwned := func() {
		if ownsDB {
			_ = db.Close()
		}
	}

	// Checked before any statement is built: the table name is interpolated into every one of
	// them, and with Reset set the first of those statements drops a table.
	if err := validateTableName(cfg.Table); err != nil {
		closeOwned()
		panic(err)
	}

	// Ping database
	if err := db.Ping(); err != nil {
		closeOwned()
		panic(err)
	}

	// Drop table if set to true
	if cfg.Reset {
		if _, err := db.Exec(fmt.Sprintf(dropQuery, cfg.Table)); err != nil {
			closeOwned()
			panic(err)
		}
	}

	// Init database queries
	for _, query := range initQuery {
		if _, err := db.Exec(fmt.Sprintf(query, cfg.Table)); err != nil {
			closeOwned()
			panic(err)
		}
	}

	// Create storage
	store := &Storage{
		db:         db,
		ownsDB:     ownsDB,
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
	if s.isClosed() {
		return nil, ErrClosed
	}
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
	if s.isClosed() {
		return ErrClosed
	}
	// Ain't Nobody Got Time For That
	if len(key) <= 0 || len(val) <= 0 {
		return nil
	}
	var expSeconds int64
	if exp > 0 {
		// Round the one-second deadline up: truncating expires early, and a sub-second expiration would be stored as past.
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
	if s.isClosed() {
		return ErrClosed
	}
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
	if s.isClosed() {
		return ErrClosed
	}
	_, err := s.db.ExecContext(ctx, s.sqlReset)
	return err
}

// Reset all entries, including unexpired ones
func (s *Storage) Reset() error {
	return s.ResetWithContext(context.Background())
}

// isClosed reports whether Close ran; a borrowed handle stays open, so the latch is the only signal.
func (s *Storage) isClosed() bool {
	return s.closed.Load()
}

// Close stops the collector and closes the database unless it came from NewFromConnection; safe to call more than once, and a failed close is reported once.
func (s *Storage) Close() error {
	s.stopOnce.Do(func() {
		close(s.done)
		<-s.stopped
	})

	// Idempotent: only the first Close tears anything down.
	if !s.closed.CompareAndSwap(false, true) {
		return nil
	}

	if !s.ownsDB {
		return nil
	}

	// Latched even on failure: database/sql marks itself closed first, so a retry would report a success that never happened.
	err := s.db.Close()
	return err
}

// gcTicker starts the gc ticker
func (s *Storage) gcTicker() {
	defer close(s.stopped)

	// A sweep is abandoned on Close, so a stalled query cannot hold Close open indefinitely.
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
