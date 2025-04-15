window.BENCHMARK_DATA = {
  "lastUpdate": 1744717686033,
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
          "id": "7b1fdb732555f6463aa61b39dbd8e26a57221bb7",
          "message": "Merge pull request #1603 from gofiber/dependabot/go_modules/scylladb/github.com/stretchr/testify-1.10.0\n\nchore(deps): bump github.com/stretchr/testify from 1.9.0 to 1.10.0 in /scylladb",
          "timestamp": "2025-03-26T20:45:24+01:00",
          "tree_id": "c596315163f2fea9988ae825fbe3614fd5c85958",
          "url": "https://github.com/gofiber/storage/commit/7b1fdb732555f6463aa61b39dbd8e26a57221bb7"
        },
        "date": 1743020702386,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Scylla_Set",
            "value": 1345431,
            "unit": "ns/op\t    2900 B/op\t      42 allocs/op",
            "extra": "861 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - ns/op",
            "value": 1345431,
            "unit": "ns/op",
            "extra": "861 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - B/op",
            "value": 2900,
            "unit": "B/op",
            "extra": "861 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "861 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get",
            "value": 1357730,
            "unit": "ns/op\t    2801 B/op\t      42 allocs/op",
            "extra": "883 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - ns/op",
            "value": 1357730,
            "unit": "ns/op",
            "extra": "883 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - B/op",
            "value": 2801,
            "unit": "B/op",
            "extra": "883 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "883 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete",
            "value": 2684651,
            "unit": "ns/op\t    5531 B/op\t      81 allocs/op",
            "extra": "446 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - ns/op",
            "value": 2684651,
            "unit": "ns/op",
            "extra": "446 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - B/op",
            "value": 5531,
            "unit": "B/op",
            "extra": "446 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - allocs/op",
            "value": 81,
            "unit": "allocs/op",
            "extra": "446 times\n4 procs"
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
          "id": "c5fb7a0de1024fab39869796e37476e4bd73ea71",
          "message": "Merge pull request #1640 from mdelapenya/tc-scylladb\n\nfeat(scylladb): use testcontainers-go for testing scylladb",
          "timestamp": "2025-04-15T13:45:39+02:00",
          "tree_id": "0836531c3d438cf89e095808c28a653abc82e412",
          "url": "https://github.com/gofiber/storage/commit/c5fb7a0de1024fab39869796e37476e4bd73ea71"
        },
        "date": 1744717678475,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Scylla_Set",
            "value": 1297809,
            "unit": "ns/op\t    2985 B/op\t      42 allocs/op",
            "extra": "901 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - ns/op",
            "value": 1297809,
            "unit": "ns/op",
            "extra": "901 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - B/op",
            "value": 2985,
            "unit": "B/op",
            "extra": "901 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "901 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get",
            "value": 1303501,
            "unit": "ns/op\t    2938 B/op\t      42 allocs/op",
            "extra": "900 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - ns/op",
            "value": 1303501,
            "unit": "ns/op",
            "extra": "900 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - B/op",
            "value": 2938,
            "unit": "B/op",
            "extra": "900 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "900 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete",
            "value": 2589688,
            "unit": "ns/op\t    5797 B/op\t      82 allocs/op",
            "extra": "458 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - ns/op",
            "value": 2589688,
            "unit": "ns/op",
            "extra": "458 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - B/op",
            "value": 5797,
            "unit": "B/op",
            "extra": "458 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "458 times\n4 procs"
          }
        ]
      }
    ]
  }
}