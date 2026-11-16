package cloudflarekv

import (
	"bytes"
	"context"
	"io"
	"net/http"
	"net/http/httptest"
	"os"
	"strings"
	"sync"
	"testing"
	"testing/synctest"
	"time"

	"github.com/cloudflare/cloudflare-go"
	"github.com/stretchr/testify/require"
)

var testStore *Storage

func TestMain(m *testing.M) {

	testStore = New(Config{
		Key:   "test",
		Reset: true,
	})

	code := m.Run()

	_ = testStore.Close()
	os.Exit(code)
}

func Test_CloudflareKV_Get(t *testing.T) {
	t.Parallel()

	var (
		key = "john"
		val = []byte("doe")
	)

	_ = testStore.Set(key, val, 0)

	result, err := testStore.Get(key)

	for i := 0; i < 2; i++ {
		result, err = testStore.Get(key)
		if bytes.NewBuffer(result).String() == "" {
			_ = testStore.Set(key, val, 0)
		} else {
			break
		}
	}

	require.NoError(t, err)
	require.Equal(t, bytes.NewBuffer(val).String(), bytes.NewBuffer(result).String())

	_ = testStore.Close()
}

func Test_CloudflareKV_GetWithContext(t *testing.T) {
	t.Parallel()

	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	val, err = testStore.GetWithContext(ctx, key)
	require.ErrorContains(t, err, context.Canceled.Error())
	require.Nil(t, val)

	_ = testStore.Close()
}

func Test_CloudflareKV_Set(t *testing.T) {
	t.Parallel()

	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)

	require.NoError(t, err)

	_ = testStore.Close()
}

func Test_CloudflareKV_SetWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err := testStore.SetWithContext(ctx, key, val, 0)
	require.ErrorIs(t, err, context.Canceled)
}

func Test_CloudflareKV_Delete(t *testing.T) {
	t.Parallel()

	var (
		key = "john"
		val = []byte("doe")
	)

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	err = testStore.Delete(key)
	require.NoError(t, err)

	_ = testStore.Close()
}

func Test_CloudflareKV_DeleteWithContext(t *testing.T) {
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

func Test_CloudflareKV_Reset(t *testing.T) {
	t.Parallel()

	err := testStore.Reset()

	require.NoError(t, err)

	_ = testStore.Close()
}

func Test_CloudflareKV_ResetWithContext(t *testing.T) {
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

func Test_CloudflareKV_Close(t *testing.T) {
	t.Parallel()

	require.Nil(t, testStore.Close())

	_ = testStore.Close()
}

func Test_CloudflareKV_Conn(t *testing.T) {
	t.Parallel()

	require.NotNil(t, testStore.Conn())

	_ = testStore.Close()
}

func Benchmark_CloudflareKV_Set(b *testing.B) {
	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		err = testStore.Set("john", []byte("doe"), 0)
	}

	require.NoError(b, err)

	_ = testStore.Close()
}

func Benchmark_CloudflareKV_Get(b *testing.B) {
	err := testStore.Set("john", []byte("doe"), 0)
	require.NoError(b, err)

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_, err = testStore.Get("john")
	}

	require.NoError(b, err)

	_ = testStore.Close()
}

func Benchmark_CloudflareKV_SetAndDelete(b *testing.B) {
	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		_ = testStore.Set("john", []byte("doe"), 0)
		err = testStore.Delete("john")
	}

	require.NoError(b, err)

	_ = testStore.Close()
}

func Test_CloudflareKV_NewFromConnection(t *testing.T) {
	t.Parallel()

	store := NewFromConnection(testStore.Conn(), Config{
		Email:       "example@cloudflare.org",
		AccountID:   "dummy-ID",
		NamespaceID: "dummy-ID",
	})
	require.Equal(t, testStore.Conn(), store.Conn())

	var (
		key = "john-from-connection"
		val = []byte("doe")
	)

	require.NoError(t, store.Set(key, val, 0))

	result, err := store.Get(key)
	require.NoError(t, err)
	require.True(t, bytes.Equal(val, result))

	require.NoError(t, store.Close())
}

func Test_CloudflareKV_NewFromConnection_Nil(t *testing.T) {
	t.Parallel()

	require.Panics(t, func() {
		NewFromConnection(nil)
	})
}

type restRequest struct {
	method string
	uri    string
	body   string
}

// restRecorder answers every call of a real cloudflare-go client with one fixed reply and records the requests.
type restRecorder struct {
	mu       sync.Mutex
	requests []restRequest
}

func (r *restRecorder) seen() []restRequest {
	r.mu.Lock()
	defer r.mu.Unlock()
	return r.requests
}

