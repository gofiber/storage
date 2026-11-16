package cloudflarekv

import (
	"context"
	"errors"
	"fmt"
	"log"
	"math"
	"net/http"
	"net/url"
	"reflect"
	"time"

	"github.com/cloudflare/cloudflare-go"
)

// ErrInvalidKey is returned by Set for the key names Workers KV cannot store.
var ErrInvalidKey = errors.New(`cloudflarekv: key must not be "." or ".."`)

// minExpirationTTL is the shortest expiration_ttl Workers KV accepts.
const minExpirationTTL = 60 * time.Second

type APIInterface interface {
	DeleteWorkersKVEntries(ctx context.Context, rc *cloudflare.ResourceContainer, params cloudflare.DeleteWorkersKVEntriesParams) (cloudflare.Response, error)
	DeleteWorkersKVEntry(ctx context.Context, rc *cloudflare.ResourceContainer, params cloudflare.DeleteWorkersKVEntryParams) (cloudflare.Response, error)
	GetWorkersKV(ctx context.Context, rc *cloudflare.ResourceContainer, params cloudflare.GetWorkersKVParams) ([]byte, error)
	ListWorkersKVKeys(ctx context.Context, rc *cloudflare.ResourceContainer, params cloudflare.ListWorkersKVsParams) (cloudflare.ListStorageKeysResponse, error)
	WriteWorkersKVEntry(ctx context.Context, rc *cloudflare.ResourceContainer, params cloudflare.WriteWorkersKVEntryParams) (cloudflare.Response, error)
	Raw(ctx context.Context, method, endpoint string, data any, headers http.Header) (cloudflare.RawResponse, error)
}

type Storage struct {
	api            APIInterface
	email          string
	accountID      string
	namespaceID    string
	requestTimeout time.Duration
}

func New(config ...Config) *Storage {
	cfg := configDefault(config...)
	if cfg.Key == "test" {
		api := &TestModule{
			baseUrl: "http://localhost:8787",
		}

		return newStorage(api, Config{
			Email:          "example@cloudflare.org",
			AccountID:      "dummy-ID",
			NamespaceID:    "dummy-ID",
			RequestTimeout: cfg.RequestTimeout,
			Reset:          cfg.Reset,
		})
	}

	api, err := cloudflare.NewWithAPIToken(cfg.Key)
	if err != nil {
		log.Panicf("error with cloudflare api initialization: %v", err)
	}

	return newStorage(api, cfg)
}

// NewFromConnection builds a Storage on an existing API client, which stays the caller's to manage.
// Only the Email, AccountID, NamespaceID, RequestTimeout and Reset options are read; the credentials come from the client.
func NewFromConnection(api APIInterface, config ...Config) *Storage {
	// The handle is an interface here, so a nil *cloudflare.API — what NewWithAPIToken
	// returns alongside an error — arrives as a non-nil interface holding a nil pointer.
	// Checking the value behind it keeps the fail-fast promise for that case too.
	if api == nil || (reflect.ValueOf(api).Kind() == reflect.Pointer && reflect.ValueOf(api).IsNil()) {
		panic("cloudflarekv: nil api client")
	}

	return newStorage(api, configDefault(config...))
}

func newStorage(api APIInterface, cfg Config) *Storage {
	storage := &Storage{
		api:            api,
		email:          cfg.Email,
		accountID:      cfg.AccountID,
		namespaceID:    cfg.NamespaceID,
		requestTimeout: cfg.RequestTimeout,
	}

	// Reset all entries if set to true
	if cfg.Reset {
		if err := storage.Reset(); err != nil {
			log.Panicf("cloudflarekv: reset: %v", err)
		}
	}

	return storage
}

// isValidKey rejects the names Workers KV cannot store; as a URL segment, "." and ".." would address the namespace itself.
func isValidKey(key string) bool {
	return key != "" && key != "." && key != ".."
}

// expirationTTL rounds exp up to whole seconds and to the service minimum, so an entry never expires early.
func expirationTTL(exp time.Duration) int {
	return int(math.Ceil(max(exp, minExpirationTTL).Seconds()))
}

// requestContext bounds calls without a deadline; cloudflare-go's shared rate limiter would otherwise queue them indefinitely.
func (s *Storage) requestContext(ctx context.Context) (context.Context, context.CancelFunc) {
	if _, ok := ctx.Deadline(); ok || s.requestTimeout <= 0 {
		return ctx, func() {}
	}
	return context.WithTimeout(ctx, s.requestTimeout)
}

func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error) {
	if !isValidKey(key) {
		return nil, nil
	}

	ctx, cancel := s.requestContext(ctx)
	defer cancel()

	resp, err := s.api.GetWorkersKV(ctx, cloudflare.AccountIdentifier(s.accountID), cloudflare.GetWorkersKVParams{NamespaceID: s.namespaceID, Key: key})

	if err != nil {
		// Workers KV answers 404 for a key that is missing or has expired.
		if _, ok := errors.AsType[*cloudflare.NotFoundError](err); ok {
			return nil, nil
		}
		log.Printf("Error occur in GetWorkersKV: %v", err)
		return nil, err
	}

	return resp, nil
}

func (s *Storage) Get(key string) ([]byte, error) {
	return s.GetWithContext(context.Background(), key)
}

func (s *Storage) SetWithContext(ctx context.Context, key string, val []byte, exp time.Duration) error {
	if len(key) <= 0 || len(val) <= 0 {
		return nil
	}
	if !isValidKey(key) {
		return ErrInvalidKey
	}

	ctx, cancel := s.requestContext(ctx)
	defer cancel()

	var err error
	if exp > 0 {
		// WriteWorkersKVEntry has no TTL option, so send its request with expiration_ttl added.
		uri := fmt.Sprintf("/accounts/%s/storage/kv/namespaces/%s/values/%s?expiration_ttl=%d", s.accountID, s.namespaceID, url.PathEscape(key), expirationTTL(exp))
		_, err = s.api.Raw(ctx, http.MethodPut, uri, val, http.Header{"Content-Type": []string{"application/octet-stream"}})
	} else {
		_, err = s.api.WriteWorkersKVEntry(ctx, cloudflare.AccountIdentifier(s.accountID), cloudflare.WriteWorkersKVEntryParams{
			NamespaceID: s.namespaceID,
			Key:         key,
			Value:       val,
		})
	}

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
	if !isValidKey(key) {
		return nil
	}

	ctx, cancel := s.requestContext(ctx)
	defer cancel()

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
		listCtx, cancel := s.requestContext(ctx)
		resp, err := s.api.ListWorkersKVKeys(listCtx, cloudflare.AccountIdentifier(s.accountID), cloudflare.ListWorkersKVsParams{
			NamespaceID: s.namespaceID,
			Cursor:      cursor,
		})
		cancel()

		if err != nil {
			log.Printf("Error occur in ListWorkersKVKeys: %v", err)
			return err
		}

		keys = make([]string, 0, len(resp.Result))

		for _, element := range resp.Result {
			keys = append(keys, element.Name)
		}

		// An empty batch is rejected by the API, and an empty namespace is already reset.
		if len(keys) > 0 {
			deleteCtx, cancel := s.requestContext(ctx)
			_, err = s.api.DeleteWorkersKVEntries(deleteCtx, cloudflare.AccountIdentifier(s.accountID), cloudflare.DeleteWorkersKVEntriesParams{
				NamespaceID: s.namespaceID,
				Keys:        keys,
			})
			cancel()

			if err != nil {
				log.Printf("Error occur in DeleteWorker: %v", err)
				return err
			}
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
