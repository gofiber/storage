window.BENCHMARK_DATA = {
  "lastUpdate": 1777624338554,
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
          "id": "8bff5a354fb8012e046c7af091ef7ab317148fd2",
          "message": "Merge pull request #2458 from gofiber/dependabot/go_modules/aerospike/shirou-modules-780478747e\n\nchore(deps): bump the shirou-modules group across 25 directories with 1 update",
          "timestamp": "2026-02-02T08:32:06+01:00",
          "tree_id": "a7e435370484fe153e24e8124efa1aa935a60a6a",
          "url": "https://github.com/gofiber/storage/commit/8bff5a354fb8012e046c7af091ef7ab317148fd2"
        },
        "date": 1770017893688,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Scylla_Set",
            "value": 1317033,
            "unit": "ns/op\t    3312 B/op\t      42 allocs/op",
            "extra": "888 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - ns/op",
            "value": 1317033,
            "unit": "ns/op",
            "extra": "888 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - B/op",
            "value": 3312,
            "unit": "B/op",
            "extra": "888 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "888 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get",
            "value": 1326890,
            "unit": "ns/op\t    3252 B/op\t      42 allocs/op",
            "extra": "889 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - ns/op",
            "value": 1326890,
            "unit": "ns/op",
            "extra": "889 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - B/op",
            "value": 3252,
            "unit": "B/op",
            "extra": "889 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "889 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete",
            "value": 2623432,
            "unit": "ns/op\t    6426 B/op\t      81 allocs/op",
            "extra": "451 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - ns/op",
            "value": 2623432,
            "unit": "ns/op",
            "extra": "451 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - B/op",
            "value": 6426,
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
          "id": "205fb777dcd9e87d8cee3d907d0346bf1a0f98a2",
          "message": "Merge pull request #2462 from gofiber/dependabot/go_modules/aerospike/opentelemetry-modules-a50a55491e\n\nchore(deps): bump the opentelemetry-modules group across 25 directories with 6 updates",
          "timestamp": "2026-02-03T09:39:34+01:00",
          "tree_id": "02ec0069a8ab255423484ef50bce7e9703957bd4",
          "url": "https://github.com/gofiber/storage/commit/205fb777dcd9e87d8cee3d907d0346bf1a0f98a2"
        },
        "date": 1770108240428,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Scylla_Set",
            "value": 1307756,
            "unit": "ns/op\t    3306 B/op\t      42 allocs/op",
            "extra": "896 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - ns/op",
            "value": 1307756,
            "unit": "ns/op",
            "extra": "896 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - B/op",
            "value": 3306,
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
            "value": 1309640,
            "unit": "ns/op\t    3255 B/op\t      42 allocs/op",
            "extra": "898 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - ns/op",
            "value": 1309640,
            "unit": "ns/op",
            "extra": "898 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - B/op",
            "value": 3255,
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
            "value": 2607781,
            "unit": "ns/op\t    6437 B/op\t      82 allocs/op",
            "extra": "453 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - ns/op",
            "value": 2607781,
            "unit": "ns/op",
            "extra": "453 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - B/op",
            "value": 6437,
            "unit": "B/op",
            "extra": "453 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - allocs/op",
            "value": 82,
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
          "id": "fb897e30435db5900077eaa5a154eb82084244a9",
          "message": "Merge pull request #2472 from gofiber/dependabot/go_modules/aerospike/klauspost-modules-e89a90612b\n\nchore(deps): bump the klauspost-modules group across 27 directories with 1 update",
          "timestamp": "2026-02-10T08:15:49+01:00",
          "tree_id": "dedd6a8e895939e7474944a1cf8d8b6f1dedddd5",
          "url": "https://github.com/gofiber/storage/commit/fb897e30435db5900077eaa5a154eb82084244a9"
        },
        "date": 1770708105647,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Scylla_Set",
            "value": 1304050,
            "unit": "ns/op\t    3300 B/op\t      42 allocs/op",
            "extra": "897 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - ns/op",
            "value": 1304050,
            "unit": "ns/op",
            "extra": "897 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - B/op",
            "value": 3300,
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
            "value": 1307058,
            "unit": "ns/op\t    3252 B/op\t      42 allocs/op",
            "extra": "895 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - ns/op",
            "value": 1307058,
            "unit": "ns/op",
            "extra": "895 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - B/op",
            "value": 3252,
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
            "value": 2604590,
            "unit": "ns/op\t    6430 B/op\t      81 allocs/op",
            "extra": "454 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - ns/op",
            "value": 2604590,
            "unit": "ns/op",
            "extra": "454 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - B/op",
            "value": 6430,
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
          "id": "00d49367b265e5ce786e62cc4c0bf3d5fae3f2bc",
          "message": "Merge pull request #2475 from gofiber/dependabot/go_modules/aerospike/grpc-gateway-modules-3b228c5f6b\n\nchore(deps): bump the grpc-gateway-modules group across 17 directories with 1 update",
          "timestamp": "2026-02-11T08:16:19+01:00",
          "tree_id": "918d22e3f493ff4086f5640df252d131a9af82ac",
          "url": "https://github.com/gofiber/storage/commit/00d49367b265e5ce786e62cc4c0bf3d5fae3f2bc"
        },
        "date": 1770794369403,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Scylla_Set",
            "value": 1336580,
            "unit": "ns/op\t    3304 B/op\t      42 allocs/op",
            "extra": "873 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - ns/op",
            "value": 1336580,
            "unit": "ns/op",
            "extra": "873 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - B/op",
            "value": 3304,
            "unit": "B/op",
            "extra": "873 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "873 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get",
            "value": 1333903,
            "unit": "ns/op\t    3253 B/op\t      42 allocs/op",
            "extra": "882 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - ns/op",
            "value": 1333903,
            "unit": "ns/op",
            "extra": "882 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - B/op",
            "value": 3253,
            "unit": "B/op",
            "extra": "882 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "882 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete",
            "value": 2637360,
            "unit": "ns/op\t    6430 B/op\t      81 allocs/op",
            "extra": "450 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - ns/op",
            "value": 2637360,
            "unit": "ns/op",
            "extra": "450 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - B/op",
            "value": 6430,
            "unit": "B/op",
            "extra": "450 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - allocs/op",
            "value": 81,
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
          "id": "a797849a0477b5a8fd159843c4c257a57c5574e1",
          "message": "Merge pull request #2480 from gofiber/dependabot/go_modules/aerospike/google-modules-042a720460\n\nchore(deps): bump the google-modules group across 19 directories with 2 updates",
          "timestamp": "2026-02-13T08:17:34+01:00",
          "tree_id": "eed8d6400d34414744f98c4d4bf302e8e4b18d58",
          "url": "https://github.com/gofiber/storage/commit/a797849a0477b5a8fd159843c4c257a57c5574e1"
        },
        "date": 1770967235670,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Scylla_Set",
            "value": 1328516,
            "unit": "ns/op\t    3301 B/op\t      42 allocs/op",
            "extra": "883 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - ns/op",
            "value": 1328516,
            "unit": "ns/op",
            "extra": "883 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - B/op",
            "value": 3301,
            "unit": "B/op",
            "extra": "883 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "883 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get",
            "value": 1335388,
            "unit": "ns/op\t    3253 B/op\t      42 allocs/op",
            "extra": "888 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - ns/op",
            "value": 1335388,
            "unit": "ns/op",
            "extra": "888 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - B/op",
            "value": 3253,
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
            "value": 2654919,
            "unit": "ns/op\t    6433 B/op\t      82 allocs/op",
            "extra": "446 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - ns/op",
            "value": 2654919,
            "unit": "ns/op",
            "extra": "446 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - B/op",
            "value": 6433,
            "unit": "B/op",
            "extra": "446 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "446 times\n4 procs"
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
          "id": "4eb9e62ab677c10980f52e1371b0a79294a0352b",
          "message": "Merge pull request #2478 from gofiber/dependabot/go_modules/aerospike/golang-modules-83bead6e39\n\nchore(deps): bump the golang-modules group across 29 directories with 5 updates",
          "timestamp": "2026-02-16T19:27:53-05:00",
          "tree_id": "fee0127030d6f552d97edac9a181150b033d0049",
          "url": "https://github.com/gofiber/storage/commit/4eb9e62ab677c10980f52e1371b0a79294a0352b"
        },
        "date": 1771288327015,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Scylla_Set",
            "value": 1337012,
            "unit": "ns/op\t    3302 B/op\t      42 allocs/op",
            "extra": "877 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - ns/op",
            "value": 1337012,
            "unit": "ns/op",
            "extra": "877 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - B/op",
            "value": 3302,
            "unit": "B/op",
            "extra": "877 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "877 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get",
            "value": 1338655,
            "unit": "ns/op\t    3256 B/op\t      42 allocs/op",
            "extra": "877 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - ns/op",
            "value": 1338655,
            "unit": "ns/op",
            "extra": "877 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - B/op",
            "value": 3256,
            "unit": "B/op",
            "extra": "877 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "877 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete",
            "value": 2660257,
            "unit": "ns/op\t    6422 B/op\t      81 allocs/op",
            "extra": "445 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - ns/op",
            "value": 2660257,
            "unit": "ns/op",
            "extra": "445 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - B/op",
            "value": 6422,
            "unit": "B/op",
            "extra": "445 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - allocs/op",
            "value": 81,
            "unit": "allocs/op",
            "extra": "445 times\n4 procs"
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
          "id": "ebbbc85bffd1df01be8bf6519919c09f560aa58d",
          "message": "Merge pull request #2503 from gofiber/dependabot/go_modules/aerospike/ebitengine-modules-6c40b41302",
          "timestamp": "2026-03-06T15:57:25+01:00",
          "tree_id": "db6b189b2186a9e082b56032c73edc456f249ee2",
          "url": "https://github.com/gofiber/storage/commit/ebbbc85bffd1df01be8bf6519919c09f560aa58d"
        },
        "date": 1772809946900,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Scylla_Set",
            "value": 1340570,
            "unit": "ns/op\t    3300 B/op\t      42 allocs/op",
            "extra": "884 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - ns/op",
            "value": 1340570,
            "unit": "ns/op",
            "extra": "884 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - B/op",
            "value": 3300,
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
            "value": 1371772,
            "unit": "ns/op\t    3264 B/op\t      42 allocs/op",
            "extra": "858 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - ns/op",
            "value": 1371772,
            "unit": "ns/op",
            "extra": "858 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - B/op",
            "value": 3264,
            "unit": "B/op",
            "extra": "858 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "858 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete",
            "value": 2686144,
            "unit": "ns/op\t    6430 B/op\t      81 allocs/op",
            "extra": "444 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - ns/op",
            "value": 2686144,
            "unit": "ns/op",
            "extra": "444 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - B/op",
            "value": 6430,
            "unit": "B/op",
            "extra": "444 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - allocs/op",
            "value": 81,
            "unit": "allocs/op",
            "extra": "444 times\n4 procs"
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
          "id": "0fc5e9f686717b3577f8df1b5f5cdd36bd610fca",
          "message": "Merge pull request #2521 from gofiber/dependabot/go_modules/aerospike/google-modules-a80e5cdd85",
          "timestamp": "2026-03-06T15:57:43+01:00",
          "tree_id": "8c954b1c7f715475a70b9a26cf613863aa154a3f",
          "url": "https://github.com/gofiber/storage/commit/0fc5e9f686717b3577f8df1b5f5cdd36bd610fca"
        },
        "date": 1772810274709,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Scylla_Set",
            "value": 1367368,
            "unit": "ns/op\t    3312 B/op\t      42 allocs/op",
            "extra": "856 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - ns/op",
            "value": 1367368,
            "unit": "ns/op",
            "extra": "856 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - B/op",
            "value": 3312,
            "unit": "B/op",
            "extra": "856 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "856 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get",
            "value": 1357915,
            "unit": "ns/op\t    3253 B/op\t      42 allocs/op",
            "extra": "848 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - ns/op",
            "value": 1357915,
            "unit": "ns/op",
            "extra": "848 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - B/op",
            "value": 3253,
            "unit": "B/op",
            "extra": "848 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "848 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete",
            "value": 2719935,
            "unit": "ns/op\t    6426 B/op\t      81 allocs/op",
            "extra": "429 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - ns/op",
            "value": 2719935,
            "unit": "ns/op",
            "extra": "429 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - B/op",
            "value": 6426,
            "unit": "B/op",
            "extra": "429 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - allocs/op",
            "value": 81,
            "unit": "allocs/op",
            "extra": "429 times\n4 procs"
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
          "id": "5fac639ed09d29164d9d98ce20791018f3a17666",
          "message": "Merge pull request #2516 from gofiber/dependabot/go_modules/aerospike/opentelemetry-modules-2dc48bd7ec",
          "timestamp": "2026-03-06T15:58:49+01:00",
          "tree_id": "c439ed82ad3b65846815be1ef953b7735def51d6",
          "url": "https://github.com/gofiber/storage/commit/5fac639ed09d29164d9d98ce20791018f3a17666"
        },
        "date": 1772810465700,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Scylla_Set",
            "value": 1355468,
            "unit": "ns/op\t    3306 B/op\t      42 allocs/op",
            "extra": "867 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - ns/op",
            "value": 1355468,
            "unit": "ns/op",
            "extra": "867 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - B/op",
            "value": 3306,
            "unit": "B/op",
            "extra": "867 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "867 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get",
            "value": 1355998,
            "unit": "ns/op\t    3263 B/op\t      42 allocs/op",
            "extra": "847 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - ns/op",
            "value": 1355998,
            "unit": "ns/op",
            "extra": "847 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - B/op",
            "value": 3263,
            "unit": "B/op",
            "extra": "847 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "847 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete",
            "value": 2684910,
            "unit": "ns/op\t    6428 B/op\t      81 allocs/op",
            "extra": "446 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - ns/op",
            "value": 2684910,
            "unit": "ns/op",
            "extra": "446 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - B/op",
            "value": 6428,
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
          "id": "4755abbbbbc98be72cce4490ac12bffb98f310f3",
          "message": "Merge pull request #2512 from gofiber/dependabot/go_modules/aerospike/shirou-modules-c770b2d60b\n\nchore(deps): bump the shirou-modules group across 25 directories with 1 update",
          "timestamp": "2026-03-06T16:51:06+01:00",
          "tree_id": "970a6ce79c75ba710f37ac28f880163f8b3c1db5",
          "url": "https://github.com/gofiber/storage/commit/4755abbbbbc98be72cce4490ac12bffb98f310f3"
        },
        "date": 1772812528803,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Scylla_Set",
            "value": 1339658,
            "unit": "ns/op\t    3301 B/op\t      42 allocs/op",
            "extra": "877 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - ns/op",
            "value": 1339658,
            "unit": "ns/op",
            "extra": "877 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - B/op",
            "value": 3301,
            "unit": "B/op",
            "extra": "877 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "877 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get",
            "value": 1341776,
            "unit": "ns/op\t    3261 B/op\t      42 allocs/op",
            "extra": "856 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - ns/op",
            "value": 1341776,
            "unit": "ns/op",
            "extra": "856 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - B/op",
            "value": 3261,
            "unit": "B/op",
            "extra": "856 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "856 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete",
            "value": 2677857,
            "unit": "ns/op\t    6427 B/op\t      81 allocs/op",
            "extra": "444 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - ns/op",
            "value": 2677857,
            "unit": "ns/op",
            "extra": "444 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - B/op",
            "value": 6427,
            "unit": "B/op",
            "extra": "444 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - allocs/op",
            "value": 81,
            "unit": "allocs/op",
            "extra": "444 times\n4 procs"
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
          "id": "ec95590224e0982fd81bff215c492e27e57c55b3",
          "message": "Merge pull request #2553 from gofiber/dependabot/go_modules/aerospike/google-modules-a05de7dce4\n\nchore(deps): bump the google-modules group across 19 directories with 1 update",
          "timestamp": "2026-03-18T08:40:01+01:00",
          "tree_id": "f4adb6288e21f28c27958c269124ec050b38357d",
          "url": "https://github.com/gofiber/storage/commit/ec95590224e0982fd81bff215c492e27e57c55b3"
        },
        "date": 1773820041303,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Scylla_Set",
            "value": 1326059,
            "unit": "ns/op\t    3299 B/op\t      42 allocs/op",
            "extra": "884 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - ns/op",
            "value": 1326059,
            "unit": "ns/op",
            "extra": "884 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - B/op",
            "value": 3299,
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
            "value": 1339617,
            "unit": "ns/op\t    3261 B/op\t      42 allocs/op",
            "extra": "885 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - ns/op",
            "value": 1339617,
            "unit": "ns/op",
            "extra": "885 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - B/op",
            "value": 3261,
            "unit": "B/op",
            "extra": "885 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "885 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete",
            "value": 2643602,
            "unit": "ns/op\t    6433 B/op\t      81 allocs/op",
            "extra": "446 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - ns/op",
            "value": 2643602,
            "unit": "ns/op",
            "extra": "446 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - B/op",
            "value": 6433,
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
          "id": "7cb78acf722cbb4e90e2aa681e125a0e8f09972e",
          "message": "Merge pull request #2558 from gofiber/dependabot/go_modules/aerospike/klauspost-modules-f5955e4445\n\nchore(deps): bump the klauspost-modules group across 27 directories with 1 update",
          "timestamp": "2026-03-25T08:38:57+01:00",
          "tree_id": "4b1e2e5c8db8bac469fd1a20291c86cc756b2749",
          "url": "https://github.com/gofiber/storage/commit/7cb78acf722cbb4e90e2aa681e125a0e8f09972e"
        },
        "date": 1774424641533,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Scylla_Set",
            "value": 1349822,
            "unit": "ns/op\t    3304 B/op\t      42 allocs/op",
            "extra": "878 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - ns/op",
            "value": 1349822,
            "unit": "ns/op",
            "extra": "878 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - B/op",
            "value": 3304,
            "unit": "B/op",
            "extra": "878 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "878 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get",
            "value": 1345703,
            "unit": "ns/op\t    3265 B/op\t      42 allocs/op",
            "extra": "861 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - ns/op",
            "value": 1345703,
            "unit": "ns/op",
            "extra": "861 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - B/op",
            "value": 3265,
            "unit": "B/op",
            "extra": "861 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "861 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete",
            "value": 2664854,
            "unit": "ns/op\t    6422 B/op\t      81 allocs/op",
            "extra": "445 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - ns/op",
            "value": 2664854,
            "unit": "ns/op",
            "extra": "445 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - B/op",
            "value": 6422,
            "unit": "B/op",
            "extra": "445 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - allocs/op",
            "value": 81,
            "unit": "allocs/op",
            "extra": "445 times\n4 procs"
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
          "id": "c4832210405a5e41587a0b5f8d6ad2b0c8005ee0",
          "message": "Merge pull request #2567 from gofiber/dependabot/go_modules/aerospike/docker-modules-e39c44ec95\n\nchore(deps): bump the docker-modules group across 25 directories with 1 update",
          "timestamp": "2026-03-26T08:30:08+01:00",
          "tree_id": "1f070ee0eb91d228ac4f9ea1c0b061a31b22dd3b",
          "url": "https://github.com/gofiber/storage/commit/c4832210405a5e41587a0b5f8d6ad2b0c8005ee0"
        },
        "date": 1774510846399,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Scylla_Set",
            "value": 1331701,
            "unit": "ns/op\t    3314 B/op\t      42 allocs/op",
            "extra": "880 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - ns/op",
            "value": 1331701,
            "unit": "ns/op",
            "extra": "880 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - B/op",
            "value": 3314,
            "unit": "B/op",
            "extra": "880 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "880 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get",
            "value": 1340893,
            "unit": "ns/op\t    3258 B/op\t      42 allocs/op",
            "extra": "874 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - ns/op",
            "value": 1340893,
            "unit": "ns/op",
            "extra": "874 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - B/op",
            "value": 3258,
            "unit": "B/op",
            "extra": "874 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "874 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete",
            "value": 2661666,
            "unit": "ns/op\t    6432 B/op\t      81 allocs/op",
            "extra": "445 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - ns/op",
            "value": 2661666,
            "unit": "ns/op",
            "extra": "445 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - B/op",
            "value": 6432,
            "unit": "B/op",
            "extra": "445 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - allocs/op",
            "value": 81,
            "unit": "allocs/op",
            "extra": "445 times\n4 procs"
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
          "id": "3ab9618d78784181e3ce812b431b619d681a6122",
          "message": "Merge pull request #2581 from gofiber/dependabot/go_modules/aerospike/shirou-modules-923a686534\n\nchore(deps): bump the shirou-modules group across 25 directories with 1 update",
          "timestamp": "2026-04-02T10:05:16+02:00",
          "tree_id": "69212eb027c67d66aa18fadaa159956866fbb483",
          "url": "https://github.com/gofiber/storage/commit/3ab9618d78784181e3ce812b431b619d681a6122"
        },
        "date": 1775117506989,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Scylla_Set",
            "value": 1303975,
            "unit": "ns/op\t    3297 B/op\t      42 allocs/op",
            "extra": "928 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - ns/op",
            "value": 1303975,
            "unit": "ns/op",
            "extra": "928 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - B/op",
            "value": 3297,
            "unit": "B/op",
            "extra": "928 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "928 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get",
            "value": 1302453,
            "unit": "ns/op\t    3257 B/op\t      42 allocs/op",
            "extra": "902 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - ns/op",
            "value": 1302453,
            "unit": "ns/op",
            "extra": "902 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - B/op",
            "value": 3257,
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
            "value": 2562002,
            "unit": "ns/op\t    6429 B/op\t      81 allocs/op",
            "extra": "444 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - ns/op",
            "value": 2562002,
            "unit": "ns/op",
            "extra": "444 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - B/op",
            "value": 6429,
            "unit": "B/op",
            "extra": "444 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - allocs/op",
            "value": 81,
            "unit": "allocs/op",
            "extra": "444 times\n4 procs"
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
          "id": "7912fd4a025fe19b3710c0f0d99ce5fcb75e0da1",
          "message": "Merge pull request #2587 from gofiber/dependabot/go_modules/aerospike/google-modules-d22e9361e5\n\nchore(deps): bump the google-modules group across 19 directories with 2 updates",
          "timestamp": "2026-04-02T10:10:07+02:00",
          "tree_id": "e1414222aff2b24784c8223fc87e4d5477bac041",
          "url": "https://github.com/gofiber/storage/commit/7912fd4a025fe19b3710c0f0d99ce5fcb75e0da1"
        },
        "date": 1775117875791,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Scylla_Set",
            "value": 1314460,
            "unit": "ns/op\t    3316 B/op\t      42 allocs/op",
            "extra": "896 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - ns/op",
            "value": 1314460,
            "unit": "ns/op",
            "extra": "896 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - B/op",
            "value": 3316,
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
            "value": 1314834,
            "unit": "ns/op\t    3255 B/op\t      42 allocs/op",
            "extra": "858 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - ns/op",
            "value": 1314834,
            "unit": "ns/op",
            "extra": "858 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - B/op",
            "value": 3255,
            "unit": "B/op",
            "extra": "858 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "858 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete",
            "value": 2616990,
            "unit": "ns/op\t    6441 B/op\t      82 allocs/op",
            "extra": "453 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - ns/op",
            "value": 2616990,
            "unit": "ns/op",
            "extra": "453 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - B/op",
            "value": 6441,
            "unit": "B/op",
            "extra": "453 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - allocs/op",
            "value": 82,
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
          "id": "282ea755c31be6d119a6016a5c2536fb58b35aed",
          "message": "Merge pull request #2628 from gofiber/dependabot/go_modules/aerospike/docker-modules-3ac9070706\n\nchore(deps): bump the docker-modules group across 25 directories with 1 update",
          "timestamp": "2026-04-16T09:22:11+02:00",
          "tree_id": "2cb05bea21e3efab15039c7dca49fd060ab5afee",
          "url": "https://github.com/gofiber/storage/commit/282ea755c31be6d119a6016a5c2536fb58b35aed"
        },
        "date": 1776324492939,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Scylla_Set",
            "value": 1266991,
            "unit": "ns/op\t    3306 B/op\t      42 allocs/op",
            "extra": "930 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - ns/op",
            "value": 1266991,
            "unit": "ns/op",
            "extra": "930 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - B/op",
            "value": 3306,
            "unit": "B/op",
            "extra": "930 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "930 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get",
            "value": 1280539,
            "unit": "ns/op\t    3253 B/op\t      42 allocs/op",
            "extra": "921 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - ns/op",
            "value": 1280539,
            "unit": "ns/op",
            "extra": "921 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - B/op",
            "value": 3253,
            "unit": "B/op",
            "extra": "921 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "921 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete",
            "value": 2536950,
            "unit": "ns/op\t    6432 B/op\t      81 allocs/op",
            "extra": "462 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - ns/op",
            "value": 2536950,
            "unit": "ns/op",
            "extra": "462 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - B/op",
            "value": 6432,
            "unit": "B/op",
            "extra": "462 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - allocs/op",
            "value": 81,
            "unit": "allocs/op",
            "extra": "462 times\n4 procs"
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
          "id": "c73243543df958265fc7620333eef13e1062fb3b",
          "message": "Merge pull request #2631 from gofiber/copilot/update-minimum-go-version",
          "timestamp": "2026-04-17T10:30:02+02:00",
          "tree_id": "d918cb66def9a6201f6b9dfc129b9abbcc868c81",
          "url": "https://github.com/gofiber/storage/commit/c73243543df958265fc7620333eef13e1062fb3b"
        },
        "date": 1776414851844,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Scylla_Set",
            "value": 1336268,
            "unit": "ns/op\t    3309 B/op\t      42 allocs/op",
            "extra": "853 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - ns/op",
            "value": 1336268,
            "unit": "ns/op",
            "extra": "853 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - B/op",
            "value": 3309,
            "unit": "B/op",
            "extra": "853 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "853 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get",
            "value": 1336370,
            "unit": "ns/op\t    3257 B/op\t      42 allocs/op",
            "extra": "850 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - ns/op",
            "value": 1336370,
            "unit": "ns/op",
            "extra": "850 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - B/op",
            "value": 3257,
            "unit": "B/op",
            "extra": "850 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "850 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete",
            "value": 2667017,
            "unit": "ns/op\t    6427 B/op\t      81 allocs/op",
            "extra": "446 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - ns/op",
            "value": 2667017,
            "unit": "ns/op",
            "extra": "446 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - B/op",
            "value": 6427,
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
          "id": "748fd15a69b6c953aee69bcf22f6b6237931d72a",
          "message": "Merge pull request #2611 from gofiber/dependabot/go_modules/aerospike/golang-modules-3949a873b8\n\nchore(deps): bump the golang-modules group across 31 directories with 7 updates",
          "timestamp": "2026-04-17T14:37:08+02:00",
          "tree_id": "440f05c2b2db3e2f342b6686edb4cfcf6adc22fa",
          "url": "https://github.com/gofiber/storage/commit/748fd15a69b6c953aee69bcf22f6b6237931d72a"
        },
        "date": 1776429626622,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Scylla_Set",
            "value": 1336029,
            "unit": "ns/op\t    3300 B/op\t      42 allocs/op",
            "extra": "877 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - ns/op",
            "value": 1336029,
            "unit": "ns/op",
            "extra": "877 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - B/op",
            "value": 3300,
            "unit": "B/op",
            "extra": "877 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "877 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get",
            "value": 1334067,
            "unit": "ns/op\t    3258 B/op\t      42 allocs/op",
            "extra": "876 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - ns/op",
            "value": 1334067,
            "unit": "ns/op",
            "extra": "876 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - B/op",
            "value": 3258,
            "unit": "B/op",
            "extra": "876 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "876 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete",
            "value": 2708165,
            "unit": "ns/op\t    6431 B/op\t      81 allocs/op",
            "extra": "444 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - ns/op",
            "value": 2708165,
            "unit": "ns/op",
            "extra": "444 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - B/op",
            "value": 6431,
            "unit": "B/op",
            "extra": "444 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - allocs/op",
            "value": 81,
            "unit": "allocs/op",
            "extra": "444 times\n4 procs"
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
          "id": "4748a8a4a12ef8880fc746830110305883a0ba31",
          "message": "Merge pull request #2626 from gofiber/dependabot/go_modules/aerospike/grpc-gateway-modules-4acc445a2a\n\nchore(deps): bump the grpc-gateway-modules group across 17 directories with 1 update",
          "timestamp": "2026-04-17T08:53:44-04:00",
          "tree_id": "0d95b98681180624159807083d3ffa29ccbd4b19",
          "url": "https://github.com/gofiber/storage/commit/4748a8a4a12ef8880fc746830110305883a0ba31"
        },
        "date": 1776430750768,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Scylla_Set",
            "value": 1330161,
            "unit": "ns/op\t    3308 B/op\t      42 allocs/op",
            "extra": "882 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - ns/op",
            "value": 1330161,
            "unit": "ns/op",
            "extra": "882 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - B/op",
            "value": 3308,
            "unit": "B/op",
            "extra": "882 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "882 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get",
            "value": 1333903,
            "unit": "ns/op\t    3259 B/op\t      42 allocs/op",
            "extra": "884 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - ns/op",
            "value": 1333903,
            "unit": "ns/op",
            "extra": "884 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - B/op",
            "value": 3259,
            "unit": "B/op",
            "extra": "884 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "884 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete",
            "value": 2651522,
            "unit": "ns/op\t    6441 B/op\t      82 allocs/op",
            "extra": "441 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - ns/op",
            "value": 2651522,
            "unit": "ns/op",
            "extra": "441 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - B/op",
            "value": 6441,
            "unit": "B/op",
            "extra": "441 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "441 times\n4 procs"
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
          "id": "c677c9225a01c36de776d5f6faea50ff80c58f1b",
          "message": "Merge pull request #2643 from gofiber/dependabot/go_modules/postgres/opentelemetry-modules-6c591870ba\n\nchore(deps): bump the opentelemetry-modules group across 7 directories with 6 updates",
          "timestamp": "2026-04-20T09:49:57+02:00",
          "tree_id": "0209c9fc3ef5ba4ee1e5dd7eb562f8f4c8e6b98f",
          "url": "https://github.com/gofiber/storage/commit/c677c9225a01c36de776d5f6faea50ff80c58f1b"
        },
        "date": 1776671582616,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Scylla_Set",
            "value": 1308989,
            "unit": "ns/op\t    3302 B/op\t      42 allocs/op",
            "extra": "898 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - ns/op",
            "value": 1308989,
            "unit": "ns/op",
            "extra": "898 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - B/op",
            "value": 3302,
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
            "value": 1319789,
            "unit": "ns/op\t    3259 B/op\t      42 allocs/op",
            "extra": "898 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - ns/op",
            "value": 1319789,
            "unit": "ns/op",
            "extra": "898 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - B/op",
            "value": 3259,
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
            "value": 2617102,
            "unit": "ns/op\t    6432 B/op\t      81 allocs/op",
            "extra": "450 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - ns/op",
            "value": 2617102,
            "unit": "ns/op",
            "extra": "450 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - B/op",
            "value": 6432,
            "unit": "B/op",
            "extra": "450 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - allocs/op",
            "value": 81,
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
          "id": "3c1e7a26b81ee4d0634b034d9c8d0531c7bb1796",
          "message": "Merge pull request #2678 from gofiber/dependabot/go_modules/pebble/klauspost-modules-92388aaed8\n\nchore(deps): bump the klauspost-modules group across 10 directories with 1 update",
          "timestamp": "2026-05-01T10:16:58+02:00",
          "tree_id": "2088ec1a5398a717279947e690597b3e35662e03",
          "url": "https://github.com/gofiber/storage/commit/3c1e7a26b81ee4d0634b034d9c8d0531c7bb1796"
        },
        "date": 1777624271192,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Scylla_Set",
            "value": 1307004,
            "unit": "ns/op\t    3306 B/op\t      42 allocs/op",
            "extra": "898 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - ns/op",
            "value": 1307004,
            "unit": "ns/op",
            "extra": "898 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - B/op",
            "value": 3306,
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
            "value": 1318846,
            "unit": "ns/op\t    3251 B/op\t      42 allocs/op",
            "extra": "885 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - ns/op",
            "value": 1318846,
            "unit": "ns/op",
            "extra": "885 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - B/op",
            "value": 3251,
            "unit": "B/op",
            "extra": "885 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "885 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete",
            "value": 2600091,
            "unit": "ns/op\t    6420 B/op\t      81 allocs/op",
            "extra": "453 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - ns/op",
            "value": 2600091,
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
          "id": "a6b8015292326cf7b3d248de064dc37375a03529",
          "message": "Merge pull request #2677 from gofiber/dependabot/go_modules/postgres/shirou-modules-8cdce9618a\n\nchore(deps): bump the shirou-modules group across 9 directories with 1 update",
          "timestamp": "2026-05-01T10:17:54+02:00",
          "tree_id": "5007966cc707caa233e9daa5ab01eb58428671f1",
          "url": "https://github.com/gofiber/storage/commit/a6b8015292326cf7b3d248de064dc37375a03529"
        },
        "date": 1777624333612,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Scylla_Set",
            "value": 1308640,
            "unit": "ns/op\t    3303 B/op\t      42 allocs/op",
            "extra": "896 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - ns/op",
            "value": 1308640,
            "unit": "ns/op",
            "extra": "896 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Set - B/op",
            "value": 3303,
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
            "value": 1313133,
            "unit": "ns/op\t    3257 B/op\t      42 allocs/op",
            "extra": "898 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - ns/op",
            "value": 1313133,
            "unit": "ns/op",
            "extra": "898 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_Get - B/op",
            "value": 3257,
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
            "value": 2604996,
            "unit": "ns/op\t    6436 B/op\t      82 allocs/op",
            "extra": "457 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - ns/op",
            "value": 2604996,
            "unit": "ns/op",
            "extra": "457 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - B/op",
            "value": 6436,
            "unit": "B/op",
            "extra": "457 times\n4 procs"
          },
          {
            "name": "Benchmark_Scylla_SetAndDelete - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "457 times\n4 procs"
          }
        ]
      }
    ]
  }
}