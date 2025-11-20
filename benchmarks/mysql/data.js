window.BENCHMARK_DATA = {
  "lastUpdate": 1763657697737,
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
          "id": "3b44abfe6a8830f7ccc0f537c87684102beb1a95",
          "message": "Merge pull request #1700 from gofiber/dependabot/go_modules/mysql/github.com/testcontainers/testcontainers-go-0.37.0\n\nchore(deps): bump github.com/testcontainers/testcontainers-go from 0.36.0 to 0.37.0 in /mysql",
          "timestamp": "2025-04-28T12:56:53+02:00",
          "tree_id": "a14bbc677e2f870716dcbb968d0abe0433c9f6b9",
          "url": "https://github.com/gofiber/storage/commit/3b44abfe6a8830f7ccc0f537c87684102beb1a95"
        },
        "date": 1745838013541,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MYSQL_Set",
            "value": 1012188,
            "unit": "ns/op\t   10007 B/op\t     121 allocs/op",
            "extra": "1035 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - ns/op",
            "value": 1012188,
            "unit": "ns/op",
            "extra": "1035 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - B/op",
            "value": 10007,
            "unit": "B/op",
            "extra": "1035 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - allocs/op",
            "value": 121,
            "unit": "allocs/op",
            "extra": "1035 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get",
            "value": 1030922,
            "unit": "ns/op\t   10172 B/op\t     139 allocs/op",
            "extra": "1156 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - ns/op",
            "value": 1030922,
            "unit": "ns/op",
            "extra": "1156 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - B/op",
            "value": 10172,
            "unit": "B/op",
            "extra": "1156 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - allocs/op",
            "value": 139,
            "unit": "allocs/op",
            "extra": "1156 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete",
            "value": 4203978,
            "unit": "ns/op\t   20903 B/op\t     253 allocs/op",
            "extra": "301 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - ns/op",
            "value": 4203978,
            "unit": "ns/op",
            "extra": "301 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - B/op",
            "value": 20903,
            "unit": "B/op",
            "extra": "301 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - allocs/op",
            "value": 253,
            "unit": "allocs/op",
            "extra": "301 times\n4 procs"
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
          "id": "2b073db8ffa894be118b3ce5582929a9a95e22af",
          "message": "Merge pull request #1713 from gofiber/dependabot/go_modules/mysql/github.com/testcontainers/testcontainers-go/modules/mysql-0.37.0\n\nchore(deps): bump github.com/testcontainers/testcontainers-go/modules/mysql from 0.36.0 to 0.37.0 in /mysql",
          "timestamp": "2025-04-29T09:38:55+02:00",
          "tree_id": "5927ccd7b69a38c7e09e5ad0ddef8f8a4ca2f9fe",
          "url": "https://github.com/gofiber/storage/commit/2b073db8ffa894be118b3ce5582929a9a95e22af"
        },
        "date": 1745912671564,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MYSQL_Set",
            "value": 1004842,
            "unit": "ns/op\t   10022 B/op\t     121 allocs/op",
            "extra": "1148 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - ns/op",
            "value": 1004842,
            "unit": "ns/op",
            "extra": "1148 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - B/op",
            "value": 10022,
            "unit": "B/op",
            "extra": "1148 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - allocs/op",
            "value": 121,
            "unit": "allocs/op",
            "extra": "1148 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get",
            "value": 985059,
            "unit": "ns/op\t   10176 B/op\t     139 allocs/op",
            "extra": "1200 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - ns/op",
            "value": 985059,
            "unit": "ns/op",
            "extra": "1200 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - B/op",
            "value": 10176,
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
            "value": 2865714,
            "unit": "ns/op\t   19387 B/op\t     231 allocs/op",
            "extra": "408 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - ns/op",
            "value": 2865714,
            "unit": "ns/op",
            "extra": "408 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - B/op",
            "value": 19387,
            "unit": "B/op",
            "extra": "408 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - allocs/op",
            "value": 231,
            "unit": "allocs/op",
            "extra": "408 times\n4 procs"
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
          "id": "4ab3b3c0bd8c40ec0fad9cabc69e21d33d6fb0ee",
          "message": "Merge pull request #1777 from gofiber/dependabot/go_modules/mysql/github.com/go-sql-driver/mysql-1.9.3\n\nchore(deps): bump github.com/go-sql-driver/mysql from 1.9.2 to 1.9.3 in /mysql",
          "timestamp": "2025-06-13T09:29:11+02:00",
          "tree_id": "b30d2d35af2789c245235360128d4eb92ca41942",
          "url": "https://github.com/gofiber/storage/commit/4ab3b3c0bd8c40ec0fad9cabc69e21d33d6fb0ee"
        },
        "date": 1749799897192,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MYSQL_Set",
            "value": 962570,
            "unit": "ns/op\t    9653 B/op\t      99 allocs/op",
            "extra": "1176 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - ns/op",
            "value": 962570,
            "unit": "ns/op",
            "extra": "1176 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - B/op",
            "value": 9653,
            "unit": "B/op",
            "extra": "1176 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "1176 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get",
            "value": 967574,
            "unit": "ns/op\t    9700 B/op\t     109 allocs/op",
            "extra": "1225 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - ns/op",
            "value": 967574,
            "unit": "ns/op",
            "extra": "1225 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - B/op",
            "value": 9700,
            "unit": "B/op",
            "extra": "1225 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - allocs/op",
            "value": 109,
            "unit": "allocs/op",
            "extra": "1225 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete",
            "value": 3388474,
            "unit": "ns/op\t   18805 B/op\t     195 allocs/op",
            "extra": "303 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - ns/op",
            "value": 3388474,
            "unit": "ns/op",
            "extra": "303 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - B/op",
            "value": 18805,
            "unit": "B/op",
            "extra": "303 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "303 times\n4 procs"
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
          "id": "84234671713e1e75e9f9c7eaaacc9f18f6c484e1",
          "message": "Merge pull request #1569 from gofiber/add-withcontext",
          "timestamp": "2025-07-07T11:44:47+02:00",
          "tree_id": "7578250e12b0352776171d0651b265ba58951118",
          "url": "https://github.com/gofiber/storage/commit/84234671713e1e75e9f9c7eaaacc9f18f6c484e1"
        },
        "date": 1751882439767,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MYSQL_Set",
            "value": 972147,
            "unit": "ns/op\t    9657 B/op\t      99 allocs/op",
            "extra": "1165 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - ns/op",
            "value": 972147,
            "unit": "ns/op",
            "extra": "1165 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - B/op",
            "value": 9657,
            "unit": "B/op",
            "extra": "1165 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "1165 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get",
            "value": 972336,
            "unit": "ns/op\t    9675 B/op\t     108 allocs/op",
            "extra": "1224 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - ns/op",
            "value": 972336,
            "unit": "ns/op",
            "extra": "1224 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - B/op",
            "value": 9675,
            "unit": "B/op",
            "extra": "1224 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - allocs/op",
            "value": 108,
            "unit": "allocs/op",
            "extra": "1224 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete",
            "value": 4306585,
            "unit": "ns/op\t   18805 B/op\t     195 allocs/op",
            "extra": "286 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - ns/op",
            "value": 4306585,
            "unit": "ns/op",
            "extra": "286 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - B/op",
            "value": 18805,
            "unit": "B/op",
            "extra": "286 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "286 times\n4 procs"
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
          "id": "e3f0243edf140f89f93da9884e4880768383a33d",
          "message": "Merge pull request #1821 from gofiber/dependabot/go_modules/aerospike/testcontainers-modules-88f01908c2\n\nchore(deps): bump the testcontainers-modules group across 22 directories with 17 updates",
          "timestamp": "2025-07-16T10:01:38+02:00",
          "tree_id": "d8ef317e71a85e0e393e760722107b87bd86b70b",
          "url": "https://github.com/gofiber/storage/commit/e3f0243edf140f89f93da9884e4880768383a33d"
        },
        "date": 1752653369755,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MYSQL_Set",
            "value": 966929,
            "unit": "ns/op\t    9654 B/op\t      99 allocs/op",
            "extra": "1166 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - ns/op",
            "value": 966929,
            "unit": "ns/op",
            "extra": "1166 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - B/op",
            "value": 9654,
            "unit": "B/op",
            "extra": "1166 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "1166 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get",
            "value": 981013,
            "unit": "ns/op\t    9668 B/op\t     108 allocs/op",
            "extra": "1234 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - ns/op",
            "value": 981013,
            "unit": "ns/op",
            "extra": "1234 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - B/op",
            "value": 9668,
            "unit": "B/op",
            "extra": "1234 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - allocs/op",
            "value": 108,
            "unit": "allocs/op",
            "extra": "1234 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete",
            "value": 3515564,
            "unit": "ns/op\t   18812 B/op\t     195 allocs/op",
            "extra": "379 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - ns/op",
            "value": 3515564,
            "unit": "ns/op",
            "extra": "379 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - B/op",
            "value": 18812,
            "unit": "B/op",
            "extra": "379 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "379 times\n4 procs"
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
          "id": "7c6c81bb8b1b8a520ba35b8b87b7a21977eb11b9",
          "message": "Merge pull request #1885 from mdelapenya/storage-tck",
          "timestamp": "2025-09-18T11:46:46+02:00",
          "tree_id": "c89f78b55bfd541c61ad1e91c48c8fe7c23ae664",
          "url": "https://github.com/gofiber/storage/commit/7c6c81bb8b1b8a520ba35b8b87b7a21977eb11b9"
        },
        "date": 1758188967595,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MYSQL_Set",
            "value": 980875,
            "unit": "ns/op\t    9668 B/op\t      99 allocs/op",
            "extra": "1142 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - ns/op",
            "value": 980875,
            "unit": "ns/op",
            "extra": "1142 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - B/op",
            "value": 9668,
            "unit": "B/op",
            "extra": "1142 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "1142 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get",
            "value": 985266,
            "unit": "ns/op\t    9673 B/op\t     108 allocs/op",
            "extra": "1185 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - ns/op",
            "value": 985266,
            "unit": "ns/op",
            "extra": "1185 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - B/op",
            "value": 9673,
            "unit": "B/op",
            "extra": "1185 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - allocs/op",
            "value": 108,
            "unit": "allocs/op",
            "extra": "1185 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete",
            "value": 3934368,
            "unit": "ns/op\t   18828 B/op\t     195 allocs/op",
            "extra": "303 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - ns/op",
            "value": 3934368,
            "unit": "ns/op",
            "extra": "303 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - B/op",
            "value": 18828,
            "unit": "B/op",
            "extra": "303 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "303 times\n4 procs"
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
          "id": "6cb545f2864a54900d263951cf1f3befe02afb62",
          "message": "Merge pull request #1964 from gofiber/dependabot/go_modules/mysql/github.com/docker/docker-28.3.3incompatible\n\nchore(deps): bump github.com/docker/docker from 28.2.2+incompatible to 28.3.3+incompatible in /mysql",
          "timestamp": "2025-11-06T09:04:41+01:00",
          "tree_id": "1e5f7552bcded0b0063d91e41b29a183df7e6895",
          "url": "https://github.com/gofiber/storage/commit/6cb545f2864a54900d263951cf1f3befe02afb62"
        },
        "date": 1762418190657,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MYSQL_Set",
            "value": 967337,
            "unit": "ns/op\t    9656 B/op\t      99 allocs/op",
            "extra": "1190 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - ns/op",
            "value": 967337,
            "unit": "ns/op",
            "extra": "1190 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - B/op",
            "value": 9656,
            "unit": "B/op",
            "extra": "1190 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "1190 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get",
            "value": 964975,
            "unit": "ns/op\t    9675 B/op\t     108 allocs/op",
            "extra": "1225 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - ns/op",
            "value": 964975,
            "unit": "ns/op",
            "extra": "1225 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - B/op",
            "value": 9675,
            "unit": "B/op",
            "extra": "1225 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - allocs/op",
            "value": 108,
            "unit": "allocs/op",
            "extra": "1225 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete",
            "value": 3092987,
            "unit": "ns/op\t   18806 B/op\t     195 allocs/op",
            "extra": "386 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - ns/op",
            "value": 3092987,
            "unit": "ns/op",
            "extra": "386 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - B/op",
            "value": 18806,
            "unit": "B/op",
            "extra": "386 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "386 times\n4 procs"
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
          "id": "7e6d07112f62869e00fa027f7f85a984d4acb368",
          "message": "Merge pull request #2000 from gofiber/dependabot/go_modules/aerospike/testify-modules-2ec82dedaf",
          "timestamp": "2025-11-20T10:50:08+01:00",
          "tree_id": "880dd783f33ef93ec7c7d19a51908b75834f5490",
          "url": "https://github.com/gofiber/storage/commit/7e6d07112f62869e00fa027f7f85a984d4acb368"
        },
        "date": 1763657692365,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MYSQL_Set",
            "value": 823074,
            "unit": "ns/op\t    9666 B/op\t      99 allocs/op",
            "extra": "1351 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - ns/op",
            "value": 823074,
            "unit": "ns/op",
            "extra": "1351 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - B/op",
            "value": 9666,
            "unit": "B/op",
            "extra": "1351 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "1351 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get",
            "value": 798689,
            "unit": "ns/op\t    9678 B/op\t     108 allocs/op",
            "extra": "1348 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - ns/op",
            "value": 798689,
            "unit": "ns/op",
            "extra": "1348 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - B/op",
            "value": 9678,
            "unit": "B/op",
            "extra": "1348 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - allocs/op",
            "value": 108,
            "unit": "allocs/op",
            "extra": "1348 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete",
            "value": 2595848,
            "unit": "ns/op\t   18810 B/op\t     195 allocs/op",
            "extra": "476 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - ns/op",
            "value": 2595848,
            "unit": "ns/op",
            "extra": "476 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - B/op",
            "value": 18810,
            "unit": "B/op",
            "extra": "476 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "476 times\n4 procs"
          }
        ]
      }
    ]
  }
}