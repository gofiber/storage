package firestore

import (
	"testing"
	"time"

	"github.com/stretchr/testify/require"
)

func Test_Config_Defaults(t *testing.T) {
	cfg := configDefault(Config{
		ProjectID: "test-project",
	})

	require.Equal(t, "test-project", cfg.ProjectID)
	require.Equal(t, ConfigDefault.Collection, cfg.Collection)
	require.Equal(t, ConfigDefault.RequestTimeout, cfg.RequestTimeout)
	require.Equal(t, ConfigDefault.Reset, cfg.Reset)
}

func Test_Config_Override(t *testing.T) {
	cfg := configDefault(Config{
		ProjectID:      "test-project",
		Collection:     "custom_collection",
		RequestTimeout: 5 * time.Second,
	})

	require.Equal(t, "test-project", cfg.ProjectID)
	require.Equal(t, "custom_collection", cfg.Collection)
	require.Equal(t, 5*time.Second, cfg.RequestTimeout)
}

func Test_Config_Required_ProjectID(t *testing.T) {
	defer func() {
		if r := recover(); r == nil {
			t.Errorf("Expected panic when ProjectID is empty")
		}
	}()

	configDefault(Config{})
}
