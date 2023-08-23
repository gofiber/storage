package couchbase

import (
	"time"

	"github.com/couchbase/gocb/v2"
)

type Storage struct {
	cb     *gocb.Cluster
	bucket *gocb.Bucket
}

func New(config ...Config) *Storage {
	// Set default config
	cfg := configDefault(config...)

	cb, err := gocb.Connect(cfg.Host, gocb.ClusterOptions{
		Authenticator: gocb.PasswordAuthenticator{
			Username: cfg.Username,
			Password: cfg.Password,
		},
		TimeoutsConfig: gocb.TimeoutsConfig{
			ConnectTimeout: cfg.ConnectionTimeout,
			KVTimeout:      cfg.KVTimeout,
		},
		Transcoder: gocb.NewLegacyTranscoder(),
	})
	if err != nil {
		panic(err)
	}

	_, err = cb.Ping(&gocb.PingOptions{
		Timeout: cfg.ConnectionTimeout,
	})

	if err != nil {
		panic(err)
	}

	b := cb.Bucket(cfg.Bucket)

	return &Storage{cb: cb, bucket: b}
}

func (s *Storage) Get(key string) ([]byte, error) {
	out, err := s.bucket.DefaultCollection().Get(key, nil)
	if err != nil {
		switch e := err.(type) {
		case *gocb.KeyValueError:
			if e.InnerError.Error() == gocb.ErrDocumentNotFound.Error() {
				return nil, nil
			}
		default: //*gocb.TimeoutError,...
			return nil, err
		}

		return nil, err
	}

	var value []byte
	if err := out.Content(&value); err != nil {
		return nil, err
	}

	return value, nil
}

func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	if _, err := s.bucket.DefaultCollection().Upsert(key, val, &gocb.UpsertOptions{
		Expiry: exp,
	}); err != nil {
		return err
	}

	return nil
}

func (s *Storage) Delete(key string) error {
	if _, err := s.bucket.DefaultCollection().Remove(key, nil); err != nil {
		return err
	}
	return nil
}

func (s *Storage) Reset() error {
	return s.cb.Buckets().FlushBucket(s.bucket.Name(), nil)
}

func (s *Storage) Close() error {
	return s.cb.Close(nil)
}

func (s *Storage) Conn() *gocb.Cluster {
	return s.cb
}
