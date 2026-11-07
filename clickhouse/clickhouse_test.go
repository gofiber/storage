package clickhouse

import (
	"context"
	"crypto/tls"
	"database/sql"
	"errors"
	"net"
	"os"
	"strconv"
	"strings"
	"testing"
	"time"

	driver "github.com/ClickHouse/clickhouse-go/v2"
	chdriver "github.com/ClickHouse/clickhouse-go/v2/lib/driver"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"github.com/testcontainers/testcontainers-go"
	"github.com/testcontainers/testcontainers-go/modules/clickhouse"
	"github.com/testcontainers/testcontainers-go/wait"
)

const (
	// clickhouseImage is the default image used for running clickhouse in tests.
	clickhouseImage              = "clickhouse/clickhouse-server:26.7-alpine"
	clickhouseImageEnvVar string = "TEST_CLICKHOUSE_IMAGE"
	clickhouseUser        string = "default"
	clickhousePass        string = "password"
	clickhouseDB          string = "fiber"
	clickhouseHttpPort           = "8123/tcp"
	clickhouseSuccessCode        = 200
)

// newTestConfig starts a clickhouse testcontainer and returns the given config
// populated with the connection details for that container.
func newTestConfig(t testing.TB, cfg Config) Config {
	t.Helper()

	img := clickhouseImage
	if imgFromEnv := os.Getenv(clickhouseImageEnvVar); imgFromEnv != "" {
		img = imgFromEnv
	}

	ctx := context.Background()

	c, err := clickhouse.Run(ctx,
		img,
		clickhouse.WithUsername(clickhouseUser),
		clickhouse.WithPassword(clickhousePass),
		clickhouse.WithDatabase(clickhouseDB),
		testcontainers.WithWaitStrategy(
			wait.ForAll(
				wait.ForListeningPort(clickhouseHttpPort),
				wait.NewHTTPStrategy("/").WithPort(clickhouseHttpPort).WithStatusCodeMatcher(func(status int) bool {
					return status == clickhouseSuccessCode
				}),
			),
		),
	)
	testcontainers.CleanupContainer(t, c)
	require.NoError(t, err)

	hostPort, err := c.ConnectionHost(ctx)
	require.NoError(t, err)

	pair := strings.Split(hostPort, ":")
	port, err := strconv.Atoi(pair[1])
	require.NoError(t, err)

	// configure the client for the testcontainers clickhouse instance
	cfg.Host = pair[0]
	cfg.Port = port
	cfg.Username = clickhouseUser
	cfg.Password = clickhousePass
	cfg.Database = clickhouseDB

	return cfg
}

func newTestStore(t testing.TB, cfg Config) *Storage {
	t.Helper()

	client, err := New(newTestConfig(t, cfg))
	require.NoError(t, err)

	return client
}

func Test_Connection(t *testing.T) {
	client := newTestStore(t, Config{
		Engine: Memory,
		Table:  "test_table",
		Clean:  true,
	})
	defer client.Close()
}

func Test_Clickhouse_NewWithContext(t *testing.T) {
	cfg := newTestConfig(t, Config{
		Engine: Memory,
		Table:  "test_table",
		Clean:  true,
	})

	client, err := NewWithContext(context.Background(), cfg)
	require.NoError(t, err)
	require.NotNil(t, client)
	defer client.Close()

	err = client.Set("somekey", []byte("somevalue"), 0)
	require.NoError(t, err)

	value, err := client.Get("somekey")
	require.NoError(t, err)
	require.Equal(t, "somevalue", string(value))
}

func Test_SetWithContext(t *testing.T) {
	client := newTestStore(t, Config{
		Engine: Memory,
		Table:  "test_table",
		Clean:  true,
	})
	defer client.Close()

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err := client.SetWithContext(ctx, "somekey", []byte("somevalue"), 0)
	require.ErrorIs(t, err, context.Canceled)
}

func Test_Set(t *testing.T) {
	client := newTestStore(t, Config{
		Engine: Memory,
		Table:  "test_table",
		Clean:  true,
	})
	defer client.Close()

	err := client.Set("somekey", []byte("somevalue"), 0)
	require.NoError(t, err)
}

