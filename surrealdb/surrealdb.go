package surrealdb

import (
	"github.com/surrealdb/surrealdb.go"
	"time"
)

// Storage interface that is implemented by storage providers
type Storage struct {
	db *surrealdb.DB
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
		Access:   cfg.Access,
		Scope:    cfg.Scope,
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
		db: db,
	}
}

func (s *Storage) Get(key string) ([]byte, error) {
	// TODO implement me
	panic("implement me")
}

func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	//TODO implement me
	panic("implement me")
}

func (s *Storage) Delete(key string) error {
	//TODO implement me
	panic("implement me")
}

func (s *Storage) Reset() error {
	//TODO implement me
	panic("implement me")
}

func (s *Storage) Close() error {
	//TODO implement me
	panic("implement me")
}
