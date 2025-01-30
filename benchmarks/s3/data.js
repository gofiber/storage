window.BENCHMARK_DATA = {
  "lastUpdate": 1738245559230,
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
          "id": "e1e51a0d68f8fa33b6f88dcd5adac31b2605af50",
          "message": "Merge pull request #1536 from mdelapenya/refactor-benchmark-workflow\n\nchore(ci): run benchmarks for each storage in separate workers",
          "timestamp": "2025-01-30T08:39:56+01:00",
          "tree_id": "7672c849fab81f76fd009aaa120441f42bbf921e",
          "url": "https://github.com/gofiber/storage/commit/e1e51a0d68f8fa33b6f88dcd5adac31b2605af50"
        },
        "date": 1738222864803,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2514403,
            "unit": "ns/op\t   75312 B/op\t     663 allocs/op",
            "extra": "463 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2514403,
            "unit": "ns/op",
            "extra": "463 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 75312,
            "unit": "B/op",
            "extra": "463 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 663,
            "unit": "allocs/op",
            "extra": "463 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 805513,
            "unit": "ns/op\t   71451 B/op\t     609 allocs/op",
            "extra": "1484 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 805513,
            "unit": "ns/op",
            "extra": "1484 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 71451,
            "unit": "B/op",
            "extra": "1484 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 609,
            "unit": "allocs/op",
            "extra": "1484 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2824883,
            "unit": "ns/op\t  108433 B/op\t    1127 allocs/op",
            "extra": "430 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2824883,
            "unit": "ns/op",
            "extra": "430 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 108433,
            "unit": "B/op",
            "extra": "430 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1127,
            "unit": "allocs/op",
            "extra": "430 times\n4 procs"
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
          "id": "d4b254694fee0450af5890f1d4099bc3cf9d8423",
          "message": "Merge pull request #1563 from gofiber/dependabot/go_modules/s3/github.com/aws/aws-sdk-go-v2/credentials-1.17.55\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/credentials from 1.17.27 to 1.17.55 in /s3",
          "timestamp": "2025-01-30T14:58:08+01:00",
          "tree_id": "6c0e49d5c2403f6a80f7fffb0d1625783c9455bb",
          "url": "https://github.com/gofiber/storage/commit/d4b254694fee0450af5890f1d4099bc3cf9d8423"
        },
        "date": 1738245552069,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2098856,
            "unit": "ns/op\t   76387 B/op\t     706 allocs/op",
            "extra": "535 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2098856,
            "unit": "ns/op",
            "extra": "535 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 76387,
            "unit": "B/op",
            "extra": "535 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 706,
            "unit": "allocs/op",
            "extra": "535 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 796481,
            "unit": "ns/op\t   72549 B/op\t     652 allocs/op",
            "extra": "1448 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 796481,
            "unit": "ns/op",
            "extra": "1448 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 72549,
            "unit": "B/op",
            "extra": "1448 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 652,
            "unit": "allocs/op",
            "extra": "1448 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2622197,
            "unit": "ns/op\t  110756 B/op\t    1213 allocs/op",
            "extra": "483 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2622197,
            "unit": "ns/op",
            "extra": "483 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 110756,
            "unit": "B/op",
            "extra": "483 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1213,
            "unit": "allocs/op",
            "extra": "483 times\n4 procs"
          }
        ]
      }
    ]
  }
}