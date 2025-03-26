window.BENCHMARK_DATA = {
  "lastUpdate": 1743021744399,
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
          "id": "c1933ed3e87ea6f84e3bde5edee29f19495afa91",
          "message": "Merge pull request #1515 from mdelapenya/tc-go-adoption-2\n\nchore: adopt testcontainers-go for Postgres, MySQL and MongoDB",
          "timestamp": "2025-03-19T08:01:09+01:00",
          "tree_id": "bd7d7600b063b44df0a5960ac0d1d4b43f6fa48c",
          "url": "https://github.com/gofiber/storage/commit/c1933ed3e87ea6f84e3bde5edee29f19495afa91"
        },
        "date": 1742368006284,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Clickhouse_Set",
            "value": 15306634465,
            "unit": "ns/op\t 4599120 B/op\t   33327 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - ns/op",
            "value": 15306634465,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - B/op",
            "value": 4599120,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - allocs/op",
            "value": 33327,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get",
            "value": 3273784542,
            "unit": "ns/op\t 3047992 B/op\t   21133 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - ns/op",
            "value": 3273784542,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - B/op",
            "value": 3047992,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - allocs/op",
            "value": 21133,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete",
            "value": 3332150448,
            "unit": "ns/op\t 2839696 B/op\t   21000 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - ns/op",
            "value": 3332150448,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - B/op",
            "value": 2839696,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - allocs/op",
            "value": 21000,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
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
          "id": "4cd1214f699eb3aa31b947a1b934968ebee8fbb2",
          "message": "Merge pull request #1583 from gofiber/dependabot/go_modules/clickhouse/github.com/stretchr/testify-1.10.0\n\nchore(deps): bump github.com/stretchr/testify from 1.9.0 to 1.10.0 in /clickhouse",
          "timestamp": "2025-03-26T21:23:41+01:00",
          "tree_id": "b33b6a918a4eb6e694296ecfdf154b210eecec19",
          "url": "https://github.com/gofiber/storage/commit/4cd1214f699eb3aa31b947a1b934968ebee8fbb2"
        },
        "date": 1743021736968,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Clickhouse_Set",
            "value": 16511006235,
            "unit": "ns/op\t 4682632 B/op\t   33303 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - ns/op",
            "value": 16511006235,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - B/op",
            "value": 4682632,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set - allocs/op",
            "value": 33303,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get",
            "value": 3260189623,
            "unit": "ns/op\t 3000024 B/op\t   21090 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - ns/op",
            "value": 3260189623,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - B/op",
            "value": 3000024,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Get - allocs/op",
            "value": 21090,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete",
            "value": 3244808884,
            "unit": "ns/op\t 2850720 B/op\t   20698 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - ns/op",
            "value": 3244808884,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - B/op",
            "value": 2850720,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_Clickhouse_Set_And_Delete - allocs/op",
            "value": 20698,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          }
        ]
      }
    ]
  }
}