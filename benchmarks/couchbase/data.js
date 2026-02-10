window.BENCHMARK_DATA = {
  "lastUpdate": 1770708426929,
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
        "date": 1763662445146,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Couchbase_Set",
            "value": 259198,
            "unit": "ns/op\t    9243 B/op\t      94 allocs/op",
            "extra": "4692 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - ns/op",
            "value": 259198,
            "unit": "ns/op",
            "extra": "4692 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - B/op",
            "value": 9243,
            "unit": "B/op",
            "extra": "4692 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - allocs/op",
            "value": 94,
            "unit": "allocs/op",
            "extra": "4692 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get",
            "value": 225515,
            "unit": "ns/op\t    4281 B/op\t      87 allocs/op",
            "extra": "5480 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - ns/op",
            "value": 225515,
            "unit": "ns/op",
            "extra": "5480 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - B/op",
            "value": 4281,
            "unit": "B/op",
            "extra": "5480 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - allocs/op",
            "value": 87,
            "unit": "allocs/op",
            "extra": "5480 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete",
            "value": 531711,
            "unit": "ns/op\t   17925 B/op\t     182 allocs/op",
            "extra": "2384 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - ns/op",
            "value": 531711,
            "unit": "ns/op",
            "extra": "2384 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - B/op",
            "value": 17925,
            "unit": "B/op",
            "extra": "2384 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - allocs/op",
            "value": 182,
            "unit": "allocs/op",
            "extra": "2384 times\n4 procs"
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
        "date": 1764260492637,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Couchbase_Set",
            "value": 263582,
            "unit": "ns/op\t    4774 B/op\t      94 allocs/op",
            "extra": "4639 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - ns/op",
            "value": 263582,
            "unit": "ns/op",
            "extra": "4639 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - B/op",
            "value": 4774,
            "unit": "B/op",
            "extra": "4639 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - allocs/op",
            "value": 94,
            "unit": "allocs/op",
            "extra": "4639 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get",
            "value": 229594,
            "unit": "ns/op\t    4292 B/op\t      88 allocs/op",
            "extra": "5553 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - ns/op",
            "value": 229594,
            "unit": "ns/op",
            "extra": "5553 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - B/op",
            "value": 4292,
            "unit": "B/op",
            "extra": "5553 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - allocs/op",
            "value": 88,
            "unit": "allocs/op",
            "extra": "5553 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete",
            "value": 541824,
            "unit": "ns/op\t   18253 B/op\t     182 allocs/op",
            "extra": "2300 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - ns/op",
            "value": 541824,
            "unit": "ns/op",
            "extra": "2300 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - B/op",
            "value": 18253,
            "unit": "B/op",
            "extra": "2300 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - allocs/op",
            "value": 182,
            "unit": "allocs/op",
            "extra": "2300 times\n4 procs"
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
        "date": 1765268070698,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Couchbase_Set",
            "value": 258004,
            "unit": "ns/op\t    9228 B/op\t      94 allocs/op",
            "extra": "4708 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - ns/op",
            "value": 258004,
            "unit": "ns/op",
            "extra": "4708 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - B/op",
            "value": 9228,
            "unit": "B/op",
            "extra": "4708 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - allocs/op",
            "value": 94,
            "unit": "allocs/op",
            "extra": "4708 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get",
            "value": 224901,
            "unit": "ns/op\t    4280 B/op\t      87 allocs/op",
            "extra": "5742 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - ns/op",
            "value": 224901,
            "unit": "ns/op",
            "extra": "5742 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - B/op",
            "value": 4280,
            "unit": "B/op",
            "extra": "5742 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - allocs/op",
            "value": 87,
            "unit": "allocs/op",
            "extra": "5742 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete",
            "value": 503006,
            "unit": "ns/op\t   18477 B/op\t     182 allocs/op",
            "extra": "2246 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - ns/op",
            "value": 503006,
            "unit": "ns/op",
            "extra": "2246 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - B/op",
            "value": 18477,
            "unit": "B/op",
            "extra": "2246 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - allocs/op",
            "value": 182,
            "unit": "allocs/op",
            "extra": "2246 times\n4 procs"
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
        "date": 1765440238841,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Couchbase_Set",
            "value": 270374,
            "unit": "ns/op\t    9148 B/op\t      94 allocs/op",
            "extra": "4791 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - ns/op",
            "value": 270374,
            "unit": "ns/op",
            "extra": "4791 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - B/op",
            "value": 9148,
            "unit": "B/op",
            "extra": "4791 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - allocs/op",
            "value": 94,
            "unit": "allocs/op",
            "extra": "4791 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get",
            "value": 224909,
            "unit": "ns/op\t    4289 B/op\t      88 allocs/op",
            "extra": "5674 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - ns/op",
            "value": 224909,
            "unit": "ns/op",
            "extra": "5674 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - B/op",
            "value": 4289,
            "unit": "B/op",
            "extra": "5674 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - allocs/op",
            "value": 88,
            "unit": "allocs/op",
            "extra": "5674 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete",
            "value": 509587,
            "unit": "ns/op\t   17478 B/op\t     181 allocs/op",
            "extra": "2509 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - ns/op",
            "value": 509587,
            "unit": "ns/op",
            "extra": "2509 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - B/op",
            "value": 17478,
            "unit": "B/op",
            "extra": "2509 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - allocs/op",
            "value": 181,
            "unit": "allocs/op",
            "extra": "2509 times\n4 procs"
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
        "date": 1766044196483,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Couchbase_Set",
            "value": 260745,
            "unit": "ns/op\t    9346 B/op\t      93 allocs/op",
            "extra": "4573 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - ns/op",
            "value": 260745,
            "unit": "ns/op",
            "extra": "4573 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - B/op",
            "value": 9346,
            "unit": "B/op",
            "extra": "4573 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - allocs/op",
            "value": 93,
            "unit": "allocs/op",
            "extra": "4573 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get",
            "value": 235913,
            "unit": "ns/op\t    4266 B/op\t      86 allocs/op",
            "extra": "5730 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - ns/op",
            "value": 235913,
            "unit": "ns/op",
            "extra": "5730 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - B/op",
            "value": 4266,
            "unit": "B/op",
            "extra": "5730 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - allocs/op",
            "value": 86,
            "unit": "allocs/op",
            "extra": "5730 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete",
            "value": 545342,
            "unit": "ns/op\t   18407 B/op\t     180 allocs/op",
            "extra": "2257 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - ns/op",
            "value": 545342,
            "unit": "ns/op",
            "extra": "2257 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - B/op",
            "value": 18407,
            "unit": "B/op",
            "extra": "2257 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - allocs/op",
            "value": 180,
            "unit": "allocs/op",
            "extra": "2257 times\n4 procs"
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
          "id": "c760c9236824743db7ef862103c0b109de4f6d0a",
          "message": "Merge pull request #2368 from gofiber/dependabot/go_modules/couchbase/github.com/couchbase/goprotostellar-1.0.5\n\nchore(deps): bump github.com/couchbase/goprotostellar from 1.0.2 to 1.0.5 in /couchbase",
          "timestamp": "2025-12-19T08:29:03+01:00",
          "tree_id": "d050ff1c1089b9f02b234ade38ea32c528a625c8",
          "url": "https://github.com/gofiber/storage/commit/c760c9236824743db7ef862103c0b109de4f6d0a"
        },
        "date": 1766129834091,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Couchbase_Set",
            "value": 264997,
            "unit": "ns/op\t    9260 B/op\t      93 allocs/op",
            "extra": "4659 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - ns/op",
            "value": 264997,
            "unit": "ns/op",
            "extra": "4659 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - B/op",
            "value": 9260,
            "unit": "B/op",
            "extra": "4659 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - allocs/op",
            "value": 93,
            "unit": "allocs/op",
            "extra": "4659 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get",
            "value": 233595,
            "unit": "ns/op\t    4279 B/op\t      87 allocs/op",
            "extra": "5396 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - ns/op",
            "value": 233595,
            "unit": "ns/op",
            "extra": "5396 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - B/op",
            "value": 4279,
            "unit": "B/op",
            "extra": "5396 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - allocs/op",
            "value": 87,
            "unit": "allocs/op",
            "extra": "5396 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete",
            "value": 535862,
            "unit": "ns/op\t   18522 B/op\t     180 allocs/op",
            "extra": "2230 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - ns/op",
            "value": 535862,
            "unit": "ns/op",
            "extra": "2230 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - B/op",
            "value": 18522,
            "unit": "B/op",
            "extra": "2230 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - allocs/op",
            "value": 180,
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
          "id": "2581f5a768a521091fd4dedab76186aff359f796",
          "message": "Merge pull request #2395 from gofiber/dependabot/go_modules/aerospike/golang-modules-305631bd7c",
          "timestamp": "2026-01-14T08:37:37+01:00",
          "tree_id": "699ec6907f378c93061af14d650b2f83e5797ac7",
          "url": "https://github.com/gofiber/storage/commit/2581f5a768a521091fd4dedab76186aff359f796"
        },
        "date": 1768376968381,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Couchbase_Set",
            "value": 265630,
            "unit": "ns/op\t    9357 B/op\t      93 allocs/op",
            "extra": "4563 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - ns/op",
            "value": 265630,
            "unit": "ns/op",
            "extra": "4563 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - B/op",
            "value": 9357,
            "unit": "B/op",
            "extra": "4563 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - allocs/op",
            "value": 93,
            "unit": "allocs/op",
            "extra": "4563 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get",
            "value": 227916,
            "unit": "ns/op\t    4272 B/op\t      87 allocs/op",
            "extra": "5892 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - ns/op",
            "value": 227916,
            "unit": "ns/op",
            "extra": "5892 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "5892 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - allocs/op",
            "value": 87,
            "unit": "allocs/op",
            "extra": "5892 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete",
            "value": 536755,
            "unit": "ns/op\t   18210 B/op\t     180 allocs/op",
            "extra": "2305 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - ns/op",
            "value": 536755,
            "unit": "ns/op",
            "extra": "2305 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - B/op",
            "value": 18210,
            "unit": "B/op",
            "extra": "2305 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - allocs/op",
            "value": 180,
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
          "id": "2fa4e61a61ab14f37699d47fafabedacd070234b",
          "message": "Merge pull request #2370 from gofiber/dependabot/go_modules/aerospike/docker-modules-78d0d09041",
          "timestamp": "2026-01-14T08:37:59+01:00",
          "tree_id": "f44a86ad4d3dc479cc163c5b675bf9f89808fc56",
          "url": "https://github.com/gofiber/storage/commit/2fa4e61a61ab14f37699d47fafabedacd070234b"
        },
        "date": 1768377781384,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Couchbase_Set",
            "value": 253341,
            "unit": "ns/op\t    9268 B/op\t      93 allocs/op",
            "extra": "4651 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - ns/op",
            "value": 253341,
            "unit": "ns/op",
            "extra": "4651 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - B/op",
            "value": 9268,
            "unit": "B/op",
            "extra": "4651 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - allocs/op",
            "value": 93,
            "unit": "allocs/op",
            "extra": "4651 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get",
            "value": 225988,
            "unit": "ns/op\t    4276 B/op\t      87 allocs/op",
            "extra": "5617 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - ns/op",
            "value": 225988,
            "unit": "ns/op",
            "extra": "5617 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - B/op",
            "value": 4276,
            "unit": "B/op",
            "extra": "5617 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - allocs/op",
            "value": 87,
            "unit": "allocs/op",
            "extra": "5617 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete",
            "value": 505169,
            "unit": "ns/op\t   17955 B/op\t     180 allocs/op",
            "extra": "2370 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - ns/op",
            "value": 505169,
            "unit": "ns/op",
            "extra": "2370 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - B/op",
            "value": 17955,
            "unit": "B/op",
            "extra": "2370 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - allocs/op",
            "value": 180,
            "unit": "allocs/op",
            "extra": "2370 times\n4 procs"
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
        "date": 1768379779944,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Couchbase_Set",
            "value": 265761,
            "unit": "ns/op\t    9126 B/op\t      93 allocs/op",
            "extra": "4798 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - ns/op",
            "value": 265761,
            "unit": "ns/op",
            "extra": "4798 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - B/op",
            "value": 9126,
            "unit": "B/op",
            "extra": "4798 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - allocs/op",
            "value": 93,
            "unit": "allocs/op",
            "extra": "4798 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get",
            "value": 231374,
            "unit": "ns/op\t    4276 B/op\t      87 allocs/op",
            "extra": "5539 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - ns/op",
            "value": 231374,
            "unit": "ns/op",
            "extra": "5539 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - B/op",
            "value": 4276,
            "unit": "B/op",
            "extra": "5539 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - allocs/op",
            "value": 87,
            "unit": "allocs/op",
            "extra": "5539 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete",
            "value": 526290,
            "unit": "ns/op\t   17940 B/op\t     180 allocs/op",
            "extra": "2374 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - ns/op",
            "value": 526290,
            "unit": "ns/op",
            "extra": "2374 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - B/op",
            "value": 17940,
            "unit": "B/op",
            "extra": "2374 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - allocs/op",
            "value": 180,
            "unit": "allocs/op",
            "extra": "2374 times\n4 procs"
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
        "date": 1768380632856,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Couchbase_Set",
            "value": 266527,
            "unit": "ns/op\t    9146 B/op\t      93 allocs/op",
            "extra": "4777 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - ns/op",
            "value": 266527,
            "unit": "ns/op",
            "extra": "4777 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - B/op",
            "value": 9146,
            "unit": "B/op",
            "extra": "4777 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - allocs/op",
            "value": 93,
            "unit": "allocs/op",
            "extra": "4777 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get",
            "value": 222356,
            "unit": "ns/op\t    4265 B/op\t      86 allocs/op",
            "extra": "5802 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - ns/op",
            "value": 222356,
            "unit": "ns/op",
            "extra": "5802 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - B/op",
            "value": 4265,
            "unit": "B/op",
            "extra": "5802 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - allocs/op",
            "value": 86,
            "unit": "allocs/op",
            "extra": "5802 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete",
            "value": 505683,
            "unit": "ns/op\t   18483 B/op\t     180 allocs/op",
            "extra": "2239 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - ns/op",
            "value": 505683,
            "unit": "ns/op",
            "extra": "2239 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - B/op",
            "value": 18483,
            "unit": "B/op",
            "extra": "2239 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - allocs/op",
            "value": 180,
            "unit": "allocs/op",
            "extra": "2239 times\n4 procs"
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
          "id": "20023dabec778f019e130bb9358d0c19fddadaa4",
          "message": "Merge pull request #2401 from gofiber/dependabot/go_modules/azureblob/golang-modules-7e3d9216ac\n\nchore(deps): bump the golang-modules group across 6 directories with 1 update",
          "timestamp": "2026-01-15T08:14:14+01:00",
          "tree_id": "9e28e208c66af7bc0e3f4ee1f41ba87af8d2eeaa",
          "url": "https://github.com/gofiber/storage/commit/20023dabec778f019e130bb9358d0c19fddadaa4"
        },
        "date": 1768461705551,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Couchbase_Set",
            "value": 260946,
            "unit": "ns/op\t    9089 B/op\t      93 allocs/op",
            "extra": "4839 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - ns/op",
            "value": 260946,
            "unit": "ns/op",
            "extra": "4839 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - B/op",
            "value": 9089,
            "unit": "B/op",
            "extra": "4839 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - allocs/op",
            "value": 93,
            "unit": "allocs/op",
            "extra": "4839 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get",
            "value": 221007,
            "unit": "ns/op\t    4265 B/op\t      86 allocs/op",
            "extra": "5920 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - ns/op",
            "value": 221007,
            "unit": "ns/op",
            "extra": "5920 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - B/op",
            "value": 4265,
            "unit": "B/op",
            "extra": "5920 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - allocs/op",
            "value": 86,
            "unit": "allocs/op",
            "extra": "5920 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete",
            "value": 497467,
            "unit": "ns/op\t    9106 B/op\t     180 allocs/op",
            "extra": "2380 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - ns/op",
            "value": 497467,
            "unit": "ns/op",
            "extra": "2380 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - B/op",
            "value": 9106,
            "unit": "B/op",
            "extra": "2380 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - allocs/op",
            "value": 180,
            "unit": "allocs/op",
            "extra": "2380 times\n4 procs"
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
          "id": "7dfabfa1825b88225a6889afc5cea98115781e4c",
          "message": "Merge pull request #2410 from gofiber/dependabot/go_modules/couchbase/github.com/sirupsen/logrus-1.9.4\n\nchore(deps): bump github.com/sirupsen/logrus from 1.9.3 to 1.9.4 in /couchbase",
          "timestamp": "2026-01-16T08:22:27+01:00",
          "tree_id": "c2a3192d63cf271c9e6ea5e955613c380aadc8f2",
          "url": "https://github.com/gofiber/storage/commit/7dfabfa1825b88225a6889afc5cea98115781e4c"
        },
        "date": 1768548986582,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Couchbase_Set",
            "value": 268048,
            "unit": "ns/op\t    9344 B/op\t      93 allocs/op",
            "extra": "4576 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - ns/op",
            "value": 268048,
            "unit": "ns/op",
            "extra": "4576 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - B/op",
            "value": 9344,
            "unit": "B/op",
            "extra": "4576 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - allocs/op",
            "value": 93,
            "unit": "allocs/op",
            "extra": "4576 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get",
            "value": 238808,
            "unit": "ns/op\t    4273 B/op\t      87 allocs/op",
            "extra": "5442 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - ns/op",
            "value": 238808,
            "unit": "ns/op",
            "extra": "5442 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - B/op",
            "value": 4273,
            "unit": "B/op",
            "extra": "5442 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - allocs/op",
            "value": 87,
            "unit": "allocs/op",
            "extra": "5442 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete",
            "value": 543122,
            "unit": "ns/op\t   18548 B/op\t     180 allocs/op",
            "extra": "2224 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - ns/op",
            "value": 543122,
            "unit": "ns/op",
            "extra": "2224 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - B/op",
            "value": 18548,
            "unit": "B/op",
            "extra": "2224 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - allocs/op",
            "value": 180,
            "unit": "allocs/op",
            "extra": "2224 times\n4 procs"
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
        "date": 1768893827426,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Couchbase_Set",
            "value": 257711,
            "unit": "ns/op\t    9315 B/op\t      93 allocs/op",
            "extra": "4604 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - ns/op",
            "value": 257711,
            "unit": "ns/op",
            "extra": "4604 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - B/op",
            "value": 9315,
            "unit": "B/op",
            "extra": "4604 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - allocs/op",
            "value": 93,
            "unit": "allocs/op",
            "extra": "4604 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get",
            "value": 224581,
            "unit": "ns/op\t    4277 B/op\t      87 allocs/op",
            "extra": "5809 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - ns/op",
            "value": 224581,
            "unit": "ns/op",
            "extra": "5809 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - B/op",
            "value": 4277,
            "unit": "B/op",
            "extra": "5809 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - allocs/op",
            "value": 87,
            "unit": "allocs/op",
            "extra": "5809 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete",
            "value": 496168,
            "unit": "ns/op\t   18096 B/op\t     180 allocs/op",
            "extra": "2330 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - ns/op",
            "value": 496168,
            "unit": "ns/op",
            "extra": "2330 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - B/op",
            "value": 18096,
            "unit": "B/op",
            "extra": "2330 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - allocs/op",
            "value": 180,
            "unit": "allocs/op",
            "extra": "2330 times\n4 procs"
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
        "date": 1769066653079,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Couchbase_Set",
            "value": 254329,
            "unit": "ns/op\t    4763 B/op\t      93 allocs/op",
            "extra": "4443 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - ns/op",
            "value": 254329,
            "unit": "ns/op",
            "extra": "4443 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - B/op",
            "value": 4763,
            "unit": "B/op",
            "extra": "4443 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - allocs/op",
            "value": 93,
            "unit": "allocs/op",
            "extra": "4443 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get",
            "value": 230676,
            "unit": "ns/op\t    4266 B/op\t      86 allocs/op",
            "extra": "5661 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - ns/op",
            "value": 230676,
            "unit": "ns/op",
            "extra": "5661 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - B/op",
            "value": 4266,
            "unit": "B/op",
            "extra": "5661 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - allocs/op",
            "value": 86,
            "unit": "allocs/op",
            "extra": "5661 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete",
            "value": 516675,
            "unit": "ns/op\t   18335 B/op\t     180 allocs/op",
            "extra": "2274 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - ns/op",
            "value": 516675,
            "unit": "ns/op",
            "extra": "2274 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - B/op",
            "value": 18335,
            "unit": "B/op",
            "extra": "2274 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - allocs/op",
            "value": 180,
            "unit": "allocs/op",
            "extra": "2274 times\n4 procs"
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
          "id": "c726b6af80b7025f6b030531abe027dae1a58d83",
          "message": "Merge pull request #2437 from gofiber/dependabot/go_modules/couchbase/github.com/couchbase/gocb/v2-2.11.2\n\nchore(deps): bump github.com/couchbase/gocb/v2 from 2.11.1 to 2.11.2 in /couchbase",
          "timestamp": "2026-01-22T08:18:54+01:00",
          "tree_id": "dc51e931ab393a22cf643a1d2e27e149c9452a78",
          "url": "https://github.com/gofiber/storage/commit/c726b6af80b7025f6b030531abe027dae1a58d83"
        },
        "date": 1769066807998,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Couchbase_Set",
            "value": 265410,
            "unit": "ns/op\t    9528 B/op\t      93 allocs/op",
            "extra": "4402 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - ns/op",
            "value": 265410,
            "unit": "ns/op",
            "extra": "4402 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - B/op",
            "value": 9528,
            "unit": "B/op",
            "extra": "4402 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - allocs/op",
            "value": 93,
            "unit": "allocs/op",
            "extra": "4402 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get",
            "value": 237614,
            "unit": "ns/op\t    4276 B/op\t      87 allocs/op",
            "extra": "5686 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - ns/op",
            "value": 237614,
            "unit": "ns/op",
            "extra": "5686 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - B/op",
            "value": 4276,
            "unit": "B/op",
            "extra": "5686 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - allocs/op",
            "value": 87,
            "unit": "allocs/op",
            "extra": "5686 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete",
            "value": 541505,
            "unit": "ns/op\t   18002 B/op\t     180 allocs/op",
            "extra": "2354 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - ns/op",
            "value": 541505,
            "unit": "ns/op",
            "extra": "2354 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - B/op",
            "value": 18002,
            "unit": "B/op",
            "extra": "2354 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - allocs/op",
            "value": 180,
            "unit": "allocs/op",
            "extra": "2354 times\n4 procs"
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
        "date": 1769671607878,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Couchbase_Set",
            "value": 249257,
            "unit": "ns/op\t    9291 B/op\t      93 allocs/op",
            "extra": "4627 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - ns/op",
            "value": 249257,
            "unit": "ns/op",
            "extra": "4627 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - B/op",
            "value": 9291,
            "unit": "B/op",
            "extra": "4627 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - allocs/op",
            "value": 93,
            "unit": "allocs/op",
            "extra": "4627 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get",
            "value": 233323,
            "unit": "ns/op\t    4272 B/op\t      87 allocs/op",
            "extra": "5948 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - ns/op",
            "value": 233323,
            "unit": "ns/op",
            "extra": "5948 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "5948 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - allocs/op",
            "value": 87,
            "unit": "allocs/op",
            "extra": "5948 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete",
            "value": 516362,
            "unit": "ns/op\t   18510 B/op\t     180 allocs/op",
            "extra": "2233 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - ns/op",
            "value": 516362,
            "unit": "ns/op",
            "extra": "2233 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - B/op",
            "value": 18510,
            "unit": "B/op",
            "extra": "2233 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - allocs/op",
            "value": 180,
            "unit": "allocs/op",
            "extra": "2233 times\n4 procs"
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
        "date": 1769757777161,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Couchbase_Set",
            "value": 263070,
            "unit": "ns/op\t    9321 B/op\t      93 allocs/op",
            "extra": "4597 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - ns/op",
            "value": 263070,
            "unit": "ns/op",
            "extra": "4597 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - B/op",
            "value": 9321,
            "unit": "B/op",
            "extra": "4597 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - allocs/op",
            "value": 93,
            "unit": "allocs/op",
            "extra": "4597 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get",
            "value": 221159,
            "unit": "ns/op\t    4272 B/op\t      87 allocs/op",
            "extra": "5737 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - ns/op",
            "value": 221159,
            "unit": "ns/op",
            "extra": "5737 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "5737 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - allocs/op",
            "value": 87,
            "unit": "allocs/op",
            "extra": "5737 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete",
            "value": 532116,
            "unit": "ns/op\t   18352 B/op\t     180 allocs/op",
            "extra": "2270 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - ns/op",
            "value": 532116,
            "unit": "ns/op",
            "extra": "2270 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - B/op",
            "value": 18352,
            "unit": "B/op",
            "extra": "2270 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - allocs/op",
            "value": 180,
            "unit": "allocs/op",
            "extra": "2270 times\n4 procs"
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
        "date": 1770018254767,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Couchbase_Set",
            "value": 269853,
            "unit": "ns/op\t    9429 B/op\t      93 allocs/op",
            "extra": "4494 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - ns/op",
            "value": 269853,
            "unit": "ns/op",
            "extra": "4494 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - B/op",
            "value": 9429,
            "unit": "B/op",
            "extra": "4494 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - allocs/op",
            "value": 93,
            "unit": "allocs/op",
            "extra": "4494 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get",
            "value": 222386,
            "unit": "ns/op\t    4266 B/op\t      86 allocs/op",
            "extra": "5199 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - ns/op",
            "value": 222386,
            "unit": "ns/op",
            "extra": "5199 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - B/op",
            "value": 4266,
            "unit": "B/op",
            "extra": "5199 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - allocs/op",
            "value": 86,
            "unit": "allocs/op",
            "extra": "5199 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete",
            "value": 540595,
            "unit": "ns/op\t   18152 B/op\t     180 allocs/op",
            "extra": "2319 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - ns/op",
            "value": 540595,
            "unit": "ns/op",
            "extra": "2319 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - B/op",
            "value": 18152,
            "unit": "B/op",
            "extra": "2319 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - allocs/op",
            "value": 180,
            "unit": "allocs/op",
            "extra": "2319 times\n4 procs"
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
        "date": 1770108527607,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Couchbase_Set",
            "value": 264729,
            "unit": "ns/op\t    9248 B/op\t      93 allocs/op",
            "extra": "4671 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - ns/op",
            "value": 264729,
            "unit": "ns/op",
            "extra": "4671 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - B/op",
            "value": 9248,
            "unit": "B/op",
            "extra": "4671 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - allocs/op",
            "value": 93,
            "unit": "allocs/op",
            "extra": "4671 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get",
            "value": 226034,
            "unit": "ns/op\t    4272 B/op\t      87 allocs/op",
            "extra": "5666 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - ns/op",
            "value": 226034,
            "unit": "ns/op",
            "extra": "5666 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "5666 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - allocs/op",
            "value": 87,
            "unit": "allocs/op",
            "extra": "5666 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete",
            "value": 527825,
            "unit": "ns/op\t   18609 B/op\t     180 allocs/op",
            "extra": "2210 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - ns/op",
            "value": 527825,
            "unit": "ns/op",
            "extra": "2210 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - B/op",
            "value": 18609,
            "unit": "B/op",
            "extra": "2210 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - allocs/op",
            "value": 180,
            "unit": "allocs/op",
            "extra": "2210 times\n4 procs"
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
        "date": 1770708423007,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Couchbase_Set",
            "value": 249058,
            "unit": "ns/op\t    4759 B/op\t      93 allocs/op",
            "extra": "4591 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - ns/op",
            "value": 249058,
            "unit": "ns/op",
            "extra": "4591 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - B/op",
            "value": 4759,
            "unit": "B/op",
            "extra": "4591 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - allocs/op",
            "value": 93,
            "unit": "allocs/op",
            "extra": "4591 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get",
            "value": 228203,
            "unit": "ns/op\t    4272 B/op\t      87 allocs/op",
            "extra": "6172 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - ns/op",
            "value": 228203,
            "unit": "ns/op",
            "extra": "6172 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "6172 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - allocs/op",
            "value": 87,
            "unit": "allocs/op",
            "extra": "6172 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete",
            "value": 526897,
            "unit": "ns/op\t   18149 B/op\t     180 allocs/op",
            "extra": "2320 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - ns/op",
            "value": 526897,
            "unit": "ns/op",
            "extra": "2320 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - B/op",
            "value": 18149,
            "unit": "B/op",
            "extra": "2320 times\n4 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - allocs/op",
            "value": 180,
            "unit": "allocs/op",
            "extra": "2320 times\n4 procs"
          }
        ]
      }
    ]
  }
}