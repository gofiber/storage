package surrealdb

import (
	"encoding/json"
	"fmt"
	"github.com/surrealdb/surrealdb.go"
	"github.com/surrealdb/surrealdb.go/pkg/models"
	"time"
)

// Storage interface that is implemented by storage providers
type Storage struct {
	db    *surrealdb.DB
	table string
}

type model struct {
	Key string `json:"k"`
	Val []byte `json:"v"`
	Exp int64  `json:"e"`
}

func New(config ...Config) *Storage {
	cfg := configDefault(config...)
	db, err := surrealdb.New(cfg.ConnectionString)
	if err != nil {
		panic(err)
	}

	if err = db.Use(cfg.Namespace, cfg.Database); err != nil {
		panic(err)
	}

	authData := &surrealdb.Auth{
		Username: cfg.Username,
		Password: cfg.Password,
	}

	token, err := db.SignIn(authData)
	if err != nil {
		panic(err)
	}

	if err := db.Authenticate(token); err != nil {
		panic(err)
	}

	//defer func(token string) {
	//	if err := db.Invalidate(); err != nil {
	//		panic(err)
	//	}
	//}(token)

	return &Storage{
		db:    db,
		table: cfg.DefaultTable,
	}
}

func (s *Storage) Get(key string) ([]byte, error) {
	recordID := models.NewRecordID(s.table, key)
	m, err := surrealdb.Select[model, models.RecordID](s.db, recordID)
	if err != nil {
		return nil, err
	}
	bytes, err := json.Marshal(m)
	if err != nil {
		return nil, err
	}
	return bytes, nil
}

func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	create, err := surrealdb.Create[model](s.db, models.Table(key), &model{Key: key, Val: val, Exp: int64(exp)})
	if err != nil {
		return err
	}

	bytes, err := json.Marshal(create)
	if err != nil {
		return err
	}
	fmt.Println(string(bytes))
	return nil
}

func (s *Storage) Delete(key string) error {
	_, err := surrealdb.Delete[model](s.db, models.NewRecordID(s.table, key))
	if err != nil {
		return err
	}
	return nil
}

func (s *Storage) Reset() error {
	_, err := surrealdb.Delete[[]model](s.db, models.Table(s.table))
	if err != nil {
		return err
	}
	return nil
}

func (s *Storage) Close() error {
	return s.db.Close()
}

func (s *Storage) List(table string) ([]byte, error) {
	a, err := surrealdb.Select[[]map[string]interface{}, models.Table](s.db, models.Table(table))
	if err != nil {
		return nil, err
	}
	bytes, err := json.Marshal(a)
	if err != nil {
		return nil, err
	}
	return bytes, nil
}
