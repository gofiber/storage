window.BENCHMARK_DATA = {
  "lastUpdate": 1745913959056,
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
          "id": "e21a9065b52622c9e1e1ad671a7da27ecba91f90",
          "message": "Merge pull request #1672 from mdelapenya/testing-patterns\n\nchore(testing): use require in tests",
          "timestamp": "2025-04-16T07:40:42+02:00",
          "tree_id": "54a79e7c0ee58dbd297fbf52b9ba836e7b4965d9",
          "url": "https://github.com/gofiber/storage/commit/e21a9065b52622c9e1e1ad671a7da27ecba91f90"
        },
        "date": 1744782326257,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Scylla_Set",
            "value": 1304431,
            "unit": "ns/op\t    2990 B/op\t      42 allocs/op",
            "extra": "894 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - ns/op",
            "value": 1304431,
            "unit": "ns/op",
            "extra": "894 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - B/op",
            "value": 2990,
            "unit": "B/op",
            "extra": "894 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "894 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get",
            "value": 1306987,
            "unit": "ns/op\t    2930 B/op\t      42 allocs/op",
            "extra": "896 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - ns/op",
            "value": 1306987,
            "unit": "ns/op",
            "extra": "896 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - B/op",
            "value": 2930,
            "unit": "B/op",
            "extra": "896 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "896 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete",
            "value": 2598604,
            "unit": "ns/op\t    5789 B/op\t      81 allocs/op",
            "extra": "451 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - ns/op",
            "value": 2598604,
            "unit": "ns/op",
            "extra": "451 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - B/op",
            "value": 5789,
            "unit": "B/op",
            "extra": "451 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - allocs/op",
            "value": 81,
            "unit": "allocs/op",
            "extra": "451 times\n4 procs"
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
          "id": "195845e882d614336da1bd756e9ffb5a47b32a31",
          "message": "Merge pull request #1689 from gofiber/update-deps\n\n🧹 chore: Update dependencies",
          "timestamp": "2025-04-26T19:16:58+02:00",
          "tree_id": "3e603b094731a7abb4077ec1ce864ef69cdd1b74",
          "url": "https://github.com/gofiber/storage/commit/195845e882d614336da1bd756e9ffb5a47b32a31"
        },
        "date": 1745688165116,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Scylla_Set",
            "value": 1302997,
            "unit": "ns/op\t    2988 B/op\t      42 allocs/op",
            "extra": "898 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - ns/op",
            "value": 1302997,
            "unit": "ns/op",
            "extra": "898 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - B/op",
            "value": 2988,
            "unit": "B/op",
            "extra": "898 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "898 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get",
            "value": 1308317,
            "unit": "ns/op\t    2935 B/op\t      42 allocs/op",
            "extra": "891 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - ns/op",
            "value": 1308317,
            "unit": "ns/op",
            "extra": "891 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - B/op",
            "value": 2935,
            "unit": "B/op",
            "extra": "891 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "891 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete",
            "value": 2656843,
            "unit": "ns/op\t    5780 B/op\t      81 allocs/op",
            "extra": "457 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - ns/op",
            "value": 2656843,
            "unit": "ns/op",
            "extra": "457 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - B/op",
            "value": 5780,
            "unit": "B/op",
            "extra": "457 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - allocs/op",
            "value": 81,
            "unit": "allocs/op",
            "extra": "457 times\n4 procs"
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
          "id": "2f180f45ec24de78d4f732f0ee30ad76f610018f",
          "message": "Merge pull request #1703 from gofiber/dependabot/go_modules/scylladb/github.com/testcontainers/testcontainers-go-0.37.0\n\nchore(deps): bump github.com/testcontainers/testcontainers-go from 0.36.0 to 0.37.0 in /scylladb",
          "timestamp": "2025-04-28T12:53:36+02:00",
          "tree_id": "d2edde612b6dd23670f0242d1495bef6f13f2825",
          "url": "https://github.com/gofiber/storage/commit/2f180f45ec24de78d4f732f0ee30ad76f610018f"
        },
        "date": 1745837976535,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Scylla_Set",
            "value": 1301123,
            "unit": "ns/op\t    2982 B/op\t      42 allocs/op",
            "extra": "903 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - ns/op",
            "value": 1301123,
            "unit": "ns/op",
            "extra": "903 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - B/op",
            "value": 2982,
            "unit": "B/op",
            "extra": "903 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "903 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get",
            "value": 1304345,
            "unit": "ns/op\t    2937 B/op\t      42 allocs/op",
            "extra": "902 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - ns/op",
            "value": 1304345,
            "unit": "ns/op",
            "extra": "902 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - B/op",
            "value": 2937,
            "unit": "B/op",
            "extra": "902 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "902 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete",
            "value": 2591186,
            "unit": "ns/op\t    5780 B/op\t      81 allocs/op",
            "extra": "458 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - ns/op",
            "value": 2591186,
            "unit": "ns/op",
            "extra": "458 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - B/op",
            "value": 5780,
            "unit": "B/op",
            "extra": "458 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - allocs/op",
            "value": 81,
            "unit": "allocs/op",
            "extra": "458 times\n4 procs"
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
          "id": "5c8bb189aebb1e9a18fd26702662807efac466d1",
          "message": "Merge pull request #1718 from gofiber/dependabot/go_modules/neo4j/testcontainers-modules-b4945474bc\n\nchore(deps): bump the testcontainers-modules group across 3 directories with 3 updates",
          "timestamp": "2025-04-29T10:03:24+02:00",
          "tree_id": "0f929e62fecd783f8f05885c619857017d6ecb20",
          "url": "https://github.com/gofiber/storage/commit/5c8bb189aebb1e9a18fd26702662807efac466d1"
        },
        "date": 1745913950912,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Scylla_Set",
            "value": 1304143,
            "unit": "ns/op\t    2990 B/op\t      42 allocs/op",
            "extra": "895 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - ns/op",
            "value": 1304143,
            "unit": "ns/op",
            "extra": "895 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - B/op",
            "value": 2990,
            "unit": "B/op",
            "extra": "895 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "895 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get",
            "value": 1315362,
            "unit": "ns/op\t    2934 B/op\t      42 allocs/op",
            "extra": "890 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - ns/op",
            "value": 1315362,
            "unit": "ns/op",
            "extra": "890 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - B/op",
            "value": 2934,
            "unit": "B/op",
            "extra": "890 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "890 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete",
            "value": 2615450,
            "unit": "ns/op\t    5789 B/op\t      81 allocs/op",
            "extra": "453 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - ns/op",
            "value": 2615450,
            "unit": "ns/op",
            "extra": "453 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - B/op",
            "value": 5789,
            "unit": "B/op",
            "extra": "453 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - allocs/op",
            "value": 81,
            "unit": "allocs/op",
            "extra": "453 times\n4 procs"
          }
        ]
      }
    ]
  }
}