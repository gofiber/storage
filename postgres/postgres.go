package postgres

import (
	"context"
	"crypto/sha256"
	"encoding/hex"
	"errors"
	"fmt"
	"strings"
	"time"

	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgxpool"
)

// Storage interface that is implemented by storage providers
type Storage struct {
	db         *pgxpool.Pool
	gcInterval time.Duration
	done       chan struct{}

	sqlSelect string
	sqlInsert string
	sqlDelete string
	sqlReset  string
	sqlGC     string
}

var (
	checkSchemaMsg = "The `%s` row has an incorrect data type. " +
		"It should be %s but is instead %s. This will cause encoding-related panics if the DB is not migrated (see https://github.com/gofiber/storage/blob/main/MIGRATE.md)."
	dropQuery             = `DROP TABLE IF EXISTS %s;`
	checkTableExistsQuery = `SELECT COUNT(table_name)
		FROM information_schema.tables
		WHERE table_schema = $1
		AND table_name = $2;`
	migrateKeyColumnQuery = `ALTER TABLE %s ALTER COLUMN k TYPE TEXT;`
	createTableQuery      = `CREATE %s %s (
			k  TEXT PRIMARY KEY NOT NULL DEFAULT '',
			v  BYTEA NOT NULL,
			e  BIGINT NOT NULL DEFAULT '0'
		);`
	createIndexQuery = `CREATE INDEX IF NOT EXISTS %s ON %s (e);`
	checkSchemaQuery = `SELECT column_name, data_type
		FROM information_schema.columns
		WHERE table_schema = $1
			AND table_name = $2
			AND column_name IN ('k','v','e');`
	checkSchemaTargetDataType = map[string]string{
		"k": "text",
		"v": "bytea",
		"e": "bigint",
	}
)

func createTableType(unlogged bool) string {
	if unlogged {
		return "UNLOGGED TABLE"
	}

	return "TABLE"
}

func buildIndexName(schema, tableName string) string {
	hash := sha256.Sum256([]byte(schema + "." + tableName + ".e"))
	return "idx_e_" + hex.EncodeToString(hash[:6])
}

// New creates a new storage using context.Background() for initialization.
func New(config ...Config) *Storage {
	return NewWithContext(context.Background(), config...)
}

// NewWithContext creates a new storage, using ctx for the initialization
// operations (connection pool creation, ping, and schema setup/reset).
func NewWithContext(ctx context.Context, config ...Config) *Storage {
	// Set default config
	cfg := configDefault(config...)

	// Select db connection
	var err error
	db := cfg.DB
	if db == nil {
		db, err = pgxpool.New(ctx, cfg.getDSN())
		if err != nil {
			panic(err)
		}
	}

	// Ping database
	if err := db.Ping(ctx); err != nil {
		panic(err)
	}

	// Parse out schema in config, if provided
	schema := "public"
	tableName := cfg.Table
	if strings.Contains(cfg.Table, ".") {
		schema = strings.Split(cfg.Table, ".")[0]
		tableName = strings.Split(cfg.Table, ".")[1]
	}
	fullTableName := pgx.Identifier([]string{schema, tableName}).Sanitize()
	indexName := pgx.Identifier([]string{buildIndexName(schema, tableName)}).Sanitize()

	// Drop table if set to true
	if cfg.Reset {
		if _, err := db.Exec(ctx, fmt.Sprintf(dropQuery, fullTableName)); err != nil {
			db.Close()
			panic(err)
		}
	}

	// Determine if table exists
	tableExists := false
	row := db.QueryRow(ctx, checkTableExistsQuery, schema, tableName)
	var count int
	if err := row.Scan(&count); err != nil {
		db.Close()
		panic(err)
	}
	tableExists = count > 0

	// Init database queries
	if !tableExists {
		for _, query := range []string{
			fmt.Sprintf(createTableQuery, createTableType(cfg.Unlogged), fullTableName),
			fmt.Sprintf(createIndexQuery, indexName, fullTableName),
		} {
			if _, err := db.Exec(ctx, query); err != nil {
				db.Close()
				panic(err)
			}
		}
	} else {
		// Migrate existing tables: widen k from VARCHAR(64) to TEXT.
		var kDataType string
		const kTypeQuery = `SELECT data_type FROM information_schema.columns
			WHERE table_schema = $1 AND table_name = $2 AND column_name = 'k';`
		if err := db.QueryRow(ctx, kTypeQuery, schema, tableName).Scan(&kDataType); err != nil && !errors.Is(err, pgx.ErrNoRows) {
			if cfg.DB == nil {
				db.Close()
			}
			panic(err)
		}
		if kDataType == "character varying" {
			if _, err := db.Exec(ctx, fmt.Sprintf(migrateKeyColumnQuery, fullTableName)); err != nil {
				if cfg.DB == nil {
					db.Close()
				}
				panic(err)
			}
		}
	}

	// Create storage
	store := &Storage{
		db:         db,
		gcInterval: cfg.GCInterval,
		done:       make(chan struct{}),
		sqlSelect:  fmt.Sprintf(`SELECT v, e FROM %s WHERE k=$1;`, fullTableName),
		sqlInsert:  fmt.Sprintf("INSERT INTO %s (k, v, e) VALUES ($1, $2, $3) ON CONFLICT (k) DO UPDATE SET v = $4, e = $5", fullTableName),
		sqlDelete:  fmt.Sprintf("DELETE FROM %s WHERE k=$1", fullTableName),
		sqlReset:   fmt.Sprintf("TRUNCATE TABLE %s;", fullTableName),
		sqlGC:      fmt.Sprintf("DELETE FROM %s WHERE e <= $1 AND e != 0", fullTableName),
	}

	store.checkSchema(ctx, cfg.Table)

	// Start garbage collector
	go store.gcTicker()

	return store
}

