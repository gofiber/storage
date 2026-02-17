window.BENCHMARK_DATA = {
  "lastUpdate": 1771288340702,
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
          "id": "18c4294c8b21d9117b1eb4b296dbc911d31b262f",
          "message": "Merge pull request #2165 from gofiber/dependabot/go_modules/aerospike/shirou-modules-9de9a86162",
          "timestamp": "2025-11-20T11:41:10+01:00",
          "tree_id": "dcd469172bf3efc3bc94dcb1f6d7020581615a5f",
          "url": "https://github.com/gofiber/storage/commit/18c4294c8b21d9117b1eb4b296dbc911d31b262f"
        },
        "date": 1763661915301,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MYSQL_Set",
            "value": 974303,
            "unit": "ns/op\t    9769 B/op\t      97 allocs/op",
            "extra": "1149 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - ns/op",
            "value": 974303,
            "unit": "ns/op",
            "extra": "1149 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - B/op",
            "value": 9769,
            "unit": "B/op",
            "extra": "1149 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - allocs/op",
            "value": 97,
            "unit": "allocs/op",
            "extra": "1149 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get",
            "value": 979871,
            "unit": "ns/op\t    9765 B/op\t     106 allocs/op",
            "extra": "1192 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - ns/op",
            "value": 979871,
            "unit": "ns/op",
            "extra": "1192 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - B/op",
            "value": 9765,
            "unit": "B/op",
            "extra": "1192 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - allocs/op",
            "value": 106,
            "unit": "allocs/op",
            "extra": "1192 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete",
            "value": 3153636,
            "unit": "ns/op\t   18992 B/op\t     191 allocs/op",
            "extra": "345 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - ns/op",
            "value": 3153636,
            "unit": "ns/op",
            "extra": "345 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - B/op",
            "value": 18992,
            "unit": "B/op",
            "extra": "345 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - allocs/op",
            "value": 191,
            "unit": "allocs/op",
            "extra": "345 times\n4 procs"
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
          "id": "ea4642803edfd7e9f7aa301007b1f59b0acd4e7e",
          "message": "Merge pull request #2091 from gofiber/dependabot/go_modules/mysql/github.com/klauspost/compress-1.18.1",
          "timestamp": "2025-11-20T12:53:29+01:00",
          "tree_id": "eb0d80c0f46b05e2d7abbe3f49da5543d54f73fc",
          "url": "https://github.com/gofiber/storage/commit/ea4642803edfd7e9f7aa301007b1f59b0acd4e7e"
        },
        "date": 1763662688341,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MYSQL_Set",
            "value": 966188,
            "unit": "ns/op\t    9781 B/op\t      97 allocs/op",
            "extra": "1173 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - ns/op",
            "value": 966188,
            "unit": "ns/op",
            "extra": "1173 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - B/op",
            "value": 9781,
            "unit": "B/op",
            "extra": "1173 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - allocs/op",
            "value": 97,
            "unit": "allocs/op",
            "extra": "1173 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get",
            "value": 971647,
            "unit": "ns/op\t    9760 B/op\t     106 allocs/op",
            "extra": "1160 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - ns/op",
            "value": 971647,
            "unit": "ns/op",
            "extra": "1160 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - B/op",
            "value": 9760,
            "unit": "B/op",
            "extra": "1160 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - allocs/op",
            "value": 106,
            "unit": "allocs/op",
            "extra": "1160 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete",
            "value": 3212513,
            "unit": "ns/op\t   19003 B/op\t     191 allocs/op",
            "extra": "361 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - ns/op",
            "value": 3212513,
            "unit": "ns/op",
            "extra": "361 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - B/op",
            "value": 19003,
            "unit": "B/op",
            "extra": "361 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - allocs/op",
            "value": 191,
            "unit": "allocs/op",
            "extra": "361 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "835733+gaby@users.noreply.github.com",
            "name": "Juan Calderon-Perez",
            "username": "gaby"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9b928fe3202af31fa96490327f8f80626537e4b4",
          "message": "Merge pull request #2261 from mdelapenya/update-dependencies-workflows\n\nupdate dependencies workflows",
          "timestamp": "2025-11-27T11:09:01-05:00",
          "tree_id": "a7e605b10b54dce7f9c115e97dad5e9ac8202dae",
          "url": "https://github.com/gofiber/storage/commit/9b928fe3202af31fa96490327f8f80626537e4b4"
        },
        "date": 1764259979068,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MYSQL_Set",
            "value": 971723,
            "unit": "ns/op\t    9763 B/op\t      97 allocs/op",
            "extra": "1164 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - ns/op",
            "value": 971723,
            "unit": "ns/op",
            "extra": "1164 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - B/op",
            "value": 9763,
            "unit": "B/op",
            "extra": "1164 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - allocs/op",
            "value": 97,
            "unit": "allocs/op",
            "extra": "1164 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get",
            "value": 973755,
            "unit": "ns/op\t    9762 B/op\t     106 allocs/op",
            "extra": "1219 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - ns/op",
            "value": 973755,
            "unit": "ns/op",
            "extra": "1219 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - B/op",
            "value": 9762,
            "unit": "B/op",
            "extra": "1219 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - allocs/op",
            "value": 106,
            "unit": "allocs/op",
            "extra": "1219 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete",
            "value": 4243010,
            "unit": "ns/op\t   19014 B/op\t     191 allocs/op",
            "extra": "286 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - ns/op",
            "value": 4243010,
            "unit": "ns/op",
            "extra": "286 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - B/op",
            "value": 19014,
            "unit": "B/op",
            "extra": "286 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - allocs/op",
            "value": 191,
            "unit": "allocs/op",
            "extra": "286 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "835733+gaby@users.noreply.github.com",
            "name": "Juan Calderon-Perez",
            "username": "gaby"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "74c56eea19523b33924214d38372c4093f87408f",
          "message": "Merge pull request #2271 from gofiber/dependabot/go_modules/clickhouse/google-modules-030dbd2da6\n\nchore(deps): bump the google-modules group across 9 directories with 1 update",
          "timestamp": "2025-11-27T11:34:23-05:00",
          "tree_id": "7a9b91b017f52605e93179de3bf0f4071cc88fc0",
          "url": "https://github.com/gofiber/storage/commit/74c56eea19523b33924214d38372c4093f87408f"
        },
        "date": 1764261413653,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MYSQL_Set",
            "value": 952784,
            "unit": "ns/op\t    9771 B/op\t      97 allocs/op",
            "extra": "1171 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - ns/op",
            "value": 952784,
            "unit": "ns/op",
            "extra": "1171 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - B/op",
            "value": 9771,
            "unit": "B/op",
            "extra": "1171 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - allocs/op",
            "value": 97,
            "unit": "allocs/op",
            "extra": "1171 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get",
            "value": 966132,
            "unit": "ns/op\t    9760 B/op\t     106 allocs/op",
            "extra": "1221 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - ns/op",
            "value": 966132,
            "unit": "ns/op",
            "extra": "1221 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - B/op",
            "value": 9760,
            "unit": "B/op",
            "extra": "1221 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - allocs/op",
            "value": 106,
            "unit": "allocs/op",
            "extra": "1221 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete",
            "value": 3849242,
            "unit": "ns/op\t   18993 B/op\t     191 allocs/op",
            "extra": "294 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - ns/op",
            "value": 3849242,
            "unit": "ns/op",
            "extra": "294 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - B/op",
            "value": 18993,
            "unit": "B/op",
            "extra": "294 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - allocs/op",
            "value": 191,
            "unit": "allocs/op",
            "extra": "294 times\n4 procs"
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
          "id": "c7ef6466c98a2fc0fcab4ebd57874b69ae912377",
          "message": "Merge pull request #2322 from gofiber/dependabot/go_modules/aerospike/opentelemetry-modules-7e2f7cdd18",
          "timestamp": "2025-12-09T09:05:19+01:00",
          "tree_id": "8af382de6bc3ee83b7a943641c2b8e8b5ad3afdf",
          "url": "https://github.com/gofiber/storage/commit/c7ef6466c98a2fc0fcab4ebd57874b69ae912377"
        },
        "date": 1765267756932,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MYSQL_Set",
            "value": 828424,
            "unit": "ns/op\t    9763 B/op\t      97 allocs/op",
            "extra": "1362 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - ns/op",
            "value": 828424,
            "unit": "ns/op",
            "extra": "1362 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - B/op",
            "value": 9763,
            "unit": "B/op",
            "extra": "1362 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - allocs/op",
            "value": 97,
            "unit": "allocs/op",
            "extra": "1362 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get",
            "value": 797059,
            "unit": "ns/op\t    9767 B/op\t     106 allocs/op",
            "extra": "1419 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - ns/op",
            "value": 797059,
            "unit": "ns/op",
            "extra": "1419 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - B/op",
            "value": 9767,
            "unit": "B/op",
            "extra": "1419 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - allocs/op",
            "value": 106,
            "unit": "allocs/op",
            "extra": "1419 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete",
            "value": 2461482,
            "unit": "ns/op\t   19001 B/op\t     191 allocs/op",
            "extra": "477 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - ns/op",
            "value": 2461482,
            "unit": "ns/op",
            "extra": "477 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - B/op",
            "value": 19001,
            "unit": "B/op",
            "extra": "477 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - allocs/op",
            "value": 191,
            "unit": "allocs/op",
            "extra": "477 times\n4 procs"
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
          "id": "fecc0c591b46e4c76989a68a5baf1e198c3a9baa",
          "message": "Merge pull request #2351 from gofiber/dependabot/go_modules/cassandra/morikuni-modules-13437e0f92",
          "timestamp": "2025-12-11T08:53:06+01:00",
          "tree_id": "eb476666cfafe83f9893d0e9cc77e5a18aeb385e",
          "url": "https://github.com/gofiber/storage/commit/fecc0c591b46e4c76989a68a5baf1e198c3a9baa"
        },
        "date": 1765439848713,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MYSQL_Set",
            "value": 1000587,
            "unit": "ns/op\t    9778 B/op\t      97 allocs/op",
            "extra": "1160 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - ns/op",
            "value": 1000587,
            "unit": "ns/op",
            "extra": "1160 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - B/op",
            "value": 9778,
            "unit": "B/op",
            "extra": "1160 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - allocs/op",
            "value": 97,
            "unit": "allocs/op",
            "extra": "1160 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get",
            "value": 1001318,
            "unit": "ns/op\t    9762 B/op\t     106 allocs/op",
            "extra": "1134 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - ns/op",
            "value": 1001318,
            "unit": "ns/op",
            "extra": "1134 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - B/op",
            "value": 9762,
            "unit": "B/op",
            "extra": "1134 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - allocs/op",
            "value": 106,
            "unit": "allocs/op",
            "extra": "1134 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete",
            "value": 3047420,
            "unit": "ns/op\t   18996 B/op\t     191 allocs/op",
            "extra": "379 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - ns/op",
            "value": 3047420,
            "unit": "ns/op",
            "extra": "379 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - B/op",
            "value": 18996,
            "unit": "B/op",
            "extra": "379 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - allocs/op",
            "value": 191,
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
          "id": "becbbc3dee9014d69ac94f79b915885f98838ddd",
          "message": "Merge pull request #2293 from gofiber/dependabot/go_modules/aerospike/shirou-modules-2205efe4f5",
          "timestamp": "2025-12-18T08:40:37+01:00",
          "tree_id": "a76bae0f6a6534b4d530476e7ec1f956cb762de3",
          "url": "https://github.com/gofiber/storage/commit/becbbc3dee9014d69ac94f79b915885f98838ddd"
        },
        "date": 1766043836715,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MYSQL_Set",
            "value": 815341,
            "unit": "ns/op\t    9762 B/op\t      97 allocs/op",
            "extra": "1240 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - ns/op",
            "value": 815341,
            "unit": "ns/op",
            "extra": "1240 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - B/op",
            "value": 9762,
            "unit": "B/op",
            "extra": "1240 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - allocs/op",
            "value": 97,
            "unit": "allocs/op",
            "extra": "1240 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get",
            "value": 824090,
            "unit": "ns/op\t    9737 B/op\t     104 allocs/op",
            "extra": "1411 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - ns/op",
            "value": 824090,
            "unit": "ns/op",
            "extra": "1411 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - B/op",
            "value": 9737,
            "unit": "B/op",
            "extra": "1411 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - allocs/op",
            "value": 104,
            "unit": "allocs/op",
            "extra": "1411 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete",
            "value": 2473416,
            "unit": "ns/op\t   18972 B/op\t     189 allocs/op",
            "extra": "436 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - ns/op",
            "value": 2473416,
            "unit": "ns/op",
            "extra": "436 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - B/op",
            "value": 18972,
            "unit": "B/op",
            "extra": "436 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - allocs/op",
            "value": 189,
            "unit": "allocs/op",
            "extra": "436 times\n4 procs"
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
          "id": "2581f5a768a521091fd4dedab76186aff359f796",
          "message": "Merge pull request #2395 from gofiber/dependabot/go_modules/aerospike/golang-modules-305631bd7c",
          "timestamp": "2026-01-14T08:37:37+01:00",
          "tree_id": "699ec6907f378c93061af14d650b2f83e5797ac7",
          "url": "https://github.com/gofiber/storage/commit/2581f5a768a521091fd4dedab76186aff359f796"
        },
        "date": 1768376680515,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MYSQL_Set",
            "value": 951152,
            "unit": "ns/op\t    9773 B/op\t      97 allocs/op",
            "extra": "1184 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - ns/op",
            "value": 951152,
            "unit": "ns/op",
            "extra": "1184 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - B/op",
            "value": 9773,
            "unit": "B/op",
            "extra": "1184 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - allocs/op",
            "value": 97,
            "unit": "allocs/op",
            "extra": "1184 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get",
            "value": 965102,
            "unit": "ns/op\t    9734 B/op\t     104 allocs/op",
            "extra": "1227 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - ns/op",
            "value": 965102,
            "unit": "ns/op",
            "extra": "1227 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - B/op",
            "value": 9734,
            "unit": "B/op",
            "extra": "1227 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - allocs/op",
            "value": 104,
            "unit": "allocs/op",
            "extra": "1227 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete",
            "value": 3046115,
            "unit": "ns/op\t   18966 B/op\t     189 allocs/op",
            "extra": "382 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - ns/op",
            "value": 3046115,
            "unit": "ns/op",
            "extra": "382 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - B/op",
            "value": 18966,
            "unit": "B/op",
            "extra": "382 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - allocs/op",
            "value": 189,
            "unit": "allocs/op",
            "extra": "382 times\n4 procs"
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
          "id": "2fa4e61a61ab14f37699d47fafabedacd070234b",
          "message": "Merge pull request #2370 from gofiber/dependabot/go_modules/aerospike/docker-modules-78d0d09041",
          "timestamp": "2026-01-14T08:37:59+01:00",
          "tree_id": "f44a86ad4d3dc479cc163c5b675bf9f89808fc56",
          "url": "https://github.com/gofiber/storage/commit/2fa4e61a61ab14f37699d47fafabedacd070234b"
        },
        "date": 1768377533392,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MYSQL_Set",
            "value": 1015215,
            "unit": "ns/op\t    9751 B/op\t      97 allocs/op",
            "extra": "1126 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - ns/op",
            "value": 1015215,
            "unit": "ns/op",
            "extra": "1126 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - B/op",
            "value": 9751,
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
            "value": 1022202,
            "unit": "ns/op\t    9738 B/op\t     104 allocs/op",
            "extra": "1159 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - ns/op",
            "value": 1022202,
            "unit": "ns/op",
            "extra": "1159 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - B/op",
            "value": 9738,
            "unit": "B/op",
            "extra": "1159 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - allocs/op",
            "value": 104,
            "unit": "allocs/op",
            "extra": "1159 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete",
            "value": 3075039,
            "unit": "ns/op\t   18989 B/op\t     189 allocs/op",
            "extra": "385 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - ns/op",
            "value": 3075039,
            "unit": "ns/op",
            "extra": "385 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - B/op",
            "value": 18989,
            "unit": "B/op",
            "extra": "385 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - allocs/op",
            "value": 189,
            "unit": "allocs/op",
            "extra": "385 times\n4 procs"
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
          "id": "ff72418577cfb7f72d6ad0887c106e28c5b4ce1e",
          "message": "Merge pull request #2380 from gofiber/dependabot/go_modules/aerospike/shirou-modules-83465100a6\n\nchore(deps): bump the shirou-modules group across 25 directories with 1 update",
          "timestamp": "2026-01-14T09:25:58+01:00",
          "tree_id": "ee6baa1f0229e113f85e55193ba91000f6475119",
          "url": "https://github.com/gofiber/storage/commit/ff72418577cfb7f72d6ad0887c106e28c5b4ce1e"
        },
        "date": 1768379418418,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MYSQL_Set",
            "value": 977151,
            "unit": "ns/op\t    9758 B/op\t      97 allocs/op",
            "extra": "1146 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - ns/op",
            "value": 977151,
            "unit": "ns/op",
            "extra": "1146 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - B/op",
            "value": 9758,
            "unit": "B/op",
            "extra": "1146 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - allocs/op",
            "value": 97,
            "unit": "allocs/op",
            "extra": "1146 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get",
            "value": 973149,
            "unit": "ns/op\t    9744 B/op\t     104 allocs/op",
            "extra": "1214 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - ns/op",
            "value": 973149,
            "unit": "ns/op",
            "extra": "1214 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - B/op",
            "value": 9744,
            "unit": "B/op",
            "extra": "1214 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - allocs/op",
            "value": 104,
            "unit": "allocs/op",
            "extra": "1214 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete",
            "value": 2986072,
            "unit": "ns/op\t   18960 B/op\t     189 allocs/op",
            "extra": "399 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - ns/op",
            "value": 2986072,
            "unit": "ns/op",
            "extra": "399 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - B/op",
            "value": 18960,
            "unit": "B/op",
            "extra": "399 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - allocs/op",
            "value": 189,
            "unit": "allocs/op",
            "extra": "399 times\n4 procs"
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
          "id": "60df3d9c58eb10d562ad9e9a4b3d100a280722cf",
          "message": "Merge pull request #2374 from gofiber/dependabot/go_modules/aerospike/grpc-gateway-modules-f0fd976ae1\n\nchore(deps): bump the grpc-gateway-modules group across 17 directories with 1 update",
          "timestamp": "2026-01-14T09:41:06+01:00",
          "tree_id": "d69c3a25d2b4361f4281d4250702a742a2cc6370",
          "url": "https://github.com/gofiber/storage/commit/60df3d9c58eb10d562ad9e9a4b3d100a280722cf"
        },
        "date": 1768380301122,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MYSQL_Set",
            "value": 804304,
            "unit": "ns/op\t    9770 B/op\t      97 allocs/op",
            "extra": "1389 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - ns/op",
            "value": 804304,
            "unit": "ns/op",
            "extra": "1389 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - B/op",
            "value": 9770,
            "unit": "B/op",
            "extra": "1389 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - allocs/op",
            "value": 97,
            "unit": "allocs/op",
            "extra": "1389 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get",
            "value": 812358,
            "unit": "ns/op\t    9738 B/op\t     104 allocs/op",
            "extra": "1500 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - ns/op",
            "value": 812358,
            "unit": "ns/op",
            "extra": "1500 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - B/op",
            "value": 9738,
            "unit": "B/op",
            "extra": "1500 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - allocs/op",
            "value": 104,
            "unit": "allocs/op",
            "extra": "1500 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete",
            "value": 2960333,
            "unit": "ns/op\t   18978 B/op\t     189 allocs/op",
            "extra": "388 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - ns/op",
            "value": 2960333,
            "unit": "ns/op",
            "extra": "388 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - B/op",
            "value": 18978,
            "unit": "B/op",
            "extra": "388 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - allocs/op",
            "value": 189,
            "unit": "allocs/op",
            "extra": "388 times\n4 procs"
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
          "id": "5cd76fc767e940bff64f9b2b32d533d1a96c6b60",
          "message": "Merge pull request #2418 from gofiber/dependabot/go_modules/mysql/github.com/sirupsen/logrus-1.9.4\n\nchore(deps): bump github.com/sirupsen/logrus from 1.9.3 to 1.9.4 in /mysql",
          "timestamp": "2026-01-16T08:20:01+01:00",
          "tree_id": "6b77e131b79fd8389f0f56cad47ff4a2fd1eb4f0",
          "url": "https://github.com/gofiber/storage/commit/5cd76fc767e940bff64f9b2b32d533d1a96c6b60"
        },
        "date": 1768548471149,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MYSQL_Set",
            "value": 1022547,
            "unit": "ns/op\t    9762 B/op\t      97 allocs/op",
            "extra": "1117 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - ns/op",
            "value": 1022547,
            "unit": "ns/op",
            "extra": "1117 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - B/op",
            "value": 9762,
            "unit": "B/op",
            "extra": "1117 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - allocs/op",
            "value": 97,
            "unit": "allocs/op",
            "extra": "1117 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get",
            "value": 1027068,
            "unit": "ns/op\t    9735 B/op\t     104 allocs/op",
            "extra": "1140 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - ns/op",
            "value": 1027068,
            "unit": "ns/op",
            "extra": "1140 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - B/op",
            "value": 9735,
            "unit": "B/op",
            "extra": "1140 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - allocs/op",
            "value": 104,
            "unit": "allocs/op",
            "extra": "1140 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete",
            "value": 3060081,
            "unit": "ns/op\t   18961 B/op\t     189 allocs/op",
            "extra": "390 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - ns/op",
            "value": 3060081,
            "unit": "ns/op",
            "extra": "390 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - B/op",
            "value": 18961,
            "unit": "B/op",
            "extra": "390 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - allocs/op",
            "value": 189,
            "unit": "allocs/op",
            "extra": "390 times\n4 procs"
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
          "id": "11c05d6dd6b71047aa48d58de62f2dadfe0e7fe5",
          "message": "Merge pull request #2431 from gofiber/dependabot/go_modules/aerospike/klauspost-modules-060a4d48f9\n\nchore(deps): bump the klauspost-modules group across 27 directories with 1 update",
          "timestamp": "2026-01-20T08:14:15+01:00",
          "tree_id": "e9bfe2f24534f6ec7ff4894e21bafd80f6f04c97",
          "url": "https://github.com/gofiber/storage/commit/11c05d6dd6b71047aa48d58de62f2dadfe0e7fe5"
        },
        "date": 1768893490504,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MYSQL_Set",
            "value": 1007226,
            "unit": "ns/op\t    9757 B/op\t      97 allocs/op",
            "extra": "1135 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - ns/op",
            "value": 1007226,
            "unit": "ns/op",
            "extra": "1135 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - B/op",
            "value": 9757,
            "unit": "B/op",
            "extra": "1135 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - allocs/op",
            "value": 97,
            "unit": "allocs/op",
            "extra": "1135 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get",
            "value": 1012517,
            "unit": "ns/op\t    9732 B/op\t     104 allocs/op",
            "extra": "1171 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - ns/op",
            "value": 1012517,
            "unit": "ns/op",
            "extra": "1171 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - B/op",
            "value": 9732,
            "unit": "B/op",
            "extra": "1171 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - allocs/op",
            "value": 104,
            "unit": "allocs/op",
            "extra": "1171 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete",
            "value": 3038083,
            "unit": "ns/op\t   18987 B/op\t     189 allocs/op",
            "extra": "373 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - ns/op",
            "value": 3038083,
            "unit": "ns/op",
            "extra": "373 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - B/op",
            "value": 18987,
            "unit": "B/op",
            "extra": "373 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - allocs/op",
            "value": 189,
            "unit": "allocs/op",
            "extra": "373 times\n4 procs"
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
          "id": "e9f9049f27e7ceec91dfd041fbe05df48cd106dd",
          "message": "Merge pull request #2435 from gofiber/dependabot/go_modules/aerospike/grpc-gateway-modules-723df7c2c9\n\nchore(deps): bump the grpc-gateway-modules group across 17 directories with 1 update",
          "timestamp": "2026-01-22T08:15:16+01:00",
          "tree_id": "5617c43a1da81518cb8795a6f1fdf6dc4ddcc92b",
          "url": "https://github.com/gofiber/storage/commit/e9f9049f27e7ceec91dfd041fbe05df48cd106dd"
        },
        "date": 1769066299879,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MYSQL_Set",
            "value": 1034770,
            "unit": "ns/op\t    9759 B/op\t      97 allocs/op",
            "extra": "1118 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - ns/op",
            "value": 1034770,
            "unit": "ns/op",
            "extra": "1118 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - B/op",
            "value": 9759,
            "unit": "B/op",
            "extra": "1118 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - allocs/op",
            "value": 97,
            "unit": "allocs/op",
            "extra": "1118 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get",
            "value": 1027992,
            "unit": "ns/op\t    9739 B/op\t     104 allocs/op",
            "extra": "1160 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - ns/op",
            "value": 1027992,
            "unit": "ns/op",
            "extra": "1160 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - B/op",
            "value": 9739,
            "unit": "B/op",
            "extra": "1160 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - allocs/op",
            "value": 104,
            "unit": "allocs/op",
            "extra": "1160 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete",
            "value": 2987758,
            "unit": "ns/op\t   18960 B/op\t     189 allocs/op",
            "extra": "388 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - ns/op",
            "value": 2987758,
            "unit": "ns/op",
            "extra": "388 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - B/op",
            "value": 18960,
            "unit": "B/op",
            "extra": "388 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - allocs/op",
            "value": 189,
            "unit": "allocs/op",
            "extra": "388 times\n4 procs"
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
          "id": "fa3a97855d0da53ec0205aa676526e8756721fd1",
          "message": "Merge pull request #2450 from gofiber/dependabot/go_modules/aerospike/grpc-gateway-modules-d980216198\n\nchore(deps): bump the grpc-gateway-modules group across 17 directories with 1 update",
          "timestamp": "2026-01-29T08:17:06+01:00",
          "tree_id": "c8f8fe99ce6c653abae810ef180d558605f471e6",
          "url": "https://github.com/gofiber/storage/commit/fa3a97855d0da53ec0205aa676526e8756721fd1"
        },
        "date": 1769671290667,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MYSQL_Set",
            "value": 984176,
            "unit": "ns/op\t    9760 B/op\t      97 allocs/op",
            "extra": "1165 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - ns/op",
            "value": 984176,
            "unit": "ns/op",
            "extra": "1165 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - B/op",
            "value": 9760,
            "unit": "B/op",
            "extra": "1165 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - allocs/op",
            "value": 97,
            "unit": "allocs/op",
            "extra": "1165 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get",
            "value": 979447,
            "unit": "ns/op\t    9732 B/op\t     104 allocs/op",
            "extra": "1196 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - ns/op",
            "value": 979447,
            "unit": "ns/op",
            "extra": "1196 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - B/op",
            "value": 9732,
            "unit": "B/op",
            "extra": "1196 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - allocs/op",
            "value": 104,
            "unit": "allocs/op",
            "extra": "1196 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete",
            "value": 2883107,
            "unit": "ns/op\t   18961 B/op\t     189 allocs/op",
            "extra": "403 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - ns/op",
            "value": 2883107,
            "unit": "ns/op",
            "extra": "403 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - B/op",
            "value": 18961,
            "unit": "B/op",
            "extra": "403 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - allocs/op",
            "value": 189,
            "unit": "allocs/op",
            "extra": "403 times\n4 procs"
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
          "id": "10397eff7ac2cc895ea17f5137d88129f76ff504",
          "message": "Merge pull request #2453 from gofiber/dependabot/go_modules/aerospike/grpc-gateway-modules-9a71abc68d\n\nchore(deps): bump the grpc-gateway-modules group across 17 directories with 1 update",
          "timestamp": "2026-01-30T08:14:26+01:00",
          "tree_id": "682c55829d86f0c86143786f27699a227cfca01f",
          "url": "https://github.com/gofiber/storage/commit/10397eff7ac2cc895ea17f5137d88129f76ff504"
        },
        "date": 1769757484492,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MYSQL_Set",
            "value": 992642,
            "unit": "ns/op\t    9745 B/op\t      97 allocs/op",
            "extra": "1154 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - ns/op",
            "value": 992642,
            "unit": "ns/op",
            "extra": "1154 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - B/op",
            "value": 9745,
            "unit": "B/op",
            "extra": "1154 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - allocs/op",
            "value": 97,
            "unit": "allocs/op",
            "extra": "1154 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get",
            "value": 993741,
            "unit": "ns/op\t    9733 B/op\t     104 allocs/op",
            "extra": "1134 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - ns/op",
            "value": 993741,
            "unit": "ns/op",
            "extra": "1134 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - B/op",
            "value": 9733,
            "unit": "B/op",
            "extra": "1134 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - allocs/op",
            "value": 104,
            "unit": "allocs/op",
            "extra": "1134 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete",
            "value": 2965425,
            "unit": "ns/op\t   18962 B/op\t     189 allocs/op",
            "extra": "398 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - ns/op",
            "value": 2965425,
            "unit": "ns/op",
            "extra": "398 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - B/op",
            "value": 18962,
            "unit": "B/op",
            "extra": "398 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - allocs/op",
            "value": 189,
            "unit": "allocs/op",
            "extra": "398 times\n4 procs"
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
          "id": "8bff5a354fb8012e046c7af091ef7ab317148fd2",
          "message": "Merge pull request #2458 from gofiber/dependabot/go_modules/aerospike/shirou-modules-780478747e\n\nchore(deps): bump the shirou-modules group across 25 directories with 1 update",
          "timestamp": "2026-02-02T08:32:06+01:00",
          "tree_id": "a7e435370484fe153e24e8124efa1aa935a60a6a",
          "url": "https://github.com/gofiber/storage/commit/8bff5a354fb8012e046c7af091ef7ab317148fd2"
        },
        "date": 1770017917616,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MYSQL_Set",
            "value": 978791,
            "unit": "ns/op\t    9769 B/op\t      97 allocs/op",
            "extra": "1156 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - ns/op",
            "value": 978791,
            "unit": "ns/op",
            "extra": "1156 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - B/op",
            "value": 9769,
            "unit": "B/op",
            "extra": "1156 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - allocs/op",
            "value": 97,
            "unit": "allocs/op",
            "extra": "1156 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get",
            "value": 977119,
            "unit": "ns/op\t    9744 B/op\t     104 allocs/op",
            "extra": "1209 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - ns/op",
            "value": 977119,
            "unit": "ns/op",
            "extra": "1209 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - B/op",
            "value": 9744,
            "unit": "B/op",
            "extra": "1209 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - allocs/op",
            "value": 104,
            "unit": "allocs/op",
            "extra": "1209 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete",
            "value": 3045508,
            "unit": "ns/op\t   18960 B/op\t     189 allocs/op",
            "extra": "390 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - ns/op",
            "value": 3045508,
            "unit": "ns/op",
            "extra": "390 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - B/op",
            "value": 18960,
            "unit": "B/op",
            "extra": "390 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - allocs/op",
            "value": 189,
            "unit": "allocs/op",
            "extra": "390 times\n4 procs"
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
          "id": "205fb777dcd9e87d8cee3d907d0346bf1a0f98a2",
          "message": "Merge pull request #2462 from gofiber/dependabot/go_modules/aerospike/opentelemetry-modules-a50a55491e\n\nchore(deps): bump the opentelemetry-modules group across 25 directories with 6 updates",
          "timestamp": "2026-02-03T09:39:34+01:00",
          "tree_id": "02ec0069a8ab255423484ef50bce7e9703957bd4",
          "url": "https://github.com/gofiber/storage/commit/205fb777dcd9e87d8cee3d907d0346bf1a0f98a2"
        },
        "date": 1770108251519,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MYSQL_Set",
            "value": 1038375,
            "unit": "ns/op\t    9776 B/op\t      97 allocs/op",
            "extra": "1107 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - ns/op",
            "value": 1038375,
            "unit": "ns/op",
            "extra": "1107 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - B/op",
            "value": 9776,
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
            "value": 1029026,
            "unit": "ns/op\t    9741 B/op\t     104 allocs/op",
            "extra": "1156 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - ns/op",
            "value": 1029026,
            "unit": "ns/op",
            "extra": "1156 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - B/op",
            "value": 9741,
            "unit": "B/op",
            "extra": "1156 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - allocs/op",
            "value": 104,
            "unit": "allocs/op",
            "extra": "1156 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete",
            "value": 3159044,
            "unit": "ns/op\t   18960 B/op\t     189 allocs/op",
            "extra": "356 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - ns/op",
            "value": 3159044,
            "unit": "ns/op",
            "extra": "356 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - B/op",
            "value": 18960,
            "unit": "B/op",
            "extra": "356 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - allocs/op",
            "value": 189,
            "unit": "allocs/op",
            "extra": "356 times\n4 procs"
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
          "id": "fb897e30435db5900077eaa5a154eb82084244a9",
          "message": "Merge pull request #2472 from gofiber/dependabot/go_modules/aerospike/klauspost-modules-e89a90612b\n\nchore(deps): bump the klauspost-modules group across 27 directories with 1 update",
          "timestamp": "2026-02-10T08:15:49+01:00",
          "tree_id": "dedd6a8e895939e7474944a1cf8d8b6f1dedddd5",
          "url": "https://github.com/gofiber/storage/commit/fb897e30435db5900077eaa5a154eb82084244a9"
        },
        "date": 1770708077774,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MYSQL_Set",
            "value": 959585,
            "unit": "ns/op\t    9771 B/op\t      97 allocs/op",
            "extra": "1176 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - ns/op",
            "value": 959585,
            "unit": "ns/op",
            "extra": "1176 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - B/op",
            "value": 9771,
            "unit": "B/op",
            "extra": "1176 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - allocs/op",
            "value": 97,
            "unit": "allocs/op",
            "extra": "1176 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get",
            "value": 964216,
            "unit": "ns/op\t    9732 B/op\t     104 allocs/op",
            "extra": "1237 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - ns/op",
            "value": 964216,
            "unit": "ns/op",
            "extra": "1237 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - B/op",
            "value": 9732,
            "unit": "B/op",
            "extra": "1237 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - allocs/op",
            "value": 104,
            "unit": "allocs/op",
            "extra": "1237 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete",
            "value": 3403671,
            "unit": "ns/op\t   18960 B/op\t     189 allocs/op",
            "extra": "337 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - ns/op",
            "value": 3403671,
            "unit": "ns/op",
            "extra": "337 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - B/op",
            "value": 18960,
            "unit": "B/op",
            "extra": "337 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - allocs/op",
            "value": 189,
            "unit": "allocs/op",
            "extra": "337 times\n4 procs"
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
          "id": "00d49367b265e5ce786e62cc4c0bf3d5fae3f2bc",
          "message": "Merge pull request #2475 from gofiber/dependabot/go_modules/aerospike/grpc-gateway-modules-3b228c5f6b\n\nchore(deps): bump the grpc-gateway-modules group across 17 directories with 1 update",
          "timestamp": "2026-02-11T08:16:19+01:00",
          "tree_id": "918d22e3f493ff4086f5640df252d131a9af82ac",
          "url": "https://github.com/gofiber/storage/commit/00d49367b265e5ce786e62cc4c0bf3d5fae3f2bc"
        },
        "date": 1770794409218,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MYSQL_Set",
            "value": 997367,
            "unit": "ns/op\t    9770 B/op\t      97 allocs/op",
            "extra": "1144 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - ns/op",
            "value": 997367,
            "unit": "ns/op",
            "extra": "1144 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - B/op",
            "value": 9770,
            "unit": "B/op",
            "extra": "1144 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - allocs/op",
            "value": 97,
            "unit": "allocs/op",
            "extra": "1144 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get",
            "value": 999730,
            "unit": "ns/op\t    9741 B/op\t     104 allocs/op",
            "extra": "1179 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - ns/op",
            "value": 999730,
            "unit": "ns/op",
            "extra": "1179 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - B/op",
            "value": 9741,
            "unit": "B/op",
            "extra": "1179 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - allocs/op",
            "value": 104,
            "unit": "allocs/op",
            "extra": "1179 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete",
            "value": 2913175,
            "unit": "ns/op\t   18960 B/op\t     189 allocs/op",
            "extra": "392 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - ns/op",
            "value": 2913175,
            "unit": "ns/op",
            "extra": "392 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - B/op",
            "value": 18960,
            "unit": "B/op",
            "extra": "392 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - allocs/op",
            "value": 189,
            "unit": "allocs/op",
            "extra": "392 times\n4 procs"
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
          "id": "a797849a0477b5a8fd159843c4c257a57c5574e1",
          "message": "Merge pull request #2480 from gofiber/dependabot/go_modules/aerospike/google-modules-042a720460\n\nchore(deps): bump the google-modules group across 19 directories with 2 updates",
          "timestamp": "2026-02-13T08:17:34+01:00",
          "tree_id": "eed8d6400d34414744f98c4d4bf302e8e4b18d58",
          "url": "https://github.com/gofiber/storage/commit/a797849a0477b5a8fd159843c4c257a57c5574e1"
        },
        "date": 1770967267031,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MYSQL_Set",
            "value": 1054099,
            "unit": "ns/op\t    9759 B/op\t      97 allocs/op",
            "extra": "1077 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - ns/op",
            "value": 1054099,
            "unit": "ns/op",
            "extra": "1077 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - B/op",
            "value": 9759,
            "unit": "B/op",
            "extra": "1077 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - allocs/op",
            "value": 97,
            "unit": "allocs/op",
            "extra": "1077 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get",
            "value": 1056206,
            "unit": "ns/op\t    9744 B/op\t     104 allocs/op",
            "extra": "1111 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - ns/op",
            "value": 1056206,
            "unit": "ns/op",
            "extra": "1111 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - B/op",
            "value": 9744,
            "unit": "B/op",
            "extra": "1111 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - allocs/op",
            "value": 104,
            "unit": "allocs/op",
            "extra": "1111 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete",
            "value": 3500266,
            "unit": "ns/op\t   18960 B/op\t     189 allocs/op",
            "extra": "310 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - ns/op",
            "value": 3500266,
            "unit": "ns/op",
            "extra": "310 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - B/op",
            "value": 18960,
            "unit": "B/op",
            "extra": "310 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - allocs/op",
            "value": 189,
            "unit": "allocs/op",
            "extra": "310 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "835733+gaby@users.noreply.github.com",
            "name": "Juan Calderon-Perez",
            "username": "gaby"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4eb9e62ab677c10980f52e1371b0a79294a0352b",
          "message": "Merge pull request #2478 from gofiber/dependabot/go_modules/aerospike/golang-modules-83bead6e39\n\nchore(deps): bump the golang-modules group across 29 directories with 5 updates",
          "timestamp": "2026-02-16T19:27:53-05:00",
          "tree_id": "fee0127030d6f552d97edac9a181150b033d0049",
          "url": "https://github.com/gofiber/storage/commit/4eb9e62ab677c10980f52e1371b0a79294a0352b"
        },
        "date": 1771288336497,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MYSQL_Set",
            "value": 1045441,
            "unit": "ns/op\t    9766 B/op\t      97 allocs/op",
            "extra": "1076 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - ns/op",
            "value": 1045441,
            "unit": "ns/op",
            "extra": "1076 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - B/op",
            "value": 9766,
            "unit": "B/op",
            "extra": "1076 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - allocs/op",
            "value": 97,
            "unit": "allocs/op",
            "extra": "1076 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get",
            "value": 1077709,
            "unit": "ns/op\t    9728 B/op\t     104 allocs/op",
            "extra": "1130 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - ns/op",
            "value": 1077709,
            "unit": "ns/op",
            "extra": "1130 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - B/op",
            "value": 9728,
            "unit": "B/op",
            "extra": "1130 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - allocs/op",
            "value": 104,
            "unit": "allocs/op",
            "extra": "1130 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete",
            "value": 3132108,
            "unit": "ns/op\t   18963 B/op\t     189 allocs/op",
            "extra": "340 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - ns/op",
            "value": 3132108,
            "unit": "ns/op",
            "extra": "340 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - B/op",
            "value": 18963,
            "unit": "B/op",
            "extra": "340 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - allocs/op",
            "value": 189,
            "unit": "allocs/op",
            "extra": "340 times\n4 procs"
          }
        ]
      }
    ]
  }
}