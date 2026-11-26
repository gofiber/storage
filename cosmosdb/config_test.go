package cosmosdb

import (
	"testing"
	"time"

	"github.com/stretchr/testify/require"
)

func Test_Config_Defaults(t *testing.T) {
	require.Equal(t, ConfigDefault, configDefault())

	cfg := configDefault(Config{ConnectionString: "AccountEndpoint=http://localhost:8081;AccountKey=a2V5;"})
	require.Equal(t, ConfigDefault.Database, cfg.Database)
	require.Equal(t, ConfigDefault.Container, cfg.Container)
	require.Equal(t, ConfigDefault.RequestTimeout, cfg.RequestTimeout)
	require.False(t, cfg.Reset)
}

func Test_Config_Override(t *testing.T) {
	cfg := configDefault(Config{
		Endpoint:       "https://account.documents.azure.com:443/",
		Key:            "a2V5",
		Database:       "app",
		Container:      "sessions",
		RequestTimeout: time.Minute,
		Reset:          true,
	})

	require.Equal(t, "app", cfg.Database)
	require.Equal(t, "sessions", cfg.Container)
	require.Equal(t, time.Minute, cfg.RequestTimeout)
	require.True(t, cfg.Reset)
}
