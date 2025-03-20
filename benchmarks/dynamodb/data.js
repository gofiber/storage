window.BENCHMARK_DATA = {
  "lastUpdate": 1742477905385,
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
          "id": "5b03e3c2585de6351a01c2e5d098ebdb222c8308",
          "message": "Merge pull request #1574 from mdelapenya/tc-go-adoption-3\n\nfeat: add testcontainers-go tests to DynamoDB and NATS",
          "timestamp": "2025-03-20T14:36:52+01:00",
          "tree_id": "4fbcbe6a6f2161b029f0f7a34e8a5e5b6e067d20",
          "url": "https://github.com/gofiber/storage/commit/5b03e3c2585de6351a01c2e5d098ebdb222c8308"
        },
        "date": 1742477898153,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 9680763592,
            "unit": "ns/op\t 3392896 B/op\t   27674 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 9680763592,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 3392896,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 27674,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1242375,
            "unit": "ns/op\t   34455 B/op\t     460 allocs/op",
            "extra": "810 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1242375,
            "unit": "ns/op",
            "extra": "810 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 34455,
            "unit": "B/op",
            "extra": "810 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 460,
            "unit": "allocs/op",
            "extra": "810 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 1847071840,
            "unit": "ns/op\t 1823432 B/op\t   15361 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 1847071840,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 1823432,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 15361,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          }
        ]
      }
    ]
  }
}