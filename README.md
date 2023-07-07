---
title: 👋 Welcome
description: 📦 Premade storage drivers for 🚀 Fiber.
sidebar_position: 1
---

<p align="center">
  <picture>
    <source height="125" media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/gofiber/storage/master/.github/logo-dark.svg">
    <img height="125" alt="Fiber" src="https://raw.githubusercontent.com/gofiber/storage/master/.github/logo.svg">
  </picture>
  <br>

# 📦 Storage

  <a href="https://pkg.go.dev/github.com/gofiber/storage?tab=doc">
    <img src="https://img.shields.io/badge/%F0%9F%93%9A%20godoc-pkg-00ACD7.svg?color=00ACD7&style=flat">
  </a>
  <a href="https://goreportcard.com/report/github.com/gofiber/storage">
    <img src="https://img.shields.io/badge/%F0%9F%93%9D%20goreport-A%2B-75C46B">
  </a>
  <a href="https://gofiber.io/discord">
    <img src="https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7">
  </a>
</p>

Premade storage drivers that implement the [`Storage`](https://github.com/gofiber/storage/blob/main/storage.go) interface, designed to be used with various [Fiber middlewares](https://github.com/gofiber/fiber/tree/master/middleware).

```go
// Storage interface for communicating with different database/key-value
// providers. Visit https://github.com/gofiber/storage for more info.
type Storage interface {
	// Get gets the value for the given key.
	// `nil, nil` is returned when the key does not exist
	Get(key string) ([]byte, error)

	// Set stores the given value for the given key along
	// with an expiration value, 0 means no expiration.
	// Empty key or value will be ignored without an error.
	Set(key string, val []byte, exp time.Duration) error

	// Delete deletes the value for the given key.
	// It returns no error if the storage does not contain the key,
	Delete(key string) error

	// Reset resets the storage and delete all keys.
	Reset() error

	// Close closes the storage and will stop any running garbage
	// collectors and open connections.
	Close() error
}
```

## 📑 Storage Implementations

- [ArangoDB](./arangodb/README.md) <a href="https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+ArangoDB%22"> <img src="https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-arangodb.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B" /> </a>
- [AzureBlob](./azureblob/README.md) <a href="https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Azure+Blob%22"> <img src="https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-azureblob.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B" /> </a>
- [Badger](./badger/README.md) <a href="https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Badger%22"> <img src="https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-badger.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B" /> </a>
- [Bbolt](./bbolt) <a href="https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Bbolt%22"> <img src="https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-bbolt.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B" /> </a>
- [Couchbase](./couchbase/README.md) <a href="https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Couchbase%22"> <img src="https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-couchbase.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B" /> </a>
- [DynamoDB](./dynamodb/README.md) <a href="https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+DynamoDB%22"> <img src="https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-dynamodb.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B" /> </a>
- [Etcd](./etcd/README.md) <a href="https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Etcd%22"> <img src="https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-etcd.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B" /> </a>
- [Memcache](./memcache/README.md) <a href="https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Memcache%22"> <img src="https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-memcache.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B" /> </a>
- [Memory](./memory/README.md) <a href="https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Local+Storage%22"> <img src="https://img.shields.io/github/actions/workflow/status/gofiber/storage/test.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B" /> </a>
- [MongoDB](./mongodb/README.md) <a href="https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Mongodb%22"> <img src="https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-mongodb.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B" /> </a>
- [MSSQL](./mssql/README.md) <a href="https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+MSSQL%22"> <img src="https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-mssql.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B" /> </a>
- [MySQL](./mysql/README.md) <a href="https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+MySQL%22"> <img src="https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-mysql.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B" /> </a>
- [Pebble](./pebble/README.md) <a href="https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Pebble%22"> <img src="https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-pebble.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B" /> </a>
- [Postgres](./postgres/README.md) <a href="https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Postgres%22"> <img src="https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-postgres.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B" /> </a>
- [Redis](./redis/README.md) <a href="https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Redis%22"> <img src="https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-redis.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B" /> </a>
- [S3](./s3/README.md) <a href="https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+S3%22"> <img src="https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-s3.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B" />
- [SQLite3](./sqlite3/README.md) <a href="https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Sqlite3%22"> <img src="https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-sqlite3.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B" /> </a>

