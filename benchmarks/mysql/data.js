window.BENCHMARK_DATA = {
  "lastUpdate": 1744190344861,
  "repoUrl": "https://github.com/gofiber/storage",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c1933ed3e87ea6f84e3bde5edee29f19495afa91",
          "message": "Merge pull request #1515 from mdelapenya/tc-go-adoption-2\n\nchore: adopt testcontainers-go for Postgres, MySQL and MongoDB",
          "timestamp": "2025-03-19T08:01:09+01:00",
          "tree_id": "bd7d7600b063b44df0a5960ac0d1d4b43f6fa48c",
          "url": "https://github.com/gofiber/storage/commit/c1933ed3e87ea6f84e3bde5edee29f19495afa91"
        },
        "date": 1742368105098,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MYSQL_Set",
            "value": 1003289,
            "unit": "ns/op\t    9539 B/op\t      97 allocs/op",
            "extra": "1126 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - ns/op",
            "value": 1003289,
            "unit": "ns/op",
            "extra": "1126 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - B/op",
            "value": 9539,
            "unit": "B/op",
            "extra": "1126 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - allocs/op",
            "value": 97,
            "unit": "allocs/op",
            "extra": "1126 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get",
            "value": 1129443,
            "unit": "ns/op\t   10257 B/op\t     119 allocs/op",
            "extra": "1063 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - ns/op",
            "value": 1129443,
            "unit": "ns/op",
            "extra": "1063 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - B/op",
            "value": 10257,
            "unit": "B/op",
            "extra": "1063 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - allocs/op",
            "value": 119,
            "unit": "allocs/op",
            "extra": "1063 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete",
            "value": 3625939,
            "unit": "ns/op\t   19938 B/op\t     215 allocs/op",
            "extra": "326 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - ns/op",
            "value": 3625939,
            "unit": "ns/op",
            "extra": "326 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - B/op",
            "value": 19938,
            "unit": "B/op",
            "extra": "326 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - allocs/op",
            "value": 215,
            "unit": "allocs/op",
            "extra": "326 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3f7110fcdd9a434eb0e1074b451c915a0a6bd66e",
          "message": "Merge pull request #1595 from gofiber/dependabot/go_modules/mysql/github.com/stretchr/testify-1.10.0\n\nchore(deps): bump github.com/stretchr/testify from 1.9.0 to 1.10.0 in /mysql",
          "timestamp": "2025-03-26T17:48:21+01:00",
          "tree_id": "fd198b6c08ec7cfba7a6f9cbc80b220be043ac9f",
          "url": "https://github.com/gofiber/storage/commit/3f7110fcdd9a434eb0e1074b451c915a0a6bd66e"
        },
        "date": 1743010031947,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MYSQL_Set",
            "value": 1009146,
            "unit": "ns/op\t    9535 B/op\t      97 allocs/op",
            "extra": "1107 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - ns/op",
            "value": 1009146,
            "unit": "ns/op",
            "extra": "1107 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - B/op",
            "value": 9535,
            "unit": "B/op",
            "extra": "1107 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - allocs/op",
            "value": 97,
            "unit": "allocs/op",
            "extra": "1107 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get",
            "value": 1016732,
            "unit": "ns/op\t    9545 B/op\t     107 allocs/op",
            "extra": "1144 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - ns/op",
            "value": 1016732,
            "unit": "ns/op",
            "extra": "1144 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - B/op",
            "value": 9545,
            "unit": "B/op",
            "extra": "1144 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - allocs/op",
            "value": 107,
            "unit": "allocs/op",
            "extra": "1144 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete",
            "value": 3030928,
            "unit": "ns/op\t   18544 B/op\t     191 allocs/op",
            "extra": "372 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - ns/op",
            "value": 3030928,
            "unit": "ns/op",
            "extra": "372 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - B/op",
            "value": 18544,
            "unit": "B/op",
            "extra": "372 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - allocs/op",
            "value": 191,
            "unit": "allocs/op",
            "extra": "372 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "904a606aa298640f2edb9a167de39219b932a3c4",
          "message": "Merge pull request #1631 from mdelapenya/tc-azurite\n\nchore: bump testcontainers-go to v0.36.0",
          "timestamp": "2025-04-09T11:15:31+02:00",
          "tree_id": "9a609b5228fe260c6730ccd3a8e041d94014c919",
          "url": "https://github.com/gofiber/storage/commit/904a606aa298640f2edb9a167de39219b932a3c4"
        },
        "date": 1744190337292,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MYSQL_Set",
            "value": 1002801,
            "unit": "ns/op\t    9729 B/op\t      99 allocs/op",
            "extra": "1140 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - ns/op",
            "value": 1002801,
            "unit": "ns/op",
            "extra": "1140 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - B/op",
            "value": 9729,
            "unit": "B/op",
            "extra": "1140 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "1140 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get",
            "value": 1004309,
            "unit": "ns/op\t    9757 B/op\t     109 allocs/op",
            "extra": "1178 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - ns/op",
            "value": 1004309,
            "unit": "ns/op",
            "extra": "1178 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - B/op",
            "value": 9757,
            "unit": "B/op",
            "extra": "1178 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - allocs/op",
            "value": 109,
            "unit": "allocs/op",
            "extra": "1178 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete",
            "value": 3528571,
            "unit": "ns/op\t   18938 B/op\t     195 allocs/op",
            "extra": "340 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - ns/op",
            "value": 3528571,
            "unit": "ns/op",
            "extra": "340 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - B/op",
            "value": 18938,
            "unit": "B/op",
            "extra": "340 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "340 times\n4 procs"
          }
        ]
      }
    ]
  }
}