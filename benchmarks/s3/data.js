window.BENCHMARK_DATA = {
  "lastUpdate": 1769757413346,
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
          "id": "e1e51a0d68f8fa33b6f88dcd5adac31b2605af50",
          "message": "Merge pull request #1536 from mdelapenya/refactor-benchmark-workflow\n\nchore(ci): run benchmarks for each storage in separate workers",
          "timestamp": "2025-01-30T08:39:56+01:00",
          "tree_id": "7672c849fab81f76fd009aaa120441f42bbf921e",
          "url": "https://github.com/gofiber/storage/commit/e1e51a0d68f8fa33b6f88dcd5adac31b2605af50"
        },
        "date": 1738222864803,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2514403,
            "unit": "ns/op\t   75312 B/op\t     663 allocs/op",
            "extra": "463 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2514403,
            "unit": "ns/op",
            "extra": "463 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 75312,
            "unit": "B/op",
            "extra": "463 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 663,
            "unit": "allocs/op",
            "extra": "463 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 805513,
            "unit": "ns/op\t   71451 B/op\t     609 allocs/op",
            "extra": "1484 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 805513,
            "unit": "ns/op",
            "extra": "1484 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 71451,
            "unit": "B/op",
            "extra": "1484 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 609,
            "unit": "allocs/op",
            "extra": "1484 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2824883,
            "unit": "ns/op\t  108433 B/op\t    1127 allocs/op",
            "extra": "430 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2824883,
            "unit": "ns/op",
            "extra": "430 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 108433,
            "unit": "B/op",
            "extra": "430 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1127,
            "unit": "allocs/op",
            "extra": "430 times\n4 procs"
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
          "id": "d4b254694fee0450af5890f1d4099bc3cf9d8423",
          "message": "Merge pull request #1563 from gofiber/dependabot/go_modules/s3/github.com/aws/aws-sdk-go-v2/credentials-1.17.55\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/credentials from 1.17.27 to 1.17.55 in /s3",
          "timestamp": "2025-01-30T14:58:08+01:00",
          "tree_id": "6c0e49d5c2403f6a80f7fffb0d1625783c9455bb",
          "url": "https://github.com/gofiber/storage/commit/d4b254694fee0450af5890f1d4099bc3cf9d8423"
        },
        "date": 1738245552069,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2098856,
            "unit": "ns/op\t   76387 B/op\t     706 allocs/op",
            "extra": "535 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2098856,
            "unit": "ns/op",
            "extra": "535 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 76387,
            "unit": "B/op",
            "extra": "535 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 706,
            "unit": "allocs/op",
            "extra": "535 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 796481,
            "unit": "ns/op\t   72549 B/op\t     652 allocs/op",
            "extra": "1448 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 796481,
            "unit": "ns/op",
            "extra": "1448 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 72549,
            "unit": "B/op",
            "extra": "1448 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 652,
            "unit": "allocs/op",
            "extra": "1448 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2622197,
            "unit": "ns/op\t  110756 B/op\t    1213 allocs/op",
            "extra": "483 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2622197,
            "unit": "ns/op",
            "extra": "483 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 110756,
            "unit": "B/op",
            "extra": "483 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1213,
            "unit": "allocs/op",
            "extra": "483 times\n4 procs"
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
        "date": 1742367791140,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2231418,
            "unit": "ns/op\t   78027 B/op\t     702 allocs/op",
            "extra": "554 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2231418,
            "unit": "ns/op",
            "extra": "554 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 78027,
            "unit": "B/op",
            "extra": "554 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 702,
            "unit": "allocs/op",
            "extra": "554 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 789154,
            "unit": "ns/op\t   72499 B/op\t     647 allocs/op",
            "extra": "1519 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 789154,
            "unit": "ns/op",
            "extra": "1519 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 72499,
            "unit": "B/op",
            "extra": "1519 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 647,
            "unit": "allocs/op",
            "extra": "1519 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2554371,
            "unit": "ns/op\t  113330 B/op\t    1204 allocs/op",
            "extra": "459 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2554371,
            "unit": "ns/op",
            "extra": "459 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 113330,
            "unit": "B/op",
            "extra": "459 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1204,
            "unit": "allocs/op",
            "extra": "459 times\n4 procs"
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
          "id": "b04a6d0bd2c21881dcbefc9b97b59b3aa3baa189",
          "message": "Merge pull request #1602 from gofiber/dependabot/go_modules/s3/github.com/stretchr/testify-1.10.0\n\nchore(deps): bump github.com/stretchr/testify from 1.9.0 to 1.10.0 in /s3",
          "timestamp": "2025-03-26T20:32:08+01:00",
          "tree_id": "a0443e67004700f4321c7a38781a49a835ced41c",
          "url": "https://github.com/gofiber/storage/commit/b04a6d0bd2c21881dcbefc9b97b59b3aa3baa189"
        },
        "date": 1743020181487,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2622334,
            "unit": "ns/op\t   78038 B/op\t     702 allocs/op",
            "extra": "502 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2622334,
            "unit": "ns/op",
            "extra": "502 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 78038,
            "unit": "B/op",
            "extra": "502 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 702,
            "unit": "allocs/op",
            "extra": "502 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 882795,
            "unit": "ns/op\t   72516 B/op\t     647 allocs/op",
            "extra": "1311 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 882795,
            "unit": "ns/op",
            "extra": "1311 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 72516,
            "unit": "B/op",
            "extra": "1311 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 647,
            "unit": "allocs/op",
            "extra": "1311 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2912456,
            "unit": "ns/op\t  113339 B/op\t    1204 allocs/op",
            "extra": "393 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2912456,
            "unit": "ns/op",
            "extra": "393 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 113339,
            "unit": "B/op",
            "extra": "393 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1204,
            "unit": "allocs/op",
            "extra": "393 times\n4 procs"
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
          "id": "1654e52f95c7967f3ce0f6db3751bd35951dbc32",
          "message": "Merge pull request #1613 from gofiber/dependabot/go_modules/s3/github.com/aws/aws-sdk-go-v2-1.36.3\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2 from 1.34.0 to 1.36.3 in /s3",
          "timestamp": "2025-03-27T09:16:03+01:00",
          "tree_id": "1f7febcad9a48012df58ad3ebaa11113f26c4a19",
          "url": "https://github.com/gofiber/storage/commit/1654e52f95c7967f3ce0f6db3751bd35951dbc32"
        },
        "date": 1743063570028,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2503831,
            "unit": "ns/op\t   78318 B/op\t     702 allocs/op",
            "extra": "511 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2503831,
            "unit": "ns/op",
            "extra": "511 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 78318,
            "unit": "B/op",
            "extra": "511 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 702,
            "unit": "allocs/op",
            "extra": "511 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 793288,
            "unit": "ns/op\t   72521 B/op\t     647 allocs/op",
            "extra": "1491 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 793288,
            "unit": "ns/op",
            "extra": "1491 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 72521,
            "unit": "B/op",
            "extra": "1491 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 647,
            "unit": "allocs/op",
            "extra": "1491 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2698208,
            "unit": "ns/op\t  113044 B/op\t    1204 allocs/op",
            "extra": "435 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2698208,
            "unit": "ns/op",
            "extra": "435 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 113044,
            "unit": "B/op",
            "extra": "435 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1204,
            "unit": "allocs/op",
            "extra": "435 times\n4 procs"
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
          "id": "5ee1715022d3e1649e1b8f59c6d8100abfb85852",
          "message": "Merge pull request #1614 from gofiber/dependabot/go_modules/s3/github.com/aws/aws-sdk-go-v2/credentials-1.17.64\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/credentials from 1.17.55 to 1.17.64 in /s3",
          "timestamp": "2025-03-27T09:18:01+01:00",
          "tree_id": "bcc429f6300b94451e673125df19e40df3a1fdb3",
          "url": "https://github.com/gofiber/storage/commit/5ee1715022d3e1649e1b8f59c6d8100abfb85852"
        },
        "date": 1743063693569,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2109603,
            "unit": "ns/op\t   77448 B/op\t     701 allocs/op",
            "extra": "567 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2109603,
            "unit": "ns/op",
            "extra": "567 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 77448,
            "unit": "B/op",
            "extra": "567 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 701,
            "unit": "allocs/op",
            "extra": "567 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 781352,
            "unit": "ns/op\t   72518 B/op\t     647 allocs/op",
            "extra": "1536 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 781352,
            "unit": "ns/op",
            "extra": "1536 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 72518,
            "unit": "B/op",
            "extra": "1536 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 647,
            "unit": "allocs/op",
            "extra": "1536 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2560570,
            "unit": "ns/op\t  113419 B/op\t    1204 allocs/op",
            "extra": "481 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2560570,
            "unit": "ns/op",
            "extra": "481 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 113419,
            "unit": "B/op",
            "extra": "481 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1204,
            "unit": "allocs/op",
            "extra": "481 times\n4 procs"
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
        "date": 1744190310427,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2519796,
            "unit": "ns/op\t   79225 B/op\t     709 allocs/op",
            "extra": "510 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2519796,
            "unit": "ns/op",
            "extra": "510 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 79225,
            "unit": "B/op",
            "extra": "510 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 709,
            "unit": "allocs/op",
            "extra": "510 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 791047,
            "unit": "ns/op\t   73333 B/op\t     656 allocs/op",
            "extra": "1452 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 791047,
            "unit": "ns/op",
            "extra": "1452 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 73333,
            "unit": "B/op",
            "extra": "1452 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 656,
            "unit": "allocs/op",
            "extra": "1452 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2668971,
            "unit": "ns/op\t  114948 B/op\t    1220 allocs/op",
            "extra": "448 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2668971,
            "unit": "ns/op",
            "extra": "448 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 114948,
            "unit": "B/op",
            "extra": "448 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1220,
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
          "id": "9e2257de4fcc32e539272bd5887c6ec4b26e6d66",
          "message": "Merge pull request #1648 from gofiber/dependabot/go_modules/s3/github.com/aws/aws-sdk-go-v2/config-1.29.13\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/config from 1.29.11 to 1.29.13 in /s3",
          "timestamp": "2025-04-10T09:47:03+02:00",
          "tree_id": "18707c92b0201534432396aba3fea1e8c58bace9",
          "url": "https://github.com/gofiber/storage/commit/9e2257de4fcc32e539272bd5887c6ec4b26e6d66"
        },
        "date": 1744271272585,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2186486,
            "unit": "ns/op\t   78714 B/op\t     709 allocs/op",
            "extra": "570 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2186486,
            "unit": "ns/op",
            "extra": "570 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 78714,
            "unit": "B/op",
            "extra": "570 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 709,
            "unit": "allocs/op",
            "extra": "570 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 817409,
            "unit": "ns/op\t   73329 B/op\t     656 allocs/op",
            "extra": "1440 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 817409,
            "unit": "ns/op",
            "extra": "1440 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 73329,
            "unit": "B/op",
            "extra": "1440 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 656,
            "unit": "allocs/op",
            "extra": "1440 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2647705,
            "unit": "ns/op\t  114528 B/op\t    1220 allocs/op",
            "extra": "412 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2647705,
            "unit": "ns/op",
            "extra": "412 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 114528,
            "unit": "B/op",
            "extra": "412 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1220,
            "unit": "allocs/op",
            "extra": "412 times\n4 procs"
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
          "id": "fd01240c04e5f0303c01e2375856f973677ddf31",
          "message": "Merge pull request #1660 from gofiber/dependabot/go_modules/s3/github.com/aws/aws-sdk-go-v2/credentials-1.17.67\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/credentials from 1.17.66 to 1.17.67 in /s3",
          "timestamp": "2025-04-11T10:09:52+02:00",
          "tree_id": "f75f9c290b7be8fd6255281a09c076a89ca851a4",
          "url": "https://github.com/gofiber/storage/commit/fd01240c04e5f0303c01e2375856f973677ddf31"
        },
        "date": 1744359046795,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2489068,
            "unit": "ns/op\t   79424 B/op\t     709 allocs/op",
            "extra": "520 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2489068,
            "unit": "ns/op",
            "extra": "520 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 79424,
            "unit": "B/op",
            "extra": "520 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 709,
            "unit": "allocs/op",
            "extra": "520 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 794363,
            "unit": "ns/op\t   73334 B/op\t     656 allocs/op",
            "extra": "1502 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 794363,
            "unit": "ns/op",
            "extra": "1502 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 73334,
            "unit": "B/op",
            "extra": "1502 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 656,
            "unit": "allocs/op",
            "extra": "1502 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2813352,
            "unit": "ns/op\t  114096 B/op\t    1220 allocs/op",
            "extra": "442 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2813352,
            "unit": "ns/op",
            "extra": "442 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 114096,
            "unit": "B/op",
            "extra": "442 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1220,
            "unit": "allocs/op",
            "extra": "442 times\n4 procs"
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
          "id": "ec5fe0ce571a39aa26457386a71ca992daca9bf2",
          "message": "Merge pull request #1661 from gofiber/dependabot/go_modules/s3/github.com/aws/aws-sdk-go-v2/config-1.29.14\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/config from 1.29.13 to 1.29.14 in /s3",
          "timestamp": "2025-04-12T16:47:35+02:00",
          "tree_id": "4069e65a1f4aafa99537b8b8e3cf9bc183c5542c",
          "url": "https://github.com/gofiber/storage/commit/ec5fe0ce571a39aa26457386a71ca992daca9bf2"
        },
        "date": 1744469315608,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2029594,
            "unit": "ns/op\t   78780 B/op\t     709 allocs/op",
            "extra": "606 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2029594,
            "unit": "ns/op",
            "extra": "606 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 78780,
            "unit": "B/op",
            "extra": "606 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 709,
            "unit": "allocs/op",
            "extra": "606 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 794462,
            "unit": "ns/op\t   73310 B/op\t     656 allocs/op",
            "extra": "1503 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 794462,
            "unit": "ns/op",
            "extra": "1503 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 73310,
            "unit": "B/op",
            "extra": "1503 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 656,
            "unit": "allocs/op",
            "extra": "1503 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2504129,
            "unit": "ns/op\t  114940 B/op\t    1220 allocs/op",
            "extra": "487 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2504129,
            "unit": "ns/op",
            "extra": "487 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 114940,
            "unit": "B/op",
            "extra": "487 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1220,
            "unit": "allocs/op",
            "extra": "487 times\n4 procs"
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
        "date": 1744717600800,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2359862,
            "unit": "ns/op\t   79037 B/op\t     708 allocs/op",
            "extra": "564 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2359862,
            "unit": "ns/op",
            "extra": "564 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 79037,
            "unit": "B/op",
            "extra": "564 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 708,
            "unit": "allocs/op",
            "extra": "564 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 916688,
            "unit": "ns/op\t   73310 B/op\t     655 allocs/op",
            "extra": "1456 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 916688,
            "unit": "ns/op",
            "extra": "1456 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 73310,
            "unit": "B/op",
            "extra": "1456 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 655,
            "unit": "allocs/op",
            "extra": "1456 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2915724,
            "unit": "ns/op\t  114500 B/op\t    1218 allocs/op",
            "extra": "432 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2915724,
            "unit": "ns/op",
            "extra": "432 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 114500,
            "unit": "B/op",
            "extra": "432 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1218,
            "unit": "allocs/op",
            "extra": "432 times\n4 procs"
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
        "date": 1744782271086,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2282990,
            "unit": "ns/op\t   80118 B/op\t     708 allocs/op",
            "extra": "529 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2282990,
            "unit": "ns/op",
            "extra": "529 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 80118,
            "unit": "B/op",
            "extra": "529 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 708,
            "unit": "allocs/op",
            "extra": "529 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 847677,
            "unit": "ns/op\t   73320 B/op\t     655 allocs/op",
            "extra": "1383 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 847677,
            "unit": "ns/op",
            "extra": "1383 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 73320,
            "unit": "B/op",
            "extra": "1383 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 655,
            "unit": "allocs/op",
            "extra": "1383 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2530139,
            "unit": "ns/op\t  115057 B/op\t    1218 allocs/op",
            "extra": "478 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2530139,
            "unit": "ns/op",
            "extra": "478 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 115057,
            "unit": "B/op",
            "extra": "478 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1218,
            "unit": "allocs/op",
            "extra": "478 times\n4 procs"
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
          "id": "709bde3b560144395c1384d8edf2400b19ea4a9b",
          "message": "Merge pull request #1677 from gofiber/dependabot/go_modules/s3/github.com/aws/smithy-go-1.22.3\n\nchore(deps): bump github.com/aws/smithy-go from 1.22.2 to 1.22.3 in /s3",
          "timestamp": "2025-04-24T06:54:11+02:00",
          "tree_id": "ecbf4269c51fc7975d9e98185a3bfc235f3656d1",
          "url": "https://github.com/gofiber/storage/commit/709bde3b560144395c1384d8edf2400b19ea4a9b"
        },
        "date": 1745470521069,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2047941,
            "unit": "ns/op\t   79125 B/op\t     708 allocs/op",
            "extra": "626 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2047941,
            "unit": "ns/op",
            "extra": "626 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 79125,
            "unit": "B/op",
            "extra": "626 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 708,
            "unit": "allocs/op",
            "extra": "626 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 802759,
            "unit": "ns/op\t   73327 B/op\t     655 allocs/op",
            "extra": "1482 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 802759,
            "unit": "ns/op",
            "extra": "1482 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 73327,
            "unit": "B/op",
            "extra": "1482 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 655,
            "unit": "allocs/op",
            "extra": "1482 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2297654,
            "unit": "ns/op\t  114760 B/op\t    1218 allocs/op",
            "extra": "511 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2297654,
            "unit": "ns/op",
            "extra": "511 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 114760,
            "unit": "B/op",
            "extra": "511 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1218,
            "unit": "allocs/op",
            "extra": "511 times\n4 procs"
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
          "id": "888bd549552a683c39897c92802c0786770112e9",
          "message": "Merge pull request #1659 from gofiber/dependabot/go_modules/s3/github.com/aws/aws-sdk-go-v2/feature/s3/manager-1.17.72\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/feature/s3/manager from 1.17.10 to 1.17.72 in /s3",
          "timestamp": "2025-04-24T06:57:33+02:00",
          "tree_id": "8be582217f1b28f1b0af1838405563f1e10d0585",
          "url": "https://github.com/gofiber/storage/commit/888bd549552a683c39897c92802c0786770112e9"
        },
        "date": 1745470718109,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2328542,
            "unit": "ns/op\t   87970 B/op\t     836 allocs/op",
            "extra": "576 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2328542,
            "unit": "ns/op",
            "extra": "576 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 87970,
            "unit": "B/op",
            "extra": "576 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 836,
            "unit": "allocs/op",
            "extra": "576 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2594884,
            "unit": "ns/op\t  128396 B/op\t    1426 allocs/op",
            "extra": "480 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2594884,
            "unit": "ns/op",
            "extra": "480 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 128396,
            "unit": "B/op",
            "extra": "480 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1426,
            "unit": "allocs/op",
            "extra": "480 times\n4 procs"
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
          "id": "6644a2550917c2b9e4d6e2237cf5e9f7fe460862",
          "message": "Merge pull request #1704 from gofiber/dependabot/go_modules/s3/github.com/testcontainers/testcontainers-go-0.37.0\n\nchore(deps): bump github.com/testcontainers/testcontainers-go from 0.36.0 to 0.37.0 in /s3",
          "timestamp": "2025-04-28T12:53:57+02:00",
          "tree_id": "8430f7f0d21937d81d523ff22f74b400f5e9935a",
          "url": "https://github.com/gofiber/storage/commit/6644a2550917c2b9e4d6e2237cf5e9f7fe460862"
        },
        "date": 1745837905018,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2215788,
            "unit": "ns/op\t   87961 B/op\t     836 allocs/op",
            "extra": "592 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2215788,
            "unit": "ns/op",
            "extra": "592 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 87961,
            "unit": "B/op",
            "extra": "592 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 836,
            "unit": "allocs/op",
            "extra": "592 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2494698,
            "unit": "ns/op\t  128103 B/op\t    1426 allocs/op",
            "extra": "475 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2494698,
            "unit": "ns/op",
            "extra": "475 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 128103,
            "unit": "B/op",
            "extra": "475 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1426,
            "unit": "allocs/op",
            "extra": "475 times\n4 procs"
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
          "id": "6aa0ed819ea1a7deb7b1715ba4a4f6903176065b",
          "message": "Merge pull request #1717 from gofiber/dependabot/go_modules/s3/github.com/testcontainers/testcontainers-go/modules/minio-0.37.0\n\nchore(deps): bump github.com/testcontainers/testcontainers-go/modules/minio from 0.36.0 to 0.37.0 in /s3",
          "timestamp": "2025-04-29T09:37:29+02:00",
          "tree_id": "710a9ded012a61e2bcd1f1ac7980b69e1c05d912",
          "url": "https://github.com/gofiber/storage/commit/6aa0ed819ea1a7deb7b1715ba4a4f6903176065b"
        },
        "date": 1745912587968,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2591094,
            "unit": "ns/op\t   87033 B/op\t     836 allocs/op",
            "extra": "501 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2591094,
            "unit": "ns/op",
            "extra": "501 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 87033,
            "unit": "B/op",
            "extra": "501 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 836,
            "unit": "allocs/op",
            "extra": "501 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2724892,
            "unit": "ns/op\t  128311 B/op\t    1426 allocs/op",
            "extra": "446 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2724892,
            "unit": "ns/op",
            "extra": "446 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 128311,
            "unit": "B/op",
            "extra": "446 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1426,
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
          "id": "7f568d78eeb09bec7f54f606c86547921a323cee",
          "message": "Merge pull request #1716 from gofiber/dependabot/go_modules/s3/github.com/aws/aws-sdk-go-v2/service/s3-1.79.3\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/service/s3 from 1.79.2 to 1.79.3 in /s3",
          "timestamp": "2025-04-29T09:38:40+02:00",
          "tree_id": "aa381b72c5a4d796dbc04d7d251ebeef750b9d9c",
          "url": "https://github.com/gofiber/storage/commit/7f568d78eeb09bec7f54f606c86547921a323cee"
        },
        "date": 1745912590243,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2539317,
            "unit": "ns/op\t   88751 B/op\t     836 allocs/op",
            "extra": "525 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2539317,
            "unit": "ns/op",
            "extra": "525 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 88751,
            "unit": "B/op",
            "extra": "525 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 836,
            "unit": "allocs/op",
            "extra": "525 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 858206,
            "unit": "ns/op\t   79351 B/op\t     738 allocs/op",
            "extra": "1287 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 858206,
            "unit": "ns/op",
            "extra": "1287 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 79351,
            "unit": "B/op",
            "extra": "1287 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 738,
            "unit": "allocs/op",
            "extra": "1287 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2543066,
            "unit": "ns/op\t  128181 B/op\t    1426 allocs/op",
            "extra": "476 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2543066,
            "unit": "ns/op",
            "extra": "476 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 128181,
            "unit": "B/op",
            "extra": "476 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1426,
            "unit": "allocs/op",
            "extra": "476 times\n4 procs"
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
          "id": "e13449700c525bbba4494f3b93a62e46272e0942",
          "message": "Merge pull request #1719 from gofiber/dependabot/go_modules/s3/github.com/aws/aws-sdk-go-v2/feature/s3/manager-1.17.74\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/feature/s3/manager from 1.17.73 to 1.17.74 in /s3",
          "timestamp": "2025-04-29T10:03:18+02:00",
          "tree_id": "308a265df280e2ef382ff8f300066a269e8406d9",
          "url": "https://github.com/gofiber/storage/commit/e13449700c525bbba4494f3b93a62e46272e0942"
        },
        "date": 1745913863421,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2610310,
            "unit": "ns/op\t   88340 B/op\t     836 allocs/op",
            "extra": "518 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2610310,
            "unit": "ns/op",
            "extra": "518 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 88340,
            "unit": "B/op",
            "extra": "518 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 836,
            "unit": "allocs/op",
            "extra": "518 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 873571,
            "unit": "ns/op\t   79339 B/op\t     738 allocs/op",
            "extra": "1374 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 873571,
            "unit": "ns/op",
            "extra": "1374 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 79339,
            "unit": "B/op",
            "extra": "1374 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 738,
            "unit": "allocs/op",
            "extra": "1374 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2673110,
            "unit": "ns/op\t  127994 B/op\t    1426 allocs/op",
            "extra": "440 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2673110,
            "unit": "ns/op",
            "extra": "440 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 127994,
            "unit": "B/op",
            "extra": "440 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1426,
            "unit": "allocs/op",
            "extra": "440 times\n4 procs"
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
          "id": "dc8199d08980185558f6b012630605afe1f5dac2",
          "message": "Merge pull request #1730 from gofiber/dependabot/go_modules/s3/github.com/aws/aws-sdk-go-v2/feature/s3/manager-1.17.75\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/feature/s3/manager from 1.17.74 to 1.17.75 in /s3",
          "timestamp": "2025-05-06T09:33:30+02:00",
          "tree_id": "c6b68ca0cdfa5752b6e138b6e6b17fed058c36a3",
          "url": "https://github.com/gofiber/storage/commit/dc8199d08980185558f6b012630605afe1f5dac2"
        },
        "date": 1746516872624,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2003400,
            "unit": "ns/op\t   88120 B/op\t     836 allocs/op",
            "extra": "612 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2003400,
            "unit": "ns/op",
            "extra": "612 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 88120,
            "unit": "B/op",
            "extra": "612 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 836,
            "unit": "allocs/op",
            "extra": "612 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 899455,
            "unit": "ns/op\t   79348 B/op\t     738 allocs/op",
            "extra": "1297 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 899455,
            "unit": "ns/op",
            "extra": "1297 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 79348,
            "unit": "B/op",
            "extra": "1297 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 738,
            "unit": "allocs/op",
            "extra": "1297 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2378696,
            "unit": "ns/op\t  128174 B/op\t    1426 allocs/op",
            "extra": "502 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2378696,
            "unit": "ns/op",
            "extra": "502 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 128174,
            "unit": "B/op",
            "extra": "502 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1426,
            "unit": "allocs/op",
            "extra": "502 times\n4 procs"
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
          "id": "c89793a5b649a3243f1a61b373fb7e1a24c034c7",
          "message": "Merge pull request #1742 from gofiber/dependabot/go_modules/s3/github.com/aws/aws-sdk-go-v2/service/s3-1.79.4\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/service/s3 from 1.79.3 to 1.79.4 in /s3",
          "timestamp": "2025-05-23T09:27:27+02:00",
          "tree_id": "de127e8ad92955c72290fd1f3c8940d47af86769",
          "url": "https://github.com/gofiber/storage/commit/c89793a5b649a3243f1a61b373fb7e1a24c034c7"
        },
        "date": 1747985297984,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2489728,
            "unit": "ns/op\t   88440 B/op\t     836 allocs/op",
            "extra": "447 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2489728,
            "unit": "ns/op",
            "extra": "447 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 88440,
            "unit": "B/op",
            "extra": "447 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 836,
            "unit": "allocs/op",
            "extra": "447 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 883763,
            "unit": "ns/op\t   79356 B/op\t     738 allocs/op",
            "extra": "1428 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 883763,
            "unit": "ns/op",
            "extra": "1428 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 79356,
            "unit": "B/op",
            "extra": "1428 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 738,
            "unit": "allocs/op",
            "extra": "1428 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2566047,
            "unit": "ns/op\t  128460 B/op\t    1426 allocs/op",
            "extra": "468 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2566047,
            "unit": "ns/op",
            "extra": "468 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 128460,
            "unit": "B/op",
            "extra": "468 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1426,
            "unit": "allocs/op",
            "extra": "468 times\n4 procs"
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
          "id": "40b2566dc168da796466e7ed6cad9d9de273767c",
          "message": "Merge pull request #1743 from gofiber/dependabot/go_modules/s3/github.com/aws/aws-sdk-go-v2/feature/s3/manager-1.17.76\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/feature/s3/manager from 1.17.75 to 1.17.76 in /s3",
          "timestamp": "2025-05-23T09:29:25+02:00",
          "tree_id": "fc93de78bbe7e9d07dbc1abfcf323d3693875a54",
          "url": "https://github.com/gofiber/storage/commit/40b2566dc168da796466e7ed6cad9d9de273767c"
        },
        "date": 1747985418328,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2859167,
            "unit": "ns/op\t   87588 B/op\t     836 allocs/op",
            "extra": "409 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2859167,
            "unit": "ns/op",
            "extra": "409 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 87588,
            "unit": "B/op",
            "extra": "409 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 836,
            "unit": "allocs/op",
            "extra": "409 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 884814,
            "unit": "ns/op\t   79352 B/op\t     738 allocs/op",
            "extra": "1426 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 884814,
            "unit": "ns/op",
            "extra": "1426 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 79352,
            "unit": "B/op",
            "extra": "1426 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 738,
            "unit": "allocs/op",
            "extra": "1426 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 3001254,
            "unit": "ns/op\t  127626 B/op\t    1426 allocs/op",
            "extra": "404 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 3001254,
            "unit": "ns/op",
            "extra": "404 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 127626,
            "unit": "B/op",
            "extra": "404 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1426,
            "unit": "allocs/op",
            "extra": "404 times\n4 procs"
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
          "id": "82b0c39bcdfe5522c044e6db725901dd7f7261eb",
          "message": "Merge pull request #1747 from gofiber/dependabot/go_modules/s3/github.com/aws/aws-sdk-go-v2/feature/s3/manager-1.17.77\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/feature/s3/manager from 1.17.76 to 1.17.77 in /s3",
          "timestamp": "2025-05-30T09:49:06+02:00",
          "tree_id": "fa05948ed2e2f107d4869ac4c5b99ce0094e4712",
          "url": "https://github.com/gofiber/storage/commit/82b0c39bcdfe5522c044e6db725901dd7f7261eb"
        },
        "date": 1748591422213,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2752674,
            "unit": "ns/op\t   87728 B/op\t     836 allocs/op",
            "extra": "468 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2752674,
            "unit": "ns/op",
            "extra": "468 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 87728,
            "unit": "B/op",
            "extra": "468 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 836,
            "unit": "allocs/op",
            "extra": "468 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 867738,
            "unit": "ns/op\t   79357 B/op\t     738 allocs/op",
            "extra": "1438 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 867738,
            "unit": "ns/op",
            "extra": "1438 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 79357,
            "unit": "B/op",
            "extra": "1438 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 738,
            "unit": "allocs/op",
            "extra": "1438 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2707832,
            "unit": "ns/op\t  128062 B/op\t    1426 allocs/op",
            "extra": "454 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2707832,
            "unit": "ns/op",
            "extra": "454 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 128062,
            "unit": "B/op",
            "extra": "454 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1426,
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
          "id": "1993e9606896aca50e7a7835227ec897fa916e74",
          "message": "Merge pull request #1759 from gofiber/dependabot/go_modules/s3/github.com/aws/aws-sdk-go-v2/service/s3-1.80.1\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/service/s3 from 1.80.0 to 1.80.1 in /s3",
          "timestamp": "2025-06-09T10:42:23+02:00",
          "tree_id": "3ec612b870b3a90ea69cf40fa824cf1c405b2442",
          "url": "https://github.com/gofiber/storage/commit/1993e9606896aca50e7a7835227ec897fa916e74"
        },
        "date": 1749458614640,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2808791,
            "unit": "ns/op\t   87488 B/op\t     836 allocs/op",
            "extra": "457 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2808791,
            "unit": "ns/op",
            "extra": "457 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 87488,
            "unit": "B/op",
            "extra": "457 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 836,
            "unit": "allocs/op",
            "extra": "457 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 869248,
            "unit": "ns/op\t   79368 B/op\t     738 allocs/op",
            "extra": "1412 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 869248,
            "unit": "ns/op",
            "extra": "1412 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 79368,
            "unit": "B/op",
            "extra": "1412 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 738,
            "unit": "allocs/op",
            "extra": "1412 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2725433,
            "unit": "ns/op\t  127727 B/op\t    1426 allocs/op",
            "extra": "470 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2725433,
            "unit": "ns/op",
            "extra": "470 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 127727,
            "unit": "B/op",
            "extra": "470 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1426,
            "unit": "allocs/op",
            "extra": "470 times\n4 procs"
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
          "id": "1a6c4754d63144e46468399c21c66a1e8b8b28da",
          "message": "Merge pull request #1761 from gofiber/dependabot/go_modules/s3/github.com/aws/aws-sdk-go-v2/config-1.29.15\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/config from 1.29.14 to 1.29.15 in /s3",
          "timestamp": "2025-06-09T10:43:12+02:00",
          "tree_id": "fdb92d6b0aefda4b14710973db831bf8d908f994",
          "url": "https://github.com/gofiber/storage/commit/1a6c4754d63144e46468399c21c66a1e8b8b28da"
        },
        "date": 1749458659212,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2254957,
            "unit": "ns/op\t   87466 B/op\t     836 allocs/op",
            "extra": "555 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2254957,
            "unit": "ns/op",
            "extra": "555 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 87466,
            "unit": "B/op",
            "extra": "555 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 836,
            "unit": "allocs/op",
            "extra": "555 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 868916,
            "unit": "ns/op\t   79340 B/op\t     738 allocs/op",
            "extra": "1410 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 868916,
            "unit": "ns/op",
            "extra": "1410 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 79340,
            "unit": "B/op",
            "extra": "1410 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 738,
            "unit": "allocs/op",
            "extra": "1410 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2532382,
            "unit": "ns/op\t  128101 B/op\t    1426 allocs/op",
            "extra": "477 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2532382,
            "unit": "ns/op",
            "extra": "477 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 128101,
            "unit": "B/op",
            "extra": "477 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1426,
            "unit": "allocs/op",
            "extra": "477 times\n4 procs"
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
          "id": "ff407691a9b64275d4c041ba3f3f81c653e643f3",
          "message": "Merge pull request #1763 from gofiber/dependabot/go_modules/s3/github.com/aws/aws-sdk-go-v2/credentials-1.17.68\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/credentials from 1.17.67 to 1.17.68 in /s3",
          "timestamp": "2025-06-11T09:49:15+02:00",
          "tree_id": "18110750cd22d72741d44a6d52f64c9cbfdd8cd0",
          "url": "https://github.com/gofiber/storage/commit/ff407691a9b64275d4c041ba3f3f81c653e643f3"
        },
        "date": 1749628222550,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2644066,
            "unit": "ns/op\t   87113 B/op\t     836 allocs/op",
            "extra": "469 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2644066,
            "unit": "ns/op",
            "extra": "469 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 87113,
            "unit": "B/op",
            "extra": "469 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 836,
            "unit": "allocs/op",
            "extra": "469 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 852019,
            "unit": "ns/op\t   79337 B/op\t     738 allocs/op",
            "extra": "1368 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 852019,
            "unit": "ns/op",
            "extra": "1368 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 79337,
            "unit": "B/op",
            "extra": "1368 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 738,
            "unit": "allocs/op",
            "extra": "1368 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2704609,
            "unit": "ns/op\t  127817 B/op\t    1426 allocs/op",
            "extra": "433 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2704609,
            "unit": "ns/op",
            "extra": "433 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 127817,
            "unit": "B/op",
            "extra": "433 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1426,
            "unit": "allocs/op",
            "extra": "433 times\n4 procs"
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
          "id": "c603327efdf4f59dc942a6f6c4c03186bf7d5603",
          "message": "Merge pull request #1771 from gofiber/dependabot/go_modules/s3/github.com/aws/aws-sdk-go-v2/service/s3-1.80.2\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/service/s3 from 1.80.1 to 1.80.2 in /s3",
          "timestamp": "2025-06-11T09:54:27+02:00",
          "tree_id": "c0f8e14b53a42f903809e8c7eea58ea6a9afcee3",
          "url": "https://github.com/gofiber/storage/commit/c603327efdf4f59dc942a6f6c4c03186bf7d5603"
        },
        "date": 1749628540363,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2522328,
            "unit": "ns/op\t   88133 B/op\t     836 allocs/op",
            "extra": "522 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2522328,
            "unit": "ns/op",
            "extra": "522 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 88133,
            "unit": "B/op",
            "extra": "522 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 836,
            "unit": "allocs/op",
            "extra": "522 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 895575,
            "unit": "ns/op\t   79355 B/op\t     738 allocs/op",
            "extra": "1359 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 895575,
            "unit": "ns/op",
            "extra": "1359 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 79355,
            "unit": "B/op",
            "extra": "1359 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 738,
            "unit": "allocs/op",
            "extra": "1359 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2742376,
            "unit": "ns/op\t  128633 B/op\t    1426 allocs/op",
            "extra": "448 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2742376,
            "unit": "ns/op",
            "extra": "448 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 128633,
            "unit": "B/op",
            "extra": "448 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1426,
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
          "id": "1984506cfd648e9b7140bc5c1f1973e2ca236d3f",
          "message": "Merge pull request #1773 from gofiber/dependabot/go_modules/s3/github.com/aws/aws-sdk-go-v2/config-1.29.16\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/config from 1.29.15 to 1.29.16 in /s3",
          "timestamp": "2025-06-11T09:54:35+02:00",
          "tree_id": "4ad14c62cd7bc429c252244971d9b940fb2f6ff8",
          "url": "https://github.com/gofiber/storage/commit/1984506cfd648e9b7140bc5c1f1973e2ca236d3f"
        },
        "date": 1749628541796,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2093354,
            "unit": "ns/op\t   88268 B/op\t     836 allocs/op",
            "extra": "578 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2093354,
            "unit": "ns/op",
            "extra": "578 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 88268,
            "unit": "B/op",
            "extra": "578 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 836,
            "unit": "allocs/op",
            "extra": "578 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 852039,
            "unit": "ns/op\t   79350 B/op\t     738 allocs/op",
            "extra": "1389 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 852039,
            "unit": "ns/op",
            "extra": "1389 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 79350,
            "unit": "B/op",
            "extra": "1389 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 738,
            "unit": "allocs/op",
            "extra": "1389 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2460821,
            "unit": "ns/op\t  128754 B/op\t    1426 allocs/op",
            "extra": "470 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2460821,
            "unit": "ns/op",
            "extra": "470 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 128754,
            "unit": "B/op",
            "extra": "470 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1426,
            "unit": "allocs/op",
            "extra": "470 times\n4 procs"
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
          "id": "eb223558f87c4329590c813053c4b31c61992e94",
          "message": "Merge pull request #1772 from gofiber/dependabot/go_modules/s3/github.com/aws/aws-sdk-go-v2/feature/s3/manager-1.17.79\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/feature/s3/manager from 1.17.77 to 1.17.79 in /s3",
          "timestamp": "2025-06-11T09:56:40+02:00",
          "tree_id": "0475c215780cebbe4ffd3af4dfab5f2e6487e3b3",
          "url": "https://github.com/gofiber/storage/commit/eb223558f87c4329590c813053c4b31c61992e94"
        },
        "date": 1749628661061,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2383708,
            "unit": "ns/op\t   87452 B/op\t     836 allocs/op",
            "extra": "493 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2383708,
            "unit": "ns/op",
            "extra": "493 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 87452,
            "unit": "B/op",
            "extra": "493 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 836,
            "unit": "allocs/op",
            "extra": "493 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 888115,
            "unit": "ns/op\t   79362 B/op\t     738 allocs/op",
            "extra": "1340 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 888115,
            "unit": "ns/op",
            "extra": "1340 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 79362,
            "unit": "B/op",
            "extra": "1340 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 738,
            "unit": "allocs/op",
            "extra": "1340 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2754525,
            "unit": "ns/op\t  128792 B/op\t    1426 allocs/op",
            "extra": "441 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2754525,
            "unit": "ns/op",
            "extra": "441 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 128792,
            "unit": "B/op",
            "extra": "441 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1426,
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
          "id": "a872a0b45f860b87341dfa826977c9871cda9bdf",
          "message": "Merge pull request #1781 from gofiber/dependabot/go_modules/s3/github.com/aws/smithy-go-1.22.4\n\nchore(deps): bump github.com/aws/smithy-go from 1.22.3 to 1.22.4 in /s3",
          "timestamp": "2025-06-17T09:41:20+02:00",
          "tree_id": "9e8e149fce662c66c16a5e063fb051f8b3e0ada9",
          "url": "https://github.com/gofiber/storage/commit/a872a0b45f860b87341dfa826977c9871cda9bdf"
        },
        "date": 1750146145793,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2185555,
            "unit": "ns/op\t   87443 B/op\t     836 allocs/op",
            "extra": "567 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2185555,
            "unit": "ns/op",
            "extra": "567 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 87443,
            "unit": "B/op",
            "extra": "567 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 836,
            "unit": "allocs/op",
            "extra": "567 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 875777,
            "unit": "ns/op\t   79350 B/op\t     738 allocs/op",
            "extra": "1393 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 875777,
            "unit": "ns/op",
            "extra": "1393 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 79350,
            "unit": "B/op",
            "extra": "1393 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 738,
            "unit": "allocs/op",
            "extra": "1393 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2539793,
            "unit": "ns/op\t  128974 B/op\t    1426 allocs/op",
            "extra": "476 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2539793,
            "unit": "ns/op",
            "extra": "476 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 128974,
            "unit": "B/op",
            "extra": "476 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1426,
            "unit": "allocs/op",
            "extra": "476 times\n4 procs"
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
          "id": "676b7c385bda004b6d0191c0745c68b2852c9c67",
          "message": "Merge pull request #1787 from gofiber/dependabot/go_modules/s3/github.com/aws/aws-sdk-go-v2/service/s3-1.80.3\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/service/s3 from 1.80.2 to 1.80.3 in /s3",
          "timestamp": "2025-06-18T09:37:01+02:00",
          "tree_id": "f0d09fa0fe91e4570a61c0cb2db2400cec5761ab",
          "url": "https://github.com/gofiber/storage/commit/676b7c385bda004b6d0191c0745c68b2852c9c67"
        },
        "date": 1750232286634,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2060494,
            "unit": "ns/op\t   87662 B/op\t     836 allocs/op",
            "extra": "588 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2060494,
            "unit": "ns/op",
            "extra": "588 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 87662,
            "unit": "B/op",
            "extra": "588 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 836,
            "unit": "allocs/op",
            "extra": "588 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 874923,
            "unit": "ns/op\t   79357 B/op\t     738 allocs/op",
            "extra": "1396 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 874923,
            "unit": "ns/op",
            "extra": "1396 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 79357,
            "unit": "B/op",
            "extra": "1396 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 738,
            "unit": "allocs/op",
            "extra": "1396 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2435522,
            "unit": "ns/op\t  127882 B/op\t    1426 allocs/op",
            "extra": "448 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2435522,
            "unit": "ns/op",
            "extra": "448 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 127882,
            "unit": "B/op",
            "extra": "448 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1426,
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
          "id": "fe8eba6afea227299961aff887e91ba483710317",
          "message": "Merge pull request #1792 from gofiber/dependabot/go_modules/s3/github.com/aws/aws-sdk-go-v2/feature/s3/manager-1.17.81\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/feature/s3/manager from 1.17.79 to 1.17.81 in /s3",
          "timestamp": "2025-06-19T09:57:44+02:00",
          "tree_id": "5a321de08a9212cb14e2f82b31857373428d3278",
          "url": "https://github.com/gofiber/storage/commit/fe8eba6afea227299961aff887e91ba483710317"
        },
        "date": 1750319927967,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2050564,
            "unit": "ns/op\t   88501 B/op\t     836 allocs/op",
            "extra": "589 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2050564,
            "unit": "ns/op",
            "extra": "589 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 88501,
            "unit": "B/op",
            "extra": "589 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 836,
            "unit": "allocs/op",
            "extra": "589 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 861866,
            "unit": "ns/op\t   79862 B/op\t     738 allocs/op",
            "extra": "1372 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 861866,
            "unit": "ns/op",
            "extra": "1372 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 79862,
            "unit": "B/op",
            "extra": "1372 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 738,
            "unit": "allocs/op",
            "extra": "1372 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2389652,
            "unit": "ns/op\t  129358 B/op\t    1426 allocs/op",
            "extra": "494 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2389652,
            "unit": "ns/op",
            "extra": "494 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 129358,
            "unit": "B/op",
            "extra": "494 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1426,
            "unit": "allocs/op",
            "extra": "494 times\n4 procs"
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
          "id": "99fc0e25905583984a023927fe6f1b05b2245e94",
          "message": "Merge pull request #1800 from gofiber/dependabot/go_modules/s3/github.com/aws/aws-sdk-go-v2/feature/s3/manager-1.17.82\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/feature/s3/manager from 1.17.81 to 1.17.82 in /s3",
          "timestamp": "2025-06-26T09:18:04+02:00",
          "tree_id": "fd75b8e0f1d14f8bc273ccfd36e8936e4008dfb2",
          "url": "https://github.com/gofiber/storage/commit/99fc0e25905583984a023927fe6f1b05b2245e94"
        },
        "date": 1750922351280,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2311289,
            "unit": "ns/op\t   89138 B/op\t     836 allocs/op",
            "extra": "496 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2311289,
            "unit": "ns/op",
            "extra": "496 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 89138,
            "unit": "B/op",
            "extra": "496 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 836,
            "unit": "allocs/op",
            "extra": "496 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 874872,
            "unit": "ns/op\t   79866 B/op\t     738 allocs/op",
            "extra": "1387 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 874872,
            "unit": "ns/op",
            "extra": "1387 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 79866,
            "unit": "B/op",
            "extra": "1387 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 738,
            "unit": "allocs/op",
            "extra": "1387 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2600743,
            "unit": "ns/op\t  129276 B/op\t    1426 allocs/op",
            "extra": "464 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2600743,
            "unit": "ns/op",
            "extra": "464 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 129276,
            "unit": "B/op",
            "extra": "464 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1426,
            "unit": "allocs/op",
            "extra": "464 times\n4 procs"
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
          "id": "3fde0cd38023d8291908dd50d5307d7cb505a9b0",
          "message": "Merge pull request #1810 from gofiber/dependabot/go_modules/s3/github.com/aws/aws-sdk-go-v2/feature/s3/manager-1.17.83\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/feature/s3/manager from 1.17.82 to 1.17.83 in /s3",
          "timestamp": "2025-07-03T09:20:56+02:00",
          "tree_id": "ba7054734fefd657b7645bb17867f9b01caebed0",
          "url": "https://github.com/gofiber/storage/commit/3fde0cd38023d8291908dd50d5307d7cb505a9b0"
        },
        "date": 1751527325648,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2117122,
            "unit": "ns/op\t   87696 B/op\t     836 allocs/op",
            "extra": "538 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2117122,
            "unit": "ns/op",
            "extra": "538 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 87696,
            "unit": "B/op",
            "extra": "538 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 836,
            "unit": "allocs/op",
            "extra": "538 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 894314,
            "unit": "ns/op\t   79864 B/op\t     738 allocs/op",
            "extra": "1208 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 894314,
            "unit": "ns/op",
            "extra": "1208 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 79864,
            "unit": "B/op",
            "extra": "1208 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 738,
            "unit": "allocs/op",
            "extra": "1208 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2524230,
            "unit": "ns/op\t  128836 B/op\t    1426 allocs/op",
            "extra": "482 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2524230,
            "unit": "ns/op",
            "extra": "482 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 128836,
            "unit": "B/op",
            "extra": "482 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1426,
            "unit": "allocs/op",
            "extra": "482 times\n4 procs"
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
        "date": 1751881983502,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2780339,
            "unit": "ns/op\t   88998 B/op\t     836 allocs/op",
            "extra": "456 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2780339,
            "unit": "ns/op",
            "extra": "456 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 88998,
            "unit": "B/op",
            "extra": "456 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 836,
            "unit": "allocs/op",
            "extra": "456 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 893555,
            "unit": "ns/op\t   79852 B/op\t     738 allocs/op",
            "extra": "1366 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 893555,
            "unit": "ns/op",
            "extra": "1366 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 79852,
            "unit": "B/op",
            "extra": "1366 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 738,
            "unit": "allocs/op",
            "extra": "1366 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2614244,
            "unit": "ns/op\t  128766 B/op\t    1426 allocs/op",
            "extra": "421 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2614244,
            "unit": "ns/op",
            "extra": "421 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 128766,
            "unit": "B/op",
            "extra": "421 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1426,
            "unit": "allocs/op",
            "extra": "421 times\n4 procs"
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
          "id": "1b0e0bef99c96244bb9527165c3ff26e606c9b3e",
          "message": "Merge pull request #1822 from gofiber/dependabot/go_modules/dynamodb/aws-modules-cffb6a539b\n\nchore(deps): bump the aws-modules group across 2 directories with 3 updates",
          "timestamp": "2025-07-16T10:00:13+02:00",
          "tree_id": "1c262e959c049f69eeaab3edd12cf97325e741c2",
          "url": "https://github.com/gofiber/storage/commit/1b0e0bef99c96244bb9527165c3ff26e606c9b3e"
        },
        "date": 1752652937841,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2469488,
            "unit": "ns/op\t   89382 B/op\t     836 allocs/op",
            "extra": "513 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2469488,
            "unit": "ns/op",
            "extra": "513 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 89382,
            "unit": "B/op",
            "extra": "513 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 836,
            "unit": "allocs/op",
            "extra": "513 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 867832,
            "unit": "ns/op\t   79859 B/op\t     738 allocs/op",
            "extra": "1390 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 867832,
            "unit": "ns/op",
            "extra": "1390 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 79859,
            "unit": "B/op",
            "extra": "1390 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 738,
            "unit": "allocs/op",
            "extra": "1390 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2574993,
            "unit": "ns/op\t  129733 B/op\t    1426 allocs/op",
            "extra": "452 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2574993,
            "unit": "ns/op",
            "extra": "452 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 129733,
            "unit": "B/op",
            "extra": "452 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1426,
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
          "id": "e3f0243edf140f89f93da9884e4880768383a33d",
          "message": "Merge pull request #1821 from gofiber/dependabot/go_modules/aerospike/testcontainers-modules-88f01908c2\n\nchore(deps): bump the testcontainers-modules group across 22 directories with 17 updates",
          "timestamp": "2025-07-16T10:01:38+02:00",
          "tree_id": "d8ef317e71a85e0e393e760722107b87bd86b70b",
          "url": "https://github.com/gofiber/storage/commit/e3f0243edf140f89f93da9884e4880768383a33d"
        },
        "date": 1752653268474,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2086720,
            "unit": "ns/op\t   88425 B/op\t     836 allocs/op",
            "extra": "598 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2086720,
            "unit": "ns/op",
            "extra": "598 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 88425,
            "unit": "B/op",
            "extra": "598 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 836,
            "unit": "allocs/op",
            "extra": "598 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 904705,
            "unit": "ns/op\t   79862 B/op\t     738 allocs/op",
            "extra": "1345 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 904705,
            "unit": "ns/op",
            "extra": "1345 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 79862,
            "unit": "B/op",
            "extra": "1345 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 738,
            "unit": "allocs/op",
            "extra": "1345 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2494849,
            "unit": "ns/op\t  129582 B/op\t    1426 allocs/op",
            "extra": "489 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2494849,
            "unit": "ns/op",
            "extra": "489 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 129582,
            "unit": "B/op",
            "extra": "489 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1426,
            "unit": "allocs/op",
            "extra": "489 times\n4 procs"
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
          "id": "952f025b75645569e19e6c82d1e74d8e0bd00815",
          "message": "Merge pull request #1828 from gofiber/dependabot/go_modules/dynamodb/aws-modules-a7ae17aa3e\n\nchore(deps): bump the aws-modules group across 2 directories with 7 updates",
          "timestamp": "2025-07-22T10:35:27+02:00",
          "tree_id": "a33963a09e279ded2f7718fbd89c3236135c0bda",
          "url": "https://github.com/gofiber/storage/commit/952f025b75645569e19e6c82d1e74d8e0bd00815"
        },
        "date": 1753173403815,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2133284,
            "unit": "ns/op\t   89176 B/op\t     838 allocs/op",
            "extra": "561 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2133284,
            "unit": "ns/op",
            "extra": "561 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 89176,
            "unit": "B/op",
            "extra": "561 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 838,
            "unit": "allocs/op",
            "extra": "561 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 871281,
            "unit": "ns/op\t   79850 B/op\t     738 allocs/op",
            "extra": "1302 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 871281,
            "unit": "ns/op",
            "extra": "1302 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 79850,
            "unit": "B/op",
            "extra": "1302 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 738,
            "unit": "allocs/op",
            "extra": "1302 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2500041,
            "unit": "ns/op\t  128965 B/op\t    1428 allocs/op",
            "extra": "494 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2500041,
            "unit": "ns/op",
            "extra": "494 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 128965,
            "unit": "B/op",
            "extra": "494 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1428,
            "unit": "allocs/op",
            "extra": "494 times\n4 procs"
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
          "id": "97f5e0a92312c8b4773470aac16d208a4046c006",
          "message": "Merge pull request #1837 from gofiber/dependabot/go_modules/dynamodb/aws-modules-e993381f8a\n\nchore(deps): bump the aws-modules group across 2 directories with 1 update",
          "timestamp": "2025-07-25T09:24:57+02:00",
          "tree_id": "398940725b5afd8007b6d591ec9f7dcc1f755a62",
          "url": "https://github.com/gofiber/storage/commit/97f5e0a92312c8b4773470aac16d208a4046c006"
        },
        "date": 1753428354059,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2661619,
            "unit": "ns/op\t   88080 B/op\t     838 allocs/op",
            "extra": "465 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2661619,
            "unit": "ns/op",
            "extra": "465 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 88080,
            "unit": "B/op",
            "extra": "465 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 838,
            "unit": "allocs/op",
            "extra": "465 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 869985,
            "unit": "ns/op\t   79861 B/op\t     738 allocs/op",
            "extra": "1360 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 869985,
            "unit": "ns/op",
            "extra": "1360 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 79861,
            "unit": "B/op",
            "extra": "1360 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 738,
            "unit": "allocs/op",
            "extra": "1360 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2713573,
            "unit": "ns/op\t  129293 B/op\t    1428 allocs/op",
            "extra": "429 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2713573,
            "unit": "ns/op",
            "extra": "429 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 129293,
            "unit": "B/op",
            "extra": "429 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1428,
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
          "id": "cf52b924504471213baee6ab5f1c97f2b7358c5d",
          "message": "Merge pull request #1840 from gofiber/dependabot/go_modules/dynamodb/aws-modules-cad106b9e0\n\nchore(deps): bump the aws-modules group across 2 directories with 7 updates",
          "timestamp": "2025-07-29T09:52:03+02:00",
          "tree_id": "6a4763b3591aed6746132bbd60137cea9b5b78d2",
          "url": "https://github.com/gofiber/storage/commit/cf52b924504471213baee6ab5f1c97f2b7358c5d"
        },
        "date": 1753775575369,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2649327,
            "unit": "ns/op\t   93550 B/op\t     866 allocs/op",
            "extra": "462 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2649327,
            "unit": "ns/op",
            "extra": "462 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 93550,
            "unit": "B/op",
            "extra": "462 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 866,
            "unit": "allocs/op",
            "extra": "462 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 888559,
            "unit": "ns/op\t   86512 B/op\t     769 allocs/op",
            "extra": "1383 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 888559,
            "unit": "ns/op",
            "extra": "1383 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 86512,
            "unit": "B/op",
            "extra": "1383 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 769,
            "unit": "allocs/op",
            "extra": "1383 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2798923,
            "unit": "ns/op\t  140544 B/op\t    1486 allocs/op",
            "extra": "434 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2798923,
            "unit": "ns/op",
            "extra": "434 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 140544,
            "unit": "B/op",
            "extra": "434 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1486,
            "unit": "allocs/op",
            "extra": "434 times\n4 procs"
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
          "id": "702c087add69c2b50eea378fd7bfac5994b3593c",
          "message": "Merge pull request #1841 from gofiber/dependabot/go_modules/dynamodb/aws-modules-8466a99b32\n\nchore(deps): bump the aws-modules group across 2 directories with 3 updates",
          "timestamp": "2025-07-30T09:19:52+02:00",
          "tree_id": "e98aa1455ea298b0c13f2666a3792472e47556b2",
          "url": "https://github.com/gofiber/storage/commit/702c087add69c2b50eea378fd7bfac5994b3593c"
        },
        "date": 1753860049771,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2589484,
            "unit": "ns/op\t   92825 B/op\t     865 allocs/op",
            "extra": "433 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2589484,
            "unit": "ns/op",
            "extra": "433 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 92825,
            "unit": "B/op",
            "extra": "433 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 865,
            "unit": "allocs/op",
            "extra": "433 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 902441,
            "unit": "ns/op\t   86498 B/op\t     769 allocs/op",
            "extra": "1340 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 902441,
            "unit": "ns/op",
            "extra": "1340 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 86498,
            "unit": "B/op",
            "extra": "1340 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 769,
            "unit": "allocs/op",
            "extra": "1340 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2823947,
            "unit": "ns/op\t  141082 B/op\t    1486 allocs/op",
            "extra": "432 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2823947,
            "unit": "ns/op",
            "extra": "432 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 141082,
            "unit": "B/op",
            "extra": "432 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1486,
            "unit": "allocs/op",
            "extra": "432 times\n4 procs"
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
          "id": "74b10d26599ee77384f8ef4fc6f2a5d88672ff47",
          "message": "Merge pull request #1844 from gofiber/dependabot/go_modules/dynamodb/aws-modules-2a08c0df80\n\nchore(deps): bump the aws-modules group across 2 directories with 7 updates",
          "timestamp": "2025-07-31T09:39:25+02:00",
          "tree_id": "e127d58b8e60dd8b7da19a55cba9e2a28b04c082",
          "url": "https://github.com/gofiber/storage/commit/74b10d26599ee77384f8ef4fc6f2a5d88672ff47"
        },
        "date": 1753947620666,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2378048,
            "unit": "ns/op\t   93087 B/op\t     865 allocs/op",
            "extra": "498 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2378048,
            "unit": "ns/op",
            "extra": "498 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 93087,
            "unit": "B/op",
            "extra": "498 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 865,
            "unit": "allocs/op",
            "extra": "498 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 874112,
            "unit": "ns/op\t   86503 B/op\t     769 allocs/op",
            "extra": "1364 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 874112,
            "unit": "ns/op",
            "extra": "1364 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 86503,
            "unit": "B/op",
            "extra": "1364 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 769,
            "unit": "allocs/op",
            "extra": "1364 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2644797,
            "unit": "ns/op\t  140831 B/op\t    1486 allocs/op",
            "extra": "450 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2644797,
            "unit": "ns/op",
            "extra": "450 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 140831,
            "unit": "B/op",
            "extra": "450 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1486,
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
          "id": "b2bf5e86dcd8d758be282a8fcf09a06886d7b66c",
          "message": "Merge pull request #1850 from gofiber/dependabot/go_modules/dynamodb/aws-modules-6aa1144d99\n\nchore(deps): bump the aws-modules group across 2 directories with 7 updates",
          "timestamp": "2025-08-05T15:11:42+02:00",
          "tree_id": "3c1ef0de07709759ad156d35ffb0b846d5a6aa18",
          "url": "https://github.com/gofiber/storage/commit/b2bf5e86dcd8d758be282a8fcf09a06886d7b66c"
        },
        "date": 1754399562624,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2610636,
            "unit": "ns/op\t   93114 B/op\t     866 allocs/op",
            "extra": "495 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2610636,
            "unit": "ns/op",
            "extra": "495 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 93114,
            "unit": "B/op",
            "extra": "495 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 866,
            "unit": "allocs/op",
            "extra": "495 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 893654,
            "unit": "ns/op\t   86552 B/op\t     770 allocs/op",
            "extra": "1345 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 893654,
            "unit": "ns/op",
            "extra": "1345 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 86552,
            "unit": "B/op",
            "extra": "1345 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 770,
            "unit": "allocs/op",
            "extra": "1345 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2650846,
            "unit": "ns/op\t  140375 B/op\t    1488 allocs/op",
            "extra": "460 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2650846,
            "unit": "ns/op",
            "extra": "460 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 140375,
            "unit": "B/op",
            "extra": "460 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1488,
            "unit": "allocs/op",
            "extra": "460 times\n4 procs"
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
          "id": "54bfb6e171b00ab25cecfdca7038053879c9afcd",
          "message": "Merge pull request #1864 from gofiber/dependabot/go_modules/dynamodb/aws-modules-e2a63b23ec\n\nchore(deps): bump the aws-modules group across 2 directories with 7 updates",
          "timestamp": "2025-08-12T18:06:26+02:00",
          "tree_id": "da43fc02779a5eefaba5f4942c71d84beb3efed6",
          "url": "https://github.com/gofiber/storage/commit/54bfb6e171b00ab25cecfdca7038053879c9afcd"
        },
        "date": 1755014841145,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2272221,
            "unit": "ns/op\t   93270 B/op\t     867 allocs/op",
            "extra": "559 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2272221,
            "unit": "ns/op",
            "extra": "559 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 93270,
            "unit": "B/op",
            "extra": "559 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 867,
            "unit": "allocs/op",
            "extra": "559 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 897321,
            "unit": "ns/op\t   86533 B/op\t     770 allocs/op",
            "extra": "1293 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 897321,
            "unit": "ns/op",
            "extra": "1293 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 86533,
            "unit": "B/op",
            "extra": "1293 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 770,
            "unit": "allocs/op",
            "extra": "1293 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2575433,
            "unit": "ns/op\t  141308 B/op\t    1488 allocs/op",
            "extra": "451 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2575433,
            "unit": "ns/op",
            "extra": "451 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 141308,
            "unit": "B/op",
            "extra": "451 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1488,
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
          "id": "000ba895613be05ebf8e0bbfee4e31a7388fb7d2",
          "message": "Merge pull request #1875 from gofiber/dependabot/go_modules/dynamodb/aws-modules-f1933133ad\n\nchore(deps): bump the aws-modules group across 2 directories with 5 updates",
          "timestamp": "2025-08-21T09:28:31+02:00",
          "tree_id": "dfab4ac9e73d3bbe4f577402a6ab05d234d5a917",
          "url": "https://github.com/gofiber/storage/commit/000ba895613be05ebf8e0bbfee4e31a7388fb7d2"
        },
        "date": 1755761369530,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2290750,
            "unit": "ns/op\t   92995 B/op\t     866 allocs/op",
            "extra": "542 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2290750,
            "unit": "ns/op",
            "extra": "542 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 92995,
            "unit": "B/op",
            "extra": "542 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 866,
            "unit": "allocs/op",
            "extra": "542 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 901877,
            "unit": "ns/op\t   86522 B/op\t     770 allocs/op",
            "extra": "1353 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 901877,
            "unit": "ns/op",
            "extra": "1353 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 86522,
            "unit": "B/op",
            "extra": "1353 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 770,
            "unit": "allocs/op",
            "extra": "1353 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2590643,
            "unit": "ns/op\t  140741 B/op\t    1488 allocs/op",
            "extra": "444 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2590643,
            "unit": "ns/op",
            "extra": "444 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 140741,
            "unit": "B/op",
            "extra": "444 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1488,
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
          "id": "ba2347199921d29f063e831cbf1581a5e044a89e",
          "message": "Merge pull request #1876 from gofiber/dependabot/go_modules/dynamodb/aws-modules-e7014a3b5e\n\nchore(deps): bump the aws-modules group across 2 directories with 7 updates",
          "timestamp": "2025-08-22T09:42:18+02:00",
          "tree_id": "abd159ee78cfe888208173d85fff33712a83e44a",
          "url": "https://github.com/gofiber/storage/commit/ba2347199921d29f063e831cbf1581a5e044a89e"
        },
        "date": 1755848605971,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2369274,
            "unit": "ns/op\t   93588 B/op\t     866 allocs/op",
            "extra": "528 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2369274,
            "unit": "ns/op",
            "extra": "528 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 93588,
            "unit": "B/op",
            "extra": "528 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 866,
            "unit": "allocs/op",
            "extra": "528 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 895414,
            "unit": "ns/op\t   86525 B/op\t     770 allocs/op",
            "extra": "1329 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 895414,
            "unit": "ns/op",
            "extra": "1329 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 86525,
            "unit": "B/op",
            "extra": "1329 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 770,
            "unit": "allocs/op",
            "extra": "1329 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2616915,
            "unit": "ns/op\t  140733 B/op\t    1488 allocs/op",
            "extra": "450 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2616915,
            "unit": "ns/op",
            "extra": "450 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 140733,
            "unit": "B/op",
            "extra": "450 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1488,
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
          "id": "149f38aca57ded8a472a4608ff18a3ba58f0250a",
          "message": "Merge pull request #1881 from gofiber/dependabot/go_modules/dynamodb/aws-modules-3d3ca9392f\n\nchore(deps): bump the aws-modules group across 2 directories with 3 updates",
          "timestamp": "2025-08-27T19:25:30+02:00",
          "tree_id": "913e38db7e26687c10437065d1bdbb680e4cd804",
          "url": "https://github.com/gofiber/storage/commit/149f38aca57ded8a472a4608ff18a3ba58f0250a"
        },
        "date": 1756315596930,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2458709,
            "unit": "ns/op\t   93258 B/op\t     866 allocs/op",
            "extra": "500 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2458709,
            "unit": "ns/op",
            "extra": "500 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 93258,
            "unit": "B/op",
            "extra": "500 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 866,
            "unit": "allocs/op",
            "extra": "500 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 873409,
            "unit": "ns/op\t   86522 B/op\t     770 allocs/op",
            "extra": "1365 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 873409,
            "unit": "ns/op",
            "extra": "1365 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 86522,
            "unit": "B/op",
            "extra": "1365 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 770,
            "unit": "allocs/op",
            "extra": "1365 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2679311,
            "unit": "ns/op\t  140449 B/op\t    1488 allocs/op",
            "extra": "458 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2679311,
            "unit": "ns/op",
            "extra": "458 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 140449,
            "unit": "B/op",
            "extra": "458 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1488,
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
          "id": "b277ff3ea336f01bc62ec6daef1891f78758b0b1",
          "message": "Merge pull request #1883 from gofiber/dependabot/go_modules/dynamodb/aws-modules-da8fa1ea40\n\nchore(deps): bump the aws-modules group across 2 directories with 8 updates",
          "timestamp": "2025-08-28T10:52:07+02:00",
          "tree_id": "7da8870f8f7f17614f492090612238ea78c38be7",
          "url": "https://github.com/gofiber/storage/commit/b277ff3ea336f01bc62ec6daef1891f78758b0b1"
        },
        "date": 1756371199601,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2623385,
            "unit": "ns/op\t   94145 B/op\t     867 allocs/op",
            "extra": "477 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2623385,
            "unit": "ns/op",
            "extra": "477 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 94145,
            "unit": "B/op",
            "extra": "477 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 867,
            "unit": "allocs/op",
            "extra": "477 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 890371,
            "unit": "ns/op\t   86529 B/op\t     770 allocs/op",
            "extra": "1327 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 890371,
            "unit": "ns/op",
            "extra": "1327 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 86529,
            "unit": "B/op",
            "extra": "1327 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 770,
            "unit": "allocs/op",
            "extra": "1327 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2752516,
            "unit": "ns/op\t  140382 B/op\t    1488 allocs/op",
            "extra": "434 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2752516,
            "unit": "ns/op",
            "extra": "434 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 140382,
            "unit": "B/op",
            "extra": "434 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1488,
            "unit": "allocs/op",
            "extra": "434 times\n4 procs"
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
          "id": "23fd56bd10774c58759dae27664991d090a73f4f",
          "message": "Merge pull request #1884 from gofiber/dependabot/go_modules/dynamodb/aws-modules-4b89e09fe1\n\nchore(deps): bump the aws-modules group across 2 directories with 5 updates",
          "timestamp": "2025-08-29T09:21:52+02:00",
          "tree_id": "77335a6311457de0846a388fe7fdb2309aa44538",
          "url": "https://github.com/gofiber/storage/commit/23fd56bd10774c58759dae27664991d090a73f4f"
        },
        "date": 1756452177883,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2405916,
            "unit": "ns/op\t   93737 B/op\t     867 allocs/op",
            "extra": "495 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2405916,
            "unit": "ns/op",
            "extra": "495 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 93737,
            "unit": "B/op",
            "extra": "495 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 867,
            "unit": "allocs/op",
            "extra": "495 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 910421,
            "unit": "ns/op\t   86525 B/op\t     770 allocs/op",
            "extra": "1335 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 910421,
            "unit": "ns/op",
            "extra": "1335 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 86525,
            "unit": "B/op",
            "extra": "1335 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 770,
            "unit": "allocs/op",
            "extra": "1335 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2731613,
            "unit": "ns/op\t  140603 B/op\t    1488 allocs/op",
            "extra": "446 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2731613,
            "unit": "ns/op",
            "extra": "446 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 140603,
            "unit": "B/op",
            "extra": "446 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1488,
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
          "id": "591a294c63a851aaac0cc7deabb5c720a3216135",
          "message": "Merge pull request #1888 from gofiber/dependabot/go_modules/dynamodb/aws-modules-f37ef1973c\n\nchore(deps): bump the aws-modules group across 2 directories with 7 updates",
          "timestamp": "2025-09-03T07:09:31+02:00",
          "tree_id": "1b4d45567f7cf2abb6c9bc21e8578d2c3ea784ba",
          "url": "https://github.com/gofiber/storage/commit/591a294c63a851aaac0cc7deabb5c720a3216135"
        },
        "date": 1756876275446,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2341081,
            "unit": "ns/op\t   93278 B/op\t     866 allocs/op",
            "extra": "518 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2341081,
            "unit": "ns/op",
            "extra": "518 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 93278,
            "unit": "B/op",
            "extra": "518 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 866,
            "unit": "allocs/op",
            "extra": "518 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 896197,
            "unit": "ns/op\t   86535 B/op\t     770 allocs/op",
            "extra": "1341 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 896197,
            "unit": "ns/op",
            "extra": "1341 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 86535,
            "unit": "B/op",
            "extra": "1341 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 770,
            "unit": "allocs/op",
            "extra": "1341 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2622278,
            "unit": "ns/op\t  140829 B/op\t    1488 allocs/op",
            "extra": "460 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2622278,
            "unit": "ns/op",
            "extra": "460 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 140829,
            "unit": "B/op",
            "extra": "460 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1488,
            "unit": "allocs/op",
            "extra": "460 times\n4 procs"
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
          "id": "1266b340169dc0a24e8563ab85fee51703037342",
          "message": "Merge pull request #1898 from gofiber/dependabot/go_modules/dynamodb/aws-modules-ecf02dee85\n\nchore(deps): bump the aws-modules group across 2 directories with 7 updates",
          "timestamp": "2025-09-09T09:26:03+02:00",
          "tree_id": "2cfce383e7345b5cb7daf1bb21d5113f15cb8642",
          "url": "https://github.com/gofiber/storage/commit/1266b340169dc0a24e8563ab85fee51703037342"
        },
        "date": 1757402866181,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2411848,
            "unit": "ns/op\t   93522 B/op\t     867 allocs/op",
            "extra": "511 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2411848,
            "unit": "ns/op",
            "extra": "511 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 93522,
            "unit": "B/op",
            "extra": "511 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 867,
            "unit": "allocs/op",
            "extra": "511 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 929019,
            "unit": "ns/op\t   86536 B/op\t     770 allocs/op",
            "extra": "1352 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 929019,
            "unit": "ns/op",
            "extra": "1352 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 86536,
            "unit": "B/op",
            "extra": "1352 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 770,
            "unit": "allocs/op",
            "extra": "1352 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2789632,
            "unit": "ns/op\t  140754 B/op\t    1488 allocs/op",
            "extra": "447 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2789632,
            "unit": "ns/op",
            "extra": "447 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 140754,
            "unit": "B/op",
            "extra": "447 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1488,
            "unit": "allocs/op",
            "extra": "447 times\n4 procs"
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
          "id": "066ad04badbb4fe75428ac55af4048dedf7677ea",
          "message": "Merge pull request #1900 from gofiber/dependabot/go_modules/dynamodb/aws-modules-aed0ccaa72\n\nchore(deps): bump the aws-modules group across 2 directories with 6 updates",
          "timestamp": "2025-09-11T09:22:24+02:00",
          "tree_id": "7073156c70bc3d5acdd06cf496ebf6e765a79d95",
          "url": "https://github.com/gofiber/storage/commit/066ad04badbb4fe75428ac55af4048dedf7677ea"
        },
        "date": 1757575424805,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2725843,
            "unit": "ns/op\t   92604 B/op\t     866 allocs/op",
            "extra": "480 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2725843,
            "unit": "ns/op",
            "extra": "480 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 92604,
            "unit": "B/op",
            "extra": "480 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 866,
            "unit": "allocs/op",
            "extra": "480 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 893338,
            "unit": "ns/op\t   86510 B/op\t     770 allocs/op",
            "extra": "1383 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 893338,
            "unit": "ns/op",
            "extra": "1383 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 86510,
            "unit": "B/op",
            "extra": "1383 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 770,
            "unit": "allocs/op",
            "extra": "1383 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2819647,
            "unit": "ns/op\t  140742 B/op\t    1488 allocs/op",
            "extra": "426 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2819647,
            "unit": "ns/op",
            "extra": "426 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 140742,
            "unit": "B/op",
            "extra": "426 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1488,
            "unit": "allocs/op",
            "extra": "426 times\n4 procs"
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
          "id": "e87763b2c788bfbdc36f619d449fe716ec5e7953",
          "message": "Merge pull request #1912 from gofiber/dependabot/go_modules/dynamodb/aws-modules-85f2bfb3fa\n\nchore(deps): bump the aws-modules group across 2 directories with 3 updates",
          "timestamp": "2025-09-23T09:20:26+02:00",
          "tree_id": "e6952a1f5a359d8b4bfa722396826a8ee989edcb",
          "url": "https://github.com/gofiber/storage/commit/e87763b2c788bfbdc36f619d449fe716ec5e7953"
        },
        "date": 1758612098730,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2710358,
            "unit": "ns/op\t   94156 B/op\t     867 allocs/op",
            "extra": "466 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2710358,
            "unit": "ns/op",
            "extra": "466 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 94156,
            "unit": "B/op",
            "extra": "466 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 867,
            "unit": "allocs/op",
            "extra": "466 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 899938,
            "unit": "ns/op\t   86504 B/op\t     770 allocs/op",
            "extra": "1321 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 899938,
            "unit": "ns/op",
            "extra": "1321 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 86504,
            "unit": "B/op",
            "extra": "1321 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 770,
            "unit": "allocs/op",
            "extra": "1321 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2741532,
            "unit": "ns/op\t  141080 B/op\t    1488 allocs/op",
            "extra": "435 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2741532,
            "unit": "ns/op",
            "extra": "435 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 141080,
            "unit": "B/op",
            "extra": "435 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1488,
            "unit": "allocs/op",
            "extra": "435 times\n4 procs"
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
          "id": "3732138a82fa44807191d227636ffa464576f867",
          "message": "Merge pull request #1914 from gofiber/dependabot/go_modules/dynamodb/aws-modules-0c1ccc0a9b\n\nchore(deps): bump the aws-modules group across 2 directories with 7 updates",
          "timestamp": "2025-09-24T09:24:01+02:00",
          "tree_id": "3c8a210e8e1e57c91456beaa6606fef8f1dea8b5",
          "url": "https://github.com/gofiber/storage/commit/3732138a82fa44807191d227636ffa464576f867"
        },
        "date": 1758698713932,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2319197,
            "unit": "ns/op\t   93859 B/op\t     867 allocs/op",
            "extra": "532 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2319197,
            "unit": "ns/op",
            "extra": "532 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 93859,
            "unit": "B/op",
            "extra": "532 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 867,
            "unit": "allocs/op",
            "extra": "532 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 912290,
            "unit": "ns/op\t   86553 B/op\t     770 allocs/op",
            "extra": "1269 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 912290,
            "unit": "ns/op",
            "extra": "1269 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 86553,
            "unit": "B/op",
            "extra": "1269 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 770,
            "unit": "allocs/op",
            "extra": "1269 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2694669,
            "unit": "ns/op\t  140909 B/op\t    1488 allocs/op",
            "extra": "440 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2694669,
            "unit": "ns/op",
            "extra": "440 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 140909,
            "unit": "B/op",
            "extra": "440 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1488,
            "unit": "allocs/op",
            "extra": "440 times\n4 procs"
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
          "id": "d64f128d6321d5f09c2f82740d3a7fe81c6f48a3",
          "message": "Merge pull request #1917 from gofiber/dependabot/go_modules/dynamodb/aws-modules-b8d6e13a4f\n\nchore(deps): bump the aws-modules group across 2 directories with 7 updates",
          "timestamp": "2025-09-29T13:41:50+02:00",
          "tree_id": "f9e21234288eb8e70262c329a467205738ce7ace",
          "url": "https://github.com/gofiber/storage/commit/d64f128d6321d5f09c2f82740d3a7fe81c6f48a3"
        },
        "date": 1759146163008,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2438164,
            "unit": "ns/op\t   92535 B/op\t     866 allocs/op",
            "extra": "498 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2438164,
            "unit": "ns/op",
            "extra": "498 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 92535,
            "unit": "B/op",
            "extra": "498 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 866,
            "unit": "allocs/op",
            "extra": "498 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 875401,
            "unit": "ns/op\t   86514 B/op\t     770 allocs/op",
            "extra": "1309 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 875401,
            "unit": "ns/op",
            "extra": "1309 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 86514,
            "unit": "B/op",
            "extra": "1309 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 770,
            "unit": "allocs/op",
            "extra": "1309 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2665472,
            "unit": "ns/op\t  140426 B/op\t    1488 allocs/op",
            "extra": "450 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2665472,
            "unit": "ns/op",
            "extra": "450 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 140426,
            "unit": "B/op",
            "extra": "450 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1488,
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
          "id": "d392bcb538b0ef6fbbd521313f760d5d691f1557",
          "message": "Merge pull request #1918 from gofiber/dependabot/go_modules/dynamodb/aws-modules-1464c1ac01\n\nchore(deps): bump the aws-modules group across 2 directories with 3 updates",
          "timestamp": "2025-09-30T09:19:22+02:00",
          "tree_id": "022aea9ea1cdc50e19e043c9d0cd3b416b6cd225",
          "url": "https://github.com/gofiber/storage/commit/d392bcb538b0ef6fbbd521313f760d5d691f1557"
        },
        "date": 1759216849304,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2352251,
            "unit": "ns/op\t   92942 B/op\t     866 allocs/op",
            "extra": "516 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2352251,
            "unit": "ns/op",
            "extra": "516 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 92942,
            "unit": "B/op",
            "extra": "516 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 866,
            "unit": "allocs/op",
            "extra": "516 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 886431,
            "unit": "ns/op\t   86514 B/op\t     770 allocs/op",
            "extra": "1350 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 886431,
            "unit": "ns/op",
            "extra": "1350 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 86514,
            "unit": "B/op",
            "extra": "1350 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 770,
            "unit": "allocs/op",
            "extra": "1350 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2665148,
            "unit": "ns/op\t  141436 B/op\t    1488 allocs/op",
            "extra": "450 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2665148,
            "unit": "ns/op",
            "extra": "450 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 141436,
            "unit": "B/op",
            "extra": "450 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1488,
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
          "id": "8328697ec53bf2ee8866197a2f6460445e134d45",
          "message": "Merge pull request #1920 from gofiber/dependabot/go_modules/dynamodb/aws-modules-702e795c0b\n\nchore(deps): bump the aws-modules group across 2 directories with 3 updates",
          "timestamp": "2025-10-03T09:18:42+02:00",
          "tree_id": "1a8241c13e7f68ab4e64231396c251d194fd03bb",
          "url": "https://github.com/gofiber/storage/commit/8328697ec53bf2ee8866197a2f6460445e134d45"
        },
        "date": 1759475991769,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2557160,
            "unit": "ns/op\t   92498 B/op\t     866 allocs/op",
            "extra": "502 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2557160,
            "unit": "ns/op",
            "extra": "502 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 92498,
            "unit": "B/op",
            "extra": "502 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 866,
            "unit": "allocs/op",
            "extra": "502 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 874160,
            "unit": "ns/op\t   86527 B/op\t     770 allocs/op",
            "extra": "1381 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 874160,
            "unit": "ns/op",
            "extra": "1381 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 86527,
            "unit": "B/op",
            "extra": "1381 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 770,
            "unit": "allocs/op",
            "extra": "1381 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2640204,
            "unit": "ns/op\t  141276 B/op\t    1488 allocs/op",
            "extra": "452 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2640204,
            "unit": "ns/op",
            "extra": "452 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 141276,
            "unit": "B/op",
            "extra": "452 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1488,
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
          "id": "96beb949124299ab9d9277fd08025f1ab84e6c8f",
          "message": "Merge pull request #1923 from gofiber/dependabot/go_modules/s3/aws-modules-8bf5dc55be\n\nchore(deps): bump the aws-modules group across 1 directory with 2 updates",
          "timestamp": "2025-10-08T09:19:45+02:00",
          "tree_id": "ed3cc91618cbc929722e8ab3a20edd1a40ec0118",
          "url": "https://github.com/gofiber/storage/commit/96beb949124299ab9d9277fd08025f1ab84e6c8f"
        },
        "date": 1759908081871,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2164253,
            "unit": "ns/op\t   92575 B/op\t     866 allocs/op",
            "extra": "570 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2164253,
            "unit": "ns/op",
            "extra": "570 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 92575,
            "unit": "B/op",
            "extra": "570 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 866,
            "unit": "allocs/op",
            "extra": "570 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 878067,
            "unit": "ns/op\t   86530 B/op\t     770 allocs/op",
            "extra": "1364 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 878067,
            "unit": "ns/op",
            "extra": "1364 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 86530,
            "unit": "B/op",
            "extra": "1364 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 770,
            "unit": "allocs/op",
            "extra": "1364 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2530004,
            "unit": "ns/op\t  140044 B/op\t    1488 allocs/op",
            "extra": "478 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2530004,
            "unit": "ns/op",
            "extra": "478 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 140044,
            "unit": "B/op",
            "extra": "478 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1488,
            "unit": "allocs/op",
            "extra": "478 times\n4 procs"
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
          "id": "679c38c335c56549dd2d85bcab76e3ea6115b103",
          "message": "Merge pull request #1930 from gofiber/dependabot/go_modules/dynamodb/aws-modules-b424681521\n\nchore(deps): bump github.com/aws/smithy-go from 1.23.0 to 1.23.1 in /dynamodb in the aws-modules group across 1 directory",
          "timestamp": "2025-10-16T09:28:22+02:00",
          "tree_id": "e6e8fc33fc01ca2e1042911ec1ce279439a07a1f",
          "url": "https://github.com/gofiber/storage/commit/679c38c335c56549dd2d85bcab76e3ea6115b103"
        },
        "date": 1760599866802,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2639004,
            "unit": "ns/op\t   93553 B/op\t     867 allocs/op",
            "extra": "430 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2639004,
            "unit": "ns/op",
            "extra": "430 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 93553,
            "unit": "B/op",
            "extra": "430 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 867,
            "unit": "allocs/op",
            "extra": "430 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 922835,
            "unit": "ns/op\t   86522 B/op\t     770 allocs/op",
            "extra": "1330 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 922835,
            "unit": "ns/op",
            "extra": "1330 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 86522,
            "unit": "B/op",
            "extra": "1330 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 770,
            "unit": "allocs/op",
            "extra": "1330 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2910991,
            "unit": "ns/op\t  140898 B/op\t    1488 allocs/op",
            "extra": "376 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2910991,
            "unit": "ns/op",
            "extra": "376 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 140898,
            "unit": "B/op",
            "extra": "376 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1488,
            "unit": "allocs/op",
            "extra": "376 times\n4 procs"
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
          "id": "af175b16328939ba7074cad5e1e16098a5f271bf",
          "message": "Merge pull request #1932 from gofiber/dependabot/go_modules/dynamodb/aws-modules-becfb72569\n\nchore(deps): bump the aws-modules group across 2 directories with 7 updates",
          "timestamp": "2025-10-17T09:24:07+02:00",
          "tree_id": "85119dce113fa02858f65362fa1ddb6e61813a68",
          "url": "https://github.com/gofiber/storage/commit/af175b16328939ba7074cad5e1e16098a5f271bf"
        },
        "date": 1760685926262,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2199099,
            "unit": "ns/op\t   92866 B/op\t     866 allocs/op",
            "extra": "565 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2199099,
            "unit": "ns/op",
            "extra": "565 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 92866,
            "unit": "B/op",
            "extra": "565 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 866,
            "unit": "allocs/op",
            "extra": "565 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 900425,
            "unit": "ns/op\t   86544 B/op\t     770 allocs/op",
            "extra": "1344 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 900425,
            "unit": "ns/op",
            "extra": "1344 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 86544,
            "unit": "B/op",
            "extra": "1344 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 770,
            "unit": "allocs/op",
            "extra": "1344 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2598782,
            "unit": "ns/op\t  141251 B/op\t    1488 allocs/op",
            "extra": "460 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2598782,
            "unit": "ns/op",
            "extra": "460 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 141251,
            "unit": "B/op",
            "extra": "460 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1488,
            "unit": "allocs/op",
            "extra": "460 times\n4 procs"
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
          "id": "e8a11c5b5e151f0cbf745157125665a33616df8b",
          "message": "Merge pull request #1939 from gofiber/dependabot/go_modules/dynamodb/aws-modules-cba04a4b19\n\nchore(deps): bump the aws-modules group across 2 directories with 6 updates",
          "timestamp": "2025-10-23T09:33:07+02:00",
          "tree_id": "6beb95281542638a60b4b8db8de2f64c1f56a0df",
          "url": "https://github.com/gofiber/storage/commit/e8a11c5b5e151f0cbf745157125665a33616df8b"
        },
        "date": 1761204951688,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2398446,
            "unit": "ns/op\t   93237 B/op\t     866 allocs/op",
            "extra": "481 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2398446,
            "unit": "ns/op",
            "extra": "481 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 93237,
            "unit": "B/op",
            "extra": "481 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 866,
            "unit": "allocs/op",
            "extra": "481 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 895182,
            "unit": "ns/op\t   86527 B/op\t     770 allocs/op",
            "extra": "1311 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 895182,
            "unit": "ns/op",
            "extra": "1311 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 86527,
            "unit": "B/op",
            "extra": "1311 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 770,
            "unit": "allocs/op",
            "extra": "1311 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2686905,
            "unit": "ns/op\t  141305 B/op\t    1488 allocs/op",
            "extra": "436 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2686905,
            "unit": "ns/op",
            "extra": "436 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 141305,
            "unit": "B/op",
            "extra": "436 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1488,
            "unit": "allocs/op",
            "extra": "436 times\n4 procs"
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
          "id": "3654231fd999de039e40ca6da147db05620fd797",
          "message": "Merge pull request #1940 from gofiber/dependabot/go_modules/dynamodb/aws-modules-9d08800e7b\n\nchore(deps): bump the aws-modules group across 2 directories with 7 updates",
          "timestamp": "2025-10-24T09:37:48+02:00",
          "tree_id": "2761f5c3f79f128cac9d009fc30b4d91650eb717",
          "url": "https://github.com/gofiber/storage/commit/3654231fd999de039e40ca6da147db05620fd797"
        },
        "date": 1761291600865,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2243815,
            "unit": "ns/op\t   93595 B/op\t     867 allocs/op",
            "extra": "537 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2243815,
            "unit": "ns/op",
            "extra": "537 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 93595,
            "unit": "B/op",
            "extra": "537 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 867,
            "unit": "allocs/op",
            "extra": "537 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 889688,
            "unit": "ns/op\t   86516 B/op\t     770 allocs/op",
            "extra": "1352 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 889688,
            "unit": "ns/op",
            "extra": "1352 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 86516,
            "unit": "B/op",
            "extra": "1352 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 770,
            "unit": "allocs/op",
            "extra": "1352 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2582371,
            "unit": "ns/op\t  140766 B/op\t    1488 allocs/op",
            "extra": "460 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2582371,
            "unit": "ns/op",
            "extra": "460 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 140766,
            "unit": "B/op",
            "extra": "460 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1488,
            "unit": "allocs/op",
            "extra": "460 times\n4 procs"
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
          "id": "b8dbc1e7ef74e7ed5da539254a297376fc99d849",
          "message": "Merge pull request #1944 from gofiber/dependabot/go_modules/s3/aws-modules-b99a8b5c3c\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/feature/s3/manager from 1.19.15 to 1.20.0 in /s3 in the aws-modules group across 1 directory",
          "timestamp": "2025-10-28T08:27:31+01:00",
          "tree_id": "d3b59edee2f2881e5a4af775199888a38c252fdc",
          "url": "https://github.com/gofiber/storage/commit/b8dbc1e7ef74e7ed5da539254a297376fc99d849"
        },
        "date": 1761636796439,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2323359,
            "unit": "ns/op\t   93981 B/op\t     867 allocs/op",
            "extra": "538 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2323359,
            "unit": "ns/op",
            "extra": "538 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 93981,
            "unit": "B/op",
            "extra": "538 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 867,
            "unit": "allocs/op",
            "extra": "538 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 892057,
            "unit": "ns/op\t   86644 B/op\t     774 allocs/op",
            "extra": "1344 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 892057,
            "unit": "ns/op",
            "extra": "1344 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 86644,
            "unit": "B/op",
            "extra": "1344 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 774,
            "unit": "allocs/op",
            "extra": "1344 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2651451,
            "unit": "ns/op\t  140645 B/op\t    1488 allocs/op",
            "extra": "446 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2651451,
            "unit": "ns/op",
            "extra": "446 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 140645,
            "unit": "B/op",
            "extra": "446 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1488,
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
          "id": "25b5af6a9328381844949153c7286cd350372417",
          "message": "Merge pull request #1946 from gofiber/dependabot/go_modules/s3/aws-modules-22b0d73960\n\nchore(deps): bump the aws-modules group across 1 directory with 2 updates",
          "timestamp": "2025-10-29T08:34:00+01:00",
          "tree_id": "1f1c9191b4bbec150a7dfeedab525935f5f87dcc",
          "url": "https://github.com/gofiber/storage/commit/25b5af6a9328381844949153c7286cd350372417"
        },
        "date": 1761723458118,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2569130,
            "unit": "ns/op\t   93813 B/op\t     866 allocs/op",
            "extra": "476 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2569130,
            "unit": "ns/op",
            "extra": "476 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 93813,
            "unit": "B/op",
            "extra": "476 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 866,
            "unit": "allocs/op",
            "extra": "476 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 934586,
            "unit": "ns/op\t   86646 B/op\t     774 allocs/op",
            "extra": "1314 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 934586,
            "unit": "ns/op",
            "extra": "1314 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 86646,
            "unit": "B/op",
            "extra": "1314 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 774,
            "unit": "allocs/op",
            "extra": "1314 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2836869,
            "unit": "ns/op\t  141091 B/op\t    1488 allocs/op",
            "extra": "439 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2836869,
            "unit": "ns/op",
            "extra": "439 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 141091,
            "unit": "B/op",
            "extra": "439 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1488,
            "unit": "allocs/op",
            "extra": "439 times\n4 procs"
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
          "id": "2a8221cd474f6376fad2f4f43119f14e543f34b7",
          "message": "Merge pull request #1947 from gofiber/dependabot/go_modules/dynamodb/aws-modules-9522267e2b\n\nchore(deps): bump the aws-modules group across 2 directories with 7 updates",
          "timestamp": "2025-10-31T08:24:50+01:00",
          "tree_id": "46d50b9f97f99e8d0a0604e77d29157a54c8cc26",
          "url": "https://github.com/gofiber/storage/commit/2a8221cd474f6376fad2f4f43119f14e543f34b7"
        },
        "date": 1761895570037,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2695145,
            "unit": "ns/op\t   92871 B/op\t     866 allocs/op",
            "extra": "399 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2695145,
            "unit": "ns/op",
            "extra": "399 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 92871,
            "unit": "B/op",
            "extra": "399 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 866,
            "unit": "allocs/op",
            "extra": "399 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 883680,
            "unit": "ns/op\t   86649 B/op\t     774 allocs/op",
            "extra": "1384 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 883680,
            "unit": "ns/op",
            "extra": "1384 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 86649,
            "unit": "B/op",
            "extra": "1384 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 774,
            "unit": "allocs/op",
            "extra": "1384 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2813246,
            "unit": "ns/op\t  140742 B/op\t    1488 allocs/op",
            "extra": "421 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2813246,
            "unit": "ns/op",
            "extra": "421 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 140742,
            "unit": "B/op",
            "extra": "421 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1488,
            "unit": "allocs/op",
            "extra": "421 times\n4 procs"
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
          "id": "19340481714c160955d4ab395286274e4a76d6f8",
          "message": "Merge pull request #1949 from gofiber/dependabot/go_modules/dynamodb/aws-modules-597ae18de0\n\nchore(deps): bump github.com/aws/smithy-go from 1.23.1 to 1.23.2 in /dynamodb in the aws-modules group across 1 directory",
          "timestamp": "2025-11-04T08:15:04+01:00",
          "tree_id": "b422f2b95f2c6c09370709431edf373468fc20a0",
          "url": "https://github.com/gofiber/storage/commit/19340481714c160955d4ab395286274e4a76d6f8"
        },
        "date": 1762240576604,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2293565,
            "unit": "ns/op\t   91410 B/op\t     828 allocs/op",
            "extra": "535 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2293565,
            "unit": "ns/op",
            "extra": "535 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 91410,
            "unit": "B/op",
            "extra": "535 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 828,
            "unit": "allocs/op",
            "extra": "535 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 943865,
            "unit": "ns/op\t   84050 B/op\t     734 allocs/op",
            "extra": "1308 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 943865,
            "unit": "ns/op",
            "extra": "1308 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 84050,
            "unit": "B/op",
            "extra": "1308 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 734,
            "unit": "allocs/op",
            "extra": "1308 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2775392,
            "unit": "ns/op\t  134842 B/op\t    1406 allocs/op",
            "extra": "406 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2775392,
            "unit": "ns/op",
            "extra": "406 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 134842,
            "unit": "B/op",
            "extra": "406 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1406,
            "unit": "allocs/op",
            "extra": "406 times\n4 procs"
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
          "id": "0eb40a219177252e741d7cba3b47a8bf0cfbc3bd",
          "message": "Merge pull request #1950 from gofiber/dependabot/go_modules/dynamodb/aws-modules-7ba5db8531\n\nchore(deps): bump the aws-modules group across 2 directories with 7 updates",
          "timestamp": "2025-11-05T08:30:15+01:00",
          "tree_id": "1b7dc9abb8874f39eb3c43a8d6b50658bf7c127d",
          "url": "https://github.com/gofiber/storage/commit/0eb40a219177252e741d7cba3b47a8bf0cfbc3bd"
        },
        "date": 1762327945982,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2369986,
            "unit": "ns/op\t   91866 B/op\t     828 allocs/op",
            "extra": "492 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2369986,
            "unit": "ns/op",
            "extra": "492 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 91866,
            "unit": "B/op",
            "extra": "492 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 828,
            "unit": "allocs/op",
            "extra": "492 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 946051,
            "unit": "ns/op\t   84059 B/op\t     734 allocs/op",
            "extra": "1264 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 946051,
            "unit": "ns/op",
            "extra": "1264 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 84059,
            "unit": "B/op",
            "extra": "1264 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 734,
            "unit": "allocs/op",
            "extra": "1264 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2761204,
            "unit": "ns/op\t  135364 B/op\t    1406 allocs/op",
            "extra": "432 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2761204,
            "unit": "ns/op",
            "extra": "432 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 135364,
            "unit": "B/op",
            "extra": "432 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1406,
            "unit": "allocs/op",
            "extra": "432 times\n4 procs"
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
          "id": "07ad1e210b879b1e147f152380898084f513e47d",
          "message": "Merge pull request #1952 from gofiber/dependabot/go_modules/s3/aws-modules-a4e437d5d5\n\nchore(deps): bump the aws-modules group across 1 directory with 2 updates",
          "timestamp": "2025-11-06T08:34:14+01:00",
          "tree_id": "cb0c747f6ae81826f8ee4fe6b81a3436d9e272f1",
          "url": "https://github.com/gofiber/storage/commit/07ad1e210b879b1e147f152380898084f513e47d"
        },
        "date": 1762414601525,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2330412,
            "unit": "ns/op\t   91683 B/op\t     828 allocs/op",
            "extra": "531 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2330412,
            "unit": "ns/op",
            "extra": "531 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 91683,
            "unit": "B/op",
            "extra": "531 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 828,
            "unit": "allocs/op",
            "extra": "531 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 872313,
            "unit": "ns/op\t   84057 B/op\t     734 allocs/op",
            "extra": "1423 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 872313,
            "unit": "ns/op",
            "extra": "1423 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 84057,
            "unit": "B/op",
            "extra": "1423 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 734,
            "unit": "allocs/op",
            "extra": "1423 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2623819,
            "unit": "ns/op\t  135747 B/op\t    1406 allocs/op",
            "extra": "453 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2623819,
            "unit": "ns/op",
            "extra": "453 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 135747,
            "unit": "B/op",
            "extra": "453 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1406,
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
          "id": "114cb6b5740a931724cb835a93d7cf53ccad3283",
          "message": "Merge pull request #1959 from gofiber/dependabot/go_modules/s3/github.com/docker/docker-28.3.3incompatible\n\nchore(deps): bump github.com/docker/docker from 28.2.2+incompatible to 28.3.3+incompatible in /s3",
          "timestamp": "2025-11-06T08:58:40+01:00",
          "tree_id": "fd1a4f063c3c090df7b01d57d88058a7e6ac223a",
          "url": "https://github.com/gofiber/storage/commit/114cb6b5740a931724cb835a93d7cf53ccad3283"
        },
        "date": 1762417251144,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2247717,
            "unit": "ns/op\t   91941 B/op\t     828 allocs/op",
            "extra": "567 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2247717,
            "unit": "ns/op",
            "extra": "567 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 91941,
            "unit": "B/op",
            "extra": "567 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 828,
            "unit": "allocs/op",
            "extra": "567 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 889305,
            "unit": "ns/op\t   84061 B/op\t     734 allocs/op",
            "extra": "1369 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 889305,
            "unit": "ns/op",
            "extra": "1369 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 84061,
            "unit": "B/op",
            "extra": "1369 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 734,
            "unit": "allocs/op",
            "extra": "1369 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2581252,
            "unit": "ns/op\t  135447 B/op\t    1406 allocs/op",
            "extra": "459 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2581252,
            "unit": "ns/op",
            "extra": "459 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 135447,
            "unit": "B/op",
            "extra": "459 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1406,
            "unit": "allocs/op",
            "extra": "459 times\n4 procs"
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
          "id": "dbc87202197d648c75816e1572ab88fb7e0696dc",
          "message": "Merge pull request #1985 from gofiber/dependabot/go_modules/s3/github.com/docker/docker-28.5.2incompatible\n\nchore(deps): bump github.com/docker/docker from 28.3.3+incompatible to 28.5.2+incompatible in /s3",
          "timestamp": "2025-11-06T09:19:52+01:00",
          "tree_id": "94ff61aa50c29e0d063ec02e95e45f33d792a029",
          "url": "https://github.com/gofiber/storage/commit/dbc87202197d648c75816e1572ab88fb7e0696dc"
        },
        "date": 1762418245397,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2872018,
            "unit": "ns/op\t   91525 B/op\t     828 allocs/op",
            "extra": "430 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2872018,
            "unit": "ns/op",
            "extra": "430 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 91525,
            "unit": "B/op",
            "extra": "430 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 828,
            "unit": "allocs/op",
            "extra": "430 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 883411,
            "unit": "ns/op\t   84069 B/op\t     734 allocs/op",
            "extra": "1381 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 883411,
            "unit": "ns/op",
            "extra": "1381 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 84069,
            "unit": "B/op",
            "extra": "1381 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 734,
            "unit": "allocs/op",
            "extra": "1381 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2816106,
            "unit": "ns/op\t  135926 B/op\t    1406 allocs/op",
            "extra": "411 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2816106,
            "unit": "ns/op",
            "extra": "411 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 135926,
            "unit": "B/op",
            "extra": "411 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1406,
            "unit": "allocs/op",
            "extra": "411 times\n4 procs"
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
          "id": "87b5628803ae2cc5d4e003bad55908ef5ae64b90",
          "message": "Merge pull request #2003 from gofiber/dependabot/go_modules/dynamodb/aws-modules-789969c74f\n\nchore(deps): bump the aws-modules group across 2 directories with 3 updates",
          "timestamp": "2025-11-11T08:44:59+01:00",
          "tree_id": "3bfd0cc0a67d7ae79f5a446c59cf53eff62c8fc1",
          "url": "https://github.com/gofiber/storage/commit/87b5628803ae2cc5d4e003bad55908ef5ae64b90"
        },
        "date": 1762848267409,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2290396,
            "unit": "ns/op\t   91377 B/op\t     828 allocs/op",
            "extra": "528 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2290396,
            "unit": "ns/op",
            "extra": "528 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 91377,
            "unit": "B/op",
            "extra": "528 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 828,
            "unit": "allocs/op",
            "extra": "528 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 880703,
            "unit": "ns/op\t   84065 B/op\t     735 allocs/op",
            "extra": "1376 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 880703,
            "unit": "ns/op",
            "extra": "1376 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 84065,
            "unit": "B/op",
            "extra": "1376 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 735,
            "unit": "allocs/op",
            "extra": "1376 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2579305,
            "unit": "ns/op\t  136059 B/op\t    1406 allocs/op",
            "extra": "447 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2579305,
            "unit": "ns/op",
            "extra": "447 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 136059,
            "unit": "B/op",
            "extra": "447 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1406,
            "unit": "allocs/op",
            "extra": "447 times\n4 procs"
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
          "id": "1aa8b4e2daf69d994e59d35f5371f22771e58e40",
          "message": "Merge pull request #2006 from gofiber/dependabot/go_modules/dynamodb/aws-modules-c048fc7cae\n\nchore(deps): bump the aws-modules group across 2 directories with 6 updates",
          "timestamp": "2025-11-12T08:25:32+01:00",
          "tree_id": "20fbdf18df1e000826a383acb6f71af06166407a",
          "url": "https://github.com/gofiber/storage/commit/1aa8b4e2daf69d994e59d35f5371f22771e58e40"
        },
        "date": 1762932423958,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2399496,
            "unit": "ns/op\t   92249 B/op\t     828 allocs/op",
            "extra": "506 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2399496,
            "unit": "ns/op",
            "extra": "506 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 92249,
            "unit": "B/op",
            "extra": "506 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 828,
            "unit": "allocs/op",
            "extra": "506 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 907125,
            "unit": "ns/op\t   84071 B/op\t     735 allocs/op",
            "extra": "1312 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 907125,
            "unit": "ns/op",
            "extra": "1312 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 84071,
            "unit": "B/op",
            "extra": "1312 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 735,
            "unit": "allocs/op",
            "extra": "1312 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2729973,
            "unit": "ns/op\t  135681 B/op\t    1406 allocs/op",
            "extra": "427 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2729973,
            "unit": "ns/op",
            "extra": "427 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 135681,
            "unit": "B/op",
            "extra": "427 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1406,
            "unit": "allocs/op",
            "extra": "427 times\n4 procs"
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
          "id": "20188abff3c447f405ec7c1a21a6a43685a60d8c",
          "message": "Merge pull request #2008 from gofiber/dependabot/go_modules/dynamodb/aws-modules-3431103dd0\n\nchore(deps): bump the aws-modules group across 2 directories with 6 updates",
          "timestamp": "2025-11-13T08:22:53+01:00",
          "tree_id": "1b242fe4a4f258aa4eac781d235f6f314f14766a",
          "url": "https://github.com/gofiber/storage/commit/20188abff3c447f405ec7c1a21a6a43685a60d8c"
        },
        "date": 1763018677047,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2263482,
            "unit": "ns/op\t   87159 B/op\t     764 allocs/op",
            "extra": "547 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2263482,
            "unit": "ns/op",
            "extra": "547 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 87159,
            "unit": "B/op",
            "extra": "547 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 764,
            "unit": "allocs/op",
            "extra": "547 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 866728,
            "unit": "ns/op\t   81178 B/op\t     673 allocs/op",
            "extra": "1347 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 866728,
            "unit": "ns/op",
            "extra": "1347 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 81178,
            "unit": "B/op",
            "extra": "1347 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 673,
            "unit": "allocs/op",
            "extra": "1347 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2507949,
            "unit": "ns/op\t  128967 B/op\t    1282 allocs/op",
            "extra": "477 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2507949,
            "unit": "ns/op",
            "extra": "477 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 128967,
            "unit": "B/op",
            "extra": "477 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1282,
            "unit": "allocs/op",
            "extra": "477 times\n4 procs"
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
        "date": 1763657631845,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2420789,
            "unit": "ns/op\t   87730 B/op\t     764 allocs/op",
            "extra": "483 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2420789,
            "unit": "ns/op",
            "extra": "483 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 87730,
            "unit": "B/op",
            "extra": "483 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 764,
            "unit": "allocs/op",
            "extra": "483 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 951472,
            "unit": "ns/op\t   81175 B/op\t     673 allocs/op",
            "extra": "1294 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 951472,
            "unit": "ns/op",
            "extra": "1294 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 81175,
            "unit": "B/op",
            "extra": "1294 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 673,
            "unit": "allocs/op",
            "extra": "1294 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2795466,
            "unit": "ns/op\t  128888 B/op\t    1283 allocs/op",
            "extra": "428 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2795466,
            "unit": "ns/op",
            "extra": "428 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 128888,
            "unit": "B/op",
            "extra": "428 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1283,
            "unit": "allocs/op",
            "extra": "428 times\n4 procs"
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
        "date": 1763661793759,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2141293,
            "unit": "ns/op\t   86033 B/op\t     659 allocs/op",
            "extra": "572 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2141293,
            "unit": "ns/op",
            "extra": "572 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 86033,
            "unit": "B/op",
            "extra": "572 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 659,
            "unit": "allocs/op",
            "extra": "572 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 836953,
            "unit": "ns/op\t   81139 B/op\t     627 allocs/op",
            "extra": "1383 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 836953,
            "unit": "ns/op",
            "extra": "1383 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 81139,
            "unit": "B/op",
            "extra": "1383 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 627,
            "unit": "allocs/op",
            "extra": "1383 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2465062,
            "unit": "ns/op\t  128511 B/op\t    1192 allocs/op",
            "extra": "487 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2465062,
            "unit": "ns/op",
            "extra": "487 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 128511,
            "unit": "B/op",
            "extra": "487 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1192,
            "unit": "allocs/op",
            "extra": "487 times\n4 procs"
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
        "date": 1764259956685,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2638709,
            "unit": "ns/op\t   86287 B/op\t     660 allocs/op",
            "extra": "498 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2638709,
            "unit": "ns/op",
            "extra": "498 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 86287,
            "unit": "B/op",
            "extra": "498 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 660,
            "unit": "allocs/op",
            "extra": "498 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 855679,
            "unit": "ns/op\t   81133 B/op\t     627 allocs/op",
            "extra": "1395 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 855679,
            "unit": "ns/op",
            "extra": "1395 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 81133,
            "unit": "B/op",
            "extra": "1395 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 627,
            "unit": "allocs/op",
            "extra": "1395 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2657554,
            "unit": "ns/op\t  128932 B/op\t    1192 allocs/op",
            "extra": "459 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2657554,
            "unit": "ns/op",
            "extra": "459 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 128932,
            "unit": "B/op",
            "extra": "459 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1192,
            "unit": "allocs/op",
            "extra": "459 times\n4 procs"
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
          "id": "74c56eea19523b33924214d38372c4093f87408f",
          "message": "Merge pull request #2271 from gofiber/dependabot/go_modules/clickhouse/google-modules-030dbd2da6\n\nchore(deps): bump the google-modules group across 9 directories with 1 update",
          "timestamp": "2025-11-27T11:34:23-05:00",
          "tree_id": "7a9b91b017f52605e93179de3bf0f4071cc88fc0",
          "url": "https://github.com/gofiber/storage/commit/74c56eea19523b33924214d38372c4093f87408f"
        },
        "date": 1764261335783,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2585548,
            "unit": "ns/op\t   87230 B/op\t     660 allocs/op",
            "extra": "508 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2585548,
            "unit": "ns/op",
            "extra": "508 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 87230,
            "unit": "B/op",
            "extra": "508 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 660,
            "unit": "allocs/op",
            "extra": "508 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 861060,
            "unit": "ns/op\t   81141 B/op\t     627 allocs/op",
            "extra": "1380 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 861060,
            "unit": "ns/op",
            "extra": "1380 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 81141,
            "unit": "B/op",
            "extra": "1380 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 627,
            "unit": "allocs/op",
            "extra": "1380 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2693614,
            "unit": "ns/op\t  129717 B/op\t    1192 allocs/op",
            "extra": "445 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2693614,
            "unit": "ns/op",
            "extra": "445 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 129717,
            "unit": "B/op",
            "extra": "445 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1192,
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
          "id": "7d9c9a92c643fe7ea3dc32d8bbaedfe69d0ad4ce",
          "message": "Merge pull request #2281 from gofiber/dependabot/go_modules/dynamodb/aws-modules-bedd97178e\n\nchore(deps): bump the aws-modules group across 2 directories with 11 updates",
          "timestamp": "2025-11-27T18:00:21+01:00",
          "tree_id": "2f1d11d6af85d41ba78a6f277c15a5bb91dc569c",
          "url": "https://github.com/gofiber/storage/commit/7d9c9a92c643fe7ea3dc32d8bbaedfe69d0ad4ce"
        },
        "date": 1764262893940,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2576183,
            "unit": "ns/op\t   86599 B/op\t     662 allocs/op",
            "extra": "494 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2576183,
            "unit": "ns/op",
            "extra": "494 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 86599,
            "unit": "B/op",
            "extra": "494 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 662,
            "unit": "allocs/op",
            "extra": "494 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 885946,
            "unit": "ns/op\t   81176 B/op\t     629 allocs/op",
            "extra": "1435 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 885946,
            "unit": "ns/op",
            "extra": "1435 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 81176,
            "unit": "B/op",
            "extra": "1435 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 629,
            "unit": "allocs/op",
            "extra": "1435 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2789847,
            "unit": "ns/op\t  129236 B/op\t    1196 allocs/op",
            "extra": "404 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2789847,
            "unit": "ns/op",
            "extra": "404 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 129236,
            "unit": "B/op",
            "extra": "404 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1196,
            "unit": "allocs/op",
            "extra": "404 times\n4 procs"
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
          "id": "fe6223a5a674152def966c2529aaabf5192b9749",
          "message": "Merge pull request #2313 from gofiber/dependabot/go_modules/dynamodb/aws-modules-435c11aac8\n\nchore(deps): bump the aws-modules group across 2 directories with 23 updates",
          "timestamp": "2025-12-04T08:52:27+01:00",
          "tree_id": "98242ecbd05e416c408f416a76ba19538761e968",
          "url": "https://github.com/gofiber/storage/commit/fe6223a5a674152def966c2529aaabf5192b9749"
        },
        "date": 1764834821750,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2276215,
            "unit": "ns/op\t   79168 B/op\t     612 allocs/op",
            "extra": "546 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2276215,
            "unit": "ns/op",
            "extra": "546 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 79168,
            "unit": "B/op",
            "extra": "546 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 612,
            "unit": "allocs/op",
            "extra": "546 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 848534,
            "unit": "ns/op\t   74465 B/op\t     583 allocs/op",
            "extra": "1424 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 848534,
            "unit": "ns/op",
            "extra": "1424 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 74465,
            "unit": "B/op",
            "extra": "1424 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 583,
            "unit": "allocs/op",
            "extra": "1424 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2553286,
            "unit": "ns/op\t  114908 B/op\t    1100 allocs/op",
            "extra": "486 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2553286,
            "unit": "ns/op",
            "extra": "486 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 114908,
            "unit": "B/op",
            "extra": "486 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1100,
            "unit": "allocs/op",
            "extra": "486 times\n4 procs"
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
          "id": "0aa10822466cd272f02fdf12a49421fec5d645fa",
          "message": "Merge pull request #2321 from gofiber/dependabot/go_modules/dynamodb/aws-modules-742aed4fe9\n\nchore(deps): bump the aws-modules group across 2 directories with 20 updates",
          "timestamp": "2025-12-09T08:50:07+01:00",
          "tree_id": "9214e55a7ab47b9d05822708ac912466c0d9977c",
          "url": "https://github.com/gofiber/storage/commit/0aa10822466cd272f02fdf12a49421fec5d645fa"
        },
        "date": 1765266683274,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2501229,
            "unit": "ns/op\t   78555 B/op\t     611 allocs/op",
            "extra": "488 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2501229,
            "unit": "ns/op",
            "extra": "488 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 78555,
            "unit": "B/op",
            "extra": "488 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 611,
            "unit": "allocs/op",
            "extra": "488 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 833135,
            "unit": "ns/op\t   74462 B/op\t     583 allocs/op",
            "extra": "1449 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 833135,
            "unit": "ns/op",
            "extra": "1449 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 74462,
            "unit": "B/op",
            "extra": "1449 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 583,
            "unit": "allocs/op",
            "extra": "1449 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2700331,
            "unit": "ns/op\t  114544 B/op\t    1100 allocs/op",
            "extra": "426 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2700331,
            "unit": "ns/op",
            "extra": "426 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 114544,
            "unit": "B/op",
            "extra": "426 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1100,
            "unit": "allocs/op",
            "extra": "426 times\n4 procs"
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
        "date": 1765267672728,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2259455,
            "unit": "ns/op\t   78572 B/op\t     611 allocs/op",
            "extra": "548 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2259455,
            "unit": "ns/op",
            "extra": "548 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 78572,
            "unit": "B/op",
            "extra": "548 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 611,
            "unit": "allocs/op",
            "extra": "548 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 842218,
            "unit": "ns/op\t   74502 B/op\t     583 allocs/op",
            "extra": "1512 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 842218,
            "unit": "ns/op",
            "extra": "1512 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 74502,
            "unit": "B/op",
            "extra": "1512 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 583,
            "unit": "allocs/op",
            "extra": "1512 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2401072,
            "unit": "ns/op\t  114820 B/op\t    1100 allocs/op",
            "extra": "501 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2401072,
            "unit": "ns/op",
            "extra": "501 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 114820,
            "unit": "B/op",
            "extra": "501 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1100,
            "unit": "allocs/op",
            "extra": "501 times\n4 procs"
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
          "id": "cafa8ab37eb41f057badfac2df5fe90b774124c8",
          "message": "Merge pull request #2324 from gofiber/dependabot/go_modules/dynamodb/aws-modules-85c0443045\n\nchore(deps): bump the aws-modules group across 2 directories with 8 updates",
          "timestamp": "2025-12-10T08:26:14+01:00",
          "tree_id": "b7fc0a436a325f63465789c03e9aa397f10b16e7",
          "url": "https://github.com/gofiber/storage/commit/cafa8ab37eb41f057badfac2df5fe90b774124c8"
        },
        "date": 1765351644677,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2617564,
            "unit": "ns/op\t   78799 B/op\t     611 allocs/op",
            "extra": "438 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2617564,
            "unit": "ns/op",
            "extra": "438 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 78799,
            "unit": "B/op",
            "extra": "438 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 611,
            "unit": "allocs/op",
            "extra": "438 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 839446,
            "unit": "ns/op\t   74459 B/op\t     583 allocs/op",
            "extra": "1456 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 839446,
            "unit": "ns/op",
            "extra": "1456 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 74459,
            "unit": "B/op",
            "extra": "1456 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 583,
            "unit": "allocs/op",
            "extra": "1456 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2704744,
            "unit": "ns/op\t  114507 B/op\t    1100 allocs/op",
            "extra": "438 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2704744,
            "unit": "ns/op",
            "extra": "438 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 114507,
            "unit": "B/op",
            "extra": "438 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1100,
            "unit": "allocs/op",
            "extra": "438 times\n4 procs"
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
        "date": 1765439836469,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2310405,
            "unit": "ns/op\t   79005 B/op\t     611 allocs/op",
            "extra": "529 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2310405,
            "unit": "ns/op",
            "extra": "529 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 79005,
            "unit": "B/op",
            "extra": "529 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 611,
            "unit": "allocs/op",
            "extra": "529 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 871086,
            "unit": "ns/op\t   74463 B/op\t     583 allocs/op",
            "extra": "1387 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 871086,
            "unit": "ns/op",
            "extra": "1387 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 74463,
            "unit": "B/op",
            "extra": "1387 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 583,
            "unit": "allocs/op",
            "extra": "1387 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2646052,
            "unit": "ns/op\t  114566 B/op\t    1100 allocs/op",
            "extra": "464 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2646052,
            "unit": "ns/op",
            "extra": "464 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 114566,
            "unit": "B/op",
            "extra": "464 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1100,
            "unit": "allocs/op",
            "extra": "464 times\n4 procs"
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
          "id": "ab58dded1476e2de91221a3440c474bf1a3ff4c0",
          "message": "Merge pull request #2357 from gofiber/dependabot/go_modules/s3/aws-modules-25f9cd5d7b\n\nchore(deps): bump the aws-modules group across 1 directory with 2 updates",
          "timestamp": "2025-12-16T08:16:55+01:00",
          "tree_id": "4686025ac8e086aeef67e1c040ec1c7e2db0c35e",
          "url": "https://github.com/gofiber/storage/commit/ab58dded1476e2de91221a3440c474bf1a3ff4c0"
        },
        "date": 1765869489600,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2606822,
            "unit": "ns/op\t   79152 B/op\t     603 allocs/op",
            "extra": "411 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2606822,
            "unit": "ns/op",
            "extra": "411 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 79152,
            "unit": "B/op",
            "extra": "411 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 603,
            "unit": "allocs/op",
            "extra": "411 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 832780,
            "unit": "ns/op\t   74367 B/op\t     576 allocs/op",
            "extra": "1441 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 832780,
            "unit": "ns/op",
            "extra": "1441 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 74367,
            "unit": "B/op",
            "extra": "1441 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 576,
            "unit": "allocs/op",
            "extra": "1441 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2952145,
            "unit": "ns/op\t  114052 B/op\t    1085 allocs/op",
            "extra": "423 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2952145,
            "unit": "ns/op",
            "extra": "423 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 114052,
            "unit": "B/op",
            "extra": "423 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1085,
            "unit": "allocs/op",
            "extra": "423 times\n4 procs"
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
          "id": "8a76eb68c836c8b2c00c41f36b90a599787f7256",
          "message": "Merge pull request #2359 from gofiber/dependabot/go_modules/dynamodb/aws-modules-9ed390b56b\n\nchore(deps): bump the aws-modules group across 2 directories with 4 updates",
          "timestamp": "2025-12-17T08:27:57+01:00",
          "tree_id": "4d43a00926d6956fa976520ce6687ffcd2c307b9",
          "url": "https://github.com/gofiber/storage/commit/8a76eb68c836c8b2c00c41f36b90a599787f7256"
        },
        "date": 1765956566319,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2141813,
            "unit": "ns/op\t   79141 B/op\t     603 allocs/op",
            "extra": "568 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2141813,
            "unit": "ns/op",
            "extra": "568 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 79141,
            "unit": "B/op",
            "extra": "568 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 603,
            "unit": "allocs/op",
            "extra": "568 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 865589,
            "unit": "ns/op\t   74357 B/op\t     576 allocs/op",
            "extra": "1399 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 865589,
            "unit": "ns/op",
            "extra": "1399 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 74357,
            "unit": "B/op",
            "extra": "1399 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 576,
            "unit": "allocs/op",
            "extra": "1399 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2679036,
            "unit": "ns/op\t  114049 B/op\t    1085 allocs/op",
            "extra": "426 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2679036,
            "unit": "ns/op",
            "extra": "426 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 114049,
            "unit": "B/op",
            "extra": "426 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1085,
            "unit": "allocs/op",
            "extra": "426 times\n4 procs"
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
        "date": 1766043850120,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2200156,
            "unit": "ns/op\t   78872 B/op\t     603 allocs/op",
            "extra": "572 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2200156,
            "unit": "ns/op",
            "extra": "572 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 78872,
            "unit": "B/op",
            "extra": "572 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 603,
            "unit": "allocs/op",
            "extra": "572 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 864040,
            "unit": "ns/op\t   74353 B/op\t     576 allocs/op",
            "extra": "1425 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 864040,
            "unit": "ns/op",
            "extra": "1425 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 74353,
            "unit": "B/op",
            "extra": "1425 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 576,
            "unit": "allocs/op",
            "extra": "1425 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2529629,
            "unit": "ns/op\t  113248 B/op\t    1085 allocs/op",
            "extra": "488 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2529629,
            "unit": "ns/op",
            "extra": "488 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 113248,
            "unit": "B/op",
            "extra": "488 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1085,
            "unit": "allocs/op",
            "extra": "488 times\n4 procs"
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
          "id": "34b959efcbc0f6a8d17bd1c524dda167c9206f93",
          "message": "Merge pull request #2372 from gofiber/dependabot/go_modules/s3/aws-modules-92da416cd8\n\nchore(deps): bump the aws-modules group across 1 directory with 2 updates",
          "timestamp": "2025-12-24T08:17:01+01:00",
          "tree_id": "a166a0e7a08f2f979d9fba97693aab79dc374beb",
          "url": "https://github.com/gofiber/storage/commit/34b959efcbc0f6a8d17bd1c524dda167c9206f93"
        },
        "date": 1766560703058,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2442556,
            "unit": "ns/op\t   78896 B/op\t     603 allocs/op",
            "extra": "504 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2442556,
            "unit": "ns/op",
            "extra": "504 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 78896,
            "unit": "B/op",
            "extra": "504 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 603,
            "unit": "allocs/op",
            "extra": "504 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 857072,
            "unit": "ns/op\t   74346 B/op\t     576 allocs/op",
            "extra": "1375 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 857072,
            "unit": "ns/op",
            "extra": "1375 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 74346,
            "unit": "B/op",
            "extra": "1375 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 576,
            "unit": "allocs/op",
            "extra": "1375 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2738861,
            "unit": "ns/op\t  113190 B/op\t    1085 allocs/op",
            "extra": "452 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2738861,
            "unit": "ns/op",
            "extra": "452 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 113190,
            "unit": "B/op",
            "extra": "452 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1085,
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
          "id": "4228d64f25681541e9ceb708ede695e632159d4e",
          "message": "Merge pull request #2396 from gofiber/dependabot/go_modules/dynamodb/aws-modules-76fc9241a5\n\nchore(deps): bump the aws-modules group across 2 directories with 20 updates",
          "timestamp": "2026-01-12T09:24:27+01:00",
          "tree_id": "7ef8e27bd1614e4b3a2a885bf8b756f6ec292fb8",
          "url": "https://github.com/gofiber/storage/commit/4228d64f25681541e9ceb708ede695e632159d4e"
        },
        "date": 1768206341840,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2566238,
            "unit": "ns/op\t   79504 B/op\t     603 allocs/op",
            "extra": "508 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2566238,
            "unit": "ns/op",
            "extra": "508 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 79504,
            "unit": "B/op",
            "extra": "508 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 603,
            "unit": "allocs/op",
            "extra": "508 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 921823,
            "unit": "ns/op\t   74344 B/op\t     576 allocs/op",
            "extra": "1383 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 921823,
            "unit": "ns/op",
            "extra": "1383 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 74344,
            "unit": "B/op",
            "extra": "1383 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 576,
            "unit": "allocs/op",
            "extra": "1383 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2708395,
            "unit": "ns/op\t  113503 B/op\t    1085 allocs/op",
            "extra": "446 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2708395,
            "unit": "ns/op",
            "extra": "446 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 113503,
            "unit": "B/op",
            "extra": "446 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1085,
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
          "id": "2581f5a768a521091fd4dedab76186aff359f796",
          "message": "Merge pull request #2395 from gofiber/dependabot/go_modules/aerospike/golang-modules-305631bd7c",
          "timestamp": "2026-01-14T08:37:37+01:00",
          "tree_id": "699ec6907f378c93061af14d650b2f83e5797ac7",
          "url": "https://github.com/gofiber/storage/commit/2581f5a768a521091fd4dedab76186aff359f796"
        },
        "date": 1768376682772,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2406656,
            "unit": "ns/op\t   79035 B/op\t     603 allocs/op",
            "extra": "524 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2406656,
            "unit": "ns/op",
            "extra": "524 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 79035,
            "unit": "B/op",
            "extra": "524 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 603,
            "unit": "allocs/op",
            "extra": "524 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 907063,
            "unit": "ns/op\t   74359 B/op\t     576 allocs/op",
            "extra": "1352 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 907063,
            "unit": "ns/op",
            "extra": "1352 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 74359,
            "unit": "B/op",
            "extra": "1352 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 576,
            "unit": "allocs/op",
            "extra": "1352 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2649552,
            "unit": "ns/op\t  113272 B/op\t    1085 allocs/op",
            "extra": "451 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2649552,
            "unit": "ns/op",
            "extra": "451 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 113272,
            "unit": "B/op",
            "extra": "451 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1085,
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
          "id": "2fa4e61a61ab14f37699d47fafabedacd070234b",
          "message": "Merge pull request #2370 from gofiber/dependabot/go_modules/aerospike/docker-modules-78d0d09041",
          "timestamp": "2026-01-14T08:37:59+01:00",
          "tree_id": "f44a86ad4d3dc479cc163c5b675bf9f89808fc56",
          "url": "https://github.com/gofiber/storage/commit/2fa4e61a61ab14f37699d47fafabedacd070234b"
        },
        "date": 1768377331228,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2554947,
            "unit": "ns/op\t   78591 B/op\t     603 allocs/op",
            "extra": "481 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2554947,
            "unit": "ns/op",
            "extra": "481 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 78591,
            "unit": "B/op",
            "extra": "481 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 603,
            "unit": "allocs/op",
            "extra": "481 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 883103,
            "unit": "ns/op\t   74361 B/op\t     576 allocs/op",
            "extra": "1280 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 883103,
            "unit": "ns/op",
            "extra": "1280 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 74361,
            "unit": "B/op",
            "extra": "1280 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 576,
            "unit": "allocs/op",
            "extra": "1280 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2634313,
            "unit": "ns/op\t  113117 B/op\t    1085 allocs/op",
            "extra": "460 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2634313,
            "unit": "ns/op",
            "extra": "460 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 113117,
            "unit": "B/op",
            "extra": "460 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1085,
            "unit": "allocs/op",
            "extra": "460 times\n4 procs"
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
        "date": 1768379316210,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2462196,
            "unit": "ns/op\t   79194 B/op\t     603 allocs/op",
            "extra": "481 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2462196,
            "unit": "ns/op",
            "extra": "481 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 79194,
            "unit": "B/op",
            "extra": "481 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 603,
            "unit": "allocs/op",
            "extra": "481 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 933406,
            "unit": "ns/op\t   74357 B/op\t     576 allocs/op",
            "extra": "1293 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 933406,
            "unit": "ns/op",
            "extra": "1293 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 74357,
            "unit": "B/op",
            "extra": "1293 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 576,
            "unit": "allocs/op",
            "extra": "1293 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2822813,
            "unit": "ns/op\t  112853 B/op\t    1085 allocs/op",
            "extra": "420 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2822813,
            "unit": "ns/op",
            "extra": "420 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 112853,
            "unit": "B/op",
            "extra": "420 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1085,
            "unit": "allocs/op",
            "extra": "420 times\n4 procs"
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
        "date": 1768380196778,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2290166,
            "unit": "ns/op\t   79020 B/op\t     603 allocs/op",
            "extra": "543 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2290166,
            "unit": "ns/op",
            "extra": "543 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 79020,
            "unit": "B/op",
            "extra": "543 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 603,
            "unit": "allocs/op",
            "extra": "543 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 929606,
            "unit": "ns/op\t   74360 B/op\t     576 allocs/op",
            "extra": "1353 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 929606,
            "unit": "ns/op",
            "extra": "1353 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 74360,
            "unit": "B/op",
            "extra": "1353 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 576,
            "unit": "allocs/op",
            "extra": "1353 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2755535,
            "unit": "ns/op\t  113738 B/op\t    1085 allocs/op",
            "extra": "433 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2755535,
            "unit": "ns/op",
            "extra": "433 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 113738,
            "unit": "B/op",
            "extra": "433 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1085,
            "unit": "allocs/op",
            "extra": "433 times\n4 procs"
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
          "id": "2700dd3d474fb69f2a1d15608cbba4abfa11bbcd",
          "message": "Merge pull request #2425 from gofiber/dependabot/go_modules/s3/github.com/sirupsen/logrus-1.9.4\n\nchore(deps): bump github.com/sirupsen/logrus from 1.9.3 to 1.9.4 in /s3",
          "timestamp": "2026-01-16T08:21:20+01:00",
          "tree_id": "ba64d80fc65e32bc7789d4aae814244fb01c1898",
          "url": "https://github.com/gofiber/storage/commit/2700dd3d474fb69f2a1d15608cbba4abfa11bbcd"
        },
        "date": 1768548468657,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2247714,
            "unit": "ns/op\t   78138 B/op\t     603 allocs/op",
            "extra": "556 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2247714,
            "unit": "ns/op",
            "extra": "556 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 78138,
            "unit": "B/op",
            "extra": "556 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 603,
            "unit": "allocs/op",
            "extra": "556 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 865066,
            "unit": "ns/op\t   74368 B/op\t     576 allocs/op",
            "extra": "1402 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 865066,
            "unit": "ns/op",
            "extra": "1402 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 74368,
            "unit": "B/op",
            "extra": "1402 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 576,
            "unit": "allocs/op",
            "extra": "1402 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2574105,
            "unit": "ns/op\t  113947 B/op\t    1085 allocs/op",
            "extra": "466 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2574105,
            "unit": "ns/op",
            "extra": "466 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 113947,
            "unit": "B/op",
            "extra": "466 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1085,
            "unit": "allocs/op",
            "extra": "466 times\n4 procs"
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
        "date": 1768893481151,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2274023,
            "unit": "ns/op\t   79279 B/op\t     603 allocs/op",
            "extra": "524 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2274023,
            "unit": "ns/op",
            "extra": "524 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 79279,
            "unit": "B/op",
            "extra": "524 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 603,
            "unit": "allocs/op",
            "extra": "524 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 930591,
            "unit": "ns/op\t   74354 B/op\t     576 allocs/op",
            "extra": "1327 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 930591,
            "unit": "ns/op",
            "extra": "1327 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 74354,
            "unit": "B/op",
            "extra": "1327 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 576,
            "unit": "allocs/op",
            "extra": "1327 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2655307,
            "unit": "ns/op\t  112681 B/op\t    1084 allocs/op",
            "extra": "433 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2655307,
            "unit": "ns/op",
            "extra": "433 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 112681,
            "unit": "B/op",
            "extra": "433 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1084,
            "unit": "allocs/op",
            "extra": "433 times\n4 procs"
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
          "id": "dc46dd8955e11996ef625174d5d43414710f78b7",
          "message": "Merge pull request #2434 from gofiber/dependabot/go_modules/s3/aws-modules-339dcbcd66\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/feature/s3/manager from 1.20.19 to 1.21.0 in /s3 in the aws-modules group across 1 directory",
          "timestamp": "2026-01-21T08:09:50+01:00",
          "tree_id": "3f059cf0716a260871c416e39dd0befa7c9f262e",
          "url": "https://github.com/gofiber/storage/commit/dc46dd8955e11996ef625174d5d43414710f78b7"
        },
        "date": 1768979464725,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2209730,
            "unit": "ns/op\t   79308 B/op\t     603 allocs/op",
            "extra": "547 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2209730,
            "unit": "ns/op",
            "extra": "547 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 79308,
            "unit": "B/op",
            "extra": "547 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 603,
            "unit": "allocs/op",
            "extra": "547 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 854552,
            "unit": "ns/op\t   74346 B/op\t     576 allocs/op",
            "extra": "1408 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 854552,
            "unit": "ns/op",
            "extra": "1408 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 74346,
            "unit": "B/op",
            "extra": "1408 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 576,
            "unit": "allocs/op",
            "extra": "1408 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2642229,
            "unit": "ns/op\t  114074 B/op\t    1085 allocs/op",
            "extra": "442 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2642229,
            "unit": "ns/op",
            "extra": "442 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 114074,
            "unit": "B/op",
            "extra": "442 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1085,
            "unit": "allocs/op",
            "extra": "442 times\n4 procs"
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
        "date": 1769066260238,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2306150,
            "unit": "ns/op\t   78236 B/op\t     603 allocs/op",
            "extra": "543 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2306150,
            "unit": "ns/op",
            "extra": "543 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 78236,
            "unit": "B/op",
            "extra": "543 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 603,
            "unit": "allocs/op",
            "extra": "543 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 887694,
            "unit": "ns/op\t   74361 B/op\t     576 allocs/op",
            "extra": "1398 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 887694,
            "unit": "ns/op",
            "extra": "1398 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 74361,
            "unit": "B/op",
            "extra": "1398 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 576,
            "unit": "allocs/op",
            "extra": "1398 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2669439,
            "unit": "ns/op\t  113342 B/op\t    1084 allocs/op",
            "extra": "432 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2669439,
            "unit": "ns/op",
            "extra": "432 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 113342,
            "unit": "B/op",
            "extra": "432 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1084,
            "unit": "allocs/op",
            "extra": "432 times\n4 procs"
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
          "id": "3106744ac155e28c096c903f3da9209107739749",
          "message": "Merge pull request #2449 from gofiber/dependabot/go_modules/s3/aws-modules-6869f83064\n\nchore(deps): bump the aws-modules group across 1 directory with 2 updates",
          "timestamp": "2026-01-29T08:10:42+01:00",
          "tree_id": "534afd1f6346bdb274fc5553a86f815347e3ac22",
          "url": "https://github.com/gofiber/storage/commit/3106744ac155e28c096c903f3da9209107739749"
        },
        "date": 1769670715070,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2237082,
            "unit": "ns/op\t   78542 B/op\t     603 allocs/op",
            "extra": "572 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2237082,
            "unit": "ns/op",
            "extra": "572 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 78542,
            "unit": "B/op",
            "extra": "572 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 603,
            "unit": "allocs/op",
            "extra": "572 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 877947,
            "unit": "ns/op\t   74349 B/op\t     576 allocs/op",
            "extra": "1377 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 877947,
            "unit": "ns/op",
            "extra": "1377 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 74349,
            "unit": "B/op",
            "extra": "1377 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 576,
            "unit": "allocs/op",
            "extra": "1377 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2599796,
            "unit": "ns/op\t  113011 B/op\t    1085 allocs/op",
            "extra": "470 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2599796,
            "unit": "ns/op",
            "extra": "470 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 113011,
            "unit": "B/op",
            "extra": "470 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1085,
            "unit": "allocs/op",
            "extra": "470 times\n4 procs"
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
        "date": 1769671158756,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2780043,
            "unit": "ns/op\t   79045 B/op\t     603 allocs/op",
            "extra": "450 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2780043,
            "unit": "ns/op",
            "extra": "450 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 79045,
            "unit": "B/op",
            "extra": "450 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 603,
            "unit": "allocs/op",
            "extra": "450 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 898159,
            "unit": "ns/op\t   74363 B/op\t     576 allocs/op",
            "extra": "1160 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 898159,
            "unit": "ns/op",
            "extra": "1160 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 74363,
            "unit": "B/op",
            "extra": "1160 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 576,
            "unit": "allocs/op",
            "extra": "1160 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2761292,
            "unit": "ns/op\t  113397 B/op\t    1085 allocs/op",
            "extra": "384 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2761292,
            "unit": "ns/op",
            "extra": "384 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 113397,
            "unit": "B/op",
            "extra": "384 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1085,
            "unit": "allocs/op",
            "extra": "384 times\n4 procs"
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
        "date": 1769757407862,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_S3_Set",
            "value": 2139454,
            "unit": "ns/op\t   78858 B/op\t     603 allocs/op",
            "extra": "580 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2139454,
            "unit": "ns/op",
            "extra": "580 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 78858,
            "unit": "B/op",
            "extra": "580 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 603,
            "unit": "allocs/op",
            "extra": "580 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get",
            "value": 814321,
            "unit": "ns/op\t   74345 B/op\t     576 allocs/op",
            "extra": "1504 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 814321,
            "unit": "ns/op",
            "extra": "1504 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 74345,
            "unit": "B/op",
            "extra": "1504 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 576,
            "unit": "allocs/op",
            "extra": "1504 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete",
            "value": 2348041,
            "unit": "ns/op\t  112749 B/op\t    1084 allocs/op",
            "extra": "511 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2348041,
            "unit": "ns/op",
            "extra": "511 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 112749,
            "unit": "B/op",
            "extra": "511 times\n4 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 1084,
            "unit": "allocs/op",
            "extra": "511 times\n4 procs"
          }
        ]
      }
    ]
  }
}