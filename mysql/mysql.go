package mysql

import (
	"context"
	"database/sql"
	"database/sql/driver"
	"errors"
	"fmt"
	"strings"
	"sync"
	"sync/atomic"
	"time"

	mysqldriver "github.com/go-sql-driver/mysql"
)

// ErrClosed is returned by every operation attempted after Close.
var ErrClosed = errors.New("mysql: storage is closed")

// maxKeyLen holds any key of the old VARCHAR(64) column, even at 4 bytes per character.
const maxKeyLen = 256

// gcBatchSize bounds how many expired keys one garbage collection transaction deletes,
// and so how long a Set of one of them waits for it.
const gcBatchSize = 100

// migrateLockWait bounds, in seconds, the migration's wait for other transactions on the table:
// meanwhile every read and write on it queues behind the ALTER.
const migrateLockWait = 5

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

	sqlGCSelect string
	sqlGCDelete string
}

var (
	checkSchemaMsg = "The `v` row has an incorrect data type. " +
		"It should be BLOB but is instead %s. This will cause encoding-related panics if the DB is not migrated (see https://github.com/gofiber/storage/blob/main/MIGRATE.md)."
	dropQuery = "DROP TABLE IF EXISTS %s;"
	// k is binary: a character collation folds case and accents and ignores trailing spaces, merging distinct keys.
	initQuery = []string{
		`CREATE TABLE IF NOT EXISTS %s ( 
			k  VARBINARY(256) NOT NULL DEFAULT '', 
			v  BLOB NOT NULL, 
			e  BIGINT NOT NULL DEFAULT '0', 
			PRIMARY KEY (k),
			KEY e (e)
		) ENGINE=InnoDB DEFAULT CHARSET=utf8;`,
	}
	checkSchemaQuery = `SELECT DATA_TYPE FROM INFORMATION_SCHEMA.COLUMNS
		WHERE table_name = '%s' AND COLUMN_NAME = 'v';`

	// Tables created by earlier versions have k VARCHAR(64) and no index on e.
	keyColumnQuery = `SELECT COLLATION_NAME IS NOT NULL, COALESCE(CHARACTER_OCTET_LENGTH, 0) FROM INFORMATION_SCHEMA.COLUMNS
		WHERE table_schema = DATABASE() AND table_name = ? AND COLUMN_NAME = 'k';`
	migrateKeyQuery  = "ALTER TABLE %s MODIFY k VARBINARY(256) NOT NULL DEFAULT '';"
	expiryIndexQuery = `SELECT COUNT(*) FROM INFORMATION_SCHEMA.STATISTICS
		WHERE table_schema = DATABASE() AND table_name = ? AND COLUMN_NAME = 'e' AND SEQ_IN_INDEX = 1;`
	createExpiryIndexQuery = "CREATE INDEX e ON %s (e);"
	migrateErrMsg          = "mysql: migrating table %s (see Migration in the README): %w"
	expiryIndexMsg         = "mysql: could not add the index on e to table %s, so garbage collection scans the whole table (see Migration in the README): %v\n"
)

