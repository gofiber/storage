window.BENCHMARK_DATA = {
  "lastUpdate": 1751882299346,
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
          "id": "fe2db5baf54ab1cd8e6b7996c97805ac429249ae",
          "message": "Merge pull request #1580 from gofiber/dependabot/go_modules/badger/github.com/stretchr/testify-1.10.0\n\nchore(deps): bump github.com/stretchr/testify from 1.9.0 to 1.10.0 in /badger",
          "timestamp": "2025-03-27T09:08:55+01:00",
          "tree_id": "bdc069f2923699d0b8eded4de1c808f0abc8ef4d",
          "url": "https://github.com/gofiber/storage/commit/fe2db5baf54ab1cd8e6b7996c97805ac429249ae"
        },
        "date": 1743063122497,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Badger_Set",
            "value": 8480,
            "unit": "ns/op\t    1399 B/op\t      38 allocs/op",
            "extra": "138366 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - ns/op",
            "value": 8480,
            "unit": "ns/op",
            "extra": "138366 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - B/op",
            "value": 1399,
            "unit": "B/op",
            "extra": "138366 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - allocs/op",
            "value": 38,
            "unit": "allocs/op",
            "extra": "138366 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get",
            "value": 957.6,
            "unit": "ns/op\t     416 B/op\t      12 allocs/op",
            "extra": "1243521 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - ns/op",
            "value": 957.6,
            "unit": "ns/op",
            "extra": "1243521 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - B/op",
            "value": 416,
            "unit": "B/op",
            "extra": "1243521 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "1243521 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete",
            "value": 17457,
            "unit": "ns/op\t    2784 B/op\t      76 allocs/op",
            "extra": "67056 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - ns/op",
            "value": 17457,
            "unit": "ns/op",
            "extra": "67056 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - B/op",
            "value": 2784,
            "unit": "B/op",
            "extra": "67056 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "67056 times\n4 procs"
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
          "id": "84234671713e1e75e9f9c7eaaacc9f18f6c484e1",
          "message": "Merge pull request #1569 from gofiber/add-withcontext",
          "timestamp": "2025-07-07T11:44:47+02:00",
          "tree_id": "7578250e12b0352776171d0651b265ba58951118",
          "url": "https://github.com/gofiber/storage/commit/84234671713e1e75e9f9c7eaaacc9f18f6c484e1"
        },
        "date": 1751882294637,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Badger_Set",
            "value": 8738,
            "unit": "ns/op\t    1414 B/op\t      38 allocs/op",
            "extra": "138465 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - ns/op",
            "value": 8738,
            "unit": "ns/op",
            "extra": "138465 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - B/op",
            "value": 1414,
            "unit": "B/op",
            "extra": "138465 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - allocs/op",
            "value": 38,
            "unit": "allocs/op",
            "extra": "138465 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get",
            "value": 1013,
            "unit": "ns/op\t     416 B/op\t      12 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - ns/op",
            "value": 1013,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - B/op",
            "value": 416,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete",
            "value": 17945,
            "unit": "ns/op\t    2816 B/op\t      76 allocs/op",
            "extra": "67686 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - ns/op",
            "value": 17945,
            "unit": "ns/op",
            "extra": "67686 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - B/op",
            "value": 2816,
            "unit": "B/op",
            "extra": "67686 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "67686 times\n4 procs"
          }
        ]
      }
    ]
  }
}