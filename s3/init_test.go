package s3

var testStore *Storage

func init() {
	testStore = New(
		Config{
			Bucket:   "testbucket",
			Endpoint: "http://127.0.0.1:9000/",
			Region:   "us-east-1",
			Credentials: Credentials{
				AccessKey:       "minioadmin",
				SecretAccessKey: "minioadmin",
			},
		},
	)

}
