package mockstorage

import (
	"bytes"
	"errors"
	"testing"
	"time"
)

func TestStorageDefaultBehavior(t *testing.T) {
	store := New()

	// Test Set and Get
	err := store.Set("key1", []byte("value1"), 0)
	if err != nil {
		t.Fatalf("Set() error = %v, wantErr %v", err, nil)
	}

	val, err := store.Get("key1")
	if err != nil {
		t.Fatalf("Get() error = %v, wantErr %v", err, nil)
	}
	if !bytes.Equal(val, []byte("value1")) {
		t.Errorf("Get() = %v, want %v", val, []byte("value1"))
	}

	// Test Delete
	err = store.Delete("key1")
	if err != nil {
		t.Fatalf("Delete() error = %v, wantErr %v", err, nil)
	}

	_, err = store.Get("key1")
	if err == nil {
		t.Errorf("Get() error = %v, wantErr %v", err, "key not found")
	}

	// Test Reset
	err = store.Set("key2", []byte("value2"), 0)
	if err != nil {
		t.Fatalf("Set() error = %v, wantErr %v", err, nil)
	}

	err = store.Reset()
	if err != nil {
		t.Fatalf("Reset() error = %v, wantErr %v", err, nil)
	}

	_, err = store.Get("key2")
	if err == nil {
		t.Errorf("Get() error = %v, wantErr %v", err, "key not found")
	}

	// Test Expiry
	err = store.Set("key3", []byte("value3"), time.Millisecond*100)
	if err != nil {
		t.Fatalf("Set() error = %v, wantErr %v", err, nil)
	}
	time.Sleep(time.Millisecond * 200)

	_, err = store.Get("key3")
	if err == nil {
		t.Errorf("Get() error = %v, wantErr %v", err, "key expired")
	}
}

func TestStorageConnFunc(t *testing.T) {
	store := New()

	customFuncs := &CustomFuncs{
		ConnFunc: func() map[string]Entry {
			return map[string]Entry{
				"customKey1": {Value: []byte("customValue1"), Exp: time.Time{}},
				"customKey2": {Value: []byte("customValue2"), Exp: time.Now().Add(1 * time.Hour)},
			}
		},
	}

	store.SetCustomFuncs(customFuncs)

	// Test custom Conn
	conn := store.Conn()
	expectedConn := map[string]Entry{
		"customKey1": {Value: []byte("customValue1"), Exp: time.Time{}},
		"customKey2": {Value: []byte("customValue2"), Exp: time.Now().Add(1 * time.Hour)},
	}

	for k, v := range expectedConn {
		if val, ok := conn[k]; !ok || !bytes.Equal(val.Value, v.Value) {
			t.Errorf("Conn() = %v, want %v", conn, expectedConn)
		}
	}
}

func TestResetFunc(t *testing.T) {
	store := New()

	customFuncs := &CustomFuncs{
		ResetFunc: func() error {
			return errors.New("reset error")
		},
	}

	store.SetCustomFuncs(customFuncs)

	err := store.Reset()
	if err == nil {
		t.Errorf("Reset() error = %v, wantErr %v", err, "reset error")
	}
}

func TestStorageCloseFunc(t *testing.T) {
	store := New()

	customFuncs := &CustomFuncs{
		CloseFunc: func() error {
			return errors.New("close error")
		},
	}

	store.SetCustomFuncs(customFuncs)

	err := store.Close()
	if err == nil {
		t.Errorf("Close() error = %v, wantErr %v", err, "close error")
	}
}

func TestStorageKeysFunc(t *testing.T) {
	store := New()

	customFuncs := &CustomFuncs{
		KeysFunc: func() ([][]byte, error) {
			return [][]byte{[]byte("customKey1"), []byte("customKey2")}, nil
		},
	}

	store.SetCustomFuncs(customFuncs)

	// Test custom Keys
	keys, err := store.Keys()
	if err != nil {
		t.Fatalf("Keys() error = %v, wantErr %v", err, nil)
	}
	expectedKeys := [][]byte{[]byte("customKey1"), []byte("customKey2")}
	if len(keys) != len(expectedKeys) {
		t.Fatalf("Keys() = %v, want %v", keys, expectedKeys)
	}
	for i, key := range expectedKeys {
		if !bytes.Equal(keys[i], key) {
			t.Errorf("Keys() = %v, want %v", keys, expectedKeys)
		}
	}
}

