window.BENCHMARK_DATA = {
  "lastUpdate": 1777881604436,
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
        "date": 1769066438267,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Cassandra_Set",
            "value": 2002981,
            "unit": "ns/op\t    4267 B/op\t      65 allocs/op",
            "extra": "608 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - ns/op",
            "value": 2002981,
            "unit": "ns/op",
            "extra": "608 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - B/op",
            "value": 4267,
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
            "value": 1986048,
            "unit": "ns/op\t    3771 B/op\t      55 allocs/op",
            "extra": "596 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - ns/op",
            "value": 1986048,
            "unit": "ns/op",
            "extra": "596 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - B/op",
            "value": 3771,
            "unit": "B/op",
            "extra": "596 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "596 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete",
            "value": 3966538,
            "unit": "ns/op\t    7675 B/op\t     114 allocs/op",
            "extra": "308 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - ns/op",
            "value": 3966538,
            "unit": "ns/op",
            "extra": "308 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - B/op",
            "value": 7675,
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
          "id": "fa3a97855d0da53ec0205aa676526e8756721fd1",
          "message": "Merge pull request #2450 from gofiber/dependabot/go_modules/aerospike/grpc-gateway-modules-d980216198\n\nchore(deps): bump the grpc-gateway-modules group across 17 directories with 1 update",
          "timestamp": "2026-01-29T08:17:06+01:00",
          "tree_id": "c8f8fe99ce6c653abae810ef180d558605f471e6",
          "url": "https://github.com/gofiber/storage/commit/fa3a97855d0da53ec0205aa676526e8756721fd1"
        },
        "date": 1769671306885,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Cassandra_Set",
            "value": 1956479,
            "unit": "ns/op\t    4269 B/op\t      65 allocs/op",
            "extra": "602 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - ns/op",
            "value": 1956479,
            "unit": "ns/op",
            "extra": "602 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - B/op",
            "value": 4269,
            "unit": "B/op",
            "extra": "602 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - allocs/op",
            "value": 65,
            "unit": "allocs/op",
            "extra": "602 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get",
            "value": 2060710,
            "unit": "ns/op\t    3796 B/op\t      55 allocs/op",
            "extra": "499 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - ns/op",
            "value": 2060710,
            "unit": "ns/op",
            "extra": "499 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - B/op",
            "value": 3796,
            "unit": "B/op",
            "extra": "499 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "499 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete",
            "value": 3880337,
            "unit": "ns/op\t    7638 B/op\t     114 allocs/op",
            "extra": "301 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - ns/op",
            "value": 3880337,
            "unit": "ns/op",
            "extra": "301 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - B/op",
            "value": 7638,
            "unit": "B/op",
            "extra": "301 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - allocs/op",
            "value": 114,
            "unit": "allocs/op",
            "extra": "301 times\n4 procs"
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
        "date": 1769757500419,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Cassandra_Set",
            "value": 2088239,
            "unit": "ns/op\t    4288 B/op\t      65 allocs/op",
            "extra": "480 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - ns/op",
            "value": 2088239,
            "unit": "ns/op",
            "extra": "480 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - B/op",
            "value": 4288,
            "unit": "B/op",
            "extra": "480 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - allocs/op",
            "value": 65,
            "unit": "allocs/op",
            "extra": "480 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get",
            "value": 2057950,
            "unit": "ns/op\t    3796 B/op\t      55 allocs/op",
            "extra": "578 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - ns/op",
            "value": 2057950,
            "unit": "ns/op",
            "extra": "578 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - B/op",
            "value": 3796,
            "unit": "B/op",
            "extra": "578 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "578 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete",
            "value": 4019936,
            "unit": "ns/op\t    7659 B/op\t     114 allocs/op",
            "extra": "258 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - ns/op",
            "value": 4019936,
            "unit": "ns/op",
            "extra": "258 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - B/op",
            "value": 7659,
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
          "id": "8bff5a354fb8012e046c7af091ef7ab317148fd2",
          "message": "Merge pull request #2458 from gofiber/dependabot/go_modules/aerospike/shirou-modules-780478747e\n\nchore(deps): bump the shirou-modules group across 25 directories with 1 update",
          "timestamp": "2026-02-02T08:32:06+01:00",
          "tree_id": "a7e435370484fe153e24e8124efa1aa935a60a6a",
          "url": "https://github.com/gofiber/storage/commit/8bff5a354fb8012e046c7af091ef7ab317148fd2"
        },
        "date": 1770017947877,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Cassandra_Set",
            "value": 1930324,
            "unit": "ns/op\t    4240 B/op\t      65 allocs/op",
            "extra": "609 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - ns/op",
            "value": 1930324,
            "unit": "ns/op",
            "extra": "609 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - B/op",
            "value": 4240,
            "unit": "B/op",
            "extra": "609 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - allocs/op",
            "value": 65,
            "unit": "allocs/op",
            "extra": "609 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get",
            "value": 1979405,
            "unit": "ns/op\t    3762 B/op\t      55 allocs/op",
            "extra": "596 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - ns/op",
            "value": 1979405,
            "unit": "ns/op",
            "extra": "596 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - B/op",
            "value": 3762,
            "unit": "B/op",
            "extra": "596 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "596 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete",
            "value": 3734184,
            "unit": "ns/op\t    7628 B/op\t     114 allocs/op",
            "extra": "312 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - ns/op",
            "value": 3734184,
            "unit": "ns/op",
            "extra": "312 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - B/op",
            "value": 7628,
            "unit": "B/op",
            "extra": "312 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - allocs/op",
            "value": 114,
            "unit": "allocs/op",
            "extra": "312 times\n4 procs"
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
        "date": 1770108254994,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Cassandra_Set",
            "value": 1974556,
            "unit": "ns/op\t    4236 B/op\t      65 allocs/op",
            "extra": "576 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - ns/op",
            "value": 1974556,
            "unit": "ns/op",
            "extra": "576 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - B/op",
            "value": 4236,
            "unit": "B/op",
            "extra": "576 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - allocs/op",
            "value": 65,
            "unit": "allocs/op",
            "extra": "576 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get",
            "value": 2025630,
            "unit": "ns/op\t    3761 B/op\t      55 allocs/op",
            "extra": "572 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - ns/op",
            "value": 2025630,
            "unit": "ns/op",
            "extra": "572 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - B/op",
            "value": 3761,
            "unit": "B/op",
            "extra": "572 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "572 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete",
            "value": 3957827,
            "unit": "ns/op\t    7632 B/op\t     114 allocs/op",
            "extra": "295 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - ns/op",
            "value": 3957827,
            "unit": "ns/op",
            "extra": "295 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - B/op",
            "value": 7632,
            "unit": "B/op",
            "extra": "295 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - allocs/op",
            "value": 114,
            "unit": "allocs/op",
            "extra": "295 times\n4 procs"
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
        "date": 1770708127634,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Cassandra_Set",
            "value": 2078118,
            "unit": "ns/op\t    4248 B/op\t      65 allocs/op",
            "extra": "496 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - ns/op",
            "value": 2078118,
            "unit": "ns/op",
            "extra": "496 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - B/op",
            "value": 4248,
            "unit": "B/op",
            "extra": "496 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - allocs/op",
            "value": 65,
            "unit": "allocs/op",
            "extra": "496 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get",
            "value": 1985686,
            "unit": "ns/op\t    3770 B/op\t      55 allocs/op",
            "extra": "584 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - ns/op",
            "value": 1985686,
            "unit": "ns/op",
            "extra": "584 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - B/op",
            "value": 3770,
            "unit": "B/op",
            "extra": "584 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "584 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete",
            "value": 3881193,
            "unit": "ns/op\t    7651 B/op\t     114 allocs/op",
            "extra": "260 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - ns/op",
            "value": 3881193,
            "unit": "ns/op",
            "extra": "260 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - B/op",
            "value": 7651,
            "unit": "B/op",
            "extra": "260 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - allocs/op",
            "value": 114,
            "unit": "allocs/op",
            "extra": "260 times\n4 procs"
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
        "date": 1770794418566,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Cassandra_Set",
            "value": 2062317,
            "unit": "ns/op\t    4259 B/op\t      65 allocs/op",
            "extra": "490 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - ns/op",
            "value": 2062317,
            "unit": "ns/op",
            "extra": "490 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - B/op",
            "value": 4259,
            "unit": "B/op",
            "extra": "490 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - allocs/op",
            "value": 65,
            "unit": "allocs/op",
            "extra": "490 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get",
            "value": 2036188,
            "unit": "ns/op\t    3762 B/op\t      55 allocs/op",
            "extra": "560 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - ns/op",
            "value": 2036188,
            "unit": "ns/op",
            "extra": "560 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - B/op",
            "value": 3762,
            "unit": "B/op",
            "extra": "560 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "560 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete",
            "value": 3943112,
            "unit": "ns/op\t    7685 B/op\t     114 allocs/op",
            "extra": "296 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - ns/op",
            "value": 3943112,
            "unit": "ns/op",
            "extra": "296 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - B/op",
            "value": 7685,
            "unit": "B/op",
            "extra": "296 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - allocs/op",
            "value": 114,
            "unit": "allocs/op",
            "extra": "296 times\n4 procs"
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
        "date": 1770967313508,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Cassandra_Set",
            "value": 2015058,
            "unit": "ns/op\t    4236 B/op\t      65 allocs/op",
            "extra": "590 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - ns/op",
            "value": 2015058,
            "unit": "ns/op",
            "extra": "590 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - B/op",
            "value": 4236,
            "unit": "B/op",
            "extra": "590 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - allocs/op",
            "value": 65,
            "unit": "allocs/op",
            "extra": "590 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get",
            "value": 2063428,
            "unit": "ns/op\t    3790 B/op\t      55 allocs/op",
            "extra": "489 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - ns/op",
            "value": 2063428,
            "unit": "ns/op",
            "extra": "489 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - B/op",
            "value": 3790,
            "unit": "B/op",
            "extra": "489 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "489 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete",
            "value": 3888774,
            "unit": "ns/op\t    7636 B/op\t     114 allocs/op",
            "extra": "296 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - ns/op",
            "value": 3888774,
            "unit": "ns/op",
            "extra": "296 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - B/op",
            "value": 7636,
            "unit": "B/op",
            "extra": "296 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - allocs/op",
            "value": 114,
            "unit": "allocs/op",
            "extra": "296 times\n4 procs"
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
        "date": 1771288408878,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Cassandra_Set",
            "value": 2008244,
            "unit": "ns/op\t    4267 B/op\t      65 allocs/op",
            "extra": "595 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - ns/op",
            "value": 2008244,
            "unit": "ns/op",
            "extra": "595 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - B/op",
            "value": 4267,
            "unit": "B/op",
            "extra": "595 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - allocs/op",
            "value": 65,
            "unit": "allocs/op",
            "extra": "595 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get",
            "value": 2088797,
            "unit": "ns/op\t    3798 B/op\t      55 allocs/op",
            "extra": "487 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - ns/op",
            "value": 2088797,
            "unit": "ns/op",
            "extra": "487 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - B/op",
            "value": 3798,
            "unit": "B/op",
            "extra": "487 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "487 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete",
            "value": 3907627,
            "unit": "ns/op\t    7696 B/op\t     114 allocs/op",
            "extra": "297 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - ns/op",
            "value": 3907627,
            "unit": "ns/op",
            "extra": "297 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - B/op",
            "value": 7696,
            "unit": "B/op",
            "extra": "297 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - allocs/op",
            "value": 114,
            "unit": "allocs/op",
            "extra": "297 times\n4 procs"
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
        "date": 1772809327216,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Cassandra_Set",
            "value": 1939518,
            "unit": "ns/op\t    4238 B/op\t      65 allocs/op",
            "extra": "595 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - ns/op",
            "value": 1939518,
            "unit": "ns/op",
            "extra": "595 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - B/op",
            "value": 4238,
            "unit": "B/op",
            "extra": "595 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - allocs/op",
            "value": 65,
            "unit": "allocs/op",
            "extra": "595 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get",
            "value": 2022398,
            "unit": "ns/op\t    3760 B/op\t      55 allocs/op",
            "extra": "578 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - ns/op",
            "value": 2022398,
            "unit": "ns/op",
            "extra": "578 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - B/op",
            "value": 3760,
            "unit": "B/op",
            "extra": "578 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "578 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete",
            "value": 4052724,
            "unit": "ns/op\t    7713 B/op\t     114 allocs/op",
            "extra": "255 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - ns/op",
            "value": 4052724,
            "unit": "ns/op",
            "extra": "255 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - B/op",
            "value": 7713,
            "unit": "B/op",
            "extra": "255 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - allocs/op",
            "value": 114,
            "unit": "allocs/op",
            "extra": "255 times\n4 procs"
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
        "date": 1772810402895,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Cassandra_Set",
            "value": 1979570,
            "unit": "ns/op\t    4246 B/op\t      65 allocs/op",
            "extra": "600 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - ns/op",
            "value": 1979570,
            "unit": "ns/op",
            "extra": "600 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - B/op",
            "value": 4246,
            "unit": "B/op",
            "extra": "600 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - allocs/op",
            "value": 65,
            "unit": "allocs/op",
            "extra": "600 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get",
            "value": 2015462,
            "unit": "ns/op\t    3774 B/op\t      55 allocs/op",
            "extra": "589 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - ns/op",
            "value": 2015462,
            "unit": "ns/op",
            "extra": "589 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - B/op",
            "value": 3774,
            "unit": "B/op",
            "extra": "589 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "589 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete",
            "value": 3872261,
            "unit": "ns/op\t    7690 B/op\t     114 allocs/op",
            "extra": "302 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - ns/op",
            "value": 3872261,
            "unit": "ns/op",
            "extra": "302 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - B/op",
            "value": 7690,
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
          "id": "5fac639ed09d29164d9d98ce20791018f3a17666",
          "message": "Merge pull request #2516 from gofiber/dependabot/go_modules/aerospike/opentelemetry-modules-2dc48bd7ec",
          "timestamp": "2026-03-06T15:58:49+01:00",
          "tree_id": "c439ed82ad3b65846815be1ef953b7735def51d6",
          "url": "https://github.com/gofiber/storage/commit/5fac639ed09d29164d9d98ce20791018f3a17666"
        },
        "date": 1772810499305,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Cassandra_Set",
            "value": 1964358,
            "unit": "ns/op\t    4231 B/op\t      65 allocs/op",
            "extra": "596 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - ns/op",
            "value": 1964358,
            "unit": "ns/op",
            "extra": "596 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - B/op",
            "value": 4231,
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
            "value": 2025797,
            "unit": "ns/op\t    3764 B/op\t      55 allocs/op",
            "extra": "577 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - ns/op",
            "value": 2025797,
            "unit": "ns/op",
            "extra": "577 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - B/op",
            "value": 3764,
            "unit": "B/op",
            "extra": "577 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "577 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete",
            "value": 4082887,
            "unit": "ns/op\t    7695 B/op\t     114 allocs/op",
            "extra": "254 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - ns/op",
            "value": 4082887,
            "unit": "ns/op",
            "extra": "254 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - B/op",
            "value": 7695,
            "unit": "B/op",
            "extra": "254 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - allocs/op",
            "value": 114,
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
          "id": "4755abbbbbc98be72cce4490ac12bffb98f310f3",
          "message": "Merge pull request #2512 from gofiber/dependabot/go_modules/aerospike/shirou-modules-c770b2d60b\n\nchore(deps): bump the shirou-modules group across 25 directories with 1 update",
          "timestamp": "2026-03-06T16:51:06+01:00",
          "tree_id": "970a6ce79c75ba710f37ac28f880163f8b3c1db5",
          "url": "https://github.com/gofiber/storage/commit/4755abbbbbc98be72cce4490ac12bffb98f310f3"
        },
        "date": 1772812549806,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Cassandra_Set",
            "value": 1965803,
            "unit": "ns/op\t    4265 B/op\t      65 allocs/op",
            "extra": "595 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - ns/op",
            "value": 1965803,
            "unit": "ns/op",
            "extra": "595 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - B/op",
            "value": 4265,
            "unit": "B/op",
            "extra": "595 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - allocs/op",
            "value": 65,
            "unit": "allocs/op",
            "extra": "595 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get",
            "value": 2063881,
            "unit": "ns/op\t    3792 B/op\t      55 allocs/op",
            "extra": "493 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - ns/op",
            "value": 2063881,
            "unit": "ns/op",
            "extra": "493 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - B/op",
            "value": 3792,
            "unit": "B/op",
            "extra": "493 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "493 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete",
            "value": 3901277,
            "unit": "ns/op\t    7634 B/op\t     114 allocs/op",
            "extra": "307 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - ns/op",
            "value": 3901277,
            "unit": "ns/op",
            "extra": "307 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - B/op",
            "value": 7634,
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
          "id": "ec95590224e0982fd81bff215c492e27e57c55b3",
          "message": "Merge pull request #2553 from gofiber/dependabot/go_modules/aerospike/google-modules-a05de7dce4\n\nchore(deps): bump the google-modules group across 19 directories with 1 update",
          "timestamp": "2026-03-18T08:40:01+01:00",
          "tree_id": "f4adb6288e21f28c27958c269124ec050b38357d",
          "url": "https://github.com/gofiber/storage/commit/ec95590224e0982fd81bff215c492e27e57c55b3"
        },
        "date": 1773819876792,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Cassandra_Set",
            "value": 2031697,
            "unit": "ns/op\t    4235 B/op\t      65 allocs/op",
            "extra": "579 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - ns/op",
            "value": 2031697,
            "unit": "ns/op",
            "extra": "579 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - B/op",
            "value": 4235,
            "unit": "B/op",
            "extra": "579 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - allocs/op",
            "value": 65,
            "unit": "allocs/op",
            "extra": "579 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get",
            "value": 1995757,
            "unit": "ns/op\t    3763 B/op\t      55 allocs/op",
            "extra": "576 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - ns/op",
            "value": 1995757,
            "unit": "ns/op",
            "extra": "576 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - B/op",
            "value": 3763,
            "unit": "B/op",
            "extra": "576 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "576 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete",
            "value": 4152597,
            "unit": "ns/op\t    7729 B/op\t     115 allocs/op",
            "extra": "252 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - ns/op",
            "value": 4152597,
            "unit": "ns/op",
            "extra": "252 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - B/op",
            "value": 7729,
            "unit": "B/op",
            "extra": "252 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - allocs/op",
            "value": 115,
            "unit": "allocs/op",
            "extra": "252 times\n4 procs"
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
        "date": 1774424667878,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Cassandra_Set",
            "value": 2102279,
            "unit": "ns/op\t    4247 B/op\t      65 allocs/op",
            "extra": "484 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - ns/op",
            "value": 2102279,
            "unit": "ns/op",
            "extra": "484 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - B/op",
            "value": 4247,
            "unit": "B/op",
            "extra": "484 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - allocs/op",
            "value": 65,
            "unit": "allocs/op",
            "extra": "484 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get",
            "value": 2097090,
            "unit": "ns/op\t    3791 B/op\t      55 allocs/op",
            "extra": "488 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - ns/op",
            "value": 2097090,
            "unit": "ns/op",
            "extra": "488 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - B/op",
            "value": 3791,
            "unit": "B/op",
            "extra": "488 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "488 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete",
            "value": 3942491,
            "unit": "ns/op\t    7629 B/op\t     114 allocs/op",
            "extra": "294 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - ns/op",
            "value": 3942491,
            "unit": "ns/op",
            "extra": "294 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - B/op",
            "value": 7629,
            "unit": "B/op",
            "extra": "294 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - allocs/op",
            "value": 114,
            "unit": "allocs/op",
            "extra": "294 times\n4 procs"
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
        "date": 1774510865945,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Cassandra_Set",
            "value": 1955878,
            "unit": "ns/op\t    4235 B/op\t      65 allocs/op",
            "extra": "592 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - ns/op",
            "value": 1955878,
            "unit": "ns/op",
            "extra": "592 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - B/op",
            "value": 4235,
            "unit": "B/op",
            "extra": "592 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - allocs/op",
            "value": 65,
            "unit": "allocs/op",
            "extra": "592 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get",
            "value": 2039903,
            "unit": "ns/op\t    3762 B/op\t      55 allocs/op",
            "extra": "580 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - ns/op",
            "value": 2039903,
            "unit": "ns/op",
            "extra": "580 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - B/op",
            "value": 3762,
            "unit": "B/op",
            "extra": "580 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "580 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete",
            "value": 4177647,
            "unit": "ns/op\t    7656 B/op\t     114 allocs/op",
            "extra": "249 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - ns/op",
            "value": 4177647,
            "unit": "ns/op",
            "extra": "249 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - B/op",
            "value": 7656,
            "unit": "B/op",
            "extra": "249 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - allocs/op",
            "value": 114,
            "unit": "allocs/op",
            "extra": "249 times\n4 procs"
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
        "date": 1775117664512,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Cassandra_Set",
            "value": 2371323,
            "unit": "ns/op\t    4260 B/op\t      65 allocs/op",
            "extra": "446 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - ns/op",
            "value": 2371323,
            "unit": "ns/op",
            "extra": "446 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - B/op",
            "value": 4260,
            "unit": "B/op",
            "extra": "446 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - allocs/op",
            "value": 65,
            "unit": "allocs/op",
            "extra": "446 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get",
            "value": 2385128,
            "unit": "ns/op\t    3769 B/op\t      55 allocs/op",
            "extra": "519 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - ns/op",
            "value": 2385128,
            "unit": "ns/op",
            "extra": "519 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - B/op",
            "value": 3769,
            "unit": "B/op",
            "extra": "519 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "519 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete",
            "value": 4688252,
            "unit": "ns/op\t    7660 B/op\t     114 allocs/op",
            "extra": "220 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - ns/op",
            "value": 4688252,
            "unit": "ns/op",
            "extra": "220 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - B/op",
            "value": 7660,
            "unit": "B/op",
            "extra": "220 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - allocs/op",
            "value": 114,
            "unit": "allocs/op",
            "extra": "220 times\n4 procs"
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
        "date": 1775117961776,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Cassandra_Set",
            "value": 2057373,
            "unit": "ns/op\t    4234 B/op\t      65 allocs/op",
            "extra": "564 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - ns/op",
            "value": 2057373,
            "unit": "ns/op",
            "extra": "564 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - B/op",
            "value": 4234,
            "unit": "B/op",
            "extra": "564 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - allocs/op",
            "value": 65,
            "unit": "allocs/op",
            "extra": "564 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get",
            "value": 2099403,
            "unit": "ns/op\t    3787 B/op\t      55 allocs/op",
            "extra": "561 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - ns/op",
            "value": 2099403,
            "unit": "ns/op",
            "extra": "561 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - B/op",
            "value": 3787,
            "unit": "B/op",
            "extra": "561 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "561 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete",
            "value": 4046352,
            "unit": "ns/op\t    7679 B/op\t     114 allocs/op",
            "extra": "290 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - ns/op",
            "value": 4046352,
            "unit": "ns/op",
            "extra": "290 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - B/op",
            "value": 7679,
            "unit": "B/op",
            "extra": "290 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - allocs/op",
            "value": 114,
            "unit": "allocs/op",
            "extra": "290 times\n4 procs"
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
        "date": 1776324572617,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Cassandra_Set",
            "value": 2084662,
            "unit": "ns/op\t    4236 B/op\t      65 allocs/op",
            "extra": "553 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - ns/op",
            "value": 2084662,
            "unit": "ns/op",
            "extra": "553 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - B/op",
            "value": 4236,
            "unit": "B/op",
            "extra": "553 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - allocs/op",
            "value": 65,
            "unit": "allocs/op",
            "extra": "553 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get",
            "value": 2137659,
            "unit": "ns/op\t    3780 B/op\t      55 allocs/op",
            "extra": "471 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - ns/op",
            "value": 2137659,
            "unit": "ns/op",
            "extra": "471 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - B/op",
            "value": 3780,
            "unit": "B/op",
            "extra": "471 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "471 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete",
            "value": 4192505,
            "unit": "ns/op\t    7704 B/op\t     114 allocs/op",
            "extra": "242 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - ns/op",
            "value": 4192505,
            "unit": "ns/op",
            "extra": "242 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - B/op",
            "value": 7704,
            "unit": "B/op",
            "extra": "242 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - allocs/op",
            "value": 114,
            "unit": "allocs/op",
            "extra": "242 times\n4 procs"
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
        "date": 1776414875374,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Cassandra_Set",
            "value": 2090827,
            "unit": "ns/op\t    4232 B/op\t      65 allocs/op",
            "extra": "559 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - ns/op",
            "value": 2090827,
            "unit": "ns/op",
            "extra": "559 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - B/op",
            "value": 4232,
            "unit": "B/op",
            "extra": "559 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - allocs/op",
            "value": 65,
            "unit": "allocs/op",
            "extra": "559 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get",
            "value": 2219615,
            "unit": "ns/op\t    3809 B/op\t      55 allocs/op",
            "extra": "470 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - ns/op",
            "value": 2219615,
            "unit": "ns/op",
            "extra": "470 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - B/op",
            "value": 3809,
            "unit": "B/op",
            "extra": "470 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "470 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete",
            "value": 4250087,
            "unit": "ns/op\t    7714 B/op\t     114 allocs/op",
            "extra": "244 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - ns/op",
            "value": 4250087,
            "unit": "ns/op",
            "extra": "244 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - B/op",
            "value": 7714,
            "unit": "B/op",
            "extra": "244 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - allocs/op",
            "value": 114,
            "unit": "allocs/op",
            "extra": "244 times\n4 procs"
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
        "date": 1776429892062,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Cassandra_Set",
            "value": 2194564,
            "unit": "ns/op\t    4272 B/op\t      65 allocs/op",
            "extra": "529 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - ns/op",
            "value": 2194564,
            "unit": "ns/op",
            "extra": "529 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "529 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - allocs/op",
            "value": 65,
            "unit": "allocs/op",
            "extra": "529 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get",
            "value": 2177277,
            "unit": "ns/op\t    3792 B/op\t      55 allocs/op",
            "extra": "531 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - ns/op",
            "value": 2177277,
            "unit": "ns/op",
            "extra": "531 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - B/op",
            "value": 3792,
            "unit": "B/op",
            "extra": "531 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "531 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete",
            "value": 4219161,
            "unit": "ns/op\t    7694 B/op\t     114 allocs/op",
            "extra": "282 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - ns/op",
            "value": 4219161,
            "unit": "ns/op",
            "extra": "282 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - B/op",
            "value": 7694,
            "unit": "B/op",
            "extra": "282 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - allocs/op",
            "value": 114,
            "unit": "allocs/op",
            "extra": "282 times\n4 procs"
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
        "date": 1776430732122,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Cassandra_Set",
            "value": 2166939,
            "unit": "ns/op\t    4277 B/op\t      65 allocs/op",
            "extra": "471 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - ns/op",
            "value": 2166939,
            "unit": "ns/op",
            "extra": "471 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - B/op",
            "value": 4277,
            "unit": "B/op",
            "extra": "471 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - allocs/op",
            "value": 65,
            "unit": "allocs/op",
            "extra": "471 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get",
            "value": 2140515,
            "unit": "ns/op\t    3767 B/op\t      55 allocs/op",
            "extra": "486 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - ns/op",
            "value": 2140515,
            "unit": "ns/op",
            "extra": "486 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - B/op",
            "value": 3767,
            "unit": "B/op",
            "extra": "486 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "486 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete",
            "value": 4141587,
            "unit": "ns/op\t    7642 B/op\t     114 allocs/op",
            "extra": "274 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - ns/op",
            "value": 4141587,
            "unit": "ns/op",
            "extra": "274 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - B/op",
            "value": 7642,
            "unit": "B/op",
            "extra": "274 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - allocs/op",
            "value": 114,
            "unit": "allocs/op",
            "extra": "274 times\n4 procs"
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
          "id": "e7f9ad197490ae3e289830478987b55f30fee6f0",
          "message": "Merge pull request #2641 from gofiber/dependabot/go_modules/aerospike/opentelemetry-modules-0e102743f5\n\nchore(deps): bump the opentelemetry-modules group across 8 directories with 7 updates",
          "timestamp": "2026-04-17T16:49:21+02:00",
          "tree_id": "cd731a3a682ff1c135fa643ed8370579d704dcec",
          "url": "https://github.com/gofiber/storage/commit/e7f9ad197490ae3e289830478987b55f30fee6f0"
        },
        "date": 1776437809938,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Cassandra_Set",
            "value": 2138052,
            "unit": "ns/op\t    4241 B/op\t      65 allocs/op",
            "extra": "548 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - ns/op",
            "value": 2138052,
            "unit": "ns/op",
            "extra": "548 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - B/op",
            "value": 4241,
            "unit": "B/op",
            "extra": "548 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - allocs/op",
            "value": 65,
            "unit": "allocs/op",
            "extra": "548 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get",
            "value": 2238512,
            "unit": "ns/op\t    3806 B/op\t      55 allocs/op",
            "extra": "472 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - ns/op",
            "value": 2238512,
            "unit": "ns/op",
            "extra": "472 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - B/op",
            "value": 3806,
            "unit": "B/op",
            "extra": "472 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "472 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete",
            "value": 4269690,
            "unit": "ns/op\t    7642 B/op\t     114 allocs/op",
            "extra": "267 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - ns/op",
            "value": 4269690,
            "unit": "ns/op",
            "extra": "267 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - B/op",
            "value": 7642,
            "unit": "B/op",
            "extra": "267 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - allocs/op",
            "value": 114,
            "unit": "allocs/op",
            "extra": "267 times\n4 procs"
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
          "id": "f9baa8cea2f38cea318827da7478a85057dac638",
          "message": "Merge pull request #2673 from gofiber/dependabot/go_modules/aerospike/shirou-modules-6a7b0d21c6\n\nchore(deps): bump the shirou-modules group across 8 directories with 1 update",
          "timestamp": "2026-05-01T10:02:42+02:00",
          "tree_id": "4247163d4b06155f41b9526ea2b08b566f4665b8",
          "url": "https://github.com/gofiber/storage/commit/f9baa8cea2f38cea318827da7478a85057dac638"
        },
        "date": 1777622832282,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Cassandra_Set",
            "value": 2067947,
            "unit": "ns/op\t    4238 B/op\t      65 allocs/op",
            "extra": "550 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - ns/op",
            "value": 2067947,
            "unit": "ns/op",
            "extra": "550 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - B/op",
            "value": 4238,
            "unit": "B/op",
            "extra": "550 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - allocs/op",
            "value": 65,
            "unit": "allocs/op",
            "extra": "550 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get",
            "value": 2211910,
            "unit": "ns/op\t    3771 B/op\t      55 allocs/op",
            "extra": "476 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - ns/op",
            "value": 2211910,
            "unit": "ns/op",
            "extra": "476 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - B/op",
            "value": 3771,
            "unit": "B/op",
            "extra": "476 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "476 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete",
            "value": 4030424,
            "unit": "ns/op\t    7632 B/op\t     114 allocs/op",
            "extra": "288 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - ns/op",
            "value": 4030424,
            "unit": "ns/op",
            "extra": "288 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - B/op",
            "value": 7632,
            "unit": "B/op",
            "extra": "288 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - allocs/op",
            "value": 114,
            "unit": "allocs/op",
            "extra": "288 times\n4 procs"
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
          "id": "5620a76a25f75b4cb317d598c7a6b7ceaa05fde8",
          "message": "Merge pull request #2674 from gofiber/dependabot/go_modules/aerospike/klauspost-modules-591fe66ca5\n\nchore(deps): bump the klauspost-modules group across 9 directories with 1 update",
          "timestamp": "2026-05-01T10:04:21+02:00",
          "tree_id": "a7283ff84294b5974fb742fdd046bc29ad3c7c8a",
          "url": "https://github.com/gofiber/storage/commit/5620a76a25f75b4cb317d598c7a6b7ceaa05fde8"
        },
        "date": 1777623029094,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Cassandra_Set",
            "value": 2445467,
            "unit": "ns/op\t    4244 B/op\t      65 allocs/op",
            "extra": "451 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - ns/op",
            "value": 2445467,
            "unit": "ns/op",
            "extra": "451 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - B/op",
            "value": 4244,
            "unit": "B/op",
            "extra": "451 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - allocs/op",
            "value": 65,
            "unit": "allocs/op",
            "extra": "451 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get",
            "value": 2773875,
            "unit": "ns/op\t    3792 B/op\t      55 allocs/op",
            "extra": "398 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - ns/op",
            "value": 2773875,
            "unit": "ns/op",
            "extra": "398 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - B/op",
            "value": 3792,
            "unit": "B/op",
            "extra": "398 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "398 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete",
            "value": 4724966,
            "unit": "ns/op\t    7648 B/op\t     114 allocs/op",
            "extra": "240 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - ns/op",
            "value": 4724966,
            "unit": "ns/op",
            "extra": "240 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - B/op",
            "value": 7648,
            "unit": "B/op",
            "extra": "240 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - allocs/op",
            "value": 114,
            "unit": "allocs/op",
            "extra": "240 times\n4 procs"
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
          "id": "fbfc711fb6c3a61f084b5d1c53aac71133d45e23",
          "message": "Merge pull request #2681 from gofiber/dependabot/go_modules/aerospike/google-modules-b3c5f2b2ea\n\nchore(deps): bump the google-modules group across 7 directories with 2 updates",
          "timestamp": "2026-05-04T09:55:10+02:00",
          "tree_id": "aedf3099712a661cba59b53e1c7f28a101c09ea6",
          "url": "https://github.com/gofiber/storage/commit/fbfc711fb6c3a61f084b5d1c53aac71133d45e23"
        },
        "date": 1777881600318,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Cassandra_Set",
            "value": 2044493,
            "unit": "ns/op\t    4238 B/op\t      65 allocs/op",
            "extra": "546 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - ns/op",
            "value": 2044493,
            "unit": "ns/op",
            "extra": "546 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - B/op",
            "value": 4238,
            "unit": "B/op",
            "extra": "546 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set - allocs/op",
            "value": 65,
            "unit": "allocs/op",
            "extra": "546 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get",
            "value": 2068784,
            "unit": "ns/op\t    3787 B/op\t      55 allocs/op",
            "extra": "567 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - ns/op",
            "value": 2068784,
            "unit": "ns/op",
            "extra": "567 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - B/op",
            "value": 3787,
            "unit": "B/op",
            "extra": "567 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Get - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "567 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete",
            "value": 4063494,
            "unit": "ns/op\t    7639 B/op\t     114 allocs/op",
            "extra": "285 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - ns/op",
            "value": 4063494,
            "unit": "ns/op",
            "extra": "285 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - B/op",
            "value": 7639,
            "unit": "B/op",
            "extra": "285 times\n4 procs"
          },
          {
            "name": "Benchmark_Cassandra_Set_And_Delete - allocs/op",
            "value": 114,
            "unit": "allocs/op",
            "extra": "285 times\n4 procs"
          }
        ]
      }
    ]
  }
}