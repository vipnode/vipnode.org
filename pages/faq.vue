<template>
  <article id="faq">
    <div class="bumped-in">
      <h1>Frequently Asked Questions</h1>

      <h3>Why?</h3>
      <p>There are too many light clients on the Ethereum network and not enough full
          nodes to service them all. On a bad day, it can take several hours to finally
          connect to the network with a light client.</p>
      <p>vipnode creates an incentive for more people to run full nodes and improve the
          state of the Ethereum network as a whole.</p>

      <h3>Does it work with Parity light clients? What about older Geth clients?</h3>
      <p>Only geth v1.8.x and newer, for now.</p>

      <h3>Any guarantees? What's the SLA? (Service Level Agreement)</h3>
      <p>During the beta, there are no guarantees. There can be some downtime if
          resources get tight and the VPS need to be upgraded. I'm not expecting more than
          a few hours of downtime per month (but hopefully zero).</p>

      <h3>Neat, how does it work?</h3>
      <p>vipnode is running a modified go-ethereum node with a script that monitors the
          smart contract for new paying nodes. When you pay, it adds your NodeID to the
          trusted nodes set. When you connect with this NodeID, you get to bypass the
          normal server limits and get to the front of the line.</p>
      <p>Modifications are going to be submitted upstream once they're sufficiently
          tested.</p>

      <h3>How does vipnode relate to Infura?</h3>
      <p>Infura provides centralized gateways to various services. It's great! It allows apps to connect to it without running any Ethereum infrastructure.</p>
      <p>On the other hand, vipnode creates an incentive for more people to run valuable Ethereum infrastructure and serve more native clients in the peer-to-peer network.</p>
      </p>

      <h3>Can I run my own vipnode? What does it cost?</h3>
      <p>That's the goal! <a href="https://github.com/shazow/vipnode">Everything is open source</a>, but it's not packaged nicely yet.</p>
      <p>Right now I'm running it on Scaleway for about $30/mo, which should hopefully handle many dozens of peers.</p>
      <p>I'm collecting data on the resource requirements from this experiment which will
          help inform the pricing in the future.</p>
      <h3 id="connect">How do I connect to the vipnode?</h3>
      <p>Set your <code>&lt;datadir&gt;/geth/static-nodes.json</code> to:</p>

      <pre><code>[
    "enode://19b5013d24243a659bda7f1df13933bb05820ab6c3ebf6b5e0854848b97e1f7e308f703466e72486c5bc7fe8ed402eb62f6303418e05d330a5df80738ac974f6@163.172.138.100:30303?discport=30301"
]</code></pre>

      <p>and restart your Ethereum client.</p>
      <p>If you'd like to limit your client just to the vipnode, use the <code>--nodiscover</code>
        flag.</p>

      <h3 id="enodeID">How do I get my enode ID?</h3>
      <p><strong>When you start your Go Ethereum client, it prints out your enode ID.</strong> This encodes the public key of your node that can be used for authentication.</p>
      <p><strong>It looks like this</strong>:<br/>
        <code>enode://6f8a80d143…b39763a4c0@123.123.123.123:30303?discport=30301</code></p>
      <p><strong>Alternatively, if you have a console to a running geth node, you can run this to print your enode ID:</strong></br>
        <code>admin.nodeInfo.enode</code></p>

      <h3>Can I connect to a vipnode for free?</h3>
      <p>Yes! Each vipnode also allocates at least 25 slots to regular
          peers and several public light client peers. These numbers can
          change in the future, but the goal is to be a good citizen of the
          network and give back to everyone.</p>
      <p>Add this vipnode as a "static peer" and grab one of the regular peer slots.</p>

      <h3>My geth is stuck at "IPC endpoint opened", or I keep seeing "no suitable peers available"</h3>
      <p>If you didn't pay for vipnode (or your 30 days expired), then that means there
          aren't enough free connection slots available. You can keep waiting (it can take
          a few hours), or <a href="/#reserve">pay for vipnode access</a>.</p>
      <p>If you paid for vipnode, make sure:</p>
      <ol>
          <li>You're connecting from the same enode ID as you specified in your payment</li>
          <li>You added the vipnode enode to your <code>geth/static-nodes.json</code></li>
      </ol>
    </div>
  </article>
</template>

<script>
import Sponsors from "~/components/Sponsors.vue"
import Newsletter from "~/components/Newsletter.vue"

export default {
  components: { Sponsors, Newsletter },
}
</script>
