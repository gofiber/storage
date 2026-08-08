package bbolt

import (
	"errors"
	"github.com/gofiber/utils/v2"
	"go.etcd.io/bbolt"
	berrors "go.etcd.io/bbolt/errors"
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
		if errors.Is(err, berrors.ErrBucketNotFound) {
			return nil
		}

		return err
	})
}

// checkBucket reports whether the bucket exists, for a read-only database where it cannot be created.
func checkBucket(cfg Config, conn *bbolt.DB) error {
	return conn.View(func(tx *bbolt.Tx) error {
		if tx.Bucket(utils.UnsafeBytes(cfg.Bucket)) == nil {
			return ErrBucketNotFound
		}
		return nil
	})
}
