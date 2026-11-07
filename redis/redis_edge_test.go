package redis

import (
	"bufio"
	"context"
	"fmt"
	"io"
	"net"
	"strconv"
	"strings"
	"sync"
	"testing"
	"time"

	goredis "github.com/redis/go-redis/v9"
	"github.com/stretchr/testify/require"
)

// fakeRedis is a minimal RESP server for exercising failure paths a real Redis does not
// produce on demand (a refused FLUSHDB, a cluster topology). handler receives the upper-cased
// command name and its arguments and returns a raw RESP reply.
type fakeRedis struct {
	ln net.Listener

	mu       sync.Mutex
	commands []string
}

func newFakeRedis(t testing.TB, handler func(f *fakeRedis, cmd string, args []string) string) *fakeRedis {
	t.Helper()

	ln, err := net.Listen("tcp", "127.0.0.1:0")
	require.NoError(t, err)

	f := &fakeRedis{ln: ln}

	var wg sync.WaitGroup
	wg.Add(1)
	go func() {
		defer wg.Done()
		for {
			conn, err := ln.Accept()
			if err != nil {
				return
			}
			wg.Add(1)
			go func() {
				defer wg.Done()
				defer conn.Close() //nolint:errcheck // best effort cleanup
				f.serve(conn, handler)
			}()
		}
	}()

	t.Cleanup(func() {
		_ = ln.Close()
		wg.Wait()
	})

	return f
}

func (f *fakeRedis) addr() string { return f.ln.Addr().String() }

func (f *fakeRedis) port() int { return f.ln.Addr().(*net.TCPAddr).Port }

func (f *fakeRedis) seen(cmd string) bool {
	f.mu.Lock()
	defer f.mu.Unlock()
	for _, c := range f.commands {
		if c == cmd {
			return true
		}
	}
	return false
}

func (f *fakeRedis) serve(conn net.Conn, handler func(f *fakeRedis, cmd string, args []string) string) {
	r := bufio.NewReader(conn)
	for {
		line, err := r.ReadString('\n')
		if err != nil || !strings.HasPrefix(line, "*") {
			return
		}
		n, err := strconv.Atoi(strings.TrimSpace(line[1:]))
		if err != nil {
			return
		}
		parts := make([]string, 0, n)
		for i := 0; i < n; i++ {
			hdr, err := r.ReadString('\n')
			if err != nil || !strings.HasPrefix(hdr, "$") {
				return
			}
			size, err := strconv.Atoi(strings.TrimSpace(hdr[1:]))
			if err != nil {
				return
			}
			buf := make([]byte, size+2)
			if _, err := io.ReadFull(r, buf); err != nil {
				return
			}
			parts = append(parts, string(buf[:size]))
		}
		if len(parts) == 0 {
			return
		}

		cmd := strings.ToUpper(parts[0])
		f.mu.Lock()
		f.commands = append(f.commands, cmd)
		f.mu.Unlock()

		if _, err := io.WriteString(conn, handler(f, cmd, parts[1:])); err != nil {
			return
		}
	}
}

// refuseFlush answers like a server that accepts connections but denies FLUSHDB.
func refuseFlush(_ *fakeRedis, cmd string, _ []string) string {
	switch cmd {
	case "PING":
		return "+PONG\r\n"
	case "FLUSHDB":
		return "-NOPERM this user has no permissions to run the 'flushdb' command\r\n"
	case "CLIENT":
		return "+OK\r\n"
	default:
		return "-ERR unknown command\r\n"
	}
}

// clusterOfOne answers as a single-master cluster owning every slot; SCAN pages through
// two batches so key collection across cursors is exercised.
func clusterOfOne(f *fakeRedis, cmd string, args []string) string {
	switch cmd {
	case "PING", "READONLY":
		if cmd == "READONLY" {
			return "+OK\r\n"
		}
		return "+PONG\r\n"
	case "CLIENT", "FLUSHDB":
		return "+OK\r\n"
	case "CLUSTER":
		return fmt.Sprintf("*1\r\n*3\r\n:0\r\n:16383\r\n*3\r\n$9\r\n127.0.0.1\r\n:%d\r\n$4\r\nnode\r\n", f.port())
	case "SCAN":
		if len(args) > 0 && args[0] == "0" {
			return "*2\r\n$1\r\n7\r\n*2\r\n$1\r\na\r\n$1\r\nb\r\n"
		}
		return "*2\r\n$1\r\n0\r\n*1\r\n$1\r\nc\r\n"
	default:
		return "-ERR unknown command\r\n"
	}
}

func Test_Redis_New_InvalidURL_Panics(t *testing.T) {
	t.Parallel()

	require.Panics(t, func() {
		New(Config{URL: "not-a-redis-url://nowhere"})
	})
}

func Test_Redis_New_URL_DefaultsTLSFromScheme(t *testing.T) {
	t.Parallel()

	// A rediss:// URL carries TLS settings the config did not supply; they must reach the client.
	var store *Storage
	require.NotPanics(t, func() {
		store = New(Config{
			URL:                 "rediss://user:secret@127.0.0.1:1/3",
			SkipConnectionCheck: true,
		})
	})
	defer store.Close() //nolint:errcheck // the server is unreachable

	client, ok := store.Conn().(*goredis.Client)
	require.True(t, ok)

	opts := client.Options()
	require.NotNil(t, opts.TLSConfig)
	require.Equal(t, "127.0.0.1:1", opts.Addr)
	require.Equal(t, "user", opts.Username)
	require.Equal(t, "secret", opts.Password)
	require.Equal(t, 3, opts.DB)
}

