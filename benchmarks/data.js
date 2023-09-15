window.BENCHMARK_DATA = {
  "lastUpdate": 1694804825486,
  "repoUrl": "https://github.com/gofiber/storage",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "name": "gofiber",
            "username": "gofiber"
          },
          "committer": {
            "name": "gofiber",
            "username": "gofiber"
          },
          "id": "6f58085bf0ce2275298f9f021ec05a8b76741bec",
          "message": "Add benchmarks for storage drivers",
          "timestamp": "2023-09-12T08:00:09Z",
          "url": "https://github.com/gofiber/storage/pull/992/commits/6f58085bf0ce2275298f9f021ec05a8b76741bec"
        },
        "date": 1694796502309,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_ArangoDB_Set - ns/op",
            "value": 626865,
            "unit": "ns/op",
            "extra": "2038 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_Set - B/op",
            "value": 15445,
            "unit": "B/op",
            "extra": "2038 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_Set - allocs/op",
            "value": 225,
            "unit": "allocs/op",
            "extra": "2038 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_Get - ns/op",
            "value": 570715,
            "unit": "ns/op",
            "extra": "2163 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_Get - B/op",
            "value": 15200,
            "unit": "B/op",
            "extra": "2163 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_Get - allocs/op",
            "value": 226,
            "unit": "allocs/op",
            "extra": "2163 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_SetAndDelete - ns/op",
            "value": 1132331,
            "unit": "ns/op",
            "extra": "1231 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_SetAndDelete - B/op",
            "value": 23311,
            "unit": "B/op",
            "extra": "1231 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_SetAndDelete - allocs/op",
            "value": 340,
            "unit": "allocs/op",
            "extra": "1231 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Set - ns/op",
            "value": 2563578,
            "unit": "ns/op",
            "extra": "402 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Set - B/op",
            "value": 10294,
            "unit": "B/op",
            "extra": "402 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Set - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "402 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Get - ns/op",
            "value": 1675578,
            "unit": "ns/op",
            "extra": "675 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Get - B/op",
            "value": 11430,
            "unit": "B/op",
            "extra": "675 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Get - allocs/op",
            "value": 203,
            "unit": "allocs/op",
            "extra": "675 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_SetAndDelete - ns/op",
            "value": 5177476,
            "unit": "ns/op",
            "extra": "254 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_SetAndDelete - B/op",
            "value": 18495,
            "unit": "B/op",
            "extra": "254 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_SetAndDelete - allocs/op",
            "value": 284,
            "unit": "allocs/op",
            "extra": "254 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Set - ns/op",
            "value": 9984,
            "unit": "ns/op",
            "extra": "123615 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Set - B/op",
            "value": 1399,
            "unit": "B/op",
            "extra": "123615 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Set - allocs/op",
            "value": 38,
            "unit": "allocs/op",
            "extra": "123615 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Get - ns/op",
            "value": 1373,
            "unit": "ns/op",
            "extra": "846166 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Get - B/op",
            "value": 416,
            "unit": "B/op",
            "extra": "846166 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Get - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "846166 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Delete - ns/op",
            "value": 20435,
            "unit": "ns/op",
            "extra": "62421 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Delete - B/op",
            "value": 2785,
            "unit": "B/op",
            "extra": "62421 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Delete - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "62421 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Set - ns/op",
            "value": 304909,
            "unit": "ns/op",
            "extra": "5288 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Set - B/op",
            "value": 6275,
            "unit": "B/op",
            "extra": "5288 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "5288 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Get - ns/op",
            "value": 848.1,
            "unit": "ns/op",
            "extra": "1449415 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Get - B/op",
            "value": 480,
            "unit": "B/op",
            "extra": "1449415 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Get - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1449415 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Delete - ns/op",
            "value": 603266,
            "unit": "ns/op",
            "extra": "2683 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Delete - B/op",
            "value": 12526,
            "unit": "B/op",
            "extra": "2683 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Delete - allocs/op",
            "value": 84,
            "unit": "allocs/op",
            "extra": "2683 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Set - ns/op",
            "value": 2335709,
            "unit": "ns/op",
            "extra": "446 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Set - B/op",
            "value": 6580,
            "unit": "B/op",
            "extra": "446 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Set - allocs/op",
            "value": 118,
            "unit": "allocs/op",
            "extra": "446 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Get - ns/op",
            "value": 1726695,
            "unit": "ns/op",
            "extra": "694 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Get - B/op",
            "value": 6531,
            "unit": "B/op",
            "extra": "694 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Get - allocs/op",
            "value": 113,
            "unit": "allocs/op",
            "extra": "694 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_SetAndDelete - ns/op",
            "value": 2619812,
            "unit": "ns/op",
            "extra": "480 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_SetAndDelete - B/op",
            "value": 12899,
            "unit": "B/op",
            "extra": "480 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_SetAndDelete - allocs/op",
            "value": 226,
            "unit": "allocs/op",
            "extra": "480 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - ns/op",
            "value": 197812,
            "unit": "ns/op",
            "extra": "5271 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - B/op",
            "value": 7701,
            "unit": "B/op",
            "extra": "5271 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - allocs/op",
            "value": 65,
            "unit": "allocs/op",
            "extra": "5271 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - ns/op",
            "value": 138892,
            "unit": "ns/op",
            "extra": "8238 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - B/op",
            "value": 3303,
            "unit": "B/op",
            "extra": "8238 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - allocs/op",
            "value": 60,
            "unit": "allocs/op",
            "extra": "8238 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - ns/op",
            "value": 379634,
            "unit": "ns/op",
            "extra": "2970 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - B/op",
            "value": 14315,
            "unit": "B/op",
            "extra": "2970 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - allocs/op",
            "value": 128,
            "unit": "allocs/op",
            "extra": "2970 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 964086,
            "unit": "ns/op",
            "extra": "1290 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 24207,
            "unit": "B/op",
            "extra": "1290 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 335,
            "unit": "allocs/op",
            "extra": "1290 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 884801,
            "unit": "ns/op",
            "extra": "1437 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 26047,
            "unit": "B/op",
            "extra": "1437 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 363,
            "unit": "allocs/op",
            "extra": "1437 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 1855994,
            "unit": "ns/op",
            "extra": "657 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 48328,
            "unit": "B/op",
            "extra": "657 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "657 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Set - ns/op",
            "value": 1560820,
            "unit": "ns/op",
            "extra": "913 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Set - B/op",
            "value": 13561,
            "unit": "B/op",
            "extra": "913 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Set - allocs/op",
            "value": 237,
            "unit": "allocs/op",
            "extra": "913 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Get - ns/op",
            "value": 322500,
            "unit": "ns/op",
            "extra": "4192 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Get - B/op",
            "value": 7426,
            "unit": "B/op",
            "extra": "4192 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Get - allocs/op",
            "value": 125,
            "unit": "allocs/op",
            "extra": "4192 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_SetAndDelete - ns/op",
            "value": 1833060,
            "unit": "ns/op",
            "extra": "610 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_SetAndDelete - B/op",
            "value": 20606,
            "unit": "B/op",
            "extra": "610 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_SetAndDelete - allocs/op",
            "value": 353,
            "unit": "allocs/op",
            "extra": "610 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Set - ns/op",
            "value": 96201,
            "unit": "ns/op",
            "extra": "12824 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Set - B/op",
            "value": 35,
            "unit": "B/op",
            "extra": "12824 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Set - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "12824 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Get - ns/op",
            "value": 105005,
            "unit": "ns/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Get - B/op",
            "value": 200,
            "unit": "B/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Get - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_SetAndDelete - ns/op",
            "value": 193243,
            "unit": "ns/op",
            "extra": "6987 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_SetAndDelete - B/op",
            "value": 51,
            "unit": "B/op",
            "extra": "6987 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_SetAndDelete - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6987 times\n2 procs"
          },
          {
            "name": "Benchmark_Storage_Memory/fiber_memory - ns/op",
            "value": 165111,
            "unit": "ns/op",
            "extra": "7136 times\n2 procs"
          },
          {
            "name": "Benchmark_Storage_Memory/fiber_memory - B/op",
            "value": 661,
            "unit": "B/op",
            "extra": "7136 times\n2 procs"
          },
          {
            "name": "Benchmark_Storage_Memory/fiber_memory - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7136 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Set - ns/op",
            "value": 65.43,
            "unit": "ns/op",
            "extra": "20067616 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Set - B/op",
            "value": 3,
            "unit": "B/op",
            "extra": "20067616 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Set - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "20067616 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Get - ns/op",
            "value": 22.13,
            "unit": "ns/op",
            "extra": "48534982 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Get - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "48534982 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Get - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "48534982 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_SetAndDelete - ns/op",
            "value": 117.1,
            "unit": "ns/op",
            "extra": "10281157 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_SetAndDelete - B/op",
            "value": 3,
            "unit": "B/op",
            "extra": "10281157 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_SetAndDelete - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10281157 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber - ns/op",
            "value": 0.3745,
            "unit": "ns/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default - ns/op",
            "value": 57.85,
            "unit": "ns/op",
            "extra": "19041860 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "19041860 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "19041860 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Set - ns/op",
            "value": 2342490,
            "unit": "ns/op",
            "extra": "646 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Set - B/op",
            "value": 86213,
            "unit": "B/op",
            "extra": "646 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Set - allocs/op",
            "value": 295,
            "unit": "allocs/op",
            "extra": "646 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Get - ns/op",
            "value": 861783,
            "unit": "ns/op",
            "extra": "1398 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Get - B/op",
            "value": 15560,
            "unit": "B/op",
            "extra": "1398 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Get - allocs/op",
            "value": 201,
            "unit": "allocs/op",
            "extra": "1398 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_SetAndDelete - ns/op",
            "value": 2689650,
            "unit": "ns/op",
            "extra": "418 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_SetAndDelete - B/op",
            "value": 97603,
            "unit": "B/op",
            "extra": "418 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_SetAndDelete - allocs/op",
            "value": 463,
            "unit": "allocs/op",
            "extra": "418 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - ns/op",
            "value": 386036,
            "unit": "ns/op",
            "extra": "3504 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - B/op",
            "value": 6663,
            "unit": "B/op",
            "extra": "3504 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - allocs/op",
            "value": 100,
            "unit": "allocs/op",
            "extra": "3504 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - ns/op",
            "value": 341342,
            "unit": "ns/op",
            "extra": "3594 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - B/op",
            "value": 7472,
            "unit": "B/op",
            "extra": "3594 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "3594 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - ns/op",
            "value": 816326,
            "unit": "ns/op",
            "extra": "1526 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - B/op",
            "value": 11876,
            "unit": "B/op",
            "extra": "1526 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - allocs/op",
            "value": 172,
            "unit": "allocs/op",
            "extra": "1526 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Set - ns/op",
            "value": 2974087,
            "unit": "ns/op",
            "extra": "411 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Set - B/op",
            "value": 15187,
            "unit": "B/op",
            "extra": "411 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Set - allocs/op",
            "value": 281,
            "unit": "allocs/op",
            "extra": "411 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Get - ns/op",
            "value": 3057004,
            "unit": "ns/op",
            "extra": "542 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Get - B/op",
            "value": 14861,
            "unit": "B/op",
            "extra": "542 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Get - allocs/op",
            "value": 282,
            "unit": "allocs/op",
            "extra": "542 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_SetAndDelete - ns/op",
            "value": 6261627,
            "unit": "ns/op",
            "extra": "204 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_SetAndDelete - B/op",
            "value": 26971,
            "unit": "B/op",
            "extra": "204 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_SetAndDelete - allocs/op",
            "value": 532,
            "unit": "allocs/op",
            "extra": "204 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - ns/op",
            "value": 1008761,
            "unit": "ns/op",
            "extra": "1173 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - B/op",
            "value": 6583,
            "unit": "B/op",
            "extra": "1173 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - allocs/op",
            "value": 40,
            "unit": "allocs/op",
            "extra": "1173 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - ns/op",
            "value": 1013793,
            "unit": "ns/op",
            "extra": "1228 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - B/op",
            "value": 6611,
            "unit": "B/op",
            "extra": "1228 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - allocs/op",
            "value": 50,
            "unit": "allocs/op",
            "extra": "1228 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - ns/op",
            "value": 3774198,
            "unit": "ns/op",
            "extra": "322 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - B/op",
            "value": 12664,
            "unit": "B/op",
            "extra": "322 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - allocs/op",
            "value": 77,
            "unit": "allocs/op",
            "extra": "322 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Set - ns/op",
            "value": 396610,
            "unit": "ns/op",
            "extra": "3427 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Set - B/op",
            "value": 146,
            "unit": "B/op",
            "extra": "3427 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Set - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "3427 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Get - ns/op",
            "value": 1978,
            "unit": "ns/op",
            "extra": "600570 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Get - B/op",
            "value": 288,
            "unit": "B/op",
            "extra": "600570 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Get - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "600570 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_SetAndDelete - ns/op",
            "value": 751434,
            "unit": "ns/op",
            "extra": "1755 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_SetAndDelete - B/op",
            "value": 100,
            "unit": "B/op",
            "extra": "1755 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_SetAndDelete - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1755 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - ns/op",
            "value": 317218,
            "unit": "ns/op",
            "extra": "3819 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - B/op",
            "value": 256,
            "unit": "B/op",
            "extra": "3819 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "3819 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - ns/op",
            "value": 145206,
            "unit": "ns/op",
            "extra": "8454 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - B/op",
            "value": 522,
            "unit": "B/op",
            "extra": "8454 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "8454 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - ns/op",
            "value": 692135,
            "unit": "ns/op",
            "extra": "2036 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - B/op",
            "value": 400,
            "unit": "B/op",
            "extra": "2036 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "2036 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Set - ns/op",
            "value": 41530,
            "unit": "ns/op",
            "extra": "33685 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Set - B/op",
            "value": 268,
            "unit": "B/op",
            "extra": "33685 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Set - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "33685 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Get - ns/op",
            "value": 41602,
            "unit": "ns/op",
            "extra": "28382 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Get - B/op",
            "value": 200,
            "unit": "B/op",
            "extra": "28382 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Get - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "28382 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_SetAndDelete - ns/op",
            "value": 83887,
            "unit": "ns/op",
            "extra": "13832 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_SetAndDelete - B/op",
            "value": 456,
            "unit": "B/op",
            "extra": "13832 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_SetAndDelete - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "13832 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Set - ns/op",
            "value": 613.1,
            "unit": "ns/op",
            "extra": "1949482 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Set - B/op",
            "value": 123,
            "unit": "B/op",
            "extra": "1949482 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Set - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1949482 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Get - ns/op",
            "value": 122.9,
            "unit": "ns/op",
            "extra": "9645037 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Get - B/op",
            "value": 19,
            "unit": "B/op",
            "extra": "9645037 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Get - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "9645037 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_SetAndDelete - ns/op",
            "value": 1247,
            "unit": "ns/op",
            "extra": "975722 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_SetAndDelete - B/op",
            "value": 219,
            "unit": "B/op",
            "extra": "975722 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_SetAndDelete - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "975722 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - ns/op",
            "value": 48905,
            "unit": "ns/op",
            "extra": "24518 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - B/op",
            "value": 30,
            "unit": "B/op",
            "extra": "24518 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "24518 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - ns/op",
            "value": 56091,
            "unit": "ns/op",
            "extra": "23642 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - B/op",
            "value": 568,
            "unit": "B/op",
            "extra": "23642 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "23642 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - ns/op",
            "value": 94476,
            "unit": "ns/op",
            "extra": "12458 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - B/op",
            "value": 30,
            "unit": "B/op",
            "extra": "12458 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "12458 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2027747,
            "unit": "ns/op",
            "extra": "645 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 60905,
            "unit": "B/op",
            "extra": "645 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 529,
            "unit": "allocs/op",
            "extra": "645 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 1018555,
            "unit": "ns/op",
            "extra": "1329 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 60192,
            "unit": "B/op",
            "extra": "1329 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "1329 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2956813,
            "unit": "ns/op",
            "extra": "408 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 83134,
            "unit": "B/op",
            "extra": "408 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 871,
            "unit": "allocs/op",
            "extra": "408 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Set - ns/op",
            "value": 1002184,
            "unit": "ns/op",
            "extra": "1094 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Set - B/op",
            "value": 625,
            "unit": "B/op",
            "extra": "1094 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Set - allocs/op",
            "value": 24,
            "unit": "allocs/op",
            "extra": "1094 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Get - ns/op",
            "value": 20886,
            "unit": "ns/op",
            "extra": "56742 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Get - B/op",
            "value": 856,
            "unit": "B/op",
            "extra": "56742 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Get - allocs/op",
            "value": 45,
            "unit": "allocs/op",
            "extra": "56742 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Delete - ns/op",
            "value": 2134828,
            "unit": "ns/op",
            "extra": "541 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Delete - B/op",
            "value": 966,
            "unit": "B/op",
            "extra": "541 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Delete - allocs/op",
            "value": 43,
            "unit": "allocs/op",
            "extra": "541 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "gofiber",
            "username": "gofiber"
          },
          "committer": {
            "name": "gofiber",
            "username": "gofiber"
          },
          "id": "a15ce94c515a363c7d3151ebb85831c01d527a46",
          "message": "Add benchmarks for storage drivers",
          "timestamp": "2023-09-12T08:00:09Z",
          "url": "https://github.com/gofiber/storage/pull/992/commits/a15ce94c515a363c7d3151ebb85831c01d527a46"
        },
        "date": 1694804824172,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_ArangoDB_Set - ns/op",
            "value": 1081196,
            "unit": "ns/op",
            "extra": "1124 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_Set - B/op",
            "value": 15477,
            "unit": "B/op",
            "extra": "1124 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_Set - allocs/op",
            "value": 226,
            "unit": "allocs/op",
            "extra": "1124 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_Get - ns/op",
            "value": 864670,
            "unit": "ns/op",
            "extra": "1591 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_Get - B/op",
            "value": 15198,
            "unit": "B/op",
            "extra": "1591 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_Get - allocs/op",
            "value": 226,
            "unit": "allocs/op",
            "extra": "1591 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_SetAndDelete - ns/op",
            "value": 1460758,
            "unit": "ns/op",
            "extra": "884 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_SetAndDelete - B/op",
            "value": 23302,
            "unit": "B/op",
            "extra": "884 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_SetAndDelete - allocs/op",
            "value": 340,
            "unit": "allocs/op",
            "extra": "884 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Set - ns/op",
            "value": 4281134,
            "unit": "ns/op",
            "extra": "249 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Set - B/op",
            "value": 10284,
            "unit": "B/op",
            "extra": "249 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Set - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "249 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Get - ns/op",
            "value": 2797009,
            "unit": "ns/op",
            "extra": "422 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Get - B/op",
            "value": 11432,
            "unit": "B/op",
            "extra": "422 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Get - allocs/op",
            "value": 203,
            "unit": "allocs/op",
            "extra": "422 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_SetAndDelete - ns/op",
            "value": 5936112,
            "unit": "ns/op",
            "extra": "180 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_SetAndDelete - B/op",
            "value": 18482,
            "unit": "B/op",
            "extra": "180 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_SetAndDelete - allocs/op",
            "value": 284,
            "unit": "allocs/op",
            "extra": "180 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Set - ns/op",
            "value": 13859,
            "unit": "ns/op",
            "extra": "94692 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Set - B/op",
            "value": 1400,
            "unit": "B/op",
            "extra": "94692 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Set - allocs/op",
            "value": 38,
            "unit": "allocs/op",
            "extra": "94692 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Get - ns/op",
            "value": 1897,
            "unit": "ns/op",
            "extra": "620241 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Get - B/op",
            "value": 416,
            "unit": "B/op",
            "extra": "620241 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Get - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "620241 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Delete - ns/op",
            "value": 27461,
            "unit": "ns/op",
            "extra": "43749 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Delete - B/op",
            "value": 2785,
            "unit": "B/op",
            "extra": "43749 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Delete - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "43749 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Set - ns/op",
            "value": 633700,
            "unit": "ns/op",
            "extra": "1770 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Set - B/op",
            "value": 6275,
            "unit": "B/op",
            "extra": "1770 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "1770 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Get - ns/op",
            "value": 1073,
            "unit": "ns/op",
            "extra": "1116051 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Get - B/op",
            "value": 480,
            "unit": "B/op",
            "extra": "1116051 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Get - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1116051 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_SetAndDelete - ns/op",
            "value": 1210408,
            "unit": "ns/op",
            "extra": "1063 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_SetAndDelete - B/op",
            "value": 12529,
            "unit": "B/op",
            "extra": "1063 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_SetAndDelete - allocs/op",
            "value": 84,
            "unit": "allocs/op",
            "extra": "1063 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Set - ns/op",
            "value": 3560353,
            "unit": "ns/op",
            "extra": "333 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Set - B/op",
            "value": 6600,
            "unit": "B/op",
            "extra": "333 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Set - allocs/op",
            "value": 118,
            "unit": "allocs/op",
            "extra": "333 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Get - ns/op",
            "value": 2995876,
            "unit": "ns/op",
            "extra": "441 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Get - B/op",
            "value": 6525,
            "unit": "B/op",
            "extra": "441 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Get - allocs/op",
            "value": 113,
            "unit": "allocs/op",
            "extra": "441 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_SetAndDelete - ns/op",
            "value": 5957364,
            "unit": "ns/op",
            "extra": "268 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_SetAndDelete - B/op",
            "value": 12898,
            "unit": "B/op",
            "extra": "268 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_SetAndDelete - allocs/op",
            "value": 226,
            "unit": "allocs/op",
            "extra": "268 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - ns/op",
            "value": 357699,
            "unit": "ns/op",
            "extra": "3894 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - B/op",
            "value": 9145,
            "unit": "B/op",
            "extra": "3894 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - allocs/op",
            "value": 65,
            "unit": "allocs/op",
            "extra": "3894 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - ns/op",
            "value": 235161,
            "unit": "ns/op",
            "extra": "5917 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - B/op",
            "value": 3371,
            "unit": "B/op",
            "extra": "5917 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "5917 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - ns/op",
            "value": 733891,
            "unit": "ns/op",
            "extra": "1568 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - B/op",
            "value": 21338,
            "unit": "B/op",
            "extra": "1568 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - allocs/op",
            "value": 139,
            "unit": "allocs/op",
            "extra": "1568 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 6516930,
            "unit": "ns/op",
            "extra": "195 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 24209,
            "unit": "B/op",
            "extra": "195 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 335,
            "unit": "allocs/op",
            "extra": "195 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1160875,
            "unit": "ns/op",
            "extra": "1113 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 26047,
            "unit": "B/op",
            "extra": "1113 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 363,
            "unit": "allocs/op",
            "extra": "1113 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 2803885,
            "unit": "ns/op",
            "extra": "405 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 48342,
            "unit": "B/op",
            "extra": "405 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "405 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Set - ns/op",
            "value": 2327329,
            "unit": "ns/op",
            "extra": "537 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Set - B/op",
            "value": 13559,
            "unit": "B/op",
            "extra": "537 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Set - allocs/op",
            "value": 237,
            "unit": "allocs/op",
            "extra": "537 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Get - ns/op",
            "value": 604166,
            "unit": "ns/op",
            "extra": "1822 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Get - B/op",
            "value": 7425,
            "unit": "B/op",
            "extra": "1822 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Get - allocs/op",
            "value": 125,
            "unit": "allocs/op",
            "extra": "1822 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_SetAndDelete - ns/op",
            "value": 3271955,
            "unit": "ns/op",
            "extra": "360 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_SetAndDelete - B/op",
            "value": 20605,
            "unit": "B/op",
            "extra": "360 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_SetAndDelete - allocs/op",
            "value": 352,
            "unit": "allocs/op",
            "extra": "360 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Set - ns/op",
            "value": 176105,
            "unit": "ns/op",
            "extra": "8394 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Set - B/op",
            "value": 35,
            "unit": "B/op",
            "extra": "8394 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Set - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "8394 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Get - ns/op",
            "value": 200596,
            "unit": "ns/op",
            "extra": "6793 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Get - B/op",
            "value": 192,
            "unit": "B/op",
            "extra": "6793 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Get - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "6793 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_SetAndDelete - ns/op",
            "value": 372978,
            "unit": "ns/op",
            "extra": "3121 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_SetAndDelete - B/op",
            "value": 51,
            "unit": "B/op",
            "extra": "3121 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_SetAndDelete - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "3121 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Set - ns/op",
            "value": 72.68,
            "unit": "ns/op",
            "extra": "15112344 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Set - B/op",
            "value": 3,
            "unit": "B/op",
            "extra": "15112344 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Set - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "15112344 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Get - ns/op",
            "value": 26.09,
            "unit": "ns/op",
            "extra": "48322309 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Get - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "48322309 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Get - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "48322309 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_SetAndDelete - ns/op",
            "value": 159.3,
            "unit": "ns/op",
            "extra": "6635750 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_SetAndDelete - B/op",
            "value": 3,
            "unit": "B/op",
            "extra": "6635750 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_SetAndDelete - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "6635750 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber - ns/op",
            "value": 0.3968,
            "unit": "ns/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default - ns/op",
            "value": 58.93,
            "unit": "ns/op",
            "extra": "21024927 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "21024927 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "21024927 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Set - ns/op",
            "value": 3370544,
            "unit": "ns/op",
            "extra": "369 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Set - B/op",
            "value": 86227,
            "unit": "B/op",
            "extra": "369 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Set - allocs/op",
            "value": 295,
            "unit": "allocs/op",
            "extra": "369 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Get - ns/op",
            "value": 1280804,
            "unit": "ns/op",
            "extra": "813 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Get - B/op",
            "value": 15564,
            "unit": "B/op",
            "extra": "813 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Get - allocs/op",
            "value": 201,
            "unit": "allocs/op",
            "extra": "813 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_SetAndDelete - ns/op",
            "value": 4793505,
            "unit": "ns/op",
            "extra": "249 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_SetAndDelete - B/op",
            "value": 97636,
            "unit": "B/op",
            "extra": "249 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_SetAndDelete - allocs/op",
            "value": 463,
            "unit": "allocs/op",
            "extra": "249 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - ns/op",
            "value": 581553,
            "unit": "ns/op",
            "extra": "2010 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - B/op",
            "value": 6670,
            "unit": "B/op",
            "extra": "2010 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - allocs/op",
            "value": 100,
            "unit": "allocs/op",
            "extra": "2010 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - ns/op",
            "value": 519170,
            "unit": "ns/op",
            "extra": "2119 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - B/op",
            "value": 7468,
            "unit": "B/op",
            "extra": "2119 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "2119 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - ns/op",
            "value": 1336987,
            "unit": "ns/op",
            "extra": "1008 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - B/op",
            "value": 11876,
            "unit": "B/op",
            "extra": "1008 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - allocs/op",
            "value": 172,
            "unit": "allocs/op",
            "extra": "1008 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Set - ns/op",
            "value": 4626452,
            "unit": "ns/op",
            "extra": "222 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Set - B/op",
            "value": 15031,
            "unit": "B/op",
            "extra": "222 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Set - allocs/op",
            "value": 281,
            "unit": "allocs/op",
            "extra": "222 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Get - ns/op",
            "value": 4662906,
            "unit": "ns/op",
            "extra": "224 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Get - B/op",
            "value": 14737,
            "unit": "B/op",
            "extra": "224 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Get - allocs/op",
            "value": 282,
            "unit": "allocs/op",
            "extra": "224 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_SetAndDelete - ns/op",
            "value": 10609550,
            "unit": "ns/op",
            "extra": "114 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_SetAndDelete - B/op",
            "value": 26659,
            "unit": "B/op",
            "extra": "114 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_SetAndDelete - allocs/op",
            "value": 532,
            "unit": "allocs/op",
            "extra": "114 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - ns/op",
            "value": 1739855,
            "unit": "ns/op",
            "extra": "645 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - B/op",
            "value": 6584,
            "unit": "B/op",
            "extra": "645 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - allocs/op",
            "value": 40,
            "unit": "allocs/op",
            "extra": "645 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - ns/op",
            "value": 1678108,
            "unit": "ns/op",
            "extra": "667 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - B/op",
            "value": 6609,
            "unit": "B/op",
            "extra": "667 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - allocs/op",
            "value": 50,
            "unit": "allocs/op",
            "extra": "667 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - ns/op",
            "value": 7051145,
            "unit": "ns/op",
            "extra": "165 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - B/op",
            "value": 12668,
            "unit": "B/op",
            "extra": "165 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - allocs/op",
            "value": 77,
            "unit": "allocs/op",
            "extra": "165 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Set - ns/op",
            "value": 800546,
            "unit": "ns/op",
            "extra": "1623 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Set - B/op",
            "value": 126,
            "unit": "B/op",
            "extra": "1623 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Set - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1623 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Get - ns/op",
            "value": 2604,
            "unit": "ns/op",
            "extra": "464343 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Get - B/op",
            "value": 288,
            "unit": "B/op",
            "extra": "464343 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Get - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "464343 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_SetAndDelete - ns/op",
            "value": 1782648,
            "unit": "ns/op",
            "extra": "741 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_SetAndDelete - B/op",
            "value": 205,
            "unit": "B/op",
            "extra": "741 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_SetAndDelete - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "741 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - ns/op",
            "value": 652494,
            "unit": "ns/op",
            "extra": "1848 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - B/op",
            "value": 255,
            "unit": "B/op",
            "extra": "1848 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1848 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - ns/op",
            "value": 259488,
            "unit": "ns/op",
            "extra": "5253 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - B/op",
            "value": 521,
            "unit": "B/op",
            "extra": "5253 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "5253 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - ns/op",
            "value": 1174776,
            "unit": "ns/op",
            "extra": "1005 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - B/op",
            "value": 398,
            "unit": "B/op",
            "extra": "1005 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "1005 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Set - ns/op",
            "value": 76815,
            "unit": "ns/op",
            "extra": "15117 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Set - B/op",
            "value": 268,
            "unit": "B/op",
            "extra": "15117 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Set - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "15117 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Get - ns/op",
            "value": 76274,
            "unit": "ns/op",
            "extra": "16494 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Get - B/op",
            "value": 200,
            "unit": "B/op",
            "extra": "16494 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Get - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "16494 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_SetAndDelete - ns/op",
            "value": 142507,
            "unit": "ns/op",
            "extra": "7288 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_SetAndDelete - B/op",
            "value": 456,
            "unit": "B/op",
            "extra": "7288 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_SetAndDelete - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "7288 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Set - ns/op",
            "value": 802.9,
            "unit": "ns/op",
            "extra": "1530246 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Set - B/op",
            "value": 123,
            "unit": "B/op",
            "extra": "1530246 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Set - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1530246 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Get - ns/op",
            "value": 174.1,
            "unit": "ns/op",
            "extra": "7488954 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Get - B/op",
            "value": 20,
            "unit": "B/op",
            "extra": "7488954 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Get - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "7488954 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_SetAndDelete - ns/op",
            "value": 1434,
            "unit": "ns/op",
            "extra": "831177 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_SetAndDelete - B/op",
            "value": 219,
            "unit": "B/op",
            "extra": "831177 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_SetAndDelete - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "831177 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - ns/op",
            "value": 90737,
            "unit": "ns/op",
            "extra": "12728 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - B/op",
            "value": 30,
            "unit": "B/op",
            "extra": "12728 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "12728 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - ns/op",
            "value": 123968,
            "unit": "ns/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - B/op",
            "value": 568,
            "unit": "B/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - ns/op",
            "value": 182572,
            "unit": "ns/op",
            "extra": "7243 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - B/op",
            "value": 30,
            "unit": "B/op",
            "extra": "7243 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "7243 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 3064222,
            "unit": "ns/op",
            "extra": "367 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 60905,
            "unit": "B/op",
            "extra": "367 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 529,
            "unit": "allocs/op",
            "extra": "367 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 1363406,
            "unit": "ns/op",
            "extra": "913 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 60191,
            "unit": "B/op",
            "extra": "913 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "913 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 4813919,
            "unit": "ns/op",
            "extra": "271 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 83039,
            "unit": "B/op",
            "extra": "271 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 871,
            "unit": "allocs/op",
            "extra": "271 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Set - ns/op",
            "value": 1829079,
            "unit": "ns/op",
            "extra": "640 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Set - B/op",
            "value": 627,
            "unit": "B/op",
            "extra": "640 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Set - allocs/op",
            "value": 24,
            "unit": "allocs/op",
            "extra": "640 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Get - ns/op",
            "value": 30895,
            "unit": "ns/op",
            "extra": "41428 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Get - B/op",
            "value": 856,
            "unit": "B/op",
            "extra": "41428 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Get - allocs/op",
            "value": 45,
            "unit": "allocs/op",
            "extra": "41428 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_SetAndDelete - ns/op",
            "value": 3875586,
            "unit": "ns/op",
            "extra": "348 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_SetAndDelete - B/op",
            "value": 965,
            "unit": "B/op",
            "extra": "348 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_SetAndDelete - allocs/op",
            "value": 43,
            "unit": "allocs/op",
            "extra": "348 times\n2 procs"
          }
        ]
      }
    ]
  }
}