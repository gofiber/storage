This document contains instructions for migrating to various storage versions.

### 0.1 -> 0.2
v0.2 fixes [a bug](https://github.com/gofiber/fiber/issues/1258) in MYSQL, Postgres and Arangodb in which 
inserting non-UTF8 characters would trigger a panic due to the values being saved in a TEXT column instead of a 
BYTEA/BLOB column. Migration instructions (note you may need to adjust the table names if you have supplied a custom
config to the storage):

**Postgres**
```sql
ALTER TABLE fiber_storage
ALTER COLUMN v TYPE BYTEA USING v::bytea;
```

**MYSQL**
```sql
ALTER TABLE fiber_storage MODIFY COLUMN v BLOB;
```

**Arangodb**

No migration other then updating the library is necessary.
