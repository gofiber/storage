package valkey

import (
	"crypto/tls"
	"time"

	"github.com/valkey-io/valkey-go"
)

// Config defines the config for storage.
type Config struct {
	// Server username
	//
	// Optional. Default is ""
	Username string

	// Server password
	//
	// Optional. Default is ""
	Password string

	// ClientName will execute the `CLIENT SETNAME ClientName` command for each conn.
	//
	// Optional. Default is ""
	ClientName string

	// URL standard format Redis URL. If this is set all other config options, InitAddress, Username, Password, ClientName, and SelectDB have no effect.
	//
	// Example: redis://<user>:<pass>@localhost:6379/<db>
	// Optional. Default is ""
	URL string

	// SelectDB to be selected after connecting to the server.
	//
	// Optional. Default is 0
	SelectDB int

	// Either a single address or a seed list of host:port addresses, this enables FailoverClient and ClusterClient
	//
	// Optional. Default is []string{"127.0.0.1:6379"}
	InitAddress []string

	// TLS Config to use. When set TLS will be negotiated.
	//
	// Optional. Default is nil
	TLSConfig *tls.Config

	// CacheSizeEachConn is redis client side cache size that bind to each TCP connection to a single redis instance.
	//
	// Optional. The default is DefaultCacheBytes: 128 * (1 << 20)
	CacheSizeEachConn int

	// RingScaleEachConn sets the size of the ring buffer in each connection to (2 ^ RingScaleEachConn).
	//
	// Optional. The default is RingScaleEachConn, which results into having a ring of size 2^10 for each connection.
	RingScaleEachConn int

	// ReadBufferEachConn is the size of the bufio.NewReaderSize for each connection, default to DefaultReadBuffer (0.5 MiB).
	//
	// Optional. The default is DefaultReadBuffer: 1 << 19
	ReadBufferEachConn int

	// WriteBufferEachConn is the size of the bufio.NewWriterSize for each connection, default to DefaultWriteBuffer (0.5 MiB).
	//
	// Optional. The default is DefaultWriteBuffer: 1 << 19
	WriteBufferEachConn int

	// BlockingPoolSize is the size of the connection pool shared by blocking commands (ex BLPOP, XREAD with BLOCK).
	//
	// Optional. The default is DefaultPoolSize: 1000
	BlockingPoolSize int

	// PipelineMultiplex determines how many tcp connections used to pipeline commands to one redis instance.
	//
	// Optional. The default for single and sentinel clients is 2, which means 4 connections (2^2).
	PipelineMultiplex int

	// DisableRetry disables retrying read-only commands under network errors
	//
	// Optional. The default is False
	DisableRetry bool

	// DisableCache falls back Client.DoCache/Client.DoMultiCache to Client.Do/Client.DoMulti
	//
	// Optional. The default is false
	DisableCache bool

	// AlwaysPipelining makes valkey.Client always pipeline redis commands even if they are not issued concurrently.
	//
	// Optional. The default is true
	AlwaysPipelining bool

	// Reset clears any existing keys in existing Collection
	//
	// Optional. Default is false
	Reset bool

	// CacheTTL TTL
	//
	// Optional. Default is time.Minute
	CacheTTL time.Duration
}

// ConfigDefault is the default config
var ConfigDefault = Config{
	Username:            "",
	Password:            "",
	ClientName:          "",
	URL:                 "",
	SelectDB:            0,
	InitAddress:         []string{"127.0.0.1:6379"},
	TLSConfig:           nil,
	CacheSizeEachConn:   valkey.DefaultCacheBytes,
	RingScaleEachConn:   valkey.DefaultRingScale,
	ReadBufferEachConn:  valkey.DefaultReadBuffer,
	WriteBufferEachConn: valkey.DefaultWriteBuffer,
	BlockingPoolSize:    valkey.DefaultPoolSize,
	PipelineMultiplex:   2,
	DisableRetry:        false,
	DisableCache:        false,
	AlwaysPipelining:    true,
	Reset:               false,
	CacheTTL:            time.Minute,
}

// Helper function to set default values
func configDefault(config ...Config) Config {
	// Return default config if nothing provided
	if len(config) < 1 {
		return ConfigDefault
	}

	// Start with the default configuration
	cfg := ConfigDefault

	// Override default config with values from provided config
	userConfig := config[0]

	if userConfig.Username != "" {
		cfg.Username = userConfig.Username
	}
	if userConfig.Password != "" {
		cfg.Password = userConfig.Password
	}
	if userConfig.ClientName != "" {
		cfg.ClientName = userConfig.ClientName
	}
	if userConfig.URL != "" {
		cfg.URL = userConfig.URL
	}
	if userConfig.SelectDB != 0 {
		cfg.SelectDB = userConfig.SelectDB
	}
	if len(userConfig.InitAddress) > 0 {
		cfg.InitAddress = userConfig.InitAddress
	}
	if userConfig.TLSConfig != nil {
		cfg.TLSConfig = userConfig.TLSConfig
	}
	if userConfig.CacheSizeEachConn != 0 {
		cfg.CacheSizeEachConn = userConfig.CacheSizeEachConn
	}
	if userConfig.RingScaleEachConn != 0 {
		cfg.RingScaleEachConn = userConfig.RingScaleEachConn
	}
	if userConfig.ReadBufferEachConn != 0 {
		cfg.ReadBufferEachConn = userConfig.ReadBufferEachConn
	}
	if userConfig.WriteBufferEachConn != 0 {
		cfg.WriteBufferEachConn = userConfig.WriteBufferEachConn
	}
	if userConfig.BlockingPoolSize != 0 {
		cfg.BlockingPoolSize = userConfig.BlockingPoolSize
	}
	if userConfig.PipelineMultiplex != 0 {
		cfg.PipelineMultiplex = userConfig.PipelineMultiplex
	}
	if userConfig.CacheTTL != time.Second {
		cfg.CacheTTL = userConfig.CacheTTL
	}
	if userConfig.DisableRetry {
		cfg.DisableRetry = true
	}

	if userConfig.DisableCache {
		cfg.DisableCache = true
	}

	if userConfig.AlwaysPipelining {
		cfg.AlwaysPipelining = true
	}

	if userConfig.Reset {
		cfg.Reset = true
	}

	return cfg
}
