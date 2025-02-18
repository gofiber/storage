---
title: 👋 Welcome
description: 📦 Premade storage drivers for 🚀 Fiber.
sidebar_position: 1
---

<p align="center">
  <img height="125" alt="Fiber" src="https://raw.githubusercontent.com/gofiber/storage/master/.github/logo-dark.svg#gh-dark-mode-only" />
  <img height="125" alt="Fiber" src="https://raw.githubusercontent.com/gofiber/storage/master/.github/logo.svg#gh-light-mode-only" />
  <br/>

  <a href="https://pkg.go.dev/github.com/gofiber/storage?tab=doc">
    <img src="https://img.shields.io/badge/%F0%9F%93%9A%20godoc-pkg-00ACD7.svg?color=00ACD7&style=flat"/>
  </a>
  <a href="https://goreportcard.com/report/github.com/gofiber/storage">
    <img src="https://img.shields.io/badge/%F0%9F%93%9D%20goreport-A%2B-75C46B"/>
  </a>
  <a href="https://gofiber.io/discord">
    <img src="https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7"/>
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
- [CloudflareKV](./cloudflarekv/README.md) <a href="https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+CloudflareKV%22"> <img src="https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-cloudflarekv.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B" /> </a>
- [Coherence](./coherence/README.md) <a href="https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Coherence%22"> <img src="https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-coherence.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B" /> </a>
- [Couchbase](./couchbase/README.md) <a href="https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Couchbase%22"> <img src="https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-couchbase.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B" /> </a>
- [DynamoDB](./dynamodb/README.md) <a href="https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+DynamoDB%22"> <img src="https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-dynamodb.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B" /> </a>
- [Etcd](./etcd/README.md) <a href="https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Etcd%22"> <img src="https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-etcd.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B" /> </a>
- [LevelDB](./leveldb/README.md) <a href="https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+LevelDB%22"> <img src="https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-leveldb.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B" alt="LevelDB Tests Status"/> </a>
- [Memcache](./memcache/README.md) <a href="https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Memcache%22"> <img src="https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-memcache.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B" /> </a>
- [Memory](./memory/README.md) <a href="https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Local+Storage%22"> <img src="https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-memory.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B" /> </a>
- [Minio](./minio/README.md) <a href="https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Minio%22"> <img src="https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-minio.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B" /> </a>
- [MockStorage](./mockstorage/README.md) <a href="https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+MockStorage%22"> <img src="https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-mockstorage.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B" /> </a>
- [MongoDB](./mongodb/README.md) <a href="https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Mongodb%22"> <img src="https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-mongodb.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B" /> </a>
- [MSSQL](./mssql/README.md) <a href="https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+MSSQL%22"> <img src="https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-mssql.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B" /> </a>
- [MySQL](./mysql/README.md) <a href="https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+MySQL%22"> <img src="https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-mysql.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B" /> </a>
- [NATS](./nats/README.md) <a href="https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests%20Nats%20Driver%22"> <img src="https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-nats.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B" /> </a>
- [Neo4j](./neo4j/README.md) <a href="https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Neo4j%22"> <img src="https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-neo4j.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B" /> </a>
- [Pebble](./pebble/README.md) <a href="https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Pebble%22"> <img src="https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-pebble.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B" /> </a>
- [Postgres](./postgres/README.md) <a href="https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Postgres%22"> <img src="https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-postgres.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B" /> </a>
- [Redis](./redis/README.md) <a href="https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Redis%22"> <img src="https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-redis.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B" /> </a>
- [Rueidis](./rueidis/README.md) <a href="https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+rueidis%22"> <img src="https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-rueidis.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B" /> </a>
- [S3](./s3/README.md) <a href="https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+S3%22"> <img src="https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-s3.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B" /> </a>
- [ScyllaDB](./scylladb/README.md) <a href="https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+scylladb%22"> <img src="https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-scylladb.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B" /> </a>
- [SQLite3](./sqlite3/README.md) <a href="https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Sqlite3%22"> <img src="https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-sqlite3.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B" /> </a>
- [ClickHouse](./clickhouse/README.md) <a href="https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Clickhouse%22"> <img src="https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-clickhouse.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B" /> </a>
- [Valkey](./valkey/README.md) <a href="https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+valkey%22"> <img src="https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-valkey.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B" /> </a>