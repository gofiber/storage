package nats

import (
	"testing"
	"time"

	"github.com/nats-io/nats.go"
	"github.com/nats-io/nats.go/jetstream"
	"github.com/stretchr/testify/require"
)

var config = Config{
	URLs: "nats://localhost:4443",
	NatsOptions: []nats.Option{
		nats.MaxReconnects(2),
		// Enable TLS with client certificate authentication
		nats.ClientCert("../tls/client.crt", "../tls/client.key"),
		nats.RootCAs("../tls/ca.crt"),
	},
	KeyValueConfig: jetstream.KeyValueConfig{
		Bucket:  "test",
		Storage: jetstream.MemoryStorage,
	},
}

func Test_Storage_Nats_Set(t *testing.T) {
	var (
		testStore = New(config)
		key       = "john"
		val       = []byte("doe")
	)
	defer testStore.Close()

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	keys, err := testStore.Keys()
	require.NoError(t, err)
	require.Len(t, keys, 1)
}

func Test_Storage_Nats_Set_Overwrite(t *testing.T) {
	var (
		testStore = New(config)
		key       = "john"
		val1      = []byte("doe")
		val2      = []byte("overwritten")
	)
	defer testStore.Close()

	err := testStore.Set(key, val1, 0)
	require.NoError(t, err)

	err = testStore.Set(key, val2, 30*time.Second)
	require.NoError(t, err)
	v, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, val2, v)

	keys, err := testStore.Keys()
	require.NoError(t, err)
	require.Len(t, keys, 1)
}

func Test_Storage_Nats_Get(t *testing.T) {
	var (
		testStore = New(config)
		key       = "john"
		val       = []byte("doe")
	)
	defer testStore.Close()

	err := testStore.Set(key, val, 30*time.Second)
	require.NoError(t, err)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)

	keys, err := testStore.Keys()
	require.NoError(t, err)
	require.Len(t, keys, 1)
}

func Test_Storage_Nats_Set_Expiration(t *testing.T) {
	var (
		testStore = New(config)
		key       = "john"
		val       = []byte("doe")
		exp       = 1 * time.Second
	)
	defer testStore.Close()

	err := testStore.Set(key, val, exp)
	require.NoError(t, err)

	time.Sleep(1100 * time.Millisecond)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Zero(t, len(result))

	keys, err := testStore.Keys()
	require.NoError(t, err)
	require.Nil(t, keys)
}

func Test_Storage_Nats_Set_Long_Expiration_with_Keys(t *testing.T) {
	var (
		testStore = New(config)
		key       = "john"
		val       = []byte("doe")
		exp       = 5 * time.Second
	)
	defer testStore.Close()

	keys, err := testStore.Keys()
	require.NoError(t, err)
	require.Nil(t, keys)

	err = testStore.Set(key, val, exp)
	require.NoError(t, err)

	time.Sleep(1100 * time.Millisecond)

	keys, err = testStore.Keys()
	require.NoError(t, err)
	require.Len(t, keys, 1)

	time.Sleep(4000 * time.Millisecond)
	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Zero(t, len(result))

	keys, err = testStore.Keys()
	require.NoError(t, err)
	require.Nil(t, keys)
}

func Test_Storage_Nats_Get_NotExist(t *testing.T) {
	testStore := New(config)
	defer testStore.Close()

	result, err := testStore.Get("notexist")
	require.NoError(t, err)
	require.Zero(t, len(result))

	keys, err := testStore.Keys()
	require.NoError(t, err)
	require.Nil(t, keys)
}

func Test_Storage_Nats_Delete(t *testing.T) {
	var (
		testStore = New(config)
		key       = "john"
		val       = []byte("doe")
	)
	defer testStore.Close()

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	keys, err := testStore.Keys()
	require.NoError(t, err)
	require.Len(t, keys, 1)

	err = testStore.Delete(key)
	require.NoError(t, err)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Zero(t, len(result))

	keys, err = testStore.Keys()
	require.NoError(t, err)
	require.Nil(t, keys)
}

func Test_Storage_Nats_Reset(t *testing.T) {
	testStore := New(config)
	defer testStore.Close()
	val := []byte("doe")

	err := testStore.Set("john1", val, 0)
	require.NoError(t, err)

	err = testStore.Set("john2", val, 0)
	require.NoError(t, err)

	keys, err := testStore.Keys()
	require.NoError(t, err)
	require.Len(t, keys, 2)

	err = testStore.Reset()
	require.NoError(t, err)

	result, err := testStore.Get("john1")
	require.NoError(t, err)
	require.Zero(t, len(result))

	result, err = testStore.Get("john2")
	require.NoError(t, err)
	require.Zero(t, len(result))

	keys, err = testStore.Keys()
	require.NoError(t, err)
	require.Nil(t, keys)
}

func Test_Storage_Nats_Close(t *testing.T) {
	testStore := New(config)
	require.Nil(t, testStore.Close())
}

func Test_Storage_Nats_Conn(t *testing.T) {
	testStore := New(config)
	defer testStore.Close()
	n, k := testStore.Conn()
	require.NotNil(t, n)
	require.NotNil(t, k)
}

func Benchmark_Nats_Set(b *testing.B) {
	testStore := New(config)
	defer testStore.Close()

	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		err = testStore.Set("john", []byte("doe"), 0)
	}

	require.NoError(b, err)
}

func Benchmark_Nats_Get(b *testing.B) {
	testStore := New(config)
	defer testStore.Close()

	err := testStore.Set("john", []byte("doe"), 0)
	require.NoError(b, err)

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_, err = testStore.Get("john")
	}

	require.NoError(b, err)
}

func Benchmark_Nats_SetAndDelete(b *testing.B) {
	testStore := New(config)
	defer testStore.Close()

	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		_ = testStore.Set("john", []byte("doe"), 0)
		err = testStore.Delete("john")
	}

	require.NoError(b, err)
}
