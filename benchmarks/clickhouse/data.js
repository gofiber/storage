window.BENCHMARK_DATA = {
  "lastUpdate": 1745688202831,
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
        "date": 1742368006284,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Clickhouse_Set",
            "value": 15306634465,
            "unit": "ns/op\t 4599120 B/op\t   33327 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - ns/op",
            "value": 15306634465,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - B/op",
            "value": 4599120,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - allocs/op",
            "value": 33327,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get",
            "value": 3273784542,
            "unit": "ns/op\t 3047992 B/op\t   21133 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - ns/op",
            "value": 3273784542,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - B/op",
            "value": 3047992,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - allocs/op",
            "value": 21133,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete",
            "value": 3332150448,
            "unit": "ns/op\t 2839696 B/op\t   21000 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - ns/op",
            "value": 3332150448,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - B/op",
            "value": 2839696,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - allocs/op",
            "value": 21000,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
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
          "id": "4cd1214f699eb3aa31b947a1b934968ebee8fbb2",
          "message": "Merge pull request #1583 from gofiber/dependabot/go_modules/clickhouse/github.com/stretchr/testify-1.10.0\n\nchore(deps): bump github.com/stretchr/testify from 1.9.0 to 1.10.0 in /clickhouse",
          "timestamp": "2025-03-26T21:23:41+01:00",
          "tree_id": "b33b6a918a4eb6e694296ecfdf154b210eecec19",
          "url": "https://github.com/gofiber/storage/commit/4cd1214f699eb3aa31b947a1b934968ebee8fbb2"
        },
        "date": 1743021736968,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Clickhouse_Set",
            "value": 16511006235,
            "unit": "ns/op\t 4682632 B/op\t   33303 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - ns/op",
            "value": 16511006235,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - B/op",
            "value": 4682632,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - allocs/op",
            "value": 33303,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get",
            "value": 3260189623,
            "unit": "ns/op\t 3000024 B/op\t   21090 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - ns/op",
            "value": 3260189623,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - B/op",
            "value": 3000024,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - allocs/op",
            "value": 21090,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete",
            "value": 3244808884,
            "unit": "ns/op\t 2850720 B/op\t   20698 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - ns/op",
            "value": 3244808884,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - B/op",
            "value": 2850720,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - allocs/op",
            "value": 20698,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
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
        "date": 1744190376504,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Clickhouse_Set",
            "value": 12757136655,
            "unit": "ns/op\t 4690056 B/op\t   34021 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - ns/op",
            "value": 12757136655,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - B/op",
            "value": 4690056,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - allocs/op",
            "value": 34021,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get",
            "value": 3263501656,
            "unit": "ns/op\t 3108232 B/op\t   22061 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - ns/op",
            "value": 3263501656,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - B/op",
            "value": 3108232,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - allocs/op",
            "value": 22061,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete",
            "value": 3279496646,
            "unit": "ns/op\t 2904504 B/op\t   21324 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - ns/op",
            "value": 3279496646,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - B/op",
            "value": 2904504,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - allocs/op",
            "value": 21324,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
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
          "id": "4a002049c50a9cf37c5c4c1bd962f608f7643589",
          "message": "Merge pull request #1636 from gofiber/dependabot/go_modules/clickhouse/github.com/ClickHouse/clickhouse-go/v2-2.34.0\n\nchore(deps): bump github.com/ClickHouse/clickhouse-go/v2 from 2.26.0 to 2.34.0 in /clickhouse",
          "timestamp": "2025-04-09T11:22:31+02:00",
          "tree_id": "e2b5705379d0cf4ee39d0f8dcdcc51b1ae5edc49",
          "url": "https://github.com/gofiber/storage/commit/4a002049c50a9cf37c5c4c1bd962f608f7643589"
        },
        "date": 1744190632977,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Clickhouse_Set",
            "value": 12470974128,
            "unit": "ns/op\t 4535400 B/op\t   33942 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - ns/op",
            "value": 12470974128,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - B/op",
            "value": 4535400,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - allocs/op",
            "value": 33942,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get",
            "value": 3270435517,
            "unit": "ns/op\t 2937264 B/op\t   22086 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - ns/op",
            "value": 3270435517,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - B/op",
            "value": 2937264,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - allocs/op",
            "value": 22086,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete",
            "value": 3312178997,
            "unit": "ns/op\t 2912688 B/op\t   21403 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - ns/op",
            "value": 3312178997,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - B/op",
            "value": 2912688,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - allocs/op",
            "value": 21403,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
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
        "date": 1744782299333,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Clickhouse_Set",
            "value": 1374022,
            "unit": "ns/op\t   15696 B/op\t     197 allocs/op",
            "extra": "962 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - ns/op",
            "value": 1374022,
            "unit": "ns/op",
            "extra": "962 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - B/op",
            "value": 15696,
            "unit": "B/op",
            "extra": "962 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - allocs/op",
            "value": 197,
            "unit": "allocs/op",
            "extra": "962 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get",
            "value": 972237,
            "unit": "ns/op\t   16727 B/op\t     232 allocs/op",
            "extra": "1219 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - ns/op",
            "value": 972237,
            "unit": "ns/op",
            "extra": "1219 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - B/op",
            "value": 16727,
            "unit": "B/op",
            "extra": "1219 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - allocs/op",
            "value": 232,
            "unit": "allocs/op",
            "extra": "1219 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete",
            "value": 1968628,
            "unit": "ns/op\t   17411 B/op\t     245 allocs/op",
            "extra": "600 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - ns/op",
            "value": 1968628,
            "unit": "ns/op",
            "extra": "600 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - B/op",
            "value": 17411,
            "unit": "B/op",
            "extra": "600 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - allocs/op",
            "value": 245,
            "unit": "allocs/op",
            "extra": "600 times\n4 procs"
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
          "id": "195845e882d614336da1bd756e9ffb5a47b32a31",
          "message": "Merge pull request #1689 from gofiber/update-deps\n\n🧹 chore: Update dependencies",
          "timestamp": "2025-04-26T19:16:58+02:00",
          "tree_id": "3e603b094731a7abb4077ec1ce864ef69cdd1b74",
          "url": "https://github.com/gofiber/storage/commit/195845e882d614336da1bd756e9ffb5a47b32a31"
        },
        "date": 1745688195200,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Clickhouse_Set",
            "value": 1341589,
            "unit": "ns/op\t   15644 B/op\t     197 allocs/op",
            "extra": "990 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - ns/op",
            "value": 1341589,
            "unit": "ns/op",
            "extra": "990 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - B/op",
            "value": 15644,
            "unit": "B/op",
            "extra": "990 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - allocs/op",
            "value": 197,
            "unit": "allocs/op",
            "extra": "990 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get",
            "value": 960683,
            "unit": "ns/op\t   16565 B/op\t     232 allocs/op",
            "extra": "1232 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - ns/op",
            "value": 960683,
            "unit": "ns/op",
            "extra": "1232 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - B/op",
            "value": 16565,
            "unit": "B/op",
            "extra": "1232 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - allocs/op",
            "value": 232,
            "unit": "allocs/op",
            "extra": "1232 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete",
            "value": 1950092,
            "unit": "ns/op\t   17498 B/op\t     246 allocs/op",
            "extra": "610 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - ns/op",
            "value": 1950092,
            "unit": "ns/op",
            "extra": "610 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - B/op",
            "value": 17498,
            "unit": "B/op",
            "extra": "610 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - allocs/op",
            "value": 246,
            "unit": "allocs/op",
            "extra": "610 times\n4 procs"
          }
        ]
      }
    ]
  }
}