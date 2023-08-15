package rueidis

import (
	"crypto/tls"
	"log"
	"testing"
	"time"

	"github.com/gofiber/utils"
)

var testStore = New(Config{
	Reset: true,
})

func Test_Rueidis_Set(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	utils.AssertEqual(t, nil, err)
}

func Test_Rueidis_Set_Override(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	utils.AssertEqual(t, nil, err)

	err = testStore.Set(key, val, 0)
	utils.AssertEqual(t, nil, err)
}

func Test_Rueidis_Get(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	utils.AssertEqual(t, nil, err)

	result, err := testStore.Get(key)
	utils.AssertEqual(t, nil, err)
	utils.AssertEqual(t, val, result)
}

func Test_Rueidis_Set_Expiration(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
		exp = 1 * time.Second
	)

	err := testStore.Set(key, val, exp)
	utils.AssertEqual(t, nil, err)

	time.Sleep(1100 * time.Millisecond)
}

func Test_Rueidis_Get_Expired(t *testing.T) {
	key := "john"

	result, err := testStore.Get(key)
	utils.AssertEqual(t, nil, err)
	utils.AssertEqual(t, true, len(result) == 0)
}

func Test_Rueidis_Get_NotExist(t *testing.T) {
	result, err := testStore.Get("notexist")
	utils.AssertEqual(t, nil, err)
	utils.AssertEqual(t, true, len(result) == 0)
}

func Test_Rueidis_Delete(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	utils.AssertEqual(t, nil, err)

	err = testStore.Delete(key)
	utils.AssertEqual(t, nil, err)

	result, err := testStore.Get(key)
	utils.AssertEqual(t, nil, err)
	utils.AssertEqual(t, true, len(result) == 0)
}

func Test_Rueidis_Reset(t *testing.T) {
	val := []byte("doe")

	err := testStore.Set("john1", val, 0)
	utils.AssertEqual(t, nil, err)

	err = testStore.Set("john2", val, 0)
	utils.AssertEqual(t, nil, err)

	err = testStore.Reset()
	utils.AssertEqual(t, nil, err)

	result, err := testStore.Get("john1")
	utils.AssertEqual(t, nil, err)
	utils.AssertEqual(t, true, len(result) == 0)

	result, err = testStore.Get("john2")
	utils.AssertEqual(t, nil, err)
	utils.AssertEqual(t, true, len(result) == 0)
}

func Test_Rueidis_Close(t *testing.T) {
	utils.AssertEqual(t, nil, testStore.Close())
}

func Test_Rueidis_Conn(t *testing.T) {
	utils.AssertEqual(t, true, testStore.Conn() != nil)
}

func Test_Rueidis_WithTLS(t *testing.T) {
	cer, err := tls.LoadX509KeyPair("./tests/tls/client.crt", "./tests/tls/client.key")
	if err != nil {
		log.Println(err)
		return
	}
	tlsCfg := &tls.Config{
		MinVersion:               tls.VersionTLS12,
		CurvePreferences:         []tls.CurveID{tls.CurveP521, tls.CurveP384, tls.CurveP256},
		PreferServerCipherSuites: true,
		InsecureSkipVerify:       true,
		Certificates:             []tls.Certificate{cer},
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
	utils.AssertEqual(t, nil, err)

	result, err := storeTLS.Get(key)
	utils.AssertEqual(t, nil, err)
	utils.AssertEqual(t, val, result)

	err = storeTLS.Delete(key)
	utils.AssertEqual(t, nil, err)

	utils.AssertEqual(t, nil, storeTLS.Close())
}

func Test_Rueidis_With_HostPort(t *testing.T) {
	store := New(Config{
		InitAddress: []string{"localhost:6399"},
	})

	var (
		key = "bruce"
		val = []byte("wayne")
	)

	err := store.Set(key, val, 0)
	utils.AssertEqual(t, nil, err)

	result, err := store.Get(key)
	utils.AssertEqual(t, nil, err)
	utils.AssertEqual(t, val, result)

	err = store.Delete(key)
	utils.AssertEqual(t, nil, err)

	utils.AssertEqual(t, nil, store.Close())
}

func Test_Rueidis_Cluster(t *testing.T) {
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
	utils.AssertEqual(t, nil, err)

	result, err := store.Get(key)
	utils.AssertEqual(t, nil, err)
	utils.AssertEqual(t, val, result)

	err = store.Delete(key)
	utils.AssertEqual(t, nil, err)

	utils.AssertEqual(t, nil, store.Close())
}
