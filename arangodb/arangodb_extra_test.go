package arangodb

import (
	"context"
	"net"
	nethttp "net/http"
	"net/http/httptest"
	"sync"
	"testing"
	"time"

	driver "github.com/arangodb/go-driver"
	"github.com/arangodb/go-driver/http"
	"github.com/stretchr/testify/require"
)

// recoverPanic runs fn and returns the value it panicked with, or nil if it did not panic.
func recoverPanic(fn func()) (v any) {
	defer func() { v = recover() }()
	fn()
	return nil
}

// fakeArango is an httptest server that answers the initialization requests of newStorage.
// respond receives the 1-based call count for the "METHOD path" of each request and returns
// the status and JSON body to answer with.
type fakeArango struct {
	*httptest.Server
	mu    sync.Mutex
	calls map[string]int
	order []string
}

const (
	fakeDBBody   = `{"result":{"name":"fiber","id":"1","path":"","isSystem":false},"error":false,"code":200}`
	fakeCollBody = `{"name":"fiber_storage","id":"7","status":3,"type":2,"isSystem":false,"error":false,"code":200}`
	fakeErrBody  = `{"error":true,"code":500,"errorNum":1,"errorMessage":"boom"}`
	fakeNotFound = `{"error":true,"code":404,"errorNum":1228,"errorMessage":"database not found"}`
)

func newFakeArango(t *testing.T, respond func(route string, n int) (int, string)) *fakeArango {
	t.Helper()

	f := &fakeArango{calls: map[string]int{}}
	f.Server = httptest.NewServer(nethttp.HandlerFunc(func(w nethttp.ResponseWriter, r *nethttp.Request) {
		route := r.Method + " " + r.URL.Path

		f.mu.Lock()
		f.calls[route]++
		f.order = append(f.order, route)
		n := f.calls[route]
		f.mu.Unlock()

		status, body := respond(route, n)
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(status)
		_, _ = w.Write([]byte(body))
	}))
	t.Cleanup(f.Close)
	return f
}

// routes returns every request seen so far, in order.
func (f *fakeArango) routes() []string {
	f.mu.Lock()
	defer f.mu.Unlock()
	return append([]string(nil), f.order...)
}

func (f *fakeArango) client(t *testing.T) driver.Client {
	t.Helper()

	conn, err := http.NewConnection(http.ConnectionConfig{Endpoints: []string{f.URL}})
	require.NoError(t, err)
	client, err := driver.NewClient(driver.ClientConfig{Connection: conn})
	require.NoError(t, err)
	return client
}

