window.BENCHMARK_DATA = {
  "lastUpdate": 1744782279134,
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
      }
    ]
  }
}