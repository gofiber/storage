package valkey

import (
	"context"
	"crypto/tls"
	"log"
	"testing"
	"time"

	"github.com/stretchr/testify/require"
)

var testStore = New(Config{
	Reset: true,
})

func Test_Valkey_Set(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)
}

func Test_Valkey_SetWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err := testStore.SetWithContext(ctx, key, val, 0)
	require.ErrorIs(t, err, context.Canceled)
}

func Test_Valkey_Set_Override(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	err = testStore.Set(key, val, 0)
	require.NoError(t, err)
}

func Test_Valkey_Get(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)
}

func Test_Valkey_GetWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	result, err := testStore.GetWithContext(ctx, key)
	require.ErrorIs(t, err, context.Canceled)
	require.Zero(t, len(result))
}

func Test_Valkey_Set_Expiration(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
		exp = 1 * time.Second
	)

	err := testStore.Set(key, val, exp)
	require.NoError(t, err)

	time.Sleep(1100 * time.Millisecond)
}

func Test_Valkey_Get_Expired(t *testing.T) {
	key := "john"

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_Valkey_Get_NotExist(t *testing.T) {
	result, err := testStore.Get("notexist")
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_Valkey_Delete(t *testing.T) {
	var (
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
}

func Test_Valkey_DeleteWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err = testStore.DeleteWithContext(ctx, key)
	require.ErrorIs(t, err, context.Canceled)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)
}

func Test_Valkey_Reset(t *testing.T) {
	val := []byte("doe")

	err := testStore.Set("john1", val, 0)
	require.NoError(t, err)

	err = testStore.Set("john2", val, 0)
	require.NoError(t, err)

	err = testStore.Reset()
	require.NoError(t, err)

	result, err := testStore.Get("john1")
	require.NoError(t, err)
	require.Zero(t, len(result))

	result, err = testStore.Get("john2")
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_Valkey_ResetWithContext(t *testing.T) {
	val := []byte("doe")

	err := testStore.Set("john1", val, 0)
	require.NoError(t, err)

	err = testStore.Set("john2", val, 0)
	require.NoError(t, err)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err = testStore.ResetWithContext(ctx)
	require.ErrorIs(t, err, context.Canceled)

	result, err := testStore.Get("john1")
	require.NoError(t, err)
	require.Equal(t, val, result)

	result, err = testStore.Get("john2")
	require.NoError(t, err)
	require.Equal(t, val, result)
}

func Test_Valkey_Close(t *testing.T) {
	require.Nil(t, testStore.Close())
}

func Test_Valkey_Conn(t *testing.T) {
	require.True(t, testStore.Conn() != nil)
}

func Test_Valkey_WithTLS(t *testing.T) {
	cer, err := tls.LoadX509KeyPair("/home/runner/work/storage/storage/tls/client.crt", "/home/runner/work/storage/storage/tls/client.key")
	if err != nil {
		log.Println(err)
		require.NoError(t, err)
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

	storeTLS := New(Config{
		InitAddress: []string{"localhost:6380"},
		TLSConfig:   tlsCfg,
	})

	var (
		key = "clark"
		val = []byte("kent")
	)

	err = storeTLS.Set(key, val, 0)
	require.NoError(t, err)

	result, err := storeTLS.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)

	err = storeTLS.Delete(key)
	require.NoError(t, err)
	require.Nil(t, storeTLS.Close())
}

func Test_Valkey_With_HostPort(t *testing.T) {
	store := New(Config{
		InitAddress: []string{"localhost:6379"},
	})

	var (
		key = "bruce"
		val = []byte("wayne")
	)

	err := store.Set(key, val, 0)
	require.NoError(t, err)

	result, err := store.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)

	err = store.Delete(key)
	require.NoError(t, err)
	require.Nil(t, store.Close())
}

func Test_Valkey_With_URL(t *testing.T) {
	store := New(Config{
		URL: "redis://localhost:6379",
	})

	var (
		key = "bruce"
		val = []byte("wayne")
	)

	err := store.Set(key, val, 0)
	require.NoError(t, err)

	result, err := store.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)

	err = store.Delete(key)
	require.NoError(t, err)
	require.Nil(t, store.Close())
}

func Test_Valkey_Cluster(t *testing.T) {
	store := New(Config{
		InitAddress: []string{
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

	err := store.Set(key, val, 0)
	require.NoError(t, err)

	result, err := store.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)

	err = store.Delete(key)
	require.NoError(t, err)
	require.Nil(t, store.Close())
}

func Benchmark_Valkey_Set(b *testing.B) {
	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		err = testStore.Set("john", []byte("doe"), 0)
	}

	require.NoError(b, err)
}

func Benchmark_Valkey_Get(b *testing.B) {
	err := testStore.Set("john", []byte("doe"), 0)
	require.NoError(b, err)

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_, err = testStore.Get("john")
	}

	require.NoError(b, err)
}

func Benchmark_Valkey_SetAndDelete(b *testing.B) {
	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		_ = testStore.Set("john", []byte("doe"), 0)
		err = testStore.Delete("john")
	}

	require.NoError(b, err)
}
