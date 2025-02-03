package leveldb

import (
	"runtime"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestConfigConfigMaxOpenFiles(t *testing.T) {
	cfg := Config{
		MaxOpenFiles: 1000,
	}
	assert.Equal(t, 1000, cfg.MaxOpenFiles)
}

func TestConfigDefaultDarwin(t *testing.T) { // MacOS
	cfg := configDefault()
	if runtime.GOOS == "darwin" {
		assert.Equal(t, 200, cfg.MaxOpenFiles)
	} else {
		assert.Equal(t, 500, cfg.MaxOpenFiles)
	}
}
