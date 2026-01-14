window.BENCHMARK_DATA = {
  "lastUpdate": 1768377509482,
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
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d44dc9b641271cff3f6752c5e4ab92ac404cd873",
          "message": "Merge pull request #1945 from gofiber/dependabot/go_modules/mongodb/go.mongodb.org/mongo-driver-1.17.6\n\nchore(deps): bump go.mongodb.org/mongo-driver from 1.17.4 to 1.17.6 in /mongodb",
          "timestamp": "2025-10-28T08:31:13+01:00",
          "tree_id": "583f71bda8ad4bfe121209438121ee218ea9753b",
          "url": "https://github.com/gofiber/storage/commit/d44dc9b641271cff3f6752c5e4ab92ac404cd873"
        },
        "date": 1761636819160,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MongoDB_Set",
            "value": 344578,
            "unit": "ns/op\t    6490 B/op\t      92 allocs/op",
            "extra": "3376 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - ns/op",
            "value": 344578,
            "unit": "ns/op",
            "extra": "3376 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - B/op",
            "value": 6490,
            "unit": "B/op",
            "extra": "3376 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - allocs/op",
            "value": 92,
            "unit": "allocs/op",
            "extra": "3376 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get",
            "value": 308924,
            "unit": "ns/op\t    7481 B/op\t      80 allocs/op",
            "extra": "3702 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - ns/op",
            "value": 308924,
            "unit": "ns/op",
            "extra": "3702 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - B/op",
            "value": 7481,
            "unit": "B/op",
            "extra": "3702 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "3702 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete",
            "value": 713076,
            "unit": "ns/op\t   11551 B/op\t     160 allocs/op",
            "extra": "1678 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - ns/op",
            "value": 713076,
            "unit": "ns/op",
            "extra": "1678 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - B/op",
            "value": 11551,
            "unit": "B/op",
            "extra": "1678 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - allocs/op",
            "value": 160,
            "unit": "allocs/op",
            "extra": "1678 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d892fcff350a4a478d328bc0ed69cb389edd8e12",
          "message": "Merge pull request #1968 from gofiber/dependabot/go_modules/mongodb/github.com/docker/docker-28.3.3incompatible\n\nchore(deps): bump github.com/docker/docker from 28.2.2+incompatible to 28.3.3+incompatible in /mongodb",
          "timestamp": "2025-11-06T09:01:03+01:00",
          "tree_id": "0243f1dc276d9de4b9eb23cd0a72a0a6eb184b48",
          "url": "https://github.com/gofiber/storage/commit/d892fcff350a4a478d328bc0ed69cb389edd8e12"
        },
        "date": 1762417504108,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MongoDB_Set",
            "value": 346068,
            "unit": "ns/op\t    6491 B/op\t      92 allocs/op",
            "extra": "3357 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - ns/op",
            "value": 346068,
            "unit": "ns/op",
            "extra": "3357 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - B/op",
            "value": 6491,
            "unit": "B/op",
            "extra": "3357 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - allocs/op",
            "value": 92,
            "unit": "allocs/op",
            "extra": "3357 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get",
            "value": 310821,
            "unit": "ns/op\t    7480 B/op\t      80 allocs/op",
            "extra": "3654 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - ns/op",
            "value": 310821,
            "unit": "ns/op",
            "extra": "3654 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - B/op",
            "value": 7480,
            "unit": "B/op",
            "extra": "3654 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "3654 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete",
            "value": 721453,
            "unit": "ns/op\t   11550 B/op\t     160 allocs/op",
            "extra": "1662 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - ns/op",
            "value": 721453,
            "unit": "ns/op",
            "extra": "1662 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - B/op",
            "value": 11550,
            "unit": "B/op",
            "extra": "1662 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - allocs/op",
            "value": 160,
            "unit": "allocs/op",
            "extra": "1662 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a823d44d81f5e83428861448ed6961cd1405ea5c",
          "message": "Merge pull request #1991 from gofiber/dependabot/go_modules/mongodb/github.com/docker/docker-28.5.2incompatible\n\nchore(deps): bump github.com/docker/docker from 28.3.3+incompatible to 28.5.2+incompatible in /mongodb",
          "timestamp": "2025-11-06T09:20:37+01:00",
          "tree_id": "31d51cbbf61fba6bb19fa5fb281a453fb3928874",
          "url": "https://github.com/gofiber/storage/commit/a823d44d81f5e83428861448ed6961cd1405ea5c"
        },
        "date": 1762418304217,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MongoDB_Set",
            "value": 347866,
            "unit": "ns/op\t    6489 B/op\t      92 allocs/op",
            "extra": "3342 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - ns/op",
            "value": 347866,
            "unit": "ns/op",
            "extra": "3342 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - B/op",
            "value": 6489,
            "unit": "B/op",
            "extra": "3342 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - allocs/op",
            "value": 92,
            "unit": "allocs/op",
            "extra": "3342 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get",
            "value": 314035,
            "unit": "ns/op\t    7483 B/op\t      80 allocs/op",
            "extra": "3686 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - ns/op",
            "value": 314035,
            "unit": "ns/op",
            "extra": "3686 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - B/op",
            "value": 7483,
            "unit": "B/op",
            "extra": "3686 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "3686 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete",
            "value": 722852,
            "unit": "ns/op\t   11552 B/op\t     160 allocs/op",
            "extra": "1674 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - ns/op",
            "value": 722852,
            "unit": "ns/op",
            "extra": "1674 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - B/op",
            "value": 11552,
            "unit": "B/op",
            "extra": "1674 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - allocs/op",
            "value": 160,
            "unit": "allocs/op",
            "extra": "1674 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1763657706610,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MongoDB_Set",
            "value": 340953,
            "unit": "ns/op\t    6490 B/op\t      92 allocs/op",
            "extra": "3358 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - ns/op",
            "value": 340953,
            "unit": "ns/op",
            "extra": "3358 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - B/op",
            "value": 6490,
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
            "value": 312976,
            "unit": "ns/op\t    7482 B/op\t      80 allocs/op",
            "extra": "3638 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - ns/op",
            "value": 312976,
            "unit": "ns/op",
            "extra": "3638 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - B/op",
            "value": 7482,
            "unit": "B/op",
            "extra": "3638 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "3638 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete",
            "value": 711339,
            "unit": "ns/op\t   11548 B/op\t     160 allocs/op",
            "extra": "1686 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - ns/op",
            "value": 711339,
            "unit": "ns/op",
            "extra": "1686 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - B/op",
            "value": 11548,
            "unit": "B/op",
            "extra": "1686 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - allocs/op",
            "value": 160,
            "unit": "allocs/op",
            "extra": "1686 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1763662270830,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MongoDB_Set",
            "value": 345721,
            "unit": "ns/op\t    6485 B/op\t      92 allocs/op",
            "extra": "3390 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - ns/op",
            "value": 345721,
            "unit": "ns/op",
            "extra": "3390 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - B/op",
            "value": 6485,
            "unit": "B/op",
            "extra": "3390 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - allocs/op",
            "value": 92,
            "unit": "allocs/op",
            "extra": "3390 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get",
            "value": 310035,
            "unit": "ns/op\t    7478 B/op\t      80 allocs/op",
            "extra": "3730 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - ns/op",
            "value": 310035,
            "unit": "ns/op",
            "extra": "3730 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - B/op",
            "value": 7478,
            "unit": "B/op",
            "extra": "3730 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "3730 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete",
            "value": 716001,
            "unit": "ns/op\t   11552 B/op\t     160 allocs/op",
            "extra": "1645 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - ns/op",
            "value": 716001,
            "unit": "ns/op",
            "extra": "1645 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - B/op",
            "value": 11552,
            "unit": "B/op",
            "extra": "1645 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - allocs/op",
            "value": 160,
            "unit": "allocs/op",
            "extra": "1645 times\n4 procs"
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
        "date": 1764260104761,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MongoDB_Set",
            "value": 348171,
            "unit": "ns/op\t    6489 B/op\t      92 allocs/op",
            "extra": "3292 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - ns/op",
            "value": 348171,
            "unit": "ns/op",
            "extra": "3292 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - B/op",
            "value": 6489,
            "unit": "B/op",
            "extra": "3292 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - allocs/op",
            "value": 92,
            "unit": "allocs/op",
            "extra": "3292 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get",
            "value": 313325,
            "unit": "ns/op\t    7478 B/op\t      80 allocs/op",
            "extra": "3763 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - ns/op",
            "value": 313325,
            "unit": "ns/op",
            "extra": "3763 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - B/op",
            "value": 7478,
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
            "value": 719971,
            "unit": "ns/op\t   11558 B/op\t     160 allocs/op",
            "extra": "1669 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - ns/op",
            "value": 719971,
            "unit": "ns/op",
            "extra": "1669 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - B/op",
            "value": 11558,
            "unit": "B/op",
            "extra": "1669 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - allocs/op",
            "value": 160,
            "unit": "allocs/op",
            "extra": "1669 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "86ec53a7631a5ade6d69b6a05f802a115602aeed",
          "message": "Merge pull request #2274 from gofiber/dependabot/go_modules/mongodb/github.com/xdg-go/scram-1.2.0\n\nchore(deps): bump github.com/xdg-go/scram from 1.1.2 to 1.2.0 in /mongodb",
          "timestamp": "2025-11-27T17:23:12+01:00",
          "tree_id": "f55a9be24b152ddf2ae4d2a80775163b21254ad1",
          "url": "https://github.com/gofiber/storage/commit/86ec53a7631a5ade6d69b6a05f802a115602aeed"
        },
        "date": 1764260691580,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MongoDB_Set",
            "value": 341037,
            "unit": "ns/op\t    6491 B/op\t      92 allocs/op",
            "extra": "3332 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - ns/op",
            "value": 341037,
            "unit": "ns/op",
            "extra": "3332 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - B/op",
            "value": 6491,
            "unit": "B/op",
            "extra": "3332 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - allocs/op",
            "value": 92,
            "unit": "allocs/op",
            "extra": "3332 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get",
            "value": 304702,
            "unit": "ns/op\t    7482 B/op\t      80 allocs/op",
            "extra": "3890 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - ns/op",
            "value": 304702,
            "unit": "ns/op",
            "extra": "3890 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - B/op",
            "value": 7482,
            "unit": "B/op",
            "extra": "3890 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "3890 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete",
            "value": 701176,
            "unit": "ns/op\t   11557 B/op\t     160 allocs/op",
            "extra": "1681 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - ns/op",
            "value": 701176,
            "unit": "ns/op",
            "extra": "1681 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - B/op",
            "value": 11557,
            "unit": "B/op",
            "extra": "1681 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - allocs/op",
            "value": 160,
            "unit": "allocs/op",
            "extra": "1681 times\n4 procs"
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
        "date": 1764261361577,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MongoDB_Set",
            "value": 344225,
            "unit": "ns/op\t    6489 B/op\t      92 allocs/op",
            "extra": "3378 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - ns/op",
            "value": 344225,
            "unit": "ns/op",
            "extra": "3378 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - B/op",
            "value": 6489,
            "unit": "B/op",
            "extra": "3378 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - allocs/op",
            "value": 92,
            "unit": "allocs/op",
            "extra": "3378 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get",
            "value": 308082,
            "unit": "ns/op\t    7478 B/op\t      80 allocs/op",
            "extra": "3732 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - ns/op",
            "value": 308082,
            "unit": "ns/op",
            "extra": "3732 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - B/op",
            "value": 7478,
            "unit": "B/op",
            "extra": "3732 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "3732 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete",
            "value": 708588,
            "unit": "ns/op\t   11553 B/op\t     160 allocs/op",
            "extra": "1665 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - ns/op",
            "value": 708588,
            "unit": "ns/op",
            "extra": "1665 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - B/op",
            "value": 11553,
            "unit": "B/op",
            "extra": "1665 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - allocs/op",
            "value": 160,
            "unit": "allocs/op",
            "extra": "1665 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1765267616980,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MongoDB_Set",
            "value": 348118,
            "unit": "ns/op\t    6487 B/op\t      92 allocs/op",
            "extra": "3369 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - ns/op",
            "value": 348118,
            "unit": "ns/op",
            "extra": "3369 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - B/op",
            "value": 6487,
            "unit": "B/op",
            "extra": "3369 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - allocs/op",
            "value": 92,
            "unit": "allocs/op",
            "extra": "3369 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get",
            "value": 307062,
            "unit": "ns/op\t    7479 B/op\t      80 allocs/op",
            "extra": "3830 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - ns/op",
            "value": 307062,
            "unit": "ns/op",
            "extra": "3830 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - B/op",
            "value": 7479,
            "unit": "B/op",
            "extra": "3830 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "3830 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete",
            "value": 708971,
            "unit": "ns/op\t   11556 B/op\t     160 allocs/op",
            "extra": "1676 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - ns/op",
            "value": 708971,
            "unit": "ns/op",
            "extra": "1676 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - B/op",
            "value": 11556,
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
          "id": "fecc0c591b46e4c76989a68a5baf1e198c3a9baa",
          "message": "Merge pull request #2351 from gofiber/dependabot/go_modules/cassandra/morikuni-modules-13437e0f92",
          "timestamp": "2025-12-11T08:53:06+01:00",
          "tree_id": "eb476666cfafe83f9893d0e9cc77e5a18aeb385e",
          "url": "https://github.com/gofiber/storage/commit/fecc0c591b46e4c76989a68a5baf1e198c3a9baa"
        },
        "date": 1765439785698,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MongoDB_Set",
            "value": 352075,
            "unit": "ns/op\t    6488 B/op\t      92 allocs/op",
            "extra": "3339 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - ns/op",
            "value": 352075,
            "unit": "ns/op",
            "extra": "3339 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - B/op",
            "value": 6488,
            "unit": "B/op",
            "extra": "3339 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - allocs/op",
            "value": 92,
            "unit": "allocs/op",
            "extra": "3339 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get",
            "value": 316030,
            "unit": "ns/op\t    7482 B/op\t      80 allocs/op",
            "extra": "3678 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - ns/op",
            "value": 316030,
            "unit": "ns/op",
            "extra": "3678 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - B/op",
            "value": 7482,
            "unit": "B/op",
            "extra": "3678 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "3678 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete",
            "value": 718276,
            "unit": "ns/op\t   11552 B/op\t     160 allocs/op",
            "extra": "1683 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - ns/op",
            "value": 718276,
            "unit": "ns/op",
            "extra": "1683 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - B/op",
            "value": 11552,
            "unit": "B/op",
            "extra": "1683 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - allocs/op",
            "value": 160,
            "unit": "allocs/op",
            "extra": "1683 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1766043817792,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MongoDB_Set",
            "value": 343873,
            "unit": "ns/op\t    6471 B/op\t      88 allocs/op",
            "extra": "3326 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - ns/op",
            "value": 343873,
            "unit": "ns/op",
            "extra": "3326 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - B/op",
            "value": 6471,
            "unit": "B/op",
            "extra": "3326 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - allocs/op",
            "value": 88,
            "unit": "allocs/op",
            "extra": "3326 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get",
            "value": 310618,
            "unit": "ns/op\t    7464 B/op\t      79 allocs/op",
            "extra": "3730 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - ns/op",
            "value": 310618,
            "unit": "ns/op",
            "extra": "3730 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - B/op",
            "value": 7464,
            "unit": "B/op",
            "extra": "3730 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - allocs/op",
            "value": 79,
            "unit": "allocs/op",
            "extra": "3730 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete",
            "value": 719087,
            "unit": "ns/op\t   11532 B/op\t     155 allocs/op",
            "extra": "1657 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - ns/op",
            "value": 719087,
            "unit": "ns/op",
            "extra": "1657 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - B/op",
            "value": 11532,
            "unit": "B/op",
            "extra": "1657 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - allocs/op",
            "value": 155,
            "unit": "allocs/op",
            "extra": "1657 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1768377162894,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MongoDB_Set",
            "value": 360164,
            "unit": "ns/op\t    6470 B/op\t      88 allocs/op",
            "extra": "3220 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - ns/op",
            "value": 360164,
            "unit": "ns/op",
            "extra": "3220 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - B/op",
            "value": 6470,
            "unit": "B/op",
            "extra": "3220 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - allocs/op",
            "value": 88,
            "unit": "allocs/op",
            "extra": "3220 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get",
            "value": 322104,
            "unit": "ns/op\t    7465 B/op\t      79 allocs/op",
            "extra": "3620 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - ns/op",
            "value": 322104,
            "unit": "ns/op",
            "extra": "3620 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - B/op",
            "value": 7465,
            "unit": "B/op",
            "extra": "3620 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - allocs/op",
            "value": 79,
            "unit": "allocs/op",
            "extra": "3620 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete",
            "value": 742055,
            "unit": "ns/op\t   11529 B/op\t     155 allocs/op",
            "extra": "1621 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - ns/op",
            "value": 742055,
            "unit": "ns/op",
            "extra": "1621 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - B/op",
            "value": 11529,
            "unit": "B/op",
            "extra": "1621 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - allocs/op",
            "value": 155,
            "unit": "allocs/op",
            "extra": "1621 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1768377504622,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MongoDB_Set",
            "value": 346980,
            "unit": "ns/op\t    6472 B/op\t      88 allocs/op",
            "extra": "3358 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - ns/op",
            "value": 346980,
            "unit": "ns/op",
            "extra": "3358 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - B/op",
            "value": 6472,
            "unit": "B/op",
            "extra": "3358 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - allocs/op",
            "value": 88,
            "unit": "allocs/op",
            "extra": "3358 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get",
            "value": 312644,
            "unit": "ns/op\t    7464 B/op\t      79 allocs/op",
            "extra": "3690 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - ns/op",
            "value": 312644,
            "unit": "ns/op",
            "extra": "3690 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - B/op",
            "value": 7464,
            "unit": "B/op",
            "extra": "3690 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - allocs/op",
            "value": 79,
            "unit": "allocs/op",
            "extra": "3690 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete",
            "value": 722751,
            "unit": "ns/op\t   11529 B/op\t     155 allocs/op",
            "extra": "1666 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - ns/op",
            "value": 722751,
            "unit": "ns/op",
            "extra": "1666 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - B/op",
            "value": 11529,
            "unit": "B/op",
            "extra": "1666 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - allocs/op",
            "value": 155,
            "unit": "allocs/op",
            "extra": "1666 times\n4 procs"
          }
        ]
      }
    ]
  }
}