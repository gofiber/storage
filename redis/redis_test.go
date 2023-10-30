package redis

import (
	"crypto/tls"
	"log"
	"testing"
	"time"

	"github.com/stretchr/testify/require"
)

func Test_Redis_Set(t *testing.T) {
	var (
		testStore = New(Config{
			Reset: true,
		})
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)
}

func Test_Redis_Set_Override(t *testing.T) {
	var (
		testStore = New(Config{
			Reset: true,
		})
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	err = testStore.Set(key, val, 0)
	require.NoError(t, err)

	keys, err := testStore.Keys()
	require.NoError(t, err)
	require.Len(t, keys, 1)
}

func Test_Redis_Get(t *testing.T) {
	var (
		testStore = New(Config{
			Reset: true,
		})
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)

	keys, err := testStore.Keys()
	require.NoError(t, err)
	require.Len(t, keys, 1)
}

func Test_Redis_Expiration(t *testing.T) {
	var (
		testStore = New(Config{
			Reset: true,
		})
		key = "john"
		val = []byte("doe")
		exp = 1 * time.Second
	)

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

func Test_Redis_Get_NotExist(t *testing.T) {
	testStore := New(Config{
		Reset: true,
	})
	result, err := testStore.Get("notexist")
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_Redis_Delete(t *testing.T) {
	var (
		testStore = New(Config{
			Reset: true,
		})
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	err = testStore.Delete(key)
	require.NoError(t, err)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Zero(t, len(result))

	keys, err := testStore.Keys()
	require.NoError(t, err)
	require.Nil(t, keys)
}

func Test_Redis_Reset(t *testing.T) {
	testStore := New(Config{
		Reset: true,
	})
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

func Test_Redis_Close(t *testing.T) {
	testStore := New(Config{
		Reset: true,
	})
	require.Nil(t, testStore.Close())
}

func Test_Redis_Conn(t *testing.T) {
	testStore := New(Config{
		Reset: true,
	})
	require.True(t, testStore.Conn() != nil)
}

func Test_Redis_Initalize_WithURL(t *testing.T) {
	testStoreUrl := New(Config{
		URL: "redis://localhost:6379",
	})
	var (
		key = "clark"
		val = []byte("kent")
	)

	err := testStoreUrl.Set(key, val, 0)
	require.NoError(t, err)

	result, err := testStoreUrl.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)

	err = testStoreUrl.Delete(key)
	require.NoError(t, err)

	require.Nil(t, testStoreUrl.Close())
}

func Test_Redis_Initalize_WithURL_TLS(t *testing.T) {
	cer, err := tls.LoadX509KeyPair("/home/runner/work/storage/storage/tls/client.crt", "/home/runner/work/storage/storage/tls/client.key")
	if err != nil {
		log.Println(err)
		return
	}
	tlsCfg := &tls.Config{
		MinVersion:         tls.VersionTLS12,
		CurvePreferences:   []tls.CurveID{tls.CurveP521, tls.CurveP384, tls.CurveP256},
		InsecureSkipVerify: true,
		Certificates:       []tls.Certificate{cer},
		CipherSuites: []uint16{
			tls.TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,
			tls.TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA,
			tls.TLS_RSA_WITH_AES_256_GCM_SHA384,
			tls.TLS_RSA_WITH_AES_256_CBC_SHA,
		},
	}

	testStoreUrl := New(Config{
		URL:       "redis://localhost:6380",
		TLSConfig: tlsCfg,
	})

	var (
		key = "clark"
		val = []byte("kent")
	)

	err = testStoreUrl.Set(key, val, 0)
	require.NoError(t, err)

	result, err := testStoreUrl.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)

	err = testStoreUrl.Delete(key)
	require.NoError(t, err)

	keys, err := testStoreUrl.Keys()
	require.NoError(t, err)
	require.Nil(t, keys)

	require.Nil(t, testStoreUrl.Close())
}

func Test_Redis_Initalize_WithURL_TLS_Verify(t *testing.T) {
	cer, err := tls.LoadX509KeyPair("/home/runner/work/storage/storage/tls/client.crt", "/home/runner/work/storage/storage/tls/client.key")
	if err != nil {
		log.Println(err)
		return
	}
	tlsCfg := &tls.Config{
		MinVersion:         tls.VersionTLS12,
		CurvePreferences:   []tls.CurveID{tls.CurveP521, tls.CurveP384, tls.CurveP256},
		InsecureSkipVerify: false,
		Certificates:       []tls.Certificate{cer},
		CipherSuites: []uint16{
			tls.TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,
			tls.TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA,
			tls.TLS_RSA_WITH_AES_256_GCM_SHA384,
			tls.TLS_RSA_WITH_AES_256_CBC_SHA,
		},
	}

	testStoreUrl := New(Config{
		URL:       "redis://localhost:6380",
		TLSConfig: tlsCfg,
	})

	var (
		key = "clark"
		val = []byte("kent")
	)

	err = testStoreUrl.Set(key, val, 0)
	require.NoError(t, err)

	result, err := testStoreUrl.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)

	err = testStoreUrl.Delete(key)
	require.NoError(t, err)

	keys, err := testStoreUrl.Keys()
	require.NoError(t, err)
	require.Nil(t, keys)

	require.Nil(t, testStoreUrl.Close())
}

func Test_Redis_Initalize_With_Secure_URL(t *testing.T) {
	testStoreUrl := New(Config{
		URL: "rediss://localhost:16380",
	})

	var (
		key = "clark"
		val = []byte("kent")
	)

	err := testStoreUrl.Set(key, val, 0)
	require.NoError(t, err)

	result, err := testStoreUrl.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)

	err = testStoreUrl.Delete(key)
	require.NoError(t, err)

	keys, err := testStoreUrl.Keys()
	require.NoError(t, err)
	require.Nil(t, keys)

	require.Nil(t, testStoreUrl.Close())
}

func Test_Redis_Universal_Addrs(t *testing.T) {
	// This should failover and create a Single Node connection.
	testStoreUniversal := New(Config{
		Addrs: []string{"localhost:6379"},
	})

	var (
		key = "bruce"
		val = []byte("wayne")
	)

	err := testStoreUniversal.Set(key, val, 0)
	require.NoError(t, err)

	result, err := testStoreUniversal.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)

	err = testStoreUniversal.Delete(key)
	require.NoError(t, err)

	keys, err := testStoreUniversal.Keys()
	require.NoError(t, err)
	require.Nil(t, keys)

	require.Nil(t, testStoreUniversal.Close())
}

