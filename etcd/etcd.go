package etcd

import (
	"context"
	"errors"
	"sync/atomic"
	"time"

	clientv3 "go.etcd.io/etcd/client/v3"
)

// ErrClosed is returned by every operation attempted after Close.
var ErrClosed = errors.New("etcd: storage is closed")

type Storage struct {
	db     *clientv3.Client
	ownsDB bool

	closed atomic.Bool
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
		db:     cli,
		ownsDB: true,
	}

	return store
}

// NewFromConnection builds a Storage on an existing client, which stays the caller's to close.
func NewFromConnection(db *clientv3.Client) *Storage {
	if db == nil {
		panic("etcd: nil client")
	}

	return &Storage{
		db: db,
	}
}

func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error) {
	if s.isClosed() {
		return nil, ErrClosed
	}
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
	if s.isClosed() {
		return ErrClosed
	}
	// Ain't Nobody Got Time For That
	if len(key) <= 0 || len(val) <= 0 {
		return nil
	}

	// An expiration of 0 never expires, so no lease: etcd would raise the TTL to its minimum and drop the key.
	if exp <= 0 {
		resp, err := s.db.Put(ctx, key, string(val), clientv3.WithPrevKV())
		if err != nil {
			return err
		}
		s.revoke(ctx, clientv3.LeaseID(resp.PrevKv.GetLease()))
		return nil
	}

	// Leases have a one-second granularity, so round up rather than letting etcd expire the key at once.
	lease, err := s.db.Grant(ctx, ttlSeconds(exp))
	if err != nil {
		return err
	}

	resp, err := s.db.Put(ctx, key, string(val), clientv3.WithLease(lease.ID), clientv3.WithPrevKV())
	if err != nil {
		// Nothing is attached to the lease, so revoke it even after ctx ended rather than leave it on the server.
		s.revoke(context.WithoutCancel(ctx), lease.ID)
		return err
	}

	// The Put only detached the old entry from its lease, which would otherwise live on until its TTL.
	s.revoke(ctx, clientv3.LeaseID(resp.PrevKv.GetLease()))
	return nil
}

// revokeTimeout bounds a revoke, so an unresponsive server cannot hang the caller.
const revokeTimeout = 5 * time.Second

// revoke drops a lease left without a key, best effort. Leases granted here hold one key; a lease another
// writer attached to more keys deletes those keys too.
func (s *Storage) revoke(ctx context.Context, id clientv3.LeaseID) {
	if id == clientv3.NoLease {
		return
	}
	ctx, cancel := context.WithTimeout(ctx, revokeTimeout)
	defer cancel()
	_, _ = s.db.Revoke(ctx, id)
}

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
	if s.isClosed() {
		return ErrClosed
	}
	if len(key) <= 0 {
		return nil
	}

	resp, err := s.db.Delete(ctx, key, clientv3.WithPrevKV())
	if err != nil {
		return err
	}

	for _, kv := range resp.PrevKvs {
		s.revoke(ctx, clientv3.LeaseID(kv.GetLease()))
	}

	return nil
}

func (s *Storage) Delete(key string) error {
	return s.DeleteWithContext(context.Background(), key)
}

func (s *Storage) ResetWithContext(ctx context.Context) error {
	if s.isClosed() {
		return ErrClosed
	}
	_, err := s.db.Delete(ctx, "", clientv3.WithPrefix())
	if err != nil {
		return err
	}

	return nil
}

func (s *Storage) Reset() error {
	return s.ResetWithContext(context.Background())
}

// isClosed reports whether Close ran; a borrowed client stays open, so the latch is the only signal.
func (s *Storage) isClosed() bool {
	return s.closed.Load()
}

// Close the client unless it came from NewFromConnection. Safe to call more than once; a failed close is reported once.
func (s *Storage) Close() error {
	// Idempotent: only the first Close tears anything down.
	if !s.closed.CompareAndSwap(false, true) {
		return nil
	}

	if !s.ownsDB {
		return nil
	}

	// Latched even on failure: the client's context is cancelled before this returns, so a retry cannot undo it.
	err := s.db.Close()
	return err
}

func (s *Storage) Conn() *clientv3.Client {
	return s.db
}
