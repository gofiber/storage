package leveldb

import (
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
	assert.Equal(t, 200, cfg.MaxOpenFiles)
}