func newRESTStore(t *testing.T, status int, reply string) (*Storage, *restRecorder) {
	t.Helper()

	recorder := &restRecorder{}
	server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		body, _ := io.ReadAll(r.Body)
		recorder.mu.Lock()
		recorder.requests = append(recorder.requests, restRequest{r.Method, r.URL.RequestURI(), string(body)})
		recorder.mu.Unlock()
		w.WriteHeader(status)
		_, _ = w.Write([]byte(reply))
	}))
	t.Cleanup(server.Close)

	api, err := cloudflare.NewWithAPIToken("token", cloudflare.BaseURL(server.URL), cloudflare.UsingRateLimit(1000))
	require.NoError(t, err)

	return NewFromConnection(api, Config{AccountID: "acc", NamespaceID: "ns"}), recorder
}

func Test_CloudflareKV_InvalidKeys(t *testing.T) {
	t.Parallel()

	store, recorder := newRESTStore(t, http.StatusOK, `{"success":true,"errors":[],"messages":[],"result":null}`)

	for _, key := range []string{"", ".", ".."} {
		val, err := store.Get(key)
		require.NoError(t, err)
		require.Nil(t, val)
		require.NoError(t, store.Delete(key))
	}
	require.NoError(t, store.Set("", []byte("doe"), 0))
	require.NoError(t, store.Set("john", nil, 0))
	require.ErrorIs(t, store.Set(".", []byte("doe"), 0), ErrInvalidKey)
	require.ErrorIs(t, store.Set("..", []byte("doe"), 0), ErrInvalidKey)
	require.Empty(t, recorder.seen())

	require.NoError(t, store.Delete("john.."))
	require.Equal(t, []restRequest{{http.MethodDelete, "/accounts/acc/storage/kv/namespaces/ns/values/john..", ""}}, recorder.seen())
}

func Test_CloudflareKV_Get_NotExist(t *testing.T) {
	t.Parallel()

	store, _ := newRESTStore(t, http.StatusNotFound, `{"success":false,"errors":[{"code":10009,"message":"get: 'key not found'"}],"messages":[],"result":null}`)

	val, err := store.Get("john")
	require.NoError(t, err)
	require.Nil(t, val)

	store, _ = newRESTStore(t, http.StatusBadRequest, `{"success":false,"errors":[{"code":10001,"message":"bad request"}],"messages":[],"result":null}`)

	val, err = store.Get("john")
	require.Error(t, err)
	require.Nil(t, val)
}

func Test_CloudflareKV_Set_Expiration(t *testing.T) {
	t.Parallel()

	store, recorder := newRESTStore(t, http.StatusOK, `{"success":true,"errors":[],"messages":[],"result":null}`)
	val := []byte{0x00, 0xff, 'd', 'o', 'e'}

	require.NoError(t, store.Set("john", val, 90*time.Second))
	require.NoError(t, store.Set("john", val, 90*time.Second+time.Millisecond))
	require.NoError(t, store.Set("john", val, time.Second))
	require.NoError(t, store.Set("a/b", val, 2*time.Minute))
	require.NoError(t, store.Set("john", val, 0))

	const uri = "/accounts/acc/storage/kv/namespaces/ns/values/"
	require.Equal(t, []restRequest{
		{http.MethodPut, uri + "john?expiration_ttl=90", string(val)},
		{http.MethodPut, uri + "john?expiration_ttl=91", string(val)},
		{http.MethodPut, uri + "john?expiration_ttl=60", string(val)},
		{http.MethodPut, uri + "a%2Fb?expiration_ttl=120", string(val)},
		{http.MethodPut, uri + "john", string(val)},
	}, recorder.seen())
}

func Test_CloudflareKV_Set_Expiration_TestModule(t *testing.T) {
	key := "john/expiring"
	val := []byte("doe")

	require.NoError(t, testStore.Set(key, val, time.Minute))

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)
}

type roundTripFunc func(*http.Request) (*http.Response, error)

func (f roundTripFunc) RoundTrip(r *http.Request) (*http.Response, error) { return f(r) }

func Test_CloudflareKV_RequestTimeout_BoundsRateLimitQueue(t *testing.T) {
	t.Parallel()

	synctest.Test(t, func(t *testing.T) {
		transport := roundTripFunc(func(r *http.Request) (*http.Response, error) {
			return &http.Response{StatusCode: http.StatusOK, Body: io.NopCloser(strings.NewReader("doe")), Request: r}, nil
		})
		// The client's default limiter allows 4 requests per second, so this burst books 15 seconds of slots.
		api, err := cloudflare.NewWithAPIToken("token", cloudflare.HTTPClient(&http.Client{Transport: transport}))
		require.NoError(t, err)
		store := NewFromConnection(api, Config{AccountID: "acc", NamespaceID: "ns"})

		var burst sync.WaitGroup
		for range 60 {
			burst.Go(func() { _, _ = store.Get("john") })
		}
		synctest.Wait()

		start := time.Now()
		_, _ = store.Get("john")
		require.LessOrEqual(t, time.Since(start), ConfigDefault.RequestTimeout)

		burst.Wait()
		require.LessOrEqual(t, time.Since(start), ConfigDefault.RequestTimeout)

		val, err := store.Get("john")
		require.NoError(t, err)
		require.Equal(t, []byte("doe"), val)
	})
}
