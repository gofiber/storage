package clickhouse

import (
	"context"
	"database/sql"
	"errors"
	"fmt"
	"log"
	"math"
	"slices"
	"sync"
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

	stopGC context.CancelFunc
	gcDone sync.WaitGroup

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

	// Tables created by older versions lack the column; their rows read as version 0, older than any new write.
	if conn.Exec(ctx, probeVersionString, driver.Named("table", configuration.Table)) != nil {
		err := conn.Exec(ctx, addVersionString, driver.Named("table", configuration.Table))
		if configuration.Clean && hasExceptionCode(err, 48) {
			// Clean discards the rows anyway, so a table that cannot add a column (the Log engines) is recreated.
			if err = conn.Exec(ctx, dropTableString, driver.Named("table", configuration.Table)); err == nil {
				err = conn.Exec(ctx, queryWithEngine, driver.Named("table", configuration.Table))
			}
		}
		if err != nil {
			closeOwned()
			return nil, fmt.Errorf("clickhouse: add version column to table %q: %w", configuration.Table, err)
		}
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

	gcCtx, stopGC := context.WithCancel(context.Background())
	store := &Storage{
		session:  conn,
		table:    configuration.Table,
		ownsConn: ownsConn,
		stopGC:   stopGC,
	}

	gcInterval := configuration.GCInterval
	if gcInterval == 0 {
		gcInterval = defaultGCInterval
	}
	if gcInterval > 0 {
		store.gcDone.Go(func() { store.gcTicker(gcCtx, gcInterval) })
	}

	return store, nil
}

func (s *Storage) SetWithContext(ctx context.Context, key string, value []byte, expiration time.Duration) error {
	if s.isClosed() {
		return ErrClosed
	}
	if len(key) <= 0 || len(value) <= 0 {
		return nil
	}

	var exp uint32
	if expiration > 0 {
		// Round the one-second deadline up: truncating expires early, and a sub-second expiration would be written as past.
		deadline := time.Now().Add(expiration)
		if deadline.Nanosecond() != 0 {
			deadline = deadline.Truncate(time.Second).Add(time.Second)
		}
		// DateTime ends in 2106; a later deadline would wrap around into the past.
		exp = uint32(min(deadline.Unix(), math.MaxUint32))
	}

	return s.
		session.
		Exec(
			ctx,
			insertDataString,
			driver.Named("table", s.table),
			driver.Named("key", key),
			driver.Named("value", string(value)),
			driver.Named("expiration", exp),
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
		return nil, nil
	}

	var result schema

	row := s.session.QueryRow(
		ctx,
		selectDataString,
		driver.Named("table", s.table),
		driver.Named("key", key),
	)
	if row.Err() != nil {
		return nil, row.Err()
	}

	if err := row.ScanStruct(&result); err != nil {
		if errors.Is(err, sql.ErrNoRows) {
			return nil, nil
		}

		return nil, err
	}

	// The result.Expiration.IsZero() was returning a false value even when the time was
	// set to be the zero value of the time.Time struct (Jan 1st 1970, 00:00:00 UTC)
	// so we had to change the comparison
	if !time.Unix(0, 0).Equal(result.Expiration) && result.Expiration.Before(time.Now().UTC()) {
		return nil, nil
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

	// A tombstone instead of an ALTER TABLE ... DELETE mutation, which MergeTree runs in the background:
	// the newest row is already expired, so Get misses at once on every engine, and the collector removes it.
	return s.session.Exec(
		ctx,
		insertDataString,
		driver.Named("table", s.table),
		driver.Named("key", key),
		driver.Named("value", ""),
		driver.Named("expiration", uint32(1)),
	)
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

// Close stops the collector and closes the connection unless it came from NewFromConnection. Safe to call more than once; a failed close is reported once.
func (s *Storage) Close() error {
	// Cancelling also abandons a running sweep, so a stalled mutation cannot hold Close open.
	s.stopGC()
	s.gcDone.Wait()

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

func (s *Storage) gcTicker(ctx context.Context, interval time.Duration) {
	ticker := time.NewTicker(interval)
	defer ticker.Stop()
	for {
		select {
		case <-ctx.Done():
			return
		case t := <-ticker.C:
			err := s.gc(ctx, t)
			if err == nil || ctx.Err() != nil {
				continue
			}
			if sweepCannotSucceed(err) {
				log.Printf("clickhouse: stopped deleting expired and replaced rows from table %q: %v", s.table, err)
				return
			}
			// Retried next tick, but logged so a sweep that keeps failing (memory limit, timeout) is noticed.
			log.Printf("clickhouse: deleting expired and replaced rows from table %q: %v", s.table, err)
		}
	}
}

// gc deletes expired and replaced rows. The mutation rewrites the data, so it only runs when there is something to delete.
func (s *Storage) gc(ctx context.Context, t time.Time) error {
	table, now := driver.Named("table", s.table), driver.Named("now", uint32(t.Unix()))

	var dead uint64
	if err := s.session.QueryRow(ctx, gcCountString, table, now).Scan(&dead); err != nil || dead == 0 {
		return err
	}
	return s.session.Exec(ctx, gcDataString, table, now)
}

// sweepCannotSucceed reports errors no later sweep gets past: the Log engines have no mutations (48),
// replicated tables reject the subquery (36), and the user may lack the ALTER DELETE grant (497).
func sweepCannotSucceed(err error) bool {
	return hasExceptionCode(err, 36, 48, 497)
}

func hasExceptionCode(err error, codes ...int32) bool {
	var exception *driver.Exception
	return errors.As(err, &exception) && slices.Contains(codes, exception.Code)
}