// GetWithContext gets value by key with context
func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error) {
	if len(key) <= 0 {
		return nil, nil
	}
	row := s.db.QueryRow(ctx, s.sqlSelect, key)
	// Add db response to data
	var (
		data []byte
		exp  int64 = 0
	)
	if err := row.Scan(&data, &exp); err != nil {
		if errors.Is(err, pgx.ErrNoRows) {
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

// SetWithContext sets key with value
func (s *Storage) SetWithContext(ctx context.Context, key string, val []byte, exp time.Duration) error {
	// Ain't Nobody Got Time For That
	if len(key) <= 0 || len(val) <= 0 {
		return nil
	}
	var expSeconds int64
	if exp != 0 {
		expSeconds = time.Now().Add(exp).Unix()
	}
	_, err := s.db.Exec(ctx, s.sqlInsert, key, val, expSeconds, val, expSeconds)
	return err
}

// Set sets key with value
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	return s.SetWithContext(context.Background(), key, val, exp)
}

// DeleteWithContext deletes entry by key
func (s *Storage) DeleteWithContext(ctx context.Context, key string) error {
	// Ain't Nobody Got Time For That
	if len(key) <= 0 {
		return nil
	}
	_, err := s.db.Exec(ctx, s.sqlDelete, key)
	return err
}

// Delete deletes entry by key
func (s *Storage) Delete(key string) error {
	return s.DeleteWithContext(context.Background(), key)
}

// ResetWithContext resets all entries with context, including unexpired ones
func (s *Storage) ResetWithContext(ctx context.Context) error {
	_, err := s.db.Exec(ctx, s.sqlReset)
	return err
}

// Reset resets all entries, including unexpired ones
func (s *Storage) Reset() error {
	return s.ResetWithContext(context.Background())
}

// Close the database
func (s *Storage) Close() error {
	s.done <- struct{}{}
	s.db.Stat()
	s.db.Close()
	return nil
}

// Return database client
func (s *Storage) Conn() *pgxpool.Pool {
	return s.db
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
	_, _ = s.db.Exec(context.Background(), s.sqlGC, t.Unix())
}

func (s *Storage) checkSchema(ctx context.Context, fullTableName string) {
	schema := "public"
	tableName := fullTableName
	if strings.Contains(fullTableName, ".") {
		schema = strings.Split(fullTableName, ".")[0]
		tableName = strings.Split(fullTableName, ".")[1]
	}

	rows, err := s.db.Query(ctx, checkSchemaQuery, schema, tableName)
	if err != nil {
		panic(err)
	}
	defer rows.Close()

	data := make(map[string]string)

	rowCount := 0
	for rows.Next() {
		var columnName, dataType string
		if err := rows.Scan(&columnName, &dataType); err != nil {
			panic(err)
		}
		data[columnName] = dataType
		rowCount++
	}
	if rowCount == 0 {
		panic(fmt.Errorf("table %s does not exist", tableName))
	}
	for columnName, dataType := range checkSchemaTargetDataType {
		dt, ok := data[columnName]
		if !ok {
			panic(fmt.Errorf("required column %s does not exist in table %s", columnName, tableName))
		}
		if dt != dataType {
			panic(fmt.Errorf(checkSchemaMsg, columnName, dataType, dt))
		}
	}
}
