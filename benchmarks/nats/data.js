window.BENCHMARK_DATA = {
  "lastUpdate": 1764259855619,
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
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1751882196949,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Nats_Set",
            "value": 270384,
            "unit": "ns/op\t    2545 B/op\t      45 allocs/op",
            "extra": "4160 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - ns/op",
            "value": 270384,
            "unit": "ns/op",
            "extra": "4160 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - B/op",
            "value": 2545,
            "unit": "B/op",
            "extra": "4160 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - allocs/op",
            "value": 45,
            "unit": "allocs/op",
            "extra": "4160 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get",
            "value": 264440,
            "unit": "ns/op\t    2252 B/op\t      39 allocs/op",
            "extra": "4266 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - ns/op",
            "value": 264440,
            "unit": "ns/op",
            "extra": "4266 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - B/op",
            "value": 2252,
            "unit": "B/op",
            "extra": "4266 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "4266 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete",
            "value": 542101,
            "unit": "ns/op\t    4002 B/op\t      71 allocs/op",
            "extra": "2170 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - ns/op",
            "value": 542101,
            "unit": "ns/op",
            "extra": "2170 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - B/op",
            "value": 4002,
            "unit": "B/op",
            "extra": "2170 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - allocs/op",
            "value": 71,
            "unit": "allocs/op",
            "extra": "2170 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1752653336451,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Nats_Set",
            "value": 273772,
            "unit": "ns/op\t    2545 B/op\t      45 allocs/op",
            "extra": "4213 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - ns/op",
            "value": 273772,
            "unit": "ns/op",
            "extra": "4213 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - B/op",
            "value": 2545,
            "unit": "B/op",
            "extra": "4213 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - allocs/op",
            "value": 45,
            "unit": "allocs/op",
            "extra": "4213 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get",
            "value": 263389,
            "unit": "ns/op\t    2252 B/op\t      39 allocs/op",
            "extra": "4317 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - ns/op",
            "value": 263389,
            "unit": "ns/op",
            "extra": "4317 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - B/op",
            "value": 2252,
            "unit": "B/op",
            "extra": "4317 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "4317 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete",
            "value": 553857,
            "unit": "ns/op\t    4004 B/op\t      71 allocs/op",
            "extra": "2140 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - ns/op",
            "value": 553857,
            "unit": "ns/op",
            "extra": "2140 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - B/op",
            "value": 4004,
            "unit": "B/op",
            "extra": "2140 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - allocs/op",
            "value": 71,
            "unit": "allocs/op",
            "extra": "2140 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0204e205820f34a0648d331526066651cc6efa80",
          "message": "Merge pull request #1842 from gofiber/dependabot/go_modules/nats/github.com/nats-io/nats.go-1.44.0\n\nchore(deps): bump github.com/nats-io/nats.go from 1.43.0 to 1.44.0 in /nats",
          "timestamp": "2025-07-30T09:19:36+02:00",
          "tree_id": "83ff560efffd0bb2648490abefdb84c51a31e99a",
          "url": "https://github.com/gofiber/storage/commit/0204e205820f34a0648d331526066651cc6efa80"
        },
        "date": 1753860027675,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Nats_Set",
            "value": 271749,
            "unit": "ns/op\t    2546 B/op\t      45 allocs/op",
            "extra": "4275 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - ns/op",
            "value": 271749,
            "unit": "ns/op",
            "extra": "4275 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - B/op",
            "value": 2546,
            "unit": "B/op",
            "extra": "4275 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - allocs/op",
            "value": 45,
            "unit": "allocs/op",
            "extra": "4275 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get",
            "value": 260227,
            "unit": "ns/op\t    2252 B/op\t      39 allocs/op",
            "extra": "4304 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - ns/op",
            "value": 260227,
            "unit": "ns/op",
            "extra": "4304 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - B/op",
            "value": 2252,
            "unit": "B/op",
            "extra": "4304 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "4304 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete",
            "value": 542298,
            "unit": "ns/op\t    4004 B/op\t      71 allocs/op",
            "extra": "2157 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - ns/op",
            "value": 542298,
            "unit": "ns/op",
            "extra": "2157 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - B/op",
            "value": 4004,
            "unit": "B/op",
            "extra": "2157 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - allocs/op",
            "value": 71,
            "unit": "allocs/op",
            "extra": "2157 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e7995a24ac8177bb9d0415c546e0a6ca06df5826",
          "message": "Merge pull request #1874 from gofiber/dependabot/go_modules/nats/github.com/nats-io/nats.go-1.45.0\n\nchore(deps): bump github.com/nats-io/nats.go from 1.44.0 to 1.45.0 in /nats",
          "timestamp": "2025-08-20T12:22:21+02:00",
          "tree_id": "031012f81a571d1701902d157e30a7aaff928e8e",
          "url": "https://github.com/gofiber/storage/commit/e7995a24ac8177bb9d0415c546e0a6ca06df5826"
        },
        "date": 1755685392464,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Nats_Set",
            "value": 271921,
            "unit": "ns/op\t    2561 B/op\t      45 allocs/op",
            "extra": "4209 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - ns/op",
            "value": 271921,
            "unit": "ns/op",
            "extra": "4209 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - B/op",
            "value": 2561,
            "unit": "B/op",
            "extra": "4209 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - allocs/op",
            "value": 45,
            "unit": "allocs/op",
            "extra": "4209 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get",
            "value": 261286,
            "unit": "ns/op\t    2252 B/op\t      39 allocs/op",
            "extra": "4460 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - ns/op",
            "value": 261286,
            "unit": "ns/op",
            "extra": "4460 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - B/op",
            "value": 2252,
            "unit": "B/op",
            "extra": "4460 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "4460 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete",
            "value": 540901,
            "unit": "ns/op\t    4036 B/op\t      71 allocs/op",
            "extra": "2152 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - ns/op",
            "value": 540901,
            "unit": "ns/op",
            "extra": "2152 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - B/op",
            "value": 4036,
            "unit": "B/op",
            "extra": "2152 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - allocs/op",
            "value": 71,
            "unit": "allocs/op",
            "extra": "2152 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7db1e7d9eca3b17b46e158f204d05b2e663a3b5f",
          "message": "Merge pull request #1913 from gofiber/dependabot/go_modules/nats/github.com/nats-io/nats.go-1.46.0\n\nchore(deps): bump github.com/nats-io/nats.go from 1.45.0 to 1.46.0 in /nats",
          "timestamp": "2025-09-23T09:20:24+02:00",
          "tree_id": "8fb8060bba1e33ad947df00e61c0755981ab9d14",
          "url": "https://github.com/gofiber/storage/commit/7db1e7d9eca3b17b46e158f204d05b2e663a3b5f"
        },
        "date": 1758612097673,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Nats_Set",
            "value": 282890,
            "unit": "ns/op\t    2577 B/op\t      45 allocs/op",
            "extra": "4102 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - ns/op",
            "value": 282890,
            "unit": "ns/op",
            "extra": "4102 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - B/op",
            "value": 2577,
            "unit": "B/op",
            "extra": "4102 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - allocs/op",
            "value": 45,
            "unit": "allocs/op",
            "extra": "4102 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get",
            "value": 278193,
            "unit": "ns/op\t    2252 B/op\t      39 allocs/op",
            "extra": "4167 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - ns/op",
            "value": 278193,
            "unit": "ns/op",
            "extra": "4167 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - B/op",
            "value": 2252,
            "unit": "B/op",
            "extra": "4167 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "4167 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete",
            "value": 566748,
            "unit": "ns/op\t    4067 B/op\t      71 allocs/op",
            "extra": "2066 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - ns/op",
            "value": 566748,
            "unit": "ns/op",
            "extra": "2066 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - B/op",
            "value": 4067,
            "unit": "B/op",
            "extra": "2066 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - allocs/op",
            "value": 71,
            "unit": "allocs/op",
            "extra": "2066 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eae298a62676912e4d3ede8c68448f64ae996738",
          "message": "Merge pull request #1919 from gofiber/dependabot/go_modules/nats/github.com/nats-io/nats.go-1.46.1\n\nchore(deps): bump github.com/nats-io/nats.go from 1.46.0 to 1.46.1 in /nats",
          "timestamp": "2025-10-01T09:17:11+02:00",
          "tree_id": "ebbbd76d55f59db1879d067d8fa74f40bfed67c6",
          "url": "https://github.com/gofiber/storage/commit/eae298a62676912e4d3ede8c68448f64ae996738"
        },
        "date": 1759303653071,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Nats_Set",
            "value": 276158,
            "unit": "ns/op\t    2577 B/op\t      45 allocs/op",
            "extra": "4228 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - ns/op",
            "value": 276158,
            "unit": "ns/op",
            "extra": "4228 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - B/op",
            "value": 2577,
            "unit": "B/op",
            "extra": "4228 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - allocs/op",
            "value": 45,
            "unit": "allocs/op",
            "extra": "4228 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get",
            "value": 270322,
            "unit": "ns/op\t    2252 B/op\t      39 allocs/op",
            "extra": "4201 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - ns/op",
            "value": 270322,
            "unit": "ns/op",
            "extra": "4201 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - B/op",
            "value": 2252,
            "unit": "B/op",
            "extra": "4201 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "4201 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete",
            "value": 548775,
            "unit": "ns/op\t    4068 B/op\t      71 allocs/op",
            "extra": "2134 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - ns/op",
            "value": 548775,
            "unit": "ns/op",
            "extra": "2134 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - B/op",
            "value": 4068,
            "unit": "B/op",
            "extra": "2134 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - allocs/op",
            "value": 71,
            "unit": "allocs/op",
            "extra": "2134 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2e0978f79edfdfb36afd3166a8bab6cefbc6588a",
          "message": "Merge pull request #1929 from gofiber/dependabot/go_modules/nats/github.com/nats-io/nats.go-1.47.0\n\nchore(deps): bump github.com/nats-io/nats.go from 1.46.1 to 1.47.0 in /nats",
          "timestamp": "2025-10-15T09:14:09+02:00",
          "tree_id": "caba8c6a3769afdb223543832cf1cfc040ff47b1",
          "url": "https://github.com/gofiber/storage/commit/2e0978f79edfdfb36afd3166a8bab6cefbc6588a"
        },
        "date": 1760512514483,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Nats_Set",
            "value": 289285,
            "unit": "ns/op\t    2577 B/op\t      45 allocs/op",
            "extra": "3974 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - ns/op",
            "value": 289285,
            "unit": "ns/op",
            "extra": "3974 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - B/op",
            "value": 2577,
            "unit": "B/op",
            "extra": "3974 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - allocs/op",
            "value": 45,
            "unit": "allocs/op",
            "extra": "3974 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get",
            "value": 276917,
            "unit": "ns/op\t    2252 B/op\t      39 allocs/op",
            "extra": "4058 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - ns/op",
            "value": 276917,
            "unit": "ns/op",
            "extra": "4058 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - B/op",
            "value": 2252,
            "unit": "B/op",
            "extra": "4058 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "4058 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete",
            "value": 580842,
            "unit": "ns/op\t    4068 B/op\t      71 allocs/op",
            "extra": "2062 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - ns/op",
            "value": 580842,
            "unit": "ns/op",
            "extra": "2062 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - B/op",
            "value": 4068,
            "unit": "B/op",
            "extra": "2062 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - allocs/op",
            "value": 71,
            "unit": "allocs/op",
            "extra": "2062 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "31e9cec25364960153f53abd878bd1ad7ae352b1",
          "message": "Merge pull request #1965 from gofiber/dependabot/go_modules/nats/github.com/docker/docker-28.3.3incompatible\n\nchore(deps): bump github.com/docker/docker from 28.2.2+incompatible to 28.3.3+incompatible in /nats",
          "timestamp": "2025-11-06T08:58:10+01:00",
          "tree_id": "2ef44f083a9b655741f3510e613a0c1485b98144",
          "url": "https://github.com/gofiber/storage/commit/31e9cec25364960153f53abd878bd1ad7ae352b1"
        },
        "date": 1762417182164,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Nats_Set",
            "value": 278283,
            "unit": "ns/op\t    2577 B/op\t      45 allocs/op",
            "extra": "4176 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - ns/op",
            "value": 278283,
            "unit": "ns/op",
            "extra": "4176 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - B/op",
            "value": 2577,
            "unit": "B/op",
            "extra": "4176 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - allocs/op",
            "value": 45,
            "unit": "allocs/op",
            "extra": "4176 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get",
            "value": 272010,
            "unit": "ns/op\t    2253 B/op\t      39 allocs/op",
            "extra": "4198 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - ns/op",
            "value": 272010,
            "unit": "ns/op",
            "extra": "4198 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - B/op",
            "value": 2253,
            "unit": "B/op",
            "extra": "4198 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "4198 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete",
            "value": 556847,
            "unit": "ns/op\t    4068 B/op\t      71 allocs/op",
            "extra": "2148 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - ns/op",
            "value": 556847,
            "unit": "ns/op",
            "extra": "2148 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - B/op",
            "value": 4068,
            "unit": "B/op",
            "extra": "2148 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - allocs/op",
            "value": 71,
            "unit": "allocs/op",
            "extra": "2148 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b374dc00e83514c3862a182f2ab993232f1d107d",
          "message": "Merge pull request #1989 from gofiber/dependabot/go_modules/nats/github.com/docker/docker-28.5.2incompatible\n\nchore(deps): bump github.com/docker/docker from 28.3.3+incompatible to 28.5.2+incompatible in /nats",
          "timestamp": "2025-11-06T09:19:29+01:00",
          "tree_id": "807cc14a0674f174244de87670caf03e48fcb730",
          "url": "https://github.com/gofiber/storage/commit/b374dc00e83514c3862a182f2ab993232f1d107d"
        },
        "date": 1762418232042,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Nats_Set",
            "value": 292236,
            "unit": "ns/op\t    2577 B/op\t      45 allocs/op",
            "extra": "4104 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - ns/op",
            "value": 292236,
            "unit": "ns/op",
            "extra": "4104 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - B/op",
            "value": 2577,
            "unit": "B/op",
            "extra": "4104 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - allocs/op",
            "value": 45,
            "unit": "allocs/op",
            "extra": "4104 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get",
            "value": 281107,
            "unit": "ns/op\t    2252 B/op\t      39 allocs/op",
            "extra": "4148 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - ns/op",
            "value": 281107,
            "unit": "ns/op",
            "extra": "4148 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - B/op",
            "value": 2252,
            "unit": "B/op",
            "extra": "4148 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "4148 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete",
            "value": 569397,
            "unit": "ns/op\t    4066 B/op\t      71 allocs/op",
            "extra": "2077 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - ns/op",
            "value": 569397,
            "unit": "ns/op",
            "extra": "2077 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - B/op",
            "value": 4066,
            "unit": "B/op",
            "extra": "2077 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - allocs/op",
            "value": 71,
            "unit": "allocs/op",
            "extra": "2077 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1763657809917,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Nats_Set",
            "value": 293113,
            "unit": "ns/op\t    2577 B/op\t      45 allocs/op",
            "extra": "3998 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - ns/op",
            "value": 293113,
            "unit": "ns/op",
            "extra": "3998 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - B/op",
            "value": 2577,
            "unit": "B/op",
            "extra": "3998 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - allocs/op",
            "value": 45,
            "unit": "allocs/op",
            "extra": "3998 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get",
            "value": 286720,
            "unit": "ns/op\t    2252 B/op\t      39 allocs/op",
            "extra": "4010 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - ns/op",
            "value": 286720,
            "unit": "ns/op",
            "extra": "4010 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - B/op",
            "value": 2252,
            "unit": "B/op",
            "extra": "4010 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "4010 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete",
            "value": 591630,
            "unit": "ns/op\t    4066 B/op\t      71 allocs/op",
            "extra": "2060 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - ns/op",
            "value": 591630,
            "unit": "ns/op",
            "extra": "2060 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - B/op",
            "value": 4066,
            "unit": "B/op",
            "extra": "2060 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - allocs/op",
            "value": 71,
            "unit": "allocs/op",
            "extra": "2060 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1763662366633,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Nats_Set",
            "value": 287292,
            "unit": "ns/op\t    2609 B/op\t      42 allocs/op",
            "extra": "4056 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - ns/op",
            "value": 287292,
            "unit": "ns/op",
            "extra": "4056 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - B/op",
            "value": 2609,
            "unit": "B/op",
            "extra": "4056 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "4056 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get",
            "value": 278226,
            "unit": "ns/op\t    2252 B/op\t      39 allocs/op",
            "extra": "4174 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - ns/op",
            "value": 278226,
            "unit": "ns/op",
            "extra": "4174 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - B/op",
            "value": 2252,
            "unit": "B/op",
            "extra": "4174 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "4174 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete",
            "value": 568038,
            "unit": "ns/op\t    4132 B/op\t      69 allocs/op",
            "extra": "2029 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - ns/op",
            "value": 568038,
            "unit": "ns/op",
            "extra": "2029 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - B/op",
            "value": 4132,
            "unit": "B/op",
            "extra": "2029 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - allocs/op",
            "value": 69,
            "unit": "allocs/op",
            "extra": "2029 times\n4 procs"
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
        "date": 1764259851370,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Nats_Set",
            "value": 286002,
            "unit": "ns/op\t    2609 B/op\t      42 allocs/op",
            "extra": "4078 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - ns/op",
            "value": 286002,
            "unit": "ns/op",
            "extra": "4078 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - B/op",
            "value": 2609,
            "unit": "B/op",
            "extra": "4078 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "4078 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get",
            "value": 274138,
            "unit": "ns/op\t    2253 B/op\t      39 allocs/op",
            "extra": "4082 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - ns/op",
            "value": 274138,
            "unit": "ns/op",
            "extra": "4082 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - B/op",
            "value": 2253,
            "unit": "B/op",
            "extra": "4082 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "4082 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete",
            "value": 562872,
            "unit": "ns/op\t    4132 B/op\t      69 allocs/op",
            "extra": "2086 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - ns/op",
            "value": 562872,
            "unit": "ns/op",
            "extra": "2086 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - B/op",
            "value": 4132,
            "unit": "B/op",
            "extra": "2086 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - allocs/op",
            "value": 69,
            "unit": "allocs/op",
            "extra": "2086 times\n4 procs"
          }
        ]
      }
    ]
  }
}