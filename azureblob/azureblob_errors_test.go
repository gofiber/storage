package azureblob

import (
	"context"
	"encoding/base64"
	"fmt"
	"io"
	"net"
	"net/http"
	"net/http/httptest"
	"strings"
	"sync/atomic"
	"testing"
	"time"

	"github.com/Azure/azure-sdk-for-go/sdk/storage/azblob"
	"github.com/Azure/azure-sdk-for-go/sdk/storage/azblob/bloberror"
	"github.com/stretchr/testify/require"
)

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

// writeBlobError writes an Azure Storage style error response.
func writeBlobError(w http.ResponseWriter, status int, code bloberror.Code) {
	w.Header().Set("x-ms-error-code", string(code))
	w.Header().Set("Content-Type", "application/xml")
	w.WriteHeader(status)
	_, _ = fmt.Fprintf(w, `<?xml version="1.0" encoding="utf-8"?><Error><Code>%s</Code><Message>%s</Message></Error>`, code, code)
}

// newFakeStore starts an httptest server using handler and returns a storage bound to a
// "fake" container on it. The container-creation request is answered with 201 by the
// wrapper handler, so handler only sees the requests issued by the test itself.
func newFakeStore(t testing.TB, handler http.HandlerFunc, timeout time.Duration) *Storage {
	t.Helper()

	srv := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if r.Method == http.MethodPut && r.URL.Query().Get("restype") == "container" {
			w.WriteHeader(http.StatusCreated)
			return
		}
		handler(w, r)
	}))
	t.Cleanup(srv.Close)

	return NewFromConnection(newFakeClient(t, srv.URL), Config{Container: "fake", RequestTimeout: timeout})
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

			// configure must reject the same config by panicking with the error message.
			require.PanicsWithValue(t, "invalid config:, "+tc.errMsg, func() {
				configure(cfg)
			})
		})
	}
}

func Test_AzureBlob_HandleError(t *testing.T) {
	require.NotPanics(t, func() { handleError(nil) })
	require.PanicsWithValue(t, "invalid config:, boom", func() {
		handleError(fmt.Errorf("boom"))
	})
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

	// The cancelled context aborts the container creation, which is a fatal config error.
	require.Panics(t, func() {
		NewWithContext(ctx, Config{
			Account:     fakeAccount,
			Container:   "box",
			Endpoint:    closedEndpoint(t) + "/" + fakeAccount,
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
	srv := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		writeBlobError(w, http.StatusForbidden, bloberror.AuthenticationFailed)
	}))
	defer srv.Close()

	client := newFakeClient(t, srv.URL)

	require.Panics(t, func() {
		NewFromConnection(client, Config{Container: "box"})
	})
}

func Test_AzureBlob_NewFromConnection_ContainerAlreadyExists(t *testing.T) {
	var puts atomic.Int32

	srv := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if r.Method == http.MethodPut {
			puts.Add(1)
		}
		writeBlobError(w, http.StatusConflict, bloberror.ContainerAlreadyExists)
	}))
	defer srv.Close()

	client := newFakeClient(t, srv.URL)

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
	srv := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if r.Method == http.MethodPut {
			w.WriteHeader(http.StatusCreated)
			return
		}
		// Listing the blobs to reset fails.
		writeBlobError(w, http.StatusInternalServerError, bloberror.InternalError)
	}))
	defer srv.Close()

	client := newFakeClient(t, srv.URL)

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
	}, 0)

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
	}, 50*time.Millisecond)
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
	}, 0)

	val, err := store.Get("missing")
	require.Error(t, err)
	require.True(t, bloberror.HasCode(err, bloberror.BlobNotFound))
	require.Empty(t, val)

	val, err = store.Get("forbidden")
	require.Error(t, err)
	require.True(t, bloberror.HasCode(err, bloberror.AuthorizationFailure))
	require.Empty(t, val)

	err = store.Set("john", []byte("doe"), 0)
	require.Error(t, err)
	require.True(t, bloberror.HasCode(err, bloberror.AuthorizationFailure))

	err = store.Delete("missing")
	require.Error(t, err)
	require.True(t, bloberror.HasCode(err, bloberror.BlobNotFound))

	err = store.Reset()
	require.Error(t, err)
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
	}, 0)

	val, err := store.Get("john")
	require.ErrorIs(t, err, io.ErrUnexpectedEOF)
	require.LessOrEqual(t, len(val), 3)
}

func Test_AzureBlob_Reset_DeleteFails(t *testing.T) {
	var deletes atomic.Int32

	store := newFakeStore(t, func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {
		case http.MethodGet:
			w.Header().Set("Content-Type", "application/xml")
			_, _ = w.Write([]byte(`<?xml version="1.0" encoding="utf-8"?>` +
				`<EnumerationResults ServiceEndpoint="http://x/" ContainerName="fake"><Blobs>` +
				`<Blob><Name>john1</Name><Properties/></Blob>` +
				`<Blob><Name>john2</Name><Properties/></Blob>` +
				`</Blobs><NextMarker/></EnumerationResults>`))
		case http.MethodDelete:
			deletes.Add(1)
			writeBlobError(w, http.StatusForbidden, bloberror.AuthorizationFailure)
		}
	}, 0)

	err := store.Reset()
	require.Error(t, err)
	require.True(t, bloberror.HasCode(err, bloberror.AuthorizationFailure))

	// The first failed delete aborts the reset.
	require.EqualValues(t, 1, deletes.Load())
}

func Test_AzureBlob_Reset_DeletesAllListed(t *testing.T) {
	var deleted []string

	store := newFakeStore(t, func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {
		case http.MethodGet:
			w.Header().Set("Content-Type", "application/xml")
			_, _ = w.Write([]byte(`<?xml version="1.0" encoding="utf-8"?>` +
				`<EnumerationResults ServiceEndpoint="http://x/" ContainerName="fake"><Blobs>` +
				`<Blob><Name>john1</Name><Properties/></Blob>` +
				`<Blob><Name>john2</Name><Properties/></Blob>` +
				`</Blobs><NextMarker/></EnumerationResults>`))
		case http.MethodDelete:
			deleted = append(deleted, r.URL.Path)
			w.WriteHeader(http.StatusAccepted)
		}
	}, 0)

	require.NoError(t, store.Reset())
	require.Equal(t, []string{"/" + fakeAccount + "/fake/john1", "/" + fakeAccount + "/fake/john2"}, deleted)
}