func Test_Set_With_Exp(t *testing.T) {
	client := newTestStore(t, Config{
		Engine: Memory,
		Table:  "test_table",
		Clean:  true,
	})
	defer client.Close()

	err := client.Set("setsomekeywithexp", []byte("somevalue"), time.Second*1)
	require.NoError(t, err)
}

func Test_GetWithContext(t *testing.T) {
	client := newTestStore(t, Config{
		Engine: Memory,
		Table:  "test_table",
		Clean:  true,
	})
	defer client.Close()

	err := client.Set("somekey", []byte("somevalue"), 0)
	require.NoError(t, err)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	value, err := client.GetWithContext(ctx, "somekey")
	require.ErrorIs(t, err, context.Canceled)
	assert.Equal(t, []byte{}, value)
}

func Test_Get(t *testing.T) {
	client := newTestStore(t, Config{
		Engine: Memory,
		Table:  "test_table",
		Clean:  true,
	})
	defer client.Close()

	err := client.Set("somekey", []byte("somevalue"), 0)
	require.NoError(t, err)

	value, err := client.Get("somekey")

	require.NoError(t, err)
	assert.NotNil(t, value)
	assert.Equal(t, "somevalue", string(value))
}

func Test_Get_With_Exp(t *testing.T) {
	client := newTestStore(t, Config{
		Engine: Memory,
		Table:  "test_table",
		Clean:  true,
	})
	defer client.Close()

	err := client.Set("getsomekeywithexp", []byte("somevalue"), time.Second*2)
	require.NoError(t, err)

	value, err := client.Get("getsomekeywithexp")

	require.NoError(t, err)
	assert.NotNil(t, value)
	assert.Equal(t, "somevalue", string(value))

	time.Sleep(time.Second * 5)

	value, err = client.Get("getsomekeywithexp")

	require.NoError(t, err)
	assert.Equal(t, []byte{}, value)
}

func Test_DeleteWithContext(t *testing.T) {
	client := newTestStore(t, Config{
		Engine: Memory,
		Table:  "test_table",
		Clean:  true,
	})

	defer client.Close()

	err := client.Set("somekeytodelete", []byte("somevalue"), time.Second*5)
	require.NoError(t, err)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err = client.DeleteWithContext(ctx, "somekeytodelete")
	require.ErrorIs(t, err, context.Canceled)

	value, err := client.Get("somekeytodelete")
	require.NoError(t, err)
	require.Equal(t, []byte("somevalue"), value)
}

func Test_Delete(t *testing.T) {
	client := newTestStore(t, Config{
		Engine: Memory,
		Table:  "test_table",
		Clean:  true,
	})
	defer client.Close()

	err := client.Set("somekeytodelete", []byte("somevalue"), time.Second*5)
	require.NoError(t, err)

	err = client.Delete("somekeytodelete")

	require.NoError(t, err)

	value, err := client.Get("somekeytodelete")

	require.NoError(t, err)
	assert.Equal(t, []byte{}, value)
}

func Test_ResetWithContext(t *testing.T) {
	client := newTestStore(t, Config{
		Engine: Memory,
		Table:  "test_table",
		Clean:  true,
	})

	defer client.Close()

	err := client.Set("testkey", []byte("somevalue"), 0)
	require.NoError(t, err)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err = client.ResetWithContext(ctx)
	require.ErrorIs(t, err, context.Canceled)

	value, err := client.Get("testkey")
	require.NoError(t, err)
	require.Equal(t, []byte("somevalue"), value)
}

func Test_Reset(t *testing.T) {
	client := newTestStore(t, Config{
		Engine: Memory,
		Table:  "test_table",
		Clean:  true,
	})
	defer client.Close()

	err := client.Set("testkey", []byte("somevalue"), 0)
	require.NoError(t, err)

	err = client.Reset()

	require.NoError(t, err)

	value, err := client.Get("testkey")

	require.NoError(t, err)
	assert.Equal(t, []byte{}, value)
}

func TestClose_ShouldReturn_NoError(t *testing.T) {
	client := newTestStore(t, Config{
		Engine: Memory,
		Table:  "test_table",
		Clean:  true,
	})
	require.NoError(t, client.Close())
}