func Test_ArangoDB_Init_Failures(t *testing.T) {
	const (
		dbCurrent  = "GET /_db/fiber/_api/database/current"
		dbCreate   = "POST /_db/_system/_api/database"
		collGet    = "GET /_db/fiber/_api/collection/fiber_storage"
		collCreate = "POST /_db/fiber/_api/collection"
		collTrunc  = "PUT /_db/fiber/_api/collection/fiber_storage/truncate"
	)

	tests := []struct {
		name    string
		reset   bool
		failAt  string // the last request newStorage makes before it panics
		respond func(route string, n int) (int, string)
	}{
		{
			name:   "database exists check fails",
			failAt: dbCurrent,
			respond: func(route string, _ int) (int, string) {
				return 500, fakeErrBody
			},
		},
		{
			name:   "database creation fails",
			failAt: dbCreate,
			respond: func(route string, _ int) (int, string) {
				if route == dbCurrent {
					return 404, fakeNotFound
				}
				return 500, fakeErrBody
			},
		},
		{
			name:   "database lookup fails",
			failAt: dbCurrent,
			respond: func(route string, n int) (int, string) {
				if route == dbCurrent && n == 1 {
					return 200, fakeDBBody
				}
				return 500, fakeErrBody
			},
		},
		{
			name:   "collection exists check fails",
			failAt: collGet,
			respond: func(route string, _ int) (int, string) {
				if route == dbCurrent {
					return 200, fakeDBBody
				}
				return 500, fakeErrBody
			},
		},
		{
			name:   "collection creation fails",
			failAt: collCreate,
			respond: func(route string, _ int) (int, string) {
				switch route {
				case dbCurrent:
					return 200, fakeDBBody
				case collGet:
					return 404, fakeNotFound
				}
				return 500, fakeErrBody
			},
		},
		{
			name:   "collection lookup fails",
			failAt: collGet,
			respond: func(route string, n int) (int, string) {
				switch {
				case route == dbCurrent:
					return 200, fakeDBBody
				case route == collGet && n == 1:
					return 200, fakeCollBody
				}
				return 500, fakeErrBody
			},
		},
		{
			name:   "reset truncate fails",
			failAt: collTrunc,
			reset:  true,
			respond: func(route string, _ int) (int, string) {
				switch route {
				case dbCurrent:
					return 200, fakeDBBody
				case collGet:
					return 200, fakeCollBody
				}
				return 500, fakeErrBody
			},
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			f := newFakeArango(t, tt.respond)

			v := recoverPanic(func() {
				NewFromConnection(f.client(t), Config{Reset: tt.reset, GCInterval: time.Hour})
			})
			require.NotNil(t, v, "initialization must panic")
			err, ok := v.(error)
			require.True(t, ok, "panic value should be the driver error, got %T", v)
			require.Contains(t, err.Error(), "boom")
			require.Equal(t, tt.failAt, f.routes()[len(f.routes())-1], "failed at the wrong step")
		})
	}
}

func Test_ArangoDB_New_Unreachable(t *testing.T) {
	// Grab a free port, then close the listener so nothing answers on it.
	l, err := net.Listen("tcp", "127.0.0.1:0")
	require.NoError(t, err)
	port := l.Addr().(*net.TCPAddr).Port
	require.NoError(t, l.Close())

	require.Panics(t, func() {
		New(Config{Host: "http://127.0.0.1", Port: port})
	})

	ctx, cancel := context.WithCancel(context.Background())
	cancel()
	require.Panics(t, func() {
		NewWithContext(ctx, Config{Host: "http://127.0.0.1", Port: port})
	})
}

func Test_ArangoDB_New_InvalidEndpoint(t *testing.T) {
	// Passes the Host prefix check but is not a parseable endpoint, so connection setup fails.
	require.Panics(t, func() {
		New(Config{Host: "http://[::1", Port: 8529})
	})
}

func Test_ArangoDB_Config_Invalid_Host(t *testing.T) {
	v := recoverPanic(func() {
		New(Config{Host: "127.0.0.1"})
	})
	require.Equal(t, "Host should start with `http://` or `https://`", v)
}

func Test_ArangoDB_ConfigDefault(t *testing.T) {
	require.Equal(t, ConfigDefault, configDefault())

	cfg := configDefault(Config{})
	require.Equal(t, ConfigDefault, cfg)

	cfg = configDefault(Config{
		Host:       "https://db.example.com",
		Port:       1234,
		Username:   "u",
		Password:   "p",
		Database:   "d",
		Collection: "c",
		Reset:      true,
		GCInterval: time.Minute,
	})
	require.Equal(t, Config{
		Host:       "https://db.example.com",
		Port:       1234,
		Username:   "u",
		Password:   "p",
		Database:   "d",
		Collection: "c",
		Reset:      true,
		GCInterval: time.Minute,
	}, cfg)

	cfg = configDefault(Config{Host: "http://h", Port: -5, GCInterval: -time.Second})
	require.Equal(t, 8529, cfg.Port)
	require.Equal(t, 10*time.Second, cfg.GCInterval)
}

