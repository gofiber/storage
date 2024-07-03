package clickhouse

import (
	"context"
	"database/sql"
	"errors"
	"fmt"
	"time"

	driver "github.com/ClickHouse/clickhouse-go/v2"
)

type Storage struct {
	session driver.Conn
	context context.Context
	table   string
}

// New returns a new [*Storage] given a [Config].
func New(configuration Config) (*Storage, error) {
	cfg, engine, err := defaultConfig(configuration)
	if err != nil {
		return nil, err
	}

	conn, err := driver.Open(&cfg)
	if err != nil {
		return nil, err
	}

	ctx := context.Background()

	queryWithEngine := fmt.Sprintf(createTableString, engine)
	if err := conn.Exec(ctx, queryWithEngine, driver.Named("table", configuration.Table)); err != nil {
		return nil, err
	}

	if configuration.Clean {
		if err := conn.Exec(ctx, resetDataString, driver.Named("table", configuration.Table)); err != nil {
			return nil, err
		}
	}

	if err := conn.Ping(ctx); err != nil {
		return nil, err
	}

	return &Storage{
		session: conn,
		context: ctx,
		table:   configuration.Table,
	}, nil
}

func (s *Storage) Set(key string, value []byte, expiration time.Duration) error {
	if len(key) <= 0 || len(value) <= 0 {
		return nil
	}

	exp := time.Time{}
	if expiration != 0 {
		exp = time.Now().Add(expiration).UTC()
	}

	return s.
		session.
		Exec(
			s.context,
			insertDataString,
			driver.Named("table", s.table),
			driver.Named("key", key),
			driver.Named("value", string(value)),
			driver.Named("expiration", exp.Format("2006-01-02 15:04:05")),
		)
}

func (s *Storage) Get(key string) ([]byte, error) {
	if len(key) == 0 {
		return []byte{}, nil
	}

	var result schema

	row := s.session.QueryRow(
		s.context,
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

func (s *Storage) Delete(key string) error {
	if len(key) == 0 {
		return nil
	}

	return s.session.Exec(s.context, deleteDataString, driver.Named("table", s.table), driver.Named("key", key))
}

func (s *Storage) Reset() error {
	return s.session.Exec(s.context, resetDataString, driver.Named("table", s.table))
}

func (s *Storage) Close() error {
	return s.session.Close()
}
