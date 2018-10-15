<template>
  <div class="contract">
    <h2>
      Balance to pool.vipnode.org
      <button class="button-primary" :disabled="loading" v-on:click="load">Reload Account Status</button>
    </h2>
    <ul class="messages" v-if="messages.length > 0">
      <li v-for="msg in messages" :class="msg.kind">{{msg.body}}</li>
    </ul>

    <div v-if="active">
      <p>Network: <strong>{{networkName}}</strong></p>
      <p>Account:
        <select v-model="active.account">
          <option v-for="a in accounts" :value="a">{{a}}</option>
        </select>
      </p>

      <form v-on:submit='whitelist' v-on:submit.prevent class="row">
        <input type="text" v-model="enode" value="" placeholder="enode://..." name="enode" class="enode"/>
        <input type="submit" :disabled="loading" value="Add Node" />
      </form>

      <p>
        <div class="balance">Balance: <span class="eth">{{formatEther(active.balance)}} ETH</span></div>
        <button v-if="active.balance > 0" :disabled="loading" v-on:click="requestWithdraw" style="width: 172px;">Request Withdraw</button>
      </p>

      <form v-on:submit='addBalance' v-on:submit.prevent class="row">
        <label class="eth"><input type="text" v-model="amount" value="0.2" placeholder="0.2" name="amount" class="amount"/></label>
        <input type="submit" :disabled="loading" value="Add Balance" />
      </form>
    </div>

    <div class="messages" v-if="pendingTx">
      <p class="success">
        Transaction submitted. It can take a few minutes. <a :href="txURL(pendingTx)" target="_blank">Watch it here.</a>
      </p>
    </div>

  </div>
</template>

<script>
import { providers, utils, Contract, Wallet } from "ethers";
import Tooltip from "~/components/Tooltip.vue"

const reNodeID = new RegExp('[0-9a-f]{128}');

function getContract(provider) {
  //const address = "TODO"; // Mainnet
  const address = "0xb2f8987986259facdc539ac1745f7a0b395972b1"; // Rinkeby
  const abi = [{"constant":true,"inputs":[],"name":"withdrawInterval","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_client","type":"address"},{"name":"_minBalance","type":"uint256"}],"name":"checkBalance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"operator","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"clients","outputs":[{"name":"balance","type":"uint256"},{"name":"timeLocked","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"forceWithdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_client","type":"address"},{"name":"_amount","type":"uint256"},{"name":"_release","type":"bool"}],"name":"opSettle","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"opWithdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"forceSettle","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"addBalance","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[{"name":"_operator","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"client","type":"address"},{"indexed":false,"name":"timeLocked","type":"uint256"}],"name":"ForceSettle","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"client","type":"address"},{"indexed":false,"name":"balance","type":"uint256"}],"name":"Balance","type":"event"}];
  return new Contract(address, abi, provider);
}

export default {
  data() {
    return {
      loading: false,
      pendingTx: false,
      amount: '0.02',
      enode: '',
      messages: [],
      accounts: [],
      active: null,
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

        await this.loadStatus(this.getContract());
      try {
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
      const msg = {
        account: this.active.account,
        authorizeNode: cleanEnode,
        timestamp: +new Date(),
      }
      const signer = this.provider.getSigner(this.active.account);
      try {
        const signedMsg = await signer.signMessage(JSON.stringify(msg));
        console.log(signedMsg);
        // XXX: JSONRPC to pool whitelist
      } catch(err) {
        return this.error('Failed to sign message.', err);
      }

    },
    requestWithdraw() {
      this.error("request withdraw: not implemented yet");
    },
    async addBalance() {
      const weiAmount = utils.parseUnits(this.amount, 'ether');
      const contract = this.getContract();
      if (!contract) return;

      try {
        this.pendingTx = await contract.addBalance.sendTransaction({value: weiAmount});
      } catch(err) {
        if (err.message && err.message.indexOf('User denied transaction signature.') !== -1)  {
          return this.warning('Transaction aborted. Try again?')
        }
        return this.error('Smart contract transaction failed.', err);
      }
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
        this.contract = getContract(this.provider);
        return this.contract;
      } catch(err) {
        this.error('Failed to load smart contract. Make sure you have a web3-enabled browser.', err);
        return;
      }
    },
    async loadStatus(contract) {
      if (!contract) return;
      if (web3 === undefined) {
        return this.error("Please use a web3-enabled browser to execute this smart contract.");
      }

      const network = await this.provider.getNetwork();
      if (String(network.chainId) !== this.networkID) {
        return this.error("Please switch your wallet from "+ network.name +" to "+ this.networkName +".");
      }

      const accounts = await this.provider.listAccounts();
      if (accounts.length === 0) {
        return this.error("Please unlock your wallet first.");
      }
      this.accounts = accounts;
      this.active = {
        account: accounts[0],
        balance: 0,
      };

      let client;
      try {
        client = await contract.clients(this.active.account)
      }catch (err) {
        return this.error('Failed to load client balance.', err);
      }

      this.active.balance = client[0];
      this.active.timelocked = client[1];
    },
  },
  mounted() {
    this.load();
    this.enode = this.$route.query.enode;
  },
  computed: {
    provider() {
      return new providers.Web3Provider(web3.currentProvider);
    },
  },
  components: { Tooltip },
}
</script>
