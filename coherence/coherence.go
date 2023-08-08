package coherence

/*
 * Copyright © 2023, Oracle and/or its affiliates.
 */
import (
	"context"
	"github.com/oracle/coherence-go-client/coherence"
	"time"
)

const (
	defaultScopeName = "fiber-session-store"
	defaultTimeout   = time.Duration(30) * time.Millisecond
)

// Storage represents an implementation of Coherence storage provider.
type Storage struct {
	session    *coherence.Session
	namedCache coherence.NamedCache[string, []byte]
	ctx        context.Context
}

// Config defines configuration options for Coherence connection.
type Config struct {
	// Address to connect to, defaults to "localhost:1408"
	Address string

	// UseSSL specified if to use SSL or plain text, defaults to false
	UseSSL bool

	// SessionTimeout is the default session timeout to connect to Coherence, defaults to 30s
	SessionTimeout time.Duration

	// SessionScope defines a scope allowing for multiple storage sessions
	SessionScope string
}

// DefaultConfig defines default options.
var DefaultConfig = Config{
	Address:        "localhost:1408",
	UseSSL:         false,
	SessionTimeout: time.Duration(30) * time.Millisecond,
	SessionScope:   defaultScopeName,
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
	options := make([]func(session *coherence.SessionOptions), 0)

	// apply any config values
	if cfg.Address != "" {
		options = append(options, coherence.WithAddress(cfg.Address))
	} else {
		cfg.Address = DefaultConfig.Address
	}

	if !cfg.UseSSL {
		options = append(options, coherence.WithPlainText())
	}

	if cfg.SessionTimeout != defaultTimeout {
		options = append(options, coherence.WithReadyTimeout(cfg.SessionTimeout))
	}

	if cfg.SessionScope != defaultScopeName {
		scopeName = cfg.SessionScope
	}

	// create the Coherence session
	session, err := coherence.NewSession(context.Background(), options...)
	if err != nil {
		return nil, err
	}

	return newCoherenceStorage(session, scopeName)
}

// newCoherenceStorage returns a new Coherence [Storage].
func newCoherenceStorage(session *coherence.Session, cacheName string) (*Storage, error) {
	nc, err := coherence.GetNamedCache[string, []byte](session, "fiber$"+cacheName)
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
