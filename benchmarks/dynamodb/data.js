window.BENCHMARK_DATA = {
  "lastUpdate": 1743063584222,
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
          "id": "cd4fe07ff393427be4790e30a4d840272f4d0fdf",
          "message": "Merge pull request #1608 from gofiber/dependabot/go_modules/dynamodb/github.com/aws/aws-sdk-go-v2/feature/dynamodb/attributevalue-1.18.8\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/feature/dynamodb/attributevalue from 1.14.10 to 1.18.8 in /dynamodb",
          "timestamp": "2025-03-27T09:07:31+01:00",
          "tree_id": "4d706ad1e434276d530f9c2057e81e97c88608ea",
          "url": "https://github.com/gofiber/storage/commit/cd4fe07ff393427be4790e30a4d840272f4d0fdf"
        },
        "date": 1743063008808,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 11069019029,
            "unit": "ns/op\t 3399056 B/op\t   27967 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 11069019029,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 3399056,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 27967,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1348768,
            "unit": "ns/op\t   36293 B/op\t     497 allocs/op",
            "extra": "787 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1348768,
            "unit": "ns/op",
            "extra": "787 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 36293,
            "unit": "B/op",
            "extra": "787 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 497,
            "unit": "allocs/op",
            "extra": "787 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 1897100598,
            "unit": "ns/op\t 1773656 B/op\t   15629 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 1897100598,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 1773656,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 15629,
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
          "id": "1e0b4e416b409efa6d7fb9ddf6b48b34829eda00",
          "message": "Merge pull request #1610 from gofiber/dependabot/go_modules/dynamodb/github.com/aws/aws-sdk-go-v2/credentials-1.17.64\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/credentials from 1.17.35 to 1.17.64 in /dynamodb",
          "timestamp": "2025-03-27T09:15:59+01:00",
          "tree_id": "9583b3382319fd85cd42b1777cf0dff15043cc93",
          "url": "https://github.com/gofiber/storage/commit/1e0b4e416b409efa6d7fb9ddf6b48b34829eda00"
        },
        "date": 1743063576934,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 11080439691,
            "unit": "ns/op\t 3485992 B/op\t   28716 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 11080439691,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 3485992,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 28716,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1288865,
            "unit": "ns/op\t   36486 B/op\t     499 allocs/op",
            "extra": "811 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1288865,
            "unit": "ns/op",
            "extra": "811 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 36486,
            "unit": "B/op",
            "extra": "811 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 499,
            "unit": "allocs/op",
            "extra": "811 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 1832932361,
            "unit": "ns/op\t 1742256 B/op\t   15638 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 1832932361,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 1742256,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 15638,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          }
        ]
      }
    ]
  }
}