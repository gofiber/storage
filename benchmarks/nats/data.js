window.BENCHMARK_DATA = {
  "lastUpdate": 1771288289297,
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
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "38c0e46f6e38b16585eb97702cd4f6419aa6479e",
          "message": "Merge pull request #2275 from gofiber/dependabot/go_modules/nats/github.com/nats-io/nkeys-0.4.12\n\nchore(deps): bump github.com/nats-io/nkeys from 0.4.11 to 0.4.12 in /nats",
          "timestamp": "2025-11-27T17:23:00+01:00",
          "tree_id": "98b2b0759e3c25d0e56368abfd0cf339480d229c",
          "url": "https://github.com/gofiber/storage/commit/38c0e46f6e38b16585eb97702cd4f6419aa6479e"
        },
        "date": 1764260655918,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Nats_Set",
            "value": 210738,
            "unit": "ns/op\t    2610 B/op\t      42 allocs/op",
            "extra": "4990 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - ns/op",
            "value": 210738,
            "unit": "ns/op",
            "extra": "4990 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - B/op",
            "value": 2610,
            "unit": "B/op",
            "extra": "4990 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "4990 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get",
            "value": 200824,
            "unit": "ns/op\t    2252 B/op\t      39 allocs/op",
            "extra": "5144 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - ns/op",
            "value": 200824,
            "unit": "ns/op",
            "extra": "5144 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - B/op",
            "value": 2252,
            "unit": "B/op",
            "extra": "5144 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "5144 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete",
            "value": 417674,
            "unit": "ns/op\t    4131 B/op\t      69 allocs/op",
            "extra": "2607 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - ns/op",
            "value": 417674,
            "unit": "ns/op",
            "extra": "2607 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - B/op",
            "value": 4131,
            "unit": "B/op",
            "extra": "2607 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - allocs/op",
            "value": 69,
            "unit": "allocs/op",
            "extra": "2607 times\n4 procs"
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
        "date": 1764261336136,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Nats_Set",
            "value": 279913,
            "unit": "ns/op\t    2609 B/op\t      42 allocs/op",
            "extra": "4153 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - ns/op",
            "value": 279913,
            "unit": "ns/op",
            "extra": "4153 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - B/op",
            "value": 2609,
            "unit": "B/op",
            "extra": "4153 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "4153 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get",
            "value": 270643,
            "unit": "ns/op\t    2252 B/op\t      39 allocs/op",
            "extra": "4263 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - ns/op",
            "value": 270643,
            "unit": "ns/op",
            "extra": "4263 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - B/op",
            "value": 2252,
            "unit": "B/op",
            "extra": "4263 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "4263 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete",
            "value": 560576,
            "unit": "ns/op\t    4131 B/op\t      69 allocs/op",
            "extra": "2152 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - ns/op",
            "value": 560576,
            "unit": "ns/op",
            "extra": "2152 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - B/op",
            "value": 4131,
            "unit": "B/op",
            "extra": "2152 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - allocs/op",
            "value": 69,
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
          "id": "c7ef6466c98a2fc0fcab4ebd57874b69ae912377",
          "message": "Merge pull request #2322 from gofiber/dependabot/go_modules/aerospike/opentelemetry-modules-7e2f7cdd18",
          "timestamp": "2025-12-09T09:05:19+01:00",
          "tree_id": "8af382de6bc3ee83b7a943641c2b8e8b5ad3afdf",
          "url": "https://github.com/gofiber/storage/commit/c7ef6466c98a2fc0fcab4ebd57874b69ae912377"
        },
        "date": 1765267649597,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Nats_Set",
            "value": 284456,
            "unit": "ns/op\t    2609 B/op\t      42 allocs/op",
            "extra": "4035 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - ns/op",
            "value": 284456,
            "unit": "ns/op",
            "extra": "4035 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - B/op",
            "value": 2609,
            "unit": "B/op",
            "extra": "4035 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "4035 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get",
            "value": 274267,
            "unit": "ns/op\t    2252 B/op\t      39 allocs/op",
            "extra": "4138 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - ns/op",
            "value": 274267,
            "unit": "ns/op",
            "extra": "4138 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - B/op",
            "value": 2252,
            "unit": "B/op",
            "extra": "4138 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "4138 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete",
            "value": 560645,
            "unit": "ns/op\t    4131 B/op\t      69 allocs/op",
            "extra": "2098 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - ns/op",
            "value": 560645,
            "unit": "ns/op",
            "extra": "2098 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - B/op",
            "value": 4131,
            "unit": "B/op",
            "extra": "2098 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - allocs/op",
            "value": 69,
            "unit": "allocs/op",
            "extra": "2098 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1765439851925,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Nats_Set",
            "value": 198113,
            "unit": "ns/op\t    2609 B/op\t      42 allocs/op",
            "extra": "5511 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - ns/op",
            "value": 198113,
            "unit": "ns/op",
            "extra": "5511 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - B/op",
            "value": 2609,
            "unit": "B/op",
            "extra": "5511 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "5511 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get",
            "value": 187164,
            "unit": "ns/op\t    2251 B/op\t      39 allocs/op",
            "extra": "5539 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - ns/op",
            "value": 187164,
            "unit": "ns/op",
            "extra": "5539 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - B/op",
            "value": 2251,
            "unit": "B/op",
            "extra": "5539 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "5539 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete",
            "value": 389310,
            "unit": "ns/op\t    4132 B/op\t      69 allocs/op",
            "extra": "2719 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - ns/op",
            "value": 389310,
            "unit": "ns/op",
            "extra": "2719 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - B/op",
            "value": 4132,
            "unit": "B/op",
            "extra": "2719 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - allocs/op",
            "value": 69,
            "unit": "allocs/op",
            "extra": "2719 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0094900d63cd687d6de06205ee2cc91d07475905",
          "message": "Merge pull request #2366 from gofiber/dependabot/go_modules/nats/github.com/nats-io/nats.go-1.48.0\n\nchore(deps): bump github.com/nats-io/nats.go from 1.47.0 to 1.48.0 in /nats",
          "timestamp": "2025-12-18T08:30:00+01:00",
          "tree_id": "ad27d22151e24b1666ccb11893e6af3c824f7714",
          "url": "https://github.com/gofiber/storage/commit/0094900d63cd687d6de06205ee2cc91d07475905"
        },
        "date": 1766043116785,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Nats_Set",
            "value": 199759,
            "unit": "ns/op\t    2609 B/op\t      42 allocs/op",
            "extra": "5223 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - ns/op",
            "value": 199759,
            "unit": "ns/op",
            "extra": "5223 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - B/op",
            "value": 2609,
            "unit": "B/op",
            "extra": "5223 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "5223 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get",
            "value": 194356,
            "unit": "ns/op\t    2251 B/op\t      39 allocs/op",
            "extra": "5300 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - ns/op",
            "value": 194356,
            "unit": "ns/op",
            "extra": "5300 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - B/op",
            "value": 2251,
            "unit": "B/op",
            "extra": "5300 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "5300 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete",
            "value": 403950,
            "unit": "ns/op\t    4131 B/op\t      69 allocs/op",
            "extra": "2691 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - ns/op",
            "value": 403950,
            "unit": "ns/op",
            "extra": "2691 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - B/op",
            "value": 4131,
            "unit": "B/op",
            "extra": "2691 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - allocs/op",
            "value": 69,
            "unit": "allocs/op",
            "extra": "2691 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1766043838417,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Nats_Set",
            "value": 278621,
            "unit": "ns/op\t    2611 B/op\t      42 allocs/op",
            "extra": "4207 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - ns/op",
            "value": 278621,
            "unit": "ns/op",
            "extra": "4207 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - B/op",
            "value": 2611,
            "unit": "B/op",
            "extra": "4207 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "4207 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get",
            "value": 275530,
            "unit": "ns/op\t    2252 B/op\t      39 allocs/op",
            "extra": "4254 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - ns/op",
            "value": 275530,
            "unit": "ns/op",
            "extra": "4254 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - B/op",
            "value": 2252,
            "unit": "B/op",
            "extra": "4254 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "4254 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete",
            "value": 551777,
            "unit": "ns/op\t    4131 B/op\t      69 allocs/op",
            "extra": "2148 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - ns/op",
            "value": 551777,
            "unit": "ns/op",
            "extra": "2148 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - B/op",
            "value": 4131,
            "unit": "B/op",
            "extra": "2148 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - allocs/op",
            "value": 69,
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
          "id": "2581f5a768a521091fd4dedab76186aff359f796",
          "message": "Merge pull request #2395 from gofiber/dependabot/go_modules/aerospike/golang-modules-305631bd7c",
          "timestamp": "2026-01-14T08:37:37+01:00",
          "tree_id": "699ec6907f378c93061af14d650b2f83e5797ac7",
          "url": "https://github.com/gofiber/storage/commit/2581f5a768a521091fd4dedab76186aff359f796"
        },
        "date": 1768377014352,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Nats_Set",
            "value": 227241,
            "unit": "ns/op\t    2609 B/op\t      42 allocs/op",
            "extra": "4806 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - ns/op",
            "value": 227241,
            "unit": "ns/op",
            "extra": "4806 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - B/op",
            "value": 2609,
            "unit": "B/op",
            "extra": "4806 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "4806 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get",
            "value": 216180,
            "unit": "ns/op\t    2251 B/op\t      39 allocs/op",
            "extra": "4872 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - ns/op",
            "value": 216180,
            "unit": "ns/op",
            "extra": "4872 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - B/op",
            "value": 2251,
            "unit": "B/op",
            "extra": "4872 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "4872 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete",
            "value": 446758,
            "unit": "ns/op\t    4131 B/op\t      69 allocs/op",
            "extra": "2696 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - ns/op",
            "value": 446758,
            "unit": "ns/op",
            "extra": "2696 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - B/op",
            "value": 4131,
            "unit": "B/op",
            "extra": "2696 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - allocs/op",
            "value": 69,
            "unit": "allocs/op",
            "extra": "2696 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1768377263054,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Nats_Set",
            "value": 289900,
            "unit": "ns/op\t    2611 B/op\t      42 allocs/op",
            "extra": "4128 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - ns/op",
            "value": 289900,
            "unit": "ns/op",
            "extra": "4128 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - B/op",
            "value": 2611,
            "unit": "B/op",
            "extra": "4128 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "4128 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get",
            "value": 274522,
            "unit": "ns/op\t    2252 B/op\t      39 allocs/op",
            "extra": "4044 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - ns/op",
            "value": 274522,
            "unit": "ns/op",
            "extra": "4044 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - B/op",
            "value": 2252,
            "unit": "B/op",
            "extra": "4044 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "4044 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete",
            "value": 562793,
            "unit": "ns/op\t    4133 B/op\t      69 allocs/op",
            "extra": "2083 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - ns/op",
            "value": 562793,
            "unit": "ns/op",
            "extra": "2083 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - B/op",
            "value": 4133,
            "unit": "B/op",
            "extra": "2083 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - allocs/op",
            "value": 69,
            "unit": "allocs/op",
            "extra": "2083 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1768379356045,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Nats_Set",
            "value": 282850,
            "unit": "ns/op\t    2609 B/op\t      42 allocs/op",
            "extra": "4112 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - ns/op",
            "value": 282850,
            "unit": "ns/op",
            "extra": "4112 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - B/op",
            "value": 2609,
            "unit": "B/op",
            "extra": "4112 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "4112 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get",
            "value": 271367,
            "unit": "ns/op\t    2252 B/op\t      39 allocs/op",
            "extra": "4146 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - ns/op",
            "value": 271367,
            "unit": "ns/op",
            "extra": "4146 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - B/op",
            "value": 2252,
            "unit": "B/op",
            "extra": "4146 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "4146 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete",
            "value": 565041,
            "unit": "ns/op\t    4131 B/op\t      69 allocs/op",
            "extra": "2142 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - ns/op",
            "value": 565041,
            "unit": "ns/op",
            "extra": "2142 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - B/op",
            "value": 4131,
            "unit": "B/op",
            "extra": "2142 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - allocs/op",
            "value": 69,
            "unit": "allocs/op",
            "extra": "2142 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1768380243072,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Nats_Set",
            "value": 197799,
            "unit": "ns/op\t    2609 B/op\t      42 allocs/op",
            "extra": "5282 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - ns/op",
            "value": 197799,
            "unit": "ns/op",
            "extra": "5282 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - B/op",
            "value": 2609,
            "unit": "B/op",
            "extra": "5282 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "5282 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get",
            "value": 190837,
            "unit": "ns/op\t    2252 B/op\t      39 allocs/op",
            "extra": "5395 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - ns/op",
            "value": 190837,
            "unit": "ns/op",
            "extra": "5395 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - B/op",
            "value": 2252,
            "unit": "B/op",
            "extra": "5395 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "5395 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete",
            "value": 399339,
            "unit": "ns/op\t    4131 B/op\t      69 allocs/op",
            "extra": "2709 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - ns/op",
            "value": 399339,
            "unit": "ns/op",
            "extra": "2709 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - B/op",
            "value": 4131,
            "unit": "B/op",
            "extra": "2709 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - allocs/op",
            "value": 69,
            "unit": "allocs/op",
            "extra": "2709 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "62d5a129c3f799bcb89910331f23939608623b9b",
          "message": "Merge pull request #2419 from gofiber/dependabot/go_modules/nats/github.com/sirupsen/logrus-1.9.4\n\nchore(deps): bump github.com/sirupsen/logrus from 1.9.3 to 1.9.4 in /nats",
          "timestamp": "2026-01-16T08:18:46+01:00",
          "tree_id": "21eca4a36faf72e1fc6dc1a23f41fa430bc4d48f",
          "url": "https://github.com/gofiber/storage/commit/62d5a129c3f799bcb89910331f23939608623b9b"
        },
        "date": 1768548279965,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Nats_Set",
            "value": 299873,
            "unit": "ns/op\t    2609 B/op\t      42 allocs/op",
            "extra": "3817 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - ns/op",
            "value": 299873,
            "unit": "ns/op",
            "extra": "3817 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - B/op",
            "value": 2609,
            "unit": "B/op",
            "extra": "3817 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "3817 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get",
            "value": 294463,
            "unit": "ns/op\t    2252 B/op\t      39 allocs/op",
            "extra": "3894 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - ns/op",
            "value": 294463,
            "unit": "ns/op",
            "extra": "3894 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - B/op",
            "value": 2252,
            "unit": "B/op",
            "extra": "3894 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "3894 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete",
            "value": 605366,
            "unit": "ns/op\t    4133 B/op\t      69 allocs/op",
            "extra": "1988 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - ns/op",
            "value": 605366,
            "unit": "ns/op",
            "extra": "1988 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - B/op",
            "value": 4133,
            "unit": "B/op",
            "extra": "1988 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - allocs/op",
            "value": 69,
            "unit": "allocs/op",
            "extra": "1988 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1768893481903,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Nats_Set",
            "value": 278976,
            "unit": "ns/op\t    2609 B/op\t      42 allocs/op",
            "extra": "4236 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - ns/op",
            "value": 278976,
            "unit": "ns/op",
            "extra": "4236 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - B/op",
            "value": 2609,
            "unit": "B/op",
            "extra": "4236 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "4236 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get",
            "value": 270865,
            "unit": "ns/op\t    2252 B/op\t      39 allocs/op",
            "extra": "4270 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - ns/op",
            "value": 270865,
            "unit": "ns/op",
            "extra": "4270 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - B/op",
            "value": 2252,
            "unit": "B/op",
            "extra": "4270 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "4270 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete",
            "value": 559065,
            "unit": "ns/op\t    4132 B/op\t      69 allocs/op",
            "extra": "2088 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - ns/op",
            "value": 559065,
            "unit": "ns/op",
            "extra": "2088 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - B/op",
            "value": 4132,
            "unit": "B/op",
            "extra": "2088 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - allocs/op",
            "value": 69,
            "unit": "allocs/op",
            "extra": "2088 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1769066274356,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Nats_Set",
            "value": 298564,
            "unit": "ns/op\t    2609 B/op\t      42 allocs/op",
            "extra": "3852 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - ns/op",
            "value": 298564,
            "unit": "ns/op",
            "extra": "3852 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - B/op",
            "value": 2609,
            "unit": "B/op",
            "extra": "3852 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "3852 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get",
            "value": 295767,
            "unit": "ns/op\t    2252 B/op\t      39 allocs/op",
            "extra": "3793 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - ns/op",
            "value": 295767,
            "unit": "ns/op",
            "extra": "3793 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - B/op",
            "value": 2252,
            "unit": "B/op",
            "extra": "3793 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "3793 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete",
            "value": 593767,
            "unit": "ns/op\t    4131 B/op\t      69 allocs/op",
            "extra": "2018 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - ns/op",
            "value": 593767,
            "unit": "ns/op",
            "extra": "2018 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - B/op",
            "value": 4131,
            "unit": "B/op",
            "extra": "2018 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - allocs/op",
            "value": 69,
            "unit": "allocs/op",
            "extra": "2018 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f2413110db4fd9a1e3b68f2f916ae5e9f5e2b1fd",
          "message": "Merge pull request #2445 from gofiber/dependabot/go_modules/nats/github.com/nats-io/nkeys-0.4.14\n\nchore(deps): bump github.com/nats-io/nkeys from 0.4.12 to 0.4.14 in /nats",
          "timestamp": "2026-01-26T08:29:39+01:00",
          "tree_id": "4439a94573ffaef40bfd5a8150d8f45b5dc7c797",
          "url": "https://github.com/gofiber/storage/commit/f2413110db4fd9a1e3b68f2f916ae5e9f5e2b1fd"
        },
        "date": 1769412639389,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Nats_Set",
            "value": 296981,
            "unit": "ns/op\t    2609 B/op\t      42 allocs/op",
            "extra": "3955 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - ns/op",
            "value": 296981,
            "unit": "ns/op",
            "extra": "3955 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - B/op",
            "value": 2609,
            "unit": "B/op",
            "extra": "3955 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "3955 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get",
            "value": 291902,
            "unit": "ns/op\t    2252 B/op\t      39 allocs/op",
            "extra": "3880 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - ns/op",
            "value": 291902,
            "unit": "ns/op",
            "extra": "3880 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - B/op",
            "value": 2252,
            "unit": "B/op",
            "extra": "3880 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "3880 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete",
            "value": 590651,
            "unit": "ns/op\t    4131 B/op\t      69 allocs/op",
            "extra": "1976 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - ns/op",
            "value": 590651,
            "unit": "ns/op",
            "extra": "1976 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - B/op",
            "value": 4131,
            "unit": "B/op",
            "extra": "1976 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - allocs/op",
            "value": 69,
            "unit": "allocs/op",
            "extra": "1976 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1769671208610,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Nats_Set",
            "value": 283448,
            "unit": "ns/op\t    2609 B/op\t      42 allocs/op",
            "extra": "4023 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - ns/op",
            "value": 283448,
            "unit": "ns/op",
            "extra": "4023 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - B/op",
            "value": 2609,
            "unit": "B/op",
            "extra": "4023 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "4023 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get",
            "value": 273808,
            "unit": "ns/op\t    2252 B/op\t      39 allocs/op",
            "extra": "4228 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - ns/op",
            "value": 273808,
            "unit": "ns/op",
            "extra": "4228 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - B/op",
            "value": 2252,
            "unit": "B/op",
            "extra": "4228 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "4228 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete",
            "value": 565805,
            "unit": "ns/op\t    4131 B/op\t      69 allocs/op",
            "extra": "2090 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - ns/op",
            "value": 565805,
            "unit": "ns/op",
            "extra": "2090 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - B/op",
            "value": 4131,
            "unit": "B/op",
            "extra": "2090 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - allocs/op",
            "value": 69,
            "unit": "allocs/op",
            "extra": "2090 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1769757403700,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Nats_Set",
            "value": 304297,
            "unit": "ns/op\t    2609 B/op\t      42 allocs/op",
            "extra": "3687 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - ns/op",
            "value": 304297,
            "unit": "ns/op",
            "extra": "3687 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - B/op",
            "value": 2609,
            "unit": "B/op",
            "extra": "3687 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "3687 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get",
            "value": 290777,
            "unit": "ns/op\t    2252 B/op\t      39 allocs/op",
            "extra": "3854 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - ns/op",
            "value": 290777,
            "unit": "ns/op",
            "extra": "3854 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - B/op",
            "value": 2252,
            "unit": "B/op",
            "extra": "3854 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "3854 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete",
            "value": 594939,
            "unit": "ns/op\t    4131 B/op\t      69 allocs/op",
            "extra": "1893 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - ns/op",
            "value": 594939,
            "unit": "ns/op",
            "extra": "1893 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - B/op",
            "value": 4131,
            "unit": "B/op",
            "extra": "1893 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - allocs/op",
            "value": 69,
            "unit": "allocs/op",
            "extra": "1893 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "53003ff57a666aa7b760e8b2b4bb1b93f6e09571",
          "message": "Merge pull request #2460 from gofiber/dependabot/go_modules/nats/github.com/nats-io/nkeys-0.4.15\n\nchore(deps): bump github.com/nats-io/nkeys from 0.4.14 to 0.4.15 in /nats",
          "timestamp": "2026-02-02T08:31:25+01:00",
          "tree_id": "dc724e34432aa5f490b63cefcd954586a783c5b9",
          "url": "https://github.com/gofiber/storage/commit/53003ff57a666aa7b760e8b2b4bb1b93f6e09571"
        },
        "date": 1770017580672,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Nats_Set",
            "value": 283561,
            "unit": "ns/op\t    2609 B/op\t      42 allocs/op",
            "extra": "4126 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - ns/op",
            "value": 283561,
            "unit": "ns/op",
            "extra": "4126 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - B/op",
            "value": 2609,
            "unit": "B/op",
            "extra": "4126 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "4126 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get",
            "value": 274024,
            "unit": "ns/op\t    2252 B/op\t      39 allocs/op",
            "extra": "4198 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - ns/op",
            "value": 274024,
            "unit": "ns/op",
            "extra": "4198 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - B/op",
            "value": 2252,
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
            "value": 556349,
            "unit": "ns/op\t    4132 B/op\t      69 allocs/op",
            "extra": "2173 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - ns/op",
            "value": 556349,
            "unit": "ns/op",
            "extra": "2173 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - B/op",
            "value": 4132,
            "unit": "B/op",
            "extra": "2173 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - allocs/op",
            "value": 69,
            "unit": "allocs/op",
            "extra": "2173 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8bff5a354fb8012e046c7af091ef7ab317148fd2",
          "message": "Merge pull request #2458 from gofiber/dependabot/go_modules/aerospike/shirou-modules-780478747e\n\nchore(deps): bump the shirou-modules group across 25 directories with 1 update",
          "timestamp": "2026-02-02T08:32:06+01:00",
          "tree_id": "a7e435370484fe153e24e8124efa1aa935a60a6a",
          "url": "https://github.com/gofiber/storage/commit/8bff5a354fb8012e046c7af091ef7ab317148fd2"
        },
        "date": 1770017830024,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Nats_Set",
            "value": 298069,
            "unit": "ns/op\t    2609 B/op\t      42 allocs/op",
            "extra": "3933 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - ns/op",
            "value": 298069,
            "unit": "ns/op",
            "extra": "3933 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - B/op",
            "value": 2609,
            "unit": "B/op",
            "extra": "3933 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "3933 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get",
            "value": 292931,
            "unit": "ns/op\t    2253 B/op\t      39 allocs/op",
            "extra": "3898 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - ns/op",
            "value": 292931,
            "unit": "ns/op",
            "extra": "3898 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - B/op",
            "value": 2253,
            "unit": "B/op",
            "extra": "3898 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "3898 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete",
            "value": 598797,
            "unit": "ns/op\t    4131 B/op\t      69 allocs/op",
            "extra": "1978 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - ns/op",
            "value": 598797,
            "unit": "ns/op",
            "extra": "1978 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - B/op",
            "value": 4131,
            "unit": "B/op",
            "extra": "1978 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - allocs/op",
            "value": 69,
            "unit": "allocs/op",
            "extra": "1978 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "205fb777dcd9e87d8cee3d907d0346bf1a0f98a2",
          "message": "Merge pull request #2462 from gofiber/dependabot/go_modules/aerospike/opentelemetry-modules-a50a55491e\n\nchore(deps): bump the opentelemetry-modules group across 25 directories with 6 updates",
          "timestamp": "2026-02-03T09:39:34+01:00",
          "tree_id": "02ec0069a8ab255423484ef50bce7e9703957bd4",
          "url": "https://github.com/gofiber/storage/commit/205fb777dcd9e87d8cee3d907d0346bf1a0f98a2"
        },
        "date": 1770108134093,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Nats_Set",
            "value": 291672,
            "unit": "ns/op\t    2609 B/op\t      42 allocs/op",
            "extra": "3976 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - ns/op",
            "value": 291672,
            "unit": "ns/op",
            "extra": "3976 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - B/op",
            "value": 2609,
            "unit": "B/op",
            "extra": "3976 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "3976 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get",
            "value": 283464,
            "unit": "ns/op\t    2252 B/op\t      39 allocs/op",
            "extra": "4053 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - ns/op",
            "value": 283464,
            "unit": "ns/op",
            "extra": "4053 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - B/op",
            "value": 2252,
            "unit": "B/op",
            "extra": "4053 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "4053 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete",
            "value": 575246,
            "unit": "ns/op\t    4131 B/op\t      69 allocs/op",
            "extra": "2037 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - ns/op",
            "value": 575246,
            "unit": "ns/op",
            "extra": "2037 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - B/op",
            "value": 4131,
            "unit": "B/op",
            "extra": "2037 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - allocs/op",
            "value": 69,
            "unit": "allocs/op",
            "extra": "2037 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fb897e30435db5900077eaa5a154eb82084244a9",
          "message": "Merge pull request #2472 from gofiber/dependabot/go_modules/aerospike/klauspost-modules-e89a90612b\n\nchore(deps): bump the klauspost-modules group across 27 directories with 1 update",
          "timestamp": "2026-02-10T08:15:49+01:00",
          "tree_id": "dedd6a8e895939e7474944a1cf8d8b6f1dedddd5",
          "url": "https://github.com/gofiber/storage/commit/fb897e30435db5900077eaa5a154eb82084244a9"
        },
        "date": 1770708028549,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Nats_Set",
            "value": 292239,
            "unit": "ns/op\t    2609 B/op\t      42 allocs/op",
            "extra": "3926 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - ns/op",
            "value": 292239,
            "unit": "ns/op",
            "extra": "3926 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - B/op",
            "value": 2609,
            "unit": "B/op",
            "extra": "3926 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "3926 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get",
            "value": 284904,
            "unit": "ns/op\t    2253 B/op\t      39 allocs/op",
            "extra": "3966 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - ns/op",
            "value": 284904,
            "unit": "ns/op",
            "extra": "3966 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - B/op",
            "value": 2253,
            "unit": "B/op",
            "extra": "3966 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "3966 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete",
            "value": 592586,
            "unit": "ns/op\t    4131 B/op\t      69 allocs/op",
            "extra": "2000 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - ns/op",
            "value": 592586,
            "unit": "ns/op",
            "extra": "2000 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - B/op",
            "value": 4131,
            "unit": "B/op",
            "extra": "2000 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - allocs/op",
            "value": 69,
            "unit": "allocs/op",
            "extra": "2000 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "00d49367b265e5ce786e62cc4c0bf3d5fae3f2bc",
          "message": "Merge pull request #2475 from gofiber/dependabot/go_modules/aerospike/grpc-gateway-modules-3b228c5f6b\n\nchore(deps): bump the grpc-gateway-modules group across 17 directories with 1 update",
          "timestamp": "2026-02-11T08:16:19+01:00",
          "tree_id": "918d22e3f493ff4086f5640df252d131a9af82ac",
          "url": "https://github.com/gofiber/storage/commit/00d49367b265e5ce786e62cc4c0bf3d5fae3f2bc"
        },
        "date": 1770794324680,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Nats_Set",
            "value": 300799,
            "unit": "ns/op\t    2610 B/op\t      42 allocs/op",
            "extra": "3813 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - ns/op",
            "value": 300799,
            "unit": "ns/op",
            "extra": "3813 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - B/op",
            "value": 2610,
            "unit": "B/op",
            "extra": "3813 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "3813 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get",
            "value": 289562,
            "unit": "ns/op\t    2252 B/op\t      39 allocs/op",
            "extra": "3886 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - ns/op",
            "value": 289562,
            "unit": "ns/op",
            "extra": "3886 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - B/op",
            "value": 2252,
            "unit": "B/op",
            "extra": "3886 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "3886 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete",
            "value": 595316,
            "unit": "ns/op\t    4131 B/op\t      69 allocs/op",
            "extra": "1933 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - ns/op",
            "value": 595316,
            "unit": "ns/op",
            "extra": "1933 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - B/op",
            "value": 4131,
            "unit": "B/op",
            "extra": "1933 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - allocs/op",
            "value": 69,
            "unit": "allocs/op",
            "extra": "1933 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a797849a0477b5a8fd159843c4c257a57c5574e1",
          "message": "Merge pull request #2480 from gofiber/dependabot/go_modules/aerospike/google-modules-042a720460\n\nchore(deps): bump the google-modules group across 19 directories with 2 updates",
          "timestamp": "2026-02-13T08:17:34+01:00",
          "tree_id": "eed8d6400d34414744f98c4d4bf302e8e4b18d58",
          "url": "https://github.com/gofiber/storage/commit/a797849a0477b5a8fd159843c4c257a57c5574e1"
        },
        "date": 1770967183686,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Nats_Set",
            "value": 214762,
            "unit": "ns/op\t    2609 B/op\t      42 allocs/op",
            "extra": "4965 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - ns/op",
            "value": 214762,
            "unit": "ns/op",
            "extra": "4965 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - B/op",
            "value": 2609,
            "unit": "B/op",
            "extra": "4965 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "4965 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get",
            "value": 206534,
            "unit": "ns/op\t    2252 B/op\t      39 allocs/op",
            "extra": "5215 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - ns/op",
            "value": 206534,
            "unit": "ns/op",
            "extra": "5215 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - B/op",
            "value": 2252,
            "unit": "B/op",
            "extra": "5215 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "5215 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete",
            "value": 427454,
            "unit": "ns/op\t    4131 B/op\t      69 allocs/op",
            "extra": "2514 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - ns/op",
            "value": 427454,
            "unit": "ns/op",
            "extra": "2514 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - B/op",
            "value": 4131,
            "unit": "B/op",
            "extra": "2514 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - allocs/op",
            "value": 69,
            "unit": "allocs/op",
            "extra": "2514 times\n4 procs"
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
          "id": "4eb9e62ab677c10980f52e1371b0a79294a0352b",
          "message": "Merge pull request #2478 from gofiber/dependabot/go_modules/aerospike/golang-modules-83bead6e39\n\nchore(deps): bump the golang-modules group across 29 directories with 5 updates",
          "timestamp": "2026-02-16T19:27:53-05:00",
          "tree_id": "fee0127030d6f552d97edac9a181150b033d0049",
          "url": "https://github.com/gofiber/storage/commit/4eb9e62ab677c10980f52e1371b0a79294a0352b"
        },
        "date": 1771288284349,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Nats_Set",
            "value": 206467,
            "unit": "ns/op\t    2610 B/op\t      42 allocs/op",
            "extra": "5190 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - ns/op",
            "value": 206467,
            "unit": "ns/op",
            "extra": "5190 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - B/op",
            "value": 2610,
            "unit": "B/op",
            "extra": "5190 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "5190 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get",
            "value": 198299,
            "unit": "ns/op\t    2251 B/op\t      39 allocs/op",
            "extra": "5236 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - ns/op",
            "value": 198299,
            "unit": "ns/op",
            "extra": "5236 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - B/op",
            "value": 2251,
            "unit": "B/op",
            "extra": "5236 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "5236 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete",
            "value": 416389,
            "unit": "ns/op\t    4131 B/op\t      69 allocs/op",
            "extra": "2706 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - ns/op",
            "value": 416389,
            "unit": "ns/op",
            "extra": "2706 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - B/op",
            "value": 4131,
            "unit": "B/op",
            "extra": "2706 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - allocs/op",
            "value": 69,
            "unit": "allocs/op",
            "extra": "2706 times\n4 procs"
          }
        ]
      }
    ]
  }
}