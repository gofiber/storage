package bbolt

import (
	"github.com/gofiber/utils"
	"go.etcd.io/bbolt"
)

func createBucket(cfg Config, conn *bbolt.DB) error {
	return conn.Update(func(tx *bbolt.Tx) error {
		_, err := tx.CreateBucketIfNotExists(utils.UnsafeBytes(cfg.Bucket))

		return err
	})
}

func removeBucket(cfg Config, conn *bbolt.DB) error {
	return conn.Update(func(tx *bbolt.Tx) error {
		return tx.DeleteBucket(utils.UnsafeBytes(cfg.Bucket))
	})
}
