package tck

import (
	"context"
	"fmt"
	"sync"
	"testing"
	"time"

	"github.com/stretchr/testify/suite"
	testcontainers "github.com/testcontainers/testcontainers-go"

	"github.com/gofiber/storage"
)

type CreationHook int

const (
	PerTest CreationHook = iota
	PerSuite
)

type TCKSuite[T storage.Storage] interface {
	NewStoreWithContainer() func(ctx context.Context, tb testing.TB) (T, testcontainers.Container, error)
}

// New creates a new [StorageTestSuite] with the given [TCKSuite].
func New[T storage.Storage](ctx context.Context, t *testing.T, tckSuite TCKSuite[T], creationHook CreationHook) (StorageTestSuite[T], error) {
	if creationHook != PerSuite && creationHook != PerTest {
		return StorageTestSuite[T]{}, fmt.Errorf("invalid creation hook: %d", creationHook)
	}

	if tckSuite == nil {
		return StorageTestSuite[T]{}, fmt.Errorf("test suite is nil")
	}

	return StorageTestSuite[T]{
		ctx:          ctx,
		creationHook: creationHook,
		createFn:     tckSuite.NewStoreWithContainer(),
	}, nil
}

type StorageTestSuite[T storage.Storage] struct {
	suite.Suite
	stats        *suite.SuiteInformation
	ctx          context.Context
	creationHook CreationHook
	createFn     func(ctx context.Context, tb testing.TB) (T, testcontainers.Container, error)
	store        storage.Storage
	closedStore  bool
	mu           sync.Mutex
	ctr          testcontainers.Container
}

func (s *StorageTestSuite[T]) cleanup() error {
	t := s.T()
	t.Log("🧹 Cleaning up store and container")

	var err error

	if s.store != nil {
		s.mu.Lock()
		defer s.mu.Unlock()

		if !s.closedStore {
			err = s.store.Close()
			s.closedStore = true
		}
	}

	// cleanup container already handle nil checks
	testcontainers.CleanupContainer(t, s.ctr)

	return err
}

// ----------------------------------------------------------------------------
// Hooks
// ----------------------------------------------------------------------------

func (s *StorageTestSuite[T]) HandleStats(_ string, stats *suite.SuiteInformation) {
	s.stats = stats
}

func (s *StorageTestSuite[T]) SetupSuite() {
	if s.creationHook == PerSuite {
		t := s.T()

		store, ctr, err := s.createFn(s.ctx, t)
		if err != nil {
			t.Fatalf("failed to create store per suite: %v", err)
		}
		s.store = store
		s.ctr = ctr

		err = s.store.Reset()
		s.Require().NoError(err)
	}
}

func (s *StorageTestSuite[T]) TearDownSuite() {
	if s.creationHook == PerSuite {
		s.Require().NoError(s.cleanup())
	}
}

func (s *StorageTestSuite[T]) SetupTest() {
	if s.creationHook == PerTest {
		t := s.T()

		store, ctr, err := s.createFn(s.ctx, t)
		if err != nil {
			t.Fatalf("failed to create store per test: %v", err)
		}
		s.store = store
		s.ctr = ctr

		err = s.store.Reset()
		s.Require().NoError(err)
	}
}

func (s *StorageTestSuite[T]) TearDownTest() {
	if s.creationHook == PerTest {
		s.Require().NoError(s.cleanup())
	}
}

// ----------------------------------------------------------------------------
// Tests
// ----------------------------------------------------------------------------

func (s *StorageTestSuite[T]) TestSet() {
	s.setValue("test_key", []byte("test_value"))
}

func (s *StorageTestSuite[T]) TestSetWithContext() {
	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err := s.store.SetWithContext(ctx, "test_key", []byte("test_value"), 0)
	s.Require().ErrorIs(err, context.Canceled)
}

