package redis

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

func Test_Redis_Set(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	utils.AssertEqual(t, nil, err)
}

func Test_Redis_Set_Override(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	utils.AssertEqual(t, nil, err)

	err = testStore.Set(key, val, 0)
	utils.AssertEqual(t, nil, err)
}

func Test_Redis_Get(t *testing.T) {
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

func Test_Redis_Set_Expiration(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
		exp = 1 * time.Second
	)

	err := testStore.Set(key, val, exp)
	utils.AssertEqual(t, nil, err)

	time.Sleep(1100 * time.Millisecond)
}

func Test_Redis_Get_Expired(t *testing.T) {
	var (
		key = "john"
	)

	result, err := testStore.Get(key)
	utils.AssertEqual(t, nil, err)
	utils.AssertEqual(t, true, len(result) == 0)
}

func Test_Redis_Get_NotExist(t *testing.T) {
	result, err := testStore.Get("notexist")
	utils.AssertEqual(t, nil, err)
	utils.AssertEqual(t, true, len(result) == 0)
}

func Test_Redis_Delete(t *testing.T) {
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

func Test_Redis_Reset(t *testing.T) {
	var (
		val = []byte("doe")
	)

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

func Test_Redis_Close(t *testing.T) {
	utils.AssertEqual(t, nil, testStore.Close())
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
	utils.AssertEqual(t, nil, err)

	result, err := testStoreUrl.Get(key)
	utils.AssertEqual(t, nil, err)
	utils.AssertEqual(t, val, result)

	err = testStoreUrl.Delete(key)
	utils.AssertEqual(t, nil, err)

	utils.AssertEqual(t, nil, testStoreUrl.Close())
}

func Test_Redis_Initalize_WithURL_TLS(t *testing.T) {
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

	testStoreUrl := New(Config{
		URL:       "redis://localhost:6380",
		TLSConfig: tlsCfg,
	})

	var (
		key = "clark"
		val = []byte("kent")
	)

	err = testStoreUrl.Set(key, val, 0)
	utils.AssertEqual(t, nil, err)

	result, err := testStoreUrl.Get(key)
	utils.AssertEqual(t, nil, err)
	utils.AssertEqual(t, val, result)

	err = testStoreUrl.Delete(key)
	utils.AssertEqual(t, nil, err)

	utils.AssertEqual(t, nil, testStoreUrl.Close())
}
