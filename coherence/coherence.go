package coherence

/*
 * Copyright © 2023, 2025 Oracle and/or its affiliates.
 */
import (
	"context"
	"crypto/tls"
	"errors"
	"fmt"
	"sync"
	"sync/atomic"
	"time"

	coh "github.com/oracle/coherence-go-client/v2/coherence"
)

const (
	defaultScopeName = "default-store"
	defaultTimeout   = time.Duration(30) * time.Second
	defaultAddress   = "localhost:1408"
)

// ErrClosed is returned by every operation attempted after Close; a borrowed session stays open, so the latch is the only signal.
var ErrClosed = errors.New("coherence: storage is closed")

// Storage represents an implementation of Coherence storage provider.
type Storage struct {
	closed      atomic.Bool
	session     *coh.Session
	namedCache  coh.NamedCache[string, []byte]
	ownsSession bool
	closeOnce   sync.Once
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

	// NearCacheTimeout defines the timeout for a near cache. Is this is set, then a near cache
	// with the timeout is created. Note: this must be less than the session timeout or any timeout you specify
	// when using Set().
	NearCacheTimeout time.Duration
}

// DefaultConfig defines default options.
var DefaultConfig = Config{
	Address:   defaultAddress,
	Timeout:   defaultTimeout,
	ScopeName: defaultScopeName,
	Reset:     false,
}

// New returns a new [Storage] given a [Config], using context.Background() for initialization.
func New(config ...Config) (*Storage, error) {
	return NewWithContext(context.Background(), config...)
}

// NewWithContext returns a new [Storage] given a [Config], using ctx to create
// the Coherence session.
func NewWithContext(ctx context.Context, config ...Config) (*Storage, error) {
	var (
		cfg     = setupConfig(config...)
		options = make([]func(session *coh.SessionOptions), 0)
	)

	// apply any config values as Coherence options
	options = append(options, coh.WithAddress(cfg.Address))

	if cfg.TLSConfig != nil {
		options = append(options, coh.WithTLSConfig(cfg.TLSConfig))
	} else {
		options = append(options, coh.WithPlainText())
	}

	options = append(options, coh.WithRequestTimeout(cfg.Timeout))

	// create the Coherence session
	session, err := coh.NewSession(ctx, options...)
	if err != nil {
		return nil, err
	}

	return newStorage(ctx, session, true, cfg)
}

// NewFromConnection returns a new [Storage] on an existing session, which stays the caller's to close,
// using context.Background() for the initialization operations.
// Only the ScopeName, NearCacheTimeout and Reset options are read; the connection settings come from the session.
func NewFromConnection(session *coh.Session, config ...Config) (*Storage, error) {
	return NewFromConnectionWithContext(context.Background(), session, config...)
}

// NewFromConnectionWithContext returns a new [Storage] on an existing session, which stays the
// caller's to close, using ctx for the initialization operations (optional reset).
// Only the ScopeName, NearCacheTimeout and Reset options are read; the connection settings come from the session.
func NewFromConnectionWithContext(ctx context.Context, session *coh.Session, config ...Config) (*Storage, error) {
	if session == nil {
		return nil, fmt.Errorf("session cannot be nil")
	}

	return newStorage(ctx, session, false, setupConfig(config...))
}

// newStorage opens the named cache on session, using ctx for the optional reset; the session is
// closed on failure only when this driver opened it.
func newStorage(ctx context.Context, session *coh.Session, ownsSession bool, cfg Config) (*Storage, error) {
	closeOwned := func() {
		if ownsSession {
			session.Close()
		}
	}

	// Validated against the session's actual request timeout: on a borrowed session Config.Timeout was
	// never applied to it, so only the session itself knows the limit a near cache must stay under.
	if cfg.NearCacheTimeout != 0 && cfg.NearCacheTimeout > session.GetRequestTimeout() {
		closeOwned()
		return nil, fmt.Errorf("you cannot set the near cache timeout (%v) to more than the session timeout (%v)",
			cfg.NearCacheTimeout, session.GetRequestTimeout())
	}

	store, err := newCoherenceStorage(session, cfg.ScopeName, cfg.NearCacheTimeout)
	if err != nil {
		closeOwned()
		return nil, err
	}
	store.ownsSession = ownsSession

	// if Reset is true then reset the store
	if cfg.Reset {
		// Returned alongside the error rather than discarded: only the wipe failed, so the
		// storage works, and callers that log the error and carry on — which this driver
		// has always allowed — would otherwise dereference nil. A caller that does discard
		// it should Close it, which releases a session this driver opened.
		if err := store.ResetWithContext(ctx); err != nil {
			return store, err
		}
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
func newCoherenceStorage(session *coh.Session, cacheName string, nearCacheTimeout time.Duration) (*Storage, error) {
	cacheOptions := make([]func(cache *coh.CacheOptions), 0)

	// configure a near cache if the nearCacheTimeout is set
	if nearCacheTimeout != 0 {
		nearCacheOptions := coh.NearCacheOptions{TTL: nearCacheTimeout}
		cacheOptions = append(cacheOptions, coh.WithNearCache(&nearCacheOptions))
	}

	nc, err := coh.GetNamedCache[string, []byte](session, "fiber$"+cacheName, cacheOptions...)
	if err != nil {
		return nil, err
	}
	return &Storage{
		session:    session,
		namedCache: nc,
	}, nil
}

func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error) {
	if s.closed.Load() {
		return nil, ErrClosed
	}
	v, err := s.namedCache.Get(ctx, key)
	if err != nil {
		return nil, err
	}
	if v == nil {
		return nil, nil
	}
	return *v, nil
}

func (s *Storage) Get(key string) ([]byte, error) {
	return s.GetWithContext(context.Background(), key)
}

func (s *Storage) SetWithContext(ctx context.Context, key string, val []byte, exp time.Duration) error {
	if s.closed.Load() {
		return ErrClosed
	}
	_, err := s.namedCache.PutWithExpiry(ctx, key, val, exp)
	return err
}

func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	return s.SetWithContext(context.Background(), key, val, exp)
}

func (s *Storage) DeleteWithContext(ctx context.Context, key string) error {
	if s.closed.Load() {
		return ErrClosed
	}
	_, err := s.namedCache.Remove(ctx, key)
	return err
}

func (s *Storage) Delete(key string) error {
	return s.DeleteWithContext(context.Background(), key)
}

func (s *Storage) ResetWithContext(ctx context.Context) error {
	if s.closed.Load() {
		return ErrClosed
	}
	return s.namedCache.Truncate(ctx)
}

func (s *Storage) Reset() error {
	return s.ResetWithContext(context.Background())
}

// Close the session unless it came from NewFromConnection. Safe to call more than once.
func (s *Storage) Close() error {
	s.closeOnce.Do(func() {
		s.closed.Store(true)
		// A borrowed session is not ours to close — and its named cache is not released either:
		// the client hands out one instance per session and cache name, so releasing it here would
		// break sibling storages built on the same scope. It stays registered, reused by the next
		// storage with this scope, until the session itself closes.
		if s.ownsSession {
			// Closing the session releases every cache opened on it, this one included.
			s.session.Close()
		}
	})

	return nil
}

func (s *Storage) Conn() *coh.Session {
	return s.namedCache.GetSession()
}
