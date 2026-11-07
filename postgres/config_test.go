package postgres

import (
	"testing"
	"time"

	"github.com/stretchr/testify/require"
)

func Test_Config_Default_NoArgs(t *testing.T) {
	require.Equal(t, ConfigDefault, configDefault())
}

func Test_Config_Default_FillsZeroValues(t *testing.T) {
	cfg := configDefault(Config{
		Host:       "",
		Port:       -1,
		Database:   "",
		Table:      "",
		GCInterval: -time.Second,
		Reset:      true,
	})

	require.Equal(t, ConfigDefault.Host, cfg.Host)
	require.Equal(t, ConfigDefault.Port, cfg.Port)
	require.Equal(t, ConfigDefault.Database, cfg.Database)
	require.Equal(t, ConfigDefault.Table, cfg.Table)
	require.Equal(t, ConfigDefault.GCInterval, cfg.GCInterval)
	// Explicit values are preserved.
	require.True(t, cfg.Reset)
}

func Test_Config_Default_KeepsExplicitValues(t *testing.T) {
	cfg := configDefault(Config{
		Host:       "db.internal",
		Port:       6543,
		Database:   "other",
		Table:      "other_table",
		GCInterval: time.Minute,
	})

	require.Equal(t, "db.internal", cfg.Host)
	require.Equal(t, 6543, cfg.Port)
	require.Equal(t, "other", cfg.Database)
	require.Equal(t, "other_table", cfg.Table)
	require.Equal(t, time.Minute, cfg.GCInterval)
}

func Test_Config_GetDSN(t *testing.T) {
	tests := []struct {
		name string
		cfg  Config
		want string
	}{
		{
			name: "connection uri wins over every other field",
			cfg:  Config{ConnectionURI: "postgres://u:p@h:1/d", Host: "ignored", Username: "ignored"},
			want: "postgres://u:p@h:1/d",
		},
		{
			name: "defaults without credentials",
			cfg:  ConfigDefault,
			want: "postgresql://127.0.0.1:5432/fiber?sslmode=disable",
		},
		{
			name: "username and password are escaped",
			cfg: Config{
				Username: "us er", Password: "p@ss/word:1",
				Host: "db.internal", Port: 6543, Database: "my db", SSLMode: "require",
			},
			want: "postgresql://us+er:p%40ss%2Fword%3A1@db.internal:6543/my+db?sslmode=require",
		},
		{
			name: "username only",
			cfg:  Config{Username: "alice", Host: "h", Port: 1, Database: "d", SSLMode: "disable"},
			want: "postgresql://alice@h:1/d?sslmode=disable",
		},
		{
			name: "password only",
			cfg:  Config{Password: "secret", Host: "h", Port: 1, Database: "d", SSLMode: "disable"},
			want: "postgresql://:secret@h:1/d?sslmode=disable",
		},
		{
			name: "unix socket host is not escaped",
			cfg:  Config{Username: "alice", Host: "/var/run/postgresql", Port: 5432, Database: "d", SSLMode: "disable"},
			want: "postgresql://alice@/var/run/postgresql:5432/d?sslmode=disable",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			require.Equal(t, tt.want, tt.cfg.getDSN())
		})
	}
}
