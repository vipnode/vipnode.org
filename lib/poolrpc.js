//const _poolRPCendpoint = "https://pool.vipnode.org/";
//const _poolRPCendpoint = "http://localhost:8080/";
const _poolRPCendpoint = process.env.poolAPI;
let _rpcID = 1;

async function PoolRPC(method, params) {
  const resp = await fetch(_poolRPCendpoint, {
    method: 'POST',
    //cors: 'same-origin',
    body: JSON.stringify({
      "id": _rpcID++,
      "method": method,
      "params": params,
    }),
  });
  const data = await resp.json();
  if (data.error) {
    throw new Error(data.error.message);
  }
  return data.result;
}

async function SignedPoolRPC(signer, method, params) {
  const msg = method + JSON.stringify(params);
  const signedParams = await signer.signMessage(msg);
  return PoolRPC(method, [signedParams, ...params]);
}

let _counter = 1;

function GetNonce() {
  // Our nonces are unix time in nanoseconds. Since JavaScript Date only gives
  // us second precision, we add a counter for the nanosecond component to
  // avoid collisions.
  let now = 1000000 * (+new Date());
  return now + _counter++;
}

export default {
  RPC: PoolRPC,
  SignedRPC: SignedPoolRPC,
  GetNonce: GetNonce,
}
