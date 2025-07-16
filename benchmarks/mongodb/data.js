window.BENCHMARK_DATA = {
  "lastUpdate": 1752653373454,
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
          "id": "cc15d521317f6a16e2fc36529e143483a00777af",
          "message": "Merge pull request #1535 from gofiber/dependabot/go_modules/mongodb/go_modules-5a9c29dde4\n\nchore(deps): bump golang.org/x/crypto from 0.22.0 to 0.31.0 in /mongodb in the go_modules group across 1 directory",
          "timestamp": "2025-01-30T11:21:48+01:00",
          "tree_id": "c6fa81d94fb181106c75a500f45c82bd1659b9da",
          "url": "https://github.com/gofiber/storage/commit/cc15d521317f6a16e2fc36529e143483a00777af"
        },
        "date": 1738232567796,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MongoDB_Set",
            "value": 337836,
            "unit": "ns/op\t    6389 B/op\t      92 allocs/op",
            "extra": "3567 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - ns/op",
            "value": 337836,
            "unit": "ns/op",
            "extra": "3567 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - B/op",
            "value": 6389,
            "unit": "B/op",
            "extra": "3567 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - allocs/op",
            "value": 92,
            "unit": "allocs/op",
            "extra": "3567 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get",
            "value": 266766,
            "unit": "ns/op\t    7281 B/op\t      80 allocs/op",
            "extra": "4384 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - ns/op",
            "value": 266766,
            "unit": "ns/op",
            "extra": "4384 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - B/op",
            "value": 7281,
            "unit": "B/op",
            "extra": "4384 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "4384 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete",
            "value": 712203,
            "unit": "ns/op\t   11350 B/op\t     160 allocs/op",
            "extra": "1782 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - ns/op",
            "value": 712203,
            "unit": "ns/op",
            "extra": "1782 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - B/op",
            "value": 11350,
            "unit": "B/op",
            "extra": "1782 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - allocs/op",
            "value": 160,
            "unit": "allocs/op",
            "extra": "1782 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1742368037221,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MongoDB_Set",
            "value": 345270,
            "unit": "ns/op\t    6389 B/op\t      92 allocs/op",
            "extra": "3400 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - ns/op",
            "value": 345270,
            "unit": "ns/op",
            "extra": "3400 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - B/op",
            "value": 6389,
            "unit": "B/op",
            "extra": "3400 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - allocs/op",
            "value": 92,
            "unit": "allocs/op",
            "extra": "3400 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get",
            "value": 309166,
            "unit": "ns/op\t    7287 B/op\t      80 allocs/op",
            "extra": "3729 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - ns/op",
            "value": 309166,
            "unit": "ns/op",
            "extra": "3729 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - B/op",
            "value": 7287,
            "unit": "B/op",
            "extra": "3729 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "3729 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete",
            "value": 712798,
            "unit": "ns/op\t   11358 B/op\t     160 allocs/op",
            "extra": "1666 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - ns/op",
            "value": 712798,
            "unit": "ns/op",
            "extra": "1666 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - B/op",
            "value": 11358,
            "unit": "B/op",
            "extra": "1666 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - allocs/op",
            "value": 160,
            "unit": "allocs/op",
            "extra": "1666 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "63962a4a9e9fba9d7afa499e756779149c58dc46",
          "message": "Merge pull request #1593 from gofiber/dependabot/go_modules/mongodb/github.com/stretchr/testify-1.10.0\n\nchore(deps): bump github.com/stretchr/testify from 1.9.0 to 1.10.0 in /mongodb",
          "timestamp": "2025-03-26T20:22:00+01:00",
          "tree_id": "ebe11d6fa1abe121abf00db584f4176bdadfcb07",
          "url": "https://github.com/gofiber/storage/commit/63962a4a9e9fba9d7afa499e756779149c58dc46"
        },
        "date": 1743019837208,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MongoDB_Set",
            "value": 344439,
            "unit": "ns/op\t    6392 B/op\t      92 allocs/op",
            "extra": "3429 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - ns/op",
            "value": 344439,
            "unit": "ns/op",
            "extra": "3429 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - B/op",
            "value": 6392,
            "unit": "B/op",
            "extra": "3429 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - allocs/op",
            "value": 92,
            "unit": "allocs/op",
            "extra": "3429 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get",
            "value": 310199,
            "unit": "ns/op\t    7287 B/op\t      80 allocs/op",
            "extra": "3705 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - ns/op",
            "value": 310199,
            "unit": "ns/op",
            "extra": "3705 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - B/op",
            "value": 7287,
            "unit": "B/op",
            "extra": "3705 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "3705 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete",
            "value": 714781,
            "unit": "ns/op\t   11360 B/op\t     160 allocs/op",
            "extra": "1664 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - ns/op",
            "value": 714781,
            "unit": "ns/op",
            "extra": "1664 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - B/op",
            "value": 11360,
            "unit": "B/op",
            "extra": "1664 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - allocs/op",
            "value": 160,
            "unit": "allocs/op",
            "extra": "1664 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f94632f947fcf3500c57a2e1061b71316e6a92bc",
          "message": "Merge pull request #1612 from gofiber/dependabot/go_modules/mongodb/go.mongodb.org/mongo-driver-1.17.3\n\nchore(deps): bump go.mongodb.org/mongo-driver from 1.16.1 to 1.17.3 in /mongodb",
          "timestamp": "2025-03-27T09:16:42+01:00",
          "tree_id": "26e2ff893549e6e022398bf00a21b840dbf413cf",
          "url": "https://github.com/gofiber/storage/commit/f94632f947fcf3500c57a2e1061b71316e6a92bc"
        },
        "date": 1743063620588,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MongoDB_Set",
            "value": 343916,
            "unit": "ns/op\t    6426 B/op\t      92 allocs/op",
            "extra": "3379 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - ns/op",
            "value": 343916,
            "unit": "ns/op",
            "extra": "3379 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - B/op",
            "value": 6426,
            "unit": "B/op",
            "extra": "3379 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - allocs/op",
            "value": 92,
            "unit": "allocs/op",
            "extra": "3379 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get",
            "value": 309966,
            "unit": "ns/op\t    7414 B/op\t      80 allocs/op",
            "extra": "3820 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - ns/op",
            "value": 309966,
            "unit": "ns/op",
            "extra": "3820 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - B/op",
            "value": 7414,
            "unit": "B/op",
            "extra": "3820 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "3820 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete",
            "value": 711271,
            "unit": "ns/op\t   11423 B/op\t     160 allocs/op",
            "extra": "1663 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - ns/op",
            "value": 711271,
            "unit": "ns/op",
            "extra": "1663 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - B/op",
            "value": 11423,
            "unit": "B/op",
            "extra": "1663 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - allocs/op",
            "value": 160,
            "unit": "allocs/op",
            "extra": "1663 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1744190297763,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MongoDB_Set",
            "value": 347756,
            "unit": "ns/op\t    6477 B/op\t      92 allocs/op",
            "extra": "3370 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - ns/op",
            "value": 347756,
            "unit": "ns/op",
            "extra": "3370 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - B/op",
            "value": 6477,
            "unit": "B/op",
            "extra": "3370 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - allocs/op",
            "value": 92,
            "unit": "allocs/op",
            "extra": "3370 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get",
            "value": 317458,
            "unit": "ns/op\t    7463 B/op\t      80 allocs/op",
            "extra": "3770 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - ns/op",
            "value": 317458,
            "unit": "ns/op",
            "extra": "3770 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - B/op",
            "value": 7463,
            "unit": "B/op",
            "extra": "3770 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "3770 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete",
            "value": 737963,
            "unit": "ns/op\t   11522 B/op\t     160 allocs/op",
            "extra": "1620 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - ns/op",
            "value": 737963,
            "unit": "ns/op",
            "extra": "1620 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - B/op",
            "value": 11522,
            "unit": "B/op",
            "extra": "1620 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - allocs/op",
            "value": 160,
            "unit": "allocs/op",
            "extra": "1620 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1744782279922,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MongoDB_Set",
            "value": 344349,
            "unit": "ns/op\t    6489 B/op\t      92 allocs/op",
            "extra": "3386 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - ns/op",
            "value": 344349,
            "unit": "ns/op",
            "extra": "3386 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - B/op",
            "value": 6489,
            "unit": "B/op",
            "extra": "3386 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - allocs/op",
            "value": 92,
            "unit": "allocs/op",
            "extra": "3386 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get",
            "value": 311117,
            "unit": "ns/op\t    7479 B/op\t      80 allocs/op",
            "extra": "3763 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - ns/op",
            "value": 311117,
            "unit": "ns/op",
            "extra": "3763 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - B/op",
            "value": 7479,
            "unit": "B/op",
            "extra": "3763 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "3763 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete",
            "value": 712319,
            "unit": "ns/op\t   11555 B/op\t     160 allocs/op",
            "extra": "1653 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - ns/op",
            "value": 712319,
            "unit": "ns/op",
            "extra": "1653 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - B/op",
            "value": 11555,
            "unit": "B/op",
            "extra": "1653 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - allocs/op",
            "value": 160,
            "unit": "allocs/op",
            "extra": "1653 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1745688172871,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MongoDB_Set",
            "value": 341641,
            "unit": "ns/op\t    6487 B/op\t      92 allocs/op",
            "extra": "3420 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - ns/op",
            "value": 341641,
            "unit": "ns/op",
            "extra": "3420 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - B/op",
            "value": 6487,
            "unit": "B/op",
            "extra": "3420 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - allocs/op",
            "value": 92,
            "unit": "allocs/op",
            "extra": "3420 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get",
            "value": 308615,
            "unit": "ns/op\t    7476 B/op\t      80 allocs/op",
            "extra": "3813 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - ns/op",
            "value": 308615,
            "unit": "ns/op",
            "extra": "3813 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - B/op",
            "value": 7476,
            "unit": "B/op",
            "extra": "3813 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "3813 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete",
            "value": 713871,
            "unit": "ns/op\t   11560 B/op\t     160 allocs/op",
            "extra": "1684 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - ns/op",
            "value": 713871,
            "unit": "ns/op",
            "extra": "1684 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - B/op",
            "value": 11560,
            "unit": "B/op",
            "extra": "1684 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - allocs/op",
            "value": 160,
            "unit": "allocs/op",
            "extra": "1684 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d301361d5f8126b14534429e05ab052ff08552f7",
          "message": "Merge pull request #1701 from gofiber/dependabot/go_modules/mongodb/github.com/testcontainers/testcontainers-go-0.37.0\n\nchore(deps): bump github.com/testcontainers/testcontainers-go from 0.36.0 to 0.37.0 in /mongodb",
          "timestamp": "2025-04-28T12:53:34+02:00",
          "tree_id": "f76e8f99f68958a6b93cf442e2435f4e7bba096a",
          "url": "https://github.com/gofiber/storage/commit/d301361d5f8126b14534429e05ab052ff08552f7"
        },
        "date": 1745837927796,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MongoDB_Set",
            "value": 344053,
            "unit": "ns/op\t    6487 B/op\t      92 allocs/op",
            "extra": "3326 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - ns/op",
            "value": 344053,
            "unit": "ns/op",
            "extra": "3326 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - B/op",
            "value": 6487,
            "unit": "B/op",
            "extra": "3326 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - allocs/op",
            "value": 92,
            "unit": "allocs/op",
            "extra": "3326 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get",
            "value": 310395,
            "unit": "ns/op\t    7478 B/op\t      80 allocs/op",
            "extra": "3745 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - ns/op",
            "value": 310395,
            "unit": "ns/op",
            "extra": "3745 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - B/op",
            "value": 7478,
            "unit": "B/op",
            "extra": "3745 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "3745 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete",
            "value": 712854,
            "unit": "ns/op\t   11559 B/op\t     160 allocs/op",
            "extra": "1692 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - ns/op",
            "value": 712854,
            "unit": "ns/op",
            "extra": "1692 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - B/op",
            "value": 11559,
            "unit": "B/op",
            "extra": "1692 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - allocs/op",
            "value": 160,
            "unit": "allocs/op",
            "extra": "1692 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "66f995ef5ac575900232abb4bc7fc1be873c444e",
          "message": "Merge pull request #1712 from gofiber/dependabot/go_modules/mongodb/github.com/testcontainers/testcontainers-go/modules/mongodb-0.37.0\n\nchore(deps): bump github.com/testcontainers/testcontainers-go/modules/mongodb from 0.36.0 to 0.37.0 in /mongodb",
          "timestamp": "2025-04-29T09:37:20+02:00",
          "tree_id": "a46dcda1493a86cc997cbcc401c71f4391318675",
          "url": "https://github.com/gofiber/storage/commit/66f995ef5ac575900232abb4bc7fc1be873c444e"
        },
        "date": 1745912589233,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MongoDB_Set",
            "value": 351065,
            "unit": "ns/op\t    6489 B/op\t      92 allocs/op",
            "extra": "3306 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - ns/op",
            "value": 351065,
            "unit": "ns/op",
            "extra": "3306 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - B/op",
            "value": 6489,
            "unit": "B/op",
            "extra": "3306 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - allocs/op",
            "value": 92,
            "unit": "allocs/op",
            "extra": "3306 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get",
            "value": 316418,
            "unit": "ns/op\t    7481 B/op\t      80 allocs/op",
            "extra": "3674 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - ns/op",
            "value": 316418,
            "unit": "ns/op",
            "extra": "3674 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - B/op",
            "value": 7481,
            "unit": "B/op",
            "extra": "3674 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "3674 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete",
            "value": 725485,
            "unit": "ns/op\t   11548 B/op\t     160 allocs/op",
            "extra": "1628 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - ns/op",
            "value": 725485,
            "unit": "ns/op",
            "extra": "1628 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - B/op",
            "value": 11548,
            "unit": "B/op",
            "extra": "1628 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - allocs/op",
            "value": 160,
            "unit": "allocs/op",
            "extra": "1628 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "087d3e71d7181b9e6db4039be621cc982be0faa5",
          "message": "Merge pull request #1751 from gofiber/dependabot/go_modules/mongodb/go.mongodb.org/mongo-driver-1.17.4\n\nchore(deps): bump go.mongodb.org/mongo-driver from 1.17.3 to 1.17.4 in /mongodb",
          "timestamp": "2025-06-06T09:51:08+02:00",
          "tree_id": "66fb4ca6e99fd8ba0e2a48c99a011dd1c3803346",
          "url": "https://github.com/gofiber/storage/commit/087d3e71d7181b9e6db4039be621cc982be0faa5"
        },
        "date": 1749196359336,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MongoDB_Set",
            "value": 339352,
            "unit": "ns/op\t    6486 B/op\t      92 allocs/op",
            "extra": "3439 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - ns/op",
            "value": 339352,
            "unit": "ns/op",
            "extra": "3439 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - B/op",
            "value": 6486,
            "unit": "B/op",
            "extra": "3439 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - allocs/op",
            "value": 92,
            "unit": "allocs/op",
            "extra": "3439 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get",
            "value": 306817,
            "unit": "ns/op\t    7479 B/op\t      80 allocs/op",
            "extra": "3824 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - ns/op",
            "value": 306817,
            "unit": "ns/op",
            "extra": "3824 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - B/op",
            "value": 7479,
            "unit": "B/op",
            "extra": "3824 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "3824 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete",
            "value": 710091,
            "unit": "ns/op\t   11550 B/op\t     160 allocs/op",
            "extra": "1712 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - ns/op",
            "value": 710091,
            "unit": "ns/op",
            "extra": "1712 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - B/op",
            "value": 11550,
            "unit": "B/op",
            "extra": "1712 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - allocs/op",
            "value": 160,
            "unit": "allocs/op",
            "extra": "1712 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1751882221804,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MongoDB_Set",
            "value": 341966,
            "unit": "ns/op\t    6487 B/op\t      92 allocs/op",
            "extra": "3399 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - ns/op",
            "value": 341966,
            "unit": "ns/op",
            "extra": "3399 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - B/op",
            "value": 6487,
            "unit": "B/op",
            "extra": "3399 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - allocs/op",
            "value": 92,
            "unit": "allocs/op",
            "extra": "3399 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get",
            "value": 309359,
            "unit": "ns/op\t    7480 B/op\t      80 allocs/op",
            "extra": "3780 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - ns/op",
            "value": 309359,
            "unit": "ns/op",
            "extra": "3780 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - B/op",
            "value": 7480,
            "unit": "B/op",
            "extra": "3780 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "3780 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete",
            "value": 710368,
            "unit": "ns/op\t   11552 B/op\t     160 allocs/op",
            "extra": "1676 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - ns/op",
            "value": 710368,
            "unit": "ns/op",
            "extra": "1676 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - B/op",
            "value": 11552,
            "unit": "B/op",
            "extra": "1676 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - allocs/op",
            "value": 160,
            "unit": "allocs/op",
            "extra": "1676 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1752653368738,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MongoDB_Set",
            "value": 350212,
            "unit": "ns/op\t    6485 B/op\t      92 allocs/op",
            "extra": "3358 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - ns/op",
            "value": 350212,
            "unit": "ns/op",
            "extra": "3358 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - B/op",
            "value": 6485,
            "unit": "B/op",
            "extra": "3358 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - allocs/op",
            "value": 92,
            "unit": "allocs/op",
            "extra": "3358 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get",
            "value": 316465,
            "unit": "ns/op\t    7479 B/op\t      80 allocs/op",
            "extra": "3648 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - ns/op",
            "value": 316465,
            "unit": "ns/op",
            "extra": "3648 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - B/op",
            "value": 7479,
            "unit": "B/op",
            "extra": "3648 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "3648 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete",
            "value": 727238,
            "unit": "ns/op\t   11554 B/op\t     160 allocs/op",
            "extra": "1641 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - ns/op",
            "value": 727238,
            "unit": "ns/op",
            "extra": "1641 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - B/op",
            "value": 11554,
            "unit": "B/op",
            "extra": "1641 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - allocs/op",
            "value": 160,
            "unit": "allocs/op",
            "extra": "1641 times\n4 procs"
          }
        ]
      }
    ]
  }
}