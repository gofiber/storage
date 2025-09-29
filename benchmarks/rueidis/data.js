window.BENCHMARK_DATA = {
  "lastUpdate": 1759135863990,
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
      }
    ]
  }
}