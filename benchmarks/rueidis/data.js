window.BENCHMARK_DATA = {
  "lastUpdate": 1771288314823,
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
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1751882067827,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Rueidis_Set",
            "value": 132848,
            "unit": "ns/op\t     477 B/op\t       2 allocs/op",
            "extra": "8925 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - ns/op",
            "value": 132848,
            "unit": "ns/op",
            "extra": "8925 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - B/op",
            "value": 477,
            "unit": "B/op",
            "extra": "8925 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "8925 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get",
            "value": 141415,
            "unit": "ns/op\t     543 B/op\t      11 allocs/op",
            "extra": "8184 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - ns/op",
            "value": 141415,
            "unit": "ns/op",
            "extra": "8184 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - B/op",
            "value": 543,
            "unit": "B/op",
            "extra": "8184 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "8184 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete",
            "value": 266486,
            "unit": "ns/op\t     689 B/op\t       3 allocs/op",
            "extra": "4110 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - ns/op",
            "value": 266486,
            "unit": "ns/op",
            "extra": "4110 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - B/op",
            "value": 689,
            "unit": "B/op",
            "extra": "4110 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "4110 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eeb603cde2cf0e7eaf2dd1a6a8a912ff44f76e4a",
          "message": "Merge pull request #1823 from gofiber/dependabot/go_modules/rueidis/github.com/redis/rueidis-1.0.63\n\nchore(deps): bump github.com/redis/rueidis from 1.0.62 to 1.0.63 in /rueidis",
          "timestamp": "2025-07-16T10:01:02+02:00",
          "tree_id": "e637fe1443237d840d700e6b63016be4c04e1a29",
          "url": "https://github.com/gofiber/storage/commit/eeb603cde2cf0e7eaf2dd1a6a8a912ff44f76e4a"
        },
        "date": 1752652951239,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Rueidis_Set",
            "value": 132084,
            "unit": "ns/op\t     470 B/op\t       2 allocs/op",
            "extra": "9060 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - ns/op",
            "value": 132084,
            "unit": "ns/op",
            "extra": "9060 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - B/op",
            "value": 470,
            "unit": "B/op",
            "extra": "9060 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "9060 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get",
            "value": 139715,
            "unit": "ns/op\t     602 B/op\t      11 allocs/op",
            "extra": "8305 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - ns/op",
            "value": 139715,
            "unit": "ns/op",
            "extra": "8305 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - B/op",
            "value": 602,
            "unit": "B/op",
            "extra": "8305 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "8305 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete",
            "value": 263756,
            "unit": "ns/op\t     705 B/op\t       3 allocs/op",
            "extra": "4021 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - ns/op",
            "value": 263756,
            "unit": "ns/op",
            "extra": "4021 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - B/op",
            "value": 705,
            "unit": "B/op",
            "extra": "4021 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "4021 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1752653176593,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Rueidis_Set",
            "value": 134592,
            "unit": "ns/op\t     366 B/op\t       2 allocs/op",
            "extra": "7765 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - ns/op",
            "value": 134592,
            "unit": "ns/op",
            "extra": "7765 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - B/op",
            "value": 366,
            "unit": "B/op",
            "extra": "7765 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "7765 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get",
            "value": 141623,
            "unit": "ns/op\t     512 B/op\t      11 allocs/op",
            "extra": "8634 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - ns/op",
            "value": 141623,
            "unit": "ns/op",
            "extra": "8634 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - B/op",
            "value": 512,
            "unit": "B/op",
            "extra": "8634 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "8634 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete",
            "value": 266784,
            "unit": "ns/op\t     693 B/op\t       3 allocs/op",
            "extra": "4084 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - ns/op",
            "value": 266784,
            "unit": "ns/op",
            "extra": "4084 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - B/op",
            "value": 693,
            "unit": "B/op",
            "extra": "4084 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "4084 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0385e5a52187484eaf93aeb77763b238bab0814b",
          "message": "Merge pull request #1852 from gofiber/dependabot/go_modules/rueidis/github.com/redis/rueidis-1.0.64\n\nchore(deps): bump github.com/redis/rueidis from 1.0.63 to 1.0.64 in /rueidis",
          "timestamp": "2025-08-06T09:47:59+02:00",
          "tree_id": "362d5f5b502a11660a3c231bc59087eb99204ff1",
          "url": "https://github.com/gofiber/storage/commit/0385e5a52187484eaf93aeb77763b238bab0814b"
        },
        "date": 1754466533223,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Rueidis_Set",
            "value": 130323,
            "unit": "ns/op\t     355 B/op\t       2 allocs/op",
            "extra": "8013 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - ns/op",
            "value": 130323,
            "unit": "ns/op",
            "extra": "8013 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - B/op",
            "value": 355,
            "unit": "B/op",
            "extra": "8013 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "8013 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get",
            "value": 136232,
            "unit": "ns/op\t     576 B/op\t      11 allocs/op",
            "extra": "8550 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - ns/op",
            "value": 136232,
            "unit": "ns/op",
            "extra": "8550 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - B/op",
            "value": 576,
            "unit": "B/op",
            "extra": "8550 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "8550 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete",
            "value": 259385,
            "unit": "ns/op\t     722 B/op\t       3 allocs/op",
            "extra": "3925 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - ns/op",
            "value": 259385,
            "unit": "ns/op",
            "extra": "3925 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - B/op",
            "value": 722,
            "unit": "B/op",
            "extra": "3925 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "3925 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5ac99134551b96277472fbb55e406aee93b89605",
          "message": "Merge pull request #1910 from gofiber/dependabot/go_modules/rueidis/github.com/redis/rueidis-1.0.65\n\nchore(deps): bump github.com/redis/rueidis from 1.0.64 to 1.0.65 in /rueidis",
          "timestamp": "2025-09-22T09:16:54+02:00",
          "tree_id": "7c6256c151c51f60ba619f43353d8f9c7bcf6bda",
          "url": "https://github.com/gofiber/storage/commit/5ac99134551b96277472fbb55e406aee93b89605"
        },
        "date": 1758525481765,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Rueidis_Set",
            "value": 133272,
            "unit": "ns/op\t     316 B/op\t       1 allocs/op",
            "extra": "9024 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - ns/op",
            "value": 133272,
            "unit": "ns/op",
            "extra": "9024 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - B/op",
            "value": 316,
            "unit": "B/op",
            "extra": "9024 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "9024 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get",
            "value": 141804,
            "unit": "ns/op\t     552 B/op\t      11 allocs/op",
            "extra": "8010 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - ns/op",
            "value": 141804,
            "unit": "ns/op",
            "extra": "8010 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - B/op",
            "value": 552,
            "unit": "B/op",
            "extra": "8010 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "8010 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete",
            "value": 267991,
            "unit": "ns/op\t     725 B/op\t       3 allocs/op",
            "extra": "3906 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - ns/op",
            "value": 267991,
            "unit": "ns/op",
            "extra": "3906 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - B/op",
            "value": 725,
            "unit": "B/op",
            "extra": "3906 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "3906 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3b8bc71930dd2cc43dbbf6d8a6aaeb2c292985ac",
          "message": "Merge pull request #1915 from gofiber/dependabot/go_modules/rueidis/github.com/redis/rueidis-1.0.66\n\nchore(deps): bump github.com/redis/rueidis from 1.0.65 to 1.0.66 in /rueidis",
          "timestamp": "2025-09-29T10:49:42+02:00",
          "tree_id": "63c417b01710d379f92957d0619a01ce1b6c5b0e",
          "url": "https://github.com/gofiber/storage/commit/3b8bc71930dd2cc43dbbf6d8a6aaeb2c292985ac"
        },
        "date": 1759135859634,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Rueidis_Set",
            "value": 131284,
            "unit": "ns/op\t     466 B/op\t       2 allocs/op",
            "extra": "9141 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - ns/op",
            "value": 131284,
            "unit": "ns/op",
            "extra": "9141 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - B/op",
            "value": 466,
            "unit": "B/op",
            "extra": "9141 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "9141 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get",
            "value": 137159,
            "unit": "ns/op\t     573 B/op\t      11 allocs/op",
            "extra": "8156 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - ns/op",
            "value": 137159,
            "unit": "ns/op",
            "extra": "8156 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - B/op",
            "value": 573,
            "unit": "B/op",
            "extra": "8156 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "8156 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete",
            "value": 264354,
            "unit": "ns/op\t     929 B/op\t       3 allocs/op",
            "extra": "4564 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - ns/op",
            "value": 264354,
            "unit": "ns/op",
            "extra": "4564 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - B/op",
            "value": 929,
            "unit": "B/op",
            "extra": "4564 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "4564 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "18fc7b7ebc4534a682c676755aa2b95ea5342125",
          "message": "Merge pull request #1925 from gofiber/dependabot/go_modules/rueidis/github.com/redis/rueidis-1.0.67\n\nchore(deps): bump github.com/redis/rueidis from 1.0.66 to 1.0.67 in /rueidis",
          "timestamp": "2025-10-13T09:33:15+02:00",
          "tree_id": "ffc12a14b97cf380814c998b520d1e09fe4d1dbf",
          "url": "https://github.com/gofiber/storage/commit/18fc7b7ebc4534a682c676755aa2b95ea5342125"
        },
        "date": 1760340867968,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Rueidis_Set",
            "value": 131754,
            "unit": "ns/op\t     310 B/op\t       1 allocs/op",
            "extra": "9177 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - ns/op",
            "value": 131754,
            "unit": "ns/op",
            "extra": "9177 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - B/op",
            "value": 310,
            "unit": "B/op",
            "extra": "9177 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "9177 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get",
            "value": 137012,
            "unit": "ns/op\t     574 B/op\t      11 allocs/op",
            "extra": "8205 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - ns/op",
            "value": 137012,
            "unit": "ns/op",
            "extra": "8205 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - B/op",
            "value": 574,
            "unit": "B/op",
            "extra": "8205 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "8205 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete",
            "value": 260947,
            "unit": "ns/op\t    1067 B/op\t       4 allocs/op",
            "extra": "3973 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - ns/op",
            "value": 260947,
            "unit": "ns/op",
            "extra": "3973 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - B/op",
            "value": 1067,
            "unit": "B/op",
            "extra": "3973 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "3973 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f0c897015152be694a4cc33eb5e319dce7cb7778",
          "message": "Merge pull request #1961 from gofiber/dependabot/go_modules/rueidis/github.com/docker/docker-28.3.3incompatible\n\nchore(deps): bump github.com/docker/docker from 28.2.2+incompatible to 28.3.3+incompatible in /rueidis",
          "timestamp": "2025-11-06T09:00:13+01:00",
          "tree_id": "92cba4ee21f187ceb8cd89c42404dd3b884eb62f",
          "url": "https://github.com/gofiber/storage/commit/f0c897015152be694a4cc33eb5e319dce7cb7778"
        },
        "date": 1762417338720,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Rueidis_Set",
            "value": 137797,
            "unit": "ns/op\t     488 B/op\t       2 allocs/op",
            "extra": "8716 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - ns/op",
            "value": 137797,
            "unit": "ns/op",
            "extra": "8716 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - B/op",
            "value": 488,
            "unit": "B/op",
            "extra": "8716 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "8716 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get",
            "value": 147411,
            "unit": "ns/op\t     514 B/op\t      11 allocs/op",
            "extra": "7684 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - ns/op",
            "value": 147411,
            "unit": "ns/op",
            "extra": "7684 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - B/op",
            "value": 514,
            "unit": "B/op",
            "extra": "7684 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "7684 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete",
            "value": 279830,
            "unit": "ns/op\t     730 B/op\t       3 allocs/op",
            "extra": "3878 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - ns/op",
            "value": 279830,
            "unit": "ns/op",
            "extra": "3878 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - B/op",
            "value": 730,
            "unit": "B/op",
            "extra": "3878 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "3878 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ec9e8cbd0f36f99db330c7729c86165c14c788ae",
          "message": "Merge pull request #1987 from gofiber/dependabot/go_modules/rueidis/github.com/docker/docker-28.5.2incompatible\n\nchore(deps): bump github.com/docker/docker from 28.3.3+incompatible to 28.5.2+incompatible in /rueidis",
          "timestamp": "2025-11-06T09:21:09+01:00",
          "tree_id": "1e58509c7b0366731eec9b7c3109acb20bc25a54",
          "url": "https://github.com/gofiber/storage/commit/ec9e8cbd0f36f99db330c7729c86165c14c788ae"
        },
        "date": 1762418295657,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Rueidis_Set",
            "value": 132237,
            "unit": "ns/op\t     315 B/op\t       1 allocs/op",
            "extra": "9051 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - ns/op",
            "value": 132237,
            "unit": "ns/op",
            "extra": "9051 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - B/op",
            "value": 315,
            "unit": "B/op",
            "extra": "9051 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "9051 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get",
            "value": 139992,
            "unit": "ns/op\t     551 B/op\t      11 allocs/op",
            "extra": "8059 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - ns/op",
            "value": 139992,
            "unit": "ns/op",
            "extra": "8059 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - B/op",
            "value": 551,
            "unit": "B/op",
            "extra": "8059 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "8059 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete",
            "value": 266359,
            "unit": "ns/op\t     701 B/op\t       3 allocs/op",
            "extra": "4039 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - ns/op",
            "value": 266359,
            "unit": "ns/op",
            "extra": "4039 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - B/op",
            "value": 701,
            "unit": "B/op",
            "extra": "4039 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "4039 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "51fb6b1670bfc0faaf460e9870351b83f4bc54e8",
          "message": "Merge pull request #2004 from gofiber/dependabot/go_modules/rueidis/github.com/redis/rueidis-1.0.68\n\nchore(deps): bump github.com/redis/rueidis from 1.0.67 to 1.0.68 in /rueidis",
          "timestamp": "2025-11-11T08:43:24+01:00",
          "tree_id": "26e4afe4875bd59867701eb1790ce612c5d8881d",
          "url": "https://github.com/gofiber/storage/commit/51fb6b1670bfc0faaf460e9870351b83f4bc54e8"
        },
        "date": 1762847199935,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Rueidis_Set",
            "value": 131231,
            "unit": "ns/op\t     310 B/op\t       1 allocs/op",
            "extra": "9178 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - ns/op",
            "value": 131231,
            "unit": "ns/op",
            "extra": "9178 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - B/op",
            "value": 310,
            "unit": "B/op",
            "extra": "9178 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "9178 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get",
            "value": 138109,
            "unit": "ns/op\t     536 B/op\t      11 allocs/op",
            "extra": "8619 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - ns/op",
            "value": 138109,
            "unit": "ns/op",
            "extra": "8619 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - B/op",
            "value": 536,
            "unit": "B/op",
            "extra": "8619 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "8619 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete",
            "value": 262654,
            "unit": "ns/op\t     690 B/op\t       3 allocs/op",
            "extra": "4104 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - ns/op",
            "value": 262654,
            "unit": "ns/op",
            "extra": "4104 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - B/op",
            "value": 690,
            "unit": "B/op",
            "extra": "4104 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "4104 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1763657613195,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Rueidis_Set",
            "value": 100263,
            "unit": "ns/op\t     285 B/op\t       1 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - ns/op",
            "value": 100263,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - B/op",
            "value": 285,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get",
            "value": 110997,
            "unit": "ns/op\t     512 B/op\t      11 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - ns/op",
            "value": 110997,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - B/op",
            "value": 512,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete",
            "value": 199062,
            "unit": "ns/op\t     483 B/op\t       2 allocs/op",
            "extra": "5874 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - ns/op",
            "value": 199062,
            "unit": "ns/op",
            "extra": "5874 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - B/op",
            "value": 483,
            "unit": "B/op",
            "extra": "5874 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "5874 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1763662210820,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Rueidis_Set",
            "value": 130695,
            "unit": "ns/op\t     311 B/op\t       1 allocs/op",
            "extra": "9151 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - ns/op",
            "value": 130695,
            "unit": "ns/op",
            "extra": "9151 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - B/op",
            "value": 311,
            "unit": "B/op",
            "extra": "9151 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "9151 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get",
            "value": 139019,
            "unit": "ns/op\t     618 B/op\t      11 allocs/op",
            "extra": "8494 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - ns/op",
            "value": 139019,
            "unit": "ns/op",
            "extra": "8494 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - B/op",
            "value": 618,
            "unit": "B/op",
            "extra": "8494 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "8494 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete",
            "value": 264147,
            "unit": "ns/op\t     714 B/op\t       3 allocs/op",
            "extra": "3968 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - ns/op",
            "value": 264147,
            "unit": "ns/op",
            "extra": "3968 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - B/op",
            "value": 714,
            "unit": "B/op",
            "extra": "3968 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "3968 times\n4 procs"
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
        "date": 1764259954303,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Rueidis_Set",
            "value": 141533,
            "unit": "ns/op\t     335 B/op\t       2 allocs/op",
            "extra": "8490 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - ns/op",
            "value": 141533,
            "unit": "ns/op",
            "extra": "8490 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - B/op",
            "value": 335,
            "unit": "B/op",
            "extra": "8490 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "8490 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get",
            "value": 147993,
            "unit": "ns/op\t     587 B/op\t      11 allocs/op",
            "extra": "7782 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - ns/op",
            "value": 147993,
            "unit": "ns/op",
            "extra": "7782 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - B/op",
            "value": 587,
            "unit": "B/op",
            "extra": "7782 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "7782 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete",
            "value": 284264,
            "unit": "ns/op\t    1103 B/op\t       4 allocs/op",
            "extra": "3846 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - ns/op",
            "value": 284264,
            "unit": "ns/op",
            "extra": "3846 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - B/op",
            "value": 1103,
            "unit": "B/op",
            "extra": "3846 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "3846 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "05234dc68f3c93948248146c7ac27c966d1e754f",
          "message": "Merge pull request #2318 from gofiber/dependabot/go_modules/rueidis/github.com/redis/rueidis-1.0.69\n\nchore(deps): bump github.com/redis/rueidis from 1.0.68 to 1.0.69 in /rueidis",
          "timestamp": "2025-12-08T08:17:21+01:00",
          "tree_id": "53967eda826c0c73b5fa1c673a0066f0eec5f8d9",
          "url": "https://github.com/gofiber/storage/commit/05234dc68f3c93948248146c7ac27c966d1e754f"
        },
        "date": 1765178330301,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Rueidis_Set",
            "value": 139981,
            "unit": "ns/op\t     331 B/op\t       1 allocs/op",
            "extra": "8586 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - ns/op",
            "value": 139981,
            "unit": "ns/op",
            "extra": "8586 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - B/op",
            "value": 331,
            "unit": "B/op",
            "extra": "8586 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "8586 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get",
            "value": 147672,
            "unit": "ns/op\t     579 B/op\t      11 allocs/op",
            "extra": "7783 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - ns/op",
            "value": 147672,
            "unit": "ns/op",
            "extra": "7783 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - B/op",
            "value": 579,
            "unit": "B/op",
            "extra": "7783 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "7783 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete",
            "value": 278763,
            "unit": "ns/op\t    1112 B/op\t       4 allocs/op",
            "extra": "3812 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - ns/op",
            "value": 278763,
            "unit": "ns/op",
            "extra": "3812 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - B/op",
            "value": 1112,
            "unit": "B/op",
            "extra": "3812 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "3812 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1765267714399,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Rueidis_Set",
            "value": 133357,
            "unit": "ns/op\t     371 B/op\t       2 allocs/op",
            "extra": "7654 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - ns/op",
            "value": 133357,
            "unit": "ns/op",
            "extra": "7654 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - B/op",
            "value": 371,
            "unit": "B/op",
            "extra": "7654 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "7654 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get",
            "value": 140854,
            "unit": "ns/op\t     574 B/op\t      11 allocs/op",
            "extra": "8758 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - ns/op",
            "value": 140854,
            "unit": "ns/op",
            "extra": "8758 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - B/op",
            "value": 574,
            "unit": "B/op",
            "extra": "8758 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "8758 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete",
            "value": 265643,
            "unit": "ns/op\t     729 B/op\t       3 allocs/op",
            "extra": "3883 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - ns/op",
            "value": 265643,
            "unit": "ns/op",
            "extra": "3883 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - B/op",
            "value": 729,
            "unit": "B/op",
            "extra": "3883 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "3883 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1765439840687,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Rueidis_Set",
            "value": 132440,
            "unit": "ns/op\t     469 B/op\t       2 allocs/op",
            "extra": "9080 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - ns/op",
            "value": 132440,
            "unit": "ns/op",
            "extra": "9080 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - B/op",
            "value": 469,
            "unit": "B/op",
            "extra": "9080 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "9080 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get",
            "value": 139152,
            "unit": "ns/op\t     512 B/op\t      11 allocs/op",
            "extra": "8271 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - ns/op",
            "value": 139152,
            "unit": "ns/op",
            "extra": "8271 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - B/op",
            "value": 512,
            "unit": "B/op",
            "extra": "8271 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "8271 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete",
            "value": 267207,
            "unit": "ns/op\t     711 B/op\t       3 allocs/op",
            "extra": "3985 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - ns/op",
            "value": 267207,
            "unit": "ns/op",
            "extra": "3985 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - B/op",
            "value": 711,
            "unit": "B/op",
            "extra": "3985 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "3985 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1766043839167,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Rueidis_Set",
            "value": 129525,
            "unit": "ns/op\t     548 B/op\t       2 allocs/op",
            "extra": "7758 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - ns/op",
            "value": 129525,
            "unit": "ns/op",
            "extra": "7758 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - B/op",
            "value": 548,
            "unit": "B/op",
            "extra": "7758 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "7758 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get",
            "value": 138055,
            "unit": "ns/op\t     530 B/op\t      11 allocs/op",
            "extra": "8401 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - ns/op",
            "value": 138055,
            "unit": "ns/op",
            "extra": "8401 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - B/op",
            "value": 530,
            "unit": "B/op",
            "extra": "8401 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "8401 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete",
            "value": 260481,
            "unit": "ns/op\t     715 B/op\t       3 allocs/op",
            "extra": "3963 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - ns/op",
            "value": 260481,
            "unit": "ns/op",
            "extra": "3963 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - B/op",
            "value": 715,
            "unit": "B/op",
            "extra": "3963 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "3963 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4ce0847ba181030ab827f002e2906a8cc030c14a",
          "message": "Merge pull request #2377 from gofiber/dependabot/go_modules/rueidis/github.com/redis/rueidis-1.0.70\n\nchore(deps): bump github.com/redis/rueidis from 1.0.69 to 1.0.70 in /rueidis",
          "timestamp": "2025-12-30T08:22:28+01:00",
          "tree_id": "b712650b361026bdebfa760e7805dc9911525cce",
          "url": "https://github.com/gofiber/storage/commit/4ce0847ba181030ab827f002e2906a8cc030c14a"
        },
        "date": 1767079487490,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Rueidis_Set",
            "value": 142684,
            "unit": "ns/op\t     335 B/op\t       2 allocs/op",
            "extra": "8497 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - ns/op",
            "value": 142684,
            "unit": "ns/op",
            "extra": "8497 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - B/op",
            "value": 335,
            "unit": "B/op",
            "extra": "8497 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "8497 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get",
            "value": 148369,
            "unit": "ns/op\t     604 B/op\t      11 allocs/op",
            "extra": "8182 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - ns/op",
            "value": 148369,
            "unit": "ns/op",
            "extra": "8182 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - B/op",
            "value": 604,
            "unit": "B/op",
            "extra": "8182 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "8182 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete",
            "value": 282869,
            "unit": "ns/op\t    1102 B/op\t       4 allocs/op",
            "extra": "3848 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - ns/op",
            "value": 282869,
            "unit": "ns/op",
            "extra": "3848 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - B/op",
            "value": 1102,
            "unit": "B/op",
            "extra": "3848 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "3848 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1768377263932,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Rueidis_Set",
            "value": 97067,
            "unit": "ns/op\t     339 B/op\t       2 allocs/op",
            "extra": "12594 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - ns/op",
            "value": 97067,
            "unit": "ns/op",
            "extra": "12594 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - B/op",
            "value": 339,
            "unit": "B/op",
            "extra": "12594 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "12594 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get",
            "value": 106157,
            "unit": "ns/op\t     515 B/op\t      11 allocs/op",
            "extra": "11526 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - ns/op",
            "value": 106157,
            "unit": "ns/op",
            "extra": "11526 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - B/op",
            "value": 515,
            "unit": "B/op",
            "extra": "11526 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "11526 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete",
            "value": 191083,
            "unit": "ns/op\t     538 B/op\t       2 allocs/op",
            "extra": "5266 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - ns/op",
            "value": 191083,
            "unit": "ns/op",
            "extra": "5266 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - B/op",
            "value": 538,
            "unit": "B/op",
            "extra": "5266 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "5266 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1768377287362,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Rueidis_Set",
            "value": 145957,
            "unit": "ns/op\t     606 B/op\t       2 allocs/op",
            "extra": "7014 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - ns/op",
            "value": 145957,
            "unit": "ns/op",
            "extra": "7014 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - B/op",
            "value": 606,
            "unit": "B/op",
            "extra": "7014 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "7014 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get",
            "value": 150759,
            "unit": "ns/op\t     512 B/op\t      11 allocs/op",
            "extra": "7567 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - ns/op",
            "value": 150759,
            "unit": "ns/op",
            "extra": "7567 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - B/op",
            "value": 512,
            "unit": "B/op",
            "extra": "7567 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "7567 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete",
            "value": 291320,
            "unit": "ns/op\t     801 B/op\t       3 allocs/op",
            "extra": "3537 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - ns/op",
            "value": 291320,
            "unit": "ns/op",
            "extra": "3537 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - B/op",
            "value": 801,
            "unit": "B/op",
            "extra": "3537 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "3537 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1768379349400,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Rueidis_Set",
            "value": 143642,
            "unit": "ns/op\t     342 B/op\t       2 allocs/op",
            "extra": "8319 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - ns/op",
            "value": 143642,
            "unit": "ns/op",
            "extra": "8319 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - B/op",
            "value": 342,
            "unit": "B/op",
            "extra": "8319 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "8319 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get",
            "value": 150101,
            "unit": "ns/op\t     564 B/op\t      11 allocs/op",
            "extra": "7650 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - ns/op",
            "value": 150101,
            "unit": "ns/op",
            "extra": "7650 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - B/op",
            "value": 564,
            "unit": "B/op",
            "extra": "7650 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "7650 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete",
            "value": 287643,
            "unit": "ns/op\t     755 B/op\t       3 allocs/op",
            "extra": "3750 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - ns/op",
            "value": 287643,
            "unit": "ns/op",
            "extra": "3750 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - B/op",
            "value": 755,
            "unit": "B/op",
            "extra": "3750 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "3750 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d8e058675823871ae44e5375d485216724e2bac0",
          "message": "Merge pull request #2424 from gofiber/dependabot/go_modules/rueidis/github.com/sirupsen/logrus-1.9.4\n\nchore(deps): bump github.com/sirupsen/logrus from 1.9.3 to 1.9.4 in /rueidis",
          "timestamp": "2026-01-16T08:27:25+01:00",
          "tree_id": "95b85217cdb4e603b446dfc8465eea5a1871825f",
          "url": "https://github.com/gofiber/storage/commit/d8e058675823871ae44e5375d485216724e2bac0"
        },
        "date": 1768548681409,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Rueidis_Set",
            "value": 137817,
            "unit": "ns/op\t     383 B/op\t       2 allocs/op",
            "extra": "7412 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - ns/op",
            "value": 137817,
            "unit": "ns/op",
            "extra": "7412 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - B/op",
            "value": 383,
            "unit": "B/op",
            "extra": "7412 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "7412 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get",
            "value": 145424,
            "unit": "ns/op\t     518 B/op\t      11 allocs/op",
            "extra": "8133 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - ns/op",
            "value": 145424,
            "unit": "ns/op",
            "extra": "8133 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - B/op",
            "value": 518,
            "unit": "B/op",
            "extra": "8133 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "8133 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete",
            "value": 277145,
            "unit": "ns/op\t    1168 B/op\t       4 allocs/op",
            "extra": "3631 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - ns/op",
            "value": 277145,
            "unit": "ns/op",
            "extra": "3631 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - B/op",
            "value": 1168,
            "unit": "B/op",
            "extra": "3631 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "3631 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1768893481172,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Rueidis_Set",
            "value": 132390,
            "unit": "ns/op\t     315 B/op\t       1 allocs/op",
            "extra": "9028 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - ns/op",
            "value": 132390,
            "unit": "ns/op",
            "extra": "9028 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - B/op",
            "value": 315,
            "unit": "B/op",
            "extra": "9028 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "9028 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get",
            "value": 140403,
            "unit": "ns/op\t     590 B/op\t      11 allocs/op",
            "extra": "8557 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - ns/op",
            "value": 140403,
            "unit": "ns/op",
            "extra": "8557 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - B/op",
            "value": 590,
            "unit": "B/op",
            "extra": "8557 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "8557 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete",
            "value": 263845,
            "unit": "ns/op\t     709 B/op\t       3 allocs/op",
            "extra": "3997 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - ns/op",
            "value": 263845,
            "unit": "ns/op",
            "extra": "3997 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - B/op",
            "value": 709,
            "unit": "B/op",
            "extra": "3997 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "3997 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "370a4dc3c60971756ae8ee82e9e375bc81cdb504",
          "message": "Merge pull request #2451 from gofiber/dependabot/go_modules/rueidis/github.com/redis/rueidis-1.0.71\n\nchore(deps): bump github.com/redis/rueidis from 1.0.70 to 1.0.71 in /rueidis",
          "timestamp": "2026-01-29T08:16:22+01:00",
          "tree_id": "f2a97881712c99fb15c0d540f9912a47a48b1842",
          "url": "https://github.com/gofiber/storage/commit/370a4dc3c60971756ae8ee82e9e375bc81cdb504"
        },
        "date": 1769671077026,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Rueidis_Set",
            "value": 132979,
            "unit": "ns/op\t     472 B/op\t       2 allocs/op",
            "extra": "9022 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - ns/op",
            "value": 132979,
            "unit": "ns/op",
            "extra": "9022 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - B/op",
            "value": 472,
            "unit": "B/op",
            "extra": "9022 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "9022 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get",
            "value": 139194,
            "unit": "ns/op\t     647 B/op\t      11 allocs/op",
            "extra": "8146 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - ns/op",
            "value": 139194,
            "unit": "ns/op",
            "extra": "8146 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - B/op",
            "value": 647,
            "unit": "B/op",
            "extra": "8146 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "8146 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete",
            "value": 265935,
            "unit": "ns/op\t    1061 B/op\t       4 allocs/op",
            "extra": "3998 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - ns/op",
            "value": 265935,
            "unit": "ns/op",
            "extra": "3998 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - B/op",
            "value": 1061,
            "unit": "B/op",
            "extra": "3998 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "3998 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1770017846547,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Rueidis_Set",
            "value": 139092,
            "unit": "ns/op\t     329 B/op\t       1 allocs/op",
            "extra": "8637 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - ns/op",
            "value": 139092,
            "unit": "ns/op",
            "extra": "8637 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - B/op",
            "value": 329,
            "unit": "B/op",
            "extra": "8637 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "8637 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get",
            "value": 146654,
            "unit": "ns/op\t     512 B/op\t      11 allocs/op",
            "extra": "7825 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - ns/op",
            "value": 146654,
            "unit": "ns/op",
            "extra": "7825 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - B/op",
            "value": 512,
            "unit": "B/op",
            "extra": "7825 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "7825 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete",
            "value": 278073,
            "unit": "ns/op\t    1118 B/op\t       4 allocs/op",
            "extra": "3796 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - ns/op",
            "value": 278073,
            "unit": "ns/op",
            "extra": "3796 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - B/op",
            "value": 1118,
            "unit": "B/op",
            "extra": "3796 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "3796 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1770108185677,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Rueidis_Set",
            "value": 99161,
            "unit": "ns/op\t     341 B/op\t       2 allocs/op",
            "extra": "12492 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - ns/op",
            "value": 99161,
            "unit": "ns/op",
            "extra": "12492 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - B/op",
            "value": 341,
            "unit": "B/op",
            "extra": "12492 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "12492 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get",
            "value": 102756,
            "unit": "ns/op\t     512 B/op\t      11 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - ns/op",
            "value": 102756,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - B/op",
            "value": 512,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete",
            "value": 194420,
            "unit": "ns/op\t     519 B/op\t       2 allocs/op",
            "extra": "5463 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - ns/op",
            "value": 194420,
            "unit": "ns/op",
            "extra": "5463 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - B/op",
            "value": 519,
            "unit": "B/op",
            "extra": "5463 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "5463 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
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
        "date": 1770708065870,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Rueidis_Set",
            "value": 129297,
            "unit": "ns/op\t     309 B/op\t       1 allocs/op",
            "extra": "9213 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - ns/op",
            "value": 129297,
            "unit": "ns/op",
            "extra": "9213 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - B/op",
            "value": 309,
            "unit": "B/op",
            "extra": "9213 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "9213 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get",
            "value": 138046,
            "unit": "ns/op\t     551 B/op\t      11 allocs/op",
            "extra": "8413 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - ns/op",
            "value": 138046,
            "unit": "ns/op",
            "extra": "8413 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - B/op",
            "value": 551,
            "unit": "B/op",
            "extra": "8413 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "8413 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete",
            "value": 263967,
            "unit": "ns/op\t     698 B/op\t       3 allocs/op",
            "extra": "4059 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - ns/op",
            "value": 263967,
            "unit": "ns/op",
            "extra": "4059 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - B/op",
            "value": 698,
            "unit": "B/op",
            "extra": "4059 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "4059 times\n4 procs"
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
        "date": 1771288310674,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Rueidis_Set",
            "value": 151373,
            "unit": "ns/op\t     358 B/op\t       2 allocs/op",
            "extra": "7939 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - ns/op",
            "value": 151373,
            "unit": "ns/op",
            "extra": "7939 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - B/op",
            "value": 358,
            "unit": "B/op",
            "extra": "7939 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "7939 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get",
            "value": 156933,
            "unit": "ns/op\t     523 B/op\t      11 allocs/op",
            "extra": "7351 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - ns/op",
            "value": 156933,
            "unit": "ns/op",
            "extra": "7351 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - B/op",
            "value": 523,
            "unit": "B/op",
            "extra": "7351 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "7351 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete",
            "value": 298977,
            "unit": "ns/op\t     807 B/op\t       3 allocs/op",
            "extra": "3510 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - ns/op",
            "value": 298977,
            "unit": "ns/op",
            "extra": "3510 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - B/op",
            "value": 807,
            "unit": "B/op",
            "extra": "3510 times\n4 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "3510 times\n4 procs"
          }
        ]
      }
    ]
  }
}