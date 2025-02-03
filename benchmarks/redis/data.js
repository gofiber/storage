window.BENCHMARK_DATA = {
  "lastUpdate": 1738589435382,
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
          "id": "4f0e6c465fcd504291dc51893b683177f29e8dd1",
          "message": "Merge pull request #1564 from SadikSunbul/main\n\ndocs: Document DragonflyDB support",
          "timestamp": "2025-02-03T14:29:35+01:00",
          "tree_id": "a79bdacc2097a323d5c152a4dc84a5e15ea46617",
          "url": "https://github.com/gofiber/storage/commit/4f0e6c465fcd504291dc51893b683177f29e8dd1"
        },
        "date": 1738589428157,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Redis_Set",
            "value": 53738,
            "unit": "ns/op\t     268 B/op\t      10 allocs/op",
            "extra": "22237 times\n4 procs"
          },
          {
            "name": "Benchmark_Redis_Set - ns/op",
            "value": 53738,
            "unit": "ns/op",
            "extra": "22237 times\n4 procs"
          },
          {
            "name": "Benchmark_Redis_Set - B/op",
            "value": 268,
            "unit": "B/op",
            "extra": "22237 times\n4 procs"
          },
          {
            "name": "Benchmark_Redis_Set - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "22237 times\n4 procs"
          },
          {
            "name": "Benchmark_Redis_Get",
            "value": 56481,
            "unit": "ns/op\t     200 B/op\t       8 allocs/op",
            "extra": "22135 times\n4 procs"
          },
          {
            "name": "Benchmark_Redis_Get - ns/op",
            "value": 56481,
            "unit": "ns/op",
            "extra": "22135 times\n4 procs"
          },
          {
            "name": "Benchmark_Redis_Get - B/op",
            "value": 200,
            "unit": "B/op",
            "extra": "22135 times\n4 procs"
          },
          {
            "name": "Benchmark_Redis_Get - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "22135 times\n4 procs"
          },
          {
            "name": "Benchmark_Redis_SetAndDelete",
            "value": 106520,
            "unit": "ns/op\t     456 B/op\t      18 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "Benchmark_Redis_SetAndDelete - ns/op",
            "value": 106520,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "Benchmark_Redis_SetAndDelete - B/op",
            "value": 456,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "Benchmark_Redis_SetAndDelete - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          }
        ]
      }
    ]
  }
}