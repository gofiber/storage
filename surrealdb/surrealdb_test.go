package surrealdb

import (
	"context"
	"encoding/json"
	"fmt"
	"os"
	"testing"
	"time"

	"github.com/stretchr/testify/require"
	"github.com/stretchr/testify/suite"
	"github.com/testcontainers/testcontainers-go"
	surrealdbTestContainerRepo "github.com/testcontainers/testcontainers-go/modules/surrealdb"
)

const (
	defaultSurrealDBImage = "surrealdb/surrealdb:latest"
	imageEnvVar           = "TEST_SURREALDB_IMAGE"
	testUser              = "root"
	testPass              = "root"
	testNamespace         = "testns"
	testDatabase          = "testdb"
	defaultTable          = "fiber_storage"
)

type SurrealDBTestSuite struct {
	suite.Suite
	store     *Storage
	container testcontainers.Container
	ctx       context.Context
}

func (s *SurrealDBTestSuite) SetupSuite() {
	s.ctx = context.Background()

	container, url := createSurrealDBContainer(s.ctx, s.T())
	s.container = container
	s.store = createStore(url)
}

func (s *SurrealDBTestSuite) TearDownSuite() {
	if s.store != nil {
		s.store.Close()
	}
	if s.container != nil {
		testcontainers.CleanupContainer(s.T(), s.container)
	}
}

func (s *SurrealDBTestSuite) SetupTest() {
	err := s.store.Reset()
	s.Require().NoError(err)
}

func (s *SurrealDBTestSuite) TestCreate() {
	s.setValue("test_key", []byte("test_value"), 0)
}

func (s *SurrealDBTestSuite) TestCreateAndGet() {
	s.setValue("test_key", []byte("test_value"), 0)
	s.assertKeyHasValue("test_key", []byte("test_value"))
}

func (s *SurrealDBTestSuite) TestDelete() {
	s.setValue("delete_me", []byte("delete_value"), 0)
	s.assertKeyHasValue("delete_me", []byte("delete_value"))

	err := s.store.Delete("delete_me")
	s.Require().NoError(err)
	s.assertKeyNotExists("delete_me")
}

func (s *SurrealDBTestSuite) TestGetMissing() {
	val, err := s.store.Get("non-existent-key")
	s.Require().NoError(err)
	s.Require().Nil(val)
}

func (s *SurrealDBTestSuite) TestReset() {
	s.setValue("key1", []byte("value1"), 0)
	s.setValue("key2", []byte("value2"), 0)

	s.assertKeyHasValue("key1", []byte("value1"))
	s.assertKeyHasValue("key2", []byte("value2"))

	err := s.store.Reset()
	s.Require().NoError(err)

	s.assertKeyNotExists("key1")
	s.assertKeyNotExists("key2")
}

func (s *SurrealDBTestSuite) TestList() {
	testData := map[string][]byte{
		"key1": []byte("value1"),
		"key2": []byte("value2"),
		"key3": []byte("value3"),
	}

	for key, value := range testData {
		s.setValue(key, value, 0)
	}

	data, err := s.store.List()
	s.Require().NoError(err)
	s.Assert().NotEmpty(data)

	var result map[string][]byte
	err = json.Unmarshal(data, &result)
	s.Require().NoError(err)

	for key, expectedValue := range testData {
		s.Assert().Contains(result, key)
		s.Assert().Equal(expectedValue, result[key])
	}
}

func (s *SurrealDBTestSuite) TestGetExpired() {
	s.setValue("temp_key", []byte("temp_value"), 500*time.Millisecond)

	s.assertKeyHasValue("temp_key", []byte("temp_value"))

	s.Eventually(func() bool {
		val := s.getValue("temp_key")
		return val == nil
	}, 2*time.Second, 100*time.Millisecond, "Key should expire")
}

func (s *SurrealDBTestSuite) TestListSkipsExpiredKeys() {
	s.setValue("permanent", []byte("perm_value"), 0)
	s.setValue("temporary", []byte("temp_value"), 500*time.Millisecond)

	time.Sleep(3 * time.Second)

	data, err := s.store.List()
	s.Require().NoError(err)

	var result map[string][]byte
	err = json.Unmarshal(data, &result)
	s.Require().NoError(err)

	s.Assert().Contains(result, "permanent")
	s.Assert().NotContains(result, "temporary")
}

func TestSurrealDBTestSuite(t *testing.T) {
	suite.Run(t, new(SurrealDBTestSuite))
}

func BenchmarkSet(b *testing.B) {
	store, cleanup := createBenchmarkStore(b)
	defer cleanup()

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		err := store.Set("benchmark_key", []byte("benchmark_value"), 0)
		require.NoError(b, err)
	}
}

func BenchmarkGet(b *testing.B) {
	store, cleanup := createBenchmarkStore(b)
	defer cleanup()

	err := store.Set("benchmark_key", []byte("benchmark_value"), 0)
	require.NoError(b, err)

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_, err := store.Get("benchmark_key")
		require.NoError(b, err)
	}
}

func BenchmarkSetAndDelete(b *testing.B) {
	store, cleanup := createBenchmarkStore(b)
	defer cleanup()

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		key := "bench_key_" + fmt.Sprint(i)
		err := store.Set(key, []byte("bench_value"), 0)
		require.NoError(b, err)

		err = store.Delete(key)
		require.NoError(b, err)
	}
}

// Helper methods
func createSurrealDBContainer(ctx context.Context, t require.TestingT) (testcontainers.Container, string) {
	img := defaultSurrealDBImage
	if envImg := os.Getenv(imageEnvVar); envImg != "" {
		img = envImg
	}

	container, err := surrealdbTestContainerRepo.Run(
		ctx, img,
		surrealdbTestContainerRepo.WithUsername(testUser),
		surrealdbTestContainerRepo.WithPassword(testPass),
	)
	require.NoError(t, err)

	url, err := container.URL(ctx)
	require.NoError(t, err)

	return container, url
}

func createBenchmarkStore(b *testing.B) (*Storage, func()) {
	b.Helper()
	ctx := context.Background()

	container, url := createSurrealDBContainer(ctx, b)
	store := createStore(url)

	cleanup := func() {
		store.Close()
		testcontainers.CleanupContainer(b, container)
	}

	return store, cleanup
}

func createStore(url string) *Storage {
	return New(Config{
		ConnectionString: url,
		Namespace:        testNamespace,
		Database:         testDatabase,
		Username:         testUser,
		Password:         testPass,
		DefaultTable:     defaultTable,
	})
}

func (s *SurrealDBTestSuite) setValue(key string, value []byte, ttl time.Duration) {
	err := s.store.Set(key, value, ttl)
	s.Require().NoError(err)
}

func (s *SurrealDBTestSuite) getValue(key string) []byte {
	val, err := s.store.Get(key)
	s.Require().NoError(err)
	return val
}

func (s *SurrealDBTestSuite) assertKeyHasValue(key string, expectedValue []byte) {
	val := s.getValue(key)
	s.Assert().Equal(expectedValue, val)
}

func (s *SurrealDBTestSuite) assertKeyNotExists(key string) {
	val := s.getValue(key)
	s.Assert().Nil(val)
}
