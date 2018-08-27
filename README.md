# vipnode

Connect instantly with your Ethereum Light Client to a premium VIPNode.

**Status**: v1 is ready and live at https://vipnode.org/, work started on v2 thanks to an Ethereum Foundation grant.

More details in this blog post: [An economic incentive for running Ethereum Full Nodes](https://medium.com/@shazow/an-economic-incentive-for-running-ethereum-full-nodes-ecc0c9ebe22)

## vipnode v1: Solo Node

### How does it work?

On the front-end, there's a smart contract,
[contracts/vipnode.sol](https://github.com/shazow/vipnode/blob/v1/contracts/vipnode.sol).

The smart contract keeps the state of which enode is registered and what the
expiration time is.

There is a DApp which allows people to register.

On the back-end, it's running a modified version of go-ethereum, the [patchset is
here](https://github.com/ethereum/go-ethereum/pull/16333).

The geth-vipnode is driven by some JavaScript which loads the smart contract and
monitors events of new registered members, see 
[run.js](https://github.com/shazow/vipnode/blob/v1/run.js).

## vipnode v2: Node Pools

A vipnode pool that third-party full-nodes can join and get proportional payout based on the light nodes they serve.

### How does it work?

- vipnode-host frontend: Registration process to join the vipnode pool.
- vipnode-client frontend: Registration process (can be a smart contract, or anything else) to associate a light client's enodeID with the account.
- vipnode-pool will act as a bootstrapping server, routing connecting vipnode light clients to the next available vipnode full node.
- vipnode-pool will keep track of which light client is connected to which full node, and other usage-related analytics.
- vipnode-pool will keep track of full node availability and capacity, in order to avoid routing light clients if the full node is full or down.
- vipnode-host will run on fulll nodes which will interface with the geth or parity RPC and keep track of which enodeIDs need to be whitelisted, and which ones are connected and for how long (from the host's perspective).
- vipnode-client will implement an vipnode-pool API to:
  1. Register the current enodeID (if not already registered)
  2. Send back the set of connected peers (to allow time-usage billing), from the client's perspective.


## License

MIT.
