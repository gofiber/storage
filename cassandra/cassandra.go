package cassandra

import (
	"fmt"
	"time"

	"github.com/gocql/gocql"
)

// Storage interface that is implemented by storage providers
type Storage struct {
	session *gocql.Session
	tableName string

	selectQuery string
	insertQuery string
	deleteQuery string
	resetQuery  string
}

var (
	checkSchemaMsg = "The `data` row has an incorrect data type. " +
		"The message should be BLOB, but it is instead %s. This could lead to encoding-related issues if the database is not migrated (refer to https://github.com/gofiber/storage/blob/main/MIGRATE.md)."
	dropQuery = `DROP TABLE IF EXISTS %s;`
	createTableQuery = `CREATE TABLE IF NOT EXISTS %s (id TEXT PRIMARY KEY, data BLOB, value BIGINT)`
	checkSchemaQuery = `SELECT type FROM system_schema.columns WHERE keyspace_name = '%s' AND table_name = '%s' AND column_name = 'data';`
	keyspaceMsg 	= `Keyspace cannot be set if Session is provided.`
)

// New creates a new storage
func New(config ...Config) *Storage {
	var err error
	var session *gocql.Session

	// Set default config
	cfg := configDefault(config...)

	if cfg.Session == nil {
		// Create a cassandra cluster
		cluster := gocql.NewCluster(cfg.Host)
		cluster.Port = cfg.Port
		cluster.Keyspace = cfg.Keyspace

		// Set credentials if provided
		if cfg.Username != "" && cfg.Password != "" {
			cluster.Authenticator = gocql.PasswordAuthenticator{
				Username: cfg.Username,
				Password: cfg.Password,
			}
		}

		// Create session
		session, err = cluster.CreateSession()
		if err != nil {
			panic(err)
		}
	} else {
		// Set session if provided
		session = cfg.Session
		if cfg.Keyspace == "" {
			panic(keyspaceMsg)
		}
	}

	// Drop table if reset is true
	if cfg.Reset {
		if err = session.Query(fmt.Sprintf(dropQuery, cfg.Table)).Exec(); err != nil {
			session.Close()
			panic(err)
		}
	}

	// Create the storage
	store := &Storage{
		session: session,
		tableName: cfg.Table,
		selectQuery: fmt.Sprintf("SELECT data, value FROM %s WHERE id = ?", cfg.Table),
		insertQuery: fmt.Sprintf("INSERT INTO %s (id, data, value) VALUES (?, ?, ?)", cfg.Table),
		deleteQuery: fmt.Sprintf("DELETE FROM %s WHERE id = ?", cfg.Table),
		resetQuery:  fmt.Sprintf("TRUNCATE %s", cfg.Table),
	}

	// Create table if not exists
	if err = store.createTableIfNotExists(); err != nil {
		session.Close()
		panic(err)
	}

	// Check schema
	store.checkSchema(cfg.Keyspace)

	return store // Return storage
}

func (s *Storage) createTableIfNotExists() error {
	// Create table if not exists
	query := fmt.Sprintf(createTableQuery, s.tableName)
	if err := s.session.Query(query).Exec(); err != nil {
		return err
	}
	return nil
}

func (s *Storage) checkSchema(keyspace string) {
	// Check schema for data column type (should be blob)
	var dataType string
	query := fmt.Sprintf(checkSchemaQuery, keyspace, s.tableName)
	if err := s.session.Query(query).Scan(&dataType); err != nil {
		panic(err)
	}

	if dataType != "blob" {
		panic(fmt.Errorf(checkSchemaMsg, dataType))
	}
}

// Get retrieves a value by key
func (s *Storage) Get(key string) ([]byte, error) {
	var value []byte
	var expiration int64
	if err := s.session.Query(s.selectQuery, key).Scan(&value, &expiration); err != nil {
		if err == gocql.ErrNotFound {
			return nil, nil
		}
		return nil, err
	}
	if expiration > 0 && time.Now().Unix() > expiration {
		return nil, nil
	}
	return value, nil
}

// Set sets a value by key
func (s *Storage) Set(key string, value []byte, expire time.Duration) error {
	var expiration int64
	if expire != 0 {
		expiration = time.Now().Add(expire).Unix()
	}
	return s.session.Query(s.insertQuery, key, value, expiration).Exec()
}

// Delete removes a value by key
func (s *Storage) Delete(key string) error {
	return s.session.Query(s.deleteQuery, key).Exec()
}

// Reset resets all values
func (s *Storage) Reset() error {
	return s.session.Query(s.resetQuery).Exec()
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