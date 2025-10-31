window.BENCHMARK_DATA = {
  "lastUpdate": 1761911904691,
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
          "id": "fd65cef217ffd4a5d2440cff1f2f395327c02a89",
          "message": "Merge pull request #1591 from gofiber/dependabot/go_modules/memory/github.com/stretchr/testify-1.10.0\n\nchore(deps): bump github.com/stretchr/testify from 1.9.0 to 1.10.0 in /memory",
          "timestamp": "2025-03-26T17:52:17+01:00",
          "tree_id": "ff742097bad30c38274f1fab43414224bf1660c0",
          "url": "https://github.com/gofiber/storage/commit/fd65cef217ffd4a5d2440cff1f2f395327c02a89"
        },
        "date": 1743013589923,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Memory_Set",
            "value": 31.1,
            "unit": "ns/op\t       3 B/op\t       1 allocs/op",
            "extra": "38503256 times\n4 procs"
          },
          {
            "name": "Benchmark_Memory_Set - ns/op",
            "value": 31.1,
            "unit": "ns/op",
            "extra": "38503256 times\n4 procs"
          },
          {
            "name": "Benchmark_Memory_Set - B/op",
            "value": 3,
            "unit": "B/op",
            "extra": "38503256 times\n4 procs"
          },
          {
            "name": "Benchmark_Memory_Set - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "38503256 times\n4 procs"
          },
          {
            "name": "Benchmark_Memory_Get",
            "value": 7.792,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "153046984 times\n4 procs"
          },
          {
            "name": "Benchmark_Memory_Get - ns/op",
            "value": 7.792,
            "unit": "ns/op",
            "extra": "153046984 times\n4 procs"
          },
          {
            "name": "Benchmark_Memory_Get - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "153046984 times\n4 procs"
          },
          {
            "name": "Benchmark_Memory_Get - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "153046984 times\n4 procs"
          },
          {
            "name": "Benchmark_Memory_SetAndDelete",
            "value": 53.25,
            "unit": "ns/op\t       3 B/op\t       1 allocs/op",
            "extra": "22161270 times\n4 procs"
          },
          {
            "name": "Benchmark_Memory_SetAndDelete - ns/op",
            "value": 53.25,
            "unit": "ns/op",
            "extra": "22161270 times\n4 procs"
          },
          {
            "name": "Benchmark_Memory_SetAndDelete - B/op",
            "value": 3,
            "unit": "B/op",
            "extra": "22161270 times\n4 procs"
          },
          {
            "name": "Benchmark_Memory_SetAndDelete - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "22161270 times\n4 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber",
            "value": 0.6237,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber - ns/op",
            "value": 0.6237,
            "unit": "ns/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default",
            "value": 56.92,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21074845 times\n4 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default - ns/op",
            "value": 56.92,
            "unit": "ns/op",
            "extra": "21074845 times\n4 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "21074845 times\n4 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "21074845 times\n4 procs"
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
        "date": 1751882393759,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Memory_Set",
            "value": 29.83,
            "unit": "ns/op\t       3 B/op\t       1 allocs/op",
            "extra": "39210423 times\n4 procs"
          },
          {
            "name": "Benchmark_Memory_Set - ns/op",
            "value": 29.83,
            "unit": "ns/op",
            "extra": "39210423 times\n4 procs"
          },
          {
            "name": "Benchmark_Memory_Set - B/op",
            "value": 3,
            "unit": "B/op",
            "extra": "39210423 times\n4 procs"
          },
          {
            "name": "Benchmark_Memory_Set - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39210423 times\n4 procs"
          },
          {
            "name": "Benchmark_Memory_Get",
            "value": 7.781,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "152605801 times\n4 procs"
          },
          {
            "name": "Benchmark_Memory_Get - ns/op",
            "value": 7.781,
            "unit": "ns/op",
            "extra": "152605801 times\n4 procs"
          },
          {
            "name": "Benchmark_Memory_Get - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "152605801 times\n4 procs"
          },
          {
            "name": "Benchmark_Memory_Get - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "152605801 times\n4 procs"
          },
          {
            "name": "Benchmark_Memory_SetAndDelete",
            "value": 60.68,
            "unit": "ns/op\t       3 B/op\t       1 allocs/op",
            "extra": "19067336 times\n4 procs"
          },
          {
            "name": "Benchmark_Memory_SetAndDelete - ns/op",
            "value": 60.68,
            "unit": "ns/op",
            "extra": "19067336 times\n4 procs"
          },
          {
            "name": "Benchmark_Memory_SetAndDelete - B/op",
            "value": 3,
            "unit": "B/op",
            "extra": "19067336 times\n4 procs"
          },
          {
            "name": "Benchmark_Memory_SetAndDelete - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "19067336 times\n4 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber",
            "value": 0.3205,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber - ns/op",
            "value": 0.3205,
            "unit": "ns/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default",
            "value": 55.36,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21580756 times\n4 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default - ns/op",
            "value": 55.36,
            "unit": "ns/op",
            "extra": "21580756 times\n4 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "21580756 times\n4 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "21580756 times\n4 procs"
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
          "id": "bdfeda14af8bb0d04385e004b88f0b205b0fbfa3",
          "message": "Merge pull request #1948 from sixcolors/fix/memory-storage-pool-corruption",
          "timestamp": "2025-10-31T12:57:24+01:00",
          "tree_id": "778eb86c7ed7ae333fc4892ab148f3a0a34bc385",
          "url": "https://github.com/gofiber/storage/commit/bdfeda14af8bb0d04385e004b88f0b205b0fbfa3"
        },
        "date": 1761911900938,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Memory_Set",
            "value": 47.05,
            "unit": "ns/op\t       8 B/op\t       2 allocs/op",
            "extra": "24991736 times\n4 procs"
          },
          {
            "name": "Benchmark_Memory_Set - ns/op",
            "value": 47.05,
            "unit": "ns/op",
            "extra": "24991736 times\n4 procs"
          },
          {
            "name": "Benchmark_Memory_Set - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "24991736 times\n4 procs"
          },
          {
            "name": "Benchmark_Memory_Set - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "24991736 times\n4 procs"
          },
          {
            "name": "Benchmark_Memory_Get",
            "value": 23.64,
            "unit": "ns/op\t       3 B/op\t       1 allocs/op",
            "extra": "48764226 times\n4 procs"
          },
          {
            "name": "Benchmark_Memory_Get - ns/op",
            "value": 23.64,
            "unit": "ns/op",
            "extra": "48764226 times\n4 procs"
          },
          {
            "name": "Benchmark_Memory_Get - B/op",
            "value": 3,
            "unit": "B/op",
            "extra": "48764226 times\n4 procs"
          },
          {
            "name": "Benchmark_Memory_Get - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "48764226 times\n4 procs"
          },
          {
            "name": "Benchmark_Memory_SetAndDelete",
            "value": 78.02,
            "unit": "ns/op\t       8 B/op\t       2 allocs/op",
            "extra": "14798025 times\n4 procs"
          },
          {
            "name": "Benchmark_Memory_SetAndDelete - ns/op",
            "value": 78.02,
            "unit": "ns/op",
            "extra": "14798025 times\n4 procs"
          },
          {
            "name": "Benchmark_Memory_SetAndDelete - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "14798025 times\n4 procs"
          },
          {
            "name": "Benchmark_Memory_SetAndDelete - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "14798025 times\n4 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber",
            "value": 0.3222,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber - ns/op",
            "value": 0.3222,
            "unit": "ns/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default",
            "value": 55.41,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21659257 times\n4 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default - ns/op",
            "value": 55.41,
            "unit": "ns/op",
            "extra": "21659257 times\n4 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "21659257 times\n4 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "21659257 times\n4 procs"
          }
        ]
      }
    ]
  }
}