<template>
  <div class="contract">
    <h2>Balance to pool.vipnode.org</h2>
    <ul class="messages" v-if="messages.length > 0">
      <li v-for="msg in messages" :class="msg.kind">{{msg.body}}</li>
    </ul>
    <form v-on:submit='submit' v-on:submit.prevent class="contract">
      <div v-if="active == null">
        <input type="submit" value="Load Account Status" :disabled="loading" class="button-primary"/>
      </div>
      <ul v-else>
        <li>Account: {{active.account}}</li>
        <li>Balance: {{active.balance.toString()}}</li>
      </ul>
    </form>
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
      enode: '',
      amount: '0.02',
      messages: [],
      pendingTx: '',
      enodetooltip: false,
      amounttooltip: false,
      accounts: [],
      active: null,
      networkID: "4",
      networkName: "Rinkeby",
    }
  },
  methods: {
    submit() {
      this.messages = [];
      this.loading = true;

      try {
        this.loadStatus(this.getContract(), function() {
          this.success('👍');
        }.bind(this));
      } catch(e) {
        this.error('Unexpected error occurred. Check console for more details.', e);
      } finally {
        this.loading = false;
      }
      return false; // Prevent submit
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

            this.active.balance = res;
          }.bind(this));

          // So deep.
          cb();
        }.bind(this));
      }.bind(this));
    },
  },
  components: { Tooltip },
}
</script>
