package coherence

/*
 * Copyright © 2023, Oracle and/or its affiliates.
 */
import (
	"context"
	"crypto/tls"
	coh "github.com/oracle/coherence-go-client/coherence"
	"time"
)

const (
	defaultScopeName = "default-store"
	defaultTimeout   = time.Duration(30) * time.Millisecond
)

// Storage represents an implementation of Coherence storage provider.
type Storage struct {
	session    *coh.Session
	namedCache coh.NamedCache[string, []byte]
	ctx        context.Context
}

// Config defines configuration options for Coherence connection.
type Config struct {
	// Address to connect to, defaults to "localhost:1408"
	Address string

	// Timeout is the default session timeout to connect to Coherence, defaults to 30s
	Timeout time.Duration

	// ScopeName defines a scope allowing for multiple storage sessions
	ScopeName string

	// Reset indicates if the store should be reset after being created
	Reset bool

	// UseSSL specifies if to use SSL or plain text, defaults to false. If you specify true, then you
	// must provide a TLSConfig
	UseSSL bool

	// TLSConfig specifies tls.Config to use when connecting
	TLSConfig *tls.Config
}

// DefaultConfig defines default options.
var DefaultConfig = Config{
	Address:   "localhost:1408",
	UseSSL:    false,
	Timeout:   time.Duration(30) * time.Millisecond,
	ScopeName: defaultScopeName,
	Reset:     false,
}

// New returns a new [Storage] given a [coherence.Session].
func New(config ...Config) (*Storage, error) {
	var (
		scopeName = defaultScopeName
		cfg       = DefaultConfig
	)

	if len(config) == 1 {
		cfg = config[0]
	}
	options := make([]func(session *coh.SessionOptions), 0)

	// apply any config values
	if cfg.Address != "" {
		options = append(options, coh.WithAddress(cfg.Address))
	} else {
		cfg.Address = DefaultConfig.Address
	}

	if !cfg.UseSSL {
		options = append(options, coh.WithPlainText())
	}

	if cfg.Timeout != defaultTimeout {
		options = append(options, coh.WithReadyTimeout(cfg.Timeout))
	}

	if cfg.ScopeName != defaultScopeName {
		scopeName = cfg.ScopeName
	}

	if cfg.TLSConfig != nil {
		options = append(options, coh.WithTLSConfig(cfg.TLSConfig))
	}

	// create the Coherence session
	session, err := coh.NewSession(context.Background(), options...)
	if err != nil {
		return nil, err
	}

	store, err := newCoherenceStorage(session, scopeName)
	if err != nil {
		return nil, err
	}

	// if Reset is true then reset the store
	if cfg.Reset {
		return store, store.Reset()
	}

	return store, nil
}

// newCoherenceStorage returns a new Coherence [Storage].
func newCoherenceStorage(session *coh.Session, cacheName string) (*Storage, error) {
	nc, err := coh.GetNamedCache[string, []byte](session, "fiber$"+cacheName)
	if err != nil {
		return nil, err
	}
	return &Storage{
		session:    session,
		namedCache: nc,
		ctx:        context.Background(),
	}, nil
}

func (s *Storage) Get(key string) ([]byte, error) {
	v, err := s.namedCache.Get(s.ctx, key)
	if err != nil {
		return nil, err
	}
	if v == nil {
		return nil, nil
	}
	return *v, nil
}

func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	_, err := s.namedCache.PutWithExpiry(s.ctx, key, val, exp)
	return err
}

func (s *Storage) Delete(key string) error {
	_, err := s.namedCache.Remove(s.ctx, key)
	return err
}

func (s *Storage) Reset() error {
	return s.namedCache.Clear(s.ctx)
}

func (s *Storage) Close() error {
	s.session.Close()
	return nil
}

func (s *Storage) Conn() *coh.Session {
	return s.namedCache.GetSession()
}
