window.BENCHMARK_DATA = {
  "lastUpdate": 1763709723389,
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
      }
    ]
  }
}