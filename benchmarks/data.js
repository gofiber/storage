window.BENCHMARK_DATA = {
  "lastUpdate": 1695627556759,
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
          "id": "cbaf8b15eb7359e48e04756f99a253cc7d01cca8",
          "message": "Add benchmarks for storage drivers",
          "timestamp": "2023-09-12T08:00:09Z",
          "url": "https://github.com/gofiber/storage/pull/992/commits/cbaf8b15eb7359e48e04756f99a253cc7d01cca8"
        },
        "date": 1694867696958,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_ArangoDB_Set - ns/op",
            "value": 528094,
            "unit": "ns/op",
            "extra": "1969 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_Set - B/op",
            "value": 15447,
            "unit": "B/op",
            "extra": "1969 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_Set - allocs/op",
            "value": 225,
            "unit": "allocs/op",
            "extra": "1969 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_Get - ns/op",
            "value": 455977,
            "unit": "ns/op",
            "extra": "2752 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_Get - B/op",
            "value": 15205,
            "unit": "B/op",
            "extra": "2752 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_Get - allocs/op",
            "value": 226,
            "unit": "allocs/op",
            "extra": "2752 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_SetAndDelete - ns/op",
            "value": 749046,
            "unit": "ns/op",
            "extra": "1669 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_SetAndDelete - B/op",
            "value": 23332,
            "unit": "B/op",
            "extra": "1669 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_SetAndDelete - allocs/op",
            "value": 340,
            "unit": "allocs/op",
            "extra": "1669 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Set - ns/op",
            "value": 2551065,
            "unit": "ns/op",
            "extra": "498 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Set - B/op",
            "value": 10292,
            "unit": "B/op",
            "extra": "498 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Set - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "498 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Get - ns/op",
            "value": 1536691,
            "unit": "ns/op",
            "extra": "757 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Get - B/op",
            "value": 11429,
            "unit": "B/op",
            "extra": "757 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Get - allocs/op",
            "value": 203,
            "unit": "allocs/op",
            "extra": "757 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_SetAndDelete - ns/op",
            "value": 3613390,
            "unit": "ns/op",
            "extra": "303 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_SetAndDelete - B/op",
            "value": 18490,
            "unit": "B/op",
            "extra": "303 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_SetAndDelete - allocs/op",
            "value": 284,
            "unit": "allocs/op",
            "extra": "303 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Set - ns/op",
            "value": 10092,
            "unit": "ns/op",
            "extra": "109159 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Set - B/op",
            "value": 1399,
            "unit": "B/op",
            "extra": "109159 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Set - allocs/op",
            "value": 38,
            "unit": "allocs/op",
            "extra": "109159 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Get - ns/op",
            "value": 1539,
            "unit": "ns/op",
            "extra": "843024 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Get - B/op",
            "value": 416,
            "unit": "B/op",
            "extra": "843024 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Get - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "843024 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - ns/op",
            "value": 20307,
            "unit": "ns/op",
            "extra": "63517 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - B/op",
            "value": 2785,
            "unit": "B/op",
            "extra": "63517 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - allocs/op",
            "value": 77,
            "unit": "allocs/op",
            "extra": "63517 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Set - ns/op",
            "value": 296573,
            "unit": "ns/op",
            "extra": "5874 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Set - B/op",
            "value": 6275,
            "unit": "B/op",
            "extra": "5874 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "5874 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Get - ns/op",
            "value": 808.4,
            "unit": "ns/op",
            "extra": "1540537 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Get - B/op",
            "value": 480,
            "unit": "B/op",
            "extra": "1540537 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Get - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1540537 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_SetAndDelete - ns/op",
            "value": 599370,
            "unit": "ns/op",
            "extra": "2169 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_SetAndDelete - B/op",
            "value": 12529,
            "unit": "B/op",
            "extra": "2169 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_SetAndDelete - allocs/op",
            "value": 84,
            "unit": "allocs/op",
            "extra": "2169 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Set - ns/op",
            "value": 1615628,
            "unit": "ns/op",
            "extra": "645 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Set - B/op",
            "value": 6596,
            "unit": "B/op",
            "extra": "645 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Set - allocs/op",
            "value": 118,
            "unit": "allocs/op",
            "extra": "645 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Get - ns/op",
            "value": 1275414,
            "unit": "ns/op",
            "extra": "831 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Get - B/op",
            "value": 6524,
            "unit": "B/op",
            "extra": "831 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Get - allocs/op",
            "value": 113,
            "unit": "allocs/op",
            "extra": "831 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_SetAndDelete - ns/op",
            "value": 4139616,
            "unit": "ns/op",
            "extra": "388 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_SetAndDelete - B/op",
            "value": 12902,
            "unit": "B/op",
            "extra": "388 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_SetAndDelete - allocs/op",
            "value": 226,
            "unit": "allocs/op",
            "extra": "388 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - ns/op",
            "value": 162364,
            "unit": "ns/op",
            "extra": "8137 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - B/op",
            "value": 6265,
            "unit": "B/op",
            "extra": "8137 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - allocs/op",
            "value": 64,
            "unit": "allocs/op",
            "extra": "8137 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - ns/op",
            "value": 128278,
            "unit": "ns/op",
            "extra": "9078 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - B/op",
            "value": 3389,
            "unit": "B/op",
            "extra": "9078 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "9078 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - ns/op",
            "value": 326525,
            "unit": "ns/op",
            "extra": "3904 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - B/op",
            "value": 7314,
            "unit": "B/op",
            "extra": "3904 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "3904 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 812977,
            "unit": "ns/op",
            "extra": "1245 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 24207,
            "unit": "B/op",
            "extra": "1245 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 335,
            "unit": "allocs/op",
            "extra": "1245 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 685634,
            "unit": "ns/op",
            "extra": "1681 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 26048,
            "unit": "B/op",
            "extra": "1681 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 363,
            "unit": "allocs/op",
            "extra": "1681 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 1656280,
            "unit": "ns/op",
            "extra": "804 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 48338,
            "unit": "B/op",
            "extra": "804 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "804 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Set - ns/op",
            "value": 1017584,
            "unit": "ns/op",
            "extra": "1153 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Set - B/op",
            "value": 13558,
            "unit": "B/op",
            "extra": "1153 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Set - allocs/op",
            "value": 237,
            "unit": "allocs/op",
            "extra": "1153 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Get - ns/op",
            "value": 274591,
            "unit": "ns/op",
            "extra": "4306 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Get - B/op",
            "value": 7426,
            "unit": "B/op",
            "extra": "4306 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Get - allocs/op",
            "value": 125,
            "unit": "allocs/op",
            "extra": "4306 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_SetAndDelete - ns/op",
            "value": 1412591,
            "unit": "ns/op",
            "extra": "793 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_SetAndDelete - B/op",
            "value": 20608,
            "unit": "B/op",
            "extra": "793 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_SetAndDelete - allocs/op",
            "value": 353,
            "unit": "allocs/op",
            "extra": "793 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Set - ns/op",
            "value": 79350,
            "unit": "ns/op",
            "extra": "13140 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Set - B/op",
            "value": 35,
            "unit": "B/op",
            "extra": "13140 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Set - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "13140 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Get - ns/op",
            "value": 78039,
            "unit": "ns/op",
            "extra": "13722 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Get - B/op",
            "value": 200,
            "unit": "B/op",
            "extra": "13722 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Get - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "13722 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_SetAndDelete - ns/op",
            "value": 164327,
            "unit": "ns/op",
            "extra": "7255 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_SetAndDelete - B/op",
            "value": 51,
            "unit": "B/op",
            "extra": "7255 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_SetAndDelete - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7255 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Set - ns/op",
            "value": 55.29,
            "unit": "ns/op",
            "extra": "21287976 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Set - B/op",
            "value": 3,
            "unit": "B/op",
            "extra": "21287976 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Set - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "21287976 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Get - ns/op",
            "value": 22.1,
            "unit": "ns/op",
            "extra": "54941818 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Get - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "54941818 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Get - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "54941818 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_SetAndDelete - ns/op",
            "value": 115.5,
            "unit": "ns/op",
            "extra": "10371598 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_SetAndDelete - B/op",
            "value": 3,
            "unit": "B/op",
            "extra": "10371598 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_SetAndDelete - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10371598 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber - ns/op",
            "value": 0.4289,
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
            "value": 55.33,
            "unit": "ns/op",
            "extra": "21749107 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "21749107 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "21749107 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Set - ns/op",
            "value": 2134576,
            "unit": "ns/op",
            "extra": "720 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Set - B/op",
            "value": 86211,
            "unit": "B/op",
            "extra": "720 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Set - allocs/op",
            "value": 295,
            "unit": "allocs/op",
            "extra": "720 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Get - ns/op",
            "value": 850598,
            "unit": "ns/op",
            "extra": "1420 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Get - B/op",
            "value": 15561,
            "unit": "B/op",
            "extra": "1420 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Get - allocs/op",
            "value": 201,
            "unit": "allocs/op",
            "extra": "1420 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_SetAndDelete - ns/op",
            "value": 3037766,
            "unit": "ns/op",
            "extra": "373 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_SetAndDelete - B/op",
            "value": 97583,
            "unit": "B/op",
            "extra": "373 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_SetAndDelete - allocs/op",
            "value": 463,
            "unit": "allocs/op",
            "extra": "373 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - ns/op",
            "value": 355582,
            "unit": "ns/op",
            "extra": "3438 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - B/op",
            "value": 6663,
            "unit": "B/op",
            "extra": "3438 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - allocs/op",
            "value": 100,
            "unit": "allocs/op",
            "extra": "3438 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - ns/op",
            "value": 303781,
            "unit": "ns/op",
            "extra": "4477 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - B/op",
            "value": 7471,
            "unit": "B/op",
            "extra": "4477 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "4477 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - ns/op",
            "value": 784300,
            "unit": "ns/op",
            "extra": "1610 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - B/op",
            "value": 11874,
            "unit": "B/op",
            "extra": "1610 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - allocs/op",
            "value": 172,
            "unit": "allocs/op",
            "extra": "1610 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Set - ns/op",
            "value": 2752485,
            "unit": "ns/op",
            "extra": "382 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Set - B/op",
            "value": 15043,
            "unit": "B/op",
            "extra": "382 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Set - allocs/op",
            "value": 281,
            "unit": "allocs/op",
            "extra": "382 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Get - ns/op",
            "value": 2178437,
            "unit": "ns/op",
            "extra": "548 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Get - B/op",
            "value": 14855,
            "unit": "B/op",
            "extra": "548 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Get - allocs/op",
            "value": 282,
            "unit": "allocs/op",
            "extra": "548 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_SetAndDelete - ns/op",
            "value": 5828984,
            "unit": "ns/op",
            "extra": "218 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_SetAndDelete - B/op",
            "value": 26949,
            "unit": "B/op",
            "extra": "218 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_SetAndDelete - allocs/op",
            "value": 532,
            "unit": "allocs/op",
            "extra": "218 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - ns/op",
            "value": 920108,
            "unit": "ns/op",
            "extra": "1255 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - B/op",
            "value": 6581,
            "unit": "B/op",
            "extra": "1255 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - allocs/op",
            "value": 40,
            "unit": "allocs/op",
            "extra": "1255 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - ns/op",
            "value": 890950,
            "unit": "ns/op",
            "extra": "1378 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - B/op",
            "value": 6612,
            "unit": "B/op",
            "extra": "1378 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - allocs/op",
            "value": 50,
            "unit": "allocs/op",
            "extra": "1378 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - ns/op",
            "value": 4015136,
            "unit": "ns/op",
            "extra": "301 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - B/op",
            "value": 12664,
            "unit": "B/op",
            "extra": "301 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - allocs/op",
            "value": 77,
            "unit": "allocs/op",
            "extra": "301 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Set - ns/op",
            "value": 376770,
            "unit": "ns/op",
            "extra": "3130 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Set - B/op",
            "value": 137,
            "unit": "B/op",
            "extra": "3130 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Set - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "3130 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Get - ns/op",
            "value": 2015,
            "unit": "ns/op",
            "extra": "522404 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Get - B/op",
            "value": 288,
            "unit": "B/op",
            "extra": "522404 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Get - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "522404 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_SetAndDelete - ns/op",
            "value": 744162,
            "unit": "ns/op",
            "extra": "1924 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_SetAndDelete - B/op",
            "value": 100,
            "unit": "B/op",
            "extra": "1924 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_SetAndDelete - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1924 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - ns/op",
            "value": 287191,
            "unit": "ns/op",
            "extra": "4159 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - B/op",
            "value": 255,
            "unit": "B/op",
            "extra": "4159 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "4159 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - ns/op",
            "value": 125654,
            "unit": "ns/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - B/op",
            "value": 521,
            "unit": "B/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - ns/op",
            "value": 556587,
            "unit": "ns/op",
            "extra": "2478 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - B/op",
            "value": 400,
            "unit": "B/op",
            "extra": "2478 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "2478 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Set - ns/op",
            "value": 39011,
            "unit": "ns/op",
            "extra": "35203 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Set - B/op",
            "value": 268,
            "unit": "B/op",
            "extra": "35203 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Set - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "35203 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Get - ns/op",
            "value": 37426,
            "unit": "ns/op",
            "extra": "29184 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Get - B/op",
            "value": 200,
            "unit": "B/op",
            "extra": "29184 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Get - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "29184 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_SetAndDelete - ns/op",
            "value": 77176,
            "unit": "ns/op",
            "extra": "15580 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_SetAndDelete - B/op",
            "value": 456,
            "unit": "B/op",
            "extra": "15580 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_SetAndDelete - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "15580 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Set - ns/op",
            "value": 554.9,
            "unit": "ns/op",
            "extra": "2205922 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Set - B/op",
            "value": 123,
            "unit": "B/op",
            "extra": "2205922 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Set - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "2205922 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Get - ns/op",
            "value": 113.7,
            "unit": "ns/op",
            "extra": "11208457 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Get - B/op",
            "value": 19,
            "unit": "B/op",
            "extra": "11208457 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Get - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11208457 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_SetAndDelete - ns/op",
            "value": 1013,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_SetAndDelete - B/op",
            "value": 219,
            "unit": "B/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_SetAndDelete - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - ns/op",
            "value": 47899,
            "unit": "ns/op",
            "extra": "26344 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - B/op",
            "value": 30,
            "unit": "B/op",
            "extra": "26344 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "26344 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - ns/op",
            "value": 51408,
            "unit": "ns/op",
            "extra": "22846 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - B/op",
            "value": 568,
            "unit": "B/op",
            "extra": "22846 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "22846 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - ns/op",
            "value": 83471,
            "unit": "ns/op",
            "extra": "13483 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - B/op",
            "value": 30,
            "unit": "B/op",
            "extra": "13483 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "13483 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 1771833,
            "unit": "ns/op",
            "extra": "699 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 60901,
            "unit": "B/op",
            "extra": "699 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 529,
            "unit": "allocs/op",
            "extra": "699 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 915509,
            "unit": "ns/op",
            "extra": "1418 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 60185,
            "unit": "B/op",
            "extra": "1418 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "1418 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2776196,
            "unit": "ns/op",
            "extra": "406 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 83138,
            "unit": "B/op",
            "extra": "406 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 871,
            "unit": "allocs/op",
            "extra": "406 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Set - ns/op",
            "value": 807978,
            "unit": "ns/op",
            "extra": "1543 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Set - B/op",
            "value": 625,
            "unit": "B/op",
            "extra": "1543 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Set - allocs/op",
            "value": 24,
            "unit": "allocs/op",
            "extra": "1543 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Get - ns/op",
            "value": 19368,
            "unit": "ns/op",
            "extra": "62787 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Get - B/op",
            "value": 856,
            "unit": "B/op",
            "extra": "62787 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Get - allocs/op",
            "value": 45,
            "unit": "allocs/op",
            "extra": "62787 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_SetAndDelete - ns/op",
            "value": 1568661,
            "unit": "ns/op",
            "extra": "740 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_SetAndDelete - B/op",
            "value": 964,
            "unit": "B/op",
            "extra": "740 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_SetAndDelete - allocs/op",
            "value": 43,
            "unit": "allocs/op",
            "extra": "740 times\n2 procs"
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
          "id": "499d8aa34367a72a3e2c76087839b707cb2c4b40",
          "message": "Merge pull request #992 from gofiber/add-benchmarks\n\nAdd benchmarks for storage drivers",
          "timestamp": "2023-09-18T07:50:00+02:00",
          "tree_id": "e48cd5f77ddb2bb15db2169a5ed40f6c1d294a7f",
          "url": "https://github.com/gofiber/storage/commit/499d8aa34367a72a3e2c76087839b707cb2c4b40"
        },
        "date": 1695016826650,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_ArangoDB_Set - ns/op",
            "value": 536448,
            "unit": "ns/op",
            "extra": "2140 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_Set - B/op",
            "value": 15449,
            "unit": "B/op",
            "extra": "2140 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_Set - allocs/op",
            "value": 225,
            "unit": "allocs/op",
            "extra": "2140 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_Get - ns/op",
            "value": 468629,
            "unit": "ns/op",
            "extra": "2466 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_Get - B/op",
            "value": 15213,
            "unit": "B/op",
            "extra": "2466 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_Get - allocs/op",
            "value": 226,
            "unit": "allocs/op",
            "extra": "2466 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_SetAndDelete - ns/op",
            "value": 759538,
            "unit": "ns/op",
            "extra": "1516 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_SetAndDelete - B/op",
            "value": 23320,
            "unit": "B/op",
            "extra": "1516 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_SetAndDelete - allocs/op",
            "value": 340,
            "unit": "allocs/op",
            "extra": "1516 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Set - ns/op",
            "value": 2572874,
            "unit": "ns/op",
            "extra": "402 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Set - B/op",
            "value": 10286,
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
            "value": 1671369,
            "unit": "ns/op",
            "extra": "733 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Get - B/op",
            "value": 11428,
            "unit": "B/op",
            "extra": "733 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Get - allocs/op",
            "value": 203,
            "unit": "allocs/op",
            "extra": "733 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_SetAndDelete - ns/op",
            "value": 3751363,
            "unit": "ns/op",
            "extra": "289 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_SetAndDelete - B/op",
            "value": 18488,
            "unit": "B/op",
            "extra": "289 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_SetAndDelete - allocs/op",
            "value": 284,
            "unit": "allocs/op",
            "extra": "289 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Set - ns/op",
            "value": 10057,
            "unit": "ns/op",
            "extra": "122913 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Set - B/op",
            "value": 1400,
            "unit": "B/op",
            "extra": "122913 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Set - allocs/op",
            "value": 38,
            "unit": "allocs/op",
            "extra": "122913 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Get - ns/op",
            "value": 1990,
            "unit": "ns/op",
            "extra": "783705 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Get - B/op",
            "value": 416,
            "unit": "B/op",
            "extra": "783705 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Get - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "783705 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - ns/op",
            "value": 20384,
            "unit": "ns/op",
            "extra": "55783 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - B/op",
            "value": 2785,
            "unit": "B/op",
            "extra": "55783 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "55783 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Set - ns/op",
            "value": 308186,
            "unit": "ns/op",
            "extra": "4744 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Set - B/op",
            "value": 6275,
            "unit": "B/op",
            "extra": "4744 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "4744 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Get - ns/op",
            "value": 818.1,
            "unit": "ns/op",
            "extra": "1349402 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Get - B/op",
            "value": 480,
            "unit": "B/op",
            "extra": "1349402 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Get - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1349402 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_SetAndDelete - ns/op",
            "value": 621027,
            "unit": "ns/op",
            "extra": "2336 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_SetAndDelete - B/op",
            "value": 12527,
            "unit": "B/op",
            "extra": "2336 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_SetAndDelete - allocs/op",
            "value": 84,
            "unit": "allocs/op",
            "extra": "2336 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Set - ns/op",
            "value": 2046116,
            "unit": "ns/op",
            "extra": "500 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Set - B/op",
            "value": 6592,
            "unit": "B/op",
            "extra": "500 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Set - allocs/op",
            "value": 118,
            "unit": "allocs/op",
            "extra": "500 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Get - ns/op",
            "value": 1451729,
            "unit": "ns/op",
            "extra": "793 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Get - B/op",
            "value": 6523,
            "unit": "B/op",
            "extra": "793 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Get - allocs/op",
            "value": 113,
            "unit": "allocs/op",
            "extra": "793 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_SetAndDelete - ns/op",
            "value": 3627713,
            "unit": "ns/op",
            "extra": "489 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_SetAndDelete - B/op",
            "value": 12905,
            "unit": "B/op",
            "extra": "489 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_SetAndDelete - allocs/op",
            "value": 226,
            "unit": "allocs/op",
            "extra": "489 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - ns/op",
            "value": 153924,
            "unit": "ns/op",
            "extra": "7281 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - B/op",
            "value": 6580,
            "unit": "B/op",
            "extra": "7281 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - allocs/op",
            "value": 64,
            "unit": "allocs/op",
            "extra": "7281 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - ns/op",
            "value": 132734,
            "unit": "ns/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - B/op",
            "value": 3367,
            "unit": "B/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - ns/op",
            "value": 297665,
            "unit": "ns/op",
            "extra": "3711 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - B/op",
            "value": 7337,
            "unit": "B/op",
            "extra": "3711 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "3711 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 784779,
            "unit": "ns/op",
            "extra": "1428 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 24206,
            "unit": "B/op",
            "extra": "1428 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 335,
            "unit": "allocs/op",
            "extra": "1428 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 670800,
            "unit": "ns/op",
            "extra": "1662 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 26047,
            "unit": "B/op",
            "extra": "1662 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 363,
            "unit": "allocs/op",
            "extra": "1662 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 1640930,
            "unit": "ns/op",
            "extra": "667 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 48303,
            "unit": "B/op",
            "extra": "667 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "667 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Set - ns/op",
            "value": 1109418,
            "unit": "ns/op",
            "extra": "1012 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Set - B/op",
            "value": 13558,
            "unit": "B/op",
            "extra": "1012 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Set - allocs/op",
            "value": 237,
            "unit": "allocs/op",
            "extra": "1012 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Get - ns/op",
            "value": 282427,
            "unit": "ns/op",
            "extra": "4936 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Get - B/op",
            "value": 7426,
            "unit": "B/op",
            "extra": "4936 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Get - allocs/op",
            "value": 125,
            "unit": "allocs/op",
            "extra": "4936 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_SetAndDelete - ns/op",
            "value": 1716018,
            "unit": "ns/op",
            "extra": "606 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_SetAndDelete - B/op",
            "value": 20608,
            "unit": "B/op",
            "extra": "606 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_SetAndDelete - allocs/op",
            "value": 353,
            "unit": "allocs/op",
            "extra": "606 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Set - ns/op",
            "value": 85491,
            "unit": "ns/op",
            "extra": "14872 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Set - B/op",
            "value": 35,
            "unit": "B/op",
            "extra": "14872 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Set - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "14872 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Get - ns/op",
            "value": 99875,
            "unit": "ns/op",
            "extra": "13044 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Get - B/op",
            "value": 200,
            "unit": "B/op",
            "extra": "13044 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Get - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "13044 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_SetAndDelete - ns/op",
            "value": 163887,
            "unit": "ns/op",
            "extra": "6564 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_SetAndDelete - B/op",
            "value": 51,
            "unit": "B/op",
            "extra": "6564 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_SetAndDelete - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6564 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Set - ns/op",
            "value": 61.96,
            "unit": "ns/op",
            "extra": "19684754 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Set - B/op",
            "value": 3,
            "unit": "B/op",
            "extra": "19684754 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Set - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "19684754 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Get - ns/op",
            "value": 21.97,
            "unit": "ns/op",
            "extra": "54905438 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Get - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "54905438 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Get - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "54905438 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_SetAndDelete - ns/op",
            "value": 121,
            "unit": "ns/op",
            "extra": "9587738 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_SetAndDelete - B/op",
            "value": 3,
            "unit": "B/op",
            "extra": "9587738 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_SetAndDelete - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "9587738 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber - ns/op",
            "value": 0.4329,
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
            "value": 56.48,
            "unit": "ns/op",
            "extra": "21699266 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "21699266 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "21699266 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Set - ns/op",
            "value": 1976728,
            "unit": "ns/op",
            "extra": "720 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Set - B/op",
            "value": 86211,
            "unit": "B/op",
            "extra": "720 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Set - allocs/op",
            "value": 295,
            "unit": "allocs/op",
            "extra": "720 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Get - ns/op",
            "value": 813515,
            "unit": "ns/op",
            "extra": "1486 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Get - B/op",
            "value": 15559,
            "unit": "B/op",
            "extra": "1486 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Get - allocs/op",
            "value": 201,
            "unit": "allocs/op",
            "extra": "1486 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_SetAndDelete - ns/op",
            "value": 2808964,
            "unit": "ns/op",
            "extra": "410 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_SetAndDelete - B/op",
            "value": 97595,
            "unit": "B/op",
            "extra": "410 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_SetAndDelete - allocs/op",
            "value": 463,
            "unit": "allocs/op",
            "extra": "410 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - ns/op",
            "value": 386632,
            "unit": "ns/op",
            "extra": "3730 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - B/op",
            "value": 6664,
            "unit": "B/op",
            "extra": "3730 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - allocs/op",
            "value": 100,
            "unit": "allocs/op",
            "extra": "3730 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - ns/op",
            "value": 292652,
            "unit": "ns/op",
            "extra": "4166 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - B/op",
            "value": 7471,
            "unit": "B/op",
            "extra": "4166 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "4166 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - ns/op",
            "value": 739960,
            "unit": "ns/op",
            "extra": "1701 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - B/op",
            "value": 11874,
            "unit": "B/op",
            "extra": "1701 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - allocs/op",
            "value": 172,
            "unit": "allocs/op",
            "extra": "1701 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Set - ns/op",
            "value": 3533500,
            "unit": "ns/op",
            "extra": "410 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Set - B/op",
            "value": 15048,
            "unit": "B/op",
            "extra": "410 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Set - allocs/op",
            "value": 281,
            "unit": "allocs/op",
            "extra": "410 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Get - ns/op",
            "value": 2577441,
            "unit": "ns/op",
            "extra": "398 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Get - B/op",
            "value": 14736,
            "unit": "B/op",
            "extra": "398 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Get - allocs/op",
            "value": 282,
            "unit": "allocs/op",
            "extra": "398 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_SetAndDelete - ns/op",
            "value": 6559735,
            "unit": "ns/op",
            "extra": "175 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_SetAndDelete - B/op",
            "value": 26663,
            "unit": "B/op",
            "extra": "175 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_SetAndDelete - allocs/op",
            "value": 532,
            "unit": "allocs/op",
            "extra": "175 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - ns/op",
            "value": 920182,
            "unit": "ns/op",
            "extra": "1359 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - B/op",
            "value": 6571,
            "unit": "B/op",
            "extra": "1359 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - allocs/op",
            "value": 40,
            "unit": "allocs/op",
            "extra": "1359 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - ns/op",
            "value": 942977,
            "unit": "ns/op",
            "extra": "1261 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - B/op",
            "value": 6608,
            "unit": "B/op",
            "extra": "1261 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - allocs/op",
            "value": 50,
            "unit": "allocs/op",
            "extra": "1261 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - ns/op",
            "value": 3735410,
            "unit": "ns/op",
            "extra": "313 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - B/op",
            "value": 12643,
            "unit": "B/op",
            "extra": "313 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - allocs/op",
            "value": 77,
            "unit": "allocs/op",
            "extra": "313 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Set - ns/op",
            "value": 443188,
            "unit": "ns/op",
            "extra": "2920 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Set - B/op",
            "value": 140,
            "unit": "B/op",
            "extra": "2920 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Set - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "2920 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Get - ns/op",
            "value": 2083,
            "unit": "ns/op",
            "extra": "593154 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Get - B/op",
            "value": 288,
            "unit": "B/op",
            "extra": "593154 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Get - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "593154 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_SetAndDelete - ns/op",
            "value": 915902,
            "unit": "ns/op",
            "extra": "1260 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_SetAndDelete - B/op",
            "value": 132,
            "unit": "B/op",
            "extra": "1260 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_SetAndDelete - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1260 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - ns/op",
            "value": 312088,
            "unit": "ns/op",
            "extra": "3390 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - B/op",
            "value": 255,
            "unit": "B/op",
            "extra": "3390 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "3390 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - ns/op",
            "value": 128365,
            "unit": "ns/op",
            "extra": "9662 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - B/op",
            "value": 522,
            "unit": "B/op",
            "extra": "9662 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "9662 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - ns/op",
            "value": 631347,
            "unit": "ns/op",
            "extra": "1866 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - B/op",
            "value": 399,
            "unit": "B/op",
            "extra": "1866 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "1866 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Set - ns/op",
            "value": 29458,
            "unit": "ns/op",
            "extra": "35185 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Set - B/op",
            "value": 268,
            "unit": "B/op",
            "extra": "35185 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Set - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "35185 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Get - ns/op",
            "value": 38020,
            "unit": "ns/op",
            "extra": "33075 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Get - B/op",
            "value": 200,
            "unit": "B/op",
            "extra": "33075 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Get - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "33075 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_SetAndDelete - ns/op",
            "value": 84207,
            "unit": "ns/op",
            "extra": "16245 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_SetAndDelete - B/op",
            "value": 456,
            "unit": "B/op",
            "extra": "16245 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_SetAndDelete - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "16245 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Set - ns/op",
            "value": 544.4,
            "unit": "ns/op",
            "extra": "2182174 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Set - B/op",
            "value": 123,
            "unit": "B/op",
            "extra": "2182174 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Set - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "2182174 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Get - ns/op",
            "value": 114.7,
            "unit": "ns/op",
            "extra": "10202409 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Get - B/op",
            "value": 19,
            "unit": "B/op",
            "extra": "10202409 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Get - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10202409 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_SetAndDelete - ns/op",
            "value": 1008,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_SetAndDelete - B/op",
            "value": 219,
            "unit": "B/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_SetAndDelete - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - ns/op",
            "value": 45255,
            "unit": "ns/op",
            "extra": "26884 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - B/op",
            "value": 30,
            "unit": "B/op",
            "extra": "26884 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "26884 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - ns/op",
            "value": 51284,
            "unit": "ns/op",
            "extra": "22057 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - B/op",
            "value": 568,
            "unit": "B/op",
            "extra": "22057 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "22057 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - ns/op",
            "value": 90934,
            "unit": "ns/op",
            "extra": "14032 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - B/op",
            "value": 30,
            "unit": "B/op",
            "extra": "14032 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "14032 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 1894482,
            "unit": "ns/op",
            "extra": "590 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 60906,
            "unit": "B/op",
            "extra": "590 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 529,
            "unit": "allocs/op",
            "extra": "590 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 930725,
            "unit": "ns/op",
            "extra": "1215 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 60190,
            "unit": "B/op",
            "extra": "1215 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "1215 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2955905,
            "unit": "ns/op",
            "extra": "376 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 83156,
            "unit": "B/op",
            "extra": "376 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 871,
            "unit": "allocs/op",
            "extra": "376 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Set - ns/op",
            "value": 1040333,
            "unit": "ns/op",
            "extra": "1148 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Set - B/op",
            "value": 625,
            "unit": "B/op",
            "extra": "1148 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Set - allocs/op",
            "value": 24,
            "unit": "allocs/op",
            "extra": "1148 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Get - ns/op",
            "value": 19596,
            "unit": "ns/op",
            "extra": "58281 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Get - B/op",
            "value": 856,
            "unit": "B/op",
            "extra": "58281 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Get - allocs/op",
            "value": 45,
            "unit": "allocs/op",
            "extra": "58281 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_SetAndDelete - ns/op",
            "value": 1944547,
            "unit": "ns/op",
            "extra": "622 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_SetAndDelete - B/op",
            "value": 965,
            "unit": "B/op",
            "extra": "622 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_SetAndDelete - allocs/op",
            "value": 43,
            "unit": "allocs/op",
            "extra": "622 times\n2 procs"
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
          "id": "4b59c5aa07cb3ed0be16cf2726f93e4925938498",
          "message": "Merge pull request #994 from gofiber/dependabot/go_modules/rueidis/github.com/redis/rueidis-1.0.18\n\nBump github.com/redis/rueidis from 1.0.17 to 1.0.18 in /rueidis",
          "timestamp": "2023-09-18T09:19:01+02:00",
          "tree_id": "c81baf6b22f045a7e329b7e8498f7abf2cc64ff5",
          "url": "https://github.com/gofiber/storage/commit/4b59c5aa07cb3ed0be16cf2726f93e4925938498"
        },
        "date": 1695022268736,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_ArangoDB_Set - ns/op",
            "value": 1180477,
            "unit": "ns/op",
            "extra": "1057 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_Set - B/op",
            "value": 15453,
            "unit": "B/op",
            "extra": "1057 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_Set - allocs/op",
            "value": 225,
            "unit": "allocs/op",
            "extra": "1057 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_Get - ns/op",
            "value": 1173656,
            "unit": "ns/op",
            "extra": "994 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_Get - B/op",
            "value": 15190,
            "unit": "B/op",
            "extra": "994 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_Get - allocs/op",
            "value": 226,
            "unit": "allocs/op",
            "extra": "994 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_SetAndDelete - ns/op",
            "value": 1605790,
            "unit": "ns/op",
            "extra": "711 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_SetAndDelete - B/op",
            "value": 23363,
            "unit": "B/op",
            "extra": "711 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_SetAndDelete - allocs/op",
            "value": 341,
            "unit": "allocs/op",
            "extra": "711 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Set - ns/op",
            "value": 4910442,
            "unit": "ns/op",
            "extra": "247 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Set - B/op",
            "value": 10297,
            "unit": "B/op",
            "extra": "247 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Set - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "247 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Get - ns/op",
            "value": 2877040,
            "unit": "ns/op",
            "extra": "363 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Get - B/op",
            "value": 11425,
            "unit": "B/op",
            "extra": "363 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Get - allocs/op",
            "value": 203,
            "unit": "allocs/op",
            "extra": "363 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_SetAndDelete - ns/op",
            "value": 6706203,
            "unit": "ns/op",
            "extra": "169 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_SetAndDelete - B/op",
            "value": 18481,
            "unit": "B/op",
            "extra": "169 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_SetAndDelete - allocs/op",
            "value": 284,
            "unit": "allocs/op",
            "extra": "169 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Set - ns/op",
            "value": 15074,
            "unit": "ns/op",
            "extra": "78346 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Set - B/op",
            "value": 1400,
            "unit": "B/op",
            "extra": "78346 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Set - allocs/op",
            "value": 38,
            "unit": "allocs/op",
            "extra": "78346 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Get - ns/op",
            "value": 2028,
            "unit": "ns/op",
            "extra": "562195 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Get - B/op",
            "value": 416,
            "unit": "B/op",
            "extra": "562195 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Get - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "562195 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - ns/op",
            "value": 28970,
            "unit": "ns/op",
            "extra": "38197 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - B/op",
            "value": 2787,
            "unit": "B/op",
            "extra": "38197 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - allocs/op",
            "value": 77,
            "unit": "allocs/op",
            "extra": "38197 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Set - ns/op",
            "value": 651413,
            "unit": "ns/op",
            "extra": "2239 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Set - B/op",
            "value": 6279,
            "unit": "B/op",
            "extra": "2239 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "2239 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Get - ns/op",
            "value": 1082,
            "unit": "ns/op",
            "extra": "943718 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Get - B/op",
            "value": 480,
            "unit": "B/op",
            "extra": "943718 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Get - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "943718 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_SetAndDelete - ns/op",
            "value": 1268465,
            "unit": "ns/op",
            "extra": "976 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_SetAndDelete - B/op",
            "value": 12530,
            "unit": "B/op",
            "extra": "976 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_SetAndDelete - allocs/op",
            "value": 84,
            "unit": "allocs/op",
            "extra": "976 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Set - ns/op",
            "value": 3901418,
            "unit": "ns/op",
            "extra": "258 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Set - B/op",
            "value": 6605,
            "unit": "B/op",
            "extra": "258 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Set - allocs/op",
            "value": 118,
            "unit": "allocs/op",
            "extra": "258 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Get - ns/op",
            "value": 3271644,
            "unit": "ns/op",
            "extra": "385 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Get - B/op",
            "value": 6522,
            "unit": "B/op",
            "extra": "385 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Get - allocs/op",
            "value": 113,
            "unit": "allocs/op",
            "extra": "385 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_SetAndDelete - ns/op",
            "value": 12466969,
            "unit": "ns/op",
            "extra": "112 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_SetAndDelete - B/op",
            "value": 12897,
            "unit": "B/op",
            "extra": "112 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_SetAndDelete - allocs/op",
            "value": 226,
            "unit": "allocs/op",
            "extra": "112 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - ns/op",
            "value": 430847,
            "unit": "ns/op",
            "extra": "3352 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - B/op",
            "value": 10036,
            "unit": "B/op",
            "extra": "3352 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - allocs/op",
            "value": 65,
            "unit": "allocs/op",
            "extra": "3352 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - ns/op",
            "value": 338540,
            "unit": "ns/op",
            "extra": "3866 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - B/op",
            "value": 3320,
            "unit": "B/op",
            "extra": "3866 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - allocs/op",
            "value": 60,
            "unit": "allocs/op",
            "extra": "3866 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - ns/op",
            "value": 740901,
            "unit": "ns/op",
            "extra": "1509 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - B/op",
            "value": 7352,
            "unit": "B/op",
            "extra": "1509 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "1509 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 1886174,
            "unit": "ns/op",
            "extra": "559 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 24208,
            "unit": "B/op",
            "extra": "559 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 335,
            "unit": "allocs/op",
            "extra": "559 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1434923,
            "unit": "ns/op",
            "extra": "894 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 26047,
            "unit": "B/op",
            "extra": "894 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 363,
            "unit": "allocs/op",
            "extra": "894 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 3278122,
            "unit": "ns/op",
            "extra": "342 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 48301,
            "unit": "B/op",
            "extra": "342 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "342 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Set - ns/op",
            "value": 2352358,
            "unit": "ns/op",
            "extra": "612 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Set - B/op",
            "value": 13562,
            "unit": "B/op",
            "extra": "612 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Set - allocs/op",
            "value": 237,
            "unit": "allocs/op",
            "extra": "612 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Get - ns/op",
            "value": 688047,
            "unit": "ns/op",
            "extra": "2092 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Get - B/op",
            "value": 7425,
            "unit": "B/op",
            "extra": "2092 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Get - allocs/op",
            "value": 125,
            "unit": "allocs/op",
            "extra": "2092 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_SetAndDelete - ns/op",
            "value": 3705454,
            "unit": "ns/op",
            "extra": "337 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_SetAndDelete - B/op",
            "value": 20605,
            "unit": "B/op",
            "extra": "337 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_SetAndDelete - allocs/op",
            "value": 353,
            "unit": "allocs/op",
            "extra": "337 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Set - ns/op",
            "value": 215182,
            "unit": "ns/op",
            "extra": "6140 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Set - B/op",
            "value": 35,
            "unit": "B/op",
            "extra": "6140 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Set - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "6140 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Get - ns/op",
            "value": 219015,
            "unit": "ns/op",
            "extra": "5551 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Get - B/op",
            "value": 200,
            "unit": "B/op",
            "extra": "5551 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Get - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "5551 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_SetAndDelete - ns/op",
            "value": 428152,
            "unit": "ns/op",
            "extra": "3040 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_SetAndDelete - B/op",
            "value": 51,
            "unit": "B/op",
            "extra": "3040 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_SetAndDelete - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "3040 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Set - ns/op",
            "value": 85.24,
            "unit": "ns/op",
            "extra": "13802672 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Set - B/op",
            "value": 3,
            "unit": "B/op",
            "extra": "13802672 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Set - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "13802672 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Get - ns/op",
            "value": 29.3,
            "unit": "ns/op",
            "extra": "43964758 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Get - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43964758 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Get - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43964758 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_SetAndDelete - ns/op",
            "value": 156.9,
            "unit": "ns/op",
            "extra": "7967133 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_SetAndDelete - B/op",
            "value": 3,
            "unit": "B/op",
            "extra": "7967133 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_SetAndDelete - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "7967133 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber - ns/op",
            "value": 0.5646,
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
            "value": 71.49,
            "unit": "ns/op",
            "extra": "14288474 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14288474 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14288474 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Set - ns/op",
            "value": 3447067,
            "unit": "ns/op",
            "extra": "374 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Set - B/op",
            "value": 86221,
            "unit": "B/op",
            "extra": "374 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Set - allocs/op",
            "value": 295,
            "unit": "allocs/op",
            "extra": "374 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Get - ns/op",
            "value": 1859664,
            "unit": "ns/op",
            "extra": "814 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Get - B/op",
            "value": 15564,
            "unit": "B/op",
            "extra": "814 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Get - allocs/op",
            "value": 201,
            "unit": "allocs/op",
            "extra": "814 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_SetAndDelete - ns/op",
            "value": 5334372,
            "unit": "ns/op",
            "extra": "216 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_SetAndDelete - B/op",
            "value": 97640,
            "unit": "B/op",
            "extra": "216 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_SetAndDelete - allocs/op",
            "value": 463,
            "unit": "allocs/op",
            "extra": "216 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - ns/op",
            "value": 676640,
            "unit": "ns/op",
            "extra": "1770 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - B/op",
            "value": 6664,
            "unit": "B/op",
            "extra": "1770 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - allocs/op",
            "value": 100,
            "unit": "allocs/op",
            "extra": "1770 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - ns/op",
            "value": 633597,
            "unit": "ns/op",
            "extra": "2194 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - B/op",
            "value": 7454,
            "unit": "B/op",
            "extra": "2194 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "2194 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - ns/op",
            "value": 1501458,
            "unit": "ns/op",
            "extra": "700 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - B/op",
            "value": 11882,
            "unit": "B/op",
            "extra": "700 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - allocs/op",
            "value": 172,
            "unit": "allocs/op",
            "extra": "700 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Set - ns/op",
            "value": 5478858,
            "unit": "ns/op",
            "extra": "190 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Set - B/op",
            "value": 15364,
            "unit": "B/op",
            "extra": "190 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Set - allocs/op",
            "value": 281,
            "unit": "allocs/op",
            "extra": "190 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Get - ns/op",
            "value": 3910679,
            "unit": "ns/op",
            "extra": "301 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Get - B/op",
            "value": 14741,
            "unit": "B/op",
            "extra": "301 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Get - allocs/op",
            "value": 282,
            "unit": "allocs/op",
            "extra": "301 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_SetAndDelete - ns/op",
            "value": 10889537,
            "unit": "ns/op",
            "extra": "102 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_SetAndDelete - B/op",
            "value": 26664,
            "unit": "B/op",
            "extra": "102 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_SetAndDelete - allocs/op",
            "value": 532,
            "unit": "allocs/op",
            "extra": "102 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - ns/op",
            "value": 1907429,
            "unit": "ns/op",
            "extra": "643 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - B/op",
            "value": 6572,
            "unit": "B/op",
            "extra": "643 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - allocs/op",
            "value": 40,
            "unit": "allocs/op",
            "extra": "643 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - ns/op",
            "value": 2085720,
            "unit": "ns/op",
            "extra": "544 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - B/op",
            "value": 6623,
            "unit": "B/op",
            "extra": "544 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - allocs/op",
            "value": 50,
            "unit": "allocs/op",
            "extra": "544 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - ns/op",
            "value": 8279507,
            "unit": "ns/op",
            "extra": "145 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - B/op",
            "value": 12668,
            "unit": "B/op",
            "extra": "145 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - allocs/op",
            "value": 77,
            "unit": "allocs/op",
            "extra": "145 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Set - ns/op",
            "value": 1057454,
            "unit": "ns/op",
            "extra": "1243 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Set - B/op",
            "value": 133,
            "unit": "B/op",
            "extra": "1243 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Set - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1243 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Get - ns/op",
            "value": 2637,
            "unit": "ns/op",
            "extra": "409360 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Get - B/op",
            "value": 288,
            "unit": "B/op",
            "extra": "409360 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Get - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "409360 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_SetAndDelete - ns/op",
            "value": 1902214,
            "unit": "ns/op",
            "extra": "625 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_SetAndDelete - B/op",
            "value": 100,
            "unit": "B/op",
            "extra": "625 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_SetAndDelete - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "625 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - ns/op",
            "value": 776059,
            "unit": "ns/op",
            "extra": "1700 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - B/op",
            "value": 255,
            "unit": "B/op",
            "extra": "1700 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1700 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - ns/op",
            "value": 296762,
            "unit": "ns/op",
            "extra": "3714 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - B/op",
            "value": 521,
            "unit": "B/op",
            "extra": "3714 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "3714 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - ns/op",
            "value": 1443150,
            "unit": "ns/op",
            "extra": "861 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - B/op",
            "value": 398,
            "unit": "B/op",
            "extra": "861 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "861 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Set - ns/op",
            "value": 99790,
            "unit": "ns/op",
            "extra": "12226 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Set - B/op",
            "value": 268,
            "unit": "B/op",
            "extra": "12226 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Set - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "12226 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Get - ns/op",
            "value": 97171,
            "unit": "ns/op",
            "extra": "12187 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Get - B/op",
            "value": 200,
            "unit": "B/op",
            "extra": "12187 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Get - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "12187 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_SetAndDelete - ns/op",
            "value": 194467,
            "unit": "ns/op",
            "extra": "6978 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_SetAndDelete - B/op",
            "value": 456,
            "unit": "B/op",
            "extra": "6978 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_SetAndDelete - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "6978 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Set - ns/op",
            "value": 1046,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Set - B/op",
            "value": 123,
            "unit": "B/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Set - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Get - ns/op",
            "value": 188.4,
            "unit": "ns/op",
            "extra": "6136500 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Get - B/op",
            "value": 20,
            "unit": "B/op",
            "extra": "6136500 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Get - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "6136500 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_SetAndDelete - ns/op",
            "value": 1507,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_SetAndDelete - B/op",
            "value": 219,
            "unit": "B/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_SetAndDelete - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - ns/op",
            "value": 110845,
            "unit": "ns/op",
            "extra": "10824 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - B/op",
            "value": 30,
            "unit": "B/op",
            "extra": "10824 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "10824 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - ns/op",
            "value": 132927,
            "unit": "ns/op",
            "extra": "8504 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - B/op",
            "value": 568,
            "unit": "B/op",
            "extra": "8504 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "8504 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - ns/op",
            "value": 205835,
            "unit": "ns/op",
            "extra": "5695 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - B/op",
            "value": 30,
            "unit": "B/op",
            "extra": "5695 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "5695 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 3348348,
            "unit": "ns/op",
            "extra": "366 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 60900,
            "unit": "B/op",
            "extra": "366 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 529,
            "unit": "allocs/op",
            "extra": "366 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 1655266,
            "unit": "ns/op",
            "extra": "843 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 60193,
            "unit": "B/op",
            "extra": "843 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "843 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 4953835,
            "unit": "ns/op",
            "extra": "237 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 83118,
            "unit": "B/op",
            "extra": "237 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 871,
            "unit": "allocs/op",
            "extra": "237 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Set - ns/op",
            "value": 2353885,
            "unit": "ns/op",
            "extra": "506 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Set - B/op",
            "value": 628,
            "unit": "B/op",
            "extra": "506 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Set - allocs/op",
            "value": 24,
            "unit": "allocs/op",
            "extra": "506 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Get - ns/op",
            "value": 35359,
            "unit": "ns/op",
            "extra": "36199 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Get - B/op",
            "value": 856,
            "unit": "B/op",
            "extra": "36199 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Get - allocs/op",
            "value": 45,
            "unit": "allocs/op",
            "extra": "36199 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_SetAndDelete - ns/op",
            "value": 4238426,
            "unit": "ns/op",
            "extra": "266 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_SetAndDelete - B/op",
            "value": 967,
            "unit": "B/op",
            "extra": "266 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_SetAndDelete - allocs/op",
            "value": 43,
            "unit": "allocs/op",
            "extra": "266 times\n2 procs"
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
          "id": "747f025819e85446afb718e21e8f4cf0cca2052e",
          "message": "Merge pull request #996 from gofiber/dependabot/go_modules/redis/github.com/redis/go-redis/v9-9.2.0\n\nBump github.com/redis/go-redis/v9 from 9.1.0 to 9.2.0 in /redis",
          "timestamp": "2023-09-21T09:44:24+02:00",
          "tree_id": "56cf5c6009c96324659d91a02a5104110bafe8d6",
          "url": "https://github.com/gofiber/storage/commit/747f025819e85446afb718e21e8f4cf0cca2052e"
        },
        "date": 1695282814115,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_ArangoDB_Set - ns/op",
            "value": 515976,
            "unit": "ns/op",
            "extra": "2078 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_Set - B/op",
            "value": 15445,
            "unit": "B/op",
            "extra": "2078 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_Set - allocs/op",
            "value": 225,
            "unit": "allocs/op",
            "extra": "2078 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_Get - ns/op",
            "value": 461601,
            "unit": "ns/op",
            "extra": "2559 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_Get - B/op",
            "value": 15192,
            "unit": "B/op",
            "extra": "2559 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_Get - allocs/op",
            "value": 226,
            "unit": "allocs/op",
            "extra": "2559 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_SetAndDelete - ns/op",
            "value": 803276,
            "unit": "ns/op",
            "extra": "1790 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_SetAndDelete - B/op",
            "value": 23305,
            "unit": "B/op",
            "extra": "1790 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_SetAndDelete - allocs/op",
            "value": 340,
            "unit": "allocs/op",
            "extra": "1790 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Set - ns/op",
            "value": 2620345,
            "unit": "ns/op",
            "extra": "452 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Set - B/op",
            "value": 10286,
            "unit": "B/op",
            "extra": "452 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Set - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "452 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Get - ns/op",
            "value": 1531815,
            "unit": "ns/op",
            "extra": "678 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Get - B/op",
            "value": 11430,
            "unit": "B/op",
            "extra": "678 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Get - allocs/op",
            "value": 203,
            "unit": "allocs/op",
            "extra": "678 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_SetAndDelete - ns/op",
            "value": 3545469,
            "unit": "ns/op",
            "extra": "303 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_SetAndDelete - B/op",
            "value": 18495,
            "unit": "B/op",
            "extra": "303 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_SetAndDelete - allocs/op",
            "value": 284,
            "unit": "allocs/op",
            "extra": "303 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Set - ns/op",
            "value": 10719,
            "unit": "ns/op",
            "extra": "122522 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Set - B/op",
            "value": 1400,
            "unit": "B/op",
            "extra": "122522 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Set - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "122522 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Get - ns/op",
            "value": 1418,
            "unit": "ns/op",
            "extra": "941793 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Get - B/op",
            "value": 416,
            "unit": "B/op",
            "extra": "941793 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Get - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "941793 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - ns/op",
            "value": 20264,
            "unit": "ns/op",
            "extra": "58422 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - B/op",
            "value": 2785,
            "unit": "B/op",
            "extra": "58422 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - allocs/op",
            "value": 77,
            "unit": "allocs/op",
            "extra": "58422 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Set - ns/op",
            "value": 359964,
            "unit": "ns/op",
            "extra": "7513 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Set - B/op",
            "value": 6275,
            "unit": "B/op",
            "extra": "7513 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "7513 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Get - ns/op",
            "value": 824.5,
            "unit": "ns/op",
            "extra": "1439068 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Get - B/op",
            "value": 480,
            "unit": "B/op",
            "extra": "1439068 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Get - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1439068 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_SetAndDelete - ns/op",
            "value": 719802,
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
            "value": 1910739,
            "unit": "ns/op",
            "extra": "559 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Set - B/op",
            "value": 6580,
            "unit": "B/op",
            "extra": "559 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Set - allocs/op",
            "value": 118,
            "unit": "allocs/op",
            "extra": "559 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Get - ns/op",
            "value": 3011093,
            "unit": "ns/op",
            "extra": "561 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Get - B/op",
            "value": 6525,
            "unit": "B/op",
            "extra": "561 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Get - allocs/op",
            "value": 113,
            "unit": "allocs/op",
            "extra": "561 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_SetAndDelete - ns/op",
            "value": 2585491,
            "unit": "ns/op",
            "extra": "474 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_SetAndDelete - B/op",
            "value": 12897,
            "unit": "B/op",
            "extra": "474 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_SetAndDelete - allocs/op",
            "value": 226,
            "unit": "allocs/op",
            "extra": "474 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - ns/op",
            "value": 164364,
            "unit": "ns/op",
            "extra": "6232 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - B/op",
            "value": 7072,
            "unit": "B/op",
            "extra": "6232 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - allocs/op",
            "value": 65,
            "unit": "allocs/op",
            "extra": "6232 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - ns/op",
            "value": 141987,
            "unit": "ns/op",
            "extra": "8415 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - B/op",
            "value": 3378,
            "unit": "B/op",
            "extra": "8415 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "8415 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - ns/op",
            "value": 303342,
            "unit": "ns/op",
            "extra": "3910 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - B/op",
            "value": 7314,
            "unit": "B/op",
            "extra": "3910 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "3910 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 926507,
            "unit": "ns/op",
            "extra": "1119 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 24207,
            "unit": "B/op",
            "extra": "1119 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 335,
            "unit": "allocs/op",
            "extra": "1119 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 738441,
            "unit": "ns/op",
            "extra": "1468 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 26049,
            "unit": "B/op",
            "extra": "1468 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 363,
            "unit": "allocs/op",
            "extra": "1468 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 1683591,
            "unit": "ns/op",
            "extra": "721 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 48303,
            "unit": "B/op",
            "extra": "721 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "721 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Set - ns/op",
            "value": 1041356,
            "unit": "ns/op",
            "extra": "1184 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Set - B/op",
            "value": 13560,
            "unit": "B/op",
            "extra": "1184 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Set - allocs/op",
            "value": 237,
            "unit": "allocs/op",
            "extra": "1184 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Get - ns/op",
            "value": 305489,
            "unit": "ns/op",
            "extra": "4035 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Get - B/op",
            "value": 7425,
            "unit": "B/op",
            "extra": "4035 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Get - allocs/op",
            "value": 125,
            "unit": "allocs/op",
            "extra": "4035 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_SetAndDelete - ns/op",
            "value": 1548170,
            "unit": "ns/op",
            "extra": "686 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_SetAndDelete - B/op",
            "value": 20605,
            "unit": "B/op",
            "extra": "686 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_SetAndDelete - allocs/op",
            "value": 353,
            "unit": "allocs/op",
            "extra": "686 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Set - ns/op",
            "value": 85183,
            "unit": "ns/op",
            "extra": "13791 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Set - B/op",
            "value": 35,
            "unit": "B/op",
            "extra": "13791 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Set - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "13791 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Get - ns/op",
            "value": 84063,
            "unit": "ns/op",
            "extra": "13101 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Get - B/op",
            "value": 200,
            "unit": "B/op",
            "extra": "13101 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Get - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "13101 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_SetAndDelete - ns/op",
            "value": 167209,
            "unit": "ns/op",
            "extra": "6898 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_SetAndDelete - B/op",
            "value": 51,
            "unit": "B/op",
            "extra": "6898 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_SetAndDelete - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6898 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Set - ns/op",
            "value": 56.06,
            "unit": "ns/op",
            "extra": "21541039 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Set - B/op",
            "value": 3,
            "unit": "B/op",
            "extra": "21541039 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Set - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "21541039 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Get - ns/op",
            "value": 22.09,
            "unit": "ns/op",
            "extra": "54875982 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Get - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "54875982 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Get - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "54875982 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_SetAndDelete - ns/op",
            "value": 116.8,
            "unit": "ns/op",
            "extra": "9945326 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_SetAndDelete - B/op",
            "value": 3,
            "unit": "B/op",
            "extra": "9945326 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_SetAndDelete - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "9945326 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber - ns/op",
            "value": 0.4299,
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
            "value": 55.52,
            "unit": "ns/op",
            "extra": "21763803 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "21763803 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "21763803 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Set - ns/op",
            "value": 1668904,
            "unit": "ns/op",
            "extra": "776 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Set - B/op",
            "value": 86225,
            "unit": "B/op",
            "extra": "776 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Set - allocs/op",
            "value": 295,
            "unit": "allocs/op",
            "extra": "776 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Get - ns/op",
            "value": 767626,
            "unit": "ns/op",
            "extra": "1395 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Get - B/op",
            "value": 15560,
            "unit": "B/op",
            "extra": "1395 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Get - allocs/op",
            "value": 201,
            "unit": "allocs/op",
            "extra": "1395 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_SetAndDelete - ns/op",
            "value": 2560367,
            "unit": "ns/op",
            "extra": "516 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_SetAndDelete - B/op",
            "value": 97597,
            "unit": "B/op",
            "extra": "516 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_SetAndDelete - allocs/op",
            "value": 463,
            "unit": "allocs/op",
            "extra": "516 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - ns/op",
            "value": 363883,
            "unit": "ns/op",
            "extra": "3495 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - B/op",
            "value": 6668,
            "unit": "B/op",
            "extra": "3495 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - allocs/op",
            "value": 100,
            "unit": "allocs/op",
            "extra": "3495 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - ns/op",
            "value": 319751,
            "unit": "ns/op",
            "extra": "3829 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - B/op",
            "value": 7468,
            "unit": "B/op",
            "extra": "3829 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "3829 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - ns/op",
            "value": 916506,
            "unit": "ns/op",
            "extra": "1558 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - B/op",
            "value": 11874,
            "unit": "B/op",
            "extra": "1558 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - allocs/op",
            "value": 172,
            "unit": "allocs/op",
            "extra": "1558 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Set - ns/op",
            "value": 2771622,
            "unit": "ns/op",
            "extra": "369 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Set - B/op",
            "value": 15034,
            "unit": "B/op",
            "extra": "369 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Set - allocs/op",
            "value": 281,
            "unit": "allocs/op",
            "extra": "369 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Get - ns/op",
            "value": 2245725,
            "unit": "ns/op",
            "extra": "580 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Get - B/op",
            "value": 14849,
            "unit": "B/op",
            "extra": "580 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Get - allocs/op",
            "value": 282,
            "unit": "allocs/op",
            "extra": "580 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_SetAndDelete - ns/op",
            "value": 5994242,
            "unit": "ns/op",
            "extra": "211 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_SetAndDelete - B/op",
            "value": 26965,
            "unit": "B/op",
            "extra": "211 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_SetAndDelete - allocs/op",
            "value": 532,
            "unit": "allocs/op",
            "extra": "211 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - ns/op",
            "value": 855674,
            "unit": "ns/op",
            "extra": "1282 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - B/op",
            "value": 6583,
            "unit": "B/op",
            "extra": "1282 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - allocs/op",
            "value": 40,
            "unit": "allocs/op",
            "extra": "1282 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - ns/op",
            "value": 895157,
            "unit": "ns/op",
            "extra": "1359 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - B/op",
            "value": 6612,
            "unit": "B/op",
            "extra": "1359 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - allocs/op",
            "value": 50,
            "unit": "allocs/op",
            "extra": "1359 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - ns/op",
            "value": 3520127,
            "unit": "ns/op",
            "extra": "376 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - B/op",
            "value": 12643,
            "unit": "B/op",
            "extra": "376 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - allocs/op",
            "value": 77,
            "unit": "allocs/op",
            "extra": "376 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Set - ns/op",
            "value": 368741,
            "unit": "ns/op",
            "extra": "4093 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Set - B/op",
            "value": 139,
            "unit": "B/op",
            "extra": "4093 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Set - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "4093 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Get - ns/op",
            "value": 2121,
            "unit": "ns/op",
            "extra": "584626 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Get - B/op",
            "value": 288,
            "unit": "B/op",
            "extra": "584626 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Get - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "584626 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_SetAndDelete - ns/op",
            "value": 720729,
            "unit": "ns/op",
            "extra": "1788 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_SetAndDelete - B/op",
            "value": 99,
            "unit": "B/op",
            "extra": "1788 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_SetAndDelete - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1788 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - ns/op",
            "value": 279050,
            "unit": "ns/op",
            "extra": "4440 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - B/op",
            "value": 256,
            "unit": "B/op",
            "extra": "4440 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "4440 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - ns/op",
            "value": 132331,
            "unit": "ns/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - B/op",
            "value": 522,
            "unit": "B/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - ns/op",
            "value": 532210,
            "unit": "ns/op",
            "extra": "2031 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - B/op",
            "value": 400,
            "unit": "B/op",
            "extra": "2031 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "2031 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Set - ns/op",
            "value": 39891,
            "unit": "ns/op",
            "extra": "32696 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Set - B/op",
            "value": 268,
            "unit": "B/op",
            "extra": "32696 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Set - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "32696 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Get - ns/op",
            "value": 38345,
            "unit": "ns/op",
            "extra": "30958 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Get - B/op",
            "value": 200,
            "unit": "B/op",
            "extra": "30958 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Get - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "30958 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_SetAndDelete - ns/op",
            "value": 79360,
            "unit": "ns/op",
            "extra": "14438 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_SetAndDelete - B/op",
            "value": 456,
            "unit": "B/op",
            "extra": "14438 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_SetAndDelete - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "14438 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Set - ns/op",
            "value": 531.5,
            "unit": "ns/op",
            "extra": "2455617 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Set - B/op",
            "value": 123,
            "unit": "B/op",
            "extra": "2455617 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Set - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "2455617 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Get - ns/op",
            "value": 150,
            "unit": "ns/op",
            "extra": "10886587 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Get - B/op",
            "value": 19,
            "unit": "B/op",
            "extra": "10886587 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Get - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10886587 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_SetAndDelete - ns/op",
            "value": 1040,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_SetAndDelete - B/op",
            "value": 219,
            "unit": "B/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_SetAndDelete - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - ns/op",
            "value": 49713,
            "unit": "ns/op",
            "extra": "23426 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - B/op",
            "value": 30,
            "unit": "B/op",
            "extra": "23426 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "23426 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - ns/op",
            "value": 55126,
            "unit": "ns/op",
            "extra": "23260 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - B/op",
            "value": 568,
            "unit": "B/op",
            "extra": "23260 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "23260 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - ns/op",
            "value": 95839,
            "unit": "ns/op",
            "extra": "12800 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - B/op",
            "value": 30,
            "unit": "B/op",
            "extra": "12800 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "12800 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 1679377,
            "unit": "ns/op",
            "extra": "762 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 60903,
            "unit": "B/op",
            "extra": "762 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 529,
            "unit": "allocs/op",
            "extra": "762 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 930512,
            "unit": "ns/op",
            "extra": "1294 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 60197,
            "unit": "B/op",
            "extra": "1294 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "1294 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 2705663,
            "unit": "ns/op",
            "extra": "405 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 83191,
            "unit": "B/op",
            "extra": "405 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 871,
            "unit": "allocs/op",
            "extra": "405 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Set - ns/op",
            "value": 788286,
            "unit": "ns/op",
            "extra": "2012 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Set - B/op",
            "value": 625,
            "unit": "B/op",
            "extra": "2012 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Set - allocs/op",
            "value": 24,
            "unit": "allocs/op",
            "extra": "2012 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Get - ns/op",
            "value": 19373,
            "unit": "ns/op",
            "extra": "61393 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Get - B/op",
            "value": 856,
            "unit": "B/op",
            "extra": "61393 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Get - allocs/op",
            "value": 45,
            "unit": "allocs/op",
            "extra": "61393 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_SetAndDelete - ns/op",
            "value": 1447742,
            "unit": "ns/op",
            "extra": "960 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_SetAndDelete - B/op",
            "value": 962,
            "unit": "B/op",
            "extra": "960 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_SetAndDelete - allocs/op",
            "value": 43,
            "unit": "allocs/op",
            "extra": "960 times\n2 procs"
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
          "id": "e410768f7f97841bfa79065da8c40ccd077cb064",
          "message": "Merge pull request #997 from gofiber/dependabot/go_modules/s3/github.com/aws/aws-sdk-go-v2/service/s3-1.39.0\n\nBump github.com/aws/aws-sdk-go-v2/service/s3 from 1.38.5 to 1.39.0 in /s3",
          "timestamp": "2023-09-25T09:26:26+02:00",
          "tree_id": "5db54e143ae648477c564184ef8fb467fe47948e",
          "url": "https://github.com/gofiber/storage/commit/e410768f7f97841bfa79065da8c40ccd077cb064"
        },
        "date": 1695627375438,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_ArangoDB_Set - ns/op",
            "value": 540764,
            "unit": "ns/op",
            "extra": "2197 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_Set - B/op",
            "value": 15452,
            "unit": "B/op",
            "extra": "2197 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_Set - allocs/op",
            "value": 225,
            "unit": "allocs/op",
            "extra": "2197 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_Get - ns/op",
            "value": 442482,
            "unit": "ns/op",
            "extra": "2528 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_Get - B/op",
            "value": 15198,
            "unit": "B/op",
            "extra": "2528 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_Get - allocs/op",
            "value": 226,
            "unit": "allocs/op",
            "extra": "2528 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_SetAndDelete - ns/op",
            "value": 786261,
            "unit": "ns/op",
            "extra": "1425 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_SetAndDelete - B/op",
            "value": 23303,
            "unit": "B/op",
            "extra": "1425 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_SetAndDelete - allocs/op",
            "value": 340,
            "unit": "allocs/op",
            "extra": "1425 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Set - ns/op",
            "value": 2809083,
            "unit": "ns/op",
            "extra": "410 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Set - B/op",
            "value": 10297,
            "unit": "B/op",
            "extra": "410 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Set - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "410 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Get - ns/op",
            "value": 1530233,
            "unit": "ns/op",
            "extra": "746 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Get - B/op",
            "value": 11425,
            "unit": "B/op",
            "extra": "746 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Get - allocs/op",
            "value": 203,
            "unit": "allocs/op",
            "extra": "746 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_SetAndDelete - ns/op",
            "value": 4032525,
            "unit": "ns/op",
            "extra": "307 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_SetAndDelete - B/op",
            "value": 18491,
            "unit": "B/op",
            "extra": "307 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_SetAndDelete - allocs/op",
            "value": 284,
            "unit": "allocs/op",
            "extra": "307 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Set - ns/op",
            "value": 10279,
            "unit": "ns/op",
            "extra": "125331 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Set - B/op",
            "value": 1400,
            "unit": "B/op",
            "extra": "125331 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Set - allocs/op",
            "value": 38,
            "unit": "allocs/op",
            "extra": "125331 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Get - ns/op",
            "value": 1480,
            "unit": "ns/op",
            "extra": "855975 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Get - B/op",
            "value": 416,
            "unit": "B/op",
            "extra": "855975 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Get - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "855975 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - ns/op",
            "value": 20627,
            "unit": "ns/op",
            "extra": "64882 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - B/op",
            "value": 2785,
            "unit": "B/op",
            "extra": "64882 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - allocs/op",
            "value": 77,
            "unit": "allocs/op",
            "extra": "64882 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Set - ns/op",
            "value": 499491,
            "unit": "ns/op",
            "extra": "2104 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Set - B/op",
            "value": 6274,
            "unit": "B/op",
            "extra": "2104 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "2104 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Get - ns/op",
            "value": 798.3,
            "unit": "ns/op",
            "extra": "1480984 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Get - B/op",
            "value": 480,
            "unit": "B/op",
            "extra": "1480984 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Get - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1480984 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_SetAndDelete - ns/op",
            "value": 767680,
            "unit": "ns/op",
            "extra": "1465 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_SetAndDelete - B/op",
            "value": 12524,
            "unit": "B/op",
            "extra": "1465 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_SetAndDelete - allocs/op",
            "value": 84,
            "unit": "allocs/op",
            "extra": "1465 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Set - ns/op",
            "value": 1350545,
            "unit": "ns/op",
            "extra": "954 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Set - B/op",
            "value": 6580,
            "unit": "B/op",
            "extra": "954 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Set - allocs/op",
            "value": 118,
            "unit": "allocs/op",
            "extra": "954 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Get - ns/op",
            "value": 1751429,
            "unit": "ns/op",
            "extra": "1084 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Get - B/op",
            "value": 6522,
            "unit": "B/op",
            "extra": "1084 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Get - allocs/op",
            "value": 113,
            "unit": "allocs/op",
            "extra": "1084 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_SetAndDelete - ns/op",
            "value": 2103459,
            "unit": "ns/op",
            "extra": "532 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_SetAndDelete - B/op",
            "value": 12895,
            "unit": "B/op",
            "extra": "532 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_SetAndDelete - allocs/op",
            "value": 226,
            "unit": "allocs/op",
            "extra": "532 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - ns/op",
            "value": 154128,
            "unit": "ns/op",
            "extra": "8234 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - B/op",
            "value": 6234,
            "unit": "B/op",
            "extra": "8234 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - allocs/op",
            "value": 64,
            "unit": "allocs/op",
            "extra": "8234 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - ns/op",
            "value": 122221,
            "unit": "ns/op",
            "extra": "9110 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - B/op",
            "value": 3362,
            "unit": "B/op",
            "extra": "9110 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "9110 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - ns/op",
            "value": 306345,
            "unit": "ns/op",
            "extra": "3428 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - B/op",
            "value": 7374,
            "unit": "B/op",
            "extra": "3428 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "3428 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 775098,
            "unit": "ns/op",
            "extra": "1462 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 24206,
            "unit": "B/op",
            "extra": "1462 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 335,
            "unit": "allocs/op",
            "extra": "1462 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 656163,
            "unit": "ns/op",
            "extra": "1622 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 26057,
            "unit": "B/op",
            "extra": "1622 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 363,
            "unit": "allocs/op",
            "extra": "1622 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 1430155,
            "unit": "ns/op",
            "extra": "850 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 48303,
            "unit": "B/op",
            "extra": "850 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "850 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Set - ns/op",
            "value": 1124695,
            "unit": "ns/op",
            "extra": "1048 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Set - B/op",
            "value": 13557,
            "unit": "B/op",
            "extra": "1048 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Set - allocs/op",
            "value": 237,
            "unit": "allocs/op",
            "extra": "1048 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Get - ns/op",
            "value": 291025,
            "unit": "ns/op",
            "extra": "4435 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Get - B/op",
            "value": 7425,
            "unit": "B/op",
            "extra": "4435 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Get - allocs/op",
            "value": 125,
            "unit": "allocs/op",
            "extra": "4435 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_SetAndDelete - ns/op",
            "value": 1815335,
            "unit": "ns/op",
            "extra": "747 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_SetAndDelete - B/op",
            "value": 20610,
            "unit": "B/op",
            "extra": "747 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_SetAndDelete - allocs/op",
            "value": 353,
            "unit": "allocs/op",
            "extra": "747 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Set - ns/op",
            "value": 74553,
            "unit": "ns/op",
            "extra": "13975 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Set - B/op",
            "value": 35,
            "unit": "B/op",
            "extra": "13975 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Set - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "13975 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Get - ns/op",
            "value": 84682,
            "unit": "ns/op",
            "extra": "15286 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Get - B/op",
            "value": 200,
            "unit": "B/op",
            "extra": "15286 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Get - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "15286 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_SetAndDelete - ns/op",
            "value": 163560,
            "unit": "ns/op",
            "extra": "7552 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_SetAndDelete - B/op",
            "value": 51,
            "unit": "B/op",
            "extra": "7552 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_SetAndDelete - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7552 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Set - ns/op",
            "value": 56.87,
            "unit": "ns/op",
            "extra": "21674737 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Set - B/op",
            "value": 3,
            "unit": "B/op",
            "extra": "21674737 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Set - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "21674737 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Get - ns/op",
            "value": 21.91,
            "unit": "ns/op",
            "extra": "55060482 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Get - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "55060482 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Get - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "55060482 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_SetAndDelete - ns/op",
            "value": 115.9,
            "unit": "ns/op",
            "extra": "10529578 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_SetAndDelete - B/op",
            "value": 3,
            "unit": "B/op",
            "extra": "10529578 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_SetAndDelete - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10529578 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber - ns/op",
            "value": 0.4271,
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
            "value": 55.93,
            "unit": "ns/op",
            "extra": "21895002 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "21895002 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "21895002 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Set - ns/op",
            "value": 2328886,
            "unit": "ns/op",
            "extra": "603 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Set - B/op",
            "value": 86223,
            "unit": "B/op",
            "extra": "603 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Set - allocs/op",
            "value": 295,
            "unit": "allocs/op",
            "extra": "603 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Get - ns/op",
            "value": 855211,
            "unit": "ns/op",
            "extra": "1358 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Get - B/op",
            "value": 15561,
            "unit": "B/op",
            "extra": "1358 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Get - allocs/op",
            "value": 201,
            "unit": "allocs/op",
            "extra": "1358 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_SetAndDelete - ns/op",
            "value": 3088622,
            "unit": "ns/op",
            "extra": "456 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_SetAndDelete - B/op",
            "value": 97587,
            "unit": "B/op",
            "extra": "456 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_SetAndDelete - allocs/op",
            "value": 463,
            "unit": "allocs/op",
            "extra": "456 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - ns/op",
            "value": 355851,
            "unit": "ns/op",
            "extra": "3348 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - B/op",
            "value": 6664,
            "unit": "B/op",
            "extra": "3348 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - allocs/op",
            "value": 100,
            "unit": "allocs/op",
            "extra": "3348 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - ns/op",
            "value": 306524,
            "unit": "ns/op",
            "extra": "3352 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - B/op",
            "value": 7469,
            "unit": "B/op",
            "extra": "3352 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "3352 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - ns/op",
            "value": 734271,
            "unit": "ns/op",
            "extra": "1464 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - B/op",
            "value": 11875,
            "unit": "B/op",
            "extra": "1464 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - allocs/op",
            "value": 172,
            "unit": "allocs/op",
            "extra": "1464 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Set - ns/op",
            "value": 2922211,
            "unit": "ns/op",
            "extra": "368 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Set - B/op",
            "value": 15025,
            "unit": "B/op",
            "extra": "368 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Set - allocs/op",
            "value": 281,
            "unit": "allocs/op",
            "extra": "368 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Get - ns/op",
            "value": 2077461,
            "unit": "ns/op",
            "extra": "588 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Get - B/op",
            "value": 14850,
            "unit": "B/op",
            "extra": "588 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Get - allocs/op",
            "value": 282,
            "unit": "allocs/op",
            "extra": "588 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_SetAndDelete - ns/op",
            "value": 6184062,
            "unit": "ns/op",
            "extra": "184 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_SetAndDelete - B/op",
            "value": 27008,
            "unit": "B/op",
            "extra": "184 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_SetAndDelete - allocs/op",
            "value": 532,
            "unit": "allocs/op",
            "extra": "184 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - ns/op",
            "value": 893225,
            "unit": "ns/op",
            "extra": "1368 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - B/op",
            "value": 6582,
            "unit": "B/op",
            "extra": "1368 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - allocs/op",
            "value": 40,
            "unit": "allocs/op",
            "extra": "1368 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - ns/op",
            "value": 891039,
            "unit": "ns/op",
            "extra": "1281 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - B/op",
            "value": 6617,
            "unit": "B/op",
            "extra": "1281 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - allocs/op",
            "value": 50,
            "unit": "allocs/op",
            "extra": "1281 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - ns/op",
            "value": 4688361,
            "unit": "ns/op",
            "extra": "254 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - B/op",
            "value": 12643,
            "unit": "B/op",
            "extra": "254 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - allocs/op",
            "value": 77,
            "unit": "allocs/op",
            "extra": "254 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Set - ns/op",
            "value": 750457,
            "unit": "ns/op",
            "extra": "1848 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Set - B/op",
            "value": 123,
            "unit": "B/op",
            "extra": "1848 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Set - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1848 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Get - ns/op",
            "value": 2051,
            "unit": "ns/op",
            "extra": "590780 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Get - B/op",
            "value": 288,
            "unit": "B/op",
            "extra": "590780 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Get - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "590780 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_SetAndDelete - ns/op",
            "value": 1409868,
            "unit": "ns/op",
            "extra": "879 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_SetAndDelete - B/op",
            "value": 237,
            "unit": "B/op",
            "extra": "879 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_SetAndDelete - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "879 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - ns/op",
            "value": 399011,
            "unit": "ns/op",
            "extra": "3394 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - B/op",
            "value": 255,
            "unit": "B/op",
            "extra": "3394 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "3394 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - ns/op",
            "value": 124538,
            "unit": "ns/op",
            "extra": "8646 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - B/op",
            "value": 521,
            "unit": "B/op",
            "extra": "8646 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "8646 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - ns/op",
            "value": 854753,
            "unit": "ns/op",
            "extra": "1407 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - B/op",
            "value": 400,
            "unit": "B/op",
            "extra": "1407 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "1407 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Set - ns/op",
            "value": 39243,
            "unit": "ns/op",
            "extra": "34952 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Set - B/op",
            "value": 268,
            "unit": "B/op",
            "extra": "34952 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Set - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "34952 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Get - ns/op",
            "value": 37617,
            "unit": "ns/op",
            "extra": "30919 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Get - B/op",
            "value": 200,
            "unit": "B/op",
            "extra": "30919 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Get - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "30919 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_SetAndDelete - ns/op",
            "value": 79860,
            "unit": "ns/op",
            "extra": "16320 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_SetAndDelete - B/op",
            "value": 456,
            "unit": "B/op",
            "extra": "16320 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_SetAndDelete - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "16320 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Set - ns/op",
            "value": 531.9,
            "unit": "ns/op",
            "extra": "2094781 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Set - B/op",
            "value": 123,
            "unit": "B/op",
            "extra": "2094781 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Set - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "2094781 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Get - ns/op",
            "value": 120.8,
            "unit": "ns/op",
            "extra": "10057842 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Get - B/op",
            "value": 19,
            "unit": "B/op",
            "extra": "10057842 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Get - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10057842 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_SetAndDelete - ns/op",
            "value": 1005,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_SetAndDelete - B/op",
            "value": 219,
            "unit": "B/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_SetAndDelete - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - ns/op",
            "value": 44762,
            "unit": "ns/op",
            "extra": "26156 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - B/op",
            "value": 30,
            "unit": "B/op",
            "extra": "26156 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "26156 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - ns/op",
            "value": 51384,
            "unit": "ns/op",
            "extra": "26200 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - B/op",
            "value": 568,
            "unit": "B/op",
            "extra": "26200 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "26200 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - ns/op",
            "value": 87081,
            "unit": "ns/op",
            "extra": "13765 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - B/op",
            "value": 30,
            "unit": "B/op",
            "extra": "13765 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "13765 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2345307,
            "unit": "ns/op",
            "extra": "578 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 60904,
            "unit": "B/op",
            "extra": "578 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 529,
            "unit": "allocs/op",
            "extra": "578 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 907703,
            "unit": "ns/op",
            "extra": "1412 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 60196,
            "unit": "B/op",
            "extra": "1412 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "1412 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 3150126,
            "unit": "ns/op",
            "extra": "403 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 83084,
            "unit": "B/op",
            "extra": "403 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 871,
            "unit": "allocs/op",
            "extra": "403 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Set - ns/op",
            "value": 1285375,
            "unit": "ns/op",
            "extra": "1021 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Set - B/op",
            "value": 626,
            "unit": "B/op",
            "extra": "1021 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Set - allocs/op",
            "value": 24,
            "unit": "allocs/op",
            "extra": "1021 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Get - ns/op",
            "value": 19510,
            "unit": "ns/op",
            "extra": "58510 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Get - B/op",
            "value": 856,
            "unit": "B/op",
            "extra": "58510 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Get - allocs/op",
            "value": 45,
            "unit": "allocs/op",
            "extra": "58510 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_SetAndDelete - ns/op",
            "value": 2624328,
            "unit": "ns/op",
            "extra": "416 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_SetAndDelete - B/op",
            "value": 964,
            "unit": "B/op",
            "extra": "416 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_SetAndDelete - allocs/op",
            "value": 43,
            "unit": "allocs/op",
            "extra": "416 times\n2 procs"
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
          "id": "a0500b170a5b0b7ee603b0a0349a56de58dad84a",
          "message": "Merge pull request #999 from gofiber/dependabot/go_modules/s3/github.com/aws/aws-sdk-go-v2/config-1.18.42\n\nBump github.com/aws/aws-sdk-go-v2/config from 1.18.39 to 1.18.42 in /s3",
          "timestamp": "2023-09-25T09:28:25+02:00",
          "tree_id": "341ce17f62887412868378d4e7605b7e14682bb5",
          "url": "https://github.com/gofiber/storage/commit/a0500b170a5b0b7ee603b0a0349a56de58dad84a"
        },
        "date": 1695627521307,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_ArangoDB_Set - ns/op",
            "value": 668148,
            "unit": "ns/op",
            "extra": "1981 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_Set - B/op",
            "value": 15446,
            "unit": "B/op",
            "extra": "1981 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_Set - allocs/op",
            "value": 225,
            "unit": "allocs/op",
            "extra": "1981 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_Get - ns/op",
            "value": 528351,
            "unit": "ns/op",
            "extra": "1900 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_Get - B/op",
            "value": 15205,
            "unit": "B/op",
            "extra": "1900 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_Get - allocs/op",
            "value": 226,
            "unit": "allocs/op",
            "extra": "1900 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_SetAndDelete - ns/op",
            "value": 1078533,
            "unit": "ns/op",
            "extra": "1027 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_SetAndDelete - B/op",
            "value": 23316,
            "unit": "B/op",
            "extra": "1027 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_SetAndDelete - allocs/op",
            "value": 340,
            "unit": "allocs/op",
            "extra": "1027 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Set - ns/op",
            "value": 4122996,
            "unit": "ns/op",
            "extra": "369 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Set - B/op",
            "value": 10292,
            "unit": "B/op",
            "extra": "369 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Set - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "369 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Get - ns/op",
            "value": 1751301,
            "unit": "ns/op",
            "extra": "580 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Get - B/op",
            "value": 11422,
            "unit": "B/op",
            "extra": "580 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Get - allocs/op",
            "value": 203,
            "unit": "allocs/op",
            "extra": "580 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_SetAndDelete - ns/op",
            "value": 4533790,
            "unit": "ns/op",
            "extra": "254 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_SetAndDelete - B/op",
            "value": 18493,
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
            "value": 10108,
            "unit": "ns/op",
            "extra": "122521 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Set - B/op",
            "value": 1400,
            "unit": "B/op",
            "extra": "122521 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Set - allocs/op",
            "value": 38,
            "unit": "allocs/op",
            "extra": "122521 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Get - ns/op",
            "value": 1346,
            "unit": "ns/op",
            "extra": "941155 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Get - B/op",
            "value": 416,
            "unit": "B/op",
            "extra": "941155 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Get - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "941155 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - ns/op",
            "value": 20906,
            "unit": "ns/op",
            "extra": "58552 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - B/op",
            "value": 2785,
            "unit": "B/op",
            "extra": "58552 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "58552 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Set - ns/op",
            "value": 426289,
            "unit": "ns/op",
            "extra": "2728 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Set - B/op",
            "value": 6274,
            "unit": "B/op",
            "extra": "2728 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "2728 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Get - ns/op",
            "value": 800.4,
            "unit": "ns/op",
            "extra": "1413513 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Get - B/op",
            "value": 480,
            "unit": "B/op",
            "extra": "1413513 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Get - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1413513 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_SetAndDelete - ns/op",
            "value": 1036589,
            "unit": "ns/op",
            "extra": "1106 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_SetAndDelete - B/op",
            "value": 12533,
            "unit": "B/op",
            "extra": "1106 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_SetAndDelete - allocs/op",
            "value": 84,
            "unit": "allocs/op",
            "extra": "1106 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Set - ns/op",
            "value": 2469574,
            "unit": "ns/op",
            "extra": "416 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Set - B/op",
            "value": 6593,
            "unit": "B/op",
            "extra": "416 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Set - allocs/op",
            "value": 118,
            "unit": "allocs/op",
            "extra": "416 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Get - ns/op",
            "value": 1762829,
            "unit": "ns/op",
            "extra": "724 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Get - B/op",
            "value": 6523,
            "unit": "B/op",
            "extra": "724 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Get - allocs/op",
            "value": 113,
            "unit": "allocs/op",
            "extra": "724 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_SetAndDelete - ns/op",
            "value": 3408012,
            "unit": "ns/op",
            "extra": "362 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_SetAndDelete - B/op",
            "value": 12895,
            "unit": "B/op",
            "extra": "362 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_SetAndDelete - allocs/op",
            "value": 226,
            "unit": "allocs/op",
            "extra": "362 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - ns/op",
            "value": 189675,
            "unit": "ns/op",
            "extra": "6458 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - B/op",
            "value": 6958,
            "unit": "B/op",
            "extra": "6458 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - allocs/op",
            "value": 65,
            "unit": "allocs/op",
            "extra": "6458 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - ns/op",
            "value": 140852,
            "unit": "ns/op",
            "extra": "8092 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - B/op",
            "value": 3311,
            "unit": "B/op",
            "extra": "8092 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - allocs/op",
            "value": 60,
            "unit": "allocs/op",
            "extra": "8092 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - ns/op",
            "value": 369242,
            "unit": "ns/op",
            "extra": "3156 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - B/op",
            "value": 14063,
            "unit": "B/op",
            "extra": "3156 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "3156 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 1472048,
            "unit": "ns/op",
            "extra": "795 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 24206,
            "unit": "B/op",
            "extra": "795 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 335,
            "unit": "allocs/op",
            "extra": "795 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 754687,
            "unit": "ns/op",
            "extra": "1598 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 26048,
            "unit": "B/op",
            "extra": "1598 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 363,
            "unit": "allocs/op",
            "extra": "1598 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 1715437,
            "unit": "ns/op",
            "extra": "684 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 48301,
            "unit": "B/op",
            "extra": "684 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "684 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Set - ns/op",
            "value": 1426137,
            "unit": "ns/op",
            "extra": "824 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Set - B/op",
            "value": 13559,
            "unit": "B/op",
            "extra": "824 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Set - allocs/op",
            "value": 237,
            "unit": "allocs/op",
            "extra": "824 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Get - ns/op",
            "value": 330285,
            "unit": "ns/op",
            "extra": "3819 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Get - B/op",
            "value": 7425,
            "unit": "B/op",
            "extra": "3819 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Get - allocs/op",
            "value": 125,
            "unit": "allocs/op",
            "extra": "3819 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_SetAndDelete - ns/op",
            "value": 1962260,
            "unit": "ns/op",
            "extra": "547 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_SetAndDelete - B/op",
            "value": 20606,
            "unit": "B/op",
            "extra": "547 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_SetAndDelete - allocs/op",
            "value": 353,
            "unit": "allocs/op",
            "extra": "547 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Set - ns/op",
            "value": 109073,
            "unit": "ns/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Set - B/op",
            "value": 35,
            "unit": "B/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Set - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Get - ns/op",
            "value": 112082,
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
            "value": 183135,
            "unit": "ns/op",
            "extra": "5936 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_SetAndDelete - B/op",
            "value": 51,
            "unit": "B/op",
            "extra": "5936 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_SetAndDelete - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5936 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Set - ns/op",
            "value": 64.75,
            "unit": "ns/op",
            "extra": "18998077 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Set - B/op",
            "value": 3,
            "unit": "B/op",
            "extra": "18998077 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Set - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "18998077 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Get - ns/op",
            "value": 22.61,
            "unit": "ns/op",
            "extra": "52954185 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Get - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "52954185 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Get - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "52954185 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_SetAndDelete - ns/op",
            "value": 116.9,
            "unit": "ns/op",
            "extra": "10371163 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_SetAndDelete - B/op",
            "value": 3,
            "unit": "B/op",
            "extra": "10371163 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_SetAndDelete - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10371163 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber - ns/op",
            "value": 0.3744,
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
            "value": 56.64,
            "unit": "ns/op",
            "extra": "21047036 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "21047036 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "21047036 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Set - ns/op",
            "value": 2158203,
            "unit": "ns/op",
            "extra": "579 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Set - B/op",
            "value": 86221,
            "unit": "B/op",
            "extra": "579 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Set - allocs/op",
            "value": 295,
            "unit": "allocs/op",
            "extra": "579 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Get - ns/op",
            "value": 1009417,
            "unit": "ns/op",
            "extra": "1381 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Get - B/op",
            "value": 15561,
            "unit": "B/op",
            "extra": "1381 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Get - allocs/op",
            "value": 201,
            "unit": "allocs/op",
            "extra": "1381 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_SetAndDelete - ns/op",
            "value": 3716934,
            "unit": "ns/op",
            "extra": "357 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_SetAndDelete - B/op",
            "value": 97599,
            "unit": "B/op",
            "extra": "357 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_SetAndDelete - allocs/op",
            "value": 463,
            "unit": "allocs/op",
            "extra": "357 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - ns/op",
            "value": 542158,
            "unit": "ns/op",
            "extra": "2953 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - B/op",
            "value": 6668,
            "unit": "B/op",
            "extra": "2953 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - allocs/op",
            "value": 100,
            "unit": "allocs/op",
            "extra": "2953 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - ns/op",
            "value": 536781,
            "unit": "ns/op",
            "extra": "2283 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - B/op",
            "value": 7468,
            "unit": "B/op",
            "extra": "2283 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "2283 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - ns/op",
            "value": 1072238,
            "unit": "ns/op",
            "extra": "1191 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - B/op",
            "value": 11877,
            "unit": "B/op",
            "extra": "1191 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - allocs/op",
            "value": 172,
            "unit": "allocs/op",
            "extra": "1191 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Set - ns/op",
            "value": 3650669,
            "unit": "ns/op",
            "extra": "286 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Set - B/op",
            "value": 15031,
            "unit": "B/op",
            "extra": "286 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Set - allocs/op",
            "value": 281,
            "unit": "allocs/op",
            "extra": "286 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Get - ns/op",
            "value": 2420068,
            "unit": "ns/op",
            "extra": "532 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Get - B/op",
            "value": 14750,
            "unit": "B/op",
            "extra": "532 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Get - allocs/op",
            "value": 282,
            "unit": "allocs/op",
            "extra": "532 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_SetAndDelete - ns/op",
            "value": 7287760,
            "unit": "ns/op",
            "extra": "169 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_SetAndDelete - B/op",
            "value": 27036,
            "unit": "B/op",
            "extra": "169 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_SetAndDelete - allocs/op",
            "value": 532,
            "unit": "allocs/op",
            "extra": "169 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - ns/op",
            "value": 1107588,
            "unit": "ns/op",
            "extra": "1024 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - B/op",
            "value": 6581,
            "unit": "B/op",
            "extra": "1024 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - allocs/op",
            "value": 40,
            "unit": "allocs/op",
            "extra": "1024 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - ns/op",
            "value": 1097299,
            "unit": "ns/op",
            "extra": "1197 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - B/op",
            "value": 6614,
            "unit": "B/op",
            "extra": "1197 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - allocs/op",
            "value": 50,
            "unit": "allocs/op",
            "extra": "1197 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - ns/op",
            "value": 5844429,
            "unit": "ns/op",
            "extra": "204 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - B/op",
            "value": 12643,
            "unit": "B/op",
            "extra": "204 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - allocs/op",
            "value": 77,
            "unit": "allocs/op",
            "extra": "204 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Set - ns/op",
            "value": 751194,
            "unit": "ns/op",
            "extra": "1858 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Set - B/op",
            "value": 122,
            "unit": "B/op",
            "extra": "1858 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Set - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1858 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Get - ns/op",
            "value": 2478,
            "unit": "ns/op",
            "extra": "609702 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Get - B/op",
            "value": 288,
            "unit": "B/op",
            "extra": "609702 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Get - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "609702 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_SetAndDelete - ns/op",
            "value": 1402358,
            "unit": "ns/op",
            "extra": "834 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_SetAndDelete - B/op",
            "value": 243,
            "unit": "B/op",
            "extra": "834 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_SetAndDelete - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "834 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - ns/op",
            "value": 469477,
            "unit": "ns/op",
            "extra": "2805 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - B/op",
            "value": 256,
            "unit": "B/op",
            "extra": "2805 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2805 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - ns/op",
            "value": 130689,
            "unit": "ns/op",
            "extra": "8139 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - B/op",
            "value": 521,
            "unit": "B/op",
            "extra": "8139 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "8139 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - ns/op",
            "value": 886961,
            "unit": "ns/op",
            "extra": "1255 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - B/op",
            "value": 400,
            "unit": "B/op",
            "extra": "1255 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "1255 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Set - ns/op",
            "value": 43815,
            "unit": "ns/op",
            "extra": "30195 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Set - B/op",
            "value": 268,
            "unit": "B/op",
            "extra": "30195 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Set - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "30195 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Get - ns/op",
            "value": 36172,
            "unit": "ns/op",
            "extra": "32065 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Get - B/op",
            "value": 200,
            "unit": "B/op",
            "extra": "32065 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Get - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "32065 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_SetAndDelete - ns/op",
            "value": 90218,
            "unit": "ns/op",
            "extra": "15734 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_SetAndDelete - B/op",
            "value": 456,
            "unit": "B/op",
            "extra": "15734 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_SetAndDelete - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "15734 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Set - ns/op",
            "value": 600.1,
            "unit": "ns/op",
            "extra": "1978576 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Set - B/op",
            "value": 123,
            "unit": "B/op",
            "extra": "1978576 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Set - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1978576 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Get - ns/op",
            "value": 119.6,
            "unit": "ns/op",
            "extra": "9462686 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Get - B/op",
            "value": 19,
            "unit": "B/op",
            "extra": "9462686 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Get - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "9462686 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_SetAndDelete - ns/op",
            "value": 1205,
            "unit": "ns/op",
            "extra": "930096 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_SetAndDelete - B/op",
            "value": 219,
            "unit": "B/op",
            "extra": "930096 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_SetAndDelete - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "930096 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - ns/op",
            "value": 50096,
            "unit": "ns/op",
            "extra": "26805 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - B/op",
            "value": 30,
            "unit": "B/op",
            "extra": "26805 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "26805 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - ns/op",
            "value": 58258,
            "unit": "ns/op",
            "extra": "19915 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - B/op",
            "value": 568,
            "unit": "B/op",
            "extra": "19915 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "19915 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - ns/op",
            "value": 99203,
            "unit": "ns/op",
            "extra": "12818 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - B/op",
            "value": 30,
            "unit": "B/op",
            "extra": "12818 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "12818 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 2418748,
            "unit": "ns/op",
            "extra": "475 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 60904,
            "unit": "B/op",
            "extra": "475 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 529,
            "unit": "allocs/op",
            "extra": "475 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 970059,
            "unit": "ns/op",
            "extra": "1350 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 60191,
            "unit": "B/op",
            "extra": "1350 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "1350 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 3616422,
            "unit": "ns/op",
            "extra": "327 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 83114,
            "unit": "B/op",
            "extra": "327 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 871,
            "unit": "allocs/op",
            "extra": "327 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Set - ns/op",
            "value": 1418650,
            "unit": "ns/op",
            "extra": "831 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Set - B/op",
            "value": 626,
            "unit": "B/op",
            "extra": "831 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Set - allocs/op",
            "value": 24,
            "unit": "allocs/op",
            "extra": "831 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Get - ns/op",
            "value": 20590,
            "unit": "ns/op",
            "extra": "57711 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Get - B/op",
            "value": 856,
            "unit": "B/op",
            "extra": "57711 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Get - allocs/op",
            "value": 45,
            "unit": "allocs/op",
            "extra": "57711 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_SetAndDelete - ns/op",
            "value": 2867275,
            "unit": "ns/op",
            "extra": "416 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_SetAndDelete - B/op",
            "value": 964,
            "unit": "B/op",
            "extra": "416 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_SetAndDelete - allocs/op",
            "value": 43,
            "unit": "allocs/op",
            "extra": "416 times\n2 procs"
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
          "id": "eb86e00a791aa928b24e9180ff2e912155af8e5c",
          "message": "Merge pull request #998 from gofiber/dependabot/go_modules/s3/github.com/aws/aws-sdk-go-v2/credentials-1.13.40\n\nBump github.com/aws/aws-sdk-go-v2/credentials from 1.13.37 to 1.13.40 in /s3",
          "timestamp": "2023-09-25T09:27:07+02:00",
          "tree_id": "57c164fce2729e249c9d6acfc8b7112c1d87b5e2",
          "url": "https://github.com/gofiber/storage/commit/eb86e00a791aa928b24e9180ff2e912155af8e5c"
        },
        "date": 1695627555559,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_ArangoDB_Set - ns/op",
            "value": 776251,
            "unit": "ns/op",
            "extra": "1460 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_Set - B/op",
            "value": 15446,
            "unit": "B/op",
            "extra": "1460 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_Set - allocs/op",
            "value": 225,
            "unit": "allocs/op",
            "extra": "1460 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_Get - ns/op",
            "value": 767099,
            "unit": "ns/op",
            "extra": "1482 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_Get - B/op",
            "value": 15194,
            "unit": "B/op",
            "extra": "1482 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_Get - allocs/op",
            "value": 226,
            "unit": "allocs/op",
            "extra": "1482 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_SetAndDelete - ns/op",
            "value": 1233771,
            "unit": "ns/op",
            "extra": "951 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_SetAndDelete - B/op",
            "value": 23340,
            "unit": "B/op",
            "extra": "951 times\n2 procs"
          },
          {
            "name": "Benchmark_ArangoDB_SetAndDelete - allocs/op",
            "value": 341,
            "unit": "allocs/op",
            "extra": "951 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Set - ns/op",
            "value": 4447671,
            "unit": "ns/op",
            "extra": "242 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Set - B/op",
            "value": 10286,
            "unit": "B/op",
            "extra": "242 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Set - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "242 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Get - ns/op",
            "value": 3098630,
            "unit": "ns/op",
            "extra": "373 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Get - B/op",
            "value": 11431,
            "unit": "B/op",
            "extra": "373 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_Get - allocs/op",
            "value": 203,
            "unit": "allocs/op",
            "extra": "373 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_SetAndDelete - ns/op",
            "value": 5615089,
            "unit": "ns/op",
            "extra": "223 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_SetAndDelete - B/op",
            "value": 18498,
            "unit": "B/op",
            "extra": "223 times\n2 procs"
          },
          {
            "name": "Benchmark_AzureBlob_SetAndDelete - allocs/op",
            "value": 284,
            "unit": "allocs/op",
            "extra": "223 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Set - ns/op",
            "value": 12252,
            "unit": "ns/op",
            "extra": "103180 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Set - B/op",
            "value": 1399,
            "unit": "B/op",
            "extra": "103180 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Set - allocs/op",
            "value": 38,
            "unit": "allocs/op",
            "extra": "103180 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Get - ns/op",
            "value": 1973,
            "unit": "ns/op",
            "extra": "779632 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Get - B/op",
            "value": 416,
            "unit": "B/op",
            "extra": "779632 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_Get - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "779632 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - ns/op",
            "value": 25755,
            "unit": "ns/op",
            "extra": "51597 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - B/op",
            "value": 2786,
            "unit": "B/op",
            "extra": "51597 times\n2 procs"
          },
          {
            "name": "Benchmark_Badger_SetAndDelete - allocs/op",
            "value": 77,
            "unit": "allocs/op",
            "extra": "51597 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Set - ns/op",
            "value": 544440,
            "unit": "ns/op",
            "extra": "2257 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Set - B/op",
            "value": 6276,
            "unit": "B/op",
            "extra": "2257 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Set - allocs/op",
            "value": 42,
            "unit": "allocs/op",
            "extra": "2257 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Get - ns/op",
            "value": 1060,
            "unit": "ns/op",
            "extra": "993013 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Get - B/op",
            "value": 480,
            "unit": "B/op",
            "extra": "993013 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_Get - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "993013 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_SetAndDelete - ns/op",
            "value": 1031380,
            "unit": "ns/op",
            "extra": "1108 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_SetAndDelete - B/op",
            "value": 12536,
            "unit": "B/op",
            "extra": "1108 times\n2 procs"
          },
          {
            "name": "Benchmark_Bbolt_SetAndDelete - allocs/op",
            "value": 84,
            "unit": "allocs/op",
            "extra": "1108 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Set - ns/op",
            "value": 2914249,
            "unit": "ns/op",
            "extra": "370 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Set - B/op",
            "value": 6580,
            "unit": "B/op",
            "extra": "370 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Set - allocs/op",
            "value": 118,
            "unit": "allocs/op",
            "extra": "370 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Get - ns/op",
            "value": 4240941,
            "unit": "ns/op",
            "extra": "446 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Get - B/op",
            "value": 6527,
            "unit": "B/op",
            "extra": "446 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_Get - allocs/op",
            "value": 113,
            "unit": "allocs/op",
            "extra": "446 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_SetAndDelete - ns/op",
            "value": 3628855,
            "unit": "ns/op",
            "extra": "344 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_SetAndDelete - B/op",
            "value": 12902,
            "unit": "B/op",
            "extra": "344 times\n2 procs"
          },
          {
            "name": "Benchmark_Coherence_SetAndDelete - allocs/op",
            "value": 226,
            "unit": "allocs/op",
            "extra": "344 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - ns/op",
            "value": 237126,
            "unit": "ns/op",
            "extra": "5943 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - B/op",
            "value": 3810,
            "unit": "B/op",
            "extra": "5943 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Set - allocs/op",
            "value": 66,
            "unit": "allocs/op",
            "extra": "5943 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - ns/op",
            "value": 176016,
            "unit": "ns/op",
            "extra": "7258 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - B/op",
            "value": 3359,
            "unit": "B/op",
            "extra": "7258 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_Get - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "7258 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - ns/op",
            "value": 409344,
            "unit": "ns/op",
            "extra": "2748 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - B/op",
            "value": 7427,
            "unit": "B/op",
            "extra": "2748 times\n2 procs"
          },
          {
            "name": "Benchmark_Couchbase_SetAndDelete - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "2748 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - ns/op",
            "value": 1582561,
            "unit": "ns/op",
            "extra": "636 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - B/op",
            "value": 24207,
            "unit": "B/op",
            "extra": "636 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Set - allocs/op",
            "value": 335,
            "unit": "allocs/op",
            "extra": "636 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - ns/op",
            "value": 1066637,
            "unit": "ns/op",
            "extra": "1111 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - B/op",
            "value": 26072,
            "unit": "B/op",
            "extra": "1111 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_Get - allocs/op",
            "value": 363,
            "unit": "allocs/op",
            "extra": "1111 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - ns/op",
            "value": 2848918,
            "unit": "ns/op",
            "extra": "398 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - B/op",
            "value": 48303,
            "unit": "B/op",
            "extra": "398 times\n2 procs"
          },
          {
            "name": "Benchmark_DynamoDB_SetAndDelete - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "398 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Set - ns/op",
            "value": 2098339,
            "unit": "ns/op",
            "extra": "648 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Set - B/op",
            "value": 13564,
            "unit": "B/op",
            "extra": "648 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Set - allocs/op",
            "value": 237,
            "unit": "allocs/op",
            "extra": "648 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Get - ns/op",
            "value": 475085,
            "unit": "ns/op",
            "extra": "2727 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Get - B/op",
            "value": 7425,
            "unit": "B/op",
            "extra": "2727 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_Get - allocs/op",
            "value": 125,
            "unit": "allocs/op",
            "extra": "2727 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_SetAndDelete - ns/op",
            "value": 2596015,
            "unit": "ns/op",
            "extra": "439 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_SetAndDelete - B/op",
            "value": 20606,
            "unit": "B/op",
            "extra": "439 times\n2 procs"
          },
          {
            "name": "Benchmark_Etcd_SetAndDelete - allocs/op",
            "value": 353,
            "unit": "allocs/op",
            "extra": "439 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Set - ns/op",
            "value": 145188,
            "unit": "ns/op",
            "extra": "9565 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Set - B/op",
            "value": 35,
            "unit": "B/op",
            "extra": "9565 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Set - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "9565 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Get - ns/op",
            "value": 146566,
            "unit": "ns/op",
            "extra": "9978 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Get - B/op",
            "value": 200,
            "unit": "B/op",
            "extra": "9978 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_Get - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "9978 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_SetAndDelete - ns/op",
            "value": 248574,
            "unit": "ns/op",
            "extra": "4729 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_SetAndDelete - B/op",
            "value": 51,
            "unit": "B/op",
            "extra": "4729 times\n2 procs"
          },
          {
            "name": "Benchmark_Memcache_SetAndDelete - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4729 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Set - ns/op",
            "value": 77.41,
            "unit": "ns/op",
            "extra": "16308844 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Set - B/op",
            "value": 3,
            "unit": "B/op",
            "extra": "16308844 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Set - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "16308844 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Get - ns/op",
            "value": 25.67,
            "unit": "ns/op",
            "extra": "43049070 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Get - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43049070 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_Get - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43049070 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_SetAndDelete - ns/op",
            "value": 142.8,
            "unit": "ns/op",
            "extra": "7469076 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_SetAndDelete - B/op",
            "value": 3,
            "unit": "B/op",
            "extra": "7469076 times\n2 procs"
          },
          {
            "name": "Benchmark_Memory_SetAndDelete - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "7469076 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/fiber - ns/op",
            "value": 0.4802,
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
            "value": 72.21,
            "unit": "ns/op",
            "extra": "17933107 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "17933107 times\n2 procs"
          },
          {
            "name": "Benchmark_CalculateTimestamp/default - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "17933107 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Set - ns/op",
            "value": 3262251,
            "unit": "ns/op",
            "extra": "433 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Set - B/op",
            "value": 86225,
            "unit": "B/op",
            "extra": "433 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Set - allocs/op",
            "value": 295,
            "unit": "allocs/op",
            "extra": "433 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Get - ns/op",
            "value": 1262903,
            "unit": "ns/op",
            "extra": "898 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Get - B/op",
            "value": 15562,
            "unit": "B/op",
            "extra": "898 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_Get - allocs/op",
            "value": 201,
            "unit": "allocs/op",
            "extra": "898 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_SetAndDelete - ns/op",
            "value": 3653641,
            "unit": "ns/op",
            "extra": "274 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_SetAndDelete - B/op",
            "value": 97675,
            "unit": "B/op",
            "extra": "274 times\n2 procs"
          },
          {
            "name": "Benchmark_Minio_SetAndDelete - allocs/op",
            "value": 463,
            "unit": "allocs/op",
            "extra": "274 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - ns/op",
            "value": 494829,
            "unit": "ns/op",
            "extra": "2524 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - B/op",
            "value": 6668,
            "unit": "B/op",
            "extra": "2524 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - allocs/op",
            "value": 100,
            "unit": "allocs/op",
            "extra": "2524 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - ns/op",
            "value": 447229,
            "unit": "ns/op",
            "extra": "2540 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - B/op",
            "value": 7453,
            "unit": "B/op",
            "extra": "2540 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "2540 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - ns/op",
            "value": 1192929,
            "unit": "ns/op",
            "extra": "1216 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - B/op",
            "value": 11873,
            "unit": "B/op",
            "extra": "1216 times\n2 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - allocs/op",
            "value": 172,
            "unit": "allocs/op",
            "extra": "1216 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Set - ns/op",
            "value": 4719417,
            "unit": "ns/op",
            "extra": "279 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Set - B/op",
            "value": 15034,
            "unit": "B/op",
            "extra": "279 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Set - allocs/op",
            "value": 281,
            "unit": "allocs/op",
            "extra": "279 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Get - ns/op",
            "value": 3005021,
            "unit": "ns/op",
            "extra": "458 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Get - B/op",
            "value": 14740,
            "unit": "B/op",
            "extra": "458 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_Get - allocs/op",
            "value": 282,
            "unit": "allocs/op",
            "extra": "458 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_SetAndDelete - ns/op",
            "value": 9535213,
            "unit": "ns/op",
            "extra": "132 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_SetAndDelete - B/op",
            "value": 26657,
            "unit": "B/op",
            "extra": "132 times\n2 procs"
          },
          {
            "name": "Benchmark_MSSQL_SetAndDelete - allocs/op",
            "value": 532,
            "unit": "allocs/op",
            "extra": "132 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - ns/op",
            "value": 1441840,
            "unit": "ns/op",
            "extra": "843 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - B/op",
            "value": 6575,
            "unit": "B/op",
            "extra": "843 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Set - allocs/op",
            "value": 40,
            "unit": "allocs/op",
            "extra": "843 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - ns/op",
            "value": 1294795,
            "unit": "ns/op",
            "extra": "966 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - B/op",
            "value": 6613,
            "unit": "B/op",
            "extra": "966 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_Get - allocs/op",
            "value": 50,
            "unit": "allocs/op",
            "extra": "966 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - ns/op",
            "value": 6550176,
            "unit": "ns/op",
            "extra": "206 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - B/op",
            "value": 12643,
            "unit": "B/op",
            "extra": "206 times\n2 procs"
          },
          {
            "name": "Benchmark_MYSQL_SetAndDelete - allocs/op",
            "value": 77,
            "unit": "allocs/op",
            "extra": "206 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Set - ns/op",
            "value": 720781,
            "unit": "ns/op",
            "extra": "2252 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Set - B/op",
            "value": 118,
            "unit": "B/op",
            "extra": "2252 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Set - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "2252 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Get - ns/op",
            "value": 2713,
            "unit": "ns/op",
            "extra": "418498 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Get - B/op",
            "value": 288,
            "unit": "B/op",
            "extra": "418498 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_Get - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "418498 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_SetAndDelete - ns/op",
            "value": 1575458,
            "unit": "ns/op",
            "extra": "1065 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_SetAndDelete - B/op",
            "value": 211,
            "unit": "B/op",
            "extra": "1065 times\n2 procs"
          },
          {
            "name": "Benchmark_Pebble_SetAndDelete - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1065 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - ns/op",
            "value": 584885,
            "unit": "ns/op",
            "extra": "1831 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - B/op",
            "value": 255,
            "unit": "B/op",
            "extra": "1831 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Set - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1831 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - ns/op",
            "value": 194095,
            "unit": "ns/op",
            "extra": "6758 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - B/op",
            "value": 522,
            "unit": "B/op",
            "extra": "6758 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_Get - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "6758 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - ns/op",
            "value": 1203288,
            "unit": "ns/op",
            "extra": "1266 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - B/op",
            "value": 400,
            "unit": "B/op",
            "extra": "1266 times\n2 procs"
          },
          {
            "name": "Benchmark_Postgres_SetAndDelete - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "1266 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Set - ns/op",
            "value": 55353,
            "unit": "ns/op",
            "extra": "18358 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Set - B/op",
            "value": 268,
            "unit": "B/op",
            "extra": "18358 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Set - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "18358 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Get - ns/op",
            "value": 55506,
            "unit": "ns/op",
            "extra": "21002 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Get - B/op",
            "value": 200,
            "unit": "B/op",
            "extra": "21002 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_Get - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "21002 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_SetAndDelete - ns/op",
            "value": 119376,
            "unit": "ns/op",
            "extra": "10567 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_SetAndDelete - B/op",
            "value": 456,
            "unit": "B/op",
            "extra": "10567 times\n2 procs"
          },
          {
            "name": "Benchmark_Redis_SetAndDelete - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "10567 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Set - ns/op",
            "value": 812.6,
            "unit": "ns/op",
            "extra": "1285494 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Set - B/op",
            "value": 123,
            "unit": "B/op",
            "extra": "1285494 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Set - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1285494 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Get - ns/op",
            "value": 210.6,
            "unit": "ns/op",
            "extra": "7076209 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Get - B/op",
            "value": 19,
            "unit": "B/op",
            "extra": "7076209 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_Get - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "7076209 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_SetAndDelete - ns/op",
            "value": 1585,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_SetAndDelete - B/op",
            "value": 219,
            "unit": "B/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Ristretto_SetAndDelete - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - ns/op",
            "value": 97448,
            "unit": "ns/op",
            "extra": "17035 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - B/op",
            "value": 30,
            "unit": "B/op",
            "extra": "17035 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Set - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "17035 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - ns/op",
            "value": 80175,
            "unit": "ns/op",
            "extra": "14610 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - B/op",
            "value": 568,
            "unit": "B/op",
            "extra": "14610 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_Get - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "14610 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - ns/op",
            "value": 124628,
            "unit": "ns/op",
            "extra": "9679 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - B/op",
            "value": 30,
            "unit": "B/op",
            "extra": "9679 times\n2 procs"
          },
          {
            "name": "Benchmark_Rueidis_SetAndDelete - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "9679 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Set - ns/op",
            "value": 3257610,
            "unit": "ns/op",
            "extra": "375 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Set - B/op",
            "value": 60905,
            "unit": "B/op",
            "extra": "375 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Set - allocs/op",
            "value": 529,
            "unit": "allocs/op",
            "extra": "375 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Get - ns/op",
            "value": 1188680,
            "unit": "ns/op",
            "extra": "1018 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Get - B/op",
            "value": 60188,
            "unit": "B/op",
            "extra": "1018 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_Get - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "1018 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - ns/op",
            "value": 3900182,
            "unit": "ns/op",
            "extra": "320 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - B/op",
            "value": 83115,
            "unit": "B/op",
            "extra": "320 times\n2 procs"
          },
          {
            "name": "Benchmark_S3_SetAndDelete - allocs/op",
            "value": 871,
            "unit": "allocs/op",
            "extra": "320 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Set - ns/op",
            "value": 2263566,
            "unit": "ns/op",
            "extra": "573 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Set - B/op",
            "value": 627,
            "unit": "B/op",
            "extra": "573 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Set - allocs/op",
            "value": 24,
            "unit": "allocs/op",
            "extra": "573 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Get - ns/op",
            "value": 25011,
            "unit": "ns/op",
            "extra": "50782 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Get - B/op",
            "value": 856,
            "unit": "B/op",
            "extra": "50782 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_Get - allocs/op",
            "value": 45,
            "unit": "allocs/op",
            "extra": "50782 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_SetAndDelete - ns/op",
            "value": 3482341,
            "unit": "ns/op",
            "extra": "397 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_SetAndDelete - B/op",
            "value": 964,
            "unit": "B/op",
            "extra": "397 times\n2 procs"
          },
          {
            "name": "Benchmark_SQLite3_SetAndDelete - allocs/op",
            "value": 43,
            "unit": "allocs/op",
            "extra": "397 times\n2 procs"
          }
        ]
      }
    ]
  }
}