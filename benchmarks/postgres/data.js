window.BENCHMARK_DATA = {
  "lastUpdate": 1768548447924,
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
          "id": "e4abddc19ffa4357782832b7993316fd4728c198",
          "message": "Merge pull request #1562 from the-real-i9/main\n\n🔥 feat: Add support for Neo4j",
          "timestamp": "2025-02-03T15:27:20+01:00",
          "tree_id": "3047322976de2108619c89df2419138c0acbf01c",
          "url": "https://github.com/gofiber/storage/commit/e4abddc19ffa4357782832b7993316fd4728c198"
        },
        "date": 1738592902237,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Postgres_Set",
            "value": 289974,
            "unit": "ns/op\t     256 B/op\t       7 allocs/op",
            "extra": "3704 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - ns/op",
            "value": 289974,
            "unit": "ns/op",
            "extra": "3704 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - B/op",
            "value": 256,
            "unit": "B/op",
            "extra": "3704 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "3704 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get",
            "value": 160836,
            "unit": "ns/op\t     521 B/op\t      10 allocs/op",
            "extra": "7210 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - ns/op",
            "value": 160836,
            "unit": "ns/op",
            "extra": "7210 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - B/op",
            "value": 521,
            "unit": "B/op",
            "extra": "7210 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "7210 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete",
            "value": 617973,
            "unit": "ns/op\t     400 B/op\t      11 allocs/op",
            "extra": "2145 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - ns/op",
            "value": 617973,
            "unit": "ns/op",
            "extra": "2145 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - B/op",
            "value": 400,
            "unit": "B/op",
            "extra": "2145 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "2145 times\n4 procs"
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
          "id": "715cafdc96aab6cafb3b3d4e0f49ddca2f42c236",
          "message": "Merge pull request #1573 from bryanvaz/fix/psql_create_if_not_exists\n\nfix: Use existing PostgreSQL table if it exists",
          "timestamp": "2025-03-11T08:34:47+01:00",
          "tree_id": "98b30aa0b1f3ea7f69e98dc9ba7cdc98806590cc",
          "url": "https://github.com/gofiber/storage/commit/715cafdc96aab6cafb3b3d4e0f49ddca2f42c236"
        },
        "date": 1741678555337,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Postgres_Set",
            "value": 347020,
            "unit": "ns/op\t     255 B/op\t       7 allocs/op",
            "extra": "3464 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - ns/op",
            "value": 347020,
            "unit": "ns/op",
            "extra": "3464 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - B/op",
            "value": 255,
            "unit": "B/op",
            "extra": "3464 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "3464 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get",
            "value": 153302,
            "unit": "ns/op\t     521 B/op\t      10 allocs/op",
            "extra": "7864 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - ns/op",
            "value": 153302,
            "unit": "ns/op",
            "extra": "7864 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - B/op",
            "value": 521,
            "unit": "B/op",
            "extra": "7864 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "7864 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete",
            "value": 668166,
            "unit": "ns/op\t     399 B/op\t      11 allocs/op",
            "extra": "1813 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - ns/op",
            "value": 668166,
            "unit": "ns/op",
            "extra": "1813 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - B/op",
            "value": 399,
            "unit": "B/op",
            "extra": "1813 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "1813 times\n4 procs"
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
          "id": "c1933ed3e87ea6f84e3bde5edee29f19495afa91",
          "message": "Merge pull request #1515 from mdelapenya/tc-go-adoption-2\n\nchore: adopt testcontainers-go for Postgres, MySQL and MongoDB",
          "timestamp": "2025-03-19T08:01:09+01:00",
          "tree_id": "bd7d7600b063b44df0a5960ac0d1d4b43f6fa48c",
          "url": "https://github.com/gofiber/storage/commit/c1933ed3e87ea6f84e3bde5edee29f19495afa91"
        },
        "date": 1742367925713,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Postgres_Set",
            "value": 202512,
            "unit": "ns/op\t     258 B/op\t       7 allocs/op",
            "extra": "5504 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - ns/op",
            "value": 202512,
            "unit": "ns/op",
            "extra": "5504 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - B/op",
            "value": 258,
            "unit": "B/op",
            "extra": "5504 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "5504 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get",
            "value": 184630,
            "unit": "ns/op\t     523 B/op\t      10 allocs/op",
            "extra": "6320 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - ns/op",
            "value": 184630,
            "unit": "ns/op",
            "extra": "6320 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - B/op",
            "value": 523,
            "unit": "B/op",
            "extra": "6320 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "6320 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete",
            "value": 405460,
            "unit": "ns/op\t     405 B/op\t      11 allocs/op",
            "extra": "2894 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - ns/op",
            "value": 405460,
            "unit": "ns/op",
            "extra": "2894 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - B/op",
            "value": 405,
            "unit": "B/op",
            "extra": "2894 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "2894 times\n4 procs"
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
          "id": "7476af62277b5a4dd05177a479cb926ff907488a",
          "message": "Merge pull request #1599 from gofiber/dependabot/go_modules/postgres/github.com/stretchr/testify-1.10.0\n\nchore(deps): bump github.com/stretchr/testify from 1.9.0 to 1.10.0 in /postgres",
          "timestamp": "2025-03-26T20:21:54+01:00",
          "tree_id": "ae6f8c587c6bc4ea741b954799cdd877790cfae4",
          "url": "https://github.com/gofiber/storage/commit/7476af62277b5a4dd05177a479cb926ff907488a"
        },
        "date": 1743019378542,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Postgres_Set",
            "value": 204288,
            "unit": "ns/op\t     258 B/op\t       7 allocs/op",
            "extra": "5792 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - ns/op",
            "value": 204288,
            "unit": "ns/op",
            "extra": "5792 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - B/op",
            "value": 258,
            "unit": "B/op",
            "extra": "5792 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "5792 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get",
            "value": 180130,
            "unit": "ns/op\t     523 B/op\t      10 allocs/op",
            "extra": "6312 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - ns/op",
            "value": 180130,
            "unit": "ns/op",
            "extra": "6312 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - B/op",
            "value": 523,
            "unit": "B/op",
            "extra": "6312 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "6312 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete",
            "value": 402605,
            "unit": "ns/op\t     405 B/op\t      11 allocs/op",
            "extra": "2911 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - ns/op",
            "value": 402605,
            "unit": "ns/op",
            "extra": "2911 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - B/op",
            "value": 405,
            "unit": "B/op",
            "extra": "2911 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "2911 times\n4 procs"
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
        "date": 1744190318872,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Postgres_Set",
            "value": 199769,
            "unit": "ns/op\t     258 B/op\t       7 allocs/op",
            "extra": "5726 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - ns/op",
            "value": 199769,
            "unit": "ns/op",
            "extra": "5726 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - B/op",
            "value": 258,
            "unit": "B/op",
            "extra": "5726 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "5726 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get",
            "value": 178037,
            "unit": "ns/op\t     523 B/op\t      10 allocs/op",
            "extra": "6198 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - ns/op",
            "value": 178037,
            "unit": "ns/op",
            "extra": "6198 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - B/op",
            "value": 523,
            "unit": "B/op",
            "extra": "6198 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "6198 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete",
            "value": 396743,
            "unit": "ns/op\t     405 B/op\t      11 allocs/op",
            "extra": "2862 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - ns/op",
            "value": 396743,
            "unit": "ns/op",
            "extra": "2862 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - B/op",
            "value": 405,
            "unit": "B/op",
            "extra": "2862 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "2862 times\n4 procs"
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
          "id": "d4015ce4e6fca4d7552ab579f950abe709195bb9",
          "message": "Merge pull request #1669 from gofiber/dependabot/go_modules/postgres/github.com/jackc/pgx/v5-5.7.4\n\nchore(deps): bump github.com/jackc/pgx/v5 from 5.6.0 to 5.7.4 in /postgres",
          "timestamp": "2025-04-14T09:26:47+02:00",
          "tree_id": "4a0bb67b7942796d33465d56e00d7c44742a8b74",
          "url": "https://github.com/gofiber/storage/commit/d4015ce4e6fca4d7552ab579f950abe709195bb9"
        },
        "date": 1744615687754,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Postgres_Set",
            "value": 198725,
            "unit": "ns/op\t     258 B/op\t       7 allocs/op",
            "extra": "5712 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - ns/op",
            "value": 198725,
            "unit": "ns/op",
            "extra": "5712 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - B/op",
            "value": 258,
            "unit": "B/op",
            "extra": "5712 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "5712 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get",
            "value": 176994,
            "unit": "ns/op\t     524 B/op\t      10 allocs/op",
            "extra": "6739 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - ns/op",
            "value": 176994,
            "unit": "ns/op",
            "extra": "6739 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - B/op",
            "value": 524,
            "unit": "B/op",
            "extra": "6739 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "6739 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete",
            "value": 386542,
            "unit": "ns/op\t     405 B/op\t      11 allocs/op",
            "extra": "2988 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - ns/op",
            "value": 386542,
            "unit": "ns/op",
            "extra": "2988 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - B/op",
            "value": 405,
            "unit": "B/op",
            "extra": "2988 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "2988 times\n4 procs"
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
        "date": 1744782277750,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Postgres_Set",
            "value": 204838,
            "unit": "ns/op\t     258 B/op\t       7 allocs/op",
            "extra": "5582 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - ns/op",
            "value": 204838,
            "unit": "ns/op",
            "extra": "5582 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - B/op",
            "value": 258,
            "unit": "B/op",
            "extra": "5582 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "5582 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get",
            "value": 190562,
            "unit": "ns/op\t     524 B/op\t      10 allocs/op",
            "extra": "6376 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - ns/op",
            "value": 190562,
            "unit": "ns/op",
            "extra": "6376 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - B/op",
            "value": 524,
            "unit": "B/op",
            "extra": "6376 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "6376 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete",
            "value": 458802,
            "unit": "ns/op\t     405 B/op\t      11 allocs/op",
            "extra": "2726 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - ns/op",
            "value": 458802,
            "unit": "ns/op",
            "extra": "2726 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - B/op",
            "value": 405,
            "unit": "B/op",
            "extra": "2726 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "2726 times\n4 procs"
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
        "date": 1745688101039,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Postgres_Set",
            "value": 200780,
            "unit": "ns/op\t     258 B/op\t       7 allocs/op",
            "extra": "5794 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - ns/op",
            "value": 200780,
            "unit": "ns/op",
            "extra": "5794 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - B/op",
            "value": 258,
            "unit": "B/op",
            "extra": "5794 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "5794 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get",
            "value": 177854,
            "unit": "ns/op\t     523 B/op\t      10 allocs/op",
            "extra": "6070 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - ns/op",
            "value": 177854,
            "unit": "ns/op",
            "extra": "6070 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - B/op",
            "value": 523,
            "unit": "B/op",
            "extra": "6070 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "6070 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete",
            "value": 397352,
            "unit": "ns/op\t     405 B/op\t      11 allocs/op",
            "extra": "2858 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - ns/op",
            "value": 397352,
            "unit": "ns/op",
            "extra": "2858 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - B/op",
            "value": 405,
            "unit": "B/op",
            "extra": "2858 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "2858 times\n4 procs"
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
          "id": "4c7b5f7cb93ad5fed973529b0cf4334d0365db7e",
          "message": "Merge pull request #1628 from gofiber/dependabot/go_modules/postgres/github.com/testcontainers/testcontainers-go-0.36.0\n\nchore(deps): bump github.com/testcontainers/testcontainers-go from 0.35.0 to 0.36.0 in /postgres",
          "timestamp": "2025-04-26T19:24:06+02:00",
          "tree_id": "5e9f89a6ad2731bc81c2d519cba16946d94ae99d",
          "url": "https://github.com/gofiber/storage/commit/4c7b5f7cb93ad5fed973529b0cf4334d0365db7e"
        },
        "date": 1745688322892,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Postgres_Set",
            "value": 200823,
            "unit": "ns/op\t     258 B/op\t       7 allocs/op",
            "extra": "5799 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - ns/op",
            "value": 200823,
            "unit": "ns/op",
            "extra": "5799 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - B/op",
            "value": 258,
            "unit": "B/op",
            "extra": "5799 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "5799 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get",
            "value": 177622,
            "unit": "ns/op\t     523 B/op\t      10 allocs/op",
            "extra": "6565 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - ns/op",
            "value": 177622,
            "unit": "ns/op",
            "extra": "6565 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - B/op",
            "value": 523,
            "unit": "B/op",
            "extra": "6565 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "6565 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete",
            "value": 390614,
            "unit": "ns/op\t     405 B/op\t      11 allocs/op",
            "extra": "2982 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - ns/op",
            "value": 390614,
            "unit": "ns/op",
            "extra": "2982 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - B/op",
            "value": 405,
            "unit": "B/op",
            "extra": "2982 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "2982 times\n4 procs"
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
          "id": "5c8bb189aebb1e9a18fd26702662807efac466d1",
          "message": "Merge pull request #1718 from gofiber/dependabot/go_modules/neo4j/testcontainers-modules-b4945474bc\n\nchore(deps): bump the testcontainers-modules group across 3 directories with 3 updates",
          "timestamp": "2025-04-29T10:03:24+02:00",
          "tree_id": "0f929e62fecd783f8f05885c619857017d6ecb20",
          "url": "https://github.com/gofiber/storage/commit/5c8bb189aebb1e9a18fd26702662807efac466d1"
        },
        "date": 1745913879406,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Postgres_Set",
            "value": 200954,
            "unit": "ns/op\t     258 B/op\t       7 allocs/op",
            "extra": "5870 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - ns/op",
            "value": 200954,
            "unit": "ns/op",
            "extra": "5870 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - B/op",
            "value": 258,
            "unit": "B/op",
            "extra": "5870 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "5870 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get",
            "value": 177633,
            "unit": "ns/op\t     524 B/op\t      10 allocs/op",
            "extra": "6427 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - ns/op",
            "value": 177633,
            "unit": "ns/op",
            "extra": "6427 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - B/op",
            "value": 524,
            "unit": "B/op",
            "extra": "6427 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "6427 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete",
            "value": 391676,
            "unit": "ns/op\t     405 B/op\t      11 allocs/op",
            "extra": "2908 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - ns/op",
            "value": 391676,
            "unit": "ns/op",
            "extra": "2908 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - B/op",
            "value": 405,
            "unit": "B/op",
            "extra": "2908 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "2908 times\n4 procs"
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
          "id": "743bcd8ec399783babd9fa83233fc41e3a43a794",
          "message": "Merge pull request #1737 from gofiber/dependabot/go_modules/postgres/github.com/jackc/pgx/v5-5.7.5\n\nchore(deps): bump github.com/jackc/pgx/v5 from 5.7.4 to 5.7.5 in /postgres",
          "timestamp": "2025-05-19T10:02:42+02:00",
          "tree_id": "f220d3cc5655cc932e37117864415e986a8b70e1",
          "url": "https://github.com/gofiber/storage/commit/743bcd8ec399783babd9fa83233fc41e3a43a794"
        },
        "date": 1747641821742,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Postgres_Set",
            "value": 194243,
            "unit": "ns/op\t     258 B/op\t       7 allocs/op",
            "extra": "5696 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - ns/op",
            "value": 194243,
            "unit": "ns/op",
            "extra": "5696 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - B/op",
            "value": 258,
            "unit": "B/op",
            "extra": "5696 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "5696 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get",
            "value": 173264,
            "unit": "ns/op\t     523 B/op\t      10 allocs/op",
            "extra": "6703 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - ns/op",
            "value": 173264,
            "unit": "ns/op",
            "extra": "6703 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - B/op",
            "value": 523,
            "unit": "B/op",
            "extra": "6703 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "6703 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete",
            "value": 381816,
            "unit": "ns/op\t     405 B/op\t      11 allocs/op",
            "extra": "2958 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - ns/op",
            "value": 381816,
            "unit": "ns/op",
            "extra": "2958 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - B/op",
            "value": 405,
            "unit": "B/op",
            "extra": "2958 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "2958 times\n4 procs"
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
        "date": 1751882167859,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Postgres_Set",
            "value": 199546,
            "unit": "ns/op\t     258 B/op\t       7 allocs/op",
            "extra": "5946 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - ns/op",
            "value": 199546,
            "unit": "ns/op",
            "extra": "5946 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - B/op",
            "value": 258,
            "unit": "B/op",
            "extra": "5946 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "5946 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get",
            "value": 178531,
            "unit": "ns/op\t     524 B/op\t      10 allocs/op",
            "extra": "6363 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - ns/op",
            "value": 178531,
            "unit": "ns/op",
            "extra": "6363 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - B/op",
            "value": 524,
            "unit": "B/op",
            "extra": "6363 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "6363 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete",
            "value": 397088,
            "unit": "ns/op\t     405 B/op\t      11 allocs/op",
            "extra": "2980 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - ns/op",
            "value": 397088,
            "unit": "ns/op",
            "extra": "2980 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - B/op",
            "value": 405,
            "unit": "B/op",
            "extra": "2980 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "2980 times\n4 procs"
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
        "date": 1752653084006,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Postgres_Set",
            "value": 196664,
            "unit": "ns/op\t     258 B/op\t       7 allocs/op",
            "extra": "5859 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - ns/op",
            "value": 196664,
            "unit": "ns/op",
            "extra": "5859 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - B/op",
            "value": 258,
            "unit": "B/op",
            "extra": "5859 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "5859 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get",
            "value": 175627,
            "unit": "ns/op\t     524 B/op\t      10 allocs/op",
            "extra": "6736 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - ns/op",
            "value": 175627,
            "unit": "ns/op",
            "extra": "6736 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - B/op",
            "value": 524,
            "unit": "B/op",
            "extra": "6736 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "6736 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete",
            "value": 384557,
            "unit": "ns/op\t     405 B/op\t      11 allocs/op",
            "extra": "2992 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - ns/op",
            "value": 384557,
            "unit": "ns/op",
            "extra": "2992 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - B/op",
            "value": 405,
            "unit": "B/op",
            "extra": "2992 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "2992 times\n4 procs"
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
          "id": "f01e70b8a19af50c3cff3ff4136056b1cded4e00",
          "message": "Merge pull request #1899 from gofiber/dependabot/go_modules/postgres/github.com/jackc/pgx/v5-5.7.6\n\nchore(deps): bump github.com/jackc/pgx/v5 from 5.7.5 to 5.7.6 in /postgres",
          "timestamp": "2025-09-09T09:25:43+02:00",
          "tree_id": "8103c890306c5f82e308dc686372d73b22c0bbda",
          "url": "https://github.com/gofiber/storage/commit/f01e70b8a19af50c3cff3ff4136056b1cded4e00"
        },
        "date": 1757402841018,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Postgres_Set",
            "value": 204045,
            "unit": "ns/op\t     258 B/op\t       7 allocs/op",
            "extra": "5899 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - ns/op",
            "value": 204045,
            "unit": "ns/op",
            "extra": "5899 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - B/op",
            "value": 258,
            "unit": "B/op",
            "extra": "5899 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "5899 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get",
            "value": 204558,
            "unit": "ns/op\t     523 B/op\t      10 allocs/op",
            "extra": "5034 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - ns/op",
            "value": 204558,
            "unit": "ns/op",
            "extra": "5034 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - B/op",
            "value": 523,
            "unit": "B/op",
            "extra": "5034 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "5034 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete",
            "value": 399027,
            "unit": "ns/op\t     406 B/op\t      11 allocs/op",
            "extra": "2602 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - ns/op",
            "value": 399027,
            "unit": "ns/op",
            "extra": "2602 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - B/op",
            "value": 406,
            "unit": "B/op",
            "extra": "2602 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "2602 times\n4 procs"
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
          "id": "a8bcadcb3173b5069f573c7272f8983bf1e23c9f",
          "message": "Merge pull request #1963 from gofiber/dependabot/go_modules/postgres/github.com/docker/docker-28.3.3incompatible\n\nchore(deps): bump github.com/docker/docker from 28.2.2+incompatible to 28.3.3+incompatible in /postgres",
          "timestamp": "2025-11-06T08:59:44+01:00",
          "tree_id": "600e332e17d1eb280ab92443599d36b5929b65c2",
          "url": "https://github.com/gofiber/storage/commit/a8bcadcb3173b5069f573c7272f8983bf1e23c9f"
        },
        "date": 1762417313528,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Postgres_Set",
            "value": 198106,
            "unit": "ns/op\t     258 B/op\t       7 allocs/op",
            "extra": "5637 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - ns/op",
            "value": 198106,
            "unit": "ns/op",
            "extra": "5637 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - B/op",
            "value": 258,
            "unit": "B/op",
            "extra": "5637 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "5637 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get",
            "value": 180262,
            "unit": "ns/op\t     523 B/op\t      10 allocs/op",
            "extra": "6427 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - ns/op",
            "value": 180262,
            "unit": "ns/op",
            "extra": "6427 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - B/op",
            "value": 523,
            "unit": "B/op",
            "extra": "6427 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "6427 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete",
            "value": 394907,
            "unit": "ns/op\t     405 B/op\t      11 allocs/op",
            "extra": "2996 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - ns/op",
            "value": 394907,
            "unit": "ns/op",
            "extra": "2996 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - B/op",
            "value": 405,
            "unit": "B/op",
            "extra": "2996 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "2996 times\n4 procs"
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
          "id": "550938015485d24d461df9ca78068fe2505688c2",
          "message": "Merge pull request #1988 from gofiber/dependabot/go_modules/postgres/github.com/docker/docker-28.5.2incompatible\n\nchore(deps): bump github.com/docker/docker from 28.3.3+incompatible to 28.5.2+incompatible in /postgres",
          "timestamp": "2025-11-06T09:19:06+01:00",
          "tree_id": "028413e4aa57da1944344f26b9229ef66bbf7309",
          "url": "https://github.com/gofiber/storage/commit/550938015485d24d461df9ca78068fe2505688c2"
        },
        "date": 1762418200902,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Postgres_Set",
            "value": 205265,
            "unit": "ns/op\t     258 B/op\t       7 allocs/op",
            "extra": "5594 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - ns/op",
            "value": 205265,
            "unit": "ns/op",
            "extra": "5594 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - B/op",
            "value": 258,
            "unit": "B/op",
            "extra": "5594 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "5594 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get",
            "value": 181597,
            "unit": "ns/op\t     524 B/op\t      10 allocs/op",
            "extra": "6366 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - ns/op",
            "value": 181597,
            "unit": "ns/op",
            "extra": "6366 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - B/op",
            "value": 524,
            "unit": "B/op",
            "extra": "6366 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "6366 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete",
            "value": 400922,
            "unit": "ns/op\t     405 B/op\t      11 allocs/op",
            "extra": "2869 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - ns/op",
            "value": 400922,
            "unit": "ns/op",
            "extra": "2869 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - B/op",
            "value": 405,
            "unit": "B/op",
            "extra": "2869 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "2869 times\n4 procs"
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
        "date": 1763657705656,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Postgres_Set",
            "value": 206475,
            "unit": "ns/op\t     258 B/op\t       7 allocs/op",
            "extra": "5488 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - ns/op",
            "value": 206475,
            "unit": "ns/op",
            "extra": "5488 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - B/op",
            "value": 258,
            "unit": "B/op",
            "extra": "5488 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "5488 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get",
            "value": 182609,
            "unit": "ns/op\t     524 B/op\t      10 allocs/op",
            "extra": "6127 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - ns/op",
            "value": 182609,
            "unit": "ns/op",
            "extra": "6127 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - B/op",
            "value": 524,
            "unit": "B/op",
            "extra": "6127 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "6127 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete",
            "value": 401333,
            "unit": "ns/op\t     405 B/op\t      11 allocs/op",
            "extra": "2845 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - ns/op",
            "value": 401333,
            "unit": "ns/op",
            "extra": "2845 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - B/op",
            "value": 405,
            "unit": "B/op",
            "extra": "2845 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "2845 times\n4 procs"
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
        "date": 1763662331035,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Postgres_Set",
            "value": 208248,
            "unit": "ns/op\t     258 B/op\t       7 allocs/op",
            "extra": "5402 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - ns/op",
            "value": 208248,
            "unit": "ns/op",
            "extra": "5402 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - B/op",
            "value": 258,
            "unit": "B/op",
            "extra": "5402 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "5402 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get",
            "value": 187254,
            "unit": "ns/op\t     524 B/op\t      10 allocs/op",
            "extra": "6171 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - ns/op",
            "value": 187254,
            "unit": "ns/op",
            "extra": "6171 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - B/op",
            "value": 524,
            "unit": "B/op",
            "extra": "6171 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "6171 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete",
            "value": 408889,
            "unit": "ns/op\t     405 B/op\t      11 allocs/op",
            "extra": "2835 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - ns/op",
            "value": 408889,
            "unit": "ns/op",
            "extra": "2835 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - B/op",
            "value": 405,
            "unit": "B/op",
            "extra": "2835 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "2835 times\n4 procs"
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
        "date": 1764260052532,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Postgres_Set",
            "value": 201901,
            "unit": "ns/op\t     259 B/op\t       7 allocs/op",
            "extra": "5563 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - ns/op",
            "value": 201901,
            "unit": "ns/op",
            "extra": "5563 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - B/op",
            "value": 259,
            "unit": "B/op",
            "extra": "5563 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "5563 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get",
            "value": 181098,
            "unit": "ns/op\t     524 B/op\t      10 allocs/op",
            "extra": "6169 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - ns/op",
            "value": 181098,
            "unit": "ns/op",
            "extra": "6169 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - B/op",
            "value": 524,
            "unit": "B/op",
            "extra": "6169 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "6169 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete",
            "value": 395381,
            "unit": "ns/op\t     405 B/op\t      11 allocs/op",
            "extra": "2892 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - ns/op",
            "value": 395381,
            "unit": "ns/op",
            "extra": "2892 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - B/op",
            "value": 405,
            "unit": "B/op",
            "extra": "2892 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "2892 times\n4 procs"
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
        "date": 1764261336037,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Postgres_Set",
            "value": 207879,
            "unit": "ns/op\t     258 B/op\t       7 allocs/op",
            "extra": "5409 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - ns/op",
            "value": 207879,
            "unit": "ns/op",
            "extra": "5409 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - B/op",
            "value": 258,
            "unit": "B/op",
            "extra": "5409 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "5409 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get",
            "value": 186721,
            "unit": "ns/op\t     523 B/op\t      10 allocs/op",
            "extra": "6302 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - ns/op",
            "value": 186721,
            "unit": "ns/op",
            "extra": "6302 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - B/op",
            "value": 523,
            "unit": "B/op",
            "extra": "6302 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "6302 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete",
            "value": 410535,
            "unit": "ns/op\t     405 B/op\t      11 allocs/op",
            "extra": "2832 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - ns/op",
            "value": 410535,
            "unit": "ns/op",
            "extra": "2832 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - B/op",
            "value": 405,
            "unit": "B/op",
            "extra": "2832 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "2832 times\n4 procs"
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
        "date": 1765267641370,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Postgres_Set",
            "value": 209710,
            "unit": "ns/op\t     258 B/op\t       7 allocs/op",
            "extra": "5593 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - ns/op",
            "value": 209710,
            "unit": "ns/op",
            "extra": "5593 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - B/op",
            "value": 258,
            "unit": "B/op",
            "extra": "5593 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "5593 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get",
            "value": 186963,
            "unit": "ns/op\t     524 B/op\t      10 allocs/op",
            "extra": "5955 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - ns/op",
            "value": 186963,
            "unit": "ns/op",
            "extra": "5955 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - B/op",
            "value": 524,
            "unit": "B/op",
            "extra": "5955 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "5955 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete",
            "value": 408440,
            "unit": "ns/op\t     405 B/op\t      11 allocs/op",
            "extra": "2796 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - ns/op",
            "value": 408440,
            "unit": "ns/op",
            "extra": "2796 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - B/op",
            "value": 405,
            "unit": "B/op",
            "extra": "2796 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "2796 times\n4 procs"
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
        "date": 1765439753470,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Postgres_Set",
            "value": 205038,
            "unit": "ns/op\t     258 B/op\t       7 allocs/op",
            "extra": "5607 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - ns/op",
            "value": 205038,
            "unit": "ns/op",
            "extra": "5607 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - B/op",
            "value": 258,
            "unit": "B/op",
            "extra": "5607 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "5607 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get",
            "value": 184871,
            "unit": "ns/op\t     524 B/op\t      10 allocs/op",
            "extra": "6411 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - ns/op",
            "value": 184871,
            "unit": "ns/op",
            "extra": "6411 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - B/op",
            "value": 524,
            "unit": "B/op",
            "extra": "6411 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "6411 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete",
            "value": 405251,
            "unit": "ns/op\t     405 B/op\t      11 allocs/op",
            "extra": "2680 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - ns/op",
            "value": 405251,
            "unit": "ns/op",
            "extra": "2680 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - B/op",
            "value": 405,
            "unit": "B/op",
            "extra": "2680 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "2680 times\n4 procs"
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
        "date": 1766043781179,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Postgres_Set",
            "value": 205224,
            "unit": "ns/op\t     258 B/op\t       7 allocs/op",
            "extra": "5676 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - ns/op",
            "value": 205224,
            "unit": "ns/op",
            "extra": "5676 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - B/op",
            "value": 258,
            "unit": "B/op",
            "extra": "5676 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "5676 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get",
            "value": 181978,
            "unit": "ns/op\t     524 B/op\t      10 allocs/op",
            "extra": "6334 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - ns/op",
            "value": 181978,
            "unit": "ns/op",
            "extra": "6334 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - B/op",
            "value": 524,
            "unit": "B/op",
            "extra": "6334 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "6334 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete",
            "value": 399921,
            "unit": "ns/op\t     405 B/op\t      11 allocs/op",
            "extra": "2919 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - ns/op",
            "value": 399921,
            "unit": "ns/op",
            "extra": "2919 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - B/op",
            "value": 405,
            "unit": "B/op",
            "extra": "2919 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "2919 times\n4 procs"
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
          "id": "cc337844fd4a164ceacb5e2bb1a993479b93614e",
          "message": "Merge pull request #2375 from gofiber/dependabot/go_modules/postgres/github.com/jackc/pgx/v5-5.8.0\n\nchore(deps): bump github.com/jackc/pgx/v5 from 5.7.6 to 5.8.0 in /postgres",
          "timestamp": "2025-12-29T08:17:40+01:00",
          "tree_id": "b301a895c9cc81bb14320043f4501b10d0b56878",
          "url": "https://github.com/gofiber/storage/commit/cc337844fd4a164ceacb5e2bb1a993479b93614e"
        },
        "date": 1766992732326,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Postgres_Set",
            "value": 201282,
            "unit": "ns/op\t     306 B/op\t       8 allocs/op",
            "extra": "5677 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - ns/op",
            "value": 201282,
            "unit": "ns/op",
            "extra": "5677 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - B/op",
            "value": 306,
            "unit": "B/op",
            "extra": "5677 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "5677 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get",
            "value": 179545,
            "unit": "ns/op\t     572 B/op\t      11 allocs/op",
            "extra": "6381 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - ns/op",
            "value": 179545,
            "unit": "ns/op",
            "extra": "6381 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - B/op",
            "value": 572,
            "unit": "B/op",
            "extra": "6381 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "6381 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete",
            "value": 391759,
            "unit": "ns/op\t     501 B/op\t      13 allocs/op",
            "extra": "3003 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - ns/op",
            "value": 391759,
            "unit": "ns/op",
            "extra": "3003 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - B/op",
            "value": 501,
            "unit": "B/op",
            "extra": "3003 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "3003 times\n4 procs"
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
        "date": 1768376596670,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Postgres_Set",
            "value": 200615,
            "unit": "ns/op\t     306 B/op\t       8 allocs/op",
            "extra": "5706 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - ns/op",
            "value": 200615,
            "unit": "ns/op",
            "extra": "5706 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - B/op",
            "value": 306,
            "unit": "B/op",
            "extra": "5706 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "5706 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get",
            "value": 179222,
            "unit": "ns/op\t     572 B/op\t      11 allocs/op",
            "extra": "6393 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - ns/op",
            "value": 179222,
            "unit": "ns/op",
            "extra": "6393 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - B/op",
            "value": 572,
            "unit": "B/op",
            "extra": "6393 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "6393 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete",
            "value": 394431,
            "unit": "ns/op\t     501 B/op\t      13 allocs/op",
            "extra": "2920 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - ns/op",
            "value": 394431,
            "unit": "ns/op",
            "extra": "2920 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - B/op",
            "value": 501,
            "unit": "B/op",
            "extra": "2920 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "2920 times\n4 procs"
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
        "date": 1768377275280,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Postgres_Set",
            "value": 154415,
            "unit": "ns/op\t     306 B/op\t       8 allocs/op",
            "extra": "7094 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - ns/op",
            "value": 154415,
            "unit": "ns/op",
            "extra": "7094 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - B/op",
            "value": 306,
            "unit": "B/op",
            "extra": "7094 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "7094 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get",
            "value": 133104,
            "unit": "ns/op\t     572 B/op\t      11 allocs/op",
            "extra": "8169 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - ns/op",
            "value": 133104,
            "unit": "ns/op",
            "extra": "8169 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - B/op",
            "value": 572,
            "unit": "B/op",
            "extra": "8169 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "8169 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete",
            "value": 304314,
            "unit": "ns/op\t     501 B/op\t      13 allocs/op",
            "extra": "3703 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - ns/op",
            "value": 304314,
            "unit": "ns/op",
            "extra": "3703 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - B/op",
            "value": 501,
            "unit": "B/op",
            "extra": "3703 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "3703 times\n4 procs"
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
        "date": 1768379402247,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Postgres_Set",
            "value": 206527,
            "unit": "ns/op\t     306 B/op\t       8 allocs/op",
            "extra": "5463 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - ns/op",
            "value": 206527,
            "unit": "ns/op",
            "extra": "5463 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - B/op",
            "value": 306,
            "unit": "B/op",
            "extra": "5463 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "5463 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get",
            "value": 184648,
            "unit": "ns/op\t     571 B/op\t      11 allocs/op",
            "extra": "6327 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - ns/op",
            "value": 184648,
            "unit": "ns/op",
            "extra": "6327 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - B/op",
            "value": 571,
            "unit": "B/op",
            "extra": "6327 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "6327 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete",
            "value": 405773,
            "unit": "ns/op\t     501 B/op\t      13 allocs/op",
            "extra": "2946 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - ns/op",
            "value": 405773,
            "unit": "ns/op",
            "extra": "2946 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - B/op",
            "value": 501,
            "unit": "B/op",
            "extra": "2946 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "2946 times\n4 procs"
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
        "date": 1768380246524,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Postgres_Set",
            "value": 204232,
            "unit": "ns/op\t     306 B/op\t       8 allocs/op",
            "extra": "5647 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - ns/op",
            "value": 204232,
            "unit": "ns/op",
            "extra": "5647 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - B/op",
            "value": 306,
            "unit": "B/op",
            "extra": "5647 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "5647 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get",
            "value": 182330,
            "unit": "ns/op\t     571 B/op\t      11 allocs/op",
            "extra": "6328 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - ns/op",
            "value": 182330,
            "unit": "ns/op",
            "extra": "6328 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - B/op",
            "value": 571,
            "unit": "B/op",
            "extra": "6328 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "6328 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete",
            "value": 397730,
            "unit": "ns/op\t     501 B/op\t      13 allocs/op",
            "extra": "2925 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - ns/op",
            "value": 397730,
            "unit": "ns/op",
            "extra": "2925 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - B/op",
            "value": 501,
            "unit": "B/op",
            "extra": "2925 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "2925 times\n4 procs"
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
          "id": "1c892d10d3bc4b240efa16ba29ab10f6350b69c0",
          "message": "Merge pull request #2422 from gofiber/dependabot/go_modules/postgres/github.com/sirupsen/logrus-1.9.4\n\nchore(deps): bump github.com/sirupsen/logrus from 1.9.3 to 1.9.4 in /postgres",
          "timestamp": "2026-01-16T08:21:14+01:00",
          "tree_id": "1f64ffd2e1356081ba2a459de1a9375d340246d1",
          "url": "https://github.com/gofiber/storage/commit/1c892d10d3bc4b240efa16ba29ab10f6350b69c0"
        },
        "date": 1768548443546,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Postgres_Set",
            "value": 203920,
            "unit": "ns/op\t     306 B/op\t       8 allocs/op",
            "extra": "5706 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - ns/op",
            "value": 203920,
            "unit": "ns/op",
            "extra": "5706 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - B/op",
            "value": 306,
            "unit": "B/op",
            "extra": "5706 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "5706 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get",
            "value": 180162,
            "unit": "ns/op\t     572 B/op\t      11 allocs/op",
            "extra": "6112 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - ns/op",
            "value": 180162,
            "unit": "ns/op",
            "extra": "6112 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - B/op",
            "value": 572,
            "unit": "B/op",
            "extra": "6112 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "6112 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete",
            "value": 398281,
            "unit": "ns/op\t     501 B/op\t      13 allocs/op",
            "extra": "2840 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - ns/op",
            "value": 398281,
            "unit": "ns/op",
            "extra": "2840 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - B/op",
            "value": 501,
            "unit": "B/op",
            "extra": "2840 times\n4 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "2840 times\n4 procs"
          }
        ]
      }
    ]
  }
}