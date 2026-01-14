window.BENCHMARK_DATA = {
  "lastUpdate": 1768388337252,
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
          "id": "fe2db5baf54ab1cd8e6b7996c97805ac429249ae",
          "message": "Merge pull request #1580 from gofiber/dependabot/go_modules/badger/github.com/stretchr/testify-1.10.0\n\nchore(deps): bump github.com/stretchr/testify from 1.9.0 to 1.10.0 in /badger",
          "timestamp": "2025-03-27T09:08:55+01:00",
          "tree_id": "bdc069f2923699d0b8eded4de1c808f0abc8ef4d",
          "url": "https://github.com/gofiber/storage/commit/fe2db5baf54ab1cd8e6b7996c97805ac429249ae"
        },
        "date": 1743063122497,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Badger_Set",
            "value": 8480,
            "unit": "ns/op\t    1399 B/op\t      38 allocs/op",
            "extra": "138366 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - ns/op",
            "value": 8480,
            "unit": "ns/op",
            "extra": "138366 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - B/op",
            "value": 1399,
            "unit": "B/op",
            "extra": "138366 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - allocs/op",
            "value": 38,
            "unit": "allocs/op",
            "extra": "138366 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get",
            "value": 957.6,
            "unit": "ns/op\t     416 B/op\t      12 allocs/op",
            "extra": "1243521 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - ns/op",
            "value": 957.6,
            "unit": "ns/op",
            "extra": "1243521 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - B/op",
            "value": 416,
            "unit": "B/op",
            "extra": "1243521 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "1243521 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete",
            "value": 17457,
            "unit": "ns/op\t    2784 B/op\t      76 allocs/op",
            "extra": "67056 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - ns/op",
            "value": 17457,
            "unit": "ns/op",
            "extra": "67056 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - B/op",
            "value": 2784,
            "unit": "B/op",
            "extra": "67056 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "67056 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1751882294637,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Badger_Set",
            "value": 8738,
            "unit": "ns/op\t    1414 B/op\t      38 allocs/op",
            "extra": "138465 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - ns/op",
            "value": 8738,
            "unit": "ns/op",
            "extra": "138465 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - B/op",
            "value": 1414,
            "unit": "B/op",
            "extra": "138465 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - allocs/op",
            "value": 38,
            "unit": "allocs/op",
            "extra": "138465 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get",
            "value": 1013,
            "unit": "ns/op\t     416 B/op\t      12 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - ns/op",
            "value": 1013,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - B/op",
            "value": 416,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete",
            "value": 17945,
            "unit": "ns/op\t    2816 B/op\t      76 allocs/op",
            "extra": "67686 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - ns/op",
            "value": 17945,
            "unit": "ns/op",
            "extra": "67686 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - B/op",
            "value": 2816,
            "unit": "B/op",
            "extra": "67686 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "67686 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d20d9401b037a09d7037713462fb0a9973eb67bb",
          "message": "Merge pull request #1795 from gofiber/dependabot/go_modules/arangodb/utils-modules-83df05de47\n\nchore(deps): bump the utils-modules group across 3 directories with 1 update",
          "timestamp": "2025-07-07T11:57:09+02:00",
          "tree_id": "0fa410957f1ded25200ed801565c71f022bd7358",
          "url": "https://github.com/gofiber/storage/commit/d20d9401b037a09d7037713462fb0a9973eb67bb"
        },
        "date": 1751882452474,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Badger_Set",
            "value": 8975,
            "unit": "ns/op\t    1415 B/op\t      38 allocs/op",
            "extra": "135792 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - ns/op",
            "value": 8975,
            "unit": "ns/op",
            "extra": "135792 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - B/op",
            "value": 1415,
            "unit": "B/op",
            "extra": "135792 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - allocs/op",
            "value": 38,
            "unit": "allocs/op",
            "extra": "135792 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get",
            "value": 970.2,
            "unit": "ns/op\t     416 B/op\t      12 allocs/op",
            "extra": "1230290 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - ns/op",
            "value": 970.2,
            "unit": "ns/op",
            "extra": "1230290 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - B/op",
            "value": 416,
            "unit": "B/op",
            "extra": "1230290 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "1230290 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete",
            "value": 18323,
            "unit": "ns/op\t    2816 B/op\t      76 allocs/op",
            "extra": "67803 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - ns/op",
            "value": 18323,
            "unit": "ns/op",
            "extra": "67803 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - B/op",
            "value": 2816,
            "unit": "B/op",
            "extra": "67803 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "67803 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dfa47256801f648457ec93b71b27c3911d9fcd9f",
          "message": "Merge pull request #1817 from gofiber/dependabot/go_modules/arangodb/utils-modules-8bc3b59a3e\n\nchore(deps): bump the utils-modules group across 3 directories with 1 update",
          "timestamp": "2025-07-09T10:02:28+02:00",
          "tree_id": "8a84657e22dad733418d7fdafbf6b447432b4035",
          "url": "https://github.com/gofiber/storage/commit/dfa47256801f648457ec93b71b27c3911d9fcd9f"
        },
        "date": 1752048194518,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Badger_Set",
            "value": 8853,
            "unit": "ns/op\t    1415 B/op\t      38 allocs/op",
            "extra": "139262 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - ns/op",
            "value": 8853,
            "unit": "ns/op",
            "extra": "139262 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - B/op",
            "value": 1415,
            "unit": "B/op",
            "extra": "139262 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - allocs/op",
            "value": 38,
            "unit": "allocs/op",
            "extra": "139262 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get",
            "value": 971.3,
            "unit": "ns/op\t     416 B/op\t      12 allocs/op",
            "extra": "1204934 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - ns/op",
            "value": 971.3,
            "unit": "ns/op",
            "extra": "1204934 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - B/op",
            "value": 416,
            "unit": "B/op",
            "extra": "1204934 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "1204934 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete",
            "value": 17690,
            "unit": "ns/op\t    2815 B/op\t      76 allocs/op",
            "extra": "65905 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - ns/op",
            "value": 17690,
            "unit": "ns/op",
            "extra": "65905 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - B/op",
            "value": 2815,
            "unit": "B/op",
            "extra": "65905 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "65905 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ed25a2c964da0a07fef32990a771ae535bae8b8a",
          "message": "Merge pull request #1819 from gofiber/dependabot/go_modules/arangodb/utils-modules-d8f10cca0a\n\nchore(deps): bump the utils-modules group across 3 directories with 1 update",
          "timestamp": "2025-07-14T11:23:45+02:00",
          "tree_id": "a6ba058776f0d8c4f89a94012e74c8a556a038c4",
          "url": "https://github.com/gofiber/storage/commit/ed25a2c964da0a07fef32990a771ae535bae8b8a"
        },
        "date": 1752485078426,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Badger_Set",
            "value": 9291,
            "unit": "ns/op\t    1414 B/op\t      38 allocs/op",
            "extra": "138117 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - ns/op",
            "value": 9291,
            "unit": "ns/op",
            "extra": "138117 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - B/op",
            "value": 1414,
            "unit": "B/op",
            "extra": "138117 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - allocs/op",
            "value": 38,
            "unit": "allocs/op",
            "extra": "138117 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get",
            "value": 1062,
            "unit": "ns/op\t     416 B/op\t      12 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - ns/op",
            "value": 1062,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - B/op",
            "value": 416,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete",
            "value": 19350,
            "unit": "ns/op\t    2816 B/op\t      76 allocs/op",
            "extra": "60620 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - ns/op",
            "value": 19350,
            "unit": "ns/op",
            "extra": "60620 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - B/op",
            "value": 2816,
            "unit": "B/op",
            "extra": "60620 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "60620 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f57aa16f85a70938aebaf7bd5fae11bf6f3a846d",
          "message": "Merge pull request #1857 from gofiber/dependabot/go_modules/arangodb/utils-modules-fb1f7783c5\n\nchore(deps): bump the utils-modules group across 3 directories with 1 update",
          "timestamp": "2025-08-08T09:52:37+02:00",
          "tree_id": "33fe0dc6f01ff7d0bd5f7cc9d2eb5107a1c6857a",
          "url": "https://github.com/gofiber/storage/commit/f57aa16f85a70938aebaf7bd5fae11bf6f3a846d"
        },
        "date": 1754639596018,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Badger_Set",
            "value": 8799,
            "unit": "ns/op\t    1414 B/op\t      38 allocs/op",
            "extra": "140570 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - ns/op",
            "value": 8799,
            "unit": "ns/op",
            "extra": "140570 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - B/op",
            "value": 1414,
            "unit": "B/op",
            "extra": "140570 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - allocs/op",
            "value": 38,
            "unit": "allocs/op",
            "extra": "140570 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get",
            "value": 1071,
            "unit": "ns/op\t     416 B/op\t      12 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - ns/op",
            "value": 1071,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - B/op",
            "value": 416,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete",
            "value": 17983,
            "unit": "ns/op\t    2816 B/op\t      76 allocs/op",
            "extra": "66942 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - ns/op",
            "value": 17983,
            "unit": "ns/op",
            "extra": "66942 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - B/op",
            "value": 2816,
            "unit": "B/op",
            "extra": "66942 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "66942 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cf79bbc7e6a70fe870703aa8bd805357116fc931",
          "message": "Merge pull request #1871 from gofiber/dependabot/go_modules/arangodb/utils-modules-8de6ae2188\n\nchore(deps): bump the utils-modules group across 3 directories with 1 update",
          "timestamp": "2025-08-18T13:40:34+02:00",
          "tree_id": "c3761bcf2219d4dba9f16a2a575c890585eb760f",
          "url": "https://github.com/gofiber/storage/commit/cf79bbc7e6a70fe870703aa8bd805357116fc931"
        },
        "date": 1755517267154,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Badger_Set",
            "value": 8663,
            "unit": "ns/op\t    1415 B/op\t      38 allocs/op",
            "extra": "137742 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - ns/op",
            "value": 8663,
            "unit": "ns/op",
            "extra": "137742 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - B/op",
            "value": 1415,
            "unit": "B/op",
            "extra": "137742 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - allocs/op",
            "value": 38,
            "unit": "allocs/op",
            "extra": "137742 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get",
            "value": 1009,
            "unit": "ns/op\t     416 B/op\t      12 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - ns/op",
            "value": 1009,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - B/op",
            "value": 416,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete",
            "value": 17696,
            "unit": "ns/op\t    2816 B/op\t      76 allocs/op",
            "extra": "67467 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - ns/op",
            "value": 17696,
            "unit": "ns/op",
            "extra": "67467 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - B/op",
            "value": 2816,
            "unit": "B/op",
            "extra": "67467 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "67467 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9dd72d2017253c04adb4ee42cb620abb5970cf93",
          "message": "Merge pull request #1983 from gofiber/dependabot/go_modules/badger/golang.org/x/net-0.38.0\n\nchore(deps): bump golang.org/x/net from 0.25.0 to 0.38.0 in /badger",
          "timestamp": "2025-11-06T09:02:09+01:00",
          "tree_id": "8c28048774d589ebbc52effde0c60306c927c082",
          "url": "https://github.com/gofiber/storage/commit/9dd72d2017253c04adb4ee42cb620abb5970cf93"
        },
        "date": 1762417638713,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Badger_Set",
            "value": 8636,
            "unit": "ns/op\t    1414 B/op\t      38 allocs/op",
            "extra": "141921 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - ns/op",
            "value": 8636,
            "unit": "ns/op",
            "extra": "141921 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - B/op",
            "value": 1414,
            "unit": "B/op",
            "extra": "141921 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - allocs/op",
            "value": 38,
            "unit": "allocs/op",
            "extra": "141921 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get",
            "value": 1047,
            "unit": "ns/op\t     416 B/op\t      12 allocs/op",
            "extra": "1224014 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - ns/op",
            "value": 1047,
            "unit": "ns/op",
            "extra": "1224014 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - B/op",
            "value": 416,
            "unit": "B/op",
            "extra": "1224014 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "1224014 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete",
            "value": 17710,
            "unit": "ns/op\t    2816 B/op\t      76 allocs/op",
            "extra": "67707 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - ns/op",
            "value": 17710,
            "unit": "ns/op",
            "extra": "67707 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - B/op",
            "value": 2816,
            "unit": "B/op",
            "extra": "67707 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "67707 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "58b450388176728a860d33e5f1a183d2cb3ab607",
          "message": "Merge pull request #1982 from gofiber/dependabot/go_modules/badger/github.com/golang/glog-1.2.4\n\nchore(deps): bump github.com/golang/glog from 1.1.2 to 1.2.4 in /badger",
          "timestamp": "2025-11-06T09:05:08+01:00",
          "tree_id": "11ec103c25dd8faab60e36d7e0904fda60ba8222",
          "url": "https://github.com/gofiber/storage/commit/58b450388176728a860d33e5f1a183d2cb3ab607"
        },
        "date": 1762418143876,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Badger_Set",
            "value": 8925,
            "unit": "ns/op\t    1415 B/op\t      38 allocs/op",
            "extra": "136563 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - ns/op",
            "value": 8925,
            "unit": "ns/op",
            "extra": "136563 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - B/op",
            "value": 1415,
            "unit": "B/op",
            "extra": "136563 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - allocs/op",
            "value": 38,
            "unit": "allocs/op",
            "extra": "136563 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get",
            "value": 997.4,
            "unit": "ns/op\t     416 B/op\t      12 allocs/op",
            "extra": "1210725 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - ns/op",
            "value": 997.4,
            "unit": "ns/op",
            "extra": "1210725 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - B/op",
            "value": 416,
            "unit": "B/op",
            "extra": "1210725 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "1210725 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete",
            "value": 18123,
            "unit": "ns/op\t    2816 B/op\t      76 allocs/op",
            "extra": "63752 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - ns/op",
            "value": 18123,
            "unit": "ns/op",
            "extra": "63752 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - B/op",
            "value": 2816,
            "unit": "B/op",
            "extra": "63752 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "63752 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "de92b6791fd44540d77c84166629cf20afab447e",
          "message": "Merge pull request #1997 from gofiber/dependabot/go_modules/badger/github.com/golang/glog-1.2.5\n\nchore(deps): bump github.com/golang/glog from 1.2.4 to 1.2.5 in /badger",
          "timestamp": "2025-11-06T09:22:56+01:00",
          "tree_id": "028f2efa0b14bff48cb014dc5767a391d0f57b5a",
          "url": "https://github.com/gofiber/storage/commit/de92b6791fd44540d77c84166629cf20afab447e"
        },
        "date": 1762418317731,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Badger_Set",
            "value": 9064,
            "unit": "ns/op\t    1415 B/op\t      38 allocs/op",
            "extra": "132610 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - ns/op",
            "value": 9064,
            "unit": "ns/op",
            "extra": "132610 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - B/op",
            "value": 1415,
            "unit": "B/op",
            "extra": "132610 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - allocs/op",
            "value": 38,
            "unit": "allocs/op",
            "extra": "132610 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get",
            "value": 1055,
            "unit": "ns/op\t     416 B/op\t      12 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - ns/op",
            "value": 1055,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - B/op",
            "value": 416,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete",
            "value": 18832,
            "unit": "ns/op\t    2816 B/op\t      76 allocs/op",
            "extra": "64945 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - ns/op",
            "value": 18832,
            "unit": "ns/op",
            "extra": "64945 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - B/op",
            "value": 2816,
            "unit": "B/op",
            "extra": "64945 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "64945 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "13df9875eaeb972148b61178f9c7cdf511bdcc82",
          "message": "Merge pull request #2001 from gofiber/dependabot/go_modules/arangodb/utils-modules-dcbabf4f7e\n\nchore(deps): bump the utils-modules group across 3 directories with 1 update",
          "timestamp": "2025-11-10T08:33:22+01:00",
          "tree_id": "06f256c57f4248f249776999ec874bf27d29f643",
          "url": "https://github.com/gofiber/storage/commit/13df9875eaeb972148b61178f9c7cdf511bdcc82"
        },
        "date": 1762760244161,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Badger_Set",
            "value": 8711,
            "unit": "ns/op\t    1415 B/op\t      38 allocs/op",
            "extra": "140155 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - ns/op",
            "value": 8711,
            "unit": "ns/op",
            "extra": "140155 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - B/op",
            "value": 1415,
            "unit": "B/op",
            "extra": "140155 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - allocs/op",
            "value": 38,
            "unit": "allocs/op",
            "extra": "140155 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get",
            "value": 1018,
            "unit": "ns/op\t     416 B/op\t      12 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - ns/op",
            "value": 1018,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - B/op",
            "value": 416,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete",
            "value": 17862,
            "unit": "ns/op\t    2816 B/op\t      76 allocs/op",
            "extra": "66702 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - ns/op",
            "value": 17862,
            "unit": "ns/op",
            "extra": "66702 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - B/op",
            "value": 2816,
            "unit": "B/op",
            "extra": "66702 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "66702 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7dd54b600cf7ebcdf49aa81799fbef79513d1a4d",
          "message": "Merge pull request #2021 from gofiber/dependabot/go_modules/aerospike/google-modules-b83a21bb13",
          "timestamp": "2025-11-20T10:50:38+01:00",
          "tree_id": "dc3cf85587b667bfa601accbd2436200462e31a4",
          "url": "https://github.com/gofiber/storage/commit/7dd54b600cf7ebcdf49aa81799fbef79513d1a4d"
        },
        "date": 1763657964149,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Badger_Set",
            "value": 8803,
            "unit": "ns/op\t    1414 B/op\t      38 allocs/op",
            "extra": "138715 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - ns/op",
            "value": 8803,
            "unit": "ns/op",
            "extra": "138715 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - B/op",
            "value": 1414,
            "unit": "B/op",
            "extra": "138715 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - allocs/op",
            "value": 38,
            "unit": "allocs/op",
            "extra": "138715 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get",
            "value": 1006,
            "unit": "ns/op\t     416 B/op\t      12 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - ns/op",
            "value": 1006,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - B/op",
            "value": 416,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete",
            "value": 18067,
            "unit": "ns/op\t    2816 B/op\t      76 allocs/op",
            "extra": "67202 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - ns/op",
            "value": 18067,
            "unit": "ns/op",
            "extra": "67202 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - B/op",
            "value": 2816,
            "unit": "B/op",
            "extra": "67202 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "67202 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "97cf41d1c0b821cbd7782ac3e4afed55cb70669d",
          "message": "Merge pull request #2170 from gofiber/dependabot/go_modules/aerospike/klauspost-modules-7ff4d74409\n\nchore(deps): bump the klauspost-modules group across 22 directories with 2 updates",
          "timestamp": "2025-11-20T17:12:48+01:00",
          "tree_id": "cbf1923af6b46cba033c08e20b41f2fc7cef2497",
          "url": "https://github.com/gofiber/storage/commit/97cf41d1c0b821cbd7782ac3e4afed55cb70669d"
        },
        "date": 1763663292551,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Badger_Set",
            "value": 8973,
            "unit": "ns/op\t    1414 B/op\t      38 allocs/op",
            "extra": "130569 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - ns/op",
            "value": 8973,
            "unit": "ns/op",
            "extra": "130569 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - B/op",
            "value": 1414,
            "unit": "B/op",
            "extra": "130569 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - allocs/op",
            "value": 38,
            "unit": "allocs/op",
            "extra": "130569 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get",
            "value": 1015,
            "unit": "ns/op\t     416 B/op\t      12 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - ns/op",
            "value": 1015,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - B/op",
            "value": 416,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete",
            "value": 18154,
            "unit": "ns/op\t    2815 B/op\t      76 allocs/op",
            "extra": "66038 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - ns/op",
            "value": 18154,
            "unit": "ns/op",
            "extra": "66038 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - B/op",
            "value": 2815,
            "unit": "B/op",
            "extra": "66038 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "66038 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "85ab55d568bcffc75d4ff9cfd5e17bbba824dd6d",
          "message": "Merge pull request #2183 from gofiber/dependabot/go_modules/badger/github.com/golang/protobuf-1.5.4",
          "timestamp": "2025-11-20T22:38:49+01:00",
          "tree_id": "085855bb03f2f2f0119e006b163607e0831f3034",
          "url": "https://github.com/gofiber/storage/commit/85ab55d568bcffc75d4ff9cfd5e17bbba824dd6d"
        },
        "date": 1763677268359,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Badger_Set",
            "value": 8599,
            "unit": "ns/op\t    1415 B/op\t      38 allocs/op",
            "extra": "141415 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - ns/op",
            "value": 8599,
            "unit": "ns/op",
            "extra": "141415 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - B/op",
            "value": 1415,
            "unit": "B/op",
            "extra": "141415 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - allocs/op",
            "value": 38,
            "unit": "allocs/op",
            "extra": "141415 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get",
            "value": 1009,
            "unit": "ns/op\t     416 B/op\t      12 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - ns/op",
            "value": 1009,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - B/op",
            "value": 416,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete",
            "value": 17630,
            "unit": "ns/op\t    2815 B/op\t      76 allocs/op",
            "extra": "68461 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - ns/op",
            "value": 17630,
            "unit": "ns/op",
            "extra": "68461 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - B/op",
            "value": 2815,
            "unit": "B/op",
            "extra": "68461 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "68461 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4ce0b8d61b814b310dd14731cfead293793ed494",
          "message": "Merge pull request #2182 from gofiber/dependabot/go_modules/badger/github.com/cespare/xxhash/v2-2.3.0\n\nchore(deps): bump github.com/cespare/xxhash/v2 from 2.2.0 to 2.3.0 in /badger",
          "timestamp": "2025-11-21T02:10:50+01:00",
          "tree_id": "092ea9356a6bc4cce414ef76efc797e14cca0617",
          "url": "https://github.com/gofiber/storage/commit/4ce0b8d61b814b310dd14731cfead293793ed494"
        },
        "date": 1763688217265,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Badger_Set",
            "value": 8719,
            "unit": "ns/op\t    1415 B/op\t      38 allocs/op",
            "extra": "139866 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - ns/op",
            "value": 8719,
            "unit": "ns/op",
            "extra": "139866 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - B/op",
            "value": 1415,
            "unit": "B/op",
            "extra": "139866 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - allocs/op",
            "value": 38,
            "unit": "allocs/op",
            "extra": "139866 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get",
            "value": 980.2,
            "unit": "ns/op\t     416 B/op\t      12 allocs/op",
            "extra": "1224273 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - ns/op",
            "value": 980.2,
            "unit": "ns/op",
            "extra": "1224273 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - B/op",
            "value": 416,
            "unit": "B/op",
            "extra": "1224273 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "1224273 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete",
            "value": 17657,
            "unit": "ns/op\t    2816 B/op\t      76 allocs/op",
            "extra": "65073 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - ns/op",
            "value": 17657,
            "unit": "ns/op",
            "extra": "65073 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - B/op",
            "value": 2816,
            "unit": "B/op",
            "extra": "65073 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "65073 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "37028222de27c396e6bce87e551123a57b493ced",
          "message": "Merge pull request #2184 from gofiber/dependabot/go_modules/badger/github.com/dgraph-io/ristretto-0.2.0\n\nchore(deps): bump github.com/dgraph-io/ristretto from 0.1.1 to 0.2.0 in /badger",
          "timestamp": "2025-11-21T08:19:09+01:00",
          "tree_id": "0326866df1163a4c1fbdbeec832a5f10bb828c46",
          "url": "https://github.com/gofiber/storage/commit/37028222de27c396e6bce87e551123a57b493ced"
        },
        "date": 1763709719138,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Badger_Set",
            "value": 9001,
            "unit": "ns/op\t    1414 B/op\t      38 allocs/op",
            "extra": "132823 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - ns/op",
            "value": 9001,
            "unit": "ns/op",
            "extra": "132823 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - B/op",
            "value": 1414,
            "unit": "B/op",
            "extra": "132823 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - allocs/op",
            "value": 38,
            "unit": "allocs/op",
            "extra": "132823 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get",
            "value": 1027,
            "unit": "ns/op\t     416 B/op\t      12 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - ns/op",
            "value": 1027,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - B/op",
            "value": 416,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete",
            "value": 18791,
            "unit": "ns/op\t    2816 B/op\t      76 allocs/op",
            "extra": "65653 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - ns/op",
            "value": 18791,
            "unit": "ns/op",
            "extra": "65653 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - B/op",
            "value": 2816,
            "unit": "B/op",
            "extra": "65653 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "65653 times\n4 procs"
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
          "id": "e165093e5d547f38c61ff67a338add99e65303d4",
          "message": "Merge pull request #2258 from gofiber/dependabot/go_modules/badger/snappy-modules-6ea7c9ed63\n\nchore(deps): bump the snappy-modules group across 2 directories with 1 update",
          "timestamp": "2025-11-27T02:32:38-05:00",
          "tree_id": "fde618882bea44e5a622dd2c917af6b1064205f6",
          "url": "https://github.com/gofiber/storage/commit/e165093e5d547f38c61ff67a338add99e65303d4"
        },
        "date": 1764228884809,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Badger_Set",
            "value": 8772,
            "unit": "ns/op\t    1478 B/op\t      38 allocs/op",
            "extra": "132996 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - ns/op",
            "value": 8772,
            "unit": "ns/op",
            "extra": "132996 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - B/op",
            "value": 1478,
            "unit": "B/op",
            "extra": "132996 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - allocs/op",
            "value": 38,
            "unit": "allocs/op",
            "extra": "132996 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get",
            "value": 1067,
            "unit": "ns/op\t     416 B/op\t      12 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - ns/op",
            "value": 1067,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - B/op",
            "value": 416,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete",
            "value": 17839,
            "unit": "ns/op\t    2943 B/op\t      76 allocs/op",
            "extra": "67326 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - ns/op",
            "value": 17839,
            "unit": "ns/op",
            "extra": "67326 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - B/op",
            "value": 2943,
            "unit": "B/op",
            "extra": "67326 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "67326 times\n4 procs"
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
        "date": 1764260051684,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Badger_Set",
            "value": 8270,
            "unit": "ns/op\t    1478 B/op\t      38 allocs/op",
            "extra": "141675 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - ns/op",
            "value": 8270,
            "unit": "ns/op",
            "extra": "141675 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - B/op",
            "value": 1478,
            "unit": "B/op",
            "extra": "141675 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - allocs/op",
            "value": 38,
            "unit": "allocs/op",
            "extra": "141675 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get",
            "value": 959.5,
            "unit": "ns/op\t     416 B/op\t      12 allocs/op",
            "extra": "1238227 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - ns/op",
            "value": 959.5,
            "unit": "ns/op",
            "extra": "1238227 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - B/op",
            "value": 416,
            "unit": "B/op",
            "extra": "1238227 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "1238227 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete",
            "value": 17373,
            "unit": "ns/op\t    2944 B/op\t      76 allocs/op",
            "extra": "64179 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - ns/op",
            "value": 17373,
            "unit": "ns/op",
            "extra": "64179 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - B/op",
            "value": 2944,
            "unit": "B/op",
            "extra": "64179 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "64179 times\n4 procs"
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
          "id": "f3295b7ae0b0f4029503e26a38e73c73570659ad",
          "message": "Merge pull request #2181 from gofiber/dependabot/go_modules/badger/github.com/google/flatbuffers-25.9.23incompatible\n\nchore(deps): bump github.com/google/flatbuffers from 23.5.26+incompatible to 25.9.23+incompatible in /badger",
          "timestamp": "2025-11-27T11:16:40-05:00",
          "tree_id": "1490df1faba4267e7501bf80a8b15db18d51a2fd",
          "url": "https://github.com/gofiber/storage/commit/f3295b7ae0b0f4029503e26a38e73c73570659ad"
        },
        "date": 1764260247021,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Badger_Set",
            "value": 8230,
            "unit": "ns/op\t    1479 B/op\t      38 allocs/op",
            "extra": "141324 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - ns/op",
            "value": 8230,
            "unit": "ns/op",
            "extra": "141324 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - B/op",
            "value": 1479,
            "unit": "B/op",
            "extra": "141324 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - allocs/op",
            "value": 38,
            "unit": "allocs/op",
            "extra": "141324 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get",
            "value": 944.7,
            "unit": "ns/op\t     416 B/op\t      12 allocs/op",
            "extra": "1254567 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - ns/op",
            "value": 944.7,
            "unit": "ns/op",
            "extra": "1254567 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - B/op",
            "value": 416,
            "unit": "B/op",
            "extra": "1254567 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "1254567 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete",
            "value": 16880,
            "unit": "ns/op\t    2944 B/op\t      76 allocs/op",
            "extra": "71042 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - ns/op",
            "value": 16880,
            "unit": "ns/op",
            "extra": "71042 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - B/op",
            "value": 2944,
            "unit": "B/op",
            "extra": "71042 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "71042 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "934d2846b8c50bac305222df9e20b9746a92ff4c",
          "message": "Merge pull request #2311 from gofiber/dependabot/go_modules/arangodb/utils-modules-a136cda322\n\nchore(deps): bump the utils-modules group across 3 directories with 1 update",
          "timestamp": "2025-12-03T08:13:20+01:00",
          "tree_id": "ac1920f0f362fc0efabe807cd6fe57152e3c860d",
          "url": "https://github.com/gofiber/storage/commit/934d2846b8c50bac305222df9e20b9746a92ff4c"
        },
        "date": 1764746122345,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Badger_Set",
            "value": 8308,
            "unit": "ns/op\t    1478 B/op\t      38 allocs/op",
            "extra": "140631 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - ns/op",
            "value": 8308,
            "unit": "ns/op",
            "extra": "140631 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - B/op",
            "value": 1478,
            "unit": "B/op",
            "extra": "140631 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - allocs/op",
            "value": 38,
            "unit": "allocs/op",
            "extra": "140631 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get",
            "value": 989.9,
            "unit": "ns/op\t     416 B/op\t      12 allocs/op",
            "extra": "1206963 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - ns/op",
            "value": 989.9,
            "unit": "ns/op",
            "extra": "1206963 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - B/op",
            "value": 416,
            "unit": "B/op",
            "extra": "1206963 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "1206963 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete",
            "value": 17668,
            "unit": "ns/op\t    2944 B/op\t      76 allocs/op",
            "extra": "70788 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - ns/op",
            "value": 17668,
            "unit": "ns/op",
            "extra": "70788 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - B/op",
            "value": 2944,
            "unit": "B/op",
            "extra": "70788 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "70788 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fa9920e7f902435325a236ff6c126e868c7fdc31",
          "message": "Merge pull request #2317 from gofiber/dependabot/go_modules/arangodb/utils-modules-5a60199f05\n\nchore(deps): bump the utils-modules group across 3 directories with 1 update",
          "timestamp": "2025-12-08T08:13:12+01:00",
          "tree_id": "e58ec1fbebae90d296c4bb423057b594095ba4a9",
          "url": "https://github.com/gofiber/storage/commit/fa9920e7f902435325a236ff6c126e868c7fdc31"
        },
        "date": 1765178054074,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Badger_Set",
            "value": 8235,
            "unit": "ns/op\t    1478 B/op\t      38 allocs/op",
            "extra": "146239 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - ns/op",
            "value": 8235,
            "unit": "ns/op",
            "extra": "146239 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - B/op",
            "value": 1478,
            "unit": "B/op",
            "extra": "146239 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - allocs/op",
            "value": 38,
            "unit": "allocs/op",
            "extra": "146239 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get",
            "value": 953.1,
            "unit": "ns/op\t     416 B/op\t      12 allocs/op",
            "extra": "1230902 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - ns/op",
            "value": 953.1,
            "unit": "ns/op",
            "extra": "1230902 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - B/op",
            "value": 416,
            "unit": "B/op",
            "extra": "1230902 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "1230902 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete",
            "value": 16747,
            "unit": "ns/op\t    2944 B/op\t      76 allocs/op",
            "extra": "71396 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - ns/op",
            "value": 16747,
            "unit": "ns/op",
            "extra": "71396 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - B/op",
            "value": 2944,
            "unit": "B/op",
            "extra": "71396 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "71396 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7b57a889f7682a3730e00463ec196f07780ed956",
          "message": "Merge pull request #2369 from gofiber/dependabot/go_modules/arangodb/utils-modules-562790bbbf\n\nchore(deps): bump the utils-modules group across 3 directories with 1 update",
          "timestamp": "2025-12-22T08:16:04+01:00",
          "tree_id": "4c319245dff98b20eff466f1da6479ccf44fab20",
          "url": "https://github.com/gofiber/storage/commit/7b57a889f7682a3730e00463ec196f07780ed956"
        },
        "date": 1766388536502,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Badger_Set",
            "value": 8393,
            "unit": "ns/op\t    1478 B/op\t      38 allocs/op",
            "extra": "146247 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - ns/op",
            "value": 8393,
            "unit": "ns/op",
            "extra": "146247 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - B/op",
            "value": 1478,
            "unit": "B/op",
            "extra": "146247 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - allocs/op",
            "value": 38,
            "unit": "allocs/op",
            "extra": "146247 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get",
            "value": 935.3,
            "unit": "ns/op\t     416 B/op\t      12 allocs/op",
            "extra": "1212441 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - ns/op",
            "value": 935.3,
            "unit": "ns/op",
            "extra": "1212441 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - B/op",
            "value": 416,
            "unit": "B/op",
            "extra": "1212441 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "1212441 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete",
            "value": 17238,
            "unit": "ns/op\t    2944 B/op\t      76 allocs/op",
            "extra": "70113 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - ns/op",
            "value": 17238,
            "unit": "ns/op",
            "extra": "70113 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - B/op",
            "value": 2944,
            "unit": "B/op",
            "extra": "70113 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "70113 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1919ceef1e7ae5e8f235f20192653bed3ddf9a0f",
          "message": "Merge pull request #2371 from gofiber/dependabot/go_modules/badger/github.com/google/flatbuffers-25.12.19incompatible\n\nchore(deps): bump github.com/google/flatbuffers from 25.9.23+incompatible to 25.12.19+incompatible in /badger",
          "timestamp": "2025-12-22T08:28:22+01:00",
          "tree_id": "f6b2fb1bc6af3635b99d790fda2aef7b26244f10",
          "url": "https://github.com/gofiber/storage/commit/1919ceef1e7ae5e8f235f20192653bed3ddf9a0f"
        },
        "date": 1766388574579,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Badger_Set",
            "value": 8832,
            "unit": "ns/op\t    1479 B/op\t      38 allocs/op",
            "extra": "137133 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - ns/op",
            "value": 8832,
            "unit": "ns/op",
            "extra": "137133 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - B/op",
            "value": 1479,
            "unit": "B/op",
            "extra": "137133 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - allocs/op",
            "value": 38,
            "unit": "allocs/op",
            "extra": "137133 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get",
            "value": 1064,
            "unit": "ns/op\t     416 B/op\t      12 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - ns/op",
            "value": 1064,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - B/op",
            "value": 416,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete",
            "value": 18790,
            "unit": "ns/op\t    2944 B/op\t      76 allocs/op",
            "extra": "63366 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - ns/op",
            "value": 18790,
            "unit": "ns/op",
            "extra": "63366 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - B/op",
            "value": 2944,
            "unit": "B/op",
            "extra": "63366 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "63366 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e500bed60a615b73b7692ee8c5478c70d94e70ee",
          "message": "Merge pull request #2389 from gofiber/dependabot/go_modules/arangodb/utils-modules-3418bc592c\n\nchore(deps): bump the utils-modules group across 3 directories with 1 update",
          "timestamp": "2026-01-08T08:13:57+01:00",
          "tree_id": "c69cc47614cd6c106bac8d682f47064f84758a54",
          "url": "https://github.com/gofiber/storage/commit/e500bed60a615b73b7692ee8c5478c70d94e70ee"
        },
        "date": 1767856490309,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Badger_Set",
            "value": 8743,
            "unit": "ns/op\t    1478 B/op\t      38 allocs/op",
            "extra": "128403 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - ns/op",
            "value": 8743,
            "unit": "ns/op",
            "extra": "128403 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - B/op",
            "value": 1478,
            "unit": "B/op",
            "extra": "128403 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - allocs/op",
            "value": 38,
            "unit": "allocs/op",
            "extra": "128403 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get",
            "value": 965,
            "unit": "ns/op\t     416 B/op\t      12 allocs/op",
            "extra": "1204228 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - ns/op",
            "value": 965,
            "unit": "ns/op",
            "extra": "1204228 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - B/op",
            "value": 416,
            "unit": "B/op",
            "extra": "1204228 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "1204228 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete",
            "value": 17660,
            "unit": "ns/op\t    2944 B/op\t      76 allocs/op",
            "extra": "63376 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - ns/op",
            "value": 17660,
            "unit": "ns/op",
            "extra": "63376 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - B/op",
            "value": 2944,
            "unit": "B/op",
            "extra": "63376 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "63376 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1768376579266,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Badger_Set",
            "value": 8473,
            "unit": "ns/op\t    1479 B/op\t      38 allocs/op",
            "extra": "143612 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - ns/op",
            "value": 8473,
            "unit": "ns/op",
            "extra": "143612 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - B/op",
            "value": 1479,
            "unit": "B/op",
            "extra": "143612 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - allocs/op",
            "value": 38,
            "unit": "allocs/op",
            "extra": "143612 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get",
            "value": 1029,
            "unit": "ns/op\t     416 B/op\t      12 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - ns/op",
            "value": 1029,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - B/op",
            "value": 416,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete",
            "value": 16945,
            "unit": "ns/op\t    2944 B/op\t      76 allocs/op",
            "extra": "71575 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - ns/op",
            "value": 16945,
            "unit": "ns/op",
            "extra": "71575 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - B/op",
            "value": 2944,
            "unit": "B/op",
            "extra": "71575 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "71575 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "32ff87fcb337f96d9fbe4432c5627ababe2e2461",
          "message": "Merge pull request #2309 from gofiber/dependabot/go_modules/aerospike/klauspost-modules-a7c9063f57",
          "timestamp": "2026-01-14T08:38:21+01:00",
          "tree_id": "383901a6a88d23dfe0a101c3ed48e95d0041ede9",
          "url": "https://github.com/gofiber/storage/commit/32ff87fcb337f96d9fbe4432c5627ababe2e2461"
        },
        "date": 1768377472645,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Badger_Set",
            "value": 8676,
            "unit": "ns/op\t    1478 B/op\t      38 allocs/op",
            "extra": "138195 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - ns/op",
            "value": 8676,
            "unit": "ns/op",
            "extra": "138195 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - B/op",
            "value": 1478,
            "unit": "B/op",
            "extra": "138195 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - allocs/op",
            "value": 38,
            "unit": "allocs/op",
            "extra": "138195 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get",
            "value": 991.4,
            "unit": "ns/op\t     416 B/op\t      12 allocs/op",
            "extra": "1230932 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - ns/op",
            "value": 991.4,
            "unit": "ns/op",
            "extra": "1230932 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - B/op",
            "value": 416,
            "unit": "B/op",
            "extra": "1230932 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "1230932 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete",
            "value": 17641,
            "unit": "ns/op\t    2944 B/op\t      76 allocs/op",
            "extra": "63104 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - ns/op",
            "value": 17641,
            "unit": "ns/op",
            "extra": "63104 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - B/op",
            "value": 2944,
            "unit": "B/op",
            "extra": "63104 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "63104 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "09ff78cd10639afe4fc34bfb9ac36c89fd34db0b",
          "message": "Merge pull request #2400 from gofiber/dependabot/go_modules/azureblob/google-modules-3f2b1538ea\n\nchore(deps): bump the google-modules group across 6 directories with 4 updates",
          "timestamp": "2026-01-14T11:57:58+01:00",
          "tree_id": "da179e8a0125319584a7efb4a4b6b082b5f06825",
          "url": "https://github.com/gofiber/storage/commit/09ff78cd10639afe4fc34bfb9ac36c89fd34db0b"
        },
        "date": 1768388333178,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Badger_Set",
            "value": 9038,
            "unit": "ns/op\t    1478 B/op\t      38 allocs/op",
            "extra": "130632 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - ns/op",
            "value": 9038,
            "unit": "ns/op",
            "extra": "130632 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - B/op",
            "value": 1478,
            "unit": "B/op",
            "extra": "130632 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Set - allocs/op",
            "value": 38,
            "unit": "allocs/op",
            "extra": "130632 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get",
            "value": 1008,
            "unit": "ns/op\t     416 B/op\t      12 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - ns/op",
            "value": 1008,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - B/op",
            "value": 416,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_Get - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete",
            "value": 17717,
            "unit": "ns/op\t    2944 B/op\t      76 allocs/op",
            "extra": "66696 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - ns/op",
            "value": 17717,
            "unit": "ns/op",
            "extra": "66696 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - B/op",
            "value": 2944,
            "unit": "B/op",
            "extra": "66696 times\n4 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "66696 times\n4 procs"
          }
        ]
      }
    ]
  }
}