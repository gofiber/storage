#!/usr/bin/env bash
# Starts the services a storage package needs before its benchmarks run and
# exports the shared test environment. Invoked by the reusable benchmark
# workflow (gofiber/.github) with the package directory as $1.
set -euo pipefail

PACKAGE="${1:-}"

case "$PACKAGE" in
  cloudflarekv)
    .github/scripts/initialize-wrangler.sh
    cd cloudflarekv && npx wrangler dev &
    npx wait-on tcp:8787
    ;;
  coherence)
    docker run -d -p 1408:1408 -p 30000:30000 ghcr.io/oracle/coherence-ce:22.06.5
    sleep 30
    ;;
  rueidis | valkey)
    docker run -d -p 6379:6379 public.ecr.aws/docker/library/redis:7
    sleep 15
    ;;
  mssql)
    docker run -d --name mssql-server \
      --publish 1433:1433 \
      --env ACCEPT_EULA=Y \
      --env SA_PASSWORD=MsSql!1234 \
      --env MSSQL_DB=master \
      --env MSSQL_USER=sa \
      --env MSSQL_PASSWORD=MsSql!1234 \
      --health-cmd "/opt/mssql-tools/bin/sqlcmd -U sa -P MsSql!1234 -Q 'select 1' -b -o /dev/null" \
      --health-interval 1s \
      --health-timeout 30s \
      --health-start-period 10s \
      --health-retries 20 \
      mcmoe/mssqldocker:latest
    ;;
esac

cat >> "$GITHUB_ENV" <<'EOF'
MSSQL_DATABASE=master
MSSQL_USERNAME=sa
MSSQL_PASSWORD=MsSql!1234
TEST_AEROSPIKE_IMAGE=aerospike/aerospike-server:latest
TEST_ARANGODB_IMAGE=public.ecr.aws/docker/library/arangodb:latest
TEST_AZURITE_IMAGE=mcr.microsoft.com/azure-storage/azurite:latest
TEST_CASSANDRA_IMAGE=public.ecr.aws/docker/library/cassandra:latest
TEST_COHERENCE_IMAGE=ghcr.io/oracle/coherence-ce:25.03.1-graal
TEST_CLICKHOUSE_IMAGE=clickhouse/clickhouse-server:23-alpine
TEST_COUCHBASE_IMAGE=public.ecr.aws/docker/library/couchbase:enterprise-7.6.5
TEST_DYNAMODB_IMAGE=public.ecr.aws/aws-dynamodb-local/aws-dynamodb-local:latest
TEST_ETCD_IMAGE=gcr.io/etcd-development/etcd:v3.6.6
TEST_MEMCACHED_IMAGE=public.ecr.aws/docker/library/memcached:latest
TEST_MINIO_IMAGE=quay.io/minio/minio:latest
TEST_MONGODB_IMAGE=public.ecr.aws/docker/library/mongo:7
TEST_MYSQL_IMAGE=public.ecr.aws/docker/library/mysql:9
TEST_NATS_IMAGE=public.ecr.aws/docker/library/nats:2-alpine
TEST_POSTGRES_IMAGE=public.ecr.aws/docker/library/postgres:16-alpine
TEST_REDIS_IMAGE=public.ecr.aws/docker/library/redis:7
TEST_SCYLLADB_IMAGE=scylladb/scylla:6.2
TEST_SURREALDB_IMAGE=surrealdb/surrealdb:v2
TEST_VALKEY_IMAGE=public.ecr.aws/valkey/valkey:8
COHERENCE_LOG_LEVEL=ERROR
EOF
