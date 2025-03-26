window.BENCHMARK_DATA = {
  "lastUpdate": 1743019386072,
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
      }
    ]
  }
}