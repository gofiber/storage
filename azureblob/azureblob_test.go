package azureblob

import (
	"context"
	"encoding/base64"
	"fmt"
	"io"
	"net"
	"net/http"
	"net/http/httptest"
	"os"
	"strings"
	"sync/atomic"
	"testing"
	"time"

	"github.com/Azure/azure-sdk-for-go/sdk/storage/azblob"
	"github.com/Azure/azure-sdk-for-go/sdk/storage/azblob/bloberror"
	"github.com/stretchr/testify/require"
	"github.com/testcontainers/testcontainers-go"
	"github.com/testcontainers/testcontainers-go/modules/azure/azurite"
)

const (
	// azuriteImage is the default image used for running azurite in tests.
	azuriteImage       = "mcr.microsoft.com/azure-storage/azurite:latest"
	azuriteImageEnvVar = "TEST_AZURITE_IMAGE"
)

func newTestConfig(t testing.TB) Config {
	t.Helper()

	img := azuriteImage
	if imgFromEnv := os.Getenv(azuriteImageEnvVar); imgFromEnv != "" {
		img = imgFromEnv
	}

	ctx := context.Background()

	// Allow newer azblob SDK API versions than the Azurite image natively
	// supports; otherwise requests fail with InvalidHeaderValue (the API
	// version is not supported by Azurite).
	c, err := azurite.Run(ctx, img, testcontainers.WithCmdArgs("--skipApiVersionCheck"))
	testcontainers.CleanupContainer(t, c)
	require.NoError(t, err)

	serviceURL, err := c.BlobServiceURL(ctx)
	require.NoError(t, err)

	return Config{
		Account:   azurite.AccountName,
		Container: "test",
		Endpoint:  serviceURL + "/" + azurite.AccountName,
		Credentials: Credentials{
			Account: azurite.AccountName,
			Key:     azurite.AccountKey,
		},
		Reset: true,
	}
}

func newTestStore(t testing.TB) *Storage {
	t.Helper()
	return New(newTestConfig(t))
}

func Test_AzureBlob_NewWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := NewWithContext(context.Background(), newTestConfig(t))
	require.NotNil(t, testStore)
	defer testStore.Close()

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)
}

func Test_AzureBlob_Get(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)
}

func Test_AzureBlob_GetWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	result, err := testStore.GetWithContext(ctx, key)
	require.ErrorIs(t, err, context.Canceled)
	require.Zero(t, len(result))
}

func Test_AzureBlob_Set(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)
}

func Test_AzureBlob_SetWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err := testStore.SetWithContext(ctx, key, val, 0)
	require.ErrorIs(t, err, context.Canceled)
}

