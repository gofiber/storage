package scylladb

import (
	"context"
	"errors"
	"fmt"
	"strings"
	"time"

	"github.com/gocql/gocql"
)

// Storage interface that is implemented by storage providers
type Storage struct {
	session   *gocql.Session
	tableName string

	selectQuery string
	insertQuery string
	deleteQuery string
	resetQuery  string
}

var (
	errCheckSchemaErrorMsg = errors.New("the `value` row has an incorrect data type. " +
		"The message should be BLOB, but it is instead %s. This could lead to encoding-related issues if the database is not migrated (refer to https://github.com/gofiber/storage/blob/main/MIGRATE.md)")
	errKeyspaceErrorMsg = errors.New(`keyspace cannot be empty`)
	createKeyspaceQuery = `CREATE KEYSPACE IF NOT EXISTS %s WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};`
	dropQuery           = `DROP TABLE IF EXISTS %s.%s;`
	createTableQuery    = `CREATE TABLE IF NOT EXISTS %s.%s (key TEXT PRIMARY KEY, value BLOB)`
	checkSchemaQuery    = `SELECT type FROM system_schema.columns WHERE keyspace_name = '%s' AND table_name = '%s' AND column_name = 'value';`
	selectQuery         = `SELECT value FROM %s.%s WHERE key = ?`
	insertQuery         = `INSERT INTO %s.%s (key, value) VALUES (?, ?) USING TTL ?`
	deleteQuery         = `DELETE FROM %s.%s WHERE key = ?`
	resetQuery          = `TRUNCATE %s.%s`
)

// New creates a new storage
func New(config ...Config) *Storage {
	var err error
	var session *gocql.Session

	// Set default config
	cfg := configDefault(config...)

	if len(strings.TrimSpace(cfg.Keyspace)) == 0 {
		panic(errKeyspaceErrorMsg)
	}

	if cfg.Session == nil {
		// Create a new cluster
		cluster := gocql.NewCluster(cfg.Hosts...)
		cluster.Consistency = gocql.ParseConsistency(cfg.Consistency)
		cluster.Port = cfg.Port

		// Set credentials if provided
		if len(strings.TrimSpace(cfg.Username)) > 0 && len(strings.TrimSpace(cfg.Password)) > 0 {
			cluster.Authenticator = gocql.PasswordAuthenticator{
				Username: cfg.Username,
				Password: cfg.Password,
			}
		}

		// Set cfg.SslOpts if provided.
		if cfg.SslOpts != nil {
			cluster.SslOpts = cfg.SslOpts
		}

		// Create session
		session, err = cluster.CreateSession()
		if err != nil {
			panic(err)
		}
	} else {
		// Set session if provided
		session = cfg.Session
	}

	// Create keyspace if it does not exist
	if err = session.Query(fmt.Sprintf(createKeyspaceQuery, cfg.Keyspace)).Exec(); err != nil {
		session.Close()
		panic(err)
	}

	// Drop table if reset is true
	if cfg.Reset {
		if err = session.Query(fmt.Sprintf(dropQuery, cfg.Keyspace, cfg.Table)).Exec(); err != nil {
			session.Close()
			panic(err)
		}
	}

	// Create the storage
	store := &Storage{
		session:     session,
		tableName:   cfg.Table,
		selectQuery: fmt.Sprintf(selectQuery, cfg.Keyspace, cfg.Table),
		insertQuery: fmt.Sprintf(insertQuery, cfg.Keyspace, cfg.Table),
		deleteQuery: fmt.Sprintf(deleteQuery, cfg.Keyspace, cfg.Table),
		resetQuery:  fmt.Sprintf(resetQuery, cfg.Keyspace, cfg.Table),
	}

	// Create table if not exists
	if err = store.createTableIfNotExists(cfg.Keyspace); err != nil {
		session.Close()
		panic(err)
	}

	// Check schema
	store.checkSchema(cfg.Keyspace)

	return store // Return storage
}

func (s *Storage) createTableIfNotExists(keyspace string) error {
	// Create table if not exists
	query := fmt.Sprintf(createTableQuery, keyspace, s.tableName)
	if err := s.session.Query(query).Exec(); err != nil {
		return err
	}
	return nil
}

func (s *Storage) checkSchema(keyspace string) {
	// Check schema for value column type (should be blob)
	var dataType string
	query := fmt.Sprintf(checkSchemaQuery, keyspace, s.tableName)
	if err := s.session.Query(query).Scan(&dataType); err != nil {
		panic(err)
	}

	if dataType != "blob" {
		panic(fmt.Errorf(errCheckSchemaErrorMsg.Error(), dataType))
	}
}

// GetWithContext retrieves a value by key with context
func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error) {
	var value []byte
	if err := s.session.Query(s.selectQuery, key).WithContext(ctx).Scan(&value); err != nil {
		if errors.Is(err, gocql.ErrNotFound) {
			return nil, nil
		}
		return nil, err
	}
	return value, nil
}

// Get retrieves a value by key
func (s *Storage) Get(key string) ([]byte, error) {
	return s.GetWithContext(context.Background(), key)
}

// SetWithContext sets a value by key with context
func (s *Storage) SetWithContext(ctx context.Context, key string, value []byte, expire time.Duration) error {
	var expiration int
	if expire != 0 {
		expiration = int(expire.Round(time.Second).Seconds())
	}
	return s.session.Query(s.insertQuery, key, value, expiration).WithContext(ctx).Exec()
}

// Set sets a value by key
func (s *Storage) Set(key string, value []byte, expire time.Duration) error {
	return s.SetWithContext(context.Background(), key, value, expire)
}

// DeleteWithContext removes a value by key with context
func (s *Storage) DeleteWithContext(ctx context.Context, key string) error {
	return s.session.Query(s.deleteQuery, key).WithContext(ctx).Exec()
}

// Delete removes a value by key
func (s *Storage) Delete(key string) error {
	return s.DeleteWithContext(context.Background(), key)
}

// ResetWithContext resets all values with context
func (s *Storage) ResetWithContext(ctx context.Context) error {
	return s.session.Query(s.resetQuery).WithContext(ctx).Exec()
}

// Reset resets all values
func (s *Storage) Reset() error {
	return s.ResetWithContext(context.Background())
}

// Close closes the storage
func (s *Storage) Close() error {
	s.session.Close()
	return nil
}

// Conn returns the underlying gocql session
func (s *Storage) Conn() *gocql.Session {
	return s.session
}
