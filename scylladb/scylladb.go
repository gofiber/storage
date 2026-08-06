package scylladb

import (
	"context"
	"errors"
	"fmt"
	"strings"
	"sync"
	"time"
	"unicode"

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

	ownsSession bool
	closeOnce   sync.Once
}

var (
	errCheckSchema = errors.New("the `value` row has an incorrect data type. " +
		"The message should be BLOB, but it is instead %s. This could lead to encoding-related issues if the database is not migrated (refer to https://github.com/gofiber/storage/blob/main/MIGRATE.md)")
	errKeyspace         = errors.New(`keyspace cannot be empty`)
	createKeyspaceQuery = `CREATE KEYSPACE IF NOT EXISTS %s WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};`
	dropQuery           = `DROP TABLE IF EXISTS %s.%s;`
	createTableQuery    = `CREATE TABLE IF NOT EXISTS %s.%s (key TEXT PRIMARY KEY, value BLOB)`
	checkSchemaQuery    = `SELECT type FROM system_schema.columns WHERE keyspace_name = '%s' AND table_name = '%s' AND column_name = 'value';`
	selectQuery         = `SELECT value FROM %s.%s WHERE key = ?`
	insertQuery         = `INSERT INTO %s.%s (key, value) VALUES (?, ?) USING TTL ?`
	deleteQuery         = `DELETE FROM %s.%s WHERE key = ?`
	resetQuery          = `TRUNCATE %s.%s`
)

// validateIdentifier checks that name is safe to interpolate into CQL, which
// cannot bind a keyspace or table as a placeholder. Without it a name from
// untrusted input is an injection point.
func validateIdentifier(name, identifierType string) error {
	if name == "" {
		return fmt.Errorf("scylladb: invalid %s name: cannot be empty", identifierType)
	}

	for i, r := range name {
		if r > unicode.MaxASCII {
			return fmt.Errorf("scylladb: invalid %s name: cannot contain unicode characters", identifierType)
		}
		// An unquoted CQL identifier is [a-zA-Z][a-zA-Z0-9_]*, so a leading digit
		// or underscore would pass here and then fail on the server.
		if i == 0 && !unicode.IsLetter(r) {
			return fmt.Errorf("scylladb: invalid %s name %q: must start with a letter", identifierType, name)
		}
		if !unicode.IsLetter(r) && !unicode.IsDigit(r) && r != '_' {
			return fmt.Errorf("scylladb: invalid %s name %q: can only contain letters, numbers, and underscores", identifierType, name)
		}
	}

	return nil
}

// New creates a new storage
func New(config ...Config) *Storage {
	var err error
	var session *gocql.Session

	// Set default config
	cfg := configDefault(config...)

	if len(strings.TrimSpace(cfg.Keyspace)) == 0 {
		panic(errKeyspace)
	}

	// Both names are interpolated into every statement below, so check them
	// before any of those are built.
	if err := validateIdentifier(cfg.Keyspace, "keyspace"); err != nil {
		panic(err)
	}
	if err := validateIdentifier(cfg.Table, "table"); err != nil {
		panic(err)
	}

	if cfg.Session == nil {
		// Create a new cluster
		cluster := gocql.NewCluster(cfg.Hosts...)
		cluster.Consistency = gocql.ParseConsistency(cfg.Consistency)
		cluster.Port = cfg.Port
		cluster.DisableInitialHostLookup = cfg.DisableInitialHostLookup

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

	// A caller-supplied session stays the caller's to close, this driver must
	// not close it when initialization fails.
	ownsSession := cfg.Session == nil
	closeOwned := func() {
		if ownsSession {
			session.Close()
		}
	}

	// Create keyspace if it does not exist
	if err = session.Query(fmt.Sprintf(createKeyspaceQuery, cfg.Keyspace)).Exec(); err != nil {
		closeOwned()
		panic(err)
	}

	// Drop table if reset is true
	if cfg.Reset {
		if err = session.Query(fmt.Sprintf(dropQuery, cfg.Keyspace, cfg.Table)).Exec(); err != nil {
			closeOwned()
			panic(err)
		}
	}

	// Create the storage
	store := &Storage{
		session:     session,
		ownsSession: ownsSession,
		tableName:   cfg.Table,
		selectQuery: fmt.Sprintf(selectQuery, cfg.Keyspace, cfg.Table),
		insertQuery: fmt.Sprintf(insertQuery, cfg.Keyspace, cfg.Table),
		deleteQuery: fmt.Sprintf(deleteQuery, cfg.Keyspace, cfg.Table),
		resetQuery:  fmt.Sprintf(resetQuery, cfg.Keyspace, cfg.Table),
	}

	// Create table if not exists
	if err = store.createTableIfNotExists(cfg.Keyspace); err != nil {
		closeOwned()
		panic(err)
	}

	// Check schema
	// checkSchema panics on a schema mismatch, so release a session this
	// driver opened rather than leaking it on the way out.
	func() {
		defer func() {
			if r := recover(); r != nil {
				closeOwned()
				panic(r)
			}
		}()
		store.checkSchema(cfg.Keyspace)
	}()

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
		panic(fmt.Errorf(errCheckSchema.Error(), dataType))
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

// maxTTLSeconds is the largest TTL ScyllaDB accepts, 20 years. It also keeps
// the value inside a 32 bit int.
const maxTTLSeconds = 20 * 365 * 24 * 60 * 60

// SetWithContext sets a value by key with context
func (s *Storage) SetWithContext(ctx context.Context, key string, value []byte, expire time.Duration) error {
	// The storage interface documents an empty key or value as ignored
	// without error; storing one persisted a row nothing could read back.
	if len(key) == 0 || len(value) == 0 {
		return nil
	}

	var expiration int
	if expire > 0 {
		// TTLs are whole seconds and 0 means "no TTL", so round up rather than
		// letting a sub-second expiration become zero. Computed as int64 and
		// clamped, so it cannot overflow int on a 32 bit build.
		secs := int64(expire / time.Second)
		if expire%time.Second != 0 {
			secs++
		}
		if secs > maxTTLSeconds {
			secs = maxTTLSeconds
		}
		expiration = int(secs)
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

// Close closes the session, unless it came from Config.Session, in which case
// it stays the caller's to close. Safe to call more than once.
func (s *Storage) Close() error {
	s.closeOnce.Do(func() {
		if s.ownsSession {
			s.session.Close()
		}
	})
	return nil
}

// Conn returns the underlying gocql session
func (s *Storage) Conn() *gocql.Session {
	return s.session
}
