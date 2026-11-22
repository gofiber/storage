// Package cosmosdb provides an Azure Cosmos DB storage driver for Fiber.
// It uses github.com/Azure/azure-sdk-for-go/sdk/data/azcosmos for Azure Cosmos DB for NoSQL operations.
package cosmosdb

import (
	"context"
	"crypto/sha256"
	"encoding/hex"
	"encoding/json"
	"errors"
	"math"
	"net/http"
	"sync/atomic"
	"time"

	"github.com/Azure/azure-sdk-for-go/sdk/azcore"
	"github.com/Azure/azure-sdk-for-go/sdk/data/azcosmos"
)

// ErrClosed is returned by every operation attempted after Close.
var ErrClosed = errors.New("cosmosdb: storage is closed")

// Storage interface that is implemented by storage providers
type Storage struct {
	closed    atomic.Bool
	container *azcosmos.ContainerClient
	timeout   time.Duration
}

// item represents the structure of an item in Cosmos DB
type item struct {
	ID        string `json:"id"`
	Key       string `json:"k"`
	Value     []byte `json:"v"`
	ExpiresAt int64  `json:"exp,omitempty"`
	TTL       int32  `json:"ttl,omitempty"`
}

// New creates a new Cosmos DB storage instance using context.Background() for initialization.
func New(config ...Config) *Storage {
	return NewWithContext(context.Background(), config...)
}

// NewWithContext creates a new Cosmos DB storage instance, using ctx as the
// parent context for creating the database and container.
func NewWithContext(ctx context.Context, config ...Config) *Storage {
	cfg := configDefault(config...)

	client, err := newClient(cfg)
	if err != nil {
		panic(err)
	}

	initCtx, cancel := context.WithTimeout(ctx, cfg.RequestTimeout)
	defer cancel()

	container, err := ensureContainer(initCtx, client, cfg.Database, cfg.Container)
	if err != nil {
		panic(err)
	}

	storage := &Storage{
		container: container,
		timeout:   cfg.RequestTimeout,
	}

	if cfg.Reset {
		if err := storage.ResetWithContext(initCtx); err != nil {
			panic(err)
		}
	}

	return storage
}

// NewFromConnection creates a new Storage instance from an existing Cosmos DB container client.
// The container must use "/id" as its partition key path.
func NewFromConnection(container *azcosmos.ContainerClient) *Storage {
	if container == nil {
		panic("cosmosdb: nil container")
	}

	return &Storage{
		container: container,
		timeout:   ConfigDefault.RequestTimeout,
	}
}

func newClient(cfg Config) (*azcosmos.Client, error) {
	if cfg.ConnectionString != "" {
		return azcosmos.NewClientFromConnectionString(cfg.ConnectionString, nil)
	}
	credential, err := azcosmos.NewKeyCredential(cfg.Key)
	if err != nil {
		return nil, err
	}
	return azcosmos.NewClientWithKey(cfg.Endpoint, credential, nil)
}

// ensureContainer creates the database and container if they do not exist yet.
// Time to live is enabled on new containers so Cosmos DB removes expired items itself.
func ensureContainer(ctx context.Context, client *azcosmos.Client, databaseID, containerID string) (*azcosmos.ContainerClient, error) {
	container, err := client.NewContainer(databaseID, containerID)
	if err != nil {
		return nil, err
	}

	_, err = container.Read(ctx, nil)
	if err == nil {
		return container, nil
	}
	if !hasStatus(err, http.StatusNotFound) {
		return nil, err
	}

	_, err = client.CreateDatabase(ctx, azcosmos.DatabaseProperties{ID: databaseID}, nil)
	if err != nil && !hasStatus(err, http.StatusConflict) {
		return nil, err
	}

	database, err := client.NewDatabase(databaseID)
	if err != nil {
		return nil, err
	}

	defaultTimeToLive := int32(-1)
	_, err = database.CreateContainer(ctx, azcosmos.ContainerProperties{
		ID:                containerID,
		DefaultTimeToLive: &defaultTimeToLive,
		PartitionKeyDefinition: azcosmos.PartitionKeyDefinition{
			Paths: []string{"/id"},
		},
	}, nil)
	if err != nil && !hasStatus(err, http.StatusConflict) {
		return nil, err
	}

	return container, nil
}

// Get value by key
func (s *Storage) Get(key string) ([]byte, error) {
	ctx, cancel := context.WithTimeout(context.Background(), s.timeout)
	defer cancel()
	return s.GetWithContext(ctx, key)
}

