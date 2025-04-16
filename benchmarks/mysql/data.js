window.BENCHMARK_DATA = {
  "lastUpdate": 1744782281672,
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
          "id": "1be3b2025e7964ade01673c4d2007173c1a269f8",
          "message": "Merge pull request #1647 from gofiber/dependabot/go_modules/mysql/github.com/go-sql-driver/mysql-1.9.2\n\nchore(deps): bump github.com/go-sql-driver/mysql from 1.8.1 to 1.9.2 in /mysql",
          "timestamp": "2025-04-10T09:46:55+02:00",
          "tree_id": "7c7e162dc7cdbff26f540e6e09c65b932fb99536",
          "url": "https://github.com/gofiber/storage/commit/1be3b2025e7964ade01673c4d2007173c1a269f8"
        },
        "date": 1744271352623,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MYSQL_Set",
            "value": 993282,
            "unit": "ns/op\t    9988 B/op\t     121 allocs/op",
            "extra": "1110 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - ns/op",
            "value": 993282,
            "unit": "ns/op",
            "extra": "1110 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - B/op",
            "value": 9988,
            "unit": "B/op",
            "extra": "1110 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - allocs/op",
            "value": 121,
            "unit": "allocs/op",
            "extra": "1110 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get",
            "value": 1010858,
            "unit": "ns/op\t   10162 B/op\t     139 allocs/op",
            "extra": "1200 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - ns/op",
            "value": 1010858,
            "unit": "ns/op",
            "extra": "1200 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - B/op",
            "value": 10162,
            "unit": "B/op",
            "extra": "1200 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - allocs/op",
            "value": 139,
            "unit": "allocs/op",
            "extra": "1200 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete",
            "value": 4192873,
            "unit": "ns/op\t   19352 B/op\t     231 allocs/op",
            "extra": "290 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - ns/op",
            "value": 4192873,
            "unit": "ns/op",
            "extra": "290 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - B/op",
            "value": 19352,
            "unit": "B/op",
            "extra": "290 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - allocs/op",
            "value": 231,
            "unit": "allocs/op",
            "extra": "290 times\n4 procs"
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
          "id": "e21a9065b52622c9e1e1ad671a7da27ecba91f90",
          "message": "Merge pull request #1672 from mdelapenya/testing-patterns\n\nchore(testing): use require in tests",
          "timestamp": "2025-04-16T07:40:42+02:00",
          "tree_id": "54a79e7c0ee58dbd297fbf52b9ba836e7b4965d9",
          "url": "https://github.com/gofiber/storage/commit/e21a9065b52622c9e1e1ad671a7da27ecba91f90"
        },
        "date": 1744782272382,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MYSQL_Set",
            "value": 983019,
            "unit": "ns/op\t   10014 B/op\t     121 allocs/op",
            "extra": "1137 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - ns/op",
            "value": 983019,
            "unit": "ns/op",
            "extra": "1137 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - B/op",
            "value": 10014,
            "unit": "B/op",
            "extra": "1137 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - allocs/op",
            "value": 121,
            "unit": "allocs/op",
            "extra": "1137 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get",
            "value": 1129956,
            "unit": "ns/op\t   10928 B/op\t     150 allocs/op",
            "extra": "1192 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - ns/op",
            "value": 1129956,
            "unit": "ns/op",
            "extra": "1192 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - B/op",
            "value": 10928,
            "unit": "B/op",
            "extra": "1192 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - allocs/op",
            "value": 150,
            "unit": "allocs/op",
            "extra": "1192 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete",
            "value": 3194413,
            "unit": "ns/op\t   20855 B/op\t     253 allocs/op",
            "extra": "367 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - ns/op",
            "value": 3194413,
            "unit": "ns/op",
            "extra": "367 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - B/op",
            "value": 20855,
            "unit": "B/op",
            "extra": "367 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - allocs/op",
            "value": 253,
            "unit": "allocs/op",
            "extra": "367 times\n4 procs"
          }
        ]
      }
    ]
  }
}