// New creates a new storage
func New(config ...Config) *Storage {
	var err error
	var db *sql.DB

	// Set default config
	cfg := configDefault(config...)

	// A caller-supplied connection stays theirs to close, even when initialization fails.
	ownsDB := cfg.Db == nil

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
		if ownsDB {
			_ = db.Close()
		}
		panic(err)
	}

	// Drop table if Clear set to true
	if cfg.Reset {
		query := fmt.Sprintf(dropQuery, cfg.Table)
		if _, err = db.Exec(query); err != nil {
			if ownsDB {
				_ = db.Close()
			}
			panic(err)
		}
	}

	// Init database queries
	for _, query := range initQuery {
		query = fmt.Sprintf(query, cfg.Table)
		if _, err := db.Exec(query); err != nil {
			if ownsDB {
				_ = db.Close()
			}
			panic(err)
		}
	}

	// Create storage
	store := &Storage{
		gcInterval: cfg.GCInterval,
		db:         db,
		ownsDB:     ownsDB,
		done:       make(chan struct{}),
		stopped:    make(chan struct{}),
		sqlSelect:  fmt.Sprintf("SELECT v, e FROM %s WHERE k=?;", cfg.Table),
		sqlInsert:  fmt.Sprintf("INSERT INTO %s (k, v, e) VALUES (?,?,?) ON DUPLICATE KEY UPDATE v = ?, e = ?", cfg.Table),
		sqlDelete:  fmt.Sprintf("DELETE FROM %s WHERE k=?", cfg.Table),
		sqlReset:   fmt.Sprintf("TRUNCATE TABLE %s;", cfg.Table),
		// The sweep reads expired keys without locking and deletes them one by one, rechecking e so an entry set again survives.
		sqlGCSelect: fmt.Sprintf("SELECT k FROM %s WHERE e > 0 AND e <= ? ORDER BY e LIMIT %d", cfg.Table, gcBatchSize),
		sqlGCDelete: fmt.Sprintf("DELETE FROM %s WHERE k = ? AND e > 0 AND e <= ?", cfg.Table),
	}

	// checkSchema panics on a mismatch, so release a connection this driver opened on the way out.
	func() {
		defer func() {
			if r := recover(); r != nil {
				if ownsDB {
					_ = db.Close()
				}
				panic(r)
			}
		}()
		store.checkSchema(cfg.Table)
		if err := store.migrate(cfg.Table); err != nil {
			panic(err)
		}
	}()

	// Start garbage collector
	go store.gcTicker()

	return store
}

// NewFromConnection creates a new storage on an existing database handle, which stays the caller's to close.
// It is the same as setting Config.Db.
func NewFromConnection(db *sql.DB, config ...Config) *Storage {
	if db == nil {
		panic("mysql: nil database handle")
	}

	var cfg Config
	if len(config) > 0 {
		cfg = config[0]
	}
	cfg.Db = db

	return New(cfg)
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
		data []byte
		exp  int64
	)

	if err := row.Scan(&data, &exp); err != nil {
		if err == sql.ErrNoRows {
			return nil, nil
		}
		return nil, err
	}

	// An expired entry is a miss; the row is not deleted here, since an unconditional delete could drop a concurrent Set.
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
	if s.isClosed() {
		return ErrClosed
	}
	// Ain't Nobody Got Time For That
	if len(key) <= 0 || len(val) <= 0 {
		return nil
	}
	// Without strict sql_mode the server would truncate it and overwrite another key's entry.
	if len(key) > maxKeyLen {
		return fmt.Errorf("mysql: key too long: %d bytes, the limit is %d", len(key), maxKeyLen)
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
	_, err := s.db.ExecContext(ctx, s.sqlInsert, key, val, expSeconds, val, expSeconds)
	return err
}

// Set key with value and expiration time
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	return s.SetWithContext(context.Background(), key, val, exp)
}

// DeleteWithContext key by key with context
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

// Delete entry by key
func (s *Storage) Delete(key string) error {
	return s.DeleteWithContext(context.Background(), key)
}

// ResetWithContext resets all keys with context
func (s *Storage) ResetWithContext(ctx context.Context) error {
	if s.isClosed() {
		return ErrClosed
	}
	_, err := s.db.ExecContext(ctx, s.sqlReset)
	return err
}

// Reset resets all keys
func (s *Storage) Reset() error {
	return s.ResetWithContext(context.Background())
}

// isClosed reports whether Close ran; a borrowed handle stays open, so the latch is the only signal.
func (s *Storage) isClosed() bool {
	return s.closed.Load()
}

// Close stops the collector and closes the database unless it came from Config.Db; safe to call more than once.
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

// gc deletes all expired entries one primary key at a time: a DELETE over a range of e, or over a list of keys,
// can become a full table scan, and under REPEATABLE READ that locks every live row.
func (s *Storage) gc(ctx context.Context, t time.Time) {
	for {
		n, err := s.gcBatch(ctx, t.Unix())
		if err != nil || n < gcBatchSize {
			return
		}
	}
}

