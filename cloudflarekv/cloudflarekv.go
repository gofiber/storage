package cloudflarekv

import (
	"context"
	"log"
	"time"

	"github.com/cloudflare/cloudflare-go"
)

type APIInterface interface {
	DeleteWorkersKVEntries(ctx context.Context, rc *cloudflare.ResourceContainer, params cloudflare.DeleteWorkersKVEntriesParams) (cloudflare.Response, error)
	DeleteWorkersKVEntry(ctx context.Context, rc *cloudflare.ResourceContainer, params cloudflare.DeleteWorkersKVEntryParams) (cloudflare.Response, error)
	GetWorkersKV(ctx context.Context, rc *cloudflare.ResourceContainer, params cloudflare.GetWorkersKVParams) ([]byte, error)
	ListWorkersKVKeys(ctx context.Context, rc *cloudflare.ResourceContainer, params cloudflare.ListWorkersKVsParams) (cloudflare.ListStorageKeysResponse, error)
	WriteWorkersKVEntry(ctx context.Context, rc *cloudflare.ResourceContainer, params cloudflare.WriteWorkersKVEntryParams) (cloudflare.Response, error)
}

type Storage struct {
	api         APIInterface
	email       string
	accountID   string
	namespaceID string
}

func New(config ...Config) *Storage {
	cfg := configDefault(config...)
	if cfg.Key == "test" {
		api := &TestModule{
			baseUrl: "http://localhost:8787",
		}

		storage := &Storage{
			api:         api,
			email:       "example@cloudflare.org",
			accountID:   "dummy-ID",
			namespaceID: "dummy-ID",
		}

		return storage
	}

	api, err := cloudflare.NewWithAPIToken(cfg.Key)
	if err != nil {
		log.Panicf("error with cloudflare api initialization: %v", err)
	}

	storage := &Storage{
		api:         api,
		email:       cfg.Email,
		accountID:   cfg.AccountID,
		namespaceID: cfg.NamespaceID,
	}

	return storage
}

func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error) {
	resp, err := s.api.GetWorkersKV(ctx, cloudflare.AccountIdentifier(s.accountID), cloudflare.GetWorkersKVParams{NamespaceID: s.namespaceID, Key: key})

	if err != nil {
		log.Printf("Error occur in GetWorkersKV: %v", err)
		return nil, err
	}

	return resp, nil
}

func (s *Storage) Get(key string) ([]byte, error) {
	return s.GetWithContext(context.Background(), key)
}

func (s *Storage) SetWithContext(ctx context.Context, key string, val []byte, exp time.Duration) error {
	_, err := s.api.WriteWorkersKVEntry(ctx, cloudflare.AccountIdentifier(s.accountID), cloudflare.WriteWorkersKVEntryParams{
		NamespaceID: s.namespaceID,
		Key:         key,
		Value:       val,
	})

	if err != nil {
		log.Printf("Error occur in WriteWorkersKVEntry: %v", err)
		return err
	}

	return nil
}

func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	return s.SetWithContext(context.Background(), key, val, exp)
}

func (s *Storage) DeleteWithContext(ctx context.Context, key string) error {
	_, err := s.api.DeleteWorkersKVEntry(ctx, cloudflare.AccountIdentifier(s.accountID), cloudflare.DeleteWorkersKVEntryParams{
		NamespaceID: s.namespaceID,
		Key:         key,
	})

	if err != nil {
		log.Printf("Error occur in DeleteWorkersKVEntry: %v", err)
		return err
	}

	return nil
}

func (s *Storage) Delete(key string) error {
	return s.DeleteWithContext(context.Background(), key)
}

func (s *Storage) ResetWithContext(ctx context.Context) error {
	var (
		cursor string
		keys   []string
	)

	for {
		resp, err := s.api.ListWorkersKVKeys(ctx, cloudflare.AccountIdentifier(s.accountID), cloudflare.ListWorkersKVsParams{
			NamespaceID: s.namespaceID,
			Cursor:      cursor,
		})

		if err != nil {
			log.Printf("Error occur in ListWorkersKVKeys: %v", err)
			return err
		}

		keys = make([]string, len(resp.Result))

		for _, element := range resp.Result {
			name := element.Name
			keys = append(keys, name)
		}

		_, err = s.api.DeleteWorkersKVEntries(ctx, cloudflare.AccountIdentifier(s.accountID), cloudflare.DeleteWorkersKVEntriesParams{
			NamespaceID: s.namespaceID,
			Keys:        keys,
		})

		if err != nil {
			log.Printf("Error occur in DeleteWorker: %v", err)
			return err
		}

		if len(resp.Cursor) == 0 {
			log.Println("No keys left in the namespace")
			break
		}

		cursor = resp.Cursor
	}

	return nil
}

func (s *Storage) Reset() error {
	return s.ResetWithContext(context.Background())
}

func (s *Storage) Close() error {
	return nil
}

func (s *Storage) Conn() APIInterface {
	return s.api
}
