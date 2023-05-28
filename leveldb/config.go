package leveldb

import (
	"github.com/syndtr/goleveldb/leveldb/opt"
)

type Config struct {
	Path                string
	LevelDBOptions      *opt.Options
	LevelDBReadOptions  *opt.ReadOptions
	LevelDBWriteOptions *opt.WriteOptions
}

var ConfigDefault = Config{
	Path:                "./leveldb",
	LevelDBOptions:      &opt.Options{},
	LevelDBReadOptions:  &opt.ReadOptions{},
	LevelDBWriteOptions: &opt.WriteOptions{},
}

func configDefault(config ...Config) Config {
	if len(config) < 1 {
		return configDefault(config...)
	}

	cfg := config[0]

	if cfg.Path == "" {
		cfg.Path = ConfigDefault.Path
	}

	if cfg.LevelDBOptions == nil {
		cfg.LevelDBOptions = ConfigDefault.LevelDBOptions
	}

	if cfg.LevelDBReadOptions == nil {
		cfg.LevelDBReadOptions = ConfigDefault.LevelDBReadOptions
	}

	if cfg.LevelDBWriteOptions == nil {
		cfg.LevelDBWriteOptions = ConfigDefault.LevelDBWriteOptions
	}

	return cfg
}
