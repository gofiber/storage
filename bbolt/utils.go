package bbolt

import (
	"errors"
	"github.com/gofiber/utils/v2"
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
		err := tx.DeleteBucket(utils.UnsafeBytes(cfg.Bucket))
		if errors.Is(err, bbolt.ErrBucketNotFound) {
			return nil
		}

		return err
	})
}
