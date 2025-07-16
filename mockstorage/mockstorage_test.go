package mockstorage

import (
	"bytes"
	"context"
	"errors"
	"testing"
	"time"

	"github.com/stretchr/testify/require"
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

func TestGetWithContext(t *testing.T) {
	store := New()

	// fallback to Get
	_ = store.Set("key1", []byte("val1"), 0)
	val, err := store.GetWithContext(context.Background(), "key1")
	if err != nil || !bytes.Equal(val, []byte("val1")) {
		t.Errorf("GetWithContext fallback failed: got %v, err %v", val, err)
	}

	// custom override
	store.SetCustomFuncs(&CustomFuncs{
		GetWithContext: func(ctx context.Context, key string) ([]byte, error) {
			if key == "override" {
				return []byte("ctx-value"), nil
			}
			return nil, errors.New("not found")
		},
	})
	val, err = store.GetWithContext(context.TODO(), "override")
	if err != nil || !bytes.Equal(val, []byte("ctx-value")) {
		t.Errorf("GetWithContext custom failed: got %v, err %v", val, err)
	}
}

func TestSetWithContext(t *testing.T) {
	store := New()

	// fallback to Set
	err := store.SetWithContext(context.TODO(), "key2", []byte("val2"), 0)
	if err != nil {
		t.Errorf("SetWithContext fallback failed: %v", err)
	}
	val, _ := store.Get("key2")
	if !bytes.Equal(val, []byte("val2")) {
		t.Errorf("SetWithContext fallback mismatch: got %v", val)
	}

	// custom override
	store.SetCustomFuncs(&CustomFuncs{
		SetWithContext: func(ctx context.Context, key string, val []byte, exp time.Duration) error {
			if key == "readonly" {
				return errors.New("forbidden")
			}
			return nil
		},
	})
	err = store.SetWithContext(context.TODO(), "readonly", []byte("fail"), 0)
	if err == nil || err.Error() != "forbidden" {
		t.Errorf("SetWithContext custom override failed: err=%v", err)
	}
}

func TestDeleteWithContext(t *testing.T) {
	store := New()

	// fallback to Delete
	_ = store.Set("key3", []byte("val3"), 0)
	err := store.DeleteWithContext(context.TODO(), "key3")
	if err != nil {
		t.Errorf("DeleteWithContext fallback failed: %v", err)
	}
	val, err := store.Get("key3")
	if err == nil {
		t.Errorf("expected deletion, but got value: %v", val)
	}

	// custom override
	store.SetCustomFuncs(&CustomFuncs{
		DeleteWithContext: func(ctx context.Context, key string) error {
			if key == "undeletable" {
				return errors.New("blocked")
			}
			return nil
		},
	})
	err = store.DeleteWithContext(context.TODO(), "undeletable")
	if err == nil || err.Error() != "blocked" {
		t.Errorf("DeleteWithContext custom override failed: err=%v", err)
	}
}

func TestResetWithContext(t *testing.T) {
	store := New()

	// fallback to Reset
	_ = store.Set("key4", []byte("val4"), 0)
	err := store.ResetWithContext(context.TODO())
	if err != nil {
		t.Errorf("ResetWithContext fallback failed: %v", err)
	}
	val, err := store.Get("key4")
	if err == nil {
		t.Errorf("expected reset to remove key, but got value: %v", val)
	}

	// custom override
	store.SetCustomFuncs(&CustomFuncs{
		ResetWithContext: func(ctx context.Context) error {
			return errors.New("custom reset error")
		},
	})
	err = store.ResetWithContext(context.Background())
	if err == nil || err.Error() != "custom reset error" {
		t.Errorf("ResetWithContext custom override failed: err=%v", err)
	}
}

func Benchmark_Mockstorage_Set(b *testing.B) {
	testStore := New()
	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		err = testStore.Set("john", []byte("doe"), 0)
	}

	require.NoError(b, err)
}

func Benchmark_Mockstorage_Get(b *testing.B) {
	testStore := New()
	err := testStore.Set("john", []byte("doe"), 0)
	require.NoError(b, err)

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_, err = testStore.Get("john")
	}

	require.NoError(b, err)
}

func Benchmark_Mockstorage_SetAndDelete(b *testing.B) {
	testStore := New()
	b.ReportAllocs()
	b.ResetTimer()

	var err error
	for i := 0; i < b.N; i++ {
		_ = testStore.Set("john", []byte("doe"), 0)
		err = testStore.Delete("john")
	}

	require.NoError(b, err)
}
