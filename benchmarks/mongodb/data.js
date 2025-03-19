window.BENCHMARK_DATA = {
  "lastUpdate": 1742368045278,
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
          "id": "cc15d521317f6a16e2fc36529e143483a00777af",
          "message": "Merge pull request #1535 from gofiber/dependabot/go_modules/mongodb/go_modules-5a9c29dde4\n\nchore(deps): bump golang.org/x/crypto from 0.22.0 to 0.31.0 in /mongodb in the go_modules group across 1 directory",
          "timestamp": "2025-01-30T11:21:48+01:00",
          "tree_id": "c6fa81d94fb181106c75a500f45c82bd1659b9da",
          "url": "https://github.com/gofiber/storage/commit/cc15d521317f6a16e2fc36529e143483a00777af"
        },
        "date": 1738232567796,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MongoDB_Set",
            "value": 337836,
            "unit": "ns/op\t    6389 B/op\t      92 allocs/op",
            "extra": "3567 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - ns/op",
            "value": 337836,
            "unit": "ns/op",
            "extra": "3567 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - B/op",
            "value": 6389,
            "unit": "B/op",
            "extra": "3567 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - allocs/op",
            "value": 92,
            "unit": "allocs/op",
            "extra": "3567 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get",
            "value": 266766,
            "unit": "ns/op\t    7281 B/op\t      80 allocs/op",
            "extra": "4384 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - ns/op",
            "value": 266766,
            "unit": "ns/op",
            "extra": "4384 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - B/op",
            "value": 7281,
            "unit": "B/op",
            "extra": "4384 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "4384 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete",
            "value": 712203,
            "unit": "ns/op\t   11350 B/op\t     160 allocs/op",
            "extra": "1782 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - ns/op",
            "value": 712203,
            "unit": "ns/op",
            "extra": "1782 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - B/op",
            "value": 11350,
            "unit": "B/op",
            "extra": "1782 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - allocs/op",
            "value": 160,
            "unit": "allocs/op",
            "extra": "1782 times\n4 procs"
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
          "id": "c1933ed3e87ea6f84e3bde5edee29f19495afa91",
          "message": "Merge pull request #1515 from mdelapenya/tc-go-adoption-2\n\nchore: adopt testcontainers-go for Postgres, MySQL and MongoDB",
          "timestamp": "2025-03-19T08:01:09+01:00",
          "tree_id": "bd7d7600b063b44df0a5960ac0d1d4b43f6fa48c",
          "url": "https://github.com/gofiber/storage/commit/c1933ed3e87ea6f84e3bde5edee29f19495afa91"
        },
        "date": 1742368037221,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MongoDB_Set",
            "value": 345270,
            "unit": "ns/op\t    6389 B/op\t      92 allocs/op",
            "extra": "3400 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - ns/op",
            "value": 345270,
            "unit": "ns/op",
            "extra": "3400 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - B/op",
            "value": 6389,
            "unit": "B/op",
            "extra": "3400 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - allocs/op",
            "value": 92,
            "unit": "allocs/op",
            "extra": "3400 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get",
            "value": 309166,
            "unit": "ns/op\t    7287 B/op\t      80 allocs/op",
            "extra": "3729 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - ns/op",
            "value": 309166,
            "unit": "ns/op",
            "extra": "3729 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - B/op",
            "value": 7287,
            "unit": "B/op",
            "extra": "3729 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "3729 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete",
            "value": 712798,
            "unit": "ns/op\t   11358 B/op\t     160 allocs/op",
            "extra": "1666 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - ns/op",
            "value": 712798,
            "unit": "ns/op",
            "extra": "1666 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - B/op",
            "value": 11358,
            "unit": "B/op",
            "extra": "1666 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - allocs/op",
            "value": 160,
            "unit": "allocs/op",
            "extra": "1666 times\n4 procs"
          }
        ]
      }
    ]
  }
}