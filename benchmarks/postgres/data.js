window.BENCHMARK_DATA = {
  "lastUpdate": 1738592909408,
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
      }
    ]
  }
}