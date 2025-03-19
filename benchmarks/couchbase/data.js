window.BENCHMARK_DATA = {
  "lastUpdate": 1742368449434,
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
        "date": 1742368441733,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Couchbase_Set",
            "value": 266994,
            "unit": "ns/op\t    4186 B/op\t      78 allocs/op",
            "extra": "4430 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - ns/op",
            "value": 266994,
            "unit": "ns/op",
            "extra": "4430 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - B/op",
            "value": 4186,
            "unit": "B/op",
            "extra": "4430 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - allocs/op",
            "value": 78,
            "unit": "allocs/op",
            "extra": "4430 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get",
            "value": 225689,
            "unit": "ns/op\t    3758 B/op\t      72 allocs/op",
            "extra": "5737 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - ns/op",
            "value": 225689,
            "unit": "ns/op",
            "extra": "5737 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - B/op",
            "value": 3758,
            "unit": "B/op",
            "extra": "5737 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - allocs/op",
            "value": 72,
            "unit": "allocs/op",
            "extra": "5737 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete",
            "value": 525007,
            "unit": "ns/op\t    7976 B/op\t     151 allocs/op",
            "extra": "2202 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - ns/op",
            "value": 525007,
            "unit": "ns/op",
            "extra": "2202 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - B/op",
            "value": 7976,
            "unit": "B/op",
            "extra": "2202 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - allocs/op",
            "value": 151,
            "unit": "allocs/op",
            "extra": "2202 times\n4 procs"
          }
        ]
      }
    ]
  }
}