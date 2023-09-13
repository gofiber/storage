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
	defaultTimeout   = time.Duration(30) * time.Second
	defaultAddress   = "localhost:1408"
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

	// TLSConfig specifies tls.Config to use when connecting, if nil then plain text is used
	TLSConfig *tls.Config
}

// DefaultConfig defines default options.
var DefaultConfig = Config{
	Address:   defaultAddress,
	Timeout:   defaultTimeout,
	ScopeName: defaultScopeName,
	Reset:     false,
}

// New returns a new [Storage] given a [Config].
func New(config ...Config) (*Storage, error) {
	cfg := setupConfig(config...)

	options := make([]func(session *coh.SessionOptions), 0)

	// apply any config values as Coherence options
	options = append(options, coh.WithAddress(cfg.Address))

	if cfg.TLSConfig != nil {
		options = append(options, coh.WithTLSConfig(cfg.TLSConfig))
	} else {
		options = append(options, coh.WithPlainText())
	}

	options = append(options, coh.WithRequestTimeout(cfg.Timeout))

	// create the Coherence session
	session, err := coh.NewSession(context.Background(), options...)
	if err != nil {
		return nil, err
	}

	store, err := newCoherenceStorage(session, cfg.ScopeName)
	if err != nil {
		return nil, err
	}

	// if Reset is true then reset the store
	if cfg.Reset {
		return store, store.Reset()
	}

	return store, nil
}

// setupConfig sets the default config.
func setupConfig(config ...Config) Config {
	// if nothing provided then use the default config values
	if len(config) == 0 {
		return DefaultConfig
	}

	cfg := config[0]

	// Check for any invalid default values and overwrite them
	if cfg.Address == "" {
		cfg.Address = DefaultConfig.Address
	}
	if cfg.ScopeName == "" {
		cfg.ScopeName = DefaultConfig.ScopeName
	}
	if cfg.Timeout == 0 {
		cfg.Timeout = DefaultConfig.Timeout
	}

	return cfg
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
