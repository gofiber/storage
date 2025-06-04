window.BENCHMARK_DATA = {
  "lastUpdate": 1749023016915,
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
        "date": 1742477891529,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Nats_Set",
            "value": 266682,
            "unit": "ns/op\t    2465 B/op\t      45 allocs/op",
            "extra": "4353 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - ns/op",
            "value": 266682,
            "unit": "ns/op",
            "extra": "4353 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - B/op",
            "value": 2465,
            "unit": "B/op",
            "extra": "4353 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - allocs/op",
            "value": 45,
            "unit": "allocs/op",
            "extra": "4353 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get",
            "value": 267189,
            "unit": "ns/op\t    2189 B/op\t      39 allocs/op",
            "extra": "4386 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - ns/op",
            "value": 267189,
            "unit": "ns/op",
            "extra": "4386 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - B/op",
            "value": 2189,
            "unit": "B/op",
            "extra": "4386 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "4386 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete",
            "value": 542870,
            "unit": "ns/op\t    3834 B/op\t      71 allocs/op",
            "extra": "2163 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - ns/op",
            "value": 542870,
            "unit": "ns/op",
            "extra": "2163 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - B/op",
            "value": 3834,
            "unit": "B/op",
            "extra": "2163 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - allocs/op",
            "value": 71,
            "unit": "allocs/op",
            "extra": "2163 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd342714910ac779c7b63e9479a3a9c9a91b1b47",
          "message": "Merge pull request #1596 from gofiber/dependabot/go_modules/nats/github.com/stretchr/testify-1.10.0\n\nchore(deps): bump github.com/stretchr/testify from 1.9.0 to 1.10.0 in /nats",
          "timestamp": "2025-03-26T20:21:45+01:00",
          "tree_id": "eb1772bbc3da1d2e24626cb0363f522deb97def1",
          "url": "https://github.com/gofiber/storage/commit/cd342714910ac779c7b63e9479a3a9c9a91b1b47"
        },
        "date": 1743019117029,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Nats_Set",
            "value": 268185,
            "unit": "ns/op\t    2465 B/op\t      45 allocs/op",
            "extra": "4321 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - ns/op",
            "value": 268185,
            "unit": "ns/op",
            "extra": "4321 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - B/op",
            "value": 2465,
            "unit": "B/op",
            "extra": "4321 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - allocs/op",
            "value": 45,
            "unit": "allocs/op",
            "extra": "4321 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get",
            "value": 260325,
            "unit": "ns/op\t    2189 B/op\t      39 allocs/op",
            "extra": "4446 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - ns/op",
            "value": 260325,
            "unit": "ns/op",
            "extra": "4446 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - B/op",
            "value": 2189,
            "unit": "B/op",
            "extra": "4446 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "4446 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete",
            "value": 527510,
            "unit": "ns/op\t    3837 B/op\t      71 allocs/op",
            "extra": "2206 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - ns/op",
            "value": 527510,
            "unit": "ns/op",
            "extra": "2206 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - B/op",
            "value": 3837,
            "unit": "B/op",
            "extra": "2206 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - allocs/op",
            "value": 71,
            "unit": "allocs/op",
            "extra": "2206 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1744190331938,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Nats_Set",
            "value": 279118,
            "unit": "ns/op\t    2513 B/op\t      45 allocs/op",
            "extra": "4257 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - ns/op",
            "value": 279118,
            "unit": "ns/op",
            "extra": "4257 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - B/op",
            "value": 2513,
            "unit": "B/op",
            "extra": "4257 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - allocs/op",
            "value": 45,
            "unit": "allocs/op",
            "extra": "4257 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get",
            "value": 268224,
            "unit": "ns/op\t    2236 B/op\t      39 allocs/op",
            "extra": "4350 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - ns/op",
            "value": 268224,
            "unit": "ns/op",
            "extra": "4350 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - B/op",
            "value": 2236,
            "unit": "B/op",
            "extra": "4350 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "4350 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete",
            "value": 547568,
            "unit": "ns/op\t    3932 B/op\t      71 allocs/op",
            "extra": "2169 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - ns/op",
            "value": 547568,
            "unit": "ns/op",
            "extra": "2169 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - B/op",
            "value": 3932,
            "unit": "B/op",
            "extra": "2169 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - allocs/op",
            "value": 71,
            "unit": "allocs/op",
            "extra": "2169 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1adc6bfd94f25e845c38868d1493d9f655fc727a",
          "message": "Merge pull request #1657 from gofiber/dependabot/go_modules/nats/github.com/nats-io/nats.go-1.41.1\n\nchore(deps): bump github.com/nats-io/nats.go from 1.37.0 to 1.41.1 in /nats",
          "timestamp": "2025-04-11T10:07:47+02:00",
          "tree_id": "e7302185ed9fe7dca7a326d187c6f8586313c49d",
          "url": "https://github.com/gofiber/storage/commit/1adc6bfd94f25e845c38868d1493d9f655fc727a"
        },
        "date": 1744358929944,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Nats_Set",
            "value": 271218,
            "unit": "ns/op\t    2529 B/op\t      45 allocs/op",
            "extra": "4173 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - ns/op",
            "value": 271218,
            "unit": "ns/op",
            "extra": "4173 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - B/op",
            "value": 2529,
            "unit": "B/op",
            "extra": "4173 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - allocs/op",
            "value": 45,
            "unit": "allocs/op",
            "extra": "4173 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get",
            "value": 264318,
            "unit": "ns/op\t    2236 B/op\t      39 allocs/op",
            "extra": "4368 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - ns/op",
            "value": 264318,
            "unit": "ns/op",
            "extra": "4368 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - B/op",
            "value": 2236,
            "unit": "B/op",
            "extra": "4368 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "4368 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete",
            "value": 527987,
            "unit": "ns/op\t    3963 B/op\t      71 allocs/op",
            "extra": "2196 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - ns/op",
            "value": 527987,
            "unit": "ns/op",
            "extra": "2196 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - B/op",
            "value": 3963,
            "unit": "B/op",
            "extra": "2196 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - allocs/op",
            "value": 71,
            "unit": "allocs/op",
            "extra": "2196 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1744782256444,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Nats_Set",
            "value": 273519,
            "unit": "ns/op\t    2545 B/op\t      45 allocs/op",
            "extra": "4287 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - ns/op",
            "value": 273519,
            "unit": "ns/op",
            "extra": "4287 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - B/op",
            "value": 2545,
            "unit": "B/op",
            "extra": "4287 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - allocs/op",
            "value": 45,
            "unit": "allocs/op",
            "extra": "4287 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get",
            "value": 265148,
            "unit": "ns/op\t    2252 B/op\t      39 allocs/op",
            "extra": "4322 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - ns/op",
            "value": 265148,
            "unit": "ns/op",
            "extra": "4322 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - B/op",
            "value": 2252,
            "unit": "B/op",
            "extra": "4322 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "4322 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete",
            "value": 527821,
            "unit": "ns/op\t    3996 B/op\t      71 allocs/op",
            "extra": "2210 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - ns/op",
            "value": 527821,
            "unit": "ns/op",
            "extra": "2210 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - B/op",
            "value": 3996,
            "unit": "B/op",
            "extra": "2210 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - allocs/op",
            "value": 71,
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
          "id": "25935ed3d6cb0d0b4c200a83f988366f3f1fead4",
          "message": "Merge pull request #1681 from gofiber/dependabot/go_modules/nats/github.com/nats-io/nats.go-1.41.2\n\nchore(deps): bump github.com/nats-io/nats.go from 1.41.1 to 1.41.2 in /nats",
          "timestamp": "2025-04-21T11:22:28+02:00",
          "tree_id": "a706b7da98985fc3e50101870a78a92fb1e230c2",
          "url": "https://github.com/gofiber/storage/commit/25935ed3d6cb0d0b4c200a83f988366f3f1fead4"
        },
        "date": 1745227396789,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Nats_Set",
            "value": 270882,
            "unit": "ns/op\t    2545 B/op\t      45 allocs/op",
            "extra": "4298 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - ns/op",
            "value": 270882,
            "unit": "ns/op",
            "extra": "4298 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - B/op",
            "value": 2545,
            "unit": "B/op",
            "extra": "4298 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - allocs/op",
            "value": 45,
            "unit": "allocs/op",
            "extra": "4298 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get",
            "value": 261807,
            "unit": "ns/op\t    2252 B/op\t      39 allocs/op",
            "extra": "4359 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - ns/op",
            "value": 261807,
            "unit": "ns/op",
            "extra": "4359 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - B/op",
            "value": 2252,
            "unit": "B/op",
            "extra": "4359 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "4359 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete",
            "value": 537472,
            "unit": "ns/op\t    3994 B/op\t      71 allocs/op",
            "extra": "2205 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - ns/op",
            "value": 537472,
            "unit": "ns/op",
            "extra": "2205 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - B/op",
            "value": 3994,
            "unit": "B/op",
            "extra": "2205 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - allocs/op",
            "value": 71,
            "unit": "allocs/op",
            "extra": "2205 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b1f2b4f2b3c648ca1dcc0432271169f4a35b8c33",
          "message": "Merge pull request #1685 from gofiber/dependabot/go_modules/nats/github.com/mdelapenya/tlscert-0.2.0\n\nchore(deps): bump github.com/mdelapenya/tlscert from 0.1.0 to 0.2.0 in /nats",
          "timestamp": "2025-04-24T09:59:23+02:00",
          "tree_id": "0719c8fbdf3323dbaed24d1d1e267d2e33e27acc",
          "url": "https://github.com/gofiber/storage/commit/b1f2b4f2b3c648ca1dcc0432271169f4a35b8c33"
        },
        "date": 1745481633150,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Nats_Set",
            "value": 279860,
            "unit": "ns/op\t    2545 B/op\t      45 allocs/op",
            "extra": "4062 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - ns/op",
            "value": 279860,
            "unit": "ns/op",
            "extra": "4062 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - B/op",
            "value": 2545,
            "unit": "B/op",
            "extra": "4062 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - allocs/op",
            "value": 45,
            "unit": "allocs/op",
            "extra": "4062 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get",
            "value": 269981,
            "unit": "ns/op\t    2252 B/op\t      39 allocs/op",
            "extra": "4287 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - ns/op",
            "value": 269981,
            "unit": "ns/op",
            "extra": "4287 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - B/op",
            "value": 2252,
            "unit": "B/op",
            "extra": "4287 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "4287 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete",
            "value": 553818,
            "unit": "ns/op\t    3995 B/op\t      71 allocs/op",
            "extra": "2080 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - ns/op",
            "value": 553818,
            "unit": "ns/op",
            "extra": "2080 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - B/op",
            "value": 3995,
            "unit": "B/op",
            "extra": "2080 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - allocs/op",
            "value": 71,
            "unit": "allocs/op",
            "extra": "2080 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "353e6931a631f0754e851d5e8ad3b5e9493b17c2",
          "message": "Merge pull request #1714 from gofiber/dependabot/go_modules/nats/github.com/testcontainers/testcontainers-go/modules/nats-0.37.0\n\nchore(deps): bump github.com/testcontainers/testcontainers-go/modules/nats from 0.36.0 to 0.37.0 in /nats",
          "timestamp": "2025-04-29T09:39:30+02:00",
          "tree_id": "f336254118cecb3ce14166b4a8b0d7eb660d9b1a",
          "url": "https://github.com/gofiber/storage/commit/353e6931a631f0754e851d5e8ad3b5e9493b17c2"
        },
        "date": 1745912589772,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Nats_Set",
            "value": 276384,
            "unit": "ns/op\t    2545 B/op\t      45 allocs/op",
            "extra": "4270 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - ns/op",
            "value": 276384,
            "unit": "ns/op",
            "extra": "4270 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - B/op",
            "value": 2545,
            "unit": "B/op",
            "extra": "4270 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - allocs/op",
            "value": 45,
            "unit": "allocs/op",
            "extra": "4270 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get",
            "value": 261223,
            "unit": "ns/op\t    2252 B/op\t      39 allocs/op",
            "extra": "4368 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - ns/op",
            "value": 261223,
            "unit": "ns/op",
            "extra": "4368 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - B/op",
            "value": 2252,
            "unit": "B/op",
            "extra": "4368 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "4368 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete",
            "value": 548016,
            "unit": "ns/op\t    3996 B/op\t      71 allocs/op",
            "extra": "2086 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - ns/op",
            "value": 548016,
            "unit": "ns/op",
            "extra": "2086 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - B/op",
            "value": 3996,
            "unit": "B/op",
            "extra": "2086 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - allocs/op",
            "value": 71,
            "unit": "allocs/op",
            "extra": "2086 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b6d622b4494b1ad04084c5de63e8438daa4f8b11",
          "message": "Merge pull request #1705 from mdelapenya/tc-go-v.0.37-refinements\n\nchore(nats): use testcontainers-go recent APIs",
          "timestamp": "2025-04-29T18:38:36+02:00",
          "tree_id": "916026fbb05e321997289430295dedbf21c45dc6",
          "url": "https://github.com/gofiber/storage/commit/b6d622b4494b1ad04084c5de63e8438daa4f8b11"
        },
        "date": 1745944785587,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Nats_Set",
            "value": 270592,
            "unit": "ns/op\t    2545 B/op\t      45 allocs/op",
            "extra": "4138 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - ns/op",
            "value": 270592,
            "unit": "ns/op",
            "extra": "4138 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - B/op",
            "value": 2545,
            "unit": "B/op",
            "extra": "4138 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - allocs/op",
            "value": 45,
            "unit": "allocs/op",
            "extra": "4138 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get",
            "value": 261621,
            "unit": "ns/op\t    2251 B/op\t      39 allocs/op",
            "extra": "4471 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - ns/op",
            "value": 261621,
            "unit": "ns/op",
            "extra": "4471 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - B/op",
            "value": 2251,
            "unit": "B/op",
            "extra": "4471 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "4471 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete",
            "value": 547337,
            "unit": "ns/op\t    3996 B/op\t      71 allocs/op",
            "extra": "2146 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - ns/op",
            "value": 547337,
            "unit": "ns/op",
            "extra": "2146 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - B/op",
            "value": 3996,
            "unit": "B/op",
            "extra": "2146 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - allocs/op",
            "value": 71,
            "unit": "allocs/op",
            "extra": "2146 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7ef0190a4a57481277ac66b1c05d64b91b93b143",
          "message": "Merge pull request #1728 from gofiber/dependabot/go_modules/nats/github.com/nats-io/nats.go-1.42.0\n\nchore(deps): bump github.com/nats-io/nats.go from 1.41.2 to 1.42.0 in /nats",
          "timestamp": "2025-05-05T10:19:04+02:00",
          "tree_id": "29934a7277b8fc43c17fca63a4ef3e9c4264b1fa",
          "url": "https://github.com/gofiber/storage/commit/7ef0190a4a57481277ac66b1c05d64b91b93b143"
        },
        "date": 1746433207543,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Nats_Set",
            "value": 272495,
            "unit": "ns/op\t    2545 B/op\t      45 allocs/op",
            "extra": "4050 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - ns/op",
            "value": 272495,
            "unit": "ns/op",
            "extra": "4050 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - B/op",
            "value": 2545,
            "unit": "B/op",
            "extra": "4050 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - allocs/op",
            "value": 45,
            "unit": "allocs/op",
            "extra": "4050 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get",
            "value": 267272,
            "unit": "ns/op\t    2251 B/op\t      39 allocs/op",
            "extra": "4298 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - ns/op",
            "value": 267272,
            "unit": "ns/op",
            "extra": "4298 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - B/op",
            "value": 2251,
            "unit": "B/op",
            "extra": "4298 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "4298 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete",
            "value": 549651,
            "unit": "ns/op\t    4004 B/op\t      71 allocs/op",
            "extra": "2084 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - ns/op",
            "value": 549651,
            "unit": "ns/op",
            "extra": "2084 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - B/op",
            "value": 4004,
            "unit": "B/op",
            "extra": "2084 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - allocs/op",
            "value": 71,
            "unit": "allocs/op",
            "extra": "2084 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "86e2c40dc0024244286bf5495758d03b81f22309",
          "message": "Merge pull request #1750 from gofiber/dependabot/go_modules/nats/github.com/nats-io/nats.go-1.43.0\n\nchore(deps): bump github.com/nats-io/nats.go from 1.42.0 to 1.43.0 in /nats",
          "timestamp": "2025-06-04T09:42:18+02:00",
          "tree_id": "1318bafd141dcee54f2371e4ae58ad79198ca85d",
          "url": "https://github.com/gofiber/storage/commit/86e2c40dc0024244286bf5495758d03b81f22309"
        },
        "date": 1749023009160,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Nats_Set",
            "value": 269071,
            "unit": "ns/op\t    2546 B/op\t      45 allocs/op",
            "extra": "4296 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - ns/op",
            "value": 269071,
            "unit": "ns/op",
            "extra": "4296 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - B/op",
            "value": 2546,
            "unit": "B/op",
            "extra": "4296 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - allocs/op",
            "value": 45,
            "unit": "allocs/op",
            "extra": "4296 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get",
            "value": 253406,
            "unit": "ns/op\t    2252 B/op\t      39 allocs/op",
            "extra": "4536 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - ns/op",
            "value": 253406,
            "unit": "ns/op",
            "extra": "4536 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - B/op",
            "value": 2252,
            "unit": "B/op",
            "extra": "4536 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "4536 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete",
            "value": 523676,
            "unit": "ns/op\t    4003 B/op\t      71 allocs/op",
            "extra": "2230 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - ns/op",
            "value": 523676,
            "unit": "ns/op",
            "extra": "2230 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - B/op",
            "value": 4003,
            "unit": "B/op",
            "extra": "2230 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - allocs/op",
            "value": 71,
            "unit": "allocs/op",
            "extra": "2230 times\n4 procs"
          }
        ]
      }
    ]
  }
}