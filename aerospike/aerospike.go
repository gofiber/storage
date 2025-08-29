package aerospike

import (
	"context"
	"log"
	"time"

	"github.com/aerospike/aerospike-client-go/v8"
)

// Storage interface that is implemented by storage drivers
type Storage struct {
	client     *aerospike.Client
	namespace  string
	setName    string
	reset      bool
	expiration time.Duration
	schemaInfo *SchemaInfo
}

// SchemaInfo holds information about the schema structure
type SchemaInfo struct {
	Version     int
	CreatedAt   time.Time
	UpdatedAt   time.Time
	Description string
}

// New creates a new storage
func New(config ...Config) *Storage {

	// Set default config
	cfg := configDefault(config...)

	// connect to the host
	cp := aerospike.NewClientPolicy()
	cp.Timeout = cfg.InitialConnectionTimeout

	// Create client
	client, err := aerospike.NewClientWithPolicyAndHost(cp, cfg.Hosts...)
	if err != nil {
		panic(err)
	}

	// Create storage
	store := &Storage{
		client:     client,
		namespace:  cfg.Namespace,
		setName:    cfg.SetName,
		reset:      cfg.Reset,
		expiration: cfg.Expiration,
	}

	// Reset keys if set
	if cfg.Reset {
		if err := store.Reset(); err != nil {
			panic(err)
		}
	}

	// Check and create schema
	if err := store.createOrVerifySchema(cfg.SchemaVersion, cfg.SchemaDescription, cfg.ForceSchemaUpdate); err != nil {
		panic(err)
	}

	// No additional GC needed as Aerospike handles TTL internally

	return store
}

// createOrVerifySchema checks if schema exists and creates or updates if needed
func (s *Storage) createOrVerifySchema(version int, description string, forceUpdate bool) error {

	// Schema info is stored with a special key
	schemaKey, err := aerospike.NewKey(s.namespace, s.setName, "_schema_info")
	if err != nil {
		return err
	}

	// Try to get existing schema
	record, err := s.client.Get(nil, schemaKey, "version", "created_at", "updated_at", "description")
	if err != nil {
		if err.Matches(aerospike.ErrKeyNotFound.ResultCode) {
			// Schema doesn't exist, create it
			return s.createSchema(schemaKey, version, description)
		}
		return err
	}

	// Schema exists, check version
	existingVersion, _ := record.Bins["version"].(int)
	existingDescription, _ := record.Bins["description"].(string)

	if existingVersion < version || forceUpdate {
		// Update schema if version is higher or force update is true
		return s.updateSchema(schemaKey, version, description, existingVersion)
	}

	// Load existing schema info
	createdAtStr, _ := record.Bins["created_at"].(string)
	updatedAtStr, _ := record.Bins["updated_at"].(string)

	createdAt, _ := time.Parse(time.RFC3339, createdAtStr)
	updatedAt, _ := time.Parse(time.RFC3339, updatedAtStr)

	// Store schema info
	s.schemaInfo = &SchemaInfo{
		Version:     existingVersion,
		CreatedAt:   createdAt,
		UpdatedAt:   updatedAt,
		Description: existingDescription,
	}

	return nil
}

// createSchema creates a new schema
func (s *Storage) createSchema(schemaKey *aerospike.Key, version int, description string) error {

	now := time.Now()
	nowStr := now.Format(time.RFC3339)

	// Create schema record
	bins := aerospike.BinMap{
		"version":     version,
		"created_at":  nowStr,
		"updated_at":  nowStr,
		"description": description,
	}

	// Never expire the schema info
	writePolicy := aerospike.NewWritePolicy(0, 0)

	// Store in Aerospike
	err := s.client.Put(writePolicy, schemaKey, bins)
	if err != nil {
		return err
	}

	// Store schema info
	s.schemaInfo = &SchemaInfo{
		Version:     version,
		CreatedAt:   now,
		UpdatedAt:   now,
		Description: description,
	}

	return nil
}

