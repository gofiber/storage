window.BENCHMARK_DATA = {
  "lastUpdate": 1762418289534,
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
          "id": "e5c2cd66f7326c14efe3cb1d58aeeeb4f507abde",
          "message": "Merge pull request #1699 from gofiber/dependabot/go_modules/neo4j/github.com/testcontainers/testcontainers-go-0.37.0\n\nchore(deps): bump github.com/testcontainers/testcontainers-go from 0.36.0 to 0.37.0 in /neo4j",
          "timestamp": "2025-04-28T12:53:19+02:00",
          "tree_id": "da8ea5c443b09b36f7f2c04de9eb48a6e22d4626",
          "url": "https://github.com/gofiber/storage/commit/e5c2cd66f7326c14efe3cb1d58aeeeb4f507abde"
        },
        "date": 1745837882856,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Neo4jStore_Set",
            "value": 1256181,
            "unit": "ns/op\t   13122 B/op\t     237 allocs/op",
            "extra": "814 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - ns/op",
            "value": 1256181,
            "unit": "ns/op",
            "extra": "814 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - B/op",
            "value": 13122,
            "unit": "B/op",
            "extra": "814 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - allocs/op",
            "value": 237,
            "unit": "allocs/op",
            "extra": "814 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get",
            "value": 1076605,
            "unit": "ns/op\t   15521 B/op\t     290 allocs/op",
            "extra": "1034 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get - ns/op",
            "value": 1076605,
            "unit": "ns/op",
            "extra": "1034 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get - B/op",
            "value": 15521,
            "unit": "B/op",
            "extra": "1034 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get - allocs/op",
            "value": 290,
            "unit": "allocs/op",
            "extra": "1034 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete",
            "value": 3454482,
            "unit": "ns/op\t   26282 B/op\t     474 allocs/op",
            "extra": "292 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - ns/op",
            "value": 3454482,
            "unit": "ns/op",
            "extra": "292 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - B/op",
            "value": 26282,
            "unit": "B/op",
            "extra": "292 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - allocs/op",
            "value": 474,
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
          "id": "5c8bb189aebb1e9a18fd26702662807efac466d1",
          "message": "Merge pull request #1718 from gofiber/dependabot/go_modules/neo4j/testcontainers-modules-b4945474bc\n\nchore(deps): bump the testcontainers-modules group across 3 directories with 3 updates",
          "timestamp": "2025-04-29T10:03:24+02:00",
          "tree_id": "0f929e62fecd783f8f05885c619857017d6ecb20",
          "url": "https://github.com/gofiber/storage/commit/5c8bb189aebb1e9a18fd26702662807efac466d1"
        },
        "date": 1745913885320,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Neo4jStore_Set",
            "value": 1251447,
            "unit": "ns/op\t   13123 B/op\t     237 allocs/op",
            "extra": "834 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - ns/op",
            "value": 1251447,
            "unit": "ns/op",
            "extra": "834 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - B/op",
            "value": 13123,
            "unit": "B/op",
            "extra": "834 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - allocs/op",
            "value": 237,
            "unit": "allocs/op",
            "extra": "834 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get",
            "value": 1053647,
            "unit": "ns/op\t   15521 B/op\t     290 allocs/op",
            "extra": "1063 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get - ns/op",
            "value": 1053647,
            "unit": "ns/op",
            "extra": "1063 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get - B/op",
            "value": 15521,
            "unit": "B/op",
            "extra": "1063 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get - allocs/op",
            "value": 290,
            "unit": "allocs/op",
            "extra": "1063 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete",
            "value": 3238337,
            "unit": "ns/op\t   26281 B/op\t     474 allocs/op",
            "extra": "310 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - ns/op",
            "value": 3238337,
            "unit": "ns/op",
            "extra": "310 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - B/op",
            "value": 26281,
            "unit": "B/op",
            "extra": "310 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - allocs/op",
            "value": 474,
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
          "id": "c596e5783ab21b4ebe7c5284f02246c16ae47e50",
          "message": "Merge pull request #1727 from gofiber/dependabot/go_modules/neo4j/github.com/neo4j/neo4j-go-driver/v5-5.28.1\n\nchore(deps): bump github.com/neo4j/neo4j-go-driver/v5 from 5.28.0 to 5.28.1 in /neo4j",
          "timestamp": "2025-05-02T09:56:35+02:00",
          "tree_id": "4d073daf975de27fd34865ad041886454272ed1b",
          "url": "https://github.com/gofiber/storage/commit/c596e5783ab21b4ebe7c5284f02246c16ae47e50"
        },
        "date": 1746172666617,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Neo4jStore_Set",
            "value": 1429444,
            "unit": "ns/op\t   13122 B/op\t     237 allocs/op",
            "extra": "735 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - ns/op",
            "value": 1429444,
            "unit": "ns/op",
            "extra": "735 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - B/op",
            "value": 13122,
            "unit": "B/op",
            "extra": "735 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - allocs/op",
            "value": 237,
            "unit": "allocs/op",
            "extra": "735 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get",
            "value": 1111716,
            "unit": "ns/op\t   15524 B/op\t     290 allocs/op",
            "extra": "1005 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get - ns/op",
            "value": 1111716,
            "unit": "ns/op",
            "extra": "1005 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get - B/op",
            "value": 15524,
            "unit": "B/op",
            "extra": "1005 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get - allocs/op",
            "value": 290,
            "unit": "allocs/op",
            "extra": "1005 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete",
            "value": 3327153,
            "unit": "ns/op\t   26284 B/op\t     474 allocs/op",
            "extra": "301 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - ns/op",
            "value": 3327153,
            "unit": "ns/op",
            "extra": "301 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - B/op",
            "value": 26284,
            "unit": "B/op",
            "extra": "301 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - allocs/op",
            "value": 474,
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
          "id": "84234671713e1e75e9f9c7eaaacc9f18f6c484e1",
          "message": "Merge pull request #1569 from gofiber/add-withcontext",
          "timestamp": "2025-07-07T11:44:47+02:00",
          "tree_id": "7578250e12b0352776171d0651b265ba58951118",
          "url": "https://github.com/gofiber/storage/commit/84234671713e1e75e9f9c7eaaacc9f18f6c484e1"
        },
        "date": 1751882233622,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Neo4jStore_Set",
            "value": 1476170,
            "unit": "ns/op\t   13120 B/op\t     237 allocs/op",
            "extra": "681 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - ns/op",
            "value": 1476170,
            "unit": "ns/op",
            "extra": "681 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - B/op",
            "value": 13120,
            "unit": "B/op",
            "extra": "681 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - allocs/op",
            "value": 237,
            "unit": "allocs/op",
            "extra": "681 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get",
            "value": 1088779,
            "unit": "ns/op\t   15520 B/op\t     290 allocs/op",
            "extra": "1012 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get - ns/op",
            "value": 1088779,
            "unit": "ns/op",
            "extra": "1012 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get - B/op",
            "value": 15520,
            "unit": "B/op",
            "extra": "1012 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get - allocs/op",
            "value": 290,
            "unit": "allocs/op",
            "extra": "1012 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete",
            "value": 3199809,
            "unit": "ns/op\t   26289 B/op\t     474 allocs/op",
            "extra": "315 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - ns/op",
            "value": 3199809,
            "unit": "ns/op",
            "extra": "315 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - B/op",
            "value": 26289,
            "unit": "B/op",
            "extra": "315 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - allocs/op",
            "value": 474,
            "unit": "allocs/op",
            "extra": "315 times\n4 procs"
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
        "date": 1752653255347,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Neo4jStore_Set",
            "value": 1285523,
            "unit": "ns/op\t   13121 B/op\t     237 allocs/op",
            "extra": "813 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - ns/op",
            "value": 1285523,
            "unit": "ns/op",
            "extra": "813 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - B/op",
            "value": 13121,
            "unit": "B/op",
            "extra": "813 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - allocs/op",
            "value": 237,
            "unit": "allocs/op",
            "extra": "813 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get",
            "value": 1200039,
            "unit": "ns/op\t   15520 B/op\t     290 allocs/op",
            "extra": "846 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get - ns/op",
            "value": 1200039,
            "unit": "ns/op",
            "extra": "846 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get - B/op",
            "value": 15520,
            "unit": "B/op",
            "extra": "846 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get - allocs/op",
            "value": 290,
            "unit": "allocs/op",
            "extra": "846 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete",
            "value": 3302947,
            "unit": "ns/op\t   26290 B/op\t     474 allocs/op",
            "extra": "313 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - ns/op",
            "value": 3302947,
            "unit": "ns/op",
            "extra": "313 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - B/op",
            "value": 26290,
            "unit": "B/op",
            "extra": "313 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - allocs/op",
            "value": 474,
            "unit": "allocs/op",
            "extra": "313 times\n4 procs"
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
          "id": "24709c108a34c30d58754dcb179d547626f98bc2",
          "message": "Merge pull request #1872 from gofiber/dependabot/go_modules/neo4j/github.com/neo4j/neo4j-go-driver/v5-5.28.2\n\nchore(deps): bump github.com/neo4j/neo4j-go-driver/v5 from 5.28.1 to 5.28.2 in /neo4j",
          "timestamp": "2025-08-18T14:04:00+02:00",
          "tree_id": "4fad8a6409008b236a7a0d532a532fb59c4314bc",
          "url": "https://github.com/gofiber/storage/commit/24709c108a34c30d58754dcb179d547626f98bc2"
        },
        "date": 1755518713638,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Neo4jStore_Set",
            "value": 1463956,
            "unit": "ns/op\t   13124 B/op\t     237 allocs/op",
            "extra": "703 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - ns/op",
            "value": 1463956,
            "unit": "ns/op",
            "extra": "703 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - B/op",
            "value": 13124,
            "unit": "B/op",
            "extra": "703 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - allocs/op",
            "value": 237,
            "unit": "allocs/op",
            "extra": "703 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get",
            "value": 1154872,
            "unit": "ns/op\t   15519 B/op\t     290 allocs/op",
            "extra": "982 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get - ns/op",
            "value": 1154872,
            "unit": "ns/op",
            "extra": "982 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get - B/op",
            "value": 15519,
            "unit": "B/op",
            "extra": "982 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get - allocs/op",
            "value": 290,
            "unit": "allocs/op",
            "extra": "982 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete",
            "value": 3342256,
            "unit": "ns/op\t   26409 B/op\t     475 allocs/op",
            "extra": "338 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - ns/op",
            "value": 3342256,
            "unit": "ns/op",
            "extra": "338 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - B/op",
            "value": 26409,
            "unit": "B/op",
            "extra": "338 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - allocs/op",
            "value": 475,
            "unit": "allocs/op",
            "extra": "338 times\n4 procs"
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
          "id": "d70a4fde7da8a2a9cb0e0a6edc8f1a993172060a",
          "message": "Merge pull request #1889 from gofiber/dependabot/go_modules/neo4j/github.com/neo4j/neo4j-go-driver/v5-5.28.3\n\nchore(deps): bump github.com/neo4j/neo4j-go-driver/v5 from 5.28.2 to 5.28.3 in /neo4j",
          "timestamp": "2025-09-03T09:17:45+02:00",
          "tree_id": "7a1f256d7268570e052cdb045ef3b3cd17af74eb",
          "url": "https://github.com/gofiber/storage/commit/d70a4fde7da8a2a9cb0e0a6edc8f1a993172060a"
        },
        "date": 1756883923124,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Neo4jStore_Set",
            "value": 1203290,
            "unit": "ns/op\t   13122 B/op\t     237 allocs/op",
            "extra": "848 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - ns/op",
            "value": 1203290,
            "unit": "ns/op",
            "extra": "848 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - B/op",
            "value": 13122,
            "unit": "B/op",
            "extra": "848 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - allocs/op",
            "value": 237,
            "unit": "allocs/op",
            "extra": "848 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get",
            "value": 1113437,
            "unit": "ns/op\t   15524 B/op\t     290 allocs/op",
            "extra": "932 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get - ns/op",
            "value": 1113437,
            "unit": "ns/op",
            "extra": "932 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get - B/op",
            "value": 15524,
            "unit": "B/op",
            "extra": "932 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get - allocs/op",
            "value": 290,
            "unit": "allocs/op",
            "extra": "932 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete",
            "value": 3171671,
            "unit": "ns/op\t   26291 B/op\t     474 allocs/op",
            "extra": "340 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - ns/op",
            "value": 3171671,
            "unit": "ns/op",
            "extra": "340 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - B/op",
            "value": 26291,
            "unit": "B/op",
            "extra": "340 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - allocs/op",
            "value": 474,
            "unit": "allocs/op",
            "extra": "340 times\n4 procs"
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
          "id": "0d843b85a95d5b506d27e204b5be382402ab19d0",
          "message": "Merge pull request #1922 from gofiber/dependabot/go_modules/neo4j/github.com/neo4j/neo4j-go-driver/v5-5.28.4\n\nchore(deps): bump github.com/neo4j/neo4j-go-driver/v5 from 5.28.3 to 5.28.4 in /neo4j",
          "timestamp": "2025-10-07T09:14:34+02:00",
          "tree_id": "fe447576e0bc8e40b3848d4606c1b3bda4f10ded",
          "url": "https://github.com/gofiber/storage/commit/0d843b85a95d5b506d27e204b5be382402ab19d0"
        },
        "date": 1759821359451,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Neo4jStore_Set",
            "value": 1467530,
            "unit": "ns/op\t   13122 B/op\t     237 allocs/op",
            "extra": "711 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - ns/op",
            "value": 1467530,
            "unit": "ns/op",
            "extra": "711 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - B/op",
            "value": 13122,
            "unit": "B/op",
            "extra": "711 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - allocs/op",
            "value": 237,
            "unit": "allocs/op",
            "extra": "711 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get",
            "value": 1121586,
            "unit": "ns/op\t   15522 B/op\t     290 allocs/op",
            "extra": "958 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get - ns/op",
            "value": 1121586,
            "unit": "ns/op",
            "extra": "958 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get - B/op",
            "value": 15522,
            "unit": "B/op",
            "extra": "958 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get - allocs/op",
            "value": 290,
            "unit": "allocs/op",
            "extra": "958 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete",
            "value": 3620368,
            "unit": "ns/op\t   26404 B/op\t     475 allocs/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - ns/op",
            "value": 3620368,
            "unit": "ns/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - B/op",
            "value": 26404,
            "unit": "B/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - allocs/op",
            "value": 475,
            "unit": "allocs/op",
            "extra": "334 times\n4 procs"
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
          "id": "211a13bb2813d50877d1737d8ff4b87da051de61",
          "message": "Merge pull request #1969 from gofiber/dependabot/go_modules/neo4j/github.com/docker/docker-28.3.3incompatible\n\nchore(deps): bump github.com/docker/docker from 28.2.2+incompatible to 28.3.3+incompatible in /neo4j",
          "timestamp": "2025-11-06T09:02:21+01:00",
          "tree_id": "47dfe7929ca6d8cdff21cce1e8cca79b1db8bd81",
          "url": "https://github.com/gofiber/storage/commit/211a13bb2813d50877d1737d8ff4b87da051de61"
        },
        "date": 1762417654282,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Neo4jStore_Set",
            "value": 1448642,
            "unit": "ns/op\t   13120 B/op\t     237 allocs/op",
            "extra": "691 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - ns/op",
            "value": 1448642,
            "unit": "ns/op",
            "extra": "691 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - B/op",
            "value": 13120,
            "unit": "B/op",
            "extra": "691 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - allocs/op",
            "value": 237,
            "unit": "allocs/op",
            "extra": "691 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get",
            "value": 1101186,
            "unit": "ns/op\t   15522 B/op\t     290 allocs/op",
            "extra": "985 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get - ns/op",
            "value": 1101186,
            "unit": "ns/op",
            "extra": "985 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get - B/op",
            "value": 15522,
            "unit": "B/op",
            "extra": "985 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get - allocs/op",
            "value": 290,
            "unit": "allocs/op",
            "extra": "985 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete",
            "value": 3658126,
            "unit": "ns/op\t   26401 B/op\t     475 allocs/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - ns/op",
            "value": 3658126,
            "unit": "ns/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - B/op",
            "value": 26401,
            "unit": "B/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - allocs/op",
            "value": 475,
            "unit": "allocs/op",
            "extra": "334 times\n4 procs"
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
          "id": "64b603c5471304d9cac6ca2822fac563898e12e9",
          "message": "Merge pull request #1992 from gofiber/dependabot/go_modules/neo4j/github.com/docker/docker-28.5.2incompatible\n\nchore(deps): bump github.com/docker/docker from 28.3.3+incompatible to 28.5.2+incompatible in /neo4j",
          "timestamp": "2025-11-06T09:20:46+01:00",
          "tree_id": "e75adc11f7492a9e20206dd71dec4445872dac70",
          "url": "https://github.com/gofiber/storage/commit/64b603c5471304d9cac6ca2822fac563898e12e9"
        },
        "date": 1762418285795,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Neo4jStore_Set",
            "value": 1289429,
            "unit": "ns/op\t   13120 B/op\t     237 allocs/op",
            "extra": "783 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - ns/op",
            "value": 1289429,
            "unit": "ns/op",
            "extra": "783 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - B/op",
            "value": 13120,
            "unit": "B/op",
            "extra": "783 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - allocs/op",
            "value": 237,
            "unit": "allocs/op",
            "extra": "783 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get",
            "value": 1190492,
            "unit": "ns/op\t   15521 B/op\t     290 allocs/op",
            "extra": "874 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get - ns/op",
            "value": 1190492,
            "unit": "ns/op",
            "extra": "874 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get - B/op",
            "value": 15521,
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
            "value": 2980454,
            "unit": "ns/op\t   26284 B/op\t     474 allocs/op",
            "extra": "370 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - ns/op",
            "value": 2980454,
            "unit": "ns/op",
            "extra": "370 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - B/op",
            "value": 26284,
            "unit": "B/op",
            "extra": "370 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - allocs/op",
            "value": 474,
            "unit": "allocs/op",
            "extra": "370 times\n4 procs"
          }
        ]
      }
    ]
  }
}