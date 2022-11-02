package gorm

import (
	"database/sql"
	"errors"
	"time"

	"gorm.io/driver/mysql"
	"gorm.io/driver/postgres"
	"gorm.io/driver/sqlite"
	"gorm.io/driver/sqlserver"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

// Storage interface that is implemented by storage providers
type Storage struct {
	db         *gorm.DB
	sqldb      *sql.DB
	gcInterval time.Duration
	tableName  string
	done       chan struct{}
}

type table struct {
	Key        string `gorm:"column:k;primaryKey;type:varchar(64);not null"`
	Value      []byte `gorm:"column:v;not null"`
	Expiration int64  `gorm:"column:e;index;not null"`
}

// New creates a new storage
func New(config ...Config) *Storage {
	var err error
	var db *gorm.DB
	var sqldb *sql.DB

	// Set default config
	cfg := configDefault(config...)

	if cfg.Db != nil {
		// Use passed db
		db = cfg.Db

		sqldb, err = db.DB()
		if err != nil {
			panic(err)
		}
	} else {
		// Create db
		switch cfg.Dialect {
		case "mysql":
			db, err = gorm.Open(mysql.Open(cfg.ConnectionURI), &gorm.Config{
				SkipDefaultTransaction: cfg.SkipDefaultTransaction,
				PrepareStmt:            cfg.PrepareStmt,
				Logger:                 logger.Default.LogMode(logger.Silent),
			})
			if err != nil {
				panic(err)
			}
		case "postgres":
			db, err = gorm.Open(postgres.Open(cfg.ConnectionURI), &gorm.Config{
				SkipDefaultTransaction: cfg.SkipDefaultTransaction,
				PrepareStmt:            cfg.PrepareStmt,
				Logger:                 logger.Default.LogMode(logger.Silent),
			})
			if err != nil {
				panic(err)
			}
		case "sqlite":
			db, err = gorm.Open(sqlite.Open(cfg.ConnectionURI), &gorm.Config{
				SkipDefaultTransaction: cfg.SkipDefaultTransaction,
				PrepareStmt:            cfg.PrepareStmt,
				Logger:                 logger.Default.LogMode(logger.Silent),
			})
			if err != nil {
				panic(err)
			}
		case "sqlserver":
			db, err = gorm.Open(sqlserver.Open(cfg.ConnectionURI), &gorm.Config{
				SkipDefaultTransaction: cfg.SkipDefaultTransaction,
				PrepareStmt:            cfg.PrepareStmt,
				Logger:                 logger.Default.LogMode(logger.Silent),
			})
			if err != nil {
				panic(err)
			}
		default:
			panic(errors.New("gorm: invalid dialect"))
		}

		sqldb, err = db.DB()
		if err != nil {
			panic(err)
		}

		// Set database options
		sqldb.SetMaxOpenConns(cfg.maxOpenConns)
		sqldb.SetMaxIdleConns(cfg.maxIdleConns)
		sqldb.SetConnMaxLifetime(cfg.connMaxLifetime)
	}

	// Ping database to ensure a connection has been made
	if err := sqldb.Ping(); err != nil {
		panic(err)
	}

	// Drop table if set to true
	if cfg.Reset {
		if err := db.Table(cfg.Table).Migrator().DropTable(cfg.Table); err != nil {
			_ = sqldb.Close()
			panic(err)
		}
	}

	// Init database queries
	if err := db.Table(cfg.Table).Migrator().AutoMigrate(&table{}); err != nil {
		_ = sqldb.Close()
		panic(err)
	}

	// Create storage
	store := &Storage{
		gcInterval: cfg.GCInterval,
		db:         db,
		sqldb:      sqldb,
		tableName:  cfg.Table,
		done:       make(chan struct{}),
	}

	// Start garbage collector
	go store.gcTicker()

	return store
}

// Get value by key
func (s *Storage) Get(key string) ([]byte, error) {
	if len(key) <= 0 {
		return nil, nil
	}

	t := &table{}
	row := s.db.Table(s.tableName).First(t, "k = ?", key)

	if errors.Is(row.Error, gorm.ErrRecordNotFound) {
		return nil, nil
	} else if row.Error != nil {
		return nil, row.Error
	}

	// If the expiration time has already passed, then return nil
	if t.Expiration != 0 && t.Expiration <= time.Now().Unix() {
		return nil, nil
	}

	return t.Value, nil
}

// Set key with value
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	if len(key) <= 0 || len(val) <= 0 {
		return nil
	}

	var expSeconds int64
	if exp != 0 {
		expSeconds = time.Now().Add(exp).Unix()
	}

	row := s.db.Table(s.tableName).Where(table{Key: key}).Assign(table{Value: val, Expiration: expSeconds}).FirstOrCreate(&table{})
	if row.Error != nil {
		return row.Error
	}

	return nil
}

// Delete key by key
func (s *Storage) Delete(key string) error {
	if len(key) <= 0 {
		return nil
	}

	err := s.db.Table(s.tableName).Where("k = ?", key).Delete(&table{}).Error
	return err
}

// Reset all entries, including unexpired
func (s *Storage) Reset() error {
	err := s.db.Table(s.tableName).Where("1 = 1").Delete(&table{}).Error
	return err
}

// Close the database
func (s *Storage) Close() error {
	s.done <- struct{}{}
	return s.sqldb.Close()
}

// Return database client
func (s *Storage) Conn() *gorm.DB {
	return s.db
}

// gcTicker starts the gc ticker
func (s *Storage) gcTicker() {
	ticker := time.NewTicker(s.gcInterval)
	defer ticker.Stop()
	for {
		select {
		case <-s.done:
			return
		case t := <-ticker.C:
			s.gc(t)
		}
	}
}

// gc deletes all expired entries
func (s *Storage) gc(t time.Time) {
	s.db.Table(s.tableName).Where("e <= ? AND e != 0", t.Unix()).Delete(&table{})
}
