window.BENCHMARK_DATA = {
  "lastUpdate": 1744782280274,
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
          "id": "e4abddc19ffa4357782832b7993316fd4728c198",
          "message": "Merge pull request #1562 from the-real-i9/main\n\n🔥 feat: Add support for Neo4j",
          "timestamp": "2025-02-03T15:27:20+01:00",
          "tree_id": "3047322976de2108619c89df2419138c0acbf01c",
          "url": "https://github.com/gofiber/storage/commit/e4abddc19ffa4357782832b7993316fd4728c198"
        },
        "date": 1738592926167,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Neo4jStore_Set",
            "value": 1525854,
            "unit": "ns/op\t   15293 B/op\t     304 allocs/op",
            "extra": "702 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - ns/op",
            "value": 1525854,
            "unit": "ns/op",
            "extra": "702 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - B/op",
            "value": 15293,
            "unit": "B/op",
            "extra": "702 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - allocs/op",
            "value": 304,
            "unit": "allocs/op",
            "extra": "702 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get",
            "value": 1413541,
            "unit": "ns/op\t   17653 B/op\t     357 allocs/op",
            "extra": "712 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get - ns/op",
            "value": 1413541,
            "unit": "ns/op",
            "extra": "712 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get - B/op",
            "value": 17653,
            "unit": "B/op",
            "extra": "712 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get - allocs/op",
            "value": 357,
            "unit": "allocs/op",
            "extra": "712 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete",
            "value": 3564882,
            "unit": "ns/op\t   30630 B/op\t     608 allocs/op",
            "extra": "292 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - ns/op",
            "value": 3564882,
            "unit": "ns/op",
            "extra": "292 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - B/op",
            "value": 30630,
            "unit": "B/op",
            "extra": "292 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - allocs/op",
            "value": 608,
            "unit": "allocs/op",
            "extra": "292 times\n4 procs"
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
          "id": "c1933ed3e87ea6f84e3bde5edee29f19495afa91",
          "message": "Merge pull request #1515 from mdelapenya/tc-go-adoption-2\n\nchore: adopt testcontainers-go for Postgres, MySQL and MongoDB",
          "timestamp": "2025-03-19T08:01:09+01:00",
          "tree_id": "bd7d7600b063b44df0a5960ac0d1d4b43f6fa48c",
          "url": "https://github.com/gofiber/storage/commit/c1933ed3e87ea6f84e3bde5edee29f19495afa91"
        },
        "date": 1742368032382,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Neo4jStore_Set",
            "value": 1555425,
            "unit": "ns/op\t   15293 B/op\t     304 allocs/op",
            "extra": "684 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - ns/op",
            "value": 1555425,
            "unit": "ns/op",
            "extra": "684 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - B/op",
            "value": 15293,
            "unit": "B/op",
            "extra": "684 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - allocs/op",
            "value": 304,
            "unit": "allocs/op",
            "extra": "684 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get",
            "value": 1407776,
            "unit": "ns/op\t   17657 B/op\t     357 allocs/op",
            "extra": "742 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get - ns/op",
            "value": 1407776,
            "unit": "ns/op",
            "extra": "742 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get - B/op",
            "value": 17657,
            "unit": "B/op",
            "extra": "742 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get - allocs/op",
            "value": 357,
            "unit": "allocs/op",
            "extra": "742 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete",
            "value": 3451391,
            "unit": "ns/op\t   30626 B/op\t     608 allocs/op",
            "extra": "298 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - ns/op",
            "value": 3451391,
            "unit": "ns/op",
            "extra": "298 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - B/op",
            "value": 30626,
            "unit": "B/op",
            "extra": "298 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - allocs/op",
            "value": 608,
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
          "id": "0f6fecf48e066a2bca256b126b1e7bc6b7a227c3",
          "message": "Merge pull request #1597 from gofiber/dependabot/go_modules/neo4j/github.com/stretchr/testify-1.10.0\n\nchore(deps): bump github.com/stretchr/testify from 1.9.0 to 1.10.0 in /neo4j",
          "timestamp": "2025-03-26T20:31:48+01:00",
          "tree_id": "0af40a87d80d0b29225dc031f87c8d4d3d4e9dce",
          "url": "https://github.com/gofiber/storage/commit/0f6fecf48e066a2bca256b126b1e7bc6b7a227c3"
        },
        "date": 1743020191032,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Neo4jStore_Set",
            "value": 1527623,
            "unit": "ns/op\t   15295 B/op\t     304 allocs/op",
            "extra": "693 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - ns/op",
            "value": 1527623,
            "unit": "ns/op",
            "extra": "693 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - B/op",
            "value": 15295,
            "unit": "B/op",
            "extra": "693 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - allocs/op",
            "value": 304,
            "unit": "allocs/op",
            "extra": "693 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get",
            "value": 1464291,
            "unit": "ns/op\t   17655 B/op\t     357 allocs/op",
            "extra": "721 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get - ns/op",
            "value": 1464291,
            "unit": "ns/op",
            "extra": "721 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get - B/op",
            "value": 17655,
            "unit": "B/op",
            "extra": "721 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get - allocs/op",
            "value": 357,
            "unit": "allocs/op",
            "extra": "721 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete",
            "value": 3429834,
            "unit": "ns/op\t   30626 B/op\t     608 allocs/op",
            "extra": "295 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - ns/op",
            "value": 3429834,
            "unit": "ns/op",
            "extra": "295 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - B/op",
            "value": 30626,
            "unit": "B/op",
            "extra": "295 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - allocs/op",
            "value": 608,
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
          "id": "904a606aa298640f2edb9a167de39219b932a3c4",
          "message": "Merge pull request #1631 from mdelapenya/tc-azurite\n\nchore: bump testcontainers-go to v0.36.0",
          "timestamp": "2025-04-09T11:15:31+02:00",
          "tree_id": "9a609b5228fe260c6730ccd3a8e041d94014c919",
          "url": "https://github.com/gofiber/storage/commit/904a606aa298640f2edb9a167de39219b932a3c4"
        },
        "date": 1744190283246,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Neo4jStore_Set",
            "value": 1691675,
            "unit": "ns/op\t   15294 B/op\t     304 allocs/op",
            "extra": "660 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - ns/op",
            "value": 1691675,
            "unit": "ns/op",
            "extra": "660 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - B/op",
            "value": 15294,
            "unit": "B/op",
            "extra": "660 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - allocs/op",
            "value": 304,
            "unit": "allocs/op",
            "extra": "660 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get",
            "value": 1456211,
            "unit": "ns/op\t   17654 B/op\t     357 allocs/op",
            "extra": "692 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get - ns/op",
            "value": 1456211,
            "unit": "ns/op",
            "extra": "692 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get - B/op",
            "value": 17654,
            "unit": "B/op",
            "extra": "692 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get - allocs/op",
            "value": 357,
            "unit": "allocs/op",
            "extra": "692 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete",
            "value": 3833161,
            "unit": "ns/op\t   30625 B/op\t     608 allocs/op",
            "extra": "289 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - ns/op",
            "value": 3833161,
            "unit": "ns/op",
            "extra": "289 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - B/op",
            "value": 30625,
            "unit": "B/op",
            "extra": "289 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - allocs/op",
            "value": 608,
            "unit": "allocs/op",
            "extra": "289 times\n4 procs"
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
          "id": "617e1029e41e7066bc620987d154d9cf282dd223",
          "message": "Merge pull request #1668 from gofiber/dependabot/go_modules/neo4j/github.com/neo4j/neo4j-go-driver/v5-5.28.0\n\nchore(deps): bump github.com/neo4j/neo4j-go-driver/v5 from 5.27.0 to 5.28.0 in /neo4j",
          "timestamp": "2025-04-14T09:24:46+02:00",
          "tree_id": "d28146b595a50e573d8189cce3751674106e55f9",
          "url": "https://github.com/gofiber/storage/commit/617e1029e41e7066bc620987d154d9cf282dd223"
        },
        "date": 1744615555428,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Neo4jStore_Set",
            "value": 1470713,
            "unit": "ns/op\t   12916 B/op\t     237 allocs/op",
            "extra": "680 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - ns/op",
            "value": 1470713,
            "unit": "ns/op",
            "extra": "680 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - B/op",
            "value": 12916,
            "unit": "B/op",
            "extra": "680 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - allocs/op",
            "value": 237,
            "unit": "allocs/op",
            "extra": "680 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get",
            "value": 1117968,
            "unit": "ns/op\t   15264 B/op\t     290 allocs/op",
            "extra": "980 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get - ns/op",
            "value": 1117968,
            "unit": "ns/op",
            "extra": "980 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get - B/op",
            "value": 15264,
            "unit": "B/op",
            "extra": "980 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get - allocs/op",
            "value": 290,
            "unit": "allocs/op",
            "extra": "980 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete",
            "value": 3311384,
            "unit": "ns/op\t   25875 B/op\t     474 allocs/op",
            "extra": "314 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - ns/op",
            "value": 3311384,
            "unit": "ns/op",
            "extra": "314 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - B/op",
            "value": 25875,
            "unit": "B/op",
            "extra": "314 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - allocs/op",
            "value": 474,
            "unit": "allocs/op",
            "extra": "314 times\n4 procs"
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
        "date": 1744782272565,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Neo4jStore_Set",
            "value": 1254737,
            "unit": "ns/op\t   13121 B/op\t     237 allocs/op",
            "extra": "820 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - ns/op",
            "value": 1254737,
            "unit": "ns/op",
            "extra": "820 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - B/op",
            "value": 13121,
            "unit": "B/op",
            "extra": "820 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - allocs/op",
            "value": 237,
            "unit": "allocs/op",
            "extra": "820 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get",
            "value": 1154425,
            "unit": "ns/op\t   15524 B/op\t     290 allocs/op",
            "extra": "874 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get - ns/op",
            "value": 1154425,
            "unit": "ns/op",
            "extra": "874 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get - B/op",
            "value": 15524,
            "unit": "B/op",
            "extra": "874 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get - allocs/op",
            "value": 290,
            "unit": "allocs/op",
            "extra": "874 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete",
            "value": 3097741,
            "unit": "ns/op\t   26287 B/op\t     474 allocs/op",
            "extra": "339 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - ns/op",
            "value": 3097741,
            "unit": "ns/op",
            "extra": "339 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - B/op",
            "value": 26287,
            "unit": "B/op",
            "extra": "339 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - allocs/op",
            "value": 474,
            "unit": "allocs/op",
            "extra": "339 times\n4 procs"
          }
        ]
      }
    ]
  }
}