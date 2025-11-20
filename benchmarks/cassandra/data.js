window.BENCHMARK_DATA = {
  "lastUpdate": 1763657779707,
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
        "date": 1751882320031,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Cassandra_Set",
            "value": 1993929,
            "unit": "ns/op\t    4273 B/op\t      66 allocs/op",
            "extra": "590 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - ns/op",
            "value": 1993929,
            "unit": "ns/op",
            "extra": "590 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - B/op",
            "value": 4273,
            "unit": "B/op",
            "extra": "590 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - allocs/op",
            "value": 66,
            "unit": "allocs/op",
            "extra": "590 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get",
            "value": 2072748,
            "unit": "ns/op\t    3820 B/op\t      58 allocs/op",
            "extra": "566 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - ns/op",
            "value": 2072748,
            "unit": "ns/op",
            "extra": "566 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - B/op",
            "value": 3820,
            "unit": "B/op",
            "extra": "566 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - allocs/op",
            "value": 58,
            "unit": "allocs/op",
            "extra": "566 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete",
            "value": 4101772,
            "unit": "ns/op\t    7712 B/op\t     117 allocs/op",
            "extra": "248 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - ns/op",
            "value": 4101772,
            "unit": "ns/op",
            "extra": "248 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - B/op",
            "value": 7712,
            "unit": "B/op",
            "extra": "248 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - allocs/op",
            "value": 117,
            "unit": "allocs/op",
            "extra": "248 times\n4 procs"
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
        "date": 1752653243379,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Cassandra_Set",
            "value": 1936260,
            "unit": "ns/op\t    4265 B/op\t      66 allocs/op",
            "extra": "597 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - ns/op",
            "value": 1936260,
            "unit": "ns/op",
            "extra": "597 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - B/op",
            "value": 4265,
            "unit": "B/op",
            "extra": "597 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - allocs/op",
            "value": 66,
            "unit": "allocs/op",
            "extra": "597 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get",
            "value": 2064233,
            "unit": "ns/op\t    3815 B/op\t      58 allocs/op",
            "extra": "490 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - ns/op",
            "value": 2064233,
            "unit": "ns/op",
            "extra": "490 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - B/op",
            "value": 3815,
            "unit": "B/op",
            "extra": "490 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - allocs/op",
            "value": 58,
            "unit": "allocs/op",
            "extra": "490 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete",
            "value": 3887839,
            "unit": "ns/op\t    7692 B/op\t     117 allocs/op",
            "extra": "307 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - ns/op",
            "value": 3887839,
            "unit": "ns/op",
            "extra": "307 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - B/op",
            "value": 7692,
            "unit": "B/op",
            "extra": "307 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - allocs/op",
            "value": 117,
            "unit": "allocs/op",
            "extra": "307 times\n4 procs"
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
          "id": "8ca675e1b5668877ff24b736a13f344689c84379",
          "message": "Merge pull request #1974 from gofiber/dependabot/go_modules/cassandra/github.com/docker/docker-28.3.3incompatible\n\nchore(deps): bump github.com/docker/docker from 28.2.2+incompatible to 28.3.3+incompatible in /cassandra",
          "timestamp": "2025-11-06T09:01:38+01:00",
          "tree_id": "66777ab0991e5451b91533435db16b839b31352b",
          "url": "https://github.com/gofiber/storage/commit/8ca675e1b5668877ff24b736a13f344689c84379"
        },
        "date": 1762417640909,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Cassandra_Set",
            "value": 1964505,
            "unit": "ns/op\t    4287 B/op\t      66 allocs/op",
            "extra": "512 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - ns/op",
            "value": 1964505,
            "unit": "ns/op",
            "extra": "512 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - B/op",
            "value": 4287,
            "unit": "B/op",
            "extra": "512 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - allocs/op",
            "value": 66,
            "unit": "allocs/op",
            "extra": "512 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get",
            "value": 2045703,
            "unit": "ns/op\t    3842 B/op\t      58 allocs/op",
            "extra": "553 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - ns/op",
            "value": 2045703,
            "unit": "ns/op",
            "extra": "553 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - B/op",
            "value": 3842,
            "unit": "B/op",
            "extra": "553 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - allocs/op",
            "value": 58,
            "unit": "allocs/op",
            "extra": "553 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete",
            "value": 4055676,
            "unit": "ns/op\t    7714 B/op\t     117 allocs/op",
            "extra": "254 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - ns/op",
            "value": 4055676,
            "unit": "ns/op",
            "extra": "254 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - B/op",
            "value": 7714,
            "unit": "B/op",
            "extra": "254 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - allocs/op",
            "value": 117,
            "unit": "allocs/op",
            "extra": "254 times\n4 procs"
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
          "id": "da7dad71493aa4d9ea7b507774caa7202144f893",
          "message": "Merge pull request #1995 from gofiber/dependabot/go_modules/cassandra/github.com/docker/docker-28.5.2incompatible\n\nchore(deps): bump github.com/docker/docker from 28.3.3+incompatible to 28.5.2+incompatible in /cassandra",
          "timestamp": "2025-11-06T09:23:35+01:00",
          "tree_id": "f42df202a9cb5da7a5b8d391c89c5f6099624d5a",
          "url": "https://github.com/gofiber/storage/commit/da7dad71493aa4d9ea7b507774caa7202144f893"
        },
        "date": 1762418460244,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Cassandra_Set",
            "value": 1882713,
            "unit": "ns/op\t    4244 B/op\t      66 allocs/op",
            "extra": "621 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - ns/op",
            "value": 1882713,
            "unit": "ns/op",
            "extra": "621 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - B/op",
            "value": 4244,
            "unit": "B/op",
            "extra": "621 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - allocs/op",
            "value": 66,
            "unit": "allocs/op",
            "extra": "621 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get",
            "value": 1903998,
            "unit": "ns/op\t    3831 B/op\t      58 allocs/op",
            "extra": "622 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - ns/op",
            "value": 1903998,
            "unit": "ns/op",
            "extra": "622 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - B/op",
            "value": 3831,
            "unit": "B/op",
            "extra": "622 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - allocs/op",
            "value": 58,
            "unit": "allocs/op",
            "extra": "622 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete",
            "value": 3678898,
            "unit": "ns/op\t    7708 B/op\t     117 allocs/op",
            "extra": "320 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - ns/op",
            "value": 3678898,
            "unit": "ns/op",
            "extra": "320 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - B/op",
            "value": 7708,
            "unit": "B/op",
            "extra": "320 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - allocs/op",
            "value": 117,
            "unit": "allocs/op",
            "extra": "320 times\n4 procs"
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
        "date": 1763657775646,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Cassandra_Set",
            "value": 1966017,
            "unit": "ns/op\t    4243 B/op\t      66 allocs/op",
            "extra": "512 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - ns/op",
            "value": 1966017,
            "unit": "ns/op",
            "extra": "512 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - B/op",
            "value": 4243,
            "unit": "B/op",
            "extra": "512 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - allocs/op",
            "value": 66,
            "unit": "allocs/op",
            "extra": "512 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get",
            "value": 2029824,
            "unit": "ns/op\t    3838 B/op\t      58 allocs/op",
            "extra": "502 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - ns/op",
            "value": 2029824,
            "unit": "ns/op",
            "extra": "502 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - B/op",
            "value": 3838,
            "unit": "B/op",
            "extra": "502 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - allocs/op",
            "value": 58,
            "unit": "allocs/op",
            "extra": "502 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete",
            "value": 3956044,
            "unit": "ns/op\t    7728 B/op\t     117 allocs/op",
            "extra": "254 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - ns/op",
            "value": 3956044,
            "unit": "ns/op",
            "extra": "254 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - B/op",
            "value": 7728,
            "unit": "B/op",
            "extra": "254 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - allocs/op",
            "value": 117,
            "unit": "allocs/op",
            "extra": "254 times\n4 procs"
          }
        ]
      }
    ]
  }
}