func Test_Redis_New_ConnectionCheckFailure_Panics(t *testing.T) {
	t.Parallel()

	// Nothing listens on port 1, so the PING must fail construction instead of returning a broken storage.
	require.Panics(t, func() {
		New(Config{Host: "127.0.0.1", Port: 1})
	})
}

func Test_Redis_New_ResetFailure_Panics(t *testing.T) {
	t.Parallel()

	fake := newFakeRedis(t, refuseFlush)

	// The PING succeeds but the server refuses FLUSHDB: a requested reset that fails must not be swallowed.
	require.PanicsWithError(t, "NOPERM this user has no permissions to run the 'flushdb' command", func() {
		New(Config{Addrs: []string{fake.addr()}, Reset: true})
	})
	require.True(t, fake.seen("PING"))
	require.True(t, fake.seen("FLUSHDB"))
}

func Test_Redis_NewFromConnection_TypedNil_Panics(t *testing.T) {
	t.Parallel()

	var client *goredis.Client
	require.PanicsWithValue(t, "redis: nil client", func() {
		NewFromConnection(client)
	})
}

func Test_Redis_EmptyKeyAndValue(t *testing.T) {
	t.Parallel()

	testStore := newTestStore(t)
	defer testStore.Close()

	// Empty keys are ignored by every operation.
	val, err := testStore.Get("")
	require.NoError(t, err)
	require.Nil(t, val)

	require.NoError(t, testStore.Set("", []byte("doe"), 0))
	require.NoError(t, testStore.Delete(""))

	// An empty value is not stored either.
	require.NoError(t, testStore.Set("john", nil, 0))
	require.NoError(t, testStore.Set("john", []byte{}, 0))

	keys, err := testStore.Keys()
	require.NoError(t, err)
	require.Nil(t, keys)

	val, err = testStore.Get("john")
	require.NoError(t, err)
	require.Nil(t, val)
}

func Test_Redis_Set_NegativeExpirationClearsTTL(t *testing.T) {
	t.Parallel()

	testStore := newTestStore(t)
	defer testStore.Close()

	ctx := context.Background()

	require.NoError(t, testStore.Set("john", []byte("doe"), time.Hour))
	ttl, err := testStore.Conn().TTL(ctx, "john").Result()
	require.NoError(t, err)
	require.Greater(t, ttl, time.Duration(0))

	// A negative expiration means no expiry; it must not keep the previous TTL (go-redis KeepTTL).
	require.NoError(t, testStore.Set("john", []byte("smith"), -time.Second))
	ttl, err = testStore.Conn().TTL(ctx, "john").Result()
	require.NoError(t, err)
	require.Equal(t, time.Duration(-1), ttl, "key must have no expiry")

	val, err := testStore.Get("john")
	require.NoError(t, err)
	require.Equal(t, []byte("smith"), val)
}

func Test_Redis_Operations_ClientClosedUnderneath(t *testing.T) {
	t.Parallel()

	owner := newTestStore(t)
	require.NoError(t, owner.Set("john", []byte("doe"), 0))

	// A borrowed storage is not marked closed when the client dies under it, so the
	// underlying client's errors must surface from every operation.
	borrowed := NewFromConnection(owner.Conn())
	require.NoError(t, owner.Conn().Close())

	keys, err := borrowed.Keys()
	require.ErrorIs(t, err, goredis.ErrClosed)
	require.Nil(t, keys)

	_, err = borrowed.Get("john")
	require.ErrorIs(t, err, goredis.ErrClosed)
	require.ErrorIs(t, borrowed.Set("john", []byte("doe"), 0), goredis.ErrClosed)
	require.ErrorIs(t, borrowed.Delete("john"), goredis.ErrClosed)
	require.ErrorIs(t, borrowed.Reset(), goredis.ErrClosed)

	// Closing the owner reports the already-closed client but still latches the storage.
	require.ErrorIs(t, owner.Close(), goredis.ErrClosed)
	_, err = owner.Get("john")
	require.ErrorIs(t, err, ErrClosed)
}

func Test_Redis_Cluster_FansOutToEveryMaster(t *testing.T) {
	t.Parallel()

	fake := newFakeRedis(t, clusterOfOne)

	store := New(Config{
		Addrs:         []string{fake.addr()},
		IsClusterMode: true,
		Reset:         true,
	})
	defer store.Close() //nolint:errcheck // best effort cleanup

	_, ok := store.Conn().(*goredis.ClusterClient)
	require.True(t, ok)

	// The reset during New and an explicit one both reach the master.
	require.True(t, fake.seen("FLUSHDB"))
	require.NoError(t, store.Reset())

	// Keys gathers every SCAN batch from the master.
	keys, err := store.Keys()
	require.NoError(t, err)
	require.ElementsMatch(t, [][]byte{[]byte("a"), []byte("b"), []byte("c")}, keys)
}

func Test_Redis_Cluster_UnreachableReturnsError(t *testing.T) {
	t.Parallel()

	store := New(Config{
		Addrs:               []string{"127.0.0.1:1"},
		IsClusterMode:       true,
		SkipConnectionCheck: true,
	})
	defer store.Close() //nolint:errcheck // the cluster is unreachable

	// The topology cannot be loaded, so fanning out must report that instead of silently doing nothing.
	require.Error(t, store.Reset())

	keys, err := store.Keys()
	require.Error(t, err)
	require.Nil(t, keys)
}
