window.BENCHMARK_DATA = {
  "lastUpdate": 1769757442965,
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
        "date": 1751882357783,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Scylla_Set",
            "value": 1310222,
            "unit": "ns/op\t    3304 B/op\t      43 allocs/op",
            "extra": "895 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - ns/op",
            "value": 1310222,
            "unit": "ns/op",
            "extra": "895 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - B/op",
            "value": 3304,
            "unit": "B/op",
            "extra": "895 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - allocs/op",
            "value": 43,
            "unit": "allocs/op",
            "extra": "895 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get",
            "value": 1315113,
            "unit": "ns/op\t    3265 B/op\t      43 allocs/op",
            "extra": "891 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - ns/op",
            "value": 1315113,
            "unit": "ns/op",
            "extra": "891 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - B/op",
            "value": 3265,
            "unit": "B/op",
            "extra": "891 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - allocs/op",
            "value": 43,
            "unit": "allocs/op",
            "extra": "891 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete",
            "value": 2619129,
            "unit": "ns/op\t    6435 B/op\t      84 allocs/op",
            "extra": "456 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - ns/op",
            "value": 2619129,
            "unit": "ns/op",
            "extra": "456 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - B/op",
            "value": 6435,
            "unit": "B/op",
            "extra": "456 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - allocs/op",
            "value": 84,
            "unit": "allocs/op",
            "extra": "456 times\n4 procs"
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
          "id": "e3f0243edf140f89f93da9884e4880768383a33d",
          "message": "Merge pull request #1821 from gofiber/dependabot/go_modules/aerospike/testcontainers-modules-88f01908c2\n\nchore(deps): bump the testcontainers-modules group across 22 directories with 17 updates",
          "timestamp": "2025-07-16T10:01:38+02:00",
          "tree_id": "d8ef317e71a85e0e393e760722107b87bd86b70b",
          "url": "https://github.com/gofiber/storage/commit/e3f0243edf140f89f93da9884e4880768383a33d"
        },
        "date": 1752653403518,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Scylla_Set",
            "value": 1307802,
            "unit": "ns/op\t    3312 B/op\t      43 allocs/op",
            "extra": "896 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - ns/op",
            "value": 1307802,
            "unit": "ns/op",
            "extra": "896 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - B/op",
            "value": 3312,
            "unit": "B/op",
            "extra": "896 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - allocs/op",
            "value": 43,
            "unit": "allocs/op",
            "extra": "896 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get",
            "value": 1313354,
            "unit": "ns/op\t    3259 B/op\t      43 allocs/op",
            "extra": "894 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - ns/op",
            "value": 1313354,
            "unit": "ns/op",
            "extra": "894 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - B/op",
            "value": 3259,
            "unit": "B/op",
            "extra": "894 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - allocs/op",
            "value": 43,
            "unit": "allocs/op",
            "extra": "894 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete",
            "value": 2618501,
            "unit": "ns/op\t    6432 B/op\t      83 allocs/op",
            "extra": "451 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - ns/op",
            "value": 2618501,
            "unit": "ns/op",
            "extra": "451 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - B/op",
            "value": 6432,
            "unit": "B/op",
            "extra": "451 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - allocs/op",
            "value": 83,
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
          "id": "95081997d0aaafd4da20e40781587157a9710d7c",
          "message": "Merge pull request #1960 from gofiber/dependabot/go_modules/scylladb/github.com/docker/docker-28.3.3incompatible\n\nchore(deps): bump github.com/docker/docker from 28.2.2+incompatible to 28.3.3+incompatible in /scylladb",
          "timestamp": "2025-11-06T09:01:19+01:00",
          "tree_id": "84d40792178faabdbd2e47f4fcbbd6da8ab6487c",
          "url": "https://github.com/gofiber/storage/commit/95081997d0aaafd4da20e40781587157a9710d7c"
        },
        "date": 1762417544124,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Scylla_Set",
            "value": 1302016,
            "unit": "ns/op\t    3306 B/op\t      43 allocs/op",
            "extra": "900 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - ns/op",
            "value": 1302016,
            "unit": "ns/op",
            "extra": "900 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - B/op",
            "value": 3306,
            "unit": "B/op",
            "extra": "900 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - allocs/op",
            "value": 43,
            "unit": "allocs/op",
            "extra": "900 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get",
            "value": 1306731,
            "unit": "ns/op\t    3256 B/op\t      43 allocs/op",
            "extra": "900 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - ns/op",
            "value": 1306731,
            "unit": "ns/op",
            "extra": "900 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - B/op",
            "value": 3256,
            "unit": "B/op",
            "extra": "900 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - allocs/op",
            "value": 43,
            "unit": "allocs/op",
            "extra": "900 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete",
            "value": 2609605,
            "unit": "ns/op\t    6427 B/op\t      83 allocs/op",
            "extra": "456 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - ns/op",
            "value": 2609605,
            "unit": "ns/op",
            "extra": "456 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - B/op",
            "value": 6427,
            "unit": "B/op",
            "extra": "456 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "456 times\n4 procs"
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
          "id": "ef367ee0b60bc660d872943863233379d33d0896",
          "message": "Merge pull request #1986 from gofiber/dependabot/go_modules/scylladb/github.com/docker/docker-28.5.2incompatible\n\nchore(deps): bump github.com/docker/docker from 28.3.3+incompatible to 28.5.2+incompatible in /scylladb",
          "timestamp": "2025-11-06T09:19:04+01:00",
          "tree_id": "11797a7064e91d588ecc2e90cbd4768a06894f50",
          "url": "https://github.com/gofiber/storage/commit/ef367ee0b60bc660d872943863233379d33d0896"
        },
        "date": 1762418263028,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Scylla_Set",
            "value": 1319054,
            "unit": "ns/op\t    3301 B/op\t      43 allocs/op",
            "extra": "891 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - ns/op",
            "value": 1319054,
            "unit": "ns/op",
            "extra": "891 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - B/op",
            "value": 3301,
            "unit": "B/op",
            "extra": "891 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - allocs/op",
            "value": 43,
            "unit": "allocs/op",
            "extra": "891 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get",
            "value": 1326342,
            "unit": "ns/op\t    3262 B/op\t      43 allocs/op",
            "extra": "885 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - ns/op",
            "value": 1326342,
            "unit": "ns/op",
            "extra": "885 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - B/op",
            "value": 3262,
            "unit": "B/op",
            "extra": "885 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - allocs/op",
            "value": 43,
            "unit": "allocs/op",
            "extra": "885 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete",
            "value": 2623546,
            "unit": "ns/op\t    6434 B/op\t      83 allocs/op",
            "extra": "450 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - ns/op",
            "value": 2623546,
            "unit": "ns/op",
            "extra": "450 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - B/op",
            "value": 6434,
            "unit": "B/op",
            "extra": "450 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "450 times\n4 procs"
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
          "id": "7e6d07112f62869e00fa027f7f85a984d4acb368",
          "message": "Merge pull request #2000 from gofiber/dependabot/go_modules/aerospike/testify-modules-2ec82dedaf",
          "timestamp": "2025-11-20T10:50:08+01:00",
          "tree_id": "880dd783f33ef93ec7c7d19a51908b75834f5490",
          "url": "https://github.com/gofiber/storage/commit/7e6d07112f62869e00fa027f7f85a984d4acb368"
        },
        "date": 1763657673648,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Scylla_Set",
            "value": 1304826,
            "unit": "ns/op\t    3301 B/op\t      43 allocs/op",
            "extra": "900 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - ns/op",
            "value": 1304826,
            "unit": "ns/op",
            "extra": "900 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - B/op",
            "value": 3301,
            "unit": "B/op",
            "extra": "900 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - allocs/op",
            "value": 43,
            "unit": "allocs/op",
            "extra": "900 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get",
            "value": 1313815,
            "unit": "ns/op\t    3253 B/op\t      43 allocs/op",
            "extra": "896 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - ns/op",
            "value": 1313815,
            "unit": "ns/op",
            "extra": "896 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - B/op",
            "value": 3253,
            "unit": "B/op",
            "extra": "896 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - allocs/op",
            "value": 43,
            "unit": "allocs/op",
            "extra": "896 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete",
            "value": 2624383,
            "unit": "ns/op\t    6422 B/op\t      83 allocs/op",
            "extra": "454 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - ns/op",
            "value": 2624383,
            "unit": "ns/op",
            "extra": "454 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - B/op",
            "value": 6422,
            "unit": "B/op",
            "extra": "454 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "454 times\n4 procs"
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
          "id": "7dd54b600cf7ebcdf49aa81799fbef79513d1a4d",
          "message": "Merge pull request #2021 from gofiber/dependabot/go_modules/aerospike/google-modules-b83a21bb13",
          "timestamp": "2025-11-20T10:50:38+01:00",
          "tree_id": "dc3cf85587b667bfa601accbd2436200462e31a4",
          "url": "https://github.com/gofiber/storage/commit/7dd54b600cf7ebcdf49aa81799fbef79513d1a4d"
        },
        "date": 1763657982162,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Scylla_Set",
            "value": 1306223,
            "unit": "ns/op\t    3312 B/op\t      43 allocs/op",
            "extra": "896 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - ns/op",
            "value": 1306223,
            "unit": "ns/op",
            "extra": "896 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - B/op",
            "value": 3312,
            "unit": "B/op",
            "extra": "896 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - allocs/op",
            "value": 43,
            "unit": "allocs/op",
            "extra": "896 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get",
            "value": 1314241,
            "unit": "ns/op\t    3256 B/op\t      43 allocs/op",
            "extra": "900 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - ns/op",
            "value": 1314241,
            "unit": "ns/op",
            "extra": "900 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - B/op",
            "value": 3256,
            "unit": "B/op",
            "extra": "900 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - allocs/op",
            "value": 43,
            "unit": "allocs/op",
            "extra": "900 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete",
            "value": 2603687,
            "unit": "ns/op\t    6433 B/op\t      84 allocs/op",
            "extra": "454 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - ns/op",
            "value": 2603687,
            "unit": "ns/op",
            "extra": "454 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - B/op",
            "value": 6433,
            "unit": "B/op",
            "extra": "454 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - allocs/op",
            "value": 84,
            "unit": "allocs/op",
            "extra": "454 times\n4 procs"
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
          "id": "18c4294c8b21d9117b1eb4b296dbc911d31b262f",
          "message": "Merge pull request #2165 from gofiber/dependabot/go_modules/aerospike/shirou-modules-9de9a86162",
          "timestamp": "2025-11-20T11:41:10+01:00",
          "tree_id": "dcd469172bf3efc3bc94dcb1f6d7020581615a5f",
          "url": "https://github.com/gofiber/storage/commit/18c4294c8b21d9117b1eb4b296dbc911d31b262f"
        },
        "date": 1763662276929,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Scylla_Set",
            "value": 1309928,
            "unit": "ns/op\t    3307 B/op\t      43 allocs/op",
            "extra": "898 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - ns/op",
            "value": 1309928,
            "unit": "ns/op",
            "extra": "898 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - B/op",
            "value": 3307,
            "unit": "B/op",
            "extra": "898 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - allocs/op",
            "value": 43,
            "unit": "allocs/op",
            "extra": "898 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get",
            "value": 1308611,
            "unit": "ns/op\t    3251 B/op\t      43 allocs/op",
            "extra": "894 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - ns/op",
            "value": 1308611,
            "unit": "ns/op",
            "extra": "894 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - B/op",
            "value": 3251,
            "unit": "B/op",
            "extra": "894 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - allocs/op",
            "value": 43,
            "unit": "allocs/op",
            "extra": "894 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete",
            "value": 2608589,
            "unit": "ns/op\t    6424 B/op\t      83 allocs/op",
            "extra": "453 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - ns/op",
            "value": 2608589,
            "unit": "ns/op",
            "extra": "453 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - B/op",
            "value": 6424,
            "unit": "B/op",
            "extra": "453 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "453 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "835733+gaby@users.noreply.github.com",
            "name": "Juan Calderon-Perez",
            "username": "gaby"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9b928fe3202af31fa96490327f8f80626537e4b4",
          "message": "Merge pull request #2261 from mdelapenya/update-dependencies-workflows\n\nupdate dependencies workflows",
          "timestamp": "2025-11-27T11:09:01-05:00",
          "tree_id": "a7e605b10b54dce7f9c115e97dad5e9ac8202dae",
          "url": "https://github.com/gofiber/storage/commit/9b928fe3202af31fa96490327f8f80626537e4b4"
        },
        "date": 1764260160060,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Scylla_Set",
            "value": 1304821,
            "unit": "ns/op\t    3302 B/op\t      43 allocs/op",
            "extra": "897 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - ns/op",
            "value": 1304821,
            "unit": "ns/op",
            "extra": "897 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - B/op",
            "value": 3302,
            "unit": "B/op",
            "extra": "897 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - allocs/op",
            "value": 43,
            "unit": "allocs/op",
            "extra": "897 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get",
            "value": 1312194,
            "unit": "ns/op\t    3268 B/op\t      43 allocs/op",
            "extra": "884 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - ns/op",
            "value": 1312194,
            "unit": "ns/op",
            "extra": "884 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - B/op",
            "value": 3268,
            "unit": "B/op",
            "extra": "884 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - allocs/op",
            "value": 43,
            "unit": "allocs/op",
            "extra": "884 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete",
            "value": 2599301,
            "unit": "ns/op\t    6444 B/op\t      84 allocs/op",
            "extra": "456 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - ns/op",
            "value": 2599301,
            "unit": "ns/op",
            "extra": "456 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - B/op",
            "value": 6444,
            "unit": "B/op",
            "extra": "456 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - allocs/op",
            "value": 84,
            "unit": "allocs/op",
            "extra": "456 times\n4 procs"
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
          "id": "c7ef6466c98a2fc0fcab4ebd57874b69ae912377",
          "message": "Merge pull request #2322 from gofiber/dependabot/go_modules/aerospike/opentelemetry-modules-7e2f7cdd18",
          "timestamp": "2025-12-09T09:05:19+01:00",
          "tree_id": "8af382de6bc3ee83b7a943641c2b8e8b5ad3afdf",
          "url": "https://github.com/gofiber/storage/commit/c7ef6466c98a2fc0fcab4ebd57874b69ae912377"
        },
        "date": 1765267773538,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Scylla_Set",
            "value": 1314359,
            "unit": "ns/op\t    3305 B/op\t      43 allocs/op",
            "extra": "891 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - ns/op",
            "value": 1314359,
            "unit": "ns/op",
            "extra": "891 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - B/op",
            "value": 3305,
            "unit": "B/op",
            "extra": "891 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - allocs/op",
            "value": 43,
            "unit": "allocs/op",
            "extra": "891 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get",
            "value": 1321593,
            "unit": "ns/op\t    3254 B/op\t      43 allocs/op",
            "extra": "894 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - ns/op",
            "value": 1321593,
            "unit": "ns/op",
            "extra": "894 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - B/op",
            "value": 3254,
            "unit": "B/op",
            "extra": "894 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - allocs/op",
            "value": 43,
            "unit": "allocs/op",
            "extra": "894 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete",
            "value": 2624171,
            "unit": "ns/op\t    6420 B/op\t      83 allocs/op",
            "extra": "453 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - ns/op",
            "value": 2624171,
            "unit": "ns/op",
            "extra": "453 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - B/op",
            "value": 6420,
            "unit": "B/op",
            "extra": "453 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "453 times\n4 procs"
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
          "id": "fecc0c591b46e4c76989a68a5baf1e198c3a9baa",
          "message": "Merge pull request #2351 from gofiber/dependabot/go_modules/cassandra/morikuni-modules-13437e0f92",
          "timestamp": "2025-12-11T08:53:06+01:00",
          "tree_id": "eb476666cfafe83f9893d0e9cc77e5a18aeb385e",
          "url": "https://github.com/gofiber/storage/commit/fecc0c591b46e4c76989a68a5baf1e198c3a9baa"
        },
        "date": 1765439895298,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Scylla_Set",
            "value": 1314451,
            "unit": "ns/op\t    3310 B/op\t      43 allocs/op",
            "extra": "870 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - ns/op",
            "value": 1314451,
            "unit": "ns/op",
            "extra": "870 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - B/op",
            "value": 3310,
            "unit": "B/op",
            "extra": "870 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - allocs/op",
            "value": 43,
            "unit": "allocs/op",
            "extra": "870 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get",
            "value": 1316930,
            "unit": "ns/op\t    3258 B/op\t      43 allocs/op",
            "extra": "896 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - ns/op",
            "value": 1316930,
            "unit": "ns/op",
            "extra": "896 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - B/op",
            "value": 3258,
            "unit": "B/op",
            "extra": "896 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - allocs/op",
            "value": 43,
            "unit": "allocs/op",
            "extra": "896 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete",
            "value": 2613922,
            "unit": "ns/op\t    6422 B/op\t      83 allocs/op",
            "extra": "452 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - ns/op",
            "value": 2613922,
            "unit": "ns/op",
            "extra": "452 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - B/op",
            "value": 6422,
            "unit": "B/op",
            "extra": "452 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "452 times\n4 procs"
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
          "id": "becbbc3dee9014d69ac94f79b915885f98838ddd",
          "message": "Merge pull request #2293 from gofiber/dependabot/go_modules/aerospike/shirou-modules-2205efe4f5",
          "timestamp": "2025-12-18T08:40:37+01:00",
          "tree_id": "a76bae0f6a6534b4d530476e7ec1f956cb762de3",
          "url": "https://github.com/gofiber/storage/commit/becbbc3dee9014d69ac94f79b915885f98838ddd"
        },
        "date": 1766043940700,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Scylla_Set",
            "value": 1303995,
            "unit": "ns/op\t    3302 B/op\t      42 allocs/op",
            "extra": "896 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - ns/op",
            "value": 1303995,
            "unit": "ns/op",
            "extra": "896 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - B/op",
            "value": 3302,
            "unit": "B/op",
            "extra": "896 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "896 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get",
            "value": 1306040,
            "unit": "ns/op\t    3252 B/op\t      42 allocs/op",
            "extra": "890 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - ns/op",
            "value": 1306040,
            "unit": "ns/op",
            "extra": "890 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - B/op",
            "value": 3252,
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
            "value": 2607035,
            "unit": "ns/op\t    6430 B/op\t      81 allocs/op",
            "extra": "457 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - ns/op",
            "value": 2607035,
            "unit": "ns/op",
            "extra": "457 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - B/op",
            "value": 6430,
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
          "id": "2fa4e61a61ab14f37699d47fafabedacd070234b",
          "message": "Merge pull request #2370 from gofiber/dependabot/go_modules/aerospike/docker-modules-78d0d09041",
          "timestamp": "2026-01-14T08:37:59+01:00",
          "tree_id": "f44a86ad4d3dc479cc163c5b675bf9f89808fc56",
          "url": "https://github.com/gofiber/storage/commit/2fa4e61a61ab14f37699d47fafabedacd070234b"
        },
        "date": 1768376980955,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Scylla_Set",
            "value": 1319865,
            "unit": "ns/op\t    3302 B/op\t      42 allocs/op",
            "extra": "886 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - ns/op",
            "value": 1319865,
            "unit": "ns/op",
            "extra": "886 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - B/op",
            "value": 3302,
            "unit": "B/op",
            "extra": "886 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "886 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get",
            "value": 1324446,
            "unit": "ns/op\t    3258 B/op\t      42 allocs/op",
            "extra": "894 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - ns/op",
            "value": 1324446,
            "unit": "ns/op",
            "extra": "894 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - B/op",
            "value": 3258,
            "unit": "B/op",
            "extra": "894 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "894 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete",
            "value": 2627563,
            "unit": "ns/op\t    6431 B/op\t      81 allocs/op",
            "extra": "452 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - ns/op",
            "value": 2627563,
            "unit": "ns/op",
            "extra": "452 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - B/op",
            "value": 6431,
            "unit": "B/op",
            "extra": "452 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - allocs/op",
            "value": 81,
            "unit": "allocs/op",
            "extra": "452 times\n4 procs"
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
          "id": "2581f5a768a521091fd4dedab76186aff359f796",
          "message": "Merge pull request #2395 from gofiber/dependabot/go_modules/aerospike/golang-modules-305631bd7c",
          "timestamp": "2026-01-14T08:37:37+01:00",
          "tree_id": "699ec6907f378c93061af14d650b2f83e5797ac7",
          "url": "https://github.com/gofiber/storage/commit/2581f5a768a521091fd4dedab76186aff359f796"
        },
        "date": 1768377315993,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Scylla_Set",
            "value": 1304768,
            "unit": "ns/op\t    3306 B/op\t      42 allocs/op",
            "extra": "897 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - ns/op",
            "value": 1304768,
            "unit": "ns/op",
            "extra": "897 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - B/op",
            "value": 3306,
            "unit": "B/op",
            "extra": "897 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "897 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get",
            "value": 1311064,
            "unit": "ns/op\t    3251 B/op\t      42 allocs/op",
            "extra": "900 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - ns/op",
            "value": 1311064,
            "unit": "ns/op",
            "extra": "900 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - B/op",
            "value": 3251,
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
            "value": 2608962,
            "unit": "ns/op\t    6429 B/op\t      81 allocs/op",
            "extra": "453 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - ns/op",
            "value": 2608962,
            "unit": "ns/op",
            "extra": "453 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - B/op",
            "value": 6429,
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
          "id": "ff72418577cfb7f72d6ad0887c106e28c5b4ce1e",
          "message": "Merge pull request #2380 from gofiber/dependabot/go_modules/aerospike/shirou-modules-83465100a6\n\nchore(deps): bump the shirou-modules group across 25 directories with 1 update",
          "timestamp": "2026-01-14T09:25:58+01:00",
          "tree_id": "ee6baa1f0229e113f85e55193ba91000f6475119",
          "url": "https://github.com/gofiber/storage/commit/ff72418577cfb7f72d6ad0887c106e28c5b4ce1e"
        },
        "date": 1768379407881,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Scylla_Set",
            "value": 1330262,
            "unit": "ns/op\t    3306 B/op\t      42 allocs/op",
            "extra": "884 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - ns/op",
            "value": 1330262,
            "unit": "ns/op",
            "extra": "884 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - B/op",
            "value": 3306,
            "unit": "B/op",
            "extra": "884 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "884 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get",
            "value": 1334642,
            "unit": "ns/op\t    3262 B/op\t      42 allocs/op",
            "extra": "878 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - ns/op",
            "value": 1334642,
            "unit": "ns/op",
            "extra": "878 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - B/op",
            "value": 3262,
            "unit": "B/op",
            "extra": "878 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "878 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete",
            "value": 2655767,
            "unit": "ns/op\t    6435 B/op\t      82 allocs/op",
            "extra": "448 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - ns/op",
            "value": 2655767,
            "unit": "ns/op",
            "extra": "448 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - B/op",
            "value": 6435,
            "unit": "B/op",
            "extra": "448 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "448 times\n4 procs"
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
          "id": "60df3d9c58eb10d562ad9e9a4b3d100a280722cf",
          "message": "Merge pull request #2374 from gofiber/dependabot/go_modules/aerospike/grpc-gateway-modules-f0fd976ae1\n\nchore(deps): bump the grpc-gateway-modules group across 17 directories with 1 update",
          "timestamp": "2026-01-14T09:41:06+01:00",
          "tree_id": "d69c3a25d2b4361f4281d4250702a742a2cc6370",
          "url": "https://github.com/gofiber/storage/commit/60df3d9c58eb10d562ad9e9a4b3d100a280722cf"
        },
        "date": 1768380302414,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Scylla_Set",
            "value": 1305418,
            "unit": "ns/op\t    3304 B/op\t      42 allocs/op",
            "extra": "896 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - ns/op",
            "value": 1305418,
            "unit": "ns/op",
            "extra": "896 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - B/op",
            "value": 3304,
            "unit": "B/op",
            "extra": "896 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "896 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get",
            "value": 1310197,
            "unit": "ns/op\t    3260 B/op\t      42 allocs/op",
            "extra": "895 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - ns/op",
            "value": 1310197,
            "unit": "ns/op",
            "extra": "895 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - B/op",
            "value": 3260,
            "unit": "B/op",
            "extra": "895 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "895 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete",
            "value": 2608336,
            "unit": "ns/op\t    6420 B/op\t      81 allocs/op",
            "extra": "454 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - ns/op",
            "value": 2608336,
            "unit": "ns/op",
            "extra": "454 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - B/op",
            "value": 6420,
            "unit": "B/op",
            "extra": "454 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - allocs/op",
            "value": 81,
            "unit": "allocs/op",
            "extra": "454 times\n4 procs"
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
          "id": "188b351f10cb347556f95f16b412fa32f0e9a786",
          "message": "Merge pull request #2426 from gofiber/dependabot/go_modules/scylladb/github.com/sirupsen/logrus-1.9.4\n\nchore(deps): bump github.com/sirupsen/logrus from 1.9.3 to 1.9.4 in /scylladb",
          "timestamp": "2026-01-16T08:22:21+01:00",
          "tree_id": "84f6c31b69e95f17362d52543838b4ccfe3dcdd3",
          "url": "https://github.com/gofiber/storage/commit/188b351f10cb347556f95f16b412fa32f0e9a786"
        },
        "date": 1768548690785,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Scylla_Set",
            "value": 1313554,
            "unit": "ns/op\t    3300 B/op\t      42 allocs/op",
            "extra": "891 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - ns/op",
            "value": 1313554,
            "unit": "ns/op",
            "extra": "891 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - B/op",
            "value": 3300,
            "unit": "B/op",
            "extra": "891 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "891 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get",
            "value": 1318788,
            "unit": "ns/op\t    3252 B/op\t      42 allocs/op",
            "extra": "894 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - ns/op",
            "value": 1318788,
            "unit": "ns/op",
            "extra": "894 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - B/op",
            "value": 3252,
            "unit": "B/op",
            "extra": "894 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "894 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete",
            "value": 2617971,
            "unit": "ns/op\t    6426 B/op\t      81 allocs/op",
            "extra": "452 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - ns/op",
            "value": 2617971,
            "unit": "ns/op",
            "extra": "452 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - B/op",
            "value": 6426,
            "unit": "B/op",
            "extra": "452 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - allocs/op",
            "value": 81,
            "unit": "allocs/op",
            "extra": "452 times\n4 procs"
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
          "id": "11c05d6dd6b71047aa48d58de62f2dadfe0e7fe5",
          "message": "Merge pull request #2431 from gofiber/dependabot/go_modules/aerospike/klauspost-modules-060a4d48f9\n\nchore(deps): bump the klauspost-modules group across 27 directories with 1 update",
          "timestamp": "2026-01-20T08:14:15+01:00",
          "tree_id": "e9bfe2f24534f6ec7ff4894e21bafd80f6f04c97",
          "url": "https://github.com/gofiber/storage/commit/11c05d6dd6b71047aa48d58de62f2dadfe0e7fe5"
        },
        "date": 1768893546182,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Scylla_Set",
            "value": 1310864,
            "unit": "ns/op\t    3306 B/op\t      42 allocs/op",
            "extra": "870 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - ns/op",
            "value": 1310864,
            "unit": "ns/op",
            "extra": "870 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - B/op",
            "value": 3306,
            "unit": "B/op",
            "extra": "870 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "870 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get",
            "value": 1317078,
            "unit": "ns/op\t    3258 B/op\t      42 allocs/op",
            "extra": "894 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - ns/op",
            "value": 1317078,
            "unit": "ns/op",
            "extra": "894 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - B/op",
            "value": 3258,
            "unit": "B/op",
            "extra": "894 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "894 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete",
            "value": 2613488,
            "unit": "ns/op\t    6424 B/op\t      81 allocs/op",
            "extra": "453 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - ns/op",
            "value": 2613488,
            "unit": "ns/op",
            "extra": "453 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - B/op",
            "value": 6424,
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
          "id": "e9f9049f27e7ceec91dfd041fbe05df48cd106dd",
          "message": "Merge pull request #2435 from gofiber/dependabot/go_modules/aerospike/grpc-gateway-modules-723df7c2c9\n\nchore(deps): bump the grpc-gateway-modules group across 17 directories with 1 update",
          "timestamp": "2026-01-22T08:15:16+01:00",
          "tree_id": "5617c43a1da81518cb8795a6f1fdf6dc4ddcc92b",
          "url": "https://github.com/gofiber/storage/commit/e9f9049f27e7ceec91dfd041fbe05df48cd106dd"
        },
        "date": 1769066366867,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Scylla_Set",
            "value": 1310157,
            "unit": "ns/op\t    3308 B/op\t      42 allocs/op",
            "extra": "901 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - ns/op",
            "value": 1310157,
            "unit": "ns/op",
            "extra": "901 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - B/op",
            "value": 3308,
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
            "value": 1313628,
            "unit": "ns/op\t    3265 B/op\t      42 allocs/op",
            "extra": "895 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - ns/op",
            "value": 1313628,
            "unit": "ns/op",
            "extra": "895 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - B/op",
            "value": 3265,
            "unit": "B/op",
            "extra": "895 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "895 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete",
            "value": 2599527,
            "unit": "ns/op\t    6420 B/op\t      81 allocs/op",
            "extra": "457 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - ns/op",
            "value": 2599527,
            "unit": "ns/op",
            "extra": "457 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - B/op",
            "value": 6420,
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
          "id": "fa3a97855d0da53ec0205aa676526e8756721fd1",
          "message": "Merge pull request #2450 from gofiber/dependabot/go_modules/aerospike/grpc-gateway-modules-d980216198\n\nchore(deps): bump the grpc-gateway-modules group across 17 directories with 1 update",
          "timestamp": "2026-01-29T08:17:06+01:00",
          "tree_id": "c8f8fe99ce6c653abae810ef180d558605f471e6",
          "url": "https://github.com/gofiber/storage/commit/fa3a97855d0da53ec0205aa676526e8756721fd1"
        },
        "date": 1769671258472,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Scylla_Set",
            "value": 1304980,
            "unit": "ns/op\t    3311 B/op\t      42 allocs/op",
            "extra": "896 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - ns/op",
            "value": 1304980,
            "unit": "ns/op",
            "extra": "896 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - B/op",
            "value": 3311,
            "unit": "B/op",
            "extra": "896 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "896 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get",
            "value": 1307027,
            "unit": "ns/op\t    3260 B/op\t      42 allocs/op",
            "extra": "888 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - ns/op",
            "value": 1307027,
            "unit": "ns/op",
            "extra": "888 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - B/op",
            "value": 3260,
            "unit": "B/op",
            "extra": "888 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "888 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete",
            "value": 2602169,
            "unit": "ns/op\t    6441 B/op\t      82 allocs/op",
            "extra": "454 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - ns/op",
            "value": 2602169,
            "unit": "ns/op",
            "extra": "454 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - B/op",
            "value": 6441,
            "unit": "B/op",
            "extra": "454 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "454 times\n4 procs"
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
          "id": "10397eff7ac2cc895ea17f5137d88129f76ff504",
          "message": "Merge pull request #2453 from gofiber/dependabot/go_modules/aerospike/grpc-gateway-modules-9a71abc68d\n\nchore(deps): bump the grpc-gateway-modules group across 17 directories with 1 update",
          "timestamp": "2026-01-30T08:14:26+01:00",
          "tree_id": "682c55829d86f0c86143786f27699a227cfca01f",
          "url": "https://github.com/gofiber/storage/commit/10397eff7ac2cc895ea17f5137d88129f76ff504"
        },
        "date": 1769757438468,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Scylla_Set",
            "value": 1306820,
            "unit": "ns/op\t    3304 B/op\t      42 allocs/op",
            "extra": "901 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - ns/op",
            "value": 1306820,
            "unit": "ns/op",
            "extra": "901 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - B/op",
            "value": 3304,
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
            "value": 1310964,
            "unit": "ns/op\t    3258 B/op\t      42 allocs/op",
            "extra": "898 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - ns/op",
            "value": 1310964,
            "unit": "ns/op",
            "extra": "898 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - B/op",
            "value": 3258,
            "unit": "B/op",
            "extra": "898 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "898 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete",
            "value": 2599530,
            "unit": "ns/op\t    6420 B/op\t      81 allocs/op",
            "extra": "457 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - ns/op",
            "value": 2599530,
            "unit": "ns/op",
            "extra": "457 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - B/op",
            "value": 6420,
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
      }
    ]
  }
}