// gcBatch deletes up to gcBatchSize expired keys and returns how many it found. It holds one connection
// for the batch, as a pool keeping none idle would dial for every statement, and lets go of it after,
// as a small pool shared with Get and Set would otherwise wait for the whole sweep.
func (s *Storage) gcBatch(ctx context.Context, now int64) (int, error) {
	conn, err := s.db.Conn(ctx)
	if err != nil {
		return 0, err
	}
	defer conn.Close() //nolint:errcheck // returns the connection to the pool
	keys, err := s.expiredKeys(ctx, conn, now)
	if err != nil || len(keys) == 0 {
		return 0, err
	}
	return len(keys), s.deleteExpired(ctx, conn, keys, now)
}

// expiredKeys reads up to gcBatchSize keys expired at now without locking them.
func (s *Storage) expiredKeys(ctx context.Context, conn *sql.Conn, now int64) ([][]byte, error) {
	rows, err := conn.QueryContext(ctx, s.sqlGCSelect, now)
	if err != nil {
		return nil, err
	}
	var keys [][]byte
	for rows.Next() {
		var k []byte
		if err = rows.Scan(&k); err != nil {
			break
		}
		keys = append(keys, k)
	}
	if err == nil {
		err = rows.Err()
	}
	_ = rows.Close()
	return keys, err
}

// deleteExpired deletes keys in one transaction, sparing those set again since they were read.
func (s *Storage) deleteExpired(ctx context.Context, conn *sql.Conn, keys [][]byte, now int64) error {
	tx, err := conn.BeginTx(ctx, nil)
	if err != nil {
		return err
	}
	defer tx.Rollback() //nolint:errcheck // a no-op once committed
	stmt, err := tx.PrepareContext(ctx, s.sqlGCDelete)
	if err != nil {
		return err
	}
	for _, k := range keys {
		if _, err := stmt.ExecContext(ctx, k, now); err != nil {
			return err
		}
	}
	return tx.Commit()
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

// migrate brings a table created by an earlier version up to the current layout.
func (s *Storage) migrate(tableName string) error {
	ctx := context.Background()
	conn, err := s.db.Conn(ctx)
	if err != nil {
		return fmt.Errorf(migrateErrMsg, tableName, err)
	}
	defer conn.Close() //nolint:errcheck // returns the connection to the pool
	if _, err := conn.ExecContext(ctx, fmt.Sprintf("SET SESSION lock_wait_timeout = %d", migrateLockWait)); err != nil {
		return fmt.Errorf(migrateErrMsg, tableName, err)
	}
	// Discarded instead of pooled, so the short wait never reaches other statements, whatever the DSN set.
	defer conn.Raw(func(any) error { return driver.ErrBadConn }) //nolint:errcheck // the error is what discards it

	var collated bool
	var width int64
	if err := conn.QueryRowContext(ctx, keyColumnQuery, tableName).Scan(&collated, &width); err != nil {
		return fmt.Errorf(migrateErrMsg, tableName, err)
	}
	// A binary column narrower than maxKeyLen would truncate keys that Set lets through.
	if collated || width < maxKeyLen {
		// Byte equality is stricter than any collation, so only a key too wide for the new column could fail or be truncated.
		if width > maxKeyLen {
			return fmt.Errorf(migrateErrMsg, tableName, fmt.Errorf("key column holds up to %d bytes, more than %d", width, maxKeyLen))
		}
		if _, err := conn.ExecContext(ctx, fmt.Sprintf(migrateKeyQuery, tableName)); err != nil {
			return fmt.Errorf(migrateErrMsg, tableName, err)
		}
	}

	// The index only speeds up garbage collection, so lacking the INDEX privilege must not stop the storage.
	var indexes int
	err = conn.QueryRowContext(ctx, expiryIndexQuery, tableName).Scan(&indexes)
	if err == nil && indexes == 0 {
		_, err = conn.ExecContext(ctx, fmt.Sprintf(createExpiryIndexQuery, tableName))
	}
	// ER_DUP_KEYNAME: another instance starting at the same time created it first.
	var myErr *mysqldriver.MySQLError
	if err != nil && (!errors.As(err, &myErr) || myErr.Number != 1061) {
		fmt.Printf(expiryIndexMsg, tableName, err)
	}
	return nil
}
