package cassandra

import (
	"fmt"
	"log"
	"strings"
	"time"
	"unicode"

	"github.com/gocql/gocql"
	"github.com/scylladb/gocqlx/v2"
	"github.com/scylladb/gocqlx/v2/qb"
)

// Storage represents a Cassandra storage implementation
type Storage struct {
	cluster  *gocql.ClusterConfig
	session  *gocql.Session
	sx       gocqlx.Session
	keyspace string
	table    string
	ttl      int
}

// validateIdentifier checks if an identifier is valid
func validateIdentifier(name, identifierType string) (string, error) {
	if name == "" {
		return "", fmt.Errorf("invalid %s name: cannot be empty", identifierType)
	}

	// Check for invalid characters
	if strings.ContainsAny(name, " \t\n\r\f\v") {
		return "", fmt.Errorf("invalid %s name: cannot contain whitespace", identifierType)
	}

	// Check for SQL injection attempts and special characters
	if strings.ContainsAny(name, ";'\"-.") {
		return "", fmt.Errorf("invalid %s name: cannot contain special characters", identifierType)
	}

	// Check for unicode characters
	for _, r := range name {
		if r > unicode.MaxASCII {
			return "", fmt.Errorf("invalid %s name: cannot contain unicode characters", identifierType)
		}
	}

	// Only allow alphanumeric characters and underscores
	for _, r := range name {
		if !unicode.IsLetter(r) && !unicode.IsDigit(r) && r != '_' {
			return "", fmt.Errorf("invalid %s name: can only contain letters, numbers, and underscores", identifierType)
		}
	}

	return name, nil
}

// New creates a new Cassandra storage instance
func New(cnfg Config) (*Storage, error) {
	// Default config
	cfg := configDefault(cnfg)

	// Validate and escape identifiers
	keyspace, err := validateIdentifier(cfg.Keyspace, "keyspace")
	if err != nil {
		return nil, err
	}
	table, err := validateIdentifier(cfg.Table, "table")
	if err != nil {
		return nil, err
	}

	// Create cluster config
	cluster := gocql.NewCluster(cfg.Hosts...)
	cluster.Consistency = cfg.Consistency

	// Convert expiration to seconds for TTL
	ttl := 0
	if cfg.Expiration > 0 {
		ttl = int(cfg.Expiration.Seconds())
	} else if cfg.Expiration < 0 {
		// Expiration < 0 means indefinite storage
		cfg.Expiration = 0
	}

	// Create storage instance
	storage := &Storage{
		cluster:  cluster,
		keyspace: keyspace,
		table:    table,
		ttl:      ttl,
	}

	// Initialize keyspace
	if err := storage.createOrVerifyKeySpace(cfg.Reset); err != nil {
		return nil, fmt.Errorf("cassandra storage init: %w", err)
	}

	return storage, nil
}

// createOrVerifyKeySpace ensures the keyspace and table exist with proper keyspace
func (s *Storage) createOrVerifyKeySpace(reset bool) error {
	// Clone the original cluster config and set system keyspace
	systemCluster := *s.cluster
	systemCluster.Keyspace = "system"

	// Connect to the system keyspace
	systemSession, err := systemCluster.CreateSession()
	if err != nil {
		return fmt.Errorf("failed to connect to system keyspace: %w", err)
	}
	defer systemSession.Close()

	// Create keyspace if not exists
	err = s.ensureKeyspace(systemSession)
	if err != nil {
		return fmt.Errorf("failed to ensure keyspace exists: %w", err)
	}

	// Now connect to our keyspace
	s.cluster.Keyspace = s.keyspace
	session, err := s.cluster.CreateSession()
	if err != nil {
		return fmt.Errorf("failed to connect to keyspace %s: %w", s.keyspace, err)
	}
	s.session = session
	s.sx = gocqlx.NewSession(session)

	// Drop tables if reset is requested
	if reset {
		if err := s.dropTables(); err != nil {
			return err
		}
	}

	// Create data table if necessary
	if err := s.createDataTable(); err != nil {
		return err
	}

	return nil
}

// ensureKeyspace creates the keyspace if it doesn't exist
func (s *Storage) ensureKeyspace(systemSession *gocql.Session) error {
	// Check if keyspace exists
	var count int
	if err := systemSession.Query(
		"SELECT COUNT(*) FROM system_schema.keyspaces WHERE keyspace_name = ?",
		s.keyspace,
	).Scan(&count); err != nil {
		return err
	}

	// Create keyspace if it doesn't exist
	if count == 0 {
		query := fmt.Sprintf(
			"CREATE KEYSPACE %s WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor': 1}",
			s.keyspace,
		)
		if err := systemSession.Query(query).Exec(); err != nil {
			return err
		}
		log.Printf("Created keyspace: %s", s.keyspace)
	}

	return nil
}

// createDataTable creates the data table for key-value storage
func (s *Storage) createDataTable() error {
	// Create table with proper escaping
	query := fmt.Sprintf(`
		CREATE TABLE IF NOT EXISTS %s.%s (
			key text PRIMARY KEY,
			value blob,
			expires_at timestamp
		)
	`, s.keyspace, s.table)

	// Execute the query
	return s.session.Query(query).Exec()
}

