<template>
  <div id="contract-pool">
    <h2>Balance for <span class="hl1">pool.vipnode.org</span></h2>
    <button class="button button-small" :disabled="loading" v-on:click="load">Reload Account Status</button>
    <p>This feature is experimental. Don't use any money you're not willing to donate.</p>
    <div class="full-width white-background">
      <div class="contract">
        <ul class="messages" v-if="messages.length > 0">
          <li v-for="msg in messages" :class="msg.kind" v-html="msg.body"></li>
        </ul>

        <div v-if="active">
          <h3>Current Network</h3>
          <p>Network: <strong>{{networkName}}</strong></p>
          <p>Account:
            <select v-model="active.account">
              <option v-for="a in accounts" :value="a">{{a}}</option>
            </select>
          </p>

          <div class="balance-form">
            <h3>Balance</h3>
            <div>
              Balance: <span class="eth">{{formatEther(balance.credit || "0")}}</span>
            </div>
            <div>
              Deposit: <span class="eth">{{formatEther(active.balance)}}</span>
              <form v-if="showAddDeposit" v-on:submit='addBalance' v-on:submit.prevent>
                <label class="eth"><input type="text" v-model="amount" value="0.2" placeholder="0.2" name="amount" class="amount"/></label>
                <input type="submit" :disabled="loading" value="Confirm Deposit" class="button-primary"/>
                <input type="reset" value="Cancel" v-on:click="showAddDeposit=false" />
              </form>
              <span v-else>
                <button v-on:click="showAddDeposit=!showAddDeposit">Add Deposit</button>
                <button v-if="active.balance > 0" :disabled="loading" v-on:click="requestWithdraw">Request Withdraw</button>
              </span>
            </div>
          </div>

          <div class="node-ids">
            <h3>Authorized Nodes</h3>
            <ul v-if="nodeIDs.length > 0">
              <li v-for="id in nodeIDs">{{id}}…</li>
            </ul>
            <p v-else>Add your first client node to give it permission to use your account's balance.</p>

            <form v-on:submit='whitelist' v-on:submit.prevent class="row">
              <input type="text" v-model="enode" value="" placeholder="enode://..." name="enode" class="enode"/>
              <input type="submit" :disabled="loading" value="Add Node" class="button-primary"/>
            </form>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { providers, utils, Contract, Wallet } from "ethers";
import Tooltip from "~/components/Tooltip.vue"
import abi from "./ContractPool_abi.json";

const reNodeID = new RegExp('[0-9a-f]{128}');

function getContract(provider) {
  //const address = "TODO"; // Mainnet
  const address = "0x0244998de1c9f072aa560b5c0e5221ed7be0b1ec"; // Rinkeby
  return new Contract(address, abi, provider);
}

const _poolRPCendpoint = "https://pool.vipnode.org/";
//const _poolRPCendpoint = "http://localhost:8080/"; // TODO: Switch to nuxt.config.js
let _rpcID = 1;

