<template>
  <form v-on:submit='submit' v-on:submit.prevent class="contract">
    <h2>Try the Vipnode v1 MVP and become a VIP!</h2>
    <ul class="messages" v-if="messages.length > 0">
      <li v-for="msg in messages" :class="msg.kind">{{msg.body}}</li>
    </ul>
    <label for="enode">What is your enode id?
      <tooltip>
        <p><strong>When you start your Go Ethereum client, it prints out your enode ID.</strong> This encodes the public key of your node that can be used for authentication.</p>
        <p><strong>It looks like this</strong>:<br/>
          <code>enode://6f8a80d143…b39763a4c0@123.123.123.123:30303?discport=30301</code></p>
        <p><strong>Alternatively, if you have a console to a running geth node, you can run this to print your enode ID:</strong></br>
          <code>admin.nodeInfo.enode</code></p>
      </tooltip>
      <p>
        <input type="text" v-model="enode" placeholder="enode://..." name="enode" class="enode"/>
      </p>
    </label>
    <label for="amount">What would you like to pay for 30 days of access?
      <tooltip>
        <p>Pay what you want while vipnode is in beta &#8212; amount will not affect your vipnode status. You will receive a reserved peer slot on our VIP network, allowing you to bypass the server’s limits even if the server is full.<!--XXX: Update this with better text.--></p>
      </tooltip>
      <p>
        <input type="text" v-model="amount" value="0.2" placeholder="0.2" name="amount" class="amount"/><span> in ETH</span>
      </p>
    </label>
    <p>
      <input type="submit" value="Execute Smart Contract" :disabled="loading" class="button-primary"/>
      <small>(requires <a href="https://metamask.io/" target="_blank">a web3-enabled browser</a>)</small>
    </p>
    <div class="messages" v-if="pendingTx">
      <p class="success">
        Transaction submitted. It can take a few minutes. <a :href="'https://etherscan.io/tx/' + pendingTx" target="_blank">Watch it here.</a>
      </p>
    </div>
    <p>
      Once your node is registered, <a href="/faq#connect">follow the connection instructions</a>.
    </p>
  </form>
</template>

<script>
import Tooltip from "~/components/Tooltip.vue"

const reNodeID = new RegExp('[0-9a-f]{128}');

function getContract() {
  const address = "0x10d4909cacb1ca5ca7fc1a2a52e5f94373f0c594"; // Mainnet
  //const address = "0x09e6acdbf002bcc993e03b7b6c6f461ca32519c1"; // Testnet
  const contract = web3.eth.contract([{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"limitRegistered","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"interval","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"numRegistered","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"weiPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_weiPrice","type":"uint256"},{"name":"_interval","type":"uint256"},{"name":"_limitRegistered","type":"uint256"}],"name":"config","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_enode","type":"string"}],"name":"register","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[{"name":"_contractOwner","type":"address"},{"name":"_withdrawWallet","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"enode","type":"string"},{"indexed":false,"name":"timeExpires","type":"uint256"}],"name":"Register","type":"event"}]);
  return contract.at(address);
}

export default {
  name: "Contract",
  data() {
    return {
      loading: false,
      enode: '',
      amount: '0.02',
      messages: [],
      pendingTx: '',
    }
  },
  methods: {
    submit() {
      this.messages = [];
      this.loading = true;

      try {
        this.register(this.enode, this.amount);
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
      if (web3 === undefined) {
        return this.error("Please use a web3-enabled browser to execute this smart contract.");
      }

      web3.version.getNetwork(function(err, netId) {
        if (netId !== "1") {
          return this.error("Please switch your wallet to the mainnet.");
        }

        web3.eth.getAccounts(function(err, res) {
          if (res.length === 0) {
            return this.error("Please unlock your wallet first.");
          }

          contract.limitRegistered.call(function(err, limit) {
            if (err) {
              return this.error('Failed to load vipnode status.', err);
            }

            limit = Number(limit);
            contract.numRegistered.call(function(err, num) {
              if (err) {
                return this.error('Failed to load vipnode status.', err);
              }

              num = Number(num);
              if (limit <= num) {
                return this.warning('vipnode is full! Please email the owner and politely ask to open more slots.')
              }
              this.info('Status loaded: ' + (limit-num) + ' slots currently available.');

              // So deep.
              cb();
            }.bind(this));
          }.bind(this));
        }.bind(this));
      }.bind(this));
    },
    register(enode, amount) {
      const contract = this.getContract();
      if (!contract) return;

      const weiAmount = web3.toWei(amount, 'ether');
      const enodeParts = enode.match(reNodeID);
      if (!enodeParts || enodeParts.length !== 1) {
        return this.error('Invalid enodeID: Should be 128 hex characters.')
      }
      const cleanEnode = enodeParts[0];

      this.loadStatus(contract, function() {
        contract.register.sendTransaction(cleanEnode, {value: weiAmount}, function(err, res) {
          if (err) {
            if (err.message && err.message.indexOf('User denied transaction signature.') !== -1)  {
              return this.warning('Transaction aborted. Try again?')
            }
            return this.error('Smart contract transaction failed.', err);
          }
          this.pendingTx = res;
          this.success('👍');
        }.bind(this));
      }.bind(this));
    },
  },
  components: { Tooltip },
}
</script>
