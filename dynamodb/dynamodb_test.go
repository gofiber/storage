package dynamodb

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"hash/crc32"
	"io"
	"net/http"
	"net/http/httptest"
	"os"
	"strconv"
	"strings"
	"sync"
	"syscall"
	"testing"
	"time"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/credentials"
	awsdynamodb "github.com/aws/aws-sdk-go-v2/service/dynamodb"
	"github.com/stretchr/testify/require"
	"github.com/testcontainers/testcontainers-go"
	"github.com/testcontainers/testcontainers-go/modules/dynamodb"
	"github.com/testcontainers/testcontainers-go/wait"
)

const (
	// dynamoDBImage is the default image used for running DynamoDB in tests.
	dynamoDBImage              = "public.ecr.aws/aws-dynamodb-local/aws-dynamodb-local:latest"
	dynamoDBImageEnvVar string = "TEST_DYNAMODB_IMAGE"
	// dynamoDBPort is the port DynamoDB local listens on inside the container.
	dynamoDBPort = "8000/tcp"
)

// newTestEndpoint starts a DynamoDB local testcontainer and returns the HTTP
// endpoint to connect to it.
func newTestEndpoint(t testing.TB) string {
	t.Helper()

	img := dynamoDBImage
	if imgFromEnv := os.Getenv(dynamoDBImageEnvVar); imgFromEnv != "" {
		img = imgFromEnv
	}

	ctx := context.Background()

	// The module's default wait strategy only waits for the TCP port to open.
	// DynamoDB local (a Java process) accepts connections before it is ready to
	// serve API calls and resets those early requests ("connection reset by
	// peer"). Wait until it actually answers HTTP requests so New does not race
	// the container startup.
	c, err := dynamodb.Run(ctx, img,
		dynamodb.WithDisableTelemetry(),
		testcontainers.WithWaitStrategy(
			wait.ForListeningPort(dynamoDBPort),
			wait.ForHTTP("/").
				WithPort(dynamoDBPort).
				WithStartupTimeout(60*time.Second).
				// DynamoDB local replies to any plain HTTP request once it is
				// serving, so a non-5xx status means the API is up.
				WithStatusCodeMatcher(func(status int) bool {
					return status > 0 && status < http.StatusInternalServerError
				}),
		),
	)
	testcontainers.CleanupContainer(t, c)
	require.NoError(t, err)

	hostPort, err := c.ConnectionString(ctx)
	require.NoError(t, err)

	return "http://" + hostPort
}

func newTestStore(t testing.TB) *Storage {
	t.Helper()

	return newStore(t, newTestEndpoint(t))
}

// newTestConfig builds the Config used by the tests for the given endpoint.
func newTestConfig(endpoint string) Config {
	return Config{
		Table:    "fiber_storage",
		Endpoint: endpoint,
		Region:   "us-east-1",
		Credentials: Credentials{
			AccessKey:       "dummy",
			SecretAccessKey: "dummy",
		},
		Reset: true,
	}
}

// newStore builds a Storage from the given endpoint. New panics on any
// connection error (the public API has no error return), so a transient
// container hiccup would crash the whole test binary and defeat gotestsum's
// --rerun-fails. Recover here and turn it into a normal test failure that can
// be retried instead.
func newStore(t testing.TB, endpoint string) (s *Storage) {
	t.Helper()

	defer func() {
		if r := recover(); r != nil {
			t.Fatalf("dynamodb: New panicked while connecting to %s: %v", endpoint, r)
		}
	}()

	return New(newTestConfig(endpoint))
}

func Test_DynamoDB_Set(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)
}

func Test_DynamoDB_NewWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	cfg := newTestConfig(newTestEndpoint(t))

	testStore := NewWithContext(context.Background(), cfg)
	require.NotNil(t, testStore)
	defer testStore.Close()

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)
}

func Test_DynamoDB_SetWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.SetWithContext(ctx, key, val, 0)
	require.ErrorIs(t, err, context.Canceled)
}