async function poolRPC(method, params) {
  const resp = await fetch(_poolRPCendpoint, {
    method: 'POST',
    cors: 'same-origin',
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

async function signedPoolRPC(signer, method, params) {
  const msg = method + JSON.stringify(params);
  const signedParams = await signer.signMessage(msg);
  return poolRPC(method, [signedParams, ...params]);
}

function hasWeb3() {
  return window.web3 !== undefined || window.ethereum !== undefind;
}

export default {
  data() {
    return {
      showAddDeposit: false,
      loading: false,
      amount: '0.02',
      enode: '',
      messages: [],
      accounts: [],
      nodeIDs: [],
      active: null,
      balance: {},
      networkID: "4",
      networkName: "Rinkeby",
    }
  },
  methods: {
    txURL(tx) {
      return "https://rinkeby.etherscan.io/tx/" + tx;
    },
    formatEther: utils.formatEther,
    async load() {
      this.messages = [];
      this.loading = true;

      try {
        await this.loadWallet();
      } catch(e) {
        this.error('Failed to load wallet. Make sure you have a web3-enabled browser.', err);
        this.loading = false;
        return false;
      }

      try {
        await this.loadContractStatus();
        await this.loadPoolStatus();
      } catch(e) {
        this.error('Unexpected error occurred. Check console for more details.', e);
      } finally {
        this.loading = false;
      }
      return false; // Prevent submit
    },
    async whitelist() {
      const enodeParts = this.enode.match(reNodeID);
      if (!enodeParts || enodeParts.length !== 1) {
        return this.error('Invalid enodeID: Should be 128 hex characters.')
      }
      const cleanEnode = enodeParts[0];
      const method = "pool_addNode";
      const params = [
        this.active.account, // Wallet
        +new Date(), // Nonce
        cleanEnode, // NodeID
      ];
      const signer = this.provider.getSigner(this.active.account);
      try {
        await signedPoolRPC(signer, method, params)
      } catch(err) {
        // TODO: Handle specific errors
        return this.error('Failed to authorize node.', err);
      }

      this.success("Authorized node.");
      await this.loadPoolStatus();
    },
    async requestWithdraw() {
      if(!confirm("Withdraw fees will be deducted from your balance during settlement. Continue?")) {
        return
      }
      const method = "pool_withdraw";
      const params = [
        this.active.account, // Wallet
        +new Date(), // Nonce
      ];
      const signer = this.provider.getSigner(this.active.account);
      try {
        await signedPoolRPC(signer, method, params)
      } catch(err) {
        return this.error('Failed to request withdraw.', err);
      }

      this.success("Balance settlement requested, it should process within a few days.");
    },
    async addBalance() {
      const weiAmount = utils.parseUnits(this.amount, 'ether');
      const contract = this.getContract();
      if (!contract) return;

      let tx;
      try {
        tx = await this.contract.addBalance({value: weiAmount});
      } catch(err) {
        if (err.message && err.message.indexOf('User denied transaction signature.') !== -1)  {
          return this.warning('Transaction aborted. Try again?')
        }
        return this.error('Smart contract transaction failed.', err);
      }

      this.showAddDeposit = false;
      this.success("Deposit transaction submitted, it can take a few minutes: <a href=\"" + this.txURL(tx.hash)+ "\">"+ tx.hash +"</a>")
      // TODO: Subscribe to event for update or autoreload after some time?
    },
    error(msg, exc) {
      this.messages.push({body: msg, kind: 'error'});
      if (exc !== undefined) console.error(exc);
    },
    success(msg) {
      this.messages = [
        {body: msg, kind: 'success'},
      ];
    },
    warning(msg) {
      this.messages.push({body: msg, kind: 'warning'});
    },
    info(msg) {
      this.messages.push({body: msg, kind: 'info'});
    },
    getContract() {
      if (this.contract) return this.contract;
      try {
        const signer = this.provider.getSigner(this.active.account);
        this.contract = getContract(signer);
        return this.contract;
      } catch(err) {
        this.error('Failed to load smart contract. Make sure you have a web3-enabled browser.', err);
        return;
      }
    },
    async loadWallet() {
      if (!hasWeb3()) {
        return this.error("Please use a web3-enabled browser to execute this smart contract.");
      }
      let accounts = [];
      if (window.ethereum) {
        accounts = await window.ethereum.enable();
      }

      const network = await this.provider.getNetwork();
      if (String(network.chainId) !== this.networkID) {
        return this.error("Please switch your wallet from "+ network.name +" to "+ this.networkName +".");
      }

      if (accounts.length === 0) {
        const accounts = await this.provider.listAccounts();
      }
      if (accounts.length === 0) {
        return this.error("Please unlock your wallet first.");
      }
      this.accounts = accounts;
      this.active = {
        account: accounts[0],
        balance: 0,
      };

      const signer = this.provider.getSigner(this.active.account);
      this.contract = getContract(signer);
    },
    async loadContractStatus() {
      try {
        const client = await this.contract.accounts(this.active.account)
        this.active.balance = client[0];
        this.active.timelocked = client[1];
      }catch (err) {
        return this.error('Failed to load client balance.', err);
      }
    },
    async loadPoolStatus() {
      if (this.active === null) {
        return this.error("Failed to load pool status: No account detected, please unlock your wallet first.");
      }
      try {
        const r = await poolRPC("pool_status", [this.active.account]);
        this.balance = r.balance;
        this.nodeIDs = r.node_short_ids;
      } catch (err) {
        return this.error('Failed to load pool status.', err);
      }
    },
  },
  mounted() {
    this.load();
    this.enode = this.$route.query.enode;
  },
  computed: {
    provider() {
      if (window.ethereum) {
        return new providers.Web3Provider(window.ethereum);
      }
      if (window.web3) {
        return new providers.Web3Provider(window.web3.currentProvider);
      }
      throw new Error("Please use a web3-enabled browser");
    },
  },
  components: { Tooltip },
}
</script>