func (s *StorageTestSuite[T]) TestSetAndOverride() {
	s.setValue("test_key", []byte("test_value"))
	s.setValue("test_key", []byte("test_value_2"))

	s.requireKeyHasValue("test_key", []byte("test_value_2"))
}

func (s *StorageTestSuite[T]) TestSetAndGet() {
	s.setValue("test_key", []byte("test_value"))
	s.requireKeyHasValue("test_key", []byte("test_value"))
}

func (s *StorageTestSuite[T]) TestGetWithContext() {
	s.setValue("test_key", []byte("test_value"))

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	result, err := s.store.GetWithContext(ctx, "test_key")
	s.Require().ErrorIs(err, context.Canceled)
	s.Require().Zero(len(result))
}

func (s *StorageTestSuite[T]) TestGetMissing() {
	val, err := s.store.Get("non-existent-key")
	s.Require().NoError(err)
	s.Require().Zero(len(val))
}

func (s *StorageTestSuite[T]) TestGetExpired() {
	s.setValueWithTTL("temp_key", []byte("temp_value"), 500*time.Millisecond)

	s.Eventually(func() bool {
		s.requireKeyNotExists("temp_key")
		return true
	}, 2*time.Second, 100*time.Millisecond, "Key should expire")
}

func (s *StorageTestSuite[T]) TestDelete() {
	s.setValue("delete_me", []byte("delete_value"))

	err := s.store.Delete("delete_me")
	s.Require().NoError(err)

	s.requireKeyNotExists("delete_me")
}

func (s *StorageTestSuite[T]) TestDeleteWithContext() {
	s.setValue("delete_me", []byte("delete_value"))

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err := s.store.DeleteWithContext(ctx, "delete_me")
	s.Require().ErrorIs(err, context.Canceled)

	result, err := s.store.Get("delete_me")
	s.Require().NoError(err)
	s.Require().Equal([]byte("delete_value"), result)
}

func (s *StorageTestSuite[T]) TestReset() {
	s.setValue("key1", []byte("value1"))
	s.setValue("key2", []byte("value2"))

	s.requireKeyHasValue("key1", []byte("value1"))
	s.requireKeyHasValue("key2", []byte("value2"))

	err := s.store.Reset()
	s.Require().NoError(err)

	s.requireKeyNotExists("key1")
	s.requireKeyNotExists("key2")
}

func (s *StorageTestSuite[T]) TestResetWithContext() {
	s.setValue("key1", []byte("value1"))
	s.setValue("key2", []byte("value2"))

	s.requireKeyHasValue("key1", []byte("value1"))
	s.requireKeyHasValue("key2", []byte("value2"))

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err := s.store.ResetWithContext(ctx)
	s.Require().ErrorIs(err, context.Canceled)

	s.requireKeyHasValue("key1", []byte("value1"))
	s.requireKeyHasValue("key2", []byte("value2"))
}

func (s *StorageTestSuite[T]) TestClose() {
	err := s.store.Close()
	s.Require().NoError(err)

	s.mu.Lock()
	defer s.mu.Unlock()

	s.closedStore = true
}

// ----------------------------------------------------------------------------
// Helpers
// ----------------------------------------------------------------------------

func (s *StorageTestSuite[T]) setValue(key string, value []byte) {
	s.setValueWithTTL(key, value, 0)
}

func (s *StorageTestSuite[T]) setValueWithTTL(key string, value []byte, ttl time.Duration) {
	err := s.store.Set(key, value, ttl)
	s.Require().NoError(err)
}

func (s *StorageTestSuite[T]) getValue(key string) []byte {
	val, err := s.store.Get(key)
	s.Require().NoError(err)
	return val
}

func (s *StorageTestSuite[T]) requireKeyHasValue(key string, expectedValue []byte) {
	val := s.getValue(key)
	s.Require().Equal(expectedValue, val)
}

func (s *StorageTestSuite[T]) requireKeyNotExists(key string) {
	val := s.getValue(key)
	s.Require().Nil(val)
}
