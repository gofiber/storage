package cassandra

import (
	"errors"
	"fmt"
	"log"
	"time"

	"github.com/gocql/gocql"
)

// Storage represents a Cassandra storage implementation
type Storage struct {
	cluster  *gocql.ClusterConfig
	session  *gocql.Session
	keyspace string
	table    string
	ttl      int
}

// New creates a new Cassandra storage instance
func New(cnfg Config) *Storage {

	// Default config
	cfg := configDefault(cnfg)

	// Create cluster config
	cluster := gocql.NewCluster(cfg.Hosts...)
	cluster.Consistency = cfg.Consistency

	// Don't set keyspace initially - we need to create it first
	// We'll connect to system keyspace first

	// Convert expiration to seconds for TTL
	ttl := 0
	if cfg.Expiration > 0 {
		ttl = int(cfg.Expiration.Seconds())
	}

	// Create storage instance
	storage := &Storage{
		cluster:  cluster,
		keyspace: cfg.Keyspace,
		table:    cfg.Table,
		ttl:      ttl,
	}

	// Initialize keyspace
	if err := storage.createOrVerifyKeySpace(cfg.Reset); err != nil {
		log.Printf("Failed to initialize keyspace: %v", err)
		panic(err)
	}

	return storage
}

// createOrVerifyKeySpace ensures the keyspace and table exist with proper keyspace
func (s *Storage) createOrVerifyKeySpace(reset bool) error {
	// Connect to system keyspace first to create our keyspace if needed
	systemCluster := gocql.NewCluster(s.cluster.Hosts...)
	systemCluster.Consistency = s.cluster.Consistency
	systemCluster.Timeout = s.cluster.Timeout

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
	query := fmt.Sprintf(`
		CREATE TABLE IF NOT EXISTS %s.%s (
			key text PRIMARY KEY,
			value blob,
			expires_at timestamp
		)
	`, s.keyspace, s.table)

	return s.session.Query(query).Exec()
}

// dropTables drops existing tables for reset
func (s *Storage) dropTables() error {
	// Drop data table
	query := fmt.Sprintf("DROP TABLE IF EXISTS %s.%s", s.keyspace, s.table)
	if err := s.session.Query(query).Exec(); err != nil {
		return err
	}

	// Drop schema_info table
	query = fmt.Sprintf("DROP TABLE IF EXISTS %s.schema_info", s.keyspace)
	return s.session.Query(query).Exec()
}

// Set stores a key-value pair with optional expiration
func (s *Storage) Set(key string, value []byte, exp time.Duration) error {
	// Calculate expiration time
	var expiresAt *time.Time
	var ttl int = -1 // Default to no TTL

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
	// If exp < 0, we'll use no TTL (indefinite storage)

	// Insert with TTL if specified
	var query string
	if ttl > 0 {
		query = fmt.Sprintf("INSERT INTO %s.%s (key, value, expires_at) VALUES (?, ?, ?) USING TTL %d",
			s.keyspace, s.table, ttl)
	} else {
		query = fmt.Sprintf("INSERT INTO %s.%s (key, value, expires_at) VALUES (?, ?, ?)",
			s.keyspace, s.table)
	}

	return s.session.Query(query, key, value, expiresAt).Exec()
}

// Get retrieves a value by key
func (s *Storage) Get(key string) ([]byte, error) {
	var value []byte
	var expiresAt time.Time

	query := fmt.Sprintf("SELECT value, expires_at FROM %s.%s WHERE key = ?", s.keyspace, s.table)
	if err := s.session.Query(query, key).Scan(&value, &expiresAt); err != nil {
		if errors.Is(err, gocql.ErrNotFound) {
			return nil, nil
		}
		return nil, err
	}

	// Check if expired (as a backup in case TTL didn't work)
	if !expiresAt.IsZero() && expiresAt.Before(time.Now()) {
		// Expired but not yet removed by TTL
		err := s.Delete(key)
		if err != nil {
			log.Printf("Failed to delete expired key %s: %v", key, err)
		}
		return nil, nil
	}

	return value, nil
}

// Delete removes a key from storage
func (s *Storage) Delete(key string) error {
	query := fmt.Sprintf("DELETE FROM %s.%s WHERE key = ?", s.keyspace, s.table)
	return s.session.Query(query, key).Exec()
}

// Reset clears all keys from storage
func (s *Storage) Reset() error {
	query := fmt.Sprintf("TRUNCATE TABLE %s.%s", s.keyspace, s.table)
	return s.session.Query(query).Exec()
}

// Close closes the storage connection
func (s *Storage) Close() {
	if s.session != nil {
		s.session.Close()
	}
}