func Benchmark_Clickhouse_Set(b *testing.B) {
	client := newTestStore(b, Config{
		Engine: Memory,
		Table:  "test_table",
		Clean:  true,
	})
	defer client.Close()

	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		err = client.Set("john", []byte("doe"), 0)
	}

	require.NoError(b, err)
}

func Benchmark_Clickhouse_Get(b *testing.B) {
	client := newTestStore(b, Config{
		Engine: Memory,
		Table:  "test_table",
		Clean:  true,
	})
	defer client.Close()

	err := client.Set("john", []byte("doe"), 0)
	require.NoError(b, err)

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_, err = client.Get("john")
	}

	require.NoError(b, err)
}

func Benchmark_Clickhouse_Set_And_Delete(b *testing.B) {
	client := newTestStore(b, Config{
		Engine: Memory,
		Table:  "test_table",
		Clean:  true,
	})
	defer client.Close()

	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		_ = client.Set("john", []byte("doe"), 0)
		err = client.Delete("john")
	}

	require.NoError(b, err)
}

func Test_Clickhouse_NewFromConnection(t *testing.T) {
	cfg := newTestConfig(t, Config{
		Engine: Memory,
		Table:  "test_table_existing",
		Clean:  true,
	})

	options, _, err := defaultConfig(cfg)
	require.NoError(t, err)

	conn, err := driver.Open(&options)
	require.NoError(t, err)
	defer conn.Close() //nolint:errcheck // best effort cleanup

	client, err := NewFromConnection(conn, cfg)
	require.NoError(t, err)

	require.NoError(t, client.Set("john", []byte("doe"), 0))

	value, err := client.Get("john")
	require.NoError(t, err)
	require.Equal(t, "doe", string(value))

	// The connection is the caller's, so closing the storage must leave it usable.
	require.NoError(t, client.Close())
	require.NoError(t, conn.Ping(context.Background()))
	require.ErrorIs(t, client.Set("jane", []byte("doe"), 0), ErrClosed)
}

func Test_Clickhouse_NewFromConnection_Errors(t *testing.T) {
	_, err := NewFromConnection(nil, Config{Table: "test_table"})
	require.Error(t, err)

	conn, err := driver.Open(&driver.Options{Addr: []string{"127.0.0.1:9000"}})
	require.NoError(t, err)
	defer conn.Close() //nolint:errcheck // best effort cleanup

	_, err = NewFromConnection(conn, Config{})
	require.Error(t, err)
}

// closedListenerConfig returns a Config pointing at a local port nothing listens on,
// so every connection attempt is refused without needing a container.
func closedListenerConfig(t testing.TB, cfg Config) Config {
	t.Helper()

	ln, err := net.Listen("tcp", "127.0.0.1:0")
	require.NoError(t, err)
	addr, ok := ln.Addr().(*net.TCPAddr)
	require.True(t, ok)
	require.NoError(t, ln.Close())

	cfg.Host = addr.IP.String()
	cfg.Port = addr.Port

	return cfg
}

// newUnreachableStorage returns a Storage over a connection to a closed port, so every call that reaches the
// server is refused and no container is needed. It is built as a literal because the constructors dial the
// server to create the table; driver.Open itself never dials.
func newUnreachableStorage(t testing.TB) *Storage {
	t.Helper()

	cfg := closedListenerConfig(t, Config{Table: "unreachable"})
	opts, _, err := defaultConfig(cfg)
	require.NoError(t, err)

	conn, err := driver.Open(&opts)
	require.NoError(t, err)
	t.Cleanup(func() { _ = conn.Close() })

	return &Storage{session: conn, table: cfg.Table}
}

// stubConn is a driver.Conn whose behavior is injected per call; any other method panics via the nil embedded interface.
type stubConn struct {
	driver.Conn

	exec     func(query string) error
	ping     error
	row      chdriver.Row
	closeErr error
	closed   int
}

func (c *stubConn) Exec(_ context.Context, query string, _ ...any) error {
	if c.exec != nil {
		return c.exec(query)
	}
	return nil
}

func (c *stubConn) Ping(context.Context) error { return c.ping }

func (c *stubConn) QueryRow(context.Context, string, ...any) chdriver.Row { return c.row }

func (c *stubConn) Close() error {
	c.closed++
	return c.closeErr
}

