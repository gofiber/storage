window.BENCHMARK_DATA = {
  "lastUpdate": 1751881857926,
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
          "id": "84234671713e1e75e9f9c7eaaacc9f18f6c484e1",
          "message": "Merge pull request #1569 from gofiber/add-withcontext",
          "timestamp": "2025-07-07T11:44:47+02:00",
          "tree_id": "7578250e12b0352776171d0651b265ba58951118",
          "url": "https://github.com/gofiber/storage/commit/84234671713e1e75e9f9c7eaaacc9f18f6c484e1"
        },
        "date": 1751881854066,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MSSQL_Set",
            "value": 2554655,
            "unit": "ns/op\t   40767 B/op\t     332 allocs/op",
            "extra": "462 times\n4 procs"
          },
          {
            "name": "Benchmark_MSSQL_Set - ns/op",
            "value": 2554655,
            "unit": "ns/op",
            "extra": "462 times\n4 procs"
          },
          {
            "name": "Benchmark_MSSQL_Set - B/op",
            "value": 40767,
            "unit": "B/op",
            "extra": "462 times\n4 procs"
          },
          {
            "name": "Benchmark_MSSQL_Set - allocs/op",
            "value": 332,
            "unit": "allocs/op",
            "extra": "462 times\n4 procs"
          },
          {
            "name": "Benchmark_MSSQL_Get",
            "value": 1773252,
            "unit": "ns/op\t   41056 B/op\t     334 allocs/op",
            "extra": "679 times\n4 procs"
          },
          {
            "name": "Benchmark_MSSQL_Get - ns/op",
            "value": 1773252,
            "unit": "ns/op",
            "extra": "679 times\n4 procs"
          },
          {
            "name": "Benchmark_MSSQL_Get - B/op",
            "value": 41056,
            "unit": "B/op",
            "extra": "679 times\n4 procs"
          },
          {
            "name": "Benchmark_MSSQL_Get - allocs/op",
            "value": 334,
            "unit": "allocs/op",
            "extra": "679 times\n4 procs"
          },
          {
            "name": "Benchmark_MSSQL_SetAndDelete",
            "value": 5353263,
            "unit": "ns/op\t   77794 B/op\t     636 allocs/op",
            "extra": "237 times\n4 procs"
          },
          {
            "name": "Benchmark_MSSQL_SetAndDelete - ns/op",
            "value": 5353263,
            "unit": "ns/op",
            "extra": "237 times\n4 procs"
          },
          {
            "name": "Benchmark_MSSQL_SetAndDelete - B/op",
            "value": 77794,
            "unit": "B/op",
            "extra": "237 times\n4 procs"
          },
          {
            "name": "Benchmark_MSSQL_SetAndDelete - allocs/op",
            "value": 636,
            "unit": "allocs/op",
            "extra": "237 times\n4 procs"
          }
        ]
      }
    ]
  }
}