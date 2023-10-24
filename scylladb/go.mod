module github.com/gofiber/storage/scylladb

go 1.19

require (
	github.com/gocql/gocql v1.6.0
	github.com/gofiber/utils v1.1.0
)

require (
	github.com/golang/snappy v0.0.4 // indirect
	github.com/hailocab/go-hostpool v0.0.0-20160125115350-e80d13ce29ed // indirect
	gopkg.in/inf.v0 v0.9.1 // indirect
)

replace github.com/gocql/gocql => github.com/scylladb/gocql v1.11.1
