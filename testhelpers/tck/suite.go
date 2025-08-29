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

// suiteHook defines when the store should be created.
// Please see [PerSuite] and [PerTest] for more details.
type suiteHook int

const (
	// perTest defines that the store should be created per test.
	perTest suiteHook = iota

	// perSuite defines that the store should be created per suite.
	perSuite
)

// suiteUpdater is the interface that must be implemented by the test suite.
// It defines how the [suiteOption]s update the suite.
type suiteUpdater interface {
	updateHook(hook suiteHook) error
}

// suiteOption is the interface that must be implemented by the [suiteOption]s.
// It defines how the [suiteOption]s update the suite.
type suiteOption interface {
	apply(s suiteUpdater) error
}

// suiteUpdateOption is the default implementation of the [suiteOption] interface.
// It is used to update the suite hook.
type suiteUpdateOption struct {
	fn func(s suiteUpdater) error
}

// apply is the method that is called by the [suiteOption]s to update the suite.
func (o *suiteUpdateOption) apply(s suiteUpdater) error {
	return o.fn(s)
}

// PerTest is a [suiteOption] that updates the suite hook to [perTest].
func PerTest() suiteOption {
	return &suiteUpdateOption{
		fn: func(s suiteUpdater) error {
			return s.updateHook(perTest)
		},
	}
}

// PerSuite is a [suiteOption] that updates the suite hook to [perSuite].
func PerSuite() suiteOption {
	return &suiteUpdateOption{
		fn: func(s suiteUpdater) error {
			return s.updateHook(perSuite)
		},
	}
}

// TCKSuite is the interface that must be implemented by the test suite.
// It defines how to create a new store with a container.
// The generic parameters are the storage type and the driver type returned by the Conn method.
type TCKSuite[T storage.Storage, D any] interface {
	NewStoreWithContainer() func(ctx context.Context, tb testing.TB) (T, testcontainers.Container, error)
}

// New creates a new [StorageTestSuite] with the given [TCKSuite].
func New[T storage.Storage, D any](ctx context.Context, t *testing.T, tckSuite TCKSuite[T, D], opts ...suiteOption) (StorageTestSuite[T, D], error) {
	if tckSuite == nil {
		return StorageTestSuite[T, D]{}, fmt.Errorf("test suite is nil")
	}

	s := StorageTestSuite[T, D]{
		ctx:      ctx,
		hook:     perTest, // defaults to perTest
		createFn: tckSuite.NewStoreWithContainer(),
	}

	for _, opt := range opts {
		if err := opt.apply(&s); err != nil {
			return StorageTestSuite[T, D]{}, fmt.Errorf("apply option: %w", err)
		}
	}

	s.SetT(t)

	return s, nil
}

// StorageTestSuite is the test suite for the storage.
// It implements the [suite.Suite] interface and provides the necessary methods to test the storage.
// The generic parameters are the storage type and the driver type returned by the Conn method.
type StorageTestSuite[T storage.Storage, D any] struct {
	suite.Suite
	stats       *suite.SuiteInformation
	ctx         context.Context
	hook        suiteHook
	createFn    func(ctx context.Context, tb testing.TB) (T, testcontainers.Container, error)
	store       storage.Storage
	closedStore bool
	mu          sync.Mutex
	ctr         testcontainers.Container
}

func (s *StorageTestSuite[T, D]) updateHook(hook suiteHook) error {
	s.mu.Lock()
	defer s.mu.Unlock()

	s.hook = hook

	return nil
}

