#!/bin/bash

# generate index.ts
cat <<EOF > index.ts
export default { async fetch(Request, env) {

  const namespace = env.TEST_NAMESPACE1;

  if (Request.url === "http://localhost:8787/writeworkerskvkeyvaluepair") {
    const res = await Request.json();
    const { key, val } = res;
    WriteWorkersKVKeyValuePair(namespace, key, val);
    return new Response("Success");
  }

  else if (Request.url === "http://localhost:8787/listworkerskvkeys") {
    const resp = await Request.json();
    const { limit, prefix, cursor } = resp;
    const list = await ListWorkersKVKeys(namespace, limit, prefix, cursor);
    return new Response(list);
  }

  else if (Request.url === "http://localhost:8787/deleteworkerskvpairbykey") {
    const res = await Request.json();
    const { key } = res;
    await DeleteWorkersKVPairByKey(namespace, key);  

    return new Response(key)
  }

  else if (Request.url === "http://localhost:8787/getworkerskvvaluebykey") {
    const key = (await Request.json()).key;
    const res = await GetWorkersKVValueByKey(namespace, key); 

    return new Response(res);
  }

  else if (Request.url === "http://localhost:8787/deleteworkerskventries") {
    const res = await Request.json();
    const { keys } = res;
    const newKeys = keys.filter(x => x.length > 0);
    await DeleteWorkersKVEntries(namespace, newKeys);
    
    return new Response("Success")
  }
}  
}

const GetWorkersKVValueByKey = async (NAMESPACE, key) => {
  const val = await NAMESPACE.get(key);

  return val;
}

const WriteWorkersKVKeyValuePair = async (NAMESPACE, key, val) => {
  await NAMESPACE.put(key, val);

  return "Wrote Successfully"
}

const DeleteWorkersKVPairByKey = async (NAMESPACE, key) => {
  await NAMESPACE.delete(key);
  
  return "Delete Successfully"
}

const ListWorkersKVKeys = async (NAMESPACE, limit, prefix, cursor) => {
  const resp = await NAMESPACE.list({ limit, prefix, cursor });

  return JSON.stringify(resp.keys);
}

const DeleteWorkersKVEntries = async (NAMESPACE, keys) => {
  for (let key of keys) {
    await NAMESPACE.delete(key);
  } 

  return "Delete Successfully"
}


EOF

echo "wrangler.toml generated"

# generate wrangler.toml
cat <<EOF > wrangler.toml
main = "index.ts"

kv_namespaces = [
  { binding = "TEST_NAMESPACE1", id = "hello", preview_id = "world" },
]

workers_dev = true

compatibility_date = "2024-03-20"

port = 8787
EOF

echo "wrangler.toml generated"
