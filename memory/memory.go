package memoryStore

import (
	"sync"
	"time"
)

func New() *MemoryStore {
	ms := &MemoryStore{
		data:       make(map[string]dataPoint),
		gcInterval: time.Second * 10,
	}
	go ms.gc()
	return ms
}

type MemoryStore struct {
	mux        sync.RWMutex
	data       map[string]dataPoint
	gcInterval time.Duration
}

type dataPoint struct {
	data   []byte
	expiry int64
}

func (ms *MemoryStore) Get(id string) ([]byte, error) {
	ms.mux.RLock()
	v, ok := ms.data[id]
	ms.mux.RUnlock()
	if !ok {
		return []byte{}, nil
	}

	if v.expiry < time.Now().Unix() && v.expiry != 0 {
		ms.Delete(id)
		return []byte{}, nil
	}

	return v.data, nil
}

func (ms *MemoryStore) Set(id string, val []byte, expiration time.Duration) error {

	var expirationTime int64
	if expiration != 0 {
		expirationTime = time.Now().Add(expiration).Unix()
	}

	ms.mux.Lock()
	ms.data[id] = dataPoint{val, expirationTime}
	ms.mux.Unlock()
	return nil
}

func (ms *MemoryStore) Delete(id string) error {
	ms.mux.Lock()
	delete(ms.data, id)
	ms.mux.Unlock()
	return nil
}

func (ms *MemoryStore) Clear() error {
	ms.mux.Lock()
	ms.data = make(map[string]dataPoint)
	ms.mux.Unlock()
	return nil
}

func (ms *MemoryStore) gc() {
	tick := time.NewTicker(ms.gcInterval)
	for {
		<-tick.C

		ms.mux.Lock()

		now := time.Now().Unix()
		for id, v := range ms.data {
			if v.expiry < now && v.expiry != 0 {
				delete(ms.data, id)
			}
		}

		ms.mux.Unlock()

	}
}
