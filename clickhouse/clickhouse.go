package clickhouse

import (
	"context"
	"database/sql"
	"errors"
	"fmt"
	"sync/atomic"
	"time"

	driver "github.com/ClickHouse/clickhouse-go/v2"
)

// ErrClosed is returned by every operation attempted after Close.
var ErrClosed = errors.New("clickhouse: storage is closed")

type Storage struct {
	session  driver.Conn
	table    string
	ownsConn bool

	closed atomic.Bool
}

// New returns a new [*Storage] given a [Config], using context.Background() for initialization.
func New(configuration Config) (*Storage, error) {
	return NewWithContext(context.Background(), configuration)
}

// NewWithContext returns a new [*Storage] given a [Config], using ctx for the
// initialization operations (table creation, optional reset, and ping).
func NewWithContext(ctx context.Context, configuration Config) (*Storage, error) {
	cfg, engine, err := defaultConfig(configuration)
	if err != nil {
		return nil, err
	}

	conn, err := driver.Open(&cfg)
	if err != nil {
		return nil, err
	}

	return newStorage(ctx, conn, true, engine, configuration)
}

// NewFromConnection returns a new [*Storage] on an existing connection, which stays the caller's to close.
func NewFromConnection(conn driver.Conn, configuration Config) (*Storage, error) {
	return NewFromConnectionWithContext(context.Background(), conn, configuration)
}

// NewFromConnectionWithContext returns a new [*Storage] on an existing connection, using ctx for the
// initialization operations (table creation, optional reset, and ping). The connection stays the caller's to close.
func NewFromConnectionWithContext(ctx context.Context, conn driver.Conn, configuration Config) (*Storage, error) {
	if conn == nil {
		return nil, errors.New("connection not provided")
	}

	// defaultConfig validates the table name and defaults the engine; its dial options go unused here.
	_, engine, err := defaultConfig(configuration)
	if err != nil {
		return nil, err
	}

	return newStorage(ctx, conn, false, engine, configuration)
}

// newStorage prepares the table on conn; conn is released only when this driver opened it.
func newStorage(ctx context.Context, conn driver.Conn, ownsConn bool, engine ClickhouseEngine, configuration Config) (*Storage, error) {
	closeOwned := func() {
		if ownsConn {
			_ = conn.Close()
		}
	}

	queryWithEngine := fmt.Sprintf(createTableString, engine)
	if err := conn.Exec(ctx, queryWithEngine, driver.Named("table", configuration.Table)); err != nil {
		closeOwned()
		return nil, err
	}

	if configuration.Clean {
		if err := conn.Exec(ctx, resetDataString, driver.Named("table", configuration.Table)); err != nil {
			closeOwned()
			return nil, err
		}
	}

	if err := conn.Ping(ctx); err != nil {
		closeOwned()
		return nil, err
	}

	return &Storage{
		session:  conn,
		table:    configuration.Table,
		ownsConn: ownsConn,
	}, nil
}

func (s *Storage) SetWithContext(ctx context.Context, key string, value []byte, expiration time.Duration) error {
	if s.isClosed() {
		return ErrClosed
	}
	if len(key) <= 0 || len(value) <= 0 {
		return nil
	}

	exp := time.Time{}
	if expiration > 0 {
		// Round the one-second deadline up: truncating expires early, and a sub-second expiration would be written as past.
		deadline := time.Now().Add(expiration).UTC()
		if deadline.Nanosecond() != 0 {
			deadline = deadline.Truncate(time.Second).Add(time.Second)
		}
		exp = deadline
	}

	return s.
		session.
		Exec(
			ctx,
			insertDataString,
			driver.Named("table", s.table),
			driver.Named("key", key),
			driver.Named("value", string(value)),
			driver.Named("expiration", exp.Format("2006-01-02 15:04:05")),
		)
}

func (s *Storage) Set(key string, value []byte, expiration time.Duration) error {
	return s.SetWithContext(context.Background(), key, value, expiration)
}

func (s *Storage) GetWithContext(ctx context.Context, key string) ([]byte, error) {
	if s.isClosed() {
		return nil, ErrClosed
	}
	if len(key) == 0 {
		return []byte{}, nil
	}

	var result schema

	row := s.session.QueryRow(
		ctx,
		selectDataString,
		driver.Named("table", s.table),
		driver.Named("key", key),
	)
	if row.Err() != nil {
		return []byte{}, row.Err()
	}

	if err := row.ScanStruct(&result); err != nil {
		if errors.Is(err, sql.ErrNoRows) {
			return []byte{}, nil
		}

		return []byte{}, err
	}

	// The result.Expiration.IsZero() was returning a false value even when the time was
	// set to be the zero value of the time.Time struct (Jan 1st 1970, 00:00:00 UTC)
	// so we had to change the comparison
	if !time.Unix(0, 0).Equal(result.Expiration) && result.Expiration.Before(time.Now().UTC()) {
		return []byte{}, nil
	}

	return []byte(result.Value), nil
}

func (s *Storage) Get(key string) ([]byte, error) {
	return s.GetWithContext(context.Background(), key)
}

func (s *Storage) DeleteWithContext(ctx context.Context, key string) error {
	if s.isClosed() {
		return ErrClosed
	}
	if len(key) == 0 {
		return nil
	}

	return s.session.Exec(ctx, deleteDataString, driver.Named("table", s.table), driver.Named("key", key))
}

func (s *Storage) Delete(key string) error {
	return s.DeleteWithContext(context.Background(), key)
}

func (s *Storage) ResetWithContext(ctx context.Context) error {
	if s.isClosed() {
		return ErrClosed
	}
	return s.session.Exec(ctx, resetDataString, driver.Named("table", s.table))
}

func (s *Storage) Reset() error {
	return s.ResetWithContext(context.Background())
}

// isClosed reports whether Close ran; a borrowed connection stays open, so the latch is the only signal.
func (s *Storage) isClosed() bool {
	return s.closed.Load()
}

// Close the connection unless it came from NewFromConnection. Safe to call more than once; a failed close is reported once.
func (s *Storage) Close() error {
	// Idempotent: only the first Close tears anything down.
	if !s.closed.CompareAndSwap(false, true) {
		return nil
	}

	if !s.ownsConn {
		return nil
	}

	// Latched even on failure: the driver tears the connection down once, so a retry would report a success that never happened.
	err := s.session.Close()
	return err
}
