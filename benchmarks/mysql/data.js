window.BENCHMARK_DATA = {
  "lastUpdate": 1742368112727,
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
          "id": "c1933ed3e87ea6f84e3bde5edee29f19495afa91",
          "message": "Merge pull request #1515 from mdelapenya/tc-go-adoption-2\n\nchore: adopt testcontainers-go for Postgres, MySQL and MongoDB",
          "timestamp": "2025-03-19T08:01:09+01:00",
          "tree_id": "bd7d7600b063b44df0a5960ac0d1d4b43f6fa48c",
          "url": "https://github.com/gofiber/storage/commit/c1933ed3e87ea6f84e3bde5edee29f19495afa91"
        },
        "date": 1742368105098,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MYSQL_Set",
            "value": 1003289,
            "unit": "ns/op\t    9539 B/op\t      97 allocs/op",
            "extra": "1126 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - ns/op",
            "value": 1003289,
            "unit": "ns/op",
            "extra": "1126 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - B/op",
            "value": 9539,
            "unit": "B/op",
            "extra": "1126 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - allocs/op",
            "value": 97,
            "unit": "allocs/op",
            "extra": "1126 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get",
            "value": 1129443,
            "unit": "ns/op\t   10257 B/op\t     119 allocs/op",
            "extra": "1063 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - ns/op",
            "value": 1129443,
            "unit": "ns/op",
            "extra": "1063 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - B/op",
            "value": 10257,
            "unit": "B/op",
            "extra": "1063 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - allocs/op",
            "value": 119,
            "unit": "allocs/op",
            "extra": "1063 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete",
            "value": 3625939,
            "unit": "ns/op\t   19938 B/op\t     215 allocs/op",
            "extra": "326 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - ns/op",
            "value": 3625939,
            "unit": "ns/op",
            "extra": "326 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - B/op",
            "value": 19938,
            "unit": "B/op",
            "extra": "326 times\n4 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - allocs/op",
            "value": 215,
            "unit": "allocs/op",
            "extra": "326 times\n4 procs"
          }
        ]
      }
    ]
  }
}