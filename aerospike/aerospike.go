package aerospike

import (
	"context"
	"errors"
	"fmt"
	"log"
	"math"
	"strings"
	"sync"
	"time"

	"github.com/aerospike/aerospike-client-go/v8"
)

// Storage interface that is implemented by storage drivers
type Storage struct {
	client    *aerospike.Client
	namespace string
	setName   string

	// schemaSetName is separate from setName so user data cannot collide with the bookkeeping record.
	schemaSetName string
	reset         bool
	schemaInfo    *SchemaInfo
	closeOnce     sync.Once
}

// schemaInfoKey is where the schema bookkeeping lives, in its own set; to callers it is an ordinary key.
const schemaInfoKey = "_schema_info"

// schemaSetSuffix names the bookkeeping set, derived from the configured set and reserved so two storages cannot collide.
const schemaSetSuffix = "_fiber_schema"

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

	// Checked before the client is opened, so an unusable configuration leaves no connection to release.
	if strings.HasSuffix(cfg.SetName, schemaSetSuffix) {
		panic(fmt.Errorf("aerospike: set name %q is reserved: the %q suffix names this driver's own schema set", cfg.SetName, schemaSetSuffix))
	}

	// Create client
	client, err := aerospike.NewClientWithPolicyAndHost(cp, cfg.Hosts...)
	if err != nil {
		panic(err)
	}

	// Create storage
	store := &Storage{
		client:        client,
		namespace:     cfg.Namespace,
		setName:       cfg.SetName,
		schemaSetName: cfg.SetName + schemaSetSuffix,
		reset:         cfg.Reset,
	}

	// Release the client opened above rather than leaking it when a later step fails.
	closeOwned := func() { client.Close() }

	// Reset keys if set
	if cfg.Reset {
		if err := store.Reset(); err != nil {
			closeOwned()
			panic(err)
		}
	}

	// Check and create schema
	if err := store.createOrVerifySchema(cfg.SchemaVersion, cfg.SchemaDescription, cfg.ForceSchemaUpdate); err != nil {
		closeOwned()
		panic(err)
	}

	// No additional GC needed as Aerospike handles TTL internally

	return store
}

// createOrVerifySchema checks if schema exists and creates or updates if needed
func (s *Storage) createOrVerifySchema(version int, description string, forceUpdate bool) error {

	// Schema info lives in its own set, clear of the caller's keyspace.
	schemaKey, err := aerospike.NewKey(s.namespace, s.schemaSetName, schemaInfoKey)
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

	// A TTL of zero is the namespace default, not "never", so the bookkeeping quietly expired on namespaces with one.
	writePolicy := aerospike.NewWritePolicy(0, aerospike.TTLDontExpire)

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

	// Never expire the schema info, see createSchema.
	writePolicy := aerospike.NewWritePolicy(0, aerospike.TTLDontExpire)

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

// GetSchemaInfo returns the current schema information
func (s *Storage) GetSchemaInfo() *SchemaInfo {
	return s.schemaInfo
}

// Get value by key
func (s *Storage) Get(key string) ([]byte, error) {
	if len(key) == 0 {
		return nil, nil
	}

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

// GetWithContext gets value by key, aborting if ctx is already done.
func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error) {
	if err := ctx.Err(); err != nil {
		return nil, err
	}
	return s.Get(key)
}

// Set key with value
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	// The storage interface documents an empty key or value as ignored without error.
	if len(key) == 0 || len(val) == 0 {
		return nil
	}

	k, err := aerospike.NewKey(s.namespace, s.setName, key)
	if err != nil {
		return err
	}

	// Zero and negative both mean no expiration, which Aerospike spells with a sentinel.
	if exp <= 0 {
		writePolicy := aerospike.NewWritePolicy(0, aerospike.TTLDontExpire)
		return s.client.Put(writePolicy, k, aerospike.BinMap{"value": val})
	}

	expiration := exp

	// Round up to whole seconds, minimum 1, and stop below the two uint32 values Aerospike reserves.
	const maxTTL = math.MaxUint32 - 2

	secs := int64(expiration / time.Second)
	if expiration%time.Second != 0 {
		secs++
	}
	switch {
	case secs < 1:
		secs = 1
	case secs > maxTTL:
		secs = maxTTL
	}
	ttl := uint32(secs) //nolint:gosec // clamped to the uint32 range above

	writePolicy := aerospike.NewWritePolicy(0, ttl)
	bins := aerospike.BinMap{
		"value": val,
	}

	return s.client.Put(writePolicy, k, bins)
}

// SetWithContext sets value by key, aborting if ctx is already done.
func (s *Storage) SetWithContext(ctx context.Context, key string, val []byte, exp time.Duration) error {
	if err := ctx.Err(); err != nil {
		return err
	}
	return s.Set(key, val, exp)
}

// Delete key
func (s *Storage) Delete(key string) error {
	if len(key) == 0 {
		return nil
	}

	k, err := aerospike.NewKey(s.namespace, s.setName, key)
	if err != nil {
		return err
	}

	_, err = s.client.Delete(nil, k)
	return err
}

// DeleteWithContext deletes key, aborting if ctx is already done.
func (s *Storage) DeleteWithContext(ctx context.Context, key string) error {
	if err := ctx.Err(); err != nil {
		return err
	}
	return s.Delete(key)
}

// Reset all keys
func (s *Storage) Reset() error {
	// The bookkeeping record is in its own set, untouched by this scan, so every record here is the caller's.
	scanPolicy := aerospike.NewScanPolicy()
	// Note: ConcurrentNodes no longer exists in v8

	recordset, scanErr := s.client.ScanAll(scanPolicy, s.namespace, s.setName)
	if scanErr != nil {
		return scanErr
	}

	// Ensure recordset is closed when we're done
	defer func() {
		if err := recordset.Close(); err != nil {
			log.Printf("Error closing recordset: %v\n", err)
		}
	}()

	// Create a write policy for deletes
	writePolicy := aerospike.NewWritePolicy(0, 0)

	// Collected rather than swallowed: New calls Reset, and a silent nil would leave stale keys behind.
	var errs []error
	for result := range recordset.Results() {
		if result.Err != nil {
			errs = append(errs, result.Err)
			continue
		}

		// Delete the record
		if _, err := s.client.Delete(writePolicy, result.Record.Key); err != nil {
			errs = append(errs, err)
		}
	}

	return errors.Join(errs...)
}

// ResetWithContext resets all keys, aborting if ctx is already done.
func (s *Storage) ResetWithContext(ctx context.Context) error {
	if err := ctx.Err(); err != nil {
		return err
	}
	return s.Reset()
}

// Close the storage. Safe to call more than once; the client is closed on the first call only.
func (s *Storage) Close() error {
	s.closeOnce.Do(func() {
		s.client.Close()
	})
	return nil
}
