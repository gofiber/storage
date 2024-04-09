package clickhouse

import (
	"context"
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
		return &Storage{}, err
	}

	conn, err := driver.Open(&cfg)
	if err != nil {
		return &Storage{}, err
	}

	ctx := driver.Context(context.Background(), driver.WithParameters(driver.Parameters{
		"table": configuration.Table,
	}))

	if configuration.Clean {
		queryWithEngine := fmt.Sprintf(createTableString, engine)
		if err := conn.Exec(ctx, queryWithEngine); err != nil {
			return &Storage{}, err
		}

		if err := conn.Exec(ctx, resetDataString); err != nil {
			return &Storage{}, err
		}
	}

	return &Storage{
		session: conn,
		context: ctx,
		table:   configuration.Table,
	}, conn.Ping(ctx)
}

func (s *Storage) Set(key string, value string, expiration time.Duration) error {
	if len(key) <= 0 || len(value) <= 0 {
		return nil
	}

	exp := time.Time{}
	if expiration != 0 {
		exp = time.Now().Add(expiration).UTC()
	}

	ctx := driver.Context(s.context, driver.WithParameters(driver.Parameters{
		"key":        key,
		"value":      value,
		"expiration": exp.Format("2006-01-02 15:04:05"),
		"table":      s.table,
	}))

	err := s.
		session.
		Exec(
			ctx,
			insertDataString,
		)

	return err
}

func (s *Storage) Get(key string) ([]byte, error) {
	var resultSlice []schema

	ctx := driver.Context(s.context, driver.WithParameters(driver.Parameters{
		"key":   key,
		"table": s.table,
	}))
	err := s.session.Select(ctx, &resultSlice, selectDataString)
	if err != nil {
		return nil, err
	}
	result := resultSlice[0]

	if !result.Expiration.IsZero() && result.Expiration.UTC().Unix() <= time.Now().UTC().Unix() {
		return nil, nil
	}

	return []byte(result.Value), err
}

func (s *Storage) Delete(key string) error {
	ctx := driver.Context(s.context, driver.WithParameters(driver.Parameters{
		"table": s.table,
		"key":   key,
	}))

	return s.session.Exec(ctx, deleteDataString)
}

func (s *Storage) Reset() error {
	return s.session.Exec(s.context, resetDataString)
}

func (s *Storage) Close() error {
	return s.session.Close()
}
