// Package firestore provides a Firestore storage driver for Fiber.
// It uses cloud.google.com/go/firestore v1.14.0 for Google Cloud Firestore operations.
//
// Key dependencies:
//   - cloud.google.com/go/firestore: Official Firestore Go SDK
//   - google.golang.org/api/option: Authentication options (ADC, service account)
//   - google.golang.org/grpc: gRPC communication and status codes
package firestore

import (
	"context"
	"encoding/json"
	"fmt"
	"io"
	"os"
	"time"

	"cloud.google.com/go/firestore"
	"google.golang.org/api/option"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

// Storage interface that is implemented by storage providers
type Storage struct {
	client     *firestore.Client
	collection string
	timeout    time.Duration
}

// document represents the structure of a document in Firestore
type document struct {
	Key       string    `firestore:"k"`
	Value     []byte    `firestore:"v"`
	ExpiresAt time.Time `firestore:"exp_at"`
}

// New creates a new Firestore storage instance
func New(config ...Config) *Storage {
	cfg := configDefault(config...)

	ctx, cancel := context.WithTimeout(context.Background(), cfg.RequestTimeout)
	defer cancel()

	var opts []option.ClientOption

	if cfg.Credentials != "" {
		opts = append(opts, option.WithCredentialsJSON([]byte(cfg.Credentials)))
	} else if cfg.CredentialsPath != "" {
		opts = append(opts, option.WithCredentialsFile(cfg.CredentialsPath))
	}

	client, err := firestore.NewClient(ctx, cfg.ProjectID, opts...)
	if err != nil {
		panic(fmt.Sprintf("firestore: unable to create client: %v", err))
	}

	storage := &Storage{
		client:     client,
		collection: cfg.Collection,
		timeout:    cfg.RequestTimeout,
	}

	if cfg.Reset {
		if err := storage.Reset(); err != nil {
			panic(fmt.Sprintf("firestore: unable to reset collection: %v", err))
		}
	}

	return storage
}

// Get value by key
func (s *Storage) Get(key string) ([]byte, error) {
	ctx, cancel := context.WithTimeout(context.Background(), s.timeout)
	defer cancel()
	return s.GetWithContext(ctx, key)
}

// GetWithContext gets value by key with context
func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error) {
	if len(key) <= 0 {
		return nil, nil
	}

	if _, ok := ctx.Deadline(); !ok {
		var cancel context.CancelFunc
		ctx, cancel = context.WithTimeout(ctx, s.timeout)
		defer cancel()
	}

	doc, err := s.client.Collection(s.collection).Doc(key).Get(ctx)
	if err != nil {
		// Document not found is not an error in our interface
		if status.Code(err) == codes.NotFound {
			return nil, nil
		}
		return nil, err
	}

	var data document
	if err := doc.DataTo(&data); err != nil {
		return nil, err
	}

	if !data.ExpiresAt.IsZero() && time.Now().After(data.ExpiresAt) {
		// Delete expired document asynchronously
		go func() {
			delCtx, cancel := context.WithTimeout(context.Background(), s.timeout)
			defer cancel()
			_, _ = s.client.Collection(s.collection).Doc(key).Delete(delCtx)
		}()
		return nil, nil
	}

	return data.Value, nil
}

// Set key with value and expiration
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	ctx, cancel := context.WithTimeout(context.Background(), s.timeout)
	defer cancel()
	return s.SetWithContext(ctx, key, val, exp)
}

// SetWithContext key with value and expiration with context
func (s *Storage) SetWithContext(ctx context.Context, key string, val []byte, exp time.Duration) error {
	if len(key) <= 0 || len(val) <= 0 {
		return nil
	}

	if _, ok := ctx.Deadline(); !ok {
		var cancel context.CancelFunc
		ctx, cancel = context.WithTimeout(ctx, s.timeout)
		defer cancel()
	}

	doc := document{
		Key:   key,
		Value: val,
	}

	if exp > 0 {
		doc.ExpiresAt = time.Now().Add(exp)
	}

	_, err := s.client.Collection(s.collection).Doc(key).Set(ctx, doc)
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
	if len(key) <= 0 {
		return nil
	}

	if _, ok := ctx.Deadline(); !ok {
		var cancel context.CancelFunc
		ctx, cancel = context.WithTimeout(ctx, s.timeout)
		defer cancel()
	}

	_, err := s.client.Collection(s.collection).Doc(key).Delete(ctx)
	if err != nil && status.Code(err) == codes.NotFound {
		return nil
	}
	return err
}

// Reset all keys
func (s *Storage) Reset() error {
	ctx, cancel := context.WithTimeout(context.Background(), s.timeout)
	defer cancel()
	return s.ResetWithContext(ctx)
}

// ResetWithContext reset all keys with context
func (s *Storage) ResetWithContext(ctx context.Context) error {
	if _, ok := ctx.Deadline(); !ok {
		var cancel context.CancelFunc
		ctx, cancel = context.WithTimeout(ctx, s.timeout)
		defer cancel()
	}

	bulkWriter := s.client.BulkWriter(ctx)
	defer bulkWriter.End()

	docs := s.client.Collection(s.collection).Documents(ctx)
	defer docs.Stop()

	for {
		doc, err := docs.Next()
		if err == io.EOF {
			break
		}
		if err != nil {
			break
		}

		_, _ = bulkWriter.Delete(doc.Ref)
	}

	bulkWriter.Flush()
	return nil
}

// Close the database
func (s *Storage) Close() error {
	if s.client == nil {
		return nil
	}
	return s.client.Close()
}

// Return database client
func (s *Storage) Conn() *firestore.Client {
	return s.client
}

// NewFromConnection creates a new Storage instance from an existing Firestore client
func NewFromConnection(client *firestore.Client, collection string) *Storage {
	if collection == "" {
		collection = ConfigDefault.Collection
	}

	return &Storage{
		client:     client,
		collection: collection,
		timeout:    ConfigDefault.RequestTimeout,
	}
}

// LoadCredentialsFromFile loads credentials from a file and returns as JSON string
func LoadCredentialsFromFile(filepath string) (string, error) {
	content, err := os.ReadFile(filepath)
	if err != nil {
		return "", err
	}

	var data interface{}
	if err := json.Unmarshal(content, &data); err != nil {
		return "", fmt.Errorf("invalid JSON in credentials file: %w", err)
	}

	return string(content), nil
}