// GetWithContext gets value by key with context
func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error) {
	if s.closed.Load() {
		return nil, ErrClosed
	}
	if len(key) <= 0 {
		return nil, nil
	}

	if _, ok := ctx.Deadline(); !ok {
		var cancel context.CancelFunc
		ctx, cancel = context.WithTimeout(ctx, s.timeout)
		defer cancel()
	}

	id := itemID(key)
	response, err := s.container.ReadItem(ctx, azcosmos.NewPartitionKeyString(id), id, nil)
	if err != nil {
		if hasStatus(err, http.StatusNotFound) {
			return nil, nil
		}
		return nil, err
	}

	var stored item
	if err := json.Unmarshal(response.Value, &stored); err != nil {
		return nil, err
	}

	// Cosmos DB time to live has a one second resolution and is off on containers created without it.
	if stored.ExpiresAt != 0 && time.Now().UnixMilli() >= stored.ExpiresAt {
		return nil, nil
	}

	return stored.Value, nil
}

// Set key with value and expiration
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	ctx, cancel := context.WithTimeout(context.Background(), s.timeout)
	defer cancel()
	return s.SetWithContext(ctx, key, val, exp)
}

// SetWithContext key with value and expiration with context
func (s *Storage) SetWithContext(ctx context.Context, key string, val []byte, exp time.Duration) error {
	if s.closed.Load() {
		return ErrClosed
	}
	if len(key) <= 0 || len(val) <= 0 {
		return nil
	}

	if _, ok := ctx.Deadline(); !ok {
		var cancel context.CancelFunc
		ctx, cancel = context.WithTimeout(ctx, s.timeout)
		defer cancel()
	}

	stored := item{
		ID:    itemID(key),
		Key:   key,
		Value: val,
	}

	if exp > 0 {
		stored.ExpiresAt = time.Now().Add(exp).UnixMilli()
		stored.TTL = timeToLive(exp)
	}

	body, err := json.Marshal(stored)
	if err != nil {
		return err
	}

	_, err = s.container.UpsertItem(ctx, azcosmos.NewPartitionKeyString(stored.ID), body, nil)
	return err
}

// Delete entry by key
func (s *Storage) Delete(key string) error {
	ctx, cancel := context.WithTimeout(context.Background(), s.timeout)
	defer cancel()
	return s.DeleteWithContext(ctx, key)
}

// DeleteWithContext deletes entry by key with context
func (s *Storage) DeleteWithContext(ctx context.Context, key string) error {
	if s.closed.Load() {
		return ErrClosed
	}
	if len(key) <= 0 {
		return nil
	}

	if _, ok := ctx.Deadline(); !ok {
		var cancel context.CancelFunc
		ctx, cancel = context.WithTimeout(ctx, s.timeout)
		defer cancel()
	}

	return s.deleteItem(ctx, itemID(key))
}

// Reset all keys
func (s *Storage) Reset() error {
	ctx, cancel := context.WithTimeout(context.Background(), s.timeout)
	defer cancel()
	return s.ResetWithContext(ctx)
}

// ResetWithContext reset all keys with context
func (s *Storage) ResetWithContext(ctx context.Context) error {
	if s.closed.Load() {
		return ErrClosed
	}

	if _, ok := ctx.Deadline(); !ok {
		var cancel context.CancelFunc
		ctx, cancel = context.WithTimeout(ctx, s.timeout)
		defer cancel()
	}

	pager := s.container.NewQueryItemsPager("SELECT c.id FROM c", azcosmos.NewPartitionKey(), nil)
	for pager.More() {
		page, err := pager.NextPage(ctx)
		if err != nil {
			return err
		}
		for _, body := range page.Items {
			var stored item
			if err := json.Unmarshal(body, &stored); err != nil {
				return err
			}
			if err := s.deleteItem(ctx, stored.ID); err != nil {
				return err
			}
		}
	}

	return nil
}

// Close the storage. The Cosmos DB client holds no connections to close.
func (s *Storage) Close() error {
	s.closed.Store(true)
	return nil
}

// Return database client
func (s *Storage) Conn() *azcosmos.ContainerClient {
	return s.container
}

func (s *Storage) deleteItem(ctx context.Context, id string) error {
	_, err := s.container.DeleteItem(ctx, azcosmos.NewPartitionKeyString(id), id, nil)
	if err != nil && !hasStatus(err, http.StatusNotFound) {
		return err
	}
	return nil
}

// itemID hashes the key: Cosmos DB ids cannot contain '/', '\', '?' or '#' and are limited to 255 characters.
func itemID(key string) string {
	sum := sha256.Sum256([]byte(key))
	return hex.EncodeToString(sum[:])
}

func timeToLive(exp time.Duration) int32 {
	seconds := math.Ceil(exp.Seconds())
	if seconds > math.MaxInt32 {
		return math.MaxInt32
	}
	return int32(seconds)
}

func hasStatus(err error, status int) bool {
	var responseError *azcore.ResponseError
	return errors.As(err, &responseError) && responseError.StatusCode == status
}
