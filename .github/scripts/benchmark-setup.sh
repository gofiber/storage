#!/usr/bin/env bash
# Starts the services a storage package needs before its benchmarks run and
# exports the shared test environment. Invoked by the reusable benchmark
# workflow (gofiber/.github) with the package directory as $1.
set -euo pipefail

PACKAGE="${1:-}"

# Declared here rather than inline below because the coherence service is started
# from this script *and* named in the environment the tests read. Those were two
# separate literals and drifted three major versions apart.
TEST_COHERENCE_IMAGE=ghcr.io/oracle/coherence-ce:25.03.1-graal

case "$PACKAGE" in
  cloudflarekv)
    .github/scripts/initialize-wrangler.sh
    cd cloudflarekv && npx wrangler dev &
    npx wait-on tcp:8787
    ;;
  coherence)
    docker run -d -p 1408:1408 -p 30000:30000 "$TEST_COHERENCE_IMAGE"
    sleep 30
    ;;
  # mssql, rueidis and valkey need nothing here. Their tests start their own
  # containers through testcontainers and connect to the address it reports,
  # so the server this used to start on 6379 was never connected to. Pulling
  # it only spent registry quota that the pull the tests actually depend on
  # then went without, which is how a rate-limited runner turned into
  # "No such image" once the test tried to create its container.
esac

cat >> "$GITHUB_ENV" <<'EOF'
TEST_AEROSPIKE_IMAGE=aerospike/aerospike-server:latest
TEST_ARANGODB_IMAGE=public.ecr.aws/docker/library/arangodb:latest
TEST_AZURITE_IMAGE=mcr.microsoft.com/azure-storage/azurite:latest
TEST_CASSANDRA_IMAGE=public.ecr.aws/docker/library/cassandra:latest
TEST_CLICKHOUSE_IMAGE=clickhouse/clickhouse-server:26.7-alpine
TEST_COCKROACHDB_IMAGE=cockroachdb/cockroach:latest-v26.2
TEST_COUCHBASE_IMAGE=public.ecr.aws/docker/library/couchbase:enterprise-8.0.2
TEST_DYNAMODB_IMAGE=public.ecr.aws/aws-dynamodb-local/aws-dynamodb-local:latest
TEST_ETCD_IMAGE=gcr.io/etcd-development/etcd:v3.7.1
TEST_FIRESTORE_IMAGE=gcr.io/google.com/cloudsdktool/google-cloud-cli:emulators
TEST_MEMCACHED_IMAGE=public.ecr.aws/docker/library/memcached:latest
TEST_MINIO_IMAGE=quay.io/minio/minio:latest
TEST_MONGODB_IMAGE=public.ecr.aws/docker/library/mongo:7
TEST_MSSQL_IMAGE=mcr.microsoft.com/mssql/server:2022-latest
TEST_MYSQL_IMAGE=public.ecr.aws/docker/library/mysql:9
TEST_NATS_IMAGE=public.ecr.aws/docker/library/nats:2-alpine
TEST_POSTGRES_IMAGE=public.ecr.aws/docker/library/postgres:16-alpine
TEST_REDIS_IMAGE=public.ecr.aws/docker/library/redis:7
TEST_SCYLLADB_IMAGE=scylladb/scylla:6.2
TEST_SURREALDB_IMAGE=surrealdb/surrealdb:v2
TEST_VALKEY_IMAGE=public.ecr.aws/valkey/valkey:8
COHERENCE_LOG_LEVEL=ERROR
EOF

# Appended separately so it stays the same value the service above was started
# from; the block is deliberately unexpanded.
echo "TEST_COHERENCE_IMAGE=$TEST_COHERENCE_IMAGE" >> "$GITHUB_ENV"

# testcontainers discards registry errors from the pull stream (docker.go:
# io.Copy(io.Discard, pull)), so a throttled ECR Public pull only ever surfaces
# as "No such image". Pull up front, where a 429 is visible and worth retrying.
if [ -d "$PACKAGE" ]; then
  for var in $(grep -rho --include='*.go' 'TEST_[A-Z0-9_]*_IMAGE' "$PACKAGE" | sort -u); do
    image=$(grep "^$var=" "$GITHUB_ENV" | tail -n1 | cut -d= -f2-) || continue
    for attempt in 1 2 3; do
      docker pull -q "$image" && break
      [ "$attempt" -eq 3 ] || sleep $((attempt * 10))
    done
  done
fi
