package leveldb

import (
	"runtime"
	"time"
)

// Config holds the configuration options for LevelDB database
type Config struct {
	// Path is the filesystem path for the database
	//
	// Optional. Default is "./fiber.leveldb"
	Path string

	// CacheSize is the size of LevelDB's cache (in MB)
	//
	// Optional. Default is 8MB
	CacheSize int

	// BlockSize is the size of data blocks (in KB)
	//
	// Optional. Default is 4KB
	BlockSize int

	// WriteBuffer is the size of write buffer (in MB)
	//
	// Optional. Default is 4MB
	WriteBuffer int

	// CompactionL0Trigger is the number of level-0 tables that triggers compaction
	//
	// Optional. Default is 4
	CompactionL0Trigger int

	// WriteL0PauseTrigger is the number of level-0 tables that triggers write pause
	//
	// Optional. Default is 12
	WriteL0PauseTrigger int

	// WriteL0SlowdownTrigger is the number of level-0 tables that triggers write slowdown
	//
	// Optional. Default is 8
	WriteL0SlowdownTrigger int

	// MaxOpenFiles is the maximum number of open files that can be held
	//
	// Optional. Default is 200 on MacOS, 500 on others
	MaxOpenFiles int

	// CompactionTableSize is the size of compaction table (in MB)
	//
	// Optional. Default is 2MB
	CompactionTableSize int

	// BloomFilterBits is the number of bits used in bloom filter
	//
	// Optional. Default is 10 bits/key
	BloomFilterBits int

	// NoSync completely disables fsync
	//
	// Optional. Default is false
	NoSync bool

	// ReadOnly opens the database in read-only mode
	//
	// Optional. Default is false
	ReadOnly bool

	// ErrorIfMissing returns error if database doesn't exist
	//
	// Optional. Default is false
	ErrorIfMissing bool

	// ErrorIfExist returns error if database exists
	//
	// Optional. Default is false
	ErrorIfExist bool

	// GCInterval is the garbage collection interval
	//
	// Optional. Default is 10 minutes
	GCInterval time.Duration
}

// ConfigDefault is the default config
var ConfigDefault = Config{
	Path:                   "./fiber.leveldb",
	CacheSize:              8, // 8 MB
	BlockSize:              4, // 4 KB
	WriteBuffer:            4, // 4 MB
	CompactionL0Trigger:    4,
	WriteL0PauseTrigger:    12,
	WriteL0SlowdownTrigger: 8,
	MaxOpenFiles: func() int {
		if runtime.GOOS == "darwin" {
			return 200 // MacOS
		}
		return 500 // Unix/Linux
	}(),
	CompactionTableSize: 2,  // 2 MB
	BloomFilterBits:     10, // 10 bits per key
	NoSync:              false,
	ReadOnly:            false,
	ErrorIfMissing:      false,
	ErrorIfExist:        false,
	GCInterval:          10 * time.Minute,
}

// configDefault is a helper function to set default values for the config
func configDefault(config ...Config) Config {
	if len(config) < 1 {
		return ConfigDefault
	}

	cfg := config[0]

	if cfg.Path == "" {
		cfg.Path = ConfigDefault.Path
	}

	if cfg.CacheSize <= 0 {
		cfg.CacheSize = ConfigDefault.CacheSize
	}

	if cfg.BlockSize <= 0 {
		cfg.BlockSize = ConfigDefault.BlockSize
	}

	if cfg.WriteBuffer <= 0 {
		cfg.WriteBuffer = ConfigDefault.WriteBuffer
	}

	if cfg.CompactionL0Trigger <= 0 {
		cfg.CompactionL0Trigger = ConfigDefault.CompactionL0Trigger
	}

	if cfg.WriteL0PauseTrigger <= 0 {
		cfg.WriteL0PauseTrigger = ConfigDefault.WriteL0PauseTrigger
	}

	if cfg.WriteL0SlowdownTrigger <= 0 {
		cfg.WriteL0SlowdownTrigger = ConfigDefault.WriteL0SlowdownTrigger
	}

	if cfg.MaxOpenFiles <= 0 {
		cfg.MaxOpenFiles = ConfigDefault.MaxOpenFiles
	}

	if cfg.CompactionTableSize <= 0 {
		cfg.CompactionTableSize = ConfigDefault.CompactionTableSize
	}

	if cfg.BloomFilterBits <= 0 {
		cfg.BloomFilterBits = ConfigDefault.BloomFilterBits
	}

	if cfg.GCInterval <= 0 {
		cfg.GCInterval = ConfigDefault.GCInterval
	}

	return cfg
}