// Test_ArangoDB_Storage_Behavior shares one container across the scenarios that need a real server.
func Test_ArangoDB_Storage_Behavior(t *testing.T) {
	cfg := newTestConfig(t)
	owner := New(cfg)
	defer owner.Close()

	t.Run("empty key and value are no-ops", func(t *testing.T) {
		require.NoError(t, owner.Set("", []byte("v"), 0))
		require.NoError(t, owner.Set("k", nil, 0))
		require.NoError(t, owner.Set("k", []byte{}, 0))
		require.NoError(t, owner.Delete(""))

		val, err := owner.Get("")
		require.NoError(t, err)
		require.Nil(t, val)

		val, err = owner.Get("k")
		require.NoError(t, err)
		require.Nil(t, val)
	})

	t.Run("delete missing key", func(t *testing.T) {
		require.NoError(t, owner.Delete("never-existed"))
	})

	t.Run("overwrite replaces value and expiration", func(t *testing.T) {
		require.NoError(t, owner.Set("ow", []byte("one"), time.Hour))
		require.NoError(t, owner.Set("ow", []byte("two"), 0))

		val, err := owner.Get("ow")
		require.NoError(t, err)
		require.Equal(t, []byte("two"), val)

		var m model
		_, err = owner.collection.ReadDocument(context.Background(), "ow", &m)
		require.NoError(t, err)
		require.Zero(t, m.Exp, "second Set without expiration must clear the deadline")
	})

	t.Run("expiration is stored as a future unix deadline", func(t *testing.T) {
		before := time.Now().Unix()
		require.NoError(t, owner.Set("exp", []byte("v"), 500*time.Millisecond))

		var m model
		_, err := owner.collection.ReadDocument(context.Background(), "exp", &m)
		require.NoError(t, err)
		require.Greater(t, m.Exp, before, "sub-second expiration must round up past now")
		require.LessOrEqual(t, m.Exp, time.Now().Unix()+2)
	})

	t.Run("existing collection is reused and reset keeps database", func(t *testing.T) {
		require.NoError(t, owner.Set("shared", []byte("v"), 0))

		// Same collection and database as owner: it already exists, so it is looked up, not created.
		reuse := NewFromConnection(owner.Conn(), Config{})
		defer reuse.Close()
		val, err := reuse.Get("shared")
		require.NoError(t, err)
		require.Equal(t, []byte("v"), val)

		// Reset truncates the existing collection on construction.
		fresh := NewFromConnection(owner.Conn(), Config{Reset: true})
		defer fresh.Close()
		val, err = fresh.Get("shared")
		require.NoError(t, err)
		require.Nil(t, val)
	})

	t.Run("missing database is created", func(t *testing.T) {
		s := NewFromConnection(owner.Conn(), Config{Database: "fiber_extra_db", Collection: "extra_coll"})
		defer s.Close()

		exists, err := owner.Conn().DatabaseExists(context.Background(), "fiber_extra_db")
		require.NoError(t, err)
		require.True(t, exists)

		require.NoError(t, s.Set("k", []byte("v"), 0))
		val, err := s.Get("k")
		require.NoError(t, err)
		require.Equal(t, []byte("v"), val)

		// Keys are isolated per database.
		val, err = owner.Get("k")
		require.NoError(t, err)
		require.Nil(t, val)
	})

	t.Run("gc removes expired keys and keeps the rest", func(t *testing.T) {
		s := NewFromConnection(owner.Conn(), Config{Collection: "gc_coll", GCInterval: 500 * time.Millisecond})
		defer s.Close()

		require.NoError(t, s.Set("short", []byte("v"), time.Second))
		require.NoError(t, s.Set("long", []byte("v"), time.Hour))
		require.NoError(t, s.Set("forever", []byte("v"), 0))

		// Look at the collection directly: Get already hides expired keys, so only a document
		// that is physically gone proves the sweep ran.
		deadline := time.Now().Add(15 * time.Second)
		for {
			_, err := s.collection.ReadDocument(context.Background(), "short", &model{})
			if err != nil {
				require.True(t, isDocumentNotFound(err), "unexpected error: %v", err)
				break
			}
			require.False(t, time.Now().After(deadline), "expired document should have been swept")
			time.Sleep(100 * time.Millisecond)
		}

		for _, key := range []string{"long", "forever"} {
			val, err := s.Get(key)
			require.NoError(t, err)
			require.Equal(t, []byte("v"), val, key)
		}
	})

	t.Run("get hides expired document before it is swept", func(t *testing.T) {
		s := NewFromConnection(owner.Conn(), Config{Collection: "expired_coll", GCInterval: time.Hour})
		defer s.Close()

		// Write an already-expired document directly, bypassing Set's rounding.
		_, err := s.collection.CreateDocument(context.Background(), &model{Key: "old", Val: "v", Exp: time.Now().Unix() - 10})
		require.NoError(t, err)

		val, err := s.Get("old")
		require.NoError(t, err)
		require.Nil(t, val)
	})

	t.Run("operations fail after Close", func(t *testing.T) {
		s := NewFromConnection(owner.Conn(), Config{Collection: "closed_coll"})
		require.NoError(t, s.Set("k", []byte("v"), 0))
		require.NoError(t, s.Close())

		_, err := s.Get("k")
		require.ErrorIs(t, err, ErrClosed)
		require.ErrorIs(t, s.Set("k", []byte("v2"), 0), ErrClosed)
		require.ErrorIs(t, s.Delete("k"), ErrClosed)
		require.ErrorIs(t, s.Reset(), ErrClosed)

		// Empty-argument short circuits still win over the closed check.
		require.NoError(t, s.Set("", []byte("v"), 0))
		require.NoError(t, s.Delete(""))

		// The data was left untouched, and the owner can still read it.
		other := NewFromConnection(owner.Conn(), Config{Collection: "closed_coll"})
		defer other.Close()
		val, err := other.Get("k")
		require.NoError(t, err)
		require.Equal(t, []byte("v"), val)
	})

	t.Run("dropped collection surfaces errors instead of misses", func(t *testing.T) {
		s := NewFromConnection(owner.Conn(), Config{Collection: "dropped_coll", GCInterval: time.Hour})
		defer s.Close()
		require.NoError(t, s.Set("k", []byte("v"), 0))

		require.NoError(t, s.collection.Remove(context.Background()))

		val, err := s.Get("k")
		require.Error(t, err)
		require.Nil(t, val)
		require.False(t, isDocumentNotFound(err))

		require.Error(t, s.Delete("k"))
		require.Error(t, s.Set("k", []byte("v"), 0))
		require.Error(t, s.Reset())
	})
}

func Test_ArangoDB_Unreachable_Operations(t *testing.T) {
	// A store whose server goes away: every operation reports the transport error.
	f := newFakeArango(t, func(route string, n int) (int, string) {
		switch route {
		case "GET /_db/fiber/_api/database/current":
			return 200, fakeDBBody
		case "GET /_db/fiber/_api/collection/fiber_storage":
			return 200, fakeCollBody
		}
		return 500, fakeErrBody
	})

	s := NewFromConnection(f.client(t), Config{GCInterval: 50 * time.Millisecond})
	defer s.Close()

	val, err := s.Get("k")
	require.Error(t, err)
	require.Nil(t, val)
	require.Contains(t, err.Error(), "boom")

	require.ErrorContains(t, s.Set("k", []byte("v"), 0), "boom")
	require.ErrorContains(t, s.Delete("k"), "boom")
	require.ErrorContains(t, s.Reset(), "boom")

	// The collector keeps running when a sweep fails, and Close still returns promptly.
	time.Sleep(200 * time.Millisecond)
	done := make(chan error, 1)
	go func() { done <- s.Close() }()
	select {
	case err := <-done:
		require.NoError(t, err)
	case <-time.After(5 * time.Second):
		t.Fatal("Close did not return")
	}
}
