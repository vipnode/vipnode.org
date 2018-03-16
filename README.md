# vipnode

Connect instantly with your Ethereum Light Client to a premium VIPNode.

**Status**: Beta. It's functional but the code is changing.

Try it here: https://vipnode.shazow.net/


## How does it work?

On the front-end, there's a smart contract,
[contracts/vipnode.sol](https://github.com/shazow/vipnode/blob/master/contracts/vipnode.sol).

The smart contract keeps the state of which enode is registered and what the
expiration time is.

There is a DApp which allows people to register.

On the back-end, it's running a modified version of go-ethereum, the [patchset is
here](https://github.com/shazow/go-ethereum/pull/2). I plan to submit these
changes upstream once vipnode's requirements are fleshed out.

The geth-vipnode is driven by some JavaScript which loads the smart contract and
monitors events of new registered members, see 
[run.js](https://github.com/shazow/vipnode/blob/master/run.js).


## How do I run my own?

Right now, the code is changing so it's not packaged up nicely for other people.
If you're technical enough, you can try reproducing it from the "How does it
work?" overview above.


## Roadmap

Smart-contract powered full node that whitelists registered members so that
their light clients can connect instantly.

- [x] Smart contract for people to join the vipnode.
- [x] User-friendly DApp frontend for the smart contract ([vipnode.shazow.net](https://vipnode.shazow.net/))
- [x] Fix go-ethereum not respecting trusted node set for light clients. ([PR #16189](https://github.com/ethereum/go-ethereum/pull/16189))
- [x] Modified geth capable of dynamically adjusting trusted nodes set. ([Progress PR, not submitted yet](https://github.com/shazow/go-ethereum/pull/2))
- [x] geth console javascript (otto-friendly) driver for monitoring smart
      contract and adjusting trusted slots.
- [x] DApp "node is full" message.
- [ ] DApp should announce how many slots are available, maybe provide vipnode live stats in general.
- [ ] Package it up so other people can run their own vipnode.


### Future ideas

- **vipnode off-chain**: For the current featureset, the smart contract is not very necessary. Could do the subscription app off-chain, but still accept ETH for payments (or even Stripe or whatever). Ideally this would be a standalone Go binary that you run next to your full node.
- **vipnode pool**: A single vipnode pool (vippool?) that many full-node hosts can join and get proportional payout for how many light nodes they serve (and for how long). This is tricky to make a good user experience without requiring people to run custom clients. The current thought is to make a vipnode bootstrap server to load balance across many vipnodes, and a custom ethstats server that clients can use to track how much time each client spends on which vipnode to figure out appropriate payouts.


## License

MIT.
