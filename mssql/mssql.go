package mssql

import (
	"context"
	"database/sql"
	"fmt"
	"net/url"
	"strings"
	"sync"
	"time"

	_ "github.com/microsoft/go-mssqldb"
)

// Storage interface that is implemented by storage providers
type Storage struct {
	db         *sql.DB
	ownsDB     bool
	gcInterval time.Duration
	done       chan struct{}
	stopped    chan struct{}
	stopOnce   sync.Once
	closeMu    sync.Mutex
	closed     bool

	sqlSelect string
	sqlInsert string
	sqlDelete string
	sqlReset  string
	sqlGC     string
}

var (
	checkSchemaMsg = "The `v` row has an incorrect data type. " +
		"It should be VARBINARY(MAX) but is instead %s. This will cause encoding-related panics if the DB is not migrated (see https://github.com/gofiber/storage/blob/main/MIGRATE.md)."
	dropQuery = `IF EXISTS(SELECT * FROM sys.tables WHERE name = '%s')
		DROP TABLE %s;`
	initQuery = []string{
		`IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = '%s')
		CREATE TABLE %s (
					k  VARCHAR(64) PRIMARY KEY NOT NULL DEFAULT '',
					v  VARBINARY(MAX) NOT NULL,
					e  BIGINT NOT NULL DEFAULT '0'
		);`,
		`IF NOT EXISTS(SELECT * FROM sys.indexes WHERE name = 'e')
		CREATE INDEX e ON %s (e);`,
	}
	checkSchemaQuery = `SELECT DATA_TYPE FROM INFORMATION_SCHEMA.COLUMNS
		WHERE table_name = '%s' AND COLUMN_NAME = 'v';`
)

// New creates a new storage
func New(config ...Config) *Storage {
	// Set default config
	cfg := configDefault(config...)

	// Create data source name
	var dsn string
	if cfg.ConnectionURI != "" {
		dsn = cfg.ConnectionURI
	} else {
		dsn = "sqlserver://"
		if cfg.Username != "" {
			dsn += url.QueryEscape(cfg.Username)
		}
		if cfg.Password != "" {
			dsn += ":" + cfg.Password
		}
		if cfg.Username != "" || cfg.Password != "" {
			dsn += "@"
		}
		// unix socket host path
		if strings.HasPrefix(cfg.Host, "/") {
			dsn += fmt.Sprintf("%s:%d", cfg.Host, cfg.Port)
		} else {
			dsn += fmt.Sprintf("%s:%d", url.QueryEscape(cfg.Host), cfg.Port)
		}
		if cfg.Instance != "" {
			dsn += "/" + cfg.Instance
		}
		dsn += fmt.Sprintf("?database=%s&connection+timeout=%d&encrypt=%s",
			url.QueryEscape(cfg.Database),
			int64(cfg.timeout.Seconds()),
			cfg.SslMode)
	}

	// Create db
	db, err := sql.Open("sqlserver", dsn)
	if err != nil {
		panic(err)
	}

	// Set database options
	db.SetMaxOpenConns(cfg.maxOpenConns)
	db.SetMaxIdleConns(cfg.maxIdleConns)
	db.SetConnMaxLifetime(cfg.connMaxLifetime)

	return newStorage(db, true, cfg)
}

// NewFromConnection creates a new storage on an existing database handle, which stays the caller's to close.
func NewFromConnection(db *sql.DB, config ...Config) *Storage {
	if db == nil {
		panic("mssql: nil database handle")
	}

	return newStorage(db, false, configDefault(config...))
}

// newStorage prepares the table on db and starts the collector; db is released only when this driver opened it.
func newStorage(db *sql.DB, ownsDB bool, cfg Config) *Storage {
	closeOwned := func() {
		if ownsDB {
			_ = db.Close()
		}
	}

	// Ping database to ensure a connection has been made
	if err := db.Ping(); err != nil {
		closeOwned()
		panic(err)
	}

	// Drop table if set to true
	if cfg.Reset {
		if _, err := db.Exec(strings.ReplaceAll(dropQuery, "%s", cfg.Table)); err != nil {
			closeOwned()
			panic(err)
		}
	}

	// Init database queries
	for _, query := range initQuery {
		if _, err := db.Exec(strings.ReplaceAll(query, "%s", cfg.Table)); err != nil {
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
		sqlSelect:  fmt.Sprintf(`SELECT v, e FROM %s WHERE k=@p1;`, cfg.Table),
		sqlInsert: fmt.Sprintf(`MERGE INTO %s WITH (HOLDLOCK) AS T USING (VALUES(@p1)) AS S (k) ON (T.k = S.k)
								WHEN MATCHED THEN UPDATE SET v = @p2, e = @p3
								WHEN NOT MATCHED THEN INSERT (k, v, e) VALUES(@p1, @p2, @p3);`, cfg.Table),
		sqlDelete: fmt.Sprintf("DELETE FROM %s WHERE k=@p1", cfg.Table),
		sqlReset:  fmt.Sprintf("TRUNCATE TABLE %s;", cfg.Table),
		sqlGC:     fmt.Sprintf("DELETE FROM %s WHERE e <= @p1 AND e != 0", cfg.Table),
	}

	// checkSchema panics on a mismatch, so release a connection this driver opened rather than leaking it on the way out.
	func() {
		defer func() {
			if r := recover(); r != nil {
				closeOwned()
				panic(r)
			}
		}()
		store.checkSchema(cfg.Table)
	}()

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

// SetWithContext key with value and expiration time with context
func (s *Storage) SetWithContext(ctx context.Context, key string, val []byte, exp time.Duration) error {
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

// Set key with value and expiration time
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	return s.SetWithContext(context.Background(), key, val, exp)
}

// DeleteWithContext entry by key with context
func (s *Storage) DeleteWithContext(ctx context.Context, key string) error {
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

// ResetWithContext all entries, including unexpired with context
func (s *Storage) ResetWithContext(ctx context.Context) error {
	_, err := s.db.ExecContext(ctx, s.sqlReset)
	return err
}

// Reset all entries, including unexpired
func (s *Storage) Reset() error {
	return s.ResetWithContext(context.Background())
}

// Close stops the collector and closes the database unless it came from NewFromConnection; safe to call more than once, and a failed close is reported once.
func (s *Storage) Close() error {
	s.stopOnce.Do(func() {
		close(s.done)
		<-s.stopped
	})

	s.closeMu.Lock()
	defer s.closeMu.Unlock()

	if s.closed {
		return nil
	}

	// A borrowed handle is not ours to close, but the collector above is stopped either way.
	if !s.ownsDB {
		s.closed = true
		return nil
	}

	// Latched even on failure: database/sql marks itself closed first, so a retry would report a success that never happened.
	err := s.db.Close()
	s.closed = true

	return err
}

// Return database client
func (s *Storage) Conn() *sql.DB {
	return s.db
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

func (s *Storage) checkSchema(tableName string) {
	var data []byte

	row := s.db.QueryRow(fmt.Sprintf(checkSchemaQuery, tableName))
	if err := row.Scan(&data); err != nil {
		panic(err)
	}

	if strings.ToLower(string(data)) != "varbinary" {
		fmt.Printf(checkSchemaMsg, string(data))
	}
}
