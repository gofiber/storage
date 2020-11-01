# MySQL

A MySQL storage driver using `database/sql` and [`go-sql-driver/mysql`](https://github.com/go-sql-driver/mysql).

### Creation

To create a new instance of the MySQL store, is is reccomended that you provide a database name, a table name, a username and a password. The database must exist beforehand, but the table will be created if it does not exist.

```go
// import "github.com/gomodule/redigo/redis"
store := mysql.New(mysql.Config{
    DatabaseName: "myDb",
    TableName: "thisStore",
    Username: "user",
    Password: "yourPasswordHere",
})
```

By default the store will connect to a database on `127.0.0.1:3306`. If you are using multiple MySQL stores in your application, it is strongly advised that you use different table names for each, to avoid data being overwritten or otherwise damaged.

A full list of configuration options and their defaults can be found [in `config.go`](/config.go).

### Running tests/benchmarks

Tests and benchmarks for this package require a running MySQL server, and assume you have one at `127.0.0.1:3306`. The following environment variables can be used to configure the tests:

| Name             | Corresponding `Config` option |
| ---------------- | ----------------------------- |
| `MYSQL_ADDRESS`  | `Address`                     |
| `MYSQL_USERNAME` | `Username`                    |
| `MYSQL_PASSWORD` | `Password`                    |
| `MYSQL_DATABASE` | `DatabaseName`                |

If a given environment variable is not set, the default value is used.