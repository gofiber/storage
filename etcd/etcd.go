package etcd

import (
	"context"
	"sync"
	"time"

	clientv3 "go.etcd.io/etcd/client/v3"
)

type Storage struct {
	db *clientv3.Client

	closeMu sync.Mutex
	closed  bool
}

func New(config ...Config) *Storage {
	cfg := configDefault(config...)

	cli, err := clientv3.New(clientv3.Config{
		Endpoints:   cfg.Endpoints,
		DialTimeout: cfg.DialTimeout,
		Username:    cfg.Username,
		Password:    cfg.Password,
		TLS:         cfg.TLS,
	})
	if err != nil {
		panic(err)
	}

	store := &Storage{
		db: cli,
	}

	return store
}

func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error) {
	if len(key) <= 0 {
		return nil, nil
	}
	item, err := s.db.Get(ctx, key)
	if err != nil {
		return nil, err
	}

	if len(item.Kvs) <= 0 {
		return nil, nil
	}

	return item.Kvs[0].Value, nil
}

func (s *Storage) Get(key string) ([]byte, error) {
	return s.GetWithContext(context.Background(), key)
}

func (s *Storage) SetWithContext(ctx context.Context, key string, val []byte, exp time.Duration) error {
	// Ain't Nobody Got Time For That
	if len(key) <= 0 || len(val) <= 0 {
		return nil
	}

	// An expiration of 0 never expires, so no lease: etcd would raise the TTL to its minimum and drop the key.
	if exp <= 0 {
		_, err := s.db.Put(ctx, key, string(val))
		return err
	}

	// Leases have a one-second granularity, so round up rather than letting etcd expire the key at once.
	lease, err := s.db.Grant(ctx, ttlSeconds(exp))
	if err != nil {
		return err
	}

	if _, err = s.db.Put(ctx, key, string(val), clientv3.WithLease(lease.ID)); err != nil {
		// Nothing is attached to the lease, so revoke it rather than leaving it to occupy the server.
		revokeCtx, cancel := context.WithTimeout(context.WithoutCancel(ctx), revokeTimeout)
		defer cancel()
		_, _ = s.db.Revoke(revokeCtx, lease.ID)
		return err
	}

	return nil
}

// revokeTimeout bounds the cleanup revoke, so an unresponsive server cannot hang the caller.
const revokeTimeout = 5 * time.Second

// ttlSeconds rounds exp up so an expiration shorter than a second never becomes zero.
func ttlSeconds(exp time.Duration) int64 {
	secs := int64(exp / time.Second)
	if exp%time.Second != 0 {
		secs++
	}
	return secs
}

func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	return s.SetWithContext(context.Background(), key, val, exp)
}

func (s *Storage) DeleteWithContext(ctx context.Context, key string) error {
	if len(key) <= 0 {
		return nil
	}

	_, err := s.db.Delete(ctx, key)
	if err != nil {
		return err
	}

	return nil
}

func (s *Storage) Delete(key string) error {
	return s.DeleteWithContext(context.Background(), key)
}

func (s *Storage) ResetWithContext(ctx context.Context) error {
	_, err := s.db.Delete(ctx, "", clientv3.WithPrefix())
	if err != nil {
		return err
	}

	return nil
}

func (s *Storage) Reset() error {
	return s.ResetWithContext(context.Background())
}

// Close the client. Safe to call more than once, and a failed close is reported so it can be retried.
func (s *Storage) Close() error {
	s.closeMu.Lock()
	defer s.closeMu.Unlock()

	if s.closed {
		return nil
	}

	if err := s.db.Close(); err != nil {
		return err
	}

	s.closed = true
	return nil
}

func (s *Storage) Conn() *clientv3.Client {
	return s.db
}
