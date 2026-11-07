package firestore

import (
	"bytes"
	"context"
	"errors"
	"fmt"
	"log"
	"net"
	"os"
	"path/filepath"
	"strings"
	"sync"
	"testing"
	"time"

	"cloud.google.com/go/firestore/apiv1/firestorepb"
	"github.com/stretchr/testify/require"
	"github.com/testcontainers/testcontainers-go"
	tcfirestore "github.com/testcontainers/testcontainers-go/modules/gcloud/firestore"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"google.golang.org/protobuf/types/known/timestamppb"
)

const (
	firestoreImageEnvVar string = "TEST_FIRESTORE_IMAGE"
	projectID                   = "test-project"
)

// newTestConfig starts a firestore emulator testcontainer, points the
// FIRESTORE_EMULATOR_HOST env var at it and returns the Config to use.
func newTestConfig(t testing.TB) Config {
	t.Helper()

	ctx := context.Background()

	img := "gcr.io/google.com/cloudsdktool/google-cloud-cli:emulators"
	if imgFromEnv := os.Getenv(firestoreImageEnvVar); imgFromEnv != "" {
		img = imgFromEnv
	}

	c, err := tcfirestore.Run(ctx, img,
		tcfirestore.WithProjectID(projectID),
	)
	testcontainers.CleanupContainer(t, c)
	require.NoError(t, err)

	host, err := c.Host(ctx)
	require.NoError(t, err)

	port, err := c.MappedPort(ctx, "8080/tcp")
	require.NoError(t, err)

	originalEnv := os.Getenv("FIRESTORE_EMULATOR_HOST")
	t.Cleanup(func() {
		if originalEnv != "" {
			os.Setenv("FIRESTORE_EMULATOR_HOST", originalEnv)
		} else {
			os.Unsetenv("FIRESTORE_EMULATOR_HOST")
		}
	})

	os.Setenv("FIRESTORE_EMULATOR_HOST", host+":"+port.Port())

	return Config{
		ProjectID:  projectID,
		Collection: "test_collection",
		Reset:      true,
	}
}

func newTestStore(t testing.TB) *Storage {
	t.Helper()

	return New(newTestConfig(t))
}

func Test_Firestore_Set(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)
}

func Test_Firestore_NewWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	cfg := newTestConfig(t)

	testStore := NewWithContext(context.Background(), cfg)
	require.NotNil(t, testStore)
	defer testStore.Close()

	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)
}

func Test_Firestore_SetWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.SetWithContext(ctx, key, val, 0)
	require.Error(t, err)
}

