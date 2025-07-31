window.BENCHMARK_DATA = {
  "lastUpdate": 1753947624659,
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
      }
    ]
  }
}