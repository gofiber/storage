window.BENCHMARK_DATA = {
  "lastUpdate": 1747996626262,
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
          "id": "f19bcd66747e732c4dfb738daee0c2fc8cbb71e2",
          "message": "Merge pull request #1723 from mdelapenya/fix-ruedis-benchmarks\n\nfeat(redis): use testcontainers in rueidis and valkey",
          "timestamp": "2025-05-23T12:36:13+02:00",
          "tree_id": "5da9a15c29c257b4bcde4de69303177871c1ed28",
          "url": "https://github.com/gofiber/storage/commit/f19bcd66747e732c4dfb738daee0c2fc8cbb71e2"
        },
        "date": 1747996618769,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Rueidis_Set",
            "value": 129152,
            "unit": "ns/op\t     307 B/op\t       1 allocs/op",
            "extra": "9272 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - ns/op",
            "value": 129152,
            "unit": "ns/op",
            "extra": "9272 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - B/op",
            "value": 307,
            "unit": "B/op",
            "extra": "9272 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "9272 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get",
            "value": 136687,
            "unit": "ns/op\t     717 B/op\t      11 allocs/op",
            "extra": "8377 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - ns/op",
            "value": 136687,
            "unit": "ns/op",
            "extra": "8377 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - B/op",
            "value": 717,
            "unit": "B/op",
            "extra": "8377 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "8377 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete",
            "value": 256316,
            "unit": "ns/op\t     690 B/op\t       3 allocs/op",
            "extra": "4106 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - ns/op",
            "value": 256316,
            "unit": "ns/op",
            "extra": "4106 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - B/op",
            "value": 690,
            "unit": "B/op",
            "extra": "4106 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "4106 times\n4 procs"
          }
        ]
      }
    ]
  }
}