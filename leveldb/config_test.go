package leveldb

import (
	"runtime"
	"testing"

	"github.com/stretchr/testify/require"
)

func TestConfigConfigMaxOpenFiles(t *testing.T) {
	cfg := Config{
		MaxOpenFiles: 1000,
	}
	require.Equal(t, 1000, cfg.MaxOpenFiles)
}

func TestConfigDefaultDarwin(t *testing.T) { // MacOS
	cfg := configDefault()
	if runtime.GOOS == "darwin" {
		require.Equal(t, 200, cfg.MaxOpenFiles)
	} else {
		require.Equal(t, 500, cfg.MaxOpenFiles)
	}
}
