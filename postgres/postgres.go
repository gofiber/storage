package postgres

import (
	"context"
	"errors"
	"fmt"
	"os"
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
		WHERE table_schema = '%s'
		AND table_name = '%s';`
	initQuery = []string{
		`CREATE TABLE %s (
			k  VARCHAR(64) PRIMARY KEY NOT NULL DEFAULT '',
			v  BYTEA NOT NULL,
			e  BIGINT NOT NULL DEFAULT '0'
		);`,
		`CREATE INDEX IF NOT EXISTS e ON %s (e);`,
	}
	checkSchemaQuery = `SELECT column_name, data_type 
		FROM information_schema.columns
		WHERE table_schema = '%s' 
			AND table_name = '%s' 
			AND column_name IN ('k','v','e');`
	checkSchemaTargetDataType = map[string]string{
		"k": "character varying",
		"v": "bytea",
		"e": "bigint",
	}
)

// New creates a new storage
func New(config ...Config) *Storage {
	// Set default config
	cfg := configDefault(config...)

	// Select db connection
	var err error
	db := cfg.DB
	if db == nil {
		db, err = pgxpool.New(context.Background(), cfg.getDSN())
		if err != nil {
			fmt.Fprintf(os.Stderr, "Unable to create connection pool: %v\n", err)
		}
	}

	// Ping database
	if err := db.Ping(context.Background()); err != nil {
		panic(err)
	}

	// Parse out schema in config, if provided
	schema := "public"
	tableName := cfg.Table
	if strings.Contains(cfg.Table, ".") {
		schema = strings.Split(cfg.Table, ".")[0]
		tableName = strings.Split(cfg.Table, ".")[1]
	}

	// Drop table if set to true
	if cfg.Reset {
		if _, err := db.Exec(context.Background(), fmt.Sprintf(dropQuery, cfg.Table)); err != nil {
			db.Close()
			panic(err)
		}
	}

	// Determine if table exists
	tableExists := false
	row := db.QueryRow(context.Background(), fmt.Sprintf(checkTableExistsQuery, schema, tableName))
	var count int
	if err := row.Scan(&count); err != nil {
		db.Close()
		panic(err)
	}
	tableExists = count > 0

	// Init database queries
	if !tableExists {
		for _, query := range initQuery {
			if _, err := db.Exec(context.Background(), fmt.Sprintf(query, cfg.Table)); err != nil {
				db.Close()
				panic(err)
			}
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
		sqlReset:   fmt.Sprintf("TRUNCATE TABLE %s;", cfg.Table),
		sqlGC:      fmt.Sprintf("DELETE FROM %s WHERE e <= $1 AND e != 0", cfg.Table),
	}

	store.checkSchema(cfg.Table)

	// Start garbage collector
	go store.gcTicker()

	return store
}

// Get value by key
func (s *Storage) Get(key string) ([]byte, error) {
	if len(key) <= 0 {
		return nil, nil
	}
	row := s.db.QueryRow(context.Background(), s.sqlSelect, key)
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
	_, err := s.db.Exec(context.Background(), s.sqlInsert, key, val, expSeconds, val, expSeconds)
	return err
}

// Delete entry by key
func (s *Storage) Delete(key string) error {
	// Ain't Nobody Got Time For That
	if len(key) <= 0 {
		return nil
	}
	_, err := s.db.Exec(context.Background(), s.sqlDelete, key)
	return err
}

// Reset all entries, including unexpired
func (s *Storage) Reset() error {
	_, err := s.db.Exec(context.Background(), s.sqlReset)
	return err
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

func (s *Storage) checkSchema(fullTableName string) {
	schema := "public"
	tableName := fullTableName
	if strings.Contains(fullTableName, ".") {
		schema = strings.Split(fullTableName, ".")[0]
		tableName = strings.Split(fullTableName, ".")[1]
	}

	rows, err := s.db.Query(context.Background(), fmt.Sprintf(checkSchemaQuery, schema, tableName))
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
