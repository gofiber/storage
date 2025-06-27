window.BENCHMARK_DATA = {
  "lastUpdate": 1751008990056,
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
          "id": "f19bcd66747e732c4dfb738daee0c2fc8cbb71e2",
          "message": "Merge pull request #1723 from mdelapenya/fix-ruedis-benchmarks\n\nfeat(redis): use testcontainers in rueidis and valkey",
          "timestamp": "2025-05-23T12:36:13+02:00",
          "tree_id": "5da9a15c29c257b4bcde4de69303177871c1ed28",
          "url": "https://github.com/gofiber/storage/commit/f19bcd66747e732c4dfb738daee0c2fc8cbb71e2"
        },
        "date": 1747996618769,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Rueidis_Set",
            "value": 129152,
            "unit": "ns/op\t     307 B/op\t       1 allocs/op",
            "extra": "9272 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - ns/op",
            "value": 129152,
            "unit": "ns/op",
            "extra": "9272 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - B/op",
            "value": 307,
            "unit": "B/op",
            "extra": "9272 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "9272 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get",
            "value": 136687,
            "unit": "ns/op\t     717 B/op\t      11 allocs/op",
            "extra": "8377 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - ns/op",
            "value": 136687,
            "unit": "ns/op",
            "extra": "8377 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - B/op",
            "value": 717,
            "unit": "B/op",
            "extra": "8377 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "8377 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete",
            "value": 256316,
            "unit": "ns/op\t     690 B/op\t       3 allocs/op",
            "extra": "4106 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - ns/op",
            "value": 256316,
            "unit": "ns/op",
            "extra": "4106 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - B/op",
            "value": 690,
            "unit": "B/op",
            "extra": "4106 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "4106 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bddb91a82de538ebdd2c9444a3bfcec2142b28b5",
          "message": "Merge pull request #1739 from gofiber/dependabot/go_modules/rueidis/github.com/redis/rueidis-1.0.60\n\nchore(deps): bump github.com/redis/rueidis from 1.0.44 to 1.0.60 in /rueidis",
          "timestamp": "2025-05-28T09:26:11+02:00",
          "tree_id": "bbe0adb872e29b36d12b0fe2afc9f293ee7f6d80",
          "url": "https://github.com/gofiber/storage/commit/bddb91a82de538ebdd2c9444a3bfcec2142b28b5"
        },
        "date": 1748417242055,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Rueidis_Set",
            "value": 127929,
            "unit": "ns/op\t     306 B/op\t       1 allocs/op",
            "extra": "9290 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - ns/op",
            "value": 127929,
            "unit": "ns/op",
            "extra": "9290 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - B/op",
            "value": 306,
            "unit": "B/op",
            "extra": "9290 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "9290 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get",
            "value": 138113,
            "unit": "ns/op\t     561 B/op\t      11 allocs/op",
            "extra": "8606 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - ns/op",
            "value": 138113,
            "unit": "ns/op",
            "extra": "8606 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - B/op",
            "value": 561,
            "unit": "B/op",
            "extra": "8606 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "8606 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete",
            "value": 258037,
            "unit": "ns/op\t     693 B/op\t       3 allocs/op",
            "extra": "4089 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - ns/op",
            "value": 258037,
            "unit": "ns/op",
            "extra": "4089 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - B/op",
            "value": 693,
            "unit": "B/op",
            "extra": "4089 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "4089 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c40fab2f49a395fe352c5a0a9ae3f77f627e081e",
          "message": "Merge pull request #1755 from gofiber/dependabot/go_modules/rueidis/github.com/redis/rueidis-1.0.61\n\nchore(deps): bump github.com/redis/rueidis from 1.0.60 to 1.0.61 in /rueidis",
          "timestamp": "2025-06-09T10:38:30+02:00",
          "tree_id": "9aac1c6693002e60fe5cdcd7ad1d5665828349d9",
          "url": "https://github.com/gofiber/storage/commit/c40fab2f49a395fe352c5a0a9ae3f77f627e081e"
        },
        "date": 1749458373361,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Rueidis_Set",
            "value": 132207,
            "unit": "ns/op\t     373 B/op\t       2 allocs/op",
            "extra": "7633 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - ns/op",
            "value": 132207,
            "unit": "ns/op",
            "extra": "7633 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - B/op",
            "value": 373,
            "unit": "B/op",
            "extra": "7633 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "7633 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get",
            "value": 138433,
            "unit": "ns/op\t     568 B/op\t      11 allocs/op",
            "extra": "8520 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - ns/op",
            "value": 138433,
            "unit": "ns/op",
            "extra": "8520 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - B/op",
            "value": 568,
            "unit": "B/op",
            "extra": "8520 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "8520 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete",
            "value": 263041,
            "unit": "ns/op\t    1052 B/op\t       4 allocs/op",
            "extra": "4032 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - ns/op",
            "value": 263041,
            "unit": "ns/op",
            "extra": "4032 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - B/op",
            "value": 1052,
            "unit": "B/op",
            "extra": "4032 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4032 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d806d258efee141dd042a05c11f3d7dd00324c86",
          "message": "Merge pull request #1802 from gofiber/dependabot/go_modules/rueidis/github.com/redis/rueidis-1.0.62\n\nchore(deps): bump github.com/redis/rueidis from 1.0.61 to 1.0.62 in /rueidis",
          "timestamp": "2025-06-27T09:21:57+02:00",
          "tree_id": "34afc535a792325180e83112ffecaa62ef5f68e5",
          "url": "https://github.com/gofiber/storage/commit/d806d258efee141dd042a05c11f3d7dd00324c86"
        },
        "date": 1751008985986,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Rueidis_Set",
            "value": 132572,
            "unit": "ns/op\t     313 B/op\t       1 allocs/op",
            "extra": "9081 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - ns/op",
            "value": 132572,
            "unit": "ns/op",
            "extra": "9081 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - B/op",
            "value": 313,
            "unit": "B/op",
            "extra": "9081 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "9081 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get",
            "value": 139338,
            "unit": "ns/op\t     514 B/op\t      11 allocs/op",
            "extra": "8521 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - ns/op",
            "value": 139338,
            "unit": "ns/op",
            "extra": "8521 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - B/op",
            "value": 514,
            "unit": "B/op",
            "extra": "8521 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "8521 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete",
            "value": 261636,
            "unit": "ns/op\t     685 B/op\t       3 allocs/op",
            "extra": "4134 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - ns/op",
            "value": 261636,
            "unit": "ns/op",
            "extra": "4134 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - B/op",
            "value": 685,
            "unit": "B/op",
            "extra": "4134 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "4134 times\n4 procs"
          }
        ]
      }
    ]
  }
}