window.BENCHMARK_DATA = {
  "lastUpdate": 1768379348446,
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
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6150b60e10c888bcd882f08a82a3320a7f6e3555",
          "message": "Merge pull request #1782 from gofiber/dependabot/go_modules/dynamodb/github.com/aws/aws-sdk-go-v2/service/dynamodb-1.43.4\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/service/dynamodb from 1.43.3 to 1.43.4 in /dynamodb",
          "timestamp": "2025-06-18T09:31:39+02:00",
          "tree_id": "e8c961215f164b3bbcc99c6a6353591f9c20be6b",
          "url": "https://github.com/gofiber/storage/commit/6150b60e10c888bcd882f08a82a3320a7f6e3555"
        },
        "date": 1750231995363,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 3720691,
            "unit": "ns/op\t   35170 B/op\t     476 allocs/op",
            "extra": "302 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 3720691,
            "unit": "ns/op",
            "extra": "302 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 35170,
            "unit": "B/op",
            "extra": "302 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 476,
            "unit": "allocs/op",
            "extra": "302 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1274211,
            "unit": "ns/op\t   36951 B/op\t     504 allocs/op",
            "extra": "810 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1274211,
            "unit": "ns/op",
            "extra": "810 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 36951,
            "unit": "B/op",
            "extra": "810 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 504,
            "unit": "allocs/op",
            "extra": "810 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 6792232,
            "unit": "ns/op\t   70354 B/op\t     948 allocs/op",
            "extra": "153 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 6792232,
            "unit": "ns/op",
            "extra": "153 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 70354,
            "unit": "B/op",
            "extra": "153 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 948,
            "unit": "allocs/op",
            "extra": "153 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "287fb557dd20d27f99e27eb84b36ed48dea12309",
          "message": "Merge pull request #1783 from gofiber/dependabot/go_modules/dynamodb/github.com/aws/aws-sdk-go-v2/config-1.29.17\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/config from 1.29.16 to 1.29.17 in /dynamodb",
          "timestamp": "2025-06-18T09:33:09+02:00",
          "tree_id": "d320994f8c5e2ecff9a5d3a680aea496590c43e9",
          "url": "https://github.com/gofiber/storage/commit/287fb557dd20d27f99e27eb84b36ed48dea12309"
        },
        "date": 1750232082794,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 2824190,
            "unit": "ns/op\t   35129 B/op\t     476 allocs/op",
            "extra": "378 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 2824190,
            "unit": "ns/op",
            "extra": "378 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 35129,
            "unit": "B/op",
            "extra": "378 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 476,
            "unit": "allocs/op",
            "extra": "378 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1226448,
            "unit": "ns/op\t   36825 B/op\t     504 allocs/op",
            "extra": "844 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1226448,
            "unit": "ns/op",
            "extra": "844 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 36825,
            "unit": "B/op",
            "extra": "844 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 504,
            "unit": "allocs/op",
            "extra": "844 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 5788414,
            "unit": "ns/op\t   70319 B/op\t     949 allocs/op",
            "extra": "195 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 5788414,
            "unit": "ns/op",
            "extra": "195 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 70319,
            "unit": "B/op",
            "extra": "195 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 949,
            "unit": "allocs/op",
            "extra": "195 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "129a9b4a03b6512d2c98872cc4a5013fc20d9d3b",
          "message": "Merge pull request #1785 from gofiber/dependabot/go_modules/dynamodb/github.com/aws/aws-sdk-go-v2/feature/dynamodb/attributevalue-1.19.3\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/feature/dynamodb/attributevalue from 1.19.2 to 1.19.3 in /dynamodb",
          "timestamp": "2025-06-19T10:00:33+02:00",
          "tree_id": "7389b81da1bc0ed2e6589694f9db71a094405ec4",
          "url": "https://github.com/gofiber/storage/commit/129a9b4a03b6512d2c98872cc4a5013fc20d9d3b"
        },
        "date": 1750320128044,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 4207019,
            "unit": "ns/op\t   34823 B/op\t     476 allocs/op",
            "extra": "291 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 4207019,
            "unit": "ns/op",
            "extra": "291 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 34823,
            "unit": "B/op",
            "extra": "291 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 476,
            "unit": "allocs/op",
            "extra": "291 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1277183,
            "unit": "ns/op\t   36864 B/op\t     504 allocs/op",
            "extra": "806 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1277183,
            "unit": "ns/op",
            "extra": "806 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 36864,
            "unit": "B/op",
            "extra": "806 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 504,
            "unit": "allocs/op",
            "extra": "806 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 8238569,
            "unit": "ns/op\t   70109 B/op\t     948 allocs/op",
            "extra": "176 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 8238569,
            "unit": "ns/op",
            "extra": "176 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 70109,
            "unit": "B/op",
            "extra": "176 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 948,
            "unit": "allocs/op",
            "extra": "176 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5e964eef23ccc2b6fc3e64bbda4ff7f719df1373",
          "message": "Merge pull request #1807 from gofiber/dependabot/go_modules/dynamodb/github.com/aws/aws-sdk-go-v2/service/dynamodb-1.44.0\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/service/dynamodb from 1.43.4 to 1.44.0 in /dynamodb",
          "timestamp": "2025-07-01T12:19:52+02:00",
          "tree_id": "0d96a118ec2a3278ba017e84a3b06c7beeb94939",
          "url": "https://github.com/gofiber/storage/commit/5e964eef23ccc2b6fc3e64bbda4ff7f719df1373"
        },
        "date": 1751365276062,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 3723845,
            "unit": "ns/op\t   35132 B/op\t     476 allocs/op",
            "extra": "306 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 3723845,
            "unit": "ns/op",
            "extra": "306 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 35132,
            "unit": "B/op",
            "extra": "306 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 476,
            "unit": "allocs/op",
            "extra": "306 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1275242,
            "unit": "ns/op\t   36795 B/op\t     504 allocs/op",
            "extra": "898 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1275242,
            "unit": "ns/op",
            "extra": "898 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 36795,
            "unit": "B/op",
            "extra": "898 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 504,
            "unit": "allocs/op",
            "extra": "898 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 7338604,
            "unit": "ns/op\t   70566 B/op\t     949 allocs/op",
            "extra": "141 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 7338604,
            "unit": "ns/op",
            "extra": "141 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 70566,
            "unit": "B/op",
            "extra": "141 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 949,
            "unit": "allocs/op",
            "extra": "141 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ec9ced0881894b6aa8625fdd0b9a6a2bfce067e3",
          "message": "Merge pull request #1808 from gofiber/dependabot/go_modules/dynamodb/github.com/aws/aws-sdk-go-v2/feature/dynamodb/attributevalue-1.19.4\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/feature/dynamodb/attributevalue from 1.19.3 to 1.19.4 in /dynamodb",
          "timestamp": "2025-07-03T09:23:48+02:00",
          "tree_id": "b76604e64b5f89daaa170152a86337b6ab68139d",
          "url": "https://github.com/gofiber/storage/commit/ec9ced0881894b6aa8625fdd0b9a6a2bfce067e3"
        },
        "date": 1751527531175,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 4021847,
            "unit": "ns/op\t   34521 B/op\t     476 allocs/op",
            "extra": "338 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 4021847,
            "unit": "ns/op",
            "extra": "338 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 34521,
            "unit": "B/op",
            "extra": "338 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 476,
            "unit": "allocs/op",
            "extra": "338 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1269769,
            "unit": "ns/op\t   37118 B/op\t     504 allocs/op",
            "extra": "819 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1269769,
            "unit": "ns/op",
            "extra": "819 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 37118,
            "unit": "B/op",
            "extra": "819 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 504,
            "unit": "allocs/op",
            "extra": "819 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 8619599,
            "unit": "ns/op\t   70353 B/op\t     948 allocs/op",
            "extra": "136 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 8619599,
            "unit": "ns/op",
            "extra": "136 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 70353,
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
          "id": "84234671713e1e75e9f9c7eaaacc9f18f6c484e1",
          "message": "Merge pull request #1569 from gofiber/add-withcontext",
          "timestamp": "2025-07-07T11:44:47+02:00",
          "tree_id": "7578250e12b0352776171d0651b265ba58951118",
          "url": "https://github.com/gofiber/storage/commit/84234671713e1e75e9f9c7eaaacc9f18f6c484e1"
        },
        "date": 1751882218793,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 4020545,
            "unit": "ns/op\t   35528 B/op\t     476 allocs/op",
            "extra": "273 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 4020545,
            "unit": "ns/op",
            "extra": "273 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 35528,
            "unit": "B/op",
            "extra": "273 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 476,
            "unit": "allocs/op",
            "extra": "273 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1280681,
            "unit": "ns/op\t   37027 B/op\t     504 allocs/op",
            "extra": "805 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1280681,
            "unit": "ns/op",
            "extra": "805 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 37027,
            "unit": "B/op",
            "extra": "805 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 504,
            "unit": "allocs/op",
            "extra": "805 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 8998074,
            "unit": "ns/op\t   71323 B/op\t     949 allocs/op",
            "extra": "140 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 8998074,
            "unit": "ns/op",
            "extra": "140 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 71323,
            "unit": "B/op",
            "extra": "140 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 949,
            "unit": "allocs/op",
            "extra": "140 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1752652952583,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 3695869,
            "unit": "ns/op\t   35387 B/op\t     476 allocs/op",
            "extra": "315 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 3695869,
            "unit": "ns/op",
            "extra": "315 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 35387,
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
            "value": 1291746,
            "unit": "ns/op\t   36867 B/op\t     504 allocs/op",
            "extra": "790 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1291746,
            "unit": "ns/op",
            "extra": "790 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 36867,
            "unit": "B/op",
            "extra": "790 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 504,
            "unit": "allocs/op",
            "extra": "790 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 8534213,
            "unit": "ns/op\t   70703 B/op\t     949 allocs/op",
            "extra": "145 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 8534213,
            "unit": "ns/op",
            "extra": "145 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 70703,
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
          "id": "e3f0243edf140f89f93da9884e4880768383a33d",
          "message": "Merge pull request #1821 from gofiber/dependabot/go_modules/aerospike/testcontainers-modules-88f01908c2\n\nchore(deps): bump the testcontainers-modules group across 22 directories with 17 updates",
          "timestamp": "2025-07-16T10:01:38+02:00",
          "tree_id": "d8ef317e71a85e0e393e760722107b87bd86b70b",
          "url": "https://github.com/gofiber/storage/commit/e3f0243edf140f89f93da9884e4880768383a33d"
        },
        "date": 1752653337945,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 3176522,
            "unit": "ns/op\t   34551 B/op\t     476 allocs/op",
            "extra": "348 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 3176522,
            "unit": "ns/op",
            "extra": "348 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 34551,
            "unit": "B/op",
            "extra": "348 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 476,
            "unit": "allocs/op",
            "extra": "348 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1274370,
            "unit": "ns/op\t   37338 B/op\t     504 allocs/op",
            "extra": "835 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1274370,
            "unit": "ns/op",
            "extra": "835 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 37338,
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
            "value": 6562339,
            "unit": "ns/op\t   69456 B/op\t     948 allocs/op",
            "extra": "172 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 6562339,
            "unit": "ns/op",
            "extra": "172 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 69456,
            "unit": "B/op",
            "extra": "172 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 948,
            "unit": "allocs/op",
            "extra": "172 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1753173420589,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 3870344,
            "unit": "ns/op\t   35266 B/op\t     476 allocs/op",
            "extra": "274 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 3870344,
            "unit": "ns/op",
            "extra": "274 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 35266,
            "unit": "B/op",
            "extra": "274 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 476,
            "unit": "allocs/op",
            "extra": "274 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1557549,
            "unit": "ns/op\t   36963 B/op\t     504 allocs/op",
            "extra": "658 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1557549,
            "unit": "ns/op",
            "extra": "658 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 36963,
            "unit": "B/op",
            "extra": "658 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 504,
            "unit": "allocs/op",
            "extra": "658 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 8495433,
            "unit": "ns/op\t   70742 B/op\t     949 allocs/op",
            "extra": "128 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 8495433,
            "unit": "ns/op",
            "extra": "128 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 70742,
            "unit": "B/op",
            "extra": "128 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 949,
            "unit": "allocs/op",
            "extra": "128 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1753428391228,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 4354379,
            "unit": "ns/op\t   35543 B/op\t     476 allocs/op",
            "extra": "260 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 4354379,
            "unit": "ns/op",
            "extra": "260 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 35543,
            "unit": "B/op",
            "extra": "260 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 476,
            "unit": "allocs/op",
            "extra": "260 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1530986,
            "unit": "ns/op\t   36661 B/op\t     504 allocs/op",
            "extra": "682 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1530986,
            "unit": "ns/op",
            "extra": "682 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 36661,
            "unit": "B/op",
            "extra": "682 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 504,
            "unit": "allocs/op",
            "extra": "682 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 8464151,
            "unit": "ns/op\t   70910 B/op\t     949 allocs/op",
            "extra": "129 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 8464151,
            "unit": "ns/op",
            "extra": "129 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 70910,
            "unit": "B/op",
            "extra": "129 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 949,
            "unit": "allocs/op",
            "extra": "129 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1753775602908,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 4001104,
            "unit": "ns/op\t   42835 B/op\t     507 allocs/op",
            "extra": "264 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 4001104,
            "unit": "ns/op",
            "extra": "264 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 42835,
            "unit": "B/op",
            "extra": "264 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 507,
            "unit": "allocs/op",
            "extra": "264 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1488965,
            "unit": "ns/op\t   45104 B/op\t     535 allocs/op",
            "extra": "688 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1488965,
            "unit": "ns/op",
            "extra": "688 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 45104,
            "unit": "B/op",
            "extra": "688 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 535,
            "unit": "allocs/op",
            "extra": "688 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 7679260,
            "unit": "ns/op\t   85664 B/op\t    1009 allocs/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 7679260,
            "unit": "ns/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 85664,
            "unit": "B/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 1009,
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
          "id": "702c087add69c2b50eea378fd7bfac5994b3593c",
          "message": "Merge pull request #1841 from gofiber/dependabot/go_modules/dynamodb/aws-modules-8466a99b32\n\nchore(deps): bump the aws-modules group across 2 directories with 3 updates",
          "timestamp": "2025-07-30T09:19:52+02:00",
          "tree_id": "e98aa1455ea298b0c13f2666a3792472e47556b2",
          "url": "https://github.com/gofiber/storage/commit/702c087add69c2b50eea378fd7bfac5994b3593c"
        },
        "date": 1753860088798,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 3896689,
            "unit": "ns/op\t   43263 B/op\t     507 allocs/op",
            "extra": "307 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 3896689,
            "unit": "ns/op",
            "extra": "307 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 43263,
            "unit": "B/op",
            "extra": "307 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 507,
            "unit": "allocs/op",
            "extra": "307 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1540702,
            "unit": "ns/op\t   44163 B/op\t     534 allocs/op",
            "extra": "661 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1540702,
            "unit": "ns/op",
            "extra": "661 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 44163,
            "unit": "B/op",
            "extra": "661 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 534,
            "unit": "allocs/op",
            "extra": "661 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 7905747,
            "unit": "ns/op\t   86665 B/op\t    1010 allocs/op",
            "extra": "153 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 7905747,
            "unit": "ns/op",
            "extra": "153 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 86665,
            "unit": "B/op",
            "extra": "153 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 1010,
            "unit": "allocs/op",
            "extra": "153 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1753947651110,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 3557607,
            "unit": "ns/op\t   43642 B/op\t     507 allocs/op",
            "extra": "286 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 3557607,
            "unit": "ns/op",
            "extra": "286 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 43642,
            "unit": "B/op",
            "extra": "286 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 507,
            "unit": "allocs/op",
            "extra": "286 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1516646,
            "unit": "ns/op\t   44722 B/op\t     534 allocs/op",
            "extra": "686 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1516646,
            "unit": "ns/op",
            "extra": "686 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 44722,
            "unit": "B/op",
            "extra": "686 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 534,
            "unit": "allocs/op",
            "extra": "686 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 7212455,
            "unit": "ns/op\t   85656 B/op\t    1009 allocs/op",
            "extra": "146 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 7212455,
            "unit": "ns/op",
            "extra": "146 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 85656,
            "unit": "B/op",
            "extra": "146 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 1009,
            "unit": "allocs/op",
            "extra": "146 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1754399581184,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 4266437,
            "unit": "ns/op\t   42530 B/op\t     507 allocs/op",
            "extra": "270 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 4266437,
            "unit": "ns/op",
            "extra": "270 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 42530,
            "unit": "B/op",
            "extra": "270 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 507,
            "unit": "allocs/op",
            "extra": "270 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1590993,
            "unit": "ns/op\t   44914 B/op\t     535 allocs/op",
            "extra": "667 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1590993,
            "unit": "ns/op",
            "extra": "667 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 44914,
            "unit": "B/op",
            "extra": "667 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 535,
            "unit": "allocs/op",
            "extra": "667 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 7810723,
            "unit": "ns/op\t   84418 B/op\t    1011 allocs/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 7810723,
            "unit": "ns/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 84418,
            "unit": "B/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 1011,
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
          "id": "54bfb6e171b00ab25cecfdca7038053879c9afcd",
          "message": "Merge pull request #1864 from gofiber/dependabot/go_modules/dynamodb/aws-modules-e2a63b23ec\n\nchore(deps): bump the aws-modules group across 2 directories with 7 updates",
          "timestamp": "2025-08-12T18:06:26+02:00",
          "tree_id": "da43fc02779a5eefaba5f4942c71d84beb3efed6",
          "url": "https://github.com/gofiber/storage/commit/54bfb6e171b00ab25cecfdca7038053879c9afcd"
        },
        "date": 1755014874406,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 3603252,
            "unit": "ns/op\t   43527 B/op\t     508 allocs/op",
            "extra": "282 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 3603252,
            "unit": "ns/op",
            "extra": "282 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 43527,
            "unit": "B/op",
            "extra": "282 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 508,
            "unit": "allocs/op",
            "extra": "282 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1536130,
            "unit": "ns/op\t   44831 B/op\t     536 allocs/op",
            "extra": "687 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1536130,
            "unit": "ns/op",
            "extra": "687 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 44831,
            "unit": "B/op",
            "extra": "687 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 536,
            "unit": "allocs/op",
            "extra": "687 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 7449411,
            "unit": "ns/op\t   84528 B/op\t    1011 allocs/op",
            "extra": "141 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 7449411,
            "unit": "ns/op",
            "extra": "141 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 84528,
            "unit": "B/op",
            "extra": "141 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 1011,
            "unit": "allocs/op",
            "extra": "141 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1386290f7fd515a5185a9bc07a2044d54e6e2691",
          "message": "Merge pull request #1868 from gofiber/dependabot/go_modules/dynamodb/aws-modules-1f5a523d79\n\nchore(deps): bump the aws-modules group across 1 directory with 2 updates",
          "timestamp": "2025-08-15T09:46:20+02:00",
          "tree_id": "bd8a20bcd66f84f643cae728bbbcc0f84cafb9e1",
          "url": "https://github.com/gofiber/storage/commit/1386290f7fd515a5185a9bc07a2044d54e6e2691"
        },
        "date": 1755244080873,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 4847348,
            "unit": "ns/op\t   43391 B/op\t     508 allocs/op",
            "extra": "236 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 4847348,
            "unit": "ns/op",
            "extra": "236 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 43391,
            "unit": "B/op",
            "extra": "236 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 508,
            "unit": "allocs/op",
            "extra": "236 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1505640,
            "unit": "ns/op\t   44566 B/op\t     535 allocs/op",
            "extra": "694 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1505640,
            "unit": "ns/op",
            "extra": "694 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 44566,
            "unit": "B/op",
            "extra": "694 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 535,
            "unit": "allocs/op",
            "extra": "694 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 8240875,
            "unit": "ns/op\t   86039 B/op\t    1012 allocs/op",
            "extra": "154 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 8240875,
            "unit": "ns/op",
            "extra": "154 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 86039,
            "unit": "B/op",
            "extra": "154 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 1012,
            "unit": "allocs/op",
            "extra": "154 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1755848643977,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 4124489,
            "unit": "ns/op\t   42539 B/op\t     507 allocs/op",
            "extra": "244 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 4124489,
            "unit": "ns/op",
            "extra": "244 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 42539,
            "unit": "B/op",
            "extra": "244 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 507,
            "unit": "allocs/op",
            "extra": "244 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1568272,
            "unit": "ns/op\t   45108 B/op\t     536 allocs/op",
            "extra": "663 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1568272,
            "unit": "ns/op",
            "extra": "663 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 45108,
            "unit": "B/op",
            "extra": "663 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 536,
            "unit": "allocs/op",
            "extra": "663 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 8532980,
            "unit": "ns/op\t   86111 B/op\t    1012 allocs/op",
            "extra": "148 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 8532980,
            "unit": "ns/op",
            "extra": "148 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 86111,
            "unit": "B/op",
            "extra": "148 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 1012,
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
          "id": "149f38aca57ded8a472a4608ff18a3ba58f0250a",
          "message": "Merge pull request #1881 from gofiber/dependabot/go_modules/dynamodb/aws-modules-3d3ca9392f\n\nchore(deps): bump the aws-modules group across 2 directories with 3 updates",
          "timestamp": "2025-08-27T19:25:30+02:00",
          "tree_id": "913e38db7e26687c10437065d1bdbb680e4cd804",
          "url": "https://github.com/gofiber/storage/commit/149f38aca57ded8a472a4608ff18a3ba58f0250a"
        },
        "date": 1756315622189,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 3674443,
            "unit": "ns/op\t   43153 B/op\t     508 allocs/op",
            "extra": "273 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 3674443,
            "unit": "ns/op",
            "extra": "273 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 43153,
            "unit": "B/op",
            "extra": "273 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 508,
            "unit": "allocs/op",
            "extra": "273 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1505741,
            "unit": "ns/op\t   44385 B/op\t     535 allocs/op",
            "extra": "709 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1505741,
            "unit": "ns/op",
            "extra": "709 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 44385,
            "unit": "B/op",
            "extra": "709 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 535,
            "unit": "allocs/op",
            "extra": "709 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 7446026,
            "unit": "ns/op\t   83679 B/op\t    1011 allocs/op",
            "extra": "144 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 7446026,
            "unit": "ns/op",
            "extra": "144 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 83679,
            "unit": "B/op",
            "extra": "144 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 1011,
            "unit": "allocs/op",
            "extra": "144 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1756371226048,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 4005075,
            "unit": "ns/op\t   42949 B/op\t     508 allocs/op",
            "extra": "273 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 4005075,
            "unit": "ns/op",
            "extra": "273 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 42949,
            "unit": "B/op",
            "extra": "273 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 508,
            "unit": "allocs/op",
            "extra": "273 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1552484,
            "unit": "ns/op\t   44307 B/op\t     536 allocs/op",
            "extra": "674 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1552484,
            "unit": "ns/op",
            "extra": "674 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 44307,
            "unit": "B/op",
            "extra": "674 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 536,
            "unit": "allocs/op",
            "extra": "674 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 8034539,
            "unit": "ns/op\t   84601 B/op\t    1011 allocs/op",
            "extra": "132 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 8034539,
            "unit": "ns/op",
            "extra": "132 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 84601,
            "unit": "B/op",
            "extra": "132 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 1011,
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
          "id": "23fd56bd10774c58759dae27664991d090a73f4f",
          "message": "Merge pull request #1884 from gofiber/dependabot/go_modules/dynamodb/aws-modules-4b89e09fe1\n\nchore(deps): bump the aws-modules group across 2 directories with 5 updates",
          "timestamp": "2025-08-29T09:21:52+02:00",
          "tree_id": "77335a6311457de0846a388fe7fdb2309aa44538",
          "url": "https://github.com/gofiber/storage/commit/23fd56bd10774c58759dae27664991d090a73f4f"
        },
        "date": 1756452211072,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 3658901,
            "unit": "ns/op\t   42474 B/op\t     508 allocs/op",
            "extra": "279 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 3658901,
            "unit": "ns/op",
            "extra": "279 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 42474,
            "unit": "B/op",
            "extra": "279 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 508,
            "unit": "allocs/op",
            "extra": "279 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1563343,
            "unit": "ns/op\t   44550 B/op\t     536 allocs/op",
            "extra": "640 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1563343,
            "unit": "ns/op",
            "extra": "640 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 44550,
            "unit": "B/op",
            "extra": "640 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 536,
            "unit": "allocs/op",
            "extra": "640 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 7584841,
            "unit": "ns/op\t   85870 B/op\t    1011 allocs/op",
            "extra": "141 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 7584841,
            "unit": "ns/op",
            "extra": "141 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 85870,
            "unit": "B/op",
            "extra": "141 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 1011,
            "unit": "allocs/op",
            "extra": "141 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1756876307610,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 3645908,
            "unit": "ns/op\t   42876 B/op\t     508 allocs/op",
            "extra": "308 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 3645908,
            "unit": "ns/op",
            "extra": "308 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 42876,
            "unit": "B/op",
            "extra": "308 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 508,
            "unit": "allocs/op",
            "extra": "308 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1577529,
            "unit": "ns/op\t   44527 B/op\t     536 allocs/op",
            "extra": "650 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1577529,
            "unit": "ns/op",
            "extra": "650 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 44527,
            "unit": "B/op",
            "extra": "650 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 536,
            "unit": "allocs/op",
            "extra": "650 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 7444848,
            "unit": "ns/op\t   84999 B/op\t    1011 allocs/op",
            "extra": "156 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 7444848,
            "unit": "ns/op",
            "extra": "156 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 84999,
            "unit": "B/op",
            "extra": "156 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 1011,
            "unit": "allocs/op",
            "extra": "156 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1757575442799,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 4007585,
            "unit": "ns/op\t   42712 B/op\t     508 allocs/op",
            "extra": "296 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 4007585,
            "unit": "ns/op",
            "extra": "296 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 42712,
            "unit": "B/op",
            "extra": "296 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 508,
            "unit": "allocs/op",
            "extra": "296 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1560044,
            "unit": "ns/op\t   44588 B/op\t     535 allocs/op",
            "extra": "660 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1560044,
            "unit": "ns/op",
            "extra": "660 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 44588,
            "unit": "B/op",
            "extra": "660 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 535,
            "unit": "allocs/op",
            "extra": "660 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 8113230,
            "unit": "ns/op\t   86264 B/op\t    1011 allocs/op",
            "extra": "130 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 8113230,
            "unit": "ns/op",
            "extra": "130 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 86264,
            "unit": "B/op",
            "extra": "130 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 1011,
            "unit": "allocs/op",
            "extra": "130 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1758612119250,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 4097200,
            "unit": "ns/op\t   42446 B/op\t     507 allocs/op",
            "extra": "248 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 4097200,
            "unit": "ns/op",
            "extra": "248 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 42446,
            "unit": "B/op",
            "extra": "248 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 507,
            "unit": "allocs/op",
            "extra": "248 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1609881,
            "unit": "ns/op\t   44769 B/op\t     536 allocs/op",
            "extra": "649 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1609881,
            "unit": "ns/op",
            "extra": "649 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 44769,
            "unit": "B/op",
            "extra": "649 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 536,
            "unit": "allocs/op",
            "extra": "649 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 8436498,
            "unit": "ns/op\t   84345 B/op\t    1011 allocs/op",
            "extra": "121 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 8436498,
            "unit": "ns/op",
            "extra": "121 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 84345,
            "unit": "B/op",
            "extra": "121 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 1011,
            "unit": "allocs/op",
            "extra": "121 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1758698738984,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 3661993,
            "unit": "ns/op\t   42150 B/op\t     507 allocs/op",
            "extra": "337 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 3661993,
            "unit": "ns/op",
            "extra": "337 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 42150,
            "unit": "B/op",
            "extra": "337 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 507,
            "unit": "allocs/op",
            "extra": "337 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1547370,
            "unit": "ns/op\t   44808 B/op\t     535 allocs/op",
            "extra": "658 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1547370,
            "unit": "ns/op",
            "extra": "658 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 44808,
            "unit": "B/op",
            "extra": "658 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 535,
            "unit": "allocs/op",
            "extra": "658 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 7098551,
            "unit": "ns/op\t   86746 B/op\t    1012 allocs/op",
            "extra": "157 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 7098551,
            "unit": "ns/op",
            "extra": "157 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 86746,
            "unit": "B/op",
            "extra": "157 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 1012,
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
          "id": "d64f128d6321d5f09c2f82740d3a7fe81c6f48a3",
          "message": "Merge pull request #1917 from gofiber/dependabot/go_modules/dynamodb/aws-modules-b8d6e13a4f\n\nchore(deps): bump the aws-modules group across 2 directories with 7 updates",
          "timestamp": "2025-09-29T13:41:50+02:00",
          "tree_id": "f9e21234288eb8e70262c329a467205738ce7ace",
          "url": "https://github.com/gofiber/storage/commit/d64f128d6321d5f09c2f82740d3a7fe81c6f48a3"
        },
        "date": 1759146185690,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 3565518,
            "unit": "ns/op\t   42773 B/op\t     508 allocs/op",
            "extra": "292 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 3565518,
            "unit": "ns/op",
            "extra": "292 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 42773,
            "unit": "B/op",
            "extra": "292 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 508,
            "unit": "allocs/op",
            "extra": "292 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1553132,
            "unit": "ns/op\t   44412 B/op\t     535 allocs/op",
            "extra": "673 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1553132,
            "unit": "ns/op",
            "extra": "673 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 44412,
            "unit": "B/op",
            "extra": "673 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 535,
            "unit": "allocs/op",
            "extra": "673 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 7038531,
            "unit": "ns/op\t   85725 B/op\t    1011 allocs/op",
            "extra": "147 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 7038531,
            "unit": "ns/op",
            "extra": "147 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 85725,
            "unit": "B/op",
            "extra": "147 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 1011,
            "unit": "allocs/op",
            "extra": "147 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1759216875229,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 4623941,
            "unit": "ns/op\t   42864 B/op\t     508 allocs/op",
            "extra": "224 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 4623941,
            "unit": "ns/op",
            "extra": "224 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 42864,
            "unit": "B/op",
            "extra": "224 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 508,
            "unit": "allocs/op",
            "extra": "224 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1628648,
            "unit": "ns/op\t   45339 B/op\t     536 allocs/op",
            "extra": "619 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1628648,
            "unit": "ns/op",
            "extra": "619 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 45339,
            "unit": "B/op",
            "extra": "619 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 536,
            "unit": "allocs/op",
            "extra": "619 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 9621531,
            "unit": "ns/op\t   85472 B/op\t    1012 allocs/op",
            "extra": "121 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 9621531,
            "unit": "ns/op",
            "extra": "121 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 85472,
            "unit": "B/op",
            "extra": "121 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 1012,
            "unit": "allocs/op",
            "extra": "121 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1759476031937,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 3972186,
            "unit": "ns/op\t   42768 B/op\t     511 allocs/op",
            "extra": "252 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 3972186,
            "unit": "ns/op",
            "extra": "252 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 42768,
            "unit": "B/op",
            "extra": "252 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 511,
            "unit": "allocs/op",
            "extra": "252 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1561457,
            "unit": "ns/op\t   45216 B/op\t     539 allocs/op",
            "extra": "672 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1561457,
            "unit": "ns/op",
            "extra": "672 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 45216,
            "unit": "B/op",
            "extra": "672 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 539,
            "unit": "allocs/op",
            "extra": "672 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 8408753,
            "unit": "ns/op\t   85079 B/op\t    1017 allocs/op",
            "extra": "120 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 8408753,
            "unit": "ns/op",
            "extra": "120 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 85079,
            "unit": "B/op",
            "extra": "120 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 1017,
            "unit": "allocs/op",
            "extra": "120 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1760599854107,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 3723857,
            "unit": "ns/op\t   42497 B/op\t     511 allocs/op",
            "extra": "283 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 3723857,
            "unit": "ns/op",
            "extra": "283 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 42497,
            "unit": "B/op",
            "extra": "283 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 511,
            "unit": "allocs/op",
            "extra": "283 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1497175,
            "unit": "ns/op\t   44612 B/op\t     538 allocs/op",
            "extra": "681 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1497175,
            "unit": "ns/op",
            "extra": "681 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 44612,
            "unit": "B/op",
            "extra": "681 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 538,
            "unit": "allocs/op",
            "extra": "681 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 7552157,
            "unit": "ns/op\t   85539 B/op\t    1017 allocs/op",
            "extra": "146 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 7552157,
            "unit": "ns/op",
            "extra": "146 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 85539,
            "unit": "B/op",
            "extra": "146 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 1017,
            "unit": "allocs/op",
            "extra": "146 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1760685952258,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 4631611,
            "unit": "ns/op\t   42636 B/op\t     510 allocs/op",
            "extra": "231 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 4631611,
            "unit": "ns/op",
            "extra": "231 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 42636,
            "unit": "B/op",
            "extra": "231 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 510,
            "unit": "allocs/op",
            "extra": "231 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1497052,
            "unit": "ns/op\t   44308 B/op\t     539 allocs/op",
            "extra": "669 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1497052,
            "unit": "ns/op",
            "extra": "669 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 44308,
            "unit": "B/op",
            "extra": "669 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 539,
            "unit": "allocs/op",
            "extra": "669 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 8697438,
            "unit": "ns/op\t   85419 B/op\t    1017 allocs/op",
            "extra": "126 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 8697438,
            "unit": "ns/op",
            "extra": "126 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 85419,
            "unit": "B/op",
            "extra": "126 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 1017,
            "unit": "allocs/op",
            "extra": "126 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a262cfd3ae83108dcc2f9fb1f33fc4e010f8ac8a",
          "message": "Merge pull request #1937 from gofiber/dependabot/go_modules/dynamodb/aws-modules-1befe993d4\n\nchore(deps): bump the aws-modules group across 1 directory with 2 updates",
          "timestamp": "2025-10-22T09:15:41+02:00",
          "tree_id": "6f809d16aeae154114963a1766720626f61275a5",
          "url": "https://github.com/gofiber/storage/commit/a262cfd3ae83108dcc2f9fb1f33fc4e010f8ac8a"
        },
        "date": 1761117458888,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 4054181,
            "unit": "ns/op\t   42656 B/op\t     510 allocs/op",
            "extra": "284 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 4054181,
            "unit": "ns/op",
            "extra": "284 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 42656,
            "unit": "B/op",
            "extra": "284 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 510,
            "unit": "allocs/op",
            "extra": "284 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1481583,
            "unit": "ns/op\t   44524 B/op\t     538 allocs/op",
            "extra": "685 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1481583,
            "unit": "ns/op",
            "extra": "685 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 44524,
            "unit": "B/op",
            "extra": "685 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 538,
            "unit": "allocs/op",
            "extra": "685 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 8203243,
            "unit": "ns/op\t   85326 B/op\t    1017 allocs/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 8203243,
            "unit": "ns/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 85326,
            "unit": "B/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 1017,
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
          "id": "e8a11c5b5e151f0cbf745157125665a33616df8b",
          "message": "Merge pull request #1939 from gofiber/dependabot/go_modules/dynamodb/aws-modules-cba04a4b19\n\nchore(deps): bump the aws-modules group across 2 directories with 6 updates",
          "timestamp": "2025-10-23T09:33:07+02:00",
          "tree_id": "6beb95281542638a60b4b8db8de2f64c1f56a0df",
          "url": "https://github.com/gofiber/storage/commit/e8a11c5b5e151f0cbf745157125665a33616df8b"
        },
        "date": 1761204980340,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 3548453,
            "unit": "ns/op\t   42211 B/op\t     511 allocs/op",
            "extra": "283 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 3548453,
            "unit": "ns/op",
            "extra": "283 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 42211,
            "unit": "B/op",
            "extra": "283 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 511,
            "unit": "allocs/op",
            "extra": "283 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1553902,
            "unit": "ns/op\t   45002 B/op\t     539 allocs/op",
            "extra": "680 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1553902,
            "unit": "ns/op",
            "extra": "680 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 45002,
            "unit": "B/op",
            "extra": "680 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 539,
            "unit": "allocs/op",
            "extra": "680 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 7176048,
            "unit": "ns/op\t   86108 B/op\t    1018 allocs/op",
            "extra": "144 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 7176048,
            "unit": "ns/op",
            "extra": "144 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 86108,
            "unit": "B/op",
            "extra": "144 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 1018,
            "unit": "allocs/op",
            "extra": "144 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1761291616042,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 3847989,
            "unit": "ns/op\t   43470 B/op\t     511 allocs/op",
            "extra": "274 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 3847989,
            "unit": "ns/op",
            "extra": "274 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 43470,
            "unit": "B/op",
            "extra": "274 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 511,
            "unit": "allocs/op",
            "extra": "274 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1551212,
            "unit": "ns/op\t   44811 B/op\t     539 allocs/op",
            "extra": "670 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1551212,
            "unit": "ns/op",
            "extra": "670 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 44811,
            "unit": "B/op",
            "extra": "670 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 539,
            "unit": "allocs/op",
            "extra": "670 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 7457931,
            "unit": "ns/op\t   87092 B/op\t    1018 allocs/op",
            "extra": "150 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 7457931,
            "unit": "ns/op",
            "extra": "150 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 87092,
            "unit": "B/op",
            "extra": "150 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 1018,
            "unit": "allocs/op",
            "extra": "150 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1552c11612f4db6731dda0e74f11bb66a3c764e4",
          "message": "Merge pull request #1943 from gofiber/dependabot/go_modules/dynamodb/aws-modules-a166043242\n\nchore(deps): bump github.com/aws/aws-sdk-go-v2/feature/dynamodb/attributevalue from 1.20.18 to 1.20.19 in /dynamodb in the aws-modules group across 1 directory",
          "timestamp": "2025-10-27T08:57:04+01:00",
          "tree_id": "2cd2106959e0da4078732d900f837d2321f4a65c",
          "url": "https://github.com/gofiber/storage/commit/1552c11612f4db6731dda0e74f11bb66a3c764e4"
        },
        "date": 1761551936601,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 3598151,
            "unit": "ns/op\t   42473 B/op\t     510 allocs/op",
            "extra": "291 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 3598151,
            "unit": "ns/op",
            "extra": "291 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 42473,
            "unit": "B/op",
            "extra": "291 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 510,
            "unit": "allocs/op",
            "extra": "291 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1488731,
            "unit": "ns/op\t   45020 B/op\t     539 allocs/op",
            "extra": "672 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1488731,
            "unit": "ns/op",
            "extra": "672 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 45020,
            "unit": "B/op",
            "extra": "672 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 539,
            "unit": "allocs/op",
            "extra": "672 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 7246841,
            "unit": "ns/op\t   85741 B/op\t    1017 allocs/op",
            "extra": "141 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 7246841,
            "unit": "ns/op",
            "extra": "141 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 85741,
            "unit": "B/op",
            "extra": "141 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 1017,
            "unit": "allocs/op",
            "extra": "141 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1761895597345,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 3451289,
            "unit": "ns/op\t   43027 B/op\t     511 allocs/op",
            "extra": "304 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 3451289,
            "unit": "ns/op",
            "extra": "304 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 43027,
            "unit": "B/op",
            "extra": "304 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 511,
            "unit": "allocs/op",
            "extra": "304 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1486673,
            "unit": "ns/op\t   44963 B/op\t     538 allocs/op",
            "extra": "675 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1486673,
            "unit": "ns/op",
            "extra": "675 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 44963,
            "unit": "B/op",
            "extra": "675 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 538,
            "unit": "allocs/op",
            "extra": "675 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 6866003,
            "unit": "ns/op\t   84751 B/op\t    1017 allocs/op",
            "extra": "160 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 6866003,
            "unit": "ns/op",
            "extra": "160 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 84751,
            "unit": "B/op",
            "extra": "160 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 1017,
            "unit": "allocs/op",
            "extra": "160 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1762240612050,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 5282627,
            "unit": "ns/op\t   38967 B/op\t     469 allocs/op",
            "extra": "240 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 5282627,
            "unit": "ns/op",
            "extra": "240 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 38967,
            "unit": "B/op",
            "extra": "240 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 469,
            "unit": "allocs/op",
            "extra": "240 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1473106,
            "unit": "ns/op\t   41212 B/op\t     497 allocs/op",
            "extra": "684 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1473106,
            "unit": "ns/op",
            "extra": "684 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 41212,
            "unit": "B/op",
            "extra": "684 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 497,
            "unit": "allocs/op",
            "extra": "684 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 7589870,
            "unit": "ns/op\t   79442 B/op\t     934 allocs/op",
            "extra": "141 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 7589870,
            "unit": "ns/op",
            "extra": "141 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 79442,
            "unit": "B/op",
            "extra": "141 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 934,
            "unit": "allocs/op",
            "extra": "141 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1762327998711,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 3715538,
            "unit": "ns/op\t   39878 B/op\t     469 allocs/op",
            "extra": "322 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 3715538,
            "unit": "ns/op",
            "extra": "322 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 39878,
            "unit": "B/op",
            "extra": "322 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 469,
            "unit": "allocs/op",
            "extra": "322 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1460622,
            "unit": "ns/op\t   41776 B/op\t     497 allocs/op",
            "extra": "800 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1460622,
            "unit": "ns/op",
            "extra": "800 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 41776,
            "unit": "B/op",
            "extra": "800 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 497,
            "unit": "allocs/op",
            "extra": "800 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 8516585,
            "unit": "ns/op\t   79917 B/op\t     934 allocs/op",
            "extra": "132 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 8516585,
            "unit": "ns/op",
            "extra": "132 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 79917,
            "unit": "B/op",
            "extra": "132 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 934,
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
          "id": "2151659d8e6d291a303807a697ddaada41e6cc50",
          "message": "Merge pull request #1971 from gofiber/dependabot/go_modules/dynamodb/github.com/docker/docker-28.3.3incompatible\n\nchore(deps): bump github.com/docker/docker from 28.2.2+incompatible to 28.3.3+incompatible in /dynamodb",
          "timestamp": "2025-11-06T09:08:40+01:00",
          "tree_id": "7d8e0aa00a986562cbafc2a53a6bd1a6ecdf6572",
          "url": "https://github.com/gofiber/storage/commit/2151659d8e6d291a303807a697ddaada41e6cc50"
        },
        "date": 1762418212392,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 3528958,
            "unit": "ns/op\t   39938 B/op\t     469 allocs/op",
            "extra": "289 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 3528958,
            "unit": "ns/op",
            "extra": "289 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 39938,
            "unit": "B/op",
            "extra": "289 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 469,
            "unit": "allocs/op",
            "extra": "289 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1515212,
            "unit": "ns/op\t   41701 B/op\t     497 allocs/op",
            "extra": "780 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1515212,
            "unit": "ns/op",
            "extra": "780 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 41701,
            "unit": "B/op",
            "extra": "780 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 497,
            "unit": "allocs/op",
            "extra": "780 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 7166056,
            "unit": "ns/op\t   77970 B/op\t     934 allocs/op",
            "extra": "142 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 7166056,
            "unit": "ns/op",
            "extra": "142 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 77970,
            "unit": "B/op",
            "extra": "142 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 934,
            "unit": "allocs/op",
            "extra": "142 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1762848473650,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 4114958,
            "unit": "ns/op\t   39959 B/op\t     469 allocs/op",
            "extra": "254 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 4114958,
            "unit": "ns/op",
            "extra": "254 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 39959,
            "unit": "B/op",
            "extra": "254 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 469,
            "unit": "allocs/op",
            "extra": "254 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1817073,
            "unit": "ns/op\t   41579 B/op\t     497 allocs/op",
            "extra": "577 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1817073,
            "unit": "ns/op",
            "extra": "577 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 41579,
            "unit": "B/op",
            "extra": "577 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 497,
            "unit": "allocs/op",
            "extra": "577 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 8140372,
            "unit": "ns/op\t   78698 B/op\t     934 allocs/op",
            "extra": "134 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 8140372,
            "unit": "ns/op",
            "extra": "134 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 78698,
            "unit": "B/op",
            "extra": "134 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 934,
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
          "id": "1aa8b4e2daf69d994e59d35f5371f22771e58e40",
          "message": "Merge pull request #2006 from gofiber/dependabot/go_modules/dynamodb/aws-modules-c048fc7cae\n\nchore(deps): bump the aws-modules group across 2 directories with 6 updates",
          "timestamp": "2025-11-12T08:25:32+01:00",
          "tree_id": "20fbdf18df1e000826a383acb6f71af06166407a",
          "url": "https://github.com/gofiber/storage/commit/1aa8b4e2daf69d994e59d35f5371f22771e58e40"
        },
        "date": 1762932442703,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 3549516,
            "unit": "ns/op\t   39989 B/op\t     469 allocs/op",
            "extra": "282 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 3549516,
            "unit": "ns/op",
            "extra": "282 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 39989,
            "unit": "B/op",
            "extra": "282 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 469,
            "unit": "allocs/op",
            "extra": "282 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1507411,
            "unit": "ns/op\t   41591 B/op\t     497 allocs/op",
            "extra": "690 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1507411,
            "unit": "ns/op",
            "extra": "690 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 41591,
            "unit": "B/op",
            "extra": "690 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 497,
            "unit": "allocs/op",
            "extra": "690 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 7063163,
            "unit": "ns/op\t   79452 B/op\t     934 allocs/op",
            "extra": "153 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 7063163,
            "unit": "ns/op",
            "extra": "153 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 79452,
            "unit": "B/op",
            "extra": "153 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 934,
            "unit": "allocs/op",
            "extra": "153 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1763018793847,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 3943708,
            "unit": "ns/op\t   37668 B/op\t     411 allocs/op",
            "extra": "292 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 3943708,
            "unit": "ns/op",
            "extra": "292 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 37668,
            "unit": "B/op",
            "extra": "292 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 411,
            "unit": "allocs/op",
            "extra": "292 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1533039,
            "unit": "ns/op\t   40427 B/op\t     439 allocs/op",
            "extra": "682 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1533039,
            "unit": "ns/op",
            "extra": "682 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 40427,
            "unit": "B/op",
            "extra": "682 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 439,
            "unit": "allocs/op",
            "extra": "682 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 8238626,
            "unit": "ns/op\t   75122 B/op\t     818 allocs/op",
            "extra": "123 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 8238626,
            "unit": "ns/op",
            "extra": "123 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 75122,
            "unit": "B/op",
            "extra": "123 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 818,
            "unit": "allocs/op",
            "extra": "123 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1763657644687,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 4976769,
            "unit": "ns/op\t   37777 B/op\t     411 allocs/op",
            "extra": "217 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 4976769,
            "unit": "ns/op",
            "extra": "217 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 37777,
            "unit": "B/op",
            "extra": "217 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 411,
            "unit": "allocs/op",
            "extra": "217 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1534375,
            "unit": "ns/op\t   39329 B/op\t     439 allocs/op",
            "extra": "682 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1534375,
            "unit": "ns/op",
            "extra": "682 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 39329,
            "unit": "B/op",
            "extra": "682 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 439,
            "unit": "allocs/op",
            "extra": "682 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 9148363,
            "unit": "ns/op\t   74557 B/op\t     818 allocs/op",
            "extra": "117 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 9148363,
            "unit": "ns/op",
            "extra": "117 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 74557,
            "unit": "B/op",
            "extra": "117 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 818,
            "unit": "allocs/op",
            "extra": "117 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1763662024559,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 3790276,
            "unit": "ns/op\t   38380 B/op\t     415 allocs/op",
            "extra": "274 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 3790276,
            "unit": "ns/op",
            "extra": "274 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 38380,
            "unit": "B/op",
            "extra": "274 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 415,
            "unit": "allocs/op",
            "extra": "274 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1500315,
            "unit": "ns/op\t   39460 B/op\t     443 allocs/op",
            "extra": "669 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1500315,
            "unit": "ns/op",
            "extra": "669 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 39460,
            "unit": "B/op",
            "extra": "669 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 443,
            "unit": "allocs/op",
            "extra": "669 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 8706979,
            "unit": "ns/op\t   75957 B/op\t     826 allocs/op",
            "extra": "139 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 8706979,
            "unit": "ns/op",
            "extra": "139 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 75957,
            "unit": "B/op",
            "extra": "139 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 826,
            "unit": "allocs/op",
            "extra": "139 times\n4 procs"
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
        "date": 1764259892879,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 3846165,
            "unit": "ns/op\t   38311 B/op\t     415 allocs/op",
            "extra": "277 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 3846165,
            "unit": "ns/op",
            "extra": "277 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 38311,
            "unit": "B/op",
            "extra": "277 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 415,
            "unit": "allocs/op",
            "extra": "277 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1506729,
            "unit": "ns/op\t   39895 B/op\t     443 allocs/op",
            "extra": "670 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1506729,
            "unit": "ns/op",
            "extra": "670 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 39895,
            "unit": "B/op",
            "extra": "670 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 443,
            "unit": "allocs/op",
            "extra": "670 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 7055250,
            "unit": "ns/op\t   77003 B/op\t     826 allocs/op",
            "extra": "142 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 7055250,
            "unit": "ns/op",
            "extra": "142 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 77003,
            "unit": "B/op",
            "extra": "142 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 826,
            "unit": "allocs/op",
            "extra": "142 times\n4 procs"
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
        "date": 1764261366322,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 3793220,
            "unit": "ns/op\t   38166 B/op\t     415 allocs/op",
            "extra": "267 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 3793220,
            "unit": "ns/op",
            "extra": "267 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 38166,
            "unit": "B/op",
            "extra": "267 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 415,
            "unit": "allocs/op",
            "extra": "267 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1554457,
            "unit": "ns/op\t   39985 B/op\t     443 allocs/op",
            "extra": "644 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1554457,
            "unit": "ns/op",
            "extra": "644 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 39985,
            "unit": "B/op",
            "extra": "644 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 443,
            "unit": "allocs/op",
            "extra": "644 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 7488686,
            "unit": "ns/op\t   75272 B/op\t     826 allocs/op",
            "extra": "138 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 7488686,
            "unit": "ns/op",
            "extra": "138 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 75272,
            "unit": "B/op",
            "extra": "138 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 826,
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
          "id": "7d9c9a92c643fe7ea3dc32d8bbaedfe69d0ad4ce",
          "message": "Merge pull request #2281 from gofiber/dependabot/go_modules/dynamodb/aws-modules-bedd97178e\n\nchore(deps): bump the aws-modules group across 2 directories with 11 updates",
          "timestamp": "2025-11-27T18:00:21+01:00",
          "tree_id": "2f1d11d6af85d41ba78a6f277c15a5bb91dc569c",
          "url": "https://github.com/gofiber/storage/commit/7d9c9a92c643fe7ea3dc32d8bbaedfe69d0ad4ce"
        },
        "date": 1764262934022,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 4201485,
            "unit": "ns/op\t   37591 B/op\t     416 allocs/op",
            "extra": "243 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 4201485,
            "unit": "ns/op",
            "extra": "243 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 37591,
            "unit": "B/op",
            "extra": "243 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 416,
            "unit": "allocs/op",
            "extra": "243 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1455207,
            "unit": "ns/op\t   39619 B/op\t     444 allocs/op",
            "extra": "814 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1455207,
            "unit": "ns/op",
            "extra": "814 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 39619,
            "unit": "B/op",
            "extra": "814 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 444,
            "unit": "allocs/op",
            "extra": "814 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 8525931,
            "unit": "ns/op\t   75134 B/op\t     828 allocs/op",
            "extra": "120 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 8525931,
            "unit": "ns/op",
            "extra": "120 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 75134,
            "unit": "B/op",
            "extra": "120 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 828,
            "unit": "allocs/op",
            "extra": "120 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1764834857668,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 3482342,
            "unit": "ns/op\t   32598 B/op\t     377 allocs/op",
            "extra": "296 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 3482342,
            "unit": "ns/op",
            "extra": "296 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 32598,
            "unit": "B/op",
            "extra": "296 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 377,
            "unit": "allocs/op",
            "extra": "296 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1455808,
            "unit": "ns/op\t   34133 B/op\t     405 allocs/op",
            "extra": "698 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1455808,
            "unit": "ns/op",
            "extra": "698 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 34133,
            "unit": "B/op",
            "extra": "698 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 405,
            "unit": "allocs/op",
            "extra": "698 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 6702546,
            "unit": "ns/op\t   65134 B/op\t     750 allocs/op",
            "extra": "153 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 6702546,
            "unit": "ns/op",
            "extra": "153 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 65134,
            "unit": "B/op",
            "extra": "153 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 750,
            "unit": "allocs/op",
            "extra": "153 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1765266704225,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 4650456,
            "unit": "ns/op\t   32412 B/op\t     377 allocs/op",
            "extra": "268 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 4650456,
            "unit": "ns/op",
            "extra": "268 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 32412,
            "unit": "B/op",
            "extra": "268 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 377,
            "unit": "allocs/op",
            "extra": "268 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1486923,
            "unit": "ns/op\t   33935 B/op\t     405 allocs/op",
            "extra": "684 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1486923,
            "unit": "ns/op",
            "extra": "684 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 33935,
            "unit": "B/op",
            "extra": "684 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 405,
            "unit": "allocs/op",
            "extra": "684 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 9377758,
            "unit": "ns/op\t   65631 B/op\t     750 allocs/op",
            "extra": "109 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 9377758,
            "unit": "ns/op",
            "extra": "109 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 65631,
            "unit": "B/op",
            "extra": "109 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 750,
            "unit": "allocs/op",
            "extra": "109 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1765267734840,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 3696888,
            "unit": "ns/op\t   31614 B/op\t     377 allocs/op",
            "extra": "297 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 3696888,
            "unit": "ns/op",
            "extra": "297 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 31614,
            "unit": "B/op",
            "extra": "297 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 377,
            "unit": "allocs/op",
            "extra": "297 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1508826,
            "unit": "ns/op\t   34104 B/op\t     405 allocs/op",
            "extra": "679 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1508826,
            "unit": "ns/op",
            "extra": "679 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 34104,
            "unit": "B/op",
            "extra": "679 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 405,
            "unit": "allocs/op",
            "extra": "679 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 7481809,
            "unit": "ns/op\t   64765 B/op\t     750 allocs/op",
            "extra": "141 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 7481809,
            "unit": "ns/op",
            "extra": "141 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 64765,
            "unit": "B/op",
            "extra": "141 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 750,
            "unit": "allocs/op",
            "extra": "141 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1765351669466,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 2993406,
            "unit": "ns/op\t   32322 B/op\t     377 allocs/op",
            "extra": "345 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 2993406,
            "unit": "ns/op",
            "extra": "345 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 32322,
            "unit": "B/op",
            "extra": "345 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 377,
            "unit": "allocs/op",
            "extra": "345 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1391942,
            "unit": "ns/op\t   33998 B/op\t     405 allocs/op",
            "extra": "757 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1391942,
            "unit": "ns/op",
            "extra": "757 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 33998,
            "unit": "B/op",
            "extra": "757 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 405,
            "unit": "allocs/op",
            "extra": "757 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 5636443,
            "unit": "ns/op\t   64584 B/op\t     750 allocs/op",
            "extra": "190 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 5636443,
            "unit": "ns/op",
            "extra": "190 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 64584,
            "unit": "B/op",
            "extra": "190 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 750,
            "unit": "allocs/op",
            "extra": "190 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "819ed0e64144c1950ab58a2777717bda04bfa848",
          "message": "Merge pull request #2332 from gofiber/dependabot/go_modules/dynamodb/github.com/morikuni/aec-1.1.0\n\nchore(deps): bump github.com/morikuni/aec from 1.0.0 to 1.1.0 in /dynamodb",
          "timestamp": "2025-12-11T08:29:13+01:00",
          "tree_id": "ec376e03847f02ec60ffa2f08fe17e319e2bcad6",
          "url": "https://github.com/gofiber/storage/commit/819ed0e64144c1950ab58a2777717bda04bfa848"
        },
        "date": 1765438984959,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 3899906,
            "unit": "ns/op\t   32942 B/op\t     377 allocs/op",
            "extra": "265 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 3899906,
            "unit": "ns/op",
            "extra": "265 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 32942,
            "unit": "B/op",
            "extra": "265 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 377,
            "unit": "allocs/op",
            "extra": "265 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1634931,
            "unit": "ns/op\t   33911 B/op\t     405 allocs/op",
            "extra": "631 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1634931,
            "unit": "ns/op",
            "extra": "631 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 33911,
            "unit": "B/op",
            "extra": "631 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 405,
            "unit": "allocs/op",
            "extra": "631 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 8587938,
            "unit": "ns/op\t   63797 B/op\t     750 allocs/op",
            "extra": "123 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 8587938,
            "unit": "ns/op",
            "extra": "123 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 63797,
            "unit": "B/op",
            "extra": "123 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 750,
            "unit": "allocs/op",
            "extra": "123 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1765956591340,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 4314287,
            "unit": "ns/op\t   32025 B/op\t     368 allocs/op",
            "extra": "259 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 4314287,
            "unit": "ns/op",
            "extra": "259 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 32025,
            "unit": "B/op",
            "extra": "259 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 368,
            "unit": "allocs/op",
            "extra": "259 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1447434,
            "unit": "ns/op\t   34331 B/op\t     397 allocs/op",
            "extra": "724 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1447434,
            "unit": "ns/op",
            "extra": "724 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 34331,
            "unit": "B/op",
            "extra": "724 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 397,
            "unit": "allocs/op",
            "extra": "724 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 7923081,
            "unit": "ns/op\t   64277 B/op\t     733 allocs/op",
            "extra": "127 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 7923081,
            "unit": "ns/op",
            "extra": "127 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 64277,
            "unit": "B/op",
            "extra": "127 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 733,
            "unit": "allocs/op",
            "extra": "127 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1768206368643,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 3869195,
            "unit": "ns/op\t   32028 B/op\t     368 allocs/op",
            "extra": "268 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 3869195,
            "unit": "ns/op",
            "extra": "268 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 32028,
            "unit": "B/op",
            "extra": "268 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 368,
            "unit": "allocs/op",
            "extra": "268 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1474972,
            "unit": "ns/op\t   33808 B/op\t     397 allocs/op",
            "extra": "706 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1474972,
            "unit": "ns/op",
            "extra": "706 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 33808,
            "unit": "B/op",
            "extra": "706 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 397,
            "unit": "allocs/op",
            "extra": "706 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 7542689,
            "unit": "ns/op\t   63791 B/op\t     733 allocs/op",
            "extra": "138 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 7542689,
            "unit": "ns/op",
            "extra": "138 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 63791,
            "unit": "B/op",
            "extra": "138 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 733,
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
          "id": "2581f5a768a521091fd4dedab76186aff359f796",
          "message": "Merge pull request #2395 from gofiber/dependabot/go_modules/aerospike/golang-modules-305631bd7c",
          "timestamp": "2026-01-14T08:37:37+01:00",
          "tree_id": "699ec6907f378c93061af14d650b2f83e5797ac7",
          "url": "https://github.com/gofiber/storage/commit/2581f5a768a521091fd4dedab76186aff359f796"
        },
        "date": 1768377107428,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 3399132,
            "unit": "ns/op\t   32319 B/op\t     368 allocs/op",
            "extra": "295 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 3399132,
            "unit": "ns/op",
            "extra": "295 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 32319,
            "unit": "B/op",
            "extra": "295 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 368,
            "unit": "allocs/op",
            "extra": "295 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1504063,
            "unit": "ns/op\t   33782 B/op\t     397 allocs/op",
            "extra": "691 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1504063,
            "unit": "ns/op",
            "extra": "691 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 33782,
            "unit": "B/op",
            "extra": "691 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 397,
            "unit": "allocs/op",
            "extra": "691 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 6888319,
            "unit": "ns/op\t   63910 B/op\t     733 allocs/op",
            "extra": "147 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 6888319,
            "unit": "ns/op",
            "extra": "147 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 63910,
            "unit": "B/op",
            "extra": "147 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 733,
            "unit": "allocs/op",
            "extra": "147 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1768377406384,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 3534879,
            "unit": "ns/op\t   32421 B/op\t     368 allocs/op",
            "extra": "286 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 3534879,
            "unit": "ns/op",
            "extra": "286 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 32421,
            "unit": "B/op",
            "extra": "286 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 368,
            "unit": "allocs/op",
            "extra": "286 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1539522,
            "unit": "ns/op\t   34126 B/op\t     397 allocs/op",
            "extra": "661 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1539522,
            "unit": "ns/op",
            "extra": "661 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 34126,
            "unit": "B/op",
            "extra": "661 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 397,
            "unit": "allocs/op",
            "extra": "661 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 7069618,
            "unit": "ns/op\t   64019 B/op\t     733 allocs/op",
            "extra": "146 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 7069618,
            "unit": "ns/op",
            "extra": "146 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 64019,
            "unit": "B/op",
            "extra": "146 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 733,
            "unit": "allocs/op",
            "extra": "146 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1768379344240,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_DynamoDB_Set",
            "value": 3973263,
            "unit": "ns/op\t   32400 B/op\t     368 allocs/op",
            "extra": "261 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 3973263,
            "unit": "ns/op",
            "extra": "261 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 32400,
            "unit": "B/op",
            "extra": "261 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 368,
            "unit": "allocs/op",
            "extra": "261 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get",
            "value": 1512973,
            "unit": "ns/op\t   34003 B/op\t     397 allocs/op",
            "extra": "691 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1512973,
            "unit": "ns/op",
            "extra": "691 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 34003,
            "unit": "B/op",
            "extra": "691 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 397,
            "unit": "allocs/op",
            "extra": "691 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete",
            "value": 7925198,
            "unit": "ns/op\t   63427 B/op\t     733 allocs/op",
            "extra": "129 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 7925198,
            "unit": "ns/op",
            "extra": "129 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 63427,
            "unit": "B/op",
            "extra": "129 times\n4 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 733,
            "unit": "allocs/op",
            "extra": "129 times\n4 procs"
          }
        ]
      }
    ]
  }
}