window.BENCHMARK_DATA = {
  "lastUpdate": 1763658251757,
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
        "date": 1742368441733,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Couchbase_Set",
            "value": 266994,
            "unit": "ns/op\t    4186 B/op\t      78 allocs/op",
            "extra": "4430 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - ns/op",
            "value": 266994,
            "unit": "ns/op",
            "extra": "4430 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - B/op",
            "value": 4186,
            "unit": "B/op",
            "extra": "4430 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - allocs/op",
            "value": 78,
            "unit": "allocs/op",
            "extra": "4430 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get",
            "value": 225689,
            "unit": "ns/op\t    3758 B/op\t      72 allocs/op",
            "extra": "5737 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - ns/op",
            "value": 225689,
            "unit": "ns/op",
            "extra": "5737 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - B/op",
            "value": 3758,
            "unit": "B/op",
            "extra": "5737 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - allocs/op",
            "value": 72,
            "unit": "allocs/op",
            "extra": "5737 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete",
            "value": 525007,
            "unit": "ns/op\t    7976 B/op\t     151 allocs/op",
            "extra": "2202 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - ns/op",
            "value": 525007,
            "unit": "ns/op",
            "extra": "2202 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - B/op",
            "value": 7976,
            "unit": "B/op",
            "extra": "2202 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - allocs/op",
            "value": 151,
            "unit": "allocs/op",
            "extra": "2202 times\n4 procs"
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
          "id": "fa14baae3d826d0279e7f092bf5b5488dd640522",
          "message": "Merge pull request #1587 from gofiber/dependabot/go_modules/couchbase/github.com/stretchr/testify-1.10.0\n\nchore(deps): bump github.com/stretchr/testify from 1.9.0 to 1.10.0 in /couchbase",
          "timestamp": "2025-03-26T21:27:52+01:00",
          "tree_id": "213aec0f460f8191e69e9aac02079ff1e417513a",
          "url": "https://github.com/gofiber/storage/commit/fa14baae3d826d0279e7f092bf5b5488dd640522"
        },
        "date": 1743022574286,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Couchbase_Set",
            "value": 269068,
            "unit": "ns/op\t    8559 B/op\t      77 allocs/op",
            "extra": "4782 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - ns/op",
            "value": 269068,
            "unit": "ns/op",
            "extra": "4782 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - B/op",
            "value": 8559,
            "unit": "B/op",
            "extra": "4782 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - allocs/op",
            "value": 77,
            "unit": "allocs/op",
            "extra": "4782 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get",
            "value": 230849,
            "unit": "ns/op\t    3763 B/op\t      73 allocs/op",
            "extra": "5701 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - ns/op",
            "value": 230849,
            "unit": "ns/op",
            "extra": "5701 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - B/op",
            "value": 3763,
            "unit": "B/op",
            "extra": "5701 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "5701 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete",
            "value": 546132,
            "unit": "ns/op\t   17321 B/op\t     151 allocs/op",
            "extra": "2247 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - ns/op",
            "value": 546132,
            "unit": "ns/op",
            "extra": "2247 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - B/op",
            "value": 17321,
            "unit": "B/op",
            "extra": "2247 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - allocs/op",
            "value": 151,
            "unit": "allocs/op",
            "extra": "2247 times\n4 procs"
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
          "id": "21e89f59d26fae9781c36c756522a7974ac9720d",
          "message": "Merge pull request #1607 from gofiber/dependabot/go_modules/couchbase/github.com/couchbase/gocb/v2-2.9.4\n\nchore(deps): bump github.com/couchbase/gocb/v2 from 2.9.1 to 2.9.4 in /couchbase",
          "timestamp": "2025-03-27T09:11:54+01:00",
          "tree_id": "a9cd7600c7fa449771cdf3b3daeed2e2c9a8b82f",
          "url": "https://github.com/gofiber/storage/commit/21e89f59d26fae9781c36c756522a7974ac9720d"
        },
        "date": 1743063631469,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Couchbase_Set",
            "value": 276826,
            "unit": "ns/op\t    9792 B/op\t      94 allocs/op",
            "extra": "4099 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - ns/op",
            "value": 276826,
            "unit": "ns/op",
            "extra": "4099 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - B/op",
            "value": 9792,
            "unit": "B/op",
            "extra": "4099 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - allocs/op",
            "value": 94,
            "unit": "allocs/op",
            "extra": "4099 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get",
            "value": 236590,
            "unit": "ns/op\t    4175 B/op\t      88 allocs/op",
            "extra": "6162 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - ns/op",
            "value": 236590,
            "unit": "ns/op",
            "extra": "6162 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - B/op",
            "value": 4175,
            "unit": "B/op",
            "extra": "6162 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - allocs/op",
            "value": 88,
            "unit": "allocs/op",
            "extra": "6162 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete",
            "value": 567087,
            "unit": "ns/op\t   18782 B/op\t     182 allocs/op",
            "extra": "2128 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - ns/op",
            "value": 567087,
            "unit": "ns/op",
            "extra": "2128 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - B/op",
            "value": 18782,
            "unit": "B/op",
            "extra": "2128 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - allocs/op",
            "value": 182,
            "unit": "allocs/op",
            "extra": "2128 times\n4 procs"
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
          "id": "904a606aa298640f2edb9a167de39219b932a3c4",
          "message": "Merge pull request #1631 from mdelapenya/tc-azurite\n\nchore: bump testcontainers-go to v0.36.0",
          "timestamp": "2025-04-09T11:15:31+02:00",
          "tree_id": "9a609b5228fe260c6730ccd3a8e041d94014c919",
          "url": "https://github.com/gofiber/storage/commit/904a606aa298640f2edb9a167de39219b932a3c4"
        },
        "date": 1744190662438,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Couchbase_Set",
            "value": 271553,
            "unit": "ns/op\t    9402 B/op\t      94 allocs/op",
            "extra": "4452 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - ns/op",
            "value": 271553,
            "unit": "ns/op",
            "extra": "4452 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - B/op",
            "value": 9402,
            "unit": "B/op",
            "extra": "4452 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - allocs/op",
            "value": 94,
            "unit": "allocs/op",
            "extra": "4452 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get",
            "value": 232926,
            "unit": "ns/op\t    4208 B/op\t      88 allocs/op",
            "extra": "5751 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - ns/op",
            "value": 232926,
            "unit": "ns/op",
            "extra": "5751 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - B/op",
            "value": 4208,
            "unit": "B/op",
            "extra": "5751 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - allocs/op",
            "value": 88,
            "unit": "allocs/op",
            "extra": "5751 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete",
            "value": 555423,
            "unit": "ns/op\t   18266 B/op\t     182 allocs/op",
            "extra": "2258 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - ns/op",
            "value": 555423,
            "unit": "ns/op",
            "extra": "2258 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - B/op",
            "value": 18266,
            "unit": "B/op",
            "extra": "2258 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - allocs/op",
            "value": 182,
            "unit": "allocs/op",
            "extra": "2258 times\n4 procs"
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
          "id": "20be56d1f052faf5ef1c3ee2ef261ed5209743c0",
          "message": "Merge pull request #1679 from gofiber/dependabot/go_modules/couchbase/github.com/couchbase/gocb/v2-2.10.0\n\nchore(deps): bump github.com/couchbase/gocb/v2 from 2.9.4 to 2.10.0 in /couchbase",
          "timestamp": "2025-04-18T09:54:45+02:00",
          "tree_id": "c1a75e859eec06becc99c444d785e978897530ac",
          "url": "https://github.com/gofiber/storage/commit/20be56d1f052faf5ef1c3ee2ef261ed5209743c0"
        },
        "date": 1744963332226,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Couchbase_Set",
            "value": 259615,
            "unit": "ns/op\t    9973 B/op\t      97 allocs/op",
            "extra": "4279 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - ns/op",
            "value": 259615,
            "unit": "ns/op",
            "extra": "4279 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - B/op",
            "value": 9973,
            "unit": "B/op",
            "extra": "4279 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - allocs/op",
            "value": 97,
            "unit": "allocs/op",
            "extra": "4279 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get",
            "value": 234855,
            "unit": "ns/op\t    4576 B/op\t      91 allocs/op",
            "extra": "5784 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - ns/op",
            "value": 234855,
            "unit": "ns/op",
            "extra": "5784 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - B/op",
            "value": 4576,
            "unit": "B/op",
            "extra": "5784 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - allocs/op",
            "value": 91,
            "unit": "allocs/op",
            "extra": "5784 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete",
            "value": 558030,
            "unit": "ns/op\t   18775 B/op\t     188 allocs/op",
            "extra": "2314 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - ns/op",
            "value": 558030,
            "unit": "ns/op",
            "extra": "2314 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - B/op",
            "value": 18775,
            "unit": "B/op",
            "extra": "2314 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - allocs/op",
            "value": 188,
            "unit": "allocs/op",
            "extra": "2314 times\n4 procs"
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
          "id": "672709e17e50993407c6a5fbf8d340d9b3db0ca1",
          "message": "Merge pull request #1695 from gofiber/dependabot/go_modules/couchbase/github.com/testcontainers/testcontainers-go-0.37.0\n\nchore(deps): bump github.com/testcontainers/testcontainers-go from 0.36.0 to 0.37.0 in /couchbase",
          "timestamp": "2025-04-28T12:54:42+02:00",
          "tree_id": "cfbfe29175a9b9e1d354defea236eb9a317f11e3",
          "url": "https://github.com/gofiber/storage/commit/672709e17e50993407c6a5fbf8d340d9b3db0ca1"
        },
        "date": 1745838291326,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Couchbase_Set",
            "value": 270961,
            "unit": "ns/op\t    9698 B/op\t      97 allocs/op",
            "extra": "4528 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - ns/op",
            "value": 270961,
            "unit": "ns/op",
            "extra": "4528 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - B/op",
            "value": 9698,
            "unit": "B/op",
            "extra": "4528 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - allocs/op",
            "value": 97,
            "unit": "allocs/op",
            "extra": "4528 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get",
            "value": 230326,
            "unit": "ns/op\t    4576 B/op\t      91 allocs/op",
            "extra": "5782 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - ns/op",
            "value": 230326,
            "unit": "ns/op",
            "extra": "5782 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - B/op",
            "value": 4576,
            "unit": "B/op",
            "extra": "5782 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - allocs/op",
            "value": 91,
            "unit": "allocs/op",
            "extra": "5782 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete",
            "value": 521828,
            "unit": "ns/op\t   18799 B/op\t     188 allocs/op",
            "extra": "2308 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - ns/op",
            "value": 521828,
            "unit": "ns/op",
            "extra": "2308 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - B/op",
            "value": 18799,
            "unit": "B/op",
            "extra": "2308 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - allocs/op",
            "value": 188,
            "unit": "allocs/op",
            "extra": "2308 times\n4 procs"
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
          "id": "c061207265bc8b5f6aceca6ed57dbc61671203b0",
          "message": "Merge pull request #1707 from gofiber/dependabot/go_modules/couchbase/github.com/testcontainers/testcontainers-go/modules/couchbase-0.37.0\n\nchore(deps): bump github.com/testcontainers/testcontainers-go/modules/couchbase from 0.36.0 to 0.37.0 in /couchbase",
          "timestamp": "2025-04-29T09:39:03+02:00",
          "tree_id": "33bfe982826a2dad24cf875e87d98b397c4e355a",
          "url": "https://github.com/gofiber/storage/commit/c061207265bc8b5f6aceca6ed57dbc61671203b0"
        },
        "date": 1745912984351,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Couchbase_Set",
            "value": 274318,
            "unit": "ns/op\t    9704 B/op\t      97 allocs/op",
            "extra": "4521 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - ns/op",
            "value": 274318,
            "unit": "ns/op",
            "extra": "4521 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - B/op",
            "value": 9704,
            "unit": "B/op",
            "extra": "4521 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - allocs/op",
            "value": 97,
            "unit": "allocs/op",
            "extra": "4521 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get",
            "value": 226109,
            "unit": "ns/op\t    4568 B/op\t      90 allocs/op",
            "extra": "6148 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - ns/op",
            "value": 226109,
            "unit": "ns/op",
            "extra": "6148 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - B/op",
            "value": 4568,
            "unit": "B/op",
            "extra": "6148 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - allocs/op",
            "value": 90,
            "unit": "allocs/op",
            "extra": "6148 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete",
            "value": 535440,
            "unit": "ns/op\t   18812 B/op\t     188 allocs/op",
            "extra": "2305 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - ns/op",
            "value": 535440,
            "unit": "ns/op",
            "extra": "2305 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - B/op",
            "value": 18812,
            "unit": "B/op",
            "extra": "2305 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - allocs/op",
            "value": 188,
            "unit": "allocs/op",
            "extra": "2305 times\n4 procs"
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
        "date": 1751882652999,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Couchbase_Set",
            "value": 275326,
            "unit": "ns/op\t    9681 B/op\t      97 allocs/op",
            "extra": "4545 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - ns/op",
            "value": 275326,
            "unit": "ns/op",
            "extra": "4545 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - B/op",
            "value": 9681,
            "unit": "B/op",
            "extra": "4545 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - allocs/op",
            "value": 97,
            "unit": "allocs/op",
            "extra": "4545 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get",
            "value": 231289,
            "unit": "ns/op\t    4576 B/op\t      91 allocs/op",
            "extra": "5574 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - ns/op",
            "value": 231289,
            "unit": "ns/op",
            "extra": "5574 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - B/op",
            "value": 4576,
            "unit": "B/op",
            "extra": "5574 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - allocs/op",
            "value": 91,
            "unit": "allocs/op",
            "extra": "5574 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete",
            "value": 536324,
            "unit": "ns/op\t   18898 B/op\t     188 allocs/op",
            "extra": "2284 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - ns/op",
            "value": 536324,
            "unit": "ns/op",
            "extra": "2284 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - B/op",
            "value": 18898,
            "unit": "B/op",
            "extra": "2284 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - allocs/op",
            "value": 188,
            "unit": "allocs/op",
            "extra": "2284 times\n4 procs"
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
        "date": 1752653624293,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Couchbase_Set",
            "value": 265536,
            "unit": "ns/op\t    9577 B/op\t      97 allocs/op",
            "extra": "4646 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - ns/op",
            "value": 265536,
            "unit": "ns/op",
            "extra": "4646 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - B/op",
            "value": 9577,
            "unit": "B/op",
            "extra": "4646 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - allocs/op",
            "value": 97,
            "unit": "allocs/op",
            "extra": "4646 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get",
            "value": 230042,
            "unit": "ns/op\t    4580 B/op\t      91 allocs/op",
            "extra": "5439 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - ns/op",
            "value": 230042,
            "unit": "ns/op",
            "extra": "5439 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - B/op",
            "value": 4580,
            "unit": "B/op",
            "extra": "5439 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - allocs/op",
            "value": 91,
            "unit": "allocs/op",
            "extra": "5439 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete",
            "value": 525872,
            "unit": "ns/op\t   18247 B/op\t     187 allocs/op",
            "extra": "2454 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - ns/op",
            "value": 525872,
            "unit": "ns/op",
            "extra": "2454 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - B/op",
            "value": 18247,
            "unit": "B/op",
            "extra": "2454 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - allocs/op",
            "value": 187,
            "unit": "allocs/op",
            "extra": "2454 times\n4 procs"
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
          "id": "f3b453af7b3e15ed14b5d87373809d5e9992a04c",
          "message": "Merge pull request #1830 from gofiber/dependabot/go_modules/couchbase/github.com/couchbase/gocb/v2-2.10.1\n\nchore(deps): bump github.com/couchbase/gocb/v2 from 2.10.0 to 2.10.1 in /couchbase",
          "timestamp": "2025-07-22T10:40:45+02:00",
          "tree_id": "96b569799fe87d6c0dd803f701a0eb7bec728b29",
          "url": "https://github.com/gofiber/storage/commit/f3b453af7b3e15ed14b5d87373809d5e9992a04c"
        },
        "date": 1753174111041,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Couchbase_Set",
            "value": 258600,
            "unit": "ns/op\t    9435 B/op\t      94 allocs/op",
            "extra": "4474 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - ns/op",
            "value": 258600,
            "unit": "ns/op",
            "extra": "4474 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - B/op",
            "value": 9435,
            "unit": "B/op",
            "extra": "4474 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - allocs/op",
            "value": 94,
            "unit": "allocs/op",
            "extra": "4474 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get",
            "value": 228776,
            "unit": "ns/op\t    4256 B/op\t      88 allocs/op",
            "extra": "6117 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - ns/op",
            "value": 228776,
            "unit": "ns/op",
            "extra": "6117 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - B/op",
            "value": 4256,
            "unit": "B/op",
            "extra": "6117 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - allocs/op",
            "value": 88,
            "unit": "allocs/op",
            "extra": "6117 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete",
            "value": 514477,
            "unit": "ns/op\t   17836 B/op\t     182 allocs/op",
            "extra": "2391 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - ns/op",
            "value": 514477,
            "unit": "ns/op",
            "extra": "2391 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - B/op",
            "value": 17836,
            "unit": "B/op",
            "extra": "2391 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - allocs/op",
            "value": 182,
            "unit": "allocs/op",
            "extra": "2391 times\n4 procs"
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
          "id": "2b2277b064bb0f3d0adac53e6093c438029075c4",
          "message": "Merge pull request #1880 from gofiber/dependabot/go_modules/couchbase/github.com/couchbase/gocb/v2-2.11.0\n\nchore(deps): bump github.com/couchbase/gocb/v2 from 2.10.1 to 2.11.0 in /couchbase",
          "timestamp": "2025-08-27T18:58:49+02:00",
          "tree_id": "21113dfa43b9a9f146c2125da81f9623e9cce543",
          "url": "https://github.com/gofiber/storage/commit/2b2277b064bb0f3d0adac53e6093c438029075c4"
        },
        "date": 1756314391052,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Couchbase_Set",
            "value": 246968,
            "unit": "ns/op\t    9140 B/op\t      94 allocs/op",
            "extra": "4801 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - ns/op",
            "value": 246968,
            "unit": "ns/op",
            "extra": "4801 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - B/op",
            "value": 9140,
            "unit": "B/op",
            "extra": "4801 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - allocs/op",
            "value": 94,
            "unit": "allocs/op",
            "extra": "4801 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get",
            "value": 230942,
            "unit": "ns/op\t    4293 B/op\t      88 allocs/op",
            "extra": "5919 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - ns/op",
            "value": 230942,
            "unit": "ns/op",
            "extra": "5919 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - B/op",
            "value": 4293,
            "unit": "B/op",
            "extra": "5919 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - allocs/op",
            "value": 88,
            "unit": "allocs/op",
            "extra": "5919 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete",
            "value": 487461,
            "unit": "ns/op\t   18156 B/op\t     182 allocs/op",
            "extra": "2325 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - ns/op",
            "value": 487461,
            "unit": "ns/op",
            "extra": "2325 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - B/op",
            "value": 18156,
            "unit": "B/op",
            "extra": "2325 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - allocs/op",
            "value": 182,
            "unit": "allocs/op",
            "extra": "2325 times\n4 procs"
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
          "id": "b88571c98dd9d2e9f09513c2246642d1bed70383",
          "message": "Merge pull request #1907 from gofiber/dependabot/go_modules/couchbase/github.com/couchbase/gocb/v2-2.11.1\n\nchore(deps): bump github.com/couchbase/gocb/v2 from 2.11.0 to 2.11.1 in /couchbase",
          "timestamp": "2025-09-19T09:24:54+02:00",
          "tree_id": "37ebfbcea78afc8c6e19bc691677823ac69bc514",
          "url": "https://github.com/gofiber/storage/commit/b88571c98dd9d2e9f09513c2246642d1bed70383"
        },
        "date": 1758267168656,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Couchbase_Set",
            "value": 275926,
            "unit": "ns/op\t    9573 B/op\t      94 allocs/op",
            "extra": "4375 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - ns/op",
            "value": 275926,
            "unit": "ns/op",
            "extra": "4375 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - B/op",
            "value": 9573,
            "unit": "B/op",
            "extra": "4375 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - allocs/op",
            "value": 94,
            "unit": "allocs/op",
            "extra": "4375 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get",
            "value": 239423,
            "unit": "ns/op\t    4287 B/op\t      87 allocs/op",
            "extra": "5590 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - ns/op",
            "value": 239423,
            "unit": "ns/op",
            "extra": "5590 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - B/op",
            "value": 4287,
            "unit": "B/op",
            "extra": "5590 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - allocs/op",
            "value": 87,
            "unit": "allocs/op",
            "extra": "5590 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete",
            "value": 533641,
            "unit": "ns/op\t   18550 B/op\t     182 allocs/op",
            "extra": "2230 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - ns/op",
            "value": 533641,
            "unit": "ns/op",
            "extra": "2230 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - B/op",
            "value": 18550,
            "unit": "B/op",
            "extra": "2230 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - allocs/op",
            "value": 182,
            "unit": "allocs/op",
            "extra": "2230 times\n4 procs"
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
          "id": "296d6fd6c1e734883a9bd2df535c5c45f547dee0",
          "message": "Merge pull request #1976 from gofiber/dependabot/go_modules/couchbase/github.com/docker/docker-28.3.3incompatible\n\nchore(deps): bump github.com/docker/docker from 28.2.2+incompatible to 28.3.3+incompatible in /couchbase",
          "timestamp": "2025-11-06T09:02:49+01:00",
          "tree_id": "fc2cc03c95b09a9cc79c3c537b1083738a99250d",
          "url": "https://github.com/gofiber/storage/commit/296d6fd6c1e734883a9bd2df535c5c45f547dee0"
        },
        "date": 1762418178757,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Couchbase_Set",
            "value": 265256,
            "unit": "ns/op\t    9477 B/op\t      94 allocs/op",
            "extra": "4465 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - ns/op",
            "value": 265256,
            "unit": "ns/op",
            "extra": "4465 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - B/op",
            "value": 9477,
            "unit": "B/op",
            "extra": "4465 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - allocs/op",
            "value": 94,
            "unit": "allocs/op",
            "extra": "4465 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get",
            "value": 228500,
            "unit": "ns/op\t    4292 B/op\t      88 allocs/op",
            "extra": "5703 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - ns/op",
            "value": 228500,
            "unit": "ns/op",
            "extra": "5703 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - B/op",
            "value": 4292,
            "unit": "B/op",
            "extra": "5703 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - allocs/op",
            "value": 88,
            "unit": "allocs/op",
            "extra": "5703 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete",
            "value": 514546,
            "unit": "ns/op\t   18062 B/op\t     182 allocs/op",
            "extra": "2349 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - ns/op",
            "value": 514546,
            "unit": "ns/op",
            "extra": "2349 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - B/op",
            "value": 18062,
            "unit": "B/op",
            "extra": "2349 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - allocs/op",
            "value": 182,
            "unit": "allocs/op",
            "extra": "2349 times\n4 procs"
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
          "id": "637b96a0679d905fcd2d5b59800191abc27f81c7",
          "message": "Merge pull request #1975 from gofiber/dependabot/go_modules/couchbase/golang.org/x/net-0.46.0\n\nchore(deps): bump golang.org/x/net from 0.43.0 to 0.46.0 in /couchbase",
          "timestamp": "2025-11-06T09:04:02+01:00",
          "tree_id": "5a9742ba6c00ebe73078737e46ac555d9b41778f",
          "url": "https://github.com/gofiber/storage/commit/637b96a0679d905fcd2d5b59800191abc27f81c7"
        },
        "date": 1762418416013,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Couchbase_Set",
            "value": 264808,
            "unit": "ns/op\t    9473 B/op\t      94 allocs/op",
            "extra": "4467 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - ns/op",
            "value": 264808,
            "unit": "ns/op",
            "extra": "4467 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - B/op",
            "value": 9473,
            "unit": "B/op",
            "extra": "4467 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - allocs/op",
            "value": 94,
            "unit": "allocs/op",
            "extra": "4467 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get",
            "value": 232051,
            "unit": "ns/op\t    4288 B/op\t      88 allocs/op",
            "extra": "5832 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - ns/op",
            "value": 232051,
            "unit": "ns/op",
            "extra": "5832 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - B/op",
            "value": 4288,
            "unit": "B/op",
            "extra": "5832 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - allocs/op",
            "value": 88,
            "unit": "allocs/op",
            "extra": "5832 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete",
            "value": 525345,
            "unit": "ns/op\t   18212 B/op\t     182 allocs/op",
            "extra": "2310 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - ns/op",
            "value": 525345,
            "unit": "ns/op",
            "extra": "2310 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - B/op",
            "value": 18212,
            "unit": "B/op",
            "extra": "2310 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - allocs/op",
            "value": 182,
            "unit": "allocs/op",
            "extra": "2310 times\n4 procs"
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
          "id": "e3ae5f9639a2b83ffe19bb62e7d8c7a22b973b48",
          "message": "Merge pull request #1996 from gofiber/dependabot/go_modules/couchbase/github.com/docker/docker-28.5.2incompatible\n\nchore(deps): bump github.com/docker/docker from 28.3.3+incompatible to 28.5.2+incompatible in /couchbase",
          "timestamp": "2025-11-06T09:22:06+01:00",
          "tree_id": "f87919f26949f9df96ff920196d41a8a003a3f21",
          "url": "https://github.com/gofiber/storage/commit/e3ae5f9639a2b83ffe19bb62e7d8c7a22b973b48"
        },
        "date": 1762418727476,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Couchbase_Set",
            "value": 176417,
            "unit": "ns/op\t    8116 B/op\t      93 allocs/op",
            "extra": "6230 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - ns/op",
            "value": 176417,
            "unit": "ns/op",
            "extra": "6230 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - B/op",
            "value": 8116,
            "unit": "B/op",
            "extra": "6230 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - allocs/op",
            "value": 93,
            "unit": "allocs/op",
            "extra": "6230 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get",
            "value": 152273,
            "unit": "ns/op\t    4288 B/op\t      88 allocs/op",
            "extra": "9865 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - ns/op",
            "value": 152273,
            "unit": "ns/op",
            "extra": "9865 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - B/op",
            "value": 4288,
            "unit": "B/op",
            "extra": "9865 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - allocs/op",
            "value": 88,
            "unit": "allocs/op",
            "extra": "9865 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete",
            "value": 363455,
            "unit": "ns/op\t   15414 B/op\t     181 allocs/op",
            "extra": "3309 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - ns/op",
            "value": 363455,
            "unit": "ns/op",
            "extra": "3309 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - B/op",
            "value": 15414,
            "unit": "B/op",
            "extra": "3309 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - allocs/op",
            "value": 181,
            "unit": "allocs/op",
            "extra": "3309 times\n4 procs"
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
        "date": 1763658172190,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Couchbase_Set",
            "value": 185140,
            "unit": "ns/op\t    4748 B/op\t      93 allocs/op",
            "extra": "6397 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - ns/op",
            "value": 185140,
            "unit": "ns/op",
            "extra": "6397 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - B/op",
            "value": 4748,
            "unit": "B/op",
            "extra": "6397 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - allocs/op",
            "value": 93,
            "unit": "allocs/op",
            "extra": "6397 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get",
            "value": 151501,
            "unit": "ns/op\t    4281 B/op\t      87 allocs/op",
            "extra": "8019 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - ns/op",
            "value": 151501,
            "unit": "ns/op",
            "extra": "8019 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - B/op",
            "value": 4281,
            "unit": "B/op",
            "extra": "8019 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - allocs/op",
            "value": 87,
            "unit": "allocs/op",
            "extra": "8019 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete",
            "value": 352756,
            "unit": "ns/op\t   15845 B/op\t     181 allocs/op",
            "extra": "3103 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - ns/op",
            "value": 352756,
            "unit": "ns/op",
            "extra": "3103 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - B/op",
            "value": 15845,
            "unit": "B/op",
            "extra": "3103 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - allocs/op",
            "value": 181,
            "unit": "allocs/op",
            "extra": "3103 times\n4 procs"
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
        "date": 1763658247267,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Couchbase_Set",
            "value": 252193,
            "unit": "ns/op\t    9148 B/op\t      94 allocs/op",
            "extra": "4792 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - ns/op",
            "value": 252193,
            "unit": "ns/op",
            "extra": "4792 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - B/op",
            "value": 9148,
            "unit": "B/op",
            "extra": "4792 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - allocs/op",
            "value": 94,
            "unit": "allocs/op",
            "extra": "4792 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get",
            "value": 222263,
            "unit": "ns/op\t    4287 B/op\t      88 allocs/op",
            "extra": "6048 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - ns/op",
            "value": 222263,
            "unit": "ns/op",
            "extra": "6048 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - B/op",
            "value": 4287,
            "unit": "B/op",
            "extra": "6048 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - allocs/op",
            "value": 88,
            "unit": "allocs/op",
            "extra": "6048 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete",
            "value": 525396,
            "unit": "ns/op\t    9133 B/op\t     182 allocs/op",
            "extra": "2325 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - ns/op",
            "value": 525396,
            "unit": "ns/op",
            "extra": "2325 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - B/op",
            "value": 9133,
            "unit": "B/op",
            "extra": "2325 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - allocs/op",
            "value": 182,
            "unit": "allocs/op",
            "extra": "2325 times\n4 procs"
          }
        ]
      }
    ]
  }
}