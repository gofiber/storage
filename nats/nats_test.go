package nats

import (
	"bytes"
	"context"
	_ "embed"
	"fmt"
	"net"
	"os"
	"strings"
	"testing"
	"time"

	"github.com/mdelapenya/tlscert"
	"github.com/nats-io/nats.go"
	"github.com/nats-io/nats.go/jetstream"
	"github.com/stretchr/testify/require"
	"github.com/testcontainers/testcontainers-go"
	tcnats "github.com/testcontainers/testcontainers-go/modules/nats"
	"github.com/testcontainers/testcontainers-go/wait"
)

const (
	// natsImage is the default image used for running NATS in tests.
	natsImage       = "docker.io/nats:2-alpine"
	natsImageEnvVar = "TEST_NATS_IMAGE"
	natsTLSPort     = "4443/tcp"
)

//go:embed testdata/nats-tls.conf
var natsTLSConfig string

// createTLSCerts creates a CA certificate, a client certificate and a nats certificate,
// storing them in the given temporary directory.
func createTLSCerts(t testing.TB) (*tlscert.Certificate, *tlscert.Certificate, *tlscert.Certificate) {
	t.Helper()

	tmpDir := t.TempDir()

	// ips is the extra list of IPs to include in the certificates.
	// It's used to allow the client and nats certificates to be used in the same host
	// when the tests are run using a remote docker daemon.
	ips := []net.IP{net.ParseIP("127.0.0.1")}

	// Generate CA certificate
	caCert := tlscert.SelfSignedFromRequest(tlscert.Request{
		Host:        "localhost",
		IPAddresses: ips,
		Name:        "ca",
		IsCA:        true,
		ParentDir:   tmpDir,
	})
	require.NotNil(t, caCert)

	// Generate client certificate
	clientCert := tlscert.SelfSignedFromRequest(tlscert.Request{
		Host:        "localhost",
		IPAddresses: ips,
		Name:        "client",
		Parent:      caCert,
		ParentDir:   tmpDir,
	})
	require.NotNil(t, clientCert)

	// Generate nats certificate
	natsCert := tlscert.SelfSignedFromRequest(tlscert.Request{
		Host:        "localhost",
		IPAddresses: ips,
		Name:        "nats",
		Parent:      caCert,
		ParentDir:   tmpDir,
	})
	require.NotNil(t, natsCert)

	return caCert, clientCert, natsCert
}

func newTestStore(t testing.TB) (*Storage, error) {
	t.Helper()

	ca, client, natsCert := createTLSCerts(t)

	img := natsImage
	if imgFromEnv := os.Getenv(natsImageEnvVar); imgFromEnv != "" {
		img = imgFromEnv
	}

	ctx := context.Background()

	c, err := tcnats.Run(
		ctx, img,
		tcnats.WithConfigFile(strings.NewReader(natsTLSConfig)),
		// Override the default wait strategy to use the port 4443 for TLS
		testcontainers.WithWaitStrategy(wait.ForLog("Listening for client connections on 0.0.0.0:4443")),
		// add the cert files to the container
		testcontainers.CustomizeRequest(testcontainers.GenericContainerRequest{
			ContainerRequest: testcontainers.ContainerRequest{
				ExposedPorts: []string{natsTLSPort},
				Files: []testcontainers.ContainerFile{
					{
						Reader:            bytes.NewReader(ca.Bytes),
						ContainerFilePath: "/tls/ca.crt",
						FileMode:          0o0644,
					},
					{
						Reader:            bytes.NewReader(natsCert.Bytes),
						ContainerFilePath: "/tls/nats.crt",
						FileMode:          0o0644,
					},
					{
						Reader:            bytes.NewReader(natsCert.KeyBytes),
						ContainerFilePath: "/tls/nats.key",
						FileMode:          0o0644,
					},
				},
			},
		}),
	)
	testcontainers.CleanupContainer(t, c)
	require.NoError(t, err)

	// build the connection string for the 4443 TLS port
	mappedPort, err := c.MappedPort(ctx, natsTLSPort)
	require.NoError(t, err)

	hostIP, err := c.Host(ctx)
	require.NoError(t, err)

	uri := fmt.Sprintf("nats://%s:%s", hostIP, mappedPort.Port())
	require.NoError(t, err)

	return New(Config{
		URLs: uri,
		NatsOptions: []nats.Option{
			nats.MaxReconnects(2),
			// Enable TLS with client certificate authentication
			nats.ClientCert(client.CertPath, client.KeyPath),
			nats.RootCAs(ca.CertPath),
		},
		KeyValueConfig: jetstream.KeyValueConfig{
			Bucket:  "test",
			Storage: jetstream.MemoryStorage,
		},
	}), nil
}

func Test_Storage_Nats_Set(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	err = testStore.Set(key, val, 0)
	require.NoError(t, err)

	keys, err := testStore.Keys()
	require.NoError(t, err)
	require.Len(t, keys, 1)
}

func Test_Storage_Nats_SetWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)
	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err = testStore.SetWithContext(ctx, key, val, 0)
	require.ErrorIs(t, err, context.Canceled)

	keys, err := testStore.Keys()
	require.NoError(t, err)
	require.Len(t, keys, 0)
}

func Test_Storage_Nats_Set_Overwrite(t *testing.T) {
	var (
		key  = "john"
		val1 = []byte("doe")
		val2 = []byte("overwritten")
	)

	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	err = testStore.Set(key, val1, 0)
	require.NoError(t, err)

	err = testStore.Set(key, val2, 30*time.Second)
	require.NoError(t, err)
	v, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, val2, v)

	keys, err := testStore.Keys()
	require.NoError(t, err)
	require.Len(t, keys, 1)
}

