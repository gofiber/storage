package cloudflarekv

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"

	"github.com/cloudflare/cloudflare-go"
)

type getWorkersKVBody struct {
	Key string `json:"key"`
}

type writeWorkersKVBody struct {
	Key string `json:"key"`
	Val string `json:"val"`
}

type deleteworkerskvpairbykeyBody struct {
	Key string `json:"key"`
}

type listworkerskvkeysBody struct {
	Limit  string `json:"limit"`
	Prefix string `json:"prefix"`
	Cursor string `json:"cursor"`
}

type deleteworkerskventriesBody struct {
	Keys []string `json:"keys"`
}

type TestModule struct {
	baseUrl string
}

func (t *TestModule) GetWorkersKV(ctx context.Context, rc *cloudflare.ResourceContainer, params cloudflare.GetWorkersKVParams) ([]byte, error) {

	client := &http.Client{}

	jsonBody := getWorkersKVBody{
		Key: params.Key,
	}

	marshalledBody, err := json.Marshal(jsonBody)

	if err != nil {
		log.Println("Error in marshalling")
		return nil, err
	}

	req, err := http.NewRequestWithContext(ctx, http.MethodPost, t.baseUrl+"/getworkerskvvaluebykey", bytes.NewReader(marshalledBody))

	if err != nil {
		log.Println("Error occur in /getworkerskvvaluebykey > making http call")
		return nil, err
	}

	resp, err := client.Do(req)

	if err != nil {
		log.Println("Error occur in /getworkerskvvaluebykey > operating http call")
		return nil, err
	}

	defer resp.Body.Close()

	respBody, err := io.ReadAll(resp.Body)
	if err != nil {
		str := string(respBody)
		println(str)
	}

	return respBody, nil
}

func (t *TestModule) WriteWorkersKVEntry(ctx context.Context, rc *cloudflare.ResourceContainer, params cloudflare.WriteWorkersKVEntryParams) (cloudflare.Response, error) {

	client := &http.Client{}

	jsonBody := writeWorkersKVBody{
		Key: params.Key,
		Val: string(params.Value),
	}

	marshalledBody, err := json.Marshal(jsonBody)

	if err != nil {
		log.Println("Error in marshalling")
		return cloudflare.Response{}, err
	}

	req, err := http.NewRequestWithContext(ctx, http.MethodPost, t.baseUrl+"/writeworkerskvkeyvaluepair", bytes.NewReader(marshalledBody))

	if err != nil {
		log.Println("Error occur in /writeworkerskvkeyvaluepair > making http call")
		return cloudflare.Response{}, err
	}

	req.Header.Add("Content-Type", "application/json")

	resp, err := client.Do(req)

	if err != nil {
		log.Println("Error occur in /writeworkerskvkeyvaluepair > operating http call")
		return cloudflare.Response{}, err
	}

	defer resp.Body.Close()

	return cloudflare.Response{
		Success: true,
	}, nil

}

func (t *TestModule) DeleteWorkersKVEntry(ctx context.Context, rc *cloudflare.ResourceContainer, params cloudflare.DeleteWorkersKVEntryParams) (cloudflare.Response, error) {

	client := &http.Client{}

	jsonBody := deleteworkerskvpairbykeyBody{
		Key: params.Key,
	}

	marshalledBody, err := json.Marshal(jsonBody)

	if err != nil {
		log.Println("Error in marshalling")
		return cloudflare.Response{}, err
	}

	req, err := http.NewRequestWithContext(ctx, http.MethodDelete, t.baseUrl+"/deleteworkerskvpairbykey", bytes.NewReader(marshalledBody))

	if err != nil {
		log.Println("Error occur in /deleteworkerskvpairbykey > making http call")
		return cloudflare.Response{}, err
	}

	resp, err := client.Do(req)

	if err != nil {
		log.Println("Error occur in /deleteworkerskvpairbykey > operating http call")
		return cloudflare.Response{}, err
	}

	defer resp.Body.Close()

	return cloudflare.Response{
		Success: true,
	}, nil

}

func (t *TestModule) ListWorkersKVKeys(ctx context.Context, rc *cloudflare.ResourceContainer, params cloudflare.ListWorkersKVsParams) (cloudflare.ListStorageKeysResponse, error) {

	client := &http.Client{}

	jsonBody := listworkerskvkeysBody{
		Limit:  fmt.Sprint(params.Limit),
		Prefix: params.Prefix,
		Cursor: params.Cursor,
	}

	marshalledBody, err := json.Marshal(jsonBody)

	if err != nil {
		log.Println("Error in marshalling")
		return cloudflare.ListStorageKeysResponse{}, err
	}

	req, err := http.NewRequestWithContext(ctx, http.MethodPost, t.baseUrl+"/listworkerskvkeys", bytes.NewReader(marshalledBody))

	if err != nil {
		log.Println("Error occur in /listworkerskvkeys > making http call")
		return cloudflare.ListStorageKeysResponse{}, err
	}

	req.Header.Add("Content-Type", "application/json")

	resp, err := client.Do(req)

	if err != nil {
		log.Println("Error occur in /listworkerskvkeys > operating http call")
		return cloudflare.ListStorageKeysResponse{}, err
	}

	defer resp.Body.Close()

	result := []cloudflare.StorageKey{}

	respBody, err := io.ReadAll(resp.Body)

	if err != nil {
		str := string(respBody)
		println(str)
	}

	if err := json.Unmarshal(respBody, &result); err != nil {
		log.Println("Error with parsing response body")
		return cloudflare.ListStorageKeysResponse{}, nil
	}

	return cloudflare.ListStorageKeysResponse{
		Result: result,
	}, nil
}

func (t *TestModule) DeleteWorkersKVEntries(ctx context.Context, rc *cloudflare.ResourceContainer, params cloudflare.DeleteWorkersKVEntriesParams) (cloudflare.Response, error) {

	client := &http.Client{}

	jsonBody := deleteworkerskventriesBody{
		Keys: params.Keys,
	}

	marshalledBody, err := json.Marshal(jsonBody)

	if err != nil {
		log.Println("Error in marshalling")
		return cloudflare.Response{}, err
	}

	req, err := http.NewRequestWithContext(ctx, http.MethodDelete, t.baseUrl+"/deleteworkerskventries", bytes.NewReader(marshalledBody))

	if err != nil {
		log.Println("Error occur in /deleteworkerskventries > making new request")
		return cloudflare.Response{
			Errors: []cloudflare.ResponseInfo{},
		}, err
	}

	req.Header.Add("Content-Type", "application/json")

	_, err = client.Do(req)

	if err != nil {
		log.Println("Error occuer in /deleteworkerskventries > operating http call")
		return cloudflare.Response{
			Errors: []cloudflare.ResponseInfo{},
		}, err
	}

	return cloudflare.Response{
		Success: true,
	}, nil
}
