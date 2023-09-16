window.BENCHMARK_DATA = {
  "lastUpdate": 1694861372150,
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
          "id": "9e0080d646b66a18e22553206b2f860bb1bf90c8",
          "message": "Add benchmarks for storage drivers",
          "timestamp": "2023-09-12T08:00:09Z",
          "url": "https://github.com/gofiber/storage/pull/992/commits/9e0080d646b66a18e22553206b2f860bb1bf90c8"
        },
        "date": 1694861371022,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_ArangoDB_Set - ns/op",
            "value": 948871,
            "unit": "ns/op",
            "extra": "1317 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_Set - B/op",
            "value": 15480,
            "unit": "B/op",
            "extra": "1317 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_Set - allocs/op",
            "value": 226,
            "unit": "allocs/op",
            "extra": "1317 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_Get - ns/op",
            "value": 895219,
            "unit": "ns/op",
            "extra": "1304 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_Get - B/op",
            "value": 15232,
            "unit": "B/op",
            "extra": "1304 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_Get - allocs/op",
            "value": 226,
            "unit": "allocs/op",
            "extra": "1304 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_SetAndDelete - ns/op",
            "value": 1395331,
            "unit": "ns/op",
            "extra": "842 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_SetAndDelete - B/op",
            "value": 23297,
            "unit": "B/op",
            "extra": "842 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_SetAndDelete - allocs/op",
            "value": 340,
            "unit": "allocs/op",
            "extra": "842 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Set - ns/op",
            "value": 3659310,
            "unit": "ns/op",
            "extra": "290 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Set - B/op",
            "value": 10303,
            "unit": "B/op",
            "extra": "290 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Set - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "290 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Get - ns/op",
            "value": 2575629,
            "unit": "ns/op",
            "extra": "475 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Get - B/op",
            "value": 11436,
            "unit": "B/op",
            "extra": "475 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Get - allocs/op",
            "value": 203,
            "unit": "allocs/op",
            "extra": "475 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_SetAndDelete - ns/op",
            "value": 5427040,
            "unit": "ns/op",
            "extra": "193 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_SetAndDelete - B/op",
            "value": 18501,
            "unit": "B/op",
            "extra": "193 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_SetAndDelete - allocs/op",
            "value": 284,
            "unit": "allocs/op",
            "extra": "193 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Set - ns/op",
            "value": 14367,
            "unit": "ns/op",
            "extra": "97435 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Set - B/op",
            "value": 1400,
            "unit": "B/op",
            "extra": "97435 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Set - allocs/op",
            "value": 38,
            "unit": "allocs/op",
            "extra": "97435 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Get - ns/op",
            "value": 1711,
            "unit": "ns/op",
            "extra": "776511 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Get - B/op",
            "value": 416,
            "unit": "B/op",
            "extra": "776511 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Get - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "776511 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - ns/op",
            "value": 27281,
            "unit": "ns/op",
            "extra": "46184 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - B/op",
            "value": 2786,
            "unit": "B/op",
            "extra": "46184 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "46184 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Set - ns/op",
            "value": 355866,
            "unit": "ns/op",
            "extra": "3060 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Set - B/op",
            "value": 6276,
            "unit": "B/op",
            "extra": "3060 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "3060 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Get - ns/op",
            "value": 991.4,
            "unit": "ns/op",
            "extra": "1108506 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Get - B/op",
            "value": 480,
            "unit": "B/op",
            "extra": "1108506 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Get - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1108506 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_SetAndDelete - ns/op",
            "value": 749161,
            "unit": "ns/op",
            "extra": "1594 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_SetAndDelete - B/op",
            "value": 12529,
            "unit": "B/op",
            "extra": "1594 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_SetAndDelete - allocs/op",
            "value": 84,
            "unit": "allocs/op",
            "extra": "1594 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Set - ns/op",
            "value": 3037860,
            "unit": "ns/op",
            "extra": "361 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Set - B/op",
            "value": 6582,
            "unit": "B/op",
            "extra": "361 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Set - allocs/op",
            "value": 118,
            "unit": "allocs/op",
            "extra": "361 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Get - ns/op",
            "value": 2593200,
            "unit": "ns/op",
            "extra": "532 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Get - B/op",
            "value": 6531,
            "unit": "B/op",
            "extra": "532 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Get - allocs/op",
            "value": 113,
            "unit": "allocs/op",
            "extra": "532 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_SetAndDelete - ns/op",
            "value": 4135501,
            "unit": "ns/op",
            "extra": "258 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_SetAndDelete - B/op",
            "value": 12908,
            "unit": "B/op",
            "extra": "258 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_SetAndDelete - allocs/op",
            "value": 226,
            "unit": "allocs/op",
            "extra": "258 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - ns/op",
            "value": 386607,
            "unit": "ns/op",
            "extra": "3284 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - B/op",
            "value": 10168,
            "unit": "B/op",
            "extra": "3284 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - allocs/op",
            "value": 65,
            "unit": "allocs/op",
            "extra": "3284 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - ns/op",
            "value": 260232,
            "unit": "ns/op",
            "extra": "5014 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - B/op",
            "value": 3463,
            "unit": "B/op",
            "extra": "5014 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "5014 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - ns/op",
            "value": 654557,
            "unit": "ns/op",
            "extra": "1875 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - B/op",
            "value": 18969,
            "unit": "B/op",
            "extra": "1875 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "1875 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 2000053,
            "unit": "ns/op",
            "extra": "624 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 24208,
            "unit": "B/op",
            "extra": "624 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 335,
            "unit": "allocs/op",
            "extra": "624 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1533017,
            "unit": "ns/op",
            "extra": "807 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 26046,
            "unit": "B/op",
            "extra": "807 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 363,
            "unit": "allocs/op",
            "extra": "807 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 3402540,
            "unit": "ns/op",
            "extra": "375 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 48303,
            "unit": "B/op",
            "extra": "375 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "375 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Set - ns/op",
            "value": 1936058,
            "unit": "ns/op",
            "extra": "606 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Set - B/op",
            "value": 13560,
            "unit": "B/op",
            "extra": "606 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Set - allocs/op",
            "value": 237,
            "unit": "allocs/op",
            "extra": "606 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Get - ns/op",
            "value": 541689,
            "unit": "ns/op",
            "extra": "2172 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Get - B/op",
            "value": 7426,
            "unit": "B/op",
            "extra": "2172 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Get - allocs/op",
            "value": 125,
            "unit": "allocs/op",
            "extra": "2172 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_SetAndDelete - ns/op",
            "value": 3517324,
            "unit": "ns/op",
            "extra": "286 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_SetAndDelete - B/op",
            "value": 20609,
            "unit": "B/op",
            "extra": "286 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_SetAndDelete - allocs/op",
            "value": 353,
            "unit": "allocs/op",
            "extra": "286 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Set - ns/op",
            "value": 176193,
            "unit": "ns/op",
            "extra": "5786 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Set - B/op",
            "value": 35,
            "unit": "B/op",
            "extra": "5786 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Set - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "5786 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Get - ns/op",
            "value": 191595,
            "unit": "ns/op",
            "extra": "9648 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Get - B/op",
            "value": 192,
            "unit": "B/op",
            "extra": "9648 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Get - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "9648 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_SetAndDelete - ns/op",
            "value": 363109,
            "unit": "ns/op",
            "extra": "3603 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_SetAndDelete - B/op",
            "value": 51,
            "unit": "B/op",
            "extra": "3603 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_SetAndDelete - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "3603 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Set - ns/op",
            "value": 70.5,
            "unit": "ns/op",
            "extra": "16901254 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Set - B/op",
            "value": 3,
            "unit": "B/op",
            "extra": "16901254 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Set - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "16901254 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Get - ns/op",
            "value": 24.76,
            "unit": "ns/op",
            "extra": "49634671 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Get - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "49634671 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Get - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "49634671 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_SetAndDelete - ns/op",
            "value": 130.8,
            "unit": "ns/op",
            "extra": "9332300 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_SetAndDelete - B/op",
            "value": 3,
            "unit": "B/op",
            "extra": "9332300 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_SetAndDelete - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "9332300 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber - ns/op",
            "value": 0.4537,
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
            "value": 57.93,
            "unit": "ns/op",
            "extra": "20146228 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20146228 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20146228 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Set - ns/op",
            "value": 2969861,
            "unit": "ns/op",
            "extra": "392 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Set - B/op",
            "value": 86233,
            "unit": "B/op",
            "extra": "392 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Set - allocs/op",
            "value": 295,
            "unit": "allocs/op",
            "extra": "392 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Get - ns/op",
            "value": 1500008,
            "unit": "ns/op",
            "extra": "958 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Get - B/op",
            "value": 15559,
            "unit": "B/op",
            "extra": "958 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Get - allocs/op",
            "value": 201,
            "unit": "allocs/op",
            "extra": "958 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_SetAndDelete - ns/op",
            "value": 4517963,
            "unit": "ns/op",
            "extra": "252 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_SetAndDelete - B/op",
            "value": 97591,
            "unit": "B/op",
            "extra": "252 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_SetAndDelete - allocs/op",
            "value": 463,
            "unit": "allocs/op",
            "extra": "252 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - ns/op",
            "value": 666314,
            "unit": "ns/op",
            "extra": "2229 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - B/op",
            "value": 6664,
            "unit": "B/op",
            "extra": "2229 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - allocs/op",
            "value": 100,
            "unit": "allocs/op",
            "extra": "2229 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - ns/op",
            "value": 528100,
            "unit": "ns/op",
            "extra": "2271 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - B/op",
            "value": 7460,
            "unit": "B/op",
            "extra": "2271 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "2271 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - ns/op",
            "value": 1184181,
            "unit": "ns/op",
            "extra": "1077 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - B/op",
            "value": 11873,
            "unit": "B/op",
            "extra": "1077 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - allocs/op",
            "value": 172,
            "unit": "allocs/op",
            "extra": "1077 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Set - ns/op",
            "value": 4052365,
            "unit": "ns/op",
            "extra": "289 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Set - B/op",
            "value": 15024,
            "unit": "B/op",
            "extra": "289 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Set - allocs/op",
            "value": 281,
            "unit": "allocs/op",
            "extra": "289 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Get - ns/op",
            "value": 3176552,
            "unit": "ns/op",
            "extra": "328 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Get - B/op",
            "value": 14940,
            "unit": "B/op",
            "extra": "328 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Get - allocs/op",
            "value": 282,
            "unit": "allocs/op",
            "extra": "328 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_SetAndDelete - ns/op",
            "value": 9133657,
            "unit": "ns/op",
            "extra": "134 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_SetAndDelete - B/op",
            "value": 26657,
            "unit": "B/op",
            "extra": "134 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_SetAndDelete - allocs/op",
            "value": 532,
            "unit": "allocs/op",
            "extra": "134 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - ns/op",
            "value": 1738561,
            "unit": "ns/op",
            "extra": "765 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - B/op",
            "value": 6582,
            "unit": "B/op",
            "extra": "765 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - allocs/op",
            "value": 40,
            "unit": "allocs/op",
            "extra": "765 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - ns/op",
            "value": 1660607,
            "unit": "ns/op",
            "extra": "799 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - B/op",
            "value": 6608,
            "unit": "B/op",
            "extra": "799 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - allocs/op",
            "value": 50,
            "unit": "allocs/op",
            "extra": "799 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - ns/op",
            "value": 6607096,
            "unit": "ns/op",
            "extra": "211 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - B/op",
            "value": 12647,
            "unit": "B/op",
            "extra": "211 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - allocs/op",
            "value": 77,
            "unit": "allocs/op",
            "extra": "211 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Set - ns/op",
            "value": 677113,
            "unit": "ns/op",
            "extra": "1899 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Set - B/op",
            "value": 122,
            "unit": "B/op",
            "extra": "1899 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Set - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1899 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Get - ns/op",
            "value": 3046,
            "unit": "ns/op",
            "extra": "495657 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Get - B/op",
            "value": 288,
            "unit": "B/op",
            "extra": "495657 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Get - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "495657 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_SetAndDelete - ns/op",
            "value": 1340958,
            "unit": "ns/op",
            "extra": "922 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_SetAndDelete - B/op",
            "value": 230,
            "unit": "B/op",
            "extra": "922 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_SetAndDelete - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "922 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - ns/op",
            "value": 657505,
            "unit": "ns/op",
            "extra": "1856 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - B/op",
            "value": 255,
            "unit": "B/op",
            "extra": "1856 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1856 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - ns/op",
            "value": 255178,
            "unit": "ns/op",
            "extra": "5551 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - B/op",
            "value": 521,
            "unit": "B/op",
            "extra": "5551 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "5551 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - ns/op",
            "value": 1065596,
            "unit": "ns/op",
            "extra": "1095 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - B/op",
            "value": 399,
            "unit": "B/op",
            "extra": "1095 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "1095 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Set - ns/op",
            "value": 82852,
            "unit": "ns/op",
            "extra": "17196 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Set - B/op",
            "value": 268,
            "unit": "B/op",
            "extra": "17196 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Set - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "17196 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Get - ns/op",
            "value": 75709,
            "unit": "ns/op",
            "extra": "16522 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Get - B/op",
            "value": 200,
            "unit": "B/op",
            "extra": "16522 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Get - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "16522 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_SetAndDelete - ns/op",
            "value": 156919,
            "unit": "ns/op",
            "extra": "9792 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_SetAndDelete - B/op",
            "value": 456,
            "unit": "B/op",
            "extra": "9792 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_SetAndDelete - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "9792 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Set - ns/op",
            "value": 674,
            "unit": "ns/op",
            "extra": "1794002 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Set - B/op",
            "value": 123,
            "unit": "B/op",
            "extra": "1794002 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Set - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1794002 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Get - ns/op",
            "value": 162.5,
            "unit": "ns/op",
            "extra": "8530510 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Get - B/op",
            "value": 19,
            "unit": "B/op",
            "extra": "8530510 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Get - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "8530510 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_SetAndDelete - ns/op",
            "value": 1354,
            "unit": "ns/op",
            "extra": "906877 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_SetAndDelete - B/op",
            "value": 219,
            "unit": "B/op",
            "extra": "906877 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_SetAndDelete - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "906877 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - ns/op",
            "value": 87665,
            "unit": "ns/op",
            "extra": "14262 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - B/op",
            "value": 30,
            "unit": "B/op",
            "extra": "14262 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "14262 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - ns/op",
            "value": 101314,
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
            "value": 181978,
            "unit": "ns/op",
            "extra": "6735 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - B/op",
            "value": 30,
            "unit": "B/op",
            "extra": "6735 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "6735 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2860317,
            "unit": "ns/op",
            "extra": "441 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 60907,
            "unit": "B/op",
            "extra": "441 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 529,
            "unit": "allocs/op",
            "extra": "441 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 1784029,
            "unit": "ns/op",
            "extra": "828 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 60184,
            "unit": "B/op",
            "extra": "828 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "828 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 4098083,
            "unit": "ns/op",
            "extra": "284 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 83083,
            "unit": "B/op",
            "extra": "284 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 871,
            "unit": "allocs/op",
            "extra": "284 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Set - ns/op",
            "value": 1363103,
            "unit": "ns/op",
            "extra": "886 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Set - B/op",
            "value": 626,
            "unit": "B/op",
            "extra": "886 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Set - allocs/op",
            "value": 24,
            "unit": "allocs/op",
            "extra": "886 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Get - ns/op",
            "value": 27686,
            "unit": "ns/op",
            "extra": "43323 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Get - B/op",
            "value": 856,
            "unit": "B/op",
            "extra": "43323 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Get - allocs/op",
            "value": 45,
            "unit": "allocs/op",
            "extra": "43323 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_SetAndDelete - ns/op",
            "value": 3493419,
            "unit": "ns/op",
            "extra": "362 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_SetAndDelete - B/op",
            "value": 964,
            "unit": "B/op",
            "extra": "362 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_SetAndDelete - allocs/op",
            "value": 43,
            "unit": "allocs/op",
            "extra": "362 times\n2 procs"
          }
        ]
      }
    ]
  }
}