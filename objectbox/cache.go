package objectbox

//go:generate go run github.com/objectbox/objectbox-go/cmd/objectbox-gogen

// Cache represents a single cache entry in the storage.
type Cache struct {
	Id        uint64 `objectbox:"id"`
	Key       string `objectbox:"index,unique"`
	Value     []byte
	ExpiresAt int64 `objectbox:"index,date"`
}