func Test_Redis_Universal_With_URL_Undefined(t *testing.T) {
	// This should failover to creating a regular *redis.Client
	// The URL should get ignored since it's empty
	testStoreUniversal := New(Config{
		URL:   "",
		Addrs: []string{"localhost:6379"},
	})

	var (
		key = "bruce"
		val = []byte("wayne")
	)

	err := testStoreUniversal.Set(key, val, 0)
	require.NoError(t, err)

	result, err := testStoreUniversal.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)

	err = testStoreUniversal.Delete(key)
	require.NoError(t, err)

	keys, err := testStoreUniversal.Keys()
	require.NoError(t, err)
	require.Nil(t, keys)

	require.Nil(t, testStoreUniversal.Close())
}

func Test_Redis_Universal_With_URL_Defined(t *testing.T) {
	// This should failover to creating a regular *redis.Client
	// The Addrs field should get ignored since URL is defined
	testStoreUniversal := New(Config{
		URL:   "redis://localhost:6379",
		Addrs: []string{"localhost:6355"},
	})

	var (
		key = "bruce"
		val = []byte("wayne")
	)

	err := testStoreUniversal.Set(key, val, 0)
	require.NoError(t, err)

	result, err := testStoreUniversal.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)

	err = testStoreUniversal.Delete(key)
	require.NoError(t, err)

	keys, err := testStoreUniversal.Keys()
	require.NoError(t, err)
	require.Nil(t, keys)

	require.Nil(t, testStoreUniversal.Close())
}

func Test_Redis_Universal_With_HostPort(t *testing.T) {
	// This should failover to creating a regular *redis.Client
	// The Host and Port should get ignored since Addrs is defined
	testStoreUniversal := New(Config{
		Host:  "localhost",
		Port:  6388,
		Addrs: []string{"localhost:6379"},
	})

	var (
		key = "bruce"
		val = []byte("wayne")
	)

	err := testStoreUniversal.Set(key, val, 0)
	require.NoError(t, err)

	result, err := testStoreUniversal.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)

	err = testStoreUniversal.Delete(key)
	require.NoError(t, err)

	keys, err := testStoreUniversal.Keys()
	require.NoError(t, err)
	require.Nil(t, keys)

	require.Nil(t, testStoreUniversal.Close())
}

func Test_Redis_Universal_With_HostPort_And_URL(t *testing.T) {
	// This should failover to creating a regular *redis.Client
	// The Host and Port should get ignored since Addrs is defined
	testStoreUniversal := New(Config{
		URL:   "redis://localhost:6379",
		Host:  "localhost",
		Port:  6388,
		Addrs: []string{"localhost:6399"},
	})

	var (
		key = "bruce"
		val = []byte("wayne")
	)

	err := testStoreUniversal.Set(key, val, 0)
	require.NoError(t, err)

	result, err := testStoreUniversal.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)

	err = testStoreUniversal.Delete(key)
	require.NoError(t, err)

	keys, err := testStoreUniversal.Keys()
	require.NoError(t, err)
	require.Nil(t, keys)

	require.Nil(t, testStoreUniversal.Close())
}

func Test_Redis_Cluster(t *testing.T) {
	testStoreUniversal := New(Config{
		Addrs: []string{
			"localhost:7000",
			"localhost:7001",
			"localhost:7002",
			"localhost:7003",
			"localhost:7004",
			"localhost:7005",
		},
	})

	var (
		key = "bruce"
		val = []byte("wayne")
	)

	err := testStoreUniversal.Set(key, val, 0)
	require.NoError(t, err)

	result, err := testStoreUniversal.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)

	err = testStoreUniversal.Delete(key)
	require.NoError(t, err)

	keys, err := testStoreUniversal.Keys()
	require.NoError(t, err)
	require.Nil(t, keys)

	require.Nil(t, testStoreUniversal.Close())
}

func Benchmark_Redis_Set(b *testing.B) {
	testStore := New(Config{
		Reset: true,
	})
	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		err = testStore.Set("john", []byte("doe"), 0)
	}

	require.NoError(b, err)
}

func Benchmark_Redis_Get(b *testing.B) {
	testStore := New(Config{
		Reset: true,
	})
	err := testStore.Set("john", []byte("doe"), 0)
	require.NoError(b, err)

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_, err = testStore.Get("john")
	}

	require.NoError(b, err)
}

func Benchmark_Redis_SetAndDelete(b *testing.B) {
	testStore := New(Config{
		Reset: true,
	})
	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		_ = testStore.Set("john", []byte("doe"), 0)
		err = testStore.Delete("john")
	}

	require.NoError(b, err)
}