func Test_AzureBlob_Delete(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	err = testStore.Delete(key)
	require.NoError(t, err)

	result, err := testStore.Get(key)
	if err != nil {
		if bloberror.HasCode(err, bloberror.BlobNotFound) {
			err = nil
		}
	}
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_AzureBlob_DeleteWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

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

func Test_AzureBlob_Override(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	err = testStore.Set(key, val, 0)
	require.NoError(t, err)
}

func Test_AzureBlob_Get_NotExist(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	result, err := testStore.Get("notexist")
	if err != nil {
		if bloberror.HasCode(err, bloberror.BlobNotFound) {
			err = nil
		}
	}
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_AzureBlob_Reset(t *testing.T) {
	val := []byte("doe")

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set("john1", val, 0)
	require.NoError(t, err)

	err = testStore.Set("john2", val, 0)
	require.NoError(t, err)

	err = testStore.Reset()
	require.NoError(t, err)

	result, err := testStore.Get("john1")
	if err != nil {
		if bloberror.HasCode(err, bloberror.BlobNotFound) {
			err = nil
		}
	}
	require.NoError(t, err)
	require.Zero(t, len(result))

	result, err = testStore.Get("john2")
	if err != nil {
		if bloberror.HasCode(err, bloberror.BlobNotFound) {
			err = nil
		}
	}
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_AzureBlob_Conn(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	require.True(t, testStore.Conn() != nil)
}

func Test_AzureBlob_ResetWithContext(t *testing.T) {
	val := []byte("doe")

	testStore := newTestStore(t)
	defer testStore.Close()

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

func Test_AzureBlob_Close(t *testing.T) {
	testStore := newTestStore(t)
	require.NoError(t, testStore.Close())
}

func Benchmark_AzureBlob_Set(b *testing.B) {
	testStore := newTestStore(b)
	defer testStore.Close()

	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		err = testStore.Set("john", []byte("doe"), 0)
	}

	require.NoError(b, err)
}

func Benchmark_AzureBlob_Get(b *testing.B) {
	testStore := newTestStore(b)
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

func Benchmark_AzureBlob_SetAndDelete(b *testing.B) {
	testStore := newTestStore(b)
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

func Test_AzureBlob_NewFromConnection(t *testing.T) {
	owner := newTestStore(t)
	defer owner.Close()

	testStore := NewFromConnection(owner.Conn(), Config{Container: "existing"})
	require.Same(t, owner.Conn(), testStore.Conn())

	var (
		key = "john"
		val = []byte("doe")
	)

	require.NoError(t, testStore.Set(key, val, 0))

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)

	// The client is the caller's, so closing this storage must leave it usable.
	require.NoError(t, testStore.Close())
	require.NoError(t, owner.Set(key, val, 0))
}

func Test_AzureBlob_NewFromConnection_Nil(t *testing.T) {
	require.Panics(t, func() {
		NewFromConnection(nil)
	})
}

func Test_AzureBlob_ConfigureFromConnection(t *testing.T) {
	cfg := configureFromConnection(Config{Container: "existing", RequestTimeout: time.Second})
	require.Equal(t, "existing", cfg.Container)
	require.Equal(t, time.Second, cfg.RequestTimeout)

	require.Panics(t, func() {
		configureFromConnection(Config{})
	})
	require.Panics(t, func() {
		configureFromConnection()
	})
}

const fakeAccount = "fakeaccount"

// fakeKey is a syntactically valid (base64) shared key; the fake servers below never verify it.
var fakeKey = base64.StdEncoding.EncodeToString([]byte("fake-shared-key"))

// newFakeClient returns an azblob client for endpoint that never retries, so error
// responses and connection failures surface immediately.
func newFakeClient(t testing.TB, endpoint string) *azblob.Client {
	t.Helper()

	cred, err := azblob.NewSharedKeyCredential(fakeAccount, fakeKey)
	require.NoError(t, err)

	var opts azblob.ClientOptions
	opts.Retry.MaxRetries = -1

	client, err := azblob.NewClientWithSharedKeyCredential(endpoint+"/"+fakeAccount, cred, &opts)
	require.NoError(t, err)

	return client
}

// newFakeServerClient starts an httptest server using handler, closed when the test ends, and
// returns a client for it.
func newFakeServerClient(t testing.TB, handler http.HandlerFunc) *azblob.Client {
	t.Helper()

	srv := httptest.NewServer(handler)
	t.Cleanup(srv.Close)

	return newFakeClient(t, srv.URL)
}

// writeBlobError writes an Azure Storage style error response.
func writeBlobError(w http.ResponseWriter, status int, code bloberror.Code) {
	w.Header().Set("x-ms-error-code", string(code))
	w.Header().Set("Content-Type", "application/xml")
	w.WriteHeader(status)
	_, _ = fmt.Fprintf(w, `<?xml version="1.0" encoding="utf-8"?><Error><Code>%s</Code><Message>%s</Message></Error>`, code, code)
}

// writeBlobList writes a list-blobs response holding the named blobs.
func writeBlobList(w http.ResponseWriter, names ...string) {
	blobs := make([]string, len(names))
	for i, name := range names {
		blobs[i] = "<Blob><Name>" + name + "</Name><Properties/></Blob>"
	}

	w.Header().Set("Content-Type", "application/xml")
	_, _ = fmt.Fprintf(w, `<?xml version="1.0" encoding="utf-8"?>`+
		`<EnumerationResults ServiceEndpoint="http://x/" ContainerName="fake"><Blobs>%s</Blobs><NextMarker/></EnumerationResults>`, strings.Join(blobs, ""))
}

// newFakeStore returns a storage bound to a "fake" container on a fake server using handler.
// The container-creation request is answered with 201 by a wrapper handler, so handler only
// sees the requests issued by the test itself.
func newFakeStore(t testing.TB, handler http.HandlerFunc) *Storage {
	t.Helper()

	client := newFakeServerClient(t, func(w http.ResponseWriter, r *http.Request) {
		if r.Method == http.MethodPut && r.URL.Query().Get("restype") == "container" {
			w.WriteHeader(http.StatusCreated)
			return
		}
		handler(w, r)
	})

	return NewFromConnection(client, Config{Container: "fake"})
}

// closedEndpoint returns the URL of a listener that has been closed, so connections are refused.
func closedEndpoint(t testing.TB) string {
	t.Helper()

	l, err := net.Listen("tcp", "127.0.0.1:0")
	require.NoError(t, err)
	addr := l.Addr().String()
	require.NoError(t, l.Close())

	return "http://" + addr
}

// recoverPanic runs f and returns what it panicked with as an error, or nil if f did not panic.
func recoverPanic(f func()) (err error) {
	defer func() {
		if r := recover(); r != nil {
			err = fmt.Errorf("%v", r)
		}
	}()
	f()

	return nil
}

func Test_AzureBlob_Configure_Default(t *testing.T) {
	require.Equal(t, ConfigDefault, configure())
	require.Equal(t, 3, ConfigDefault.MaxAttempts)
}

func Test_AzureBlob_Configure_DefaultEndpoint(t *testing.T) {
	cfg := configure(Config{
		Account:     "acct",
		Container:   "box",
		Credentials: Credentials{Account: "acct", Key: fakeKey},
	})
	require.Equal(t, "https://acct.blob.core.windows.net", cfg.Endpoint)

	cfg = configure(Config{
		Account:     "acct",
		Container:   "box",
		Endpoint:    "http://localhost:1234/acct",
		Credentials: Credentials{Account: "acct", Key: fakeKey},
	})
	require.Equal(t, "http://localhost:1234/acct", cfg.Endpoint)
}

func Test_AzureBlob_ValidateConfig(t *testing.T) {
	valid := Config{
		Account:     "acct",
		Container:   "box",
		Credentials: Credentials{Account: "acct", Key: "key"},
	}

	ok, err := validateConfig(valid)
	require.NoError(t, err)
	require.True(t, ok)

	tests := []struct {
		name   string
		mutate func(*Config)
		errMsg string
	}{
		{"missing credential account", func(c *Config) { c.Credentials.Account = "" }, "credentials must not be empty"},
		{"missing credential key", func(c *Config) { c.Credentials.Key = "" }, "credentials must not be empty"},
		{"missing account", func(c *Config) { c.Account = "" }, "invalid account information provided"},
		{"missing container", func(c *Config) { c.Container = "" }, "invalid account information provided"},
		{"account mismatch", func(c *Config) { c.Credentials.Account = "other" }, "account configuration mismatch"},
	}

	for _, tc := range tests {
		t.Run(tc.name, func(t *testing.T) {
			cfg := valid
			tc.mutate(&cfg)

			ok, err := validateConfig(cfg)
			require.False(t, ok)
			require.EqualError(t, err, tc.errMsg)

			// configure must reject the same config by panicking with the error message;
			// the wording around it is not part of the contract.
			require.ErrorContains(t, recoverPanic(func() { configure(cfg) }), tc.errMsg)
		})
	}
}

func Test_AzureBlob_HandleError(t *testing.T) {
	require.NotPanics(t, func() { handleError(nil) })
	require.ErrorContains(t, recoverPanic(func() { handleError(fmt.Errorf("boom")) }), "boom")
}

func Test_AzureBlob_New_InvalidKey(t *testing.T) {
	// The shared key must be base64; anything else is rejected before any request is made.
	require.Panics(t, func() {
		New(Config{
			Account:     fakeAccount,
			Container:   "box",
			Endpoint:    closedEndpoint(t),
			Credentials: Credentials{Account: fakeAccount, Key: "not base64!!"},
		})
	})
}

func Test_AzureBlob_New_InvalidEndpoint(t *testing.T) {
	// An endpoint that is not a URL makes client construction fail.
	require.Panics(t, func() {
		New(Config{
			Account:     fakeAccount,
			Container:   "box",
			Endpoint:    "http://[::1",
			Credentials: Credentials{Account: fakeAccount, Key: fakeKey},
		})
	})
}

func Test_AzureBlob_NewWithContext_Canceled(t *testing.T) {
	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	// The server would accept the container, so only the cancelled context can abort its
	// creation, which is a fatal config error.
	endpoint := newFakeServerClient(t, func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusCreated)
	}).URL()

	require.Panics(t, func() {
		NewWithContext(ctx, Config{
			Account:     fakeAccount,
			Container:   "box",
			Endpoint:    endpoint,
			Credentials: Credentials{Account: fakeAccount, Key: fakeKey},
		})
	})
}

func Test_AzureBlob_NewFromConnection_Unreachable(t *testing.T) {
	client := newFakeClient(t, closedEndpoint(t))

	require.Panics(t, func() {
		NewFromConnection(client, Config{Container: "box"})
	})
}

func Test_AzureBlob_NewFromConnection_CreateContainerRejected(t *testing.T) {
	client := newFakeServerClient(t, func(w http.ResponseWriter, r *http.Request) {
		writeBlobError(w, http.StatusForbidden, bloberror.AuthenticationFailed)
	})

	require.Panics(t, func() {
		NewFromConnection(client, Config{Container: "box"})
	})
}

func Test_AzureBlob_NewFromConnection_ContainerAlreadyExists(t *testing.T) {
	var puts atomic.Int32

	client := newFakeServerClient(t, func(w http.ResponseWriter, r *http.Request) {
		if r.Method == http.MethodPut {
			puts.Add(1)
		}
		writeBlobError(w, http.StatusConflict, bloberror.ContainerAlreadyExists)
	})

	var store *Storage
	require.NotPanics(t, func() {
		store = NewFromConnection(client, Config{Container: "box", RequestTimeout: time.Second})
	})
	require.NotNil(t, store)
	require.Equal(t, "box", store.container)
	require.Equal(t, time.Second, store.requestTimeout)
	require.Same(t, client, store.Conn())
	require.EqualValues(t, 1, puts.Load())
}

func Test_AzureBlob_NewFromConnection_ResetFails(t *testing.T) {
	client := newFakeServerClient(t, func(w http.ResponseWriter, r *http.Request) {
		if r.Method == http.MethodPut {
			w.WriteHeader(http.StatusCreated)
			return
		}
		// Listing the blobs to reset fails.
		writeBlobError(w, http.StatusInternalServerError, bloberror.InternalError)
	})

	require.Panics(t, func() {
		NewFromConnection(client, Config{Container: "box", Reset: true})
	})

	// Without Reset the very same server is fine.
	require.NotPanics(t, func() {
		NewFromConnection(client, Config{Container: "box"})
	})
}

func Test_AzureBlob_EmptyKey(t *testing.T) {
	var requests atomic.Int32

	store := newFakeStore(t, func(w http.ResponseWriter, r *http.Request) {
		requests.Add(1)
		writeBlobError(w, http.StatusInternalServerError, bloberror.InternalError)
	})

	val, err := store.Get("")
	require.NoError(t, err)
	require.Nil(t, val)

	require.NoError(t, store.Set("", []byte("doe"), 0))
	require.NoError(t, store.Delete(""))

	ctx := context.Background()
	val, err = store.GetWithContext(ctx, "")
	require.NoError(t, err)
	require.Nil(t, val)
	require.NoError(t, store.SetWithContext(ctx, "", []byte("doe"), 0))
	require.NoError(t, store.DeleteWithContext(ctx, ""))

	// Empty keys are short-circuited before any request is sent.
	require.Zero(t, requests.Load())
}

func Test_AzureBlob_RequestContext(t *testing.T) {
	store := &Storage{}

	ctx, cancel := store.requestContext()
	defer cancel()
	_, hasDeadline := ctx.Deadline()
	require.False(t, hasDeadline)
	require.NoError(t, ctx.Err())

	store.requestTimeout = time.Hour
	ctx, cancel = store.requestContext()
	deadline, hasDeadline := ctx.Deadline()
	require.True(t, hasDeadline)
	require.WithinDuration(t, time.Now().Add(time.Hour), deadline, time.Minute)

	cancel()
	require.ErrorIs(t, ctx.Err(), context.Canceled)
}

func Test_AzureBlob_RequestTimeout(t *testing.T) {
	release := make(chan struct{})

	store := newFakeStore(t, func(w http.ResponseWriter, r *http.Request) {
		select {
		case <-release:
		case <-r.Context().Done():
		}
	})
	store.requestTimeout = 50 * time.Millisecond
	// Registered after the server's cleanup so it runs first and unblocks any pending handler.
	t.Cleanup(func() { close(release) })

	_, err := store.Get("john")
	require.ErrorIs(t, err, context.DeadlineExceeded)

	err = store.Set("john", []byte("doe"), 0)
	require.ErrorIs(t, err, context.DeadlineExceeded)

	err = store.Delete("john")
	require.ErrorIs(t, err, context.DeadlineExceeded)

	err = store.Reset()
	require.ErrorIs(t, err, context.DeadlineExceeded)
}

func Test_AzureBlob_ServerErrors(t *testing.T) {
	store := newFakeStore(t, func(w http.ResponseWriter, r *http.Request) {
		switch {
		case r.Method == http.MethodGet && strings.HasSuffix(r.URL.Path, "/missing"):
			writeBlobError(w, http.StatusNotFound, bloberror.BlobNotFound)
		case r.Method == http.MethodDelete:
			writeBlobError(w, http.StatusNotFound, bloberror.BlobNotFound)
		default:
			writeBlobError(w, http.StatusForbidden, bloberror.AuthorizationFailure)
		}
	})

	val, err := store.Get("missing")
	require.True(t, bloberror.HasCode(err, bloberror.BlobNotFound))
	require.Empty(t, val)

	val, err = store.Get("forbidden")
	require.True(t, bloberror.HasCode(err, bloberror.AuthorizationFailure))
	require.Empty(t, val)

	err = store.Set("john", []byte("doe"), 0)
	require.True(t, bloberror.HasCode(err, bloberror.AuthorizationFailure))

	err = store.Delete("missing")
	require.True(t, bloberror.HasCode(err, bloberror.BlobNotFound))

	err = store.Reset()
	require.True(t, bloberror.HasCode(err, bloberror.AuthorizationFailure))
}

func Test_AzureBlob_Get_TruncatedBody(t *testing.T) {
	store := newFakeStore(t, func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Length", "10")
		w.WriteHeader(http.StatusOK)
		_, _ = w.Write([]byte("abc"))
		w.(http.Flusher).Flush()
		// Abort the connection before the announced body has been sent.
		panic(http.ErrAbortHandler)
	})

	val, err := store.Get("john")
	require.ErrorIs(t, err, io.ErrUnexpectedEOF)
	require.LessOrEqual(t, len(val), 3)
}

func Test_AzureBlob_Reset_DeleteFails(t *testing.T) {
	var deletes atomic.Int32

	store := newFakeStore(t, func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {
		case http.MethodGet:
			writeBlobList(w, "john1", "john2")
		case http.MethodDelete:
			deletes.Add(1)
			writeBlobError(w, http.StatusForbidden, bloberror.AuthorizationFailure)
		}
	})

	err := store.Reset()
	require.True(t, bloberror.HasCode(err, bloberror.AuthorizationFailure))

	// The first failed delete aborts the reset.
	require.EqualValues(t, 1, deletes.Load())
}

func Test_AzureBlob_Reset_DeletesAllListed(t *testing.T) {
	var deleted []string

	store := newFakeStore(t, func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {
		case http.MethodGet:
			writeBlobList(w, "john1", "john2")
		case http.MethodDelete:
			deleted = append(deleted, r.URL.Path)
			w.WriteHeader(http.StatusAccepted)
		}
	})

	require.NoError(t, store.Reset())
	require.Equal(t, []string{"/" + fakeAccount + "/fake/john1", "/" + fakeAccount + "/fake/john2"}, deleted)
}