// stubRow is a chdriver.Row for the two methods GetWithContext uses: Err never fails, and ScanStruct either
// fails with scanErr or yields result. Any other method panics via the nil embedded interface.
type stubRow struct {
	chdriver.Row

	scanErr error
	result  schema
}

func (stubRow) Err() error { return nil }

func (r stubRow) ScanStruct(dest any) error {
	if r.scanErr != nil {
		return r.scanErr
	}
	// GetWithContext always scans into a *schema.
	*dest.(*schema) = r.result
	return nil
}

func Test_DefaultConfig_Defaults(t *testing.T) {
	opts, engine, err := defaultConfig(Config{Table: "t"})
	require.NoError(t, err)

	require.Equal(t, Memory, engine)
	require.Equal(t, []string{"localhost:9000"}, opts.Addr)
	require.Empty(t, opts.Auth.Username)
	require.Nil(t, opts.TLS)
	require.Nil(t, opts.Debugf) //nolint:staticcheck // Debugf is the hook defaultConfig populates.
}

func Test_DefaultConfig_Explicit(t *testing.T) {
	opts, engine, err := defaultConfig(Config{
		Table:    "t",
		Host:     "db.internal",
		Port:     9440,
		Database: "fiber",
		Username: "user",
		Password: "secret",
		Engine:   MergeTree,
	})
	require.NoError(t, err)

	require.Equal(t, MergeTree, engine)
	require.Equal(t, []string{"db.internal:9440"}, opts.Addr)
	require.Equal(t, driver.Auth{Database: "fiber", Username: "user", Password: "secret"}, opts.Auth)
}

func Test_DefaultConfig_AuthRequiresUserAndPassword(t *testing.T) {
	opts, _, err := defaultConfig(Config{Table: "t", Username: "user"})
	require.NoError(t, err)
	require.Equal(t, driver.Auth{}, opts.Auth)
}

func Test_DefaultConfig_TLS(t *testing.T) {
	tlsCfg := &tls.Config{MinVersion: tls.VersionTLS12, ServerName: "db.internal"}

	opts, _, err := defaultConfig(Config{Table: "t", TLSConfig: tlsCfg})
	require.NoError(t, err)
	require.Same(t, tlsCfg, opts.TLS)
}

func Test_DefaultConfig_Debug(t *testing.T) {
	opts, _, err := defaultConfig(Config{Table: "t", Debug: true})
	require.NoError(t, err)
	require.NotNil(t, opts.Debugf) //nolint:staticcheck // Debugf is the hook defaultConfig populates.
}

func Test_DefaultConfig_MissingTable(t *testing.T) {
	_, _, err := defaultConfig(Config{})
	require.EqualError(t, err, "table name not provided")
}

func Test_NewWithContext_MissingTable(t *testing.T) {
	client, err := NewWithContext(context.Background(), Config{})
	require.Error(t, err)
	require.Nil(t, client)
}

func Test_NewWithContext_ConnectionRefused(t *testing.T) {
	ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
	defer cancel()

	client, err := NewWithContext(ctx, closedListenerConfig(t, Config{Table: "test_table", Clean: true}))
	require.Error(t, err)
	require.Nil(t, client)
}

// A failed initialization closes the connection only when this driver opened it;
// one handed to NewFromConnection stays the caller's to close.
func Test_NewStorage_FailureClosesOnlyOwnedConnection(t *testing.T) {
	failure := errors.New("boom")

	tests := []struct {
		name string
		exec func(query string) error
		ping error
		cfg  Config
	}{
		{name: "create", exec: func(string) error { return failure }, cfg: Config{Table: "t"}},
		{name: "clean", exec: func(query string) error {
			if query == resetDataString {
				return failure
			}
			return nil
		}, cfg: Config{Table: "t", Clean: true}},
		{name: "ping", ping: failure, cfg: Config{Table: "t"}},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			owned := &stubConn{exec: tt.exec, ping: tt.ping}
			client, err := newStorage(context.Background(), owned, true, Memory, tt.cfg)
			require.ErrorIs(t, err, failure)
			require.Nil(t, client)
			require.Equal(t, 1, owned.closed)

			borrowed := &stubConn{exec: tt.exec, ping: tt.ping}
			client, err = NewFromConnection(borrowed, tt.cfg)
			require.ErrorIs(t, err, failure)
			require.Nil(t, client)
			require.Zero(t, borrowed.closed)
		})
	}
}

