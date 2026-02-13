window.BENCHMARK_DATA = {
  "lastUpdate": 1770967270611,
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
          "id": "0a698b4339e06266246c77fc20ac73852b2cdb00",
          "message": "Merge pull request #1696 from gofiber/dependabot/go_modules/clickhouse/github.com/testcontainers/testcontainers-go-0.37.0\n\nchore(deps): bump github.com/testcontainers/testcontainers-go from 0.36.0 to 0.37.0 in /clickhouse",
          "timestamp": "2025-04-28T12:52:53+02:00",
          "tree_id": "6326e35f9793028e36a1b4d4282a4e116a816516",
          "url": "https://github.com/gofiber/storage/commit/0a698b4339e06266246c77fc20ac73852b2cdb00"
        },
        "date": 1745837895151,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Clickhouse_Set",
            "value": 1331905,
            "unit": "ns/op\t   15616 B/op\t     197 allocs/op",
            "extra": "972 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - ns/op",
            "value": 1331905,
            "unit": "ns/op",
            "extra": "972 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - B/op",
            "value": 15616,
            "unit": "B/op",
            "extra": "972 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - allocs/op",
            "value": 197,
            "unit": "allocs/op",
            "extra": "972 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get",
            "value": 965757,
            "unit": "ns/op\t   16569 B/op\t     232 allocs/op",
            "extra": "1236 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - ns/op",
            "value": 965757,
            "unit": "ns/op",
            "extra": "1236 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - B/op",
            "value": 16569,
            "unit": "B/op",
            "extra": "1236 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - allocs/op",
            "value": 232,
            "unit": "allocs/op",
            "extra": "1236 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete",
            "value": 1926708,
            "unit": "ns/op\t   17425 B/op\t     245 allocs/op",
            "extra": "612 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - ns/op",
            "value": 1926708,
            "unit": "ns/op",
            "extra": "612 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - B/op",
            "value": 17425,
            "unit": "B/op",
            "extra": "612 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - allocs/op",
            "value": 245,
            "unit": "allocs/op",
            "extra": "612 times\n4 procs"
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
          "id": "a1c54b296659a64c105066c2837b6dab3b755701",
          "message": "Merge pull request #1706 from gofiber/dependabot/go_modules/clickhouse/github.com/testcontainers/testcontainers-go/modules/clickhouse-0.37.0\n\nchore(deps): bump github.com/testcontainers/testcontainers-go/modules/clickhouse from 0.36.0 to 0.37.0 in /clickhouse",
          "timestamp": "2025-04-29T09:32:09+02:00",
          "tree_id": "22d2ca55d342b69c39d73250ca676cc9c923eaa2",
          "url": "https://github.com/gofiber/storage/commit/a1c54b296659a64c105066c2837b6dab3b755701"
        },
        "date": 1745912042194,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Clickhouse_Set",
            "value": 1336535,
            "unit": "ns/op\t   15814 B/op\t     197 allocs/op",
            "extra": "968 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - ns/op",
            "value": 1336535,
            "unit": "ns/op",
            "extra": "968 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - B/op",
            "value": 15814,
            "unit": "B/op",
            "extra": "968 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - allocs/op",
            "value": 197,
            "unit": "allocs/op",
            "extra": "968 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get",
            "value": 957515,
            "unit": "ns/op\t   16894 B/op\t     233 allocs/op",
            "extra": "1232 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - ns/op",
            "value": 957515,
            "unit": "ns/op",
            "extra": "1232 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - B/op",
            "value": 16894,
            "unit": "B/op",
            "extra": "1232 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - allocs/op",
            "value": 233,
            "unit": "allocs/op",
            "extra": "1232 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete",
            "value": 1963756,
            "unit": "ns/op\t   17492 B/op\t     246 allocs/op",
            "extra": "618 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - ns/op",
            "value": 1963756,
            "unit": "ns/op",
            "extra": "618 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - B/op",
            "value": 17492,
            "unit": "B/op",
            "extra": "618 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - allocs/op",
            "value": 246,
            "unit": "allocs/op",
            "extra": "618 times\n4 procs"
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
          "id": "7089f9d809c3cbc55041031f393176ae70b72051",
          "message": "Merge pull request #1741 from gofiber/dependabot/go_modules/clickhouse/github.com/ClickHouse/clickhouse-go/v2-2.35.0\n\nchore(deps): bump github.com/ClickHouse/clickhouse-go/v2 from 2.34.0 to 2.35.0 in /clickhouse",
          "timestamp": "2025-05-22T09:31:21+02:00",
          "tree_id": "36f0256ee425a82dcfb6bb0564df720bbd92108b",
          "url": "https://github.com/gofiber/storage/commit/7089f9d809c3cbc55041031f393176ae70b72051"
        },
        "date": 1747899177069,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Clickhouse_Set",
            "value": 1347804,
            "unit": "ns/op\t   15441 B/op\t     197 allocs/op",
            "extra": "889 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - ns/op",
            "value": 1347804,
            "unit": "ns/op",
            "extra": "889 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - B/op",
            "value": 15441,
            "unit": "B/op",
            "extra": "889 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - allocs/op",
            "value": 197,
            "unit": "allocs/op",
            "extra": "889 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get",
            "value": 950684,
            "unit": "ns/op\t   16939 B/op\t     233 allocs/op",
            "extra": "1263 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - ns/op",
            "value": 950684,
            "unit": "ns/op",
            "extra": "1263 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - B/op",
            "value": 16939,
            "unit": "B/op",
            "extra": "1263 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - allocs/op",
            "value": 233,
            "unit": "allocs/op",
            "extra": "1263 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete",
            "value": 1952627,
            "unit": "ns/op\t   17752 B/op\t     247 allocs/op",
            "extra": "621 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - ns/op",
            "value": 1952627,
            "unit": "ns/op",
            "extra": "621 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - B/op",
            "value": 17752,
            "unit": "B/op",
            "extra": "621 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - allocs/op",
            "value": 247,
            "unit": "allocs/op",
            "extra": "621 times\n4 procs"
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
          "id": "f7a52236a03b9e256d9cc6363704f14ae39ed24a",
          "message": "Merge pull request #1749 from gofiber/dependabot/go_modules/clickhouse/github.com/ClickHouse/clickhouse-go/v2-2.36.0\n\nchore(deps): bump github.com/ClickHouse/clickhouse-go/v2 from 2.35.0 to 2.36.0 in /clickhouse",
          "timestamp": "2025-06-04T09:42:34+02:00",
          "tree_id": "5149364140a7656347f35a8ad82d44b88c2d6196",
          "url": "https://github.com/gofiber/storage/commit/f7a52236a03b9e256d9cc6363704f14ae39ed24a"
        },
        "date": 1749023071523,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Clickhouse_Set",
            "value": 1362464,
            "unit": "ns/op\t   15533 B/op\t     199 allocs/op",
            "extra": "968 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - ns/op",
            "value": 1362464,
            "unit": "ns/op",
            "extra": "968 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - B/op",
            "value": 15533,
            "unit": "B/op",
            "extra": "968 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "968 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get",
            "value": 972639,
            "unit": "ns/op\t   16798 B/op\t     234 allocs/op",
            "extra": "1212 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - ns/op",
            "value": 972639,
            "unit": "ns/op",
            "extra": "1212 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - B/op",
            "value": 16798,
            "unit": "B/op",
            "extra": "1212 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "1212 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete",
            "value": 1975056,
            "unit": "ns/op\t   17797 B/op\t     249 allocs/op",
            "extra": "598 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - ns/op",
            "value": 1975056,
            "unit": "ns/op",
            "extra": "598 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - B/op",
            "value": 17797,
            "unit": "B/op",
            "extra": "598 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - allocs/op",
            "value": 249,
            "unit": "allocs/op",
            "extra": "598 times\n4 procs"
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
          "id": "f6ebad3ae35cef4804b18b56ad95ec07a26d01fc",
          "message": "Merge pull request #1779 from gofiber/dependabot/go_modules/clickhouse/github.com/ClickHouse/clickhouse-go/v2-2.37.1\n\nchore(deps): bump github.com/ClickHouse/clickhouse-go/v2 from 2.36.0 to 2.37.1 in /clickhouse",
          "timestamp": "2025-06-17T09:41:52+02:00",
          "tree_id": "00bd4bc375b423b2102e5f4b3dd07e8049cb4f68",
          "url": "https://github.com/gofiber/storage/commit/f6ebad3ae35cef4804b18b56ad95ec07a26d01fc"
        },
        "date": 1750146219979,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Clickhouse_Set",
            "value": 1370992,
            "unit": "ns/op\t   15677 B/op\t     198 allocs/op",
            "extra": "951 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - ns/op",
            "value": 1370992,
            "unit": "ns/op",
            "extra": "951 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - B/op",
            "value": 15677,
            "unit": "B/op",
            "extra": "951 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - allocs/op",
            "value": 198,
            "unit": "allocs/op",
            "extra": "951 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get",
            "value": 974683,
            "unit": "ns/op\t   16780 B/op\t     234 allocs/op",
            "extra": "1218 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - ns/op",
            "value": 974683,
            "unit": "ns/op",
            "extra": "1218 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - B/op",
            "value": 16780,
            "unit": "B/op",
            "extra": "1218 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "1218 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete",
            "value": 1973987,
            "unit": "ns/op\t   17750 B/op\t     249 allocs/op",
            "extra": "596 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - ns/op",
            "value": 1973987,
            "unit": "ns/op",
            "extra": "596 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - B/op",
            "value": 17750,
            "unit": "B/op",
            "extra": "596 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - allocs/op",
            "value": 249,
            "unit": "allocs/op",
            "extra": "596 times\n4 procs"
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
          "id": "2cab07ac23dccab31b74a5ab13acda0ecaa8e305",
          "message": "Merge pull request #1796 from gofiber/dependabot/go_modules/clickhouse/github.com/ClickHouse/clickhouse-go/v2-2.37.2\n\nchore(deps): bump github.com/ClickHouse/clickhouse-go/v2 from 2.37.1 to 2.37.2 in /clickhouse",
          "timestamp": "2025-06-24T10:17:14+02:00",
          "tree_id": "e7d188271635590f08202002d6ea7f200ad5c826",
          "url": "https://github.com/gofiber/storage/commit/2cab07ac23dccab31b74a5ab13acda0ecaa8e305"
        },
        "date": 1750753141471,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Clickhouse_Set",
            "value": 1361160,
            "unit": "ns/op\t   15708 B/op\t     187 allocs/op",
            "extra": "980 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - ns/op",
            "value": 1361160,
            "unit": "ns/op",
            "extra": "980 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - B/op",
            "value": 15708,
            "unit": "B/op",
            "extra": "980 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - allocs/op",
            "value": 187,
            "unit": "allocs/op",
            "extra": "980 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get",
            "value": 967838,
            "unit": "ns/op\t   16799 B/op\t     214 allocs/op",
            "extra": "1236 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - ns/op",
            "value": 967838,
            "unit": "ns/op",
            "extra": "1236 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - B/op",
            "value": 16799,
            "unit": "B/op",
            "extra": "1236 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - allocs/op",
            "value": 214,
            "unit": "allocs/op",
            "extra": "1236 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete",
            "value": 1984608,
            "unit": "ns/op\t   17878 B/op\t     238 allocs/op",
            "extra": "591 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - ns/op",
            "value": 1984608,
            "unit": "ns/op",
            "extra": "591 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - B/op",
            "value": 17878,
            "unit": "B/op",
            "extra": "591 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - allocs/op",
            "value": 238,
            "unit": "allocs/op",
            "extra": "591 times\n4 procs"
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
        "date": 1751881915440,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Clickhouse_Set",
            "value": 1344236,
            "unit": "ns/op\t   15540 B/op\t     187 allocs/op",
            "extra": "968 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - ns/op",
            "value": 1344236,
            "unit": "ns/op",
            "extra": "968 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - B/op",
            "value": 15540,
            "unit": "B/op",
            "extra": "968 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - allocs/op",
            "value": 187,
            "unit": "allocs/op",
            "extra": "968 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get",
            "value": 973078,
            "unit": "ns/op\t   16639 B/op\t     214 allocs/op",
            "extra": "1244 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - ns/op",
            "value": 973078,
            "unit": "ns/op",
            "extra": "1244 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - B/op",
            "value": 16639,
            "unit": "B/op",
            "extra": "1244 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - allocs/op",
            "value": 214,
            "unit": "allocs/op",
            "extra": "1244 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete",
            "value": 1943719,
            "unit": "ns/op\t   17528 B/op\t     237 allocs/op",
            "extra": "602 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - ns/op",
            "value": 1943719,
            "unit": "ns/op",
            "extra": "602 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - B/op",
            "value": 17528,
            "unit": "B/op",
            "extra": "602 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - allocs/op",
            "value": 237,
            "unit": "allocs/op",
            "extra": "602 times\n4 procs"
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
        "date": 1752653248881,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Clickhouse_Set",
            "value": 1351503,
            "unit": "ns/op\t   15539 B/op\t     187 allocs/op",
            "extra": "970 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - ns/op",
            "value": 1351503,
            "unit": "ns/op",
            "extra": "970 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - B/op",
            "value": 15539,
            "unit": "B/op",
            "extra": "970 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - allocs/op",
            "value": 187,
            "unit": "allocs/op",
            "extra": "970 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get",
            "value": 964350,
            "unit": "ns/op\t   16430 B/op\t     213 allocs/op",
            "extra": "1215 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - ns/op",
            "value": 964350,
            "unit": "ns/op",
            "extra": "1215 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - B/op",
            "value": 16430,
            "unit": "B/op",
            "extra": "1215 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - allocs/op",
            "value": 213,
            "unit": "allocs/op",
            "extra": "1215 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete",
            "value": 1957849,
            "unit": "ns/op\t   17489 B/op\t     237 allocs/op",
            "extra": "609 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - ns/op",
            "value": 1957849,
            "unit": "ns/op",
            "extra": "609 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - B/op",
            "value": 17489,
            "unit": "B/op",
            "extra": "609 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - allocs/op",
            "value": 237,
            "unit": "allocs/op",
            "extra": "609 times\n4 procs"
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
          "id": "5e14521f8ea3d35ccfd0c9c2f3d4cbe452588d98",
          "message": "Merge pull request #1829 from gofiber/dependabot/go_modules/clickhouse/github.com/ClickHouse/clickhouse-go/v2-2.38.0\n\nchore(deps): bump github.com/ClickHouse/clickhouse-go/v2 from 2.37.2 to 2.38.0 in /clickhouse",
          "timestamp": "2025-07-22T10:36:31+02:00",
          "tree_id": "fca923ad2fc12d24a02ba2e6e09914213cde9cd0",
          "url": "https://github.com/gofiber/storage/commit/5e14521f8ea3d35ccfd0c9c2f3d4cbe452588d98"
        },
        "date": 1753173511930,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Clickhouse_Set",
            "value": 1345642,
            "unit": "ns/op\t   15418 B/op\t     188 allocs/op",
            "extra": "987 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - ns/op",
            "value": 1345642,
            "unit": "ns/op",
            "extra": "987 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - B/op",
            "value": 15418,
            "unit": "B/op",
            "extra": "987 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - allocs/op",
            "value": 188,
            "unit": "allocs/op",
            "extra": "987 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get",
            "value": 953452,
            "unit": "ns/op\t   16874 B/op\t     218 allocs/op",
            "extra": "1264 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - ns/op",
            "value": 953452,
            "unit": "ns/op",
            "extra": "1264 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - B/op",
            "value": 16874,
            "unit": "B/op",
            "extra": "1264 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - allocs/op",
            "value": 218,
            "unit": "allocs/op",
            "extra": "1264 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete",
            "value": 1945749,
            "unit": "ns/op\t   17549 B/op\t     239 allocs/op",
            "extra": "609 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - ns/op",
            "value": 1945749,
            "unit": "ns/op",
            "extra": "609 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - B/op",
            "value": 17549,
            "unit": "B/op",
            "extra": "609 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - allocs/op",
            "value": 239,
            "unit": "allocs/op",
            "extra": "609 times\n4 procs"
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
          "id": "3fd9eb81b77fcc1ca4d17c5dccd6f34edda74688",
          "message": "Merge pull request #1833 from gofiber/dependabot/go_modules/clickhouse/github.com/ClickHouse/clickhouse-go/v2-2.39.0\n\nchore(deps): bump github.com/ClickHouse/clickhouse-go/v2 from 2.38.0 to 2.39.0 in /clickhouse",
          "timestamp": "2025-07-23T09:28:17+02:00",
          "tree_id": "2bfa0aab86cdd7674654211d0e85bd86bc5e997d",
          "url": "https://github.com/gofiber/storage/commit/3fd9eb81b77fcc1ca4d17c5dccd6f34edda74688"
        },
        "date": 1753255782442,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Clickhouse_Set",
            "value": 1364105,
            "unit": "ns/op\t   15410 B/op\t     189 allocs/op",
            "extra": "994 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - ns/op",
            "value": 1364105,
            "unit": "ns/op",
            "extra": "994 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - B/op",
            "value": 15410,
            "unit": "B/op",
            "extra": "994 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - allocs/op",
            "value": 189,
            "unit": "allocs/op",
            "extra": "994 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get",
            "value": 959216,
            "unit": "ns/op\t   16667 B/op\t     218 allocs/op",
            "extra": "1240 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - ns/op",
            "value": 959216,
            "unit": "ns/op",
            "extra": "1240 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - B/op",
            "value": 16667,
            "unit": "B/op",
            "extra": "1240 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - allocs/op",
            "value": 218,
            "unit": "allocs/op",
            "extra": "1240 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete",
            "value": 1963695,
            "unit": "ns/op\t   17675 B/op\t     239 allocs/op",
            "extra": "606 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - ns/op",
            "value": 1963695,
            "unit": "ns/op",
            "extra": "606 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - B/op",
            "value": 17675,
            "unit": "B/op",
            "extra": "606 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - allocs/op",
            "value": 239,
            "unit": "allocs/op",
            "extra": "606 times\n4 procs"
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
          "id": "0275b748f92abc4d2d3022ac73e49afffb374924",
          "message": "Merge pull request #1845 from gofiber/dependabot/go_modules/clickhouse/github.com/ClickHouse/clickhouse-go/v2-2.40.1\n\nchore(deps): bump github.com/ClickHouse/clickhouse-go/v2 from 2.39.0 to 2.40.1 in /clickhouse",
          "timestamp": "2025-07-31T09:40:08+02:00",
          "tree_id": "17e686a9f53c234879ba7b1aa62f511066a00ae6",
          "url": "https://github.com/gofiber/storage/commit/0275b748f92abc4d2d3022ac73e49afffb374924"
        },
        "date": 1753947701721,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Clickhouse_Set",
            "value": 1369722,
            "unit": "ns/op\t   15595 B/op\t     189 allocs/op",
            "extra": "985 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - ns/op",
            "value": 1369722,
            "unit": "ns/op",
            "extra": "985 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - B/op",
            "value": 15595,
            "unit": "B/op",
            "extra": "985 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - allocs/op",
            "value": 189,
            "unit": "allocs/op",
            "extra": "985 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get",
            "value": 949026,
            "unit": "ns/op\t   16957 B/op\t     217 allocs/op",
            "extra": "1254 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - ns/op",
            "value": 949026,
            "unit": "ns/op",
            "extra": "1254 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - B/op",
            "value": 16957,
            "unit": "B/op",
            "extra": "1254 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - allocs/op",
            "value": 217,
            "unit": "allocs/op",
            "extra": "1254 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete",
            "value": 1949638,
            "unit": "ns/op\t   17600 B/op\t     239 allocs/op",
            "extra": "607 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - ns/op",
            "value": 1949638,
            "unit": "ns/op",
            "extra": "607 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - B/op",
            "value": 17600,
            "unit": "B/op",
            "extra": "607 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - allocs/op",
            "value": 239,
            "unit": "allocs/op",
            "extra": "607 times\n4 procs"
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
          "id": "f7ca2c42dad88284029068be3ec25c6825ab472d",
          "message": "Merge pull request #1903 from gofiber/dependabot/go_modules/clickhouse/github.com/ClickHouse/clickhouse-go/v2-2.40.3\n\nchore(deps): bump github.com/ClickHouse/clickhouse-go/v2 from 2.40.1 to 2.40.3 in /clickhouse",
          "timestamp": "2025-09-15T09:51:49+02:00",
          "tree_id": "4725f2fe83870b2d7d8a7282840989044670244c",
          "url": "https://github.com/gofiber/storage/commit/f7ca2c42dad88284029068be3ec25c6825ab472d"
        },
        "date": 1757922821489,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Clickhouse_Set",
            "value": 1347688,
            "unit": "ns/op\t   15481 B/op\t     188 allocs/op",
            "extra": "980 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - ns/op",
            "value": 1347688,
            "unit": "ns/op",
            "extra": "980 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - B/op",
            "value": 15481,
            "unit": "B/op",
            "extra": "980 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - allocs/op",
            "value": 188,
            "unit": "allocs/op",
            "extra": "980 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get",
            "value": 956941,
            "unit": "ns/op\t   17110 B/op\t     218 allocs/op",
            "extra": "1250 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - ns/op",
            "value": 956941,
            "unit": "ns/op",
            "extra": "1250 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - B/op",
            "value": 17110,
            "unit": "B/op",
            "extra": "1250 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - allocs/op",
            "value": 218,
            "unit": "allocs/op",
            "extra": "1250 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete",
            "value": 1959603,
            "unit": "ns/op\t   17713 B/op\t     239 allocs/op",
            "extra": "602 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - ns/op",
            "value": 1959603,
            "unit": "ns/op",
            "extra": "602 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - B/op",
            "value": 17713,
            "unit": "B/op",
            "extra": "602 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - allocs/op",
            "value": 239,
            "unit": "allocs/op",
            "extra": "602 times\n4 procs"
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
        "date": 1763662199850,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Clickhouse_Set",
            "value": 1278708,
            "unit": "ns/op\t   15641 B/op\t     187 allocs/op",
            "extra": "1056 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - ns/op",
            "value": 1278708,
            "unit": "ns/op",
            "extra": "1056 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - B/op",
            "value": 15641,
            "unit": "B/op",
            "extra": "1056 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - allocs/op",
            "value": 187,
            "unit": "allocs/op",
            "extra": "1056 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get",
            "value": 837311,
            "unit": "ns/op\t   16801 B/op\t     217 allocs/op",
            "extra": "1419 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - ns/op",
            "value": 837311,
            "unit": "ns/op",
            "extra": "1419 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - B/op",
            "value": 16801,
            "unit": "B/op",
            "extra": "1419 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - allocs/op",
            "value": 217,
            "unit": "allocs/op",
            "extra": "1419 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete",
            "value": 1761741,
            "unit": "ns/op\t   17574 B/op\t     238 allocs/op",
            "extra": "674 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - ns/op",
            "value": 1761741,
            "unit": "ns/op",
            "extra": "674 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - B/op",
            "value": 17574,
            "unit": "B/op",
            "extra": "674 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - allocs/op",
            "value": 238,
            "unit": "allocs/op",
            "extra": "674 times\n4 procs"
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
        "date": 1764259992225,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Clickhouse_Set",
            "value": 1382819,
            "unit": "ns/op\t    6317 B/op\t     108 allocs/op",
            "extra": "964 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - ns/op",
            "value": 1382819,
            "unit": "ns/op",
            "extra": "964 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - B/op",
            "value": 6317,
            "unit": "B/op",
            "extra": "964 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - allocs/op",
            "value": 108,
            "unit": "allocs/op",
            "extra": "964 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get",
            "value": 972394,
            "unit": "ns/op\t    7905 B/op\t     146 allocs/op",
            "extra": "1243 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - ns/op",
            "value": 972394,
            "unit": "ns/op",
            "extra": "1243 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - B/op",
            "value": 7905,
            "unit": "B/op",
            "extra": "1243 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - allocs/op",
            "value": 146,
            "unit": "allocs/op",
            "extra": "1243 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete",
            "value": 1968038,
            "unit": "ns/op\t    8220 B/op\t     155 allocs/op",
            "extra": "609 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - ns/op",
            "value": 1968038,
            "unit": "ns/op",
            "extra": "609 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - B/op",
            "value": 8220,
            "unit": "B/op",
            "extra": "609 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - allocs/op",
            "value": 155,
            "unit": "allocs/op",
            "extra": "609 times\n4 procs"
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
        "date": 1764261381827,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Clickhouse_Set",
            "value": 1386176,
            "unit": "ns/op\t    6316 B/op\t     108 allocs/op",
            "extra": "951 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - ns/op",
            "value": 1386176,
            "unit": "ns/op",
            "extra": "951 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - B/op",
            "value": 6316,
            "unit": "B/op",
            "extra": "951 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - allocs/op",
            "value": 108,
            "unit": "allocs/op",
            "extra": "951 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get",
            "value": 1285180,
            "unit": "ns/op\t    8021 B/op\t     146 allocs/op",
            "extra": "1093 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - ns/op",
            "value": 1285180,
            "unit": "ns/op",
            "extra": "1093 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - B/op",
            "value": 8021,
            "unit": "B/op",
            "extra": "1093 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - allocs/op",
            "value": 146,
            "unit": "allocs/op",
            "extra": "1093 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete",
            "value": 2083135,
            "unit": "ns/op\t    8211 B/op\t     155 allocs/op",
            "extra": "585 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - ns/op",
            "value": 2083135,
            "unit": "ns/op",
            "extra": "585 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - B/op",
            "value": 8211,
            "unit": "B/op",
            "extra": "585 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - allocs/op",
            "value": 155,
            "unit": "allocs/op",
            "extra": "585 times\n4 procs"
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
        "date": 1765267654792,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Clickhouse_Set",
            "value": 1378099,
            "unit": "ns/op\t    6336 B/op\t     108 allocs/op",
            "extra": "960 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - ns/op",
            "value": 1378099,
            "unit": "ns/op",
            "extra": "960 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - B/op",
            "value": 6336,
            "unit": "B/op",
            "extra": "960 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - allocs/op",
            "value": 108,
            "unit": "allocs/op",
            "extra": "960 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get",
            "value": 975911,
            "unit": "ns/op\t    8084 B/op\t     146 allocs/op",
            "extra": "1222 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - ns/op",
            "value": 975911,
            "unit": "ns/op",
            "extra": "1222 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - B/op",
            "value": 8084,
            "unit": "B/op",
            "extra": "1222 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - allocs/op",
            "value": 146,
            "unit": "allocs/op",
            "extra": "1222 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete",
            "value": 1992384,
            "unit": "ns/op\t    8272 B/op\t     155 allocs/op",
            "extra": "558 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - ns/op",
            "value": 1992384,
            "unit": "ns/op",
            "extra": "558 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - B/op",
            "value": 8272,
            "unit": "B/op",
            "extra": "558 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - allocs/op",
            "value": 155,
            "unit": "allocs/op",
            "extra": "558 times\n4 procs"
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
        "date": 1765439833355,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Clickhouse_Set",
            "value": 1378502,
            "unit": "ns/op\t    6178 B/op\t     108 allocs/op",
            "extra": "981 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - ns/op",
            "value": 1378502,
            "unit": "ns/op",
            "extra": "981 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - B/op",
            "value": 6178,
            "unit": "B/op",
            "extra": "981 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - allocs/op",
            "value": 108,
            "unit": "allocs/op",
            "extra": "981 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get",
            "value": 965878,
            "unit": "ns/op\t    7884 B/op\t     146 allocs/op",
            "extra": "1236 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - ns/op",
            "value": 965878,
            "unit": "ns/op",
            "extra": "1236 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - B/op",
            "value": 7884,
            "unit": "B/op",
            "extra": "1236 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - allocs/op",
            "value": 146,
            "unit": "allocs/op",
            "extra": "1236 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete",
            "value": 1975237,
            "unit": "ns/op\t    8113 B/op\t     155 allocs/op",
            "extra": "603 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - ns/op",
            "value": 1975237,
            "unit": "ns/op",
            "extra": "603 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - B/op",
            "value": 8113,
            "unit": "B/op",
            "extra": "603 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - allocs/op",
            "value": 155,
            "unit": "allocs/op",
            "extra": "603 times\n4 procs"
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
        "date": 1766043857675,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Clickhouse_Set",
            "value": 1365330,
            "unit": "ns/op\t    6243 B/op\t     108 allocs/op",
            "extra": "927 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - ns/op",
            "value": 1365330,
            "unit": "ns/op",
            "extra": "927 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - B/op",
            "value": 6243,
            "unit": "B/op",
            "extra": "927 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - allocs/op",
            "value": 108,
            "unit": "allocs/op",
            "extra": "927 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get",
            "value": 982754,
            "unit": "ns/op\t    7974 B/op\t     146 allocs/op",
            "extra": "1201 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - ns/op",
            "value": 982754,
            "unit": "ns/op",
            "extra": "1201 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - B/op",
            "value": 7974,
            "unit": "B/op",
            "extra": "1201 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - allocs/op",
            "value": 146,
            "unit": "allocs/op",
            "extra": "1201 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete",
            "value": 1977777,
            "unit": "ns/op\t    8202 B/op\t     155 allocs/op",
            "extra": "607 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - ns/op",
            "value": 1977777,
            "unit": "ns/op",
            "extra": "607 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - B/op",
            "value": 8202,
            "unit": "B/op",
            "extra": "607 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - allocs/op",
            "value": 155,
            "unit": "allocs/op",
            "extra": "607 times\n4 procs"
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
        "date": 1768377230304,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Clickhouse_Set",
            "value": 1334788,
            "unit": "ns/op\t    6358 B/op\t     108 allocs/op",
            "extra": "999 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - ns/op",
            "value": 1334788,
            "unit": "ns/op",
            "extra": "999 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - B/op",
            "value": 6358,
            "unit": "B/op",
            "extra": "999 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - allocs/op",
            "value": 108,
            "unit": "allocs/op",
            "extra": "999 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get",
            "value": 964902,
            "unit": "ns/op\t    7843 B/op\t     146 allocs/op",
            "extra": "1234 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - ns/op",
            "value": 964902,
            "unit": "ns/op",
            "extra": "1234 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - B/op",
            "value": 7843,
            "unit": "B/op",
            "extra": "1234 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - allocs/op",
            "value": 146,
            "unit": "allocs/op",
            "extra": "1234 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete",
            "value": 1974734,
            "unit": "ns/op\t    8341 B/op\t     155 allocs/op",
            "extra": "612 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - ns/op",
            "value": 1974734,
            "unit": "ns/op",
            "extra": "612 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - B/op",
            "value": 8341,
            "unit": "B/op",
            "extra": "612 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - allocs/op",
            "value": 155,
            "unit": "allocs/op",
            "extra": "612 times\n4 procs"
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
        "date": 1768377460147,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Clickhouse_Set",
            "value": 1337421,
            "unit": "ns/op\t    6179 B/op\t     108 allocs/op",
            "extra": "987 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - ns/op",
            "value": 1337421,
            "unit": "ns/op",
            "extra": "987 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - B/op",
            "value": 6179,
            "unit": "B/op",
            "extra": "987 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - allocs/op",
            "value": 108,
            "unit": "allocs/op",
            "extra": "987 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get",
            "value": 945749,
            "unit": "ns/op\t    7989 B/op\t     146 allocs/op",
            "extra": "1233 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - ns/op",
            "value": 945749,
            "unit": "ns/op",
            "extra": "1233 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - B/op",
            "value": 7989,
            "unit": "B/op",
            "extra": "1233 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - allocs/op",
            "value": 146,
            "unit": "allocs/op",
            "extra": "1233 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete",
            "value": 1939937,
            "unit": "ns/op\t    8301 B/op\t     155 allocs/op",
            "extra": "610 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - ns/op",
            "value": 1939937,
            "unit": "ns/op",
            "extra": "610 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - B/op",
            "value": 8301,
            "unit": "B/op",
            "extra": "610 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - allocs/op",
            "value": 155,
            "unit": "allocs/op",
            "extra": "610 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "René",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "rene@gofiber.io",
            "name": "René",
            "username": "ReneWerner87"
          },
          "distinct": true,
          "id": "a01817d47a2bb79f1136838c2a4faa2316e46c14",
          "message": "docs: update README and CI configurations to reflect supported Go versions",
          "timestamp": "2026-01-14T08:57:39+01:00",
          "tree_id": "70101c3079b0284d0c2d4347012163cc30083b69",
          "url": "https://github.com/gofiber/storage/commit/a01817d47a2bb79f1136838c2a4faa2316e46c14"
        },
        "date": 1768377578897,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Clickhouse_Set",
            "value": 1346244,
            "unit": "ns/op\t    6165 B/op\t     108 allocs/op",
            "extra": "974 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - ns/op",
            "value": 1346244,
            "unit": "ns/op",
            "extra": "974 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - B/op",
            "value": 6165,
            "unit": "B/op",
            "extra": "974 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - allocs/op",
            "value": 108,
            "unit": "allocs/op",
            "extra": "974 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get",
            "value": 964678,
            "unit": "ns/op\t    7861 B/op\t     146 allocs/op",
            "extra": "1238 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - ns/op",
            "value": 964678,
            "unit": "ns/op",
            "extra": "1238 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - B/op",
            "value": 7861,
            "unit": "B/op",
            "extra": "1238 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - allocs/op",
            "value": 146,
            "unit": "allocs/op",
            "extra": "1238 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete",
            "value": 1964061,
            "unit": "ns/op\t    8338 B/op\t     155 allocs/op",
            "extra": "601 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - ns/op",
            "value": 1964061,
            "unit": "ns/op",
            "extra": "601 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - B/op",
            "value": 8338,
            "unit": "B/op",
            "extra": "601 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - allocs/op",
            "value": 155,
            "unit": "allocs/op",
            "extra": "601 times\n4 procs"
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
          "id": "c5945109beae2ef5c7d3f813eb068d8e9eef71fc",
          "message": "Merge pull request #2360 from gofiber/dependabot/go_modules/clickhouse/github.com/pierrec/lz4/v4-4.1.23",
          "timestamp": "2026-01-14T09:05:35+01:00",
          "tree_id": "3d671f5c02bd955a185bbf63960478e8d132e84c",
          "url": "https://github.com/gofiber/storage/commit/c5945109beae2ef5c7d3f813eb068d8e9eef71fc"
        },
        "date": 1768378071115,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Clickhouse_Set",
            "value": 1345735,
            "unit": "ns/op\t    6099 B/op\t     108 allocs/op",
            "extra": "956 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - ns/op",
            "value": 1345735,
            "unit": "ns/op",
            "extra": "956 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - B/op",
            "value": 6099,
            "unit": "B/op",
            "extra": "956 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - allocs/op",
            "value": 108,
            "unit": "allocs/op",
            "extra": "956 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get",
            "value": 954714,
            "unit": "ns/op\t    7815 B/op\t     146 allocs/op",
            "extra": "1240 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - ns/op",
            "value": 954714,
            "unit": "ns/op",
            "extra": "1240 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - B/op",
            "value": 7815,
            "unit": "B/op",
            "extra": "1240 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - allocs/op",
            "value": 146,
            "unit": "allocs/op",
            "extra": "1240 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete",
            "value": 1957464,
            "unit": "ns/op\t    8140 B/op\t     155 allocs/op",
            "extra": "614 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - ns/op",
            "value": 1957464,
            "unit": "ns/op",
            "extra": "614 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - B/op",
            "value": 8140,
            "unit": "B/op",
            "extra": "614 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - allocs/op",
            "value": 155,
            "unit": "allocs/op",
            "extra": "614 times\n4 procs"
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
          "id": "0af489f4376f35520d8242d1cb5488500df64864",
          "message": "Merge pull request #2356 from gofiber/dependabot/go_modules/clickhouse/github.com/ClickHouse/clickhouse-go/v2-2.42.0\n\nchore(deps): bump github.com/ClickHouse/clickhouse-go/v2 from 2.41.0 to 2.42.0 in /clickhouse",
          "timestamp": "2026-01-14T09:17:24+01:00",
          "tree_id": "8eaf653ee3faddbd9af5da130807419e2da0778c",
          "url": "https://github.com/gofiber/storage/commit/0af489f4376f35520d8242d1cb5488500df64864"
        },
        "date": 1768378752700,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Clickhouse_Set",
            "value": 1375452,
            "unit": "ns/op\t    6486 B/op\t     113 allocs/op",
            "extra": "982 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - ns/op",
            "value": 1375452,
            "unit": "ns/op",
            "extra": "982 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - B/op",
            "value": 6486,
            "unit": "B/op",
            "extra": "982 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - allocs/op",
            "value": 113,
            "unit": "allocs/op",
            "extra": "982 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get",
            "value": 988894,
            "unit": "ns/op\t    8357 B/op\t     151 allocs/op",
            "extra": "1209 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - ns/op",
            "value": 988894,
            "unit": "ns/op",
            "extra": "1209 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - B/op",
            "value": 8357,
            "unit": "B/op",
            "extra": "1209 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - allocs/op",
            "value": 151,
            "unit": "allocs/op",
            "extra": "1209 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete",
            "value": 1971109,
            "unit": "ns/op\t    8716 B/op\t     165 allocs/op",
            "extra": "604 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - ns/op",
            "value": 1971109,
            "unit": "ns/op",
            "extra": "604 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - B/op",
            "value": 8716,
            "unit": "B/op",
            "extra": "604 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - allocs/op",
            "value": 165,
            "unit": "allocs/op",
            "extra": "604 times\n4 procs"
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
        "date": 1768379389306,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Clickhouse_Set",
            "value": 1388074,
            "unit": "ns/op\t    6447 B/op\t     113 allocs/op",
            "extra": "968 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - ns/op",
            "value": 1388074,
            "unit": "ns/op",
            "extra": "968 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - B/op",
            "value": 6447,
            "unit": "B/op",
            "extra": "968 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - allocs/op",
            "value": 113,
            "unit": "allocs/op",
            "extra": "968 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get",
            "value": 987794,
            "unit": "ns/op\t    8101 B/op\t     151 allocs/op",
            "extra": "1206 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - ns/op",
            "value": 987794,
            "unit": "ns/op",
            "extra": "1206 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - B/op",
            "value": 8101,
            "unit": "B/op",
            "extra": "1206 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - allocs/op",
            "value": 151,
            "unit": "allocs/op",
            "extra": "1206 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete",
            "value": 2012363,
            "unit": "ns/op\t    8725 B/op\t     165 allocs/op",
            "extra": "596 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - ns/op",
            "value": 2012363,
            "unit": "ns/op",
            "extra": "596 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - B/op",
            "value": 8725,
            "unit": "B/op",
            "extra": "596 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - allocs/op",
            "value": 165,
            "unit": "allocs/op",
            "extra": "596 times\n4 procs"
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
        "date": 1768380213791,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Clickhouse_Set",
            "value": 1292240,
            "unit": "ns/op\t    6323 B/op\t     113 allocs/op",
            "extra": "1026 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - ns/op",
            "value": 1292240,
            "unit": "ns/op",
            "extra": "1026 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - B/op",
            "value": 6323,
            "unit": "B/op",
            "extra": "1026 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - allocs/op",
            "value": 113,
            "unit": "allocs/op",
            "extra": "1026 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get",
            "value": 847088,
            "unit": "ns/op\t    8166 B/op\t     151 allocs/op",
            "extra": "1405 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - ns/op",
            "value": 847088,
            "unit": "ns/op",
            "extra": "1405 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - B/op",
            "value": 8166,
            "unit": "B/op",
            "extra": "1405 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - allocs/op",
            "value": 151,
            "unit": "allocs/op",
            "extra": "1405 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete",
            "value": 1770792,
            "unit": "ns/op\t    8701 B/op\t     165 allocs/op",
            "extra": "673 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - ns/op",
            "value": 1770792,
            "unit": "ns/op",
            "extra": "673 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - B/op",
            "value": 8701,
            "unit": "B/op",
            "extra": "673 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - allocs/op",
            "value": 165,
            "unit": "allocs/op",
            "extra": "673 times\n4 procs"
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
          "id": "e746ffa31f51d05e9ead14f585e34bfdbda87a5a",
          "message": "Merge pull request #2408 from gofiber/dependabot/go_modules/clickhouse/github.com/sirupsen/logrus-1.9.4\n\nchore(deps): bump github.com/sirupsen/logrus from 1.9.3 to 1.9.4 in /clickhouse",
          "timestamp": "2026-01-16T08:17:51+01:00",
          "tree_id": "d794a52a87517e12612f7d8c0ef0de6d29c2921a",
          "url": "https://github.com/gofiber/storage/commit/e746ffa31f51d05e9ead14f585e34bfdbda87a5a"
        },
        "date": 1768548166895,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Clickhouse_Set",
            "value": 1360492,
            "unit": "ns/op\t    6413 B/op\t     113 allocs/op",
            "extra": "993 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - ns/op",
            "value": 1360492,
            "unit": "ns/op",
            "extra": "993 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - B/op",
            "value": 6413,
            "unit": "B/op",
            "extra": "993 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - allocs/op",
            "value": 113,
            "unit": "allocs/op",
            "extra": "993 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get",
            "value": 977124,
            "unit": "ns/op\t    8240 B/op\t     151 allocs/op",
            "extra": "1200 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - ns/op",
            "value": 977124,
            "unit": "ns/op",
            "extra": "1200 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - B/op",
            "value": 8240,
            "unit": "B/op",
            "extra": "1200 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - allocs/op",
            "value": 151,
            "unit": "allocs/op",
            "extra": "1200 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete",
            "value": 1962866,
            "unit": "ns/op\t    8773 B/op\t     165 allocs/op",
            "extra": "608 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - ns/op",
            "value": 1962866,
            "unit": "ns/op",
            "extra": "608 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - B/op",
            "value": 8773,
            "unit": "B/op",
            "extra": "608 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - allocs/op",
            "value": 165,
            "unit": "allocs/op",
            "extra": "608 times\n4 procs"
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
          "id": "33207273140b5a683ed1619b92d94fa988cfa99c",
          "message": "Merge pull request #2432 from gofiber/dependabot/go_modules/clickhouse/github.com/pierrec/lz4/v4-4.1.25\n\nchore(deps): bump github.com/pierrec/lz4/v4 from 4.1.23 to 4.1.25 in /clickhouse",
          "timestamp": "2026-01-19T08:47:50+01:00",
          "tree_id": "7a8f8022187c186cd95a24f5ad474e6b4dc35951",
          "url": "https://github.com/gofiber/storage/commit/33207273140b5a683ed1619b92d94fa988cfa99c"
        },
        "date": 1768808979385,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Clickhouse_Set",
            "value": 1338191,
            "unit": "ns/op\t    6349 B/op\t     113 allocs/op",
            "extra": "978 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - ns/op",
            "value": 1338191,
            "unit": "ns/op",
            "extra": "978 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - B/op",
            "value": 6349,
            "unit": "B/op",
            "extra": "978 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - allocs/op",
            "value": 113,
            "unit": "allocs/op",
            "extra": "978 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get",
            "value": 962908,
            "unit": "ns/op\t    8316 B/op\t     151 allocs/op",
            "extra": "1251 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - ns/op",
            "value": 962908,
            "unit": "ns/op",
            "extra": "1251 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - B/op",
            "value": 8316,
            "unit": "B/op",
            "extra": "1251 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - allocs/op",
            "value": 151,
            "unit": "allocs/op",
            "extra": "1251 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete",
            "value": 1947470,
            "unit": "ns/op\t    8665 B/op\t     165 allocs/op",
            "extra": "613 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - ns/op",
            "value": 1947470,
            "unit": "ns/op",
            "extra": "613 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - B/op",
            "value": 8665,
            "unit": "B/op",
            "extra": "613 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - allocs/op",
            "value": 165,
            "unit": "allocs/op",
            "extra": "613 times\n4 procs"
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
        "date": 1768893539275,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Clickhouse_Set",
            "value": 1365939,
            "unit": "ns/op\t    6503 B/op\t     113 allocs/op",
            "extra": "980 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - ns/op",
            "value": 1365939,
            "unit": "ns/op",
            "extra": "980 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - B/op",
            "value": 6503,
            "unit": "B/op",
            "extra": "980 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - allocs/op",
            "value": 113,
            "unit": "allocs/op",
            "extra": "980 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get",
            "value": 964005,
            "unit": "ns/op\t    8077 B/op\t     151 allocs/op",
            "extra": "1216 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - ns/op",
            "value": 964005,
            "unit": "ns/op",
            "extra": "1216 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - B/op",
            "value": 8077,
            "unit": "B/op",
            "extra": "1216 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - allocs/op",
            "value": 151,
            "unit": "allocs/op",
            "extra": "1216 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete",
            "value": 1958658,
            "unit": "ns/op\t    8727 B/op\t     165 allocs/op",
            "extra": "600 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - ns/op",
            "value": 1958658,
            "unit": "ns/op",
            "extra": "600 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - B/op",
            "value": 8727,
            "unit": "B/op",
            "extra": "600 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - allocs/op",
            "value": 165,
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
          "id": "e9f9049f27e7ceec91dfd041fbe05df48cd106dd",
          "message": "Merge pull request #2435 from gofiber/dependabot/go_modules/aerospike/grpc-gateway-modules-723df7c2c9\n\nchore(deps): bump the grpc-gateway-modules group across 17 directories with 1 update",
          "timestamp": "2026-01-22T08:15:16+01:00",
          "tree_id": "5617c43a1da81518cb8795a6f1fdf6dc4ddcc92b",
          "url": "https://github.com/gofiber/storage/commit/e9f9049f27e7ceec91dfd041fbe05df48cd106dd"
        },
        "date": 1769066323576,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Clickhouse_Set",
            "value": 1368779,
            "unit": "ns/op\t    6427 B/op\t     113 allocs/op",
            "extra": "951 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - ns/op",
            "value": 1368779,
            "unit": "ns/op",
            "extra": "951 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - B/op",
            "value": 6427,
            "unit": "B/op",
            "extra": "951 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - allocs/op",
            "value": 113,
            "unit": "allocs/op",
            "extra": "951 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get",
            "value": 992826,
            "unit": "ns/op\t    8173 B/op\t     151 allocs/op",
            "extra": "1208 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - ns/op",
            "value": 992826,
            "unit": "ns/op",
            "extra": "1208 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - B/op",
            "value": 8173,
            "unit": "B/op",
            "extra": "1208 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - allocs/op",
            "value": 151,
            "unit": "allocs/op",
            "extra": "1208 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete",
            "value": 1974764,
            "unit": "ns/op\t    8631 B/op\t     165 allocs/op",
            "extra": "598 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - ns/op",
            "value": 1974764,
            "unit": "ns/op",
            "extra": "598 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - B/op",
            "value": 8631,
            "unit": "B/op",
            "extra": "598 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - allocs/op",
            "value": 165,
            "unit": "allocs/op",
            "extra": "598 times\n4 procs"
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
          "id": "726a2591e5f23b5fc4ad3659588ab4c483d4f285",
          "message": "Merge pull request #2442 from gofiber/dependabot/go_modules/clickhouse/github.com/ClickHouse/ch-go-0.70.0\n\nchore(deps): bump github.com/ClickHouse/ch-go from 0.69.0 to 0.70.0 in /clickhouse",
          "timestamp": "2026-01-23T08:15:35+01:00",
          "tree_id": "22080faaee850febcf67eefb1f08f58e199bd2ce",
          "url": "https://github.com/gofiber/storage/commit/726a2591e5f23b5fc4ad3659588ab4c483d4f285"
        },
        "date": 1769152651031,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Clickhouse_Set",
            "value": 1347573,
            "unit": "ns/op\t    6396 B/op\t     113 allocs/op",
            "extra": "999 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - ns/op",
            "value": 1347573,
            "unit": "ns/op",
            "extra": "999 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - B/op",
            "value": 6396,
            "unit": "B/op",
            "extra": "999 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - allocs/op",
            "value": 113,
            "unit": "allocs/op",
            "extra": "999 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get",
            "value": 961657,
            "unit": "ns/op\t    8051 B/op\t     151 allocs/op",
            "extra": "1221 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - ns/op",
            "value": 961657,
            "unit": "ns/op",
            "extra": "1221 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - B/op",
            "value": 8051,
            "unit": "B/op",
            "extra": "1221 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - allocs/op",
            "value": 151,
            "unit": "allocs/op",
            "extra": "1221 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete",
            "value": 1962696,
            "unit": "ns/op\t    8657 B/op\t     165 allocs/op",
            "extra": "612 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - ns/op",
            "value": 1962696,
            "unit": "ns/op",
            "extra": "612 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - B/op",
            "value": 8657,
            "unit": "B/op",
            "extra": "612 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - allocs/op",
            "value": 165,
            "unit": "allocs/op",
            "extra": "612 times\n4 procs"
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
        "date": 1769671221484,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Clickhouse_Set",
            "value": 1366333,
            "unit": "ns/op\t    6357 B/op\t     113 allocs/op",
            "extra": "969 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - ns/op",
            "value": 1366333,
            "unit": "ns/op",
            "extra": "969 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - B/op",
            "value": 6357,
            "unit": "B/op",
            "extra": "969 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - allocs/op",
            "value": 113,
            "unit": "allocs/op",
            "extra": "969 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get",
            "value": 1009988,
            "unit": "ns/op\t    8217 B/op\t     151 allocs/op",
            "extra": "1207 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - ns/op",
            "value": 1009988,
            "unit": "ns/op",
            "extra": "1207 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - B/op",
            "value": 8217,
            "unit": "B/op",
            "extra": "1207 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - allocs/op",
            "value": 151,
            "unit": "allocs/op",
            "extra": "1207 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete",
            "value": 1985379,
            "unit": "ns/op\t    8702 B/op\t     165 allocs/op",
            "extra": "600 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - ns/op",
            "value": 1985379,
            "unit": "ns/op",
            "extra": "600 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - B/op",
            "value": 8702,
            "unit": "B/op",
            "extra": "600 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - allocs/op",
            "value": 165,
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
          "id": "5f463fcfcc4b1969c10edebb5b9cba6b753d19dd",
          "message": "Merge pull request #2455 from gofiber/dependabot/go_modules/clickhouse/github.com/ClickHouse/clickhouse-go/v2-2.43.0\n\nchore(deps): bump github.com/ClickHouse/clickhouse-go/v2 from 2.42.0 to 2.43.0 in /clickhouse",
          "timestamp": "2026-01-30T08:13:11+01:00",
          "tree_id": "cd555a94ff85bd573df5cac5716697bbd99d5eaa",
          "url": "https://github.com/gofiber/storage/commit/5f463fcfcc4b1969c10edebb5b9cba6b753d19dd"
        },
        "date": 1769757302866,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Clickhouse_Set",
            "value": 1380613,
            "unit": "ns/op\t    6881 B/op\t     117 allocs/op",
            "extra": "957 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - ns/op",
            "value": 1380613,
            "unit": "ns/op",
            "extra": "957 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - B/op",
            "value": 6881,
            "unit": "B/op",
            "extra": "957 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - allocs/op",
            "value": 117,
            "unit": "allocs/op",
            "extra": "957 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get",
            "value": 993223,
            "unit": "ns/op\t    9357 B/op\t     164 allocs/op",
            "extra": "1245 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - ns/op",
            "value": 993223,
            "unit": "ns/op",
            "extra": "1245 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - B/op",
            "value": 9357,
            "unit": "B/op",
            "extra": "1245 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "1245 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete",
            "value": 1982941,
            "unit": "ns/op\t    9321 B/op\t     170 allocs/op",
            "extra": "591 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - ns/op",
            "value": 1982941,
            "unit": "ns/op",
            "extra": "591 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - B/op",
            "value": 9321,
            "unit": "B/op",
            "extra": "591 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - allocs/op",
            "value": 170,
            "unit": "allocs/op",
            "extra": "591 times\n4 procs"
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
        "date": 1769757461795,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Clickhouse_Set",
            "value": 1293109,
            "unit": "ns/op\t    6911 B/op\t     117 allocs/op",
            "extra": "1099 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - ns/op",
            "value": 1293109,
            "unit": "ns/op",
            "extra": "1099 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - B/op",
            "value": 6911,
            "unit": "B/op",
            "extra": "1099 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - allocs/op",
            "value": 117,
            "unit": "allocs/op",
            "extra": "1099 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get",
            "value": 879796,
            "unit": "ns/op\t    9061 B/op\t     164 allocs/op",
            "extra": "1347 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - ns/op",
            "value": 879796,
            "unit": "ns/op",
            "extra": "1347 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - B/op",
            "value": 9061,
            "unit": "B/op",
            "extra": "1347 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "1347 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete",
            "value": 1781787,
            "unit": "ns/op\t    9358 B/op\t     170 allocs/op",
            "extra": "662 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - ns/op",
            "value": 1781787,
            "unit": "ns/op",
            "extra": "662 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - B/op",
            "value": 9358,
            "unit": "B/op",
            "extra": "662 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - allocs/op",
            "value": 170,
            "unit": "allocs/op",
            "extra": "662 times\n4 procs"
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
        "date": 1770017923695,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Clickhouse_Set",
            "value": 1244081,
            "unit": "ns/op\t    6890 B/op\t     117 allocs/op",
            "extra": "1129 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - ns/op",
            "value": 1244081,
            "unit": "ns/op",
            "extra": "1129 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - B/op",
            "value": 6890,
            "unit": "B/op",
            "extra": "1129 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - allocs/op",
            "value": 117,
            "unit": "allocs/op",
            "extra": "1129 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get",
            "value": 839744,
            "unit": "ns/op\t    9127 B/op\t     164 allocs/op",
            "extra": "1420 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - ns/op",
            "value": 839744,
            "unit": "ns/op",
            "extra": "1420 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - B/op",
            "value": 9127,
            "unit": "B/op",
            "extra": "1420 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "1420 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete",
            "value": 1705714,
            "unit": "ns/op\t    9399 B/op\t     170 allocs/op",
            "extra": "686 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - ns/op",
            "value": 1705714,
            "unit": "ns/op",
            "extra": "686 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - B/op",
            "value": 9399,
            "unit": "B/op",
            "extra": "686 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - allocs/op",
            "value": 170,
            "unit": "allocs/op",
            "extra": "686 times\n4 procs"
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
        "date": 1770108194402,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Clickhouse_Set",
            "value": 1353298,
            "unit": "ns/op\t    6879 B/op\t     117 allocs/op",
            "extra": "968 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - ns/op",
            "value": 1353298,
            "unit": "ns/op",
            "extra": "968 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - B/op",
            "value": 6879,
            "unit": "B/op",
            "extra": "968 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - allocs/op",
            "value": 117,
            "unit": "allocs/op",
            "extra": "968 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get",
            "value": 995151,
            "unit": "ns/op\t    9404 B/op\t     164 allocs/op",
            "extra": "1196 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - ns/op",
            "value": 995151,
            "unit": "ns/op",
            "extra": "1196 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - B/op",
            "value": 9404,
            "unit": "B/op",
            "extra": "1196 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "1196 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete",
            "value": 1984695,
            "unit": "ns/op\t    9408 B/op\t     170 allocs/op",
            "extra": "600 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - ns/op",
            "value": 1984695,
            "unit": "ns/op",
            "extra": "600 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - B/op",
            "value": 9408,
            "unit": "B/op",
            "extra": "600 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - allocs/op",
            "value": 170,
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
          "id": "fb897e30435db5900077eaa5a154eb82084244a9",
          "message": "Merge pull request #2472 from gofiber/dependabot/go_modules/aerospike/klauspost-modules-e89a90612b\n\nchore(deps): bump the klauspost-modules group across 27 directories with 1 update",
          "timestamp": "2026-02-10T08:15:49+01:00",
          "tree_id": "dedd6a8e895939e7474944a1cf8d8b6f1dedddd5",
          "url": "https://github.com/gofiber/storage/commit/fb897e30435db5900077eaa5a154eb82084244a9"
        },
        "date": 1770708094963,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Clickhouse_Set",
            "value": 1386387,
            "unit": "ns/op\t    6968 B/op\t     117 allocs/op",
            "extra": "972 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - ns/op",
            "value": 1386387,
            "unit": "ns/op",
            "extra": "972 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - B/op",
            "value": 6968,
            "unit": "B/op",
            "extra": "972 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - allocs/op",
            "value": 117,
            "unit": "allocs/op",
            "extra": "972 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get",
            "value": 985340,
            "unit": "ns/op\t    9311 B/op\t     164 allocs/op",
            "extra": "1220 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - ns/op",
            "value": 985340,
            "unit": "ns/op",
            "extra": "1220 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - B/op",
            "value": 9311,
            "unit": "B/op",
            "extra": "1220 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "1220 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete",
            "value": 1965718,
            "unit": "ns/op\t    9314 B/op\t     170 allocs/op",
            "extra": "604 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - ns/op",
            "value": 1965718,
            "unit": "ns/op",
            "extra": "604 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - B/op",
            "value": 9314,
            "unit": "B/op",
            "extra": "604 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - allocs/op",
            "value": 170,
            "unit": "allocs/op",
            "extra": "604 times\n4 procs"
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
        "date": 1770794350502,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Clickhouse_Set",
            "value": 1382409,
            "unit": "ns/op\t    7039 B/op\t     117 allocs/op",
            "extra": "968 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - ns/op",
            "value": 1382409,
            "unit": "ns/op",
            "extra": "968 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - B/op",
            "value": 7039,
            "unit": "B/op",
            "extra": "968 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - allocs/op",
            "value": 117,
            "unit": "allocs/op",
            "extra": "968 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get",
            "value": 1002088,
            "unit": "ns/op\t    9107 B/op\t     164 allocs/op",
            "extra": "1190 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - ns/op",
            "value": 1002088,
            "unit": "ns/op",
            "extra": "1190 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - B/op",
            "value": 9107,
            "unit": "B/op",
            "extra": "1190 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "1190 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete",
            "value": 2007074,
            "unit": "ns/op\t    9201 B/op\t     170 allocs/op",
            "extra": "596 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - ns/op",
            "value": 2007074,
            "unit": "ns/op",
            "extra": "596 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - B/op",
            "value": 9201,
            "unit": "B/op",
            "extra": "596 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - allocs/op",
            "value": 170,
            "unit": "allocs/op",
            "extra": "596 times\n4 procs"
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
        "date": 1770967265530,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Clickhouse_Set",
            "value": 1463097,
            "unit": "ns/op\t    6844 B/op\t     117 allocs/op",
            "extra": "885 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - ns/op",
            "value": 1463097,
            "unit": "ns/op",
            "extra": "885 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - B/op",
            "value": 6844,
            "unit": "B/op",
            "extra": "885 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - allocs/op",
            "value": 117,
            "unit": "allocs/op",
            "extra": "885 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get",
            "value": 1050152,
            "unit": "ns/op\t    9369 B/op\t     164 allocs/op",
            "extra": "1118 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - ns/op",
            "value": 1050152,
            "unit": "ns/op",
            "extra": "1118 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - B/op",
            "value": 9369,
            "unit": "B/op",
            "extra": "1118 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "1118 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete",
            "value": 2079281,
            "unit": "ns/op\t    9144 B/op\t     170 allocs/op",
            "extra": "562 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - ns/op",
            "value": 2079281,
            "unit": "ns/op",
            "extra": "562 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - B/op",
            "value": 9144,
            "unit": "B/op",
            "extra": "562 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - allocs/op",
            "value": 170,
            "unit": "allocs/op",
            "extra": "562 times\n4 procs"
          }
        ]
      }
    ]
  }
}