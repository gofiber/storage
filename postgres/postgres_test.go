// +build postgres

package postgres

var testStore *Storage

func init() {
	testConfig := ConfigDefault
	testConfig.Addr = "127.0.0.1:5432"

	if v := os.Getenv("POSTGRES_ADDR"); v != "" {
		testConfig.Addr = v
	}

	testStore = New(testConfig)
}

func Test_Redis_Set(t *testing.T) {
	var (
		store = testStore
		key   = "john"
		val   = []byte("doe")
	)

	err := store.Set(key, val, 0)
	utils.AssertEqual(t, nil, err)
}

func Test_Redis_Get(t *testing.T) {
	var (
		store = testStore
		key   = "john"
		val   = []byte("doe")
	)

	err := store.Set(key, val, 0)
	utils.AssertEqual(t, nil, err)

	result, err := store.Get(key)
	utils.AssertEqual(t, nil, err)
	utils.AssertEqual(t, val, result)
}

func Test_Redis_Set_Expiration(t *testing.T) {
	var (
		store = testStore
		key   = "john"
		val   = []byte("doe")
		exp   = 500 * time.Millisecond
	)

	err := store.Set(key, val, exp)
	utils.AssertEqual(t, nil, err)

	time.Sleep(1 * time.Second)

}

func Test_Redis_Get_Expired(t *testing.T) {
	var (
		store = testStore
		key   = "john"
	)

	result, err := store.Get(key)
	utils.AssertEqual(t, ErrNotExist, err)
	utils.AssertEqual(t, true, len(result) == 0)
}

func Test_Redis_Get_NotExist(t *testing.T) {
	var store = testStore

	result, err := store.Get("notexist")
	utils.AssertEqual(t, ErrNotExist, err)
	utils.AssertEqual(t, true, len(result) == 0)
}

func Test_Redis_Delete(t *testing.T) {
	var (
		store = testStore
		key   = "john"
		val   = []byte("doe")
	)

	err := store.Set(key, val, 0)
	utils.AssertEqual(t, nil, err)

	err = store.Delete(key)
	utils.AssertEqual(t, nil, err)

	result, err := store.Get(key)
	utils.AssertEqual(t, ErrNotExist, err)
	utils.AssertEqual(t, true, len(result) == 0)
}

func Test_Redis_Clear(t *testing.T) {
	var (
		store = testStore
		val   = []byte("doe")
	)

	err := store.Set("john1", val, 0)
	utils.AssertEqual(t, nil, err)

	err = store.Set("john2", val, 0)
	utils.AssertEqual(t, nil, err)

	err = store.Clear()
	utils.AssertEqual(t, nil, err)

	result, err := store.Get("john1")
	utils.AssertEqual(t, ErrNotExist, err)
	utils.AssertEqual(t, true, len(result) == 0)

	result, err = store.Get("john2")
	utils.AssertEqual(t, ErrNotExist, err)
	utils.AssertEqual(t, true, len(result) == 0)
}
