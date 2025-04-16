window.BENCHMARK_DATA = {
  "lastUpdate": 1744782286129,
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
      }
    ]
  }
}