<template>
  <div class="contract">
    <h2>
      Balance to pool.vipnode.org
      <button class="button-primary" :disabled="loading" v-on:click="load">Reload Account Status</button>
    </h2>
    <ul class="messages" v-if="messages.length > 0">
      <li v-for="msg in messages" :class="msg.kind">{{msg.body}}</li>
    </ul>
    <ul v-if="active">
      <li>Network: <strong>{{networkName}}</strong></li>
      <li>Account:
        <select v-model="active.account">
          <option v-for="a in accounts" :value="a">{{a}}</option>
        </select>
      </li>
      <li>
        Balance: <span class="eth">{{fromWei(active.balance, 'ether')}} ETH</span>
        <button v-if="active.balance > 0" :disabled="loading" v-on:click="requestWithdraw">Request Withdraw</button>
      </li>
    </ul>
    <div v-if="active">
      <input type="text" v-model="amount" value="0.2" placeholder="0.2" name="amount" class="amount"/><span> in ETH</span> <button :disabled="loading" v-on:click="addBalance">Add Balance</button>
    </div>
    <div class="messages" v-if="pendingTx">
      <p class="success">
        Transaction submitted. It can take a few minutes. <a :href="'https://etherscan.io/tx/' + pendingTx" target="_blank">Watch it here.</a>
      </p>
    </div>
  </div>
</template>

<script>
import Tooltip from "~/components/Tooltip.vue"

const reNodeID = new RegExp('[0-9a-f]{128}');

function getContract() {
  //const address = "TODO"; // Mainnet
  const address = "0xb2f8987986259facdc539ac1745f7a0b395972b1"; // Rinkeby
  const contract = web3.eth.contract([{"constant":true,"inputs":[],"name":"withdrawInterval","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"operator","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"clients","outputs":[{"name":"balance","type":"uint256"},{"name":"timeLocked","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_operator","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"client","type":"address"},{"indexed":false,"name":"timeLocked","type":"uint256"}],"name":"ForceSettle","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"client","type":"address"},{"indexed":false,"name":"balance","type":"uint256"}],"name":"Balance","type":"event"},{"constant":true,"inputs":[{"name":"_client","type":"address"},{"name":"_minBalance","type":"uint256"}],"name":"checkBalance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"addBalance","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"forceSettle","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"forceWithdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_client","type":"address"},{"name":"_amount","type":"uint256"},{"name":"_release","type":"bool"}],"name":"opSettle","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"opWithdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]);
  return contract.at(address);
}

export default {
  data() {
    return {
      loading: false,
      pendingTx: false,
      amount: '0.02',
      messages: [],
      accounts: [],
      active: null,
      networkID: "4",
      networkName: "Rinkeby",
    }
  },
  methods: {
    fromWei(n) {
      return web3.fromWei(n, 'ether').toString();
    },
    load() {
      this.messages = [];
      this.loading = true;

      try {
        this.loadStatus(this.getContract(), function() {
        }.bind(this));
      } catch(e) {
        this.error('Unexpected error occurred. Check console for more details.', e);
      } finally {
        this.loading = false;
      }
      return false; // Prevent submit
    },
    requestWithdraw() {
      this.error("request withdraw: not implemented yet");
    },
    addBalance() {
      const weiAmount = web3.toWei(this.amount, 'ether');
      const contract = this.getContract();
      if (!contract) return;

      contract.addBalance.sendTransaction({value: weiAmount}, function(err, res) {
        if (err) {
          if (err.message && err.message.indexOf('User denied transaction signature.') !== -1)  {
            return this.warning('Transaction aborted. Try again?')
          }
          return this.error('Smart contract transaction failed.', err);
        }
        this.pendingTx = res;
      }.bind(this));
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
        this.contract = getContract();
        return this.contract;
      } catch(e) {
        this.error('Failed to load smart contract. Make sure you have a web3-enabled browser.', e);
        return;
      }
    },
    loadStatus(contract, cb) {
      if (!contract) return;
      if (web3 === undefined) {
        return this.error("Please use a web3-enabled browser to execute this smart contract.");
      }

      web3.version.getNetwork(function(err, netId) {
        if (netId !== this.networkID) {
          return this.error("Please switch your wallet to "+ this.networkName +".");
        }

        web3.eth.getAccounts(function(err, res) {
          if (res.length === 0) {
            return this.error("Please unlock your wallet first.");
          }
          this.accounts = res;
          this.active = {
            account: res[0],
            balance: 0,
          };

          contract.clients.call(this.active.account, function(err, res) {
            if (err) {
              return this.error('Failed to load client balance.', err);
            }

            this.active.balance = res[0];
            this.active.timelocked = res[1];
          }.bind(this));

          // So deep.
          cb();
        }.bind(this));
      }.bind(this));
    },
  },
  mounted() {
    this.load();
  },
  components: { Tooltip },
}
</script>
