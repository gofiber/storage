window.BENCHMARK_DATA = {
  "lastUpdate": 1753255786210,
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
      }
    ]
  }
}