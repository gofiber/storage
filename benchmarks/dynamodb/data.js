window.BENCHMARK_DATA = {
  "lastUpdate": 1743013652418,
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
          "id": "30e6e5ad85267d8ca266e609b4b5e94ec32992f1",
          "message": "Merge pull request #1588 from gofiber/dependabot/go_modules/dynamodb/github.com/stretchr/testify-1.10.0\n\nchore(deps): bump github.com/stretchr/testify from 1.9.0 to 1.10.0 in /dynamodb",
          "timestamp": "2025-03-26T17:54:28+01:00",
          "tree_id": "255789325bd3992b95274f0eef951248a2aa0e57",
          "url": "https://github.com/gofiber/storage/commit/30e6e5ad85267d8ca266e609b4b5e94ec32992f1"
        },
        "date": 1743013645134,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 10829876733,
            "unit": "ns/op\t 3384888 B/op\t   27664 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 10829876733,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 3384888,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 27664,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1277312,
            "unit": "ns/op\t   34495 B/op\t     460 allocs/op",
            "extra": "824 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1277312,
            "unit": "ns/op",
            "extra": "824 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 34495,
            "unit": "B/op",
            "extra": "824 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 460,
            "unit": "allocs/op",
            "extra": "824 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 1866747208,
            "unit": "ns/op\t 1610728 B/op\t   14603 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 1866747208,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 1610728,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 14603,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          }
        ]
      }
    ]
  }
}