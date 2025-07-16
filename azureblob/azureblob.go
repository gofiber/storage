package azureblob

import (
	"context"
	"fmt"
	"io"
	"time"

	"github.com/Azure/azure-sdk-for-go/sdk/storage/azblob"
	"github.com/Azure/azure-sdk-for-go/sdk/storage/azblob/bloberror"
)

// Storage interface that is implemented by storage providers
type Storage struct {
	client         *azblob.Client
	container      string
	requestTimeout time.Duration
}

// New creates a new storage
func New(config ...Config) *Storage {
	// Set default config
	cfg := configure(config...)
	// Set the azure credentials
	cred, err := azblob.NewSharedKeyCredential(cfg.Credentials.Account, cfg.Credentials.Key)
	handleError(err)
	client, err := azblob.NewClientWithSharedKeyCredential(cfg.Endpoint, cred, nil)
	handleError(err)
	_, err = client.CreateContainer(context.TODO(), cfg.Container, nil)
	if err != nil {
		if !bloberror.HasCode(err, bloberror.ContainerAlreadyExists) {
			panic(fmt.Sprintf("invalid config:, %v", err))
		}
	}
	storage := &Storage{
		client:         client,
		container:      cfg.Container,
		requestTimeout: cfg.RequestTimeout,
	}

	// Reset all entries if set to true
	if cfg.Reset {
		if err := storage.Reset(); err != nil {
			panic(err)
		}
	}

	return storage
}

// GetWithContext gets value by key
func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error) {
	if len(key) <= 0 {
		return nil, nil
	}

	resp, err := s.client.DownloadStream(ctx, s.container, key, nil)
	if err != nil {
		return []byte{}, err
	}
	data, err := io.ReadAll(resp.Body)
	return data, err
}

// Get gets value by key
func (s *Storage) Get(key string) ([]byte, error) {
	ctx, cancel := s.requestContext()
	defer cancel()

	return s.GetWithContext(ctx, key)
}

// SetWithContext sets key with value
func (s *Storage) SetWithContext(ctx context.Context, key string, val []byte, exp time.Duration) error {
	if len(key) <= 0 {
		return nil
	}

	_, err := s.client.UploadBuffer(ctx, s.container, key, val, nil)
	return err
}

// Set sets key with value
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	ctx, cancel := s.requestContext()
	defer cancel()

	return s.SetWithContext(ctx, key, val, exp)
}

// DeleteWithContext deletes entry by key
func (s *Storage) DeleteWithContext(ctx context.Context, key string) error {
	if len(key) <= 0 {
		return nil
	}

	_, err := s.client.DeleteBlob(ctx, s.container, key, nil)
	return err
}

// Delete deletes entry by key
func (s *Storage) Delete(key string) error {
	ctx, cancel := s.requestContext()
	defer cancel()

	return s.DeleteWithContext(ctx, key)
}

// ResetWithContext resets all entries
func (s *Storage) ResetWithContext(ctx context.Context) error {
	//_, err := s.client.DeleteContainer(ctx, s.container, nil)
	//return err
	pager := s.client.NewListBlobsFlatPager(s.container, nil)

	for pager.More() {
		resp, err := pager.NextPage(ctx)
		if err != nil {
			return err
		}

		for _, v := range resp.Segment.BlobItems {
			_, err = s.client.DeleteBlob(ctx, s.container, *v.Name, nil)
			if err != nil {
				return err
			}
		}
	}

	return nil
}

// Reset resets all entries
func (s *Storage) Reset() error {
	ctx, cancel := s.requestContext()
	defer cancel()

	return s.ResetWithContext(ctx)
}

// Conn returns storage client
func (s *Storage) Conn() *azblob.Client {
	return s.client
}

// Close the storage connextion
func (s *Storage) Close() error {
	return nil
}

// Context for making requests will timeout if a non-zero timeout is configured
func (s *Storage) requestContext() (context.Context, context.CancelFunc) {
	if s.requestTimeout > 0 {
		return context.WithTimeout(context.Background(), s.requestTimeout)
	}
	return context.Background(), func() {}
}

// handleError is a helper to panic on error
func handleError(err error) {
	if err != nil {
		panic(fmt.Sprintf("invalid config:, %v", err))
	}
}