func Test_DynamoDB_Set_Override(t *testing.T) {
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

func Test_DynamoDB_Get(t *testing.T) {
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

func Test_DynamoDB_GetWithContext(t *testing.T) {
	var (
		key = "john"
	)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	testStore := newTestStore(t)
	defer testStore.Close()

	result, err := testStore.GetWithContext(ctx, key)
	require.ErrorIs(t, err, context.Canceled)
	require.Zero(t, len(result))
}

func Test_DynamoDB_Get_NotExist(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	result, err := testStore.Get("notexist")
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_DynamoDB_Delete(t *testing.T) {
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
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_DynamoDB_DeleteWithContext(t *testing.T) {
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

func Test_DynamoDB_Reset(t *testing.T) {
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
	require.NoError(t, err)
	require.Zero(t, len(result))

	result, err = testStore.Get("john2")
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_DynamoDB_ResetWithContext(t *testing.T) {
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

func Test_DynamoDB_Close(t *testing.T) {
	testStore := newTestStore(t)
	require.Nil(t, testStore.Close())
}

func Test_DynamoDB_Conn(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	require.True(t, testStore.Conn() != nil)
}

func Benchmark_DynamoDB_Set(b *testing.B) {
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

func Benchmark_DynamoDB_Get(b *testing.B) {
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

func Benchmark_DynamoDB_SetAndDelete(b *testing.B) {
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

func Test_DynamoDB_NewFromConnection(t *testing.T) {
	owner := newTestStore(t)
	defer owner.Close()

	testStore := NewFromConnection(owner.Conn(), Config{Table: "fiber_storage_existing"})
	require.Same(t, owner.Conn(), testStore.Conn())

	var (
		key = "john"
		val = []byte("doe")
	)

	require.NoError(t, testStore.Set(key, val, 0))

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)

	// Reset clears the table's entries, so a storage built with it starts empty.
	fresh := NewFromConnection(owner.Conn(), Config{Table: "fiber_storage_existing", Reset: true})
	gone, err := fresh.Get(key)
	require.NoError(t, err)
	require.Nil(t, gone)

	// The client is the caller's, so closing this storage must leave it usable.
	require.NoError(t, testStore.Close())
	require.NoError(t, owner.Set(key, val, 0))
}

func Test_DynamoDB_NewFromConnection_Nil(t *testing.T) {
	require.Panics(t, func() {
		NewFromConnection(nil, Config{})
	})
}

// These tests exercise the storage against an in-process HTTP server that speaks just enough of
// the DynamoDB JSON protocol to return crafted responses (errors, pagination, unprocessed items),
// so error paths that DynamoDB local cannot be made to produce run without a container.

// fakeTable is the table the storages built on the fake server work with: the default one, as they
// configure none.
var fakeTable = ConfigDefault.Table

const (
	errNotFound   = "ResourceNotFoundException"
	errAccessDeny = "AccessDeniedException"
)

// fakeHandler answers one DynamoDB operation. call is the 1-based number of the call to that
// operation, and body is the raw JSON request body.
type fakeHandler func(w http.ResponseWriter, call int, body []byte)

// fakeDynamo is an httptest server dispatching on the X-Amz-Target header.
type fakeDynamo struct {
	t        *testing.T
	server   *httptest.Server
	mu       sync.Mutex
	counts   map[string]int
	handlers map[string]fakeHandler
	// auth records the Authorization header of every request.
	auth []string
}

func newFakeDynamo(t *testing.T, handlers map[string]fakeHandler) *fakeDynamo {
	t.Helper()

	f := &fakeDynamo{t: t, counts: map[string]int{}, handlers: handlers}
	f.server = httptest.NewServer(http.HandlerFunc(f.serve))
	t.Cleanup(f.server.Close)

	return f
}

func (f *fakeDynamo) serve(w http.ResponseWriter, r *http.Request) {
	op := targetOperation(r)
	body, _ := io.ReadAll(r.Body)

	f.mu.Lock()
	f.counts[op]++
	call := f.counts[op]
	f.auth = append(f.auth, r.Header.Get("Authorization"))
	h := f.handlers[op]
	f.mu.Unlock()

	if h == nil {
		f.t.Errorf("unexpected DynamoDB operation %q", op)
		writeAWSError(w, "UnknownOperationException")
		return
	}

	h(w, call, body)
}

// calls returns how many times op has been called.
func (f *fakeDynamo) calls(op string) int {
	f.mu.Lock()
	defer f.mu.Unlock()

	return f.counts[op]
}

// client returns a client for the server that never retries, so failures surface on first call.
// The optional hook sees every request the client makes.
func (f *fakeDynamo) client(hook ...*hookDoer) *awsdynamodb.Client {
	opts := awsdynamodb.Options{
		Region:       "us-east-1",
		BaseEndpoint: aws.String(f.server.URL),
		Credentials:  credentials.NewStaticCredentialsProvider("dummy", "dummy", ""),
		Retryer:      aws.NopRetryer{},
	}
	if len(hook) > 0 {
		opts.HTTPClient = hook[0]
	}

	return awsdynamodb.New(opts)
}

func targetOperation(r *http.Request) string {
	target := r.Header.Get("X-Amz-Target")
	if i := strings.LastIndex(target, "."); i >= 0 {
		return target[i+1:]
	}

	return target
}

// writeBody sends a JSON body with the CRC32 header DynamoDB adds, which the SDK verifies.
func writeBody(w http.ResponseWriter, status int, v any) {
	body, _ := json.Marshal(v)

	w.Header().Set("Content-Type", "application/x-amz-json-1.0")
	w.Header().Set("X-Amz-Crc32", strconv.FormatUint(uint64(crc32.ChecksumIEEE(body)), 10))
	w.WriteHeader(status)
	_, _ = w.Write(body)
}

func writeJSON(w http.ResponseWriter, v any) {
	writeBody(w, http.StatusOK, v)
}

// writeOK sends the empty body DynamoDB answers with when a call has nothing to return.
func writeOK(w http.ResponseWriter) {
	writeJSON(w, map[string]any{})
}

func writeAWSError(w http.ResponseWriter, code string) {
	writeBody(w, http.StatusBadRequest, map[string]string{
		"__type":  "com.amazonaws.dynamodb.v20120810#" + code,
		"message": code,
	})
}

func respondJSON(v any) fakeHandler {
	return func(w http.ResponseWriter, _ int, _ []byte) { writeJSON(w, v) }
}

func respondError(code string) fakeHandler {
	return func(w http.ResponseWriter, _ int, _ []byte) { writeAWSError(w, code) }
}

// respondOK always answers with writeOK.
func respondOK(w http.ResponseWriter, _ int, _ []byte) {
	writeOK(w)
}

// scripted answers the n-th call with the n-th step, and every call past the last step with the
// last one, so a test can lay out how an operation behaves over time.
func scripted(steps ...fakeHandler) fakeHandler {
	return func(w http.ResponseWriter, call int, body []byte) {
		steps[min(call, len(steps))-1](w, call, body)
	}
}

func tableDescription(status string) map[string]any {
	return map[string]any{"Table": map[string]any{"TableName": fakeTable, "TableStatus": status}}
}

// hookDoer is an HTTP client that lets a test act right before a request is sent and right after
// its response has been fully received, e.g. to cancel a context at an exact point of a flow.
type hookDoer struct {
	mu     sync.Mutex
	counts map[string]int
	before func(op string, call int)
	after  func(op string, call int)
}

func (d *hookDoer) Do(req *http.Request) (*http.Response, error) {
	op := targetOperation(req)

	d.mu.Lock()
	if d.counts == nil {
		d.counts = map[string]int{}
	}
	d.counts[op]++
	call := d.counts[op]
	d.mu.Unlock()

	if d.before != nil {
		d.before(op, call)
	}

	resp, err := http.DefaultClient.Do(req)
	if err != nil || d.after == nil {
		return resp, err
	}

	body, err := io.ReadAll(resp.Body)
	_ = resp.Body.Close()
	if err != nil {
		return nil, err
	}
	resp.Body = io.NopCloser(bytes.NewReader(body))

	d.after(op, call)

	return resp, nil
}

// recovered runs fn and returns the value it panicked with, failing the test if it did not panic.
func recovered(t *testing.T, fn func()) (r any) {
	t.Helper()

	defer func() {
		r = recover()
		require.NotNil(t, r, "expected a panic")
	}()

	fn()

	return nil
}

// recoveredError runs fn, which must panic with an error, and returns that error.
func recoveredError(t *testing.T, fn func()) error {
	t.Helper()

	r := recovered(t, fn)
	err, ok := r.(error)
	require.True(t, ok, "expected a panic with an error, got %T: %v", r, r)

	return err
}

// requireAPIError asserts that err carries the AWS API error code the server answered with. The
// SDK exposes it through smithy.APIError, which the interface below mirrors, so the check does not
// depend on how the SDK words the message.
func requireAPIError(t *testing.T, err error, code string) {
	t.Helper()

	var apiErr interface{ ErrorCode() string }
	require.ErrorAs(t, err, &apiErr)
	require.Equal(t, code, apiErr.ErrorCode())
}

// requestKeys decodes a BatchWriteItem body into the delete-request keys for the fake table.
func requestKeys(t *testing.T, body []byte) []string {
	t.Helper()

	var req struct {
		RequestItems map[string][]struct {
			DeleteRequest struct {
				Key map[string]struct{ S string }
			}
		}
	}
	require.NoError(t, json.Unmarshal(body, &req))

	var keys []string
	for _, wr := range req.RequestItems[fakeTable] {
		keys = append(keys, wr.DeleteRequest.Key[keyAttrName].S)
	}

	return keys
}

func Test_DynamoDB_ConfigDefault_NoArgs(t *testing.T) {
	require.Equal(t, ConfigDefault, configDefault())
}

func Test_DynamoDB_ConfigDefault_KeepsOverrides(t *testing.T) {
	cfg := configDefault(Config{
		Table:                "custom",
		MaxAttempts:          7,
		ReadCapacityUnits:    11,
		WriteCapacityUnits:   13,
		WaitForTableCreation: aws.Bool(false),
	})

	require.Equal(t, "custom", cfg.Table)
	require.Equal(t, 7, cfg.MaxAttempts)
	require.Equal(t, int64(11), cfg.ReadCapacityUnits)
	require.Equal(t, int64(13), cfg.WriteCapacityUnits)
	require.False(t, *cfg.WaitForTableCreation)
}

func Test_DynamoDB_BackoffDelay(t *testing.T) {
	require.Equal(t, batchWriteBaseDelay, backoffDelay(1))
	require.Equal(t, 2*batchWriteBaseDelay, backoffDelay(2))
	require.Equal(t, 4*batchWriteBaseDelay, backoffDelay(3))
	// Capped once doubling passes the maximum.
	require.Equal(t, batchWriteMaxDelay, backoffDelay(7))
	// A shift large enough to overflow still yields the cap rather than a zero or negative pause.
	require.Equal(t, batchWriteMaxDelay, backoffDelay(64))
	require.Equal(t, batchWriteMaxDelay, backoffDelay(100))
}

func Test_DynamoDB_SleepCtx(t *testing.T) {
	require.NoError(t, sleepCtx(context.Background(), 0))

	ctx, cancel := context.WithCancel(context.Background())
	cancel()
	require.ErrorIs(t, sleepCtx(ctx, time.Hour), context.Canceled)
}

// isolateAWSEnv keeps the SDK from picking up the developer's AWS profile and shared files while a
// test loads its config.
func isolateAWSEnv(t *testing.T) {
	t.Helper()

	t.Setenv("AWS_PROFILE", "")
	t.Setenv("AWS_CONFIG_FILE", t.TempDir()+"/missing-config")
	t.Setenv("AWS_SHARED_CREDENTIALS_FILE", t.TempDir()+"/missing-credentials")
}

func Test_DynamoDB_NewWithContext_FakeEndpoint(t *testing.T) {
	isolateAWSEnv(t)

	fake := newFakeDynamo(t, map[string]fakeHandler{
		"DescribeTable": respondJSON(tableDescription("ACTIVE")),
		"PutItem":       respondOK,
	})

	store := NewWithContext(context.Background(), Config{
		Table:       fakeTable,
		Endpoint:    fake.server.URL,
		Region:      "us-east-1",
		Credentials: Credentials{AccessKey: "static-key", SecretAccessKey: "static-secret"},
		MaxAttempts: 1,
	})
	require.NoError(t, store.Set("k1", []byte("v1"), 0))

	// The table exists, so it must not be created, and the static credentials sign the requests.
	require.Equal(t, 1, fake.calls("DescribeTable"))
	require.Equal(t, 0, fake.calls("CreateTable"))
	require.Contains(t, fake.auth[len(fake.auth)-1], "Credential=static-key/")
}

func Test_DynamoDB_NewWithContext_EnvCredentials(t *testing.T) {
	isolateAWSEnv(t)
	t.Setenv("AWS_ACCESS_KEY_ID", "env-key")
	t.Setenv("AWS_SECRET_ACCESS_KEY", "env-secret")
	t.Setenv("AWS_SESSION_TOKEN", "")

	fake := newFakeDynamo(t, map[string]fakeHandler{
		"DescribeTable": respondJSON(tableDescription("ACTIVE")),
		"PutItem":       respondOK,
	})

	// No Credentials in the config: the default AWS credential chain provides them.
	store := NewWithContext(context.Background(), Config{
		Table:    fakeTable,
		Endpoint: fake.server.URL,
		Region:   "eu-west-1",
	})
	require.NoError(t, store.Set("k1", []byte("v1"), 0))

	require.Contains(t, fake.auth[len(fake.auth)-1], "Credential=env-key/")
	require.Contains(t, fake.auth[len(fake.auth)-1], "/eu-west-1/dynamodb/")
}

func Test_DynamoDB_NewWithContext_InvalidSDKConfig(t *testing.T) {
	isolateAWSEnv(t)
	// Selecting a profile that does not exist makes loading the shared config fail.
	t.Setenv("AWS_PROFILE", "profile-that-does-not-exist")

	for name, creds := range map[string]Credentials{
		"default credentials": {},
		"static credentials":  {AccessKey: "a", SecretAccessKey: "b"},
	} {
		t.Run(name, func(t *testing.T) {
			r := recovered(t, func() {
				NewWithContext(context.Background(), Config{Region: "us-east-1", Endpoint: "http://127.0.0.1:1", Credentials: creds})
			})
			require.Contains(t, r, "unable to load SDK config")
			require.Contains(t, r, "profile-that-does-not-exist")
		})
	}
}

func Test_DynamoDB_New_UnreachableEndpoint(t *testing.T) {
	isolateAWSEnv(t)

	// A listener that was closed leaves a port nothing answers on.
	srv := httptest.NewServer(http.NotFoundHandler())
	endpoint := srv.URL
	srv.Close()

	err := recoveredError(t, func() {
		New(Config{
			Table:       fakeTable,
			Endpoint:    endpoint,
			Region:      "us-east-1",
			Credentials: Credentials{AccessKey: "dummy", SecretAccessKey: "dummy"},
			MaxAttempts: 1,
		})
	})
	require.ErrorIs(t, err, syscall.ECONNREFUSED)
}

func Test_DynamoDB_NewFromConnection_DescribeError(t *testing.T) {
	fake := newFakeDynamo(t, map[string]fakeHandler{
		"DescribeTable": respondError(errAccessDeny),
	})

	err := recoveredError(t, func() {
		NewFromConnection(fake.client(), Config{})
	})
	requireAPIError(t, err, errAccessDeny)
	require.Equal(t, 0, fake.calls("CreateTable"))
}

func Test_DynamoDB_NewFromConnection_DescribeTimeout(t *testing.T) {
	// The parent context is already done, so describing the table fails before any request.
	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	fake := newFakeDynamo(t, map[string]fakeHandler{})

	err := recoveredError(t, func() {
		NewFromConnectionWithContext(ctx, fake.client(), Config{})
	})
	require.ErrorIs(t, err, context.Canceled)
}

func Test_DynamoDB_NewFromConnection_CreatesMissingTable(t *testing.T) {
	var created map[string]any

	fake := newFakeDynamo(t, map[string]fakeHandler{
		"DescribeTable": scripted(
			respondError(errNotFound),
			respondJSON(tableDescription("CREATING")),
			respondJSON(tableDescription("ACTIVE")),
		),
		"CreateTable": func(w http.ResponseWriter, _ int, body []byte) {
			require.NoError(t, json.Unmarshal(body, &created))
			writeOK(w)
		},
	})

	// The first wait iteration sees CREATING and sleeps a second before seeing ACTIVE.
	store := NewFromConnection(fake.client(), Config{
		Table:              "custom_table",
		ReadCapacityUnits:  7,
		WriteCapacityUnits: 9,
	})
	require.NotNil(t, store)

	require.Equal(t, "custom_table", created["TableName"])
	require.Equal(t, map[string]any{"ReadCapacityUnits": float64(7), "WriteCapacityUnits": float64(9)}, created["ProvisionedThroughput"])
	// The existence check, the two polls of the wait, and the final check.
	require.Equal(t, 4, fake.calls("DescribeTable"))
}

func Test_DynamoDB_NewFromConnection_CreateTableError(t *testing.T) {
	fake := newFakeDynamo(t, map[string]fakeHandler{
		"DescribeTable": respondError(errNotFound),
		"CreateTable":   respondError(errAccessDeny),
	})

	err := recoveredError(t, func() {
		NewFromConnection(fake.client(), Config{})
	})
	requireAPIError(t, err, errAccessDeny)
}

func Test_DynamoDB_NewFromConnection_NoWaitForTableCreation(t *testing.T) {
	fake := newFakeDynamo(t, map[string]fakeHandler{
		"DescribeTable": respondError(errNotFound),
		"CreateTable":   respondOK,
	})

	store := NewFromConnection(fake.client(), Config{WaitForTableCreation: aws.Bool(false)})
	require.NotNil(t, store)

	// Without waiting, only the initial existence check is made.
	require.Equal(t, 1, fake.calls("DescribeTable"))
	require.Equal(t, 1, fake.calls("CreateTable"))
}

func Test_DynamoDB_NewFromConnection_CreateTableCancelled(t *testing.T) {
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	fake := newFakeDynamo(t, map[string]fakeHandler{
		"DescribeTable": respondError(errNotFound),
		"CreateTable":   respondOK,
	})

	// Cancel once the table has been created, as a caller giving up while the wait begins.
	hook := &hookDoer{after: func(op string, _ int) {
		if op == "CreateTable" {
			cancel()
		}
	}}

	err := recoveredError(t, func() {
		NewFromConnectionWithContext(ctx, fake.client(hook), Config{})
	})
	require.ErrorIs(t, err, context.Canceled)
	// The wait loop bails out before polling the table.
	require.Equal(t, 1, fake.calls("DescribeTable"))
}

func Test_DynamoDB_NewFromConnection_FinalDescribeCancelled(t *testing.T) {
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	fake := newFakeDynamo(t, map[string]fakeHandler{
		"DescribeTable": scripted(
			respondError(errNotFound),
			respondJSON(tableDescription("ACTIVE")),
		),
		"CreateTable": respondOK,
	})

	// The wait loop sees ACTIVE straight away; the context ends before the final check, the
	// third description of the table.
	hook := &hookDoer{before: func(op string, call int) {
		if op == "DescribeTable" && call == 3 {
			cancel()
		}
	}}

	err := recoveredError(t, func() {
		NewFromConnectionWithContext(ctx, fake.client(hook), Config{})
	})
	require.ErrorIs(t, err, context.Canceled)
}

func Test_DynamoDB_NewFromConnection_FinalDescribeFails(t *testing.T) {
	fake := newFakeDynamo(t, map[string]fakeHandler{
		"DescribeTable": scripted(
			respondError(errNotFound),
			respondJSON(tableDescription("ACTIVE")),
			respondError(errNotFound),
		),
		"CreateTable": respondOK,
	})

	require.PanicsWithError(t, "dynamodb: the table couldn't be created", func() {
		NewFromConnection(fake.client(), Config{})
	})
}

func Test_DynamoDB_NewFromConnection_TableStillCreating(t *testing.T) {
	fake := newFakeDynamo(t, map[string]fakeHandler{
		"DescribeTable": scripted(
			respondError(errNotFound),
			respondJSON(tableDescription("ACTIVE")),
			respondJSON(tableDescription("CREATING")),
		),
		"CreateTable": respondOK,
	})

	require.PanicsWithError(t, "dynamodb: the table took too long to be created", func() {
		NewFromConnection(fake.client(), Config{})
	})
}

func Test_DynamoDB_NewFromConnection_ResetError(t *testing.T) {
	fake := newFakeDynamo(t, map[string]fakeHandler{
		"DescribeTable": respondJSON(tableDescription("ACTIVE")),
		"Scan":          respondError(errAccessDeny),
	})

	err := recoveredError(t, func() {
		NewFromConnection(fake.client(), Config{Reset: true})
	})
	requireAPIError(t, err, errAccessDeny)
}

// newFakeStore returns a Storage on a fake server whose table exists, which also serves handlers.
// The optional hook sees every request the Storage's client makes.
func newFakeStore(t *testing.T, handlers map[string]fakeHandler, hook ...*hookDoer) (*Storage, *fakeDynamo) {
	t.Helper()

	handlers["DescribeTable"] = respondJSON(tableDescription("ACTIVE"))
	fake := newFakeDynamo(t, handlers)

	return NewFromConnection(fake.client(hook...), Config{}), fake
}

func Test_DynamoDB_Get_Miss(t *testing.T) {
	for name, handler := range map[string]fakeHandler{
		// A table that is gone holds no entries, which reads as a plain miss.
		"table missing": respondError(errNotFound),
		"no item":       respondOK,
	} {
		t.Run(name, func(t *testing.T) {
			store, _ := newFakeStore(t, map[string]fakeHandler{"GetItem": handler})

			val, err := store.Get("key")
			require.NoError(t, err)
			require.Nil(t, val)
		})
	}
}

func Test_DynamoDB_Get_Error(t *testing.T) {
	store, _ := newFakeStore(t, map[string]fakeHandler{
		"GetItem": respondError(errAccessDeny),
	})

	val, err := store.Get("key")
	requireAPIError(t, err, errAccessDeny)
	require.Nil(t, val)
}

func Test_DynamoDB_Get_MalformedItem(t *testing.T) {
	store, _ := newFakeStore(t, map[string]fakeHandler{
		"GetItem": respondJSON(map[string]any{
			"Item": map[string]any{
				"k": map[string]any{"S": "key"},
				"v": map[string]any{"BOOL": true},
			},
		}),
	})

	// A value that is not binary cannot be decoded and must be reported rather than returned.
	val, err := store.Get("key")
	require.Error(t, err)
	require.Empty(t, val)
}

func Test_DynamoDB_Get_ItemValue(t *testing.T) {
	var gotKey string

	store, _ := newFakeStore(t, map[string]fakeHandler{
		"GetItem": func(w http.ResponseWriter, _ int, body []byte) {
			var req struct {
				TableName string
				Key       map[string]struct{ S string }
			}
			require.NoError(t, json.Unmarshal(body, &req))
			require.Equal(t, fakeTable, req.TableName)
			gotKey = req.Key[keyAttrName].S

			// "doe" in base64.
			writeJSON(w, map[string]any{"Item": map[string]any{
				"k": map[string]any{"S": gotKey},
				"v": map[string]any{"B": "ZG9l"},
			}})
		},
	})

	val, err := store.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), val)
	require.Equal(t, "john", gotKey)
}

func Test_DynamoDB_Set_EmptyKeyOrValue(t *testing.T) {
	store, fake := newFakeStore(t, map[string]fakeHandler{})

	require.NoError(t, store.Set("", []byte("val"), 0))
	require.NoError(t, store.Set("key", nil, 0))
	require.NoError(t, store.Set("key", []byte{}, 0))

	// Nothing is stored for them, so no request is made.
	require.Equal(t, 0, fake.calls("PutItem"))
}

func Test_DynamoDB_Set_SendsKeyAndValue(t *testing.T) {
	store, _ := newFakeStore(t, map[string]fakeHandler{
		"PutItem": func(w http.ResponseWriter, _ int, body []byte) {
			var req struct {
				TableName string
				Item      map[string]map[string]string
			}
			require.NoError(t, json.Unmarshal(body, &req))
			require.Equal(t, fakeTable, req.TableName)
			require.Equal(t, "john", req.Item[keyAttrName]["S"])
			require.Equal(t, "ZG9l", req.Item[valAttrName]["B"])
			writeOK(w)
		},
	})

	require.NoError(t, store.Set("john", []byte("doe"), 0))
}

func Test_DynamoDB_Delete_EmptyKey(t *testing.T) {
	store, fake := newFakeStore(t, map[string]fakeHandler{})

	require.NoError(t, store.Delete(""))
	require.Equal(t, 0, fake.calls("DeleteItem"))
}

// A failing call is returned as the SDK reports it, and is neither retried nor followed by more work.
func Test_DynamoDB_OperationErrors(t *testing.T) {
	denied := respondError(errAccessDeny)
	scanPage := func(n int) fakeHandler { return respondJSON(map[string]any{"Items": keyItems(n)}) }

	tests := []struct {
		name     string
		handlers map[string]fakeHandler
		run      func(*Storage) error
		// calls is how many times op is expected to have been called: the failure is not retried,
		// and nothing is sent after it.
		op    string
		calls int
	}{
		{"Set", map[string]fakeHandler{"PutItem": denied}, func(s *Storage) error { return s.Set("key", []byte("val"), 0) }, "PutItem", 1},
		{"Delete", map[string]fakeHandler{"DeleteItem": denied}, func(s *Storage) error { return s.Delete("key") }, "DeleteItem", 1},
		{"Reset scan", map[string]fakeHandler{"Scan": denied}, (*Storage).Reset, "BatchWriteItem", 0},
		{"Reset batch", map[string]fakeHandler{"Scan": scanPage(1), "BatchWriteItem": denied}, (*Storage).Reset, "BatchWriteItem", 1},
		// A batch sent while still scanning the page fails the same way.
		{"Reset full batch", map[string]fakeHandler{"Scan": scanPage(batchWriteItemLimit), "BatchWriteItem": denied}, (*Storage).Reset, "BatchWriteItem", 1},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			store, fake := newFakeStore(t, tt.handlers)

			requireAPIError(t, tt.run(store), errAccessDeny)
			require.Equal(t, tt.calls, fake.calls(tt.op))
		})
	}
}

func Test_DynamoDB_Reset_EmptyTable(t *testing.T) {
	store, fake := newFakeStore(t, map[string]fakeHandler{
		"Scan": respondJSON(map[string]any{"Items": []any{}}),
	})

	require.NoError(t, store.Reset())
	require.Equal(t, 0, fake.calls("BatchWriteItem"))
}

func keyItem(k string) map[string]any {
	return map[string]any{keyAttrName: map[string]any{"S": k}}
}

// keyItems returns n scan results, each holding just a distinct key.
func keyItems(n int) []any {
	items := make([]any, 0, n)
	for i := range n {
		items = append(items, keyItem(string(rune('A'+i))))
	}

	return items
}

func Test_DynamoDB_Reset_Paginates(t *testing.T) {
	var startKeys []string

	store, fake := newFakeStore(t, map[string]fakeHandler{
		"Scan": func(w http.ResponseWriter, call int, body []byte) {
			var req struct {
				ProjectionExpression     string
				ExpressionAttributeNames map[string]string
				ExclusiveStartKey        map[string]struct{ S string }
			}
			require.NoError(t, json.Unmarshal(body, &req))
			require.Equal(t, "#k", req.ProjectionExpression)
			require.Equal(t, map[string]string{"#k": keyAttrName}, req.ExpressionAttributeNames)
			startKeys = append(startKeys, req.ExclusiveStartKey[keyAttrName].S)

			if call == 1 {
				writeJSON(w, map[string]any{
					"Items":            []any{keyItem("a"), keyItem("b")},
					"LastEvaluatedKey": keyItem("b"),
				})
				return
			}
			writeJSON(w, map[string]any{"Items": []any{keyItem("c")}})
		},
		"BatchWriteItem": respondOK,
	})

	require.NoError(t, store.Reset())

	require.Equal(t, []string{"", "b"}, startKeys)
	// One batch per scan page.
	require.Equal(t, 2, fake.calls("BatchWriteItem"))
}

func Test_DynamoDB_Reset_SkipsItemsWithoutKey(t *testing.T) {
	var deleted [][]string

	withoutKey := map[string]any{"other": map[string]any{"S": "x"}}

	store, _ := newFakeStore(t, map[string]fakeHandler{
		"Scan": scripted(
			// Nothing on this page can be deleted, so it sends no batch at all.
			respondJSON(map[string]any{"Items": []any{withoutKey}, "LastEvaluatedKey": keyItem("x")}),
			respondJSON(map[string]any{"Items": []any{withoutKey, keyItem("a")}}),
		),
		"BatchWriteItem": func(w http.ResponseWriter, _ int, body []byte) {
			deleted = append(deleted, requestKeys(t, body))
			writeOK(w)
		},
	})

	require.NoError(t, store.Reset())
	require.Equal(t, [][]string{{"a"}}, deleted)
}

func Test_DynamoDB_Reset_BatchesAndRetriesUnprocessed(t *testing.T) {
	const total = batchWriteItemLimit + 5

	var batches [][]string

	store, _ := newFakeStore(t, map[string]fakeHandler{
		"Scan": respondJSON(map[string]any{"Items": keyItems(total)}),
		"BatchWriteItem": func(w http.ResponseWriter, call int, body []byte) {
			keys := requestKeys(t, body)
			batches = append(batches, keys)

			if call != 1 {
				writeOK(w)
				return
			}

			// DynamoDB declines the last three requests of the first batch.
			var raw struct {
				RequestItems map[string][]json.RawMessage
			}
			require.NoError(t, json.Unmarshal(body, &raw))
			writeJSON(w, map[string]any{"UnprocessedItems": map[string]any{
				fakeTable: raw.RequestItems[fakeTable][len(keys)-3:],
			}})
		},
	})

	require.NoError(t, store.Reset())

	require.Len(t, batches, 3)
	// A full batch, then only what was declined, then the remainder of the page.
	require.Len(t, batches[0], batchWriteItemLimit)
	require.Equal(t, batches[0][batchWriteItemLimit-3:], batches[1])
	require.Len(t, batches[2], total-batchWriteItemLimit)
}

// decliningHandlers serve a table with one entry whose deletion DynamoDB leaves unprocessed on
// every attempt.
func decliningHandlers() map[string]fakeHandler {
	return map[string]fakeHandler{
		"Scan": respondJSON(map[string]any{"Items": []any{keyItem("a")}}),
		"BatchWriteItem": respondJSON(map[string]any{"UnprocessedItems": map[string]any{
			fakeTable: []any{map[string]any{"DeleteRequest": map[string]any{"Key": keyItem("a")}}},
		}}),
	}
}

func Test_DynamoDB_Reset_CancelledDuringBackoff(t *testing.T) {
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	// Cancel once DynamoDB has answered the first attempt with unprocessed items.
	hook := &hookDoer{after: func(op string, _ int) {
		if op == "BatchWriteItem" {
			cancel()
		}
	}}

	store, fake := newFakeStore(t, decliningHandlers(), hook)

	// The reset gives up during the pause instead of re-sending or sitting it out.
	require.ErrorIs(t, store.ResetWithContext(ctx), context.Canceled)
	require.Equal(t, 1, fake.calls("BatchWriteItem"))
}

func Test_DynamoDB_Reset_GivesUpOnUnprocessedItems(t *testing.T) {
	store, fake := newFakeStore(t, decliningHandlers())

	// A table that keeps declining the work ends the reset after a bounded number of attempts.
	err := store.Reset()
	require.EqualError(t, err, fmt.Sprintf("dynamodb: reset left items unprocessed after %d attempts", batchWriteMaxAttempts))
	require.Equal(t, batchWriteMaxAttempts, fake.calls("BatchWriteItem"))
}