func TestStorageCustomBehavior(t *testing.T) {
	store := New()
	customFuncs := &CustomFuncs{
		GetFunc: func(key string) ([]byte, error) {
			if key == "customKey" {
				return []byte("customValue"), nil
			}
			return nil, errors.New("custom key not found")
		},
		SetFunc: func(key string, val []byte, exp time.Duration) error {
			if key == "readonly" {
				return errors.New("cannot set readonly key")
			}
			return nil
		},
		DeleteFunc: func(key string) error {
			if key == "protectedKey" {
				return errors.New("cannot delete protected key")
			}
			return nil
		},
		ConnFunc: func() map[string]Entry {
			return map[string]Entry{
				"customKey1": {Value: []byte("customValue1"), Exp: time.Time{}},
				"customKey2": {Value: []byte("customValue2"), Exp: time.Now().Add(1 * time.Hour)},
			}
		},
		KeysFunc: func() ([][]byte, error) {
			return [][]byte{[]byte("customKey1"), []byte("customKey2")}, nil
		},
	}

	store.SetCustomFuncs(customFuncs)

	// Test custom Get
	val, err := store.Get("customKey")
	if err != nil {
		t.Fatalf("Get() error = %v, wantErr %v", err, nil)
	}
	if !bytes.Equal(val, []byte("customValue")) {
		t.Errorf("Get() = %v, want %v", val, []byte("customValue"))
	}

	_, err = store.Get("unknownKey")
	if err == nil {
		t.Errorf("Get() error = %v, wantErr %v", err, "custom key not found")
	}

	// Test custom Set
	err = store.Set("readonly", []byte("value"), 0)
	if err == nil {
		t.Errorf("Set() error = %v, wantErr %v", err, "cannot set readonly key")
	}

	err = store.Set("regularKey", []byte("value"), 0)
	if err != nil {
		t.Fatalf("Set() error = %v, wantErr %v", err, nil)
	}

	// Test custom Delete
	err = store.Delete("protectedKey")
	if err == nil {
		t.Errorf("Delete() error = %v, wantErr %v", err, "cannot delete protected key")
	}

	err = store.Delete("regularKey")
	if err != nil {
		t.Fatalf("Delete() error = %v, wantErr %v", err, nil)
	}

	// Test custom Conn
	conn := store.Conn()
	expectedConn := map[string]Entry{
		"customKey1": {Value: []byte("customValue1"), Exp: time.Time{}},
		"customKey2": {Value: []byte("customValue2"), Exp: time.Now().Add(1 * time.Hour)},
	}

	for k, v := range expectedConn {
		if val, ok := conn[k]; !ok || !bytes.Equal(val.Value, v.Value) {
			t.Errorf("Conn() = %v, want %v", conn, expectedConn)
		}
	}

	// Test custom Keys
	keys, err := store.Keys()
	if err != nil {
		t.Fatalf("Keys() error = %v, wantErr %v", err, nil)
	}
	expectedKeys := [][]byte{[]byte("customKey1"), []byte("customKey2")}
	if len(keys) != len(expectedKeys) {
		t.Fatalf("Keys() = %v, want %v", keys, expectedKeys)
	}
	for i, key := range expectedKeys {
		if !bytes.Equal(keys[i], key) {
			t.Errorf("Keys() = %v, want %v", keys, expectedKeys)
		}
	}
}

func TestStorageConnAndKeys(t *testing.T) {
	store := New()

	// Test Conn
	err := store.Set("key1", []byte("value1"), 0)
	if err != nil {
		t.Fatalf("Set() error = %v, wantErr %v", err, nil)
	}
	conn := store.Conn()
	if val, ok := conn["key1"]; !ok || !bytes.Equal(val.Value, []byte("value1")) {
		t.Errorf("Conn() = %v, want %v", conn, map[string]Entry{"key1": {Value: []byte("value1"), Exp: time.Time{}}})
	}

	// Test Keys
	keys, err := store.Keys()
	if err != nil {
		t.Fatalf("Keys() error = %v, wantErr %v", err, nil)
	}
	if len(keys) != 1 || !bytes.Equal(keys[0], []byte("key1")) {
		t.Errorf("Keys() = %v, want %v", keys, [][]byte{[]byte("key1")})
	}
}