// dropTables drops existing tables for reset
func (s *Storage) dropTables() error {
	// Drop data table with proper escaping
	query := fmt.Sprintf("DROP TABLE IF EXISTS %s.%s", s.keyspace, s.table)
	if err := s.session.Query(query).Exec(); err != nil {
		return err
	}

	// Drop schema_info table with proper escaping
	query = fmt.Sprintf("DROP TABLE IF EXISTS %s.schema_info", s.keyspace)
	return s.session.Query(query).Exec()
}

// queryResult holds the result of a SELECT query
type queryResult struct {
	Value     []byte    `db:"value"`
	ExpiresAt time.Time `db:"expires_at"`
}

// Set stores a key-value pair with optional expiration
func (s *Storage) Set(key string, value []byte, exp time.Duration) error {
	// Validate key
	if key == "" {
		return fmt.Errorf("key may not be empty")
	}

	// Check for invalid characters
	if strings.ContainsAny(key, " \t\n\r\f\v") {
		return fmt.Errorf("invalid test name: cannot contain whitespace")
	}

	// Check for SQL injection attempts and special characters
	if strings.ContainsAny(key, ";'\"-.") {
		return fmt.Errorf("invalid test name: cannot contain special characters")
	}

	// Check for unicode characters
	for _, r := range key {
		if r > unicode.MaxASCII {
			return fmt.Errorf("invalid test name: cannot contain unicode characters")
		}
	}

	// Calculate expiration time
	var expiresAt *time.Time
	var ttl int

	if exp > 0 {
		// Specific expiration provided
		ttl = int(exp.Seconds())
		t := time.Now().Add(exp)
		expiresAt = &t
	} else if exp == 0 && s.ttl > 0 {
		// Use default TTL from config
		ttl = s.ttl
		t := time.Now().Add(time.Duration(s.ttl) * time.Second)
		expiresAt = &t
	}
	// If exp == 0 and s.ttl == 0, no TTL will be set (live forever)

	// Use query builder for insert
	stmt, names := qb.Insert(fmt.Sprintf("%s.%s", s.keyspace, s.table)).
		Columns("key", "value", "expires_at").
		ToCql()

	if ttl > 0 {
		stmt += fmt.Sprintf(" USING TTL %d", ttl)
	}

	// Use gocqlx session
	return s.sx.Query(stmt, names).BindMap(map[string]interface{}{
		"key":        key,
		"value":      value,
		"expires_at": expiresAt,
	}).ExecRelease()
}

// Get retrieves a value by key
func (s *Storage) Get(key string) ([]byte, error) {
	// Use query builder for select
	stmt, names := qb.Select(fmt.Sprintf("%s.%s", s.keyspace, s.table)).
		Columns("value", "expires_at").
		Where(qb.Eq("key")).
		ToCql()

	var result queryResult
	// Use gocqlx session
	if err := s.sx.Query(stmt, names).BindMap(map[string]interface{}{
		"key": key,
	}).GetRelease(&result); err != nil {
		if err == gocql.ErrNotFound {
			return nil, fmt.Errorf("key not found")
		}
		return nil, err
	}

	// Check if the key has expired
	if !result.ExpiresAt.IsZero() && time.Now().After(result.ExpiresAt) {
		// Delete the expired key
		if err := s.Delete(key); err != nil {
			return nil, err
		}
		return nil, fmt.Errorf("key expired")
	}

	return result.Value, nil
}

// Delete removes a key from storage
func (s *Storage) Delete(key string) error {
	// First check if the key exists
	stmt, names := qb.Select(fmt.Sprintf("%s.%s", s.keyspace, s.table)).
		Columns("key").
		Where(qb.Eq("key")).
		ToCql()

	var exists string
	if err := s.sx.Query(stmt, names).BindMap(map[string]interface{}{
		"key": key,
	}).GetRelease(&exists); err != nil {
		if err == gocql.ErrNotFound {
			return fmt.Errorf("key not found")
		}
		return err
	}

	// Use query builder for delete
	stmt, names = qb.Delete(fmt.Sprintf("%s.%s", s.keyspace, s.table)).
		Where(qb.Eq("key")).
		ToCql()

	// Use gocqlx session
	return s.sx.Query(stmt, names).BindMap(map[string]interface{}{
		"key": key,
	}).ExecRelease()
}

// Reset clears all keys from storage
func (s *Storage) Reset() error {
	// Use direct TRUNCATE query with proper escaping
	query := fmt.Sprintf("TRUNCATE TABLE %s.%s", s.keyspace, s.table)
	return s.sx.Query(query, []string{}).ExecRelease()
}

// Conn returns the underlying gocql session.
func (s *Storage) Conn() *gocql.Session {
	return s.session
}

// Close closes the storage connection
func (s *Storage) Close() {
	if s.session != nil {
		s.session.Close()
	}
}
