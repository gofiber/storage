window.BENCHMARK_DATA = {
  "lastUpdate": 1743017981962,
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
          "id": "337dc45da838c1b0bc7ee84ab5cd4b469a22b8cd",
          "message": "Merge pull request #1590 from gofiber/dependabot/go_modules/memcache/github.com/stretchr/testify-1.10.0\n\nchore(deps): bump github.com/stretchr/testify from 1.9.0 to 1.10.0 in /memcache",
          "timestamp": "2025-03-26T20:06:11+01:00",
          "tree_id": "1c0dc4caa4da89dcbba6fd1ebdaf28b939a30a04",
          "url": "https://github.com/gofiber/storage/commit/337dc45da838c1b0bc7ee84ab5cd4b469a22b8cd"
        },
        "date": 1743017974938,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Memcache_Set",
            "value": 113298,
            "unit": "ns/op\t      35 B/op\t       3 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "Benchmark_Memcache_Set - ns/op",
            "value": 113298,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "Benchmark_Memcache_Set - B/op",
            "value": 35,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "Benchmark_Memcache_Set - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "Benchmark_Memcache_Get",
            "value": 116753,
            "unit": "ns/op\t     200 B/op\t       9 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "Benchmark_Memcache_Get - ns/op",
            "value": 116753,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "Benchmark_Memcache_Get - B/op",
            "value": 200,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "Benchmark_Memcache_Get - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "Benchmark_Memcache_SetAndDelete",
            "value": 219527,
            "unit": "ns/op\t      51 B/op\t       4 allocs/op",
            "extra": "5300 times\n4 procs"
          },
          {
            "name": "Benchmark_Memcache_SetAndDelete - ns/op",
            "value": 219527,
            "unit": "ns/op",
            "extra": "5300 times\n4 procs"
          },
          {
            "name": "Benchmark_Memcache_SetAndDelete - B/op",
            "value": 51,
            "unit": "B/op",
            "extra": "5300 times\n4 procs"
          },
          {
            "name": "Benchmark_Memcache_SetAndDelete - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5300 times\n4 procs"
          }
        ]
      }
    ]
  }
}