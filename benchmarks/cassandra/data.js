window.BENCHMARK_DATA = {
  "lastUpdate": 1745585925776,
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
          "id": "e596d3994687c6c841ec3326f3bed1f957a369c0",
          "message": "Merge pull request #1665 from MitulShah1/implement-cassandra\n\nfeat: Add Apache Cassandra Storage Driver",
          "timestamp": "2025-04-25T14:55:24+02:00",
          "tree_id": "bb254a1c6ec439f892f57897486a3153aa74441d",
          "url": "https://github.com/gofiber/storage/commit/e596d3994687c6c841ec3326f3bed1f957a369c0"
        },
        "date": 1745585918373,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Cassandra_Set",
            "value": 1955643,
            "unit": "ns/op\t    3942 B/op\t      65 allocs/op",
            "extra": "612 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - ns/op",
            "value": 1955643,
            "unit": "ns/op",
            "extra": "612 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - B/op",
            "value": 3942,
            "unit": "B/op",
            "extra": "612 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - allocs/op",
            "value": 65,
            "unit": "allocs/op",
            "extra": "612 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get",
            "value": 2073991,
            "unit": "ns/op\t    3519 B/op\t      57 allocs/op",
            "extra": "494 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - ns/op",
            "value": 2073991,
            "unit": "ns/op",
            "extra": "494 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - B/op",
            "value": 3519,
            "unit": "B/op",
            "extra": "494 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - allocs/op",
            "value": 57,
            "unit": "allocs/op",
            "extra": "494 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete",
            "value": 3898510,
            "unit": "ns/op\t    7056 B/op\t     115 allocs/op",
            "extra": "298 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - ns/op",
            "value": 3898510,
            "unit": "ns/op",
            "extra": "298 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - B/op",
            "value": 7056,
            "unit": "B/op",
            "extra": "298 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - allocs/op",
            "value": 115,
            "unit": "allocs/op",
            "extra": "298 times\n4 procs"
          }
        ]
      }
    ]
  }
}