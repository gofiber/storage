window.BENCHMARK_DATA = {
  "lastUpdate": 1768893545255,
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
        "date": 1763658069492,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Cassandra_Set",
            "value": 1889357,
            "unit": "ns/op\t    4231 B/op\t      66 allocs/op",
            "extra": "622 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - ns/op",
            "value": 1889357,
            "unit": "ns/op",
            "extra": "622 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - B/op",
            "value": 4231,
            "unit": "B/op",
            "extra": "622 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - allocs/op",
            "value": 66,
            "unit": "allocs/op",
            "extra": "622 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get",
            "value": 1907456,
            "unit": "ns/op\t    3806 B/op\t      58 allocs/op",
            "extra": "604 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - ns/op",
            "value": 1907456,
            "unit": "ns/op",
            "extra": "604 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - B/op",
            "value": 3806,
            "unit": "B/op",
            "extra": "604 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - allocs/op",
            "value": 58,
            "unit": "allocs/op",
            "extra": "604 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete",
            "value": 3805256,
            "unit": "ns/op\t    7658 B/op\t     117 allocs/op",
            "extra": "265 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - ns/op",
            "value": 3805256,
            "unit": "ns/op",
            "extra": "265 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - B/op",
            "value": 7658,
            "unit": "B/op",
            "extra": "265 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - allocs/op",
            "value": 117,
            "unit": "allocs/op",
            "extra": "265 times\n4 procs"
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
        "date": 1763661837859,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Cassandra_Set",
            "value": 2044193,
            "unit": "ns/op\t    4287 B/op\t      66 allocs/op",
            "extra": "502 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - ns/op",
            "value": 2044193,
            "unit": "ns/op",
            "extra": "502 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - B/op",
            "value": 4287,
            "unit": "B/op",
            "extra": "502 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - allocs/op",
            "value": 66,
            "unit": "allocs/op",
            "extra": "502 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get",
            "value": 1996723,
            "unit": "ns/op\t    3844 B/op\t      58 allocs/op",
            "extra": "583 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - ns/op",
            "value": 1996723,
            "unit": "ns/op",
            "extra": "583 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - B/op",
            "value": 3844,
            "unit": "B/op",
            "extra": "583 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - allocs/op",
            "value": 58,
            "unit": "allocs/op",
            "extra": "583 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete",
            "value": 3885547,
            "unit": "ns/op\t    7722 B/op\t     117 allocs/op",
            "extra": "300 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - ns/op",
            "value": 3885547,
            "unit": "ns/op",
            "extra": "300 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - B/op",
            "value": 7722,
            "unit": "B/op",
            "extra": "300 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - allocs/op",
            "value": 117,
            "unit": "allocs/op",
            "extra": "300 times\n4 procs"
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
        "date": 1764260107363,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Cassandra_Set",
            "value": 2013447,
            "unit": "ns/op\t    4265 B/op\t      66 allocs/op",
            "extra": "585 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - ns/op",
            "value": 2013447,
            "unit": "ns/op",
            "extra": "585 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - B/op",
            "value": 4265,
            "unit": "B/op",
            "extra": "585 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - allocs/op",
            "value": 66,
            "unit": "allocs/op",
            "extra": "585 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get",
            "value": 1987476,
            "unit": "ns/op\t    3824 B/op\t      58 allocs/op",
            "extra": "505 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - ns/op",
            "value": 1987476,
            "unit": "ns/op",
            "extra": "505 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - B/op",
            "value": 3824,
            "unit": "B/op",
            "extra": "505 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - allocs/op",
            "value": 58,
            "unit": "allocs/op",
            "extra": "505 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete",
            "value": 3815072,
            "unit": "ns/op\t    7697 B/op\t     117 allocs/op",
            "extra": "310 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - ns/op",
            "value": 3815072,
            "unit": "ns/op",
            "extra": "310 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - B/op",
            "value": 7697,
            "unit": "B/op",
            "extra": "310 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - allocs/op",
            "value": 117,
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
          "id": "8792c10062004227f6e0a37edeba9803076dfe5e",
          "message": "Merge pull request #2265 from gofiber/dependabot/go_modules/cassandra/golang-modules-2acce47480\n\nchore(deps): bump the golang-modules group across 2 directories with 5 updates",
          "timestamp": "2025-11-27T17:21:17+01:00",
          "tree_id": "0e8e88ac32ee834ed943c24b99eaa73e68ce7e9f",
          "url": "https://github.com/gofiber/storage/commit/8792c10062004227f6e0a37edeba9803076dfe5e"
        },
        "date": 1764260712189,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Cassandra_Set",
            "value": 1917789,
            "unit": "ns/op\t    4231 B/op\t      66 allocs/op",
            "extra": "602 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - ns/op",
            "value": 1917789,
            "unit": "ns/op",
            "extra": "602 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - B/op",
            "value": 4231,
            "unit": "B/op",
            "extra": "602 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - allocs/op",
            "value": 66,
            "unit": "allocs/op",
            "extra": "602 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get",
            "value": 2057611,
            "unit": "ns/op\t    3839 B/op\t      58 allocs/op",
            "extra": "487 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - ns/op",
            "value": 2057611,
            "unit": "ns/op",
            "extra": "487 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - B/op",
            "value": 3839,
            "unit": "B/op",
            "extra": "487 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - allocs/op",
            "value": 58,
            "unit": "allocs/op",
            "extra": "487 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete",
            "value": 3800710,
            "unit": "ns/op\t    7642 B/op\t     117 allocs/op",
            "extra": "303 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - ns/op",
            "value": 3800710,
            "unit": "ns/op",
            "extra": "303 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - B/op",
            "value": 7642,
            "unit": "B/op",
            "extra": "303 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - allocs/op",
            "value": 117,
            "unit": "allocs/op",
            "extra": "303 times\n4 procs"
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
        "date": 1765267808560,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Cassandra_Set",
            "value": 2010693,
            "unit": "ns/op\t    4274 B/op\t      66 allocs/op",
            "extra": "554 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - ns/op",
            "value": 2010693,
            "unit": "ns/op",
            "extra": "554 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - B/op",
            "value": 4274,
            "unit": "B/op",
            "extra": "554 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - allocs/op",
            "value": 66,
            "unit": "allocs/op",
            "extra": "554 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get",
            "value": 2193746,
            "unit": "ns/op\t    3844 B/op\t      58 allocs/op",
            "extra": "470 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - ns/op",
            "value": 2193746,
            "unit": "ns/op",
            "extra": "470 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - B/op",
            "value": 3844,
            "unit": "B/op",
            "extra": "470 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - allocs/op",
            "value": 58,
            "unit": "allocs/op",
            "extra": "470 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete",
            "value": 4148452,
            "unit": "ns/op\t    7662 B/op\t     117 allocs/op",
            "extra": "286 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - ns/op",
            "value": 4148452,
            "unit": "ns/op",
            "extra": "286 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - B/op",
            "value": 7662,
            "unit": "B/op",
            "extra": "286 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - allocs/op",
            "value": 117,
            "unit": "allocs/op",
            "extra": "286 times\n4 procs"
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
        "date": 1765439924886,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Cassandra_Set",
            "value": 1871188,
            "unit": "ns/op\t    4264 B/op\t      66 allocs/op",
            "extra": "616 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - ns/op",
            "value": 1871188,
            "unit": "ns/op",
            "extra": "616 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - B/op",
            "value": 4264,
            "unit": "B/op",
            "extra": "616 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - allocs/op",
            "value": 66,
            "unit": "allocs/op",
            "extra": "616 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get",
            "value": 2018418,
            "unit": "ns/op\t    3819 B/op\t      58 allocs/op",
            "extra": "498 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - ns/op",
            "value": 2018418,
            "unit": "ns/op",
            "extra": "498 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - B/op",
            "value": 3819,
            "unit": "B/op",
            "extra": "498 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - allocs/op",
            "value": 58,
            "unit": "allocs/op",
            "extra": "498 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete",
            "value": 3798119,
            "unit": "ns/op\t    7654 B/op\t     117 allocs/op",
            "extra": "270 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - ns/op",
            "value": 3798119,
            "unit": "ns/op",
            "extra": "270 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - B/op",
            "value": 7654,
            "unit": "B/op",
            "extra": "270 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - allocs/op",
            "value": 117,
            "unit": "allocs/op",
            "extra": "270 times\n4 procs"
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
        "date": 1766043960871,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Cassandra_Set",
            "value": 2003695,
            "unit": "ns/op\t    4274 B/op\t      65 allocs/op",
            "extra": "500 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - ns/op",
            "value": 2003695,
            "unit": "ns/op",
            "extra": "500 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - B/op",
            "value": 4274,
            "unit": "B/op",
            "extra": "500 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - allocs/op",
            "value": 65,
            "unit": "allocs/op",
            "extra": "500 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get",
            "value": 2017717,
            "unit": "ns/op\t    3771 B/op\t      55 allocs/op",
            "extra": "500 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - ns/op",
            "value": 2017717,
            "unit": "ns/op",
            "extra": "500 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - B/op",
            "value": 3771,
            "unit": "B/op",
            "extra": "500 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "500 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete",
            "value": 3941782,
            "unit": "ns/op\t    7704 B/op\t     114 allocs/op",
            "extra": "258 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - ns/op",
            "value": 3941782,
            "unit": "ns/op",
            "extra": "258 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - B/op",
            "value": 7704,
            "unit": "B/op",
            "extra": "258 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - allocs/op",
            "value": 114,
            "unit": "allocs/op",
            "extra": "258 times\n4 procs"
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
        "date": 1768376976245,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Cassandra_Set",
            "value": 1935445,
            "unit": "ns/op\t    4263 B/op\t      65 allocs/op",
            "extra": "596 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - ns/op",
            "value": 1935445,
            "unit": "ns/op",
            "extra": "596 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - B/op",
            "value": 4263,
            "unit": "B/op",
            "extra": "596 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - allocs/op",
            "value": 65,
            "unit": "allocs/op",
            "extra": "596 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get",
            "value": 1990030,
            "unit": "ns/op\t    3795 B/op\t      55 allocs/op",
            "extra": "588 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - ns/op",
            "value": 1990030,
            "unit": "ns/op",
            "extra": "588 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - B/op",
            "value": 3795,
            "unit": "B/op",
            "extra": "588 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "588 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete",
            "value": 3792488,
            "unit": "ns/op\t    7633 B/op\t     114 allocs/op",
            "extra": "302 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - ns/op",
            "value": 3792488,
            "unit": "ns/op",
            "extra": "302 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - B/op",
            "value": 7633,
            "unit": "B/op",
            "extra": "302 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - allocs/op",
            "value": 114,
            "unit": "allocs/op",
            "extra": "302 times\n4 procs"
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
        "date": 1768377473224,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Cassandra_Set",
            "value": 2122174,
            "unit": "ns/op\t    4243 B/op\t      65 allocs/op",
            "extra": "519 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - ns/op",
            "value": 2122174,
            "unit": "ns/op",
            "extra": "519 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - B/op",
            "value": 4243,
            "unit": "B/op",
            "extra": "519 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - allocs/op",
            "value": 65,
            "unit": "allocs/op",
            "extra": "519 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get",
            "value": 2126835,
            "unit": "ns/op\t    3783 B/op\t      55 allocs/op",
            "extra": "618 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - ns/op",
            "value": 2126835,
            "unit": "ns/op",
            "extra": "618 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - B/op",
            "value": 3783,
            "unit": "B/op",
            "extra": "618 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "618 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete",
            "value": 4027926,
            "unit": "ns/op\t    7683 B/op\t     114 allocs/op",
            "extra": "306 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - ns/op",
            "value": 4027926,
            "unit": "ns/op",
            "extra": "306 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - B/op",
            "value": 7683,
            "unit": "B/op",
            "extra": "306 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - allocs/op",
            "value": 114,
            "unit": "allocs/op",
            "extra": "306 times\n4 procs"
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
        "date": 1768379403477,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Cassandra_Set",
            "value": 1909753,
            "unit": "ns/op\t    4232 B/op\t      65 allocs/op",
            "extra": "608 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - ns/op",
            "value": 1909753,
            "unit": "ns/op",
            "extra": "608 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - B/op",
            "value": 4232,
            "unit": "B/op",
            "extra": "608 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - allocs/op",
            "value": 65,
            "unit": "allocs/op",
            "extra": "608 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get",
            "value": 2007530,
            "unit": "ns/op\t    3770 B/op\t      55 allocs/op",
            "extra": "504 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - ns/op",
            "value": 2007530,
            "unit": "ns/op",
            "extra": "504 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - B/op",
            "value": 3770,
            "unit": "B/op",
            "extra": "504 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "504 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete",
            "value": 3811145,
            "unit": "ns/op\t    7678 B/op\t     114 allocs/op",
            "extra": "308 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - ns/op",
            "value": 3811145,
            "unit": "ns/op",
            "extra": "308 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - B/op",
            "value": 7678,
            "unit": "B/op",
            "extra": "308 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - allocs/op",
            "value": 114,
            "unit": "allocs/op",
            "extra": "308 times\n4 procs"
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
        "date": 1768380346437,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Cassandra_Set",
            "value": 1944027,
            "unit": "ns/op\t    4237 B/op\t      65 allocs/op",
            "extra": "584 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - ns/op",
            "value": 1944027,
            "unit": "ns/op",
            "extra": "584 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - B/op",
            "value": 4237,
            "unit": "B/op",
            "extra": "584 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - allocs/op",
            "value": 65,
            "unit": "allocs/op",
            "extra": "584 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get",
            "value": 2065474,
            "unit": "ns/op\t    3777 B/op\t      55 allocs/op",
            "extra": "500 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - ns/op",
            "value": 2065474,
            "unit": "ns/op",
            "extra": "500 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - B/op",
            "value": 3777,
            "unit": "B/op",
            "extra": "500 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "500 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete",
            "value": 3796339,
            "unit": "ns/op\t    7624 B/op\t     114 allocs/op",
            "extra": "307 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - ns/op",
            "value": 3796339,
            "unit": "ns/op",
            "extra": "307 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - B/op",
            "value": 7624,
            "unit": "B/op",
            "extra": "307 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - allocs/op",
            "value": 114,
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
          "id": "0ce31edb8c13b3ece86099a2202ba41aeb43b2c0",
          "message": "Merge pull request #2407 from gofiber/dependabot/go_modules/cassandra/github.com/sirupsen/logrus-1.9.4\n\nchore(deps): bump github.com/sirupsen/logrus from 1.9.3 to 1.9.4 in /cassandra",
          "timestamp": "2026-01-16T08:19:13+01:00",
          "tree_id": "4859529f84b6b74e8a3f314e876c31a5e8b614a7",
          "url": "https://github.com/gofiber/storage/commit/0ce31edb8c13b3ece86099a2202ba41aeb43b2c0"
        },
        "date": 1768548464259,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Cassandra_Set",
            "value": 1955387,
            "unit": "ns/op\t    4249 B/op\t      65 allocs/op",
            "extra": "517 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - ns/op",
            "value": 1955387,
            "unit": "ns/op",
            "extra": "517 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - B/op",
            "value": 4249,
            "unit": "B/op",
            "extra": "517 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - allocs/op",
            "value": 65,
            "unit": "allocs/op",
            "extra": "517 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get",
            "value": 2017513,
            "unit": "ns/op\t    3773 B/op\t      55 allocs/op",
            "extra": "504 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - ns/op",
            "value": 2017513,
            "unit": "ns/op",
            "extra": "504 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - B/op",
            "value": 3773,
            "unit": "B/op",
            "extra": "504 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "504 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete",
            "value": 3795348,
            "unit": "ns/op\t    7674 B/op\t     114 allocs/op",
            "extra": "310 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - ns/op",
            "value": 3795348,
            "unit": "ns/op",
            "extra": "310 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - B/op",
            "value": 7674,
            "unit": "B/op",
            "extra": "310 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - allocs/op",
            "value": 114,
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
          "id": "11c05d6dd6b71047aa48d58de62f2dadfe0e7fe5",
          "message": "Merge pull request #2431 from gofiber/dependabot/go_modules/aerospike/klauspost-modules-060a4d48f9\n\nchore(deps): bump the klauspost-modules group across 27 directories with 1 update",
          "timestamp": "2026-01-20T08:14:15+01:00",
          "tree_id": "e9bfe2f24534f6ec7ff4894e21bafd80f6f04c97",
          "url": "https://github.com/gofiber/storage/commit/11c05d6dd6b71047aa48d58de62f2dadfe0e7fe5"
        },
        "date": 1768893540347,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Cassandra_Set",
            "value": 1929067,
            "unit": "ns/op\t    4272 B/op\t      65 allocs/op",
            "extra": "603 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - ns/op",
            "value": 1929067,
            "unit": "ns/op",
            "extra": "603 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "603 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - allocs/op",
            "value": 65,
            "unit": "allocs/op",
            "extra": "603 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get",
            "value": 2038789,
            "unit": "ns/op\t    3767 B/op\t      55 allocs/op",
            "extra": "591 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - ns/op",
            "value": 2038789,
            "unit": "ns/op",
            "extra": "591 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - B/op",
            "value": 3767,
            "unit": "B/op",
            "extra": "591 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "591 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete",
            "value": 3792635,
            "unit": "ns/op\t    7683 B/op\t     114 allocs/op",
            "extra": "309 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - ns/op",
            "value": 3792635,
            "unit": "ns/op",
            "extra": "309 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - B/op",
            "value": 7683,
            "unit": "B/op",
            "extra": "309 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - allocs/op",
            "value": 114,
            "unit": "allocs/op",
            "extra": "309 times\n4 procs"
          }
        ]
      }
    ]
  }
}