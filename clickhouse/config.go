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
	// Time between sweeps of expired and replaced rows, default 10 * time.Minute; a negative value disables them
	GCInterval time.Duration
}

// Longer than MergeTree's default old_parts_lifetime (8 minutes), so the parts a sweep replaces are gone before the next one.
const defaultGCInterval = 10 * time.Minute

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
		// An empty Username logs in as "default", so a passwordless user still gets its Database.
		Auth: driver.Auth{
			Database: configuration.Database,
			Username: configuration.Username,
			Password: configuration.Password,
		},
	}

	if configuration.TLSConfig != nil {
		config.TLS = configuration.TLSConfig
	}

	//nolint:staticcheck // Keep backward-compatible debug hook until Logger migration is introduced.
	if configuration.Debug && config.Debugf == nil {
		//nolint:staticcheck // Keep backward-compatible debug hook until Logger migration is introduced.
		config.Debugf = log.Printf
	}

	return config, configuration.Engine, nil
}

const resetDataString = `
  TRUNCATE TABLE {table:Identifier}
`

// Rows are never updated in place: a key's entry is its row with the highest version.
const selectDataString = `
	SELECT value, expiration FROM {table:Identifier} WHERE key = {key:String} ORDER BY version DESC LIMIT 1
`

// The expiration goes in as Unix seconds, since zone-less DateTime text is read in the server's time zone.
// Waiting for the async insert and the Distributed send makes a Set or Delete visible to the next Get whatever the profile says.
const insertDataString = `
  INSERT INTO {table:Identifier} (key, value, expiration, version) SETTINGS wait_for_async_insert = 1, insert_distributed_sync = 1
  VALUES ({key:String}, {value:String}, toDateTime({expiration:UInt32}), toUnixTimestamp64Nano(now64(9)))
`

// Matches every row but the newest of each key that still has a live row. The newest row of such a key is never
// deleted, so whatever order the rows are swept in, no replaced value can resurface.
const gcWhereString = `
  (key, version) NOT IN (
    SELECT key, max(version) FROM {table:Identifier} GROUP BY key
    HAVING countIf(expiration = toDateTime(0) OR expiration > toDateTime({now:UInt32})) > 0
  )
`

const gcCountString = `SELECT count() FROM {table:Identifier} WHERE ` + gcWhereString

const gcDataString = `ALTER TABLE {table:Identifier} DELETE WHERE ` + gcWhereString + ` SETTINGS mutations_sync = 1`

const createTableString = `
  CREATE TABLE IF NOT EXISTS {table:Identifier} (
  	  key String CODEC(ZSTD(1))
  	, value String CODEC(ZSTD(1))
  	, expiration Datetime CODEC(ZSTD(1))
  	, version UInt64 CODEC(ZSTD(1))
  ) ENGINE=%s
`

const probeVersionString = `
  SELECT version FROM {table:Identifier} LIMIT 0
`

const addVersionString = `
  ALTER TABLE {table:Identifier} ADD COLUMN IF NOT EXISTS version UInt64 CODEC(ZSTD(1))
`

const dropTableString = `
  DROP TABLE {table:Identifier}
`
