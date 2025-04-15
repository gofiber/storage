window.BENCHMARK_DATA = {
  "lastUpdate": 1744697172146,
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
          "id": "d844832d3ea84d62a47522e722d3a6a18a202d8b",
          "message": "Merge pull request #1663 from MitulShah1/implement-aerospikedb\n\nfeat: Add Aerospike driver",
          "timestamp": "2025-04-15T08:04:23+02:00",
          "tree_id": "d8ba195a41a642d7bb43021a16657ec1044a8318",
          "url": "https://github.com/gofiber/storage/commit/d844832d3ea84d62a47522e722d3a6a18a202d8b"
        },
        "date": 1744697164358,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_AeroSpikeDB_Set",
            "value": 16902374197,
            "unit": "ns/op\t15433904 B/op\t   96571 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_AeroSpikeDB_Set - ns/op",
            "value": 16902374197,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_AeroSpikeDB_Set - B/op",
            "value": 15433904,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_AeroSpikeDB_Set - allocs/op",
            "value": 96571,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_AeroSpikeDB_Get",
            "value": 119221,
            "unit": "ns/op\t     977 B/op\t      13 allocs/op",
            "extra": "9812 times\n4 procs"
          },
          {
            "name": "Benchmark_AeroSpikeDB_Get - ns/op",
            "value": 119221,
            "unit": "ns/op",
            "extra": "9812 times\n4 procs"
          },
          {
            "name": "Benchmark_AeroSpikeDB_Get - B/op",
            "value": 977,
            "unit": "B/op",
            "extra": "9812 times\n4 procs"
          },
          {
            "name": "Benchmark_AeroSpikeDB_Get - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "9812 times\n4 procs"
          },
          {
            "name": "Benchmark_AeroSpikeDB_SetAndDelete",
            "value": 10742710544,
            "unit": "ns/op\t13701088 B/op\t   83851 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_AeroSpikeDB_SetAndDelete - ns/op",
            "value": 10742710544,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_AeroSpikeDB_SetAndDelete - B/op",
            "value": 13701088,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_AeroSpikeDB_SetAndDelete - allocs/op",
            "value": 83851,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          }
        ]
      }
    ]
  }
}