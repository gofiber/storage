window.BENCHMARK_DATA = {
  "lastUpdate": 1744359027723,
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
          "id": "5b03e3c2585de6351a01c2e5d098ebdb222c8308",
          "message": "Merge pull request #1574 from mdelapenya/tc-go-adoption-3\n\nfeat: add testcontainers-go tests to DynamoDB and NATS",
          "timestamp": "2025-03-20T14:36:52+01:00",
          "tree_id": "4fbcbe6a6f2161b029f0f7a34e8a5e5b6e067d20",
          "url": "https://github.com/gofiber/storage/commit/5b03e3c2585de6351a01c2e5d098ebdb222c8308"
        },
        "date": 1742477898153,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 9680763592,
            "unit": "ns/op\t 3392896 B/op\t   27674 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 9680763592,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 3392896,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 27674,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1242375,
            "unit": "ns/op\t   34455 B/op\t     460 allocs/op",
            "extra": "810 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1242375,
            "unit": "ns/op",
            "extra": "810 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 34455,
            "unit": "B/op",
            "extra": "810 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 460,
            "unit": "allocs/op",
            "extra": "810 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 1847071840,
            "unit": "ns/op\t 1823432 B/op\t   15361 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 1847071840,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 1823432,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 15361,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "30e6e5ad85267d8ca266e609b4b5e94ec32992f1",
          "message": "Merge pull request #1588 from gofiber/dependabot/go_modules/dynamodb/github.com/stretchr/testify-1.10.0\n\nchore(deps): bump github.com/stretchr/testify from 1.9.0 to 1.10.0 in /dynamodb",
          "timestamp": "2025-03-26T17:54:28+01:00",
          "tree_id": "255789325bd3992b95274f0eef951248a2aa0e57",
          "url": "https://github.com/gofiber/storage/commit/30e6e5ad85267d8ca266e609b4b5e94ec32992f1"
        },
        "date": 1743013645134,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 10829876733,
            "unit": "ns/op\t 3384888 B/op\t   27664 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 10829876733,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 3384888,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 27664,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1277312,
            "unit": "ns/op\t   34495 B/op\t     460 allocs/op",
            "extra": "824 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1277312,
            "unit": "ns/op",
            "extra": "824 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 34495,
            "unit": "B/op",
            "extra": "824 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 460,
            "unit": "allocs/op",
            "extra": "824 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 1866747208,
            "unit": "ns/op\t 1610728 B/op\t   14603 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 1866747208,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 1610728,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 14603,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd4fe07ff393427be4790e30a4d840272f4d0fdf",
          "message": "Merge pull request #1608 from gofiber/dependabot/go_modules/dynamodb/github.com/aws/aws-sdk-go-v2/feature/dynamodb/attributevalue-1.18.8\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/feature/dynamodb/attributevalue from 1.14.10 to 1.18.8 in /dynamodb",
          "timestamp": "2025-03-27T09:07:31+01:00",
          "tree_id": "4d706ad1e434276d530f9c2057e81e97c88608ea",
          "url": "https://github.com/gofiber/storage/commit/cd4fe07ff393427be4790e30a4d840272f4d0fdf"
        },
        "date": 1743063008808,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 11069019029,
            "unit": "ns/op\t 3399056 B/op\t   27967 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 11069019029,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 3399056,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 27967,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1348768,
            "unit": "ns/op\t   36293 B/op\t     497 allocs/op",
            "extra": "787 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1348768,
            "unit": "ns/op",
            "extra": "787 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 36293,
            "unit": "B/op",
            "extra": "787 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 497,
            "unit": "allocs/op",
            "extra": "787 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 1897100598,
            "unit": "ns/op\t 1773656 B/op\t   15629 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 1897100598,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 1773656,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 15629,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1e0b4e416b409efa6d7fb9ddf6b48b34829eda00",
          "message": "Merge pull request #1610 from gofiber/dependabot/go_modules/dynamodb/github.com/aws/aws-sdk-go-v2/credentials-1.17.64\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/credentials from 1.17.35 to 1.17.64 in /dynamodb",
          "timestamp": "2025-03-27T09:15:59+01:00",
          "tree_id": "9583b3382319fd85cd42b1777cf0dff15043cc93",
          "url": "https://github.com/gofiber/storage/commit/1e0b4e416b409efa6d7fb9ddf6b48b34829eda00"
        },
        "date": 1743063576934,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 11080439691,
            "unit": "ns/op\t 3485992 B/op\t   28716 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 11080439691,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 3485992,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 28716,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1288865,
            "unit": "ns/op\t   36486 B/op\t     499 allocs/op",
            "extra": "811 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1288865,
            "unit": "ns/op",
            "extra": "811 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 36486,
            "unit": "B/op",
            "extra": "811 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 499,
            "unit": "allocs/op",
            "extra": "811 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 1832932361,
            "unit": "ns/op\t 1742256 B/op\t   15638 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 1832932361,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 1742256,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 15638,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dd6143892eb24ba54ad87fc9ede7da4ab8b15081",
          "message": "Merge pull request #1611 from gofiber/dependabot/go_modules/dynamodb/github.com/aws/aws-sdk-go-v2/config-1.29.11\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/config from 1.27.37 to 1.29.11 in /dynamodb",
          "timestamp": "2025-03-27T09:21:01+01:00",
          "tree_id": "1a035a04a45f9780d94a009c86c7d15edcf629be",
          "url": "https://github.com/gofiber/storage/commit/dd6143892eb24ba54ad87fc9ede7da4ab8b15081"
        },
        "date": 1743063743672,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 9590894318,
            "unit": "ns/op\t 3426832 B/op\t   27915 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 9590894318,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 3426832,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 27915,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1229247,
            "unit": "ns/op\t   36440 B/op\t     499 allocs/op",
            "extra": "842 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1229247,
            "unit": "ns/op",
            "extra": "842 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 36440,
            "unit": "B/op",
            "extra": "842 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 499,
            "unit": "allocs/op",
            "extra": "842 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 1749580518,
            "unit": "ns/op\t 1620704 B/op\t   14835 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 1749580518,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 1620704,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 14835,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b136a5b56e5a7445bc89dd8385a0692f996507da",
          "message": "Merge pull request #1620 from gofiber/dependabot/go_modules/dynamodb/github.com/aws/aws-sdk-go-v2/credentials-1.17.65\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/credentials from 1.17.64 to 1.17.65 in /dynamodb",
          "timestamp": "2025-03-28T08:39:25+01:00",
          "tree_id": "5060b3f3142462da9744214029d11e4ca838e96b",
          "url": "https://github.com/gofiber/storage/commit/b136a5b56e5a7445bc89dd8385a0692f996507da"
        },
        "date": 1743147639133,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 10980228578,
            "unit": "ns/op\t 3223216 B/op\t   26507 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 10980228578,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 3223216,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 26507,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1275077,
            "unit": "ns/op\t   36359 B/op\t     499 allocs/op",
            "extra": "817 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1275077,
            "unit": "ns/op",
            "extra": "817 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 36359,
            "unit": "B/op",
            "extra": "817 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 499,
            "unit": "allocs/op",
            "extra": "817 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 1796321421,
            "unit": "ns/op\t 1816560 B/op\t   15655 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 1796321421,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 1816560,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 15655,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1744190374648,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 12537904099,
            "unit": "ns/op\t 3451752 B/op\t   28049 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 12537904099,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 3451752,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 28049,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1228371,
            "unit": "ns/op\t   37025 B/op\t     505 allocs/op",
            "extra": "837 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1228371,
            "unit": "ns/op",
            "extra": "837 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 37025,
            "unit": "B/op",
            "extra": "837 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 505,
            "unit": "allocs/op",
            "extra": "837 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 1763494371,
            "unit": "ns/op\t 1840864 B/op\t   14998 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 1763494371,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 1840864,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 14998,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2656670d5418d0b2c0ecf60cbd5386603eb616a9",
          "message": "Merge pull request #1641 from gofiber/dependabot/go_modules/dynamodb/github.com/aws/aws-sdk-go-v2/service/dynamodb-1.42.2\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/service/dynamodb from 1.42.0 to 1.42.2 in /dynamodb",
          "timestamp": "2025-04-10T09:41:14+02:00",
          "tree_id": "6784d5959d7e58c801063932e5cd0be4cdd9a882",
          "url": "https://github.com/gofiber/storage/commit/2656670d5418d0b2c0ecf60cbd5386603eb616a9"
        },
        "date": 1744270939895,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 10297644565,
            "unit": "ns/op\t 3211104 B/op\t   26417 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 10297644565,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 3211104,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 26417,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1270925,
            "unit": "ns/op\t   36984 B/op\t     505 allocs/op",
            "extra": "808 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1270925,
            "unit": "ns/op",
            "extra": "808 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 36984,
            "unit": "B/op",
            "extra": "808 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 505,
            "unit": "allocs/op",
            "extra": "808 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 1837047662,
            "unit": "ns/op\t 1699560 B/op\t   15800 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 1837047662,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 1699560,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 15800,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "71aa8ed852f069ab9c82e5f1f5b2ecc6c1aaab3b",
          "message": "Merge pull request #1642 from gofiber/dependabot/go_modules/dynamodb/github.com/aws/aws-sdk-go-v2/credentials-1.17.66\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/credentials from 1.17.65 to 1.17.66 in /dynamodb",
          "timestamp": "2025-04-10T09:42:14+02:00",
          "tree_id": "6fc22cb7ae1d963a1a1fe9e90c7edb3392a08dd7",
          "url": "https://github.com/gofiber/storage/commit/71aa8ed852f069ab9c82e5f1f5b2ecc6c1aaab3b"
        },
        "date": 1744270994682,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 9946852100,
            "unit": "ns/op\t 3407320 B/op\t   27979 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 9946852100,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 3407320,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 27979,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1165675,
            "unit": "ns/op\t   36917 B/op\t     505 allocs/op",
            "extra": "861 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1165675,
            "unit": "ns/op",
            "extra": "861 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 36917,
            "unit": "B/op",
            "extra": "861 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 505,
            "unit": "allocs/op",
            "extra": "861 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 1764569229,
            "unit": "ns/op\t 1710696 B/op\t   14950 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 1764569229,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 1710696,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 14950,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0e68f3600895b3112461dfbc23584e796bfd44d9",
          "message": "Merge pull request #1643 from gofiber/dependabot/go_modules/dynamodb/github.com/aws/aws-sdk-go-v2/feature/dynamodb/attributevalue-1.18.10\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/feature/dynamodb/attributevalue from 1.18.8 to 1.18.10 in /dynamodb",
          "timestamp": "2025-04-10T12:56:25+02:00",
          "tree_id": "7ac466428998d7d5110ffb0590d7dbf98a62212b",
          "url": "https://github.com/gofiber/storage/commit/0e68f3600895b3112461dfbc23584e796bfd44d9"
        },
        "date": 1744282660658,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 10350775208,
            "unit": "ns/op\t 3544024 B/op\t   28001 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 10350775208,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 3544024,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 28001,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1273093,
            "unit": "ns/op\t   36504 B/op\t     505 allocs/op",
            "extra": "806 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1273093,
            "unit": "ns/op",
            "extra": "806 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 36504,
            "unit": "B/op",
            "extra": "806 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 505,
            "unit": "allocs/op",
            "extra": "806 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 1848079001,
            "unit": "ns/op\t 1756056 B/op\t   15806 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 1848079001,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 1756056,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 15806,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4c57f3872e2f4c30cfdf1382b902b731c187b273",
          "message": "Merge pull request #1644 from gofiber/dependabot/go_modules/dynamodb/github.com/aws/aws-sdk-go-v2/config-1.29.13\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/config from 1.29.11 to 1.29.13 in /dynamodb",
          "timestamp": "2025-04-10T12:58:52+02:00",
          "tree_id": "9dd7a9dac1c6e5f9889947082ceb15cf0500e08e",
          "url": "https://github.com/gofiber/storage/commit/4c57f3872e2f4c30cfdf1382b902b731c187b273"
        },
        "date": 1744282791446,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 11868250500,
            "unit": "ns/op\t 3488184 B/op\t   28004 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 11868250500,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 3488184,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 28004,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1272993,
            "unit": "ns/op\t   37286 B/op\t     505 allocs/op",
            "extra": "816 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1272993,
            "unit": "ns/op",
            "extra": "816 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 37286,
            "unit": "B/op",
            "extra": "816 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 505,
            "unit": "allocs/op",
            "extra": "816 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 1810503920,
            "unit": "ns/op\t 1757160 B/op\t   15839 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 1810503920,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 1757160,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 15839,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ebd3e90db56263fe31dec584e3bf99e7eef4f8f2",
          "message": "Merge pull request #1653 from gofiber/dependabot/go_modules/dynamodb/github.com/aws/aws-sdk-go-v2/service/dynamodb-1.42.3\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/service/dynamodb from 1.42.2 to 1.42.3 in /dynamodb",
          "timestamp": "2025-04-11T10:05:23+02:00",
          "tree_id": "d0152c26e366c21edbfd5d03a9bb2cb818033c26",
          "url": "https://github.com/gofiber/storage/commit/ebd3e90db56263fe31dec584e3bf99e7eef4f8f2"
        },
        "date": 1744358784288,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 12002277810,
            "unit": "ns/op\t 3368616 B/op\t   27978 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 12002277810,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 3368616,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 27978,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1246877,
            "unit": "ns/op\t   36890 B/op\t     505 allocs/op",
            "extra": "842 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1246877,
            "unit": "ns/op",
            "extra": "842 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 36890,
            "unit": "B/op",
            "extra": "842 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 505,
            "unit": "allocs/op",
            "extra": "842 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 1838042057,
            "unit": "ns/op\t 1816144 B/op\t   15809 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 1838042057,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 1816144,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 15809,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7ac8a3ed25f94f35f8973bc088e0a501218739f1",
          "message": "Merge pull request #1654 from gofiber/dependabot/go_modules/dynamodb/github.com/aws/aws-sdk-go-v2/config-1.29.14\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/config from 1.29.13 to 1.29.14 in /dynamodb",
          "timestamp": "2025-04-11T10:06:17+02:00",
          "tree_id": "dee52eb1a9adb2d084fe1a813da83bac124f1474",
          "url": "https://github.com/gofiber/storage/commit/7ac8a3ed25f94f35f8973bc088e0a501218739f1"
        },
        "date": 1744358828414,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 9214076630,
            "unit": "ns/op\t 3406664 B/op\t   27175 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 9214076630,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 3406664,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 27175,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1233710,
            "unit": "ns/op\t   37209 B/op\t     505 allocs/op",
            "extra": "849 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1233710,
            "unit": "ns/op",
            "extra": "849 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 37209,
            "unit": "B/op",
            "extra": "849 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 505,
            "unit": "allocs/op",
            "extra": "849 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 1775227859,
            "unit": "ns/op\t 1705128 B/op\t   14959 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 1775227859,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 1705128,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 14959,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "18555af9ceea03f63ca23dc2e95a71efd10ba8ea",
          "message": "Merge pull request #1655 from gofiber/dependabot/go_modules/dynamodb/github.com/aws/aws-sdk-go-v2/feature/dynamodb/attributevalue-1.18.11\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/feature/dynamodb/attributevalue from 1.18.10 to 1.18.11 in /dynamodb",
          "timestamp": "2025-04-11T10:09:05+02:00",
          "tree_id": "b01002ab2c4c33971c2ec9080ca1585a59ae2060",
          "url": "https://github.com/gofiber/storage/commit/18555af9ceea03f63ca23dc2e95a71efd10ba8ea"
        },
        "date": 1744359019501,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 11093163085,
            "unit": "ns/op\t 3512120 B/op\t   28010 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 11093163085,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 3512120,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 28010,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1238970,
            "unit": "ns/op\t   37007 B/op\t     505 allocs/op",
            "extra": "836 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1238970,
            "unit": "ns/op",
            "extra": "836 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 37007,
            "unit": "B/op",
            "extra": "836 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 505,
            "unit": "allocs/op",
            "extra": "836 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 1719008608,
            "unit": "ns/op\t 1567136 B/op\t   14150 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 1719008608,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 1567136,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 14150,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          }
        ]
      }
    ]
  }
}