func Test_NewStorage_Success(t *testing.T) {
	conn := &stubConn{}

	client, err := newStorage(context.Background(), conn, true, Memory, Config{Table: "t", Clean: true})
	require.NoError(t, err)
	require.NotNil(t, client)
	require.Equal(t, "t", client.table)
	require.True(t, client.ownsConn)
	require.Zero(t, conn.closed)
}

func Test_EmptyKeyAndValue_AreNoOps(t *testing.T) {
	// The connection is unreachable: these calls must return before touching it.
	client := newUnreachableStorage(t)

	require.NoError(t, client.Set("", []byte("value"), 0))
	require.NoError(t, client.Set("key", nil, 0))
	require.NoError(t, client.Set("key", []byte{}, time.Minute))

	value, err := client.Get("")
	require.NoError(t, err)
	require.Empty(t, value)

	require.NoError(t, client.Delete(""))
}

func Test_OperationsOnUnreachableServer(t *testing.T) {
	client := newUnreachableStorage(t)

	require.Error(t, client.Set("key", []byte("value"), time.Minute))

	_, err := client.Get("key")
	require.Error(t, err)

	require.Error(t, client.Delete("key"))
	require.Error(t, client.Reset())
}

func Test_OperationsAfterClose(t *testing.T) {
	client := newUnreachableStorage(t)
	require.NoError(t, client.Close())

	require.ErrorIs(t, client.Set("key", []byte("value"), 0), ErrClosed)
	require.ErrorIs(t, client.SetWithContext(context.Background(), "key", []byte("value"), 0), ErrClosed)

	value, err := client.Get("key")
	require.ErrorIs(t, err, ErrClosed)
	require.Nil(t, value)

	require.ErrorIs(t, client.Delete("key"), ErrClosed)
	require.ErrorIs(t, client.Reset(), ErrClosed)
	require.ErrorIs(t, client.ResetWithContext(context.Background()), ErrClosed)
}

func Test_Close_Idempotent(t *testing.T) {
	conn := &stubConn{}
	client := &Storage{session: conn, table: "t", ownsConn: true}

	require.NoError(t, client.Close())
	require.NoError(t, client.Close())
	require.Equal(t, 1, conn.closed)
}

func Test_Close_BorrowedConnectionStaysOpen(t *testing.T) {
	conn := &stubConn{}
	client := &Storage{session: conn, table: "t"}

	require.NoError(t, client.Close())
	require.Zero(t, conn.closed)
}

func Test_Close_ReportsFailureOnce(t *testing.T) {
	closeErr := errors.New("close failed")
	conn := &stubConn{closeErr: closeErr}
	client := &Storage{session: conn, table: "t", ownsConn: true}

	require.ErrorIs(t, client.Close(), closeErr)
	require.NoError(t, client.Close())
	require.Equal(t, 1, conn.closed)
}

// An empty want is a miss: the key is absent or its row has expired.
func Test_Get_ScanOutcomes(t *testing.T) {
	scanErr := errors.New("scan failed")

	tests := []struct {
		name    string
		row     stubRow
		want    string
		wantErr error
	}{
		{name: "scan error", row: stubRow{scanErr: scanErr}, wantErr: scanErr},
		{name: "no rows", row: stubRow{scanErr: sql.ErrNoRows}},
		{name: "no expiration", row: stubRow{result: schema{Value: "v", Expiration: time.Unix(0, 0)}}, want: "v"},
		{name: "future", row: stubRow{result: schema{Value: "v", Expiration: time.Now().Add(time.Hour)}}, want: "v"},
		{name: "past", row: stubRow{result: schema{Value: "v", Expiration: time.Now().Add(-time.Hour)}}},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			client := &Storage{session: &stubConn{row: tt.row}, table: "t"}

			value, err := client.Get("key")
			if tt.wantErr != nil {
				require.ErrorIs(t, err, tt.wantErr)
				return
			}
			require.NoError(t, err)
			require.Equal(t, tt.want, string(value))
		})
	}
}
