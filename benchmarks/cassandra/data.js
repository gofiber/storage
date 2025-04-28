window.BENCHMARK_DATA = {
  "lastUpdate": 1745838644556,
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
          "id": "e596d3994687c6c841ec3326f3bed1f957a369c0",
          "message": "Merge pull request #1665 from MitulShah1/implement-cassandra\n\nfeat: Add Apache Cassandra Storage Driver",
          "timestamp": "2025-04-25T14:55:24+02:00",
          "tree_id": "bb254a1c6ec439f892f57897486a3153aa74441d",
          "url": "https://github.com/gofiber/storage/commit/e596d3994687c6c841ec3326f3bed1f957a369c0"
        },
        "date": 1745585918373,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Cassandra_Set",
            "value": 1955643,
            "unit": "ns/op\t    3942 B/op\t      65 allocs/op",
            "extra": "612 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - ns/op",
            "value": 1955643,
            "unit": "ns/op",
            "extra": "612 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - B/op",
            "value": 3942,
            "unit": "B/op",
            "extra": "612 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - allocs/op",
            "value": 65,
            "unit": "allocs/op",
            "extra": "612 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get",
            "value": 2073991,
            "unit": "ns/op\t    3519 B/op\t      57 allocs/op",
            "extra": "494 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - ns/op",
            "value": 2073991,
            "unit": "ns/op",
            "extra": "494 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - B/op",
            "value": 3519,
            "unit": "B/op",
            "extra": "494 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - allocs/op",
            "value": 57,
            "unit": "allocs/op",
            "extra": "494 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete",
            "value": 3898510,
            "unit": "ns/op\t    7056 B/op\t     115 allocs/op",
            "extra": "298 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - ns/op",
            "value": 3898510,
            "unit": "ns/op",
            "extra": "298 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - B/op",
            "value": 7056,
            "unit": "B/op",
            "extra": "298 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - allocs/op",
            "value": 115,
            "unit": "allocs/op",
            "extra": "298 times\n4 procs"
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
        "date": 1745688318247,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Cassandra_Set",
            "value": 1907471,
            "unit": "ns/op\t    3912 B/op\t      65 allocs/op",
            "extra": "621 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - ns/op",
            "value": 1907471,
            "unit": "ns/op",
            "extra": "621 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - B/op",
            "value": 3912,
            "unit": "B/op",
            "extra": "621 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - allocs/op",
            "value": 65,
            "unit": "allocs/op",
            "extra": "621 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get",
            "value": 1965237,
            "unit": "ns/op\t    3497 B/op\t      57 allocs/op",
            "extra": "597 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - ns/op",
            "value": 1965237,
            "unit": "ns/op",
            "extra": "597 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - B/op",
            "value": 3497,
            "unit": "B/op",
            "extra": "597 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - allocs/op",
            "value": 57,
            "unit": "allocs/op",
            "extra": "597 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete",
            "value": 3824179,
            "unit": "ns/op\t    7067 B/op\t     115 allocs/op",
            "extra": "264 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - ns/op",
            "value": 3824179,
            "unit": "ns/op",
            "extra": "264 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - B/op",
            "value": 7067,
            "unit": "B/op",
            "extra": "264 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - allocs/op",
            "value": 115,
            "unit": "allocs/op",
            "extra": "264 times\n4 procs"
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
          "id": "1e0293b778a3f9c34840f9844c3b948a85f53c9a",
          "message": "Merge pull request #1693 from gofiber/dependabot/go_modules/cassandra/github.com/testcontainers/testcontainers-go-0.37.0\n\nchore(deps): bump github.com/testcontainers/testcontainers-go from 0.36.0 to 0.37.0 in /cassandra",
          "timestamp": "2025-04-28T12:50:05+02:00",
          "tree_id": "df6d6f7d1e355fce96dea67bfc7f20a439f92ae9",
          "url": "https://github.com/gofiber/storage/commit/1e0293b778a3f9c34840f9844c3b948a85f53c9a"
        },
        "date": 1745837956927,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Cassandra_Set",
            "value": 1983141,
            "unit": "ns/op\t    3950 B/op\t      65 allocs/op",
            "extra": "591 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - ns/op",
            "value": 1983141,
            "unit": "ns/op",
            "extra": "591 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - B/op",
            "value": 3950,
            "unit": "B/op",
            "extra": "591 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - allocs/op",
            "value": 65,
            "unit": "allocs/op",
            "extra": "591 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get",
            "value": 2081469,
            "unit": "ns/op\t    3540 B/op\t      57 allocs/op",
            "extra": "492 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - ns/op",
            "value": 2081469,
            "unit": "ns/op",
            "extra": "492 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - B/op",
            "value": 3540,
            "unit": "B/op",
            "extra": "492 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - allocs/op",
            "value": 57,
            "unit": "allocs/op",
            "extra": "492 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete",
            "value": 3886539,
            "unit": "ns/op\t    7053 B/op\t     115 allocs/op",
            "extra": "300 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - ns/op",
            "value": 3886539,
            "unit": "ns/op",
            "extra": "300 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - B/op",
            "value": 7053,
            "unit": "B/op",
            "extra": "300 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - allocs/op",
            "value": 115,
            "unit": "allocs/op",
            "extra": "300 times\n4 procs"
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
          "id": "e755ca8acacb8ae14cd0fd9d8a7bb779be409eec",
          "message": "Merge pull request #1692 from gofiber/dependabot/go_modules/cassandra/github.com/testcontainers/testcontainers-go/modules/cassandra-0.37.0\n\nchore(deps): bump github.com/testcontainers/testcontainers-go/modules/cassandra from 0.36.0 to 0.37.0 in /cassandra",
          "timestamp": "2025-04-28T13:07:31+02:00",
          "tree_id": "60e6bb77b000176a051880e859761b768b43a1de",
          "url": "https://github.com/gofiber/storage/commit/e755ca8acacb8ae14cd0fd9d8a7bb779be409eec"
        },
        "date": 1745838636534,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Cassandra_Set",
            "value": 1987650,
            "unit": "ns/op\t    3955 B/op\t      65 allocs/op",
            "extra": "508 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - ns/op",
            "value": 1987650,
            "unit": "ns/op",
            "extra": "508 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - B/op",
            "value": 3955,
            "unit": "B/op",
            "extra": "508 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - allocs/op",
            "value": 65,
            "unit": "allocs/op",
            "extra": "508 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get",
            "value": 2010133,
            "unit": "ns/op\t    3530 B/op\t      57 allocs/op",
            "extra": "499 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - ns/op",
            "value": 2010133,
            "unit": "ns/op",
            "extra": "499 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - B/op",
            "value": 3530,
            "unit": "B/op",
            "extra": "499 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - allocs/op",
            "value": 57,
            "unit": "allocs/op",
            "extra": "499 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete",
            "value": 3742870,
            "unit": "ns/op\t    7050 B/op\t     115 allocs/op",
            "extra": "310 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - ns/op",
            "value": 3742870,
            "unit": "ns/op",
            "extra": "310 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - B/op",
            "value": 7050,
            "unit": "B/op",
            "extra": "310 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - allocs/op",
            "value": 115,
            "unit": "allocs/op",
            "extra": "310 times\n4 procs"
          }
        ]
      }
    ]
  }
}