// updateSchema updates an existing schema
func (s *Storage) updateSchema(schemaKey *aerospike.Key, version int, description string, oldVersion int) error {
	now := time.Now()
	nowStr := now.Format(time.RFC3339)

	// Update schema record
	bins := aerospike.BinMap{
		"version":     version,
		"updated_at":  nowStr,
		"description": description,
	}

	// Never expire the schema info
	writePolicy := aerospike.NewWritePolicy(0, 0)

	// Store in Aerospike
	err := s.client.Put(writePolicy, schemaKey, bins)
	if err != nil {
		return err
	}

	// Get creation date (it shouldn't change on update)
	createdAtRecord, err := s.client.Get(nil, schemaKey, "created_at")
	if err != nil {
		return err
	}

	createdAtStr, _ := createdAtRecord.Bins["created_at"].(string)
	createdAt, _ := time.Parse(time.RFC3339, createdAtStr)

	// Store schema info
	s.schemaInfo = &SchemaInfo{
		Version:     version,
		CreatedAt:   createdAt,
		UpdatedAt:   now,
		Description: description,
	}

	return nil
}

// Return aerospike client
func (s *Storage) Conn() *aerospike.Client {
	return s.client
}

// GetSchemaInfo returns the current schema information
func (s *Storage) GetSchemaInfo() *SchemaInfo {
	return s.schemaInfo
}

// Get value by key
func (s *Storage) Get(key string) ([]byte, error) {
	k, err := aerospike.NewKey(s.namespace, s.setName, key)
	if err != nil {
		return nil, err
	}

	record, err := s.client.Get(nil, k, "value")
	if err != nil {
		if err.Matches(aerospike.ErrKeyNotFound.ResultCode) {
			return nil, nil
		}
		return nil, err
	}

	data, ok := record.Bins["value"].([]byte)
	if !ok {
		return nil, nil
	}

	return data, nil
}

// GetWithContext gets value by key (dummy context support)
func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error) {
	return s.Get(key)
}

// Set key with value
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	k, err := aerospike.NewKey(s.namespace, s.setName, key)
	if err != nil {
		return err
	}

	expiration := s.expiration
	if exp != 0 {
		expiration = exp
	}

	// Convert to seconds with a minimum of 1
	ttl := uint32(expiration.Seconds())
	if ttl < 1 {
		ttl = 1
	}

	writePolicy := aerospike.NewWritePolicy(0, ttl)
	bins := aerospike.BinMap{
		"value": val,
	}

	return s.client.Put(writePolicy, k, bins)
}

// SetWithContext sets value by key (dummy context support)
func (s *Storage) SetWithContext(ctx context.Context, key string, val []byte, exp time.Duration) error {
	return s.Set(key, val, exp)
}

// Delete key
func (s *Storage) Delete(key string) error {
	k, err := aerospike.NewKey(s.namespace, s.setName, key)
	if err != nil {
		return err
	}

	_, err = s.client.Delete(nil, k)
	return err
}

// DeleteWithContext deletes key (dummy context support)
func (s *Storage) DeleteWithContext(ctx context.Context, key string) error {
	return s.Delete(key)
}

// Reset all keys
func (s *Storage) Reset() error {
	// Use ScanAll which returns a Recordset
	scanPolicy := aerospike.NewScanPolicy()
	// Note: ConcurrentNodes no longer exists in v8

	recordset, err := s.client.ScanAll(scanPolicy, s.namespace, s.setName)
	if err != nil {
		return err
	}

	// Ensure recordset is closed when we're done
	defer func() {
		if err := recordset.Close(); err != nil {
			log.Printf("Error closing recordset: %v\n", err)
		}
	}()

	// Create a write policy for deletes
	writePolicy := aerospike.NewWritePolicy(0, 0)

	// Iterate through all records and delete them
	for result := range recordset.Results() {
		if result.Err != nil {
			// Log the error but continue with other records
			log.Printf("Error scanning: %v\n", result.Err)
			continue
		}

		// Delete the record
		_, err = s.client.Delete(writePolicy, result.Record.Key)
		if err != nil {
			// Log the error but continue with other records
			log.Printf("Error deleting key %v: %v\n", result.Record.Key, err)
		}
	}

	return nil
}

// ResetWithContext resets all keys (dummy context support)
func (s *Storage) ResetWithContext(ctx context.Context) error {
	return s.Reset()
}

// Close the storage
func (s *Storage) Close() error {
	s.client.Close()
	return nil
}
