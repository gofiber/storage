window.BENCHMARK_DATA = {
  "lastUpdate": 1749628414246,
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
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ab54fa3fea735a65e8429c1663458a6e65600f4b",
          "message": "Merge pull request #1666 from gofiber/dependabot/go_modules/dynamodb/github.com/aws/aws-sdk-go-v2/feature/dynamodb/attributevalue-1.18.12\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/feature/dynamodb/attributevalue from 1.18.11 to 1.18.12 in /dynamodb",
          "timestamp": "2025-04-14T09:23:00+02:00",
          "tree_id": "ed1c100c58f66d4a36e2952b6799b5af7d59d5f8",
          "url": "https://github.com/gofiber/storage/commit/ab54fa3fea735a65e8429c1663458a6e65600f4b"
        },
        "date": 1744615438987,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 9571812245,
            "unit": "ns/op\t 3307608 B/op\t   27133 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 9571812245,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 3307608,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 27133,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1228537,
            "unit": "ns/op\t   36959 B/op\t     505 allocs/op",
            "extra": "837 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1228537,
            "unit": "ns/op",
            "extra": "837 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 36959,
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
            "value": 2606857397,
            "unit": "ns/op\t 1171472 B/op\t   10264 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 2606857397,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 1171472,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 10264,
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
          "id": "e21a9065b52622c9e1e1ad671a7da27ecba91f90",
          "message": "Merge pull request #1672 from mdelapenya/testing-patterns\n\nchore(testing): use require in tests",
          "timestamp": "2025-04-16T07:40:42+02:00",
          "tree_id": "54a79e7c0ee58dbd297fbf52b9ba836e7b4965d9",
          "url": "https://github.com/gofiber/storage/commit/e21a9065b52622c9e1e1ad671a7da27ecba91f90"
        },
        "date": 1744782286829,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 3563606,
            "unit": "ns/op\t   35416 B/op\t     476 allocs/op",
            "extra": "315 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 3563606,
            "unit": "ns/op",
            "extra": "315 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 35416,
            "unit": "B/op",
            "extra": "315 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 476,
            "unit": "allocs/op",
            "extra": "315 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1253819,
            "unit": "ns/op\t   36982 B/op\t     504 allocs/op",
            "extra": "825 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1253819,
            "unit": "ns/op",
            "extra": "825 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 36982,
            "unit": "B/op",
            "extra": "825 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 504,
            "unit": "allocs/op",
            "extra": "825 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 7131266,
            "unit": "ns/op\t   70337 B/op\t     949 allocs/op",
            "extra": "157 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 7131266,
            "unit": "ns/op",
            "extra": "157 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 70337,
            "unit": "B/op",
            "extra": "157 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 949,
            "unit": "allocs/op",
            "extra": "157 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2ad757cb5cc8b15799094e0ece371ebc4e292af6",
          "message": "Merge pull request #1686 from gofiber/dependabot/go_modules/dynamodb/github.com/aws/aws-sdk-go-v2/service/dynamodb-1.43.0\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/service/dynamodb from 1.42.4 to 1.43.0 in /dynamodb",
          "timestamp": "2025-04-25T09:38:49+02:00",
          "tree_id": "e0d84075364aaec814cd93c6d24fe3b0945c78ed",
          "url": "https://github.com/gofiber/storage/commit/2ad757cb5cc8b15799094e0ece371ebc4e292af6"
        },
        "date": 1745566826730,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 3934704,
            "unit": "ns/op\t   35298 B/op\t     476 allocs/op",
            "extra": "290 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 3934704,
            "unit": "ns/op",
            "extra": "290 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 35298,
            "unit": "B/op",
            "extra": "290 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 476,
            "unit": "allocs/op",
            "extra": "290 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1510760,
            "unit": "ns/op\t   37274 B/op\t     504 allocs/op",
            "extra": "706 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1510760,
            "unit": "ns/op",
            "extra": "706 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 37274,
            "unit": "B/op",
            "extra": "706 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 504,
            "unit": "allocs/op",
            "extra": "706 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 8623840,
            "unit": "ns/op\t   69728 B/op\t     948 allocs/op",
            "extra": "132 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 8623840,
            "unit": "ns/op",
            "extra": "132 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 69728,
            "unit": "B/op",
            "extra": "132 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 948,
            "unit": "allocs/op",
            "extra": "132 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7489a3eb9472dd6fe164c07fcc80b8b18bab74c3",
          "message": "Merge pull request #1687 from gofiber/dependabot/go_modules/dynamodb/github.com/aws/aws-sdk-go-v2/feature/dynamodb/attributevalue-1.18.13\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/feature/dynamodb/attributevalue from 1.18.12 to 1.18.13 in /dynamodb",
          "timestamp": "2025-04-25T09:41:19+02:00",
          "tree_id": "186c1fcee2893b4f633cb2f2c44a69d3c36bcaf1",
          "url": "https://github.com/gofiber/storage/commit/7489a3eb9472dd6fe164c07fcc80b8b18bab74c3"
        },
        "date": 1745566973722,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 3766236,
            "unit": "ns/op\t   34799 B/op\t     476 allocs/op",
            "extra": "285 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 3766236,
            "unit": "ns/op",
            "extra": "285 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 34799,
            "unit": "B/op",
            "extra": "285 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 476,
            "unit": "allocs/op",
            "extra": "285 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1282849,
            "unit": "ns/op\t   37064 B/op\t     504 allocs/op",
            "extra": "834 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1282849,
            "unit": "ns/op",
            "extra": "834 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 37064,
            "unit": "B/op",
            "extra": "834 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 504,
            "unit": "allocs/op",
            "extra": "834 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 7911754,
            "unit": "ns/op\t   70209 B/op\t     948 allocs/op",
            "extra": "145 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 7911754,
            "unit": "ns/op",
            "extra": "145 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 70209,
            "unit": "B/op",
            "extra": "145 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 948,
            "unit": "allocs/op",
            "extra": "145 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1745688105743,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 2819562,
            "unit": "ns/op\t   35291 B/op\t     476 allocs/op",
            "extra": "381 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 2819562,
            "unit": "ns/op",
            "extra": "381 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 35291,
            "unit": "B/op",
            "extra": "381 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 476,
            "unit": "allocs/op",
            "extra": "381 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1217993,
            "unit": "ns/op\t   37145 B/op\t     504 allocs/op",
            "extra": "842 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1217993,
            "unit": "ns/op",
            "extra": "842 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 37145,
            "unit": "B/op",
            "extra": "842 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 504,
            "unit": "allocs/op",
            "extra": "842 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 5792822,
            "unit": "ns/op\t   70517 B/op\t     949 allocs/op",
            "extra": "184 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 5792822,
            "unit": "ns/op",
            "extra": "184 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 70517,
            "unit": "B/op",
            "extra": "184 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 949,
            "unit": "allocs/op",
            "extra": "184 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "72fb69736092613c4003bfdb9a2b2b5939a9720c",
          "message": "Merge pull request #1697 from gofiber/dependabot/go_modules/dynamodb/github.com/testcontainers/testcontainers-go-0.37.0\n\nchore(deps): bump github.com/testcontainers/testcontainers-go from 0.36.0 to 0.37.0 in /dynamodb",
          "timestamp": "2025-04-28T12:54:55+02:00",
          "tree_id": "3080e106cc115c7ec88c6a89417e9dedc7c4ae40",
          "url": "https://github.com/gofiber/storage/commit/72fb69736092613c4003bfdb9a2b2b5939a9720c"
        },
        "date": 1745837958925,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 3772357,
            "unit": "ns/op\t   34598 B/op\t     476 allocs/op",
            "extra": "283 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 3772357,
            "unit": "ns/op",
            "extra": "283 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 34598,
            "unit": "B/op",
            "extra": "283 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 476,
            "unit": "allocs/op",
            "extra": "283 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1386161,
            "unit": "ns/op\t   36910 B/op\t     504 allocs/op",
            "extra": "752 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1386161,
            "unit": "ns/op",
            "extra": "752 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 36910,
            "unit": "B/op",
            "extra": "752 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 504,
            "unit": "allocs/op",
            "extra": "752 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 7467745,
            "unit": "ns/op\t   70720 B/op\t     949 allocs/op",
            "extra": "145 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 7467745,
            "unit": "ns/op",
            "extra": "145 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 70720,
            "unit": "B/op",
            "extra": "145 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 949,
            "unit": "allocs/op",
            "extra": "145 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a572e3e0528ac42db7d05f9c1d01d0bd5ee10a1e",
          "message": "Merge pull request #1708 from gofiber/dependabot/go_modules/dynamodb/github.com/aws/aws-sdk-go-v2/service/dynamodb-1.43.1\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/service/dynamodb from 1.43.0 to 1.43.1 in /dynamodb",
          "timestamp": "2025-04-29T09:32:43+02:00",
          "tree_id": "85a2ad5881b196317488c26448b8af353e445f90",
          "url": "https://github.com/gofiber/storage/commit/a572e3e0528ac42db7d05f9c1d01d0bd5ee10a1e"
        },
        "date": 1745912106224,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 4213443,
            "unit": "ns/op\t   35534 B/op\t     476 allocs/op",
            "extra": "254 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 4213443,
            "unit": "ns/op",
            "extra": "254 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 35534,
            "unit": "B/op",
            "extra": "254 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 476,
            "unit": "allocs/op",
            "extra": "254 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1316412,
            "unit": "ns/op\t   37219 B/op\t     504 allocs/op",
            "extra": "788 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1316412,
            "unit": "ns/op",
            "extra": "788 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 37219,
            "unit": "B/op",
            "extra": "788 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 504,
            "unit": "allocs/op",
            "extra": "788 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 8574917,
            "unit": "ns/op\t   70896 B/op\t     949 allocs/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 8574917,
            "unit": "ns/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 70896,
            "unit": "B/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 949,
            "unit": "allocs/op",
            "extra": "133 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "89d6407c6fde3f45457eb79837b337e41a0a4580",
          "message": "Merge pull request #1710 from gofiber/dependabot/go_modules/dynamodb/github.com/testcontainers/testcontainers-go/modules/dynamodb-0.37.0\n\nchore(deps): bump github.com/testcontainers/testcontainers-go/modules/dynamodb from 0.36.0 to 0.37.0 in /dynamodb",
          "timestamp": "2025-04-29T09:34:02+02:00",
          "tree_id": "890b3fe9dca7e4365822a3963f74a49fca12c2dc",
          "url": "https://github.com/gofiber/storage/commit/89d6407c6fde3f45457eb79837b337e41a0a4580"
        },
        "date": 1745912434620,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 4201040,
            "unit": "ns/op\t   34418 B/op\t     476 allocs/op",
            "extra": "279 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 4201040,
            "unit": "ns/op",
            "extra": "279 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 34418,
            "unit": "B/op",
            "extra": "279 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 476,
            "unit": "allocs/op",
            "extra": "279 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1350124,
            "unit": "ns/op\t   37003 B/op\t     504 allocs/op",
            "extra": "781 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1350124,
            "unit": "ns/op",
            "extra": "781 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 37003,
            "unit": "B/op",
            "extra": "781 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 504,
            "unit": "allocs/op",
            "extra": "781 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 8056735,
            "unit": "ns/op\t   70847 B/op\t     949 allocs/op",
            "extra": "134 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 8056735,
            "unit": "ns/op",
            "extra": "134 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 70847,
            "unit": "B/op",
            "extra": "134 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 949,
            "unit": "allocs/op",
            "extra": "134 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1c1d596001f12b85614d4da29bcbb7b697f6e6ed",
          "message": "Merge pull request #1709 from gofiber/dependabot/go_modules/dynamodb/github.com/aws/aws-sdk-go-v2/feature/dynamodb/attributevalue-1.18.14\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/feature/dynamodb/attributevalue from 1.18.13 to 1.18.14 in /dynamodb",
          "timestamp": "2025-04-29T09:38:36+02:00",
          "tree_id": "33eb05cfab66c97b6a8ecace4d42a3a7eab45a11",
          "url": "https://github.com/gofiber/storage/commit/1c1d596001f12b85614d4da29bcbb7b697f6e6ed"
        },
        "date": 1745912610321,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 3535549,
            "unit": "ns/op\t   35667 B/op\t     476 allocs/op",
            "extra": "309 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 3535549,
            "unit": "ns/op",
            "extra": "309 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 35667,
            "unit": "B/op",
            "extra": "309 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 476,
            "unit": "allocs/op",
            "extra": "309 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1265823,
            "unit": "ns/op\t   36681 B/op\t     504 allocs/op",
            "extra": "835 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1265823,
            "unit": "ns/op",
            "extra": "835 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 36681,
            "unit": "B/op",
            "extra": "835 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 504,
            "unit": "allocs/op",
            "extra": "835 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 6667068,
            "unit": "ns/op\t   70195 B/op\t     948 allocs/op",
            "extra": "175 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 6667068,
            "unit": "ns/op",
            "extra": "175 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 70195,
            "unit": "B/op",
            "extra": "175 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 948,
            "unit": "allocs/op",
            "extra": "175 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "db8b59a335e19b58f44801db39fcc2fb836212c0",
          "message": "Merge pull request #1725 from gofiber/dependabot/go_modules/dynamodb/github.com/aws/aws-sdk-go-v2/feature/dynamodb/attributevalue-1.19.0\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/feature/dynamodb/attributevalue from 1.18.14 to 1.19.0 in /dynamodb",
          "timestamp": "2025-05-01T09:27:49+02:00",
          "tree_id": "00e96d711226b449cce0073f5f2b99b25cc00a0a",
          "url": "https://github.com/gofiber/storage/commit/db8b59a335e19b58f44801db39fcc2fb836212c0"
        },
        "date": 1746084563546,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 3828796,
            "unit": "ns/op\t   34426 B/op\t     476 allocs/op",
            "extra": "297 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 3828796,
            "unit": "ns/op",
            "extra": "297 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 34426,
            "unit": "B/op",
            "extra": "297 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 476,
            "unit": "allocs/op",
            "extra": "297 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1264906,
            "unit": "ns/op\t   36855 B/op\t     504 allocs/op",
            "extra": "811 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1264906,
            "unit": "ns/op",
            "extra": "811 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 36855,
            "unit": "B/op",
            "extra": "811 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 504,
            "unit": "allocs/op",
            "extra": "811 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 7805057,
            "unit": "ns/op\t   70593 B/op\t     949 allocs/op",
            "extra": "138 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 7805057,
            "unit": "ns/op",
            "extra": "138 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 70593,
            "unit": "B/op",
            "extra": "138 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 949,
            "unit": "allocs/op",
            "extra": "138 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "31d99f8c13fcc7920b01fa815a3efcc3c2136156",
          "message": "Merge pull request #1752 from gofiber/dependabot/go_modules/dynamodb/github.com/aws/aws-sdk-go-v2/config-1.29.15\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/config from 1.29.14 to 1.29.15 in /dynamodb",
          "timestamp": "2025-06-09T10:33:02+02:00",
          "tree_id": "87d43b52e4e6bdcaef6dac46ccae3acd0c72e006",
          "url": "https://github.com/gofiber/storage/commit/31d99f8c13fcc7920b01fa815a3efcc3c2136156"
        },
        "date": 1749458076818,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 3378049,
            "unit": "ns/op\t   35044 B/op\t     476 allocs/op",
            "extra": "309 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 3378049,
            "unit": "ns/op",
            "extra": "309 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 35044,
            "unit": "B/op",
            "extra": "309 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 476,
            "unit": "allocs/op",
            "extra": "309 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1264920,
            "unit": "ns/op\t   37028 B/op\t     504 allocs/op",
            "extra": "812 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1264920,
            "unit": "ns/op",
            "extra": "812 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 37028,
            "unit": "B/op",
            "extra": "812 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 504,
            "unit": "allocs/op",
            "extra": "812 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 6931454,
            "unit": "ns/op\t   70895 B/op\t     948 allocs/op",
            "extra": "165 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 6931454,
            "unit": "ns/op",
            "extra": "165 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 70895,
            "unit": "B/op",
            "extra": "165 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 948,
            "unit": "allocs/op",
            "extra": "165 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "359f17bdb64b677ee5fc7f7c3999a66ed41e748d",
          "message": "Merge pull request #1756 from gofiber/dependabot/go_modules/dynamodb/github.com/aws/aws-sdk-go-v2/service/dynamodb-1.43.2\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/service/dynamodb from 1.43.1 to 1.43.2 in /dynamodb",
          "timestamp": "2025-06-09T10:39:08+02:00",
          "tree_id": "7ed2ef98619692a9976ba5d4505cf11ce56bed5d",
          "url": "https://github.com/gofiber/storage/commit/359f17bdb64b677ee5fc7f7c3999a66ed41e748d"
        },
        "date": 1749458467945,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 4017279,
            "unit": "ns/op\t   34422 B/op\t     476 allocs/op",
            "extra": "294 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 4017279,
            "unit": "ns/op",
            "extra": "294 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 34422,
            "unit": "B/op",
            "extra": "294 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 476,
            "unit": "allocs/op",
            "extra": "294 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1352976,
            "unit": "ns/op\t   37403 B/op\t     504 allocs/op",
            "extra": "795 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1352976,
            "unit": "ns/op",
            "extra": "795 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 37403,
            "unit": "B/op",
            "extra": "795 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 504,
            "unit": "allocs/op",
            "extra": "795 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 7179362,
            "unit": "ns/op\t   70253 B/op\t     948 allocs/op",
            "extra": "162 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 7179362,
            "unit": "ns/op",
            "extra": "162 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 70253,
            "unit": "B/op",
            "extra": "162 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 948,
            "unit": "allocs/op",
            "extra": "162 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a27e2d7e385f958272ec72eedb6f3fad4fe950d2",
          "message": "Merge pull request #1753 from gofiber/dependabot/go_modules/dynamodb/github.com/aws/aws-sdk-go-v2/feature/dynamodb/attributevalue-1.19.1\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/feature/dynamodb/attributevalue from 1.19.0 to 1.19.1 in /dynamodb",
          "timestamp": "2025-06-09T10:42:57+02:00",
          "tree_id": "387f071f951a6d349827c26b5d7aa81180539eee",
          "url": "https://github.com/gofiber/storage/commit/a27e2d7e385f958272ec72eedb6f3fad4fe950d2"
        },
        "date": 1749458677012,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 3677894,
            "unit": "ns/op\t   35438 B/op\t     476 allocs/op",
            "extra": "301 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 3677894,
            "unit": "ns/op",
            "extra": "301 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 35438,
            "unit": "B/op",
            "extra": "301 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 476,
            "unit": "allocs/op",
            "extra": "301 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1249879,
            "unit": "ns/op\t   37143 B/op\t     504 allocs/op",
            "extra": "837 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1249879,
            "unit": "ns/op",
            "extra": "837 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 37143,
            "unit": "B/op",
            "extra": "837 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 504,
            "unit": "allocs/op",
            "extra": "837 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 7077305,
            "unit": "ns/op\t   69515 B/op\t     948 allocs/op",
            "extra": "171 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 7077305,
            "unit": "ns/op",
            "extra": "171 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 69515,
            "unit": "B/op",
            "extra": "171 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 948,
            "unit": "allocs/op",
            "extra": "171 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "708a8075e1888345ea14528312de3156ef5858e1",
          "message": "Merge pull request #1766 from gofiber/dependabot/go_modules/dynamodb/github.com/aws/aws-sdk-go-v2/service/dynamodb-1.43.3\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/service/dynamodb from 1.43.2 to 1.43.3 in /dynamodb",
          "timestamp": "2025-06-11T09:45:50+02:00",
          "tree_id": "23f7d2be5a00b28622104e6c2d656bac8399bb73",
          "url": "https://github.com/gofiber/storage/commit/708a8075e1888345ea14528312de3156ef5858e1"
        },
        "date": 1749628048133,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 3649091,
            "unit": "ns/op\t   35291 B/op\t     476 allocs/op",
            "extra": "282 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 3649091,
            "unit": "ns/op",
            "extra": "282 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 35291,
            "unit": "B/op",
            "extra": "282 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 476,
            "unit": "allocs/op",
            "extra": "282 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1369526,
            "unit": "ns/op\t   37074 B/op\t     504 allocs/op",
            "extra": "784 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1369526,
            "unit": "ns/op",
            "extra": "784 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 37074,
            "unit": "B/op",
            "extra": "784 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 504,
            "unit": "allocs/op",
            "extra": "784 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 7988951,
            "unit": "ns/op\t   69542 B/op\t     948 allocs/op",
            "extra": "136 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 7988951,
            "unit": "ns/op",
            "extra": "136 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 69542,
            "unit": "B/op",
            "extra": "136 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 948,
            "unit": "allocs/op",
            "extra": "136 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "23106b5a0b8269f8d0d5ad718ccfb94a9be3aa1b",
          "message": "Merge pull request #1767 from gofiber/dependabot/go_modules/dynamodb/github.com/aws/aws-sdk-go-v2/config-1.29.16\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/config from 1.29.15 to 1.29.16 in /dynamodb",
          "timestamp": "2025-06-11T09:47:24+02:00",
          "tree_id": "046f41f7fb5dca63ecd2f0758ffe30b396a10b92",
          "url": "https://github.com/gofiber/storage/commit/23106b5a0b8269f8d0d5ad718ccfb94a9be3aa1b"
        },
        "date": 1749628145517,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 3654349,
            "unit": "ns/op\t   35324 B/op\t     476 allocs/op",
            "extra": "298 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 3654349,
            "unit": "ns/op",
            "extra": "298 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 35324,
            "unit": "B/op",
            "extra": "298 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 476,
            "unit": "allocs/op",
            "extra": "298 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1282278,
            "unit": "ns/op\t   36744 B/op\t     504 allocs/op",
            "extra": "796 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1282278,
            "unit": "ns/op",
            "extra": "796 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 36744,
            "unit": "B/op",
            "extra": "796 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 504,
            "unit": "allocs/op",
            "extra": "796 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 7465088,
            "unit": "ns/op\t   70380 B/op\t     948 allocs/op",
            "extra": "148 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 7465088,
            "unit": "ns/op",
            "extra": "148 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 70380,
            "unit": "B/op",
            "extra": "148 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 948,
            "unit": "allocs/op",
            "extra": "148 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6de3835af37bec3f4b32c56c1006499ebf63988f",
          "message": "Merge pull request #1769 from gofiber/dependabot/go_modules/dynamodb/github.com/aws/aws-sdk-go-v2/feature/dynamodb/attributevalue-1.19.2\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/feature/dynamodb/attributevalue from 1.19.1 to 1.19.2 in /dynamodb",
          "timestamp": "2025-06-11T09:51:59+02:00",
          "tree_id": "9f8706864b05f5470c5adec66b978e6c15bfdb3a",
          "url": "https://github.com/gofiber/storage/commit/6de3835af37bec3f4b32c56c1006499ebf63988f"
        },
        "date": 1749628406852,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 2886827,
            "unit": "ns/op\t   34867 B/op\t     476 allocs/op",
            "extra": "361 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 2886827,
            "unit": "ns/op",
            "extra": "361 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 34867,
            "unit": "B/op",
            "extra": "361 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 476,
            "unit": "allocs/op",
            "extra": "361 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1248702,
            "unit": "ns/op\t   37008 B/op\t     504 allocs/op",
            "extra": "847 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1248702,
            "unit": "ns/op",
            "extra": "847 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 37008,
            "unit": "B/op",
            "extra": "847 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 504,
            "unit": "allocs/op",
            "extra": "847 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 5900316,
            "unit": "ns/op\t   71896 B/op\t     949 allocs/op",
            "extra": "187 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 5900316,
            "unit": "ns/op",
            "extra": "187 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 71896,
            "unit": "B/op",
            "extra": "187 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 949,
            "unit": "allocs/op",
            "extra": "187 times\n4 procs"
          }
        ]
      }
    ]
  }
}