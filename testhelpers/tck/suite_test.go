package tck

import (
	"context"
	"sync"
	"testing"
	"time"

	"github.com/stretchr/testify/require"
	"github.com/stretchr/testify/suite"
	testcontainers "github.com/testcontainers/testcontainers-go"
)

type mockErrorSuite struct{}

func (s *mockErrorSuite) NewStore() func(ctx context.Context, tb testing.TB, ctr testcontainers.Container) (*mockStorage, error) {
	return func(ctx context.Context, tb testing.TB, ctr testcontainers.Container) (*mockStorage, error) {
		storage := &mockStorage{
			Map: &sync.Map{},
		}

		return storage, nil
	}
}

func (s *mockErrorSuite) NewContainer() func(ctx context.Context, tb testing.TB) (testcontainers.Container, error) {
	return func(ctx context.Context, tb testing.TB) (testcontainers.Container, error) {
		return nil, nil
	}
}

func TestNew(t *testing.T) {
	t.Run("per-test/setup-suite", func(t *testing.T) {
		s, err := New[*mockStorage, any](context.Background(), t, &mockErrorSuite{}, PerTest())
		require.NoError(t, err)

		s.SetupSuite()

		s.Require().Nil(s.store)
	})

	t.Run("per-suite/setup-test", func(t *testing.T) {
		s, err := New[*mockStorage, any](context.Background(), t, &mockErrorSuite{}, PerSuite())
		require.NoError(t, err)

		s.SetupTest()

		s.Require().NotNil(s.store)
	})

	t.Run("cleanup/non-closed-store", func(t *testing.T) {
		s, err := New[*mockStorage, any](context.Background(), t, &mockErrorSuite{}, PerTest())
		require.NoError(t, err)

		s.SetupSuite()
		s.SetupTest()

		s.closedStore = false

		s.Require().NoError(s.cleanup())

		mockStorage := s.store.(*mockStorage)
		s.Require().Nil(mockStorage.Map)
	})

	t.Run("tck-is-nil", func(t *testing.T) {
		s, err := New[*mockStorage, any, testcontainers.Container](context.Background(), t, nil, PerTest())
		require.Error(t, err)
		require.Nil(t, s)
	})
}

type mockStorage struct {
	*sync.Map
}

// implement the storage interface
func (s *mockStorage) Set(key string, value []byte, ttl time.Duration) error {
	s.Store(key, string(value))

	// in a goroutine, remove the key after ttl
	if ttl > 0 {
		go func() {
			time.Sleep(ttl)
			//nolint:errcheck
			_ = s.Delete(key)
		}()
	}

	return nil
}

func (s *mockStorage) Get(key string) ([]byte, error) {
	val, ok := s.Load(key)

	if !ok {
		// key expired or does not exist
		return nil, nil
	}

	return []byte(val.(string)), nil
}

func (s *mockStorage) Delete(key string) error {
	s.Map.Delete(key)
	return nil
}

func (s *mockStorage) Reset() error {
	s.Map = &sync.Map{}
	return nil
}

func (s *mockStorage) Close() error {
	s.Map = nil
	return nil
}

func (s *mockStorage) Conn() any {
	return "mock conn"
}

func (s *mockStorage) SetWithContext(ctx context.Context, key string, value []byte, ttl time.Duration) error {
	if ctx.Err() != nil {
		return ctx.Err()
	}

	return s.Set(key, value, ttl)
}

func (s *mockStorage) GetWithContext(ctx context.Context, key string) ([]byte, error) {
	if ctx.Err() != nil {
		return nil, ctx.Err()
	}

	return s.Get(key)
}

func (s *mockStorage) DeleteWithContext(ctx context.Context, key string) error {
	if ctx.Err() != nil {
		return ctx.Err()
	}

	return s.Delete(key)
}

func (s *mockStorage) ResetWithContext(ctx context.Context) error {
	if ctx.Err() != nil {
		return ctx.Err()
	}

	return s.Reset()
}

func TestRunPerTest(t *testing.T) {
	s, err := New[*mockStorage, any](context.Background(), t, &mockErrorSuite{}, PerTest())
	require.NoError(t, err)

	suite.Run(t, s)
}

func TestRunPerSuite(t *testing.T) {
	s, err := New[*mockStorage, any](context.Background(), t, &mockErrorSuite{}, PerSuite())
	require.NoError(t, err)

	suite.Run(t, s)
}