func Test_Storage_Nats_Get(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	err = testStore.Set(key, val, 30*time.Second)
	require.NoError(t, err)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)

	keys, err := testStore.Keys()
	require.NoError(t, err)
	require.Len(t, keys, 1)
}

func Test_Storage_Nats_GetWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err = testStore.Set(key, val, 30*time.Second)
	require.NoError(t, err)

	result, err := testStore.GetWithContext(ctx, key)
	require.ErrorIs(t, err, context.Canceled)
	require.Zero(t, len(result))

	keys, err := testStore.Keys()
	require.NoError(t, err)
	require.Len(t, keys, 1)
}

func Test_Storage_Nats_Set_Expiration(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
		exp = 1 * time.Second
	)

	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	err = testStore.Set(key, val, exp)
	require.NoError(t, err)

	time.Sleep(1100 * time.Millisecond)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Zero(t, len(result))

	keys, err := testStore.Keys()
	require.NoError(t, err)
	require.Nil(t, keys)
}

func Test_Storage_Nats_Set_Long_Expiration_with_Keys(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
		exp = 5 * time.Second
	)

	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	keys, err := testStore.Keys()
	require.NoError(t, err)
	require.Nil(t, keys)

	err = testStore.Set(key, val, exp)
	require.NoError(t, err)

	time.Sleep(1100 * time.Millisecond)

	keys, err = testStore.Keys()
	require.NoError(t, err)
	require.Len(t, keys, 1)

	time.Sleep(4000 * time.Millisecond)
	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Zero(t, len(result))

	keys, err = testStore.Keys()
	require.NoError(t, err)
	require.Nil(t, keys)
}

func Test_Storage_Nats_Get_NotExist(t *testing.T) {
	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	result, err := testStore.Get("notexist")
	require.NoError(t, err)
	require.Zero(t, len(result))

	keys, err := testStore.Keys()
	require.NoError(t, err)
	require.Nil(t, keys)
}

func Test_Storage_Nats_Delete(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	err = testStore.Set(key, val, 0)
	require.NoError(t, err)

	keys, err := testStore.Keys()
	require.NoError(t, err)
	require.Len(t, keys, 1)

	err = testStore.Delete(key)
	require.NoError(t, err)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Zero(t, len(result))

	keys, err = testStore.Keys()
	require.NoError(t, err)
	require.Nil(t, keys)
}

func Test_Storage_Nats_DeleteWithContext(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	err = testStore.Set(key, val, 5*time.Second)
	require.NoError(t, err)

	keys, err := testStore.Keys()
	require.NoError(t, err)
	require.Len(t, keys, 1)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err = testStore.DeleteWithContext(ctx, key)
	require.ErrorIs(t, err, context.Canceled)

	result, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, result)

	require.NoError(t, testStore.Reset())
}

func Test_Storage_Nats_Reset(t *testing.T) {
	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	val := []byte("doe")

	err = testStore.Set("john1", val, 0)
	require.NoError(t, err)

	err = testStore.Set("john2", val, 0)
	require.NoError(t, err)

	keys, err := testStore.Keys()
	require.NoError(t, err)
	require.Len(t, keys, 2)

	err = testStore.Reset()
	require.NoError(t, err)

	result, err := testStore.Get("john1")
	require.NoError(t, err)
	require.Zero(t, len(result))

	result, err = testStore.Get("john2")
	require.NoError(t, err)
	require.Zero(t, len(result))

	keys, err = testStore.Keys()
	require.NoError(t, err)
	require.Nil(t, keys)
}

func Test_Storage_Nats_ResetWithContext(t *testing.T) {
	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	val := []byte("doe")

	err = testStore.Set("john1", val, 5*time.Second)
	require.NoError(t, err)

	err = testStore.Set("john2", val, 5*time.Second)
	require.NoError(t, err)

	keys, err := testStore.Keys()
	require.NoError(t, err)
	require.Len(t, keys, 2)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err = testStore.ResetWithContext(ctx)
	require.ErrorIs(t, err, context.Canceled)

	result, err := testStore.Get("john1")
	require.NoError(t, err)
	require.Equal(t, val, result)

	result, err = testStore.Get("john2")
	require.NoError(t, err)
	require.Equal(t, val, result)

	keys, err = testStore.Keys()
	require.NoError(t, err)
	require.Len(t, keys, 2)
}

func Test_Storage_Nats_Close(t *testing.T) {
	testStore, err := newTestStore(t)
	require.NoError(t, err)
	require.Nil(t, testStore.Close())
}

func Test_Storage_Nats_Conn(t *testing.T) {
	testStore, err := newTestStore(t)
	require.NoError(t, err)
	defer testStore.Close()

	n, k := testStore.Conn()
	require.NotNil(t, n)
	require.NotNil(t, k)
}

func Benchmark_Nats_Set(b *testing.B) {
	testStore, err := newTestStore(b)
	require.NoError(b, err)
	defer testStore.Close()

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		err = testStore.Set("john", []byte("doe"), 0)
	}

	require.NoError(b, err)
}

func Benchmark_Nats_Get(b *testing.B) {
	testStore, err := newTestStore(b)
	require.NoError(b, err)
	defer testStore.Close()

	err = testStore.Set("john", []byte("doe"), 0)
	require.NoError(b, err)

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_, err = testStore.Get("john")
	}

	require.NoError(b, err)
}

func Benchmark_Nats_SetAndDelete(b *testing.B) {
	testStore, err := newTestStore(b)
	require.NoError(b, err)
	defer testStore.Close()

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_ = testStore.Set("john", []byte("doe"), 0)
		err = testStore.Delete("john")
	}

	require.NoError(b, err)
}
