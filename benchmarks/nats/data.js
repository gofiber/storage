window.BENCHMARK_DATA = {
  "lastUpdate": 1744358938186,
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
        "date": 1742477891529,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Nats_Set",
            "value": 266682,
            "unit": "ns/op\t    2465 B/op\t      45 allocs/op",
            "extra": "4353 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - ns/op",
            "value": 266682,
            "unit": "ns/op",
            "extra": "4353 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - B/op",
            "value": 2465,
            "unit": "B/op",
            "extra": "4353 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - allocs/op",
            "value": 45,
            "unit": "allocs/op",
            "extra": "4353 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get",
            "value": 267189,
            "unit": "ns/op\t    2189 B/op\t      39 allocs/op",
            "extra": "4386 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - ns/op",
            "value": 267189,
            "unit": "ns/op",
            "extra": "4386 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - B/op",
            "value": 2189,
            "unit": "B/op",
            "extra": "4386 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "4386 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete",
            "value": 542870,
            "unit": "ns/op\t    3834 B/op\t      71 allocs/op",
            "extra": "2163 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - ns/op",
            "value": 542870,
            "unit": "ns/op",
            "extra": "2163 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - B/op",
            "value": 3834,
            "unit": "B/op",
            "extra": "2163 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - allocs/op",
            "value": 71,
            "unit": "allocs/op",
            "extra": "2163 times\n4 procs"
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
          "id": "cd342714910ac779c7b63e9479a3a9c9a91b1b47",
          "message": "Merge pull request #1596 from gofiber/dependabot/go_modules/nats/github.com/stretchr/testify-1.10.0\n\nchore(deps): bump github.com/stretchr/testify from 1.9.0 to 1.10.0 in /nats",
          "timestamp": "2025-03-26T20:21:45+01:00",
          "tree_id": "eb1772bbc3da1d2e24626cb0363f522deb97def1",
          "url": "https://github.com/gofiber/storage/commit/cd342714910ac779c7b63e9479a3a9c9a91b1b47"
        },
        "date": 1743019117029,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Nats_Set",
            "value": 268185,
            "unit": "ns/op\t    2465 B/op\t      45 allocs/op",
            "extra": "4321 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - ns/op",
            "value": 268185,
            "unit": "ns/op",
            "extra": "4321 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - B/op",
            "value": 2465,
            "unit": "B/op",
            "extra": "4321 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - allocs/op",
            "value": 45,
            "unit": "allocs/op",
            "extra": "4321 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get",
            "value": 260325,
            "unit": "ns/op\t    2189 B/op\t      39 allocs/op",
            "extra": "4446 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - ns/op",
            "value": 260325,
            "unit": "ns/op",
            "extra": "4446 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - B/op",
            "value": 2189,
            "unit": "B/op",
            "extra": "4446 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "4446 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete",
            "value": 527510,
            "unit": "ns/op\t    3837 B/op\t      71 allocs/op",
            "extra": "2206 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - ns/op",
            "value": 527510,
            "unit": "ns/op",
            "extra": "2206 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - B/op",
            "value": 3837,
            "unit": "B/op",
            "extra": "2206 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - allocs/op",
            "value": 71,
            "unit": "allocs/op",
            "extra": "2206 times\n4 procs"
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
        "date": 1744190331938,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Nats_Set",
            "value": 279118,
            "unit": "ns/op\t    2513 B/op\t      45 allocs/op",
            "extra": "4257 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - ns/op",
            "value": 279118,
            "unit": "ns/op",
            "extra": "4257 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - B/op",
            "value": 2513,
            "unit": "B/op",
            "extra": "4257 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - allocs/op",
            "value": 45,
            "unit": "allocs/op",
            "extra": "4257 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get",
            "value": 268224,
            "unit": "ns/op\t    2236 B/op\t      39 allocs/op",
            "extra": "4350 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - ns/op",
            "value": 268224,
            "unit": "ns/op",
            "extra": "4350 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - B/op",
            "value": 2236,
            "unit": "B/op",
            "extra": "4350 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "4350 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete",
            "value": 547568,
            "unit": "ns/op\t    3932 B/op\t      71 allocs/op",
            "extra": "2169 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - ns/op",
            "value": 547568,
            "unit": "ns/op",
            "extra": "2169 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - B/op",
            "value": 3932,
            "unit": "B/op",
            "extra": "2169 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - allocs/op",
            "value": 71,
            "unit": "allocs/op",
            "extra": "2169 times\n4 procs"
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
          "id": "1adc6bfd94f25e845c38868d1493d9f655fc727a",
          "message": "Merge pull request #1657 from gofiber/dependabot/go_modules/nats/github.com/nats-io/nats.go-1.41.1\n\nchore(deps): bump github.com/nats-io/nats.go from 1.37.0 to 1.41.1 in /nats",
          "timestamp": "2025-04-11T10:07:47+02:00",
          "tree_id": "e7302185ed9fe7dca7a326d187c6f8586313c49d",
          "url": "https://github.com/gofiber/storage/commit/1adc6bfd94f25e845c38868d1493d9f655fc727a"
        },
        "date": 1744358929944,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Nats_Set",
            "value": 271218,
            "unit": "ns/op\t    2529 B/op\t      45 allocs/op",
            "extra": "4173 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - ns/op",
            "value": 271218,
            "unit": "ns/op",
            "extra": "4173 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - B/op",
            "value": 2529,
            "unit": "B/op",
            "extra": "4173 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - allocs/op",
            "value": 45,
            "unit": "allocs/op",
            "extra": "4173 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get",
            "value": 264318,
            "unit": "ns/op\t    2236 B/op\t      39 allocs/op",
            "extra": "4368 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - ns/op",
            "value": 264318,
            "unit": "ns/op",
            "extra": "4368 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - B/op",
            "value": 2236,
            "unit": "B/op",
            "extra": "4368 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "4368 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete",
            "value": 527987,
            "unit": "ns/op\t    3963 B/op\t      71 allocs/op",
            "extra": "2196 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - ns/op",
            "value": 527987,
            "unit": "ns/op",
            "extra": "2196 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - B/op",
            "value": 3963,
            "unit": "B/op",
            "extra": "2196 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - allocs/op",
            "value": 71,
            "unit": "allocs/op",
            "extra": "2196 times\n4 procs"
          }
        ]
      }
    ]
  }
}