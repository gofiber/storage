window.BENCHMARK_DATA = {
  "lastUpdate": 1745838298686,
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
      }
    ]
  }
}