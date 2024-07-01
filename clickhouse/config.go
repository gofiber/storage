package clickhouse

import (
	"crypto/tls"
	"errors"
	"fmt"
	"log"
	"time"

	driver "github.com/ClickHouse/clickhouse-go/v2"
)

type ClickhouseEngine string

type schema struct {
	Value      string    `ch:"value"`
	Expiration time.Time `ch:"expiration"`
}

const (
	Memory    ClickhouseEngine = "Memory"
	MergeTree ClickhouseEngine = "MergeTree"
	StripeLog ClickhouseEngine = "StripeLog"
	TinyLog   ClickhouseEngine = "TinyLog"
	Log       ClickhouseEngine = "Log"
)

// Config defines configuration options for Clickhouse connection.
type Config struct {
	// The host of the database. Ex: 127.0.0.1
	Host string
	// The port where the database is supposed to listen to. Ex: 9000
	Port int
	// The database that the connection should authenticate from
	Database string
	// The username to be used in the authentication
	Username string
	// The password to be used in the authentication
	Password string
	// The name of the table that will store the data
	Table string
	// The engine that should be used in the table
	Engine ClickhouseEngine
	// Should start a clean table, default false
	Clean bool
	// TLS configuration, default nil
	TLSConfig *tls.Config
	// Should the connection be in debug mode, default false
	Debug bool
	// The function to use with the debug config, default print function. It only works when debug is true
	Debugf func(format string, v ...any)
}

func defaultConfig(configuration Config) (driver.Options, ClickhouseEngine, error) {
	if configuration.Table == "" {
		return driver.Options{}, "", errors.New("table name not provided")
	}

	if configuration.Host == "" {
		configuration.Host = "localhost"
	}

	if configuration.Port == 0 {
		configuration.Port = 9000
	}

	if configuration.Engine == "" {
		configuration.Engine = Memory
	}

	config := driver.Options{
		Addr: []string{fmt.Sprintf("%s:%d", configuration.Host, configuration.Port)},
	}

	if configuration.Username != "" && configuration.Password != "" {
		config.Auth = driver.Auth{
			Database: configuration.Database,
			Username: configuration.Username,
			Password: configuration.Password,
		}
	}

	if configuration.TLSConfig != nil {
		config.TLS = configuration.TLSConfig
	}

	if configuration.Debug && config.Debugf == nil {
		config.Debugf = log.Printf
	}

	return config, configuration.Engine, nil
}

const resetDataString = `
  TRUNCATE TABLE {table:Identifier}
`

const deleteDataString = `
  ALTER TABLE {table:Identifier} DELETE WHERE key = {key:String}
`

const selectDataString = `
	SELECT value, expiration FROM {table:Identifier} WHERE key = {key:String}
`

const insertDataString = `
  INSERT INTO {table:Identifier} (*) VALUES ({key:String}, {value:String}, {expiration:Datetime})
`

const createTableString = `
  CREATE TABLE IF NOT EXISTS {table:Identifier} (
  	  key String CODEC(ZSTD(1))
  	, value String CODEC(ZSTD(1))
  	, expiration Datetime CODEC(ZSTD(1))
  ) ENGINE=%s
`
