package etcd

import (
	"context"
	"time"

	clientv3 "go.etcd.io/etcd/client/v3"
)

type Storage struct {
	db *clientv3.Client
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

	// An expiration of 0 means the key never expires, so it must not be
	// attached to a lease: etcd would raise the TTL to its own minimum and
	// drop the key seconds later.
	if exp <= 0 {
		_, err := s.db.Put(ctx, key, string(val))
		return err
	}

	// Leases have a one-second granularity. Round up, truncating would turn a
	// sub-second expiration into a lease that etcd expires right away.
	lease, err := s.db.Grant(ctx, ttlSeconds(exp))
	if err != nil {
		return err
	}

	_, err = s.db.Put(ctx, key, string(val), clientv3.WithLease(lease.ID))
	if err != nil {
		return err
	}

	return nil
}

// ttlSeconds converts exp to whole seconds, rounding up so that an expiration
// shorter than a second never becomes zero.
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

func (s *Storage) Close() error {
	return s.db.Close()
}

func (s *Storage) Conn() *clientv3.Client {
	return s.db
}
