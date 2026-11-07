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
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"google.golang.org/protobuf/types/known/timestamppb"
)

// fakeFirestore is a minimal in-process Firestore gRPC server. It lets the
// tests exercise server-side failures and stored data shapes that the real
// emulator cannot be told to produce, without starting a container.
type fakeFirestore struct {
	firestorepb.UnimplementedFirestoreServer

	mu         sync.Mutex
	docs       map[string]*firestorepb.Document
	queryDocs  []*firestorepb.Document
	queryErr   error
	commitErr  error
	commits    []*firestorepb.CommitRequest
	batches    []*firestorepb.BatchWriteRequest
	getCalls   int
	commitSeen chan struct{}
}

func (f *fakeFirestore) docName(collection, key string) string {
	return fmt.Sprintf("projects/%s/databases/(default)/documents/%s/%s", projectID, collection, key)
}

func (f *fakeFirestore) putDoc(collection, key string, fields map[string]*firestorepb.Value) *firestorepb.Document {
	doc := &firestorepb.Document{
		Name:       f.docName(collection, key),
		Fields:     fields,
		CreateTime: timestamppb.Now(),
		UpdateTime: timestamppb.Now(),
	}
	f.mu.Lock()
	defer f.mu.Unlock()
	f.docs[doc.Name] = doc
	return doc
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

	if f.commitSeen != nil {
		select {
		case f.commitSeen <- struct{}{}:
		default:
		}
	}
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

	fake := &fakeFirestore{
		docs:       make(map[string]*firestorepb.Document),
		commitSeen: make(chan struct{}, 16),
	}
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
	log.SetOutput(out)
	t.Cleanup(func() { log.SetOutput(os.Stderr) })
	return out
}

func stringVal(s string) *firestorepb.Value {
	return &firestorepb.Value{ValueType: &firestorepb.Value_StringValue{StringValue: s}}
}

func bytesVal(b []byte) *firestorepb.Value {
	return &firestorepb.Value{ValueType: &firestorepb.Value_BytesValue{BytesValue: b}}
}

func timeVal(ts time.Time) *firestorepb.Value {
	return &firestorepb.Value{ValueType: &firestorepb.Value_TimestampValue{TimestampValue: timestamppb.New(ts)}}
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
	require.Equal(t, fake.docName(cfg.Collection, "john"), withExp.GetName())
	require.Equal(t, "john", withExp.GetFields()["k"].GetStringValue())
	require.Equal(t, []byte("doe"), withExp.GetFields()["v"].GetBytesValue())
	expAt := withExp.GetFields()["exp_at"].GetTimestampValue().AsTime()
	require.WithinDuration(t, before.Add(time.Hour), expAt, 5*time.Second)

	noExp := commits[1].GetWrites()[0].GetUpdate()
	require.Equal(t, "jane", noExp.GetFields()["k"].GetStringValue())
	require.NotContains(t, noExp.GetFields(), "exp_at", "no expiry must omit exp_at")
}

func Test_Firestore_Fake_Set_ServerError(t *testing.T) {
	fake, cfg := startFakeFirestore(t)
	fake.setCommitErr(status.Error(codes.PermissionDenied, "denied"))

	store := New(cfg)
	defer store.Close()

	err := store.Set("john", []byte("doe"), 0)
	require.Error(t, err)
	require.Equal(t, codes.PermissionDenied, status.Code(err))
}

func Test_Firestore_Fake_Get_Value(t *testing.T) {
	fake, cfg := startFakeFirestore(t)
	fake.putDoc(cfg.Collection, "live", map[string]*firestorepb.Value{
		"k":      stringVal("live"),
		"v":      bytesVal([]byte("doe")),
		"exp_at": timeVal(time.Now().Add(time.Hour)),
	})

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
		"v": bytesVal([]byte("doe")),
	})

	store := New(cfg)
	defer store.Close()

	val, err := store.Get("broken")
	require.Error(t, err)
	require.Nil(t, val)
}

func Test_Firestore_Fake_Get_ExpiredIsDeleted(t *testing.T) {
	fake, cfg := startFakeFirestore(t)
	fake.putDoc(cfg.Collection, "stale", map[string]*firestorepb.Value{
		"k":      stringVal("stale"),
		"v":      bytesVal([]byte("doe")),
		"exp_at": timeVal(time.Now().Add(-time.Minute)),
	})

	store := New(cfg)
	defer store.Close()

	val, err := store.Get("stale")
	require.NoError(t, err)
	require.Nil(t, val, "an expired document must read as missing")

	// The expired document is removed in the background.
	select {
	case <-fake.commitSeen:
	case <-time.After(5 * time.Second):
		t.Fatal("expired document was not deleted")
	}

	commits := fake.commitRequests()
	require.Len(t, commits, 1)
	require.Equal(t, fake.docName(cfg.Collection, "stale"), commits[0].GetWrites()[0].GetDelete())
}

