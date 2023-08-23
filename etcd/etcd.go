package etcd

import (
	"context"
	"time"

	"go.etcd.io/etcd/client/v3"
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

func (s *Storage) Get(key string) ([]byte, error) {
	if len(key) <= 0 {
		return nil, nil
	}
	item, err := s.db.Get(context.Background(), key)
	if err != nil {
		return nil, err
	}

	if len(item.Kvs) <= 0 {
		return nil, nil
	}

	return item.Kvs[0].Value, nil
}

func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	// Ain't Nobody Got Time For That
	if len(key) <= 0 || len(val) <= 0 {
		return nil
	}

	lease, err := s.db.Grant(context.Background(), int64(exp.Seconds()))
	if err != nil {
		return err
	}

	_, err = s.db.Put(context.Background(), key, string(val), clientv3.WithLease(lease.ID))
	if err != nil {
		return err
	}

	return nil
}

func (s *Storage) Delete(key string) error {
	if len(key) <= 0 {
		return nil
	}

	_, err := s.db.Delete(context.Background(), key)
	if err != nil {
		return err
	}

	return nil
}

func (s *Storage) Reset() error {
	_, err := s.db.Delete(context.Background(), "", clientv3.WithPrefix())
	if err != nil {
		return err
	}

	return nil
}

func (s *Storage) Close() error {
	return s.db.Close()
}

func (s *Storage) Conn() *clientv3.Client {
	return s.db
}
