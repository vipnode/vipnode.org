<template>
  <article id="faq">
    <div class="bumped-in">
      <h1>Frequently Asked Questions</h1>

      <h3>Why?</h3>
      <p>There are too many light clients on the Ethereum network and not enough full
          nodes to service them all. On a bad day, it can take several hours to finally
          connect to the network with a light client.</p>
      <p>Vipnode creates an incentive for more people to run full nodes and improve the
          state of the Ethereum network as a whole.</p>

      <h3>Does it work with Parity light clients? What about older Geth clients?</h3>
      <p>Vipnode is tested against geth v1.8.x and newer. It should work with
        recent Parity versions if there are any Parity hosts available.
        <a href="https://github.com/vipnode/vipnode/issues">Please open an issue</a>
        if you run into problems.</p>

      <h3>Any guarantees? What's the SLA? (Service Level Agreement)</h3>
      <p>During the beta, there are no guarantees. There can be some downtime if
          resources get tight and the VPS need to be upgraded. I'm not expecting more than
          a few hours of downtime per month (but hopefully zero).</p>

      <h3>Neat, how does it work?</h3>
      <p>The vipnode agent runs along side the node clients and hosts. When
        your client requests to connect, vipnode will whitelist your NodeID on
        several candidate hosts and tell your client to connect to them. This
        will let your client bypass the normal server limits and get to the
        front of the line.

      <h3>How does vipnode relate to Infura?</h3>
      <p>Infura provides centralized gateways to various services. It's great! It allows apps to connect to it without running any Ethereum infrastructure.</p>
      <p>On the other hand, vipnode creates an incentive for more people to run valuable Ethereum infrastructure and serve more native clients in the peer-to-peer network.</p>
      </p>

      <h3>Can I run my own vipnode? What does it cost?</h3>
      <p>Yes! <a href="https://github.com/vipnode">Everything is open source</a>, grab the latest binary release and <a href="https://github.com/vipnode/vipnode#readme">give it a try</a>.</p>
      <p>Anecdotally, it costs me about $30/mo to run a full Geth node on Scaleway which should handle many dozens of light clients (possibly hundreds).
      <p>I'm collecting data on the resource requirements from this experiment
        which will help inform the pricing in the future.</p>

      <h3>Can I connect to a vipnode for free?</h3>
      <p>Yes! Each vipnode host is also a regular node that connects to normal
        peers. Vipnode clients get special priority, but it does not prevent
        the node from serving non-paying peers for free.</p>

      <h3 id="terminal">Why do I have to use a terminal? Is there a GUI app?</h3>
      <p>
        The <a href="https://github.com/vipnode/vipnode#readme">vipnode
          agent</a> is a reference implementation of a protocol that anyone can
        implement. In fact, the client protocol is very simple and hopefully we
        can convince your favourite wallet to implement it soon.
      </p>
      <p>
        Once a wallet implements the vipnode protocol, all of the details can
        be entirely automated away. You don't even need to know you're using
        vipnode.
      </p>

      <h3>Other questions?</h3>
      <p>
        <a href="https://github.com/vipnode/vipnode.org/issues/new">Please open an issue here</a> with any unanswered questions.
      </p>
    </div>
  </article>
</template>

<script>
import Sponsors from "~/components/Sponsors.vue"
import Newsletter from "~/components/Newsletter.vue"

export default {
  components: { Sponsors, Newsletter },
  head() {
    return {
      title: "FAQ",
    }
  }
}
</script>