func Test_Firestore_Fake_Get_ExpiredDeleteFailureIsLogged(t *testing.T) {
	fake, cfg := startFakeFirestore(t)
	fake.putDoc(cfg.Collection, "stale-logged", map[string]*firestorepb.Value{
		"k":      stringVal("stale-logged"),
		"v":      bytesVal([]byte("doe")),
		"exp_at": timeVal(time.Now().Add(-time.Minute)),
	})
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
	require.Equal(t, fake.docName(cfg.Collection, "john"), commits[0].GetWrites()[0].GetDelete())
}

func Test_Firestore_Fake_Delete_NotFoundIsIgnored(t *testing.T) {
	fake, cfg := startFakeFirestore(t)
	fake.setCommitErr(status.Error(codes.NotFound, "no such document"))

	store := New(cfg)
	defer store.Close()

	require.NoError(t, store.Delete("john"))
	require.Len(t, fake.commitRequests(), 1)
}

func Test_Firestore_Fake_Delete_ServerError(t *testing.T) {
	fake, cfg := startFakeFirestore(t)
	fake.setCommitErr(status.Error(codes.PermissionDenied, "denied"))

	store := New(cfg)
	defer store.Close()

	err := store.Delete("john")
	require.Error(t, err)
	require.Equal(t, codes.PermissionDenied, status.Code(err))
}

func Test_Firestore_Fake_Reset_DeletesAllDocuments(t *testing.T) {
	fake, cfg := startFakeFirestore(t)

	fake.mu.Lock()
	fake.queryDocs = []*firestorepb.Document{
		{Name: fake.docName(cfg.Collection, "a"), CreateTime: timestamppb.Now(), UpdateTime: timestamppb.Now()},
		{Name: fake.docName(cfg.Collection, "b"), CreateTime: timestamppb.Now(), UpdateTime: timestamppb.Now()},
	}
	fake.mu.Unlock()

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
		fake.docName(cfg.Collection, "a"),
		fake.docName(cfg.Collection, "b"),
	}, deleted)
}

func Test_Firestore_Fake_Reset_IterateError(t *testing.T) {
	fake, cfg := startFakeFirestore(t)

	fake.mu.Lock()
	fake.queryErr = status.Error(codes.PermissionDenied, "denied")
	fake.mu.Unlock()

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
	dup := &firestorepb.Document{
		Name:       fake.docName(cfg.Collection, "dup"),
		CreateTime: timestamppb.Now(),
		UpdateTime: timestamppb.Now(),
	}
	fake.mu.Lock()
	fake.queryDocs = []*firestorepb.Document{dup, dup}
	fake.mu.Unlock()

	store := New(cfg)
	defer store.Close()

	err := store.Reset()
	require.Error(t, err)
	require.ErrorContains(t, err, "failed to schedule delete for doc dup")
}

func Test_Firestore_Fake_New_ResetOnInit(t *testing.T) {
	fake, cfg := startFakeFirestore(t)

	fake.mu.Lock()
	fake.queryDocs = []*firestorepb.Document{
		{Name: fake.docName(cfg.Collection, "old"), CreateTime: timestamppb.Now(), UpdateTime: timestamppb.Now()},
	}
	fake.mu.Unlock()

	cfg.Reset = true
	store := New(cfg)
	defer store.Close()

	batches := fake.batchRequests()
	require.Len(t, batches, 1)
	require.Equal(t, fake.docName(cfg.Collection, "old"), batches[0].GetWrites()[0].GetDelete())
}

func Test_Firestore_Unreachable_ResetOnInitPanics(t *testing.T) {
	t.Setenv("FIRESTORE_EMULATOR_HOST", unusedAddr(t))

	defer func() {
		r := recover()
		require.NotNil(t, r, "New must panic when the initial reset fails")
		require.Contains(t, fmt.Sprint(r), "unable to reset collection")
	}()

	New(Config{
		ProjectID:      projectID,
		Collection:     "unreachable",
		RequestTimeout: 500 * time.Millisecond,
		Reset:          true,
	})
}

func Test_Firestore_Unreachable_Operations(t *testing.T) {
	t.Setenv("FIRESTORE_EMULATOR_HOST", unusedAddr(t))

	store := New(Config{
		ProjectID:      projectID,
		Collection:     "unreachable",
		RequestTimeout: 500 * time.Millisecond,
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

	defer func() {
		r := recover()
		require.NotNil(t, r, "New must panic on unusable credentials")
		require.Contains(t, fmt.Sprint(r), "unable to create client")
	}()

	New(Config{
		ProjectID:      projectID,
		Credentials:    "this is not json",
		RequestTimeout: time.Second,
	})
}

func Test_Firestore_New_MissingCredentialsFilePanics(t *testing.T) {
	t.Setenv("FIRESTORE_EMULATOR_HOST", "")

	defer func() {
		r := recover()
		require.NotNil(t, r, "New must panic when the credentials file is missing")
		require.Contains(t, fmt.Sprint(r), "unable to create client")
	}()

	New(Config{
		ProjectID:       projectID,
		CredentialsPath: filepath.Join(t.TempDir(), "missing.json"),
		RequestTimeout:  time.Second,
	})
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