// cleanup is a helper function to cleanup the store and container.
// To avoid double closing the store, it checks if the store is already closed.
func (s *StorageTestSuite[T, D]) cleanup() error {
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

// HandleStats is a hook that is called when the suite statistics are updated.
// It is used to store the statistics for later use.
func (s *StorageTestSuite[T, D]) HandleStats(_ string, stats *suite.SuiteInformation) {
	s.stats = stats
}

// SetupSuite is a hook that is called when the suite is setup.
// It is used to create the store and container, only if the creation hook is [PerSuite].
func (s *StorageTestSuite[T, D]) SetupSuite() {
	if s.hook == perSuite {
		t := s.T()

		store, ctr, err := s.createFn(s.ctx, t)
		if err != nil {
			t.Fatalf("failed to create store per suite: %v", err)
		}
		s.store = store
		s.ctr = ctr
		s.closedStore = false

		err = s.store.Reset()
		s.Require().NoError(err)
	}
}

// TearDownSuite is a hook that is called when the suite is torn down.
// It is used to cleanup the store and container, only if the creation hook is [PerSuite].
func (s *StorageTestSuite[T, D]) TearDownSuite() {
	if s.hook == perSuite {
		s.Require().NoError(s.cleanup())
	}
}

// SetupTest is a hook that is called when the test is setup.
// It is used to create the store and container, only if the creation hook is [PerTest].
func (s *StorageTestSuite[T, D]) SetupTest() {
	if s.hook == perTest {
		t := s.T()

		store, ctr, err := s.createFn(s.ctx, t)
		if err != nil {
			t.Fatalf("failed to create store per test: %v", err)
		}
		s.store = store
		s.ctr = ctr
		s.closedStore = false

		err = s.store.Reset()
		s.Require().NoError(err)
	}
}

// TearDownTest is a hook that is called when the test is torn down.
// It is used to cleanup the store and container, only if the creation hook is [PerTest].
func (s *StorageTestSuite[T, D]) TearDownTest() {
	if s.hook == perTest {
		s.Require().NoError(s.cleanup())
	}
}

// ----------------------------------------------------------------------------
// Tests
// ----------------------------------------------------------------------------

func (s *StorageTestSuite[T, D]) TestConn() {
	storeWithConn, ok := s.store.(storage.StorageWithConn[D])
	if !ok {
		s.T().Skip("Storage does not implement StorageWithConn")
		return
	}

	conn := storeWithConn.Conn()
	s.Require().NotNil(conn, "Conn should not be nil")
}

func (s *StorageTestSuite[T, D]) TestSet() {
	s.setValue("test_key", []byte("test_value"))
}

func (s *StorageTestSuite[T, D]) TestSetWithContext() {
	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err := s.store.SetWithContext(ctx, "test_key", []byte("test_value"), 0)
	s.Require().ErrorIs(err, context.Canceled)
}

func (s *StorageTestSuite[T, D]) TestSetAndOverride() {
	s.setValue("test_key", []byte("test_value"))
	s.setValue("test_key", []byte("test_value_2"))

	s.requireKeyHasValue("test_key", []byte("test_value_2"))
}

func (s *StorageTestSuite[T, D]) TestSetAndGet() {
	s.setValue("test_key", []byte("test_value"))
	s.requireKeyHasValue("test_key", []byte("test_value"))
}

func (s *StorageTestSuite[T, D]) TestGetWithContext() {
	s.setValue("test_key", []byte("test_value"))

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	result, err := s.store.GetWithContext(ctx, "test_key")
	s.Require().ErrorIs(err, context.Canceled)
	s.Require().Zero(len(result))
}

func (s *StorageTestSuite[T, D]) TestGetMissing() {
	val, err := s.store.Get("non-existent-key")
	s.Require().NoError(err)
	s.Require().Zero(len(val))
}

func (s *StorageTestSuite[T, D]) TestGetExpired() {
	s.setValueWithTTL("temp_key", []byte("temp_value"), 500*time.Millisecond)

	s.Eventually(func() bool {
		s.requireKeyNotExists("temp_key")
		return true
	}, 2*time.Second, 1*time.Second, "Key should expire")
}

func (s *StorageTestSuite[T, D]) TestDelete() {
	s.setValue("delete_me", []byte("delete_value"))

	err := s.store.Delete("delete_me")
	s.Require().NoError(err)

	s.requireKeyNotExists("delete_me")
}

func (s *StorageTestSuite[T, D]) TestDeleteWithContext() {
	s.setValue("delete_me", []byte("delete_value"))

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err := s.store.DeleteWithContext(ctx, "delete_me")
	s.Require().ErrorIs(err, context.Canceled)

	result, err := s.store.Get("delete_me")
	s.Require().NoError(err)
	s.Require().Equal([]byte("delete_value"), result)
}

func (s *StorageTestSuite[T, D]) TestReset() {
	s.setValue("key1", []byte("value1"))
	s.setValue("key2", []byte("value2"))

	s.requireKeyHasValue("key1", []byte("value1"))
	s.requireKeyHasValue("key2", []byte("value2"))

	err := s.store.Reset()
	s.Require().NoError(err)

	s.requireKeyNotExists("key1")
	s.requireKeyNotExists("key2")
}

func (s *StorageTestSuite[T, D]) TestResetWithContext() {
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

func (s *StorageTestSuite[T, D]) TestClose() {
	err := s.store.Close()
	s.Require().NoError(err)

	s.mu.Lock()
	defer s.mu.Unlock()

	s.closedStore = true
}

// ----------------------------------------------------------------------------
// Helpers
// ----------------------------------------------------------------------------

func (s *StorageTestSuite[T, D]) setValue(key string, value []byte) {
	s.setValueWithTTL(key, value, 0)
}

func (s *StorageTestSuite[T, D]) setValueWithTTL(key string, value []byte, ttl time.Duration) {
	err := s.store.Set(key, value, ttl)
	s.Require().NoError(err)
}

func (s *StorageTestSuite[T, D]) getValue(key string) []byte {
	val, err := s.store.Get(key)
	s.Require().NoError(err)
	return val
}

func (s *StorageTestSuite[T, D]) requireKeyHasValue(key string, expectedValue []byte) {
	val := s.getValue(key)
	s.Require().Equal(expectedValue, val)
}

func (s *StorageTestSuite[T, D]) requireKeyNotExists(key string) {
	val := s.getValue(key)
	s.Require().Nil(val)
}
