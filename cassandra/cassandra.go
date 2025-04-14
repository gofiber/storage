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

// SchemaInfo represents the schema metadata
type SchemaInfo struct {
	Version     int
	Description string
	CreatedAt   time.Time
	UpdatedAt   time.Time
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
			created_at timestamp,
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
		query = fmt.Sprintf("INSERT INTO %s.%s (key, value, created_at, expires_at) VALUES (?, ?, ?, ?) USING TTL %d",
			s.keyspace, s.table, ttl)
	} else {
		query = fmt.Sprintf("INSERT INTO %s.%s (key, value, created_at, expires_at) VALUES (?, ?, ?, ?)",
			s.keyspace, s.table)
	}

	return s.session.Query(query, key, value, time.Now(), expiresAt).Exec()
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

// Test functions

// // setupCassandraContainer creates a Cassandra container using the official module
// func setupCassandraContainer(ctx context.Context) (*cassandracontainer.CassandraContainer, string, error) {
// 	cassandraContainer, err := cassandracontainer.RunContainer(ctx,
// 		testcontainers.WithImage("cassandra:4.1"),
// 		cassandracontainer.WithInitialWaitTimeout(2*time.Minute),
// 	)
// 	if err != nil {
// 		return nil, "", err
// 	}

// 	// Get connection parameters
// 	host, err := cassandraContainer.Host(ctx)
// 	if err != nil {
// 		return nil, "", err
// 	}

// 	mappedPort, err := cassandraContainer.MappedPort(ctx, "9042/tcp")
// 	if err != nil {
// 		return nil, "", err
// 	}

// 	connectionURL := host + ":" + mappedPort.Port()
// 	return cassandraContainer, connectionURL, nil
// }

// func TestSchemaManagement(t *testing.T) {
// 	ctx := context.Background()

// 	// Start Cassandra container
// 	cassandraContainer, connectionURL, err := setupCassandraContainer(ctx)
// 	if err != nil {
// 		t.Fatalf("Failed to start Cassandra container: %v", err)
// 	}
// 	defer func() {
// 		if err := cassandraContainer.Terminate(ctx); err != nil {
// 			t.Logf("Failed to terminate container: %v", err)
// 		}
// 	}()

// 	// 1. Test keyspace creation
// 	store := New(Config{
// 		Hosts:             []string{connectionURL},
// 		Keyspace:          "test_keyspace_creation",
// 		Table:             "test_table",
// 		SchemaVersion:     1,
// 		SchemaDescription: "Initial Schema",
// 	})

// 	// Verify keyspace was created
// 	systemCluster := gocql.NewCluster(connectionURL)
// 	systemSession, err := systemCluster.CreateSession()
// 	if err != nil {
// 		t.Fatalf("Failed to connect to system keyspace: %v", err)
// 	}

// 	var count int
// 	err = systemSession.Query(
// 		"SELECT COUNT(*) FROM system_schema.keyspaces WHERE keyspace_name = ?",
// 		"test_keyspace_creation",
// 	).Scan(&count)
// 	assert.NoError(t, err)
// 	assert.Equal(t, 1, count, "Keyspace should have been created")
// 	systemSession.Close()

// 	// 2. Test table creation
// 	// Connect to the keyspace and check if tables exist
// 	cluster := gocql.NewCluster(connectionURL)
// 	cluster.Keyspace = "test_keyspace_creation"
// 	session, err := cluster.CreateSession()
// 	if err != nil {
// 		t.Fatalf("Failed to connect to keyspace: %v", err)
// 	}

// 	// Check for data table
// 	err = session.Query(
// 		"SELECT COUNT(*) FROM system_schema.tables WHERE keyspace_name = ? AND table_name = ?",
// 		"test_keyspace_creation", "test_table",
// 	).Scan(&count)
// 	assert.NoError(t, err)
// 	assert.Equal(t, 1, count, "Data table should have been created")

// 	// Check for schema_info table
// 	err = session.Query(
// 		"SELECT COUNT(*) FROM system_schema.tables WHERE keyspace_name = ? AND table_name = ?",
// 		"test_keyspace_creation", "schema_info",
// 	).Scan(&count)
// 	assert.NoError(t, err)
// 	assert.Equal(t, 1, count, "Schema info table should have been created")

// 	session.Close()
// 	store.Close()

// 	// 3. Test schema update
// 	// Create initial schema
// 	storeV1 := New(Config{
// 		Hosts:             []string{connectionURL},
// 		Keyspace:          "test_schema_update",
// 		Table:             "test_table",
// 		SchemaVersion:     1,
// 		SchemaDescription: "Schema v1",
// 	})

// 	// Verify initial schema
// 	schemaInfo, err := storeV1.GetSchemaInfo()
// 	assert.NoError(t, err)
// 	assert.Equal(t, 1, schemaInfo.Version)
// 	assert.Equal(t, "Schema v1", schemaInfo.Description)
// 	createdAt := schemaInfo.CreatedAt

// 	// Close and create with higher version
// 	storeV1.Close()

// 	// Create updated schema
// 	storeV2 := New(Config{
// 		Hosts:             []string{connectionURL},
// 		Keyspace:          "test_schema_update",
// 		Table:             "test_table",
// 		SchemaVersion:     2,
// 		SchemaDescription: "Schema v2",
// 	})

// 	// Verify schema was updated
// 	updatedSchema, err := storeV2.GetSchemaInfo()
// 	assert.NoError(t, err)
// 	assert.Equal(t, 2, updatedSchema.Version)
// 	assert.Equal(t, "Schema v2", updatedSchema.Description)
// 	assert.Equal(t, createdAt.Format(time.RFC3339), updatedSchema.CreatedAt.Format(time.RFC3339))
// 	assert.True(t, updatedSchema.UpdatedAt.After(createdAt))

// 	storeV2.Close()

// 	// 4. Test forced schema update with same version
// 	storeForce := New(Config{
// 		Hosts:             []string{connectionURL},
// 		Keyspace:          "test_schema_update",
// 		Table:             "test_table",
// 		SchemaVersion:     2, // Same version
// 		SchemaDescription: "Schema v2 forced",
// 		ForceSchemaUpdate: true,
// 	})

// 	// Verify schema was updated despite same version
// 	forcedSchema, err := storeForce.GetSchemaInfo()
// 	assert.NoError(t, err)
// 	assert.Equal(t, 2, forcedSchema.Version)
// 	assert.Equal(t, "Schema v2 forced", forcedSchema.Description)
// 	assert.True(t, forcedSchema.UpdatedAt.After(updatedSchema.UpdatedAt))

// 	storeForce.Close()

// 	// 5. Test reset functionality
// 	resetStore := New(Config{
// 		Hosts:             []string{connectionURL},
// 		Keyspace:          "test_schema_reset",
// 		Table:             "test_table",
// 		SchemaVersion:     1,
// 		SchemaDescription: "Initial Schema",
// 	})

// 	// Add some data
// 	err = resetStore.Set("key1", []byte("value1"), 0)
// 	assert.NoError(t, err)

// 	// Close and reopen with reset
// 	resetStore.Close()

// 	resetStore = New(Config{
// 		Hosts:             []string{connectionURL},
// 		Keyspace:          "test_schema_reset",
// 		Table:             "test_table",
// 		SchemaVersion:     1,
// 		SchemaDescription: "Reset Schema",
// 		Reset:             true,
// 	})

// 	// Check that data is gone
// 	val, err := resetStore.Get("key1")
// 	assert.NoError(t, err)
// 	assert.Nil(t, val, "Key should be gone after reset")

// 	resetStore.Close()
// }
