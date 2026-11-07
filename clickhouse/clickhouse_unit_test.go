package clickhouse

import (
	"context"
	"crypto/tls"
	"database/sql"
	"errors"
	"net"
	"testing"
	"time"

	driver "github.com/ClickHouse/clickhouse-go/v2"
	chdriver "github.com/ClickHouse/clickhouse-go/v2/lib/driver"
	"github.com/stretchr/testify/require"
)

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

// openUnreachable opens a driver connection to a closed port; Open itself never dials.
func openUnreachable(t testing.TB) driver.Conn {
	t.Helper()

	opts, _, err := defaultConfig(closedListenerConfig(t, Config{Table: "unreachable"}))
	require.NoError(t, err)

	conn, err := driver.Open(&opts)
	require.NoError(t, err)
	t.Cleanup(func() { _ = conn.Close() })

	return conn
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

// stubRow is a chdriver.Row returning a canned scan error.
type stubRow struct {
	err     error
	scanErr error
	fill    func(dest *schema)
}

func (r stubRow) Err() error { return r.err }

func (r stubRow) Scan(...any) error { return r.scanErr }

func (r stubRow) ScanStruct(dest any) error {
	if r.scanErr != nil {
		return r.scanErr
	}
	if r.fill != nil {
		s, ok := dest.(*schema)
		if !ok {
			return errors.New("unexpected destination type")
		}
		r.fill(s)
	}
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
	tlsCfg := newTLSConfigForTest()

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

func Test_New_ConnectionRefused(t *testing.T) {
	client, err := New(closedListenerConfig(t, Config{Table: "test_table"}))
	require.Error(t, err)
	require.Nil(t, client)
}

func Test_NewFromConnection_CreateTableError(t *testing.T) {
	createErr := errors.New("create failed")
	conn := &stubConn{exec: func(string) error { return createErr }}

	client, err := NewFromConnection(conn, Config{Table: "t"})
	require.ErrorIs(t, err, createErr)
	require.Nil(t, client)
	// A borrowed connection must never be closed on failure.
	require.Zero(t, conn.closed)
}

func Test_NewFromConnection_CleanError(t *testing.T) {
	resetErr := errors.New("truncate failed")
	var queries []string
	conn := &stubConn{exec: func(query string) error {
		queries = append(queries, query)
		if query == resetDataString {
			return resetErr
		}
		return nil
	}}

	client, err := NewFromConnection(conn, Config{Table: "t", Clean: true})
	require.ErrorIs(t, err, resetErr)
	require.Nil(t, client)
	require.Len(t, queries, 2)
	require.Zero(t, conn.closed)
}

func Test_NewFromConnection_PingError(t *testing.T) {
	pingErr := errors.New("ping failed")
	conn := &stubConn{ping: pingErr}

	client, err := NewFromConnection(conn, Config{Table: "t"})
	require.ErrorIs(t, err, pingErr)
	require.Nil(t, client)
	require.Zero(t, conn.closed)
}

func Test_NewStorage_ClosesOwnedConnectionOnFailure(t *testing.T) {
	failure := errors.New("boom")

	tests := []struct {
		name string
		conn *stubConn
		cfg  Config
	}{
		{"create", &stubConn{exec: func(string) error { return failure }}, Config{Table: "t"}},
		{"clean", &stubConn{exec: func(q string) error {
			if q == resetDataString {
				return failure
			}
			return nil
		}}, Config{Table: "t", Clean: true}},
		{"ping", &stubConn{ping: failure}, Config{Table: "t"}},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			client, err := newStorage(context.Background(), tt.conn, true, Memory, tt.cfg)
			require.ErrorIs(t, err, failure)
			require.Nil(t, client)
			require.Equal(t, 1, tt.conn.closed)
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
	client := &Storage{session: openUnreachable(t), table: "unreachable"}

	require.NoError(t, client.Set("", []byte("value"), 0))
	require.NoError(t, client.Set("key", nil, 0))
	require.NoError(t, client.Set("key", []byte{}, time.Minute))

	value, err := client.Get("")
	require.NoError(t, err)
	require.Equal(t, []byte{}, value)

	require.NoError(t, client.Delete(""))
}

func Test_OperationsOnUnreachableServer(t *testing.T) {
	client := &Storage{session: openUnreachable(t), table: "unreachable"}

	require.Error(t, client.Set("key", []byte("value"), time.Minute))

	value, err := client.Get("key")
	require.Error(t, err)
	require.Equal(t, []byte{}, value)

	require.Error(t, client.Delete("key"))
	require.Error(t, client.Reset())
}

func Test_OperationsAfterClose(t *testing.T) {
	client := &Storage{session: openUnreachable(t), table: "unreachable"}
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

func Test_Get_ScanError(t *testing.T) {
	scanErr := errors.New("scan failed")
	client := &Storage{session: &stubConn{row: stubRow{scanErr: scanErr}}, table: "t"}

	value, err := client.Get("key")
	require.ErrorIs(t, err, scanErr)
	require.Equal(t, []byte{}, value)
}

func Test_Get_NoRows(t *testing.T) {
	client := &Storage{session: &stubConn{row: stubRow{scanErr: sql.ErrNoRows}}, table: "t"}

	value, err := client.Get("key")
	require.NoError(t, err)
	require.Equal(t, []byte{}, value)
}

func Test_Get_ExpirationHandling(t *testing.T) {
	tests := []struct {
		name       string
		expiration time.Time
		want       []byte
	}{
		{"no expiration", time.Unix(0, 0), []byte("v")},
		{"future", time.Now().Add(time.Hour), []byte("v")},
		{"past", time.Now().Add(-time.Hour), []byte{}},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			row := stubRow{fill: func(s *schema) {
				s.Value = "v"
				s.Expiration = tt.expiration
			}}
			client := &Storage{session: &stubConn{row: row}, table: "t"}

			value, err := client.Get("key")
			require.NoError(t, err)
			require.Equal(t, tt.want, value)
		})
	}
}

func newTLSConfigForTest() *tls.Config {
	return &tls.Config{MinVersion: tls.VersionTLS12, ServerName: "db.internal"}
}