func Test_Firestore_Set_Override(t *testing.T) {
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

func Test_Firestore_Get(t *testing.T) {
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

func Test_Firestore_GetWithContext(t *testing.T) {
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
	require.Error(t, err)
	require.Zero(t, len(result))
}

func Test_Firestore_Set_Expiration(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
		exp = 1 * time.Second
	)

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set(key, val, exp)
	require.NoError(t, err)

	time.Sleep(1100 * time.Millisecond)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Zero(t, len(result), "Key should have expired")
}

func Test_Firestore_Get_NotExist(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	result, err := testStore.Get("notexist")
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_Firestore_Delete(t *testing.T) {
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

func Test_Firestore_DeleteWithContext(t *testing.T) {
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
	require.Error(t, err)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)
}

func Test_Firestore_Reset(t *testing.T) {
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

func Test_Firestore_ResetWithContext(t *testing.T) {
	val := []byte("doe")

	testStore := newTestStore(t)
	defer testStore.Close()

	err := testStore.Set("john1", val, 0)
	require.NoError(t, err)

	err = testStore.Set("john2", val, 0)
	require.NoError(t, err)

	ctx := context.Background()

	err = testStore.ResetWithContext(ctx)
	require.NoError(t, err)

	result, err := testStore.Get("john1")
	require.NoError(t, err)
	require.Zero(t, len(result))

	result, err = testStore.Get("john2")
	require.NoError(t, err)
	require.Zero(t, len(result))
}

func Test_Firestore_Close(t *testing.T) {
	testStore := newTestStore(t)
	require.NoError(t, testStore.Close())
}

func Test_Firestore_Conn(t *testing.T) {
	testStore := newTestStore(t)
	defer testStore.Close()

	require.True(t, testStore.Conn() != nil)
}

func Benchmark_Firestore_Set(b *testing.B) {
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

func Benchmark_Firestore_Get(b *testing.B) {
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

func Benchmark_Firestore_SetAndDelete(b *testing.B) {
	testStore := newTestStore(b)
	defer testStore.Close()

	b.ReportAllocs()
	b.ResetTimer()

	var errSet, errDel error
	for i := 0; i < b.N; i++ {
		errSet = testStore.Set("john", []byte("doe"), 0)
		errDel = testStore.Delete("john")
	}
	require.NoError(b, errSet)
	require.NoError(b, errDel)
}

func Test_Firestore_NewFromConnection(t *testing.T) {
	owner := newTestStore(t)
	defer owner.Close()

	store := NewFromConnection(owner.Conn(), "existing_collection")
	require.Same(t, owner.Conn(), store.Conn())

	require.NoError(t, store.Set("john", []byte("doe"), 0))

	result, err := store.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), result)

	// The client is the caller's, so closing this storage must leave it usable.
	require.NoError(t, store.Close())
	require.NoError(t, owner.Set("jane", []byte("doe"), 0))
	require.ErrorIs(t, store.Set("jane", []byte("doe"), 0), ErrClosed)
}

func Test_Firestore_NewFromConnection_Nil(t *testing.T) {
	require.Panics(t, func() {
		NewFromConnection(nil, "")
	})
}

// fakeFirestore is a minimal in-process Firestore gRPC server. It lets the
// tests exercise server-side failures and stored data shapes that the real
// emulator cannot be told to produce, without starting a container.
type fakeFirestore struct {
	firestorepb.UnimplementedFirestoreServer

	mu        sync.Mutex
	docs      map[string]*firestorepb.Document
	queryDocs []*firestorepb.Document
	queryErr  error
	commitErr error
	commits   []*firestorepb.CommitRequest
	batches   []*firestorepb.BatchWriteRequest
	getCalls  int
}

func docName(collection, key string) string {
	return fmt.Sprintf("projects/%s/databases/(default)/documents/%s/%s", projectID, collection, key)
}

func newDoc(collection, key string, fields map[string]*firestorepb.Value) *firestorepb.Document {
	return &firestorepb.Document{
		Name:       docName(collection, key),
		Fields:     fields,
		CreateTime: timestamppb.Now(),
		UpdateTime: timestamppb.Now(),
	}
}

func (f *fakeFirestore) putDoc(collection, key string, fields map[string]*firestorepb.Value) {
	doc := newDoc(collection, key, fields)

	f.mu.Lock()
	defer f.mu.Unlock()
	f.docs[doc.Name] = doc
}

// putEntry stores a document shaped like the ones Set writes for a key with an
// expiry.
func (f *fakeFirestore) putEntry(collection, key string, val []byte, exp time.Time) {
	f.putDoc(collection, key, map[string]*firestorepb.Value{
		"k":      {ValueType: &firestorepb.Value_StringValue{StringValue: key}},
		"v":      {ValueType: &firestorepb.Value_BytesValue{BytesValue: val}},
		"exp_at": {ValueType: &firestorepb.Value_TimestampValue{TimestampValue: timestamppb.New(exp)}},
	})
}

func (f *fakeFirestore) BatchGetDocuments(req *firestorepb.BatchGetDocumentsRequest, stream firestorepb.Firestore_BatchGetDocumentsServer) error {
	f.mu.Lock()
	f.getCalls++
	f.mu.Unlock()

	for _, name := range req.GetDocuments() {
		f.mu.Lock()
		doc, ok := f.docs[name]
		f.mu.Unlock()

		resp := &firestorepb.BatchGetDocumentsResponse{ReadTime: timestamppb.Now()}
		if ok {
			resp.Result = &firestorepb.BatchGetDocumentsResponse_Found{Found: doc}
		} else {
			resp.Result = &firestorepb.BatchGetDocumentsResponse_Missing{Missing: name}
		}
		if err := stream.Send(resp); err != nil {
			return err
		}
	}
	return nil
}

func (f *fakeFirestore) Commit(_ context.Context, req *firestorepb.CommitRequest) (*firestorepb.CommitResponse, error) {
	f.mu.Lock()
	f.commits = append(f.commits, req)
	err := f.commitErr
	f.mu.Unlock()

	if err != nil {
		return nil, err
	}

	resp := &firestorepb.CommitResponse{CommitTime: timestamppb.Now()}
	for range req.GetWrites() {
		resp.WriteResults = append(resp.WriteResults, &firestorepb.WriteResult{UpdateTime: timestamppb.Now()})
	}
	return resp, nil
}

func (f *fakeFirestore) RunQuery(_ *firestorepb.RunQueryRequest, stream firestorepb.Firestore_RunQueryServer) error {
	f.mu.Lock()
	docs := append([]*firestorepb.Document(nil), f.queryDocs...)
	err := f.queryErr
	f.mu.Unlock()

	if err != nil {
		return err
	}
	for _, doc := range docs {
		if err := stream.Send(&firestorepb.RunQueryResponse{Document: doc, ReadTime: timestamppb.Now()}); err != nil {
			return err
		}
	}
	return nil
}

func (f *fakeFirestore) BatchWrite(_ context.Context, req *firestorepb.BatchWriteRequest) (*firestorepb.BatchWriteResponse, error) {
	f.mu.Lock()
	f.batches = append(f.batches, req)
	f.mu.Unlock()

	resp := &firestorepb.BatchWriteResponse{}
	for range req.GetWrites() {
		resp.WriteResults = append(resp.WriteResults, &firestorepb.WriteResult{UpdateTime: timestamppb.Now()})
		resp.Status = append(resp.Status, status.New(codes.OK, "").Proto())
	}
	return resp, nil
}

func (f *fakeFirestore) commitRequests() []*firestorepb.CommitRequest {
	f.mu.Lock()
	defer f.mu.Unlock()
	return append([]*firestorepb.CommitRequest(nil), f.commits...)
}

func (f *fakeFirestore) batchRequests() []*firestorepb.BatchWriteRequest {
	f.mu.Lock()
	defer f.mu.Unlock()
	return append([]*firestorepb.BatchWriteRequest(nil), f.batches...)
}

func (f *fakeFirestore) setCommitErr(err error) {
	f.mu.Lock()
	defer f.mu.Unlock()
	f.commitErr = err
}

func (f *fakeFirestore) setQueryErr(err error) {
	f.mu.Lock()
	defer f.mu.Unlock()
	f.queryErr = err
}

// setQueryDocs makes every query return one empty document per key, in order.
func (f *fakeFirestore) setQueryDocs(collection string, keys ...string) {
	docs := make([]*firestorepb.Document, 0, len(keys))
	for _, key := range keys {
		docs = append(docs, newDoc(collection, key, nil))
	}

	f.mu.Lock()
	defer f.mu.Unlock()
	f.queryDocs = docs
}

func (f *fakeFirestore) rpcCount() int {
	f.mu.Lock()
	defer f.mu.Unlock()
	return f.getCalls + len(f.commits) + len(f.batches)
}

// startFakeFirestore starts the fake server and points FIRESTORE_EMULATOR_HOST
// at it, so the regular constructors talk to it exactly as they would to the
// emulator.
func startFakeFirestore(t testing.TB) (*fakeFirestore, Config) {
	t.Helper()

	lis, err := net.Listen("tcp", "127.0.0.1:0")
	require.NoError(t, err)

	fake := &fakeFirestore{docs: make(map[string]*firestorepb.Document)}
	srv := grpc.NewServer()
	firestorepb.RegisterFirestoreServer(srv, fake)
	go func() { _ = srv.Serve(lis) }()
	t.Cleanup(srv.Stop)

	t.Setenv("FIRESTORE_EMULATOR_HOST", lis.Addr().String())

	return fake, Config{
		ProjectID:      projectID,
		Collection:     "fake_collection",
		RequestTimeout: 5 * time.Second,
	}
}

// unreachableTimeout is the RequestTimeout for storages that talk to an
// address nothing listens on. The client retries Unavailable until the request
// deadline, so each failing call takes about this long.
const unreachableTimeout = 50 * time.Millisecond

// unusedAddr returns a loopback address nothing is listening on.
func unusedAddr(t testing.TB) string {
	t.Helper()

	lis, err := net.Listen("tcp", "127.0.0.1:0")
	require.NoError(t, err)
	addr := lis.Addr().String()
	require.NoError(t, lis.Close())
	return addr
}

// syncBuffer is a goroutine-safe buffer for capturing log output.
type syncBuffer struct {
	mu  sync.Mutex
	buf bytes.Buffer
}

func (b *syncBuffer) Write(p []byte) (int, error) {
	b.mu.Lock()
	defer b.mu.Unlock()
	return b.buf.Write(p)
}

func (b *syncBuffer) String() string {
	b.mu.Lock()
	defer b.mu.Unlock()
	return b.buf.String()
}

func captureLog(t testing.TB) *syncBuffer {
	t.Helper()

	out := &syncBuffer{}
	prev := log.Writer()
	log.SetOutput(out)
	t.Cleanup(func() { log.SetOutput(prev) })
	return out
}

// panicText runs fn, which must panic, and returns the panic value as text.
func panicText(t testing.TB, fn func()) string {
	t.Helper()

	var r any
	func() {
		defer func() { r = recover() }()
		fn()
	}()
	require.NotNil(t, r, "expected a panic")
	return fmt.Sprint(r)
}

func Test_Firestore_Fake_Closed(t *testing.T) {
	fake, cfg := startFakeFirestore(t)

	store := New(cfg)
	require.NoError(t, store.Close())
	// A second Close is a no-op and must not report the client as already closed.
	require.NoError(t, store.Close())

	ctx := context.Background()

	val, err := store.Get("john")
	require.ErrorIs(t, err, ErrClosed)
	require.Nil(t, val)

	val, err = store.GetWithContext(ctx, "john")
	require.ErrorIs(t, err, ErrClosed)
	require.Nil(t, val)

	require.ErrorIs(t, store.Set("john", []byte("doe"), 0), ErrClosed)
	require.ErrorIs(t, store.SetWithContext(ctx, "john", []byte("doe"), 0), ErrClosed)
	require.ErrorIs(t, store.Delete("john"), ErrClosed)
	require.ErrorIs(t, store.DeleteWithContext(ctx, "john"), ErrClosed)
	require.ErrorIs(t, store.Reset(), ErrClosed)
	require.ErrorIs(t, store.ResetWithContext(ctx), ErrClosed)

	require.Zero(t, fake.rpcCount(), "a closed storage must not reach the server")
}

func Test_Firestore_Fake_BorrowedClient_DoubleClose(t *testing.T) {
	_, cfg := startFakeFirestore(t)

	owner := New(cfg)
	defer owner.Close()

	store := NewFromConnection(owner.Conn(), "")
	require.Equal(t, ConfigDefault.Collection, store.collection)
	require.Equal(t, ConfigDefault.RequestTimeout, store.timeout)

	require.NoError(t, store.Close())
	require.NoError(t, store.Close())
	require.ErrorIs(t, store.Delete("john"), ErrClosed)
}

func Test_Firestore_Fake_EmptyArguments(t *testing.T) {
	fake, cfg := startFakeFirestore(t)

	store := New(cfg)
	defer store.Close()

	val, err := store.Get("")
	require.NoError(t, err)
	require.Nil(t, val)

	require.NoError(t, store.Set("", []byte("doe"), 0))
	require.NoError(t, store.Set("john", nil, 0))
	require.NoError(t, store.Set("john", []byte{}, 0))
	require.NoError(t, store.Delete(""))

	require.Zero(t, fake.rpcCount(), "empty keys and values must be ignored client-side")
}

func Test_Firestore_Fake_Set_WritesDocument(t *testing.T) {
	fake, cfg := startFakeFirestore(t)

	store := New(cfg)
	defer store.Close()

	before := time.Now()
	require.NoError(t, store.Set("john", []byte("doe"), time.Hour))
	require.NoError(t, store.Set("jane", []byte("roe"), 0))

	commits := fake.commitRequests()
	require.Len(t, commits, 2)

	withExp := commits[0].GetWrites()[0].GetUpdate()
	require.Equal(t, docName(cfg.Collection, "john"), withExp.GetName())
	require.Equal(t, "john", withExp.GetFields()["k"].GetStringValue())
	require.Equal(t, []byte("doe"), withExp.GetFields()["v"].GetBytesValue())
	expAt := withExp.GetFields()["exp_at"].GetTimestampValue().AsTime()
	require.WithinDuration(t, before.Add(time.Hour), expAt, 5*time.Second)

	noExp := commits[1].GetWrites()[0].GetUpdate()
	require.Equal(t, "jane", noExp.GetFields()["k"].GetStringValue())
	require.NotContains(t, noExp.GetFields(), "exp_at", "no expiry must omit exp_at")
}

func Test_Firestore_Fake_Get_Value(t *testing.T) {
	fake, cfg := startFakeFirestore(t)
	fake.putEntry(cfg.Collection, "live", []byte("doe"), time.Now().Add(time.Hour))

	store := New(cfg)
	defer store.Close()

	val, err := store.Get("live")
	require.NoError(t, err)
	require.Equal(t, []byte("doe"), val, "a not yet expired document must be returned")
	require.Empty(t, fake.commitRequests(), "a live document must not be deleted")
}

func Test_Firestore_Fake_Get_DecodeError(t *testing.T) {
	fake, cfg := startFakeFirestore(t)
	fake.putDoc(cfg.Collection, "broken", map[string]*firestorepb.Value{
		"k": {ValueType: &firestorepb.Value_IntegerValue{IntegerValue: 42}},
		"v": {ValueType: &firestorepb.Value_BytesValue{BytesValue: []byte("doe")}},
	})

	store := New(cfg)
	defer store.Close()

	val, err := store.Get("broken")
	require.Error(t, err)
	require.Nil(t, val)
}

func Test_Firestore_Fake_Get_ExpiredIsDeleted(t *testing.T) {
	fake, cfg := startFakeFirestore(t)
	fake.putEntry(cfg.Collection, "stale", []byte("doe"), time.Now().Add(-time.Minute))

	store := New(cfg)
	defer store.Close()

	val, err := store.Get("stale")
	require.NoError(t, err)
	require.Nil(t, val, "an expired document must read as missing")

	// The expired document is removed in the background.
	require.Eventually(t, func() bool {
		return len(fake.commitRequests()) > 0
	}, 5*time.Second, 10*time.Millisecond, "expired document was not deleted")

	commits := fake.commitRequests()
	require.Len(t, commits, 1)
	require.Equal(t, docName(cfg.Collection, "stale"), commits[0].GetWrites()[0].GetDelete())
}

func Test_Firestore_Fake_Get_ExpiredDeleteFailureIsLogged(t *testing.T) {
	fake, cfg := startFakeFirestore(t)
	fake.putEntry(cfg.Collection, "stale-logged", []byte("doe"), time.Now().Add(-time.Minute))
	fake.setCommitErr(status.Error(codes.PermissionDenied, "denied"))

	out := captureLog(t)

	store := New(cfg)
	defer store.Close()

	val, err := store.Get("stale-logged")
	require.NoError(t, err)
	require.Nil(t, val)

	require.Eventually(t, func() bool {
		return strings.Contains(out.String(), "failed to delete expired document stale-logged")
	}, 5*time.Second, 10*time.Millisecond)
}

func Test_Firestore_Fake_Delete(t *testing.T) {
	fake, cfg := startFakeFirestore(t)

	store := New(cfg)
	defer store.Close()

	require.NoError(t, store.Delete("john"))

	commits := fake.commitRequests()
	require.Len(t, commits, 1)
	require.Equal(t, docName(cfg.Collection, "john"), commits[0].GetWrites()[0].GetDelete())
}

func Test_Firestore_Fake_Delete_NotFoundIsIgnored(t *testing.T) {
	fake, cfg := startFakeFirestore(t)
	fake.setCommitErr(status.Error(codes.NotFound, "no such document"))

	store := New(cfg)
	defer store.Close()

	require.NoError(t, store.Delete("john"))
	require.Len(t, fake.commitRequests(), 1)
}

func Test_Firestore_Fake_Commit_ServerError(t *testing.T) {
	tests := []struct {
		name string
		op   func(*Storage) error
	}{
		{"set", func(s *Storage) error { return s.Set("john", []byte("doe"), 0) }},
		{"delete", func(s *Storage) error { return s.Delete("john") }},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			fake, cfg := startFakeFirestore(t)
			fake.setCommitErr(status.Error(codes.PermissionDenied, "denied"))

			store := New(cfg)
			defer store.Close()

			err := tt.op(store)
			require.Error(t, err)
			require.Equal(t, codes.PermissionDenied, status.Code(err))
		})
	}
}

func Test_Firestore_Fake_Reset_DeletesAllDocuments(t *testing.T) {
	fake, cfg := startFakeFirestore(t)
	fake.setQueryDocs(cfg.Collection, "a", "b")

	store := New(cfg)
	defer store.Close()

	require.NoError(t, store.Reset())

	var deleted []string
	for _, batch := range fake.batchRequests() {
		for _, w := range batch.GetWrites() {
			deleted = append(deleted, w.GetDelete())
		}
	}
	require.ElementsMatch(t, []string{
		docName(cfg.Collection, "a"),
		docName(cfg.Collection, "b"),
	}, deleted)
}

func Test_Firestore_Fake_Reset_IterateError(t *testing.T) {
	fake, cfg := startFakeFirestore(t)
	fake.setQueryErr(status.Error(codes.PermissionDenied, "denied"))

	store := New(cfg)
	defer store.Close()

	err := store.Reset()
	require.Error(t, err)
	require.ErrorContains(t, err, "failed to iterate documents")
	require.Equal(t, codes.PermissionDenied, status.Code(errors.Unwrap(err)))
}

func Test_Firestore_Fake_Reset_ScheduleDeleteError(t *testing.T) {
	fake, cfg := startFakeFirestore(t)

	// The same document twice makes the bulk writer reject the second delete.
	fake.setQueryDocs(cfg.Collection, "dup", "dup")

	store := New(cfg)
	defer store.Close()

	err := store.Reset()
	require.Error(t, err)
	require.ErrorContains(t, err, "failed to schedule delete for doc dup")
}

func Test_Firestore_Fake_New_ResetOnInit(t *testing.T) {
	fake, cfg := startFakeFirestore(t)
	fake.setQueryDocs(cfg.Collection, "old")

	cfg.Reset = true
	store := New(cfg)
	defer store.Close()

	batches := fake.batchRequests()
	require.Len(t, batches, 1)
	require.Equal(t, docName(cfg.Collection, "old"), batches[0].GetWrites()[0].GetDelete())
}

func Test_Firestore_Unreachable_ResetOnInitPanics(t *testing.T) {
	t.Setenv("FIRESTORE_EMULATOR_HOST", unusedAddr(t))

	text := panicText(t, func() {
		New(Config{
			ProjectID:      projectID,
			Collection:     "unreachable",
			RequestTimeout: unreachableTimeout,
			Reset:          true,
		})
	})
	require.Contains(t, text, "unable to reset collection")
}

func Test_Firestore_Unreachable_Operations(t *testing.T) {
	t.Setenv("FIRESTORE_EMULATOR_HOST", unusedAddr(t))

	store := New(Config{
		ProjectID:      projectID,
		Collection:     "unreachable",
		RequestTimeout: unreachableTimeout,
	})
	defer store.Close()

	val, err := store.Get("john")
	require.Error(t, err)
	require.Nil(t, val)

	require.Error(t, store.Set("john", []byte("doe"), 0))
	require.Error(t, store.Delete("john"))
	require.Error(t, store.Reset())
}

func Test_Firestore_New_InvalidCredentialsJSONPanics(t *testing.T) {
	t.Setenv("FIRESTORE_EMULATOR_HOST", "")

	text := panicText(t, func() {
		New(Config{
			ProjectID:      projectID,
			Credentials:    "this is not json",
			RequestTimeout: time.Second,
		})
	})
	require.Contains(t, text, "unable to create client")
}

func Test_Firestore_New_MissingCredentialsFilePanics(t *testing.T) {
	t.Setenv("FIRESTORE_EMULATOR_HOST", "")

	text := panicText(t, func() {
		New(Config{
			ProjectID:       projectID,
			CredentialsPath: filepath.Join(t.TempDir(), "missing.json"),
			RequestTimeout:  time.Second,
		})
	})
	require.Contains(t, text, "unable to create client")
}

func Test_Firestore_LoadCredentialsFromFile(t *testing.T) {
	path := filepath.Join(t.TempDir(), "creds.json")
	content := `{"type": "service_account", "project_id": "test-project"}`
	require.NoError(t, os.WriteFile(path, []byte(content), 0o600))

	got, err := LoadCredentialsFromFile(path)
	require.NoError(t, err)
	require.Equal(t, content, got)
}

func Test_Firestore_LoadCredentialsFromFile_Missing(t *testing.T) {
	got, err := LoadCredentialsFromFile(filepath.Join(t.TempDir(), "missing.json"))
	require.ErrorIs(t, err, os.ErrNotExist)
	require.Empty(t, got)
}

func Test_Firestore_LoadCredentialsFromFile_InvalidJSON(t *testing.T) {
	path := filepath.Join(t.TempDir(), "creds.json")
	require.NoError(t, os.WriteFile(path, []byte("{not json"), 0o600))

	got, err := LoadCredentialsFromFile(path)
	require.Error(t, err)
	require.ErrorContains(t, err, "invalid JSON in credentials file")
	require.Empty(t, got)
}
